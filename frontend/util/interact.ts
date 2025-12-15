import { ethers } from 'ethers';

// LinkPayWormhole Contract Address - Wormhole CCTP Version
export const PAYROLL_CONTRACT_ADDRESS = "0xc10559298Ae52dcCa03BfE065d803Cb23FB879e5";

// USDC Contract Address on Base Sepolia
export const USDC_CONTRACT_ADDRESS = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";

// LinkPayWormhole ABI
export const PAYROLL_ABI = [{"inputs":[{"internalType":"address","name":"_usdc","type":"address"},{"internalType":"address","name":"_feewallet","type":"address"},{"internalType":"uint256","name":"_registrationFee","type":"uint256"},{"internalType":"address","name":"_sender","type":"address"},{"internalType":"address","name":"_avalancheReceiver","type":"address"},{"internalType":"uint16","name":"_avalancheChainId","type":"uint16"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"companyId","type":"uint256"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"CompanyRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"companyId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"employeeId","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"address","name":"wallet","type":"address"},{"indexed":false,"internalType":"uint256","name":"salary","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nextPayDate","type":"uint256"}],"name":"EmployeeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"companyId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"employeeId","type":"uint256"}],"name":"EmployeeDeactivated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"companyId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"employeeId","type":"uint256"}],"name":"EmployeeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newInterval","type":"uint256"}],"name":"IntervalUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"companyId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"employeeId","type":"uint256"},{"indexed":true,"internalType":"address","name":"wallet","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"companyId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"employeeId","type":"uint256"},{"indexed":true,"internalType":"address","name":"wallet","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint64","name":"destChain","type":"uint64"},{"indexed":false,"internalType":"address","name":"receiver","type":"address"}],"name":"PaymentScheduled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"RegistrationFeeUpdated","type":"event"},{"inputs":[{"internalType":"uint256","name":"_companyId","type":"uint256"}],"name":"activateCompany","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"address","name":"_wallet","type":"address"},{"internalType":"uint64","name":"_destinationChainSelector","type":"uint64"},{"internalType":"address","name":"_receiverContract","type":"address"},{"internalType":"uint256","name":"_salary","type":"uint256"}],"name":"addEmployee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_companyId","type":"uint256"},{"internalType":"uint256","name":"_employeeId","type":"uint256"}],"name":"adminDeactivateEmployee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"avalancheChainId","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"avalancheReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"","type":"bytes"}],"name":"checkUpkeep","outputs":[{"internalType":"bool","name":"upkeepNeeded","type":"bool"},{"internalType":"bytes","name":"performData","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"companies","outputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint256","name":"registrationDate","type":"uint256"},{"internalType":"uint256","name":"companyId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"companyIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"companyOfOwner","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_companyId","type":"uint256"}],"name":"deactivateCompany","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_employeeId","type":"uint256"}],"name":"deactivateEmployee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositFees","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"employees","outputs":[{"internalType":"uint256","name":"companyId","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint64","name":"destinationChainSelector","type":"uint64"},{"internalType":"address","name":"receiverContract","type":"address"},{"internalType":"uint256","name":"salary","type":"uint256"},{"internalType":"uint256","name":"nextPayDate","type":"uint256"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint256","name":"employeeId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"feeBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCompanyIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_employeeId","type":"uint256"}],"name":"getEmployee","outputs":[{"internalType":"uint256","name":"companyId","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint64","name":"destinationChainSelector","type":"uint64"},{"internalType":"address","name":"receiverContract","type":"address"},{"internalType":"uint256","name":"salary","type":"uint256"},{"internalType":"uint256","name":"nextPayDate","type":"uint256"},{"internalType":"bool","name":"active","type":"bool"},{"internalType":"uint256","name":"employeeId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_companyId","type":"uint256"}],"name":"getEmployeesOfCompany","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"interval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastCheckedCompanyIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastCheckedEmployeeIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextCompanyId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextEmployeeId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"performData","type":"bytes"}],"name":"performUpkeep","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"quote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"registerCompany","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"registrationFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sender","outputs":[{"internalType":"contract ICrossChainSender","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_interval","type":"uint256"}],"name":"setInterval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setRegistrationFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenTransferor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_employeeId","type":"uint256"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"address","name":"_wallet","type":"address"},{"internalType":"uint64","name":"_destinationChainSelector","type":"uint64"},{"internalType":"address","name":"_receiverContract","type":"address"},{"internalType":"uint256","name":"_salary","type":"uint256"},{"internalType":"uint256","name":"_nextPayDate","type":"uint256"},{"internalType":"bool","name":"_active","type":"bool"}],"name":"updateEmployee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdc","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

// ERC20 ABI (for USDC approval)
export const ERC20_ABI = [
  "function approve(address spender, uint256 amount) external returns (bool)",
  "function allowance(address owner, address spender) external view returns (uint256)",
  "function balanceOf(address account) external view returns (uint256)",
  "function transfer(address to, uint256 amount) external returns (bool)"
];

// Global variables
let provider: ethers.providers.Web3Provider | null = null;
let signer: ethers.Signer | null = null;
let account: string = "";
let payrollContract: ethers.Contract | null = null;
let usdcContract: ethers.Contract | null = null;

// Chain ID for Base mainnet (8453)
const CHAIN_ID = "0x2105"; // 8453 in hex

export interface WalletState {
  account: string;
  connected: boolean;
  chainId: string;
}

// Connect MetaMask wallet
export async function connectWallet(): Promise<WalletState> {
  try {
    if (typeof window === 'undefined' || !window.ethereum) {
      throw new Error("Please install MetaMask.");
    }

    // Request account access
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    account = accounts[0];

    // Setup provider and signer
    provider = new ethers.providers.Web3Provider(window.ethereum);

    // Switch to correct chain (Base Sepolia)
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: CHAIN_ID }],
      });
    } catch (switchError: any) {
      // Chain not added, add it
      if (switchError.code === 4902) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: CHAIN_ID,
            chainName: 'Base',
            nativeCurrency: {
              name: 'Ethereum',
              symbol: 'ETH',
              decimals: 18
            },
            rpcUrls: ['https://mainnet.base.org'],
            blockExplorerUrls: ['https://basescan.org']
          }],
        });
      }
    }

    signer = provider.getSigner();

    // Initialize contracts
    payrollContract = new ethers.Contract(PAYROLL_CONTRACT_ADDRESS, PAYROLL_ABI, signer);
    usdcContract = new ethers.Contract(USDC_CONTRACT_ADDRESS, ERC20_ABI, signer);

    // Setup event listeners
    setupEventListeners();

    return {
      account,
      connected: true,
      chainId: CHAIN_ID
    };
  } catch (error) {
    console.error("Error connecting wallet:", error);
    throw error;
  }
}

// Setup MetaMask event listeners
function setupEventListeners() {
  if (!window.ethereum) return;

  window.ethereum.on('accountsChanged', (accounts: string[]) => {
    if (accounts.length === 0) {
      disconnectWallet();
    } else {
      account = accounts[0];
      window.location.reload();
    }
  });

  window.ethereum.on('chainChanged', (_chainId: string) => {
    window.location.reload();
  });
}

// Disconnect wallet
export function disconnectWallet() {
  account = "";
  provider = null;
  signer = null;
  payrollContract = null;
  usdcContract = null;
}

// Get current account
export function getCurrentAccount(): string {
  return account;
}

// Get user balance
export async function getBalance(): Promise<string> {
  if (!provider || !account) throw new Error("Wallet not connected");

  const balanceWei = await provider.getBalance(account);
  return ethers.utils.formatEther(balanceWei);
}

// ============ COMPANY FUNCTIONS ============

export async function getRegistrationFee(): Promise<string> {
  if (!payrollContract) throw new Error("Contract not initialized");

  const fee = await payrollContract.registrationFee();
  return ethers.utils.formatUnits(fee, 6); // USDC has 6 decimals
}

export async function getUSDCBalance(): Promise<string> {
  if (!usdcContract || !account) throw new Error("Contract not initialized");

  const balance = await usdcContract.balanceOf(account);
  return ethers.utils.formatUnits(balance, 6); // USDC has 6 decimals
}

export async function getUSDCAllowance(): Promise<string> {
  if (!usdcContract || !account) throw new Error("Contract not initialized");

  const allowance = await usdcContract.allowance(account, PAYROLL_CONTRACT_ADDRESS);
  return ethers.utils.formatUnits(allowance, 6); // USDC has 6 decimals
}

export async function approveUSDC(amount: string): Promise<ethers.providers.TransactionReceipt> {
  if (!usdcContract || !account) throw new Error("Contract not initialized");

  const amountWei = ethers.utils.parseUnits(amount, 6); // USDC has 6 decimals
  const tx = await usdcContract.approve(PAYROLL_CONTRACT_ADDRESS, amountWei);
  return await tx.wait();
}

export async function registerCompany(name: string): Promise<ethers.providers.TransactionReceipt> {
  if (!payrollContract) throw new Error("Contract not initialized");

  const tx = await payrollContract.registerCompany(name);
  return await tx.wait();
}

export async function getCompanyOfOwner(ownerAddress: string): Promise<number> {
  if (!payrollContract) throw new Error("Contract not initialized");

  const companyId = await payrollContract.companyOfOwner(ownerAddress);
  return companyId.toNumber();
}

export async function getCompany(companyId: number): Promise<any> {
  if (!payrollContract) throw new Error("Contract not initialized");

  const company = await payrollContract.companies(companyId);
  return {
    owner: company.owner,
    name: company.name,
    active: company.active,
    registrationDate: company.registrationDate.toNumber(),
    companyId: company.companyId.toNumber()
  };
}

export async function getAllCompanies(): Promise<any[]> {
  if (!payrollContract) throw new Error("Contract not initialized");

  const companyIds = await payrollContract.getCompanyIds();
  const companies = [];

  for (const id of companyIds) {
    const company = await getCompany(id.toNumber());
    companies.push(company);
  }

  return companies;
}

// ============ EMPLOYEE FUNCTIONS ============

export async function addEmployee(
  name: string,
  wallet: string,
  destinationChainSelector: number,
  salary: string
): Promise<ethers.providers.TransactionReceipt> {
  if (!payrollContract || !account) throw new Error("Contract not initialized");

  // IMPORTANT: salary is already in USDC decimal format (e.g., "0.1" for 0.1 USDC)
  // parseUnits converts to raw units: 0.1 USDC -> 100000 (6 decimals)
  const salaryRaw = ethers.utils.parseUnits(salary, 6); // USDC has 6 decimals

  // destinationChainSelector must be 0 or 1 (doesn't matter which for the contract)
  const chainSelector = destinationChainSelector === 0 || destinationChainSelector === 1
    ? destinationChainSelector
    : 0;

  // receiverContract should be the same as wallet address
  const receiverContract = wallet;

  console.log('Calling addEmployee with params:', {
    name,
    wallet,
    destinationChainSelector: chainSelector,
    receiverContract,
    salary,
    salaryRaw: salaryRaw.toString()
  });

  const tx = await payrollContract.addEmployee(
    name,
    wallet,
    chainSelector,
    receiverContract,
    salaryRaw
  );
  return await tx.wait();
}

export async function updateEmployee(
  employeeId: number,
  name: string,
  wallet: string,
  destinationChainSelector: number,
  receiverContract: string,
  salary: string,
  nextPayDate: number,
  active: boolean
): Promise<ethers.providers.TransactionReceipt> {
  if (!payrollContract) throw new Error("Contract not initialized");

  // IMPORTANT: salary is already in USDC decimal format (e.g., "0.1" for 0.1 USDC)
  const salaryRaw = ethers.utils.parseUnits(salary, 6); // USDC has 6 decimals

  // destinationChainSelector must be 0 or 1
  const chainSelector = destinationChainSelector === 0 || destinationChainSelector === 1
    ? destinationChainSelector
    : 0;

  const tx = await payrollContract.updateEmployee(
    employeeId,
    name,
    wallet,
    chainSelector,
    receiverContract,
    salaryRaw,
    nextPayDate,
    active
  );
  return await tx.wait();
}

export async function getEmployee(employeeId: number): Promise<any> {
  if (!payrollContract) throw new Error("Contract not initialized");

  const employee = await payrollContract.getEmployee(employeeId);
  // Struct: companyId, name, wallet, destinationChainSelector, receiverContract, salary, nextPayDate, active, employeeId
  return {
    companyId: employee[0].toNumber(),
    name: employee[1],
    wallet: employee[2],
    destinationChainSelector: Number(employee[3]), // uint64 destination chain selector (0 or 1)
    receiverContract: employee[4], // receiver contract address
    salary: ethers.utils.formatUnits(employee[5], 6), // USDC has 6 decimals
    nextPayDate: employee[6].toNumber(),
    active: employee[7],
    employeeId: employee[8].toNumber()
  };
}

export async function getEmployeesOfCompany(companyId: number): Promise<any[]> {
  if (!payrollContract) throw new Error("Contract not initialized");

  const employeeIds = await payrollContract.getEmployeesOfCompany(companyId);
  const employees = [];

  for (const id of employeeIds) {
    const employee = await getEmployee(id.toNumber());
    employees.push(employee);
  }

  return employees;
}

export async function deactivateEmployee(employeeId: number): Promise<ethers.providers.TransactionReceipt> {
  if (!payrollContract) throw new Error("Contract not initialized");

  const tx = await payrollContract.deactivateEmployee(employeeId);
  return await tx.wait();
}

// ============ PAYMENT HISTORY FUNCTIONS ============

export interface PaymentEvent {
  id: string;
  companyId: number;
  employeeId: number;
  employeeName: string;
  employeeWallet: string;
  amount: string;
  timestamp: number;
  transactionHash: string;
  status: 'completed' | 'scheduled';
  network?: string;
  blockNumber: number;
}

export async function getPaymentHistory(companyId?: number): Promise<PaymentEvent[]> {
  if (!payrollContract || !provider) throw new Error("Contract not initialized");

  try {
    const payments: PaymentEvent[] = [];

    // Get current block number
    const currentBlock = await provider.getBlockNumber();

    // Base has a max block range of 100,000
    // Query last 50,000 blocks to stay well under the limit
    const blockRange = 50000;
    const fromBlock = Math.max(0, currentBlock - blockRange);

    // Helper to get network name from chain selector
    const getNetworkName = (chainSelector: number): string => {
      const networks: Record<number, string> = {
        0: 'Base',
        1: 'Avalanche'
      };
      return networks[chainSelector] || 'Base';
    };

    // Build filter for EmployeeAdded events (payment happens on add)
    const employeeAddedFilter = companyId
      ? payrollContract.filters.EmployeeAdded(companyId)
      : payrollContract.filters.EmployeeAdded();

    // Fetch EmployeeAdded events - these represent payments since payment happens on add
    const employeeAddedEvents = await payrollContract.queryFilter(employeeAddedFilter, fromBlock, currentBlock);

    console.log('Found EmployeeAdded events:', employeeAddedEvents.length);

    for (const event of employeeAddedEvents) {
      if (!provider) break;

      const block = await provider.getBlock(event.blockNumber);
      const args = event.args as any;

      console.log('EmployeeAdded event args:', {
        companyId: args.companyId?.toNumber(),
        employeeId: args.employeeId?.toNumber(),
        name: args.name,
        wallet: args.wallet,
        salary: args.salary?.toString(),
        allArgs: Object.keys(args)
      });

      payments.push({
        id: `${event.transactionHash}-${event.logIndex}`,
        companyId: args.companyId.toNumber(),
        employeeId: args.employeeId ? args.employeeId.toNumber() : 0,
        employeeName: args.name || 'Unknown',
        employeeWallet: args.wallet,
        amount: ethers.utils.formatUnits(args.salary, 6), // USDC has 6 decimals
        timestamp: block.timestamp,
        transactionHash: event.transactionHash,
        status: 'completed', // Payment is completed when employee is added
        blockNumber: event.blockNumber
      });
    }

    // Also check PaymentExecuted events for any additional payments
    const executedFilter = companyId
      ? payrollContract.filters.PaymentExecuted(companyId)
      : payrollContract.filters.PaymentExecuted();

    const executedEvents = await payrollContract.queryFilter(executedFilter, fromBlock, currentBlock);

    console.log('Found PaymentExecuted events:', executedEvents.length);

    for (const event of executedEvents) {
      if (!provider) break;

      const block = await provider.getBlock(event.blockNumber);
      const args = event.args as any;

      // Get employee details
      let employeeName = 'Unknown';
      try {
        const employee = await getEmployee(args.employeeId.toNumber());
        employeeName = employee.name;
      } catch (err) {
        console.error('Error fetching employee:', err);
      }

      payments.push({
        id: `${event.transactionHash}-${event.logIndex}`,
        companyId: args.companyId.toNumber(),
        employeeId: args.employeeId ? args.employeeId.toNumber() : 0,
        employeeName: employeeName,
        employeeWallet: args.wallet,
        amount: ethers.utils.formatUnits(args.amount, 6),
        timestamp: block.timestamp,
        transactionHash: event.transactionHash,
        status: 'completed',
        blockNumber: event.blockNumber
      });
    }

    // Sort by timestamp (most recent first) and remove duplicates by id
    const uniquePayments = payments.filter((payment, index, self) =>
      index === self.findIndex(p => p.id === payment.id)
    );
    uniquePayments.sort((a, b) => b.timestamp - a.timestamp);

    console.log('Final payment history:', uniquePayments.map(p => ({
      employeeId: p.employeeId,
      employeeName: p.employeeName,
      status: p.status,
      amount: p.amount
    })));

    return uniquePayments;
  } catch (error) {
    console.error("Error fetching payment history:", error);
    throw error;
  }
}

// Type definitions for window.ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}
