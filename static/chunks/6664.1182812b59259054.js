"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6664], {
        46664: function(e, t, a) {
            a.d(t, {
                offchainLookup: function() {
                    return g
                },
                offchainLookupSignature: function() {
                    return m
                }
            });
            var s = a(91845),
                r = a(821),
                n = a(26045),
                o = a(71717);
            class c extends n.G {
                constructor({
                    callbackSelector: e,
                    cause: t,
                    data: a,
                    extraData: s,
                    sender: r,
                    urls: n
                }) {
                    super(t.shortMessage || "An error occurred while fetching for an offchain result.", {
                        cause: t,
                        metaMessages: [...t.metaMessages || [], t.metaMessages ? .length ? "" : [], "Offchain Gateway Call:", n && ["  Gateway URL(s):", ...n.map(e => `    ${(0,o.G)(e)}`)], `  Sender: ${r}`, `  Data: ${a}`, `  Callback selector: ${e}`, `  Extra data: ${s}`].flat(),
                        name: "OffchainLookupError"
                    })
                }
            }
            class i extends n.G {
                constructor({
                    result: e,
                    url: t
                }) {
                    super("Offchain gateway response is malformed. Response data must be a hex value.", {
                        metaMessages: [`Gateway URL: ${(0,o.G)(t)}`, `Response: ${(0,r.P)(e)}`],
                        name: "OffchainLookupResponseMalformedError"
                    })
                }
            }
            class u extends n.G {
                constructor({
                    sender: e,
                    to: t
                }) {
                    super("Reverted sender address does not match target contract address (`to`).", {
                        metaMessages: [`Contract address: ${t}`, `OffchainLookup sender address: ${e}`],
                        name: "OffchainLookupSenderMismatchError"
                    })
                }
            }
            var d = a(41409),
                f = a(1186),
                l = a(68618),
                p = a(33741),
                h = a(91350),
                y = a(17360);
            let m = "0x556f1830",
                w = {
                    name: "OffchainLookup",
                    type: "error",
                    inputs: [{
                        name: "sender",
                        type: "address"
                    }, {
                        name: "urls",
                        type: "string[]"
                    }, {
                        name: "callData",
                        type: "bytes"
                    }, {
                        name: "callbackFunction",
                        type: "bytes4"
                    }, {
                        name: "extraData",
                        type: "bytes"
                    }]
                };
            async function g(e, {
                blockNumber: t,
                blockTag: a,
                data: r,
                to: n
            }) {
                let {
                    args: o
                } = (0, f.p)({
                    data: r,
                    abi: [w]
                }), [i, d, y, m, g] = o, {
                    ccipRead: b
                } = e, G = b && "function" == typeof b ? .request ? b.request : k;
                try {
                    if (!(0, p.E)(n, i)) throw new u({
                        sender: i,
                        to: n
                    });
                    let r = await G({
                            data: y,
                            sender: i,
                            urls: d
                        }),
                        {
                            data: o
                        } = await (0, s.R)(e, {
                            blockNumber: t,
                            blockTag: a,
                            data: (0, h.zo)([m, (0, l.E)([{
                                type: "bytes"
                            }, {
                                type: "bytes"
                            }], [r, g])]),
                            to: n
                        });
                    return o
                } catch (e) {
                    throw new c({
                        callbackSelector: m,
                        cause: e,
                        data: r,
                        extraData: g,
                        sender: i,
                        urls: d
                    })
                }
            }
            async function k({
                data: e,
                sender: t,
                urls: a
            }) {
                let s = Error("An unknown error occurred.");
                for (let n = 0; n < a.length; n++) {
                    let o = a[n],
                        c = o.includes("{data}") ? "GET" : "POST",
                        u = "POST" === c ? {
                            data: e,
                            sender: t
                        } : void 0,
                        f = "POST" === c ? {
                            "Content-Type": "application/json"
                        } : {};
                    try {
                        let a;
                        let n = await fetch(o.replace("{sender}", t).replace("{data}", e), {
                            body: JSON.stringify(u),
                            headers: f,
                            method: c
                        });
                        if (a = n.headers.get("Content-Type") ? .startsWith("application/json") ? (await n.json()).data : await n.text(), !n.ok) {
                            s = new d.Gg({
                                body: u,
                                details: a ? .error ? (0, r.P)(a.error) : n.statusText,
                                headers: n.headers,
                                status: n.status,
                                url: o
                            });
                            continue
                        }
                        if (!(0, y.v)(a)) {
                            s = new i({
                                result: a,
                                url: o
                            });
                            continue
                        }
                        return a
                    } catch (e) {
                        s = new d.Gg({
                            body: u,
                            details: e.message,
                            url: o
                        })
                    }
                }
                throw s
            }
        }
    }
]);