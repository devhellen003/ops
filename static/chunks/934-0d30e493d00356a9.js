"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [934], {
        5093: function(e, t, n) {
            /**
             * @license React
             * use-sync-external-store-shim.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = n(78572),
                o = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                i = r.useState,
                s = r.useEffect,
                a = r.useLayoutEffect,
                c = r.useDebugValue;

            function u(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !o(e, n)
                } catch (e) {
                    return !0
                }
            }
            var l = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var n = t(),
                    r = i({
                        inst: {
                            value: n,
                            getSnapshot: t
                        }
                    }),
                    o = r[0].inst,
                    l = r[1];
                return a(function() {
                    o.value = n, o.getSnapshot = t, u(o) && l({
                        inst: o
                    })
                }, [e, n, t]), s(function() {
                    return u(o) && l({
                        inst: o
                    }), e(function() {
                        u(o) && l({
                            inst: o
                        })
                    })
                }, [e]), c(n), n
            };
            t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l
        },
        11449: function(e, t, n) {
            /**
             * @license React
             * use-sync-external-store-shim/with-selector.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = n(78572),
                o = n(67515),
                i = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                s = o.useSyncExternalStore,
                a = r.useRef,
                c = r.useEffect,
                u = r.useMemo,
                l = r.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
                var d = a(null);
                if (null === d.current) {
                    var f = {
                        hasValue: !1,
                        value: null
                    };
                    d.current = f
                } else f = d.current;
                var h = s(e, (d = u(function() {
                    function e(e) {
                        if (!c) {
                            if (c = !0, s = e, e = r(e), void 0 !== o && f.hasValue) {
                                var t = f.value;
                                if (o(t, e)) return a = t
                            }
                            return a = e
                        }
                        if (t = a, i(s, e)) return t;
                        var n = r(e);
                        return void 0 !== o && o(t, n) ? t : (s = e, a = n)
                    }
                    var s, a, c = !1,
                        u = void 0 === n ? null : n;
                    return [function() {
                        return e(t())
                    }, null === u ? void 0 : function() {
                        return e(u())
                    }]
                }, [t, n, r, o]))[0], d[1]);
                return c(function() {
                    f.hasValue = !0, f.value = h
                }, [h]), l(h), h
            }
        },
        67515: function(e, t, n) {
            e.exports = n(5093)
        },
        54763: function(e, t, n) {
            e.exports = n(11449)
        },
        98478: function(e, t, n) {
            function r(e) {
                if (!Number.isSafeInteger(e) || e < 0) throw Error(`positive integer expected, not ${e}`)
            }

            function o(e, ...t) {
                if (!(e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name)) throw Error("Uint8Array expected");
                if (t.length > 0 && !t.includes(e.length)) throw Error(`Uint8Array expected of length ${t}, not of length=${e.length}`)
            }

            function i(e) {
                if ("function" != typeof e || "function" != typeof e.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
                r(e.outputLen), r(e.blockLen)
            }

            function s(e, t = !0) {
                if (e.destroyed) throw Error("Hash instance has been destroyed");
                if (t && e.finished) throw Error("Hash#digest() has already been called")
            }

            function a(e, t) {
                o(e);
                let n = t.outputLen;
                if (e.length < n) throw Error(`digestInto() expects output buffer of length at least ${n}`)
            }
            n.d(t, {
                Gg: function() {
                    return s
                },
                J8: function() {
                    return a
                },
                Rx: function() {
                    return r
                },
                aI: function() {
                    return o
                },
                vp: function() {
                    return i
                }
            })
        },
        17508: function(e, t, n) {
            n.d(t, {
                JQ: function() {
                    return f
                }
            });
            var r = n(98478),
                o = n(57632);
            let i = (e, t, n) => e & t ^ ~e & n,
                s = (e, t, n) => e & t ^ e & n ^ t & n;
            class a extends o.kb {
                constructor(e, t, n, r) {
                    super(), this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = (0, o.GL)(this.buffer)
                }
                update(e) {
                    (0, r.Gg)(this);
                    let {
                        view: t,
                        buffer: n,
                        blockLen: i
                    } = this;
                    e = (0, o.O0)(e);
                    let s = e.length;
                    for (let r = 0; r < s;) {
                        let a = Math.min(i - this.pos, s - r);
                        if (a === i) {
                            let t = (0, o.GL)(e);
                            for (; i <= s - r; r += i) this.process(t, r);
                            continue
                        }
                        n.set(e.subarray(r, r + a), this.pos), this.pos += a, r += a, this.pos === i && (this.process(t, 0), this.pos = 0)
                    }
                    return this.length += e.length, this.roundClean(), this
                }
                digestInto(e) {
                    (0, r.Gg)(this), (0, r.J8)(e, this), this.finished = !0;
                    let {
                        buffer: t,
                        view: n,
                        blockLen: i,
                        isLE: s
                    } = this, {
                        pos: a
                    } = this;
                    t[a++] = 128, this.buffer.subarray(a).fill(0), this.padOffset > i - a && (this.process(n, 0), a = 0);
                    for (let e = a; e < i; e++) t[e] = 0;
                    ! function(e, t, n, r) {
                        if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, n, r);
                        let o = BigInt(32),
                            i = BigInt(4294967295),
                            s = Number(n >> o & i),
                            a = Number(n & i),
                            c = r ? 4 : 0,
                            u = r ? 0 : 4;
                        e.setUint32(t + c, s, r), e.setUint32(t + u, a, r)
                    }(n, i - 8, BigInt(8 * this.length), s), this.process(n, 0);
                    let c = (0, o.GL)(e),
                        u = this.outputLen;
                    if (u % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
                    let l = u / 4,
                        d = this.get();
                    if (l > d.length) throw Error("_sha2: outputLen bigger than state");
                    for (let e = 0; e < l; e++) c.setUint32(4 * e, d[e], s)
                }
                digest() {
                    let {
                        buffer: e,
                        outputLen: t
                    } = this;
                    this.digestInto(e);
                    let n = e.slice(0, t);
                    return this.destroy(), n
                }
                _cloneInto(e) {
                    e || (e = new this.constructor), e.set(...this.get());
                    let {
                        blockLen: t,
                        buffer: n,
                        length: r,
                        finished: o,
                        destroyed: i,
                        pos: s
                    } = this;
                    return e.length = r, e.pos = s, e.finished = o, e.destroyed = i, r % t && e.buffer.set(n), e
                }
            }
            let c = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                u = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                l = new Uint32Array(64);
            class d extends a {
                constructor() {
                    super(64, 32, 8, !1), this.A = 0 | u[0], this.B = 0 | u[1], this.C = 0 | u[2], this.D = 0 | u[3], this.E = 0 | u[4], this.F = 0 | u[5], this.G = 0 | u[6], this.H = 0 | u[7]
                }
                get() {
                    let {
                        A: e,
                        B: t,
                        C: n,
                        D: r,
                        E: o,
                        F: i,
                        G: s,
                        H: a
                    } = this;
                    return [e, t, n, r, o, i, s, a]
                }
                set(e, t, n, r, o, i, s, a) {
                    this.A = 0 | e, this.B = 0 | t, this.C = 0 | n, this.D = 0 | r, this.E = 0 | o, this.F = 0 | i, this.G = 0 | s, this.H = 0 | a
                }
                process(e, t) {
                    for (let n = 0; n < 16; n++, t += 4) l[n] = e.getUint32(t, !1);
                    for (let e = 16; e < 64; e++) {
                        let t = l[e - 15],
                            n = l[e - 2],
                            r = (0, o.np)(t, 7) ^ (0, o.np)(t, 18) ^ t >>> 3,
                            i = (0, o.np)(n, 17) ^ (0, o.np)(n, 19) ^ n >>> 10;
                        l[e] = i + l[e - 7] + r + l[e - 16] | 0
                    }
                    let {
                        A: n,
                        B: r,
                        C: a,
                        D: u,
                        E: d,
                        F: f,
                        G: h,
                        H: p
                    } = this;
                    for (let e = 0; e < 64; e++) {
                        let t = (0, o.np)(d, 6) ^ (0, o.np)(d, 11) ^ (0, o.np)(d, 25),
                            g = p + t + i(d, f, h) + c[e] + l[e] | 0,
                            b = (0, o.np)(n, 2) ^ (0, o.np)(n, 13) ^ (0, o.np)(n, 22),
                            m = b + s(n, r, a) | 0;
                        p = h, h = f, f = d, d = u + g | 0, u = a, a = r, r = n, n = g + m | 0
                    }
                    n = n + this.A | 0, r = r + this.B | 0, a = a + this.C | 0, u = u + this.D | 0, d = d + this.E | 0, f = f + this.F | 0, h = h + this.G | 0, p = p + this.H | 0, this.set(n, r, a, u, d, f, h, p)
                }
                roundClean() {
                    l.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            let f = (0, o.hE)(() => new d)
        },
        57632: function(e, t, n) {
            n.d(t, {
                kb: function() {
                    return h
                },
                l1: function() {
                    return l
                },
                eV: function() {
                    return f
                },
                GL: function() {
                    return s
                },
                iA: function() {
                    return c
                },
                O6: function() {
                    return g
                },
                np: function() {
                    return a
                },
                O0: function() {
                    return d
                },
                Jq: function() {
                    return i
                },
                hE: function() {
                    return p
                }
            });
            let r = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0;
            var o = n(98478);
            let i = e => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
                s = e => new DataView(e.buffer, e.byteOffset, e.byteLength),
                a = (e, t) => e << 32 - t | e >>> t,
                c = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0],
                u = e => e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;

            function l(e) {
                for (let t = 0; t < e.length; t++) e[t] = u(e[t])
            }

            function d(e) {
                return "string" == typeof e && (e = function(e) {
                    if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
                    return new Uint8Array(new TextEncoder().encode(e))
                }(e)), (0, o.aI)(e), e
            }

            function f(...e) {
                let t = 0;
                for (let n = 0; n < e.length; n++) {
                    let r = e[n];
                    (0, o.aI)(r), t += r.length
                }
                let n = new Uint8Array(t);
                for (let t = 0, r = 0; t < e.length; t++) {
                    let o = e[t];
                    n.set(o, r), r += o.length
                }
                return n
            }
            class h {
                clone() {
                    return this._cloneInto()
                }
            }

            function p(e) {
                let t = t => e().update(d(t)).digest(),
                    n = e();
                return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t
            }

            function g(e = 32) {
                if (r && "function" == typeof r.getRandomValues) return r.getRandomValues(new Uint8Array(e));
                if (r && "function" == typeof r.randomBytes) return r.randomBytes(e);
                throw Error("crypto.getRandomValues must be defined")
            }
        },
        75476: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return r
                }
            });

            function r(e) {
                let t = e.state.current,
                    n = e.state.connections.get(t),
                    r = n ? .accounts,
                    o = r ? .[0],
                    i = e.chains.find(e => e.id === n ? .chainId),
                    s = e.state.status;
                switch (s) {
                    case "connected":
                        return {
                            address: o,
                            addresses: r,
                            chain: i,
                            chainId: n ? .chainId,
                            connector: n ? .connector,
                            isConnected: !0,
                            isConnecting: !1,
                            isDisconnected: !1,
                            isReconnecting: !1,
                            status: s
                        };
                    case "reconnecting":
                        return {
                            address: o,
                            addresses: r,
                            chain: i,
                            chainId: n ? .chainId,
                            connector: n ? .connector,
                            isConnected: !!o,
                            isConnecting: !1,
                            isDisconnected: !1,
                            isReconnecting: !0,
                            status: s
                        };
                    case "connecting":
                        return {
                            address: o,
                            addresses: r,
                            chain: i,
                            chainId: n ? .chainId,
                            connector: n ? .connector,
                            isConnected: !1,
                            isConnecting: !0,
                            isDisconnected: !1,
                            isReconnecting: !1,
                            status: s
                        };
                    case "disconnected":
                        return {
                            address: void 0,
                            addresses: void 0,
                            chain: void 0,
                            chainId: void 0,
                            connector: void 0,
                            isConnected: !1,
                            isConnecting: !1,
                            isDisconnected: !0,
                            isReconnecting: !1,
                            status: s
                        }
                }
            }
        },
        19888: function(e, t, n) {
            n.d(t, {
                e: function() {
                    return c
                }
            });
            var r = n(71368),
                o = n(83091),
                i = n(77218),
                s = n(92490),
                a = n(95451);
            async function c(e, t = {}) {
                let n;
                if (t.connector) {
                    let {
                        connector: r
                    } = t;
                    if ("reconnecting" === e.state.status && !r.getAccounts && !r.getChainId) throw new a.$S({
                        connector: r
                    });
                    let [o, i] = await Promise.all([r.getAccounts(), r.getChainId()]);
                    n = {
                        accounts: o,
                        chainId: i,
                        connector: r
                    }
                } else n = e.state.connections.get(e.state.current);
                if (!n) throw new a.aH;
                let c = t.chainId ? ? n.chainId,
                    u = await n.connector.getChainId();
                if (u !== n.chainId) throw new a.XZ({
                    connectionChainId: n.chainId,
                    connectorChainId: u
                });
                let l = n.connector;
                if (l.getClient) return l.getClient({
                    chainId: c
                });
                let d = (0, i.T)(t.account ? ? n.accounts[0]);
                if (d.address = (0, s.K)(d.address), t.account && !n.accounts.some(e => e.toLowerCase() === d.address.toLowerCase())) throw new a.JK({
                    address: d.address,
                    connector: l
                });
                let f = e.chains.find(e => e.id === c),
                    h = await n.connector.getProvider({
                        chainId: c
                    });
                return (0, r.e)({
                    account: d,
                    chain: f,
                    name: "Connector Client",
                    transport: e => (function(e, t = {}) {
                        let {
                            key: n = "custom",
                            name: r = "Custom Provider",
                            retryDelay: i
                        } = t;
                        return ({
                            retryCount: s
                        }) => (0, o.q)({
                            key: n,
                            name: r,
                            request: e.request.bind(e),
                            retryCount: t.retryCount ? ? s,
                            retryDelay: i,
                            type: "custom"
                        })
                    })(h)({ ...e,
                        retryCount: 0
                    })
                })
            }
        },
        88007: function(e, t, n) {
            n.d(t, {
                u: function() {
                    return i
                }
            });
            var r = n(20004),
                o = n(75476);

            function i(e, t) {
                let {
                    onChange: n
                } = t;
                return e.subscribe(() => (0, o.D)(e), n, {
                    equalityFn(e, t) {
                        let {
                            connector: n,
                            ...o
                        } = e, {
                            connector: i,
                            ...s
                        } = t;
                        return (0, r.v)(o, s) && n ? .id === i ? .id && n ? .uid === i ? .uid
                    }
                })
            }
        },
        45301: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return c
                }
            });
            var r, o, i = n(86979);
            let s = () => `@wagmi/core@${i.i}`;
            var a = function(e, t, n, r) {
                if ("a" === n && !r) throw TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
            };
            class c extends Error {
                get docsBaseUrl() {
                    return "https://wagmi.sh/core"
                }
                get version() {
                    return s()
                }
                constructor(e, t = {}) {
                    super(), r.add(this), Object.defineProperty(this, "details", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "docsPath", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "metaMessages", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "shortMessage", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "WagmiCoreError"
                    });
                    let n = t.cause instanceof c ? t.cause.details : t.cause ? .message ? t.cause.message : t.details,
                        o = t.cause instanceof c && t.cause.docsPath || t.docsPath;
                    this.message = [e || "An error occurred.", "", ...t.metaMessages ? [...t.metaMessages, ""] : [], ...o ? [`Docs: ${this.docsBaseUrl}${o}.html${t.docsSlug?`#${t.docsSlug}`:""}`] : [], ...n ? [`Details: ${n}`] : [], `Version: ${this.version}`].join("\n"), t.cause && (this.cause = t.cause), this.details = n, this.docsPath = o, this.metaMessages = t.metaMessages, this.shortMessage = e
                }
                walk(e) {
                    return a(this, r, "m", o).call(this, this, e)
                }
            }
            r = new WeakSet, o = function e(t, n) {
                return n ? .(t) ? t : t.cause ? a(this, r, "m", e).call(this, t.cause, n) : t
            }
        },
        95451: function(e, t, n) {
            n.d(t, {
                $S: function() {
                    return u
                },
                JK: function() {
                    return a
                },
                X4: function() {
                    return o
                },
                XZ: function() {
                    return c
                },
                aH: function() {
                    return s
                },
                wi: function() {
                    return i
                }
            });
            var r = n(45301);
            class o extends r.G {
                constructor() {
                    super("Chain not configured."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainNotConfiguredError"
                    })
                }
            }
            class i extends r.G {
                constructor() {
                    super("Connector already connected."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ConnectorAlreadyConnectedError"
                    })
                }
            }
            class s extends r.G {
                constructor() {
                    super("Connector not connected."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ConnectorNotConnectedError"
                    })
                }
            }
            class a extends r.G {
                constructor({
                    address: e,
                    connector: t
                }) {
                    super(`Account "${e}" not found for connector "${t.name}".`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ConnectorAccountNotFoundError"
                    })
                }
            }
            class c extends r.G {
                constructor({
                    connectionChainId: e,
                    connectorChainId: t
                }) {
                    super(`The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${e}).`, {
                        metaMessages: [`Current Chain ID:  ${t}`, `Expected Chain ID: ${e}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ConnectorChainMismatchError"
                    })
                }
            }
            class u extends r.G {
                constructor({
                    connector: e
                }) {
                    super(`Connector "${e.name}" unavailable while reconnecting.`, {
                        details: "During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uuid`. All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored. This error commonly occurs for connectors that asynchronously inject after reconnection has already started."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ConnectorUnavailableReconnectingError"
                    })
                }
            }
        },
        50973: function(e, t, n) {
            n.d(t, {
                OP: function() {
                    return c
                },
                if: function() {
                    return i
                },
                kq: function() {
                    return s
                }
            });
            var r = n(18636),
                o = n(20004);

            function i(e, t) {
                return (0, o.v)(e, t) ? e : (0, r.Q$)(e, t)
            }

            function s(e) {
                return JSON.stringify(e, (e, t) => ! function(e) {
                    if (!a(e)) return !1;
                    let t = e.constructor;
                    if (void 0 === t) return !0;
                    let n = t.prototype;
                    return !!(a(n) && n.hasOwnProperty("isPrototypeOf"))
                }(t) ? "bigint" == typeof t ? t.toString() : t : Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}))
            }

            function a(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function c(e) {
                let {
                    _defaulted: t,
                    behavior: n,
                    gcTime: r,
                    initialData: o,
                    initialDataUpdatedAt: i,
                    maxPages: s,
                    meta: a,
                    networkMode: c,
                    queryFn: u,
                    queryHash: l,
                    queryKey: d,
                    queryKeyHashFn: f,
                    retry: h,
                    retryDelay: p,
                    structuralSharing: g,
                    getPreviousPageParam: b,
                    getNextPageParam: m,
                    initialPageParam: y,
                    _optimisticResults: v,
                    enabled: w,
                    notifyOnChangeProps: x,
                    placeholderData: P,
                    refetchInterval: $,
                    refetchIntervalInBackground: G,
                    refetchOnMount: E,
                    refetchOnReconnect: I,
                    refetchOnWindowFocus: C,
                    retryOnMount: B,
                    select: M,
                    staleTime: O,
                    suspense: A,
                    throwOnError: F,
                    config: z,
                    connector: j,
                    query: T,
                    ...k
                } = e;
                return k
            }
        },
        20004: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return function e(t, n) {
                        if (t === n) return !0;
                        if (t && n && "object" == typeof t && "object" == typeof n) {
                            let r, o;
                            if (t.constructor !== n.constructor) return !1;
                            if (Array.isArray(t) && Array.isArray(n)) {
                                if ((r = t.length) !== n.length) return !1;
                                for (o = r; 0 != o--;)
                                    if (!e(t[o], n[o])) return !1;
                                return !0
                            }
                            if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
                            if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
                            let i = Object.keys(t);
                            if ((r = i.length) !== Object.keys(n).length) return !1;
                            for (o = r; 0 != o--;)
                                if (!Object.prototype.hasOwnProperty.call(n, i[o])) return !1;
                            for (o = r; 0 != o--;) {
                                let r = i[o];
                                if (r && !e(t[r], n[r])) return !1
                            }
                            return !0
                        }
                        return t != t && n != n
                    }
                }
            })
        },
        86979: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return r
                }
            });
            let r = "2.14.1"
        },
        2209: function(e, t, n) {
            function r(e, t) {
                let n = e.exec(t);
                return n ? .groups
            }
            n.d(t, {
                Zw: function() {
                    return r
                },
                cN: function() {
                    return s
                },
                eL: function() {
                    return o
                },
                lh: function() {
                    return i
                }
            });
            let o = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
                i = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
                s = /^\(.+?\).*?$/
        },
        77218: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return r
                }
            });

            function r(e) {
                return "string" == typeof e ? {
                    address: e,
                    type: "json-rpc"
                } : e
            }
        },
        12756: function(e, t, n) {
            n.d(t, {
                C: function() {
                    return u
                },
                X: function() {
                    return c
                }
            });
            var r = n(25095),
                o = n(23346),
                i = n(35725),
                s = n(91319),
                a = n(89621);
            async function c(e, t) {
                return u(e, t)
            }
            async function u(e, t) {
                let {
                    block: n,
                    chain: c = e.chain,
                    request: u,
                    type: l = "eip1559"
                } = t || {}, d = await (async () => "function" == typeof c ? .fees ? .baseFeeMultiplier ? c.fees.baseFeeMultiplier({
                    block: n,
                    client: e,
                    request: u
                }) : c ? .fees ? .baseFeeMultiplier ? ? 1.2)();
                if (d < 1) throw new r.Fz;
                let f = d.toString().split(".")[1] ? .length ? ? 0,
                    h = 10 ** f,
                    p = e => e * BigInt(Math.ceil(d * h)) / BigInt(h),
                    g = n || await (0, o.s)(e, s.Q, "getBlock")({});
                if ("function" == typeof c ? .fees ? .estimateFeesPerGas) {
                    let t = await c.fees.estimateFeesPerGas({
                        block: n,
                        client: e,
                        multiply: p,
                        request: u,
                        type: l
                    });
                    if (null !== t) return t
                }
                if ("eip1559" === l) {
                    if ("bigint" != typeof g.baseFeePerGas) throw new r.e5;
                    let t = "bigint" == typeof u ? .maxPriorityFeePerGas ? u.maxPriorityFeePerGas : await (0, i.h)(e, {
                            block: g,
                            chain: c,
                            request: u
                        }),
                        n = p(g.baseFeePerGas),
                        o = u ? .maxFeePerGas ? ? n + t;
                    return {
                        maxFeePerGas: o,
                        maxPriorityFeePerGas: t
                    }
                }
                let b = u ? .gasPrice ? ? p(await (0, o.s)(e, a.o, "getGasPrice")({}));
                return {
                    gasPrice: b
                }
            }
        },
        78648: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return v
                }
            });
            var r = n(77218),
                o = n(26045),
                i = n(13657),
                s = n(82646),
                a = n(15021),
                c = n(70792),
                u = n(22334);
            class l extends o.G {
                constructor(e, {
                    account: t,
                    docsPath: n,
                    chain: r,
                    data: o,
                    gas: i,
                    gasPrice: s,
                    maxFeePerGas: l,
                    maxPriorityFeePerGas: d,
                    nonce: f,
                    to: h,
                    value: p
                }) {
                    let g = (0, u.xr)({
                        from: t ? .address,
                        to: h,
                        value: void 0 !== p && `${(0,a.d)(p)} ${r?.nativeCurrency?.symbol||"ETH"}`,
                        data: o,
                        gas: i,
                        gasPrice: void 0 !== s && `${(0,c.o)(s)} gwei`,
                        maxFeePerGas: void 0 !== l && `${(0,c.o)(l)} gwei`,
                        maxPriorityFeePerGas: void 0 !== d && `${(0,c.o)(d)} gwei`,
                        nonce: f
                    });
                    super(e.shortMessage, {
                        cause: e,
                        docsPath: n,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Estimate Gas Arguments:", g].filter(Boolean),
                        name: "EstimateGasExecutionError"
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.cause = e
                }
            }
            var d = n(31325),
                f = n(17743),
                h = n(30947),
                p = n(76517),
                g = n(63014),
                b = n(10129),
                m = n(39521),
                y = n(55397);
            async function v(e, t) {
                let {
                    account: n = e.account
                } = t, a = n ? (0, r.T)(n) : void 0;
                try {
                    let {
                        accessList: n,
                        authorizationList: r,
                        blobs: u,
                        blobVersionedHashes: l,
                        blockNumber: d,
                        blockTag: f,
                        data: v,
                        gas: w,
                        gasPrice: x,
                        maxFeePerBlobGas: P,
                        maxFeePerGas: $,
                        maxPriorityFeePerGas: G,
                        nonce: E,
                        value: I,
                        stateOverride: C,
                        ...B
                    } = await (0, m.Z)(e, { ...t,
                        parameters: a ? .type === "local" ? void 0 : ["blobVersionedHashes"]
                    }), M = d ? (0, s.eC)(d) : void 0, O = M || f, A = (0, g.mF)(C), F = await (async () => B.to ? B.to : r && r.length > 0 ? await (0, i.z)({
                        authorization: r[0]
                    }).catch(() => {
                        throw new o.G("`to` is required. Could not infer from `authorizationList`")
                    }) : void 0)();
                    (0, b.F)(t);
                    let z = e.chain ? .formatters ? .transactionRequest ? .format,
                        j = z || p.tG,
                        T = j({ ...(0, h.K)(B, {
                                format: z
                            }),
                            from: a ? .address,
                            accessList: n,
                            authorizationList: r,
                            blobs: u,
                            blobVersionedHashes: l,
                            data: v,
                            gas: w,
                            gasPrice: x,
                            maxFeePerBlobGas: P,
                            maxFeePerGas: $,
                            maxPriorityFeePerGas: G,
                            nonce: E,
                            to: F,
                            value: I
                        });

                    function c(t) {
                        let {
                            block: n,
                            request: r,
                            rpcStateOverride: o
                        } = t;
                        return e.request({
                            method: "eth_estimateGas",
                            params: o ? [r, n ? ? "latest", o] : n ? [r, n] : [r]
                        })
                    }
                    let k = BigInt(await c({
                        block: O,
                        request: T,
                        rpcStateOverride: A
                    }));
                    if (r) {
                        let t = await (0, y.s)(e, {
                                address: T.from
                            }),
                            n = await Promise.all(r.map(async e => {
                                let {
                                    contractAddress: n
                                } = e, r = await c({
                                    block: O,
                                    request: {
                                        authorizationList: void 0,
                                        data: v,
                                        from: a ? .address,
                                        to: n,
                                        value: (0, s.eC)(t)
                                    },
                                    rpcStateOverride: A
                                }).catch(() => 100000 n);
                                return 2 n * BigInt(r)
                            }));
                        k += n.reduce((e, t) => e + t, 0 n)
                    }
                    return k
                } catch (n) {
                    throw function(e, {
                        docsPath: t,
                        ...n
                    }) {
                        let r = (() => {
                            let t = (0, f.k)(e, n);
                            return t instanceof d.cj ? e : t
                        })();
                        return new l(r, {
                            docsPath: t,
                            ...n
                        })
                    }(n, { ...t,
                        account: a,
                        chain: e.chain
                    })
                }
            }
        },
        35725: function(e, t, n) {
            n.d(t, {
                _: function() {
                    return c
                },
                h: function() {
                    return u
                }
            });
            var r = n(25095),
                o = n(90130),
                i = n(23346),
                s = n(91319),
                a = n(89621);
            async function c(e, t) {
                return u(e, t)
            }
            async function u(e, t) {
                let {
                    block: n,
                    chain: c = e.chain,
                    request: u
                } = t || {};
                try {
                    let t = c ? .fees ? .maxPriorityFeePerGas ? ? c ? .fees ? .defaultPriorityFee;
                    if ("function" == typeof t) {
                        let r = n || await (0, i.s)(e, s.Q, "getBlock")({}),
                            o = await t({
                                block: r,
                                client: e,
                                request: u
                            });
                        if (null === o) throw Error();
                        return o
                    }
                    if (void 0 !== t) return t;
                    let r = await e.request({
                        method: "eth_maxPriorityFeePerGas"
                    });
                    return (0, o.y_)(r)
                } catch {
                    let [t, o] = await Promise.all([n ? Promise.resolve(n) : (0, i.s)(e, s.Q, "getBlock")({}), (0, i.s)(e, a.o, "getGasPrice")({})]);
                    if ("bigint" != typeof t.baseFeePerGas) throw new r.e5;
                    let c = o - t.baseFeePerGas;
                    if (c < 0 n) return 0 n;
                    return c
                }
            }
        },
        55397: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return o
                }
            });
            var r = n(82646);
            async function o(e, {
                address: t,
                blockNumber: n,
                blockTag: o = "latest"
            }) {
                let i = n ? (0, r.eC)(n) : void 0,
                    s = await e.request({
                        method: "eth_getBalance",
                        params: [t, i || o]
                    });
                return BigInt(s)
            }
        },
        91319: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return s
                }
            });
            var r = n(45488),
                o = n(82646),
                i = n(63312);
            async function s(e, {
                blockHash: t,
                blockNumber: n,
                blockTag: s,
                includeTransactions: a
            } = {}) {
                let c = a ? ? !1,
                    u = void 0 !== n ? (0, o.eC)(n) : void 0,
                    l = null;
                if (!(l = t ? await e.request({
                        method: "eth_getBlockByHash",
                        params: [t, c]
                    }, {
                        dedupe: !0
                    }) : await e.request({
                        method: "eth_getBlockByNumber",
                        params: [u || (s ? ? "latest"), c]
                    }, {
                        dedupe: !!u
                    }))) throw new r.f({
                    blockHash: t,
                    blockNumber: n
                });
                let d = e.chain ? .formatters ? .block ? .format || i.Z;
                return d(l)
            }
        },
        93718: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return o
                }
            });
            var r = n(90130);
            async function o(e) {
                let t = await e.request({
                    method: "eth_chainId"
                }, {
                    dedupe: !0
                });
                return (0, r.ly)(t)
            }
        },
        89621: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return r
                }
            });
            async function r(e) {
                let t = await e.request({
                    method: "eth_gasPrice"
                });
                return BigInt(t)
            }
        },
        88418: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return i
                }
            });
            var r = n(90130),
                o = n(82646);
            async function i(e, {
                address: t,
                blockTag: n = "latest",
                blockNumber: i
            }) {
                let s = await e.request({
                    method: "eth_getTransactionCount",
                    params: [t, i ? (0, o.eC)(i) : n]
                }, {
                    dedupe: !!i
                });
                return (0, r.ly)(s)
            }
        },
        39521: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return G
                },
                Z: function() {
                    return E
                }
            });
            var r = n(77218),
                o = n(12756),
                i = n(78648),
                s = n(91319),
                a = n(88418),
                c = n(25095),
                u = n(89862),
                l = n(82646);

            function d(e) {
                let {
                    kzg: t
                } = e, n = e.to ? ? ("string" == typeof e.blobs[0] ? "hex" : "bytes"), r = "string" == typeof e.blobs[0] ? e.blobs.map(e => (0, u.nr)(e)) : e.blobs, o = [];
                for (let e of r) o.push(Uint8Array.from(t.blobToKzgCommitment(e)));
                return "bytes" === n ? o : o.map(e => (0, l.ci)(e))
            }

            function f(e) {
                let {
                    kzg: t
                } = e, n = e.to ? ? ("string" == typeof e.blobs[0] ? "hex" : "bytes"), r = "string" == typeof e.blobs[0] ? e.blobs.map(e => (0, u.nr)(e)) : e.blobs, o = "string" == typeof e.commitments[0] ? e.commitments.map(e => (0, u.nr)(e)) : e.commitments, i = [];
                for (let e = 0; e < r.length; e++) {
                    let n = r[e],
                        s = o[e];
                    i.push(Uint8Array.from(t.computeBlobKzgProof(n, s)))
                }
                return "bytes" === n ? i : i.map(e => (0, l.ci)(e))
            }
            var h = n(17508),
                p = n(17360),
                g = n(26045);
            class b extends g.G {
                constructor({
                    maxSize: e,
                    size: t
                }) {
                    super("Blob size is too large.", {
                        metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
                        name: "BlobSizeTooLargeError"
                    })
                }
            }
            class m extends g.G {
                constructor() {
                    super("Blob data must not be empty.", {
                        name: "EmptyBlobError"
                    })
                }
            }
            var y = n(19658),
                v = n(8536),
                w = n(23346),
                x = n(10129),
                P = n(22334),
                $ = n(93718);
            let G = ["blobVersionedHashes", "chainId", "fees", "gas", "nonce", "type"];
            async function E(e, t) {
                let n, g;
                let {
                    account: E = e.account,
                    blobs: I,
                    chain: C,
                    gas: B,
                    kzg: M,
                    nonce: O,
                    nonceManager: A,
                    parameters: F = G,
                    type: z
                } = t, j = E ? (0, r.T)(E) : E, T = { ...t,
                    ...j ? {
                        from: j ? .address
                    } : {}
                };
                async function k() {
                    return n || (n = await (0, w.s)(e, s.Q, "getBlock")({
                        blockTag: "latest"
                    }))
                }
                async function S() {
                    if (g) return g;
                    if (C) return C.id;
                    if (void 0 !== t.chainId) return t.chainId;
                    let n = await (0, w.s)(e, $.L, "getChainId")({});
                    return g = n
                }
                if ((F.includes("blobVersionedHashes") || F.includes("sidecars")) && I && M) {
                    let e = d({
                        blobs: I,
                        kzg: M
                    });
                    if (F.includes("blobVersionedHashes")) {
                        let t = function(e) {
                            let {
                                commitments: t,
                                version: n
                            } = e, r = e.to ? ? ("string" == typeof t[0] ? "hex" : "bytes"), o = [];
                            for (let e of t) o.push(function(e) {
                                let {
                                    commitment: t,
                                    version: n = 1
                                } = e, r = e.to ? ? ("string" == typeof t ? "hex" : "bytes"), o = function(e, t) {
                                    let n = (0, h.JQ)((0, p.v)(e, {
                                        strict: !1
                                    }) ? (0, u.O0)(e) : e);
                                    return "bytes" === (t || "hex") ? n : (0, l.NC)(n)
                                }(t, "bytes");
                                return o.set([n], 0), "bytes" === r ? o : (0, l.ci)(o)
                            }({
                                commitment: e,
                                to: r,
                                version: n
                            }));
                            return o
                        }({
                            commitments: e,
                            to: "hex"
                        });
                        T.blobVersionedHashes = t
                    }
                    if (F.includes("sidecars")) {
                        let t = f({
                                blobs: I,
                                commitments: e,
                                kzg: M
                            }),
                            n = function(e) {
                                let {
                                    data: t,
                                    kzg: n,
                                    to: r
                                } = e, o = e.blobs ? ? function(e) {
                                    let t = e.to ? ? ("string" == typeof e.data ? "hex" : "bytes"),
                                        n = "string" == typeof e.data ? (0, u.nr)(e.data) : e.data,
                                        r = (0, v.d)(n);
                                    if (!r) throw new m;
                                    if (r > 761855) throw new b({
                                        maxSize: 761855,
                                        size: r
                                    });
                                    let o = [],
                                        i = !0,
                                        s = 0;
                                    for (; i;) {
                                        let e = (0, y.q)(new Uint8Array(131072)),
                                            t = 0;
                                        for (; t < 4096;) {
                                            let r = n.slice(s, s + 31);
                                            if (e.pushByte(0), e.pushBytes(r), r.length < 31) {
                                                e.pushByte(128), i = !1;
                                                break
                                            }
                                            t++, s += 31
                                        }
                                        o.push(e)
                                    }
                                    return "bytes" === t ? o.map(e => e.bytes) : o.map(e => (0, l.ci)(e.bytes))
                                }({
                                    data: t,
                                    to: r
                                }), i = e.commitments ? ? d({
                                    blobs: o,
                                    kzg: n,
                                    to: r
                                }), s = e.proofs ? ? f({
                                    blobs: o,
                                    commitments: i,
                                    kzg: n,
                                    to: r
                                }), a = [];
                                for (let e = 0; e < o.length; e++) a.push({
                                    blob: o[e],
                                    commitment: i[e],
                                    proof: s[e]
                                });
                                return a
                            }({
                                blobs: I,
                                commitments: e,
                                proofs: t,
                                to: "hex"
                            });
                        T.sidecars = n
                    }
                }
                if (F.includes("chainId") && (T.chainId = await S()), F.includes("nonce") && void 0 === O && j) {
                    if (A) {
                        let t = await S();
                        T.nonce = await A.consume({
                            address: j.address,
                            chainId: t,
                            client: e
                        })
                    } else T.nonce = await (0, w.s)(e, a.K, "getTransactionCount")({
                        address: j.address,
                        blockTag: "pending"
                    })
                }
                if ((F.includes("fees") || F.includes("type")) && void 0 === z) try {
                    T.type = function(e) {
                        if (e.type) return e.type;
                        if (void 0 !== e.authorizationList) return "eip7702";
                        if (void 0 !== e.blobs || void 0 !== e.blobVersionedHashes || void 0 !== e.maxFeePerBlobGas || void 0 !== e.sidecars) return "eip4844";
                        if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas) return "eip1559";
                        if (void 0 !== e.gasPrice) return void 0 !== e.accessList ? "eip2930" : "legacy";
                        throw new P.j3({
                            transaction: e
                        })
                    }(T)
                } catch {
                    let e = await k();
                    T.type = "bigint" == typeof e ? .baseFeePerGas ? "eip1559" : "legacy"
                }
                if (F.includes("fees")) {
                    if ("legacy" !== T.type && "eip2930" !== T.type) {
                        if (void 0 === T.maxFeePerGas || void 0 === T.maxPriorityFeePerGas) {
                            let n = await k(),
                                {
                                    maxFeePerGas: r,
                                    maxPriorityFeePerGas: i
                                } = await (0, o.C)(e, {
                                    block: n,
                                    chain: C,
                                    request: T
                                });
                            if (void 0 === t.maxPriorityFeePerGas && t.maxFeePerGas && t.maxFeePerGas < i) throw new c.ld({
                                maxPriorityFeePerGas: i
                            });
                            T.maxPriorityFeePerGas = i, T.maxFeePerGas = r
                        }
                    } else {
                        if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas) throw new c.e5;
                        let n = await k(),
                            {
                                gasPrice: r
                            } = await (0, o.C)(e, {
                                block: n,
                                chain: C,
                                request: T,
                                type: "legacy"
                            });
                        T.gasPrice = r
                    }
                }
                return F.includes("gas") && void 0 === B && (T.gas = await (0, w.s)(e, i.Q, "estimateGas")({ ...T,
                    account: j ? {
                        address: j.address,
                        type: "json-rpc"
                    } : j
                })), (0, x.F)(T), delete T.parameters, T
            }
        },
        83040: function(e, t, n) {
            n.d(t, {
                p: function() {
                    return r
                }
            });
            async function r(e, {
                serializedTransaction: t
            }) {
                return e.request({
                    method: "eth_sendRawTransaction",
                    params: [t]
                }, {
                    retryCount: 0
                })
            }
        },
        12547: function(e, t, n) {
            n.d(t, {
                l: function() {
                    return s
                }
            });
            var r = n(77218),
                o = n(25134),
                i = n(82646);
            async function s(e, {
                account: t = e.account,
                message: n
            }) {
                if (!t) throw new o.o({
                    docsPath: "/docs/actions/wallet/signMessage"
                });
                let s = (0, r.T)(t);
                if (s.signMessage) return s.signMessage({
                    message: n
                });
                let a = "string" == typeof n ? (0, i.$G)(n) : n.raw instanceof Uint8Array ? (0, i.NC)(n.raw) : n.raw;
                return e.request({
                    method: "personal_sign",
                    params: [a, s.address]
                }, {
                    retryCount: 0
                })
            }
        },
        71368: function(e, t, n) {
            n.d(t, {
                e: function() {
                    return i
                }
            });
            var r = n(77218),
                o = n(54622);

            function i(e) {
                let {
                    batch: t,
                    cacheTime: n = e.pollingInterval ? ? 4e3,
                    ccipRead: i,
                    key: s = "base",
                    name: a = "Base Client",
                    pollingInterval: c = 4e3,
                    type: u = "base"
                } = e, l = e.chain, d = e.account ? (0, r.T)(e.account) : void 0, {
                    config: f,
                    request: h,
                    value: p
                } = e.transport({
                    chain: l,
                    pollingInterval: c
                }), g = { ...f,
                    ...p
                }, b = {
                    account: d,
                    batch: t,
                    cacheTime: n,
                    ccipRead: i,
                    chain: l,
                    key: s,
                    name: a,
                    pollingInterval: c,
                    request: h,
                    transport: g,
                    type: u,
                    uid: (0, o.h)()
                };
                return Object.assign(b, {
                    extend: function e(t) {
                        return n => {
                            let r = n(t);
                            for (let e in b) delete r[e];
                            let o = { ...t,
                                ...r
                            };
                            return Object.assign(o, {
                                extend: e(o)
                            })
                        }
                    }(b)
                })
            }
        },
        83091: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return h
                }
            });
            var r = n(26045),
                o = n(41409),
                i = n(73397),
                s = n(82646),
                a = n(88653),
                c = n(38532);
            let u = new c.k(8192);
            var l = n(3069),
                d = n(821),
                f = n(54622);

            function h({
                key: e,
                name: t,
                request: n,
                retryCount: c = 3,
                retryDelay: h = 150,
                timeout: p,
                type: g
            }, b) {
                let m = (0, f.h)();
                return {
                    config: {
                        key: e,
                        name: t,
                        request: n,
                        retryCount: c,
                        retryDelay: h,
                        timeout: p,
                        type: g
                    },
                    request: function(e, t = {}) {
                        return async (n, c = {}) => {
                            let {
                                dedupe: f = !1,
                                retryDelay: h = 150,
                                retryCount: p = 3,
                                uid: g
                            } = { ...t,
                                ...c
                            }, b = f ? (0, a.w)((0, s.$G)(`${g}.${(0,d.P)(n)}`)) : void 0;
                            return function(e, {
                                enabled: t = !0,
                                id: n
                            }) {
                                if (!t || !n) return e();
                                if (u.get(n)) return u.get(n);
                                let r = e().finally(() => u.delete(n));
                                return u.set(n, r), r
                            }(() => (0, l.J)(async () => {
                                try {
                                    return await e(n)
                                } catch (e) {
                                    switch (e.code) {
                                        case i.s7.code:
                                            throw new i.s7(e);
                                        case i.B.code:
                                            throw new i.B(e);
                                        case i.LX.code:
                                            throw new i.LX(e, {
                                                method: n.method
                                            });
                                        case i.nY.code:
                                            throw new i.nY(e);
                                        case i.XS.code:
                                            throw new i.XS(e);
                                        case i.yR.code:
                                            throw new i.yR(e);
                                        case i.Og.code:
                                            throw new i.Og(e);
                                        case i.pT.code:
                                            throw new i.pT(e);
                                        case i.KB.code:
                                            throw new i.KB(e);
                                        case i.gS.code:
                                            throw new i.gS(e, {
                                                method: n.method
                                            });
                                        case i.Pv.code:
                                            throw new i.Pv(e);
                                        case i.GD.code:
                                            throw new i.GD(e);
                                        case i.ab.code:
                                            throw new i.ab(e);
                                        case i.PE.code:
                                            throw new i.PE(e);
                                        case i.Ts.code:
                                            throw new i.Ts(e);
                                        case i.u5.code:
                                            throw new i.u5(e);
                                        case i.I0.code:
                                            throw new i.I0(e);
                                        case i.x3.code:
                                            throw new i.x3(e);
                                        case 5e3:
                                            throw new i.ab(e);
                                        default:
                                            if (e instanceof r.G) throw e;
                                            throw new i.ir(e)
                                    }
                                }
                            }, {
                                delay: ({
                                    count: e,
                                    error: t
                                }) => {
                                    if (t && t instanceof o.Gg) {
                                        let e = t ? .headers ? .get("Retry-After");
                                        if (e ? .match(/\d/)) return 1e3 * Number.parseInt(e)
                                    }
                                    return ~~(1 << e) * h
                                },
                                retryCount: p,
                                shouldRetry: ({
                                    error: e
                                }) => "code" in e && "number" == typeof e.code ? -1 === e.code || e.code === i.Pv.code || e.code === i.XS.code : !(e instanceof o.Gg) || !e.status || 403 === e.status || 408 === e.status || 413 === e.status || 429 === e.status || 500 === e.status || 502 === e.status || 503 === e.status || 504 === e.status
                            }), {
                                enabled: f,
                                id: b
                            })
                        }
                    }(n, {
                        retryCount: c,
                        retryDelay: h,
                        uid: m
                    }),
                    value: b
                }
            }
        },
        90986: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return r
                },
                Up: function() {
                    return o
                },
                hZ: function() {
                    return i
                }
            });
            let r = {
                    1: "An `assert` condition failed.",
                    17: "Arithmetic operation resulted in underflow or overflow.",
                    18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
                    33: "Attempted to convert to an invalid type.",
                    34: "Attempted to access a storage byte array that is incorrectly encoded.",
                    49: "Performed `.pop()` on an empty array",
                    50: "Array index is out of bounds.",
                    65: "Allocated too much memory or created an array which is too large.",
                    81: "Attempted to call a zero-initialized variable of internal function type."
                },
                o = {
                    inputs: [{
                        name: "message",
                        type: "string"
                    }],
                    name: "Error",
                    type: "error"
                },
                i = {
                    inputs: [{
                        name: "reason",
                        type: "uint256"
                    }],
                    name: "Panic",
                    type: "error"
                }
        },
        64787: function(e, t, n) {
            n.d(t, {
                Bd: function() {
                    return i
                },
                Zn: function() {
                    return o
                },
                ez: function() {
                    return r
                }
            });
            let r = {
                    gwei: 9,
                    wei: 18
                },
                o = {
                    ether: -9,
                    wei: 9
                },
                i = {
                    ether: -18,
                    gwei: -9
                }
        },
        7158: function(e, t, n) {
            n.d(t, {
                CI: function() {
                    return G
                },
                FM: function() {
                    return p
                },
                Gy: function() {
                    return P
                },
                KY: function() {
                    return w
                },
                M4: function() {
                    return d
                },
                MX: function() {
                    return y
                },
                S4: function() {
                    return v
                },
                SM: function() {
                    return x
                },
                cO: function() {
                    return a
                },
                dh: function() {
                    return $
                },
                fM: function() {
                    return s
                },
                fs: function() {
                    return f
                },
                gr: function() {
                    return l
                },
                hn: function() {
                    return E
                },
                lC: function() {
                    return g
                },
                mv: function() {
                    return b
                },
                wM: function() {
                    return I
                },
                wb: function() {
                    return u
                },
                xB: function() {
                    return c
                },
                xL: function() {
                    return m
                },
                yP: function() {
                    return h
                }
            });
            var r = n(17445),
                o = n(8536),
                i = n(26045);
            class s extends i.G {
                constructor({
                    docsPath: e
                }) {
                    super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.", {
                        docsPath: e,
                        name: "AbiConstructorNotFoundError"
                    })
                }
            }
            class a extends i.G {
                constructor({
                    docsPath: e
                }) {
                    super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.", {
                        docsPath: e,
                        name: "AbiConstructorParamsNotFoundError"
                    })
                }
            }
            class c extends i.G {
                constructor({
                    data: e,
                    params: t,
                    size: n
                }) {
                    super(`Data size of ${n} bytes is too small for given parameters.`, {
                        metaMessages: [`Params: (${(0,r.h)(t,{includeName:!0})})`, `Data:   ${e} (${n} bytes)`],
                        name: "AbiDecodingDataSizeTooSmallError"
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "params", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "size", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = e, this.params = t, this.size = n
                }
            }
            class u extends i.G {
                constructor() {
                    super('Cannot decode zero data ("0x") with ABI parameters.', {
                        name: "AbiDecodingZeroDataError"
                    })
                }
            }
            class l extends i.G {
                constructor({
                    expectedLength: e,
                    givenLength: t,
                    type: n
                }) {
                    super(`ABI encoding array length mismatch for type ${n}.
Expected length: ${e}
Given length: ${t}`, {
                        name: "AbiEncodingArrayLengthMismatchError"
                    })
                }
            }
            class d extends i.G {
                constructor({
                    expectedSize: e,
                    value: t
                }) {
                    super(`Size of bytes "${t}" (bytes${(0,o.d)(t)}) does not match expected size (bytes${e}).`, {
                        name: "AbiEncodingBytesSizeMismatchError"
                    })
                }
            }
            class f extends i.G {
                constructor({
                    expectedLength: e,
                    givenLength: t
                }) {
                    super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`, {
                        name: "AbiEncodingLengthMismatchError"
                    })
                }
            }
            class h extends i.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`, {
                        docsPath: t,
                        name: "AbiErrorSignatureNotFoundError"
                    }), Object.defineProperty(this, "signature", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.signature = e
                }
            }
            class p extends i.G {
                constructor({
                    docsPath: e
                }) {
                    super("Cannot extract event signature from empty topics.", {
                        docsPath: e,
                        name: "AbiEventSignatureEmptyTopicsError"
                    })
                }
            }
            class g extends i.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`, {
                        docsPath: t,
                        name: "AbiEventSignatureNotFoundError"
                    })
                }
            }
            class b extends i.G {
                constructor(e, {
                    docsPath: t
                } = {}) {
                    super(`Event ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`, {
                        docsPath: t,
                        name: "AbiEventNotFoundError"
                    })
                }
            }
            class m extends i.G {
                constructor(e, {
                    docsPath: t
                } = {}) {
                    super(`Function ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`, {
                        docsPath: t,
                        name: "AbiFunctionNotFoundError"
                    })
                }
            }
            class y extends i.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`, {
                        docsPath: t,
                        name: "AbiFunctionOutputsNotFoundError"
                    })
                }
            }
            class v extends i.G {
                constructor(e, t) {
                    super("Found ambiguous types in overloaded ABI items.", {
                        metaMessages: [`\`${e.type}\` in \`${(0,r.t)(e.abiItem)}\`, and`, `\`${t.type}\` in \`${(0,r.t)(t.abiItem)}\``, "", "These types encode differently and cannot be distinguished at runtime.", "Remove one of the ambiguous items in the ABI."],
                        name: "AbiItemAmbiguityError"
                    })
                }
            }
            class w extends i.G {
                constructor({
                    expectedSize: e,
                    givenSize: t
                }) {
                    super(`Expected bytes${e}, got bytes${t}.`, {
                        name: "BytesSizeMismatchError"
                    })
                }
            }
            class x extends i.G {
                constructor({
                    abiItem: e,
                    data: t,
                    params: n,
                    size: o
                }) {
                    super(`Data size of ${o} bytes is too small for non-indexed event parameters.`, {
                        metaMessages: [`Params: (${(0,r.h)(n,{includeName:!0})})`, `Data:   ${t} (${o} bytes)`],
                        name: "DecodeLogDataMismatch"
                    }), Object.defineProperty(this, "abiItem", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "params", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "size", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.abiItem = e, this.data = t, this.params = n, this.size = o
                }
            }
            class P extends i.G {
                constructor({
                    abiItem: e,
                    param: t
                }) {
                    super(`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${(0,r.t)(e,{includeName:!0})}".`, {
                        name: "DecodeLogTopicsMismatch"
                    }), Object.defineProperty(this, "abiItem", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.abiItem = e
                }
            }
            class $ extends i.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`, {
                        docsPath: t,
                        name: "InvalidAbiEncodingType"
                    })
                }
            }
            class G extends i.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`, {
                        docsPath: t,
                        name: "InvalidAbiDecodingType"
                    })
                }
            }
            class E extends i.G {
                constructor(e) {
                    super(`Value "${e}" is not a valid array.`, {
                        name: "InvalidArrayError"
                    })
                }
            }
            class I extends i.G {
                constructor(e) {
                    super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`, {
                        name: "InvalidDefinitionTypeError"
                    })
                }
            }
        },
        25134: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return i
                },
                o: function() {
                    return o
                }
            });
            var r = n(26045);
            class o extends r.G {
                constructor({
                    docsPath: e
                } = {}) {
                    super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.", {
                        docsPath: e,
                        docsSlug: "account",
                        name: "AccountNotFoundError"
                    })
                }
            }
            class i extends r.G {
                constructor({
                    docsPath: e,
                    metaMessages: t,
                    type: n
                }) {
                    super(`Account type "${n}" is not supported.`, {
                        docsPath: e,
                        metaMessages: t,
                        name: "AccountTypeNotSupportedError"
                    })
                }
            }
        },
        12122: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return o
                }
            });
            var r = n(26045);
            class o extends r.G {
                constructor({
                    address: e
                }) {
                    super(`Address "${e}" is invalid.`, {
                        metaMessages: ["- Address must be a hex value of 20 bytes (40 hex characters).", "- Address must match its checksum counterpart."],
                        name: "InvalidAddressError"
                    })
                }
            }
        },
        26045: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return i
                }
            });
            let r = "2.21.38",
                o = {
                    getDocsUrl: ({
                        docsBaseUrl: e,
                        docsPath: t = "",
                        docsSlug: n
                    }) => t ? `${e??"https://viem.sh"}${t}${n?`#${n}`:""}` : void 0,
                    version: `viem@${r}`
                };
            class i extends Error {
                constructor(e, t = {}) {
                    let n = t.cause instanceof i ? t.cause.details : t.cause ? .message ? t.cause.message : t.details,
                        s = t.cause instanceof i && t.cause.docsPath || t.docsPath,
                        a = o.getDocsUrl ? .({ ...t,
                            docsPath: s
                        }),
                        c = [e || "An error occurred.", "", ...t.metaMessages ? [...t.metaMessages, ""] : [], ...a ? [`Docs: ${a}`] : [], ...n ? [`Details: ${n}`] : [], ...o.version ? [`Version: ${o.version}`] : []].join("\n");
                    super(c, t.cause ? {
                        cause: t.cause
                    } : void 0), Object.defineProperty(this, "details", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "docsPath", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "metaMessages", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "shortMessage", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "version", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "BaseError"
                    }), this.details = n, this.docsPath = s, this.metaMessages = t.metaMessages, this.name = t.name ? ? this.name, this.shortMessage = e, this.version = r
                }
                walk(e) {
                    return function e(t, n) {
                        return n ? .(t) ? t : t && "object" == typeof t && "cause" in t ? e(t.cause, n) : n ? null : t
                    }(this, e)
                }
            }
        },
        45488: function(e, t, n) {
            n.d(t, {
                f: function() {
                    return o
                }
            });
            var r = n(26045);
            class o extends r.G {
                constructor({
                    blockHash: e,
                    blockNumber: t
                }) {
                    let n = "Block";
                    e && (n = `Block at hash "${e}"`), t && (n = `Block at number "${t}"`), super(`${n} could not be found.`, {
                        name: "BlockNotFoundError"
                    })
                }
            }
        },
        97725: function(e, t, n) {
            n.d(t, {
                Bk: function() {
                    return s
                },
                Yl: function() {
                    return i
                },
                mm: function() {
                    return o
                },
                pZ: function() {
                    return a
                }
            });
            var r = n(26045);
            class o extends r.G {
                constructor({
                    blockNumber: e,
                    chain: t,
                    contract: n
                }) {
                    super(`Chain "${t.name}" does not support contract "${n.name}".`, {
                        metaMessages: ["This could be due to any of the following:", ...e && n.blockCreated && n.blockCreated > e ? [`- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`] : [`- The chain does not have the contract "${n.name}" configured.`]],
                        name: "ChainDoesNotSupportContract"
                    })
                }
            }
            class i extends r.G {
                constructor({
                    chain: e,
                    currentChainId: t
                }) {
                    super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`, {
                        metaMessages: [`Current Chain ID:  ${t}`, `Expected Chain ID: ${e.id} – ${e.name}`],
                        name: "ChainMismatchError"
                    })
                }
            }
            class s extends r.G {
                constructor() {
                    super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.", {
                        name: "ChainNotFoundError"
                    })
                }
            }
            class a extends r.G {
                constructor() {
                    super("No chain was provided to the Client.", {
                        name: "ClientChainNotConfiguredError"
                    })
                }
            }
        },
        58960: function(e, t, n) {
            n.d(t, {
                cg: function() {
                    return m
                },
                uq: function() {
                    return y
                },
                Lu: function() {
                    return v
                },
                Dk: function() {
                    return w
                },
                Mo: function() {
                    return x
                },
                VQ: function() {
                    return P
                }
            });
            var r = n(77218),
                o = n(90986),
                i = n(1186),
                s = n(17445),
                a = n(821);

            function c({
                abiItem: e,
                args: t,
                includeFunctionName: n = !0,
                includeName: r = !1
            }) {
                if ("name" in e && "inputs" in e && e.inputs) return `${n?e.name:""}(${e.inputs.map((e,n)=>`${r&&e.name?`${e.name}: `:""}${"object"==typeof t[n]?(0,a.P)(t[n]):t[n]}`).join(", ")})`
            }
            var u = n(61352),
                l = n(15021),
                d = n(70792),
                f = n(7158),
                h = n(26045),
                p = n(72273),
                g = n(22334),
                b = n(71717);
            class m extends h.G {
                constructor(e, {
                    account: t,
                    docsPath: n,
                    chain: o,
                    data: i,
                    gas: s,
                    gasPrice: a,
                    maxFeePerGas: c,
                    maxPriorityFeePerGas: u,
                    nonce: f,
                    to: h,
                    value: b,
                    stateOverride: m
                }) {
                    let y = t ? (0, r.T)(t) : void 0,
                        v = (0, g.xr)({
                            from: y ? .address,
                            to: h,
                            value: void 0 !== b && `${(0,l.d)(b)} ${o?.nativeCurrency?.symbol||"ETH"}`,
                            data: i,
                            gas: s,
                            gasPrice: void 0 !== a && `${(0,d.o)(a)} gwei`,
                            maxFeePerGas: void 0 !== c && `${(0,d.o)(c)} gwei`,
                            maxPriorityFeePerGas: void 0 !== u && `${(0,d.o)(u)} gwei`,
                            nonce: f
                        });
                    m && (v += `
${(0,p.Bj)(m)}`), super(e.shortMessage, {
                        cause: e,
                        docsPath: n,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Raw Call Arguments:", v].filter(Boolean),
                        name: "CallExecutionError"
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.cause = e
                }
            }
            class y extends h.G {
                constructor(e, {
                    abi: t,
                    args: n,
                    contractAddress: r,
                    docsPath: o,
                    functionName: i,
                    sender: a
                }) {
                    let l = (0, u.mE)({
                            abi: t,
                            args: n,
                            name: i
                        }),
                        d = l ? c({
                            abiItem: l,
                            args: n,
                            includeFunctionName: !1,
                            includeName: !1
                        }) : void 0,
                        f = l ? (0, s.t)(l, {
                            includeName: !0
                        }) : void 0,
                        h = (0, g.xr)({
                            address: r && (0, b.C)(r),
                            function: f,
                            args: d && "()" !== d && `${[...Array(i?.length??0).keys()].map(()=>" ").join("")}${d}`,
                            sender: a
                        });
                    super(e.shortMessage || `An unknown error occurred while executing the contract function "${i}".`, {
                        cause: e,
                        docsPath: o,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], h && "Contract Call:", h].filter(Boolean),
                        name: "ContractFunctionExecutionError"
                    }), Object.defineProperty(this, "abi", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "args", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "contractAddress", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "formattedArgs", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "functionName", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "sender", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.abi = t, this.args = n, this.cause = e, this.contractAddress = r, this.functionName = i, this.sender = a
                }
            }
            class v extends h.G {
                constructor({
                    abi: e,
                    data: t,
                    functionName: n,
                    message: r
                }) {
                    let a, u, l, d, h;
                    if (t && "0x" !== t) try {
                        h = (0, i.p)({
                            abi: e,
                            data: t
                        });
                        let {
                            abiItem: n,
                            errorName: r,
                            args: a
                        } = h;
                        if ("Error" === r) l = a[0];
                        else if ("Panic" === r) {
                            let [e] = a;
                            l = o.$[e]
                        } else {
                            let e = n ? (0, s.t)(n, {
                                    includeName: !0
                                }) : void 0,
                                t = n && a ? c({
                                    abiItem: n,
                                    args: a,
                                    includeFunctionName: !1,
                                    includeName: !1
                                }) : void 0;
                            u = [e ? `Error: ${e}` : "", t && "()" !== t ? `       ${[...Array(r?.length??0).keys()].map(()=>" ").join("")}${t}` : ""]
                        }
                    } catch (e) {
                        a = e
                    } else r && (l = r);
                    a instanceof f.yP && (d = a.signature, u = [`Unable to decode signature "${d}" as it was not found on the provided ABI.`, "Make sure you are using the correct ABI and that the error exists on it.", `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`]), super(l && "execution reverted" !== l || d ? [`The contract function "${n}" reverted with the following ${d?"signature":"reason"}:`, l || d].join("\n") : `The contract function "${n}" reverted.`, {
                        cause: a,
                        metaMessages: u,
                        name: "ContractFunctionRevertedError"
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "reason", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "signature", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = h, this.reason = l, this.signature = d
                }
            }
            class w extends h.G {
                constructor({
                    functionName: e
                }) {
                    super(`The contract function "${e}" returned no data ("0x").`, {
                        metaMessages: ["This could be due to any of the following:", `  - The contract does not have the function "${e}",`, "  - The parameters passed to the contract function may be invalid, or", "  - The address is not a contract."],
                        name: "ContractFunctionZeroDataError"
                    })
                }
            }
            class x extends h.G {
                constructor({
                    factory: e
                }) {
                    super(`Deployment for counterfactual contract call failed${e?` for factory "${e}".`:""}`, {
                        metaMessages: ["Please ensure:", "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).", "- The `factoryData` is a valid encoded function call for contract deployment function on the factory."],
                        name: "CounterfactualDeploymentFailedError"
                    })
                }
            }
            class P extends h.G {
                constructor({
                    data: e,
                    message: t
                }) {
                    super(t || "", {
                        name: "RawContractError"
                    }), Object.defineProperty(this, "code", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 3
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = e
                }
            }
        },
        80825: function(e, t, n) {
            n.d(t, {
                KD: function() {
                    return s
                },
                T_: function() {
                    return o
                },
                lQ: function() {
                    return i
                }
            });
            var r = n(26045);
            class o extends r.G {
                constructor({
                    offset: e
                }) {
                    super(`Offset \`${e}\` cannot be negative.`, {
                        name: "NegativeOffsetError"
                    })
                }
            }
            class i extends r.G {
                constructor({
                    length: e,
                    position: t
                }) {
                    super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`, {
                        name: "PositionOutOfBoundsError"
                    })
                }
            }
            class s extends r.G {
                constructor({
                    count: e,
                    limit: t
                }) {
                    super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`, {
                        name: "RecursiveReadLimitExceededError"
                    })
                }
            }
        },
        97920: function(e, t, n) {
            n.d(t, {
                $s: function() {
                    return i
                },
                W_: function() {
                    return s
                },
                mV: function() {
                    return o
                }
            });
            var r = n(26045);
            class o extends r.G {
                constructor({
                    offset: e,
                    position: t,
                    size: n
                }) {
                    super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${n}).`, {
                        name: "SliceOffsetOutOfBoundsError"
                    })
                }
            }
            class i extends r.G {
                constructor({
                    size: e,
                    targetSize: t,
                    type: n
                }) {
                    super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`, {
                        name: "SizeExceedsPaddingSizeError"
                    })
                }
            }
            class s extends r.G {
                constructor({
                    size: e,
                    targetSize: t,
                    type: n
                }) {
                    super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} is expected to be ${t} ${n} long, but is ${e} ${n} long.`, {
                        name: "InvalidBytesLengthError"
                    })
                }
            }
        },
        35405: function(e, t, n) {
            n.d(t, {
                Cd: function() {
                    return s
                },
                J5: function() {
                    return o
                },
                M6: function() {
                    return a
                },
                yr: function() {
                    return i
                }
            });
            var r = n(26045);
            class o extends r.G {
                constructor({
                    max: e,
                    min: t,
                    signed: n,
                    size: r,
                    value: o
                }) {
                    super(`Number "${o}" is not in safe ${r?`${8*r}-bit ${n?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`, {
                        name: "IntegerOutOfRangeError"
                    })
                }
            }
            class i extends r.G {
                constructor(e) {
                    super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
                        name: "InvalidBytesBooleanError"
                    })
                }
            }
            class s extends r.G {
                constructor(e) {
                    super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`, {
                        name: "InvalidHexBooleanError"
                    })
                }
            }
            class a extends r.G {
                constructor({
                    givenSize: e,
                    maxSize: t
                }) {
                    super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
                        name: "SizeOverflowError"
                    })
                }
            }
        },
        25095: function(e, t, n) {
            n.d(t, {
                Fz: function() {
                    return i
                },
                e5: function() {
                    return s
                },
                ld: function() {
                    return a
                }
            });
            var r = n(70792),
                o = n(26045);
            class i extends o.G {
                constructor() {
                    super("`baseFeeMultiplier` must be greater than 1.", {
                        name: "BaseFeeScalarError"
                    })
                }
            }
            class s extends o.G {
                constructor() {
                    super("Chain does not support EIP-1559 fees.", {
                        name: "Eip1559FeesNotSupportedError"
                    })
                }
            }
            class a extends o.G {
                constructor({
                    maxPriorityFeePerGas: e
                }) {
                    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,r.o)(e)} gwei).`, {
                        name: "MaxFeePerGasTooLowError"
                    })
                }
            }
        },
        31325: function(e, t, n) {
            n.d(t, {
                C_: function() {
                    return d
                },
                G$: function() {
                    return a
                },
                Hh: function() {
                    return s
                },
                M_: function() {
                    return i
                },
                WF: function() {
                    return f
                },
                ZI: function() {
                    return c
                },
                cj: function() {
                    return b
                },
                cs: function() {
                    return g
                },
                dR: function() {
                    return h
                },
                pZ: function() {
                    return p
                },
                se: function() {
                    return l
                },
                vU: function() {
                    return u
                }
            });
            var r = n(70792),
                o = n(26045);
            class i extends o.G {
                constructor({
                    cause: e,
                    message: t
                } = {}) {
                    let n = t ? .replace("execution reverted: ", "") ? .replace("execution reverted", "");
                    super(`Execution reverted ${n?`with reason: ${n}`:"for an unknown reason"}.`, {
                        cause: e,
                        name: "ExecutionRevertedError"
                    })
                }
            }
            Object.defineProperty(i, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 3
            }), Object.defineProperty(i, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /execution reverted/
            });
            class s extends o.G {
                constructor({
                    cause: e,
                    maxFeePerGas: t
                } = {}) {
                    super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,r.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`, {
                        cause: e,
                        name: "FeeCapTooHighError"
                    })
                }
            }
            Object.defineProperty(s, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
            });
            class a extends o.G {
                constructor({
                    cause: e,
                    maxFeePerGas: t
                } = {}) {
                    super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,r.o)(t)}`:""} gwei) cannot be lower than the block base fee.`, {
                        cause: e,
                        name: "FeeCapTooLowError"
                    })
                }
            }
            Object.defineProperty(a, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
            });
            class c extends o.G {
                constructor({
                    cause: e,
                    nonce: t
                } = {}) {
                    super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`, {
                        cause: e,
                        name: "NonceTooHighError"
                    })
                }
            }
            Object.defineProperty(c, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /nonce too high/
            });
            class u extends o.G {
                constructor({
                    cause: e,
                    nonce: t
                } = {}) {
                    super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`, {
                        cause: e,
                        name: "NonceTooLowError"
                    })
                }
            }
            Object.defineProperty(u, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /nonce too low|transaction already imported|already known/
            });
            class l extends o.G {
                constructor({
                    cause: e,
                    nonce: t
                } = {}) {
                    super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`, {
                        cause: e,
                        name: "NonceMaxValueError"
                    })
                }
            }
            Object.defineProperty(l, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /nonce has max value/
            });
            class d extends o.G {
                constructor({
                    cause: e
                } = {}) {
                    super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.", {
                        cause: e,
                        metaMessages: ["This error could arise when the account does not have enough funds to:", " - pay for the total gas fee,", " - pay for the value to send.", " ", "The cost of the transaction is calculated as `gas * gas fee + value`, where:", " - `gas` is the amount of gas needed for transaction to execute,", " - `gas fee` is the gas fee,", " - `value` is the amount of ether to send to the recipient."],
                        name: "InsufficientFundsError"
                    })
                }
            }
            Object.defineProperty(d, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /insufficient funds|exceeds transaction sender account balance/
            });
            class f extends o.G {
                constructor({
                    cause: e,
                    gas: t
                } = {}) {
                    super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`, {
                        cause: e,
                        name: "IntrinsicGasTooHighError"
                    })
                }
            }
            Object.defineProperty(f, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /intrinsic gas too high|gas limit reached/
            });
            class h extends o.G {
                constructor({
                    cause: e,
                    gas: t
                } = {}) {
                    super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`, {
                        cause: e,
                        name: "IntrinsicGasTooLowError"
                    })
                }
            }
            Object.defineProperty(h, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /intrinsic gas too low/
            });
            class p extends o.G {
                constructor({
                    cause: e
                }) {
                    super("The transaction type is not supported for this chain.", {
                        cause: e,
                        name: "TransactionTypeNotSupportedError"
                    })
                }
            }
            Object.defineProperty(p, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /transaction type not valid/
            });
            class g extends o.G {
                constructor({
                    cause: e,
                    maxPriorityFeePerGas: t,
                    maxFeePerGas: n
                } = {}) {
                    super(`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,r.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${n?` = ${(0,r.o)(n)} gwei`:""}).`, {
                        cause: e,
                        name: "TipAboveFeeCapError"
                    })
                }
            }
            Object.defineProperty(g, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
            });
            class b extends o.G {
                constructor({
                    cause: e
                }) {
                    super(`An error occurred while executing: ${e?.shortMessage}`, {
                        cause: e,
                        name: "UnknownNodeError"
                    })
                }
            }
        },
        41409: function(e, t, n) {
            n.d(t, {
                Gg: function() {
                    return s
                },
                W5: function() {
                    return c
                },
                bs: function() {
                    return a
                }
            });
            var r = n(821),
                o = n(26045),
                i = n(71717);
            class s extends o.G {
                constructor({
                    body: e,
                    cause: t,
                    details: n,
                    headers: o,
                    status: s,
                    url: a
                }) {
                    super("HTTP request failed.", {
                        cause: t,
                        details: n,
                        metaMessages: [s && `Status: ${s}`, `URL: ${(0,i.G)(a)}`, e && `Request body: ${(0,r.P)(e)}`].filter(Boolean),
                        name: "HttpRequestError"
                    }), Object.defineProperty(this, "body", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "headers", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "status", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "url", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.body = e, this.headers = o, this.status = s, this.url = a
                }
            }
            class a extends o.G {
                constructor({
                    body: e,
                    error: t,
                    url: n
                }) {
                    super("RPC Request failed.", {
                        cause: t,
                        details: t.message,
                        metaMessages: [`URL: ${(0,i.G)(n)}`, `Request body: ${(0,r.P)(e)}`],
                        name: "RpcRequestError"
                    }), Object.defineProperty(this, "code", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.code = t.code
                }
            }
            class c extends o.G {
                constructor({
                    body: e,
                    url: t
                }) {
                    super("The request took too long to respond.", {
                        details: "The request timed out.",
                        metaMessages: [`URL: ${(0,i.G)(t)}`, `Request body: ${(0,r.P)(e)}`],
                        name: "TimeoutError"
                    })
                }
            }
        },
        73397: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return c
                },
                GD: function() {
                    return y
                },
                I0: function() {
                    return $
                },
                KB: function() {
                    return g
                },
                LX: function() {
                    return u
                },
                Og: function() {
                    return h
                },
                PE: function() {
                    return w
                },
                Pv: function() {
                    return m
                },
                Ts: function() {
                    return x
                },
                XS: function() {
                    return d
                },
                ab: function() {
                    return v
                },
                gS: function() {
                    return b
                },
                ir: function() {
                    return E
                },
                nY: function() {
                    return l
                },
                pT: function() {
                    return p
                },
                s7: function() {
                    return a
                },
                u5: function() {
                    return P
                },
                x3: function() {
                    return G
                },
                yR: function() {
                    return f
                }
            });
            var r = n(26045),
                o = n(41409);
            class i extends r.G {
                constructor(e, {
                    code: t,
                    docsPath: n,
                    metaMessages: r,
                    name: i,
                    shortMessage: s
                }) {
                    super(s, {
                        cause: e,
                        docsPath: n,
                        metaMessages: r || e ? .metaMessages,
                        name: i || "RpcError"
                    }), Object.defineProperty(this, "code", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.name = i || e.name, this.code = e instanceof o.bs ? e.code : t ? ? -1
                }
            }
            class s extends i {
                constructor(e, t) {
                    super(e, t), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = t.data
                }
            }
            class a extends i {
                constructor(e) {
                    super(e, {
                        code: a.code,
                        name: "ParseRpcError",
                        shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
                    })
                }
            }
            Object.defineProperty(a, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32700
            });
            class c extends i {
                constructor(e) {
                    super(e, {
                        code: c.code,
                        name: "InvalidRequestRpcError",
                        shortMessage: "JSON is not a valid request object."
                    })
                }
            }
            Object.defineProperty(c, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32600
            });
            class u extends i {
                constructor(e, {
                    method: t
                } = {}) {
                    super(e, {
                        code: u.code,
                        name: "MethodNotFoundRpcError",
                        shortMessage: `The method${t?` "${t}"`:""} does not exist / is not available.`
                    })
                }
            }
            Object.defineProperty(u, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32601
            });
            class l extends i {
                constructor(e) {
                    super(e, {
                        code: l.code,
                        name: "InvalidParamsRpcError",
                        shortMessage: "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."
                    })
                }
            }
            Object.defineProperty(l, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32602
            });
            class d extends i {
                constructor(e) {
                    super(e, {
                        code: d.code,
                        name: "InternalRpcError",
                        shortMessage: "An internal error was received."
                    })
                }
            }
            Object.defineProperty(d, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32603
            });
            class f extends i {
                constructor(e) {
                    super(e, {
                        code: f.code,
                        name: "InvalidInputRpcError",
                        shortMessage: "Missing or invalid parameters.\nDouble check you have provided the correct parameters."
                    })
                }
            }
            Object.defineProperty(f, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32e3
            });
            class h extends i {
                constructor(e) {
                    super(e, {
                        code: h.code,
                        name: "ResourceNotFoundRpcError",
                        shortMessage: "Requested resource not found."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ResourceNotFoundRpcError"
                    })
                }
            }
            Object.defineProperty(h, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32001
            });
            class p extends i {
                constructor(e) {
                    super(e, {
                        code: p.code,
                        name: "ResourceUnavailableRpcError",
                        shortMessage: "Requested resource not available."
                    })
                }
            }
            Object.defineProperty(p, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32002
            });
            class g extends i {
                constructor(e) {
                    super(e, {
                        code: g.code,
                        name: "TransactionRejectedRpcError",
                        shortMessage: "Transaction creation failed."
                    })
                }
            }
            Object.defineProperty(g, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32003
            });
            class b extends i {
                constructor(e, {
                    method: t
                } = {}) {
                    super(e, {
                        code: b.code,
                        name: "MethodNotSupportedRpcError",
                        shortMessage: `Method${t?` "${t}"`:""} is not implemented.`
                    })
                }
            }
            Object.defineProperty(b, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32004
            });
            class m extends i {
                constructor(e) {
                    super(e, {
                        code: m.code,
                        name: "LimitExceededRpcError",
                        shortMessage: "Request exceeds defined limit."
                    })
                }
            }
            Object.defineProperty(m, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32005
            });
            class y extends i {
                constructor(e) {
                    super(e, {
                        code: y.code,
                        name: "JsonRpcVersionUnsupportedError",
                        shortMessage: "Version of JSON-RPC protocol is not supported."
                    })
                }
            }
            Object.defineProperty(y, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32006
            });
            class v extends s {
                constructor(e) {
                    super(e, {
                        code: v.code,
                        name: "UserRejectedRequestError",
                        shortMessage: "User rejected the request."
                    })
                }
            }
            Object.defineProperty(v, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4001
            });
            class w extends s {
                constructor(e) {
                    super(e, {
                        code: w.code,
                        name: "UnauthorizedProviderError",
                        shortMessage: "The requested method and/or account has not been authorized by the user."
                    })
                }
            }
            Object.defineProperty(w, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4100
            });
            class x extends s {
                constructor(e, {
                    method: t
                } = {}) {
                    super(e, {
                        code: x.code,
                        name: "UnsupportedProviderMethodError",
                        shortMessage: `The Provider does not support the requested method${t?` " ${t}"`:""}.`
                    })
                }
            }
            Object.defineProperty(x, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4200
            });
            class P extends s {
                constructor(e) {
                    super(e, {
                        code: P.code,
                        name: "ProviderDisconnectedError",
                        shortMessage: "The Provider is disconnected from all chains."
                    })
                }
            }
            Object.defineProperty(P, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4900
            });
            class $ extends s {
                constructor(e) {
                    super(e, {
                        code: $.code,
                        name: "ChainDisconnectedError",
                        shortMessage: "The Provider is not connected to the requested chain."
                    })
                }
            }
            Object.defineProperty($, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4901
            });
            class G extends s {
                constructor(e) {
                    super(e, {
                        code: G.code,
                        name: "SwitchChainError",
                        shortMessage: "An error occurred when attempting to switch chain."
                    })
                }
            }
            Object.defineProperty(G, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4902
            });
            class E extends i {
                constructor(e) {
                    super(e, {
                        name: "UnknownRpcError",
                        shortMessage: "An unknown RPC error occurred."
                    })
                }
            }
        },
        72273: function(e, t, n) {
            n.d(t, {
                Bj: function() {
                    return a
                },
                Nc: function() {
                    return o
                },
                Z8: function() {
                    return i
                }
            });
            var r = n(26045);
            class o extends r.G {
                constructor({
                    address: e
                }) {
                    super(`State for account "${e}" is set multiple times.`, {
                        name: "AccountStateConflictError"
                    })
                }
            }
            class i extends r.G {
                constructor() {
                    super("state and stateDiff are set on the same account.", {
                        name: "StateAssignmentConflictError"
                    })
                }
            }

            function s(e) {
                return e.reduce((e, {
                    slot: t,
                    value: n
                }) => `${e}        ${t}: ${n}
`, "")
            }

            function a(e) {
                return e.reduce((e, {
                    address: t,
                    ...n
                }) => {
                    let r = `${e}    ${t}:
`;
                    return n.nonce && (r += `      nonce: ${n.nonce}
`), n.balance && (r += `      balance: ${n.balance}
`), n.code && (r += `      code: ${n.code}
`), n.state && (r += "      state:\n" + s(n.state)), n.stateDiff && (r += "      stateDiff:\n" + s(n.stateDiff)), r
                }, "  State Override:\n").slice(0, -1)
            }
        },
        22334: function(e, t, n) {
            n.d(t, {
                Bh: function() {
                    return l
                },
                Yb: function() {
                    return d
                },
                j3: function() {
                    return c
                },
                mc: function() {
                    return f
                },
                mk: function() {
                    return u
                },
                xY: function() {
                    return a
                },
                xr: function() {
                    return s
                }
            });
            var r = n(15021),
                o = n(70792),
                i = n(26045);

            function s(e) {
                let t = Object.entries(e).map(([e, t]) => void 0 === t || !1 === t ? null : [e, t]).filter(Boolean),
                    n = t.reduce((e, [t]) => Math.max(e, t.length), 0);
                return t.map(([e, t]) => `  ${`${e}:`.padEnd(n+1)}  ${t}`).join("\n")
            }
            class a extends i.G {
                constructor() {
                    super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.", {
                        name: "FeeConflictError"
                    })
                }
            }
            class c extends i.G {
                constructor({
                    transaction: e
                }) {
                    super("Cannot infer a transaction type from provided transaction.", {
                        metaMessages: ["Provided Transaction:", "{", s(e), "}", "", "To infer the type, either provide:", "- a `type` to the Transaction, or", "- an EIP-1559 Transaction with `maxFeePerGas`, or", "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or", "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or", "- an EIP-7702 Transaction with `authorizationList`, or", "- a Legacy Transaction with `gasPrice`"],
                        name: "InvalidSerializableTransactionError"
                    })
                }
            }
            class u extends i.G {
                constructor(e, {
                    account: t,
                    docsPath: n,
                    chain: i,
                    data: a,
                    gas: c,
                    gasPrice: u,
                    maxFeePerGas: l,
                    maxPriorityFeePerGas: d,
                    nonce: f,
                    to: h,
                    value: p
                }) {
                    let g = s({
                        chain: i && `${i?.name} (id: ${i?.id})`,
                        from: t ? .address,
                        to: h,
                        value: void 0 !== p && `${(0,r.d)(p)} ${i?.nativeCurrency?.symbol||"ETH"}`,
                        data: a,
                        gas: c,
                        gasPrice: void 0 !== u && `${(0,o.o)(u)} gwei`,
                        maxFeePerGas: void 0 !== l && `${(0,o.o)(l)} gwei`,
                        maxPriorityFeePerGas: void 0 !== d && `${(0,o.o)(d)} gwei`,
                        nonce: f
                    });
                    super(e.shortMessage, {
                        cause: e,
                        docsPath: n,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Request Arguments:", g].filter(Boolean),
                        name: "TransactionExecutionError"
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.cause = e
                }
            }
            class l extends i.G {
                constructor({
                    blockHash: e,
                    blockNumber: t,
                    blockTag: n,
                    hash: r,
                    index: o
                }) {
                    let i = "Transaction";
                    n && void 0 !== o && (i = `Transaction at block time "${n}" at index "${o}"`), e && void 0 !== o && (i = `Transaction at block hash "${e}" at index "${o}"`), t && void 0 !== o && (i = `Transaction at block number "${t}" at index "${o}"`), r && (i = `Transaction with hash "${r}"`), super(`${i} could not be found.`, {
                        name: "TransactionNotFoundError"
                    })
                }
            }
            class d extends i.G {
                constructor({
                    hash: e
                }) {
                    super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`, {
                        name: "TransactionReceiptNotFoundError"
                    })
                }
            }
            class f extends i.G {
                constructor({
                    hash: e
                }) {
                    super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`, {
                        name: "WaitForTransactionReceiptTimeoutError"
                    })
                }
            }
        },
        71717: function(e, t, n) {
            n.d(t, {
                C: function() {
                    return r
                },
                G: function() {
                    return o
                }
            });
            let r = e => e,
                o = e => e
        },
        13657: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return d
                }
            });
            var r = n(53824),
                o = n(91350),
                i = n(89862),
                s = n(82646),
                a = n(26045),
                c = n(19658);

            function u(e) {
                if (e < 256) return 1;
                if (e < 65536) return 2;
                if (e < 16777216) return 3;
                if (e < 4294967296) return 4;
                throw new a.G("Length is too large.")
            }
            var l = n(88653);
            async function d(e) {
                let {
                    authorization: t,
                    signature: n
                } = e;
                return (0, r.R)({
                    hash: function(e) {
                        let {
                            chainId: t,
                            contractAddress: n,
                            nonce: r,
                            to: a
                        } = e, d = (0, l.w)((0, o.SM)(["0x05", function(e, t = "hex") {
                            let n = function e(t) {
                                    return Array.isArray(t) ? function(e) {
                                        let t = e.reduce((e, t) => e + t.length, 0),
                                            n = u(t),
                                            r = t <= 55 ? 1 + t : 1 + n + t;
                                        return {
                                            length: r,
                                            encode(r) {
                                                for (let {
                                                        encode: o
                                                    } of (t <= 55 ? r.pushByte(192 + t) : (r.pushByte(247 + n), 1 === n ? r.pushUint8(t) : 2 === n ? r.pushUint16(t) : 3 === n ? r.pushUint24(t) : r.pushUint32(t)), e)) o(r)
                                            }
                                        }
                                    }(t.map(t => e(t))) : function(e) {
                                        let t = "string" == typeof e ? (0, i.nr)(e) : e,
                                            n = u(t.length),
                                            r = 1 === t.length && t[0] < 128 ? 1 : t.length <= 55 ? 1 + t.length : 1 + n + t.length;
                                        return {
                                            length: r,
                                            encode(e) {
                                                1 === t.length && t[0] < 128 || (t.length <= 55 ? e.pushByte(128 + t.length) : (e.pushByte(183 + n), 1 === n ? e.pushUint8(t.length) : 2 === n ? e.pushUint16(t.length) : 3 === n ? e.pushUint24(t.length) : e.pushUint32(t.length))), e.pushBytes(t)
                                            }
                                        }
                                    }(t)
                                }(e),
                                r = (0, c.q)(new Uint8Array(n.length));
                            return (n.encode(r), "hex" === t) ? (0, s.ci)(r.bytes) : r.bytes
                        }([t ? (0, s.eC)(t) : "0x", n, r ? (0, s.eC)(r) : "0x"])]));
                        return "bytes" === a ? (0, i.nr)(d) : d
                    }(t),
                    signature: n ? ? t
                })
            }
        },
        5494: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return g
                }
            });
            var r = n(7158),
                o = n(92490),
                i = n(19658),
                s = n(8536),
                a = n(21449),
                c = n(57536),
                u = n(35405),
                l = n(90130),
                d = n(82646);

            function f(e, t = {}) {
                void 0 !== t.size && (0, l.Yf)(e, {
                    size: t.size
                });
                let n = (0, d.ci)(e, t);
                return (0, l.ly)(n, t)
            }
            var h = n(89862),
                p = n(68618);

            function g(e, t) {
                let n = "string" == typeof t ? (0, h.nr)(t) : t,
                    g = (0, i.q)(n);
                if (0 === (0, s.d)(n) && e.length > 0) throw new r.wb;
                if ((0, s.d)(t) && 32 > (0, s.d)(t)) throw new r.xB({
                    data: "string" == typeof t ? t : (0, d.ci)(t),
                    params: e,
                    size: (0, s.d)(t)
                });
                let m = 0,
                    y = [];
                for (let t = 0; t < e.length; ++t) {
                    let n = e[t];
                    g.setPosition(m);
                    let [i, s] = function e(t, n, {
                        staticPosition: i
                    }) {
                        let s = (0, p.S)(n.type);
                        if (s) {
                            let [r, o] = s;
                            return function(t, n, {
                                length: r,
                                staticPosition: o
                            }) {
                                if (!r) {
                                    let r = f(t.readBytes(32)),
                                        i = o + r,
                                        s = i + 32;
                                    t.setPosition(i);
                                    let a = f(t.readBytes(32)),
                                        c = b(n),
                                        u = 0,
                                        l = [];
                                    for (let r = 0; r < a; ++r) {
                                        t.setPosition(s + (c ? 32 * r : u));
                                        let [o, i] = e(t, n, {
                                            staticPosition: s
                                        });
                                        u += i, l.push(o)
                                    }
                                    return t.setPosition(o + 32), [l, 32]
                                }
                                if (b(n)) {
                                    let i = f(t.readBytes(32)),
                                        s = o + i,
                                        a = [];
                                    for (let o = 0; o < r; ++o) {
                                        t.setPosition(s + 32 * o);
                                        let [r] = e(t, n, {
                                            staticPosition: s
                                        });
                                        a.push(r)
                                    }
                                    return t.setPosition(o + 32), [a, 32]
                                }
                                let i = 0,
                                    s = [];
                                for (let a = 0; a < r; ++a) {
                                    let [r, a] = e(t, n, {
                                        staticPosition: o + i
                                    });
                                    i += a, s.push(r)
                                }
                                return [s, i]
                            }(t, { ...n,
                                type: o
                            }, {
                                length: r,
                                staticPosition: i
                            })
                        }
                        if ("tuple" === n.type) return function(t, n, {
                            staticPosition: r
                        }) {
                            let o = 0 === n.components.length || n.components.some(({
                                    name: e
                                }) => !e),
                                i = o ? [] : {},
                                s = 0;
                            if (b(n)) {
                                let a = f(t.readBytes(32)),
                                    c = r + a;
                                for (let r = 0; r < n.components.length; ++r) {
                                    let a = n.components[r];
                                    t.setPosition(c + s);
                                    let [u, l] = e(t, a, {
                                        staticPosition: c
                                    });
                                    s += l, i[o ? r : a ? .name] = u
                                }
                                return t.setPosition(r + 32), [i, 32]
                            }
                            for (let a = 0; a < n.components.length; ++a) {
                                let c = n.components[a],
                                    [u, l] = e(t, c, {
                                        staticPosition: r
                                    });
                                i[o ? a : c ? .name] = u, s += l
                            }
                            return [i, s]
                        }(t, n, {
                            staticPosition: i
                        });
                        if ("address" === n.type) return function(e) {
                            let t = e.readBytes(32);
                            return [(0, o.x)((0, d.ci)((0, a.T4)(t, -20))), 32]
                        }(t);
                        if ("bool" === n.type) return [function(e, t = {}) {
                            let n = e;
                            if (void 0 !== t.size && ((0, l.Yf)(n, {
                                    size: t.size
                                }), n = (0, c.f)(n)), n.length > 1 || n[0] > 1) throw new u.yr(n);
                            return !!n[0]
                        }(t.readBytes(32), {
                            size: 32
                        }), 32];
                        if (n.type.startsWith("bytes")) return function(e, t, {
                            staticPosition: n
                        }) {
                            let [r, o] = t.type.split("bytes");
                            if (!o) {
                                let t = f(e.readBytes(32));
                                e.setPosition(n + t);
                                let r = f(e.readBytes(32));
                                if (0 === r) return e.setPosition(n + 32), ["0x", 32];
                                let o = e.readBytes(r);
                                return e.setPosition(n + 32), [(0, d.ci)(o), 32]
                            }
                            let i = (0, d.ci)(e.readBytes(Number.parseInt(o), 32));
                            return [i, 32]
                        }(t, n, {
                            staticPosition: i
                        });
                        if (n.type.startsWith("uint") || n.type.startsWith("int")) return function(e, t) {
                            let n = t.type.startsWith("int"),
                                r = Number.parseInt(t.type.split("int")[1] || "256"),
                                o = e.readBytes(32);
                            return [r > 48 ? function(e, t = {}) {
                                void 0 !== t.size && (0, l.Yf)(e, {
                                    size: t.size
                                });
                                let n = (0, d.ci)(e, t);
                                return (0, l.y_)(n, t)
                            }(o, {
                                signed: n
                            }) : f(o, {
                                signed: n
                            }), 32]
                        }(t, n);
                        if ("string" === n.type) return function(e, {
                            staticPosition: t
                        }) {
                            let n = f(e.readBytes(32));
                            e.setPosition(t + n);
                            let r = f(e.readBytes(32));
                            if (0 === r) return e.setPosition(t + 32), ["", 32];
                            let o = e.readBytes(r, 32),
                                i = function(e, t = {}) {
                                    let n = e;
                                    return void 0 !== t.size && ((0, l.Yf)(n, {
                                        size: t.size
                                    }), n = (0, c.f)(n, {
                                        dir: "right"
                                    })), new TextDecoder().decode(n)
                                }((0, c.f)(o));
                            return e.setPosition(t + 32), [i, 32]
                        }(t, {
                            staticPosition: i
                        });
                        throw new r.CI(n.type, {
                            docsPath: "/docs/contract/decodeAbiParameters"
                        })
                    }(g, n, {
                        staticPosition: 0
                    });
                    m += s, y.push(i)
                }
                return y
            }

            function b(e) {
                let {
                    type: t
                } = e;
                if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
                if ("tuple" === t) return e.components ? .some(b);
                let n = (0, p.S)(e.type);
                return !!(n && b({ ...e,
                    type: n[1]
                }))
            }
        },
        1186: function(e, t, n) {
            n.d(t, {
                p: function() {
                    return u
                }
            });
            var r = n(90986),
                o = n(7158),
                i = n(21449),
                s = n(44423),
                a = n(5494),
                c = n(17445);

            function u(e) {
                let {
                    abi: t,
                    data: n
                } = e, u = (0, i.tP)(n, 0, 4);
                if ("0x" === u) throw new o.wb;
                let l = [...t || [], r.Up, r.hZ],
                    d = l.find(e => "error" === e.type && u === (0, s.C)((0, c.t)(e)));
                if (!d) throw new o.yP(u, {
                    docsPath: "/docs/contract/decodeErrorResult"
                });
                return {
                    abiItem: d,
                    args: "inputs" in d && d.inputs && d.inputs.length > 0 ? (0, a.r)(d.inputs, (0, i.tP)(n, 4)) : void 0,
                    errorName: d.name
                }
            }
        },
        68618: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return f
                },
                S: function() {
                    return p
                }
            });
            var r = n(7158),
                o = n(12122),
                i = n(26045),
                s = n(17046),
                a = n(91350),
                c = n(78742),
                u = n(8536),
                l = n(21449),
                d = n(82646);

            function f(e, t) {
                if (e.length !== t.length) throw new r.fs({
                    expectedLength: e.length,
                    givenLength: t.length
                });
                let n = function({
                        params: e,
                        values: t
                    }) {
                        let n = [];
                        for (let f = 0; f < e.length; f++) n.push(function e({
                            param: t,
                            value: n
                        }) {
                            let f = p(t.type);
                            if (f) {
                                let [o, i] = f;
                                return function(t, {
                                    length: n,
                                    param: o
                                }) {
                                    let i = null === n;
                                    if (!Array.isArray(t)) throw new r.hn(t);
                                    if (!i && t.length !== n) throw new r.gr({
                                        expectedLength: n,
                                        givenLength: t.length,
                                        type: `${o.type}[${n}]`
                                    });
                                    let s = !1,
                                        c = [];
                                    for (let n = 0; n < t.length; n++) {
                                        let r = e({
                                            param: o,
                                            value: t[n]
                                        });
                                        r.dynamic && (s = !0), c.push(r)
                                    }
                                    if (i || s) {
                                        let e = h(c);
                                        if (i) {
                                            let t = (0, d.eC)(c.length, {
                                                size: 32
                                            });
                                            return {
                                                dynamic: !0,
                                                encoded: c.length > 0 ? (0, a.zo)([t, e]) : t
                                            }
                                        }
                                        if (s) return {
                                            dynamic: !0,
                                            encoded: e
                                        }
                                    }
                                    return {
                                        dynamic: !1,
                                        encoded: (0, a.zo)(c.map(({
                                            encoded: e
                                        }) => e))
                                    }
                                }(n, {
                                    length: o,
                                    param: { ...t,
                                        type: i
                                    }
                                })
                            }
                            if ("tuple" === t.type) return function(t, {
                                param: n
                            }) {
                                let r = !1,
                                    o = [];
                                for (let i = 0; i < n.components.length; i++) {
                                    let s = n.components[i],
                                        a = Array.isArray(t) ? i : s.name,
                                        c = e({
                                            param: s,
                                            value: t[a]
                                        });
                                    o.push(c), c.dynamic && (r = !0)
                                }
                                return {
                                    dynamic: r,
                                    encoded: r ? h(o) : (0, a.zo)(o.map(({
                                        encoded: e
                                    }) => e))
                                }
                            }(n, {
                                param: t
                            });
                            if ("address" === t.type) return function(e) {
                                if (!(0, s.U)(e)) throw new o.b({
                                    address: e
                                });
                                return {
                                    dynamic: !1,
                                    encoded: (0, c.gc)(e.toLowerCase())
                                }
                            }(n);
                            if ("bool" === t.type) return function(e) {
                                if ("boolean" != typeof e) throw new i.G(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);
                                return {
                                    dynamic: !1,
                                    encoded: (0, c.gc)((0, d.C4)(e))
                                }
                            }(n);
                            if (t.type.startsWith("uint") || t.type.startsWith("int")) {
                                let e = t.type.startsWith("int");
                                return function(e, {
                                    signed: t
                                }) {
                                    return {
                                        dynamic: !1,
                                        encoded: (0, d.eC)(e, {
                                            size: 32,
                                            signed: t
                                        })
                                    }
                                }(n, {
                                    signed: e
                                })
                            }
                            if (t.type.startsWith("bytes")) return function(e, {
                                param: t
                            }) {
                                let [, n] = t.type.split("bytes"), o = (0, u.d)(e);
                                if (!n) {
                                    let t = e;
                                    return o % 32 != 0 && (t = (0, c.gc)(t, {
                                        dir: "right",
                                        size: 32 * Math.ceil((e.length - 2) / 2 / 32)
                                    })), {
                                        dynamic: !0,
                                        encoded: (0, a.zo)([(0, c.gc)((0, d.eC)(o, {
                                            size: 32
                                        })), t])
                                    }
                                }
                                if (o !== Number.parseInt(n)) throw new r.M4({
                                    expectedSize: Number.parseInt(n),
                                    value: e
                                });
                                return {
                                    dynamic: !1,
                                    encoded: (0, c.gc)(e, {
                                        dir: "right"
                                    })
                                }
                            }(n, {
                                param: t
                            });
                            if ("string" === t.type) return function(e) {
                                let t = (0, d.$G)(e),
                                    n = Math.ceil((0, u.d)(t) / 32),
                                    r = [];
                                for (let e = 0; e < n; e++) r.push((0, c.gc)((0, l.tP)(t, 32 * e, (e + 1) * 32), {
                                    dir: "right"
                                }));
                                return {
                                    dynamic: !0,
                                    encoded: (0, a.zo)([(0, c.gc)((0, d.eC)((0, u.d)(t), {
                                        size: 32
                                    })), ...r])
                                }
                            }(n);
                            throw new r.dh(t.type, {
                                docsPath: "/docs/contract/encodeAbiParameters"
                            })
                        }({
                            param: e[f],
                            value: t[f]
                        }));
                        return n
                    }({
                        params: e,
                        values: t
                    }),
                    f = h(n);
                return 0 === f.length ? "0x" : f
            }

            function h(e) {
                let t = 0;
                for (let n = 0; n < e.length; n++) {
                    let {
                        dynamic: r,
                        encoded: o
                    } = e[n];
                    r ? t += 32 : t += (0, u.d)(o)
                }
                let n = [],
                    r = [],
                    o = 0;
                for (let i = 0; i < e.length; i++) {
                    let {
                        dynamic: s,
                        encoded: a
                    } = e[i];
                    s ? (n.push((0, d.eC)(t + o, {
                        size: 32
                    })), r.push(a), o += (0, u.d)(a)) : n.push(a)
                }
                return (0, a.zo)([...n, ...r])
            }

            function p(e) {
                let t = e.match(/^(.*)\[(\d+)?\]$/);
                return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0
            }
        },
        65891: function(e, t, n) {
            n.d(t, {
                w: function() {
                    return a
                }
            });
            var r = n(7158),
                o = n(91350),
                i = n(68618);
            let s = "/docs/contract/encodeDeployData";

            function a(e) {
                let {
                    abi: t,
                    args: n,
                    bytecode: a
                } = e;
                if (!n || 0 === n.length) return a;
                let c = t.find(e => "type" in e && "constructor" === e.type);
                if (!c) throw new r.fM({
                    docsPath: s
                });
                if (!("inputs" in c) || !c.inputs || 0 === c.inputs.length) throw new r.cO({
                    docsPath: s
                });
                let u = (0, i.E)(c.inputs, n);
                return (0, o.SM)([a, u])
            }
        },
        89979: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return l
                }
            });
            var r = n(91350),
                o = n(68618),
                i = n(7158),
                s = n(44423),
                a = n(17445),
                c = n(61352);
            let u = "/docs/contract/encodeFunctionData";

            function l(e) {
                let {
                    args: t
                } = e, {
                    abi: n,
                    functionName: l
                } = 1 === e.abi.length && e.functionName ? .startsWith("0x") ? e : function(e) {
                    let {
                        abi: t,
                        args: n,
                        functionName: r
                    } = e, o = t[0];
                    if (r) {
                        let e = (0, c.mE)({
                            abi: t,
                            args: n,
                            name: r
                        });
                        if (!e) throw new i.xL(r, {
                            docsPath: u
                        });
                        o = e
                    }
                    if ("function" !== o.type) throw new i.xL(void 0, {
                        docsPath: u
                    });
                    return {
                        abi: [o],
                        functionName: (0, s.C)((0, a.t)(o))
                    }
                }(e), d = n[0], f = "inputs" in d && d.inputs ? (0, o.E)(d.inputs, t ? ? []) : void 0;
                return (0, r.SM)([l, f ? ? "0x"])
            }
        },
        17445: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return i
                },
                t: function() {
                    return o
                }
            });
            var r = n(7158);

            function o(e, {
                includeName: t = !1
            } = {}) {
                if ("function" !== e.type && "event" !== e.type && "error" !== e.type) throw new r.wM(e.type);
                return `${e.name}(${i(e.inputs,{includeName:t})})`
            }

            function i(e, {
                includeName: t = !1
            } = {}) {
                return e ? e.map(e => (function(e, {
                    includeName: t
                }) {
                    return e.type.startsWith("tuple") ? `(${i(e.components,{includeName:t})})${e.type.slice(5)}` : e.type + (t && e.name ? ` ${e.name}` : "")
                })(e, {
                    includeName: t
                })).join(t ? ", " : ",") : ""
            }
        },
        61352: function(e, t, n) {
            n.d(t, {
                mE: function() {
                    return c
                }
            });
            var r = n(7158),
                o = n(17360),
                i = n(17046),
                s = n(62567),
                a = n(44423);

            function c(e) {
                let t;
                let {
                    abi: n,
                    args: c = [],
                    name: u
                } = e, l = (0, o.v)(u, {
                    strict: !1
                }), d = n.filter(e => l ? "function" === e.type ? (0, a.C)(e) === u : "event" === e.type && (0, s.n)(e) === u : "name" in e && e.name === u);
                if (0 !== d.length) {
                    if (1 === d.length) return d[0];
                    for (let e of d) {
                        if (!("inputs" in e)) continue;
                        if (!c || 0 === c.length) {
                            if (!e.inputs || 0 === e.inputs.length) return e;
                            continue
                        }
                        if (!e.inputs || 0 === e.inputs.length || e.inputs.length !== c.length) continue;
                        let n = c.every((t, n) => {
                            let r = "inputs" in e && e.inputs[n];
                            return !!r && function e(t, n) {
                                let r = typeof t,
                                    o = n.type;
                                switch (o) {
                                    case "address":
                                        return (0, i.U)(t, {
                                            strict: !1
                                        });
                                    case "bool":
                                        return "boolean" === r;
                                    case "function":
                                    case "string":
                                        return "string" === r;
                                    default:
                                        if ("tuple" === o && "components" in n) return Object.values(n.components).every((n, r) => e(Object.values(t)[r], n));
                                        if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(o)) return "number" === r || "bigint" === r;
                                        if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(o)) return "string" === r || t instanceof Uint8Array;
                                        if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(o)) return Array.isArray(t) && t.every(t => e(t, { ...n,
                                            type: o.replace(/(\[[0-9]{0,}\])$/, "")
                                        }));
                                        return !1
                                }
                            }(t, r)
                        });
                        if (n) {
                            if (t && "inputs" in t && t.inputs) {
                                let n = function e(t, n, r) {
                                    for (let o in t) {
                                        let s = t[o],
                                            a = n[o];
                                        if ("tuple" === s.type && "tuple" === a.type && "components" in s && "components" in a) return e(s.components, a.components, r[o]);
                                        let c = [s.type, a.type],
                                            u = !!(c.includes("address") && c.includes("bytes20")) || !!(c.includes("address") && c.includes("string") || c.includes("address") && c.includes("bytes")) && (0, i.U)(r[o], {
                                                strict: !1
                                            });
                                        if (u) return c
                                    }
                                }(e.inputs, t.inputs, c);
                                if (n) throw new r.S4({
                                    abiItem: e,
                                    type: n[0]
                                }, {
                                    abiItem: t,
                                    type: n[1]
                                })
                            }
                            t = e
                        }
                    }
                    return t || d[0]
                }
            }
        },
        92490: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return l
                },
                x: function() {
                    return u
                }
            });
            var r = n(12122),
                o = n(89862),
                i = n(88653),
                s = n(38532),
                a = n(17046);
            let c = new s.k(8192);

            function u(e, t) {
                if (c.has(`${e}.${t}`)) return c.get(`${e}.${t}`);
                let n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
                    r = (0, i.w)((0, o.qX)(n), "bytes"),
                    s = (t ? n.substring(`${t}0x`.length) : n).split("");
                for (let e = 0; e < 40; e += 2) r[e >> 1] >> 4 >= 8 && s[e] && (s[e] = s[e].toUpperCase()), (15 & r[e >> 1]) >= 8 && s[e + 1] && (s[e + 1] = s[e + 1].toUpperCase());
                let a = `0x${s.join("")}`;
                return c.set(`${e}.${t}`, a), a
            }

            function l(e, t) {
                if (!(0, a.U)(e, {
                        strict: !1
                    })) throw new r.b({
                    address: e
                });
                return u(e, t)
            }
        },
        17046: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return a
                }
            });
            var r = n(38532),
                o = n(92490);
            let i = /^0x[a-fA-F0-9]{40}$/,
                s = new r.k(8192);

            function a(e, t) {
                let {
                    strict: n = !0
                } = t ? ? {}, r = `${e}.${n}`;
                if (s.has(r)) return s.get(r);
                let a = !!i.test(e) && (e.toLowerCase() === e || !n || (0, o.x)(e) === e);
                return s.set(r, a), a
            }
        },
        19658: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return i
                }
            });
            var r = n(80825);
            let o = {
                bytes: new Uint8Array,
                dataView: new DataView(new ArrayBuffer(0)),
                position: 0,
                positionReadCount: new Map,
                recursiveReadCount: 0,
                recursiveReadLimit: Number.POSITIVE_INFINITY,
                assertReadLimit() {
                    if (this.recursiveReadCount >= this.recursiveReadLimit) throw new r.KD({
                        count: this.recursiveReadCount + 1,
                        limit: this.recursiveReadLimit
                    })
                },
                assertPosition(e) {
                    if (e < 0 || e > this.bytes.length - 1) throw new r.lQ({
                        length: this.bytes.length,
                        position: e
                    })
                },
                decrementPosition(e) {
                    if (e < 0) throw new r.T_({
                        offset: e
                    });
                    let t = this.position - e;
                    this.assertPosition(t), this.position = t
                },
                getReadCount(e) {
                    return this.positionReadCount.get(e || this.position) || 0
                },
                incrementPosition(e) {
                    if (e < 0) throw new r.T_({
                        offset: e
                    });
                    let t = this.position + e;
                    this.assertPosition(t), this.position = t
                },
                inspectByte(e) {
                    let t = e ? ? this.position;
                    return this.assertPosition(t), this.bytes[t]
                },
                inspectBytes(e, t) {
                    let n = t ? ? this.position;
                    return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e)
                },
                inspectUint8(e) {
                    let t = e ? ? this.position;
                    return this.assertPosition(t), this.bytes[t]
                },
                inspectUint16(e) {
                    let t = e ? ? this.position;
                    return this.assertPosition(t + 1), this.dataView.getUint16(t)
                },
                inspectUint24(e) {
                    let t = e ? ? this.position;
                    return this.assertPosition(t + 2), (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
                },
                inspectUint32(e) {
                    let t = e ? ? this.position;
                    return this.assertPosition(t + 3), this.dataView.getUint32(t)
                },
                pushByte(e) {
                    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++
                },
                pushBytes(e) {
                    this.assertPosition(this.position + e.length - 1), this.bytes.set(e, this.position), this.position += e.length
                },
                pushUint8(e) {
                    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++
                },
                pushUint16(e) {
                    this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, e), this.position += 2
                },
                pushUint24(e) {
                    this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, e >> 8), this.dataView.setUint8(this.position + 2, 255 & e), this.position += 3
                },
                pushUint32(e) {
                    this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, e), this.position += 4
                },
                readByte() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectByte();
                    return this.position++, e
                },
                readBytes(e, t) {
                    this.assertReadLimit(), this._touch();
                    let n = this.inspectBytes(e);
                    return this.position += t ? ? e, n
                },
                readUint8() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectUint8();
                    return this.position += 1, e
                },
                readUint16() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectUint16();
                    return this.position += 2, e
                },
                readUint24() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectUint24();
                    return this.position += 3, e
                },
                readUint32() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectUint32();
                    return this.position += 4, e
                },
                get remaining() {
                    return this.bytes.length - this.position
                },
                setPosition(e) {
                    let t = this.position;
                    return this.assertPosition(e), this.position = e, () => this.position = t
                },
                _touch() {
                    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
                    let e = this.getReadCount();
                    this.positionReadCount.set(this.position, e + 1), e > 0 && this.recursiveReadCount++
                }
            };

            function i(e, {
                recursiveReadLimit: t = 8192
            } = {}) {
                let n = Object.create(o);
                return n.bytes = e, n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength), n.positionReadCount = new Map, n.recursiveReadLimit = t, n
            }
        },
        91350: function(e, t, n) {
            function r(e) {
                return "string" == typeof e[0] ? o(e) : function(e) {
                    let t = 0;
                    for (let n of e) t += n.length;
                    let n = new Uint8Array(t),
                        r = 0;
                    for (let t of e) n.set(t, r), r += t.length;
                    return n
                }(e)
            }

            function o(e) {
                return `0x${e.reduce((e,t)=>e+t.replace("0x",""),"")}`
            }
            n.d(t, {
                SM: function() {
                    return o
                },
                zo: function() {
                    return r
                }
            })
        },
        17360: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return r
                }
            });

            function r(e, {
                strict: t = !0
            } = {}) {
                return !!e && "string" == typeof e && (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
            }
        },
        78742: function(e, t, n) {
            n.d(t, {
                gc: function() {
                    return i
                },
                vk: function() {
                    return o
                }
            });
            var r = n(97920);

            function o(e, {
                dir: t,
                size: n = 32
            } = {}) {
                return "string" == typeof e ? i(e, {
                    dir: t,
                    size: n
                }) : function(e, {
                    dir: t,
                    size: n = 32
                } = {}) {
                    if (null === n) return e;
                    if (e.length > n) throw new r.$s({
                        size: e.length,
                        targetSize: n,
                        type: "bytes"
                    });
                    let o = new Uint8Array(n);
                    for (let r = 0; r < n; r++) {
                        let i = "right" === t;
                        o[i ? r : n - r - 1] = e[i ? r : e.length - r - 1]
                    }
                    return o
                }(e, {
                    dir: t,
                    size: n
                })
            }

            function i(e, {
                dir: t,
                size: n = 32
            } = {}) {
                if (null === n) return e;
                let o = e.replace("0x", "");
                if (o.length > 2 * n) throw new r.$s({
                    size: Math.ceil(o.length / 2),
                    targetSize: n,
                    type: "hex"
                });
                return `0x${o["right"===t?"padEnd":"padStart"](2*n,"0")}`
            }
        },
        8536: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return o
                }
            });
            var r = n(17360);

            function o(e) {
                return (0, r.v)(e, {
                    strict: !1
                }) ? Math.ceil((e.length - 2) / 2) : e.length
            }
        },
        21449: function(e, t, n) {
            n.d(t, {
                T4: function() {
                    return u
                },
                p5: function() {
                    return l
                },
                tP: function() {
                    return s
                }
            });
            var r = n(97920),
                o = n(17360),
                i = n(8536);

            function s(e, t, n, {
                strict: r
            } = {}) {
                return (0, o.v)(e, {
                    strict: !1
                }) ? l(e, t, n, {
                    strict: r
                }) : u(e, t, n, {
                    strict: r
                })
            }

            function a(e, t) {
                if ("number" == typeof t && t > 0 && t > (0, i.d)(e) - 1) throw new r.mV({
                    offset: t,
                    position: "start",
                    size: (0, i.d)(e)
                })
            }

            function c(e, t, n) {
                if ("number" == typeof t && "number" == typeof n && (0, i.d)(e) !== n - t) throw new r.mV({
                    offset: n,
                    position: "end",
                    size: (0, i.d)(e)
                })
            }

            function u(e, t, n, {
                strict: r
            } = {}) {
                a(e, t);
                let o = e.slice(t, n);
                return r && c(o, t, n), o
            }

            function l(e, t, n, {
                strict: r
            } = {}) {
                a(e, t);
                let o = `0x${e.replace("0x","").slice((t??0)*2,(n??e.length)*2)}`;
                return r && c(o, t, n), o
            }
        },
        57536: function(e, t, n) {
            n.d(t, {
                f: function() {
                    return r
                }
            });

            function r(e, {
                dir: t = "left"
            } = {}) {
                let n = "string" == typeof e ? e.replace("0x", "") : e,
                    r = 0;
                for (let e = 0; e < n.length - 1 && "0" === n["left" === t ? e : n.length - e - 1].toString(); e++) r++;
                return (n = "left" === t ? n.slice(r) : n.slice(0, n.length - r), "string" == typeof e) ? (1 === n.length && "right" === t && (n = `${n}0`), `0x${n.length%2==1?`0${n}`:n}`) : n
            }
        },
        90130: function(e, t, n) {
            n.d(t, {
                XA: function() {
                    return u
                },
                Yf: function() {
                    return a
                },
                ly: function() {
                    return l
                },
                rR: function() {
                    return d
                },
                y_: function() {
                    return c
                }
            });
            var r = n(35405),
                o = n(8536),
                i = n(57536),
                s = n(89862);

            function a(e, {
                size: t
            }) {
                if ((0, o.d)(e) > t) throw new r.M6({
                    givenSize: (0, o.d)(e),
                    maxSize: t
                })
            }

            function c(e, t = {}) {
                let {
                    signed: n
                } = t;
                t.size && a(e, {
                    size: t.size
                });
                let r = BigInt(e);
                if (!n) return r;
                let o = (e.length - 2) / 2,
                    i = (1 n << 8 n * BigInt(o) - 1 n) - 1 n;
                return r <= i ? r : r - BigInt(`0x${"f".padStart(2*o,"f")}`) - 1 n
            }

            function u(e, t = {}) {
                let n = e;
                if (t.size && (a(n, {
                        size: t.size
                    }), n = (0, i.f)(n)), "0x00" === (0, i.f)(n)) return !1;
                if ("0x01" === (0, i.f)(n)) return !0;
                throw new r.Cd(n)
            }

            function l(e, t = {}) {
                return Number(c(e, t))
            }

            function d(e, t = {}) {
                let n = (0, s.nr)(e);
                return t.size && (a(n, {
                    size: t.size
                }), n = (0, i.f)(n, {
                    dir: "right"
                })), new TextDecoder().decode(n)
            }
        },
        89862: function(e, t, n) {
            n.d(t, {
                O0: function() {
                    return u
                },
                nr: function() {
                    return f
                },
                qX: function() {
                    return h
                }
            });
            var r = n(26045),
                o = n(17360),
                i = n(78742),
                s = n(90130),
                a = n(82646);
            let c = new TextEncoder;

            function u(e, t = {}) {
                return "number" == typeof e || "bigint" == typeof e ? function(e, t) {
                    let n = (0, a.eC)(e, t);
                    return f(n)
                }(e, t) : "boolean" == typeof e ? function(e, t = {}) {
                    let n = new Uint8Array(1);
                    return (n[0] = Number(e), "number" == typeof t.size) ? ((0, s.Yf)(n, {
                        size: t.size
                    }), (0, i.vk)(n, {
                        size: t.size
                    })) : n
                }(e, t) : (0, o.v)(e) ? f(e, t) : h(e, t)
            }
            let l = {
                zero: 48,
                nine: 57,
                A: 65,
                F: 70,
                a: 97,
                f: 102
            };

            function d(e) {
                return e >= l.zero && e <= l.nine ? e - l.zero : e >= l.A && e <= l.F ? e - (l.A - 10) : e >= l.a && e <= l.f ? e - (l.a - 10) : void 0
            }

            function f(e, t = {}) {
                let n = e;
                t.size && ((0, s.Yf)(n, {
                    size: t.size
                }), n = (0, i.vk)(n, {
                    dir: "right",
                    size: t.size
                }));
                let o = n.slice(2);
                o.length % 2 && (o = `0${o}`);
                let a = o.length / 2,
                    c = new Uint8Array(a);
                for (let e = 0, t = 0; e < a; e++) {
                    let n = d(o.charCodeAt(t++)),
                        i = d(o.charCodeAt(t++));
                    if (void 0 === n || void 0 === i) throw new r.G(`Invalid byte sequence ("${o[t-2]}${o[t-1]}" in "${o}").`);
                    c[e] = 16 * n + i
                }
                return c
            }

            function h(e, t = {}) {
                let n = c.encode(e);
                return "number" == typeof t.size ? ((0, s.Yf)(n, {
                    size: t.size
                }), (0, i.vk)(n, {
                    dir: "right",
                    size: t.size
                })) : n
            }
        },
        82646: function(e, t, n) {
            n.d(t, {
                $G: function() {
                    return f
                },
                C4: function() {
                    return c
                },
                NC: function() {
                    return a
                },
                ci: function() {
                    return u
                },
                eC: function() {
                    return l
                }
            });
            var r = n(35405),
                o = n(78742),
                i = n(90130);
            let s = Array.from({
                length: 256
            }, (e, t) => t.toString(16).padStart(2, "0"));

            function a(e, t = {}) {
                return "number" == typeof e || "bigint" == typeof e ? l(e, t) : "string" == typeof e ? f(e, t) : "boolean" == typeof e ? c(e, t) : u(e, t)
            }

            function c(e, t = {}) {
                let n = `0x${Number(e)}`;
                return "number" == typeof t.size ? ((0, i.Yf)(n, {
                    size: t.size
                }), (0, o.vk)(n, {
                    size: t.size
                })) : n
            }

            function u(e, t = {}) {
                let n = "";
                for (let t = 0; t < e.length; t++) n += s[e[t]];
                let r = `0x${n}`;
                return "number" == typeof t.size ? ((0, i.Yf)(r, {
                    size: t.size
                }), (0, o.vk)(r, {
                    dir: "right",
                    size: t.size
                })) : r
            }

            function l(e, t = {}) {
                let n;
                let {
                    signed: i,
                    size: s
                } = t, a = BigInt(e);
                s ? n = i ? (1 n << 8 n * BigInt(s) - 1 n) - 1 n : 2 n ** (8 n * BigInt(s)) - 1 n : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
                let c = "bigint" == typeof n && i ? -n - 1 n : 0;
                if (n && a > n || a < c) {
                    let t = "bigint" == typeof e ? "n" : "";
                    throw new r.J5({
                        max: n ? `${n}${t}` : void 0,
                        min: `${c}${t}`,
                        signed: i,
                        size: s,
                        value: `${e}${t}`
                    })
                }
                let u = `0x${(i&&a<0?(1n<<BigInt(8*s))+BigInt(a):a).toString(16)}`;
                return s ? (0, o.vk)(u, {
                    size: s
                }) : u
            }
            let d = new TextEncoder;

            function f(e, t = {}) {
                let n = d.encode(e);
                return u(n, t)
            }
        },
        10053: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return a
                }
            });
            var r = n(7158),
                o = n(26045),
                i = n(58960),
                s = n(73397);

            function a(e, {
                abi: t,
                address: n,
                args: a,
                docsPath: c,
                functionName: u,
                sender: l
            }) {
                let {
                    code: d,
                    data: f,
                    message: h,
                    shortMessage: p
                } = e instanceof i.VQ ? e : e instanceof o.G ? e.walk(e => "data" in e) || e.walk() : {}, g = e instanceof r.wb ? new i.Dk({
                    functionName: u
                }) : [3, s.XS.code].includes(d) && (f || h || p) ? new i.Lu({
                    abi: t,
                    data: "object" == typeof f ? f.data : f,
                    functionName: u,
                    message: p ? ? h
                }) : e;
                return new i.uq(g, {
                    abi: t,
                    args: a,
                    contractAddress: n,
                    docsPath: c,
                    functionName: u,
                    sender: l
                })
            }
        },
        17743: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return i
                }
            });
            var r = n(26045),
                o = n(31325);

            function i(e, t) {
                let n = (e.details || "").toLowerCase(),
                    i = e instanceof r.G ? e.walk(e => e ? .code === o.M_.code) : e;
                return i instanceof r.G ? new o.M_({
                    cause: e,
                    message: i.details
                }) : o.M_.nodeMessage.test(n) ? new o.M_({
                    cause: e,
                    message: e.details
                }) : o.Hh.nodeMessage.test(n) ? new o.Hh({
                    cause: e,
                    maxFeePerGas: t ? .maxFeePerGas
                }) : o.G$.nodeMessage.test(n) ? new o.G$({
                    cause: e,
                    maxFeePerGas: t ? .maxFeePerGas
                }) : o.ZI.nodeMessage.test(n) ? new o.ZI({
                    cause: e,
                    nonce: t ? .nonce
                }) : o.vU.nodeMessage.test(n) ? new o.vU({
                    cause: e,
                    nonce: t ? .nonce
                }) : o.se.nodeMessage.test(n) ? new o.se({
                    cause: e,
                    nonce: t ? .nonce
                }) : o.C_.nodeMessage.test(n) ? new o.C_({
                    cause: e
                }) : o.WF.nodeMessage.test(n) ? new o.WF({
                    cause: e,
                    gas: t ? .gas
                }) : o.dR.nodeMessage.test(n) ? new o.dR({
                    cause: e,
                    gas: t ? .gas
                }) : o.pZ.nodeMessage.test(n) ? new o.pZ({
                    cause: e
                }) : o.cs.nodeMessage.test(n) ? new o.cs({
                    cause: e,
                    maxFeePerGas: t ? .maxFeePerGas,
                    maxPriorityFeePerGas: t ? .maxPriorityFeePerGas
                }) : new o.cj({
                    cause: e
                })
            }
        },
        63312: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(51356);

            function o(e) {
                let t = e.transactions ? .map(e => "string" == typeof e ? e : r.Tr(e));
                return { ...e,
                    baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
                    blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
                    difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
                    excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
                    gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
                    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
                    hash: e.hash ? e.hash : null,
                    logsBloom: e.logsBloom ? e.logsBloom : null,
                    nonce: e.nonce ? e.nonce : null,
                    number: e.number ? BigInt(e.number) : null,
                    size: e.size ? BigInt(e.size) : void 0,
                    timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
                    transactions: t,
                    totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null
                }
            }
        },
        30947: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return r
                }
            });

            function r(e, {
                format: t
            }) {
                if (!t) return {};
                let n = {},
                    r = t(e || {});
                return ! function t(r) {
                    let o = Object.keys(r);
                    for (let i of o) i in e && (n[i] = e[i]), r[i] && "object" == typeof r[i] && !Array.isArray(r[i]) && t(r[i])
                }(r), n
            }
        },
        51356: function(e, t, n) {
            n.d(t, {
                Tr: function() {
                    return i
                },
                c8: function() {
                    return o
                }
            });
            var r = n(90130);
            let o = {
                "0x0": "legacy",
                "0x1": "eip2930",
                "0x2": "eip1559",
                "0x3": "eip4844",
                "0x4": "eip7702"
            };

            function i(e) {
                let t = { ...e,
                    blockHash: e.blockHash ? e.blockHash : null,
                    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                    chainId: e.chainId ? (0, r.ly)(e.chainId) : void 0,
                    gas: e.gas ? BigInt(e.gas) : void 0,
                    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
                    maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
                    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
                    maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
                    nonce: e.nonce ? (0, r.ly)(e.nonce) : void 0,
                    to: e.to ? e.to : null,
                    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
                    type: e.type ? o[e.type] : void 0,
                    typeHex: e.type ? e.type : void 0,
                    value: e.value ? BigInt(e.value) : void 0,
                    v: e.v ? BigInt(e.v) : void 0
                };
                return e.authorizationList && (t.authorizationList = e.authorizationList.map(e => ({
                    contractAddress: e.address,
                    chainId: Number(e.chainId),
                    nonce: Number(e.nonce),
                    r: e.r,
                    s: e.s,
                    yParity: Number(e.yParity)
                }))), t.yParity = (() => {
                    if (e.yParity) return Number(e.yParity);
                    if ("bigint" == typeof t.v) {
                        if (0 n === t.v || 27 n === t.v) return 0;
                        if (1 n === t.v || 28 n === t.v) return 1;
                        if (t.v >= 35 n) return t.v % 2 n === 0 n ? 1 : 0
                    }
                })(), "legacy" === t.type && (delete t.accessList, delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas, delete t.yParity), "eip2930" === t.type && (delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas), "eip1559" === t.type && delete t.maxFeePerBlobGas, t
            }
        },
        76517: function(e, t, n) {
            n.d(t, {
                tG: function() {
                    return i
                }
            });
            var r = n(82646);
            let o = {
                legacy: "0x0",
                eip2930: "0x1",
                eip1559: "0x2",
                eip4844: "0x3",
                eip7702: "0x4"
            };

            function i(e) {
                let t = {};
                return void 0 !== e.authorizationList && (t.authorizationList = e.authorizationList.map(e => ({
                    address: e.contractAddress,
                    r: e.r,
                    s: e.s,
                    chainId: (0, r.eC)(e.chainId),
                    nonce: (0, r.eC)(e.nonce),
                    ...void 0 !== e.yParity ? {
                        yParity: (0, r.eC)(e.yParity)
                    } : {},
                    ...void 0 !== e.v && void 0 === e.yParity ? {
                        v: (0, r.eC)(e.v)
                    } : {}
                }))), void 0 !== e.accessList && (t.accessList = e.accessList), void 0 !== e.blobVersionedHashes && (t.blobVersionedHashes = e.blobVersionedHashes), void 0 !== e.blobs && ("string" != typeof e.blobs[0] ? t.blobs = e.blobs.map(e => (0, r.ci)(e)) : t.blobs = e.blobs), void 0 !== e.data && (t.data = e.data), void 0 !== e.from && (t.from = e.from), void 0 !== e.gas && (t.gas = (0, r.eC)(e.gas)), void 0 !== e.gasPrice && (t.gasPrice = (0, r.eC)(e.gasPrice)), void 0 !== e.maxFeePerBlobGas && (t.maxFeePerBlobGas = (0, r.eC)(e.maxFeePerBlobGas)), void 0 !== e.maxFeePerGas && (t.maxFeePerGas = (0, r.eC)(e.maxFeePerGas)), void 0 !== e.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = (0, r.eC)(e.maxPriorityFeePerGas)), void 0 !== e.nonce && (t.nonce = (0, r.eC)(e.nonce)), void 0 !== e.to && (t.to = e.to), void 0 !== e.type && (t.type = o[e.type]), void 0 !== e.value && (t.value = (0, r.eC)(e.value)), t
            }
        },
        23346: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return r
                }
            });

            function r(e, t, n) {
                let r = e[t.name];
                if ("function" == typeof r) return r;
                let o = e[n];
                return "function" == typeof o ? o : n => t(e, n)
            }
        },
        88653: function(e, t, n) {
            n.d(t, {
                w: function() {
                    return M
                }
            });
            var r = n(98478);
            let o = BigInt(4294967296 - 1),
                i = BigInt(32),
                s = (e, t, n) => e << n | t >>> 32 - n,
                a = (e, t, n) => t << n | e >>> 32 - n,
                c = (e, t, n) => t << n - 32 | e >>> 64 - n,
                u = (e, t, n) => e << n - 32 | t >>> 64 - n;
            var l = n(57632);
            let d = [],
                f = [],
                h = [],
                p = BigInt(0),
                g = BigInt(1),
                b = BigInt(2),
                m = BigInt(7),
                y = BigInt(256),
                v = BigInt(113);
            for (let e = 0, t = g, n = 1, r = 0; e < 24; e++) {
                [n, r] = [r, (2 * n + 3 * r) % 5], d.push(2 * (5 * r + n)), f.push((e + 1) * (e + 2) / 2 % 64);
                let o = p;
                for (let e = 0; e < 7; e++)(t = (t << g ^ (t >> m) * v) % y) & b && (o ^= g << (g << BigInt(e)) - g);
                h.push(o)
            }
            let [w, x] = function(e, t = !1) {
                let n = new Uint32Array(e.length),
                    r = new Uint32Array(e.length);
                for (let s = 0; s < e.length; s++) {
                    let {
                        h: a,
                        l: c
                    } = function(e, t = !1) {
                        return t ? {
                            h: Number(e & o),
                            l: Number(e >> i & o)
                        } : {
                            h: 0 | Number(e >> i & o),
                            l: 0 | Number(e & o)
                        }
                    }(e[s], t);
                    [n[s], r[s]] = [a, c]
                }
                return [n, r]
            }(h, !0), P = (e, t, n) => n > 32 ? c(e, t, n) : s(e, t, n), $ = (e, t, n) => n > 32 ? u(e, t, n) : a(e, t, n);
            class G extends l.kb {
                constructor(e, t, n, o = !1, i = 24) {
                    if (super(), this.blockLen = e, this.suffix = t, this.outputLen = n, this.enableXOF = o, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, r.Rx)(n), 0 >= this.blockLen || this.blockLen >= 200) throw Error("Sha3 supports only keccak-f1600 function");
                    this.state = new Uint8Array(200), this.state32 = (0, l.Jq)(this.state)
                }
                keccak() {
                    l.iA || (0, l.l1)(this.state32),
                        function(e, t = 24) {
                            let n = new Uint32Array(10);
                            for (let r = 24 - t; r < 24; r++) {
                                for (let t = 0; t < 10; t++) n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                                for (let t = 0; t < 10; t += 2) {
                                    let r = (t + 8) % 10,
                                        o = (t + 2) % 10,
                                        i = n[o],
                                        s = n[o + 1],
                                        a = P(i, s, 1) ^ n[r],
                                        c = $(i, s, 1) ^ n[r + 1];
                                    for (let n = 0; n < 50; n += 10) e[t + n] ^= a, e[t + n + 1] ^= c
                                }
                                let t = e[2],
                                    o = e[3];
                                for (let n = 0; n < 24; n++) {
                                    let r = f[n],
                                        i = P(t, o, r),
                                        s = $(t, o, r),
                                        a = d[n];
                                    t = e[a], o = e[a + 1], e[a] = i, e[a + 1] = s
                                }
                                for (let t = 0; t < 50; t += 10) {
                                    for (let r = 0; r < 10; r++) n[r] = e[t + r];
                                    for (let r = 0; r < 10; r++) e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10]
                                }
                                e[0] ^= w[r], e[1] ^= x[r]
                            }
                            n.fill(0)
                        }(this.state32, this.rounds), l.iA || (0, l.l1)(this.state32), this.posOut = 0, this.pos = 0
                }
                update(e) {
                    (0, r.Gg)(this);
                    let {
                        blockLen: t,
                        state: n
                    } = this;
                    e = (0, l.O0)(e);
                    let o = e.length;
                    for (let r = 0; r < o;) {
                        let i = Math.min(t - this.pos, o - r);
                        for (let t = 0; t < i; t++) n[this.pos++] ^= e[r++];
                        this.pos === t && this.keccak()
                    }
                    return this
                }
                finish() {
                    if (this.finished) return;
                    this.finished = !0;
                    let {
                        state: e,
                        suffix: t,
                        pos: n,
                        blockLen: r
                    } = this;
                    e[n] ^= t, (128 & t) != 0 && n === r - 1 && this.keccak(), e[r - 1] ^= 128, this.keccak()
                }
                writeInto(e) {
                    (0, r.Gg)(this, !1), (0, r.aI)(e), this.finish();
                    let t = this.state,
                        {
                            blockLen: n
                        } = this;
                    for (let r = 0, o = e.length; r < o;) {
                        this.posOut >= n && this.keccak();
                        let i = Math.min(n - this.posOut, o - r);
                        e.set(t.subarray(this.posOut, this.posOut + i), r), this.posOut += i, r += i
                    }
                    return e
                }
                xofInto(e) {
                    if (!this.enableXOF) throw Error("XOF is not possible for this instance");
                    return this.writeInto(e)
                }
                xof(e) {
                    return (0, r.Rx)(e), this.xofInto(new Uint8Array(e))
                }
                digestInto(e) {
                    if ((0, r.J8)(e, this), this.finished) throw Error("digest() was already called");
                    return this.writeInto(e), this.destroy(), e
                }
                digest() {
                    return this.digestInto(new Uint8Array(this.outputLen))
                }
                destroy() {
                    this.destroyed = !0, this.state.fill(0)
                }
                _cloneInto(e) {
                    let {
                        blockLen: t,
                        suffix: n,
                        outputLen: r,
                        rounds: o,
                        enableXOF: i
                    } = this;
                    return e || (e = new G(t, n, r, i, o)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = o, e.suffix = n, e.outputLen = r, e.enableXOF = i, e.destroyed = this.destroyed, e
                }
            }
            let E = (0, l.hE)(() => new G(136, 1, 32));
            var I = n(17360),
                C = n(89862),
                B = n(82646);

            function M(e, t) {
                let n = E((0, I.v)(e, {
                    strict: !1
                }) ? (0, C.O0)(e) : e);
                return "bytes" === (t || "hex") ? n : (0, B.NC)(n)
            }
        },
        62567: function(e, t, n) {
            n.d(t, {
                n: function() {
                    return o
                }
            });
            var r = n(32390);
            let o = r.r
        },
        44423: function(e, t, n) {
            n.d(t, {
                C: function() {
                    return i
                }
            });
            var r = n(21449),
                o = n(32390);
            let i = e => (0, r.tP)((0, o.r)(e), 0, 4)
        },
        32390: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return d
                }
            });
            var r = n(89862),
                o = n(88653);
            let i = e => (0, o.w)((0, r.O0)(e));
            var s = n(2209);
            let a = /^tuple(?<array>(\[(\d*)\])*)$/;

            function c(e) {
                let t = "",
                    n = e.length;
                for (let r = 0; r < n; r++) {
                    let o = e[r];
                    t += function e(t) {
                        let n = t.type;
                        if (a.test(t.type) && "components" in t) {
                            n = "(";
                            let r = t.components.length;
                            for (let o = 0; o < r; o++) {
                                let i = t.components[o];
                                n += e(i), o < r - 1 && (n += ", ")
                            }
                            let o = (0, s.Zw)(a, t.type);
                            return n += `)${o?.array??""}`, e({ ...t,
                                type: n
                            })
                        }
                        return ("indexed" in t && t.indexed && (n = `${n} indexed`), t.name) ? `${n} ${t.name}` : n
                    }(o), r !== n - 1 && (t += ", ")
                }
                return t
            }
            var u = n(26045);
            let l = e => {
                let t = "string" == typeof e ? e : "function" === e.type ? `function ${e.name}(${c(e.inputs)})${e.stateMutability&&"nonpayable"!==e.stateMutability?` ${e.stateMutability}`:""}${e.outputs.length?` returns (${c(e.outputs)})`:""}` : "event" === e.type ? `event ${e.name}(${c(e.inputs)})` : "error" === e.type ? `error ${e.name}(${c(e.inputs)})` : "constructor" === e.type ? `constructor(${c(e.inputs)})${"payable"===e.stateMutability?" payable":""}` : "fallback" === e.type ? "fallback()" : "receive() external payable";
                return function(e) {
                    let t = !0,
                        n = "",
                        r = 0,
                        o = "",
                        i = !1;
                    for (let s = 0; s < e.length; s++) {
                        let a = e[s];
                        if (["(", ")", ","].includes(a) && (t = !0), "(" === a && r++, ")" === a && r--, t) {
                            if (0 === r) {
                                if (" " === a && ["event", "function", ""].includes(o)) o = "";
                                else if (o += a, ")" === a) {
                                    i = !0;
                                    break
                                }
                                continue
                            }
                            if (" " === a) {
                                "," !== e[s - 1] && "," !== n && ",(" !== n && (n = "", t = !1);
                                continue
                            }
                            o += a, n += a
                        }
                    }
                    if (!i) throw new u.G("Unable to normalize signature.");
                    return o
                }(t)
            };

            function d(e) {
                return i(l(e))
            }
        },
        38532: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return r
                }
            });
            class r extends Map {
                constructor(e) {
                    super(), Object.defineProperty(this, "maxSize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.maxSize = e
                }
                get(e) {
                    let t = super.get(e);
                    return super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
                }
                set(e, t) {
                    if (super.set(e, t), this.maxSize && this.size > this.maxSize) {
                        let e = this.keys().next().value;
                        e && this.delete(e)
                    }
                    return this
                }
            }
        },
        3069: function(e, t, n) {
            n.d(t, {
                J: function() {
                    return o
                }
            });
            var r = n(29361);

            function o(e, {
                delay: t = 100,
                retryCount: n = 2,
                shouldRetry: o = () => !0
            } = {}) {
                return new Promise((i, s) => {
                    let a = async ({
                        count: c = 0
                    } = {}) => {
                        let u = async ({
                            error: e
                        }) => {
                            let n = "function" == typeof t ? t({
                                count: c,
                                error: e
                            }) : t;
                            n && await (0, r.D)(n), a({
                                count: c + 1
                            })
                        };
                        try {
                            let t = await e();
                            i(t)
                        } catch (e) {
                            if (c < n && await o({
                                    count: c,
                                    error: e
                                })) return u({
                                error: e
                            });
                            s(e)
                        }
                    };
                    a()
                })
            }
        },
        53824: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return l
                }
            });
            var r = n(92490),
                o = n(88653),
                i = n(17360),
                s = n(90130),
                a = n(82646);
            async function c({
                hash: e,
                signature: t
            }) {
                let r = (0, i.v)(e) ? e : (0, a.NC)(e),
                    {
                        secp256k1: o
                    } = await n.e(4768).then(n.bind(n, 94768)),
                    c = (() => {
                        if ("object" == typeof t && "r" in t && "s" in t) {
                            let {
                                r: e,
                                s: n,
                                v: r,
                                yParity: i
                            } = t, a = Number(i ? ? r), c = u(a);
                            return new o.Signature((0, s.y_)(e), (0, s.y_)(n)).addRecoveryBit(c)
                        }
                        let e = (0, i.v)(t) ? t : (0, a.NC)(t),
                            n = (0, s.ly)(`0x${e.slice(130)}`),
                            r = u(n);
                        return o.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(r)
                    })(),
                    l = c.recoverPublicKey(r.substring(2)).toHex(!1);
                return `0x${l}`
            }

            function u(e) {
                if (0 === e || 1 === e) return e;
                if (27 === e) return 0;
                if (28 === e) return 1;
                throw Error("Invalid yParityOrV value")
            }
            async function l({
                hash: e,
                signature: t
            }) {
                return function(e) {
                    let t = (0, o.w)(`0x${e.substring(4)}`).substring(26);
                    return (0, r.x)(`0x${t}`)
                }(await c({
                    hash: e,
                    signature: t
                }))
            }
        },
        63014: function(e, t, n) {
            n.d(t, {
                mF: function() {
                    return u
                }
            });
            var r = n(12122),
                o = n(97920),
                i = n(72273),
                s = n(17046),
                a = n(82646);

            function c(e) {
                if (e && 0 !== e.length) return e.reduce((e, {
                    slot: t,
                    value: n
                }) => {
                    if (66 !== t.length) throw new o.W_({
                        size: t.length,
                        targetSize: 66,
                        type: "hex"
                    });
                    if (66 !== n.length) throw new o.W_({
                        size: n.length,
                        targetSize: 66,
                        type: "hex"
                    });
                    return e[t] = n, e
                }, {})
            }

            function u(e) {
                if (!e) return;
                let t = {};
                for (let {
                        address: n,
                        ...o
                    } of e) {
                    if (!(0, s.U)(n, {
                            strict: !1
                        })) throw new r.b({
                        address: n
                    });
                    if (t[n]) throw new i.Nc({
                        address: n
                    });
                    t[n] = function(e) {
                        let {
                            balance: t,
                            nonce: n,
                            state: r,
                            stateDiff: o,
                            code: s
                        } = e, u = {};
                        if (void 0 !== s && (u.code = s), void 0 !== t && (u.balance = (0, a.eC)(t)), void 0 !== n && (u.nonce = (0, a.eC)(n)), void 0 !== r && (u.state = c(r)), void 0 !== o) {
                            if (u.state) throw new i.Z8;
                            u.stateDiff = c(o)
                        }
                        return u
                    }(o)
                }
                return t
            }
        },
        821: function(e, t, n) {
            n.d(t, {
                P: function() {
                    return r
                }
            });
            let r = (e, t, n) => JSON.stringify(e, (e, n) => {
                let r = "bigint" == typeof n ? n.toString() : n;
                return "function" == typeof t ? t(e, r) : r
            }, n)
        },
        10129: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return u
                }
            });
            var r = n(77218);
            let o = 2 n ** 256 n - 1 n;
            var i = n(12122),
                s = n(31325),
                a = n(22334),
                c = n(17046);

            function u(e) {
                let {
                    account: t,
                    gasPrice: n,
                    maxFeePerGas: u,
                    maxPriorityFeePerGas: l,
                    to: d
                } = e, f = t ? (0, r.T)(t) : void 0;
                if (f && !(0, c.U)(f.address)) throw new i.b({
                    address: f.address
                });
                if (d && !(0, c.U)(d)) throw new i.b({
                    address: d
                });
                if (void 0 !== n && (void 0 !== u || void 0 !== l)) throw new a.xY;
                if (u && u > o) throw new s.Hh({
                    maxFeePerGas: u
                });
                if (l && u && l > u) throw new s.cs({
                    maxFeePerGas: u,
                    maxPriorityFeePerGas: l
                })
            }
        },
        10347: function(e, t, n) {
            n.d(t, {
                cj: function() {
                    return b
                },
                H6: function() {
                    return p
                },
                iC: function() {
                    return g
                }
            });
            var r = n(7158),
                o = n(12122),
                i = n(26045);
            class s extends i.G {
                constructor({
                    primaryType: e,
                    types: t
                }) {
                    super(`Invalid primary type \`${e}\` must be one of \`${JSON.stringify(Object.keys(t))}\`.`, {
                        docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
                        metaMessages: ["Check that the primary type is a key in `types`."]
                    })
                }
            }
            class a extends i.G {
                constructor({
                    type: e
                }) {
                    super(`Struct type "${e}" is invalid.`, {
                        metaMessages: ["Struct type must not be a Solidity type."],
                        name: "InvalidStructTypeError"
                    })
                }
            }
            var c = n(17046),
                u = n(8536),
                l = n(82646);
            let d = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
                f = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
            var h = n(821);

            function p(e) {
                let {
                    domain: t,
                    message: n,
                    primaryType: r,
                    types: o
                } = e, i = (e, t) => {
                    let n = { ...t
                    };
                    for (let t of e) {
                        let {
                            name: e,
                            type: r
                        } = t;
                        "address" === r && (n[e] = n[e].toLowerCase())
                    }
                    return n
                }, s = o.EIP712Domain && t ? i(o.EIP712Domain, t) : {}, a = (() => {
                    if ("EIP712Domain" !== r) return i(o[r], n)
                })();
                return (0, h.P)({
                    domain: s,
                    message: a,
                    primaryType: r,
                    types: o
                })
            }

            function g(e) {
                let {
                    domain: t,
                    message: n,
                    primaryType: i,
                    types: h
                } = e, p = (e, t) => {
                    for (let n of e) {
                        let {
                            name: e,
                            type: i
                        } = n, s = t[e], g = i.match(f);
                        if (g && ("number" == typeof s || "bigint" == typeof s)) {
                            let [e, t, n] = g;
                            (0, l.eC)(s, {
                                signed: "int" === t,
                                size: Number.parseInt(n) / 8
                            })
                        }
                        if ("address" === i && "string" == typeof s && !(0, c.U)(s)) throw new o.b({
                            address: s
                        });
                        let b = i.match(d);
                        if (b) {
                            let [e, t] = b;
                            if (t && (0, u.d)(s) !== Number.parseInt(t)) throw new r.KY({
                                expectedSize: Number.parseInt(t),
                                givenSize: (0, u.d)(s)
                            })
                        }
                        let m = h[i];
                        m && (function(e) {
                            if ("address" === e || "bool" === e || "string" === e || e.startsWith("bytes") || e.startsWith("uint") || e.startsWith("int")) throw new a({
                                type: e
                            })
                        }(i), p(m, s))
                    }
                };
                if (h.EIP712Domain && t && p(h.EIP712Domain, t), "EIP712Domain" !== i) {
                    if (h[i]) p(h[i], n);
                    else throw new s({
                        primaryType: i,
                        types: h
                    })
                }
            }

            function b({
                domain: e
            }) {
                return ["string" == typeof e ? .name && {
                    name: "name",
                    type: "string"
                }, e ? .version && {
                    name: "version",
                    type: "string"
                }, "number" == typeof e ? .chainId && {
                    name: "chainId",
                    type: "uint256"
                }, e ? .verifyingContract && {
                    name: "verifyingContract",
                    type: "address"
                }, e ? .salt && {
                    name: "salt",
                    type: "bytes32"
                }].filter(Boolean)
            }
        },
        54622: function(e, t, n) {
            let r;
            n.d(t, {
                h: function() {
                    return i
                }
            });
            let o = 256;

            function i(e = 11) {
                if (!r || o + e > 512) {
                    r = "", o = 0;
                    for (let e = 0; e < 256; e++) r += (256 + 256 * Math.random() | 0).toString(16).substring(1)
                }
                return r.substring(o, o++ + e)
            }
        },
        15021: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return i
                }
            });
            var r = n(64787),
                o = n(32610);

            function i(e, t = "wei") {
                return (0, o.b)(e, r.ez[t])
            }
        },
        70792: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return i
                }
            });
            var r = n(64787),
                o = n(32610);

            function i(e, t = "wei") {
                return (0, o.b)(e, r.Zn[t])
            }
        },
        32610: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return r
                }
            });

            function r(e, t) {
                let n = e.toString(),
                    r = n.startsWith("-");
                r && (n = n.slice(1));
                let [o, i] = [(n = n.padStart(t, "0")).slice(0, n.length - t), n.slice(n.length - t)];
                return i = i.replace(/(0+)$/, ""), `${r?"-":""}${o||"0"}${i?`.${i}`:""}`
            }
        },
        29361: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return r
                }
            });
            async function r(e) {
                return new Promise(t => setTimeout(t, e))
            }
        },
        69586: function(e, t, n) {
            n.d(t, {
                V: function() {
                    return a
                },
                F: function() {
                    return c
                }
            });
            var r = n(78572);
            let o = !1;
            async function i(e, t = {}) {
                let n;
                if (o) return [];
                o = !0, e.setState(e => ({ ...e,
                    status: e.current ? "reconnecting" : "connecting"
                }));
                let r = [];
                if (t.connectors ? .length)
                    for (let n of t.connectors) {
                        let t;
                        t = "function" == typeof n ? e._internal.connectors.setup(n) : n, r.push(t)
                    } else r.push(...e.connectors);
                try {
                    n = await e.storage ? .getItem("recentConnectorId")
                } catch {}
                let i = {};
                for (let [, t] of e.state.connections) i[t.connector.id] = 1;
                n && (i[n] = 0);
                let s = Object.keys(i).length > 0 ? [...r].sort((e, t) => (i[e.id] ? ? 10) - (i[t.id] ? ? 10)) : r,
                    a = !1,
                    c = [],
                    u = [];
                for (let t of s) {
                    let n = await t.getProvider().catch(() => void 0);
                    if (!n || u.some(e => e === n)) continue;
                    let r = await t.isAuthorized();
                    if (!r) continue;
                    let o = await t.connect({
                        isReconnecting: !0
                    }).catch(() => null);
                    o && (t.emitter.off("connect", e._internal.events.connect), t.emitter.on("change", e._internal.events.change), t.emitter.on("disconnect", e._internal.events.disconnect), e.setState(e => {
                        let n = new Map(a ? e.connections : new Map).set(t.uid, {
                            accounts: o.accounts,
                            chainId: o.chainId,
                            connector: t
                        });
                        return { ...e,
                            current: a ? e.current : t.uid,
                            connections: n
                        }
                    }), c.push({
                        accounts: o.accounts,
                        chainId: o.chainId,
                        connector: t
                    }), u.push(n), a = !0)
                }
                return ("reconnecting" === e.state.status || "connecting" === e.state.status) && (a ? e.setState(e => ({ ...e,
                    status: "connected"
                })) : e.setState(e => ({ ...e,
                    connections: new Map,
                    current: null,
                    status: "disconnected"
                }))), o = !1, c
            }

            function s(e) {
                let {
                    children: t,
                    config: n,
                    initialState: o,
                    reconnectOnMount: s = !0
                } = e, {
                    onMount: a
                } = function(e, t) {
                    let {
                        initialState: n,
                        reconnectOnMount: r
                    } = t;
                    return n && !e._internal.store.persist.hasHydrated() && e.setState({ ...n,
                        chainId: e.chains.some(e => e.id === n.chainId) ? n.chainId : e.chains[0].id,
                        connections: r ? n.connections : new Map,
                        status: r ? "reconnecting" : "disconnected"
                    }), {
                        async onMount() {
                            e._internal.ssr && (await e._internal.store.persist.rehydrate(), e._internal.mipd && e._internal.connectors.setState(t => {
                                let n = new Set;
                                for (let e of t ? ? []) e.rdns && n.add(e.rdns);
                                let r = [],
                                    o = e._internal.mipd ? .getProviders() ? ? [];
                                for (let t of o) {
                                    if (n.has(t.info.rdns)) continue;
                                    let o = e._internal.connectors.providerDetailToConnector(t),
                                        i = e._internal.connectors.setup(o);
                                    r.push(i)
                                }
                                return [...t, ...r]
                            })), r ? i(e) : e.storage && e.setState(e => ({ ...e,
                                connections: new Map
                            }))
                        }
                    }
                }(n, {
                    initialState: o,
                    reconnectOnMount: s
                });
                n._internal.ssr || a();
                let c = (0, r.useRef)(!0);
                return (0, r.useEffect)(() => {
                    if (c.current && n._internal.ssr) return a(), () => {
                        c.current = !1
                    }
                }, []), t
            }
            let a = (0, r.createContext)(void 0);

            function c(e) {
                let {
                    children: t,
                    config: n
                } = e;
                return (0, r.createElement)(s, e, (0, r.createElement)(a.Provider, {
                    value: n
                }, t))
            }
        },
        42907: function(e, t, n) {
            n.d(t, {
                m: function() {
                    return l
                }
            });
            var r = n(88007),
                o = n(75476),
                i = n(55351),
                s = n(20004),
                a = n(78572),
                c = n(54763);
            let u = e => "object" == typeof e && !Array.isArray(e);

            function l(e = {}) {
                let t = (0, i.Z)(e);
                return function(e, t, n = t, r = s.v) {
                    let o = (0, a.useRef)([]),
                        i = (0, c.useSyncExternalStoreWithSelector)(e, t, n, e => e, (e, t) => {
                            if (u(e) && u(t) && o.current.length) {
                                for (let n of o.current) {
                                    let o = r(e[n], t[n]);
                                    if (!o) return !1
                                }
                                return !0
                            }
                            return r(e, t)
                        });
                    return (0, a.useMemo)(() => {
                        if (u(i)) {
                            let e = { ...i
                                },
                                t = {};
                            for (let [n, r] of Object.entries(e)) t = { ...t,
                                [n]: {
                                    configurable: !1,
                                    enumerable: !0,
                                    get: () => (o.current.includes(n) || o.current.push(n), r)
                                }
                            };
                            return Object.defineProperties(e, t), e
                        }
                        return i
                    }, [i])
                }(e => (0, r.u)(t, {
                    onChange: e
                }), () => (0, o.D)(t))
            }
        },
        67127: function(e, t, n) {
            function r(e) {
                return e.state.chainId
            }
            n.d(t, {
                x: function() {
                    return s
                }
            });
            var o = n(78572),
                i = n(55351);

            function s(e = {}) {
                let t = (0, i.Z)(e);
                return (0, o.useSyncExternalStore)(e => (function(e, t) {
                    let {
                        onChange: n
                    } = t;
                    return e.subscribe(e => e.chainId, n)
                })(t, {
                    onChange: e
                }), () => r(t), () => r(t))
            }
        },
        55351: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var r = n(78572),
                o = n(69586),
                i = n(45301);
            let s = () => "wagmi@2.12.25";
            class a extends i.G {
                constructor() {
                    super(...arguments), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "WagmiError"
                    })
                }
                get docsBaseUrl() {
                    return "https://wagmi.sh/react"
                }
                get version() {
                    return s()
                }
            }
            class c extends a {
                constructor() {
                    super("`useConfig` must be used within `WagmiProvider`.", {
                        docsPath: "/api/WagmiProvider"
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "WagmiProviderNotFoundError"
                    })
                }
            }

            function u(e = {}) {
                let t = e.config ? ? (0, r.useContext)(o.V);
                if (!t) throw new c;
                return t
            }
        },
        7900: function(e, t, n) {
            n.d(t, {
                aM: function() {
                    return i
                }
            });
            var r = n(62491),
                o = n(50973);

            function i(e) {
                let t = (0, r.a)({ ...e,
                    queryKeyHashFn: o.kq
                });
                return t.queryKey = e.queryKey, t
            }
        }
    }
]);