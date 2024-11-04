(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6900], {
        43771: function(e, t, n) {
            "use strict";

            function r(e) {
                var t = e.match(/^var\((.*)\)$/);
                return t ? t[1] : e
            }

            function o(e, t) {
                var n = {};
                if ("object" == typeof t) ! function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        o = {};
                    for (var i in t) {
                        var a = t[i],
                            s = [...r, i];
                        "string" == typeof a || "number" == typeof a || null == a ? o[i] = n(a, s) : "object" != typeof a || Array.isArray(a) ? console.warn('Skipping invalid key "'.concat(s.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(a) ? "Array" : typeof a, '"')) : o[i] = e(a, n, s)
                    }
                    return o
                }(t, (t, o) => {
                    null != t && (n[r(function(e, t) {
                        var n = e;
                        for (var r of t) {
                            if (!(r in n)) throw Error("Path ".concat(t.join(" -> "), " does not exist in object"));
                            n = n[r]
                        }
                        return n
                    }(e, o))] = String(t))
                });
                else
                    for (var o in e) {
                        var i = e[o];
                        null != i && (n[r(o)] = i)
                    }
                return Object.defineProperty(n, "toString", {
                    value: function() {
                        return Object.keys(this).map(e => "".concat(e, ":").concat(this[e])).join(";")
                    },
                    writable: !1
                }), n
            }
            n.d(t, {
                L: function() {
                    return o
                }
            })
        },
        34516: function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach(function(t) {
                        ! function(e, t, n) {
                            var r;
                            (t = "symbol" == typeof(r = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, t || "default");
                                    if ("object" != typeof r) return r;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(t, "string")) ? r : String(r)) in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n
                        }(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            n.d(t, {
                $: function() {
                    return s
                }
            });
            var i = e => function() {
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    var i = Object.assign({}, ...n.map(e => e.styles)),
                        a = Object.keys(i),
                        s = a.filter(e => "mappings" in i[e]);
                    return Object.assign(t => {
                        var n = [],
                            r = {},
                            a = o({}, t),
                            c = !1;
                        for (var l of s) {
                            var u = t[l];
                            if (null != u)
                                for (var d of (c = !0, i[l].mappings)) r[d] = u, null == a[d] && delete a[d]
                        }
                        var p = c ? o(o({}, r), a) : t;
                        for (var h in p)
                            if (function() {
                                    var e = p[h],
                                        t = i[h];
                                    try {
                                        if (t.mappings) return 1;
                                        if ("string" == typeof e || "number" == typeof e) n.push(t.values[e].defaultClass);
                                        else if (Array.isArray(e))
                                            for (var r = 0; r < e.length; r++) {
                                                var o = e[r];
                                                if (null != o) {
                                                    var a = t.responsiveArray[r];
                                                    n.push(t.values[o].conditions[a])
                                                }
                                            } else
                                                for (var s in e) {
                                                    var c = e[s];
                                                    null != c && n.push(t.values[c].conditions[s])
                                                }
                                    } catch (e) {
                                        throw e
                                    }
                                }()) continue;
                        return e(n.join(" "))
                    }, {
                        properties: new Set(a)
                    })
                },
                a = e => e,
                s = function() {
                    return i(a)(...arguments)
                }
        },
        62151: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return i
                },
                M: function() {
                    return o
                }
            });
            var r = function(e, t) {
                return Object.defineProperty(e, "__recipe__", {
                    value: t,
                    writable: !1
                }), e
            };

            function o(e) {
                var {
                    conditions: t
                } = e;
                if (!t) throw Error("Styles have no conditions");
                return r(function(e) {
                    if ("string" == typeof e || "number" == typeof e || "boolean" == typeof e) {
                        if (!t.defaultCondition) throw Error("No default condition");
                        return {
                            [t.defaultCondition]: e
                        }
                    }
                    if (Array.isArray(e)) {
                        if (!("responsiveArray" in t)) throw Error("Responsive arrays are not supported");
                        var n = {};
                        for (var r in t.responsiveArray) null != e[r] && (n[t.responsiveArray[r]] = e[r]);
                        return n
                    }
                    return e
                }, {
                    importPath: "@vanilla-extract/sprinkles/createUtils",
                    importName: "createNormalizeValueFn",
                    args: [{
                        conditions: e.conditions
                    }]
                })
            }

            function i(e) {
                var {
                    conditions: t
                } = e;
                if (!t) throw Error("Styles have no conditions");
                var n = o(e);
                return r(function(e, r) {
                    if ("string" == typeof e || "number" == typeof e || "boolean" == typeof e) {
                        if (!t.defaultCondition) throw Error("No default condition");
                        return r(e, t.defaultCondition)
                    }
                    var o = Array.isArray(e) ? n(e) : e,
                        i = {};
                    for (var a in o) null != o[a] && (i[a] = r(o[a], a));
                    return i
                }, {
                    importPath: "@vanilla-extract/sprinkles/createUtils",
                    importName: "createMapValueFn",
                    args: [{
                        conditions: e.conditions
                    }]
                })
            }
        },
        13526: function(e) {
            "use strict";
            var t = {
                single_source_shortest_paths: function(e, n, r) {
                    var o, i, a, s, c, l, u, d = {},
                        p = {};
                    p[n] = 0;
                    var h = t.PriorityQueue.make();
                    for (h.push(n, 0); !h.empty();)
                        for (a in i = (o = h.pop()).value, s = o.cost, c = e[i] || {}) c.hasOwnProperty(a) && (l = s + c[a], u = p[a], (void 0 === p[a] || u > l) && (p[a] = l, h.push(a, l), d[a] = i));
                    if (void 0 !== r && void 0 === p[r]) throw Error(["Could not find a path from ", n, " to ", r, "."].join(""));
                    return d
                },
                extract_shortest_path_from_predecessor_list: function(e, t) {
                    for (var n = [], r = t; r;) n.push(r), e[r], r = e[r];
                    return n.reverse(), n
                },
                find_path: function(e, n, r) {
                    var o = t.single_source_shortest_paths(e, n, r);
                    return t.extract_shortest_path_from_predecessor_list(o, r)
                },
                PriorityQueue: {
                    make: function(e) {
                        var n, r = t.PriorityQueue,
                            o = {};
                        for (n in e = e || {}, r) r.hasOwnProperty(n) && (o[n] = r[n]);
                        return o.queue = [], o.sorter = e.sorter || r.default_sorter, o
                    },
                    default_sorter: function(e, t) {
                        return e.cost - t.cost
                    },
                    push: function(e, t) {
                        this.queue.push({
                            value: e,
                            cost: t
                        }), this.queue.sort(this.sorter)
                    },
                    pop: function() {
                        return this.queue.shift()
                    },
                    empty: function() {
                        return 0 === this.queue.length
                    }
                }
            };
            e.exports = t
        },
        71100: function(e) {
            "use strict";
            var t = Object.prototype.hasOwnProperty,
                n = "~";

            function r() {}

            function o(e, t, n) {
                this.fn = e, this.context = t, this.once = n || !1
            }

            function i(e, t, r, i, a) {
                if ("function" != typeof r) throw TypeError("The listener must be a function");
                var s = new o(r, i || e, a),
                    c = n ? n + t : t;
                return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], s] : e._events[c].push(s) : (e._events[c] = s, e._eventsCount++), e
            }

            function a(e, t) {
                0 == --e._eventsCount ? e._events = new r : delete e._events[t]
            }

            function s() {
                this._events = new r, this._eventsCount = 0
            }
            Object.create && (r.prototype = Object.create(null), new r().__proto__ || (n = !1)), s.prototype.eventNames = function() {
                var e, r, o = [];
                if (0 === this._eventsCount) return o;
                for (r in e = this._events) t.call(e, r) && o.push(n ? r.slice(1) : r);
                return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(e)) : o
            }, s.prototype.listeners = function(e) {
                var t = n ? n + e : e,
                    r = this._events[t];
                if (!r) return [];
                if (r.fn) return [r.fn];
                for (var o = 0, i = r.length, a = Array(i); o < i; o++) a[o] = r[o].fn;
                return a
            }, s.prototype.listenerCount = function(e) {
                var t = n ? n + e : e,
                    r = this._events[t];
                return r ? r.fn ? 1 : r.length : 0
            }, s.prototype.emit = function(e, t, r, o, i, a) {
                var s = n ? n + e : e;
                if (!this._events[s]) return !1;
                var c, l, u = this._events[s],
                    d = arguments.length;
                if (u.fn) {
                    switch (u.once && this.removeListener(e, u.fn, void 0, !0), d) {
                        case 1:
                            return u.fn.call(u.context), !0;
                        case 2:
                            return u.fn.call(u.context, t), !0;
                        case 3:
                            return u.fn.call(u.context, t, r), !0;
                        case 4:
                            return u.fn.call(u.context, t, r, o), !0;
                        case 5:
                            return u.fn.call(u.context, t, r, o, i), !0;
                        case 6:
                            return u.fn.call(u.context, t, r, o, i, a), !0
                    }
                    for (l = 1, c = Array(d - 1); l < d; l++) c[l - 1] = arguments[l];
                    u.fn.apply(u.context, c)
                } else {
                    var p, h = u.length;
                    for (l = 0; l < h; l++) switch (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), d) {
                        case 1:
                            u[l].fn.call(u[l].context);
                            break;
                        case 2:
                            u[l].fn.call(u[l].context, t);
                            break;
                        case 3:
                            u[l].fn.call(u[l].context, t, r);
                            break;
                        case 4:
                            u[l].fn.call(u[l].context, t, r, o);
                            break;
                        default:
                            if (!c)
                                for (p = 1, c = Array(d - 1); p < d; p++) c[p - 1] = arguments[p];
                            u[l].fn.apply(u[l].context, c)
                    }
                }
                return !0
            }, s.prototype.on = function(e, t, n) {
                return i(this, e, t, n, !1)
            }, s.prototype.once = function(e, t, n) {
                return i(this, e, t, n, !0)
            }, s.prototype.removeListener = function(e, t, r, o) {
                var i = n ? n + e : e;
                if (!this._events[i]) return this;
                if (!t) return a(this, i), this;
                var s = this._events[i];
                if (s.fn) s.fn !== t || o && !s.once || r && s.context !== r || a(this, i);
                else {
                    for (var c = 0, l = [], u = s.length; c < u; c++)(s[c].fn !== t || o && !s[c].once || r && s[c].context !== r) && l.push(s[c]);
                    l.length ? this._events[i] = 1 === l.length ? l[0] : l : a(this, i)
                }
                return this
            }, s.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = n ? n + e : e, this._events[t] && a(this, t)) : (this._events = new r, this._eventsCount = 0), this
            }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = n, s.EventEmitter = s, e.exports = s
        },
        13318: function(e, t, n) {
            let r = n(64218),
                o = n(12235),
                i = n(53113),
                a = n(70835);

            function s(e, t, n, i, a) {
                let s = [].slice.call(arguments, 1),
                    c = s.length,
                    l = "function" == typeof s[c - 1];
                if (!l && !r()) throw Error("Callback required as last argument");
                if (l) {
                    if (c < 2) throw Error("Too few arguments provided");
                    2 === c ? (a = n, n = t, t = i = void 0) : 3 === c && (t.getContext && void 0 === a ? (a = i, i = void 0) : (a = i, i = n, n = t, t = void 0))
                } else {
                    if (c < 1) throw Error("Too few arguments provided");
                    return 1 === c ? (n = t, t = i = void 0) : 2 !== c || t.getContext || (i = n, n = t, t = void 0), new Promise(function(r, a) {
                        try {
                            let a = o.create(n, i);
                            r(e(a, t, i))
                        } catch (e) {
                            a(e)
                        }
                    })
                }
                try {
                    let r = o.create(n, i);
                    a(null, e(r, t, i))
                } catch (e) {
                    a(e)
                }
            }
            t.create = o.create, t.toCanvas = s.bind(null, i.render), t.toDataURL = s.bind(null, i.renderToDataURL), t.toString = s.bind(null, function(e, t, n) {
                return a.render(e, n)
            })
        },
        64218: function(e) {
            e.exports = function() {
                return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        41167: function(e, t, n) {
            let r = n(75919).getSymbolSize;
            t.getRowColCoords = function(e) {
                if (1 === e) return [];
                let t = Math.floor(e / 7) + 2,
                    n = r(e),
                    o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)),
                    i = [n - 7];
                for (let e = 1; e < t - 1; e++) i[e] = i[e - 1] - o;
                return i.push(6), i.reverse()
            }, t.getPositions = function(e) {
                let n = [],
                    r = t.getRowColCoords(e),
                    o = r.length;
                for (let e = 0; e < o; e++)
                    for (let t = 0; t < o; t++)(0 !== e || 0 !== t) && (0 !== e || t !== o - 1) && (e !== o - 1 || 0 !== t) && n.push([r[e], r[t]]);
                return n
            }
        },
        1983: function(e, t, n) {
            let r = n(34672),
                o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function i(e) {
                this.mode = r.ALPHANUMERIC, this.data = e
            }
            i.getBitsLength = function(e) {
                return 11 * Math.floor(e / 2) + 6 * (e % 2)
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(e) {
                let t;
                for (t = 0; t + 2 <= this.data.length; t += 2) {
                    let n = 45 * o.indexOf(this.data[t]);
                    n += o.indexOf(this.data[t + 1]), e.put(n, 11)
                }
                this.data.length % 2 && e.put(o.indexOf(this.data[t]), 6)
            }, e.exports = i
        },
        50943: function(e) {
            function t() {
                this.buffer = [], this.length = 0
            }
            t.prototype = {
                get: function(e) {
                    return (this.buffer[Math.floor(e / 8)] >>> 7 - e % 8 & 1) == 1
                },
                put: function(e, t) {
                    for (let n = 0; n < t; n++) this.putBit((e >>> t - n - 1 & 1) == 1)
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(e) {
                    let t = Math.floor(this.length / 8);
                    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                }
            }, e.exports = t
        },
        49281: function(e) {
            function t(e) {
                if (!e || e < 1) throw Error("BitMatrix size must be defined and greater than 0");
                this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e)
            }
            t.prototype.set = function(e, t, n, r) {
                let o = e * this.size + t;
                this.data[o] = n, r && (this.reservedBit[o] = !0)
            }, t.prototype.get = function(e, t) {
                return this.data[e * this.size + t]
            }, t.prototype.xor = function(e, t, n) {
                this.data[e * this.size + t] ^= n
            }, t.prototype.isReserved = function(e, t) {
                return this.reservedBit[e * this.size + t]
            }, e.exports = t
        },
        57537: function(e, t, n) {
            let r = n(34672);

            function o(e) {
                this.mode = r.BYTE, "string" == typeof e ? this.data = new TextEncoder().encode(e) : this.data = new Uint8Array(e)
            }
            o.getBitsLength = function(e) {
                return 8 * e
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(e) {
                for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
            }, e.exports = o
        },
        15835: function(e, t, n) {
            let r = n(51141),
                o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            t.getBlocksCount = function(e, t) {
                switch (t) {
                    case r.L:
                        return o[(e - 1) * 4 + 0];
                    case r.M:
                        return o[(e - 1) * 4 + 1];
                    case r.Q:
                        return o[(e - 1) * 4 + 2];
                    case r.H:
                        return o[(e - 1) * 4 + 3];
                    default:
                        return
                }
            }, t.getTotalCodewordsCount = function(e, t) {
                switch (t) {
                    case r.L:
                        return i[(e - 1) * 4 + 0];
                    case r.M:
                        return i[(e - 1) * 4 + 1];
                    case r.Q:
                        return i[(e - 1) * 4 + 2];
                    case r.H:
                        return i[(e - 1) * 4 + 3];
                    default:
                        return
                }
            }
        },
        51141: function(e, t) {
            t.L = {
                bit: 1
            }, t.M = {
                bit: 0
            }, t.Q = {
                bit: 3
            }, t.H = {
                bit: 2
            }, t.isValid = function(e) {
                return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4
            }, t.from = function(e, n) {
                if (t.isValid(e)) return e;
                try {
                    return function(e) {
                        if ("string" != typeof e) throw Error("Param is not a string");
                        let n = e.toLowerCase();
                        switch (n) {
                            case "l":
                            case "low":
                                return t.L;
                            case "m":
                            case "medium":
                                return t.M;
                            case "q":
                            case "quartile":
                                return t.Q;
                            case "h":
                            case "high":
                                return t.H;
                            default:
                                throw Error("Unknown EC Level: " + e)
                        }
                    }(e)
                } catch (e) {
                    return n
                }
            }
        },
        87922: function(e, t, n) {
            let r = n(75919).getSymbolSize;
            t.getPositions = function(e) {
                let t = r(e);
                return [
                    [0, 0],
                    [t - 7, 0],
                    [0, t - 7]
                ]
            }
        },
        1020: function(e, t, n) {
            let r = n(75919),
                o = r.getBCHDigit(1335);
            t.getEncodedBits = function(e, t) {
                let n = e.bit << 3 | t,
                    i = n << 10;
                for (; r.getBCHDigit(i) - o >= 0;) i ^= 1335 << r.getBCHDigit(i) - o;
                return (n << 10 | i) ^ 21522
            }
        },
        20239: function(e, t) {
            let n = new Uint8Array(512),
                r = new Uint8Array(256);
            ! function() {
                let e = 1;
                for (let t = 0; t < 255; t++) n[t] = e, r[e] = t, 256 & (e <<= 1) && (e ^= 285);
                for (let e = 255; e < 512; e++) n[e] = n[e - 255]
            }(), t.log = function(e) {
                if (e < 1) throw Error("log(" + e + ")");
                return r[e]
            }, t.exp = function(e) {
                return n[e]
            }, t.mul = function(e, t) {
                return 0 === e || 0 === t ? 0 : n[r[e] + r[t]]
            }
        },
        31806: function(e, t, n) {
            let r = n(34672),
                o = n(75919);

            function i(e) {
                this.mode = r.KANJI, this.data = e
            }
            i.getBitsLength = function(e) {
                return 13 * e
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(e) {
                let t;
                for (t = 0; t < this.data.length; t++) {
                    let n = o.toSJIS(this.data[t]);
                    if (n >= 33088 && n <= 40956) n -= 33088;
                    else if (n >= 57408 && n <= 60351) n -= 49472;
                    else throw Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
                    n = (n >>> 8 & 255) * 192 + (255 & n), e.put(n, 13)
                }
            }, e.exports = i
        },
        97760: function(e, t) {
            t.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            let n = {
                N1: 3,
                N2: 3,
                N3: 40,
                N4: 10
            };
            t.isValid = function(e) {
                return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
            }, t.from = function(e) {
                return t.isValid(e) ? parseInt(e, 10) : void 0
            }, t.getPenaltyN1 = function(e) {
                let t = e.size,
                    r = 0,
                    o = 0,
                    i = 0,
                    a = null,
                    s = null;
                for (let c = 0; c < t; c++) {
                    o = i = 0, a = s = null;
                    for (let l = 0; l < t; l++) {
                        let t = e.get(c, l);
                        t === a ? o++ : (o >= 5 && (r += n.N1 + (o - 5)), a = t, o = 1), (t = e.get(l, c)) === s ? i++ : (i >= 5 && (r += n.N1 + (i - 5)), s = t, i = 1)
                    }
                    o >= 5 && (r += n.N1 + (o - 5)), i >= 5 && (r += n.N1 + (i - 5))
                }
                return r
            }, t.getPenaltyN2 = function(e) {
                let t = e.size,
                    r = 0;
                for (let n = 0; n < t - 1; n++)
                    for (let o = 0; o < t - 1; o++) {
                        let t = e.get(n, o) + e.get(n, o + 1) + e.get(n + 1, o) + e.get(n + 1, o + 1);
                        (4 === t || 0 === t) && r++
                    }
                return r * n.N2
            }, t.getPenaltyN3 = function(e) {
                let t = e.size,
                    r = 0,
                    o = 0,
                    i = 0;
                for (let n = 0; n < t; n++) {
                    o = i = 0;
                    for (let a = 0; a < t; a++) o = o << 1 & 2047 | e.get(n, a), a >= 10 && (1488 === o || 93 === o) && r++, i = i << 1 & 2047 | e.get(a, n), a >= 10 && (1488 === i || 93 === i) && r++
                }
                return r * n.N3
            }, t.getPenaltyN4 = function(e) {
                let t = 0,
                    r = e.data.length;
                for (let n = 0; n < r; n++) t += e.data[n];
                let o = Math.abs(Math.ceil(100 * t / r / 5) - 10);
                return o * n.N4
            }, t.applyMask = function(e, n) {
                let r = n.size;
                for (let o = 0; o < r; o++)
                    for (let i = 0; i < r; i++) n.isReserved(i, o) || n.xor(i, o, function(e, n, r) {
                        switch (e) {
                            case t.Patterns.PATTERN000:
                                return (n + r) % 2 == 0;
                            case t.Patterns.PATTERN001:
                                return n % 2 == 0;
                            case t.Patterns.PATTERN010:
                                return r % 3 == 0;
                            case t.Patterns.PATTERN011:
                                return (n + r) % 3 == 0;
                            case t.Patterns.PATTERN100:
                                return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
                            case t.Patterns.PATTERN101:
                                return n * r % 2 + n * r % 3 == 0;
                            case t.Patterns.PATTERN110:
                                return (n * r % 2 + n * r % 3) % 2 == 0;
                            case t.Patterns.PATTERN111:
                                return (n * r % 3 + (n + r) % 2) % 2 == 0;
                            default:
                                throw Error("bad maskPattern:" + e)
                        }
                    }(e, i, o))
            }, t.getBestMask = function(e, n) {
                let r = Object.keys(t.Patterns).length,
                    o = 0,
                    i = 1 / 0;
                for (let a = 0; a < r; a++) {
                    n(a), t.applyMask(a, e);
                    let r = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
                    t.applyMask(a, e), r < i && (i = r, o = a)
                }
                return o
            }
        },
        34672: function(e, t, n) {
            let r = n(40662),
                o = n(29537);
            t.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, t.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, t.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, t.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, t.MIXED = {
                bit: -1
            }, t.getCharCountIndicator = function(e, t) {
                if (!e.ccBits) throw Error("Invalid mode: " + e);
                if (!r.isValid(t)) throw Error("Invalid version: " + t);
                return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
            }, t.getBestModeForData = function(e) {
                return o.testNumeric(e) ? t.NUMERIC : o.testAlphanumeric(e) ? t.ALPHANUMERIC : o.testKanji(e) ? t.KANJI : t.BYTE
            }, t.toString = function(e) {
                if (e && e.id) return e.id;
                throw Error("Invalid mode")
            }, t.isValid = function(e) {
                return e && e.bit && e.ccBits
            }, t.from = function(e, n) {
                if (t.isValid(e)) return e;
                try {
                    return function(e) {
                        if ("string" != typeof e) throw Error("Param is not a string");
                        let n = e.toLowerCase();
                        switch (n) {
                            case "numeric":
                                return t.NUMERIC;
                            case "alphanumeric":
                                return t.ALPHANUMERIC;
                            case "kanji":
                                return t.KANJI;
                            case "byte":
                                return t.BYTE;
                            default:
                                throw Error("Unknown mode: " + e)
                        }
                    }(e)
                } catch (e) {
                    return n
                }
            }
        },
        37524: function(e, t, n) {
            let r = n(34672);

            function o(e) {
                this.mode = r.NUMERIC, this.data = e.toString()
            }
            o.getBitsLength = function(e) {
                return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(e) {
                let t, n;
                for (t = 0; t + 3 <= this.data.length; t += 3) n = parseInt(this.data.substr(t, 3), 10), e.put(n, 10);
                let r = this.data.length - t;
                r > 0 && (n = parseInt(this.data.substr(t), 10), e.put(n, 3 * r + 1))
            }, e.exports = o
        },
        63752: function(e, t, n) {
            let r = n(20239);
            t.mul = function(e, t) {
                let n = new Uint8Array(e.length + t.length - 1);
                for (let o = 0; o < e.length; o++)
                    for (let i = 0; i < t.length; i++) n[o + i] ^= r.mul(e[o], t[i]);
                return n
            }, t.mod = function(e, t) {
                let n = new Uint8Array(e);
                for (; n.length - t.length >= 0;) {
                    let e = n[0];
                    for (let o = 0; o < t.length; o++) n[o] ^= r.mul(t[o], e);
                    let o = 0;
                    for (; o < n.length && 0 === n[o];) o++;
                    n = n.slice(o)
                }
                return n
            }, t.generateECPolynomial = function(e) {
                let n = new Uint8Array([1]);
                for (let o = 0; o < e; o++) n = t.mul(n, new Uint8Array([1, r.exp(o)]));
                return n
            }
        },
        12235: function(e, t, n) {
            let r = n(75919),
                o = n(51141),
                i = n(50943),
                a = n(49281),
                s = n(41167),
                c = n(87922),
                l = n(97760),
                u = n(15835),
                d = n(89776),
                p = n(1621),
                h = n(1020),
                f = n(34672),
                w = n(17821);

            function A(e, t, n) {
                let r, o;
                let i = e.size,
                    a = h.getEncodedBits(t, n);
                for (r = 0; r < 15; r++) o = (a >> r & 1) == 1, r < 6 ? e.set(r, 8, o, !0) : r < 8 ? e.set(r + 1, 8, o, !0) : e.set(i - 15 + r, 8, o, !0), r < 8 ? e.set(8, i - r - 1, o, !0) : r < 9 ? e.set(8, 15 - r - 1 + 1, o, !0) : e.set(8, 15 - r - 1, o, !0);
                e.set(i - 8, 8, 1, !0)
            }
            t.create = function(e, t) {
                let n, h;
                if (void 0 === e || "" === e) throw Error("No input text");
                let m = o.M;
                return void 0 !== t && (m = o.from(t.errorCorrectionLevel, o.M), n = p.from(t.version), h = l.from(t.maskPattern), t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)),
                    function(e, t, n, o) {
                        let h;
                        if (Array.isArray(e)) h = w.fromArray(e);
                        else if ("string" == typeof e) {
                            let r = t;
                            if (!r) {
                                let t = w.rawSplit(e);
                                r = p.getBestVersionForData(t, n)
                            }
                            h = w.fromString(e, r || 40)
                        } else throw Error("Invalid data");
                        let m = p.getBestVersionForData(h, n);
                        if (!m) throw Error("The amount of data is too big to be stored in a QR Code");
                        if (t) {
                            if (t < m) throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + m + ".\n")
                        } else t = m;
                        let g = function(e, t, n) {
                                let o = new i;
                                n.forEach(function(t) {
                                    o.put(t.mode.bit, 4), o.put(t.getLength(), f.getCharCountIndicator(t.mode, e)), t.write(o)
                                });
                                let a = r.getSymbolTotalCodewords(e),
                                    s = u.getTotalCodewordsCount(e, t),
                                    c = (a - s) * 8;
                                for (o.getLengthInBits() + 4 <= c && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(0);
                                let l = (c - o.getLengthInBits()) / 8;
                                for (let e = 0; e < l; e++) o.put(e % 2 ? 17 : 236, 8);
                                return function(e, t, n) {
                                    let o, i;
                                    let a = r.getSymbolTotalCodewords(t),
                                        s = u.getTotalCodewordsCount(t, n),
                                        c = a - s,
                                        l = u.getBlocksCount(t, n),
                                        p = a % l,
                                        h = l - p,
                                        f = Math.floor(a / l),
                                        w = Math.floor(c / l),
                                        A = w + 1,
                                        m = f - w,
                                        g = new d(m),
                                        y = 0,
                                        b = Array(l),
                                        C = Array(l),
                                        v = 0,
                                        k = new Uint8Array(e.buffer);
                                    for (let e = 0; e < l; e++) {
                                        let t = e < h ? w : A;
                                        b[e] = k.slice(y, y + t), C[e] = g.encode(b[e]), y += t, v = Math.max(v, t)
                                    }
                                    let B = new Uint8Array(a),
                                        E = 0;
                                    for (o = 0; o < v; o++)
                                        for (i = 0; i < l; i++) o < b[i].length && (B[E++] = b[i][o]);
                                    for (o = 0; o < m; o++)
                                        for (i = 0; i < l; i++) B[E++] = C[i][o];
                                    return B
                                }(o, e, t)
                            }(t, n, h),
                            y = r.getSymbolSize(t),
                            b = new a(y);
                        return function(e, t) {
                                let n = e.size,
                                    r = c.getPositions(t);
                                for (let t = 0; t < r.length; t++) {
                                    let o = r[t][0],
                                        i = r[t][1];
                                    for (let t = -1; t <= 7; t++)
                                        if (!(o + t <= -1) && !(n <= o + t))
                                            for (let r = -1; r <= 7; r++) i + r <= -1 || n <= i + r || (t >= 0 && t <= 6 && (0 === r || 6 === r) || r >= 0 && r <= 6 && (0 === t || 6 === t) || t >= 2 && t <= 4 && r >= 2 && r <= 4 ? e.set(o + t, i + r, !0, !0) : e.set(o + t, i + r, !1, !0))
                                }
                            }(b, t),
                            function(e) {
                                let t = e.size;
                                for (let n = 8; n < t - 8; n++) {
                                    let t = n % 2 == 0;
                                    e.set(n, 6, t, !0), e.set(6, n, t, !0)
                                }
                            }(b),
                            function(e, t) {
                                let n = s.getPositions(t);
                                for (let t = 0; t < n.length; t++) {
                                    let r = n[t][0],
                                        o = n[t][1];
                                    for (let t = -2; t <= 2; t++)
                                        for (let n = -2; n <= 2; n++) - 2 === t || 2 === t || -2 === n || 2 === n || 0 === t && 0 === n ? e.set(r + t, o + n, !0, !0) : e.set(r + t, o + n, !1, !0)
                                }
                            }(b, t), A(b, n, 0), t >= 7 && function(e, t) {
                                let n, r, o;
                                let i = e.size,
                                    a = p.getEncodedBits(t);
                                for (let t = 0; t < 18; t++) n = Math.floor(t / 3), r = t % 3 + i - 8 - 3, o = (a >> t & 1) == 1, e.set(n, r, o, !0), e.set(r, n, o, !0)
                            }(b, t),
                            function(e, t) {
                                let n = e.size,
                                    r = -1,
                                    o = n - 1,
                                    i = 7,
                                    a = 0;
                                for (let s = n - 1; s > 0; s -= 2)
                                    for (6 === s && s--;;) {
                                        for (let n = 0; n < 2; n++)
                                            if (!e.isReserved(o, s - n)) {
                                                let r = !1;
                                                a < t.length && (r = (t[a] >>> i & 1) == 1), e.set(o, s - n, r), -1 == --i && (a++, i = 7)
                                            }
                                        if ((o += r) < 0 || n <= o) {
                                            o -= r, r = -r;
                                            break
                                        }
                                    }
                            }(b, g), isNaN(o) && (o = l.getBestMask(b, A.bind(null, b, n))), l.applyMask(o, b), A(b, n, o), {
                                modules: b,
                                version: t,
                                errorCorrectionLevel: n,
                                maskPattern: o,
                                segments: h
                            }
                    }(e, n, m, h)
            }
        },
        89776: function(e, t, n) {
            let r = n(63752);

            function o(e) {
                this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
            }
            o.prototype.initialize = function(e) {
                this.degree = e, this.genPoly = r.generateECPolynomial(this.degree)
            }, o.prototype.encode = function(e) {
                if (!this.genPoly) throw Error("Encoder not initialized");
                let t = new Uint8Array(e.length + this.degree);
                t.set(e);
                let n = r.mod(t, this.genPoly),
                    o = this.degree - n.length;
                if (o > 0) {
                    let e = new Uint8Array(this.degree);
                    return e.set(n, o), e
                }
                return n
            }, e.exports = o
        },
        29537: function(e, t) {
            let n = "[0-9]+",
                r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
            r = r.replace(/u/g, "\\u");
            let o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + r + ")(?:.|[\r\n]))+";
            t.KANJI = RegExp(r, "g"), t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = RegExp(o, "g"), t.NUMERIC = RegExp(n, "g"), t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g");
            let i = RegExp("^" + r + "$"),
                a = RegExp("^" + n + "$"),
                s = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            t.testKanji = function(e) {
                return i.test(e)
            }, t.testNumeric = function(e) {
                return a.test(e)
            }, t.testAlphanumeric = function(e) {
                return s.test(e)
            }
        },
        17821: function(e, t, n) {
            let r = n(34672),
                o = n(37524),
                i = n(1983),
                a = n(57537),
                s = n(31806),
                c = n(29537),
                l = n(75919),
                u = n(13526);

            function d(e) {
                return unescape(encodeURIComponent(e)).length
            }

            function p(e, t, n) {
                let r;
                let o = [];
                for (; null !== (r = e.exec(n));) o.push({
                    data: r[0],
                    index: r.index,
                    mode: t,
                    length: r[0].length
                });
                return o
            }

            function h(e) {
                let t, n;
                let o = p(c.NUMERIC, r.NUMERIC, e),
                    i = p(c.ALPHANUMERIC, r.ALPHANUMERIC, e);
                l.isKanjiModeEnabled() ? (t = p(c.BYTE, r.BYTE, e), n = p(c.KANJI, r.KANJI, e)) : (t = p(c.BYTE_KANJI, r.BYTE, e), n = []);
                let a = o.concat(i, t, n);
                return a.sort(function(e, t) {
                    return e.index - t.index
                }).map(function(e) {
                    return {
                        data: e.data,
                        mode: e.mode,
                        length: e.length
                    }
                })
            }

            function f(e, t) {
                switch (t) {
                    case r.NUMERIC:
                        return o.getBitsLength(e);
                    case r.ALPHANUMERIC:
                        return i.getBitsLength(e);
                    case r.KANJI:
                        return s.getBitsLength(e);
                    case r.BYTE:
                        return a.getBitsLength(e)
                }
            }

            function w(e, t) {
                let n;
                let c = r.getBestModeForData(e);
                if ((n = r.from(t, c)) !== r.BYTE && n.bit < c.bit) throw Error('"' + e + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(c));
                switch (n !== r.KANJI || l.isKanjiModeEnabled() || (n = r.BYTE), n) {
                    case r.NUMERIC:
                        return new o(e);
                    case r.ALPHANUMERIC:
                        return new i(e);
                    case r.KANJI:
                        return new s(e);
                    case r.BYTE:
                        return new a(e)
                }
            }
            t.fromArray = function(e) {
                return e.reduce(function(e, t) {
                    return "string" == typeof t ? e.push(w(t, null)) : t.data && e.push(w(t.data, t.mode)), e
                }, [])
            }, t.fromString = function(e, n) {
                let o = h(e, l.isKanjiModeEnabled()),
                    i = function(e) {
                        let t = [];
                        for (let n = 0; n < e.length; n++) {
                            let o = e[n];
                            switch (o.mode) {
                                case r.NUMERIC:
                                    t.push([o, {
                                        data: o.data,
                                        mode: r.ALPHANUMERIC,
                                        length: o.length
                                    }, {
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: o.length
                                    }]);
                                    break;
                                case r.ALPHANUMERIC:
                                    t.push([o, {
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: o.length
                                    }]);
                                    break;
                                case r.KANJI:
                                    t.push([o, {
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: d(o.data)
                                    }]);
                                    break;
                                case r.BYTE:
                                    t.push([{
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: d(o.data)
                                    }])
                            }
                        }
                        return t
                    }(o),
                    a = function(e, t) {
                        let n = {},
                            o = {
                                start: {}
                            },
                            i = ["start"];
                        for (let a = 0; a < e.length; a++) {
                            let s = e[a],
                                c = [];
                            for (let e = 0; e < s.length; e++) {
                                let l = s[e],
                                    u = "" + a + e;
                                c.push(u), n[u] = {
                                    node: l,
                                    lastCount: 0
                                }, o[u] = {};
                                for (let e = 0; e < i.length; e++) {
                                    let a = i[e];
                                    n[a] && n[a].node.mode === l.mode ? (o[a][u] = f(n[a].lastCount + l.length, l.mode) - f(n[a].lastCount, l.mode), n[a].lastCount += l.length) : (n[a] && (n[a].lastCount = l.length), o[a][u] = f(l.length, l.mode) + 4 + r.getCharCountIndicator(l.mode, t))
                                }
                            }
                            i = c
                        }
                        for (let e = 0; e < i.length; e++) o[i[e]].end = 0;
                        return {
                            map: o,
                            table: n
                        }
                    }(i, n),
                    s = u.find_path(a.map, "start", "end"),
                    c = [];
                for (let e = 1; e < s.length - 1; e++) c.push(a.table[s[e]].node);
                return t.fromArray(c.reduce(function(e, t) {
                    let n = e.length - 1 >= 0 ? e[e.length - 1] : null;
                    return n && n.mode === t.mode ? e[e.length - 1].data += t.data : e.push(t), e
                }, []))
            }, t.rawSplit = function(e) {
                return t.fromArray(h(e, l.isKanjiModeEnabled()))
            }
        },
        75919: function(e, t) {
            let n;
            let r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            t.getSymbolSize = function(e) {
                if (!e) throw Error('"version" cannot be null or undefined');
                if (e < 1 || e > 40) throw Error('"version" should be in range from 1 to 40');
                return 4 * e + 17
            }, t.getSymbolTotalCodewords = function(e) {
                return r[e]
            }, t.getBCHDigit = function(e) {
                let t = 0;
                for (; 0 !== e;) t++, e >>>= 1;
                return t
            }, t.setToSJISFunction = function(e) {
                if ("function" != typeof e) throw Error('"toSJISFunc" is not a valid function.');
                n = e
            }, t.isKanjiModeEnabled = function() {
                return void 0 !== n
            }, t.toSJIS = function(e) {
                return n(e)
            }
        },
        40662: function(e, t) {
            t.isValid = function(e) {
                return !isNaN(e) && e >= 1 && e <= 40
            }
        },
        1621: function(e, t, n) {
            let r = n(75919),
                o = n(15835),
                i = n(51141),
                a = n(34672),
                s = n(40662),
                c = r.getBCHDigit(7973);

            function l(e, t) {
                return a.getCharCountIndicator(e, t) + 4
            }
            t.from = function(e, t) {
                return s.isValid(e) ? parseInt(e, 10) : t
            }, t.getCapacity = function(e, t, n) {
                if (!s.isValid(e)) throw Error("Invalid QR Code version");
                void 0 === n && (n = a.BYTE);
                let i = r.getSymbolTotalCodewords(e),
                    c = o.getTotalCodewordsCount(e, t),
                    u = (i - c) * 8;
                if (n === a.MIXED) return u;
                let d = u - l(n, e);
                switch (n) {
                    case a.NUMERIC:
                        return Math.floor(d / 10 * 3);
                    case a.ALPHANUMERIC:
                        return Math.floor(d / 11 * 2);
                    case a.KANJI:
                        return Math.floor(d / 13);
                    case a.BYTE:
                    default:
                        return Math.floor(d / 8)
                }
            }, t.getBestVersionForData = function(e, n) {
                let r;
                let o = i.from(n, i.M);
                if (Array.isArray(e)) {
                    if (e.length > 1) return function(e, n) {
                        for (let r = 1; r <= 40; r++) {
                            let o = function(e, t) {
                                let n = 0;
                                return e.forEach(function(e) {
                                    let r = l(e.mode, t);
                                    n += r + e.getBitsLength()
                                }), n
                            }(e, r);
                            if (o <= t.getCapacity(r, n, a.MIXED)) return r
                        }
                    }(e, o);
                    if (0 === e.length) return 1;
                    r = e[0]
                } else r = e;
                return function(e, n, r) {
                    for (let o = 1; o <= 40; o++)
                        if (n <= t.getCapacity(o, r, e)) return o
                }(r.mode, r.getLength(), o)
            }, t.getEncodedBits = function(e) {
                if (!s.isValid(e) || e < 7) throw Error("Invalid QR Code version");
                let t = e << 12;
                for (; r.getBCHDigit(t) - c >= 0;) t ^= 7973 << r.getBCHDigit(t) - c;
                return e << 12 | t
            }
        },
        53113: function(e, t, n) {
            let r = n(68375);
            t.render = function(e, t, n) {
                var o;
                let i = n,
                    a = t;
                void 0 !== i || t && t.getContext || (i = t, t = void 0), t || (a = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (e) {
                        throw Error("You need to specify a canvas element")
                    }
                }()), i = r.getOptions(i);
                let s = r.getImageWidth(e.modules.size, i),
                    c = a.getContext("2d"),
                    l = c.createImageData(s, s);
                return r.qrToImageData(l.data, e, i), o = a, c.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = s, o.width = s, o.style.height = s + "px", o.style.width = s + "px", c.putImageData(l, 0, 0), a
            }, t.renderToDataURL = function(e, n, r) {
                let o = r;
                void 0 !== o || n && n.getContext || (o = n, n = void 0), o || (o = {});
                let i = t.render(e, n, o),
                    a = o.type || "image/png",
                    s = o.rendererOpts || {};
                return i.toDataURL(a, s.quality)
            }
        },
        70835: function(e, t, n) {
            let r = n(68375);

            function o(e, t) {
                let n = e.a / 255,
                    r = t + '="' + e.hex + '"';
                return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
            }

            function i(e, t, n) {
                let r = e + t;
                return void 0 !== n && (r += " " + n), r
            }
            t.render = function(e, t, n) {
                let a = r.getOptions(t),
                    s = e.modules.size,
                    c = e.modules.data,
                    l = s + 2 * a.margin,
                    u = a.color.light.a ? "<path " + o(a.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "",
                    d = "<path " + o(a.color.dark, "stroke") + ' d="' + function(e, t, n) {
                        let r = "",
                            o = 0,
                            a = !1,
                            s = 0;
                        for (let c = 0; c < e.length; c++) {
                            let l = Math.floor(c % t),
                                u = Math.floor(c / t);
                            l || a || (a = !0), e[c] ? (s++, c > 0 && l > 0 && e[c - 1] || (r += a ? i("M", l + n, .5 + u + n) : i("m", o, 0), o = 0, a = !1), l + 1 < t && e[c + 1] || (r += i("h", s), s = 0)) : o++
                        }
                        return r
                    }(c, s, a.margin) + '"/>',
                    p = a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "",
                    h = '<svg xmlns="http://www.w3.org/2000/svg" ' + p + ('viewBox="0 0 ' + l) + " " + l + '" shape-rendering="crispEdges">' + u + d + "</svg>\n";
                return "function" == typeof n && n(null, h), h
            }
        },
        68375: function(e, t) {
            function n(e) {
                if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw Error("Color should be defined as hex string");
                let t = e.slice().replace("#", "").split("");
                if (t.length < 3 || 5 === t.length || t.length > 8) throw Error("Invalid hex color: " + e);
                (3 === t.length || 4 === t.length) && (t = Array.prototype.concat.apply([], t.map(function(e) {
                    return [e, e]
                }))), 6 === t.length && t.push("F", "F");
                let n = parseInt(t.join(""), 16);
                return {
                    r: n >> 24 & 255,
                    g: n >> 16 & 255,
                    b: n >> 8 & 255,
                    a: 255 & n,
                    hex: "#" + t.slice(0, 6).join("")
                }
            }
            t.getOptions = function(e) {
                e || (e = {}), e.color || (e.color = {});
                let t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
                    r = e.width && e.width >= 21 ? e.width : void 0,
                    o = e.scale || 4;
                return {
                    width: r,
                    scale: r ? 4 : o,
                    margin: t,
                    color: {
                        dark: n(e.color.dark || "#000000ff"),
                        light: n(e.color.light || "#ffffffff")
                    },
                    type: e.type,
                    rendererOpts: e.rendererOpts || {}
                }
            }, t.getScale = function(e, t) {
                return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
            }, t.getImageWidth = function(e, n) {
                let r = t.getScale(e, n);
                return Math.floor((e + 2 * n.margin) * r)
            }, t.qrToImageData = function(e, n, r) {
                let o = n.modules.size,
                    i = n.modules.data,
                    a = t.getScale(o, r),
                    s = Math.floor((o + 2 * r.margin) * a),
                    c = r.margin * a,
                    l = [r.color.light, r.color.dark];
                for (let t = 0; t < s; t++)
                    for (let n = 0; n < s; n++) {
                        let u = (t * s + n) * 4,
                            d = r.color.light;
                        if (t >= c && n >= c && t < s - c && n < s - c) {
                            let e = Math.floor((t - c) / a),
                                r = Math.floor((n - c) / a);
                            d = l[i[e * o + r] ? 1 : 0]
                        }
                        e[u++] = d.r, e[u++] = d.g, e[u++] = d.b, e[u] = d.a
                    }
            }
        },
        57179: function(e, t, n) {
            var r;
            ! function(o, i) {
                "use strict";
                var a = "function",
                    s = "undefined",
                    c = "object",
                    l = "string",
                    u = "major",
                    d = "model",
                    p = "name",
                    h = "type",
                    f = "vendor",
                    w = "version",
                    A = "architecture",
                    m = "console",
                    g = "mobile",
                    y = "tablet",
                    b = "smarttv",
                    C = "wearable",
                    v = "embedded",
                    k = "Amazon",
                    B = "Apple",
                    E = "ASUS",
                    I = "BlackBerry",
                    x = "Browser",
                    M = "Chrome",
                    Q = "Firefox",
                    D = "Google",
                    N = "Huawei",
                    S = "Microsoft",
                    T = "Motorola",
                    O = "Opera",
                    W = "Samsung",
                    R = "Sharp",
                    P = "Sony",
                    F = "Xiaomi",
                    U = "Zebra",
                    L = "Facebook",
                    q = "Chromium OS",
                    K = "Mac OS",
                    J = " Browser",
                    H = function(e, t) {
                        var n = {};
                        for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                        return n
                    },
                    G = function(e) {
                        for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                        return t
                    },
                    j = function(e, t) {
                        return typeof e === l && -1 !== Y(t).indexOf(Y(e))
                    },
                    Y = function(e) {
                        return e.toLowerCase()
                    },
                    z = function(e, t) {
                        if (typeof e === l) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 500)
                    },
                    V = function(e, t) {
                        for (var n, r, o, s, l, u, d = 0; d < t.length && !l;) {
                            var p = t[d],
                                h = t[d + 1];
                            for (n = r = 0; n < p.length && !l && p[n];)
                                if (l = p[n++].exec(e))
                                    for (o = 0; o < h.length; o++) u = l[++r], typeof(s = h[o]) === c && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, u) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = u ? u.replace(s[1], s[2]) : i : this[s[0]] = u ? s[1].call(this, u, s[2]) : i : 4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : i) : this[s] = u || i;
                            d += 2
                        }
                    },
                    Z = function(e, t) {
                        for (var n in t)
                            if (typeof t[n] === c && t[n].length > 0) {
                                for (var r = 0; r < t[n].length; r++)
                                    if (j(t[n][r], e)) return "?" === n ? i : n
                            } else if (j(t[n], e)) return "?" === n ? i : n;
                        return t.hasOwnProperty("*") ? t["*"] : e
                    },
                    X = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        "8.1": "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    },
                    _ = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [w, [p, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [w, [p, "Edge"]],
                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                            [p, w],
                            [/opios[\/ ]+([\w\.]+)/i],
                            [w, [p, O + " Mini"]],
                            [/\bop(?:rg)?x\/([\w\.]+)/i],
                            [w, [p, O + " GX"]],
                            [/\bopr\/([\w\.]+)/i],
                            [w, [p, O]],
                            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                            [w, [p, "Baidu"]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [p, w],
                            [/quark(?:pc)?\/([-\w\.]+)/i],
                            [w, [p, "Quark"]],
                            [/\bddg\/([\w\.]+)/i],
                            [w, [p, "DuckDuckGo"]],
                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                            [w, [p, "UC" + x]],
                            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                            [w, [p, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [w, [p, "Konqueror"]],
                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                            [w, [p, "IE"]],
                            [/ya(?:search)?browser\/([\w\.]+)/i],
                            [w, [p, "Yandex"]],
                            [/slbrowser\/([\w\.]+)/i],
                            [w, [p, "Smart Lenovo " + x]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [p, /(.+)/, "$1 Secure " + x], w
                            ],
                            [/\bfocus\/([\w\.]+)/i],
                            [w, [p, Q + " Focus"]],
                            [/\bopt\/([\w\.]+)/i],
                            [w, [p, O + " Touch"]],
                            [/coc_coc\w+\/([\w\.]+)/i],
                            [w, [p, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [w, [p, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [w, [p, O + " Coast"]],
                            [/miuibrowser\/([\w\.]+)/i],
                            [w, [p, "MIUI " + x]],
                            [/fxios\/([-\w\.]+)/i],
                            [w, [p, Q]],
                            [/\bqihu|(qi?ho?o?|360)browser/i],
                            [
                                [p, "360" + J]
                            ],
                            [/\b(qq)\/([\w\.]+)/i],
                            [
                                [p, /(.+)/, "$1Browser"], w
                            ],
                            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
                            [
                                [p, /(.+)/, "$1" + J], w
                            ],
                            [/samsungbrowser\/([\w\.]+)/i],
                            [w, [p, W + " Internet"]],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [p, /_/g, " "], w
                            ],
                            [/metasr[\/ ]?([\d\.]+)/i],
                            [w, [p, "Sogou Explorer"]],
                            [/(sogou)mo\w+\/([\d\.]+)/i],
                            [
                                [p, "Sogou Mobile"], w
                            ],
                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
                            [p, w],
                            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
                            [p],
                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                            [
                                [p, L], w
                            ],
                            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                            [p, w],
                            [/\bgsa\/([\w\.]+) .*safari\//i],
                            [w, [p, "GSA"]],
                            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                            [w, [p, "TikTok"]],
                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                            [w, [p, M + " Headless"]],
                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [p, M + " WebView"], w
                            ],
                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                            [w, [p, "Android " + x]],
                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                            [p, w],
                            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                            [w, [p, "Mobile Safari"]],
                            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                            [w, p],
                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                            [p, [w, Z, {
                                "1.0": "/8",
                                "1.2": "/1",
                                "1.3": "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [p, w],
                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                            [
                                [p, "Netscape"], w
                            ],
                            [/(wolvic)\/([\w\.]+)/i],
                            [p, w],
                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                            [w, [p, Q + " Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                            [p, [w, /_/g, "."]],
                            [/(cobalt)\/([\w\.]+)/i],
                            [p, [w, /master.|lts./, ""]]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                            [
                                [A, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [A, Y]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [A, "ia32"]
                            ],
                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                            [
                                [A, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [A, "armhf"]
                            ],
                            [/windows (ce|mobile); ppc;/i],
                            [
                                [A, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                            [
                                [A, /ower/, "", Y]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [A, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [A, Y]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                            [d, [f, W],
                                [h, y]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
                            [d, [f, W],
                                [h, g]
                            ],
                            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                            [d, [f, B],
                                [h, g]
                            ],
                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [d, [f, B],
                                [h, y]
                            ],
                            [/(macintosh);/i],
                            [d, [f, B]],
                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                            [d, [f, R],
                                [h, g]
                            ],
                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                            [d, [f, N],
                                [h, y]
                            ],
                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                            [d, [f, N],
                                [h, g]
                            ],
                            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],
                            [
                                [d, /_/g, " "],
                                [f, F],
                                [h, g]
                            ],
                            [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                            [
                                [d, /_/g, " "],
                                [f, F],
                                [h, y]
                            ],
                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                            [d, [f, "OPPO"],
                                [h, g]
                            ],
                            [/\b(opd2\d{3}a?) bui/i],
                            [d, [f, "OPPO"],
                                [h, y]
                            ],
                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                            [d, [f, "Vivo"],
                                [h, g]
                            ],
                            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                            [d, [f, "Realme"],
                                [h, g]
                            ],
                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                            [d, [f, T],
                                [h, g]
                            ],
                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                            [d, [f, T],
                                [h, y]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                            [d, [f, "LG"],
                                [h, y]
                            ],
                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                            [d, [f, "LG"],
                                [h, g]
                            ],
                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                            [d, [f, "Lenovo"],
                                [h, y]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                            [
                                [d, /_/g, " "],
                                [f, "Nokia"],
                                [h, g]
                            ],
                            [/(pixel c)\b/i],
                            [d, [f, D],
                                [h, y]
                            ],
                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                            [d, [f, D],
                                [h, g]
                            ],
                            [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [d, [f, P],
                                [h, g]
                            ],
                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                            [
                                [d, "Xperia Tablet"],
                                [f, P],
                                [h, y]
                            ],
                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                            [d, [f, "OnePlus"],
                                [h, g]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                            [d, [f, k],
                                [h, y]
                            ],
                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                            [
                                [d, /(.+)/g, "Fire Phone $1"],
                                [f, k],
                                [h, g]
                            ],
                            [/(playbook);[-\w\),; ]+(rim)/i],
                            [d, f, [h, y]],
                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                            [d, [f, I],
                                [h, g]
                            ],
                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                            [d, [f, E],
                                [h, y]
                            ],
                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                            [d, [f, E],
                                [h, g]
                            ],
                            [/(nexus 9)/i],
                            [d, [f, "HTC"],
                                [h, y]
                            ],
                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                            [f, [d, /_/g, " "],
                                [h, g]
                            ],
                            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
                            [d, [f, "TCL"],
                                [h, y]
                            ],
                            [/(itel) ((\w+))/i],
                            [
                                [f, Y], d, [h, Z, {
                                    tablet: ["p10001l", "w7001"],
                                    "*": "mobile"
                                }]
                            ],
                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                            [d, [f, "Acer"],
                                [h, y]
                            ],
                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                            [d, [f, "Meizu"],
                                [h, g]
                            ],
                            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                            [d, [f, "Ulefone"],
                                [h, g]
                            ],
                            [/droid.+; (a(?:015|06[35]|142p?))/i],
                            [d, [f, "Nothing"],
                                [h, g]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                            [f, d, [h, g]],
                            [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                            [f, d, [h, y]],
                            [/(surface duo)/i],
                            [d, [f, S],
                                [h, y]
                            ],
                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                            [d, [f, "Fairphone"],
                                [h, g]
                            ],
                            [/(u304aa)/i],
                            [d, [f, "AT&T"],
                                [h, g]
                            ],
                            [/\bsie-(\w*)/i],
                            [d, [f, "Siemens"],
                                [h, g]
                            ],
                            [/\b(rct\w+) b/i],
                            [d, [f, "RCA"],
                                [h, y]
                            ],
                            [/\b(venue[\d ]{2,7}) b/i],
                            [d, [f, "Dell"],
                                [h, y]
                            ],
                            [/\b(q(?:mv|ta)\w+) b/i],
                            [d, [f, "Verizon"],
                                [h, y]
                            ],
                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                            [d, [f, "Barnes & Noble"],
                                [h, y]
                            ],
                            [/\b(tm\d{3}\w+) b/i],
                            [d, [f, "NuVision"],
                                [h, y]
                            ],
                            [/\b(k88) b/i],
                            [d, [f, "ZTE"],
                                [h, y]
                            ],
                            [/\b(nx\d{3}j) b/i],
                            [d, [f, "ZTE"],
                                [h, g]
                            ],
                            [/\b(gen\d{3}) b.+49h/i],
                            [d, [f, "Swiss"],
                                [h, g]
                            ],
                            [/\b(zur\d{3}) b/i],
                            [d, [f, "Swiss"],
                                [h, y]
                            ],
                            [/\b((zeki)?tb.*\b) b/i],
                            [d, [f, "Zeki"],
                                [h, y]
                            ],
                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                            [
                                [f, "Dragon Touch"], d, [h, y]
                            ],
                            [/\b(ns-?\w{0,9}) b/i],
                            [d, [f, "Insignia"],
                                [h, y]
                            ],
                            [/\b((nxa|next)-?\w{0,9}) b/i],
                            [d, [f, "NextBook"],
                                [h, y]
                            ],
                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                            [
                                [f, "Voice"], d, [h, g]
                            ],
                            [/\b(lvtel\-)?(v1[12]) b/i],
                            [
                                [f, "LvTel"], d, [h, g]
                            ],
                            [/\b(ph-1) /i],
                            [d, [f, "Essential"],
                                [h, g]
                            ],
                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                            [d, [f, "Envizen"],
                                [h, y]
                            ],
                            [/\b(trio[-\w\. ]+) b/i],
                            [d, [f, "MachSpeed"],
                                [h, y]
                            ],
                            [/\btu_(1491) b/i],
                            [d, [f, "Rotor"],
                                [h, y]
                            ],
                            [/(shield[\w ]+) b/i],
                            [d, [f, "Nvidia"],
                                [h, y]
                            ],
                            [/(sprint) (\w+)/i],
                            [f, d, [h, g]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [d, /\./g, " "],
                                [f, S],
                                [h, g]
                            ],
                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [d, [f, U],
                                [h, y]
                            ],
                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [d, [f, U],
                                [h, g]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [f, [h, b]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [d, /^/, "SmartTV"],
                                [f, W],
                                [h, b]
                            ],
                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                            [
                                [f, "LG"],
                                [h, b]
                            ],
                            [/(apple) ?tv/i],
                            [f, [d, B + " TV"],
                                [h, b]
                            ],
                            [/crkey/i],
                            [
                                [d, M + "cast"],
                                [f, D],
                                [h, b]
                            ],
                            [/droid.+aft(\w+)( bui|\))/i],
                            [d, [f, k],
                                [h, b]
                            ],
                            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                            [d, [f, R],
                                [h, b]
                            ],
                            [/(bravia[\w ]+)( bui|\))/i],
                            [d, [f, P],
                                [h, b]
                            ],
                            [/(mitv-\w{5}) bui/i],
                            [d, [f, F],
                                [h, b]
                            ],
                            [/Hbbtv.*(technisat) (.*);/i],
                            [f, d, [h, b]],
                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                            [
                                [f, z],
                                [d, z],
                                [h, b]
                            ],
                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                            [
                                [h, b]
                            ],
                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                            [f, d, [h, m]],
                            [/droid.+; (shield) bui/i],
                            [d, [f, "Nvidia"],
                                [h, m]
                            ],
                            [/(playstation [345portablevi]+)/i],
                            [d, [f, P],
                                [h, m]
                            ],
                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                            [d, [f, S],
                                [h, m]
                            ],
                            [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
                            [d, [f, W],
                                [h, C]
                            ],
                            [/((pebble))app/i],
                            [f, d, [h, C]],
                            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                            [d, [f, B],
                                [h, C]
                            ],
                            [/droid.+; (glass) \d/i],
                            [d, [f, D],
                                [h, C]
                            ],
                            [/droid.+; (wt63?0{2,3})\)/i],
                            [d, [f, U],
                                [h, C]
                            ],
                            [/(quest( \d| pro)?)/i],
                            [d, [f, L],
                                [h, C]
                            ],
                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                            [f, [h, v]],
                            [/(aeobc)\b/i],
                            [d, [f, k],
                                [h, v]
                            ],
                            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                            [d, [h, g]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                            [d, [h, y]],
                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                            [
                                [h, y]
                            ],
                            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                            [
                                [h, g]
                            ],
                            [/(android[-\w\. ]{0,9});.+buil/i],
                            [d, [f, "Generic"]]
                        ],
                        engine: [
                            [/windows.+ edge\/([\w\.]+)/i],
                            [w, [p, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [w, [p, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                            [p, w],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [w, p]
                        ],
                        os: [
                            [/microsoft (windows) (vista|xp)/i],
                            [p, w],
                            [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                            [p, [w, Z, X]],
                            [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                            [
                                [w, Z, X],
                                [p, "Windows"]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                            [
                                [w, /_/g, "."],
                                [p, "iOS"]
                            ],
                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                            [
                                [p, K],
                                [w, /_/g, "."]
                            ],
                            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                            [w, p],
                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                            [p, w],
                            [/\(bb(10);/i],
                            [w, [p, I]],
                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                            [w, [p, "Symbian"]],
                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                            [w, [p, Q + " OS"]],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [w, [p, "webOS"]],
                            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                            [w, [p, "watchOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [w, [p, M + "cast"]],
                            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                            [
                                [p, q], w
                            ],
                            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                            [p, w],
                            [/(sunos) ?([\w\.\d]*)/i],
                            [
                                [p, "Solaris"], w
                            ],
                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                            [p, w]
                        ]
                    },
                    $ = function(e, t) {
                        if (typeof e === c && (t = e, e = i), !(this instanceof $)) return new $(e, t).getResult();
                        var n = typeof o !== s && o.navigator ? o.navigator : i,
                            r = e || (n && n.userAgent ? n.userAgent : ""),
                            m = n && n.userAgentData ? n.userAgentData : i,
                            b = t ? H(_, t) : _,
                            C = n && n.userAgent == r;
                        return this.getBrowser = function() {
                            var e, t = {};
                            return t[p] = i, t[w] = i, V.call(t, r, b.browser), t[u] = typeof(e = t[w]) === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : i, C && n && n.brave && typeof n.brave.isBrave == a && (t[p] = "Brave"), t
                        }, this.getCPU = function() {
                            var e = {};
                            return e[A] = i, V.call(e, r, b.cpu), e
                        }, this.getDevice = function() {
                            var e = {};
                            return e[f] = i, e[d] = i, e[h] = i, V.call(e, r, b.device), C && !e[h] && m && m.mobile && (e[h] = g), C && "Macintosh" == e[d] && n && typeof n.standalone !== s && n.maxTouchPoints && n.maxTouchPoints > 2 && (e[d] = "iPad", e[h] = y), e
                        }, this.getEngine = function() {
                            var e = {};
                            return e[p] = i, e[w] = i, V.call(e, r, b.engine), e
                        }, this.getOS = function() {
                            var e = {};
                            return e[p] = i, e[w] = i, V.call(e, r, b.os), C && !e[p] && m && m.platform && "Unknown" != m.platform && (e[p] = m.platform.replace(/chrome os/i, q).replace(/macos/i, K)), e
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return r
                        }, this.setUA = function(e) {
                            return r = typeof e === l && e.length > 500 ? z(e, 500) : e, this
                        }, this.setUA(r), this
                    };
                $.VERSION = "1.0.39", $.BROWSER = G([p, w, u]), $.CPU = G([A]), $.DEVICE = G([d, f, h, m, g, b, y, C, v]), $.ENGINE = $.OS = G([p, w]), typeof t !== s ? (e.exports && (t = e.exports = $), t.UAParser = $) : n.amdO ? i !== (r = (function() {
                    return $
                }).call(t, n, t, e)) && (e.exports = r) : typeof o !== s && (o.UAParser = $);
                var ee = typeof o !== s && (o.jQuery || o.Zepto);
                if (ee && !ee.ua) {
                    var et = new $;
                    ee.ua = et.getResult(), ee.ua.get = function() {
                        return et.getUA()
                    }, ee.ua.set = function(e) {
                        et.setUA(e);
                        var t = et.getResult();
                        for (var n in t) ee.ua[n] = t[n]
                    }
                }
            }("object" == typeof window ? window : this)
        },
        72432: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return a
                }
            });
            var r = n(38296),
                o = {
                    blue: {
                        accentColor: "#0E76FD",
                        accentColorForeground: "#FFF"
                    },
                    green: {
                        accentColor: "#1DB847",
                        accentColorForeground: "#FFF"
                    },
                    orange: {
                        accentColor: "#FF801F",
                        accentColorForeground: "#FFF"
                    },
                    pink: {
                        accentColor: "#FF5CA0",
                        accentColorForeground: "#FFF"
                    },
                    purple: {
                        accentColor: "#5F5AFA",
                        accentColorForeground: "#FFF"
                    },
                    red: {
                        accentColor: "#FA423C",
                        accentColorForeground: "#FFF"
                    }
                },
                i = o.blue,
                a = ({
                    accentColor: e = i.accentColor,
                    accentColorForeground: t = i.accentColorForeground,
                    ...n
                } = {}) => ({ ...(0, r.w)(n),
                    colors: {
                        accentColor: e,
                        accentColorForeground: t,
                        actionButtonBorder: "rgba(0, 0, 0, 0.04)",
                        actionButtonBorderMobile: "rgba(0, 0, 0, 0.06)",
                        actionButtonSecondaryBackground: "rgba(0, 0, 0, 0.06)",
                        closeButton: "rgba(60, 66, 66, 0.8)",
                        closeButtonBackground: "rgba(0, 0, 0, 0.06)",
                        connectButtonBackground: "#FFF",
                        connectButtonBackgroundError: "#FF494A",
                        connectButtonInnerBackground: "linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",
                        connectButtonText: "#25292E",
                        connectButtonTextError: "#FFF",
                        connectionIndicator: "#30E000",
                        downloadBottomCardBackground: "linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",
                        downloadTopCardBackground: "linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",
                        error: "#FF494A",
                        generalBorder: "rgba(0, 0, 0, 0.06)",
                        generalBorderDim: "rgba(0, 0, 0, 0.03)",
                        menuItemBackground: "rgba(60, 66, 66, 0.1)",
                        modalBackdrop: "rgba(0, 0, 0, 0.3)",
                        modalBackground: "#FFF",
                        modalBorder: "transparent",
                        modalText: "#25292E",
                        modalTextDim: "rgba(60, 66, 66, 0.3)",
                        modalTextSecondary: "rgba(60, 66, 66, 0.6)",
                        profileAction: "#FFF",
                        profileActionHover: "rgba(255, 255, 255, 0.5)",
                        profileForeground: "rgba(60, 66, 66, 0.06)",
                        selectedOptionBorder: "rgba(60, 66, 66, 0.1)",
                        standby: "#FFD641"
                    },
                    shadows: {
                        connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
                        profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
                        selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
                        selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.12)",
                        walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)"
                    }
                });
            a.accentColors = o
        },
        38296: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return s
                }
            });
            var r = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                o = {
                    rounded: `SFRounded, ui-rounded, "SF Pro Rounded", ${r}`,
                    system: r
                },
                i = {
                    large: {
                        actionButton: "9999px",
                        connectButton: "12px",
                        modal: "24px",
                        modalMobile: "28px"
                    },
                    medium: {
                        actionButton: "10px",
                        connectButton: "8px",
                        modal: "16px",
                        modalMobile: "18px"
                    },
                    none: {
                        actionButton: "0px",
                        connectButton: "0px",
                        modal: "0px",
                        modalMobile: "0px"
                    },
                    small: {
                        actionButton: "4px",
                        connectButton: "4px",
                        modal: "8px",
                        modalMobile: "8px"
                    }
                },
                a = {
                    large: {
                        modalOverlay: "blur(20px)"
                    },
                    none: {
                        modalOverlay: "blur(0px)"
                    },
                    small: {
                        modalOverlay: "blur(4px)"
                    }
                },
                s = ({
                    borderRadius: e = "large",
                    fontStack: t = "rounded",
                    overlayBlur: n = "none"
                }) => ({
                    blurs: {
                        modalOverlay: a[n].modalOverlay
                    },
                    fonts: {
                        body: o[t]
                    },
                    radii: {
                        actionButton: i[e].actionButton,
                        connectButton: i[e].connectButton,
                        menuButton: i[e].connectButton,
                        modal: i[e].modal,
                        modalMobile: i[e].modalMobile
                    }
                })
        },
        25301: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return r
                }
            });
            var r = `{
  "connect_wallet": {
    "label": "Connect Wallet",
    "wrong_network": {
      "label": "Wrong network"
    }
  },

  "intro": {
    "title": "What is a Wallet?",
    "description": "A wallet is used to send, receive, store, and display digital assets. It's also a new way to log in, without needing to create new accounts and passwords on every website.",
    "digital_asset": {
      "title": "A Home for your Digital Assets",
      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."
    },
    "login": {
      "title": "A New Way to Log In",
      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."
    },
    "get": {
      "label": "Get a Wallet"
    },
    "learn_more": {
      "label": "Learn More"
    }
  },

  "sign_in": {
    "label": "Verify your account",
    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",
    "message": {
      "send": "Sign message",
      "preparing": "Preparing message...",
      "cancel": "Cancel",
      "preparing_error": "Error preparing message, please retry!"
    },
    "signature": {
      "waiting": "Waiting for signature...",
      "verifying": "Verifying signature...",
      "signing_error": "Error signing message, please retry!",
      "verifying_error": "Error verifying signature, please retry!",
      "oops_error": "Oops, something went wrong!"
    }
  },

  "connect": {
    "label": "Connect",
    "title": "Connect a Wallet",
    "new_to_ethereum": {
      "description": "New to Ethereum wallets?",
      "learn_more": {
        "label": "Learn More"
      }
    },
    "learn_more": {
      "label": "Learn more"
    },
    "recent": "Recent",
    "status": {
      "opening": "Opening %{wallet}...",
      "connecting": "Connecting",
      "connect_mobile": "Continue in %{wallet}",
      "not_installed": "%{wallet} is not installed",
      "not_available": "%{wallet} is not available",
      "confirm": "Confirm connection in the extension",
      "confirm_mobile": "Accept connection request in the wallet"
    },
    "secondary_action": {
      "get": {
        "description": "Don't have %{wallet}?",
        "label": "GET"
      },
      "install": {
        "label": "INSTALL"
      },
      "retry": {
        "label": "RETRY"
      }
    },
    "walletconnect": {
      "description": {
        "full": "Need the official WalletConnect modal?",
        "compact": "Need the WalletConnect modal?"
      },
      "open": {
        "label": "OPEN"
      }
    }
  },

  "connect_scan": {
    "title": "Scan with %{wallet}",
    "fallback_title": "Scan with your phone"
  },

  "connector_group": {
    "installed": "Installed",
    "recommended": "Recommended",
    "other": "Other",
    "popular": "Popular",
    "more": "More",
    "others": "Others"
  },

  "get": {
    "title": "Get a Wallet",
    "action": {
      "label": "GET"
    },
    "mobile": {
      "description": "Mobile Wallet"
    },
    "extension": {
      "description": "Browser Extension"
    },
    "mobile_and_extension": {
      "description": "Mobile Wallet and Extension"
    },
    "mobile_and_desktop": {
      "description": "Mobile and Desktop Wallet"
    },
    "looking_for": {
      "title": "Not what you're looking for?",
      "mobile": {
        "description": "Select a wallet on the main screen to get started with a different wallet provider."
      },
      "desktop": {
        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",
        "wide_description": "Select a wallet on the left to get started with a different wallet provider."
      }
    }
  },

  "get_options": {
    "title": "Get started with %{wallet}",
    "short_title": "Get %{wallet}",
    "mobile": {
      "title": "%{wallet} for Mobile",
      "description": "Use the mobile wallet to explore the world of Ethereum.",
      "download": {
        "label": "Get the app"
      }
    },
    "extension": {
      "title": "%{wallet} for %{browser}",
      "description": "Access your wallet right from your favorite web browser.",
      "download": {
        "label": "Add to %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} for %{platform}",
      "description": "Access your wallet natively from your powerful desktop.",
      "download": {
        "label": "Add to %{platform}"
      }
    }
  },

  "get_mobile": {
    "title": "Install %{wallet}",
    "description": "Scan with your phone to download on iOS or Android",
    "continue": {
      "label": "Continue"
    }
  },

  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "extension": {
      "refresh": {
        "label": "Refresh"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "desktop": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    }
  },

  "chains": {
    "title": "Switch Networks",
    "wrong_network": "Wrong network detected, switch or disconnect to continue.",
    "confirm": "Confirm in Wallet",
    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",
    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",
    "disconnect": "Disconnect",
    "connected": "Connected"
  },

  "profile": {
    "disconnect": {
      "label": "Disconnect"
    },
    "copy_address": {
      "label": "Copy Address",
      "copied": "Copied!"
    },
    "explorer": {
      "label": "View more on explorer"
    },
    "transactions": {
      "description": "%{appName} transactions will appear here...",
      "description_fallback": "Your transactions will appear here...",
      "recent": {
        "title": "Recent Transactions"
      },
      "clear": {
        "label": "Clear All"
      }
    }
  },

  "wallet_connectors": {
    "argent": {
      "qr_code": {
        "step1": {
          "description": "Put Argent on your home screen for faster access to your wallet.",
          "title": "Open the Argent app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "best": {
      "qr_code": {
        "step1": {
          "title": "Open the Best Wallet app",
          "description": "Add Best Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",
          "title": "Open the Bifrost Wallet app"
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "bitget": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",
          "title": "Open the Bitget Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitget Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitski": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitski extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "Open the Bitverse Wallet app",
          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bloom": {
      "desktop": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      }
    },

    "bybit": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",
          "title": "Open the Bybit app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",
          "title": "Install the Bybit Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "binance": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",
          "title": "Open the Binance app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      }
    },

    "coin98": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",
          "title": "Open the Coin98 Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",
          "title": "Install the Coin98 Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",
          "title": "Open the Coinbase Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Coinbase Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "compass": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Compass Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "core": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Core on your home screen for faster access to your wallet.",
          "title": "Open the Core app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",
          "title": "Install the Core extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "fox": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting FoxWallet on your home screen for quicker access.",
          "title": "Open the FoxWallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "frontier": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",
          "title": "Open the Frontier Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Frontier Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "im_token": {
      "qr_code": {
        "step1": {
          "title": "Open the imToken app",
          "description": "Put imToken app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "iopay": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",
          "title": "Open the ioPay app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      }
    },

    "kaikas": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaikas extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaikas app",
          "description": "Put Kaikas app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kaia": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaia extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaia app",
          "description": "Put Kaia app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kraken": {
      "qr_code": {
        "step1": {
          "title": "Open the Kraken Wallet app",
          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "kresus": {
      "qr_code": {
        "step1": {
          "title": "Open the Kresus Wallet app",
          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "magicEden": {
      "extension": {
        "step1": {
          "title": "Install the Magic Eden extension",
          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "metamask": {
      "qr_code": {
        "step1": {
          "title": "Open the MetaMask app",
          "description": "We recommend putting MetaMask on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the MetaMask extension",
          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "nestwallet": {
      "extension": {
        "step1": {
          "title": "Install the NestWallet extension",
          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "okx": {
      "qr_code": {
        "step1": {
          "title": "Open the OKX Wallet app",
          "description": "We recommend putting OKX Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the OKX Wallet extension",
          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "omni": {
      "qr_code": {
        "step1": {
          "title": "Open the Omni app",
          "description": "Add Omni to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "1inch": {
      "qr_code": {
        "step1": {
          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",
          "title": "Open the 1inch Wallet app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "Open the TokenPocket app",
          "description": "We recommend putting TokenPocket on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the TokenPocket extension",
          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "trust": {
      "qr_code": {
        "step1": {
          "title": "Open the Trust Wallet app",
          "description": "Put Trust Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Trust Wallet extension",
          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "Open the Uniswap app",
          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "zerion": {
      "qr_code": {
        "step1": {
          "title": "Open the Zerion app",
          "description": "We recommend putting Zerion on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Zerion extension",
          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "Open the Rainbow app",
          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "You can easily backup your wallet using our backup feature on your phone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "enkrypt": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Enkrypt Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "frame": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",
          "title": "Install Frame & the companion extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "one_key": {
      "extension": {
        "step1": {
          "title": "Install the OneKey Wallet extension",
          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "paraswap": {
      "qr_code": {
        "step1": {
          "title": "Open the ParaSwap app",
          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "phantom": {
      "extension": {
        "step1": {
          "title": "Install the Phantom extension",
          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rabby": {
      "extension": {
        "step1": {
          "title": "Install the Rabby extension",
          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ronin": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",
          "title": "Open the Ronin Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Ronin Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "ramper": {
      "extension": {
        "step1": {
          "title": "Install the Ramper extension",
          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safeheron": {
      "extension": {
        "step1": {
          "title": "Install the Core extension",
          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "taho": {
      "extension": {
        "step1": {
          "title": "Install the Taho extension",
          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "talisman": {
      "extension": {
        "step1": {
          "title": "Install the Talisman extension",
          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import an Ethereum Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "xdefi": {
      "extension": {
        "step1": {
          "title": "Install the XDEFI Wallet extension",
          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "zeal": {
      "qr_code": {
        "step1": {
          "title": "Open the Zeal app",
          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Zeal extension",
          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safepal": {
      "extension": {
        "step1": {
          "title": "Install the SafePal Wallet extension",
          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SafePal Wallet app",
          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "desig": {
      "extension": {
        "step1": {
          "title": "Install the Desig extension",
          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "subwallet": {
      "extension": {
        "step1": {
          "title": "Install the SubWallet extension",
          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SubWallet app",
          "description": "We recommend putting SubWallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "clv": {
      "extension": {
        "step1": {
          "title": "Install the CLV Wallet extension",
          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the CLV Wallet app",
          "description": "We recommend putting CLV Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "okto": {
      "qr_code": {
        "step1": {
          "title": "Open the Okto app",
          "description": "Add Okto to your home screen for quick access"
        },
        "step2": {
          "title": "Create an MPC Wallet",
          "description": "Create an account and generate a wallet"
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."
        }
      }
    },

    "ledger": {
      "desktop": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "Set up a new Ledger or connect to an existing one."
        },
        "step3": {
          "title": "Connect",
          "description": "A connection prompt will appear for you to connect your wallet."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "You can either sync with the desktop app or connect your Ledger."
        },
        "step3": {
          "title": "Scan the code",
          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "valora": {
      "qr_code": {
        "step1": {
          "title": "Open the Valora app",
          "description": "We recommend putting Valora on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    }
  }
}
`
        },
        37494: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return s
                },
                m: function() {
                    return a
                }
            });
            var r = n(75639),
                o = n(32947),
                i = n(43950),
                a = class extends o.F {#
                    e;#
                    t;#
                    n;
                    constructor(e) {
                        super(), this.mutationId = e.mutationId, this.#t = e.mutationCache, this.#e = [], this.state = e.state || s(), this.setOptions(e.options), this.scheduleGc()
                    }
                    setOptions(e) {
                        this.options = e, this.updateGcTime(this.options.gcTime)
                    }
                    get meta() {
                        return this.options.meta
                    }
                    addObserver(e) {
                        this.#e.includes(e) || (this.#e.push(e), this.clearGcTimeout(), this.#t.notify({
                            type: "observerAdded",
                            mutation: this,
                            observer: e
                        }))
                    }
                    removeObserver(e) {
                        this.#e = this.#e.filter(t => t !== e), this.scheduleGc(), this.#t.notify({
                            type: "observerRemoved",
                            mutation: this,
                            observer: e
                        })
                    }
                    optionalRemove() {
                        this.#e.length || ("pending" === this.state.status ? this.scheduleGc() : this.#t.remove(this))
                    }
                    continue () {
                        return this.#n ? .continue() ? ? this.execute(this.state.variables)
                    }
                    async execute(e) {
                        this.#n = (0, i.Mz)({
                            fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(Error("No mutationFn found")),
                            onFail: (e, t) => {
                                this.#r({
                                    type: "failed",
                                    failureCount: e,
                                    error: t
                                })
                            },
                            onPause: () => {
                                this.#r({
                                    type: "pause"
                                })
                            },
                            onContinue: () => {
                                this.#r({
                                    type: "continue"
                                })
                            },
                            retry: this.options.retry ? ? 0,
                            retryDelay: this.options.retryDelay,
                            networkMode: this.options.networkMode,
                            canRun: () => this.#t.canRun(this)
                        });
                        let t = "pending" === this.state.status,
                            n = !this.#n.canStart();
                        try {
                            if (!t) {
                                this.#r({
                                    type: "pending",
                                    variables: e,
                                    isPaused: n
                                }), await this.#t.config.onMutate ? .(e, this);
                                let t = await this.options.onMutate ? .(e);
                                t !== this.state.context && this.#r({
                                    type: "pending",
                                    context: t,
                                    variables: e,
                                    isPaused: n
                                })
                            }
                            let r = await this.#n.start();
                            return await this.#t.config.onSuccess ? .(r, e, this.state.context, this), await this.options.onSuccess ? .(r, e, this.state.context), await this.#t.config.onSettled ? .(r, null, this.state.variables, this.state.context, this), await this.options.onSettled ? .(r, null, e, this.state.context), this.#r({
                                type: "success",
                                data: r
                            }), r
                        } catch (t) {
                            try {
                                throw await this.#t.config.onError ? .(t, e, this.state.context, this), await this.options.onError ? .(t, e, this.state.context), await this.#t.config.onSettled ? .(void 0, t, this.state.variables, this.state.context, this), await this.options.onSettled ? .(void 0, t, e, this.state.context), t
                            } finally {
                                this.#r({
                                    type: "error",
                                    error: t
                                })
                            }
                        } finally {
                            this.#t.runNext(this)
                        }
                    }#
                    r(e) {
                        this.state = (t => {
                            switch (e.type) {
                                case "failed":
                                    return { ...t,
                                        failureCount: e.failureCount,
                                        failureReason: e.error
                                    };
                                case "pause":
                                    return { ...t,
                                        isPaused: !0
                                    };
                                case "continue":
                                    return { ...t,
                                        isPaused: !1
                                    };
                                case "pending":
                                    return { ...t,
                                        context: e.context,
                                        data: void 0,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        isPaused: e.isPaused,
                                        status: "pending",
                                        variables: e.variables,
                                        submittedAt: Date.now()
                                    };
                                case "success":
                                    return { ...t,
                                        data: e.data,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        status: "success",
                                        isPaused: !1
                                    };
                                case "error":
                                    return { ...t,
                                        data: void 0,
                                        error: e.error,
                                        failureCount: t.failureCount + 1,
                                        failureReason: e.error,
                                        isPaused: !1,
                                        status: "error"
                                    }
                            }
                        })(this.state), r.V.batch(() => {
                            this.#e.forEach(t => {
                                t.onMutationUpdate(e)
                            }), this.#t.notify({
                                mutation: this,
                                type: "updated",
                                action: e
                            })
                        })
                    }
                };

            function s() {
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
        65893: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return u
                }
            });
            var r = n(78572),
                o = n(37494),
                i = n(75639),
                a = n(26047),
                s = n(18636),
                MutationObserver = class extends a.l {#
                    o;#
                    i = void 0;#
                    a;#
                    s;
                    constructor(e, t) {
                        super(), this.#o = e, this.setOptions(t), this.bindMethods(), this.#c()
                    }
                    bindMethods() {
                        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                    }
                    setOptions(e) {
                        let t = this.options;
                        this.options = this.#o.defaultMutationOptions(e), (0, s.VS)(this.options, t) || this.#o.getMutationCache().notify({
                            type: "observerOptionsUpdated",
                            mutation: this.#a,
                            observer: this
                        }), t ? .mutationKey && this.options.mutationKey && (0, s.Ym)(t.mutationKey) !== (0, s.Ym)(this.options.mutationKey) ? this.reset() : this.#a ? .state.status === "pending" && this.#a.setOptions(this.options)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.#a ? .removeObserver(this)
                    }
                    onMutationUpdate(e) {
                        this.#c(), this.#l(e)
                    }
                    getCurrentResult() {
                        return this.#i
                    }
                    reset() {
                        this.#a ? .removeObserver(this), this.#a = void 0, this.#c(), this.#l()
                    }
                    mutate(e, t) {
                        return this.#s = t, this.#a ? .removeObserver(this), this.#a = this.#o.getMutationCache().build(this.#o, this.options), this.#a.addObserver(this), this.#a.execute(e)
                    }#
                    c() {
                        let e = this.#a ? .state ? ? (0, o.R)();
                        this.#i = { ...e,
                            isPending: "pending" === e.status,
                            isSuccess: "success" === e.status,
                            isError: "error" === e.status,
                            isIdle: "idle" === e.status,
                            mutate: this.mutate,
                            reset: this.reset
                        }
                    }#
                    l(e) {
                        i.V.batch(() => {
                            if (this.#s && this.hasListeners()) {
                                let t = this.#i.variables,
                                    n = this.#i.context;
                                e ? .type === "success" ? (this.#s.onSuccess ? .(e.data, t, n), this.#s.onSettled ? .(e.data, null, t, n)) : e ? .type === "error" && (this.#s.onError ? .(e.error, t, n), this.#s.onSettled ? .(void 0, e.error, t, n))
                            }
                            this.listeners.forEach(e => {
                                e(this.#i)
                            })
                        })
                    }
                },
                c = n(46735),
                l = n(32578);

            function u(e, t) {
                let n = (0, c.NL)(t),
                    [o] = r.useState(() => new MutationObserver(n, e));
                r.useEffect(() => {
                    o.setOptions(e)
                }, [o, e]);
                let a = r.useSyncExternalStore(r.useCallback(e => o.subscribe(i.V.batchCalls(e)), [o]), () => o.getCurrentResult(), () => o.getCurrentResult()),
                    s = r.useCallback((e, t) => {
                        o.mutate(e, t).catch(l.Z)
                    }, [o]);
                if (a.error && (0, l.L)(o.options.throwOnError, [a.error])) throw a.error;
                return { ...a,
                    mutate: s,
                    mutateAsync: a.mutate
                }
            }
        },
        13547: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return c
                }
            });
            var r = n(64477),
                o = n(95451),
                i = n(92490),
                a = n(73397),
                s = n(82646);

            function c(e = {}) {
                let t, l, u, d, p, h, f, w, A;
                return "3" === e.version || e.headlessMode ? (0, r.K)(r => ({
                    id: "coinbaseWalletSDK",
                    name: "Coinbase Wallet",
                    supportsSimulation: !0,
                    type: c.type,
                    async connect({
                        chainId: e
                    } = {}) {
                        try {
                            let t = await this.getProvider(),
                                n = (await t.request({
                                    method: "eth_requestAccounts"
                                })).map(e => (0, i.K)(e));
                            u || (u = this.onAccountsChanged.bind(this), t.on("accountsChanged", u)), d || (d = this.onChainChanged.bind(this), t.on("chainChanged", d)), p || (p = this.onDisconnect.bind(this), t.on("disconnect", p));
                            let r = await this.getChainId();
                            if (e && r !== e) {
                                let t = await this.switchChain({
                                    chainId: e
                                }).catch(e => {
                                    if (e.code === a.ab.code) throw e;
                                    return {
                                        id: r
                                    }
                                });
                                r = t ? .id ? ? r
                            }
                            return {
                                accounts: n,
                                chainId: r
                            }
                        } catch (e) {
                            if (/(user closed modal|accounts received is empty|user denied account)/i.test(e.message)) throw new a.ab(e);
                            throw e
                        }
                    },
                    async disconnect() {
                        let e = await this.getProvider();
                        u && (e.removeListener("accountsChanged", u), u = void 0), d && (e.removeListener("chainChanged", d), d = void 0), p && (e.removeListener("disconnect", p), p = void 0), e.disconnect(), e.close()
                    },
                    async getAccounts() {
                        let e = await this.getProvider();
                        return (await e.request({
                            method: "eth_accounts"
                        })).map(e => (0, i.K)(e))
                    },
                    async getChainId() {
                        let e = await this.getProvider(),
                            t = await e.request({
                                method: "eth_chainId"
                            });
                        return Number(t)
                    },
                    async getProvider() {
                        if (!l) {
                            let o = await (async () => {
                                let {
                                    default: e
                                } = await Promise.all([n.e(1900), n.e(206), n.e(4855)]).then(n.t.bind(n, 30206, 19));
                                return "function" != typeof e && "function" == typeof e.default ? e.default : e
                            })();
                            t = new o({ ...e,
                                reloadOnDisconnect: !1
                            });
                            let i = t.walletExtension ? .getChainId(),
                                a = r.chains.find(t => e.chainId ? t.id === e.chainId : t.id === i) || r.chains[0],
                                s = e.chainId || a ? .id,
                                c = e.jsonRpcUrl || a ? .rpcUrls.default.http[0];
                            l = t.makeWeb3Provider(c, s)
                        }
                        return l
                    },
                    async isAuthorized() {
                        try {
                            let e = await this.getAccounts();
                            return !!e.length
                        } catch {
                            return !1
                        }
                    },
                    async switchChain({
                        addEthereumChainParameter: e,
                        chainId: t
                    }) {
                        let n = r.chains.find(e => e.id === t);
                        if (!n) throw new a.x3(new o.X4);
                        let i = await this.getProvider();
                        try {
                            return await i.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: (0, s.eC)(n.id)
                                }]
                            }), n
                        } catch (r) {
                            if (4902 === r.code) try {
                                let r, o;
                                r = e ? .blockExplorerUrls ? e.blockExplorerUrls : n.blockExplorers ? .default.url ? [n.blockExplorers ? .default.url] : [], o = e ? .rpcUrls ? .length ? e.rpcUrls : [n.rpcUrls.default ? .http[0] ? ? ""];
                                let a = {
                                    blockExplorerUrls: r,
                                    chainId: (0, s.eC)(t),
                                    chainName: e ? .chainName ? ? n.name,
                                    iconUrls: e ? .iconUrls,
                                    nativeCurrency: e ? .nativeCurrency ? ? n.nativeCurrency,
                                    rpcUrls: o
                                };
                                return await i.request({
                                    method: "wallet_addEthereumChain",
                                    params: [a]
                                }), n
                            } catch (e) {
                                throw new a.ab(e)
                            }
                            throw new a.x3(r)
                        }
                    },
                    onAccountsChanged(e) {
                        0 === e.length ? this.onDisconnect() : r.emitter.emit("change", {
                            accounts: e.map(e => (0, i.K)(e))
                        })
                    },
                    onChainChanged(e) {
                        let t = Number(e);
                        r.emitter.emit("change", {
                            chainId: t
                        })
                    },
                    async onDisconnect(e) {
                        r.emitter.emit("disconnect");
                        let t = await this.getProvider();
                        u && (t.removeListener("accountsChanged", u), u = void 0), d && (t.removeListener("chainChanged", d), d = void 0), p && (t.removeListener("disconnect", p), p = void 0)
                    }
                })) : (0, r.K)(t => ({
                    id: "coinbaseWalletSDK",
                    name: "Coinbase Wallet",
                    rdns: "com.coinbase.wallet",
                    supportsSimulation: !0,
                    type: c.type,
                    async connect({
                        chainId: e
                    } = {}) {
                        try {
                            let t = await this.getProvider(),
                                n = (await t.request({
                                    method: "eth_requestAccounts"
                                })).map(e => (0, i.K)(e));
                            f || (f = this.onAccountsChanged.bind(this), t.on("accountsChanged", f)), w || (w = this.onChainChanged.bind(this), t.on("chainChanged", w)), A || (A = this.onDisconnect.bind(this), t.on("disconnect", A));
                            let r = await this.getChainId();
                            if (e && r !== e) {
                                let t = await this.switchChain({
                                    chainId: e
                                }).catch(e => {
                                    if (e.code === a.ab.code) throw e;
                                    return {
                                        id: r
                                    }
                                });
                                r = t ? .id ? ? r
                            }
                            return {
                                accounts: n,
                                chainId: r
                            }
                        } catch (e) {
                            if (/(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(e.message)) throw new a.ab(e);
                            throw e
                        }
                    },
                    async disconnect() {
                        let e = await this.getProvider();
                        f && (e.removeListener("accountsChanged", f), f = void 0), w && (e.removeListener("chainChanged", w), w = void 0), A && (e.removeListener("disconnect", A), A = void 0), e.disconnect(), e.close ? .()
                    },
                    async getAccounts() {
                        let e = await this.getProvider();
                        return (await e.request({
                            method: "eth_accounts"
                        })).map(e => (0, i.K)(e))
                    },
                    async getChainId() {
                        let e = await this.getProvider(),
                            t = await e.request({
                                method: "eth_chainId"
                            });
                        return Number(t)
                    },
                    async getProvider() {
                        if (!h) {
                            let r = await (async () => {
                                let {
                                    default: e
                                } = await Promise.all([n.e(1900), n.e(9275)]).then(n.t.bind(n, 47013, 19));
                                return "function" != typeof e && "function" == typeof e.default ? e.default : e
                            })();
                            h = new r({ ...e,
                                appChainIds: t.chains.map(e => e.id)
                            }).makeWeb3Provider({ ...e,
                                options: e.preference ? ? "all"
                            })
                        }
                        return h
                    },
                    async isAuthorized() {
                        try {
                            let e = await this.getAccounts();
                            return !!e.length
                        } catch {
                            return !1
                        }
                    },
                    async switchChain({
                        addEthereumChainParameter: e,
                        chainId: n
                    }) {
                        let r = t.chains.find(e => e.id === n);
                        if (!r) throw new a.x3(new o.X4);
                        let i = await this.getProvider();
                        try {
                            return await i.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: (0, s.eC)(r.id)
                                }]
                            }), r
                        } catch (t) {
                            if (4902 === t.code) try {
                                let t, o;
                                t = e ? .blockExplorerUrls ? e.blockExplorerUrls : r.blockExplorers ? .default.url ? [r.blockExplorers ? .default.url] : [], o = e ? .rpcUrls ? .length ? e.rpcUrls : [r.rpcUrls.default ? .http[0] ? ? ""];
                                let a = {
                                    blockExplorerUrls: t,
                                    chainId: (0, s.eC)(n),
                                    chainName: e ? .chainName ? ? r.name,
                                    iconUrls: e ? .iconUrls,
                                    nativeCurrency: e ? .nativeCurrency ? ? r.nativeCurrency,
                                    rpcUrls: o
                                };
                                return await i.request({
                                    method: "wallet_addEthereumChain",
                                    params: [a]
                                }), r
                            } catch (e) {
                                throw new a.ab(e)
                            }
                            throw new a.x3(t)
                        }
                    },
                    onAccountsChanged(e) {
                        0 === e.length ? this.onDisconnect() : t.emitter.emit("change", {
                            accounts: e.map(e => (0, i.K)(e))
                        })
                    },
                    onChainChanged(e) {
                        let n = Number(e);
                        t.emitter.emit("change", {
                            chainId: n
                        })
                    },
                    async onDisconnect(e) {
                        t.emitter.emit("disconnect");
                        let n = await this.getProvider();
                        f && (n.removeListener("accountsChanged", f), f = void 0), w && (n.removeListener("chainChanged", w), w = void 0), A && (n.removeListener("disconnect", A), A = void 0)
                    }
                }))
            }
            c.type = "coinbaseWallet"
        },
        93278: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return s
                }
            });
            var r = n(64477),
                o = n(11020),
                i = n(92490),
                a = n(49520);

            function s(e = {}) {
                let t, c;
                let {
                    shimDisconnect: l = !1
                } = e;
                return (0, r.K)(r => ({
                    id: "safe",
                    name: "Safe",
                    type: s.type,
                    async connect() {
                        let e = await this.getProvider();
                        if (!e) throw new o.M;
                        let t = await this.getAccounts(),
                            n = await this.getChainId();
                        return c || (c = this.onDisconnect.bind(this), e.on("disconnect", c)), l && await r.storage ? .removeItem("safe.disconnected"), {
                            accounts: t,
                            chainId: n
                        }
                    },
                    async disconnect() {
                        let e = await this.getProvider();
                        if (!e) throw new o.M;
                        c && (e.removeListener("disconnect", c), c = void 0), l && await r.storage ? .setItem("safe.disconnected", !0)
                    },
                    async getAccounts() {
                        let e = await this.getProvider();
                        if (!e) throw new o.M;
                        return (await e.request({
                            method: "eth_accounts"
                        })).map(i.K)
                    },
                    async getProvider() {
                        let r = "undefined" != typeof window && window ? .parent !== window;
                        if (r) {
                            if (!t) {
                                let {
                                    default: r
                                } = await n.e(8366).then(n.bind(n, 78366)), o = new r(e), i = await (0, a.F)(() => o.safe.getInfo(), {
                                    timeout: e.unstable_getInfoTimeout ? ? 10
                                });
                                if (!i) throw Error("Could not load Safe information");
                                let {
                                    SafeAppProvider: s
                                } = await n.e(6147).then(n.t.bind(n, 26147, 19));
                                t = new s(i, o)
                            }
                            return t
                        }
                    },
                    async getChainId() {
                        let e = await this.getProvider();
                        if (!e) throw new o.M;
                        return Number(e.chainId)
                    },
                    async isAuthorized() {
                        try {
                            let e = l && await r.storage ? .getItem("safe.disconnected");
                            if (e) return !1;
                            let t = await this.getAccounts();
                            return !!t.length
                        } catch {
                            return !1
                        }
                    },
                    onAccountsChanged() {},
                    onChainChanged() {},
                    onDisconnect() {
                        r.emitter.emit("disconnect")
                    }
                }))
            }
            s.type = "safe"
        },
        77568: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return l
                }
            });
            var r = n(64477),
                o = n(11020),
                i = n(95451),
                a = n(92490),
                s = n(73397),
                c = n(82646);

            function l(e) {
                let t, u, d, p, h, f, w, A;
                let m = e.isNewChainsStale ? ? !0;
                return (0, r.K)(r => ({
                    id: "walletConnect",
                    name: "WalletConnect",
                    type: l.type,
                    async setup() {
                        let e = await this.getProvider().catch(() => null);
                        e && (h || (h = this.onConnect.bind(this), e.on("connect", h)), w || (w = this.onSessionDelete.bind(this), e.on("session_delete", w)))
                    },
                    async connect({
                        chainId: e,
                        ...t
                    } = {}) {
                        try {
                            let n = await this.getProvider();
                            if (!n) throw new o.M;
                            f || (f = this.onDisplayUri, n.on("display_uri", f));
                            let i = e;
                            if (!i) {
                                let e = await r.storage ? .getItem("state") ? ? {},
                                    t = r.chains.some(t => t.id === e.chainId);
                                i = t ? e.chainId : r.chains[0] ? .id
                            }
                            if (!i) throw Error("No chains found on connector.");
                            let s = await this.isChainsStale();
                            if (n.session && s && await n.disconnect(), !n.session || s) {
                                let e = r.chains.filter(e => e.id !== i).map(e => e.id);
                                await n.connect({
                                    optionalChains: [i, ...e],
                                    ..."pairingTopic" in t ? {
                                        pairingTopic: t.pairingTopic
                                    } : {}
                                }), this.setRequestedChainsIds(r.chains.map(e => e.id))
                            }
                            let c = (await n.enable()).map(e => (0, a.K)(e)),
                                l = await this.getChainId();
                            return f && (n.removeListener("display_uri", f), f = void 0), h && (n.removeListener("connect", h), h = void 0), d || (d = this.onAccountsChanged.bind(this), n.on("accountsChanged", d)), p || (p = this.onChainChanged.bind(this), n.on("chainChanged", p)), A || (A = this.onDisconnect.bind(this), n.on("disconnect", A)), w || (w = this.onSessionDelete.bind(this), n.on("session_delete", w)), {
                                accounts: c,
                                chainId: l
                            }
                        } catch (e) {
                            if (/(user rejected|connection request reset)/i.test(e ? .message)) throw new s.ab(e);
                            throw e
                        }
                    },
                    async disconnect() {
                        let e = await this.getProvider();
                        try {
                            await e ? .disconnect()
                        } catch (e) {
                            if (!/No matching key/i.test(e.message)) throw e
                        } finally {
                            p && (e ? .removeListener("chainChanged", p), p = void 0), A && (e ? .removeListener("disconnect", A), A = void 0), h || (h = this.onConnect.bind(this), e ? .on("connect", h)), d && (e ? .removeListener("accountsChanged", d), d = void 0), w && (e ? .removeListener("session_delete", w), w = void 0), this.setRequestedChainsIds([])
                        }
                    },
                    async getAccounts() {
                        let e = await this.getProvider();
                        return e.accounts.map(e => (0, a.K)(e))
                    },
                    async getProvider({
                        chainId: o
                    } = {}) {
                        async function i() {
                            let t = r.chains.map(e => e.id);
                            if (!t.length) return;
                            let {
                                EthereumProvider: o
                            } = await Promise.all([n.e(2565), n.e(1900), n.e(2654), n.e(3506)]).then(n.bind(n, 16278));
                            return await o.init({ ...e,
                                disableProviderPing: !0,
                                optionalChains: t,
                                projectId: e.projectId,
                                rpcMap: Object.fromEntries(r.chains.map(e => {
                                    let [t] = function(e) {
                                        let {
                                            chain: t
                                        } = e, n = t.rpcUrls.default.http[0];
                                        if (!e.transports) return [n];
                                        let r = e.transports ? .[t.id] ? .({
                                                chain: t
                                            }),
                                            o = r ? .value ? .transports || [r];
                                        return o.map(({
                                            value: e
                                        }) => e ? .url || n)
                                    }({
                                        chain: e,
                                        transports: r.transports
                                    });
                                    return [e.id, t]
                                })),
                                showQrModal: e.showQrModal ? ? !0
                            })
                        }
                        return t || (u || (u = i()), t = await u, t ? .events.setMaxListeners(Number.POSITIVE_INFINITY)), o && await this.switchChain ? .({
                            chainId: o
                        }), t
                    },
                    async getChainId() {
                        let e = await this.getProvider();
                        return e.chainId
                    },
                    async isAuthorized() {
                        try {
                            let [e, t] = await Promise.all([this.getAccounts(), this.getProvider()]);
                            if (!e.length) return !1;
                            let n = await this.isChainsStale();
                            if (n && t.session) return await t.disconnect().catch(() => {}), !1;
                            return !0
                        } catch {
                            return !1
                        }
                    },
                    async switchChain({
                        addEthereumChainParameter: e,
                        chainId: t
                    }) {
                        let n = await this.getProvider();
                        if (!n) throw new o.M;
                        let a = r.chains.find(e => e.id === t);
                        if (!a) throw new s.x3(new i.X4);
                        try {
                            await Promise.all([new Promise(e => {
                                let n = ({
                                    chainId: o
                                }) => {
                                    o === t && (r.emitter.off("change", n), e())
                                };
                                r.emitter.on("change", n)
                            }), n.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: (0, c.eC)(t)
                                }]
                            })]);
                            let e = await this.getRequestedChainsIds();
                            return this.setRequestedChainsIds([...e, t]), a
                        } catch (r) {
                            if (/(user rejected)/i.test(r.message)) throw new s.ab(r);
                            try {
                                let r, o;
                                r = e ? .blockExplorerUrls ? e.blockExplorerUrls : a.blockExplorers ? .default.url ? [a.blockExplorers ? .default.url] : [], o = e ? .rpcUrls ? .length ? e.rpcUrls : [...a.rpcUrls.default.http];
                                let i = {
                                    blockExplorerUrls: r,
                                    chainId: (0, c.eC)(t),
                                    chainName: e ? .chainName ? ? a.name,
                                    iconUrls: e ? .iconUrls,
                                    nativeCurrency: e ? .nativeCurrency ? ? a.nativeCurrency,
                                    rpcUrls: o
                                };
                                await n.request({
                                    method: "wallet_addEthereumChain",
                                    params: [i]
                                });
                                let s = await this.getRequestedChainsIds();
                                return this.setRequestedChainsIds([...s, t]), a
                            } catch (e) {
                                throw new s.ab(e)
                            }
                        }
                    },
                    onAccountsChanged(e) {
                        0 === e.length ? this.onDisconnect() : r.emitter.emit("change", {
                            accounts: e.map(e => (0, a.K)(e))
                        })
                    },
                    onChainChanged(e) {
                        let t = Number(e);
                        r.emitter.emit("change", {
                            chainId: t
                        })
                    },
                    async onConnect(e) {
                        let t = Number(e.chainId),
                            n = await this.getAccounts();
                        r.emitter.emit("connect", {
                            accounts: n,
                            chainId: t
                        })
                    },
                    async onDisconnect(e) {
                        this.setRequestedChainsIds([]), r.emitter.emit("disconnect");
                        let t = await this.getProvider();
                        d && (t.removeListener("accountsChanged", d), d = void 0), p && (t.removeListener("chainChanged", p), p = void 0), A && (t.removeListener("disconnect", A), A = void 0), w && (t.removeListener("session_delete", w), w = void 0), h || (h = this.onConnect.bind(this), t.on("connect", h))
                    },
                    onDisplayUri(e) {
                        r.emitter.emit("message", {
                            type: "display_uri",
                            data: e
                        })
                    },
                    onSessionDelete() {
                        this.onDisconnect()
                    },
                    getNamespaceChainsIds() {
                        if (!t) return [];
                        let e = t.session ? .namespaces.eip155 ? .accounts ? .map(e => Number.parseInt(e.split(":")[1] || ""));
                        return e ? ? []
                    },
                    async getRequestedChainsIds() {
                        return await r.storage ? .getItem(this.requestedChainsStorageKey) ? ? []
                    },
                    async isChainsStale() {
                        if (!m) return !1;
                        let e = r.chains.map(e => e.id),
                            t = this.getNamespaceChainsIds();
                        if (t.length && !t.some(t => e.includes(t))) return !1;
                        let n = await this.getRequestedChainsIds();
                        return !e.every(e => n.includes(e))
                    },
                    async setRequestedChainsIds(e) {
                        await r.storage ? .setItem(this.requestedChainsStorageKey, e)
                    },
                    get requestedChainsStorageKey() {
                        return `${this.id}.requestedChains`
                    }
                }))
            }
            l.type = "walletConnect"
        },
        64477: function(e, t, n) {
            "use strict";

            function r(e) {
                return e
            }
            n.d(t, {
                K: function() {
                    return r
                }
            })
        },
        79807: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return p
                }
            });
            var r = n(92490),
                o = n(73397),
                i = n(49520),
                a = n(3069),
                s = n(82646),
                c = n(95451),
                l = n(11020),
                u = n(64477);
            let d = /(rabby|trustwallet)/;

            function p(e = {}) {
                let t, n, w, A;
                let {
                    shimDisconnect: m = !0,
                    unstable_shimAsyncInject: g
                } = e;

                function y() {
                    let t = e.target;
                    if ("function" == typeof t) {
                        let e = t();
                        if (e) return e
                    }
                    return "object" == typeof t ? t : "string" == typeof t ? { ...h[t] ? ? {
                            id: t,
                            name: `${t[0].toUpperCase()}${t.slice(1)}`,
                            provider: `is${t[0].toUpperCase()}${t.slice(1)}`
                        }
                    } : {
                        id: "injected",
                        name: "Injected",
                        provider: e => e ? .ethereum
                    }
                }
                return (0, u.K)(u => ({
                    get icon() {
                        return y().icon
                    },
                    get id() {
                        return y().id
                    },
                    get name() {
                        return y().name
                    },
                    get supportsSimulation() {
                        return d.test(this.id.toLowerCase())
                    },
                    type: p.type,
                    async setup() {
                        let n = await this.getProvider();
                        n ? .on && e.target && (w || (w = this.onConnect.bind(this), n.on("connect", w)), t || (t = this.onAccountsChanged.bind(this), n.on("accountsChanged", t)))
                    },
                    async connect({
                        chainId: i,
                        isReconnecting: a
                    } = {}) {
                        let s = await this.getProvider();
                        if (!s) throw new l.M;
                        let c = [];
                        if (a) c = await this.getAccounts().catch(() => []);
                        else if (m) try {
                            let e = await s.request({
                                method: "wallet_requestPermissions",
                                params: [{
                                    eth_accounts: {}
                                }]
                            });
                            if ((c = e[0] ? .caveats ? .[0] ? .value ? .map(e => r.K(e))).length > 0) {
                                let e = await this.getAccounts();
                                c = e
                            }
                        } catch (e) {
                            if (e.code === o.ab.code) throw new o.ab(e);
                            if (e.code === o.pT.code) throw e
                        }
                        try {
                            if (!c ? .length && !a) {
                                let e = await s.request({
                                    method: "eth_requestAccounts"
                                });
                                c = e.map(e => (0, r.K)(e))
                            }
                            w && (s.removeListener("connect", w), w = void 0), t || (t = this.onAccountsChanged.bind(this), s.on("accountsChanged", t)), n || (n = this.onChainChanged.bind(this), s.on("chainChanged", n)), A || (A = this.onDisconnect.bind(this), s.on("disconnect", A));
                            let l = await this.getChainId();
                            if (i && l !== i) {
                                let e = await this.switchChain({
                                    chainId: i
                                }).catch(e => {
                                    if (e.code === o.ab.code) throw e;
                                    return {
                                        id: l
                                    }
                                });
                                l = e ? .id ? ? l
                            }
                            return m && await u.storage ? .removeItem(`${this.id}.disconnected`), e.target || await u.storage ? .setItem("injected.connected", !0), {
                                accounts: c,
                                chainId: l
                            }
                        } catch (e) {
                            if (e.code === o.ab.code) throw new o.ab(e);
                            if (e.code === o.pT.code) throw new o.pT(e);
                            throw e
                        }
                    },
                    async disconnect() {
                        let t = await this.getProvider();
                        if (!t) throw new l.M;
                        n && (t.removeListener("chainChanged", n), n = void 0), A && (t.removeListener("disconnect", A), A = void 0), w || (w = this.onConnect.bind(this), t.on("connect", w));
                        try {
                            await (0, i.F)(() => t.request({
                                method: "wallet_revokePermissions",
                                params: [{
                                    eth_accounts: {}
                                }]
                            }), {
                                timeout: 100
                            })
                        } catch {}
                        m && await u.storage ? .setItem(`${this.id}.disconnected`, !0), e.target || await u.storage ? .removeItem("injected.connected")
                    },
                    async getAccounts() {
                        let e = await this.getProvider();
                        if (!e) throw new l.M;
                        let t = await e.request({
                            method: "eth_accounts"
                        });
                        return t.map(e => (0, r.K)(e))
                    },
                    async getChainId() {
                        let e = await this.getProvider();
                        if (!e) throw new l.M;
                        let t = await e.request({
                            method: "eth_chainId"
                        });
                        return Number(t)
                    },
                    async getProvider() {
                        let e;
                        if ("undefined" == typeof window) return;
                        let t = y();
                        return (e = "function" == typeof t.provider ? t.provider(window) : "string" == typeof t.provider ? f(window, t.provider) : t.provider) && !e.removeListener && ("off" in e && "function" == typeof e.off ? e.removeListener = e.off : e.removeListener = () => {}), e
                    },
                    async isAuthorized() {
                        try {
                            let t = m && await u.storage ? .getItem(`${this.id}.disconnected`);
                            if (t) return !1;
                            if (!e.target) {
                                let e = await u.storage ? .getItem("injected.connected");
                                if (!e) return !1
                            }
                            let n = await this.getProvider();
                            if (!n) {
                                if (void 0 !== g && !1 !== g) {
                                    let e = async () => {
                                            "undefined" != typeof window && window.removeEventListener("ethereum#initialized", e);
                                            let t = await this.getProvider();
                                            return !!t
                                        },
                                        t = "number" == typeof g ? g : 1e3,
                                        n = await Promise.race([..."undefined" != typeof window ? [new Promise(t => window.addEventListener("ethereum#initialized", () => t(e()), {
                                            once: !0
                                        }))] : [], new Promise(n => setTimeout(() => n(e()), t))]);
                                    if (n) return !0
                                }
                                throw new l.M
                            }
                            let r = await (0, a.J)(() => this.getAccounts());
                            return !!r.length
                        } catch {
                            return !1
                        }
                    },
                    async switchChain({
                        addEthereumChainParameter: e,
                        chainId: t
                    }) {
                        let n = await this.getProvider();
                        if (!n) throw new l.M;
                        let r = u.chains.find(e => e.id === t);
                        if (!r) throw new o.x3(new c.X4);
                        try {
                            return await Promise.all([n.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: (0, s.eC)(t)
                                }]
                            }).then(async () => {
                                let e = await this.getChainId();
                                e === t && u.emitter.emit("change", {
                                    chainId: t
                                })
                            }), new Promise(e => {
                                let n = r => {
                                    "chainId" in r && r.chainId === t && (u.emitter.off("change", n), e())
                                };
                                u.emitter.on("change", n)
                            })]), r
                        } catch (i) {
                            if (4902 === i.code || i ? .data ? .originalError ? .code === 4902) try {
                                let i, a;
                                let {
                                    default: c,
                                    ...l
                                } = r.blockExplorers ? ? {};
                                e ? .blockExplorerUrls ? i = e.blockExplorerUrls : c && (i = [c.url, ...Object.values(l).map(e => e.url)]), a = e ? .rpcUrls ? .length ? e.rpcUrls : [r.rpcUrls.default ? .http[0] ? ? ""];
                                let u = {
                                    blockExplorerUrls: i,
                                    chainId: (0, s.eC)(t),
                                    chainName: e ? .chainName ? ? r.name,
                                    iconUrls: e ? .iconUrls,
                                    nativeCurrency: e ? .nativeCurrency ? ? r.nativeCurrency,
                                    rpcUrls: a
                                };
                                await n.request({
                                    method: "wallet_addEthereumChain",
                                    params: [u]
                                });
                                let d = await this.getChainId();
                                if (d !== t) throw new o.ab(Error("User rejected switch after adding network."));
                                return r
                            } catch (e) {
                                throw new o.ab(e)
                            }
                            if (i.code === o.ab.code) throw new o.ab(i);
                            throw new o.x3(i)
                        }
                    },
                    async onAccountsChanged(e) {
                        if (0 === e.length) this.onDisconnect();
                        else if (u.emitter.listenerCount("connect")) {
                            let e = (await this.getChainId()).toString();
                            this.onConnect({
                                chainId: e
                            }), m && await u.storage ? .removeItem(`${this.id}.disconnected`)
                        } else u.emitter.emit("change", {
                            accounts: e.map(e => (0, r.K)(e))
                        })
                    },
                    onChainChanged(e) {
                        let t = Number(e);
                        u.emitter.emit("change", {
                            chainId: t
                        })
                    },
                    async onConnect(e) {
                        let r = await this.getAccounts();
                        if (0 === r.length) return;
                        let o = Number(e.chainId);
                        u.emitter.emit("connect", {
                            accounts: r,
                            chainId: o
                        });
                        let i = await this.getProvider();
                        i && (w && (i.removeListener("connect", w), w = void 0), t || (t = this.onAccountsChanged.bind(this), i.on("accountsChanged", t)), n || (n = this.onChainChanged.bind(this), i.on("chainChanged", n)), A || (A = this.onDisconnect.bind(this), i.on("disconnect", A)))
                    },
                    async onDisconnect(e) {
                        let t = await this.getProvider();
                        e && 1013 === e.code && t && (await this.getAccounts()).length || (u.emitter.emit("disconnect"), t && (n && (t.removeListener("chainChanged", n), n = void 0), A && (t.removeListener("disconnect", A), A = void 0), w || (w = this.onConnect.bind(this), t.on("connect", w))))
                    }
                }))
            }
            p.type = "injected";
            let h = {
                coinbaseWallet: {
                    id: "coinbaseWallet",
                    name: "Coinbase Wallet",
                    provider: e => e ? .coinbaseWalletExtension ? e.coinbaseWalletExtension : f(e, "isCoinbaseWallet")
                },
                metaMask: {
                    id: "metaMask",
                    name: "MetaMask",
                    provider: e => f(e, e => {
                        if (!e.isMetaMask || e.isBraveWallet && !e._events && !e._state) return !1;
                        for (let t of ["isApexWallet", "isAvalanche", "isBitKeep", "isBlockWallet", "isKuCoinWallet", "isMathWallet", "isOkxWallet", "isOKExWallet", "isOneInchIOSWallet", "isOneInchAndroidWallet", "isOpera", "isPortal", "isRabby", "isTokenPocket", "isTokenary", "isUniswapWallet", "isZerion"])
                            if (e[t]) return !1;
                        return !0
                    })
                },
                phantom: {
                    id: "phantom",
                    name: "Phantom",
                    provider: e => e ? .phantom ? .ethereum ? e.phantom ? .ethereum : f(e, "isPhantom")
                }
            };

            function f(e, t) {
                function n(e) {
                    return "function" == typeof t ? t(e) : "string" != typeof t || e[t]
                }
                let r = e.ethereum;
                return r ? .providers ? r.providers.find(e => n(e)) : r && n(r) ? r : void 0
            }
        },
        87656: function(e, t, n) {
            "use strict";
            let r;
            n.d(t, {
                _: function() {
                    return C
                }
            });
            var o = n(71368);
            let i = e => (t, n, r) => {
                    let o = r.subscribe;
                    r.subscribe = (e, t, n) => {
                        let i = e;
                        if (t) {
                            let o = (null == n ? void 0 : n.equalityFn) || Object.is,
                                a = e(r.getState());
                            i = n => {
                                let r = e(n);
                                if (!o(a, r)) {
                                    let e = a;
                                    t(a = r, e)
                                }
                            }, (null == n ? void 0 : n.fireImmediately) && t(a, a)
                        }
                        return o(i)
                    };
                    let i = e(t, n, r);
                    return i
                },
                a = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => a(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => a(t)(e)
                        }
                    }
                },
                s = (e, t) => (n, r, o) => {
                    let i, s = {
                            storage: function(e, t) {
                                let n;
                                try {
                                    n = e()
                                } catch (e) {
                                    return
                                }
                                return {
                                    getItem: e => {
                                        var r;
                                        let o = e => null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver),
                                            i = null != (r = n.getItem(e)) ? r : null;
                                        return i instanceof Promise ? i.then(o) : o(i)
                                    },
                                    setItem: (e, r) => n.setItem(e, JSON.stringify(r, null == t ? void 0 : t.replacer)),
                                    removeItem: e => n.removeItem(e)
                                }
                            }(() => localStorage),
                            partialize: e => e,
                            version: 0,
                            merge: (e, t) => ({ ...t,
                                ...e
                            }),
                            ...t
                        },
                        c = !1,
                        l = new Set,
                        u = new Set,
                        d = s.storage;
                    if (!d) return e((...e) => {
                        console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`), n(...e)
                    }, r, o);
                    let p = () => {
                            let e = s.partialize({ ...r()
                            });
                            return d.setItem(s.name, {
                                state: e,
                                version: s.version
                            })
                        },
                        h = o.setState;
                    o.setState = (e, t) => {
                        h(e, t), p()
                    };
                    let f = e((...e) => {
                        n(...e), p()
                    }, r, o);
                    o.getInitialState = () => f;
                    let w = () => {
                        var e, t;
                        if (!d) return;
                        c = !1, l.forEach(e => {
                            var t;
                            return e(null != (t = r()) ? t : f)
                        });
                        let o = (null == (t = s.onRehydrateStorage) ? void 0 : t.call(s, null != (e = r()) ? e : f)) || void 0;
                        return a(d.getItem.bind(d))(s.name).then(e => {
                            if (e) {
                                if ("number" != typeof e.version || e.version === s.version) return [!1, e.state];
                                if (s.migrate) return [!0, s.migrate(e.state, e.version)];
                                console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                            }
                            return [!1, void 0]
                        }).then(e => {
                            var t;
                            let [o, a] = e;
                            if (n(i = s.merge(a, null != (t = r()) ? t : f), !0), o) return p()
                        }).then(() => {
                            null == o || o(i, void 0), i = r(), c = !0, u.forEach(e => e(i))
                        }).catch(e => {
                            null == o || o(void 0, e)
                        })
                    };
                    return o.persist = {
                        setOptions: e => {
                            s = { ...s,
                                ...e
                            }, e.storage && (d = e.storage)
                        },
                        clearStorage: () => {
                            null == d || d.removeItem(s.name)
                        },
                        getOptions: () => s,
                        rehydrate: () => w(),
                        hasHydrated: () => c,
                        onHydrate: e => (l.add(e), () => {
                            l.delete(e)
                        }),
                        onFinishHydration: e => (u.add(e), () => {
                            u.delete(e)
                        })
                    }, s.skipHydration || w(), i || f
                },
                c = e => {
                    let t;
                    let n = new Set,
                        r = (e, r) => {
                            let o = "function" == typeof e ? e(t) : e;
                            if (!Object.is(o, t)) {
                                let e = t;
                                t = (null != r ? r : "object" != typeof o || null === o) ? o : Object.assign({}, t, o), n.forEach(n => n(t, e))
                            }
                        },
                        o = () => t,
                        i = {
                            setState: r,
                            getState: o,
                            getInitialState: () => a,
                            subscribe: e => (n.add(e), () => n.delete(e))
                        },
                        a = t = e(r, o, i);
                    return i
                },
                l = e => e ? c(e) : c;
            var u = n(79807),
                d = n(71100);
            class p {
                constructor(e) {
                    Object.defineProperty(this, "uid", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    }), Object.defineProperty(this, "_emitter", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: new d
                    })
                }
                on(e, t) {
                    this._emitter.on(e, t)
                }
                once(e, t) {
                    this._emitter.once(e, t)
                }
                off(e, t) {
                    this._emitter.off(e, t)
                }
                emit(e, ...t) {
                    let n = t[0];
                    this._emitter.emit(e, {
                        uid: this.uid,
                        ...n
                    })
                }
                listenerCount(e) {
                    return this._emitter.listenerCount(e)
                }
            }

            function h(e, t) {
                return JSON.parse(e, (e, n) => {
                    let r = n;
                    return r ? .__type === "bigint" && (r = BigInt(r.value)), r ? .__type === "Map" && (r = new Map(r.value)), t ? .(e, r) ? ? r
                })
            }

            function f(e, t) {
                return e.slice(0, t).join(".") || "."
            }

            function w(e, t) {
                let {
                    length: n
                } = e;
                for (let r = 0; r < n; ++r)
                    if (e[r] === t) return r + 1;
                return 0
            }

            function A(e, t, n, r) {
                return JSON.stringify(e, function(e, t) {
                    let n = "function" == typeof e,
                        r = "function" == typeof t,
                        o = [],
                        i = [];
                    return function(a, s) {
                        if ("object" == typeof s) {
                            if (o.length) {
                                let e = w(o, this);
                                0 === e ? o[o.length] = this : (o.splice(e), i.splice(e)), i[i.length] = a;
                                let n = w(o, s);
                                if (0 !== n) return r ? t.call(this, a, s, f(i, n)) : `[ref=${f(i,n)}]`
                            } else o[0] = s, i[0] = a
                        }
                        return n ? e.call(this, a, s) : s
                    }
                }((e, n) => {
                    let r = n;
                    return "bigint" == typeof r && (r = {
                        __type: "bigint",
                        value: n.toString()
                    }), r instanceof Map && (r = {
                        __type: "Map",
                        value: Array.from(n.entries())
                    }), t ? .(e, r) ? ? r
                }, r), n ? ? void 0)
            }
            let m = {
                getItem: () => null,
                setItem: () => {},
                removeItem: () => {}
            };
            var g = n(95451);
            let y = 256;
            var b = n(86979);

            function C(e) {
                let t;
                let {
                    multiInjectedProviderDiscovery: n = !0,
                    storage: a = function(e) {
                        let {
                            deserialize: t = h,
                            key: n = "wagmi",
                            serialize: r = A,
                            storage: o = m
                        } = e;

                        function i(e) {
                            return e instanceof Promise ? e.then(e => e).catch(() => null) : e
                        }
                        return { ...o,
                            key: n,
                            async getItem(e, r) {
                                let a = o.getItem(`${n}.${e}`),
                                    s = await i(a);
                                return s ? t(s) ? ? null : r ? ? null
                            },
                            async setItem(e, t) {
                                let a = `${n}.${e}`;
                                null === t ? await i(o.removeItem(a)) : await i(o.setItem(a, r(t)))
                            },
                            async removeItem(e) {
                                await i(o.removeItem(`${n}.${e}`))
                            }
                        }
                    }({
                        storage: "undefined" != typeof window && window.localStorage ? window.localStorage : m
                    }),
                    syncConnectedChain: c = !0,
                    ssr: d = !1,
                    ...f
                } = e, w = "undefined" != typeof window && n ? function() {
                    let e = new Set,
                        t = [],
                        n = () => (function(e) {
                            if ("undefined" == typeof window) return;
                            let t = t => e(t.detail);
                            return window.addEventListener("eip6963:announceProvider", t), window.dispatchEvent(new CustomEvent("eip6963:requestProvider")), () => window.removeEventListener("eip6963:announceProvider", t)
                        })(n => {
                            t.some(({
                                info: e
                            }) => e.uuid === n.info.uuid) || (t = [...t, n], e.forEach(e => e(t, {
                                added: [n]
                            })))
                        }),
                        r = n();
                    return {
                        _listeners: () => e,
                        clear() {
                            e.forEach(e => e([], {
                                removed: [...t]
                            })), t = []
                        },
                        destroy() {
                            this.clear(), e.clear(), r ? .()
                        },
                        findProvider: ({
                            rdns: e
                        }) => t.find(t => t.info.rdns === e),
                        getProviders: () => t,
                        reset() {
                            this.clear(), r ? .(), r = n()
                        },
                        subscribe: (n, {
                            emitImmediately: r
                        } = {}) => (e.add(n), r && n(t, {
                            added: t
                        }), () => e.delete(n))
                    }
                }() : void 0, C = l(() => f.chains), v = l(() => {
                    let e = [],
                        t = new Set;
                    for (let n of f.connectors ? ? []) {
                        let r = k(n);
                        e.push(r), !d && r.rdns && t.add(r.rdns)
                    }
                    if (!d && w) {
                        let n = w.getProviders();
                        for (let r of n) t.has(r.info.rdns) || e.push(k(B(r)))
                    }
                    return e
                });

                function k(e) {
                    let t = new p(function(e = 11) {
                            if (!r || y + e > 512) {
                                r = "", y = 0;
                                for (let e = 0; e < 256; e++) r += (256 + 256 * Math.random() | 0).toString(16).substring(1)
                            }
                            return r.substring(y, y++ + e)
                        }()),
                        n = { ...e({
                                emitter: t,
                                chains: C.getState(),
                                storage: a,
                                transports: f.transports
                            }),
                            emitter: t,
                            uid: t.uid
                        };
                    return t.on("connect", N), n.setup ? .(), n
                }

                function B(e) {
                    let {
                        info: t
                    } = e, n = e.provider;
                    return (0, u.L)({
                        target: { ...t,
                            id: t.rdns,
                            provider: n
                        }
                    })
                }
                let E = new Map;

                function I() {
                    return {
                        chainId: C.getState()[0].id,
                        connections: new Map,
                        current: null,
                        status: "disconnected"
                    }
                }
                let x = "0.0.0-canary-";
                t = b.i.startsWith(x) ? Number.parseInt(b.i.replace(x, "")) : Number.parseInt(b.i.split(".")[0] ? ? "0");
                let M = l(i(a ? s(I, {
                    migrate(e, n) {
                        if (n === t) return e;
                        let r = I(),
                            o = Q(e, r.chainId);
                        return { ...r,
                            chainId: o
                        }
                    },
                    name: "store",
                    partialize: e => ({
                        connections: {
                            __type: "Map",
                            value: Array.from(e.connections.entries()).map(([e, t]) => {
                                let {
                                    id: n,
                                    name: r,
                                    type: o,
                                    uid: i
                                } = t.connector;
                                return [e, { ...t,
                                    connector: {
                                        id: n,
                                        name: r,
                                        type: o,
                                        uid: i
                                    }
                                }]
                            })
                        },
                        chainId: e.chainId,
                        current: e.current
                    }),
                    merge(e, t) {
                        "object" == typeof e && e && "status" in e && delete e.status;
                        let n = Q(e, t.chainId);
                        return { ...t,
                            ...e,
                            chainId: n
                        }
                    },
                    skipHydration: d,
                    storage: a,
                    version: t
                }) : I));

                function Q(e, t) {
                    return e && "object" == typeof e && "chainId" in e && "number" == typeof e.chainId && C.getState().some(t => t.id === e.chainId) ? e.chainId : t
                }

                function D(e) {
                    M.setState(t => {
                        let n = t.connections.get(e.uid);
                        return n ? { ...t,
                            connections: new Map(t.connections).set(e.uid, {
                                accounts: e.accounts ? ? n.accounts,
                                chainId: e.chainId ? ? n.chainId,
                                connector: n.connector
                            })
                        } : t
                    })
                }

                function N(e) {
                    "connecting" !== M.getState().status && "reconnecting" !== M.getState().status && M.setState(t => {
                        let n = v.getState().find(t => t.uid === e.uid);
                        return n ? (n.emitter.listenerCount("connect") && n.emitter.off("connect", D), n.emitter.listenerCount("change") || n.emitter.on("change", D), n.emitter.listenerCount("disconnect") || n.emitter.on("disconnect", S), { ...t,
                            connections: new Map(t.connections).set(e.uid, {
                                accounts: e.accounts,
                                chainId: e.chainId,
                                connector: n
                            }),
                            current: e.uid,
                            status: "connected"
                        }) : t
                    })
                }

                function S(e) {
                    M.setState(t => {
                        let n = t.connections.get(e.uid);
                        if (n) {
                            let e = n.connector;
                            e.emitter.listenerCount("change") && n.connector.emitter.off("change", D), e.emitter.listenerCount("disconnect") && n.connector.emitter.off("disconnect", S), e.emitter.listenerCount("connect") || n.connector.emitter.on("connect", N)
                        }
                        if (t.connections.delete(e.uid), 0 === t.connections.size) return { ...t,
                            connections: new Map,
                            current: null,
                            status: "disconnected"
                        };
                        let r = t.connections.values().next().value;
                        return { ...t,
                            connections: new Map(t.connections),
                            current: r.connector.uid
                        }
                    })
                }
                return M.setState(I()), c && M.subscribe(({
                    connections: e,
                    current: t
                }) => t ? e.get(t) ? .chainId : void 0, e => {
                    let t = C.getState().some(t => t.id === e);
                    if (t) return M.setState(t => ({ ...t,
                        chainId: e ? ? t.chainId
                    }))
                }), w ? .subscribe(e => {
                    let t = new Set,
                        n = new Set;
                    for (let e of v.getState()) t.add(e.id), e.rdns && n.add(e.rdns);
                    let r = [];
                    for (let o of e) {
                        if (n.has(o.info.rdns)) continue;
                        let e = k(B(o));
                        t.has(e.id) || r.push(e)
                    }(!a || M.persist.hasHydrated()) && v.setState(e => [...e, ...r], !0)
                }), {
                    get chains() {
                        return C.getState()
                    },
                    get connectors() {
                        return v.getState()
                    },
                    storage: a,
                    getClient: function(e = {}) {
                        let t;
                        let n = e.chainId ? ? M.getState().chainId,
                            r = C.getState().find(e => e.id === n);
                        if (e.chainId && !r) throw new g.X4; {
                            let e = E.get(M.getState().chainId);
                            if (e && !r) return e;
                            if (!r) throw new g.X4
                        } {
                            let e = E.get(n);
                            if (e) return e
                        }
                        if (f.client) t = f.client({
                            chain: r
                        });
                        else {
                            let e = r.id,
                                n = C.getState().map(e => e.id),
                                i = {},
                                a = Object.entries(f);
                            for (let [t, r] of a)
                                if ("chains" !== t && "client" !== t && "connectors" !== t && "transports" !== t) {
                                    if ("object" == typeof r) {
                                        if (e in r) i[t] = r[e];
                                        else {
                                            let e = n.some(e => e in r);
                                            if (e) continue;
                                            i[t] = r
                                        }
                                    } else i[t] = r
                                }
                            t = (0, o.e)({ ...i,
                                chain: r,
                                batch: i.batch ? ? {
                                    multicall: !0
                                },
                                transport: t => f.transports[e]({ ...t,
                                    connectors: v
                                })
                            })
                        }
                        return E.set(n, t), t
                    },
                    get state() {
                        return M.getState()
                    },
                    setState(e) {
                        let t;
                        t = "function" == typeof e ? e(M.getState()) : e;
                        let n = I();
                        "object" != typeof t && (t = n);
                        let r = Object.keys(n).some(e => !(e in t));
                        r && (t = n), M.setState(t, !0)
                    },
                    subscribe: (e, t, n) => M.subscribe(e, t, n ? { ...n,
                        fireImmediately: n.emitImmediately
                    } : void 0),
                    _internal: {
                        mipd: w,
                        store: M,
                        ssr: !!d,
                        syncConnectedChain: c,
                        transports: f.transports,
                        chains: {
                            setState(e) {
                                let t = "function" == typeof e ? e(C.getState()) : e;
                                if (0 !== t.length) return C.setState(t, !0)
                            },
                            subscribe: e => C.subscribe(e)
                        },
                        connectors: {
                            providerDetailToConnector: B,
                            setup: k,
                            setState: e => v.setState("function" == typeof e ? e(v.getState()) : e, !0),
                            subscribe: e => v.subscribe(e)
                        },
                        events: {
                            change: D,
                            connect: N,
                            disconnect: S
                        }
                    }
                }
            }
        },
        11020: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return o
                },
                O: function() {
                    return i
                }
            });
            var r = n(45301);
            class o extends r.G {
                constructor() {
                    super("Provider not found."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ProviderNotFoundError"
                    })
                }
            }
            class i extends r.G {
                constructor({
                    connector: e
                }) {
                    super(`"${e.name}" does not support programmatic chain switching.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SwitchChainNotSupportedError"
                    })
                }
            }
        },
        73004: function(e, t, n) {
            "use strict";
            let r, o, i, a, s, c, l, u, d, p, h, f, w, A, m;
            n.d(t, {
                F: function() {
                    return G
                }
            });
            let g = new Map([
                [8217, "apostrophe"],
                [8260, "fraction slash"],
                [12539, "middle dot"]
            ]);

            function y(e) {
                var t;
                let n;
                return t = function(e) {
                    let t = 0;

                    function n() {
                        return e[t++] << 8 | e[t++]
                    }
                    let r = n(),
                        o = 1,
                        i = [0, 1];
                    for (let e = 1; e < r; e++) i.push(o += n());
                    let a = n(),
                        s = t;
                    t += a;
                    let c = 0,
                        l = 0;

                    function u() {
                        return 0 == c && (l = l << 8 | e[t++], c = 8), l >> --c & 1
                    }
                    let d = 2147483648 - 1,
                        p = 0;
                    for (let e = 0; e < 31; e++) p = p << 1 | u();
                    let h = [],
                        f = 0,
                        w = 2147483648;
                    for (;;) {
                        let e = Math.floor(((p - f + 1) * o - 1) / w),
                            t = 0,
                            n = r;
                        for (; n - t > 1;) {
                            let r = t + n >>> 1;
                            e < i[r] ? n = r : t = r
                        }
                        if (0 == t) break;
                        h.push(t);
                        let a = f + Math.floor(w * i[t] / o),
                            s = f + Math.floor(w * i[t + 1] / o) - 1;
                        for (;
                            ((a ^ s) & 1073741824) == 0;) p = p << 1 & d | u(), a = a << 1 & d, s = s << 1 & d | 1;
                        for (; a & ~s & 536870912;) p = 1073741824 & p | p << 1 & d >>> 1 | u(), a = a << 1 ^ 1073741824, s = (1073741824 ^ s) << 1 | 1073741825;
                        f = a, w = 1 + s - a
                    }
                    let A = r - 4;
                    return h.map(t => {
                        switch (t - A) {
                            case 3:
                                return A + 65792 + (e[s++] << 16 | e[s++] << 8 | e[s++]);
                            case 2:
                                return A + 256 + (e[s++] << 8 | e[s++]);
                            case 1:
                                return A + e[s++];
                            default:
                                return t - 1
                        }
                    })
                }(function(e) {
                    let t = [];
                    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((e, n) => t[e.charCodeAt(0)] = n);
                    let n = e.length,
                        r = new Uint8Array(6 * n >> 3);
                    for (let o = 0, i = 0, a = 0, s = 0; o < n; o++) s = s << 6 | t[e.charCodeAt(o)], (a += 6) >= 8 && (r[i++] = s >> (a -= 8));
                    return r
                }(e)), n = 0, () => t[n++]
            }

            function b(e, t = 0) {
                let n = [];
                for (;;) {
                    let r = e(),
                        o = e();
                    if (!o) break;
                    t += r;
                    for (let e = 0; e < o; e++) n.push(t + e);
                    t += o + 1
                }
                return n
            }

            function C(e) {
                return k(() => {
                    let t = b(e);
                    if (t.length) return t
                })
            }

            function v(e) {
                let t = [];
                for (;;) {
                    let n = e();
                    if (0 == n) break;
                    t.push(function(e, t) {
                        let n = 1 + t(),
                            r = t(),
                            o = k(t);
                        return B(o.length, 1 + e, t).flatMap((e, t) => {
                            let [i, ...a] = e;
                            return Array(o[t]).fill().map((e, t) => {
                                let o = t * r;
                                return [i + t * n, a.map(e => e + o)]
                            })
                        })
                    }(n, e))
                }
                for (;;) {
                    let n = e() - 1;
                    if (n < 0) break;
                    t.push(B(1 + e(), 1 + n, e).map(e => [e[0], e.slice(1)]))
                }
                return t.flat()
            }

            function k(e) {
                let t = [];
                for (;;) {
                    let n = e(t.length);
                    if (!n) break;
                    t.push(n)
                }
                return t
            }

            function B(e, t, n) {
                let r = Array(e).fill().map(() => []);
                for (let o = 0; o < t; o++)(function(e, t) {
                    let n = Array(e);
                    for (let o = 0, i = 0; o < e; o++) {
                        var r;
                        n[o] = i += 1 & (r = t()) ? ~r >> 1 : r >> 1
                    }
                    return n
                })(e, n).forEach((e, t) => r[t].push(e));
                return r
            }

            function E(e) {
                return `{${e.toString(16).toUpperCase().padStart(2,"0")}}`
            }

            function I(e) {
                let t = e.length;
                if (t < 4096) return String.fromCodePoint(...e);
                let n = [];
                for (let r = 0; r < t;) n.push(String.fromCodePoint(...e.slice(r, r += 4096)));
                return n.join("")
            }

            function x(e, t) {
                let n = e.length,
                    r = n - t.length;
                for (let o = 0; 0 == r && o < n; o++) r = e[o] - t[o];
                return r
            }

            function M(e) {
                return e >> 24 & 255
            }

            function Q(e) {
                return 16777215 & e
            }

            function D(e) {
                return e >= 44032 && e < 55204
            }

            function N(e) {
                r || function() {
                    let e = y("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");
                    for (let [t, n] of (r = new Map(C(e).flatMap((e, t) => e.map(e => [e, t + 1 << 24]))), o = new Set(b(e)), i = new Map, a = new Map, v(e))) {
                        if (!o.has(t) && 2 == n.length) {
                            let [e, r] = n, o = a.get(e);
                            o || (o = new Map, a.set(e, o)), o.set(r, t)
                        }
                        i.set(t, n.reverse())
                    }
                }();
                let t = [],
                    n = [],
                    s = !1;

                function c(e) {
                    let n = r.get(e);
                    n && (s = !0, e |= n), t.push(e)
                }
                for (let r of e)
                    for (;;) {
                        if (r < 128) t.push(r);
                        else if (D(r)) {
                            let e = r - 44032,
                                t = e / 588 | 0,
                                n = e % 588 / 28 | 0,
                                o = e % 28;
                            c(4352 + t), c(4449 + n), o > 0 && c(4519 + o)
                        } else {
                            let e = i.get(r);
                            e ? n.push(...e) : c(r)
                        }
                        if (!n.length) break;
                        r = n.pop()
                    }
                if (s && t.length > 1) {
                    let e = M(t[0]);
                    for (let n = 1; n < t.length; n++) {
                        let r = M(t[n]);
                        if (0 == r || e <= r) {
                            e = r;
                            continue
                        }
                        let o = n - 1;
                        for (;;) {
                            let n = t[o + 1];
                            if (t[o + 1] = t[o], t[o] = n, !o || (e = M(t[--o])) <= r) break
                        }
                        e = M(t[n])
                    }
                }
                return t
            }

            function S(e) {
                return function(e) {
                    let t = [],
                        n = [],
                        r = -1,
                        o = 0;
                    for (let i of e) {
                        let e = M(i),
                            s = Q(i);
                        if (-1 == r) 0 == e ? r = s : t.push(s);
                        else if (o > 0 && o >= e) 0 == e ? (t.push(r, ...n), n.length = 0, r = s) : n.push(s), o = e;
                        else {
                            let i = function(e, t) {
                                if (e >= 4352 && e < 4371 && t >= 4449 && t < 4470) return 44032 + (e - 4352) * 588 + (t - 4449) * 28;
                                if (D(e) && t > 4519 && t < 4547 && (e - 44032) % 28 == 0) return e + (t - 4519); {
                                    let n = a.get(e);
                                    return n && (n = n.get(t)) ? n : -1
                                }
                            }(r, s);
                            i >= 0 ? r = i : 0 == o && 0 == e ? (t.push(r), r = s) : (n.push(s), o = e)
                        }
                    }
                    return r >= 0 && t.push(r, ...n), t
                }(N(e))
            }
            let T = e => Array.from(e);

            function O(e, t) {
                return e.P.has(t) || e.Q.has(t)
            }
            class W extends Array {
                get is_emoji() {
                    return !0
                }
            }

            function R() {
                let e, t;
                if (s) return;
                let n = y("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"),
                    r = () => b(n),
                    o = () => new Set(r()),
                    i = (e, t) => t.forEach(t => e.add(t));
                s = new Map(v(n)), c = o(), l = r(), u = new Set(r().map(e => l[e])), l = new Set(l), d = o(), o();
                let a = C(n),
                    g = n(),
                    B = () => {
                        let e = new Set;
                        return r().forEach(t => i(e, a[t])), i(e, r()), e
                    };
                p = k(e => {
                    let t = k(n).map(e => e + 96);
                    if (t.length) {
                        let r = e >= g;
                        return t[0] -= 32, t = I(t), r && (t = `Restricted[${t}]`), {
                            N: t,
                            P: B(),
                            Q: B(),
                            M: !n(),
                            R: r
                        }
                    }
                }), h = o(), f = new Map;
                let E = r().concat(T(h)).sort((e, t) => e - t);
                for (let {
                        V: e,
                        M: t
                    } of (E.forEach((e, t) => {
                        let r = n(),
                            o = E[t] = r ? E[t - r] : {
                                V: [],
                                M: new Map
                            };
                        o.V.push(e), h.has(e) || f.set(e, o)
                    }), new Set(f.values()))) {
                    let n = [];
                    for (let t of e) {
                        let e = p.filter(e => O(e, t)),
                            r = n.find(({
                                G: t
                            }) => e.some(e => t.has(e)));
                        r || (r = {
                            G: new Set,
                            V: []
                        }, n.push(r)), r.V.push(t), i(r.G, e)
                    }
                    let r = n.flatMap(e => T(e.G));
                    for (let {
                            G: e,
                            V: o
                        } of n) {
                        let n = new Set(r.filter(t => !e.has(t)));
                        for (let e of o) t.set(e, n)
                    }
                }
                w = new Set;
                let M = new Set,
                    D = e => w.has(e) ? M.add(e) : w.add(e);
                for (let e of p) {
                    for (let t of e.P) D(t);
                    for (let t of e.Q) D(t)
                }
                for (let e of w) f.has(e) || M.has(e) || f.set(e, 1);
                for (let r of (i(w, N(w).map(Q)), A = (e = [], t = b(n), function t({
                        S: n,
                        B: r
                    }, o, i) {
                        if (!(4 & n) || i !== o[o.length - 1])
                            for (let a of (2 & n && (i = o[o.length - 1]), 1 & n && e.push(o), r))
                                for (let e of a.Q) t(a, [...o, e], i)
                    }(function e(r) {
                        return {
                            S: n(),
                            B: k(() => {
                                let r = b(n).map(e => t[e]);
                                if (r.length) return e(r)
                            }),
                            Q: r
                        }
                    }([]), []), e).map(e => W.from(e)).sort(x), m = new Map, A)) {
                    let e = [m];
                    for (let t of r) {
                        let n = e.map(e => {
                            let n = e.get(t);
                            return n || (n = new Map, e.set(t, n)), n
                        });
                        65039 === t ? e.push(...n) : e = n
                    }
                    for (let t of e) t.V = r
                }
            }

            function P(e) {
                return (L(e) ? "" : `${F(U([e]))} `) + E(e)
            }

            function F(e) {
                return `"${e}"\u200E`
            }

            function U(e, t = 1 / 0, n = E) {
                var r;
                let o = [];
                r = e[0], R(), l.has(r) && o.push("◌"), e.length > t && (t >>= 1, e = [...e.slice(0, t), 8230, ...e.slice(-t)]);
                let i = 0,
                    a = e.length;
                for (let t = 0; t < a; t++) {
                    let r = e[t];
                    L(r) && (o.push(I(e.slice(i, t))), o.push(n(r)), i = t + 1)
                }
                return o.push(I(e.slice(i, a))), o.join("")
            }

            function L(e) {
                return R(), d.has(e)
            }

            function q(e) {
                return Error(`disallowed character: ${P(e)}`)
            }

            function K(e, t) {
                let n = P(t),
                    r = p.find(e => e.P.has(t));
                return r && (n = `${r.N} ${n}`), Error(`illegal mixture: ${e.N} + ${n}`)
            }

            function J(e) {
                return Error(`illegal placement: ${e}`)
            }

            function H(e) {
                return e.filter(e => 65039 != e)
            }

            function G(e) {
                var t;
                return (t = function(e, t, n) {
                    if (!e) return [];
                    R();
                    let r = 0;
                    return e.split(".").map(e => {
                        let o = function(e) {
                                let t = [];
                                for (let n = 0, r = e.length; n < r;) {
                                    let r = e.codePointAt(n);
                                    n += r < 65536 ? 1 : 2, t.push(r)
                                }
                                return t
                            }(e),
                            i = {
                                input: o,
                                offset: r
                            };
                        r += o.length + 1;
                        try {
                            let e, r = i.tokens = function(e, t, n) {
                                    let r = [],
                                        o = [];
                                    for (e = e.slice().reverse(); e.length;) {
                                        let i = function(e, t) {
                                            let n, r = m,
                                                o = e.length;
                                            for (; o && (r = r.get(e[--o]));) {
                                                let {
                                                    V: i
                                                } = r;
                                                i && (n = i, t && t.push(...e.slice(o).reverse()), e.length = o)
                                            }
                                            return n
                                        }(e);
                                        if (i) o.length && (r.push(t(o)), o = []), r.push(n(i));
                                        else {
                                            let t = e.pop();
                                            if (w.has(t)) o.push(t);
                                            else {
                                                let e = s.get(t);
                                                if (e) o.push(...e);
                                                else if (!c.has(t)) throw q(t)
                                            }
                                        }
                                    }
                                    return o.length && r.push(t(o)), r
                                }(o, t, n),
                                a = r.length;
                            if (!a) throw Error("empty label");
                            let d = i.output = r.flat();
                            if (! function(e) {
                                    for (let t = e.lastIndexOf(95); t > 0;)
                                        if (95 !== e[--t]) throw Error("underscore allowed only at start")
                                }(d), !(i.emoji = a > 1 || r[0].is_emoji) && d.every(e => e < 128)) ! function(e) {
                                if (e.length >= 4 && 45 == e[2] && 45 == e[3]) throw Error(`invalid label extension: "${I(e.slice(0,4))}"`)
                            }(d), e = "ASCII";
                            else {
                                let t = r.flatMap(e => e.is_emoji ? [] : e);
                                if (t.length) {
                                    if (l.has(d[0])) throw J("leading combining mark");
                                    for (let e = 1; e < a; e++) {
                                        let t = r[e];
                                        if (!t.is_emoji && l.has(t[0])) throw J(`emoji + combining mark: "${I(r[e-1])} + ${U([t[0]])}"`)
                                    }! function(e) {
                                        let t = e[0],
                                            n = g.get(t);
                                        if (n) throw J(`leading ${n}`);
                                        let r = e.length,
                                            o = -1;
                                        for (let i = 1; i < r; i++) {
                                            t = e[i];
                                            let r = g.get(t);
                                            if (r) {
                                                if (o == i) throw J(`${n} + ${r}`);
                                                o = i + 1, n = r
                                            }
                                        }
                                        if (o == r) throw J(`trailing ${n}`)
                                    }(d);
                                    let n = T(new Set(t)),
                                        [o] = function(e) {
                                            let t = p;
                                            for (let n of e) {
                                                let e = t.filter(e => O(e, n));
                                                if (!e.length) {
                                                    if (p.some(e => O(e, n))) throw K(t[0], n);
                                                    throw q(n)
                                                }
                                                if (t = e, 1 == e.length) break
                                            }
                                            return t
                                        }(n);
                                    (function(e, t) {
                                        for (let n of t)
                                            if (!O(e, n)) throw K(e, n);
                                        if (e.M) {
                                            let e = N(t).map(Q);
                                            for (let t = 1, n = e.length; t < n; t++)
                                                if (u.has(e[t])) {
                                                    let r = t + 1;
                                                    for (let o; r < n && u.has(o = e[r]); r++)
                                                        for (let n = t; n < r; n++)
                                                            if (e[n] == o) throw Error(`duplicate non-spacing marks: ${P(o)}`);
                                                    if (r - t > 4) throw Error(`excessive non-spacing marks: ${F(U(e.slice(t-1,r)))} (${r-t}/4)`);
                                                    t = r
                                                }
                                        }
                                    })(o, t),
                                    function(e, t) {
                                        let n;
                                        let r = [];
                                        for (let e of t) {
                                            let t = f.get(e);
                                            if (1 === t) return;
                                            if (t) {
                                                let r = t.M.get(e);
                                                if (!(n = n ? n.filter(e => r.has(e)) : T(r)).length) return
                                            } else r.push(e)
                                        }
                                        if (n) {
                                            for (let t of n)
                                                if (r.every(e => O(t, e))) throw Error(`whole-script confusable: ${e.N}/${t.N}`)
                                        }
                                    }(o, n), e = o.N
                                } else e = "Emoji"
                            }
                            i.type = e
                        } catch (e) {
                            i.error = e
                        }
                        return i
                    })
                }(e, S, H)).map(({
                    input: e,
                    error: n,
                    output: r
                }) => {
                    if (n) {
                        let r = n.message;
                        throw Error(1 == t.length ? r : `Invalid label ${F(U(e,63))}: ${r}`)
                    }
                    return I(r)
                }).join(".")
            }
        },
        67252: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return a
                }
            });
            var r = n(88007),
                o = n(78572),
                i = n(55351);

            function a(e = {}) {
                let {
                    onConnect: t,
                    onDisconnect: n
                } = e, a = (0, i.Z)(e);
                (0, o.useEffect)(() => (0, r.u)(a, {
                    onChange(e, r) {
                        if (("reconnecting" === r.status || "connecting" === r.status && void 0 === r.address) && "connected" === e.status) {
                            let {
                                address: n,
                                addresses: o,
                                chain: i,
                                chainId: a,
                                connector: s
                            } = e, c = "reconnecting" === r.status || void 0 === r.status;
                            t ? .({
                                address: n,
                                addresses: o,
                                chain: i,
                                chainId: a,
                                connector: s,
                                isReconnected: c
                            })
                        } else "connected" === r.status && "disconnected" === e.status && n ? .()
                    }
                }), [a, t, n])
            }
        },
        14785: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return C
                }
            });
            var r = n(58960),
                o = n(90130),
                i = n(57536),
                a = n(32610),
                s = n(55397),
                c = n(1537),
                l = n(64787);

            function u(e) {
                return "number" == typeof e ? e : "wei" === e ? 0 : Math.abs(l.Bd[e])
            }
            var d = n(32809);
            async function p(e, t) {
                let {
                    allowFailure: n = !0,
                    chainId: r,
                    contracts: o,
                    ...i
                } = t, a = e.getClient({
                    chainId: r
                }), s = (0, c.s)(a, d.A, "multicall");
                return s({
                    allowFailure: n,
                    contracts: o,
                    ...i
                })
            }
            var h = n(28131);
            async function f(e, t) {
                let {
                    allowFailure: n = !0,
                    blockNumber: o,
                    blockTag: i,
                    ...a
                } = t, s = t.contracts;
                try {
                    let t = {};
                    for (let [n, r] of s.entries()) {
                        let o = r.chainId ? ? e.state.chainId;
                        t[o] || (t[o] = []), t[o] ? .push({
                            contract: r,
                            index: n
                        })
                    }
                    let r = (await Promise.all(Object.entries(t).map(([t, r]) => p(e, { ...a,
                            allowFailure: n,
                            blockNumber: o,
                            blockTag: i,
                            chainId: Number.parseInt(t),
                            contracts: r.map(({
                                contract: e
                            }) => e)
                        })))).flat(),
                        c = Object.values(t).flatMap(e => e.map(({
                            index: e
                        }) => e));
                    return r.reduce((e, t, n) => (e && (e[c[n]] = t), e), [])
                } catch (a) {
                    if (a instanceof r.uq) throw a;
                    let t = () => s.map(t => (0, h.L)(e, { ...t,
                        blockNumber: o,
                        blockTag: i
                    }));
                    if (n) return (await Promise.allSettled(t())).map(e => "fulfilled" === e.status ? {
                        result: e.value,
                        status: "success"
                    } : {
                        error: e.reason,
                        result: void 0,
                        status: "failure"
                    });
                    return await Promise.all(t())
                }
            }
            async function w(e, t) {
                let {
                    address: n,
                    blockNumber: l,
                    blockTag: d,
                    chainId: p,
                    token: h,
                    unit: f = "ether"
                } = t;
                if (h) try {
                    return A(e, {
                        balanceAddress: n,
                        chainId: p,
                        symbolType: "string",
                        tokenAddress: h
                    })
                } catch (t) {
                    if (t instanceof r.uq) {
                        let t = await A(e, {
                                balanceAddress: n,
                                chainId: p,
                                symbolType: "bytes32",
                                tokenAddress: h
                            }),
                            r = (0, o.rR)((0, i.f)(t.symbol, {
                                dir: "right"
                            }));
                        return { ...t,
                            symbol: r
                        }
                    }
                    throw t
                }
                let w = e.getClient({
                        chainId: p
                    }),
                    m = (0, c.s)(w, s.s, "getBalance"),
                    g = await m(l ? {
                        address: n,
                        blockNumber: l
                    } : {
                        address: n,
                        blockTag: d
                    }),
                    y = e.chains.find(e => e.id === p) ? ? w.chain;
                return {
                    decimals: y.nativeCurrency.decimals,
                    formatted: (0, a.b)(g, u(f)),
                    symbol: y.nativeCurrency.symbol,
                    value: g
                }
            }
            async function A(e, t) {
                let {
                    balanceAddress: n,
                    chainId: r,
                    symbolType: o,
                    tokenAddress: i,
                    unit: s
                } = t, c = {
                    abi: [{
                        type: "function",
                        name: "balanceOf",
                        stateMutability: "view",
                        inputs: [{
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
                        name: "symbol",
                        stateMutability: "view",
                        inputs: [],
                        outputs: [{
                            type: o
                        }]
                    }],
                    address: i
                }, [l, d, p] = await f(e, {
                    allowFailure: !1,
                    contracts: [{ ...c,
                        functionName: "balanceOf",
                        args: [n],
                        chainId: r
                    }, { ...c,
                        functionName: "decimals",
                        chainId: r
                    }, { ...c,
                        functionName: "symbol",
                        chainId: r
                    }]
                }), h = (0, a.b)(l ? ? "0", u(s ? ? d));
                return {
                    decimals: d,
                    formatted: h,
                    symbol: p,
                    value: l
                }
            }
            var m = n(50973),
                g = n(7900),
                y = n(67127),
                b = n(55351);

            function C(e = {}) {
                let {
                    address: t,
                    query: n = {}
                } = e, r = (0, b.Z)(e), o = (0, y.x)({
                    config: r
                }), i = function(e, t = {}) {
                    return {
                        async queryFn({
                            queryKey: t
                        }) {
                            let {
                                address: n,
                                scopeKey: r,
                                ...o
                            } = t[1];
                            if (!n) throw Error("address is required");
                            let i = await w(e, { ...o,
                                address: n
                            });
                            return i ? ? null
                        },
                        queryKey: function(e = {}) {
                            return ["balance", (0, m.OP)(e)]
                        }(t)
                    }
                }(r, { ...e,
                    chainId: e.chainId ? ? o
                }), a = !!(t && (n.enabled ? ? !0));
                return (0, g.aM)({ ...n,
                    ...i,
                    enabled: a
                })
            }
        },
        99687: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return d
                }
            });
            var r = n(65893),
                o = n(95451);
            async function i(e, t) {
                let n;
                if ((n = "function" == typeof t.connector ? e._internal.connectors.setup(t.connector) : t.connector).uid === e.state.current) throw new o.wi;
                try {
                    e.setState(e => ({ ...e,
                        status: "connecting"
                    })), n.emitter.emit("message", {
                        type: "connecting"
                    });
                    let r = await n.connect({
                            chainId: t.chainId
                        }),
                        o = r.accounts;
                    return n.emitter.off("connect", e._internal.events.connect), n.emitter.on("change", e._internal.events.change), n.emitter.on("disconnect", e._internal.events.disconnect), await e.storage ? .setItem("recentConnectorId", n.id), e.setState(e => ({ ...e,
                        connections: new Map(e.connections).set(n.uid, {
                            accounts: o,
                            chainId: r.chainId,
                            connector: n
                        }),
                        current: n.uid,
                        status: "connected"
                    })), {
                        accounts: o,
                        chainId: r.chainId
                    }
                } catch (t) {
                    throw e.setState(e => ({ ...e,
                        status: e.current ? "connected" : "disconnected"
                    })), t
                }
            }
            var a = n(78572),
                s = n(55351),
                c = n(20004);
            let l = [];

            function u(e) {
                let t = e.connectors;
                return (0, c.v)(l, t) ? l : (l = t, t)
            }

            function d(e = {}) {
                let {
                    mutation: t
                } = e, n = (0, s.Z)(e), {
                    mutate: o,
                    mutateAsync: c,
                    ...l
                } = (0, r.D)({ ...t,
                    mutationFn: e => i(n, e),
                    mutationKey: ["connect"]
                });
                return (0, a.useEffect)(() => n.subscribe(({
                    status: e
                }) => e, (e, t) => {
                    "connected" === t && "disconnected" === e && l.reset()
                }), [n, l.reset]), { ...l,
                    connect: o,
                    connectAsync: c,
                    connectors: function(e = {}) {
                        let t = (0, s.Z)(e);
                        return (0, a.useSyncExternalStore)(e => (function(e, t) {
                            let {
                                onChange: n
                            } = t;
                            return e._internal.connectors.subscribe((e, t) => {
                                n(Object.values(e), t)
                            })
                        })(t, {
                            onChange: e
                        }), () => u(t), () => u(t))
                    }({
                        config: n
                    })
                }
            }
        },
        39627: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return u
                }
            });
            var r = n(65893);
            async function o(e, t = {}) {
                let n;
                if (t.connector) n = t.connector;
                else {
                    let {
                        connections: t,
                        current: r
                    } = e.state, o = t.get(r);
                    n = o ? .connector
                }
                let r = e.state.connections;
                n && (await n.disconnect(), n.emitter.off("change", e._internal.events.change), n.emitter.off("disconnect", e._internal.events.disconnect), n.emitter.on("connect", e._internal.events.connect), r.delete(n.uid)), e.setState(e => {
                    if (0 === r.size) return { ...e,
                        connections: new Map,
                        current: null,
                        status: "disconnected"
                    };
                    let t = r.values().next().value;
                    return { ...e,
                        connections: new Map(r),
                        current: t.connector.uid
                    }
                }); {
                    let t = e.state.current;
                    if (!t) return;
                    let n = e.state.connections.get(t) ? .connector;
                    if (!n) return;
                    await e.storage ? .setItem("recentConnectorId", n.id)
                }
            }
            var i = n(55351),
                a = n(20004);
            let s = [];

            function c(e) {
                let t = [...e.state.connections.values()];
                return "reconnecting" === e.state.status || (0, a.v)(s, t) ? s : (s = t, t)
            }
            var l = n(78572);

            function u(e = {}) {
                let {
                    mutation: t
                } = e, n = (0, i.Z)(e), {
                    mutate: s,
                    mutateAsync: u,
                    ...d
                } = (0, r.D)({ ...t,
                    mutationFn: e => o(n, e),
                    mutationKey: ["disconnect"]
                });
                return { ...d,
                    connectors: (function(e = {}) {
                        let t = (0, i.Z)(e);
                        return (0, l.useSyncExternalStore)(e => (function(e, t) {
                            let {
                                onChange: n
                            } = t;
                            return e.subscribe(() => c(e), n, {
                                equalityFn: a.v
                            })
                        })(t, {
                            onChange: e
                        }), () => c(t), () => c(t))
                    })({
                        config: n
                    }).map(e => e.connector),
                    disconnect: s,
                    disconnectAsync: u
                }
            }
        },
        45893: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return l
                }
            });
            var r = n(22660),
                o = n(1537),
                i = n(50973),
                a = n(7900),
                s = n(67127),
                c = n(55351);

            function l(e = {}) {
                let {
                    name: t,
                    query: n = {}
                } = e, l = (0, c.Z)(e), u = (0, s.x)({
                    config: l
                }), d = function(e, t = {}) {
                    return {
                        async queryFn({
                            queryKey: t
                        }) {
                            let {
                                name: n,
                                scopeKey: i,
                                ...a
                            } = t[1];
                            if (!n) throw Error("name is required");
                            return function(e, t) {
                                let {
                                    chainId: n,
                                    ...i
                                } = t, a = e.getClient({
                                    chainId: n
                                }), s = (0, o.s)(a, r.r, "getEnsAvatar");
                                return s(i)
                            }(e, { ...a,
                                name: n
                            })
                        },
                        queryKey: function(e = {}) {
                            return ["ensAvatar", (0, i.OP)(e)]
                        }(t)
                    }
                }(l, { ...e,
                    chainId: e.chainId ? ? u
                }), p = !!(t && (n.enabled ? ? !0));
                return (0, a.aM)({ ...n,
                    ...d,
                    enabled: p
                })
            }
        },
        89224: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return l
                }
            });
            var r = n(11972),
                o = n(1537),
                i = n(50973),
                a = n(7900),
                s = n(67127),
                c = n(55351);

            function l(e = {}) {
                let {
                    address: t,
                    query: n = {}
                } = e, l = (0, c.Z)(e), u = (0, s.x)({
                    config: l
                }), d = function(e, t = {}) {
                    return {
                        async queryFn({
                            queryKey: t
                        }) {
                            let {
                                address: n,
                                scopeKey: i,
                                ...a
                            } = t[1];
                            if (!n) throw Error("address is required");
                            return function(e, t) {
                                let {
                                    chainId: n,
                                    ...i
                                } = t, a = e.getClient({
                                    chainId: n
                                }), s = (0, o.s)(a, r.w, "getEnsName");
                                return s(i)
                            }(e, { ...a,
                                address: n
                            })
                        },
                        queryKey: function(e = {}) {
                            return ["ensName", (0, i.OP)(e)]
                        }(t)
                    }
                }(l, { ...e,
                    chainId: e.chainId ? ? u
                }), p = !!(t && (n.enabled ? ? !0));
                return (0, a.aM)({ ...n,
                    ...d,
                    enabled: p
                })
            }
        },
        78411: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return s
                }
            });
            var r = n(48534);

            function o(e, t = {}) {
                let n = function(e, t = {}) {
                    let n;
                    try {
                        n = e.getClient(t)
                    } catch {}
                    return n
                }(e, t);
                return n ? .extend(r.I)
            }
            var i = n(54763),
                a = n(55351);

            function s(e = {}) {
                let t = (0, a.Z)(e);
                return (0, i.useSyncExternalStoreWithSelector)(e => (function(e, t) {
                    let {
                        onChange: n
                    } = t;
                    return e.subscribe(() => o(e), n, {
                        equalityFn: (e, t) => e ? .uid === t ? .uid
                    })
                })(t, {
                    onChange: e
                }), () => o(t, e), () => o(t, e), e => e, (e, t) => e ? .uid === t ? .uid)
            }
        },
        3214: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return l
                }
            });
            var r = n(65893),
                o = n(12547),
                i = n(1537),
                a = n(19888);
            async function s(e, t) {
                let n;
                let {
                    account: r,
                    connector: s,
                    ...c
                } = t;
                n = "object" == typeof r && "local" === r.type ? e.getClient() : await (0, a.e)(e, {
                    account: r,
                    connector: s
                });
                let l = (0, i.s)(n, o.l, "signMessage");
                return l({ ...c,
                    ...r ? {
                        account: r
                    } : {}
                })
            }
            var c = n(55351);

            function l(e = {}) {
                let {
                    mutation: t
                } = e, n = (0, c.Z)(e), {
                    mutate: o,
                    mutateAsync: i,
                    ...a
                } = (0, r.D)({ ...t,
                    mutationFn: e => s(n, e),
                    mutationKey: ["signMessage"]
                });
                return { ...a,
                    signMessage: o,
                    signMessageAsync: i
                }
            }
        },
        32126: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return p
                }
            });
            var r = n(65893),
                o = n(95451),
                i = n(11020);
            async function a(e, t) {
                let {
                    addEthereumChainParameter: n,
                    chainId: r
                } = t, a = e.state.connections.get(t.connector ? .uid ? ? e.state.current);
                if (a) {
                    let e = a.connector;
                    if (!e.switchChain) throw new i.O({
                        connector: e
                    });
                    let t = await e.switchChain({
                        addEthereumChainParameter: n,
                        chainId: r
                    });
                    return t
                }
                let s = e.chains.find(e => e.id === r);
                if (!s) throw new o.X4;
                return e.setState(e => ({ ...e,
                    chainId: r
                })), s
            }
            var s = n(20004);
            let c = [];

            function l(e) {
                let t = e.chains;
                return (0, s.v)(c, t) ? c : (c = t, t)
            }
            var u = n(78572),
                d = n(55351);

            function p(e = {}) {
                let {
                    mutation: t
                } = e, n = (0, d.Z)(e), {
                    mutate: o,
                    mutateAsync: i,
                    ...s
                } = (0, r.D)({ ...t,
                    mutationFn: e => a(n, e),
                    mutationKey: ["switchChain"]
                });
                return { ...s,
                    chains: function(e = {}) {
                        let t = (0, d.Z)(e);
                        return (0, u.useSyncExternalStore)(e => (function(e, t) {
                            let {
                                onChange: n
                            } = t;
                            return e._internal.chains.subscribe((e, t) => {
                                n(e, t)
                            })
                        })(t, {
                            onChange: e
                        }), () => l(t), () => l(t))
                    }({
                        config: n
                    }),
                    switchChain: o,
                    switchChainAsync: i
                }
            }
        }
    }
]);