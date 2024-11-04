(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5148], {
        60495: function(e, c, a) {
            Promise.resolve().then(a.bind(a, 58372))
        },
        58372: function(e, c, a) {
            "use strict";
            a.r(c), a.d(c, {
                default: function() {
                    return i
                }
            });
            var d = a(92284),
                D = a(78572),
                f = a(63411),
                A = a(62491),
                F = a(53154),
                E = a(42907),
                C = a(51177),
                b = a(72468),
                B = a(95168),
                x = a(68919),
                t = a(95026),
                n = JSON.parse('[{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AddressZero","type":"error"},{"inputs":[],"name":"AlreadyClaimed","type":"error"},{"inputs":[],"name":"InvalidSender","type":"error"},{"inputs":[],"name":"NotInMerkle","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"name":"SetMerkleRoot","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"SetToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_tokenAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"WithdrawStuckTokens","type":"event"},{"inputs":[],"name":"ZERO_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"withdrawStuckTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
                i = () => {
                    let [e, c] = (0, D.useState)(!1), [a, i] = (0, D.useState)(""), {
                        toast: s
                    } = (0, x.pm)(), {
                        address: o
                    } = (0, E.m)(), {
                        data: u
                    } = (0, C.p)(), {
                        data: l,
                        refetch: p
                    } = (0, b.u)({
                        abi: n,
                        address: "0x93C8ef444A5713e0A5b9CEE1776D902Ad32fdd9d",
                        functionName: "hasClaimed",
                        args: [o]
                    }), y = (0, D.useMemo)(() => o && o in r.m ? r.m[o] : 0, [o]), {
                        data: m,
                        isLoading: v
                    } = (0, A.a)({
                        queryKey: ["merkle-tree-proof"],
                        queryFn: async () => {
                            let e = await fetch("/api/claim/proof"),
                                c = await e.json();
                            if (!e.ok) throw s({
                                title: "Verification Failed",
                                description: c.message || "Failed to verify claim eligibility",
                                variant: "destructive"
                            }), Error(c.message);
                            return c.data
                        },
                        enabled: !!o && y > 0 && !l,
                        retry: !1
                    });
                    (0, D.useEffect)(() => {
                        o ? l ? i("You have already claimed your tokens") : 0 === y ? i("You don't have any tokens available to claim") : v ? i("Verifying claim eligibility...") : !m && y > 0 ? i("Unable to verify claim eligibility") : i("Your tokens are ready to be claimed") : i("Please connect your wallet to check your claim status")
                    }, [o, y, l, v, m]);
                    let h = async () => {
                            c(!0);
                            try {
                                if (!o) throw Error("Please connect your wallet");
                                if (!u) throw Error("Wallet client not initialized");
                                if (!y) throw Error("No tokens available to claim");
                                if (!m) throw Error("Unable to verify claim eligibility");
                                let e = (0, F.v)(y.toString(), r.u),
                                    c = await u.writeContract({
                                        address: "0x93C8ef444A5713e0A5b9CEE1776D902Ad32fdd9d",
                                        abi: n,
                                        functionName: "claim",
                                        args: [o, e, m]
                                    }),
                                    a = await t.z.waitForTransactionReceipt({
                                        hash: c
                                    });
                                if (await p(), "success" !== a.status) throw Error("Transaction failed. Please try again.");
                                s({
                                    title: "Claim Successful! \uD83C\uDF89",
                                    description: "Your tokens have been successfully claimed and transferred to your wallet."
                                })
                            } catch (e) {
                                console.error("Claim error:", e), s({
                                    title: "Claim Failed",
                                    description: e instanceof Error ? e.message : "Failed to claim your tokens. Please try again later.",
                                    variant: "destructive"
                                })
                            } finally {
                                c(!1)
                            }
                        },
                        g = new Intl.NumberFormat("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }).format(y),
                        w = e || v || 0 === y || !1 !== l || !m;
                    return (0, d.jsx)("div", {
                        className: "flex flex-col items-center w-full gap-8",
                        children: (0, d.jsxs)("div", {
                            className: "w-[392px] flex flex-col gap-6",
                            children: [(0, d.jsxs)("div", {
                                className: "text-2xl text-center",
                                children: ["Your Claimable Balance: ", (0, d.jsx)("br", {}), g, " OPSEC"]
                            }), (0, d.jsxs)("div", {
                                className: "text-sm text-center text-gray-600",
                                children: [a, v && (0, d.jsx)("div", {
                                    className: "mt-2",
                                    children: (0, d.jsx)(f.Z, {
                                        color: "gray",
                                        size: 8
                                    })
                                })]
                            }), (0, d.jsxs)("div", {
                                className: "text-sm text-center",
                                children: [(0, d.jsx)("p", {
                                    className: "mb-2",
                                    children: "Note: Your tokens can be claimed once v2 is deployed. Please wait for further updates."
                                }), (0, d.jsxs)("p", {
                                    children: ["For claim eligibility questions, please contact support through", (0, d.jsx)("a", {
                                        href: "https://discord.com/invite/Jv9Xj72yaC",
                                        className: "mx-1 text-red-600 underline transition-colors duration-200 hover:text-red-800",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Discord"
                                    }), "for assistance."]
                                })]
                            }), (0, d.jsx)(B.z, {
                                disabled: w,
                                onClick: h,
                                className: "w-full py-2",
                                children: e ? (0, d.jsxs)("div", {
                                    className: "flex items-center justify-center gap-2",
                                    children: [(0, d.jsx)(f.Z, {
                                        color: "white",
                                        size: 8
                                    }), (0, d.jsx)("span", {
                                        children: "Processing claim..."
                                    })]
                                }) : v ? (0, d.jsxs)("div", {
                                    className: "flex items-center justify-center gap-2",
                                    children: [(0, d.jsx)(f.Z, {
                                        color: "white",
                                        size: 8
                                    }), (0, d.jsx)("span", {
                                        children: "Verifying eligibility..."
                                    })]
                                }) : l ? "Tokens Already Claimed" : 0 === y ? "No Tokens Available" : m ? "Claim Tokens" : "Verification Failed"
                            })]
                        })
                    })
                }
        },
        95168: function(e, c, a) {
            "use strict";
            a.d(c, {
                z: function() {
                    return C
                }
            });
            var d = a(92284),
                D = a(78572),
                f = a(69340),
                A = a(73918),
                F = a(24009);
            let E = (0, A.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline",
                            custom: "text-white font-[600] text-[16px] bg-[#F44336] hover:bg-[#fe3b2d] rounded-[12px] w-full"
                        },
                        size: {
                            default: "h-10 px-4 py-2",
                            sm: "h-9 rounded-md px-3",
                            lg: "h-11 rounded-md px-8",
                            icon: "h-10 w-10"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                C = D.forwardRef((e, c) => {
                    let {
                        className: a,
                        variant: D,
                        size: A,
                        asChild: C = !1,
                        ...b
                    } = e, B = C ? f.g7 : "button";
                    return (0, d.jsx)(B, {
                        className: (0, F.cn)(E({
                            variant: D,
                            size: A,
                            className: a
                        })),
                        ref: c,
                        ...b
                    })
                });
            C.displayName = "Button"
        },
        68919: function(e, c, a) {
            "use strict";
            a.d(c, {
                pm: function() {
                    return x
                }
            });
            var d = a(78572);
            let D = 0,
                f = new Map,
                A = e => {
                    if (f.has(e)) return;
                    let c = setTimeout(() => {
                        f.delete(e), b({
                            type: "REMOVE_TOAST",
                            toastId: e
                        })
                    }, 1e6);
                    f.set(e, c)
                },
                F = (e, c) => {
                    switch (c.type) {
                        case "ADD_TOAST":
                            return { ...e,
                                toasts: [c.toast, ...e.toasts].slice(0, 1)
                            };
                        case "UPDATE_TOAST":
                            return { ...e,
                                toasts: e.toasts.map(e => e.id === c.toast.id ? { ...e,
                                    ...c.toast
                                } : e)
                            };
                        case "DISMISS_TOAST":
                            {
                                let {
                                    toastId: a
                                } = c;
                                return a ? A(a) : e.toasts.forEach(e => {
                                    A(e.id)
                                }),
                                { ...e,
                                    toasts: e.toasts.map(e => e.id === a || void 0 === a ? { ...e,
                                        open: !1
                                    } : e)
                                }
                            }
                        case "REMOVE_TOAST":
                            if (void 0 === c.toastId) return { ...e,
                                toasts: []
                            };
                            return { ...e,
                                toasts: e.toasts.filter(e => e.id !== c.toastId)
                            }
                    }
                },
                E = [],
                C = {
                    toasts: []
                };

            function b(e) {
                C = F(C, e), E.forEach(e => {
                    e(C)
                })
            }

            function B(e) {
                let { ...c
                } = e, a = (D = (D + 1) % Number.MAX_SAFE_INTEGER).toString(), d = () => b({
                    type: "DISMISS_TOAST",
                    toastId: a
                });
                return b({
                    type: "ADD_TOAST",
                    toast: { ...c,
                        id: a,
                        open: !0,
                        onOpenChange: e => {
                            e || d()
                        }
                    }
                }), {
                    id: a,
                    dismiss: d,
                    update: e => b({
                        type: "UPDATE_TOAST",
                        toast: { ...e,
                            id: a
                        }
                    })
                }
            }

            function x() {
                let [e, c] = d.useState(C);
                return d.useEffect(() => (E.push(c), () => {
                    let e = E.indexOf(c);
                    e > -1 && E.splice(e, 1)
                }), [e]), { ...e,
                    toast: B,
                    dismiss: e => b({
                        type: "DISMISS_TOAST",
                        toastId: e
                    })
                }
            }
        },
        95026: function(e, c, a) {
            "use strict";
            a.d(c, {
                t: function() {
                    return F
                },
                z: function() {
                    return E
                }
            });
            var d = a(31546),
                D = a(6821),
                f = a(61232),
                A = a(51414);
            let F = Number("1") ? f.R : A.F,
                E = (0, d.v)({
                    chain: F,
                    transport: (0, D.d)("https://eth-mainnet.g.alchemy.com/v2/82iJJrfgo9nWeTeMFBAmAjuDQ-w736xj")
                })
        },
        24009: function(e, c, a) {
            "use strict";
            a.d(c, {
                cn: function() {
                    return f
                },
                p6: function() {
                    return E
                },
                sZ: function() {
                    return C
                },
                vh: function() {
                    return b
                },
                zs: function() {
                    return A
                }
            });
            var d = a(62856),
                D = a(7598);

            function f() {
                for (var e = arguments.length, c = Array(e), a = 0; a < e; a++) c[a] = arguments[a];
                return (0, D.m6)((0, d.W)(c))
            }
            let A = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                        c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                        a = "";
                    for (let d = 0; d < e; d++) a += c.charAt(Math.floor(Math.random() * c.length));
                    return a
                },
                F = new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                    timeStyle: "medium"
                }),
                E = e => F.format(new Date(e)).toString(),
                C = e => Math.round((Date.now() - new Date(e).getTime()) / 864e5),
                b = e => e.length <= 10 ? e : e.slice(0, 5) + "..." + e.slice(-5)
        },
        63411: function(e, c, a) {
            "use strict";
            a.d(c, {
                Z: function() {
                    return C
                }
            });
            var d = a(78572),
                D = {
                    cm: !0,
                    mm: !0,
                    in: !0,
                    px: !0,
                    pt: !0,
                    pc: !0,
                    em: !0,
                    ex: !0,
                    ch: !0,
                    rem: !0,
                    vw: !0,
                    vh: !0,
                    vmin: !0,
                    vmax: !0,
                    "%": !0
                };

            function f(e) {
                var c = function(e) {
                    if ("number" == typeof e) return {
                        value: e,
                        unit: "px"
                    };
                    var c, a = (e.match(/^[0-9.]*/) || "").toString();
                    c = a.includes(".") ? parseFloat(a) : parseInt(a, 10);
                    var d = (e.match(/[^0-9]*$/) || "").toString();
                    return D[d] ? {
                        value: c,
                        unit: d
                    } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(c, "px.")), {
                        value: c,
                        unit: "px"
                    })
                }(e);
                return "".concat(c.value).concat(c.unit)
            }
            var A = function() {
                    return (A = Object.assign || function(e) {
                        for (var c, a = 1, d = arguments.length; a < d; a++)
                            for (var D in c = arguments[a]) Object.prototype.hasOwnProperty.call(c, D) && (e[D] = c[D]);
                        return e
                    }).apply(this, arguments)
                },
                F = function(e, c) {
                    var a = {};
                    for (var d in e) Object.prototype.hasOwnProperty.call(e, d) && 0 > c.indexOf(d) && (a[d] = e[d]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var D = 0, d = Object.getOwnPropertySymbols(e); D < d.length; D++) 0 > c.indexOf(d[D]) && Object.prototype.propertyIsEnumerable.call(e, d[D]) && (a[d[D]] = e[d[D]]);
                    return a
                },
                E = function(e, c, a) {
                    var d = "react-spinners-".concat(e, "-").concat(a);
                    if ("undefined" == typeof window || !window.document) return d;
                    var D = document.createElement("style");
                    document.head.appendChild(D);
                    var f = D.sheet,
                        A = "\n    @keyframes ".concat(d, " {\n      ").concat(c, "\n    }\n  ");
                    return f && f.insertRule(A, 0), d
                }("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse"),
                C = function(e) {
                    var c = e.loading,
                        a = e.color,
                        D = void 0 === a ? "#000000" : a,
                        C = e.speedMultiplier,
                        b = void 0 === C ? 1 : C,
                        B = e.cssOverride,
                        x = e.size,
                        t = void 0 === x ? 15 : x,
                        n = e.margin,
                        r = void 0 === n ? 2 : n,
                        i = F(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]),
                        s = A({
                            display: "inherit"
                        }, void 0 === B ? {} : B),
                        o = function(e) {
                            return {
                                backgroundColor: D,
                                width: f(t),
                                height: f(t),
                                margin: f(r),
                                borderRadius: "100%",
                                display: "inline-block",
                                animation: "".concat(E, " ").concat(.75 / b, "s ").concat(.12 * e / b, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
                                animationFillMode: "both"
                            }
                        };
                    return void 0 === c || c ? d.createElement("span", A({
                        style: s
                    }, i), d.createElement("span", {
                        style: o(1)
                    }), d.createElement("span", {
                        style: o(2)
                    }), d.createElement("span", {
                        style: o(3)
                    })) : null
                }
        },
        53154: function(e, c, a) {
            "use strict";
            a.d(c, {
                v: function() {
                    return f
                }
            });
            var d = a(26045);
            class D extends d.G {
                constructor({
                    value: e
                }) {
                    super(`Number \`${e}\` is not a valid decimal number.`, {
                        name: "InvalidDecimalNumberError"
                    })
                }
            }

            function f(e, c) {
                if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e)) throw new D({
                    value: e
                });
                let [a, d = "0"] = e.split("."), f = a.startsWith("-");
                if (f && (a = a.slice(1)), d = d.replace(/(0+)$/, ""), 0 === c) 1 === Math.round(Number(`.${d}`)) && (a = `${BigInt(a)+1n}`), d = "";
                else if (d.length > c) {
                    let [e, D, f] = [d.slice(0, c - 1), d.slice(c - 1, c), d.slice(c)], A = Math.round(Number(`${D}.${f}`));
                    (d = A > 9 ? `${BigInt(e)+BigInt(1)}0`.padStart(e.length + 1, "0") : `${e}${A}`).length > c && (d = d.slice(1), a = `${BigInt(a)+1n}`), d = d.slice(0, c)
                } else d = d.padEnd(c, "0");
                return BigInt(`${f?"-":""}${a}${d}`)
            }
        },
        72468: function(e, c, a) {
            "use strict";
            a.d(c, {
                u: function() {
                    return E
                }
            });
            var d = a(28131),
                D = a(50973),
                f = a(7900),
                A = a(67127),
                F = a(55351);

            function E(e = {}) {
                let {
                    abi: c,
                    address: a,
                    functionName: E,
                    query: C = {}
                } = e, b = e.code, B = (0, F.Z)(e), x = (0, A.x)({
                    config: B
                }), t = function(e, c = {}) {
                    return {
                        async queryFn({
                            queryKey: a
                        }) {
                            let D = c.abi;
                            if (!D) throw Error("abi is required");
                            let {
                                functionName: f,
                                scopeKey: A,
                                ...F
                            } = a[1], E = (() => {
                                let e = a[1];
                                if (e.address) return {
                                    address: e.address
                                };
                                if (e.code) return {
                                    code: e.code
                                };
                                throw Error("address or code is required")
                            })();
                            if (!f) throw Error("functionName is required");
                            return (0, d.L)(e, {
                                abi: D,
                                functionName: f,
                                args: F.args,
                                ...E,
                                ...F
                            })
                        },
                        queryKey: function(e = {}) {
                            let {
                                abi: c,
                                ...a
                            } = e;
                            return ["readContract", (0, D.OP)(a)]
                        }(c)
                    }
                }(B, { ...e,
                    chainId: e.chainId ? ? x
                }), n = !!((a || b) && c && E && (C.enabled ? ? !0));
                return (0, f.aM)({ ...C,
                    ...t,
                    enabled: n,
                    structuralSharing: C.structuralSharing ? ? D.if
                })
            }
        }
    },
    function(e) {
        e.O(0, [5349, 2491, 934, 4768, 9124, 1177, 7013, 6620, 1744], function() {
            return e(e.s = 60495)
        }), _N_E = e.O()
    }
]);