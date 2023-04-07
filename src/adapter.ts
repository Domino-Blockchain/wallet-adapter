import type { WalletName } from '@solana/wallet-adapter-base';
import type { DWalletWalletAdapterConfig } from './base.js';
import { BaseDWalletWalletAdapter } from './base.js';

export const DWalletWalletName = 'DWallet' as WalletName<'DWallet'>;

export class DWalletWalletAdapter extends BaseDWalletWalletAdapter {
    name = DWalletWalletName;
    url = 'https://www.dwallet.io';
    icon = 'https://i.imgur.com/odptY2p.png';

    constructor({ provider = 'https://www.dwallet.io', ...config }: DWalletWalletAdapterConfig = {}) {
        super({ provider, ...config });
    }
}

export const DWalletExtensionWalletName = 'DWallet (Extension)' as WalletName<'DWallet (Extension)'>;

export class DWalletExtensionWalletAdapter extends BaseDWalletWalletAdapter {
    name = DWalletExtensionWalletName;
    url = 'https://chrome.google.com/webstore/detail/dwallet/...';
    icon = 'https://i.imgur.com/odptY2p.png';
}
