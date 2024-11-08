"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2491], {
        67854: function(t, e, r) {
            r.d(e, {
                j: function() {
                    return n
                }
            });
            var s = r(26047),
                i = r(18636),
                n = new class extends s.l {#
                    t;#
                    e;#
                    r;
                    constructor() {
                        super(), this.#r = t => {
                            if (!i.sk && window.addEventListener) {
                                let e = () => t();
                                return window.addEventListener("visibilitychange", e, !1), () => {
                                    window.removeEventListener("visibilitychange", e)
                                }
                            }
                        }
                    }
                    onSubscribe() {
                        this.#e || this.setEventListener(this.#r)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || (this.#e ? .(), this.#e = void 0)
                    }
                    setEventListener(t) {
                        this.#r = t, this.#e ? .(), this.#e = t(t => {
                            "boolean" == typeof t ? this.setFocused(t) : this.onFocus()
                        })
                    }
                    setFocused(t) {
                        let e = this.#t !== t;
                        e && (this.#t = t, this.onFocus())
                    }
                    onFocus() {
                        let t = this.isFocused();
                        this.listeners.forEach(e => {
                            e(t)
                        })
                    }
                    isFocused() {
                        return "boolean" == typeof this.#t ? this.#t : globalThis.document ? .visibilityState !== "hidden"
                    }
                }
        },
        75639: function(t, e, r) {
            r.d(e, {
                V: function() {
                    return s
                }
            });
            var s = function() {
                let t = [],
                    e = 0,
                    r = t => {
                        t()
                    },
                    s = t => {
                        t()
                    },
                    i = t => setTimeout(t, 0),
                    n = s => {
                        e ? t.push(s) : i(() => {
                            r(s)
                        })
                    },
                    u = () => {
                        let e = t;
                        t = [], e.length && i(() => {
                            s(() => {
                                e.forEach(t => {
                                    r(t)
                                })
                            })
                        })
                    };
                return {
                    batch: t => {
                        let r;
                        e++;
                        try {
                            r = t()
                        } finally {
                            --e || u()
                        }
                        return r
                    },
                    batchCalls: t => (...e) => {
                        n(() => {
                            t(...e)
                        })
                    },
                    schedule: n,
                    setNotifyFunction: t => {
                        r = t
                    },
                    setBatchNotifyFunction: t => {
                        s = t
                    },
                    setScheduler: t => {
                        i = t
                    }
                }
            }()
        },
        79746: function(t, e, r) {
            r.d(e, {
                N: function() {
                    return n
                }
            });
            var s = r(26047),
                i = r(18636),
                n = new class extends s.l {#
                    s = !0;#
                    e;#
                    r;
                    constructor() {
                        super(), this.#r = t => {
                            if (!i.sk && window.addEventListener) {
                                let e = () => t(!0),
                                    r = () => t(!1);
                                return window.addEventListener("online", e, !1), window.addEventListener("offline", r, !1), () => {
                                    window.removeEventListener("online", e), window.removeEventListener("offline", r)
                                }
                            }
                        }
                    }
                    onSubscribe() {
                        this.#e || this.setEventListener(this.#r)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || (this.#e ? .(), this.#e = void 0)
                    }
                    setEventListener(t) {
                        this.#r = t, this.#e ? .(), this.#e = t(this.setOnline.bind(this))
                    }
                    setOnline(t) {
                        let e = this.#s !== t;
                        e && (this.#s = t, this.listeners.forEach(e => {
                            e(t)
                        }))
                    }
                    isOnline() {
                        return this.#s
                    }
                }
        },
        11514: function(t, e, r) {
            r.d(e, {
                A: function() {
                    return o
                },
                z: function() {
                    return a
                }
            });
            var s = r(18636),
                i = r(75639),
                n = r(43950),
                u = r(32947),
                o = class extends u.F {#
                    i;#
                    n;#
                    u;#
                    o;#
                    a;#
                    c;
                    constructor(t) {
                        super(), this.#c = !1, this.#a = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.#u = t.cache, this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.#i = function(t) {
                            let e = "function" == typeof t.initialData ? t.initialData() : t.initialData,
                                r = void 0 !== e,
                                s = r ? "function" == typeof t.initialDataUpdatedAt ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
                            return {
                                data: e,
                                dataUpdateCount: 0,
                                dataUpdatedAt: r ? s ? ? Date.now() : 0,
                                error: null,
                                errorUpdateCount: 0,
                                errorUpdatedAt: 0,
                                fetchFailureCount: 0,
                                fetchFailureReason: null,
                                fetchMeta: null,
                                isInvalidated: !1,
                                status: r ? "success" : "pending",
                                fetchStatus: "idle"
                            }
                        }(this.options), this.state = t.state ? ? this.#i, this.scheduleGc()
                    }
                    get meta() {
                        return this.options.meta
                    }
                    get promise() {
                        return this.#o ? .promise
                    }
                    setOptions(t) {
                        this.options = { ...this.#a,
                            ...t
                        }, this.updateGcTime(this.options.gcTime)
                    }
                    optionalRemove() {
                        this.observers.length || "idle" !== this.state.fetchStatus || this.#u.remove(this)
                    }
                    setData(t, e) {
                        let r = (0, s.oE)(this.state.data, t, this.options);
                        return this.#h({
                            data: r,
                            type: "success",
                            dataUpdatedAt: e ? .updatedAt,
                            manual: e ? .manual
                        }), r
                    }
                    setState(t, e) {
                        this.#h({
                            type: "setState",
                            state: t,
                            setStateOptions: e
                        })
                    }
                    cancel(t) {
                        let e = this.#o ? .promise;
                        return this.#o ? .cancel(t), e ? e.then(s.ZT).catch(s.ZT) : Promise.resolve()
                    }
                    destroy() {
                        super.destroy(), this.cancel({
                            silent: !0
                        })
                    }
                    reset() {
                        this.destroy(), this.setState(this.#i)
                    }
                    isActive() {
                        return this.observers.some(t => !1 !== (0, s.Nc)(t.options.enabled, this))
                    }
                    isDisabled() {
                        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === s.CN || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
                    }
                    isStale() {
                        return !!this.state.isInvalidated || (this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : void 0 === this.state.data)
                    }
                    isStaleByTime(t = 0) {
                        return this.state.isInvalidated || void 0 === this.state.data || !(0, s.Kp)(this.state.dataUpdatedAt, t)
                    }
                    onFocus() {
                        let t = this.observers.find(t => t.shouldFetchOnWindowFocus());
                        t ? .refetch({
                            cancelRefetch: !1
                        }), this.#o ? .continue()
                    }
                    onOnline() {
                        let t = this.observers.find(t => t.shouldFetchOnReconnect());
                        t ? .refetch({
                            cancelRefetch: !1
                        }), this.#o ? .continue()
                    }
                    addObserver(t) {
                        this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.#u.notify({
                            type: "observerAdded",
                            query: this,
                            observer: t
                        }))
                    }
                    removeObserver(t) {
                        this.observers.includes(t) && (this.observers = this.observers.filter(e => e !== t), this.observers.length || (this.#o && (this.#c ? this.#o.cancel({
                            revert: !0
                        }) : this.#o.cancelRetry()), this.scheduleGc()), this.#u.notify({
                            type: "observerRemoved",
                            query: this,
                            observer: t
                        }))
                    }
                    getObserversCount() {
                        return this.observers.length
                    }
                    invalidate() {
                        this.state.isInvalidated || this.#h({
                            type: "invalidate"
                        })
                    }
                    fetch(t, e) {
                        if ("idle" !== this.state.fetchStatus) {
                            if (void 0 !== this.state.data && e ? .cancelRefetch) this.cancel({
                                silent: !0
                            });
                            else if (this.#o) return this.#o.continueRetry(), this.#o.promise
                        }
                        if (t && this.setOptions(t), !this.options.queryFn) {
                            let t = this.observers.find(t => t.options.queryFn);
                            t && this.setOptions(t.options)
                        }
                        let r = new AbortController,
                            i = t => {
                                Object.defineProperty(t, "signal", {
                                    enumerable: !0,
                                    get: () => (this.#c = !0, r.signal)
                                })
                            },
                            u = {
                                fetchOptions: e,
                                options: this.options,
                                queryKey: this.queryKey,
                                state: this.state,
                                fetchFn: () => {
                                    let t = (0, s.cG)(this.options, e),
                                        r = {
                                            queryKey: this.queryKey,
                                            meta: this.meta
                                        };
                                    return (i(r), this.#c = !1, this.options.persister) ? this.options.persister(t, r, this) : t(r)
                                }
                            };
                        i(u), this.options.behavior ? .onFetch(u, this), this.#n = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== u.fetchOptions ? .meta) && this.#h({
                            type: "fetch",
                            meta: u.fetchOptions ? .meta
                        });
                        let o = t => {
                            (0, n.DV)(t) && t.silent || this.#h({
                                type: "error",
                                error: t
                            }), (0, n.DV)(t) || (this.#u.config.onError ? .(t, this), this.#u.config.onSettled ? .(this.state.data, t, this)), this.scheduleGc()
                        };
                        return this.#o = (0, n.Mz)({
                            initialPromise: e ? .initialPromise,
                            fn: u.fetchFn,
                            abort: r.abort.bind(r),
                            onSuccess: t => {
                                if (void 0 === t) {
                                    o(Error(`${this.queryHash} data is undefined`));
                                    return
                                }
                                try {
                                    this.setData(t)
                                } catch (t) {
                                    o(t);
                                    return
                                }
                                this.#u.config.onSuccess ? .(t, this), this.#u.config.onSettled ? .(t, this.state.error, this), this.scheduleGc()
                            },
                            onError: o,
                            onFail: (t, e) => {
                                this.#h({
                                    type: "failed",
                                    failureCount: t,
                                    error: e
                                })
                            },
                            onPause: () => {
                                this.#h({
                                    type: "pause"
                                })
                            },
                            onContinue: () => {
                                this.#h({
                                    type: "continue"
                                })
                            },
                            retry: u.options.retry,
                            retryDelay: u.options.retryDelay,
                            networkMode: u.options.networkMode,
                            canRun: () => !0
                        }), this.#o.start()
                    }#
                    h(t) {
                        this.state = (e => {
                            switch (t.type) {
                                case "failed":
                                    return { ...e,
                                        fetchFailureCount: t.failureCount,
                                        fetchFailureReason: t.error
                                    };
                                case "pause":
                                    return { ...e,
                                        fetchStatus: "paused"
                                    };
                                case "continue":
                                    return { ...e,
                                        fetchStatus: "fetching"
                                    };
                                case "fetch":
                                    return { ...e,
                                        ...a(e.data, this.options),
                                        fetchMeta: t.meta ? ? null
                                    };
                                case "success":
                                    return { ...e,
                                        data: t.data,
                                        dataUpdateCount: e.dataUpdateCount + 1,
                                        dataUpdatedAt: t.dataUpdatedAt ? ? Date.now(),
                                        error: null,
                                        isInvalidated: !1,
                                        status: "success",
                                        ...!t.manual && {
                                            fetchStatus: "idle",
                                            fetchFailureCount: 0,
                                            fetchFailureReason: null
                                        }
                                    };
                                case "error":
                                    let r = t.error;
                                    if ((0, n.DV)(r) && r.revert && this.#n) return { ...this.#n,
                                        fetchStatus: "idle"
                                    };
                                    return { ...e,
                                        error: r,
                                        errorUpdateCount: e.errorUpdateCount + 1,
                                        errorUpdatedAt: Date.now(),
                                        fetchFailureCount: e.fetchFailureCount + 1,
                                        fetchFailureReason: r,
                                        fetchStatus: "idle",
                                        status: "error"
                                    };
                                case "invalidate":
                                    return { ...e,
                                        isInvalidated: !0
                                    };
                                case "setState":
                                    return { ...e,
                                        ...t.state
                                    }
                            }
                        })(this.state), i.V.batch(() => {
                            this.observers.forEach(t => {
                                t.onQueryUpdate()
                            }), this.#u.notify({
                                query: this,
                                type: "updated",
                                action: t
                            })
                        })
                    }
                };

            function a(t, e) {
                return {
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchStatus: (0, n.Kw)(e.networkMode) ? "fetching" : "paused",
                    ...void 0 === t && {
                        error: null,
                        status: "pending"
                    }
                }
            }
        },
        32947: function(t, e, r) {
            r.d(e, {
                F: function() {
                    return i
                }
            });
            var s = r(18636),
                i = class {#
                    l;
                    destroy() {
                        this.clearGcTimeout()
                    }
                    scheduleGc() {
                        this.clearGcTimeout(), (0, s.PN)(this.gcTime) && (this.#l = setTimeout(() => {
                            this.optionalRemove()
                        }, this.gcTime))
                    }
                    updateGcTime(t) {
                        this.gcTime = Math.max(this.gcTime || 0, t ? ? (s.sk ? 1 / 0 : 3e5))
                    }
                    clearGcTimeout() {
                        this.#l && (clearTimeout(this.#l), this.#l = void 0)
                    }
                }
        },
        43950: function(t, e, r) {
            r.d(e, {
                DV: function() {
                    return h
                },
                Kw: function() {
                    return a
                },
                Mz: function() {
                    return l
                }
            });
            var s = r(67854),
                i = r(79746),
                n = r(25036),
                u = r(18636);

            function o(t) {
                return Math.min(1e3 * 2 ** t, 3e4)
            }

            function a(t) {
                return (t ? ? "online") !== "online" || i.N.isOnline()
            }
            var c = class extends Error {
                constructor(t) {
                    super("CancelledError"), this.revert = t ? .revert, this.silent = t ? .silent
                }
            };

            function h(t) {
                return t instanceof c
            }

            function l(t) {
                let e, r = !1,
                    h = 0,
                    l = !1,
                    d = (0, n.O)(),
                    f = () => s.j.isFocused() && ("always" === t.networkMode || i.N.isOnline()) && t.canRun(),
                    p = () => a(t.networkMode) && t.canRun(),
                    y = r => {
                        l || (l = !0, t.onSuccess ? .(r), e ? .(), d.resolve(r))
                    },
                    v = r => {
                        l || (l = !0, t.onError ? .(r), e ? .(), d.reject(r))
                    },
                    b = () => new Promise(r => {
                        e = t => {
                            (l || f()) && r(t)
                        }, t.onPause ? .()
                    }).then(() => {
                        e = void 0, l || t.onContinue ? .()
                    }),
                    m = () => {
                        let e;
                        if (l) return;
                        let s = 0 === h ? t.initialPromise : void 0;
                        try {
                            e = s ? ? t.fn()
                        } catch (t) {
                            e = Promise.reject(t)
                        }
                        Promise.resolve(e).then(y).catch(e => {
                            if (l) return;
                            let s = t.retry ? ? (u.sk ? 0 : 3),
                                i = t.retryDelay ? ? o,
                                n = "function" == typeof i ? i(h, e) : i,
                                a = !0 === s || "number" == typeof s && h < s || "function" == typeof s && s(h, e);
                            if (r || !a) {
                                v(e);
                                return
                            }
                            h++, t.onFail ? .(h, e), (0, u._v)(n).then(() => f() ? void 0 : b()).then(() => {
                                r ? v(e) : m()
                            })
                        })
                    };
                return {
                    promise: d,
                    cancel: e => {
                        l || (v(new c(e)), t.abort ? .())
                    },
                    continue: () => (e ? .(), d),
                    cancelRetry: () => {
                        r = !0
                    },
                    continueRetry: () => {
                        r = !1
                    },
                    canStart: p,
                    start: () => (p() ? m() : b().then(m), d)
                }
            }
        },
        26047: function(t, e, r) {
            r.d(e, {
                l: function() {
                    return s
                }
            });
            var s = class {
                constructor() {
                    this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
                }
                subscribe(t) {
                    return this.listeners.add(t), this.onSubscribe(), () => {
                        this.listeners.delete(t), this.onUnsubscribe()
                    }
                }
                hasListeners() {
                    return this.listeners.size > 0
                }
                onSubscribe() {}
                onUnsubscribe() {}
            }
        },
        25036: function(t, e, r) {
            r.d(e, {
                O: function() {
                    return s
                }
            });

            function s() {
                let t, e;
                let r = new Promise((r, s) => {
                    t = r, e = s
                });

                function s(t) {
                    Object.assign(r, t), delete r.resolve, delete r.reject
                }
                return r.status = "pending", r.catch(() => {}), r.resolve = e => {
                    s({
                        status: "fulfilled",
                        value: e
                    }), t(e)
                }, r.reject = t => {
                    s({
                        status: "rejected",
                        reason: t
                    }), e(t)
                }, r
            }
        },
        18636: function(t, e, r) {
            r.d(e, {
                CN: function() {
                    return w
                },
                Ht: function() {
                    return C
                },
                KC: function() {
                    return a
                },
                Kp: function() {
                    return o
                },
                Nc: function() {
                    return c
                },
                PN: function() {
                    return u
                },
                Q$: function() {
                    return y
                },
                Rm: function() {
                    return d
                },
                SE: function() {
                    return n
                },
                VS: function() {
                    return v
                },
                VX: function() {
                    return S
                },
                X7: function() {
                    return l
                },
                Ym: function() {
                    return f
                },
                ZT: function() {
                    return i
                },
                _v: function() {
                    return g
                },
                _x: function() {
                    return h
                },
                cG: function() {
                    return F
                },
                oE: function() {
                    return O
                },
                sk: function() {
                    return s
                },
                to: function() {
                    return p
                }
            });
            var s = "undefined" == typeof window || "Deno" in globalThis;

            function i() {}

            function n(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function u(t) {
                return "number" == typeof t && t >= 0 && t !== 1 / 0
            }

            function o(t, e) {
                return Math.max(t + (e || 0) - Date.now(), 0)
            }

            function a(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function c(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function h(t, e) {
                let {
                    type: r = "all",
                    exact: s,
                    fetchStatus: i,
                    predicate: n,
                    queryKey: u,
                    stale: o
                } = t;
                if (u) {
                    if (s) {
                        if (e.queryHash !== d(u, e.options)) return !1
                    } else if (!p(e.queryKey, u)) return !1
                }
                if ("all" !== r) {
                    let t = e.isActive();
                    if ("active" === r && !t || "inactive" === r && t) return !1
                }
                return ("boolean" != typeof o || e.isStale() === o) && (!i || i === e.state.fetchStatus) && (!n || !!n(e))
            }

            function l(t, e) {
                let {
                    exact: r,
                    status: s,
                    predicate: i,
                    mutationKey: n
                } = t;
                if (n) {
                    if (!e.options.mutationKey) return !1;
                    if (r) {
                        if (f(e.options.mutationKey) !== f(n)) return !1
                    } else if (!p(e.options.mutationKey, n)) return !1
                }
                return (!s || e.state.status === s) && (!i || !!i(e))
            }

            function d(t, e) {
                let r = e ? .queryKeyHashFn || f;
                return r(t)
            }

            function f(t) {
                return JSON.stringify(t, (t, e) => m(e) ? Object.keys(e).sort().reduce((t, r) => (t[r] = e[r], t), {}) : e)
            }

            function p(t, e) {
                return t === e || typeof t == typeof e && !!t && !!e && "object" == typeof t && "object" == typeof e && !Object.keys(e).some(r => !p(t[r], e[r]))
            }

            function y(t, e) {
                if (t === e) return t;
                let r = b(t) && b(e);
                if (r || m(t) && m(e)) {
                    let s = r ? t : Object.keys(t),
                        i = s.length,
                        n = r ? e : Object.keys(e),
                        u = n.length,
                        o = r ? [] : {},
                        a = 0;
                    for (let i = 0; i < u; i++) {
                        let u = r ? i : n[i];
                        (!r && s.includes(u) || r) && void 0 === t[u] && void 0 === e[u] ? (o[u] = void 0, a++) : (o[u] = y(t[u], e[u]), o[u] === t[u] && void 0 !== t[u] && a++)
                    }
                    return i === u && a === i ? t : o
                }
                return e
            }

            function v(t, e) {
                if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
                for (let r in t)
                    if (t[r] !== e[r]) return !1;
                return !0
            }

            function b(t) {
                return Array.isArray(t) && t.length === Object.keys(t).length
            }

            function m(t) {
                if (!R(t)) return !1;
                let e = t.constructor;
                if (void 0 === e) return !0;
                let r = e.prototype;
                return !!(R(r) && r.hasOwnProperty("isPrototypeOf")) && Object.getPrototypeOf(t) === Object.prototype
            }

            function R(t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }

            function g(t) {
                return new Promise(e => {
                    setTimeout(e, t)
                })
            }

            function O(t, e, r) {
                return "function" == typeof r.structuralSharing ? r.structuralSharing(t, e) : !1 !== r.structuralSharing ? y(t, e) : e
            }

            function S(t, e, r = 0) {
                let s = [...t, e];
                return r && s.length > r ? s.slice(1) : s
            }

            function C(t, e, r = 0) {
                let s = [e, ...t];
                return r && s.length > r ? s.slice(0, -1) : s
            }
            var w = Symbol();

            function F(t, e) {
                return !t.queryFn && e ? .initialPromise ? () => e.initialPromise : t.queryFn && t.queryFn !== w ? t.queryFn : () => Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`))
            }
        },
        46735: function(t, e, r) {
            r.d(e, {
                NL: function() {
                    return u
                },
                aH: function() {
                    return o
                }
            });
            var s = r(78572),
                i = r(92284),
                n = s.createContext(void 0),
                u = t => {
                    let e = s.useContext(n);
                    if (t) return t;
                    if (!e) throw Error("No QueryClient set, use QueryClientProvider to set one");
                    return e
                },
                o = ({
                    client: t,
                    children: e
                }) => (s.useEffect(() => (t.mount(), () => {
                    t.unmount()
                }), [t]), (0, i.jsx)(n.Provider, {
                    value: t,
                    children: e
                }))
        },
        62491: function(t, e, r) {
            let s;
            r.d(e, {
                a: function() {
                    return I
                }
            });
            var i = r(67854),
                n = r(75639),
                u = r(11514),
                o = r(26047),
                a = r(25036),
                c = r(18636),
                h = class extends o.l {
                    constructor(t, e) {
                        super(), this.options = e, this.#d = t, this.#f = null, this.#p = (0, a.O)(), this.options.experimental_prefetchInRender || this.#p.reject(Error("experimental_prefetchInRender feature flag is not enabled")), this.bindMethods(), this.setOptions(e)
                    }#
                    d;#
                    y = void 0;#
                    v = void 0;#
                    b = void 0;#
                    m;#
                    R;#
                    p;#
                    f;#
                    g;#
                    O;#
                    S;#
                    C;#
                    w;#
                    F;#
                    Q = new Set;
                    bindMethods() {
                        this.refetch = this.refetch.bind(this)
                    }
                    onSubscribe() {
                        1 === this.listeners.size && (this.#y.addObserver(this), l(this.#y, this.options) ? this.#E() : this.updateResult(), this.#T())
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.destroy()
                    }
                    shouldFetchOnReconnect() {
                        return d(this.#y, this.options, this.options.refetchOnReconnect)
                    }
                    shouldFetchOnWindowFocus() {
                        return d(this.#y, this.options, this.options.refetchOnWindowFocus)
                    }
                    destroy() {
                        this.listeners = new Set, this.#I(), this.#k(), this.#y.removeObserver(this)
                    }
                    setOptions(t, e) {
                        let r = this.options,
                            s = this.#y;
                        if (this.options = this.#d.defaultQueryOptions(t), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled && "function" != typeof this.options.enabled && "boolean" != typeof(0, c.Nc)(this.options.enabled, this.#y)) throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
                        this.#U(), this.#y.setOptions(this.options), r._defaulted && !(0, c.VS)(this.options, r) && this.#d.getQueryCache().notify({
                            type: "observerOptionsUpdated",
                            query: this.#y,
                            observer: this
                        });
                        let i = this.hasListeners();
                        i && f(this.#y, s, this.options, r) && this.#E(), this.updateResult(e), i && (this.#y !== s || (0, c.Nc)(this.options.enabled, this.#y) !== (0, c.Nc)(r.enabled, this.#y) || (0, c.KC)(this.options.staleTime, this.#y) !== (0, c.KC)(r.staleTime, this.#y)) && this.#D();
                        let n = this.#P();
                        i && (this.#y !== s || (0, c.Nc)(this.options.enabled, this.#y) !== (0, c.Nc)(r.enabled, this.#y) || n !== this.#F) && this.#q(n)
                    }
                    getOptimisticResult(t) {
                        let e = this.#d.getQueryCache().build(this.#d, t),
                            r = this.createResult(e, t);
                        return (0, c.VS)(this.getCurrentResult(), r) || (this.#b = r, this.#R = this.options, this.#m = this.#y.state), r
                    }
                    getCurrentResult() {
                        return this.#b
                    }
                    trackResult(t, e) {
                        let r = {};
                        return Object.keys(t).forEach(s => {
                            Object.defineProperty(r, s, {
                                configurable: !1,
                                enumerable: !0,
                                get: () => (this.trackProp(s), e ? .(s), t[s])
                            })
                        }), r
                    }
                    trackProp(t) {
                        this.#Q.add(t)
                    }
                    getCurrentQuery() {
                        return this.#y
                    }
                    refetch({ ...t
                    } = {}) {
                        return this.fetch({ ...t
                        })
                    }
                    fetchOptimistic(t) {
                        let e = this.#d.defaultQueryOptions(t),
                            r = this.#d.getQueryCache().build(this.#d, e);
                        return r.fetch().then(() => this.createResult(r, e))
                    }
                    fetch(t) {
                        return this.#E({ ...t,
                            cancelRefetch: t.cancelRefetch ? ? !0
                        }).then(() => (this.updateResult(), this.#b))
                    }#
                    E(t) {
                        this.#U();
                        let e = this.#y.fetch(this.options, t);
                        return t ? .throwOnError || (e = e.catch(c.ZT)), e
                    }#
                    D() {
                        this.#I();
                        let t = (0, c.KC)(this.options.staleTime, this.#y);
                        if (c.sk || this.#b.isStale || !(0, c.PN)(t)) return;
                        let e = (0, c.Kp)(this.#b.dataUpdatedAt, t);
                        this.#C = setTimeout(() => {
                            this.#b.isStale || this.updateResult()
                        }, e + 1)
                    }#
                    P() {
                        return ("function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.#y) : this.options.refetchInterval) ? ? !1
                    }#
                    q(t) {
                        this.#k(), this.#F = t, !c.sk && !1 !== (0, c.Nc)(this.options.enabled, this.#y) && (0, c.PN)(this.#F) && 0 !== this.#F && (this.#w = setInterval(() => {
                            (this.options.refetchIntervalInBackground || i.j.isFocused()) && this.#E()
                        }, this.#F))
                    }#
                    T() {
                        this.#D(), this.#q(this.#P())
                    }#
                    I() {
                        this.#C && (clearTimeout(this.#C), this.#C = void 0)
                    }#
                    k() {
                        this.#w && (clearInterval(this.#w), this.#w = void 0)
                    }
                    createResult(t, e) {
                        let r;
                        let s = this.#y,
                            i = this.options,
                            n = this.#b,
                            o = this.#m,
                            h = this.#R,
                            d = t !== s,
                            y = d ? t.state : this.#v,
                            {
                                state: v
                            } = t,
                            b = { ...v
                            },
                            m = !1;
                        if (e._optimisticResults) {
                            let r = this.hasListeners(),
                                n = !r && l(t, e),
                                o = r && f(t, s, e, i);
                            (n || o) && (b = { ...b,
                                ...(0, u.z)(v.data, t.options)
                            }), "isRestoring" === e._optimisticResults && (b.fetchStatus = "idle")
                        }
                        let {
                            error: R,
                            errorUpdatedAt: g,
                            status: O
                        } = b;
                        if (e.select && void 0 !== b.data) {
                            if (n && b.data === o ? .data && e.select === this.#g) r = this.#O;
                            else try {
                                this.#g = e.select, r = e.select(b.data), r = (0, c.oE)(n ? .data, r, e), this.#O = r, this.#f = null
                            } catch (t) {
                                this.#f = t
                            }
                        } else r = b.data;
                        if (void 0 !== e.placeholderData && void 0 === r && "pending" === O) {
                            let t;
                            if (n ? .isPlaceholderData && e.placeholderData === h ? .placeholderData) t = n.data;
                            else if (t = "function" == typeof e.placeholderData ? e.placeholderData(this.#S ? .state.data, this.#S) : e.placeholderData, e.select && void 0 !== t) try {
                                t = e.select(t), this.#f = null
                            } catch (t) {
                                this.#f = t
                            }
                            void 0 !== t && (O = "success", r = (0, c.oE)(n ? .data, t, e), m = !0)
                        }
                        this.#f && (R = this.#f, r = this.#O, g = Date.now(), O = "error");
                        let S = "fetching" === b.fetchStatus,
                            C = "pending" === O,
                            w = "error" === O,
                            F = C && S,
                            Q = void 0 !== r,
                            E = {
                                status: O,
                                fetchStatus: b.fetchStatus,
                                isPending: C,
                                isSuccess: "success" === O,
                                isError: w,
                                isInitialLoading: F,
                                isLoading: F,
                                data: r,
                                dataUpdatedAt: b.dataUpdatedAt,
                                error: R,
                                errorUpdatedAt: g,
                                failureCount: b.fetchFailureCount,
                                failureReason: b.fetchFailureReason,
                                errorUpdateCount: b.errorUpdateCount,
                                isFetched: b.dataUpdateCount > 0 || b.errorUpdateCount > 0,
                                isFetchedAfterMount: b.dataUpdateCount > y.dataUpdateCount || b.errorUpdateCount > y.errorUpdateCount,
                                isFetching: S,
                                isRefetching: S && !C,
                                isLoadingError: w && !Q,
                                isPaused: "paused" === b.fetchStatus,
                                isPlaceholderData: m,
                                isRefetchError: w && Q,
                                isStale: p(t, e),
                                refetch: this.refetch,
                                promise: this.#p
                            };
                        if (this.options.experimental_prefetchInRender) {
                            let e = t => {
                                    "error" === E.status ? t.reject(E.error) : void 0 !== E.data && t.resolve(E.data)
                                },
                                r = () => {
                                    let t = this.#p = E.promise = (0, a.O)();
                                    e(t)
                                },
                                i = this.#p;
                            switch (i.status) {
                                case "pending":
                                    t.queryHash === s.queryHash && e(i);
                                    break;
                                case "fulfilled":
                                    ("error" === E.status || E.data !== i.value) && r();
                                    break;
                                case "rejected":
                                    ("error" !== E.status || E.error !== i.reason) && r()
                            }
                        }
                        return E
                    }
                    updateResult(t) {
                        let e = this.#b,
                            r = this.createResult(this.#y, this.options);
                        if (this.#m = this.#y.state, this.#R = this.options, void 0 !== this.#m.data && (this.#S = this.#y), (0, c.VS)(r, e)) return;
                        this.#b = r;
                        let s = {};
                        t ? .listeners !== !1 && (() => {
                            if (!e) return !0;
                            let {
                                notifyOnChangeProps: t
                            } = this.options, r = "function" == typeof t ? t() : t;
                            if ("all" === r || !r && !this.#Q.size) return !0;
                            let s = new Set(r ? ? this.#Q);
                            return this.options.throwOnError && s.add("error"), Object.keys(this.#b).some(t => {
                                let r = this.#b[t] !== e[t];
                                return r && s.has(t)
                            })
                        })() && (s.listeners = !0), this.#j({ ...s,
                            ...t
                        })
                    }#
                    U() {
                        let t = this.#d.getQueryCache().build(this.#d, this.options);
                        if (t === this.#y) return;
                        let e = this.#y;
                        this.#y = t, this.#v = t.state, this.hasListeners() && (e ? .removeObserver(this), t.addObserver(this))
                    }
                    onQueryUpdate() {
                        this.updateResult(), this.hasListeners() && this.#T()
                    }#
                    j(t) {
                        n.V.batch(() => {
                            t.listeners && this.listeners.forEach(t => {
                                t(this.#b)
                            }), this.#d.getQueryCache().notify({
                                query: this.#y,
                                type: "observerResultsUpdated"
                            })
                        })
                    }
                };

            function l(t, e) {
                return !1 !== (0, c.Nc)(e.enabled, t) && void 0 === t.state.data && !("error" === t.state.status && !1 === e.retryOnMount) || void 0 !== t.state.data && d(t, e, e.refetchOnMount)
            }

            function d(t, e, r) {
                if (!1 !== (0, c.Nc)(e.enabled, t)) {
                    let s = "function" == typeof r ? r(t) : r;
                    return "always" === s || !1 !== s && p(t, e)
                }
                return !1
            }

            function f(t, e, r, s) {
                return (t !== e || !1 === (0, c.Nc)(s.enabled, t)) && (!r.suspense || "error" !== t.state.status) && p(t, r)
            }

            function p(t, e) {
                return !1 !== (0, c.Nc)(e.enabled, t) && t.isStaleByTime((0, c.KC)(e.staleTime, t))
            }
            var y = r(78572),
                v = r(46735);
            r(92284);
            var b = y.createContext((s = !1, {
                    clearReset: () => {
                        s = !1
                    },
                    reset: () => {
                        s = !0
                    },
                    isReset: () => s
                })),
                m = () => y.useContext(b),
                R = r(32578),
                g = (t, e) => {
                    (t.suspense || t.throwOnError) && !e.isReset() && (t.retryOnMount = !1)
                },
                O = t => {
                    y.useEffect(() => {
                        t.clearReset()
                    }, [t])
                },
                S = ({
                    result: t,
                    errorResetBoundary: e,
                    throwOnError: r,
                    query: s
                }) => t.isError && !e.isReset() && !t.isFetching && s && (0, R.L)(r, [t.error, s]),
                C = y.createContext(!1),
                w = () => y.useContext(C);
            C.Provider;
            var F = t => {
                    t.suspense && (void 0 === t.staleTime && (t.staleTime = 1e3), "number" == typeof t.gcTime && (t.gcTime = Math.max(t.gcTime, 1e3)))
                },
                Q = (t, e) => t.isLoading && t.isFetching && !e,
                E = (t, e) => t ? .suspense && e.isPending,
                T = (t, e, r) => e.fetchOptimistic(t).catch(() => {
                    r.clearReset()
                });

            function I(t, e) {
                return function(t, e, r) {
                    let s = (0, v.NL)(r),
                        i = w(),
                        u = m(),
                        o = s.defaultQueryOptions(t);
                    s.getDefaultOptions().queries ? ._experimental_beforeQuery ? .(o), o._optimisticResults = i ? "isRestoring" : "optimistic", F(o), g(o, u), O(u);
                    let a = !s.getQueryCache().get(o.queryHash),
                        [h] = y.useState(() => new e(s, o)),
                        l = h.getOptimisticResult(o);
                    if (y.useSyncExternalStore(y.useCallback(t => {
                            let e = i ? () => void 0 : h.subscribe(n.V.batchCalls(t));
                            return h.updateResult(), e
                        }, [h, i]), () => h.getCurrentResult(), () => h.getCurrentResult()), y.useEffect(() => {
                            h.setOptions(o, {
                                listeners: !1
                            })
                        }, [o, h]), E(o, l)) throw T(o, h, u);
                    if (S({
                            result: l,
                            errorResetBoundary: u,
                            throwOnError: o.throwOnError,
                            query: s.getQueryCache().get(o.queryHash)
                        })) throw l.error;
                    if (s.getDefaultOptions().queries ? ._experimental_afterQuery ? .(o, l), o.experimental_prefetchInRender && !c.sk && Q(l, i)) {
                        let t = a ? T(o, h, u) : s.getQueryCache().get(o.queryHash) ? .promise;
                        t ? .catch(R.Z).finally(() => {
                            h.updateResult()
                        })
                    }
                    return o.notifyOnChangeProps ? l : h.trackResult(l)
                }(t, h, e)
            }
        },
        32578: function(t, e, r) {
            function s(t, e) {
                return "function" == typeof t ? t(...e) : !!t
            }

            function i() {}
            r.d(e, {
                L: function() {
                    return s
                },
                Z: function() {
                    return i
                }
            })
        }
    }
]);