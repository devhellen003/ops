(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9893], {
        22209: function(t, e, s) {
            t.exports = s(50050)
        },
        37494: function(t, e, s) {
            "use strict";
            s.d(e, {
                R: function() {
                    return a
                },
                m: function() {
                    return o
                }
            });
            var i = s(75639),
                r = s(32947),
                n = s(43950),
                o = class extends r.F {#
                    t;#
                    e;#
                    s;
                    constructor(t) {
                        super(), this.mutationId = t.mutationId, this.#e = t.mutationCache, this.#t = [], this.state = t.state || a(), this.setOptions(t.options), this.scheduleGc()
                    }
                    setOptions(t) {
                        this.options = t, this.updateGcTime(this.options.gcTime)
                    }
                    get meta() {
                        return this.options.meta
                    }
                    addObserver(t) {
                        this.#t.includes(t) || (this.#t.push(t), this.clearGcTimeout(), this.#e.notify({
                            type: "observerAdded",
                            mutation: this,
                            observer: t
                        }))
                    }
                    removeObserver(t) {
                        this.#t = this.#t.filter(e => e !== t), this.scheduleGc(), this.#e.notify({
                            type: "observerRemoved",
                            mutation: this,
                            observer: t
                        })
                    }
                    optionalRemove() {
                        this.#t.length || ("pending" === this.state.status ? this.scheduleGc() : this.#e.remove(this))
                    }
                    continue () {
                        return this.#s ? .continue() ? ? this.execute(this.state.variables)
                    }
                    async execute(t) {
                        this.#s = (0, n.Mz)({
                            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(Error("No mutationFn found")),
                            onFail: (t, e) => {
                                this.#i({
                                    type: "failed",
                                    failureCount: t,
                                    error: e
                                })
                            },
                            onPause: () => {
                                this.#i({
                                    type: "pause"
                                })
                            },
                            onContinue: () => {
                                this.#i({
                                    type: "continue"
                                })
                            },
                            retry: this.options.retry ? ? 0,
                            retryDelay: this.options.retryDelay,
                            networkMode: this.options.networkMode,
                            canRun: () => this.#e.canRun(this)
                        });
                        let e = "pending" === this.state.status,
                            s = !this.#s.canStart();
                        try {
                            if (!e) {
                                this.#i({
                                    type: "pending",
                                    variables: t,
                                    isPaused: s
                                }), await this.#e.config.onMutate ? .(t, this);
                                let e = await this.options.onMutate ? .(t);
                                e !== this.state.context && this.#i({
                                    type: "pending",
                                    context: e,
                                    variables: t,
                                    isPaused: s
                                })
                            }
                            let i = await this.#s.start();
                            return await this.#e.config.onSuccess ? .(i, t, this.state.context, this), await this.options.onSuccess ? .(i, t, this.state.context), await this.#e.config.onSettled ? .(i, null, this.state.variables, this.state.context, this), await this.options.onSettled ? .(i, null, t, this.state.context), this.#i({
                                type: "success",
                                data: i
                            }), i
                        } catch (e) {
                            try {
                                throw await this.#e.config.onError ? .(e, t, this.state.context, this), await this.options.onError ? .(e, t, this.state.context), await this.#e.config.onSettled ? .(void 0, e, this.state.variables, this.state.context, this), await this.options.onSettled ? .(void 0, e, t, this.state.context), e
                            } finally {
                                this.#i({
                                    type: "error",
                                    error: e
                                })
                            }
                        } finally {
                            this.#e.runNext(this)
                        }
                    }#
                    i(t) {
                        this.state = (e => {
                            switch (t.type) {
                                case "failed":
                                    return { ...e,
                                        failureCount: t.failureCount,
                                        failureReason: t.error
                                    };
                                case "pause":
                                    return { ...e,
                                        isPaused: !0
                                    };
                                case "continue":
                                    return { ...e,
                                        isPaused: !1
                                    };
                                case "pending":
                                    return { ...e,
                                        context: t.context,
                                        data: void 0,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        isPaused: t.isPaused,
                                        status: "pending",
                                        variables: t.variables,
                                        submittedAt: Date.now()
                                    };
                                case "success":
                                    return { ...e,
                                        data: t.data,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        status: "success",
                                        isPaused: !1
                                    };
                                case "error":
                                    return { ...e,
                                        data: void 0,
                                        error: t.error,
                                        failureCount: e.failureCount + 1,
                                        failureReason: t.error,
                                        isPaused: !1,
                                        status: "error"
                                    }
                            }
                        })(this.state), i.V.batch(() => {
                            this.#t.forEach(e => {
                                e.onMutationUpdate(t)
                            }), this.#e.notify({
                                mutation: this,
                                type: "updated",
                                action: t
                            })
                        })
                    }
                };

            function a() {
                return {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    failureReason: null,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0,
                    submittedAt: 0
                }
            }
        },
        65893: function(t, e, s) {
            "use strict";
            s.d(e, {
                D: function() {
                    return h
                }
            });
            var i = s(78572),
                r = s(37494),
                n = s(75639),
                o = s(26047),
                a = s(18636),
                MutationObserver = class extends o.l {#
                    r;#
                    n = void 0;#
                    o;#
                    a;
                    constructor(t, e) {
                        super(), this.#r = t, this.setOptions(e), this.bindMethods(), this.#u()
                    }
                    bindMethods() {
                        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                    }
                    setOptions(t) {
                        let e = this.options;
                        this.options = this.#r.defaultMutationOptions(t), (0, a.VS)(this.options, e) || this.#r.getMutationCache().notify({
                            type: "observerOptionsUpdated",
                            mutation: this.#o,
                            observer: this
                        }), e ? .mutationKey && this.options.mutationKey && (0, a.Ym)(e.mutationKey) !== (0, a.Ym)(this.options.mutationKey) ? this.reset() : this.#o ? .state.status === "pending" && this.#o.setOptions(this.options)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.#o ? .removeObserver(this)
                    }
                    onMutationUpdate(t) {
                        this.#u(), this.#c(t)
                    }
                    getCurrentResult() {
                        return this.#n
                    }
                    reset() {
                        this.#o ? .removeObserver(this), this.#o = void 0, this.#u(), this.#c()
                    }
                    mutate(t, e) {
                        return this.#a = e, this.#o ? .removeObserver(this), this.#o = this.#r.getMutationCache().build(this.#r, this.options), this.#o.addObserver(this), this.#o.execute(t)
                    }#
                    u() {
                        let t = this.#o ? .state ? ? (0, r.R)();
                        this.#n = { ...t,
                            isPending: "pending" === t.status,
                            isSuccess: "success" === t.status,
                            isError: "error" === t.status,
                            isIdle: "idle" === t.status,
                            mutate: this.mutate,
                            reset: this.reset
                        }
                    }#
                    c(t) {
                        n.V.batch(() => {
                            if (this.#a && this.hasListeners()) {
                                let e = this.#n.variables,
                                    s = this.#n.context;
                                t ? .type === "success" ? (this.#a.onSuccess ? .(t.data, e, s), this.#a.onSettled ? .(t.data, null, e, s)) : t ? .type === "error" && (this.#a.onError ? .(t.error, e, s), this.#a.onSettled ? .(void 0, t.error, e, s))
                            }
                            this.listeners.forEach(t => {
                                t(this.#n)
                            })
                        })
                    }
                },
                u = s(46735),
                c = s(32578);

            function h(t, e) {
                let s = (0, u.NL)(e),
                    [r] = i.useState(() => new MutationObserver(s, t));
                i.useEffect(() => {
                    r.setOptions(t)
                }, [r, t]);
                let o = i.useSyncExternalStore(i.useCallback(t => r.subscribe(n.V.batchCalls(t)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult()),
                    a = i.useCallback((t, e) => {
                        r.mutate(t, e).catch(c.Z)
                    }, [r]);
                if (o.error && (0, c.L)(r.options.throwOnError, [o.error])) throw o.error;
                return { ...o,
                    mutate: a,
                    mutateAsync: o.mutate
                }
            }
        },
        9710: function(t, e, s) {
            "use strict";
            s.d(e, {
                w_: function() {
                    return h
                }
            });
            var i = s(78572),
                r = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                n = i.createContext && i.createContext(r),
                o = ["attr", "size", "title"];

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var s = arguments[e];
                        for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i])
                    }
                    return t
                }).apply(this, arguments)
            }

            function u(t, e) {
                var s = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), s.push.apply(s, i)
                }
                return s
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var s = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(s), !0).forEach(function(e) {
                        var i, r;
                        i = e, r = s[e], (i = function(t) {
                            var e = function(t, e) {
                                if ("object" != typeof t || !t) return t;
                                var s = t[Symbol.toPrimitive];
                                if (void 0 !== s) {
                                    var i = s.call(t, e || "default");
                                    if ("object" != typeof i) return i;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == typeof e ? e : e + ""
                        }(i)) in t ? Object.defineProperty(t, i, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[i] = r
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : u(Object(s)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e))
                    })
                }
                return t
            }

            function h(t) {
                return e => i.createElement(l, a({
                    attr: c({}, t.attr)
                }, e), function t(e) {
                    return e && e.map((e, s) => i.createElement(e.tag, c({
                        key: s
                    }, e.attr), t(e.child)))
                }(t.child))
            }

            function l(t) {
                var e = e => {
                    var s, {
                            attr: r,
                            size: n,
                            title: u
                        } = t,
                        h = function(t, e) {
                            if (null == t) return {};
                            var s, i, r = function(t, e) {
                                if (null == t) return {};
                                var s = {};
                                for (var i in t)
                                    if (Object.prototype.hasOwnProperty.call(t, i)) {
                                        if (e.indexOf(i) >= 0) continue;
                                        s[i] = t[i]
                                    }
                                return s
                            }(t, e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(t);
                                for (i = 0; i < n.length; i++) s = n[i], !(e.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (r[s] = t[s])
                            }
                            return r
                        }(t, o),
                        l = n || e.size || "1em";
                    return e.className && (s = e.className), t.className && (s = (s ? s + " " : "") + t.className), i.createElement("svg", a({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, e.attr, r, h, {
                        className: s,
                        style: c(c({
                            color: t.color || e.color
                        }, e.style), t.style),
                        height: l,
                        width: l,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), u && i.createElement("title", null, u), t.children)
                };
                return void 0 !== n ? i.createElement(n.Consumer, null, t => e(t)) : e(r)
            }
        }
    }
]);