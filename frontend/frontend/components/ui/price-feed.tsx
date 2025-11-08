"use client";
import { useState, useEffect, useRef } from "react";
import { ethers } from "ethers";

const aggregatorV3InterfaceABI = [
    {
        inputs: [],
        name: "latestRoundData",
        outputs: [
            { internalType: "uint80", name: "roundId", type: "uint80" },
            { internalType: "int256", name: "answer", type: "int256" },
            { internalType: "uint256", name: "startedAt", type: "uint256" },
            { internalType: "uint256", name: "updatedAt", type: "uint256" },
            { internalType: "uint80", name: "answeredInRound", type: "uint80" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "description",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
    },
];

const CHAINLINK_ETH_USD_PRICE_FEED = "0x694AA1769357215DE4FAC081bf1f309aDC325306";


const RPC_ENDPOINTS = [
    "https://ethereum-sepolia-rpc.publicnode.com",
    "https://sepolia.gateway.tenderly.co",
];

export const PriceFeed = () => {
    const [price, setPrice] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const providerRef = useRef<ethers.providers.JsonRpcProvider | null>(null);
    const contractRef = useRef<ethers.Contract | null>(null);


    const initializeProvider = async (): Promise<ethers.providers.JsonRpcProvider> => {
        for (const rpcUrl of RPC_ENDPOINTS) {
            try {
                const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
                await provider.getBlockNumber();
                return provider;
            } catch (err) {
                console.warn(`Failed to connect to ${rpcUrl}, trying next...`);
                continue;
            }
        }
        throw new Error("Failed to connect to any RPC endpoint");
    };

    useEffect(() => {
        let isMounted = true;

        const setupAndFetch = async () => {
            try {
                                const provider = await initializeProvider();
                if (!isMounted) return;

                providerRef.current = provider;


                const priceFeedContract = new ethers.Contract(
                    CHAINLINK_ETH_USD_PRICE_FEED,
                    aggregatorV3InterfaceABI,
                    provider
                );
                contractRef.current = priceFeedContract;

                const fetchPrice = async () => {
                    if (!isMounted || !contractRef.current) return;

                    try {
                        setError(null);
   
                        const [roundData, decimals] = await Promise.all([
                            contractRef.current.latestRoundData(),
                            contractRef.current.decimals(),
                        ]);


                        if (!roundData || roundData.answer === null || roundData.answer === undefined) {
                            throw new Error("Invalid price data received");
                        }

 
                        const currentTime = Math.floor(Date.now() / 1000);
                        const updatedAt = Number(roundData.updatedAt);
                        const stalenessThreshold = 3600; // 1 hour in seconds

                        if (currentTime - updatedAt > stalenessThreshold) {
                            console.warn("Price data is stale");
                        }

           
                        const priceValue = ethers.utils.formatUnits(roundData.answer, decimals);
                        const priceNumber = parseFloat(priceValue);

                        if (isNaN(priceNumber) || priceNumber <= 0) {
                            throw new Error("Invalid price value");
                        }

                        if (isMounted) {
                            setPrice(priceNumber.toFixed(2));
                            setLastUpdated(new Date());
                            setLoading(false);
                            console.log(`ETH/USD Price: $${priceNumber.toFixed(2)} (Updated: ${new Date(updatedAt * 1000).toLocaleString()})`);
                        }
                    } catch (err: any) {
                        console.error("Error fetching price:", err);
                        if (isMounted) {
                            setError(err.message || "Failed to fetch price");
                            setLoading(false);
                        }
                    }
                };


                await fetchPrice();
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
                intervalRef.current = setInterval(fetchPrice, 30000);

            } catch (err: any) {
                console.error("Error initializing price feed:", err);
                if (isMounted) {
                    setError(err.message || "Failed to initialize price feed");
                    setLoading(false);
                }
            }
        };

        setupAndFetch();

        return () => {
            isMounted = false;
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <div className="flex flex-col items-end gap-1">
            <div className="text-m text-gray-500">ETH/USD</div>
            {loading && !error && (
                <div className="text-m text-gray-600 animate-pulse">Loading...</div>
            )}
            {error && (
                <div className="text-m text-red-600" title={error}>
                    Error
                </div>
            )}
            {price && !error && (
                <div className="flex flex-col items-end">
                    <div className="text-m font-semibold text-green-600">
                        ${price}
                    </div>
                    {lastUpdated && (
                        <div className="text-m text-gray-400">
                            {lastUpdated.toLocaleTimeString()}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
