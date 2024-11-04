(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5654], {
        80372: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 57957))
        },
        57957: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            });
            var r = n(92284),
                s = n(78572),
                a = n(62491),
                i = n(44818),
                o = n(62403),
                l = n(26828),
                c = n(20615),
                d = n.n(c),
                u = n(95168),
                p = n(10230),
                x = n(96258),
                m = n(65893),
                f = n(68919);
            let h = e => {
                var t, n;
                let {
                    open: i,
                    onPurchaseComplete: o,
                    chain: c,
                    onOpenChange: h,
                    ...g
                } = e, [b, v] = (0, s.useState)(null !== (t = null == c ? void 0 : c.floorPrice) && void 0 !== t ? t : 0), {
                    toast: j
                } = (0, f.pm)(), {
                    data: y,
                    refetch: N
                } = (0, a.a)({
                    queryKey: ["credits/balance"],
                    queryFn: () => fetch("/api/credits/balance").then(e => e.json())
                });
                (0, s.useEffect)(() => {
                    var e;
                    v(null !== (e = null == c ? void 0 : c.floorPrice) && void 0 !== e ? e : 0)
                }, [c, i]);
                let w = Number(null == y ? void 0 : y.balance) < Number(b),
                    {
                        mutate: S,
                        isPending: A
                    } = (0, m.D)({
                        mutationFn: () => fetch("/api/payment", {
                            method: "POST",
                            body: JSON.stringify({
                                id: null == c ? void 0 : c.id,
                                payAmount: b
                            })
                        }).then(e => {
                            null == h || h(!1), e.ok ? j({
                                title: "Node purchased"
                            }) : e.json().then(e => {
                                j({
                                    title: "An error occurred",
                                    description: e.message
                                })
                            }), o(), N()
                        })
                    });
                return (0, r.jsx)(l.Vq, { ...g,
                    open: i,
                    onOpenChange: h,
                    children: c && (0, r.jsxs)(l.cZ, {
                        className: "bg-[#18181B] border-none rounded-[24px] p-8 w-[350px] md:w-[450px]",
                        children: [(0, r.jsx)(l.$N, {
                            className: "text-white text-center font-[600] text-[28px]",
                            children: "Buy a node"
                        }), (0, r.jsx)(l.Be, {
                            className: "text-[#54597C] w-full text-center font-[500] text-[16px]",
                            children: (0, r.jsx)("div", {
                                className: "flex flex-col items-center gap-4",
                                children: (0, r.jsx)(d(), {
                                    src: "/icons/blockchain/".concat(c.name.toLowerCase().replace(/ /g, "-"), ".png"),
                                    alt: "",
                                    width: 64,
                                    height: 64,
                                    className: "mt-10 mb-4"
                                })
                            })
                        }), (0, r.jsxs)("div", {
                            className: "text-center",
                            children: [(0, r.jsxs)("p", {
                                className: "flex",
                                children: [(0, r.jsx)("strong", {
                                    className: "text-zinc-500 mr-5 w-1/2 text-right",
                                    children: "Chain Price"
                                }), (0, r.jsx)("span", {
                                    children: c.price
                                })]
                            }), (0, r.jsxs)("p", {
                                className: "flex",
                                children: [(0, r.jsx)("strong", {
                                    className: "text-zinc-500 mr-5 w-1/2 text-right",
                                    children: "Credits to be paid"
                                }), (0, r.jsx)("span", {
                                    children: b
                                })]
                            }), (0, r.jsxs)("p", {
                                className: "flex",
                                children: [(0, r.jsx)("strong", {
                                    className: "text-zinc-500 mr-5 w-1/2 text-right",
                                    children: "% Ownership"
                                }), (0, r.jsx)("span", {
                                    children: Math.floor(100 * b / c.price)
                                })]
                            })]
                        }), (0, r.jsxs)("form", {
                            className: "space-y-4 text-center",
                            children: [(0, r.jsx)(p.i, {
                                value: [b],
                                min: null !== (n = c.floorPrice) && void 0 !== n ? n : 1,
                                max: c.priceLimit,
                                step: 1,
                                className: "my-4",
                                onValueChange: e => {
                                    let [t] = e;
                                    return v(t)
                                }
                            }), (0, r.jsx)("p", {
                                className: "text-center text-yellow-600",
                                children: w ? "Insufficient credit balance" : (0, r.jsx)(r.Fragment, {
                                    children: "\xa0"
                                })
                            }), (0, r.jsxs)(u.z, {
                                type: "button",
                                onClick: () => S(),
                                variant: "custom",
                                disabled: A || w,
                                children: [A && (0, r.jsx)(x.BGW, {
                                    className: "mr-2 animate-spin"
                                }), "Purchase"]
                            })]
                        })]
                    })
                })
            };
            var g = n(75305),
                b = n(64055);
            let v = [{
                id: 1,
                name: "Myria",
                description: "Myria is a gaming ecosystem powered by Myria's Ethereum L2 scaling solution."
            }, {
                id: 2,
                name: "Streamr",
                description: "Decentralized data broadcasting. Streamr hyperscales live data for AI, video & DePIN via secure P2P distribution. $DATA. Build with us: http://linktr.ee/Streamr"
            }, {
                id: 3,
                name: "Nexis",
                description: "A layer-1 data infrastructure built with the speed, scalability, and affordability to power the future of decentralized Artificial Intelligence (AI) blockchain predictions. Welcome to the Nexis era"
            }, {
                id: 4,
                name: "Cartesi",
                description: "Scaling Computation. Transcending EVM Limitations."
            }];
            var j = () => {
                let [e, t] = (0, s.useState)(), {
                    isPending: n,
                    data: l,
                    refetch: c
                } = (0, a.a)({
                    queryKey: ["server/list"],
                    queryFn: () => fetch("/api/server/list").then(e => e.json())
                });
                return n ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: "pb-6",
                        children: (0, r.jsxs)("div", {
                            className: "w-full flex px-[20px] md:px-[34px] py-6 rounded-[24px] justify-center flex-col bg-[url(/backgrounds/marketplace.jpg)] bg-center bg-cover bg-no-repeat h-[172px]",
                            children: [(0, r.jsx)(g.O, {
                                className: "rounded-lg w-[12px] h-[32px] mr-2 block"
                            }), (0, r.jsx)("h1", {
                                className: "uppercase text-md font-[300]",
                                children: "nodes available"
                            })]
                        })
                    }), (0, r.jsxs)("div", {
                        className: "grid items-center grid-cols-1 gap-8 pt-2 md:grid-cols-3",
                        children: [(0, r.jsx)(g.O, {
                            className: "rounded-lg w-[220] h-[320px] mr-2 block"
                        }), (0, r.jsx)(g.O, {
                            className: "rounded-lg w-[220] h-[320px] mr-2 block"
                        }), (0, r.jsx)(g.O, {
                            className: "rounded-lg w-[220] h-[320px] mr-2 block"
                        })]
                    })]
                }) : l ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: "pb-6",
                        children: (0, r.jsxs)("div", {
                            className: "w-full flex px-[20px] md:px-[34px] py-6 rounded-[24px] justify-center flex-col bg-[url(/backgrounds/marketplace.jpg)] bg-center bg-cover bg-no-repeat h-[172px]",
                            children: [(0, r.jsx)("h1", {
                                className: "uppercase text-[32px] font-[900]",
                                children: l.chains.length === l.chains.filter(e => e.disabled).length ? 0 : l.capacity
                            }), (0, r.jsx)("h1", {
                                className: "uppercase text-md font-[300]",
                                children: "nodes available"
                            })]
                        })
                    }), (0, r.jsxs)("div", {
                        className: "grid items-center grid-cols-1 gap-8 pt-2 md:grid-cols-3 flex-1 overflow-y-auto",
                        children: [l.chains.map(e => !v.map(e => e.name.toLowerCase()).includes(e.name.toLowerCase()) && (0, r.jsx)(i.O, {
                            name: e.name,
                            description: e.description,
                            payType: e.payType,
                            onBuy: () => t(e),
                            disabled: e.disabled,
                            noCapacity: 0 === l.capacity
                        }, e.id)), v.map(e => (0, r.jsx)(i.O, {
                            name: e.name,
                            description: e.description,
                            isComing: !0
                        }, e.id)), (0, r.jsx)(o.B, {
                            open: !!e && e.payType === b.PAY_TYPE.FULL,
                            chain: e,
                            onOpenChange: () => t(void 0),
                            onPurchaseComplete: () => c()
                        }), (0, r.jsx)(h, {
                            open: !!e && e.payType === b.PAY_TYPE.PARTIAL,
                            chain: e,
                            onOpenChange: () => t(void 0),
                            onPurchaseComplete: () => c()
                        })]
                    })]
                }) : (0, r.jsx)(r.Fragment, {
                    children: "No data"
                })
            }
        },
        91898: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return r
                }
            });
            let r = e => {
                for (let [t, n] of [
                        [1e3, 2],
                        [1e4, 9],
                        [5e4, 15],
                        [1e5, 24],
                        [2e5, 36],
                        [5e5, 48],
                        [1e6, 60],
                        [1 / 0, 75]
                    ])
                    if (e <= t) return n;
                return 75
            };
            t.Z = [
                [1, 1],
                [6, 5.5],
                [12, 10]
            ]
        },
        44818: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return f
                }
            });
            var r = n(92284),
                s = n(20615),
                a = n.n(s);
            n(78572);
            var i = n(95168),
                o = n(4441),
                l = n(89131),
                c = n.n(l),
                d = n(73918),
                u = n(24009);
            let p = (0, d.j)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
                variants: {
                    variant: {
                        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
                        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
                        outline: "text-foreground"
                    }
                },
                defaultVariants: {
                    variant: "default"
                }
            });

            function x(e) {
                let {
                    className: t,
                    variant: n,
                    ...s
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, u.cn)(p({
                        variant: n
                    }), t),
                    ...s
                })
            }
            var m = n(64055);
            let f = e => {
                let {
                    id: t,
                    name: n,
                    created: s,
                    description: l,
                    disabled: d,
                    status: u,
                    expireInDays: p,
                    payType: f,
                    isComing: h,
                    noCapacity: g,
                    onBuy: b
                } = e;
                return (0, r.jsxs)("div", {
                    className: "col-span-1 p-4 rounded-[16px] backdrop:blur-[100px] overflow-hidden flex flex-col gap-4 border border-zinc-600 h-full",
                    children: [(0, r.jsx)("div", {
                        className: "flex bg-[url(/image/node.png)] rounded-[16px] bg-center bg-cover bg-no-repeat h-[172px] justify-center items-center ",
                        children: (0, r.jsx)(a(), {
                            src: "/icons/blockchain/".concat(n.toLowerCase().replace(/ /g, "-"), ".png"),
                            alt: "",
                            width: 120,
                            height: 120,
                            className: "object-contain pt-3 m-auto"
                        })
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col gap-2 flex-1",
                        children: [(0, r.jsxs)("div", {
                            className: "flex justify-between items-center",
                            children: [(0, r.jsx)("h1", {
                                className: "text-white font-[600] text-[16px]",
                                children: n
                            }), (0, r.jsxs)("div", {
                                className: "flex space-x-2",
                                children: [void 0 !== p && p < Number("10") && (0, r.jsxs)(x, {
                                    children: [p, " days left"]
                                }), f === m.PAY_TYPE.PARTIAL && (0, r.jsx)(x, {
                                    children: "PARTIAL"
                                }), u && (0, r.jsx)(x, {
                                    children: u
                                })]
                            })]
                        }), (0, r.jsx)("p", {
                            className: "text-[#BDBDBD] font-[500] text-[12px] line-clamp-2",
                            children: l
                        }), (0, r.jsx)("p", {
                            className: "text-[#BDBDBD] font-[500] text-[12px]",
                            children: s
                        })]
                    }), d ? (0, r.jsx)(i.z, {
                        type: "button",
                        variant: "custom",
                        disabled: !0,
                        children: "Sold out"
                    }) : h ? (0, r.jsx)(i.z, {
                        type: "button",
                        variant: "custom",
                        disabled: !0,
                        children: "Coming Soon"
                    }) : b ? (0, r.jsxs)(i.z, {
                        type: "button",
                        variant: "custom",
                        onClick: b,
                        disabled: g,
                        children: ["Deploy", (0, r.jsx)(o.dhL, {
                            className: "ml-2 font-[300]"
                        })]
                    }) : void 0 !== t && (0, r.jsx)(i.z, {
                        asChild: !0,
                        variant: "custom",
                        children: (0, r.jsxs)(c(), {
                            href: "nodes/".concat(t),
                            children: ["Details", (0, r.jsx)(o.dhL, {
                                className: "ml-2 font-[300]"
                            })]
                        })
                    })]
                })
            }
        },
        62403: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return g
                }
            });
            var r = n(92284),
                s = n(78572),
                a = n(26828),
                i = n(20615),
                o = n.n(i),
                l = n(66509),
                c = n(95168),
                d = n(96258),
                u = n(62491),
                p = n(65893),
                x = n(68919),
                m = n(62856),
                f = n(91898),
                h = n(22209);
            let g = e => {
                let {
                    open: t,
                    nodeId: n,
                    onPurchaseComplete: i,
                    chain: g,
                    onOpenChange: b,
                    ...v
                } = e, [j, y] = (0, s.useState)(""), [N, w] = (0, s.useState)(0), {
                    toast: S
                } = (0, x.pm)(), A = (0, h.useRouter)(), {
                    data: T,
                    refetch: k
                } = (0, u.a)({
                    queryKey: ["credits/balance"],
                    queryFn: () => fetch("/api/credits/balance").then(e => e.json())
                });
                (0, s.useEffect)(() => {
                    w(0), y("")
                }, [t]);
                let [, C] = f.Z[N], O = Number(null == T ? void 0 : T.balance) < Number(null == g ? void 0 : g.price) * C, {
                    mutate: D,
                    isPending: P
                } = (0, p.D)({
                    mutationFn: e => fetch("/api/payment", {
                        method: void 0 === n ? "POST" : "PUT",
                        body: JSON.stringify({
                            wallet: e,
                            id: null != n ? n : null == g ? void 0 : g.id,
                            plan: N
                        })
                    }).then(e => {
                        null == b || b(!1), e.ok ? (S({
                            title: void 0 === n ? "Node purchased" : "Subscription extended"
                        }), e.json().then(e => A.push("/nodes/".concat(e.nodeId)))) : S({
                            title: "An error occurred"
                        }), i(), k()
                    })
                });
                return (0, r.jsx)(a.Vq, { ...v,
                    open: t,
                    onOpenChange: b,
                    children: g && (0, r.jsxs)(a.cZ, {
                        className: "bg-[#18181B] border-none rounded-[24px] p-8 w-[350px] md:w-[450px]",
                        children: [(0, r.jsx)(a.$N, {
                            className: "text-white text-center font-[600] text-[28px]",
                            children: void 0 === n ? "Buy a node" : "Extend your subscription"
                        }), (0, r.jsx)(a.Be, {
                            className: "text-[#54597C] w-full text-center font-[500] text-[16px]",
                            children: (0, r.jsxs)("div", {
                                className: "flex flex-col items-center gap-4",
                                children: [(0, r.jsx)(o(), {
                                    src: "/icons/blockchain/".concat(g.name.toLowerCase().replace(/ /g, "-"), ".png"),
                                    alt: "",
                                    width: 64,
                                    height: 64,
                                    className: "mt-10 mb-4"
                                }), (0, r.jsx)("div", {
                                    className: "flex w-full gap-2 flex-column",
                                    children: f.Z.map((e, t) => {
                                        let [n, s] = e;
                                        return (0, r.jsxs)("div", {
                                            onClick: () => w(t),
                                            className: (0, m.Z)("border-[#F44336] w-1/3 border-solid border-2 p-3 cursor-pointer hover:border-red-700", N === t ? "border-green-400" : null),
                                            children: [(0, r.jsx)("p", {
                                                className: "text-6xl",
                                                children: n
                                            }), (0, r.jsx)("p", {
                                                children: t > 0 ? "Months" : "Month"
                                            }), (0, r.jsxs)("p", {
                                                children: [g.price * s, " credits"]
                                            }), t > 0 && (0, r.jsxs)("small", {
                                                children: ["Saves\xa0", g.price * n - g.price * s, "\xa0credits"]
                                            })]
                                        }, n)
                                    })
                                }), (0, r.jsxs)("p", {
                                    className: "text-[#F44336] mb-10",
                                    children: [(0, r.jsx)("strong", {
                                        children: "1x"
                                    }), " ", g.name, " ", (0, r.jsx)("span", {
                                        className: "text-zinc-500",
                                        children: "node for"
                                    }), " ", (0, r.jsx)("strong", {
                                        children: g.price
                                    }), " ", (0, r.jsx)("span", {
                                        className: "text-zinc-500",
                                        children: "credits"
                                    })]
                                })]
                            })
                        }), O && (0, r.jsx)("p", {
                            className: "text-center text-yellow-600",
                            children: "Insufficient credit balance"
                        }), (0, r.jsxs)("form", {
                            className: "flex flex-col items-center justify-center gap-8 px-8",
                            children: [g.hasWallet && void 0 === n && !1 == O && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("label", {
                                    children: "Avail" === g.name ? "Enter your node name" : "Enter your wallet address"
                                }), (0, r.jsx)(l.I, {
                                    placeholder: "Avail" === g.name ? "my-node" : "0x56464... (address to receive funds)",
                                    type: "text",
                                    value: j,
                                    onChange: e => {
                                        let t = e.target.value,
                                            n = "Avail" === g.name ? t.replace(/\s+/g, "-") : t;
                                        y(n)
                                    },
                                    className: "border border-[#54597C] rounded-[12px] w-full bg-[#1D202D] placeholder:text-[#54597C]"
                                })]
                            }), (0, r.jsxs)(c.z, {
                                type: "button",
                                onClick: () => D(j),
                                variant: "custom",
                                disabled: P || O || g.hasWallet && !j,
                                children: [P && (0, r.jsx)(d.BGW, {
                                    className: "mr-2 animate-spin"
                                }), void 0 === n ? "Purchase" : "Extend Subscription"]
                            })]
                        })]
                    })
                })
            }
        },
        95168: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return c
                }
            });
            var r = n(92284),
                s = n(78572),
                a = n(69340),
                i = n(73918),
                o = n(24009);
            let l = (0, i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
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
                c = s.forwardRef((e, t) => {
                    let {
                        className: n,
                        variant: s,
                        size: i,
                        asChild: c = !1,
                        ...d
                    } = e, u = c ? a.g7 : "button";
                    return (0, r.jsx)(u, {
                        className: (0, o.cn)(l({
                            variant: s,
                            size: i,
                            className: n
                        })),
                        ref: t,
                        ...d
                    })
                });
            c.displayName = "Button"
        },
        26828: function(e, t, n) {
            "use strict";
            n.d(t, {
                $N: function() {
                    return x
                },
                Be: function() {
                    return m
                },
                Vq: function() {
                    return l
                },
                cZ: function() {
                    return u
                },
                fK: function() {
                    return p
                }
            });
            var r = n(92284),
                s = n(78572),
                a = n(63744),
                i = n(94752),
                o = n(24009);
            let l = a.fC;
            a.xz;
            let c = a.h_;
            a.x8;
            let d = s.forwardRef((e, t) => {
                let {
                    className: n,
                    ...s
                } = e;
                return (0, r.jsx)(a.aV, {
                    ref: t,
                    className: (0, o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", n),
                    ...s
                })
            });
            d.displayName = a.aV.displayName;
            let u = s.forwardRef((e, t) => {
                let {
                    className: n,
                    children: s,
                    ...l
                } = e;
                return (0, r.jsxs)(c, {
                    children: [(0, r.jsx)(d, {}), (0, r.jsxs)(a.VY, {
                        ref: t,
                        className: (0, o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-[24px]", n),
                        ...l,
                        children: [s, (0, r.jsxs)(a.x8, {
                            className: "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                            children: [(0, r.jsx)(i.Z, {
                                className: "h-4 w-4 text-white"
                            }), (0, r.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })]
                        })]
                    })]
                })
            });
            u.displayName = a.VY.displayName;
            let p = e => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, o.cn)("flex flex-col space-y-1.5 text-center sm:text-left", t),
                    ...n
                })
            };
            p.displayName = "DialogHeader";
            let x = s.forwardRef((e, t) => {
                let {
                    className: n,
                    ...s
                } = e;
                return (0, r.jsx)(a.Dx, {
                    ref: t,
                    className: (0, o.cn)("text-lg font-semibold leading-none tracking-tight", n),
                    ...s
                })
            });
            x.displayName = a.Dx.displayName;
            let m = s.forwardRef((e, t) => {
                let {
                    className: n,
                    ...s
                } = e;
                return (0, r.jsx)(a.dk, {
                    ref: t,
                    className: (0, o.cn)("text-sm text-muted-foreground", n),
                    ...s
                })
            });
            m.displayName = a.dk.displayName
        },
        66509: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return i
                }
            });
            var r = n(92284),
                s = n(78572),
                a = n(24009);
            let i = s.forwardRef((e, t) => {
                let {
                    className: n,
                    type: s,
                    ...i
                } = e;
                return (0, r.jsx)("input", {
                    type: s,
                    className: (0, a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", n),
                    ref: t,
                    ...i
                })
            });
            i.displayName = "Input"
        },
        75305: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return a
                }
            });
            var r = n(92284),
                s = n(24009);

            function a(e) {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, s.cn)("animate-pulse rounded-md bg-primary/10", t),
                    ...n
                })
            }
        },
        10230: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return o
                }
            });
            var r = n(92284),
                s = n(78572),
                a = n(3116),
                i = n(24009);
            let o = s.forwardRef((e, t) => {
                let {
                    className: n,
                    ...s
                } = e;
                return (0, r.jsxs)(a.fC, {
                    ref: t,
                    className: (0, i.cn)("relative flex w-full touch-none select-none items-center", n),
                    ...s,
                    children: [(0, r.jsx)(a.fQ, {
                        className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
                        children: (0, r.jsx)(a.e6, {
                            className: "absolute h-full bg-primary"
                        })
                    }), (0, r.jsx)(a.bU, {
                        className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    })]
                })
            });
            o.displayName = a.fC.displayName
        },
        68919: function(e, t, n) {
            "use strict";
            n.d(t, {
                pm: function() {
                    return p
                }
            });
            var r = n(78572);
            let s = 0,
                a = new Map,
                i = e => {
                    if (a.has(e)) return;
                    let t = setTimeout(() => {
                        a.delete(e), d({
                            type: "REMOVE_TOAST",
                            toastId: e
                        })
                    }, 1e6);
                    a.set(e, t)
                },
                o = (e, t) => {
                    switch (t.type) {
                        case "ADD_TOAST":
                            return { ...e,
                                toasts: [t.toast, ...e.toasts].slice(0, 1)
                            };
                        case "UPDATE_TOAST":
                            return { ...e,
                                toasts: e.toasts.map(e => e.id === t.toast.id ? { ...e,
                                    ...t.toast
                                } : e)
                            };
                        case "DISMISS_TOAST":
                            {
                                let {
                                    toastId: n
                                } = t;
                                return n ? i(n) : e.toasts.forEach(e => {
                                    i(e.id)
                                }),
                                { ...e,
                                    toasts: e.toasts.map(e => e.id === n || void 0 === n ? { ...e,
                                        open: !1
                                    } : e)
                                }
                            }
                        case "REMOVE_TOAST":
                            if (void 0 === t.toastId) return { ...e,
                                toasts: []
                            };
                            return { ...e,
                                toasts: e.toasts.filter(e => e.id !== t.toastId)
                            }
                    }
                },
                l = [],
                c = {
                    toasts: []
                };

            function d(e) {
                c = o(c, e), l.forEach(e => {
                    e(c)
                })
            }

            function u(e) {
                let { ...t
                } = e, n = (s = (s + 1) % Number.MAX_SAFE_INTEGER).toString(), r = () => d({
                    type: "DISMISS_TOAST",
                    toastId: n
                });
                return d({
                    type: "ADD_TOAST",
                    toast: { ...t,
                        id: n,
                        open: !0,
                        onOpenChange: e => {
                            e || r()
                        }
                    }
                }), {
                    id: n,
                    dismiss: r,
                    update: e => d({
                        type: "UPDATE_TOAST",
                        toast: { ...e,
                            id: n
                        }
                    })
                }
            }

            function p() {
                let [e, t] = r.useState(c);
                return r.useEffect(() => (l.push(t), () => {
                    let e = l.indexOf(t);
                    e > -1 && l.splice(e, 1)
                }), [e]), { ...e,
                    toast: u,
                    dismiss: e => d({
                        type: "DISMISS_TOAST",
                        toastId: e
                    })
                }
            }
        },
        24009: function(e, t, n) {
            "use strict";
            n.d(t, {
                cn: function() {
                    return a
                },
                p6: function() {
                    return l
                },
                sZ: function() {
                    return c
                },
                vh: function() {
                    return d
                },
                zs: function() {
                    return i
                }
            });
            var r = n(62856),
                s = n(7598);

            function a() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, s.m6)((0, r.W)(t))
            }
            let i = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                        t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                        n = "";
                    for (let r = 0; r < e; r++) n += t.charAt(Math.floor(Math.random() * t.length));
                    return n
                },
                o = new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                    timeStyle: "medium"
                }),
                l = e => o.format(new Date(e)).toString(),
                c = e => Math.round((Date.now() - new Date(e).getTime()) / 864e5),
                d = e => e.length <= 10 ? e : e.slice(0, 5) + "..." + e.slice(-5)
        }
    },
    function(e) {
        e.O(0, [2037, 9404, 5349, 2491, 7208, 328, 3758, 9537, 4055, 3116, 9893, 7013, 6620, 1744], function() {
            return e(e.s = 80372)
        }), _N_E = e.O()
    }
]);