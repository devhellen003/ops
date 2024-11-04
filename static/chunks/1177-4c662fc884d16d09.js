"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1177], {
        51177: function(t, e, n) {
            n.d(e, {
                p: function() {
                    return H
                }
            });
            var a = n(46735),
                r = n(93718),
                s = n(82646);
            async function o(t, {
                chain: e
            }) {
                let {
                    id: n,
                    name: a,
                    nativeCurrency: r,
                    rpcUrls: o,
                    blockExplorers: c
                } = e;
                await t.request({
                    method: "wallet_addEthereumChain",
                    params: [{
                        chainId: (0, s.eC)(n),
                        chainName: a,
                        nativeCurrency: r,
                        rpcUrls: o.default.http,
                        blockExplorerUrls: c ? Object.values(c).map(({
                            url: t
                        }) => t) : void 0
                    }]
                }, {
                    dedupe: !0,
                    retryCount: 0
                })
            }
            var c = n(65891),
                i = n(77218),
                u = n(25134),
                d = n(26045),
                l = n(13657),
                h = n(97725);

            function w({
                chain: t,
                currentChainId: e
            }) {
                if (!t) throw new h.Bk;
                if (e !== t.id) throw new h.Yl({
                    chain: t,
                    currentChainId: e
                })
            }
            var p = n(31325),
                f = n(22334),
                m = n(17743),
                y = n(30947),
                C = n(76517),
                T = n(23346),
                g = n(38532),
                q = n(10129),
                v = n(39521),
                I = n(83040);
            let _ = new g.k(128);
            async function P(t, e) {
                let {
                    account: n = t.account,
                    chain: a = t.chain,
                    accessList: s,
                    authorizationList: o,
                    blobs: c,
                    data: h,
                    gas: g,
                    gasPrice: P,
                    maxFeePerBlobGas: E,
                    maxFeePerGas: R,
                    maxPriorityFeePerGas: k,
                    nonce: N,
                    value: b,
                    ...M
                } = e;
                if (void 0 === n) throw new u.o({
                    docsPath: "/docs/actions/wallet/sendTransaction"
                });
                let z = n ? (0, i.T)(n) : null;
                try {
                    (0, q.F)(e);
                    let n = await (async () => e.to ? e.to : o && o.length > 0 ? await (0, l.z)({
                        authorization: o[0]
                    }).catch(() => {
                        throw new d.G("`to` is required. Could not infer from `authorizationList`.")
                    }) : void 0)();
                    if (z ? .type === "json-rpc" || null === z) {
                        let e;
                        null !== a && (e = await (0, T.s)(t, r.L, "getChainId")({}), w({
                            currentChainId: e,
                            chain: a
                        }));
                        let i = t.chain ? .formatters ? .transactionRequest ? .format,
                            u = i || C.tG,
                            d = u({ ...(0, y.K)(M, {
                                    format: i
                                }),
                                accessList: s,
                                authorizationList: o,
                                blobs: c,
                                chainId: e,
                                data: h,
                                from: z ? .address,
                                gas: g,
                                gasPrice: P,
                                maxFeePerBlobGas: E,
                                maxFeePerGas: R,
                                maxPriorityFeePerGas: k,
                                nonce: N,
                                to: n,
                                value: b
                            }),
                            l = _.get(t.uid) ? "wallet_sendTransaction" : "eth_sendTransaction";
                        try {
                            return await t.request({
                                method: l,
                                params: [d]
                            }, {
                                retryCount: 0
                            })
                        } catch (e) {
                            if ("InvalidInputRpcError" === e.name || "InvalidParamsRpcError" === e.name || "MethodNotFoundRpcError" === e.name || "MethodNotSupportedRpcError" === e.name) return await t.request({
                                method: "wallet_sendTransaction",
                                params: [d]
                            }, {
                                retryCount: 0
                            }).then(e => (_.set(t.uid, !0), e));
                            throw e
                        }
                    }
                    if (z ? .type === "local") {
                        let e = await (0, T.s)(t, v.Z, "prepareTransactionRequest")({
                                account: z,
                                accessList: s,
                                authorizationList: o,
                                blobs: c,
                                chain: a,
                                data: h,
                                gas: g,
                                gasPrice: P,
                                maxFeePerBlobGas: E,
                                maxFeePerGas: R,
                                maxPriorityFeePerGas: k,
                                nonce: N,
                                nonceManager: z.nonceManager,
                                parameters: [...v.Q, "sidecars"],
                                value: b,
                                ...M,
                                to: n
                            }),
                            r = a ? .serializers ? .transaction,
                            i = await z.signTransaction(e, {
                                serializer: r
                            });
                        return await (0, T.s)(t, I.p, "sendRawTransaction")({
                            serializedTransaction: i
                        })
                    }
                    if (z ? .type === "smart") throw new u.Y({
                        metaMessages: ["Consider using the `sendUserOperation` Action instead."],
                        docsPath: "/docs/actions/bundler/sendUserOperation",
                        type: "smart"
                    });
                    throw new u.Y({
                        docsPath: "/docs/actions/wallet/sendTransaction",
                        type: z ? .type
                    })
                } catch (t) {
                    if (t instanceof u.Y) throw t;
                    throw function(t, {
                        docsPath: e,
                        ...n
                    }) {
                        let a = (() => {
                            let e = (0, m.k)(t, n);
                            return e instanceof p.cj ? t : e
                        })();
                        return new f.mk(a, {
                            docsPath: e,
                            ...n
                        })
                    }(t, { ...e,
                        account: z,
                        chain: e.chain || void 0
                    })
                }
            }
            var E = n(92490);
            async function R(t) {
                if (t.account ? .type === "local") return [t.account.address];
                let e = await t.request({
                    method: "eth_accounts"
                }, {
                    dedupe: !0
                });
                return e.map(t => (0, E.x)(t))
            }
            async function k(t) {
                let e = await t.request({
                    method: "wallet_getPermissions"
                }, {
                    dedupe: !0
                });
                return e
            }
            async function N(t) {
                let e = await t.request({
                    method: "eth_requestAccounts"
                }, {
                    dedupe: !0,
                    retryCount: 0
                });
                return e.map(t => (0, E.K)(t))
            }
            async function b(t, e) {
                return t.request({
                    method: "wallet_requestPermissions",
                    params: [e]
                }, {
                    retryCount: 0
                })
            }
            var M = n(12547);
            async function z(t, e) {
                let {
                    account: n = t.account,
                    chain: a = t.chain,
                    ...o
                } = e;
                if (!n) throw new u.o({
                    docsPath: "/docs/actions/wallet/signTransaction"
                });
                let c = (0, i.T)(n);
                (0, q.F)({
                    account: c,
                    ...e
                });
                let d = await (0, T.s)(t, r.L, "getChainId")({});
                null !== a && w({
                    currentChainId: d,
                    chain: a
                });
                let l = a ? .formatters || t.chain ? .formatters,
                    h = l ? .transactionRequest ? .format || C.tG;
                return c.signTransaction ? c.signTransaction({ ...o,
                    chainId: d
                }, {
                    serializer: t.chain ? .serializers ? .transaction
                }) : await t.request({
                    method: "eth_signTransaction",
                    params: [{ ...h(o),
                        chainId: (0, s.eC)(d),
                        from: c.address
                    }]
                }, {
                    retryCount: 0
                })
            }
            var A = n(10347);
            async function D(t, e) {
                let {
                    account: n = t.account,
                    domain: a,
                    message: r,
                    primaryType: s
                } = e;
                if (!n) throw new u.o({
                    docsPath: "/docs/actions/wallet/signTypedData"
                });
                let o = (0, i.T)(n),
                    c = {
                        EIP712Domain: (0, A.cj)({
                            domain: a
                        }),
                        ...e.types
                    };
                if ((0, A.iC)({
                        domain: a,
                        message: r,
                        primaryType: s,
                        types: c
                    }), o.signTypedData) return o.signTypedData({
                    domain: a,
                    message: r,
                    primaryType: s,
                    types: c
                });
                let d = (0, A.H6)({
                    domain: a,
                    message: r,
                    primaryType: s,
                    types: c
                });
                return t.request({
                    method: "eth_signTypedData_v4",
                    params: [o.address, d]
                }, {
                    retryCount: 0
                })
            }
            async function U(t, {
                id: e
            }) {
                await t.request({
                    method: "wallet_switchEthereumChain",
                    params: [{
                        chainId: (0, s.eC)(e)
                    }]
                }, {
                    retryCount: 0
                })
            }
            async function x(t, e) {
                let n = await t.request({
                    method: "wallet_watchAsset",
                    params: e
                }, {
                    retryCount: 0
                });
                return n
            }
            var F = n(89979),
                L = n(10053);
            async function O(t, e) {
                let {
                    abi: n,
                    account: a = t.account,
                    address: r,
                    args: s,
                    dataSuffix: o,
                    functionName: c,
                    ...d
                } = e;
                if (void 0 === a) throw new u.o({
                    docsPath: "/docs/contract/writeContract"
                });
                let l = a ? (0, i.T)(a) : null,
                    h = (0, F.R)({
                        abi: n,
                        args: s,
                        functionName: c
                    });
                try {
                    return await (0, T.s)(t, P, "sendTransaction")({
                        data: `${h}${o?o.replace("0x",""):""}`,
                        to: r,
                        account: l,
                        ...d
                    })
                } catch (t) {
                    throw (0, L.S)(t, {
                        abi: n,
                        address: r,
                        args: s,
                        docsPath: "/docs/contract/writeContract",
                        functionName: c,
                        sender: l ? .address
                    })
                }
            }

            function Y(t) {
                return {
                    addChain: e => o(t, e),
                    deployContract: e => (function(t, e) {
                        let {
                            abi: n,
                            args: a,
                            bytecode: r,
                            ...s
                        } = e, o = (0, c.w)({
                            abi: n,
                            args: a,
                            bytecode: r
                        });
                        return P(t, { ...s,
                            data: o
                        })
                    })(t, e),
                    getAddresses: () => R(t),
                    getChainId: () => (0, r.L)(t),
                    getPermissions: () => k(t),
                    prepareTransactionRequest: e => (0, v.Z)(t, e),
                    requestAddresses: () => N(t),
                    requestPermissions: e => b(t, e),
                    sendRawTransaction: e => (0, I.p)(t, e),
                    sendTransaction: e => P(t, e),
                    signMessage: e => (0, M.l)(t, e),
                    signTransaction: e => z(t, e),
                    signTypedData: e => D(t, e),
                    switchChain: e => U(t, e),
                    watchAsset: e => x(t, e),
                    writeContract: e => O(t, e)
                }
            }
            var j = n(19888);
            async function K(t, e = {}) {
                let n = await (0, j.e)(t, e);
                return n.extend(Y)
            }
            var G = n(50973),
                Q = n(78572),
                S = n(7900),
                Z = n(42907),
                $ = n(67127),
                B = n(55351);

            function H(t = {}) {
                let {
                    query: e = {},
                    ...n
                } = t, r = (0, B.Z)(n), s = (0, a.NL)(), {
                    address: o,
                    connector: c,
                    status: i
                } = (0, Z.m)({
                    config: r
                }), u = (0, $.x)({
                    config: r
                }), d = t.connector ? ? c, {
                    queryKey: l,
                    ...h
                } = function(t, e = {}) {
                    return {
                        gcTime: 0,
                        async queryFn({
                            queryKey: n
                        }) {
                            let {
                                connector: a
                            } = e, {
                                connectorUid: r,
                                scopeKey: s,
                                ...o
                            } = n[1];
                            return K(t, { ...o,
                                connector: a
                            })
                        },
                        queryKey: function(t = {}) {
                            let {
                                connector: e,
                                ...n
                            } = t;
                            return ["walletClient", { ...(0, G.OP)(n),
                                connectorUid: e ? .uid
                            }]
                        }(e)
                    }
                }(r, { ...t,
                    chainId: t.chainId ? ? u,
                    connector: t.connector ? ? c
                }), w = !!(("connected" === i || "reconnecting" === i && d ? .getProvider) && (e.enabled ? ? !0)), p = (0, Q.useRef)(o);
                return (0, Q.useEffect)(() => {
                    let t = p.current;
                    !o && t ? (s.removeQueries({
                        queryKey: l
                    }), p.current = void 0) : o !== t && (s.invalidateQueries({
                        queryKey: l
                    }), p.current = o)
                }, [o, s]), (0, S.aM)({ ...e,
                    ...h,
                    queryKey: l,
                    enabled: w,
                    staleTime: Number.POSITIVE_INFINITY
                })
            }
        }
    }
]);