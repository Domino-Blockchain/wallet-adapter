import type { default as SolWalletAdapter } from '@project-serum/sol-wallet-adapter';
import { BaseMessageSignerWalletAdapter, WalletAdapterNetwork, WalletReadyState } from '@solana/wallet-adapter-base';
import type { Transaction } from '@solana/web3.js';
import { PublicKey } from '@solana/web3.js';
interface DWalletWallet {
    postMessage?(...args: unknown[]): unknown;
}
export interface DWalletWalletAdapterConfig {
    provider?: string | DWalletWallet;
    network?: WalletAdapterNetwork;
    timeout?: number;
}
export declare abstract class BaseDWalletWalletAdapter extends BaseMessageSignerWalletAdapter {
    readonly supportedTransactionVersions: null;
    protected _provider: string | DWalletWallet | undefined;
    protected _network: WalletAdapterNetwork;
    protected _timeout: number;
    protected _connecting: boolean;
    protected _wallet: SolWalletAdapter | null;
    protected _publicKey: PublicKey | null;
    protected _readyState: WalletReadyState;
    constructor({ provider, network, timeout }?: DWalletWalletAdapterConfig);
    get publicKey(): PublicKey | null;
    get connecting(): boolean;
    get connected(): boolean;
    get readyState(): WalletReadyState;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    signTransaction<T extends Transaction>(transaction: T): Promise<T>;
    signAllTransactions<T extends Transaction>(transactions: T[]): Promise<T[]>;
    signMessage(message: Uint8Array): Promise<Uint8Array>;
    private _disconnected;
}
export {};
//# sourceMappingURL=base.d.ts.map