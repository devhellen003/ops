"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1235], {
        60718: function(e, t, s) {
            s.d(t, {
                ConfigCtrl: function() {
                    return j
                },
                zv: function() {
                    return v
                },
                uA: function() {
                    return I
                },
                ExplorerCtrl: function() {
                    return B
                },
                jb: function() {
                    return q
                },
                OptionsCtrl: function() {
                    return W
                },
                AV: function() {
                    return y
                },
                ThemeCtrl: function() {
                    return et
                },
                ToastCtrl: function() {
                    return er
                }
            }), Symbol();
            let r = Symbol(),
                n = Object.getPrototypeOf,
                o = new WeakMap,
                i = e => e && (o.has(e) ? o.get(e) : n(e) === Object.prototype || n(e) === Array.prototype),
                a = e => i(e) && e[r] || null,
                l = (e, t = !0) => {
                    o.set(e, t)
                },
                c = e => "object" == typeof e && null !== e,
                d = new WeakMap,
                u = new WeakSet,
                p = (e = Object.is, t = (e, t) => new Proxy(e, t), s = e => c(e) && !u.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer), r = e => {
                    switch (e.status) {
                        case "fulfilled":
                            return e.value;
                        case "rejected":
                            throw e.reason;
                        default:
                            throw e
                    }
                }, n = new WeakMap, o = (e, t, s = r) => {
                    let i = n.get(e);
                    if ((null == i ? void 0 : i[0]) === t) return i[1];
                    let a = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
                    return l(a, !0), n.set(e, [t, a]), Reflect.ownKeys(e).forEach(t => {
                        if (Object.getOwnPropertyDescriptor(a, t)) return;
                        let r = Reflect.get(e, t),
                            n = {
                                value: r,
                                enumerable: !0,
                                configurable: !0
                            };
                        if (u.has(r)) l(r, !1);
                        else if (r instanceof Promise) delete n.value, n.get = () => s(r);
                        else if (d.has(r)) {
                            let [e, t] = d.get(r);
                            n.value = o(e, t(), s)
                        }
                        Object.defineProperty(a, t, n)
                    }), Object.preventExtensions(a)
                }, i = new WeakMap, p = [1, 1], f = r => {
                    if (!c(r)) throw Error("object required");
                    let n = i.get(r);
                    if (n) return n;
                    let l = p[0],
                        g = new Set,
                        h = (e, t = ++p[0]) => {
                            l !== t && (l = t, g.forEach(s => s(e, t)))
                        },
                        m = p[1],
                        b = (e = ++p[1]) => (m === e || g.size || (m = e, v.forEach(([t]) => {
                            let s = t[1](e);
                            s > l && (l = s)
                        })), l),
                        y = e => (t, s) => {
                            let r = [...t];
                            r[1] = [e, ...r[1]], h(r, s)
                        },
                        v = new Map,
                        w = (e, t) => {
                            if (v.has(e)) throw Error("prop listener already exists");
                            if (g.size) {
                                let s = t[3](y(e));
                                v.set(e, [t, s])
                            } else v.set(e, [t])
                        },
                        C = e => {
                            var t;
                            let s = v.get(e);
                            s && (v.delete(e), null == (t = s[1]) || t.call(s))
                        },
                        I = e => {
                            g.add(e), 1 === g.size && v.forEach(([e, t], s) => {
                                if (t) throw Error("remove already exists");
                                let r = e[3](y(s));
                                v.set(s, [e, r])
                            });
                            let t = () => {
                                g.delete(e), 0 === g.size && v.forEach(([e, t], s) => {
                                    t && (t(), v.set(s, [e]))
                                })
                            };
                            return t
                        },
                        O = Array.isArray(r) ? [] : Object.create(Object.getPrototypeOf(r)),
                        W = {
                            deleteProperty(e, t) {
                                let s = Reflect.get(e, t);
                                C(t);
                                let r = Reflect.deleteProperty(e, t);
                                return r && h(["delete", [t], s]), r
                            },
                            set(t, r, n, o) {
                                let l = Reflect.has(t, r),
                                    p = Reflect.get(t, r, o);
                                if (l && (e(p, n) || i.has(n) && e(p, i.get(n)))) return !0;
                                C(r), c(n) && (n = a(n) || n);
                                let g = n;
                                if (n instanceof Promise) n.then(e => {
                                    n.status = "fulfilled", n.value = e, h(["resolve", [r], e])
                                }).catch(e => {
                                    n.status = "rejected", n.reason = e, h(["reject", [r], e])
                                });
                                else {
                                    !d.has(n) && s(n) && (g = f(n));
                                    let e = !u.has(g) && d.get(g);
                                    e && w(r, e)
                                }
                                return Reflect.set(t, r, g, o), h(["set", [r], n, p]), !0
                            }
                        },
                        E = t(O, W);
                    i.set(r, E);
                    let j = [O, b, o, I];
                    return d.set(E, j), Reflect.ownKeys(r).forEach(e => {
                        let t = Object.getOwnPropertyDescriptor(r, e);
                        "value" in t && (E[e] = r[e], delete t.value, delete t.writable), Object.defineProperty(O, e, t)
                    }), E
                }) => [f, d, u, e, t, s, r, n, o, i, p],
                [f] = p();

            function g(e = {}) {
                return f(e)
            }

            function h(e, t, s) {
                let r;
                let n = d.get(e);
                n || console.warn("Please use proxy object");
                let o = [],
                    i = n[3],
                    a = !1,
                    l = i(e => {
                        if (o.push(e), s) {
                            t(o.splice(0));
                            return
                        }
                        r || (r = Promise.resolve().then(() => {
                            r = void 0, a && t(o.splice(0))
                        }))
                    });
                return a = !0, () => {
                    a = !1, l()
                }
            }
            var m = s(61900).Buffer;
            let b = g({
                    history: ["ConnectWallet"],
                    view: "ConnectWallet",
                    data: void 0
                }),
                y = {
                    state: b,
                    subscribe: e => h(b, () => e(b)),
                    push(e, t) {
                        e !== b.view && (b.view = e, t && (b.data = t), b.history.push(e))
                    },
                    reset(e) {
                        b.view = e, b.history = [e]
                    },
                    replace(e) {
                        b.history.length > 1 && (b.history[b.history.length - 1] = e, b.view = e)
                    },
                    goBack() {
                        if (b.history.length > 1) {
                            b.history.pop();
                            let [e] = b.history.slice(-1);
                            b.view = e
                        }
                    },
                    setData(e) {
                        b.data = e
                    }
                },
                v = {
                    WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
                    WCM_VERSION: "WCM_VERSION",
                    RECOMMENDED_WALLET_AMOUNT: 9,
                    isMobile: () => "undefined" != typeof window && !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),
                    isAndroid: () => v.isMobile() && navigator.userAgent.toLowerCase().includes("android"),
                    isIos() {
                        let e = navigator.userAgent.toLowerCase();
                        return v.isMobile() && (e.includes("iphone") || e.includes("ipad"))
                    },
                    isHttpUrl: e => e.startsWith("http://") || e.startsWith("https://"),
                    isArray: e => Array.isArray(e) && e.length > 0,
                    isTelegram: () => "undefined" != typeof window && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto),
                    formatNativeUrl(e, t, s) {
                        if (v.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
                        let r = e;
                        r.includes("://") || (r = e.replaceAll("/", "").replaceAll(":", ""), r = `${r}://`), r.endsWith("/") || (r = `${r}/`), this.setWalletConnectDeepLink(r, s);
                        let n = encodeURIComponent(t);
                        return `${r}wc?uri=${n}`
                    },
                    formatUniversalUrl(e, t, s) {
                        if (!v.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
                        let r = e;
                        if (r.startsWith("https://t.me")) {
                            let e = m.from(t).toString("base64").replace(/[=]/g, "");
                            r.endsWith("/") && (r = r.slice(0, -1)), this.setWalletConnectDeepLink(r, s);
                            let n = new URL(r);
                            n.searchParams.set("startapp", e);
                            let o = n.toString();
                            return o
                        }
                        r.endsWith("/") || (r = `${r}/`), this.setWalletConnectDeepLink(r, s);
                        let n = encodeURIComponent(t);
                        return `${r}wc?uri=${n}`
                    },
                    wait: async e => new Promise(t => {
                        setTimeout(t, e)
                    }),
                    openHref(e, t) {
                        let s = this.isTelegram() ? "_blank" : t;
                        window.open(e, s, "noreferrer noopener")
                    },
                    setWalletConnectDeepLink(e, t) {
                        try {
                            localStorage.setItem(v.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                                href: e,
                                name: t
                            }))
                        } catch (e) {
                            console.info("Unable to set WalletConnect deep link")
                        }
                    },
                    setWalletConnectAndroidDeepLink(e) {
                        try {
                            let [t] = e.split("?");
                            localStorage.setItem(v.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                                href: t,
                                name: "Android"
                            }))
                        } catch (e) {
                            console.info("Unable to set WalletConnect android deep link")
                        }
                    },
                    removeWalletConnectDeepLink() {
                        try {
                            localStorage.removeItem(v.WALLETCONNECT_DEEPLINK_CHOICE)
                        } catch (e) {
                            console.info("Unable to remove WalletConnect deep link")
                        }
                    },
                    setModalVersionInStorage() {
                        try {
                            "undefined" != typeof localStorage && localStorage.setItem(v.WCM_VERSION, "2.7.0")
                        } catch (e) {
                            console.info("Unable to set Web3Modal version in storage")
                        }
                    },
                    getWalletRouterData() {
                        var e;
                        let t = null == (e = y.state.data) ? void 0 : e.Wallet;
                        if (!t) throw Error('Missing "Wallet" view data');
                        return t
                    }
                },
                w = "undefined" != typeof location && (location.hostname.includes("localhost") || location.protocol.includes("https")),
                C = g({
                    enabled: w,
                    userSessionId: "",
                    events: [],
                    connectedWalletId: void 0
                }),
                I = {
                    state: C,
                    subscribe: e => h(C.events, () => e(function(e, t) {
                        let s = d.get(e);
                        s || console.warn("Please use proxy object");
                        let [r, n, o] = s;
                        return o(r, n(), void 0)
                    }(C.events[C.events.length - 1]))),
                    initialize() {
                        C.enabled && void 0 !== (null == crypto ? void 0 : crypto.randomUUID) && (C.userSessionId = crypto.randomUUID())
                    },
                    setConnectedWalletId(e) {
                        C.connectedWalletId = e
                    },
                    click(e) {
                        if (C.enabled) {
                            let t = {
                                type: "CLICK",
                                name: e.name,
                                userSessionId: C.userSessionId,
                                timestamp: Date.now(),
                                data: e
                            };
                            C.events.push(t)
                        }
                    },
                    track(e) {
                        if (C.enabled) {
                            let t = {
                                type: "TRACK",
                                name: e.name,
                                userSessionId: C.userSessionId,
                                timestamp: Date.now(),
                                data: e
                            };
                            C.events.push(t)
                        }
                    },
                    view(e) {
                        if (C.enabled) {
                            let t = {
                                type: "VIEW",
                                name: e.name,
                                userSessionId: C.userSessionId,
                                timestamp: Date.now(),
                                data: e
                            };
                            C.events.push(t)
                        }
                    }
                },
                O = g({
                    chains: void 0,
                    walletConnectUri: void 0,
                    isAuth: !1,
                    isCustomDesktop: !1,
                    isCustomMobile: !1,
                    isDataLoaded: !1,
                    isUiLoaded: !1
                }),
                W = {
                    state: O,
                    subscribe: e => h(O, () => e(O)),
                    setChains(e) {
                        O.chains = e
                    },
                    setWalletConnectUri(e) {
                        O.walletConnectUri = e
                    },
                    setIsCustomDesktop(e) {
                        O.isCustomDesktop = e
                    },
                    setIsCustomMobile(e) {
                        O.isCustomMobile = e
                    },
                    setIsDataLoaded(e) {
                        O.isDataLoaded = e
                    },
                    setIsUiLoaded(e) {
                        O.isUiLoaded = e
                    },
                    setIsAuth(e) {
                        O.isAuth = e
                    }
                },
                E = g({
                    projectId: "",
                    mobileWallets: void 0,
                    desktopWallets: void 0,
                    walletImages: void 0,
                    chains: void 0,
                    enableAuthMode: !1,
                    enableExplorer: !0,
                    explorerExcludedWalletIds: void 0,
                    explorerRecommendedWalletIds: void 0,
                    termsOfServiceUrl: void 0,
                    privacyPolicyUrl: void 0
                }),
                j = {
                    state: E,
                    subscribe: e => h(E, () => e(E)),
                    setConfig(e) {
                        var t, s;
                        I.initialize(), W.setChains(e.chains), W.setIsAuth(!!e.enableAuthMode), W.setIsCustomMobile(!!(null == (t = e.mobileWallets) ? void 0 : t.length)), W.setIsCustomDesktop(!!(null == (s = e.desktopWallets) ? void 0 : s.length)), v.setModalVersionInStorage(), Object.assign(E, e)
                    }
                };
            var L = Object.defineProperty,
                A = Object.getOwnPropertySymbols,
                k = Object.prototype.hasOwnProperty,
                M = Object.prototype.propertyIsEnumerable,
                U = (e, t, s) => t in e ? L(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: s
                }) : e[t] = s,
                P = (e, t) => {
                    for (var s in t || (t = {})) k.call(t, s) && U(e, s, t[s]);
                    if (A)
                        for (var s of A(t)) M.call(t, s) && U(e, s, t[s]);
                    return e
                };
            let D = "https://explorer-api.walletconnect.com",
                S = "js-2.7.0";
            async function T(e, t) {
                let s = P({
                        sdkType: "wcm",
                        sdkVersion: S
                    }, t),
                    r = new URL(e, D);
                r.searchParams.append("projectId", j.state.projectId), Object.entries(s).forEach(([e, t]) => {
                    t && r.searchParams.append(e, String(t))
                });
                let n = await fetch(r);
                return n.json()
            }
            let N = {
                getDesktopListings: async e => T("/w3m/v1/getDesktopListings", e),
                getMobileListings: async e => T("/w3m/v1/getMobileListings", e),
                getInjectedListings: async e => T("/w3m/v1/getInjectedListings", e),
                getAllListings: async e => T("/w3m/v1/getAllListings", e),
                getWalletImageUrl: e => `${D}/w3m/v1/getWalletImage/${e}?projectId=${j.state.projectId}&sdkType=wcm&sdkVersion=${S}`,
                getAssetImageUrl: e => `${D}/w3m/v1/getAssetImage/${e}?projectId=${j.state.projectId}&sdkType=wcm&sdkVersion=${S}`
            };
            var _ = Object.defineProperty,
                x = Object.getOwnPropertySymbols,
                R = Object.prototype.hasOwnProperty,
                $ = Object.prototype.propertyIsEnumerable,
                V = (e, t, s) => t in e ? _(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: s
                }) : e[t] = s,
                H = (e, t) => {
                    for (var s in t || (t = {})) R.call(t, s) && V(e, s, t[s]);
                    if (x)
                        for (var s of x(t)) $.call(t, s) && V(e, s, t[s]);
                    return e
                };
            let K = v.isMobile(),
                z = g({
                    wallets: {
                        listings: [],
                        total: 0,
                        page: 1
                    },
                    search: {
                        listings: [],
                        total: 0,
                        page: 1
                    },
                    recomendedWallets: []
                }),
                B = {
                    state: z,
                    async getRecomendedWallets() {
                        let {
                            explorerRecommendedWalletIds: e,
                            explorerExcludedWalletIds: t
                        } = j.state;
                        if ("NONE" === e || "ALL" === t && !e) return z.recomendedWallets;
                        if (v.isArray(e)) {
                            let t = e.join(","),
                                {
                                    listings: s
                                } = await N.getAllListings({
                                    recommendedIds: t
                                }),
                                r = Object.values(s);
                            r.sort((t, s) => {
                                let r = e.indexOf(t.id),
                                    n = e.indexOf(s.id);
                                return r - n
                            }), z.recomendedWallets = r
                        } else {
                            let {
                                chains: e,
                                isAuth: s
                            } = W.state, r = null == e ? void 0 : e.join(","), n = v.isArray(t), o = {
                                page: 1,
                                sdks: s ? "auth_v1" : void 0,
                                entries: v.RECOMMENDED_WALLET_AMOUNT,
                                chains: r,
                                version: 2,
                                excludedIds: n ? t.join(",") : void 0
                            }, {
                                listings: i
                            } = K ? await N.getMobileListings(o) : await N.getDesktopListings(o);
                            z.recomendedWallets = Object.values(i)
                        }
                        return z.recomendedWallets
                    },
                    async getWallets(e) {
                        let t = H({}, e),
                            {
                                explorerRecommendedWalletIds: s,
                                explorerExcludedWalletIds: r
                            } = j.state,
                            {
                                recomendedWallets: n
                            } = z;
                        if ("ALL" === r) return z.wallets;
                        n.length ? t.excludedIds = n.map(e => e.id).join(",") : v.isArray(s) && (t.excludedIds = s.join(",")), v.isArray(r) && (t.excludedIds = [t.excludedIds, r].filter(Boolean).join(",")), W.state.isAuth && (t.sdks = "auth_v1");
                        let {
                            page: o,
                            search: i
                        } = e, {
                            listings: a,
                            total: l
                        } = K ? await N.getMobileListings(t) : await N.getDesktopListings(t), c = Object.values(a), d = i ? "search" : "wallets";
                        return z[d] = {
                            listings: [...z[d].listings, ...c],
                            total: l,
                            page: null != o ? o : 1
                        }, {
                            listings: c,
                            total: l
                        }
                    },
                    getWalletImageUrl: e => N.getWalletImageUrl(e),
                    getAssetImageUrl: e => N.getAssetImageUrl(e),
                    resetSearch() {
                        z.search = {
                            listings: [],
                            total: 0,
                            page: 1
                        }
                    }
                },
                J = g({
                    open: !1
                }),
                q = {
                    state: J,
                    subscribe: e => h(J, () => e(J)),
                    open: async e => new Promise(t => {
                        let {
                            isUiLoaded: s,
                            isDataLoaded: r
                        } = W.state;
                        if (v.removeWalletConnectDeepLink(), W.setWalletConnectUri(null == e ? void 0 : e.uri), W.setChains(null == e ? void 0 : e.chains), y.reset("ConnectWallet"), s && r) J.open = !0, t();
                        else {
                            let e = setInterval(() => {
                                let s = W.state;
                                s.isUiLoaded && s.isDataLoaded && (clearInterval(e), J.open = !0, t())
                            }, 200)
                        }
                    }),
                    close() {
                        J.open = !1
                    }
                };
            var F = Object.defineProperty,
                G = Object.getOwnPropertySymbols,
                Q = Object.prototype.hasOwnProperty,
                X = Object.prototype.propertyIsEnumerable,
                Y = (e, t, s) => t in e ? F(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: s
                }) : e[t] = s,
                Z = (e, t) => {
                    for (var s in t || (t = {})) Q.call(t, s) && Y(e, s, t[s]);
                    if (G)
                        for (var s of G(t)) X.call(t, s) && Y(e, s, t[s]);
                    return e
                };
            let ee = g({
                    themeMode: "undefined" != typeof matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                }),
                et = {
                    state: ee,
                    subscribe: e => h(ee, () => e(ee)),
                    setThemeConfig(e) {
                        let {
                            themeMode: t,
                            themeVariables: s
                        } = e;
                        t && (ee.themeMode = t), s && (ee.themeVariables = Z({}, s))
                    }
                },
                es = g({
                    open: !1,
                    message: "",
                    variant: "success"
                }),
                er = {
                    state: es,
                    subscribe: e => h(es, () => e(es)),
                    openToast(e, t) {
                        es.open = !0, es.message = e, es.variant = t
                    },
                    closeToast() {
                        es.open = !1
                    }
                }
        },
        71235: function(e, t, s) {
            s.d(t, {
                WalletConnectModal: function() {
                    return n
                }
            });
            var r = s(60718);
            class n {
                constructor(e) {
                    this.openModal = r.jb.open, this.closeModal = r.jb.close, this.subscribeModal = r.jb.subscribe, this.setTheme = r.ThemeCtrl.setThemeConfig, r.ThemeCtrl.setThemeConfig(e), r.ConfigCtrl.setConfig(e), this.initUi()
                }
                async initUi() {
                    if ("undefined" != typeof window) {
                        await s.e(2965).then(s.bind(s, 82965));
                        let e = document.createElement("wcm-modal");
                        document.body.insertAdjacentElement("beforeend", e), r.OptionsCtrl.setIsUiLoaded(!0)
                    }
                }
            }
        }
    }
]);