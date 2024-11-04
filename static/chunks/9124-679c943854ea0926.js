"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9124], {
        28131: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return i
                }
            });
            var r = n(43564),
                a = n(1537);

            function i(e, t) {
                let {
                    chainId: n,
                    ...i
                } = t, s = e.getClient({
                    chainId: n
                }), o = (0, a.s)(s, r.L, "readContract");
                return o(i)
            }
        },
        1537: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return r
                }
            });

            function r(e, t, n) {
                let r = e[t.name];
                if ("function" == typeof r) return r;
                let a = e[n];
                return "function" == typeof a ? a : n => t(e, n)
            }
        },
        22660: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return E
                }
            });
            var r = n(43564),
                a = n(26045);
            class i extends a.G {
                constructor({
                    data: e
                }) {
                    super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
                        metaMessages: ["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.", "", `Provided data: ${JSON.stringify(e)}`],
                        name: "EnsAvatarInvalidMetadataError"
                    })
                }
            }
            class s extends a.G {
                constructor({
                    reason: e
                }) {
                    super(`ENS NFT avatar URI is invalid. ${e}`, {
                        name: "EnsAvatarInvalidNftUriError"
                    })
                }
            }
            class o extends a.G {
                constructor({
                    uri: e
                }) {
                    super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`, {
                        name: "EnsAvatarUriResolutionError"
                    })
                }
            }
            class l extends a.G {
                constructor({
                    namespace: e
                }) {
                    super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`, {
                        name: "EnsAvatarUnsupportedNamespaceError"
                    })
                }
            }
            let c = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
                u = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
                d = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
                f = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
            async function p(e) {
                try {
                    let t = await fetch(e, {
                        method: "HEAD"
                    });
                    if (200 === t.status) {
                        let e = t.headers.get("content-type");
                        return e ? .startsWith("image/")
                    }
                    return !1
                } catch (t) {
                    if ("object" == typeof t && void 0 !== t.response || !globalThis.hasOwnProperty("Image")) return !1;
                    return new Promise(t => {
                        let n = new Image;
                        n.onload = () => {
                            t(!0)
                        }, n.onerror = () => {
                            t(!1)
                        }, n.src = e
                    })
                }
            }

            function m(e, t) {
                return e ? e.endsWith("/") ? e.slice(0, -1) : e : t
            }

            function b({
                uri: e,
                gatewayUrls: t
            }) {
                let n = d.test(e);
                if (n) return {
                    uri: e,
                    isOnChain: !0,
                    isEncoded: n
                };
                let r = m(t ? .ipfs, "https://ipfs.io"),
                    a = m(t ? .arweave, "https://arweave.net"),
                    i = e.match(c),
                    {
                        protocol: s,
                        subpath: l,
                        target: p,
                        subtarget: b = ""
                    } = i ? .groups || {},
                    y = "ipns:/" === s || "ipns/" === l,
                    h = "ipfs:/" === s || "ipfs/" === l || u.test(e);
                if (e.startsWith("http") && !y && !h) {
                    let n = e;
                    return t ? .arweave && (n = e.replace(/https:\/\/arweave.net/g, t ? .arweave)), {
                        uri: n,
                        isOnChain: !1,
                        isEncoded: !1
                    }
                }
                if ((y || h) && p) return {
                    uri: `${r}/${y?"ipns":"ipfs"}/${p}${b}`,
                    isOnChain: !1,
                    isEncoded: !1
                };
                if ("ar:/" === s && p) return {
                    uri: `${a}/${p}${b||""}`,
                    isOnChain: !1,
                    isEncoded: !1
                };
                let g = e.replace(f, "");
                if (g.startsWith("<svg") && (g = `data:image/svg+xml;base64,${btoa(g)}`), g.startsWith("data:") || g.startsWith("{")) return {
                    uri: g,
                    isOnChain: !0,
                    isEncoded: !1
                };
                throw new o({
                    uri: e
                })
            }

            function y(e) {
                if ("object" != typeof e || !("image" in e) && !("image_url" in e) && !("image_data" in e)) throw new i({
                    data: e
                });
                return e.image || e.image_url || e.image_data
            }
            async function h({
                gatewayUrls: e,
                uri: t
            }) {
                try {
                    let n = await fetch(t).then(e => e.json()),
                        r = await g({
                            gatewayUrls: e,
                            uri: y(n)
                        });
                    return r
                } catch {
                    throw new o({
                        uri: t
                    })
                }
            }
            async function g({
                gatewayUrls: e,
                uri: t
            }) {
                let {
                    uri: n,
                    isOnChain: r
                } = b({
                    uri: t,
                    gatewayUrls: e
                });
                if (r) return n;
                let a = await p(n);
                if (a) return n;
                throw new o({
                    uri: t
                })
            }
            async function w(e, {
                nft: t
            }) {
                if ("erc721" === t.namespace) return (0, r.L)(e, {
                    address: t.contractAddress,
                    abi: [{
                        name: "tokenURI",
                        type: "function",
                        stateMutability: "view",
                        inputs: [{
                            name: "tokenId",
                            type: "uint256"
                        }],
                        outputs: [{
                            name: "",
                            type: "string"
                        }]
                    }],
                    functionName: "tokenURI",
                    args: [BigInt(t.tokenID)]
                });
                if ("erc1155" === t.namespace) return (0, r.L)(e, {
                    address: t.contractAddress,
                    abi: [{
                        name: "uri",
                        type: "function",
                        stateMutability: "view",
                        inputs: [{
                            name: "_id",
                            type: "uint256"
                        }],
                        outputs: [{
                            name: "",
                            type: "string"
                        }]
                    }],
                    functionName: "uri",
                    args: [BigInt(t.tokenID)]
                });
                throw new l({
                    namespace: t.namespace
                })
            }
            async function v(e, {
                gatewayUrls: t,
                record: n
            }) {
                return /eip155:/i.test(n) ? k(e, {
                    gatewayUrls: t,
                    record: n
                }) : g({
                    uri: n,
                    gatewayUrls: t
                })
            }
            async function k(e, {
                gatewayUrls: t,
                record: n
            }) {
                let r = function(e) {
                        let t = e;
                        t.startsWith("did:nft:") && (t = t.replace("did:nft:", "").replace(/_/g, "/"));
                        let [n, r, a] = t.split("/"), [i, o] = n.split(":"), [l, c] = r.split(":");
                        if (!i || "eip155" !== i.toLowerCase()) throw new s({
                            reason: "Only EIP-155 supported"
                        });
                        if (!o) throw new s({
                            reason: "Chain ID not found"
                        });
                        if (!c) throw new s({
                            reason: "Contract address not found"
                        });
                        if (!a) throw new s({
                            reason: "Token ID not found"
                        });
                        if (!l) throw new s({
                            reason: "ERC namespace not found"
                        });
                        return {
                            chainID: Number.parseInt(o),
                            namespace: l.toLowerCase(),
                            contractAddress: c,
                            tokenID: a
                        }
                    }(n),
                    a = await w(e, {
                        nft: r
                    }),
                    {
                        uri: i,
                        isOnChain: o,
                        isEncoded: l
                    } = b({
                        uri: a,
                        gatewayUrls: t
                    });
                if (o && (i.includes("data:application/json;base64,") || i.startsWith("{"))) {
                    let e = l ? atob(i.replace("data:application/json;base64,", "")) : i,
                        n = JSON.parse(e);
                    return g({
                        uri: y(n),
                        gatewayUrls: t
                    })
                }
                let c = r.tokenID;
                return "erc1155" === r.namespace && (c = c.replace("0x", "").padStart(64, "0")), h({
                    gatewayUrls: t,
                    uri: i.replace(/(?:0x)?{id}/, c)
                })
            }
            var x = n(23346),
                N = n(10363);
            async function E(e, {
                blockNumber: t,
                blockTag: n,
                assetGatewayUrls: r,
                name: a,
                gatewayUrls: i,
                strict: s,
                universalResolverAddress: o
            }) {
                let l = await (0, x.s)(e, N.g, "getEnsText")({
                    blockNumber: t,
                    blockTag: n,
                    key: "avatar",
                    name: a,
                    universalResolverAddress: o,
                    gatewayUrls: i,
                    strict: s
                });
                if (!l) return null;
                try {
                    return await v(e, {
                        record: l,
                        gatewayUrls: r
                    })
                } catch {
                    return null
                }
            }
        },
        11972: function(e, t, n) {
            n.d(t, {
                w: function() {
                    return u
                }
            });
            var r = n(77131),
                a = n(15025),
                i = n(82646),
                s = n(48135),
                o = n(14633),
                l = n(23346),
                c = n(43564);
            async function u(e, {
                address: t,
                blockNumber: n,
                blockTag: u,
                gatewayUrls: d,
                strict: f,
                universalResolverAddress: p
            }) {
                let m = p;
                if (!m) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    m = (0, a.L)({
                        blockNumber: n,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                let b = `${t.toLowerCase().substring(2)}.addr.reverse`;
                try {
                    let a = {
                            address: m,
                            abi: r.du,
                            functionName: "reverse",
                            args: [(0, i.NC)((0, o.T)(b))],
                            blockNumber: n,
                            blockTag: u
                        },
                        s = (0, l.s)(e, c.L, "readContract"),
                        [f, p] = d ? await s({ ...a,
                            args: [...a.args, d]
                        }) : await s(a);
                    if (t.toLowerCase() !== p.toLowerCase()) return null;
                    return f
                } catch (e) {
                    if (f) throw e;
                    if ((0, s.c)(e, "reverse")) return null;
                    throw e
                }
            }
        },
        10363: function(e, t, n) {
            n.d(t, {
                g: function() {
                    return p
                }
            });
            var r = n(77131),
                a = n(66597),
                i = n(89979),
                s = n(15025),
                o = n(82646),
                l = n(48135),
                c = n(24803),
                u = n(14633),
                d = n(23346),
                f = n(43564);
            async function p(e, {
                blockNumber: t,
                blockTag: n,
                name: p,
                key: m,
                gatewayUrls: b,
                strict: y,
                universalResolverAddress: h
            }) {
                let g = h;
                if (!g) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    g = (0, s.L)({
                        blockNumber: t,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                try {
                    let s = {
                            address: g,
                            abi: r.k3,
                            functionName: "resolve",
                            args: [(0, o.NC)((0, u.T)(p)), (0, i.R)({
                                abi: r.nZ,
                                functionName: "text",
                                args: [(0, c.V)(p), m]
                            })],
                            blockNumber: t,
                            blockTag: n
                        },
                        l = (0, d.s)(e, f.L, "readContract"),
                        y = b ? await l({ ...s,
                            args: [...s.args, b]
                        }) : await l(s);
                    if ("0x" === y[0]) return null;
                    let h = (0, a.k)({
                        abi: r.nZ,
                        functionName: "text",
                        data: y[0]
                    });
                    return "" === h ? null : h
                } catch (e) {
                    if (y) throw e;
                    if ((0, l.c)(e, "resolve")) return null;
                    throw e
                }
            }
        },
        91845: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return ee
                }
            });
            var r = n(2209);
            let a = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/,
                i = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/,
                s = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/,
                o = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/,
                l = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/,
                c = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/,
                u = /^receive\(\) external payable$/,
                d = new Set(["indexed"]),
                f = new Set(["calldata", "memory", "storage"]);
            class p extends Error {
                constructor(e, t = {}) {
                    let n = t.cause instanceof p ? t.cause.details : t.cause ? .message ? t.cause.message : t.details,
                        r = t.cause instanceof p && t.cause.docsPath || t.docsPath,
                        a = [e || "An error occurred.", "", ...t.metaMessages ? [...t.metaMessages, ""] : [], ...r ? [`Docs: https://abitype.dev${r}`] : [], ...n ? [`Details: ${n}`] : [], "Version: abitype@1.0.6"].join("\n");
                    super(a), Object.defineProperty(this, "details", {
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
                        value: "AbiTypeError"
                    }), t.cause && (this.cause = t.cause), this.details = n, this.docsPath = r, this.metaMessages = t.metaMessages, this.shortMessage = e
                }
            }
            class m extends p {
                constructor({
                    type: e
                }) {
                    super("Unknown type.", {
                        metaMessages: [`Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnknownTypeError"
                    })
                }
            }
            class b extends p {
                constructor({
                    type: e
                }) {
                    super("Unknown type.", {
                        metaMessages: [`Type "${e}" is not a valid ABI type.`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnknownSolidityTypeError"
                    })
                }
            }
            class y extends p {
                constructor({
                    param: e
                }) {
                    super("Invalid ABI parameter.", {
                        details: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidParameterError"
                    })
                }
            }
            class h extends p {
                constructor({
                    param: e,
                    name: t
                }) {
                    super("Invalid ABI parameter.", {
                        details: e,
                        metaMessages: [`"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SolidityProtectedKeywordError"
                    })
                }
            }
            class g extends p {
                constructor({
                    param: e,
                    type: t,
                    modifier: n
                }) {
                    super("Invalid ABI parameter.", {
                        details: e,
                        metaMessages: [`Modifier "${n}" not allowed${t?` in "${t}" type`:""}.`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidModifierError"
                    })
                }
            }
            class w extends p {
                constructor({
                    param: e,
                    type: t,
                    modifier: n
                }) {
                    super("Invalid ABI parameter.", {
                        details: e,
                        metaMessages: [`Modifier "${n}" not allowed${t?` in "${t}" type`:""}.`, `Data location can only be specified for array, struct, or mapping types, but "${n}" was given.`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidFunctionModifierError"
                    })
                }
            }
            class v extends p {
                constructor({
                    abiParameter: e
                }) {
                    super("Invalid ABI parameter.", {
                        details: JSON.stringify(e, null, 2),
                        metaMessages: ["ABI parameter type is invalid."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidAbiTypeParameterError"
                    })
                }
            }
            class k extends p {
                constructor({
                    signature: e,
                    type: t
                }) {
                    super(`Invalid ${t} signature.`, {
                        details: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidSignatureError"
                    })
                }
            }
            class x extends p {
                constructor({
                    signature: e
                }) {
                    super("Unknown signature.", {
                        details: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnknownSignatureError"
                    })
                }
            }
            class N extends p {
                constructor({
                    signature: e
                }) {
                    super("Invalid struct signature.", {
                        details: e,
                        metaMessages: ["No properties exist."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidStructSignatureError"
                    })
                }
            }
            class E extends p {
                constructor({
                    type: e
                }) {
                    super("Circular reference detected.", {
                        metaMessages: [`Struct "${e}" is a circular reference.`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "CircularReferenceError"
                    })
                }
            }
            class C extends p {
                constructor({
                    current: e,
                    depth: t
                }) {
                    super("Unbalanced parentheses.", {
                        metaMessages: [`"${e.trim()}" has too many ${t>0?"opening":"closing"} parentheses.`],
                        details: `Depth "${t}"`
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidParenthesisError"
                    })
                }
            }
            let I = new Map([
                    ["address", {
                        type: "address"
                    }],
                    ["bool", {
                        type: "bool"
                    }],
                    ["bytes", {
                        type: "bytes"
                    }],
                    ["bytes32", {
                        type: "bytes32"
                    }],
                    ["int", {
                        type: "int256"
                    }],
                    ["int256", {
                        type: "int256"
                    }],
                    ["string", {
                        type: "string"
                    }],
                    ["uint", {
                        type: "uint256"
                    }],
                    ["uint8", {
                        type: "uint8"
                    }],
                    ["uint16", {
                        type: "uint16"
                    }],
                    ["uint24", {
                        type: "uint24"
                    }],
                    ["uint32", {
                        type: "uint32"
                    }],
                    ["uint64", {
                        type: "uint64"
                    }],
                    ["uint96", {
                        type: "uint96"
                    }],
                    ["uint112", {
                        type: "uint112"
                    }],
                    ["uint160", {
                        type: "uint160"
                    }],
                    ["uint192", {
                        type: "uint192"
                    }],
                    ["uint256", {
                        type: "uint256"
                    }],
                    ["address owner", {
                        type: "address",
                        name: "owner"
                    }],
                    ["address to", {
                        type: "address",
                        name: "to"
                    }],
                    ["bool approved", {
                        type: "bool",
                        name: "approved"
                    }],
                    ["bytes _data", {
                        type: "bytes",
                        name: "_data"
                    }],
                    ["bytes data", {
                        type: "bytes",
                        name: "data"
                    }],
                    ["bytes signature", {
                        type: "bytes",
                        name: "signature"
                    }],
                    ["bytes32 hash", {
                        type: "bytes32",
                        name: "hash"
                    }],
                    ["bytes32 r", {
                        type: "bytes32",
                        name: "r"
                    }],
                    ["bytes32 root", {
                        type: "bytes32",
                        name: "root"
                    }],
                    ["bytes32 s", {
                        type: "bytes32",
                        name: "s"
                    }],
                    ["string name", {
                        type: "string",
                        name: "name"
                    }],
                    ["string symbol", {
                        type: "string",
                        name: "symbol"
                    }],
                    ["string tokenURI", {
                        type: "string",
                        name: "tokenURI"
                    }],
                    ["uint tokenId", {
                        type: "uint256",
                        name: "tokenId"
                    }],
                    ["uint8 v", {
                        type: "uint8",
                        name: "v"
                    }],
                    ["uint256 balance", {
                        type: "uint256",
                        name: "balance"
                    }],
                    ["uint256 tokenId", {
                        type: "uint256",
                        name: "tokenId"
                    }],
                    ["uint256 value", {
                        type: "uint256",
                        name: "value"
                    }],
                    ["event:address indexed from", {
                        type: "address",
                        name: "from",
                        indexed: !0
                    }],
                    ["event:address indexed to", {
                        type: "address",
                        name: "to",
                        indexed: !0
                    }],
                    ["event:uint indexed tokenId", {
                        type: "uint256",
                        name: "tokenId",
                        indexed: !0
                    }],
                    ["event:uint256 indexed tokenId", {
                        type: "uint256",
                        name: "tokenId",
                        indexed: !0
                    }]
                ]),
                A = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
                $ = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
                B = /^u?int$/;

            function T(e, t) {
                var n, a, i;
                let s;
                let o = (n = t ? .type) ? `${n}:${e}` : e;
                if (I.has(o)) return I.get(o);
                let l = r.cN.test(e),
                    c = (0, r.Zw)(l ? $ : A, e);
                if (!c) throw new y({
                    param: e
                });
                if (c.name && ("address" === (a = c.name) || "bool" === a || "function" === a || "string" === a || "tuple" === a || r.eL.test(a) || r.lh.test(a) || M.test(a))) throw new h({
                    param: e,
                    name: c.name
                });
                let u = c.name ? {
                        name: c.name
                    } : {},
                    d = "indexed" === c.modifier ? {
                        indexed: !0
                    } : {},
                    p = t ? .structs ? ? {},
                    m = {};
                if (l) {
                    s = "tuple";
                    let e = P(c.type),
                        t = [],
                        n = e.length;
                    for (let r = 0; r < n; r++) t.push(T(e[r], {
                        structs: p
                    }));
                    m = {
                        components: t
                    }
                } else if (c.type in p) s = "tuple", m = {
                    components: p[c.type]
                };
                else if (B.test(c.type)) s = `${c.type}256`;
                else if (s = c.type, t ? .type !== "struct" && !R(s)) throw new b({
                    type: s
                });
                if (c.modifier) {
                    if (!t ? .modifiers ? .has ? .(c.modifier)) throw new g({
                        param: e,
                        type: t ? .type,
                        modifier: c.modifier
                    });
                    if (f.has(c.modifier) && (i = s, !c.array && "bytes" !== i && "string" !== i && "tuple" !== i)) throw new w({
                        param: e,
                        type: t ? .type,
                        modifier: c.modifier
                    })
                }
                let v = {
                    type: `${s}${c.array??""}`,
                    ...u,
                    ...d,
                    ...m
                };
                return I.set(o, v), v
            }

            function P(e, t = [], n = "", r = 0) {
                let a = e.trim().length;
                for (let i = 0; i < a; i++) {
                    let a = e[i],
                        s = e.slice(i + 1);
                    switch (a) {
                        case ",":
                            return 0 === r ? P(s, [...t, n.trim()]) : P(s, t, `${n}${a}`, r);
                        case "(":
                            return P(s, t, `${n}${a}`, r + 1);
                        case ")":
                            return P(s, t, `${n}${a}`, r - 1);
                        default:
                            return P(s, t, `${n}${a}`, r)
                    }
                }
                if ("" === n) return t;
                if (0 !== r) throw new C({
                    current: n,
                    depth: r
                });
                return t.push(n.trim()), t
            }

            function R(e) {
                return "address" === e || "bool" === e || "function" === e || "string" === e || r.eL.test(e) || r.lh.test(e)
            }
            let M = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/,
                S = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;

            function F(e) {
                let t = function(e) {
                        let t = {},
                            n = e.length;
                        for (let a = 0; a < n; a++) {
                            let n = e[a];
                            if (!o.test(n)) continue;
                            let i = (0, r.Zw)(o, n);
                            if (!i) throw new k({
                                signature: n,
                                type: "struct"
                            });
                            let s = i.properties.split(";"),
                                l = [],
                                c = s.length;
                            for (let e = 0; e < c; e++) {
                                let t = s[e],
                                    n = t.trim();
                                if (!n) continue;
                                let r = T(n, {
                                    type: "struct"
                                });
                                l.push(r)
                            }
                            if (!l.length) throw new N({
                                signature: n
                            });
                            t[i.name] = l
                        }
                        let a = {},
                            i = Object.entries(t),
                            s = i.length;
                        for (let e = 0; e < s; e++) {
                            let [n, s] = i[e];
                            a[n] = function e(t, n, a = new Set) {
                                let i = [],
                                    s = t.length;
                                for (let o = 0; o < s; o++) {
                                    let s = t[o],
                                        l = r.cN.test(s.type);
                                    if (l) i.push(s);
                                    else {
                                        let t = (0, r.Zw)(S, s.type);
                                        if (!t ? .type) throw new v({
                                            abiParameter: s
                                        });
                                        let {
                                            array: o,
                                            type: l
                                        } = t;
                                        if (l in n) {
                                            if (a.has(l)) throw new E({
                                                type: l
                                            });
                                            i.push({ ...s,
                                                type: `tuple${o??""}`,
                                                components: e(n[l] ? ? [], n, new Set([...a, l]))
                                            })
                                        } else if (R(l)) i.push(s);
                                        else throw new m({
                                            type: l
                                        })
                                    }
                                }
                                return i
                            }(s, t)
                        }
                        return a
                    }(e),
                    n = [],
                    p = e.length;
                for (let m = 0; m < p; m++) {
                    let p = e[m];
                    o.test(p) || n.push(function(e, t = {}) {
                        if (s.test(e)) {
                            let n = (0, r.Zw)(s, e);
                            if (!n) throw new k({
                                signature: e,
                                type: "function"
                            });
                            let a = P(n.parameters),
                                i = [],
                                o = a.length;
                            for (let e = 0; e < o; e++) i.push(T(a[e], {
                                modifiers: f,
                                structs: t,
                                type: "function"
                            }));
                            let l = [];
                            if (n.returns) {
                                let e = P(n.returns),
                                    r = e.length;
                                for (let n = 0; n < r; n++) l.push(T(e[n], {
                                    modifiers: f,
                                    structs: t,
                                    type: "function"
                                }))
                            }
                            return {
                                name: n.name,
                                type: "function",
                                stateMutability: n.stateMutability ? ? "nonpayable",
                                inputs: i,
                                outputs: l
                            }
                        }
                        if (i.test(e)) {
                            let n = (0, r.Zw)(i, e);
                            if (!n) throw new k({
                                signature: e,
                                type: "event"
                            });
                            let a = P(n.parameters),
                                s = [],
                                o = a.length;
                            for (let e = 0; e < o; e++) s.push(T(a[e], {
                                modifiers: d,
                                structs: t,
                                type: "event"
                            }));
                            return {
                                name: n.name,
                                type: "event",
                                inputs: s
                            }
                        }
                        if (a.test(e)) {
                            let n = (0, r.Zw)(a, e);
                            if (!n) throw new k({
                                signature: e,
                                type: "error"
                            });
                            let i = P(n.parameters),
                                s = [],
                                o = i.length;
                            for (let e = 0; e < o; e++) s.push(T(i[e], {
                                structs: t,
                                type: "error"
                            }));
                            return {
                                name: n.name,
                                type: "error",
                                inputs: s
                            }
                        }
                        if (l.test(e)) {
                            let n = (0, r.Zw)(l, e);
                            if (!n) throw new k({
                                signature: e,
                                type: "constructor"
                            });
                            let a = P(n.parameters),
                                i = [],
                                s = a.length;
                            for (let e = 0; e < s; e++) i.push(T(a[e], {
                                structs: t,
                                type: "constructor"
                            }));
                            return {
                                type: "constructor",
                                stateMutability: n.stateMutability ? ? "nonpayable",
                                inputs: i
                            }
                        }
                        if (c.test(e)) return {
                            type: "fallback"
                        };
                        if (u.test(e)) return {
                            type: "receive",
                            stateMutability: "payable"
                        };
                        throw new x({
                            signature: e
                        })
                    }(p, t))
                }
                return n
            }
            var _ = n(77218),
                q = n(77131),
                O = n(87362),
                L = n(26045),
                U = n(97725),
                D = n(58960),
                j = n(66597),
                G = n(65891),
                Z = n(89979),
                z = n(15025),
                H = n(82646),
                W = n(31325),
                V = n(17743),
                J = n(30947),
                Q = n(76517),
                X = n(50442),
                K = n(63014),
                Y = n(10129);
            async function ee(e, t) {
                let {
                    account: r = e.account,
                    batch: a = !!e.batch ? .multicall,
                    blockNumber: i,
                    blockTag: s = "latest",
                    accessList: o,
                    blobs: l,
                    code: c,
                    data: u,
                    factory: d,
                    factoryData: f,
                    gas: p,
                    gasPrice: m,
                    maxFeePerBlobGas: b,
                    maxFeePerGas: y,
                    maxPriorityFeePerGas: h,
                    nonce: g,
                    to: w,
                    value: v,
                    stateOverride: k,
                    ...x
                } = t, N = r ? (0, _.T)(r) : void 0;
                if (c && (d || f)) throw new L.G("Cannot provide both `code` & `factory`/`factoryData` as parameters.");
                if (c && w) throw new L.G("Cannot provide both `code` & `to` as parameters.");
                let E = c && u,
                    C = d && f && w && u,
                    I = E || C,
                    A = E ? function(e) {
                        let {
                            code: t,
                            data: n
                        } = e;
                        return (0, G.w)({
                            abi: F(["constructor(bytes, bytes)"]),
                            bytecode: O.NO,
                            args: [t, n]
                        })
                    }({
                        code: c,
                        data: u
                    }) : C ? function(e) {
                        let {
                            data: t,
                            factory: n,
                            factoryData: r,
                            to: a
                        } = e;
                        return (0, G.w)({
                            abi: F(["constructor(address, bytes, address, bytes)"]),
                            bytecode: O.pG,
                            args: [a, t, n, r]
                        })
                    }({
                        data: u,
                        factory: d,
                        factoryData: f,
                        to: w
                    }) : u;
                try {
                    (0, Y.F)(t);
                    let n = i ? (0, H.eC)(i) : void 0,
                        r = n || s,
                        c = (0, K.mF)(k),
                        u = e.chain ? .formatters ? .transactionRequest ? .format,
                        d = u || Q.tG,
                        f = d({ ...(0, J.K)(x, {
                                format: u
                            }),
                            from: N ? .address,
                            accessList: o,
                            blobs: l,
                            data: A,
                            gas: p,
                            gasPrice: m,
                            maxFeePerBlobGas: b,
                            maxFeePerGas: y,
                            maxPriorityFeePerGas: h,
                            nonce: g,
                            to: I ? void 0 : w,
                            value: v
                        });
                    if (a && function({
                            request: e
                        }) {
                            let {
                                data: t,
                                to: n,
                                ...r
                            } = e;
                            return !(!t || t.startsWith("0x82ad56cb")) && !!n && !(Object.values(r).filter(e => void 0 !== e).length > 0)
                        }({
                            request: f
                        }) && !c) try {
                        return await et(e, { ...f,
                            blockNumber: i,
                            blockTag: s
                        })
                    } catch (e) {
                        if (!(e instanceof U.pZ) && !(e instanceof U.mm)) throw e
                    }
                    let E = await e.request({
                        method: "eth_call",
                        params: c ? [f, r, c] : [f, r]
                    });
                    if ("0x" === E) return {
                        data: void 0
                    };
                    return {
                        data: E
                    }
                } catch (s) {
                    let r = function(e) {
                            if (!(e instanceof L.G)) return;
                            let t = e.walk();
                            return "object" == typeof t ? .data ? t.data ? .data : t.data
                        }(s),
                        {
                            offchainLookup: a,
                            offchainLookupSignature: i
                        } = await n.e(6664).then(n.bind(n, 46664));
                    if (!1 !== e.ccipRead && r ? .slice(0, 10) === i && w) return {
                        data: await a(e, {
                            data: r,
                            to: w
                        })
                    };
                    if (I && r ? .slice(0, 10) === "0x101bb98d") throw new D.Mo({
                        factory: d
                    });
                    throw function(e, {
                        docsPath: t,
                        ...n
                    }) {
                        let r = (() => {
                            let t = (0, V.k)(e, n);
                            return t instanceof W.cj ? e : t
                        })();
                        return new D.cg(r, {
                            docsPath: t,
                            ...n
                        })
                    }(s, { ...t,
                        account: N,
                        chain: e.chain
                    })
                }
            }
            async function et(e, t) {
                let {
                    batchSize: n = 1024,
                    wait: r = 0
                } = "object" == typeof e.batch ? .multicall ? e.batch.multicall : {}, {
                    blockNumber: a,
                    blockTag: i = "latest",
                    data: s,
                    multicallAddress: o,
                    to: l
                } = t, c = o;
                if (!c) {
                    if (!e.chain) throw new U.pZ;
                    c = (0, z.L)({
                        blockNumber: a,
                        chain: e.chain,
                        contract: "multicall3"
                    })
                }
                let u = a ? (0, H.eC)(a) : void 0,
                    d = u || i,
                    {
                        schedule: f
                    } = (0, X.S)({
                        id: `${e.uid}.${d}`,
                        wait: r,
                        shouldSplitBatch(e) {
                            let t = e.reduce((e, {
                                data: t
                            }) => e + (t.length - 2), 0);
                            return t > 2 * n
                        },
                        fn: async t => {
                            let n = t.map(e => ({
                                    allowFailure: !0,
                                    callData: e.data,
                                    target: e.to
                                })),
                                r = (0, Z.R)({
                                    abi: q.F8,
                                    args: [n],
                                    functionName: "aggregate3"
                                }),
                                a = await e.request({
                                    method: "eth_call",
                                    params: [{
                                        data: r,
                                        to: c
                                    }, d]
                                });
                            return (0, j.k)({
                                abi: q.F8,
                                args: [n],
                                functionName: "aggregate3",
                                data: a || "0x"
                            })
                        }
                    }),
                    [{
                        returnData: p,
                        success: m
                    }] = await f({
                        data: s,
                        to: l
                    });
                if (!m) throw new D.VQ({
                    data: p
                });
                return "0x" === p ? {
                    data: void 0
                } : {
                    data: p
                }
            }
        },
        32809: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return p
                }
            });
            var r = n(77131),
                a = n(7158),
                i = n(26045),
                s = n(58960),
                o = n(66597),
                l = n(89979),
                c = n(15025),
                u = n(10053),
                d = n(23346),
                f = n(43564);
            async function p(e, t) {
                let {
                    allowFailure: n = !0,
                    batchSize: p,
                    blockNumber: m,
                    blockTag: b,
                    multicallAddress: y,
                    stateOverride: h
                } = t, g = t.contracts, w = p ? ? ("object" == typeof e.batch ? .multicall && e.batch.multicall.batchSize || 1024), v = y;
                if (!v) {
                    if (!e.chain) throw Error("client chain not configured. multicallAddress is required.");
                    v = (0, c.L)({
                        blockNumber: m,
                        chain: e.chain,
                        contract: "multicall3"
                    })
                }
                let k = [
                        []
                    ],
                    x = 0,
                    N = 0;
                for (let e = 0; e < g.length; e++) {
                    let {
                        abi: t,
                        address: r,
                        args: a,
                        functionName: i
                    } = g[e];
                    try {
                        let e = (0, l.R)({
                            abi: t,
                            args: a,
                            functionName: i
                        });
                        N += (e.length - 2) / 2, w > 0 && N > w && k[x].length > 0 && (x++, N = (e.length - 2) / 2, k[x] = []), k[x] = [...k[x], {
                            allowFailure: !0,
                            callData: e,
                            target: r
                        }]
                    } catch (s) {
                        let e = (0, u.S)(s, {
                            abi: t,
                            address: r,
                            args: a,
                            docsPath: "/docs/contract/multicall",
                            functionName: i
                        });
                        if (!n) throw e;
                        k[x] = [...k[x], {
                            allowFailure: !0,
                            callData: "0x",
                            target: r
                        }]
                    }
                }
                let E = await Promise.allSettled(k.map(t => (0, d.s)(e, f.L, "readContract")({
                        abi: r.F8,
                        address: v,
                        args: [t],
                        blockNumber: m,
                        blockTag: b,
                        functionName: "aggregate3",
                        stateOverride: h
                    }))),
                    C = [];
                for (let e = 0; e < E.length; e++) {
                    let t = E[e];
                    if ("rejected" === t.status) {
                        if (!n) throw t.reason;
                        for (let n = 0; n < k[e].length; n++) C.push({
                            status: "failure",
                            error: t.reason,
                            result: void 0
                        });
                        continue
                    }
                    let r = t.value;
                    for (let t = 0; t < r.length; t++) {
                        let {
                            returnData: i,
                            success: l
                        } = r[t], {
                            callData: c
                        } = k[e][t], {
                            abi: d,
                            address: f,
                            functionName: p,
                            args: m
                        } = g[C.length];
                        try {
                            if ("0x" === c) throw new a.wb;
                            if (!l) throw new s.VQ({
                                data: i
                            });
                            let e = (0, o.k)({
                                abi: d,
                                args: m,
                                data: i,
                                functionName: p
                            });
                            C.push(n ? {
                                result: e,
                                status: "success"
                            } : e)
                        } catch (t) {
                            let e = (0, u.S)(t, {
                                abi: d,
                                address: f,
                                args: m,
                                docsPath: "/docs/contract/multicall",
                                functionName: p
                            });
                            if (!n) throw e;
                            C.push({
                                error: e,
                                result: void 0,
                                status: "failure"
                            })
                        }
                    }
                }
                if (C.length !== g.length) throw new i.G("multicall results mismatch");
                return C
            }
        },
        43564: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return l
                }
            });
            var r = n(66597),
                a = n(89979),
                i = n(10053),
                s = n(23346),
                o = n(91845);
            async function l(e, t) {
                let {
                    abi: n,
                    address: l,
                    args: c,
                    functionName: u,
                    ...d
                } = t, f = (0, a.R)({
                    abi: n,
                    args: c,
                    functionName: u
                });
                try {
                    let {
                        data: t
                    } = await (0, s.s)(e, o.R, "call")({ ...d,
                        data: f,
                        to: l
                    });
                    return (0, r.k)({
                        abi: n,
                        args: c,
                        functionName: u,
                        data: t || "0x"
                    })
                } catch (e) {
                    throw (0, i.S)(e, {
                        abi: n,
                        address: l,
                        args: c,
                        docsPath: "/docs/contract/readContract",
                        functionName: u
                    })
                }
            }
        },
        61232: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return a
                }
            });
            var r = n(91452);
            let a = (0, r.a)({
                id: 1,
                name: "Ethereum",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://cloudflare-eth.com"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Etherscan",
                        url: "https://etherscan.io",
                        apiUrl: "https://api.etherscan.io/api"
                    }
                },
                contracts: {
                    ensRegistry: {
                        address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                    },
                    ensUniversalResolver: {
                        address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
                        blockCreated: 19258213
                    },
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 14353601
                    }
                }
            })
        },
        51414: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return a
                }
            });
            var r = n(91452);
            let a = (0, r.a)({
                id: 11155111,
                name: "Sepolia",
                nativeCurrency: {
                    name: "Sepolia Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://rpc2.sepolia.org"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Etherscan",
                        url: "https://sepolia.etherscan.io",
                        apiUrl: "https://api-sepolia.etherscan.io/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 751532
                    },
                    ensRegistry: {
                        address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                    },
                    ensUniversalResolver: {
                        address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
                        blockCreated: 5317080
                    }
                },
                testnet: !0
            })
        },
        31546: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return i
                }
            });
            var r = n(71368),
                a = n(48534);

            function i(e) {
                let {
                    key: t = "public",
                    name: n = "Public Client"
                } = e, i = (0, r.e)({ ...e,
                    key: t,
                    name: n,
                    type: "publicClient"
                });
                return i.extend(a.I)
            }
        },
        48534: function(e, t, n) {
            n.d(t, {
                I: function() {
                    return tt
                }
            });
            var r = n(77131),
                a = n(66597),
                i = n(89979),
                s = n(15025),
                o = n(57536),
                l = n(82646),
                c = n(48135),
                u = n(24803),
                d = n(14633),
                f = n(23346),
                p = n(43564);
            async function m(e, {
                blockNumber: t,
                blockTag: n,
                coinType: m,
                name: b,
                gatewayUrls: y,
                strict: h,
                universalResolverAddress: g
            }) {
                let w = g;
                if (!w) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    w = (0, s.L)({
                        blockNumber: t,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                try {
                    let s = (0, i.R)({
                            abi: r.X$,
                            functionName: "addr",
                            ...null != m ? {
                                args: [(0, u.V)(b), BigInt(m)]
                            } : {
                                args: [(0, u.V)(b)]
                            }
                        }),
                        c = {
                            address: w,
                            abi: r.k3,
                            functionName: "resolve",
                            args: [(0, l.NC)((0, d.T)(b)), s],
                            blockNumber: t,
                            blockTag: n
                        },
                        h = (0, f.s)(e, p.L, "readContract"),
                        g = y ? await h({ ...c,
                            args: [...c.args, y]
                        }) : await h(c);
                    if ("0x" === g[0]) return null;
                    let v = (0, a.k)({
                        abi: r.X$,
                        args: null != m ? [(0, u.V)(b), BigInt(m)] : void 0,
                        functionName: "addr",
                        data: g[0]
                    });
                    if ("0x" === v || "0x00" === (0, o.f)(v)) return null;
                    return v
                } catch (e) {
                    if (h) throw e;
                    if ((0, c.c)(e, "resolve")) return null;
                    throw e
                }
            }
            var b = n(22660),
                y = n(11972);
            async function h(e, {
                blockNumber: t,
                blockTag: n,
                name: r,
                universalResolverAddress: a
            }) {
                let i = a;
                if (!i) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    i = (0, s.L)({
                        blockNumber: t,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                let [o] = await (0, f.s)(e, p.L, "readContract")({
                    address: i,
                    abi: [{
                        inputs: [{
                            type: "bytes"
                        }],
                        name: "findResolver",
                        outputs: [{
                            type: "address"
                        }, {
                            type: "bytes32"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }],
                    functionName: "findResolver",
                    args: [(0, l.NC)((0, d.T)(r))],
                    blockNumber: t,
                    blockTag: n
                });
                return o
            }
            var g = n(10363),
                w = n(91845);

            function v(e, {
                method: t
            }) {
                let n = {};
                return "fallback" === e.transport.type && e.transport.onResponse ? .(({
                    method: e,
                    response: r,
                    status: a,
                    transport: i
                }) => {
                    "success" === a && t === e && (n[r] = i.request)
                }), t => n[t] || e.request
            }
            async function k(e) {
                let t = v(e, {
                        method: "eth_newBlockFilter"
                    }),
                    n = await e.request({
                        method: "eth_newBlockFilter"
                    });
                return {
                    id: n,
                    request: t(n),
                    type: "block"
                }
            }
            var x = n(7158),
                N = n(26045);
            class E extends N.G {
                constructor(e) {
                    super(`Filter type "${e}" is not supported.`, {
                        name: "FilterTypeNotSupportedError"
                    })
                }
            }
            var C = n(89862),
                I = n(88653),
                A = n(62567),
                $ = n(68618),
                B = n(17445),
                T = n(61352);
            let P = "/docs/contract/encodeEventTopics";

            function R(e) {
                let {
                    abi: t,
                    eventName: n,
                    args: r
                } = e, a = t[0];
                if (n) {
                    let e = (0, T.mE)({
                        abi: t,
                        name: n
                    });
                    if (!e) throw new x.mv(n, {
                        docsPath: P
                    });
                    a = e
                }
                if ("event" !== a.type) throw new x.mv(void 0, {
                    docsPath: P
                });
                let i = (0, B.t)(a),
                    s = (0, A.n)(i),
                    o = [];
                if (r && "inputs" in a) {
                    let e = a.inputs ? .filter(e => "indexed" in e && e.indexed),
                        t = Array.isArray(r) ? r : Object.values(r).length > 0 ? e ? .map(e => r[e.name]) ? ? [] : [];
                    t.length > 0 && (o = e ? .map((e, n) => Array.isArray(t[n]) ? t[n].map((r, a) => M({
                        param: e,
                        value: t[n][a]
                    })) : t[n] ? M({
                        param: e,
                        value: t[n]
                    }) : null) ? ? [])
                }
                return [s, ...o]
            }

            function M({
                param: e,
                value: t
            }) {
                if ("string" === e.type || "bytes" === e.type) return (0, I.w)((0, C.O0)(t));
                if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/)) throw new E(e.type);
                return (0, $.E)([e], [t])
            }
            async function S(e, t) {
                let {
                    address: n,
                    abi: r,
                    args: a,
                    eventName: i,
                    fromBlock: s,
                    strict: o,
                    toBlock: c
                } = t, u = v(e, {
                    method: "eth_newFilter"
                }), d = i ? R({
                    abi: r,
                    args: a,
                    eventName: i
                }) : void 0, f = await e.request({
                    method: "eth_newFilter",
                    params: [{
                        address: n,
                        fromBlock: "bigint" == typeof s ? (0, l.eC)(s) : s,
                        toBlock: "bigint" == typeof c ? (0, l.eC)(c) : c,
                        topics: d
                    }]
                });
                return {
                    abi: r,
                    args: a,
                    eventName: i,
                    id: f,
                    request: u(f),
                    strict: !!o,
                    type: "event"
                }
            }
            async function F(e, {
                address: t,
                args: n,
                event: r,
                events: a,
                fromBlock: i,
                strict: s,
                toBlock: o
            } = {}) {
                let c = a ? ? (r ? [r] : void 0),
                    u = v(e, {
                        method: "eth_newFilter"
                    }),
                    d = [];
                if (c) {
                    let e = c.flatMap(e => R({
                        abi: [e],
                        eventName: e.name,
                        args: n
                    }));
                    d = [e], r && (d = d[0])
                }
                let f = await e.request({
                    method: "eth_newFilter",
                    params: [{
                        address: t,
                        fromBlock: "bigint" == typeof i ? (0, l.eC)(i) : i,
                        toBlock: "bigint" == typeof o ? (0, l.eC)(o) : o,
                        ...d.length ? {
                            topics: d
                        } : {}
                    }]
                });
                return {
                    abi: c,
                    args: n,
                    eventName: r ? r.name : void 0,
                    fromBlock: i,
                    id: f,
                    request: u(f),
                    strict: !!s,
                    toBlock: o,
                    type: "event"
                }
            }
            async function _(e) {
                let t = v(e, {
                        method: "eth_newPendingTransactionFilter"
                    }),
                    n = await e.request({
                        method: "eth_newPendingTransactionFilter"
                    });
                return {
                    id: n,
                    request: t(n),
                    type: "transaction"
                }
            }
            var q = n(77218),
                O = n(10053),
                L = n(78648);
            async function U(e, t) {
                let {
                    abi: n,
                    address: r,
                    args: a,
                    functionName: s,
                    ...o
                } = t, l = (0, i.R)({
                    abi: n,
                    args: a,
                    functionName: s
                });
                try {
                    let t = await (0, f.s)(e, L.Q, "estimateGas")({
                        data: l,
                        to: r,
                        ...o
                    });
                    return t
                } catch (t) {
                    let e = o.account ? (0, q.T)(o.account) : void 0;
                    throw (0, O.S)(t, {
                        abi: n,
                        address: r,
                        args: a,
                        docsPath: "/docs/contract/estimateContractGas",
                        functionName: s,
                        sender: e ? .address
                    })
                }
            }
            var D = n(12756),
                j = n(35725),
                G = n(55397);
            async function Z(e) {
                let t = await e.request({
                    method: "eth_blobBaseFee"
                });
                return BigInt(t)
            }
            var z = n(91319);
            let H = new Map,
                W = new Map;
            async function V(e, {
                cacheKey: t,
                cacheTime: n = Number.POSITIVE_INFINITY
            }) {
                let r = function(e) {
                        let t = (e, t) => ({
                                clear: () => t.delete(e),
                                get: () => t.get(e),
                                set: n => t.set(e, n)
                            }),
                            n = t(e, H),
                            r = t(e, W);
                        return {
                            clear: () => {
                                n.clear(), r.clear()
                            },
                            promise: n,
                            response: r
                        }
                    }(t),
                    a = r.response.get();
                if (a && n > 0) {
                    let e = new Date().getTime() - a.created.getTime();
                    if (e < n) return a.data
                }
                let i = r.promise.get();
                i || (i = e(), r.promise.set(i));
                try {
                    let e = await i;
                    return r.response.set({
                        created: new Date,
                        data: e
                    }), e
                } finally {
                    r.promise.clear()
                }
            }
            let J = e => `blockNumber.${e}`;
            async function Q(e, {
                cacheTime: t = e.cacheTime
            } = {}) {
                let n = await V(() => e.request({
                    method: "eth_blockNumber"
                }), {
                    cacheKey: J(e.uid),
                    cacheTime: t
                });
                return BigInt(n)
            }
            var X = n(90130);
            async function K(e, {
                blockHash: t,
                blockNumber: n,
                blockTag: r = "latest"
            } = {}) {
                let a;
                let i = void 0 !== n ? (0, l.eC)(n) : void 0;
                return a = t ? await e.request({
                    method: "eth_getBlockTransactionCountByHash",
                    params: [t]
                }, {
                    dedupe: !0
                }) : await e.request({
                    method: "eth_getBlockTransactionCountByNumber",
                    params: [i || r]
                }, {
                    dedupe: !!i
                }), (0, X.ly)(a)
            }
            var Y = n(93718);
            async function ee(e, {
                address: t,
                blockNumber: n,
                blockTag: r = "latest"
            }) {
                let a = void 0 !== n ? (0, l.eC)(n) : void 0,
                    i = await e.request({
                        method: "eth_getCode",
                        params: [t, a || r]
                    }, {
                        dedupe: !!a
                    });
                if ("0x" !== i) return i
            }
            var et = n(33741),
                en = n(8536),
                er = n(80825),
                ea = n(5494);
            let ei = "/docs/contract/decodeEventLog";

            function es(e) {
                let {
                    abi: t,
                    data: n,
                    strict: r,
                    topics: a
                } = e, i = r ? ? !0, [s, ...o] = a;
                if (!s) throw new x.FM({
                    docsPath: ei
                });
                let l = 1 === t.length ? t[0] : t.find(e => "event" === e.type && s === (0, A.n)((0, B.t)(e)));
                if (!(l && "name" in l) || "event" !== l.type) throw new x.lC(s, {
                    docsPath: ei
                });
                let {
                    name: c,
                    inputs: u
                } = l, d = u ? .some(e => !("name" in e && e.name)), f = d ? [] : {}, p = u.filter(e => "indexed" in e && e.indexed);
                for (let e = 0; e < p.length; e++) {
                    let t = p[e],
                        n = o[e];
                    if (!n) throw new x.Gy({
                        abiItem: l,
                        param: t
                    });
                    f[d ? e : t.name || e] = function({
                        param: e,
                        value: t
                    }) {
                        if ("string" === e.type || "bytes" === e.type || "tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/)) return t;
                        let n = (0, ea.r)([e], t) || [];
                        return n[0]
                    }({
                        param: t,
                        value: n
                    })
                }
                let m = u.filter(e => !("indexed" in e && e.indexed));
                if (m.length > 0) {
                    if (n && "0x" !== n) try {
                        let e = (0, ea.r)(m, n);
                        if (e) {
                            if (d) f = [...f, ...e];
                            else
                                for (let t = 0; t < m.length; t++) f[m[t].name] = e[t]
                        }
                    } catch (e) {
                        if (i) {
                            if (e instanceof x.xB || e instanceof er.lQ) throw new x.SM({
                                abiItem: l,
                                data: n,
                                params: m,
                                size: (0, en.d)(n)
                            });
                            throw e
                        }
                    } else if (i) throw new x.SM({
                        abiItem: l,
                        data: "0x",
                        params: m,
                        size: 0
                    })
                }
                return {
                    eventName: c,
                    args: Object.values(f).length > 0 ? f : void 0
                }
            }

            function eo(e) {
                let {
                    abi: t,
                    args: n,
                    logs: r,
                    strict: a = !0
                } = e, i = (() => {
                    if (e.eventName) return Array.isArray(e.eventName) ? e.eventName : [e.eventName]
                })();
                return r.map(e => {
                    try {
                        let r = t.find(t => "event" === t.type && e.topics[0] === (0, A.n)(t));
                        if (!r) return null;
                        let s = es({ ...e,
                            abi: [r],
                            strict: a
                        });
                        if (i && !i.includes(s.eventName) || ! function(e) {
                                let {
                                    args: t,
                                    inputs: n,
                                    matchArgs: r
                                } = e;
                                if (!r) return !0;
                                if (!t) return !1;

                                function a(e, t, n) {
                                    try {
                                        if ("address" === e.type) return (0, et.E)(t, n);
                                        if ("string" === e.type || "bytes" === e.type) return (0, I.w)((0, C.O0)(t)) === n;
                                        return t === n
                                    } catch {
                                        return !1
                                    }
                                }
                                return Array.isArray(t) && Array.isArray(r) ? r.every((e, r) => {
                                    if (null == e) return !0;
                                    let i = n[r];
                                    if (!i) return !1;
                                    let s = Array.isArray(e) ? e : [e];
                                    return s.some(e => a(i, e, t[r]))
                                }) : !("object" != typeof t || Array.isArray(t) || "object" != typeof r || Array.isArray(r)) && Object.entries(r).every(([e, r]) => {
                                    if (null == r) return !0;
                                    let i = n.find(t => t.name === e);
                                    if (!i) return !1;
                                    let s = Array.isArray(r) ? r : [r];
                                    return s.some(n => a(i, n, t[e]))
                                })
                            }({
                                args: s.args,
                                inputs: r.inputs,
                                matchArgs: n
                            })) return null;
                        return { ...s,
                            ...e
                        }
                    } catch (r) {
                        let t, n;
                        if (r instanceof x.lC) return null;
                        if (r instanceof x.SM || r instanceof x.Gy) {
                            if (a) return null;
                            t = r.abiItem.name, n = r.abiItem.inputs ? .some(e => !("name" in e && e.name))
                        }
                        return { ...e,
                            args: n ? [] : {},
                            eventName: t
                        }
                    }
                }).filter(Boolean)
            }

            function el(e, {
                args: t,
                eventName: n
            } = {}) {
                return { ...e,
                    blockHash: e.blockHash ? e.blockHash : null,
                    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                    logIndex: e.logIndex ? Number(e.logIndex) : null,
                    transactionHash: e.transactionHash ? e.transactionHash : null,
                    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
                    ...n ? {
                        args: t,
                        eventName: n
                    } : {}
                }
            }
            async function ec(e, {
                address: t,
                blockHash: n,
                fromBlock: r,
                toBlock: a,
                event: i,
                events: s,
                args: o,
                strict: c
            } = {}) {
                let u;
                let d = s ? ? (i ? [i] : void 0),
                    f = [];
                if (d) {
                    let e = d.flatMap(e => R({
                        abi: [e],
                        eventName: e.name,
                        args: s ? void 0 : o
                    }));
                    f = [e], i && (f = f[0])
                }
                u = n ? await e.request({
                    method: "eth_getLogs",
                    params: [{
                        address: t,
                        topics: f,
                        blockHash: n
                    }]
                }) : await e.request({
                    method: "eth_getLogs",
                    params: [{
                        address: t,
                        topics: f,
                        fromBlock: "bigint" == typeof r ? (0, l.eC)(r) : r,
                        toBlock: "bigint" == typeof a ? (0, l.eC)(a) : a
                    }]
                });
                let p = u.map(e => el(e));
                return d ? eo({
                    abi: d,
                    args: o,
                    logs: p,
                    strict: c ? ? !1
                }) : p
            }
            async function eu(e, t) {
                let {
                    abi: n,
                    address: r,
                    args: a,
                    blockHash: i,
                    eventName: s,
                    fromBlock: o,
                    toBlock: l,
                    strict: c
                } = t, u = s ? (0, T.mE)({
                    abi: n,
                    name: s
                }) : void 0, d = u ? void 0 : n.filter(e => "event" === e.type);
                return (0, f.s)(e, ec, "getLogs")({
                    address: r,
                    args: a,
                    blockHash: i,
                    event: u,
                    events: d,
                    fromBlock: o,
                    toBlock: l,
                    strict: c
                })
            }
            class ed extends N.G {
                constructor({
                    address: e
                }) {
                    super(`No EIP-712 domain found on contract "${e}".`, {
                        metaMessages: ["Ensure that:", `- The contract is deployed at the address "${e}".`, "- `eip712Domain()` function exists on the contract.", "- `eip712Domain()` function matches signature to ERC-5267 specification."],
                        name: "Eip712DomainNotFoundError"
                    })
                }
            }
            async function ef(e, t) {
                let {
                    address: n,
                    factory: r,
                    factoryData: a
                } = t;
                try {
                    let [t, i, s, o, l, c, u] = await (0, f.s)(e, p.L, "readContract")({
                        abi: ep,
                        address: n,
                        functionName: "eip712Domain",
                        factory: r,
                        factoryData: a
                    });
                    return {
                        domain: {
                            name: i,
                            version: s,
                            chainId: Number(o),
                            verifyingContract: l,
                            salt: c
                        },
                        extensions: u,
                        fields: t
                    }
                } catch (e) {
                    if ("ContractFunctionExecutionError" === e.name && "ContractFunctionZeroDataError" === e.cause.name) throw new ed({
                        address: n
                    });
                    throw e
                }
            }
            let ep = [{
                inputs: [],
                name: "eip712Domain",
                outputs: [{
                    name: "fields",
                    type: "bytes1"
                }, {
                    name: "name",
                    type: "string"
                }, {
                    name: "version",
                    type: "string"
                }, {
                    name: "chainId",
                    type: "uint256"
                }, {
                    name: "verifyingContract",
                    type: "address"
                }, {
                    name: "salt",
                    type: "bytes32"
                }, {
                    name: "extensions",
                    type: "uint256[]"
                }],
                stateMutability: "view",
                type: "function"
            }];
            async function em(e, {
                blockCount: t,
                blockNumber: n,
                blockTag: r = "latest",
                rewardPercentiles: a
            }) {
                let i = n ? (0, l.eC)(n) : void 0,
                    s = await e.request({
                        method: "eth_feeHistory",
                        params: [(0, l.eC)(t), i || r, a]
                    }, {
                        dedupe: !!i
                    });
                return {
                    baseFeePerGas: s.baseFeePerGas.map(e => BigInt(e)),
                    gasUsedRatio: s.gasUsedRatio,
                    oldestBlock: BigInt(s.oldestBlock),
                    reward: s.reward ? .map(e => e.map(e => BigInt(e)))
                }
            }
            async function eb(e, {
                filter: t
            }) {
                let n = "strict" in t && t.strict,
                    r = await t.request({
                        method: "eth_getFilterChanges",
                        params: [t.id]
                    });
                if ("string" == typeof r[0]) return r;
                let a = r.map(e => el(e));
                return "abi" in t && t.abi ? eo({
                    abi: t.abi,
                    logs: a,
                    strict: n
                }) : a
            }
            async function ey(e, {
                filter: t
            }) {
                let n = t.strict ? ? !1,
                    r = await t.request({
                        method: "eth_getFilterLogs",
                        params: [t.id]
                    }),
                    a = r.map(e => el(e));
                return t.abi ? eo({
                    abi: t.abi,
                    logs: a,
                    strict: n
                }) : a
            }
            var eh = n(89621);
            async function eg(e, {
                address: t,
                blockNumber: n,
                blockTag: r,
                storageKeys: a
            }) {
                let i = void 0 !== n ? (0, l.eC)(n) : void 0,
                    s = await e.request({
                        method: "eth_getProof",
                        params: [t, a, i || (r ? ? "latest")]
                    });
                return { ...s,
                    balance: s.balance ? BigInt(s.balance) : void 0,
                    nonce: s.nonce ? (0, X.ly)(s.nonce) : void 0,
                    storageProof: s.storageProof ? s.storageProof.map(e => ({ ...e,
                        value: BigInt(e.value)
                    })) : void 0
                }
            }
            async function ew(e, {
                address: t,
                blockNumber: n,
                blockTag: r = "latest",
                slot: a
            }) {
                let i = void 0 !== n ? (0, l.eC)(n) : void 0,
                    s = await e.request({
                        method: "eth_getStorageAt",
                        params: [t, a, i || r]
                    });
                return s
            }
            var ev = n(22334),
                ek = n(51356);
            async function ex(e, {
                blockHash: t,
                blockNumber: n,
                blockTag: r,
                hash: a,
                index: i
            }) {
                let s = r || "latest",
                    o = void 0 !== n ? (0, l.eC)(n) : void 0,
                    c = null;
                if (a ? c = await e.request({
                        method: "eth_getTransactionByHash",
                        params: [a]
                    }, {
                        dedupe: !0
                    }) : t ? c = await e.request({
                        method: "eth_getTransactionByBlockHashAndIndex",
                        params: [t, (0, l.eC)(i)]
                    }, {
                        dedupe: !0
                    }) : (o || s) && (c = await e.request({
                        method: "eth_getTransactionByBlockNumberAndIndex",
                        params: [o || s, (0, l.eC)(i)]
                    }, {
                        dedupe: !!o
                    })), !c) throw new ev.Bh({
                    blockHash: t,
                    blockNumber: n,
                    blockTag: s,
                    hash: a,
                    index: i
                });
                let u = e.chain ? .formatters ? .transaction ? .format || ek.Tr;
                return u(c)
            }
            async function eN(e, {
                hash: t,
                transactionReceipt: n
            }) {
                let [r, a] = await Promise.all([(0, f.s)(e, Q, "getBlockNumber")({}), t ? (0, f.s)(e, ex, "getTransaction")({
                    hash: t
                }) : void 0]), i = n ? .blockNumber || a ? .blockNumber;
                return i ? r - i + 1 n : 0 n
            }
            var eE = n(88418);
            let eC = {
                "0x0": "reverted",
                "0x1": "success"
            };

            function eI(e) {
                let t = { ...e,
                    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                    contractAddress: e.contractAddress ? e.contractAddress : null,
                    cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
                    effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
                    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
                    logs: e.logs ? e.logs.map(e => el(e)) : null,
                    to: e.to ? e.to : null,
                    transactionIndex: e.transactionIndex ? (0, X.ly)(e.transactionIndex) : null,
                    status: e.status ? eC[e.status] : null,
                    type: e.type ? ek.c8[e.type] || e.type : null
                };
                return e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)), e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)), t
            }
            async function eA(e, {
                hash: t
            }) {
                let n = await e.request({
                    method: "eth_getTransactionReceipt",
                    params: [t]
                }, {
                    dedupe: !0
                });
                if (!n) throw new ev.Yb({
                    hash: t
                });
                let r = e.chain ? .formatters ? .transactionReceipt ? .format || eI;
                return r(n)
            }
            var e$ = n(32809);
            async function eB(e, t) {
                let {
                    abi: n,
                    address: r,
                    args: s,
                    dataSuffix: o,
                    functionName: l,
                    ...c
                } = t, u = c.account ? (0, q.T)(c.account) : e.account, d = (0, i.R)({
                    abi: n,
                    args: s,
                    functionName: l
                });
                try {
                    let {
                        data: i
                    } = await (0, f.s)(e, w.R, "call")({
                        batch: !1,
                        data: `${d}${o?o.replace("0x",""):""}`,
                        to: r,
                        ...c,
                        account: u
                    }), p = (0, a.k)({
                        abi: n,
                        args: s,
                        functionName: l,
                        data: i || "0x"
                    }), m = n.filter(e => "name" in e && e.name === t.functionName);
                    return {
                        result: p,
                        request: {
                            abi: m,
                            address: r,
                            args: s,
                            dataSuffix: o,
                            functionName: l,
                            ...c,
                            account: u
                        }
                    }
                } catch (e) {
                    throw (0, O.S)(e, {
                        abi: n,
                        address: r,
                        args: s,
                        docsPath: "/docs/contract/simulateContract",
                        functionName: l,
                        sender: u ? .address
                    })
                }
            }
            async function eT(e, {
                filter: t
            }) {
                return t.request({
                    method: "eth_uninstallFilter",
                    params: [t.id]
                })
            }
            var eP = n(68082),
                eR = n(87362),
                eM = n(58960),
                eS = n(65891),
                eF = n(92490),
                e_ = n(17360);
            let eq = "0x6492649264926492649264926492649264926492649264926492649264926492";
            var eO = n(21449),
                eL = n(53824),
                eU = n(91350),
                eD = n(94768);
            async function ej(e, t) {
                let {
                    address: n,
                    factory: a,
                    factoryData: s,
                    hash: o,
                    signature: c,
                    universalSignatureVerifierAddress: u = e.chain ? .contracts ? .universalSignatureVerifier ? .address,
                    ...d
                } = t, p = (0, e_.v)(c) ? c : "object" == typeof c && "r" in c && "s" in c ? function({
                    r: e,
                    s: t,
                    to: n = "hex",
                    v: r,
                    yParity: a
                }) {
                    let i = (() => {
                            if (0 === a || 1 === a) return a;
                            if (r && (27 n === r || 28 n === r || r >= 35 n)) return r % 2 n === 0 n ? 1 : 0;
                            throw Error("Invalid `v` or `yParity` value")
                        })(),
                        s = `0x${new eD.secp256k1.Signature((0,X.y_)(e),(0,X.y_)(t)).toCompactHex()}${0===i?"1b":"1c"}`;
                    return "hex" === n ? s : (0, C.nr)(s)
                }(c) : (0, l.ci)(c), m = await (async () => a || s ? (0, eO.p5)(p, -32) === eq ? p : function(e) {
                    let {
                        address: t,
                        data: n,
                        signature: r,
                        to: a = "hex"
                    } = e, i = (0, eU.SM)([(0, $.E)([{
                        type: "address"
                    }, {
                        type: "bytes"
                    }, {
                        type: "bytes"
                    }], [t, n, r]), eq]);
                    return "hex" === a ? i : (0, C.nr)(i)
                }({
                    address: a,
                    data: s,
                    signature: p
                }) : p)();
                try {
                    let t = u ? {
                            to: u,
                            data: (0, i.R)({
                                abi: r.$o,
                                functionName: "isValidSig",
                                args: [n, o, m]
                            }),
                            ...d
                        } : {
                            data: (0, eS.w)({
                                abi: r.$o,
                                args: [n, o, m],
                                bytecode: eR.ST
                            }),
                            ...d
                        },
                        {
                            data: a
                        } = await (0, f.s)(e, w.R, "call")(t);
                    return (0, X.XA)(a ? ? "0x0")
                } catch (e) {
                    try {
                        let e = (0, et.E)((0, eF.K)(n), await (0, eL.R)({
                            hash: o,
                            signature: c
                        }));
                        if (e) return !0
                    } catch {}
                    if (e instanceof eM.cg) return !1;
                    throw e
                }
            }
            async function eG(e, {
                address: t,
                message: n,
                factory: r,
                factoryData: a,
                signature: i,
                ...s
            }) {
                let o = (0, eP.r)(n);
                return ej(e, {
                    address: t,
                    factory: r,
                    factoryData: a,
                    hash: o,
                    signature: i,
                    ...s
                })
            }
            var eZ = n(71110);
            async function ez(e, t) {
                let {
                    address: n,
                    factory: r,
                    factoryData: a,
                    signature: i,
                    message: s,
                    primaryType: o,
                    types: l,
                    domain: c,
                    ...u
                } = t, d = (0, eZ.Jv)({
                    message: s,
                    primaryType: o,
                    types: l,
                    domain: c
                });
                return ej(e, {
                    address: n,
                    factory: r,
                    factoryData: a,
                    hash: d,
                    signature: i,
                    ...u
                })
            }
            var eH = n(45488);
            let eW = new Map,
                eV = new Map,
                eJ = 0;

            function eQ(e, t, n) {
                let r = ++eJ,
                    a = () => eW.get(e) || [],
                    i = () => {
                        let t = a();
                        eW.set(e, t.filter(e => e.id !== r))
                    },
                    s = () => {
                        let t = eV.get(e);
                        1 === a().length && t && t(), i()
                    },
                    o = a();
                if (eW.set(e, [...o, {
                        id: r,
                        fns: t
                    }]), o && o.length > 0) return s;
                let l = {};
                for (let e in t) l[e] = (...t) => {
                    let n = a();
                    if (0 !== n.length)
                        for (let r of n) r.fns[e] ? .(...t)
                };
                let c = n(l);
                return "function" == typeof c && eV.set(e, c), s
            }
            var eX = n(30688),
                eK = n(3069),
                eY = n(821),
                e0 = n(29361);

            function e1(e, {
                emitOnBegin: t,
                initialWaitTime: n,
                interval: r
            }) {
                let a = !0,
                    i = () => a = !1,
                    s = async () => {
                        let s;
                        t && (s = await e({
                            unpoll: i
                        }));
                        let o = await n ? .(s) ? ? r;
                        await (0, e0.D)(o);
                        let l = async () => {
                            a && (await e({
                                unpoll: i
                            }), await (0, e0.D)(r), l())
                        };
                        l()
                    };
                return s(), i
            }

            function e6(e, {
                emitOnBegin: t = !1,
                emitMissed: n = !1,
                onBlockNumber: r,
                onError: a,
                poll: i,
                pollingInterval: s = e.pollingInterval
            }) {
                let o;
                let l = void 0 !== i ? i : "webSocket" !== e.transport.type && ("fallback" !== e.transport.type || "webSocket" !== e.transport.transports[0].config.type);
                return l ? (() => {
                    let i = (0, eY.P)(["watchBlockNumber", e.uid, t, n, s]);
                    return eQ(i, {
                        onBlockNumber: r,
                        onError: a
                    }, r => e1(async () => {
                        try {
                            let t = await (0, f.s)(e, Q, "getBlockNumber")({
                                cacheTime: 0
                            });
                            if (o) {
                                if (t === o) return;
                                if (t - o > 1 && n)
                                    for (let e = o + 1 n; e < t; e++) r.onBlockNumber(e, o), o = e
                            }(!o || t > o) && (r.onBlockNumber(t, o), o = t)
                        } catch (e) {
                            r.onError ? .(e)
                        }
                    }, {
                        emitOnBegin: t,
                        interval: s
                    }))
                })() : (() => {
                    let i = (0, eY.P)(["watchBlockNumber", e.uid, t, n]);
                    return eQ(i, {
                        onBlockNumber: r,
                        onError: a
                    }, t => {
                        let n = !0,
                            r = () => n = !1;
                        return (async () => {
                            try {
                                let a = (() => {
                                        if ("fallback" === e.transport.type) {
                                            let t = e.transport.transports.find(e => "webSocket" === e.config.type);
                                            return t ? t.value : e.transport
                                        }
                                        return e.transport
                                    })(),
                                    {
                                        unsubscribe: i
                                    } = await a.subscribe({
                                        params: ["newHeads"],
                                        onData(e) {
                                            if (!n) return;
                                            let r = (0, X.y_)(e.result ? .number);
                                            t.onBlockNumber(r, o), o = r
                                        },
                                        onError(e) {
                                            t.onError ? .(e)
                                        }
                                    });
                                r = i, n || r()
                            } catch (e) {
                                a ? .(e)
                            }
                        })(), () => r()
                    })
                })()
            }
            async function e5(e, {
                confirmations: t = 1,
                hash: n,
                onReplaced: r,
                pollingInterval: a = e.pollingInterval,
                retryCount: i = 6,
                retryDelay: s = ({
                    count: e
                }) => 200 * ~~(1 << e),
                timeout: o = 18e4
            }) {
                let l, c, u;
                let d = (0, eY.P)(["waitForTransactionReceipt", e.uid, n]),
                    p = !1,
                    {
                        promise: m,
                        resolve: b,
                        reject: y
                    } = (0, eX.n)(),
                    h = o ? setTimeout(() => y(new ev.mc({
                        hash: n
                    })), o) : void 0,
                    g = eQ(d, {
                        onReplaced: r,
                        resolve: b,
                        reject: y
                    }, r => {
                        let o = (0, f.s)(e, e6, "watchBlockNumber")({
                            emitMissed: !0,
                            emitOnBegin: !0,
                            poll: !0,
                            pollingInterval: a,
                            async onBlockNumber(a) {
                                let d = e => {
                                        clearTimeout(h), o(), e(), g()
                                    },
                                    m = a;
                                if (!p) try {
                                    if (u) {
                                        if (t > 1 && (!u.blockNumber || m - u.blockNumber + 1 n < t)) return;
                                        d(() => r.resolve(u));
                                        return
                                    }
                                    if (l || (p = !0, await (0, eK.J)(async () => {
                                            (l = await (0, f.s)(e, ex, "getTransaction")({
                                                hash: n
                                            })).blockNumber && (m = l.blockNumber)
                                        }, {
                                            delay: s,
                                            retryCount: i
                                        }), p = !1), u = await (0, f.s)(e, eA, "getTransactionReceipt")({
                                            hash: n
                                        }), t > 1 && (!u.blockNumber || m - u.blockNumber + 1 n < t)) return;
                                    d(() => r.resolve(u))
                                } catch (n) {
                                    if (n instanceof ev.Bh || n instanceof ev.Yb) {
                                        if (!l) {
                                            p = !1;
                                            return
                                        }
                                        try {
                                            c = l, p = !0;
                                            let n = await (0, eK.J)(() => (0, f.s)(e, z.Q, "getBlock")({
                                                blockNumber: m,
                                                includeTransactions: !0
                                            }), {
                                                delay: s,
                                                retryCount: i,
                                                shouldRetry: ({
                                                    error: e
                                                }) => e instanceof eH.f
                                            });
                                            p = !1;
                                            let a = n.transactions.find(({
                                                from: e,
                                                nonce: t
                                            }) => e === c.from && t === c.nonce);
                                            if (!a || (u = await (0, f.s)(e, eA, "getTransactionReceipt")({
                                                    hash: a.hash
                                                }), t > 1 && (!u.blockNumber || m - u.blockNumber + 1 n < t))) return;
                                            let o = "replaced";
                                            a.to === c.to && a.value === c.value ? o = "repriced" : a.from === a.to && 0 n === a.value && (o = "cancelled"), d(() => {
                                                r.onReplaced ? .({
                                                    reason: o,
                                                    replacedTransaction: c,
                                                    transaction: a,
                                                    transactionReceipt: u
                                                }), r.resolve(u)
                                            })
                                        } catch (e) {
                                            d(() => r.reject(e))
                                        }
                                    } else d(() => r.reject(n))
                                }
                            }
                        })
                    });
                return m
            }
            var e8 = n(63312),
                e2 = n(73397);
            let e3 = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
                e4 = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
            async function e9(e, t) {
                let {
                    address: n,
                    domain: r,
                    message: a,
                    nonce: i,
                    scheme: s,
                    signature: o,
                    time: l = new Date,
                    ...c
                } = t, u = function(e) {
                    let {
                        scheme: t,
                        statement: n,
                        ...r
                    } = e.match(e3) ? .groups ? ? {}, {
                        chainId: a,
                        expirationTime: i,
                        issuedAt: s,
                        notBefore: o,
                        requestId: l,
                        ...c
                    } = e.match(e4) ? .groups ? ? {}, u = e.split("Resources:")[1] ? .split("\n- ").slice(1);
                    return { ...r,
                        ...c,
                        ...a ? {
                            chainId: Number(a)
                        } : {},
                        ...i ? {
                            expirationTime: new Date(i)
                        } : {},
                        ...s ? {
                            issuedAt: new Date(s)
                        } : {},
                        ...o ? {
                            notBefore: new Date(o)
                        } : {},
                        ...l ? {
                            requestId: l
                        } : {},
                        ...u ? {
                            resources: u
                        } : {},
                        ...t ? {
                            scheme: t
                        } : {},
                        ...n ? {
                            statement: n
                        } : {}
                    }
                }(a);
                if (!u.address) return !1;
                let d = function(e) {
                    let {
                        address: t,
                        domain: n,
                        message: r,
                        nonce: a,
                        scheme: i,
                        time: s = new Date
                    } = e;
                    if (n && r.domain !== n || a && r.nonce !== a || i && r.scheme !== i || r.expirationTime && s >= r.expirationTime || r.notBefore && s < r.notBefore) return !1;
                    try {
                        if (!r.address || t && !(0, et.E)(r.address, t)) return !1
                    } catch {
                        return !1
                    }
                    return !0
                }({
                    address: n,
                    domain: r,
                    message: u,
                    nonce: i,
                    scheme: s,
                    time: l
                });
                if (!d) return !1;
                let f = (0, eP.r)(a);
                return ej(e, {
                    address: u.address,
                    hash: f,
                    signature: o,
                    ...c
                })
            }
            var e7 = n(39521),
                te = n(83040);

            function tt(e) {
                return {
                    call: t => (0, w.R)(e, t),
                    createBlockFilter: () => k(e),
                    createContractEventFilter: t => S(e, t),
                    createEventFilter: t => F(e, t),
                    createPendingTransactionFilter: () => _(e),
                    estimateContractGas: t => U(e, t),
                    estimateGas: t => (0, L.Q)(e, t),
                    getBalance: t => (0, G.s)(e, t),
                    getBlobBaseFee: () => Z(e),
                    getBlock: t => (0, z.Q)(e, t),
                    getBlockNumber: t => Q(e, t),
                    getBlockTransactionCount: t => K(e, t),
                    getBytecode: t => ee(e, t),
                    getChainId: () => (0, Y.L)(e),
                    getCode: t => ee(e, t),
                    getContractEvents: t => eu(e, t),
                    getEip712Domain: t => ef(e, t),
                    getEnsAddress: t => m(e, t),
                    getEnsAvatar: t => (0, b.r)(e, t),
                    getEnsName: t => (0, y.w)(e, t),
                    getEnsResolver: t => h(e, t),
                    getEnsText: t => (0, g.g)(e, t),
                    getFeeHistory: t => em(e, t),
                    estimateFeesPerGas: t => (0, D.X)(e, t),
                    getFilterChanges: t => eb(e, t),
                    getFilterLogs: t => ey(e, t),
                    getGasPrice: () => (0, eh.o)(e),
                    getLogs: t => ec(e, t),
                    getProof: t => eg(e, t),
                    estimateMaxPriorityFeePerGas: t => (0, j._)(e, t),
                    getStorageAt: t => ew(e, t),
                    getTransaction: t => ex(e, t),
                    getTransactionConfirmations: t => eN(e, t),
                    getTransactionCount: t => (0, eE.K)(e, t),
                    getTransactionReceipt: t => eA(e, t),
                    multicall: t => (0, e$.A)(e, t),
                    prepareTransactionRequest: t => (0, e7.Z)(e, t),
                    readContract: t => (0, p.L)(e, t),
                    sendRawTransaction: t => (0, te.p)(e, t),
                    simulateContract: t => eB(e, t),
                    verifyMessage: t => eG(e, t),
                    verifySiweMessage: t => e9(e, t),
                    verifyTypedData: t => ez(e, t),
                    uninstallFilter: t => eT(e, t),
                    waitForTransactionReceipt: t => e5(e, t),
                    watchBlocks: t => (function(e, {
                        blockTag: t = "latest",
                        emitMissed: n = !1,
                        emitOnBegin: r = !1,
                        onBlock: a,
                        onError: i,
                        includeTransactions: s,
                        poll: o,
                        pollingInterval: l = e.pollingInterval
                    }) {
                        let c, u, d, p;
                        let m = void 0 !== o ? o : "webSocket" !== e.transport.type && ("fallback" !== e.transport.type || "webSocket" !== e.transport.transports[0].config.type),
                            b = s ? ? !1;
                        return m ? (() => {
                            let s = (0, eY.P)(["watchBlocks", e.uid, t, n, r, b, l]);
                            return eQ(s, {
                                onBlock: a,
                                onError: i
                            }, a => e1(async () => {
                                try {
                                    let r = await (0, f.s)(e, z.Q, "getBlock")({
                                        blockTag: t,
                                        includeTransactions: b
                                    });
                                    if (r.number && c ? .number) {
                                        if (r.number === c.number) return;
                                        if (r.number - c.number > 1 && n)
                                            for (let t = c ? .number + 1 n; t < r.number; t++) {
                                                let n = await (0, f.s)(e, z.Q, "getBlock")({
                                                    blockNumber: t,
                                                    includeTransactions: b
                                                });
                                                a.onBlock(n, c), c = n
                                            }
                                    }(!c ? .number || "pending" === t && !r ? .number || r.number && r.number > c.number) && (a.onBlock(r, c), c = r)
                                } catch (e) {
                                    a.onError ? .(e)
                                }
                            }, {
                                emitOnBegin: r,
                                interval: l
                            }))
                        })() : (u = !0, d = !0, p = () => u = !1, (async () => {
                            try {
                                r && (0, f.s)(e, z.Q, "getBlock")({
                                    blockTag: t,
                                    includeTransactions: b
                                }).then(e => {
                                    u && d && (a(e, void 0), d = !1)
                                });
                                let n = (() => {
                                        if ("fallback" === e.transport.type) {
                                            let t = e.transport.transports.find(e => "webSocket" === e.config.type);
                                            return t ? t.value : e.transport
                                        }
                                        return e.transport
                                    })(),
                                    {
                                        unsubscribe: s
                                    } = await n.subscribe({
                                        params: ["newHeads"],
                                        onData(t) {
                                            if (!u) return;
                                            let n = e.chain ? .formatters ? .block ? .format || e8.Z,
                                                r = n(t.result);
                                            a(r, c), d = !1, c = r
                                        },
                                        onError(e) {
                                            i ? .(e)
                                        }
                                    });
                                p = s, u || p()
                            } catch (e) {
                                i ? .(e)
                            }
                        })(), () => p())
                    })(e, t),
                    watchBlockNumber: t => e6(e, t),
                    watchContractEvent: t => (function(e, t) {
                        let {
                            abi: n,
                            address: r,
                            args: a,
                            batch: i = !0,
                            eventName: s,
                            fromBlock: o,
                            onError: l,
                            onLogs: c,
                            poll: u,
                            pollingInterval: d = e.pollingInterval,
                            strict: p
                        } = t, m = void 0 !== u ? u : "bigint" == typeof o || "webSocket" !== e.transport.type && ("fallback" !== e.transport.type || "webSocket" !== e.transport.transports[0].config.type);
                        return m ? (() => {
                            let t = p ? ? !1,
                                u = (0, eY.P)(["watchContractEvent", r, a, i, e.uid, s, d, t, o]);
                            return eQ(u, {
                                onLogs: c,
                                onError: l
                            }, l => {
                                let c, u;
                                void 0 !== o && (c = o - 1 n);
                                let p = !1,
                                    m = e1(async () => {
                                        if (!p) {
                                            try {
                                                u = await (0, f.s)(e, S, "createContractEventFilter")({
                                                    abi: n,
                                                    address: r,
                                                    args: a,
                                                    eventName: s,
                                                    strict: t,
                                                    fromBlock: o
                                                })
                                            } catch {}
                                            p = !0;
                                            return
                                        }
                                        try {
                                            let o;
                                            if (u) o = await (0, f.s)(e, eb, "getFilterChanges")({
                                                filter: u
                                            });
                                            else {
                                                let i = await (0, f.s)(e, Q, "getBlockNumber")({});
                                                o = c && c < i ? await (0, f.s)(e, eu, "getContractEvents")({
                                                    abi: n,
                                                    address: r,
                                                    args: a,
                                                    eventName: s,
                                                    fromBlock: c + 1 n,
                                                    toBlock: i,
                                                    strict: t
                                                }) : [], c = i
                                            }
                                            if (0 === o.length) return;
                                            if (i) l.onLogs(o);
                                            else
                                                for (let e of o) l.onLogs([e])
                                        } catch (e) {
                                            u && e instanceof e2.yR && (p = !1), l.onError ? .(e)
                                        }
                                    }, {
                                        emitOnBegin: !0,
                                        interval: d
                                    });
                                return async () => {
                                    u && await (0, f.s)(e, eT, "uninstallFilter")({
                                        filter: u
                                    }), m()
                                }
                            })
                        })() : (() => {
                            let t = (0, eY.P)(["watchContractEvent", r, a, i, e.uid, s, d, p ? ? !1]),
                                o = !0,
                                u = () => o = !1;
                            return eQ(t, {
                                onLogs: c,
                                onError: l
                            }, t => ((async () => {
                                try {
                                    let i = (() => {
                                            if ("fallback" === e.transport.type) {
                                                let t = e.transport.transports.find(e => "webSocket" === e.config.type);
                                                return t ? t.value : e.transport
                                            }
                                            return e.transport
                                        })(),
                                        l = s ? R({
                                            abi: n,
                                            eventName: s,
                                            args: a
                                        }) : [],
                                        {
                                            unsubscribe: c
                                        } = await i.subscribe({
                                            params: ["logs", {
                                                address: r,
                                                topics: l
                                            }],
                                            onData(e) {
                                                if (!o) return;
                                                let r = e.result;
                                                try {
                                                    let {
                                                        eventName: e,
                                                        args: a
                                                    } = es({
                                                        abi: n,
                                                        data: r.data,
                                                        topics: r.topics,
                                                        strict: p
                                                    }), i = el(r, {
                                                        args: a,
                                                        eventName: e
                                                    });
                                                    t.onLogs([i])
                                                } catch (i) {
                                                    let e, n;
                                                    if (i instanceof x.SM || i instanceof x.Gy) {
                                                        if (p) return;
                                                        e = i.abiItem.name, n = i.abiItem.inputs ? .some(e => !("name" in e && e.name))
                                                    }
                                                    let a = el(r, {
                                                        args: n ? [] : {},
                                                        eventName: e
                                                    });
                                                    t.onLogs([a])
                                                }
                                            },
                                            onError(e) {
                                                t.onError ? .(e)
                                            }
                                        });
                                    u = c, o || u()
                                } catch (e) {
                                    l ? .(e)
                                }
                            })(), () => u()))
                        })()
                    })(e, t),
                    watchEvent: t => (function(e, {
                        address: t,
                        args: n,
                        batch: r = !0,
                        event: a,
                        events: i,
                        fromBlock: s,
                        onError: o,
                        onLogs: l,
                        poll: c,
                        pollingInterval: u = e.pollingInterval,
                        strict: d
                    }) {
                        let p, m;
                        let b = void 0 !== c ? c : "bigint" == typeof s || "webSocket" !== e.transport.type && ("fallback" !== e.transport.type || "webSocket" !== e.transport.transports[0].config.type),
                            y = d ? ? !1;
                        return b ? (() => {
                            let c = (0, eY.P)(["watchEvent", t, n, r, e.uid, a, u, s]);
                            return eQ(c, {
                                onLogs: l,
                                onError: o
                            }, o => {
                                let l, c;
                                void 0 !== s && (l = s - 1 n);
                                let d = !1,
                                    p = e1(async () => {
                                        if (!d) {
                                            try {
                                                c = await (0, f.s)(e, F, "createEventFilter")({
                                                    address: t,
                                                    args: n,
                                                    event: a,
                                                    events: i,
                                                    strict: y,
                                                    fromBlock: s
                                                })
                                            } catch {}
                                            d = !0;
                                            return
                                        }
                                        try {
                                            let s;
                                            if (c) s = await (0, f.s)(e, eb, "getFilterChanges")({
                                                filter: c
                                            });
                                            else {
                                                let r = await (0, f.s)(e, Q, "getBlockNumber")({});
                                                s = l && l !== r ? await (0, f.s)(e, ec, "getLogs")({
                                                    address: t,
                                                    args: n,
                                                    event: a,
                                                    events: i,
                                                    fromBlock: l + 1 n,
                                                    toBlock: r
                                                }) : [], l = r
                                            }
                                            if (0 === s.length) return;
                                            if (r) o.onLogs(s);
                                            else
                                                for (let e of s) o.onLogs([e])
                                        } catch (e) {
                                            c && e instanceof e2.yR && (d = !1), o.onError ? .(e)
                                        }
                                    }, {
                                        emitOnBegin: !0,
                                        interval: u
                                    });
                                return async () => {
                                    c && await (0, f.s)(e, eT, "uninstallFilter")({
                                        filter: c
                                    }), p()
                                }
                            })
                        })() : (p = !0, m = () => p = !1, (async () => {
                            try {
                                let r = (() => {
                                        if ("fallback" === e.transport.type) {
                                            let t = e.transport.transports.find(e => "webSocket" === e.config.type);
                                            return t ? t.value : e.transport
                                        }
                                        return e.transport
                                    })(),
                                    s = i ? ? (a ? [a] : void 0),
                                    c = [];
                                if (s) {
                                    let e = s.flatMap(e => R({
                                        abi: [e],
                                        eventName: e.name,
                                        args: n
                                    }));
                                    c = [e], a && (c = c[0])
                                }
                                let {
                                    unsubscribe: u
                                } = await r.subscribe({
                                    params: ["logs", {
                                        address: t,
                                        topics: c
                                    }],
                                    onData(e) {
                                        if (!p) return;
                                        let t = e.result;
                                        try {
                                            let {
                                                eventName: e,
                                                args: n
                                            } = es({
                                                abi: s ? ? [],
                                                data: t.data,
                                                topics: t.topics,
                                                strict: y
                                            }), r = el(t, {
                                                args: n,
                                                eventName: e
                                            });
                                            l([r])
                                        } catch (a) {
                                            let e, n;
                                            if (a instanceof x.SM || a instanceof x.Gy) {
                                                if (d) return;
                                                e = a.abiItem.name, n = a.abiItem.inputs ? .some(e => !("name" in e && e.name))
                                            }
                                            let r = el(t, {
                                                args: n ? [] : {},
                                                eventName: e
                                            });
                                            l([r])
                                        }
                                    },
                                    onError(e) {
                                        o ? .(e)
                                    }
                                });
                                m = u, p || m()
                            } catch (e) {
                                o ? .(e)
                            }
                        })(), () => m())
                    })(e, t),
                    watchPendingTransactions: t => (function(e, {
                        batch: t = !0,
                        onError: n,
                        onTransactions: r,
                        poll: a,
                        pollingInterval: i = e.pollingInterval
                    }) {
                        let s, o;
                        let l = void 0 !== a ? a : "webSocket" !== e.transport.type;
                        return l ? (() => {
                            let a = (0, eY.P)(["watchPendingTransactions", e.uid, t, i]);
                            return eQ(a, {
                                onTransactions: r,
                                onError: n
                            }, n => {
                                let r;
                                let a = e1(async () => {
                                    try {
                                        if (!r) try {
                                            r = await (0, f.s)(e, _, "createPendingTransactionFilter")({});
                                            return
                                        } catch (e) {
                                            throw a(), e
                                        }
                                        let i = await (0, f.s)(e, eb, "getFilterChanges")({
                                            filter: r
                                        });
                                        if (0 === i.length) return;
                                        if (t) n.onTransactions(i);
                                        else
                                            for (let e of i) n.onTransactions([e])
                                    } catch (e) {
                                        n.onError ? .(e)
                                    }
                                }, {
                                    emitOnBegin: !0,
                                    interval: i
                                });
                                return async () => {
                                    r && await (0, f.s)(e, eT, "uninstallFilter")({
                                        filter: r
                                    }), a()
                                }
                            })
                        })() : (s = !0, o = () => s = !1, (async () => {
                            try {
                                let {
                                    unsubscribe: t
                                } = await e.transport.subscribe({
                                    params: ["newPendingTransactions"],
                                    onData(e) {
                                        if (!s) return;
                                        let t = e.result;
                                        r([t])
                                    },
                                    onError(e) {
                                        n ? .(e)
                                    }
                                });
                                o = t, s || o()
                            } catch (e) {
                                n ? .(e)
                            }
                        })(), () => o())
                    })(e, t)
                }
            }
        },
        6821: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return d
                }
            });
            var r = n(41409),
                a = n(26045);
            class i extends a.G {
                constructor() {
                    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
                        docsPath: "/docs/clients/intro",
                        name: "UrlRequiredError"
                    })
                }
            }
            var s = n(50442),
                o = n(49520),
                l = n(821);
            let c = {
                current: 0,
                take() {
                    return this.current++
                },
                reset() {
                    this.current = 0
                }
            };
            var u = n(83091);

            function d(e, t = {}) {
                let {
                    batch: n,
                    fetchOptions: a,
                    key: d = "http",
                    name: f = "HTTP JSON-RPC",
                    onFetchRequest: p,
                    onFetchResponse: m,
                    retryDelay: b
                } = t;
                return ({
                    chain: y,
                    retryCount: h,
                    timeout: g
                }) => {
                    let {
                        batchSize: w = 1e3,
                        wait: v = 0
                    } = "object" == typeof n ? n : {}, k = t.retryCount ? ? h, x = g ? ? t.timeout ? ? 1e4, N = e || y ? .rpcUrls.default.http[0];
                    if (!N) throw new i;
                    let E = function(e, t = {}) {
                        return {
                            async request(n) {
                                let {
                                    body: a,
                                    onRequest: i = t.onRequest,
                                    onResponse: s = t.onResponse,
                                    timeout: u = t.timeout ? ? 1e4
                                } = n, d = { ...t.fetchOptions ? ? {},
                                    ...n.fetchOptions ? ? {}
                                }, {
                                    headers: f,
                                    method: p,
                                    signal: m
                                } = d;
                                try {
                                    let t;
                                    let n = await (0, o.F)(async ({
                                        signal: t
                                    }) => {
                                        let n = { ...d,
                                                body: Array.isArray(a) ? (0, l.P)(a.map(e => ({
                                                    jsonrpc: "2.0",
                                                    id: e.id ? ? c.take(),
                                                    ...e
                                                }))) : (0, l.P)({
                                                    jsonrpc: "2.0",
                                                    id: a.id ? ? c.take(),
                                                    ...a
                                                }),
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    ...f
                                                },
                                                method: p || "POST",
                                                signal: m || (u > 0 ? t : null)
                                            },
                                            r = new Request(e, n),
                                            s = await i ? .(r, n) ? ? { ...n,
                                                url: e
                                            },
                                            o = await fetch(s.url ? ? e, s);
                                        return o
                                    }, {
                                        errorInstance: new r.W5({
                                            body: a,
                                            url: e
                                        }),
                                        timeout: u,
                                        signal: !0
                                    });
                                    if (s && await s(n), n.headers.get("Content-Type") ? .startsWith("application/json")) t = await n.json();
                                    else {
                                        t = await n.text();
                                        try {
                                            t = JSON.parse(t || "{}")
                                        } catch (e) {
                                            if (n.ok) throw e;
                                            t = {
                                                error: t
                                            }
                                        }
                                    }
                                    if (!n.ok) throw new r.Gg({
                                        body: a,
                                        details: (0, l.P)(t.error) || n.statusText,
                                        headers: n.headers,
                                        status: n.status,
                                        url: e
                                    });
                                    return t
                                } catch (t) {
                                    if (t instanceof r.Gg || t instanceof r.W5) throw t;
                                    throw new r.Gg({
                                        body: a,
                                        cause: t,
                                        url: e
                                    })
                                }
                            }
                        }
                    }(N, {
                        fetchOptions: a,
                        onRequest: p,
                        onResponse: m,
                        timeout: x
                    });
                    return (0, u.q)({
                        key: d,
                        name: f,
                        async request({
                            method: e,
                            params: t
                        }) {
                            let a = {
                                    method: e,
                                    params: t
                                },
                                {
                                    schedule: i
                                } = (0, s.S)({
                                    id: N,
                                    wait: v,
                                    shouldSplitBatch: e => e.length > w,
                                    fn: e => E.request({
                                        body: e
                                    }),
                                    sort: (e, t) => e.id - t.id
                                }),
                                o = async e => n ? i(e) : [await E.request({
                                    body: e
                                })],
                                [{
                                    error: l,
                                    result: c
                                }] = await o(a);
                            if (l) throw new r.bs({
                                body: a,
                                error: l,
                                url: N
                            });
                            return c
                        },
                        retryCount: k,
                        retryDelay: b,
                        timeout: x,
                        type: "http"
                    }, {
                        fetchOptions: a,
                        url: N
                    })
                }
            }
        },
        77131: function(e, t, n) {
            n.d(t, {
                $o: function() {
                    return c
                },
                F8: function() {
                    return r
                },
                Wo: function() {
                    return u
                },
                X$: function() {
                    return l
                },
                du: function() {
                    return s
                },
                k3: function() {
                    return i
                },
                nZ: function() {
                    return o
                }
            });
            let r = [{
                    inputs: [{
                        components: [{
                            name: "target",
                            type: "address"
                        }, {
                            name: "allowFailure",
                            type: "bool"
                        }, {
                            name: "callData",
                            type: "bytes"
                        }],
                        name: "calls",
                        type: "tuple[]"
                    }],
                    name: "aggregate3",
                    outputs: [{
                        components: [{
                            name: "success",
                            type: "bool"
                        }, {
                            name: "returnData",
                            type: "bytes"
                        }],
                        name: "returnData",
                        type: "tuple[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }],
                a = [{
                    inputs: [],
                    name: "ResolverNotFound",
                    type: "error"
                }, {
                    inputs: [],
                    name: "ResolverWildcardNotSupported",
                    type: "error"
                }, {
                    inputs: [],
                    name: "ResolverNotContract",
                    type: "error"
                }, {
                    inputs: [{
                        name: "returnData",
                        type: "bytes"
                    }],
                    name: "ResolverError",
                    type: "error"
                }, {
                    inputs: [{
                        components: [{
                            name: "status",
                            type: "uint16"
                        }, {
                            name: "message",
                            type: "string"
                        }],
                        name: "errors",
                        type: "tuple[]"
                    }],
                    name: "HttpError",
                    type: "error"
                }],
                i = [...a, {
                    name: "resolve",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes"
                    }, {
                        name: "data",
                        type: "bytes"
                    }],
                    outputs: [{
                        name: "",
                        type: "bytes"
                    }, {
                        name: "address",
                        type: "address"
                    }]
                }, {
                    name: "resolve",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes"
                    }, {
                        name: "data",
                        type: "bytes"
                    }, {
                        name: "gateways",
                        type: "string[]"
                    }],
                    outputs: [{
                        name: "",
                        type: "bytes"
                    }, {
                        name: "address",
                        type: "address"
                    }]
                }],
                s = [...a, {
                    name: "reverse",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        type: "bytes",
                        name: "reverseName"
                    }],
                    outputs: [{
                        type: "string",
                        name: "resolvedName"
                    }, {
                        type: "address",
                        name: "resolvedAddress"
                    }, {
                        type: "address",
                        name: "reverseResolver"
                    }, {
                        type: "address",
                        name: "resolver"
                    }]
                }, {
                    name: "reverse",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        type: "bytes",
                        name: "reverseName"
                    }, {
                        type: "string[]",
                        name: "gateways"
                    }],
                    outputs: [{
                        type: "string",
                        name: "resolvedName"
                    }, {
                        type: "address",
                        name: "resolvedAddress"
                    }, {
                        type: "address",
                        name: "reverseResolver"
                    }, {
                        type: "address",
                        name: "resolver"
                    }]
                }],
                o = [{
                    name: "text",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes32"
                    }, {
                        name: "key",
                        type: "string"
                    }],
                    outputs: [{
                        name: "",
                        type: "string"
                    }]
                }],
                l = [{
                    name: "addr",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes32"
                    }],
                    outputs: [{
                        name: "",
                        type: "address"
                    }]
                }, {
                    name: "addr",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes32"
                    }, {
                        name: "coinType",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "bytes"
                    }]
                }],
                c = [{
                    inputs: [{
                        name: "_signer",
                        type: "address"
                    }, {
                        name: "_hash",
                        type: "bytes32"
                    }, {
                        name: "_signature",
                        type: "bytes"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    inputs: [{
                        name: "_signer",
                        type: "address"
                    }, {
                        name: "_hash",
                        type: "bytes32"
                    }, {
                        name: "_signature",
                        type: "bytes"
                    }],
                    outputs: [{
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function",
                    name: "isValidSig"
                }],
                u = [{
                    type: "event",
                    name: "Approval",
                    inputs: [{
                        indexed: !0,
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }]
                }, {
                    type: "event",
                    name: "Transfer",
                    inputs: [{
                        indexed: !0,
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "allowance",
                    stateMutability: "view",
                    inputs: [{
                        name: "owner",
                        type: "address"
                    }, {
                        name: "spender",
                        type: "address"
                    }],
                    outputs: [{
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "approve",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "spender",
                        type: "address"
                    }, {
                        name: "amount",
                        type: "uint256"
                    }],
                    outputs: [{
                        type: "bool"
                    }]
                }, {
                    type: "function",
                    name: "balanceOf",
                    stateMutability: "view",
                    inputs: [{
                        name: "account",
                        type: "address"
                    }],
                    outputs: [{
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "decimals",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        type: "uint8"
                    }]
                }, {
                    type: "function",
                    name: "name",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        type: "string"
                    }]
                }, {
                    type: "function",
                    name: "symbol",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        type: "string"
                    }]
                }, {
                    type: "function",
                    name: "totalSupply",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "transfer",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "recipient",
                        type: "address"
                    }, {
                        name: "amount",
                        type: "uint256"
                    }],
                    outputs: [{
                        type: "bool"
                    }]
                }, {
                    type: "function",
                    name: "transferFrom",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "sender",
                        type: "address"
                    }, {
                        name: "recipient",
                        type: "address"
                    }, {
                        name: "amount",
                        type: "uint256"
                    }],
                    outputs: [{
                        type: "bool"
                    }]
                }]
        },
        87362: function(e, t, n) {
            n.d(t, {
                NO: function() {
                    return r
                },
                ST: function() {
                    return i
                },
                pG: function() {
                    return a
                }
            });
            let r = "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
                a = "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
                i = "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"
        },
        66597: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return o
                }
            });
            var r = n(7158),
                a = n(5494),
                i = n(61352);
            let s = "/docs/contract/decodeFunctionResult";

            function o(e) {
                let {
                    abi: t,
                    args: n,
                    functionName: o,
                    data: l
                } = e, c = t[0];
                if (o) {
                    let e = (0, i.mE)({
                        abi: t,
                        args: n,
                        name: o
                    });
                    if (!e) throw new r.xL(o, {
                        docsPath: s
                    });
                    c = e
                }
                if ("function" !== c.type) throw new r.xL(void 0, {
                    docsPath: s
                });
                if (!c.outputs) throw new r.MX(c.name, {
                    docsPath: s
                });
                let u = (0, a.r)(c.outputs, l);
                return u && u.length > 1 ? u : u && 1 === u.length ? u[0] : void 0
            }
        },
        33741: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return i
                }
            });
            var r = n(12122),
                a = n(17046);

            function i(e, t) {
                if (!(0, a.U)(e, {
                        strict: !1
                    })) throw new r.b({
                    address: e
                });
                if (!(0, a.U)(t, {
                        strict: !1
                    })) throw new r.b({
                    address: t
                });
                return e.toLowerCase() === t.toLowerCase()
            }
        },
        91452: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return r
                }
            });

            function r(e) {
                return {
                    formatters: void 0,
                    fees: void 0,
                    serializers: void 0,
                    ...e
                }
            }
        },
        15025: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return a
                }
            });
            var r = n(97725);

            function a({
                blockNumber: e,
                chain: t,
                contract: n
            }) {
                let a = t ? .contracts ? .[n];
                if (!a) throw new r.mm({
                    chain: t,
                    contract: {
                        name: n
                    }
                });
                if (e && a.blockCreated && a.blockCreated > e) throw new r.mm({
                    blockNumber: e,
                    chain: t,
                    contract: {
                        name: n,
                        blockCreated: a.blockCreated
                    }
                });
                return a.address
            }
        },
        49433: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return a
                }
            });
            var r = n(17360);

            function a(e) {
                if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]")) return null;
                let t = `0x${e.slice(1,65)}`;
                return (0, r.v)(t) ? t : null
            }
        },
        48135: function(e, t, n) {
            n.d(t, {
                c: function() {
                    return s
                }
            });
            var r = n(90986),
                a = n(26045),
                i = n(58960);

            function s(e, t) {
                if (!(e instanceof a.G)) return !1;
                let n = e.walk(e => e instanceof i.Lu);
                return n instanceof i.Lu && (!!(n.data ? .errorName === "ResolverNotFound" || n.data ? .errorName === "ResolverWildcardNotSupported" || n.data ? .errorName === "ResolverNotContract" || n.data ? .errorName === "ResolverError" || n.data ? .errorName === "HttpError" || n.reason ? .includes("Wildcard on non-extended resolvers is not supported")) || "reverse" === t && n.reason === r.$[50])
            }
        },
        24803: function(e, t, n) {
            n.d(t, {
                V: function() {
                    return l
                }
            });
            var r = n(91350),
                a = n(89862),
                i = n(82646),
                s = n(88653),
                o = n(49433);

            function l(e) {
                let t = new Uint8Array(32).fill(0);
                if (!e) return (0, i.ci)(t);
                let n = e.split(".");
                for (let e = n.length - 1; e >= 0; e -= 1) {
                    let i = (0, o.i)(n[e]),
                        l = i ? (0, a.O0)(i) : (0, s.w)((0, a.qX)(n[e]), "bytes");
                    t = (0, s.w)((0, r.zo)([t, l]), "bytes")
                }
                return (0, i.ci)(t)
            }
        },
        14633: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return o
                }
            });
            var r = n(89862),
                a = n(82646),
                i = n(88653),
                s = n(49433);

            function o(e) {
                let t = e.replace(/^\.|\.$/gm, "");
                if (0 === t.length) return new Uint8Array(1);
                let n = new Uint8Array((0, r.qX)(t).byteLength + 2),
                    o = 0,
                    l = t.split(".");
                for (let e = 0; e < l.length; e++) {
                    let t = (0, r.qX)(l[e]);
                    if (t.byteLength > 255) {
                        var c;
                        t = (0, r.qX)((c = function(e) {
                            let t = new Uint8Array(32).fill(0);
                            return e ? (0, s.i)(e) || (0, i.w)((0, r.qX)(e)) : (0, a.ci)(t)
                        }(l[e]), `[${c.slice(2)}]`))
                    }
                    n[o] = t.length, n.set(t, o + 1), o += t.length + 1
                }
                return n.byteLength !== o + 1 ? n.slice(0, o + 1) : n
            }
        },
        50442: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return i
                }
            });
            var r = n(30688);
            let a = new Map;

            function i({
                fn: e,
                id: t,
                shouldSplitBatch: n,
                wait: i = 0,
                sort: s
            }) {
                let o = async () => {
                        let t = u();
                        l();
                        let n = t.map(({
                            args: e
                        }) => e);
                        0 !== n.length && e(n).then(e => {
                            s && Array.isArray(e) && e.sort(s);
                            for (let n = 0; n < t.length; n++) {
                                let {
                                    resolve: r
                                } = t[n];
                                r ? .([e[n], e])
                            }
                        }).catch(e => {
                            for (let n = 0; n < t.length; n++) {
                                let {
                                    reject: r
                                } = t[n];
                                r ? .(e)
                            }
                        })
                    },
                    l = () => a.delete(t),
                    c = () => u().map(({
                        args: e
                    }) => e),
                    u = () => a.get(t) || [],
                    d = e => a.set(t, [...u(), e]);
                return {
                    flush: l,
                    async schedule(e) {
                        let {
                            promise: t,
                            resolve: a,
                            reject: s
                        } = (0, r.n)(), l = n ? .([...c(), e]);
                        l && o();
                        let f = u().length > 0;
                        return f ? d({
                            args: e,
                            resolve: a,
                            reject: s
                        }) : (d({
                            args: e,
                            resolve: a,
                            reject: s
                        }), setTimeout(o, i)), t
                    }
                }
            }
        },
        30688: function(e, t, n) {
            n.d(t, {
                n: function() {
                    return r
                }
            });

            function r() {
                let e = () => void 0,
                    t = () => void 0,
                    n = new Promise((n, r) => {
                        e = n, t = r
                    });
                return {
                    promise: n,
                    resolve: e,
                    reject: t
                }
            }
        },
        49520: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return r
                }
            });

            function r(e, {
                errorInstance: t = Error("timed out"),
                timeout: n,
                signal: r
            }) {
                return new Promise((a, i) => {
                    (async () => {
                        let s;
                        try {
                            let o = new AbortController;
                            n > 0 && (s = setTimeout(() => {
                                r ? o.abort() : i(t)
                            }, n)), a(await e({
                                signal: o ? .signal || null
                            }))
                        } catch (e) {
                            e ? .name === "AbortError" && i(t), i(e)
                        } finally {
                            clearTimeout(s)
                        }
                    })()
                })
            }
        },
        68082: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return o
                }
            });
            var r = n(88653),
                a = n(91350),
                i = n(8536),
                s = n(82646);

            function o(e, t) {
                return (0, r.w)(function(e) {
                    let t = "string" == typeof e ? (0, s.$G)(e) : "string" == typeof e.raw ? e.raw : (0, s.ci)(e.raw),
                        n = (0, s.$G)(`Ethereum Signed Message:
${(0,i.d)(t)}`);
                    return (0, a.zo)([n, t])
                }(e), t)
            }
        },
        71110: function(e, t, n) {
            n.d(t, {
                Jv: function() {
                    return l
                }
            });
            var r = n(68618),
                a = n(91350),
                i = n(82646),
                s = n(88653),
                o = n(10347);

            function l(e) {
                let {
                    domain: t = {},
                    message: n,
                    primaryType: r
                } = e, i = {
                    EIP712Domain: (0, o.cj)({
                        domain: t
                    }),
                    ...e.types
                };
                (0, o.iC)({
                    domain: t,
                    message: n,
                    primaryType: r,
                    types: i
                });
                let l = ["0x1901"];
                return t && l.push(function({
                    domain: e,
                    types: t
                }) {
                    return c({
                        data: e,
                        primaryType: "EIP712Domain",
                        types: t
                    })
                }({
                    domain: t,
                    types: i
                })), "EIP712Domain" !== r && l.push(c({
                    data: n,
                    primaryType: r,
                    types: i
                })), (0, s.w)((0, a.zo)(l))
            }

            function c({
                data: e,
                primaryType: t,
                types: n
            }) {
                let a = function e({
                    data: t,
                    primaryType: n,
                    types: a
                }) {
                    let o = [{
                            type: "bytes32"
                        }],
                        l = [function({
                            primaryType: e,
                            types: t
                        }) {
                            let n = (0, i.NC)(function({
                                primaryType: e,
                                types: t
                            }) {
                                let n = "",
                                    r = function e({
                                        primaryType: t,
                                        types: n
                                    }, r = new Set) {
                                        let a = t.match(/^\w*/u),
                                            i = a ? .[0];
                                        if (r.has(i) || void 0 === n[i]) return r;
                                        for (let t of (r.add(i), n[i])) e({
                                            primaryType: t.type,
                                            types: n
                                        }, r);
                                        return r
                                    }({
                                        primaryType: e,
                                        types: t
                                    });
                                r.delete(e);
                                let a = [e, ...Array.from(r).sort()];
                                for (let e of a) n += `${e}(${t[e].map(({name:e,type:t})=>`
                                $ {
                                    t
                                }
                                $ {
                                    e
                                }
                                `).join(",")})`;
                                return n
                            }({
                                primaryType: e,
                                types: t
                            }));
                            return (0, s.w)(n)
                        }({
                            primaryType: n,
                            types: a
                        })];
                    for (let c of a[n]) {
                        let [n, u] = function t({
                            types: n,
                            name: a,
                            type: o,
                            value: l
                        }) {
                            if (void 0 !== n[o]) return [{
                                type: "bytes32"
                            }, (0, s.w)(e({
                                data: l,
                                primaryType: o,
                                types: n
                            }))];
                            if ("bytes" === o) {
                                let e = l.length % 2 ? "0" : "";
                                return l = `0x${e+l.slice(2)}`, [{
                                    type: "bytes32"
                                }, (0, s.w)(l)]
                            }
                            if ("string" === o) return [{
                                type: "bytes32"
                            }, (0, s.w)((0, i.NC)(l))];
                            if (o.lastIndexOf("]") === o.length - 1) {
                                let e = o.slice(0, o.lastIndexOf("[")),
                                    i = l.map(r => t({
                                        name: a,
                                        type: e,
                                        types: n,
                                        value: r
                                    }));
                                return [{
                                    type: "bytes32"
                                }, (0, s.w)((0, r.E)(i.map(([e]) => e), i.map(([, e]) => e)))]
                            }
                            return [{
                                type: o
                            }, l]
                        }({
                            types: a,
                            name: c.name,
                            type: c.type,
                            value: t[c.name]
                        });
                        o.push(n), l.push(u)
                    }
                    return (0, r.E)(o, l)
                }({
                    data: e,
                    primaryType: t,
                    types: n
                });
                return (0, s.w)(a)
            }
        }
    }
]);