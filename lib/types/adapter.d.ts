import type { WalletName } from '@solana/wallet-adapter-base';
import type { DWalletWalletAdapterConfig } from './base.js';
import { BaseDWalletWalletAdapter } from './base.js';
export declare const DWalletWalletName: WalletName<"DWallet">;
export declare class DWalletWalletAdapter extends BaseDWalletWalletAdapter {
    name: WalletName<"DWallet">;
    url: string;
    icon: string;
    constructor({ provider, ...config }?: DWalletWalletAdapterConfig);
}
export declare const DWalletExtensionWalletName: WalletName<"DWallet (Extension)">;
export declare class DWalletExtensionWalletAdapter extends BaseDWalletWalletAdapter {
    name: WalletName<"DWallet (Extension)">;
    url: string;
    icon: string;
}
//# sourceMappingURL=adapter.d.ts.map