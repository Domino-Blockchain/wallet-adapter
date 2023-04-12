"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DWalletExtensionWalletAdapter = exports.DWalletExtensionWalletName = exports.DWalletWalletAdapter = exports.DWalletWalletName = void 0;
const base_js_1 = require("./base.js");
exports.DWalletWalletName = 'DWallet';
class DWalletWalletAdapter extends base_js_1.BaseDWalletWalletAdapter {
    constructor(_a = {}) {
        var { provider = 'https://www.dwallet.io' } = _a, config = __rest(_a, ["provider"]);
        super(Object.assign({ provider }, config));
        this.name = exports.DWalletWalletName;
        this.url = 'https://www.dwallet.io';
        this.icon = 'https://i.imgur.com/odptY2p.png';
    }
}
exports.DWalletWalletAdapter = DWalletWalletAdapter;
exports.DWalletExtensionWalletName = 'DWallet (Extension)';
class DWalletExtensionWalletAdapter extends base_js_1.BaseDWalletWalletAdapter {
    constructor() {
        super(...arguments);
        this.name = exports.DWalletExtensionWalletName;
        this.url = 'https://chrome.google.com/webstore/detail/dwallet/...';
        this.icon = 'https://i.imgur.com/odptY2p.png';
    }
}
exports.DWalletExtensionWalletAdapter = DWalletExtensionWalletAdapter;
//# sourceMappingURL=adapter.js.map