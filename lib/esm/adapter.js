import { BaseDWalletWalletAdapter } from './base.js';
export const DWalletWalletName = 'DWallet';
export class DWalletWalletAdapter extends BaseDWalletWalletAdapter {
    constructor({ provider = 'https://www.dwallet.io', ...config } = {}) {
        super({ provider, ...config });
        this.name = DWalletWalletName;
        this.url = 'https://www.dwallet.io';
        this.icon = 'https://i.imgur.com/odptY2p.png';
    }
}
export const DWalletExtensionWalletName = 'DWallet (Extension)';
export class DWalletExtensionWalletAdapter extends BaseDWalletWalletAdapter {
    constructor() {
        super(...arguments);
        this.name = DWalletExtensionWalletName;
        this.url = 'https://chrome.google.com/webstore/detail/dwallet/...';
        this.icon = 'https://i.imgur.com/odptY2p.png';
    }
}
//# sourceMappingURL=adapter.js.map