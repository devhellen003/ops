"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9537], {
        61627: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(78572),
                o = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                };
            /**
             * @license lucide-react v0.294.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let u = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
                i = (e, t) => {
                    let n = (0, r.forwardRef)(({
                        color: n = "currentColor",
                        size: i = 24,
                        strokeWidth: a = 2,
                        absoluteStrokeWidth: s,
                        className: l = "",
                        children: c,
                        ...d
                    }, f) => (0, r.createElement)("svg", {
                        ref: f,
                        ...o,
                        width: i,
                        height: i,
                        stroke: n,
                        strokeWidth: s ? 24 * Number(a) / Number(i) : a,
                        className: ["lucide", `lucide-${u(e)}`, l].join(" "),
                        ...d
                    }, [...t.map(([e, t]) => (0, r.createElement)(e, t)), ...Array.isArray(c) ? c : [c]]));
                    return n.displayName = `${e}`, n
                }
        },
        94752: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(61627);
            /**
             * @license lucide-react v0.294.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let o = (0, r.Z)("X", [
                ["path", {
                    d: "M18 6 6 18",
                    key: "1bl5f8"
                }],
                ["path", {
                    d: "m6 6 12 12",
                    key: "d8bk6v"
                }]
            ])
        },
        69237: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return r
                }
            });

            function r(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(r) {
                    if (e ? .(r), !1 === n || !r.defaultPrevented) return t ? .(r)
                }
            }
        },
        50300: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return i
                },
                k: function() {
                    return u
                }
            });
            var r = n(78572),
                o = n(92284);

            function u(e, t) {
                let n = r.createContext(t),
                    u = e => {
                        let {
                            children: t,
                            ...u
                        } = e, i = r.useMemo(() => u, Object.values(u));
                        return (0, o.jsx)(n.Provider, {
                            value: i,
                            children: t
                        })
                    };
                return u.displayName = e + "Provider", [u, function(o) {
                    let u = r.useContext(n);
                    if (u) return u;
                    if (void 0 !== t) return t;
                    throw Error(`\`${o}\` must be used within \`${e}\``)
                }]
            }

            function i(e, t = []) {
                let n = [],
                    u = () => {
                        let t = n.map(e => r.createContext(e));
                        return function(n) {
                            let o = n ? .[e] || t;
                            return r.useMemo(() => ({
                                [`__scope${e}`]: { ...n,
                                    [e]: o
                                }
                            }), [n, o])
                        }
                    };
                return u.scopeName = e, [function(t, u) {
                    let i = r.createContext(u),
                        a = n.length;
                    n = [...n, u];
                    let s = t => {
                        let {
                            scope: n,
                            children: u,
                            ...s
                        } = t, l = n ? .[e] ? .[a] || i, c = r.useMemo(() => s, Object.values(s));
                        return (0, o.jsx)(l.Provider, {
                            value: c,
                            children: u
                        })
                    };
                    return s.displayName = t + "Provider", [s, function(n, o) {
                        let s = o ? .[e] ? .[a] || i,
                            l = r.useContext(s);
                        if (l) return l;
                        if (void 0 !== u) return u;
                        throw Error(`\`${n}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let n = () => {
                        let n = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let o = n.reduce((t, {
                                useScope: n,
                                scopeName: r
                            }) => {
                                let o = n(e),
                                    u = o[`__scope${r}`];
                                return { ...t,
                                    ...u
                                }
                            }, {});
                            return r.useMemo(() => ({
                                [`__scope${t.scopeName}`]: o
                            }), [o])
                        }
                    };
                    return n.scopeName = t.scopeName, n
                }(u, ...t)]
            }
        },
        63744: function(e, t, n) {
            let r;
            n.d(t, {
                x8: function() {
                    return ew
                },
                VY: function() {
                    return eE
                },
                dk: function() {
                    return eb
                },
                aV: function() {
                    return eg
                },
                h_: function() {
                    return ey
                },
                fC: function() {
                    return em
                },
                Dx: function() {
                    return eh
                },
                xz: function() {
                    return ev
                }
            });
            var o = n(78572),
                u = n(69237),
                i = n(79777),
                a = n(50300),
                s = n(98928),
                l = n(64444),
                c = n(33033),
                d = n(88950),
                f = n(61855),
                p = n(92284),
                m = "focusScope.autoFocusOnMount",
                v = "focusScope.autoFocusOnUnmount",
                y = {
                    bubbles: !1,
                    cancelable: !0
                },
                g = o.forwardRef((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: u,
                        onUnmountAutoFocus: a,
                        ...s
                    } = e, [l, c] = o.useState(null), g = (0, f.W)(u), N = (0, f.W)(a), x = o.useRef(null), C = (0, i.e)(t, e => c(e)), D = o.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    o.useEffect(() => {
                        if (r) {
                            let e = function(e) {
                                    if (D.paused || !l) return;
                                    let t = e.target;
                                    l.contains(t) ? x.current = t : b(x.current, {
                                        select: !0
                                    })
                                },
                                t = function(e) {
                                    if (D.paused || !l) return;
                                    let t = e.relatedTarget;
                                    null === t || l.contains(t) || b(x.current, {
                                        select: !0
                                    })
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let n = new MutationObserver(function(e) {
                                let t = document.activeElement;
                                if (t === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && b(l)
                            });
                            return l && n.observe(l, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
                            }
                        }
                    }, [r, l, D.paused]), o.useEffect(() => {
                        if (l) {
                            w.add(D);
                            let e = document.activeElement,
                                t = l.contains(e);
                            if (!t) {
                                let t = new CustomEvent(m, y);
                                l.addEventListener(m, g), l.dispatchEvent(t), t.defaultPrevented || (function(e, {
                                    select: t = !1
                                } = {}) {
                                    let n = document.activeElement;
                                    for (let r of e)
                                        if (b(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(E(l).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && b(l))
                            }
                            return () => {
                                l.removeEventListener(m, g), setTimeout(() => {
                                    let t = new CustomEvent(v, y);
                                    l.addEventListener(v, N), l.dispatchEvent(t), t.defaultPrevented || b(e ? ? document.body, {
                                        select: !0
                                    }), l.removeEventListener(v, N), w.remove(D)
                                }, 0)
                            }
                        }
                    }, [l, g, N, D]);
                    let M = o.useCallback(e => {
                        if (!n && !r || D.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [r, u] = function(e) {
                                    let t = E(e),
                                        n = h(t, e),
                                        r = h(t.reverse(), e);
                                    return [n, r]
                                }(t),
                                i = r && u;
                            i ? e.shiftKey || o !== u ? e.shiftKey && o === r && (e.preventDefault(), n && b(u, {
                                select: !0
                            })) : (e.preventDefault(), n && b(r, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [n, r, D.paused]);
                    return (0, p.jsx)(d.WV.div, {
                        tabIndex: -1,
                        ...s,
                        ref: C,
                        onKeyDown: M
                    })
                });

            function E(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function h(e, t) {
                for (let n of e)
                    if (! function(e, {
                            upTo: t
                        }) {
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === t || e !== t);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(n, {
                            upTo: t
                        })) return n
            }

            function b(e, {
                select: t = !1
            } = {}) {
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
                }
            }
            g.displayName = "FocusScope";
            var w = (r = [], {
                add(e) {
                    let t = r[0];
                    e !== t && t ? .pause(), (r = N(r, e)).unshift(e)
                },
                remove(e) {
                    r = N(r, e), r[0] ? .resume()
                }
            });

            function N(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
            var x = n(88688),
                C = n(90703),
                D = 0;

            function M() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
            }
            var O = n(80328),
                R = new WeakMap,
                A = new WeakMap,
                T = {},
                P = 0,
                L = function(e) {
                    return e && (e.host || L(e.parentNode))
                },
                W = function(e, t, n, r) {
                    var o = (Array.isArray(e) ? e : [e]).map(function(e) {
                        if (t.contains(e)) return e;
                        var n = L(e);
                        return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
                    }).filter(function(e) {
                        return !!e
                    });
                    T[n] || (T[n] = new WeakMap);
                    var u = T[n],
                        i = [],
                        a = new Set,
                        s = new Set(o),
                        l = function(e) {
                            !e || a.has(e) || (a.add(e), l(e.parentNode))
                        };
                    o.forEach(l);
                    var c = function(e) {
                        !e || s.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                            if (a.has(e)) c(e);
                            else try {
                                var t = e.getAttribute(r),
                                    o = null !== t && "false" !== t,
                                    s = (R.get(e) || 0) + 1,
                                    l = (u.get(e) || 0) + 1;
                                R.set(e, s), u.set(e, l), i.push(e), 1 === s && o && A.set(e, !0), 1 === l && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                            } catch (t) {
                                console.error("aria-hidden: cannot operate on ", e, t)
                            }
                        })
                    };
                    return c(t), a.clear(), P++,
                        function() {
                            i.forEach(function(e) {
                                var t = R.get(e) - 1,
                                    o = u.get(e) - 1;
                                R.set(e, t), u.set(e, o), t || (A.has(e) || e.removeAttribute(r), A.delete(e)), o || e.removeAttribute(n)
                            }), --P || (R = new WeakMap, R = new WeakMap, A = new WeakMap, T = {})
                        }
                },
                j = function(e, t, n) {
                    void 0 === n && (n = "data-aria-hidden");
                    var r = Array.from(Array.isArray(e) ? e : [e]),
                        o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
                    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), W(r, o, n, "aria-hidden")) : function() {
                        return null
                    }
                },
                I = n(69340),
                k = "Dialog",
                [S, F] = (0, a.b)(k),
                [_, $] = S(k),
                U = e => {
                    let {
                        __scopeDialog: t,
                        children: n,
                        open: r,
                        defaultOpen: u,
                        onOpenChange: i,
                        modal: a = !0
                    } = e, c = o.useRef(null), d = o.useRef(null), [f = !1, m] = (0, l.T)({
                        prop: r,
                        defaultProp: u,
                        onChange: i
                    });
                    return (0, p.jsx)(_, {
                        scope: t,
                        triggerRef: c,
                        contentRef: d,
                        contentId: (0, s.M)(),
                        titleId: (0, s.M)(),
                        descriptionId: (0, s.M)(),
                        open: f,
                        onOpenChange: m,
                        onOpenToggle: o.useCallback(() => m(e => !e), [m]),
                        modal: a,
                        children: n
                    })
                };
            U.displayName = k;
            var V = "DialogTrigger",
                z = o.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = $(V, n), a = (0, i.e)(t, o.triggerRef);
                    return (0, p.jsx)(d.WV.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": o.open,
                        "aria-controls": o.contentId,
                        "data-state": es(o.open),
                        ...r,
                        ref: a,
                        onClick: (0, u.M)(e.onClick, o.onOpenToggle)
                    })
                });
            z.displayName = V;
            var B = "DialogPortal",
                [K, Z] = S(B, {
                    forceMount: void 0
                }),
                H = e => {
                    let {
                        __scopeDialog: t,
                        forceMount: n,
                        children: r,
                        container: u
                    } = e, i = $(B, t);
                    return (0, p.jsx)(K, {
                        scope: t,
                        forceMount: n,
                        children: o.Children.map(r, e => (0, p.jsx)(C.z, {
                            present: n || i.open,
                            children: (0, p.jsx)(x.h, {
                                asChild: !0,
                                container: u,
                                children: e
                            })
                        }))
                    })
                };
            H.displayName = B;
            var q = "DialogOverlay",
                X = o.forwardRef((e, t) => {
                    let n = Z(q, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        u = $(q, e.__scopeDialog);
                    return u.modal ? (0, p.jsx)(C.z, {
                        present: r || u.open,
                        children: (0, p.jsx)(Y, { ...o,
                            ref: t
                        })
                    }) : null
                });
            X.displayName = q;
            var Y = o.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = $(q, n);
                    return (0, p.jsx)(O.Z, {
                        as: I.g7,
                        allowPinchZoom: !0,
                        shards: [o.contentRef],
                        children: (0, p.jsx)(d.WV.div, {
                            "data-state": es(o.open),
                            ...r,
                            ref: t,
                            style: {
                                pointerEvents: "auto",
                                ...r.style
                            }
                        })
                    })
                }),
                G = "DialogContent",
                J = o.forwardRef((e, t) => {
                    let n = Z(G, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        u = $(G, e.__scopeDialog);
                    return (0, p.jsx)(C.z, {
                        present: r || u.open,
                        children: u.modal ? (0, p.jsx)(Q, { ...o,
                            ref: t
                        }) : (0, p.jsx)(ee, { ...o,
                            ref: t
                        })
                    })
                });
            J.displayName = G;
            var Q = o.forwardRef((e, t) => {
                    let n = $(G, e.__scopeDialog),
                        r = o.useRef(null),
                        a = (0, i.e)(t, n.contentRef, r);
                    return o.useEffect(() => {
                        let e = r.current;
                        if (e) return j(e)
                    }, []), (0, p.jsx)(et, { ...e,
                        ref: a,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: (0, u.M)(e.onCloseAutoFocus, e => {
                            e.preventDefault(), n.triggerRef.current ? .focus()
                        }),
                        onPointerDownOutside: (0, u.M)(e.onPointerDownOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey,
                                r = 2 === t.button || n;
                            r && e.preventDefault()
                        }),
                        onFocusOutside: (0, u.M)(e.onFocusOutside, e => e.preventDefault())
                    })
                }),
                ee = o.forwardRef((e, t) => {
                    let n = $(G, e.__scopeDialog),
                        r = o.useRef(!1),
                        u = o.useRef(!1);
                    return (0, p.jsx)(et, { ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            e.onCloseAutoFocus ? .(t), t.defaultPrevented || (r.current || n.triggerRef.current ? .focus(), t.preventDefault()), r.current = !1, u.current = !1
                        },
                        onInteractOutside: t => {
                            e.onInteractOutside ? .(t), t.defaultPrevented || (r.current = !0, "pointerdown" !== t.detail.originalEvent.type || (u.current = !0));
                            let o = t.target,
                                i = n.triggerRef.current ? .contains(o);
                            i && t.preventDefault(), "focusin" === t.detail.originalEvent.type && u.current && t.preventDefault()
                        }
                    })
                }),
                et = o.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        trapFocus: r,
                        onOpenAutoFocus: u,
                        onCloseAutoFocus: a,
                        ...s
                    } = e, l = $(G, n), d = o.useRef(null), f = (0, i.e)(t, d);
                    return o.useEffect(() => {
                        let e = document.querySelectorAll("[data-radix-focus-guard]");
                        return document.body.insertAdjacentElement("afterbegin", e[0] ? ? M()), document.body.insertAdjacentElement("beforeend", e[1] ? ? M()), D++, () => {
                            1 === D && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), D--
                        }
                    }, []), (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsx)(g, {
                            asChild: !0,
                            loop: !0,
                            trapped: r,
                            onMountAutoFocus: u,
                            onUnmountAutoFocus: a,
                            children: (0, p.jsx)(c.XB, {
                                role: "dialog",
                                id: l.contentId,
                                "aria-describedby": l.descriptionId,
                                "aria-labelledby": l.titleId,
                                "data-state": es(l.open),
                                ...s,
                                ref: f,
                                onDismiss: () => l.onOpenChange(!1)
                            })
                        }), (0, p.jsxs)(p.Fragment, {
                            children: [(0, p.jsx)(ef, {
                                titleId: l.titleId
                            }), (0, p.jsx)(ep, {
                                contentRef: d,
                                descriptionId: l.descriptionId
                            })]
                        })]
                    })
                }),
                en = "DialogTitle",
                er = o.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = $(en, n);
                    return (0, p.jsx)(d.WV.h2, {
                        id: o.titleId,
                        ...r,
                        ref: t
                    })
                });
            er.displayName = en;
            var eo = "DialogDescription",
                eu = o.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = $(eo, n);
                    return (0, p.jsx)(d.WV.p, {
                        id: o.descriptionId,
                        ...r,
                        ref: t
                    })
                });
            eu.displayName = eo;
            var ei = "DialogClose",
                ea = o.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = $(ei, n);
                    return (0, p.jsx)(d.WV.button, {
                        type: "button",
                        ...r,
                        ref: t,
                        onClick: (0, u.M)(e.onClick, () => o.onOpenChange(!1))
                    })
                });

            function es(e) {
                return e ? "open" : "closed"
            }
            ea.displayName = ei;
            var el = "DialogTitleWarning",
                [ec, ed] = (0, a.k)(el, {
                    contentName: G,
                    titleName: en,
                    docsSlug: "dialog"
                }),
                ef = ({
                    titleId: e
                }) => {
                    let t = ed(el),
                        n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
                    return o.useEffect(() => {
                        if (e) {
                            let t = document.getElementById(e);
                            t || console.error(n)
                        }
                    }, [n, e]), null
                },
                ep = ({
                    contentRef: e,
                    descriptionId: t
                }) => {
                    let n = ed("DialogDescriptionWarning"),
                        r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;
                    return o.useEffect(() => {
                        let n = e.current ? .getAttribute("aria-describedby");
                        if (t && n) {
                            let e = document.getElementById(t);
                            e || console.warn(r)
                        }
                    }, [r, e, t]), null
                },
                em = U,
                ev = z,
                ey = H,
                eg = X,
                eE = J,
                eh = er,
                eb = eu,
                ew = ea
        },
        33033: function(e, t, n) {
            n.d(t, {
                I0: function() {
                    return g
                },
                XB: function() {
                    return f
                },
                fC: function() {
                    return y
                }
            });
            var r, o = n(78572),
                u = n(69237),
                i = n(88950),
                a = n(79777),
                s = n(61855),
                l = n(92284),
                c = "dismissableLayer.update",
                d = o.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                f = o.forwardRef((e, t) => {
                    let {
                        disableOutsidePointerEvents: n = !1,
                        onEscapeKeyDown: f,
                        onPointerDownOutside: p,
                        onFocusOutside: y,
                        onInteractOutside: g,
                        onDismiss: E,
                        ...h
                    } = e, b = o.useContext(d), [w, N] = o.useState(null), x = w ? .ownerDocument ? ? globalThis ? .document, [, C] = o.useState({}), D = (0, a.e)(t, e => N(e)), M = Array.from(b.layers), [O] = [...b.layersWithOutsidePointerEventsDisabled].slice(-1), R = M.indexOf(O), A = w ? M.indexOf(w) : -1, T = b.layersWithOutsidePointerEventsDisabled.size > 0, P = A >= R, L = function(e, t = globalThis ? .document) {
                        let n = (0, s.W)(e),
                            r = o.useRef(!1),
                            u = o.useRef(() => {});
                        return o.useEffect(() => {
                            let e = e => {
                                    if (e.target && !r.current) {
                                        let r = function() {
                                                v("dismissableLayer.pointerDownOutside", n, o, {
                                                    discrete: !0
                                                })
                                            },
                                            o = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (t.removeEventListener("click", u.current), u.current = r, t.addEventListener("click", u.current, {
                                            once: !0
                                        })) : r()
                                    } else t.removeEventListener("click", u.current);
                                    r.current = !1
                                },
                                o = window.setTimeout(() => {
                                    t.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", u.current)
                            }
                        }, [t, n]), {
                            onPointerDownCapture: () => r.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...b.branches].some(e => e.contains(t));
                        !P || n || (p ? .(e), g ? .(e), e.defaultPrevented || E ? .())
                    }, x), W = function(e, t = globalThis ? .document) {
                        let n = (0, s.W)(e),
                            r = o.useRef(!1);
                        return o.useEffect(() => {
                            let e = e => {
                                e.target && !r.current && v("dismissableLayer.focusOutside", n, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
                        }, [t, n]), {
                            onFocusCapture: () => r.current = !0,
                            onBlurCapture: () => r.current = !1
                        }
                    }(e => {
                        let t = e.target,
                            n = [...b.branches].some(e => e.contains(t));
                        n || (y ? .(e), g ? .(e), e.defaultPrevented || E ? .())
                    }, x);
                    return ! function(e, t = globalThis ? .document) {
                        let n = (0, s.W)(e);
                        o.useEffect(() => {
                            let e = e => {
                                "Escape" === e.key && n(e)
                            };
                            return t.addEventListener("keydown", e, {
                                capture: !0
                            }), () => t.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [n, t])
                    }(e => {
                        let t = A === b.layers.size - 1;
                        t && (f ? .(e), !e.defaultPrevented && E && (e.preventDefault(), E()))
                    }, x), o.useEffect(() => {
                        if (w) return n && (0 === b.layersWithOutsidePointerEventsDisabled.size && (r = x.body.style.pointerEvents, x.body.style.pointerEvents = "none"), b.layersWithOutsidePointerEventsDisabled.add(w)), b.layers.add(w), m(), () => {
                            n && 1 === b.layersWithOutsidePointerEventsDisabled.size && (x.body.style.pointerEvents = r)
                        }
                    }, [w, x, n, b]), o.useEffect(() => () => {
                        w && (b.layers.delete(w), b.layersWithOutsidePointerEventsDisabled.delete(w), m())
                    }, [w, b]), o.useEffect(() => {
                        let e = () => C({});
                        return document.addEventListener(c, e), () => document.removeEventListener(c, e)
                    }, []), (0, l.jsx)(i.WV.div, { ...h,
                        ref: D,
                        style: {
                            pointerEvents: T ? P ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, u.M)(e.onFocusCapture, W.onFocusCapture),
                        onBlurCapture: (0, u.M)(e.onBlurCapture, W.onBlurCapture),
                        onPointerDownCapture: (0, u.M)(e.onPointerDownCapture, L.onPointerDownCapture)
                    })
                });
            f.displayName = "DismissableLayer";
            var p = o.forwardRef((e, t) => {
                let n = o.useContext(d),
                    r = o.useRef(null),
                    u = (0, a.e)(t, r);
                return o.useEffect(() => {
                    let e = r.current;
                    if (e) return n.branches.add(e), () => {
                        n.branches.delete(e)
                    }
                }, [n.branches]), (0, l.jsx)(i.WV.div, { ...e,
                    ref: u
                })
            });

            function m() {
                let e = new CustomEvent(c);
                document.dispatchEvent(e)
            }

            function v(e, t, n, {
                discrete: r
            }) {
                let o = n.originalEvent.target,
                    u = new CustomEvent(e, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: n
                    });
                t && o.addEventListener(e, t, {
                    once: !0
                }), r ? (0, i.jH)(o, u) : o.dispatchEvent(u)
            }
            p.displayName = "DismissableLayerBranch";
            var y = f,
                g = p
        },
        98928: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return s
                }
            });
            var r, o = n(78572),
                u = n(49030),
                i = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
                a = 0;

            function s(e) {
                let [t, n] = o.useState(i());
                return (0, u.b)(() => {
                    e || n(e => e ? ? String(a++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
        },
        88688: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return s
                }
            });
            var r = n(78572),
                o = n(36785),
                u = n(88950),
                i = n(49030),
                a = n(92284),
                s = r.forwardRef((e, t) => {
                    let {
                        container: n,
                        ...s
                    } = e, [l, c] = r.useState(!1);
                    (0, i.b)(() => c(!0), []);
                    let d = n || l && globalThis ? .document ? .body;
                    return d ? o.createPortal((0, a.jsx)(u.WV.div, { ...s,
                        ref: t
                    }), d) : null
                });
            s.displayName = "Portal"
        },
        90703: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return i
                }
            });
            var r = n(78572),
                o = n(79777),
                u = n(49030),
                i = e => {
                    let t, n;
                    let {
                        present: i,
                        children: s
                    } = e, l = function(e) {
                        var t;
                        let [n, o] = r.useState(), i = r.useRef({}), s = r.useRef(e), l = r.useRef("none"), c = e ? "mounted" : "unmounted", [d, f] = (t = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, r.useReducer((e, n) => {
                            let r = t[e][n];
                            return r ? ? e
                        }, c));
                        return r.useEffect(() => {
                            let e = a(i.current);
                            l.current = "mounted" === d ? e : "none"
                        }, [d]), (0, u.b)(() => {
                            let t = i.current,
                                n = s.current,
                                r = n !== e;
                            if (r) {
                                let r = l.current,
                                    o = a(t);
                                e ? f("MOUNT") : "none" === o || t ? .display === "none" ? f("UNMOUNT") : n && r !== o ? f("ANIMATION_OUT") : f("UNMOUNT"), s.current = e
                            }
                        }, [e, f]), (0, u.b)(() => {
                            if (n) {
                                let e;
                                let t = n.ownerDocument.defaultView ? ? window,
                                    r = r => {
                                        let o = a(i.current),
                                            u = o.includes(r.animationName);
                                        if (r.target === n && u && (f("ANIMATION_END"), !s.current)) {
                                            let r = n.style.animationFillMode;
                                            n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                                                "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                                            })
                                        }
                                    },
                                    o = e => {
                                        e.target === n && (l.current = a(i.current))
                                    };
                                return n.addEventListener("animationstart", o), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                                    t.clearTimeout(e), n.removeEventListener("animationstart", o), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
                                }
                            }
                            f("ANIMATION_END")
                        }, [n, f]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(d),
                            ref: r.useCallback(e => {
                                e && (i.current = getComputedStyle(e)), o(e)
                            }, [])
                        }
                    }(i), c = "function" == typeof s ? s({
                        present: l.isPresent
                    }) : r.Children.only(s), d = (0, o.e)(l.ref, (t = Object.getOwnPropertyDescriptor(c.props, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning ? c.ref : (t = Object.getOwnPropertyDescriptor(c, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning ? c.props.ref : c.props.ref || c.ref), f = "function" == typeof s;
                    return f || l.isPresent ? r.cloneElement(c, {
                        ref: d
                    }) : null
                };

            function a(e) {
                return e ? .animationName || "none"
            }
            i.displayName = "Presence"
        },
        88950: function(e, t, n) {
            n.d(t, {
                WV: function() {
                    return a
                },
                jH: function() {
                    return s
                }
            });
            var r = n(78572),
                o = n(36785),
                u = n(69340),
                i = n(92284),
                a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let Node = r.forwardRef((e, n) => {
                        let {
                            asChild: r,
                            ...o
                        } = e, a = r ? u.g7 : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, { ...o,
                            ref: n
                        })
                    });
                    return Node.displayName = `Primitive.${t}`, { ...e,
                        [t]: Node
                    }
                }, {});

            function s(e, t) {
                e && o.flushSync(() => e.dispatchEvent(t))
            }
        },
        61855: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return o
                }
            });
            var r = n(78572);

            function o(e) {
                let t = r.useRef(e);
                return r.useEffect(() => {
                    t.current = e
                }), r.useMemo(() => (...e) => t.current ? .(...e), [])
            }
        },
        64444: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return u
                }
            });
            var r = n(78572),
                o = n(61855);

            function u({
                prop: e,
                defaultProp: t,
                onChange: n = () => {}
            }) {
                let [u, i] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let n = r.useState(e),
                        [u] = n,
                        i = r.useRef(u),
                        a = (0, o.W)(t);
                    return r.useEffect(() => {
                        i.current !== u && (a(u), i.current = u)
                    }, [u, i, a]), n
                }({
                    defaultProp: t,
                    onChange: n
                }), a = void 0 !== e, s = a ? e : u, l = (0, o.W)(n), c = r.useCallback(t => {
                    if (a) {
                        let n = "function" == typeof t ? t(e) : t;
                        n !== e && l(n)
                    } else i(t)
                }, [a, e, i, l]);
                return [s, c]
            }
        },
        49030: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return o
                }
            });
            var r = n(78572),
                o = globalThis ? .document ? r.useLayoutEffect : () => {}
        }
    }
]);