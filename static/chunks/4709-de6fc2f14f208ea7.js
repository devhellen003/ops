(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4709], {
        68402: function() {},
        76734: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__gilroy_f1c62c', '__gilroy_Fallback_f1c62c'"
                },
                className: "__className_f1c62c"
            }
        },
        12247: function(e, t, r) {
            "use strict";
            r.d(t, {
                B: function() {
                    return u
                }
            });
            var n = r(78572),
                a = r(99058),
                i = r(79777),
                o = r(69340),
                s = r(92284);

            function u(e) {
                let t = e + "CollectionProvider",
                    [r, u] = (0, a.b)(t),
                    [l, c] = r(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    d = e => {
                        let {
                            scope: t,
                            children: r
                        } = e, a = n.useRef(null), i = n.useRef(new Map).current;
                        return (0, s.jsx)(l, {
                            scope: t,
                            itemMap: i,
                            collectionRef: a,
                            children: r
                        })
                    };
                d.displayName = t;
                let f = e + "CollectionSlot",
                    h = n.forwardRef((e, t) => {
                        let {
                            scope: r,
                            children: n
                        } = e, a = c(f, r), u = (0, i.e)(t, a.collectionRef);
                        return (0, s.jsx)(o.g7, {
                            ref: u,
                            children: n
                        })
                    });
                h.displayName = f;
                let p = e + "CollectionItemSlot",
                    m = "data-radix-collection-item",
                    g = n.forwardRef((e, t) => {
                        let {
                            scope: r,
                            children: a,
                            ...u
                        } = e, l = n.useRef(null), d = (0, i.e)(t, l), f = c(p, r);
                        return n.useEffect(() => (f.itemMap.set(l, {
                            ref: l,
                            ...u
                        }), () => void f.itemMap.delete(l))), (0, s.jsx)(o.g7, {
                            [m]: "",
                            ref: d,
                            children: a
                        })
                    });
                return g.displayName = p, [{
                    Provider: d,
                    Slot: h,
                    ItemSlot: g
                }, function(t) {
                    let r = c(e + "CollectionConsumer", t),
                        a = n.useCallback(() => {
                            let e = r.collectionRef.current;
                            if (!e) return [];
                            let t = Array.from(e.querySelectorAll(`[${m}]`)),
                                n = Array.from(r.itemMap.values()),
                                a = n.sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current));
                            return a
                        }, [r.collectionRef, r.itemMap]);
                    return a
                }, u]
            }
        },
        99058: function(e, t, r) {
            "use strict";
            r.d(t, {
                b: function() {
                    return i
                }
            });
            var n = r(78572),
                a = r(92284);

            function i(e, t = []) {
                let r = [],
                    i = () => {
                        let t = r.map(e => n.createContext(e));
                        return function(r) {
                            let a = r ? .[e] || t;
                            return n.useMemo(() => ({
                                [`__scope${e}`]: { ...r,
                                    [e]: a
                                }
                            }), [r, a])
                        }
                    };
                return i.scopeName = e, [function(t, i) {
                    let o = n.createContext(i),
                        s = r.length;

                    function u(t) {
                        let {
                            scope: r,
                            children: i,
                            ...u
                        } = t, l = r ? .[e][s] || o, c = n.useMemo(() => u, Object.values(u));
                        return (0, a.jsx)(l.Provider, {
                            value: c,
                            children: i
                        })
                    }
                    return r = [...r, i], u.displayName = t + "Provider", [u, function(r, a) {
                        let u = a ? .[e][s] || o,
                            l = n.useContext(u);
                        if (l) return l;
                        if (void 0 !== i) return i;
                        throw Error(`\`${r}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let r = () => {
                        let r = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let a = r.reduce((t, {
                                useScope: r,
                                scopeName: n
                            }) => {
                                let a = r(e),
                                    i = a[`__scope${n}`];
                                return { ...t,
                                    ...i
                                }
                            }, {});
                            return n.useMemo(() => ({
                                [`__scope${t.scopeName}`]: a
                            }), [a])
                        }
                    };
                    return r.scopeName = t.scopeName, r
                }(i, ...t)]
            }
        },
        43880: function(e, t, r) {
            "use strict";
            r.d(t, {
                aU: function() {
                    return et
                },
                x8: function() {
                    return er
                },
                dk: function() {
                    return ee
                },
                zt: function() {
                    return X
                },
                fC: function() {
                    return G
                },
                Dx: function() {
                    return J
                },
                l_: function() {
                    return Y
                }
            });
            var n = r(78572),
                a = r(36785),
                i = r(69237),
                o = r(79777),
                s = r(12247),
                u = r(50300),
                l = r(33033),
                c = r(88688),
                d = r(90703),
                f = r(88950),
                h = r(61855),
                p = r(64444),
                m = r(49030),
                g = r(92284),
                y = n.forwardRef((e, t) => (0, g.jsx)(f.WV.span, { ...e,
                    ref: t,
                    style: {
                        position: "absolute",
                        border: 0,
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        wordWrap: "normal",
                        ...e.style
                    }
                }));
            y.displayName = "VisuallyHidden";
            var v = "ToastProvider",
                [w, b, x] = (0, s.B)("Toast"),
                [C, E] = (0, u.b)("Toast", [x]),
                [F, P] = C(v),
                T = e => {
                    let {
                        __scopeToast: t,
                        label: r = "Notification",
                        duration: a = 5e3,
                        swipeDirection: i = "right",
                        swipeThreshold: o = 50,
                        children: s
                    } = e, [u, l] = n.useState(null), [c, d] = n.useState(0), f = n.useRef(!1), h = n.useRef(!1);
                    return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${v}\`. Expected non-empty \`string\`.`), (0, g.jsx)(w.Provider, {
                        scope: t,
                        children: (0, g.jsx)(F, {
                            scope: t,
                            label: r,
                            duration: a,
                            swipeDirection: i,
                            swipeThreshold: o,
                            toastCount: c,
                            viewport: u,
                            onViewportChange: l,
                            onToastAdd: n.useCallback(() => d(e => e + 1), []),
                            onToastRemove: n.useCallback(() => d(e => e - 1), []),
                            isFocusedToastEscapeKeyDownRef: f,
                            isClosePausedRef: h,
                            children: s
                        })
                    })
                };
            T.displayName = v;
            var M = "ToastViewport",
                R = ["F8"],
                D = "toast.viewportPause",
                A = "toast.viewportResume",
                S = n.forwardRef((e, t) => {
                    let {
                        __scopeToast: r,
                        hotkey: a = R,
                        label: i = "Notifications ({hotkey})",
                        ...s
                    } = e, u = P(M, r), c = b(r), d = n.useRef(null), h = n.useRef(null), p = n.useRef(null), m = n.useRef(null), y = (0, o.e)(t, m, u.onViewportChange), v = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = u.toastCount > 0;
                    n.useEffect(() => {
                        let e = e => {
                            let t = 0 !== a.length && a.every(t => e[t] || e.code === t);
                            t && m.current ? .focus()
                        };
                        return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                    }, [a]), n.useEffect(() => {
                        let e = d.current,
                            t = m.current;
                        if (x && e && t) {
                            let r = () => {
                                    if (!u.isClosePausedRef.current) {
                                        let e = new CustomEvent(D);
                                        t.dispatchEvent(e), u.isClosePausedRef.current = !0
                                    }
                                },
                                n = () => {
                                    if (u.isClosePausedRef.current) {
                                        let e = new CustomEvent(A);
                                        t.dispatchEvent(e), u.isClosePausedRef.current = !1
                                    }
                                },
                                a = t => {
                                    let r = !e.contains(t.relatedTarget);
                                    r && n()
                                },
                                i = () => {
                                    let t = e.contains(document.activeElement);
                                    t || n()
                                };
                            return e.addEventListener("focusin", r), e.addEventListener("focusout", a), e.addEventListener("pointermove", r), e.addEventListener("pointerleave", i), window.addEventListener("blur", r), window.addEventListener("focus", n), () => {
                                e.removeEventListener("focusin", r), e.removeEventListener("focusout", a), e.removeEventListener("pointermove", r), e.removeEventListener("pointerleave", i), window.removeEventListener("blur", r), window.removeEventListener("focus", n)
                            }
                        }
                    }, [x, u.isClosePausedRef]);
                    let C = n.useCallback(({
                        tabbingDirection: e
                    }) => {
                        let t = c(),
                            r = t.map(t => {
                                let r = t.ref.current,
                                    n = [r, ... function(e) {
                                        let t = [],
                                            r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                                                acceptNode: e => {
                                                    let t = "INPUT" === e.tagName && "hidden" === e.type;
                                                    return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                                                }
                                            });
                                        for (; r.nextNode();) t.push(r.currentNode);
                                        return t
                                    }(r)];
                                return "forwards" === e ? n : n.reverse()
                            });
                        return ("forwards" === e ? r.reverse() : r).flat()
                    }, [c]);
                    return n.useEffect(() => {
                        let e = m.current;
                        if (e) {
                            let t = t => {
                                let r = t.altKey || t.ctrlKey || t.metaKey,
                                    n = "Tab" === t.key && !r;
                                if (n) {
                                    let r = document.activeElement,
                                        n = t.shiftKey,
                                        a = t.target === e;
                                    if (a && n) {
                                        h.current ? .focus();
                                        return
                                    }
                                    let i = C({
                                            tabbingDirection: n ? "backwards" : "forwards"
                                        }),
                                        o = i.findIndex(e => e === r);
                                    U(i.slice(o + 1)) ? t.preventDefault() : n ? h.current ? .focus() : p.current ? .focus()
                                }
                            };
                            return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
                        }
                    }, [c, C]), (0, g.jsxs)(l.I0, {
                        ref: d,
                        role: "region",
                        "aria-label": i.replace("{hotkey}", v),
                        tabIndex: -1,
                        style: {
                            pointerEvents: x ? void 0 : "none"
                        },
                        children: [x && (0, g.jsx)(I, {
                            ref: h,
                            onFocusFromOutsideViewport: () => {
                                let e = C({
                                    tabbingDirection: "forwards"
                                });
                                U(e)
                            }
                        }), (0, g.jsx)(w.Slot, {
                            scope: r,
                            children: (0, g.jsx)(f.WV.ol, {
                                tabIndex: -1,
                                ...s,
                                ref: y
                            })
                        }), x && (0, g.jsx)(I, {
                            ref: p,
                            onFocusFromOutsideViewport: () => {
                                let e = C({
                                    tabbingDirection: "backwards"
                                });
                                U(e)
                            }
                        })]
                    })
                });
            S.displayName = M;
            var q = "ToastFocusProxy",
                I = n.forwardRef((e, t) => {
                    let {
                        __scopeToast: r,
                        onFocusFromOutsideViewport: n,
                        ...a
                    } = e, i = P(q, r);
                    return (0, g.jsx)(y, {
                        "aria-hidden": !0,
                        tabIndex: 0,
                        ...a,
                        ref: t,
                        style: {
                            position: "fixed"
                        },
                        onFocus: e => {
                            let t = e.relatedTarget,
                                r = !i.viewport ? .contains(t);
                            r && n()
                        }
                    })
                });
            I.displayName = q;
            var O = "Toast",
                $ = n.forwardRef((e, t) => {
                    let {
                        forceMount: r,
                        open: n,
                        defaultOpen: a,
                        onOpenChange: o,
                        ...s
                    } = e, [u = !0, l] = (0, p.T)({
                        prop: n,
                        defaultProp: a,
                        onChange: o
                    });
                    return (0, g.jsx)(d.z, {
                        present: r || u,
                        children: (0, g.jsx)(j, {
                            open: u,
                            ...s,
                            ref: t,
                            onClose: () => l(!1),
                            onPause: (0, h.W)(e.onPause),
                            onResume: (0, h.W)(e.onResume),
                            onSwipeStart: (0, i.M)(e.onSwipeStart, e => {
                                e.currentTarget.setAttribute("data-swipe", "start")
                            }),
                            onSwipeMove: (0, i.M)(e.onSwipeMove, e => {
                                let {
                                    x: t,
                                    y: r
                                } = e.detail.delta;
                                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
                            }),
                            onSwipeCancel: (0, i.M)(e.onSwipeCancel, e => {
                                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                            }),
                            onSwipeEnd: (0, i.M)(e.onSwipeEnd, e => {
                                let {
                                    x: t,
                                    y: r
                                } = e.detail.delta;
                                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), l(!1)
                            })
                        })
                    })
                });
            $.displayName = O;
            var [N, k] = C(O, {
                onClose() {}
            }), j = n.forwardRef((e, t) => {
                let {
                    __scopeToast: r,
                    type: s = "foreground",
                    duration: u,
                    open: c,
                    onClose: d,
                    onEscapeKeyDown: p,
                    onPause: m,
                    onResume: y,
                    onSwipeStart: v,
                    onSwipeMove: b,
                    onSwipeCancel: x,
                    onSwipeEnd: C,
                    ...E
                } = e, F = P(O, r), [T, M] = n.useState(null), R = (0, o.e)(t, e => M(e)), S = n.useRef(null), q = n.useRef(null), I = u || F.duration, $ = n.useRef(0), k = n.useRef(I), j = n.useRef(0), {
                    onToastAdd: Q,
                    onToastRemove: _
                } = F, L = (0, h.W)(() => {
                    let e = T ? .contains(document.activeElement);
                    e && F.viewport ? .focus(), d()
                }), V = n.useCallback(e => {
                    e && e !== 1 / 0 && (window.clearTimeout(j.current), $.current = new Date().getTime(), j.current = window.setTimeout(L, e))
                }, [L]);
                n.useEffect(() => {
                    let e = F.viewport;
                    if (e) {
                        let t = () => {
                                V(k.current), y ? .()
                            },
                            r = () => {
                                let e = new Date().getTime() - $.current;
                                k.current = k.current - e, window.clearTimeout(j.current), m ? .()
                            };
                        return e.addEventListener(D, r), e.addEventListener(A, t), () => {
                            e.removeEventListener(D, r), e.removeEventListener(A, t)
                        }
                    }
                }, [F.viewport, I, m, y, V]), n.useEffect(() => {
                    c && !F.isClosePausedRef.current && V(I)
                }, [c, I, F.isClosePausedRef, V]), n.useEffect(() => (Q(), () => _()), [Q, _]);
                let K = n.useMemo(() => T ? function e(t) {
                    let r = [],
                        n = Array.from(t.childNodes);
                    return n.forEach(t => {
                        if (t.nodeType === t.TEXT_NODE && t.textContent && r.push(t.textContent), t.nodeType === t.ELEMENT_NODE) {
                            let n = t.ariaHidden || t.hidden || "none" === t.style.display,
                                a = "" === t.dataset.radixToastAnnounceExclude;
                            if (!n) {
                                if (a) {
                                    let e = t.dataset.radixToastAnnounceAlt;
                                    e && r.push(e)
                                } else r.push(...e(t))
                            }
                        }
                    }), r
                }(T) : null, [T]);
                return F.viewport ? (0, g.jsxs)(g.Fragment, {
                    children: [K && (0, g.jsx)(B, {
                        __scopeToast: r,
                        role: "status",
                        "aria-live": "foreground" === s ? "assertive" : "polite",
                        "aria-atomic": !0,
                        children: K
                    }), (0, g.jsx)(N, {
                        scope: r,
                        onClose: L,
                        children: a.createPortal((0, g.jsx)(w.ItemSlot, {
                            scope: r,
                            children: (0, g.jsx)(l.fC, {
                                asChild: !0,
                                onEscapeKeyDown: (0, i.M)(p, () => {
                                    F.isFocusedToastEscapeKeyDownRef.current || L(), F.isFocusedToastEscapeKeyDownRef.current = !1
                                }),
                                children: (0, g.jsx)(f.WV.li, {
                                    role: "status",
                                    "aria-live": "off",
                                    "aria-atomic": !0,
                                    tabIndex: 0,
                                    "data-state": c ? "open" : "closed",
                                    "data-swipe-direction": F.swipeDirection,
                                    ...E,
                                    ref: R,
                                    style: {
                                        userSelect: "none",
                                        touchAction: "none",
                                        ...e.style
                                    },
                                    onKeyDown: (0, i.M)(e.onKeyDown, e => {
                                        "Escape" !== e.key || (p ? .(e.nativeEvent), e.nativeEvent.defaultPrevented || (F.isFocusedToastEscapeKeyDownRef.current = !0, L()))
                                    }),
                                    onPointerDown: (0, i.M)(e.onPointerDown, e => {
                                        0 === e.button && (S.current = {
                                            x: e.clientX,
                                            y: e.clientY
                                        })
                                    }),
                                    onPointerMove: (0, i.M)(e.onPointerMove, e => {
                                        if (!S.current) return;
                                        let t = e.clientX - S.current.x,
                                            r = e.clientY - S.current.y,
                                            n = !!q.current,
                                            a = ["left", "right"].includes(F.swipeDirection),
                                            i = ["left", "up"].includes(F.swipeDirection) ? Math.min : Math.max,
                                            o = a ? i(0, t) : 0,
                                            s = a ? 0 : i(0, r),
                                            u = "touch" === e.pointerType ? 10 : 2,
                                            l = {
                                                x: o,
                                                y: s
                                            },
                                            c = {
                                                originalEvent: e,
                                                delta: l
                                            };
                                        n ? (q.current = l, W("toast.swipeMove", b, c, {
                                            discrete: !1
                                        })) : z(l, F.swipeDirection, u) ? (q.current = l, W("toast.swipeStart", v, c, {
                                            discrete: !1
                                        }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > u || Math.abs(r) > u) && (S.current = null)
                                    }),
                                    onPointerUp: (0, i.M)(e.onPointerUp, e => {
                                        let t = q.current,
                                            r = e.target;
                                        if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), q.current = null, S.current = null, t) {
                                            let r = e.currentTarget,
                                                n = {
                                                    originalEvent: e,
                                                    delta: t
                                                };
                                            z(t, F.swipeDirection, F.swipeThreshold) ? W("toast.swipeEnd", C, n, {
                                                discrete: !0
                                            }) : W("toast.swipeCancel", x, n, {
                                                discrete: !0
                                            }), r.addEventListener("click", e => e.preventDefault(), {
                                                once: !0
                                            })
                                        }
                                    })
                                })
                            })
                        }), F.viewport)
                    })]
                }) : null
            }), B = e => {
                let {
                    __scopeToast: t,
                    children: r,
                    ...a
                } = e, i = P(O, t), [o, s] = n.useState(!1), [u, l] = n.useState(!1);
                return function(e = () => {}) {
                    let t = (0, h.W)(e);
                    (0, m.b)(() => {
                        let e = 0,
                            r = 0;
                        return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
                            window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
                        }
                    }, [t])
                }(() => s(!0)), n.useEffect(() => {
                    let e = window.setTimeout(() => l(!0), 1e3);
                    return () => window.clearTimeout(e)
                }, []), u ? null : (0, g.jsx)(c.h, {
                    asChild: !0,
                    children: (0, g.jsx)(y, { ...a,
                        children: o && (0, g.jsxs)(g.Fragment, {
                            children: [i.label, " ", r]
                        })
                    })
                })
            }, Q = n.forwardRef((e, t) => {
                let {
                    __scopeToast: r,
                    ...n
                } = e;
                return (0, g.jsx)(f.WV.div, { ...n,
                    ref: t
                })
            });
            Q.displayName = "ToastTitle";
            var _ = n.forwardRef((e, t) => {
                let {
                    __scopeToast: r,
                    ...n
                } = e;
                return (0, g.jsx)(f.WV.div, { ...n,
                    ref: t
                })
            });
            _.displayName = "ToastDescription";
            var L = "ToastAction",
                V = n.forwardRef((e, t) => {
                    let {
                        altText: r,
                        ...n
                    } = e;
                    return r.trim() ? (0, g.jsx)(Z, {
                        altText: r,
                        asChild: !0,
                        children: (0, g.jsx)(H, { ...n,
                            ref: t
                        })
                    }) : (console.error(`Invalid prop \`altText\` supplied to \`${L}\`. Expected non-empty \`string\`.`), null)
                });
            V.displayName = L;
            var K = "ToastClose",
                H = n.forwardRef((e, t) => {
                    let {
                        __scopeToast: r,
                        ...n
                    } = e, a = k(K, r);
                    return (0, g.jsx)(Z, {
                        asChild: !0,
                        children: (0, g.jsx)(f.WV.button, {
                            type: "button",
                            ...n,
                            ref: t,
                            onClick: (0, i.M)(e.onClick, a.onClose)
                        })
                    })
                });
            H.displayName = K;
            var Z = n.forwardRef((e, t) => {
                let {
                    __scopeToast: r,
                    altText: n,
                    ...a
                } = e;
                return (0, g.jsx)(f.WV.div, {
                    "data-radix-toast-announce-exclude": "",
                    "data-radix-toast-announce-alt": n || void 0,
                    ...a,
                    ref: t
                })
            });

            function W(e, t, r, {
                discrete: n
            }) {
                let a = r.originalEvent.currentTarget,
                    i = new CustomEvent(e, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: r
                    });
                t && a.addEventListener(e, t, {
                    once: !0
                }), n ? (0, f.jH)(a, i) : a.dispatchEvent(i)
            }
            var z = (e, t, r = 0) => {
                let n = Math.abs(e.x),
                    a = Math.abs(e.y),
                    i = n > a;
                return "left" === t || "right" === t ? i && n > r : !i && a > r
            };

            function U(e) {
                let t = document.activeElement;
                return e.some(e => e === t || (e.focus(), document.activeElement !== t))
            }
            var X = T,
                Y = S,
                G = $,
                J = Q,
                ee = _,
                et = V,
                er = H
        },
        53785: function(e, t, r) {
            "use strict";
            r.d(t, {
                P: function() {
                    return m
                }
            });
            var n = r(6485),
                a = r(25979),
                i = r(78572),
                o = r(26045);
            class s extends o.G {
                constructor(e) {
                    let {
                        docsPath: t,
                        field: r,
                        metaMessages: n
                    } = e;
                    super(`Invalid Sign-In with Ethereum message field "${r}".`, {
                        docsPath: t,
                        metaMessages: n,
                        name: "SiweInvalidMessageFieldError"
                    })
                }
            }
            var u = r(92490);

            function l(e) {
                if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(e) || /%[^0-9a-f]/i.test(e) || /%[0-9a-f](:?[^0-9a-f]|$)/i.test(e)) return !1;
                let t = e.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/),
                    r = t[1],
                    n = t[2],
                    a = t[3],
                    i = t[4],
                    o = t[5];
                if (!(r ? .length && a.length >= 0)) return !1;
                if (n ? .length) {
                    if (!(0 === a.length || /^\//.test(a))) return !1
                } else if (/^\/\//.test(a)) return !1;
                if (!/^[a-z][a-z0-9\+\-\.]*$/.test(r.toLowerCase())) return !1;
                let s = "";
                return s += `${r}:`, n ? .length && (s += `//${n}`), s += a, i ? .length && (s += `?${i}`), o ? .length && (s += `#${o}`), s
            }
            let c = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?$/,
                d = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:[0-9]{1,5})?$/,
                f = /^localhost(:[0-9]{1,5})?$/,
                h = /^[a-zA-Z0-9]{8,}$/,
                p = /^([a-zA-Z][a-zA-Z0-9+-.]*)$/;

            function m({
                children: e,
                enabled: t,
                getSiweMessageOptions: r
            }) {
                let {
                    status: o
                } = (0, a.useSession)(), m = (0, i.useMemo)(() => (0, n.vJ)({
                    createMessage: ({
                        address: e,
                        chainId: t,
                        nonce: n
                    }) => {
                        let a = {
                            domain: window.location.host,
                            statement: "Sign in with Ethereum to the app.",
                            uri: window.location.origin,
                            version: "1"
                        };
                        return function(e) {
                            let {
                                chainId: t,
                                domain: r,
                                expirationTime: n,
                                issuedAt: a = new Date,
                                nonce: i,
                                notBefore: o,
                                requestId: m,
                                resources: g,
                                scheme: y,
                                uri: v,
                                version: w
                            } = e; {
                                if (t !== Math.floor(t)) throw new s({
                                    field: "chainId",
                                    metaMessages: ["- Chain ID must be a EIP-155 chain ID.", "- See https://eips.ethereum.org/EIPS/eip-155", "", `Provided value: ${t}`]
                                });
                                if (!(c.test(r) || d.test(r) || f.test(r))) throw new s({
                                    field: "domain",
                                    metaMessages: ["- Domain must be an RFC 3986 authority.", "- See https://www.rfc-editor.org/rfc/rfc3986", "", `Provided value: ${r}`]
                                });
                                if (!h.test(i)) throw new s({
                                    field: "nonce",
                                    metaMessages: ["- Nonce must be at least 8 characters.", "- Nonce must be alphanumeric.", "", `Provided value: ${i}`]
                                });
                                if (!l(v)) throw new s({
                                    field: "uri",
                                    metaMessages: ["- URI must be a RFC 3986 URI referring to the resource that is the subject of the signing.", "- See https://www.rfc-editor.org/rfc/rfc3986", "", `Provided value: ${v}`]
                                });
                                if ("1" !== w) throw new s({
                                    field: "version",
                                    metaMessages: ["- Version must be '1'.", "", `Provided value: ${w}`]
                                });
                                if (y && !p.test(y)) throw new s({
                                    field: "scheme",
                                    metaMessages: ["- Scheme must be an RFC 3986 URI scheme.", "- See https://www.rfc-editor.org/rfc/rfc3986#section-3.1", "", `Provided value: ${y}`]
                                });
                                let n = e.statement;
                                if (n ? .includes("\n")) throw new s({
                                    field: "statement",
                                    metaMessages: ["- Statement must not include '\\n'.", "", `Provided value: ${n}`]
                                })
                            }
                            let b = (0, u.K)(e.address),
                                x = y ? `${y}://${r}` : r,
                                C = e.statement ? `${e.statement}
` : "",
                                E = `${x} wants you to sign in with your Ethereum account:
${b}

${C}`,
                                F = `URI: ${v}
Version: ${w}
Chain ID: ${t}
Nonce: ${i}
Issued At: ${a.toISOString()}`;
                            if (n && (F += `
Expiration Time: ${n.toISOString()}`), o && (F += `
Not Before: ${o.toISOString()}`), m && (F += `
Request ID: ${m}`), g) {
                                let e = "\nResources:";
                                for (let t of g) {
                                    if (!l(t)) throw new s({
                                        field: "resources",
                                        metaMessages: ["- Every resource must be a RFC 3986 URI.", "- See https://www.rfc-editor.org/rfc/rfc3986", "", `Provided value: ${t}`]
                                    });
                                    e += `
- ${t}`
                                }
                                F += e
                            }
                            return `${E}
${F}`
                        }({ ...a,
                            ...r ? .(),
                            address : e,
                            chainId: t,
                            nonce: n
                        })
                    },
                    getNonce: async () => {
                        let e = await (0, a.getCsrfToken)();
                        if (!e) throw Error();
                        return e
                    },
                    signOut: async () => {
                        await (0, a.signOut)({
                            redirect: !1
                        })
                    },
                    verify: async ({
                        message: e,
                        signature: t
                    }) => {
                        let r = await (0, a.signIn)("credentials", {
                            message: e,
                            signature: t,
                            redirect: !1
                        });
                        return r ? .ok ? ? !1
                    }
                }), [r]);
                return i.createElement(n.zF, {
                    adapter: m,
                    enabled: t,
                    status: o
                }, e)
            }
        },
        25282: function(e, t, r) {
            "use strict";
            r.d(t, {
                $: function() {
                    return s
                }
            });
            var n = r(38296),
                a = "#1A1B1F",
                i = {
                    blue: {
                        accentColor: "#3898FF",
                        accentColorForeground: "#FFF"
                    },
                    green: {
                        accentColor: "#4BD166",
                        accentColorForeground: a
                    },
                    orange: {
                        accentColor: "#FF983D",
                        accentColorForeground: a
                    },
                    pink: {
                        accentColor: "#FF7AB8",
                        accentColorForeground: a
                    },
                    purple: {
                        accentColor: "#7A70FF",
                        accentColorForeground: "#FFF"
                    },
                    red: {
                        accentColor: "#FF6257",
                        accentColorForeground: "#FFF"
                    }
                },
                o = i.blue,
                s = ({
                    accentColor: e = o.accentColor,
                    accentColorForeground: t = o.accentColorForeground,
                    ...r
                } = {}) => ({ ...(0, n.w)(r),
                    colors: {
                        accentColor: e,
                        accentColorForeground: t,
                        actionButtonBorder: "rgba(255, 255, 255, 0.04)",
                        actionButtonBorderMobile: "rgba(255, 255, 255, 0.08)",
                        actionButtonSecondaryBackground: "rgba(255, 255, 255, 0.08)",
                        closeButton: "rgba(224, 232, 255, 0.6)",
                        closeButtonBackground: "rgba(255, 255, 255, 0.08)",
                        connectButtonBackground: a,
                        connectButtonBackgroundError: "#FF494A",
                        connectButtonInnerBackground: "linear-gradient(0deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.15))",
                        connectButtonText: "#FFF",
                        connectButtonTextError: "#FFF",
                        connectionIndicator: "#30E000",
                        downloadBottomCardBackground: "linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.2) 71.04%), #1A1B1F",
                        downloadTopCardBackground: "linear-gradient(126deg, rgba(120, 120, 120, 0.2) 9.49%, rgba(0, 0, 0, 0) 71.04%), #1A1B1F",
                        error: "#FF494A",
                        generalBorder: "rgba(255, 255, 255, 0.08)",
                        generalBorderDim: "rgba(255, 255, 255, 0.04)",
                        menuItemBackground: "rgba(224, 232, 255, 0.1)",
                        modalBackdrop: "rgba(0, 0, 0, 0.5)",
                        modalBackground: "#1A1B1F",
                        modalBorder: "rgba(255, 255, 255, 0.08)",
                        modalText: "#FFF",
                        modalTextDim: "rgba(224, 232, 255, 0.3)",
                        modalTextSecondary: "rgba(255, 255, 255, 0.6)",
                        profileAction: "rgba(224, 232, 255, 0.1)",
                        profileActionHover: "rgba(224, 232, 255, 0.2)",
                        profileForeground: "rgba(224, 232, 255, 0.05)",
                        selectedOptionBorder: "rgba(224, 232, 255, 0.1)",
                        standby: "#FFD641"
                    },
                    shadows: {
                        connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
                        profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
                        selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
                        selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.24)",
                        walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)"
                    }
                });
            s.accentColors = i
        },
        56443: function(e, t, r) {
            "use strict";
            r.d(t, {
                S: function() {
                    return g
                }
            });
            var n = r(18636),
                a = r(11514),
                i = r(75639),
                o = r(26047),
                s = class extends o.l {
                    constructor(e = {}) {
                        super(), this.config = e, this.#e = new Map
                    }#
                    e;
                    build(e, t, r) {
                        let i = t.queryKey,
                            o = t.queryHash ? ? (0, n.Rm)(i, t),
                            s = this.get(o);
                        return s || (s = new a.A({
                            cache: this,
                            queryKey: i,
                            queryHash: o,
                            options: e.defaultQueryOptions(t),
                            state: r,
                            defaultOptions: e.getQueryDefaults(i)
                        }), this.add(s)), s
                    }
                    add(e) {
                        this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
                            type: "added",
                            query: e
                        }))
                    }
                    remove(e) {
                        let t = this.#e.get(e.queryHash);
                        t && (e.destroy(), t === e && this.#e.delete(e.queryHash), this.notify({
                            type: "removed",
                            query: e
                        }))
                    }
                    clear() {
                        i.V.batch(() => {
                            this.getAll().forEach(e => {
                                this.remove(e)
                            })
                        })
                    }
                    get(e) {
                        return this.#e.get(e)
                    }
                    getAll() {
                        return [...this.#e.values()]
                    }
                    find(e) {
                        let t = {
                            exact: !0,
                            ...e
                        };
                        return this.getAll().find(e => (0, n._x)(t, e))
                    }
                    findAll(e = {}) {
                        let t = this.getAll();
                        return Object.keys(e).length > 0 ? t.filter(t => (0, n._x)(e, t)) : t
                    }
                    notify(e) {
                        i.V.batch(() => {
                            this.listeners.forEach(t => {
                                t(e)
                            })
                        })
                    }
                    onFocus() {
                        i.V.batch(() => {
                            this.getAll().forEach(e => {
                                e.onFocus()
                            })
                        })
                    }
                    onOnline() {
                        i.V.batch(() => {
                            this.getAll().forEach(e => {
                                e.onOnline()
                            })
                        })
                    }
                },
                u = r(37494),
                l = class extends o.l {
                    constructor(e = {}) {
                        super(), this.config = e, this.#t = new Map, this.#r = Date.now()
                    }#
                    t;#
                    r;
                    build(e, t, r) {
                        let n = new u.m({
                            mutationCache: this,
                            mutationId: ++this.#r,
                            options: e.defaultMutationOptions(t),
                            state: r
                        });
                        return this.add(n), n
                    }
                    add(e) {
                        let t = c(e),
                            r = this.#t.get(t) ? ? [];
                        r.push(e), this.#t.set(t, r), this.notify({
                            type: "added",
                            mutation: e
                        })
                    }
                    remove(e) {
                        let t = c(e);
                        if (this.#t.has(t)) {
                            let r = this.#t.get(t) ? .filter(t => t !== e);
                            r && (0 === r.length ? this.#t.delete(t) : this.#t.set(t, r))
                        }
                        this.notify({
                            type: "removed",
                            mutation: e
                        })
                    }
                    canRun(e) {
                        let t = this.#t.get(c(e)) ? .find(e => "pending" === e.state.status);
                        return !t || t === e
                    }
                    runNext(e) {
                        let t = this.#t.get(c(e)) ? .find(t => t !== e && t.state.isPaused);
                        return t ? .continue() ? ? Promise.resolve()
                    }
                    clear() {
                        i.V.batch(() => {
                            this.getAll().forEach(e => {
                                this.remove(e)
                            })
                        })
                    }
                    getAll() {
                        return [...this.#t.values()].flat()
                    }
                    find(e) {
                        let t = {
                            exact: !0,
                            ...e
                        };
                        return this.getAll().find(e => (0, n.X7)(t, e))
                    }
                    findAll(e = {}) {
                        return this.getAll().filter(t => (0, n.X7)(e, t))
                    }
                    notify(e) {
                        i.V.batch(() => {
                            this.listeners.forEach(t => {
                                t(e)
                            })
                        })
                    }
                    resumePausedMutations() {
                        let e = this.getAll().filter(e => e.state.isPaused);
                        return i.V.batch(() => Promise.all(e.map(e => e.continue().catch(n.ZT))))
                    }
                };

            function c(e) {
                return e.options.scope ? .id ? ? String(e.mutationId)
            }
            var d = r(67854),
                f = r(79746);

            function h(e) {
                return {
                    onFetch: (t, r) => {
                        let a = t.options,
                            i = t.fetchOptions ? .meta ? .fetchMore ? .direction,
                            o = t.state.data ? .pages || [],
                            s = t.state.data ? .pageParams || [],
                            u = {
                                pages: [],
                                pageParams: []
                            },
                            l = 0,
                            c = async () => {
                                let r = !1,
                                    c = e => {
                                        Object.defineProperty(e, "signal", {
                                            enumerable: !0,
                                            get: () => (t.signal.aborted ? r = !0 : t.signal.addEventListener("abort", () => {
                                                r = !0
                                            }), t.signal)
                                        })
                                    },
                                    d = (0, n.cG)(t.options, t.fetchOptions),
                                    f = async (e, a, i) => {
                                        if (r) return Promise.reject();
                                        if (null == a && e.pages.length) return Promise.resolve(e);
                                        let o = {
                                            queryKey: t.queryKey,
                                            pageParam: a,
                                            direction: i ? "backward" : "forward",
                                            meta: t.options.meta
                                        };
                                        c(o);
                                        let s = await d(o),
                                            {
                                                maxPages: u
                                            } = t.options,
                                            l = i ? n.Ht : n.VX;
                                        return {
                                            pages: l(e.pages, s, u),
                                            pageParams: l(e.pageParams, a, u)
                                        }
                                    };
                                if (i && o.length) {
                                    let e = "backward" === i,
                                        t = e ? m : p,
                                        r = {
                                            pages: o,
                                            pageParams: s
                                        },
                                        n = t(a, r);
                                    u = await f(r, n, e)
                                } else {
                                    let t = e ? ? o.length;
                                    do {
                                        let e = 0 === l ? s[0] ? ? a.initialPageParam : p(a, u);
                                        if (l > 0 && null == e) break;
                                        u = await f(u, e), l++
                                    } while (l < t)
                                }
                                return u
                            };
                        t.options.persister ? t.fetchFn = () => t.options.persister ? .(c, {
                            queryKey: t.queryKey,
                            meta: t.options.meta,
                            signal: t.signal
                        }, r) : t.fetchFn = c
                    }
                }
            }

            function p(e, {
                pages: t,
                pageParams: r
            }) {
                let n = t.length - 1;
                return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0
            }

            function m(e, {
                pages: t,
                pageParams: r
            }) {
                return t.length > 0 ? e.getPreviousPageParam ? .(t[0], t, r[0], r) : void 0
            }
            var g = class {#
                n;#
                a;#
                i;#
                o;#
                s;#
                u;#
                l;#
                c;
                constructor(e = {}) {
                    this.#n = e.queryCache || new s, this.#a = e.mutationCache || new l, this.#i = e.defaultOptions || {}, this.#o = new Map, this.#s = new Map, this.#u = 0
                }
                mount() {
                    this.#u++, 1 === this.#u && (this.#l = d.j.subscribe(async e => {
                        e && (await this.resumePausedMutations(), this.#n.onFocus())
                    }), this.#c = f.N.subscribe(async e => {
                        e && (await this.resumePausedMutations(), this.#n.onOnline())
                    }))
                }
                unmount() {
                    this.#u--, 0 === this.#u && (this.#l ? .(), this.#l = void 0, this.#c ? .(), this.#c = void 0)
                }
                isFetching(e) {
                    return this.#n.findAll({ ...e,
                        fetchStatus: "fetching"
                    }).length
                }
                isMutating(e) {
                    return this.#a.findAll({ ...e,
                        status: "pending"
                    }).length
                }
                getQueryData(e) {
                    let t = this.defaultQueryOptions({
                        queryKey: e
                    });
                    return this.#n.get(t.queryHash) ? .state.data
                }
                ensureQueryData(e) {
                    let t = this.getQueryData(e.queryKey);
                    if (void 0 === t) return this.fetchQuery(e); {
                        let r = this.defaultQueryOptions(e),
                            a = this.#n.build(this, r);
                        return e.revalidateIfStale && a.isStaleByTime((0, n.KC)(r.staleTime, a)) && this.prefetchQuery(r), Promise.resolve(t)
                    }
                }
                getQueriesData(e) {
                    return this.#n.findAll(e).map(({
                        queryKey: e,
                        state: t
                    }) => {
                        let r = t.data;
                        return [e, r]
                    })
                }
                setQueryData(e, t, r) {
                    let a = this.defaultQueryOptions({
                            queryKey: e
                        }),
                        i = this.#n.get(a.queryHash),
                        o = i ? .state.data,
                        s = (0, n.SE)(t, o);
                    if (void 0 !== s) return this.#n.build(this, a).setData(s, { ...r,
                        manual: !0
                    })
                }
                setQueriesData(e, t, r) {
                    return i.V.batch(() => this.#n.findAll(e).map(({
                        queryKey: e
                    }) => [e, this.setQueryData(e, t, r)]))
                }
                getQueryState(e) {
                    let t = this.defaultQueryOptions({
                        queryKey: e
                    });
                    return this.#n.get(t.queryHash) ? .state
                }
                removeQueries(e) {
                    let t = this.#n;
                    i.V.batch(() => {
                        t.findAll(e).forEach(e => {
                            t.remove(e)
                        })
                    })
                }
                resetQueries(e, t) {
                    let r = this.#n,
                        n = {
                            type: "active",
                            ...e
                        };
                    return i.V.batch(() => (r.findAll(e).forEach(e => {
                        e.reset()
                    }), this.refetchQueries(n, t)))
                }
                cancelQueries(e = {}, t = {}) {
                    let r = {
                            revert: !0,
                            ...t
                        },
                        a = i.V.batch(() => this.#n.findAll(e).map(e => e.cancel(r)));
                    return Promise.all(a).then(n.ZT).catch(n.ZT)
                }
                invalidateQueries(e = {}, t = {}) {
                    return i.V.batch(() => {
                        if (this.#n.findAll(e).forEach(e => {
                                e.invalidate()
                            }), "none" === e.refetchType) return Promise.resolve();
                        let r = { ...e,
                            type: e.refetchType ? ? e.type ? ? "active"
                        };
                        return this.refetchQueries(r, t)
                    })
                }
                refetchQueries(e = {}, t) {
                    let r = { ...t,
                            cancelRefetch: t ? .cancelRefetch ? ? !0
                        },
                        a = i.V.batch(() => this.#n.findAll(e).filter(e => !e.isDisabled()).map(e => {
                            let t = e.fetch(void 0, r);
                            return r.throwOnError || (t = t.catch(n.ZT)), "paused" === e.state.fetchStatus ? Promise.resolve() : t
                        }));
                    return Promise.all(a).then(n.ZT)
                }
                fetchQuery(e) {
                    let t = this.defaultQueryOptions(e);
                    void 0 === t.retry && (t.retry = !1);
                    let r = this.#n.build(this, t);
                    return r.isStaleByTime((0, n.KC)(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data)
                }
                prefetchQuery(e) {
                    return this.fetchQuery(e).then(n.ZT).catch(n.ZT)
                }
                fetchInfiniteQuery(e) {
                    return e.behavior = h(e.pages), this.fetchQuery(e)
                }
                prefetchInfiniteQuery(e) {
                    return this.fetchInfiniteQuery(e).then(n.ZT).catch(n.ZT)
                }
                ensureInfiniteQueryData(e) {
                    return e.behavior = h(e.pages), this.ensureQueryData(e)
                }
                resumePausedMutations() {
                    return f.N.isOnline() ? this.#a.resumePausedMutations() : Promise.resolve()
                }
                getQueryCache() {
                    return this.#n
                }
                getMutationCache() {
                    return this.#a
                }
                getDefaultOptions() {
                    return this.#i
                }
                setDefaultOptions(e) {
                    this.#i = e
                }
                setQueryDefaults(e, t) {
                    this.#o.set((0, n.Ym)(e), {
                        queryKey: e,
                        defaultOptions: t
                    })
                }
                getQueryDefaults(e) {
                    let t = [...this.#o.values()],
                        r = {};
                    return t.forEach(t => {
                        (0, n.to)(e, t.queryKey) && (r = { ...r,
                            ...t.defaultOptions
                        })
                    }), r
                }
                setMutationDefaults(e, t) {
                    this.#s.set((0, n.Ym)(e), {
                        mutationKey: e,
                        defaultOptions: t
                    })
                }
                getMutationDefaults(e) {
                    let t = [...this.#s.values()],
                        r = {};
                    return t.forEach(t => {
                        (0, n.to)(e, t.mutationKey) && (r = { ...r,
                            ...t.defaultOptions
                        })
                    }), r
                }
                defaultQueryOptions(e) {
                    if (e._defaulted) return e;
                    let t = { ...this.#i.queries,
                        ...this.getQueryDefaults(e.queryKey),
                        ...e,
                        _defaulted: !0
                    };
                    return t.queryHash || (t.queryHash = (0, n.Rm)(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.throwOnError && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), !0 !== t.enabled && t.queryFn === n.CN && (t.enabled = !1), t
                }
                defaultMutationOptions(e) {
                    return e ? ._defaulted ? e : { ...this.#i.mutations,
                        ...e ? .mutationKey && this.getMutationDefaults(e.mutationKey),
                        ...e,
                        _defaulted : !0
                    }
                }
                clear() {
                    this.#n.clear(), this.#a.clear()
                }
            }
        }
    }
]);