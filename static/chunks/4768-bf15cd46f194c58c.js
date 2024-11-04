"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4768], {
        94768: function(t, e, r) {
            r.d(e, {
                secp256k1: function() {
                    return tw
                }
            });
            var n = {};
            r.r(n), r.d(n, {
                Fy: function() {
                    return N
                },
                uw: function() {
                    return g
                },
                gk: function() {
                    return c
                },
                Dd: function() {
                    return $
                },
                dQ: function() {
                    return H
                },
                ci: function() {
                    return y
                },
                bytesToNumberBE: function() {
                    return v
                },
                ty: function() {
                    return x
                },
                eV: function() {
                    return O
                },
                n$: function() {
                    return z
                },
                ql: function() {
                    return A
                },
                hexToBytes: function() {
                    return B
                },
                Z2: function() {
                    return R
                },
                _t: function() {
                    return h
                },
                H9: function() {
                    return P
                },
                tL: function() {
                    return I
                },
                S5: function() {
                    return S
                },
                uz: function() {
                    return m
                },
                FF: function() {
                    return F
                }
            });
            var i = r(17508),
                o = r(98478),
                l = r(57632);
            class f extends l.kb {
                constructor(t, e) {
                    super(), this.finished = !1, this.destroyed = !1, (0, o.vp)(t);
                    let r = (0, l.O0)(e);
                    if (this.iHash = t.create(), "function" != typeof this.iHash.update) throw Error("Expected instance of class which extends utils.Hash");
                    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
                    let n = this.blockLen,
                        i = new Uint8Array(n);
                    i.set(r.length > n ? t.create().update(r).digest() : r);
                    for (let t = 0; t < i.length; t++) i[t] ^= 54;
                    this.iHash.update(i), this.oHash = t.create();
                    for (let t = 0; t < i.length; t++) i[t] ^= 106;
                    this.oHash.update(i), i.fill(0)
                }
                update(t) {
                    return (0, o.Gg)(this), this.iHash.update(t), this
                }
                digestInto(t) {
                    (0, o.Gg)(this), (0, o.aI)(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy()
                }
                digest() {
                    let t = new Uint8Array(this.oHash.outputLen);
                    return this.digestInto(t), t
                }
                _cloneInto(t) {
                    t || (t = Object.create(Object.getPrototypeOf(this), {}));
                    let {
                        oHash: e,
                        iHash: r,
                        finished: n,
                        destroyed: i,
                        blockLen: o,
                        outputLen: l
                    } = this;
                    return t.finished = n, t.destroyed = i, t.blockLen = o, t.outputLen = l, t.oHash = e._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t
                }
                destroy() {
                    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
                }
            }
            let s = (t, e, r) => new f(t, e).update(r).digest();
            s.create = (t, e) => new f(t, e); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            let u = BigInt(0),
                a = BigInt(1),
                d = BigInt(2);

            function h(t) {
                return t instanceof Uint8Array || null != t && "object" == typeof t && "Uint8Array" === t.constructor.name
            }

            function c(t) {
                if (!h(t)) throw Error("Uint8Array expected")
            }

            function g(t, e) {
                if ("boolean" != typeof e) throw Error(`${t} must be valid boolean, got "${e}".`)
            }
            let p = Array.from({
                length: 256
            }, (t, e) => e.toString(16).padStart(2, "0"));

            function y(t) {
                c(t);
                let e = "";
                for (let r = 0; r < t.length; r++) e += p[t[r]];
                return e
            }

            function m(t) {
                let e = t.toString(16);
                return 1 & e.length ? `0${e}` : e
            }

            function w(t) {
                if ("string" != typeof t) throw Error("hex string expected, got " + typeof t);
                return BigInt("" === t ? "0" : `0x${t}`)
            }
            let E = {
                _0: 48,
                _9: 57,
                _A: 65,
                _F: 70,
                _a: 97,
                _f: 102
            };

            function b(t) {
                return t >= E._0 && t <= E._9 ? t - E._0 : t >= E._A && t <= E._F ? t - (E._A - 10) : t >= E._a && t <= E._f ? t - (E._a - 10) : void 0
            }

            function B(t) {
                if ("string" != typeof t) throw Error("hex string expected, got " + typeof t);
                let e = t.length,
                    r = e / 2;
                if (e % 2) throw Error("padded hex string expected, got unpadded hex of length " + e);
                let n = new Uint8Array(r);
                for (let e = 0, i = 0; e < r; e++, i += 2) {
                    let r = b(t.charCodeAt(i)),
                        o = b(t.charCodeAt(i + 1));
                    if (void 0 === r || void 0 === o) {
                        let e = t[i] + t[i + 1];
                        throw Error('hex string expected, got non-hex character "' + e + '" at index ' + i)
                    }
                    n[e] = 16 * r + o
                }
                return n
            }

            function v(t) {
                return w(y(t))
            }

            function x(t) {
                return c(t), w(y(Uint8Array.from(t).reverse()))
            }

            function I(t, e) {
                return B(t.toString(16).padStart(2 * e, "0"))
            }

            function S(t, e) {
                return I(t, e).reverse()
            }

            function A(t, e, r) {
                let n;
                if ("string" == typeof e) try {
                        n = B(e)
                    } catch (r) {
                        throw Error(`${t} must be valid hex string, got "${e}". Cause: ${r}`)
                    } else if (h(e)) n = Uint8Array.from(e);
                    else throw Error(`${t} must be hex string or Uint8Array`);
                let i = n.length;
                if ("number" == typeof r && i !== r) throw Error(`${t} expected ${r} bytes, got ${i}`);
                return n
            }

            function O(...t) {
                let e = 0;
                for (let r = 0; r < t.length; r++) {
                    let n = t[r];
                    c(n), e += n.length
                }
                let r = new Uint8Array(e);
                for (let e = 0, n = 0; e < t.length; e++) {
                    let i = t[e];
                    r.set(i, n), n += i.length
                }
                return r
            }
            let q = t => "bigint" == typeof t && u <= t;

            function R(t, e, r) {
                return q(t) && q(e) && q(r) && e <= t && t < r
            }

            function N(t, e, r, n) {
                if (!R(e, r, n)) throw Error(`expected valid ${t}: ${r} <= n < ${n}, got ${typeof e} ${e}`)
            }

            function $(t) {
                let e;
                for (e = 0; t > u; t >>= a, e += 1);
                return e
            }
            let H = t => (d << BigInt(t - 1)) - a,
                L = t => new Uint8Array(t),
                _ = t => Uint8Array.from(t);

            function z(t, e, r) {
                if ("number" != typeof t || t < 2) throw Error("hashLen must be a number");
                if ("number" != typeof e || e < 2) throw Error("qByteLen must be a number");
                if ("function" != typeof r) throw Error("hmacFn must be a function");
                let n = L(t),
                    i = L(t),
                    o = 0,
                    l = () => {
                        n.fill(1), i.fill(0), o = 0
                    },
                    f = (...t) => r(i, n, ...t),
                    s = (t = L()) => {
                        i = f(_([0]), t), n = f(), 0 !== t.length && (i = f(_([1]), t), n = f())
                    },
                    u = () => {
                        if (o++ >= 1e3) throw Error("drbg: tried 1000 values");
                        let t = 0,
                            r = [];
                        for (; t < e;) {
                            n = f();
                            let e = n.slice();
                            r.push(e), t += n.length
                        }
                        return O(...r)
                    };
                return (t, e) => {
                    let r;
                    for (l(), s(t); !(r = e(u()));) s();
                    return l(), r
                }
            }
            let Z = {
                bigint: t => "bigint" == typeof t,
                function: t => "function" == typeof t,
                boolean: t => "boolean" == typeof t,
                string: t => "string" == typeof t,
                stringOrUint8Array: t => "string" == typeof t || h(t),
                isSafeInteger: t => Number.isSafeInteger(t),
                array: t => Array.isArray(t),
                field: (t, e) => e.Fp.isValid(t),
                hash: t => "function" == typeof t && Number.isSafeInteger(t.outputLen)
            };

            function F(t, e, r = {}) {
                let n = (e, r, n) => {
                    let i = Z[r];
                    if ("function" != typeof i) throw Error(`Invalid validator "${r}", expected function`);
                    let o = t[e];
                    if ((!n || void 0 !== o) && !i(o, t)) throw Error(`Invalid param ${String(e)}=${o} (${typeof o}), expected ${r}`)
                };
                for (let [t, r] of Object.entries(e)) n(t, r, !1);
                for (let [t, e] of Object.entries(r)) n(t, e, !0);
                return t
            }

            function P(t) {
                let e = new WeakMap;
                return (r, ...n) => {
                    let i = e.get(r);
                    if (void 0 !== i) return i;
                    let o = t(r, ...n);
                    return e.set(r, o), o
                }
            } /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            let C = BigInt(0),
                T = BigInt(1),
                U = BigInt(2),
                k = BigInt(3),
                j = BigInt(4),
                V = BigInt(5),
                K = BigInt(8);

            function D(t, e) {
                let r = t % e;
                return r >= C ? r : e + r
            }

            function M(t, e, r) {
                let n = t;
                for (; e-- > C;) n *= n, n %= r;
                return n
            }

            function W(t, e) {
                if (t === C || e <= C) throw Error(`invert: expected positive integers, got n=${t} mod=${e}`);
                let r = D(t, e),
                    n = e,
                    i = C,
                    o = T,
                    l = T,
                    f = C;
                for (; r !== C;) {
                    let t = n / r,
                        e = n % r,
                        s = i - l * t,
                        u = o - f * t;
                    n = r, r = e, i = l, o = f, l = s, f = u
                }
                let s = n;
                if (s !== T) throw Error("invert: does not exist");
                return D(i, e)
            }
            BigInt(9), BigInt(16);
            let Y = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

            function G(t, e) {
                let r = void 0 !== e ? e : t.toString(2).length;
                return {
                    nBitLength: r,
                    nByteLength: Math.ceil(r / 8)
                }
            }

            function Q(t, e, r = !1, n = {}) {
                if (t <= C) throw Error(`Expected Field ORDER > 0, got ${t}`);
                let {
                    nBitLength: i,
                    nByteLength: o
                } = G(t, e);
                if (o > 2048) throw Error("Field lengths over 2048 bytes are not supported");
                let l = function(t) {
                        if (t % j === k) {
                            let e = (t + T) / j;
                            return function(t, r) {
                                let n = t.pow(r, e);
                                if (!t.eql(t.sqr(n), r)) throw Error("Cannot find square root");
                                return n
                            }
                        }
                        if (t % K === V) {
                            let e = (t - V) / K;
                            return function(t, r) {
                                let n = t.mul(r, U),
                                    i = t.pow(n, e),
                                    o = t.mul(r, i),
                                    l = t.mul(t.mul(o, U), i),
                                    f = t.mul(o, t.sub(l, t.ONE));
                                if (!t.eql(t.sqr(f), r)) throw Error("Cannot find square root");
                                return f
                            }
                        }
                        return function(t) {
                            let e, r, n;
                            let i = (t - T) / U;
                            for (e = t - T, r = 0; e % U === C; e /= U, r++);
                            for (n = U; n < t && function(t, e, r) {
                                    if (r <= C || e < C) throw Error("Expected power/modulo > 0");
                                    if (r === T) return C;
                                    let n = T;
                                    for (; e > C;) e & T && (n = n * t % r), t = t * t % r, e >>= T;
                                    return n
                                }(n, i, t) !== t - T; n++);
                            if (1 === r) {
                                let e = (t + T) / j;
                                return function(t, r) {
                                    let n = t.pow(r, e);
                                    if (!t.eql(t.sqr(n), r)) throw Error("Cannot find square root");
                                    return n
                                }
                            }
                            let o = (e + T) / U;
                            return function(t, l) {
                                if (t.pow(l, i) === t.neg(t.ONE)) throw Error("Cannot find square root");
                                let f = r,
                                    s = t.pow(t.mul(t.ONE, n), e),
                                    u = t.pow(l, o),
                                    a = t.pow(l, e);
                                for (; !t.eql(a, t.ONE);) {
                                    if (t.eql(a, t.ZERO)) return t.ZERO;
                                    let e = 1;
                                    for (let r = t.sqr(a); e < f && !t.eql(r, t.ONE); e++) r = t.sqr(r);
                                    let r = t.pow(s, T << BigInt(f - e - 1));
                                    s = t.sqr(r), u = t.mul(u, r), a = t.mul(a, s), f = e
                                }
                                return u
                            }
                        }(t)
                    }(t),
                    f = Object.freeze({
                        ORDER: t,
                        BITS: i,
                        BYTES: o,
                        MASK: H(i),
                        ZERO: C,
                        ONE: T,
                        create: e => D(e, t),
                        isValid: e => {
                            if ("bigint" != typeof e) throw Error(`Invalid field element: expected bigint, got ${typeof e}`);
                            return C <= e && e < t
                        },
                        is0: t => t === C,
                        isOdd: t => (t & T) === T,
                        neg: e => D(-e, t),
                        eql: (t, e) => t === e,
                        sqr: e => D(e * e, t),
                        add: (e, r) => D(e + r, t),
                        sub: (e, r) => D(e - r, t),
                        mul: (e, r) => D(e * r, t),
                        pow: (t, e) => (function(t, e, r) {
                            if (r < C) throw Error("Expected power > 0");
                            if (r === C) return t.ONE;
                            if (r === T) return e;
                            let n = t.ONE,
                                i = e;
                            for (; r > C;) r & T && (n = t.mul(n, i)), i = t.sqr(i), r >>= T;
                            return n
                        })(f, t, e),
                        div: (e, r) => D(e * W(r, t), t),
                        sqrN: t => t * t,
                        addN: (t, e) => t + e,
                        subN: (t, e) => t - e,
                        mulN: (t, e) => t * e,
                        inv: e => W(e, t),
                        sqrt: n.sqrt || (t => l(f, t)),
                        invertBatch: t => (function(t, e) {
                            let r = Array(e.length),
                                n = e.reduce((e, n, i) => t.is0(n) ? e : (r[i] = e, t.mul(e, n)), t.ONE),
                                i = t.inv(n);
                            return e.reduceRight((e, n, i) => t.is0(n) ? e : (r[i] = t.mul(e, r[i]), t.mul(e, n)), i), r
                        })(f, t),
                        cmov: (t, e, r) => r ? e : t,
                        toBytes: t => r ? S(t, o) : I(t, o),
                        fromBytes: t => {
                            if (t.length !== o) throw Error(`Fp.fromBytes: expected ${o}, got ${t.length}`);
                            return r ? x(t) : v(t)
                        }
                    });
                return Object.freeze(f)
            }

            function J(t) {
                if ("bigint" != typeof t) throw Error("field order must be bigint");
                let e = t.toString(2).length;
                return Math.ceil(e / 8)
            }

            function X(t) {
                let e = J(t);
                return e + Math.ceil(e / 2)
            } /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            let tt = BigInt(0),
                te = BigInt(1),
                tr = new WeakMap,
                tn = new WeakMap;

            function ti(t) {
                return ! function(t) {
                    let e = Y.reduce((t, e) => (t[e] = "function", t), {
                        ORDER: "bigint",
                        MASK: "bigint",
                        BYTES: "isSafeInteger",
                        BITS: "isSafeInteger"
                    });
                    F(t, e)
                }(t.Fp), F(t, {
                    n: "bigint",
                    h: "bigint",
                    Gx: "field",
                    Gy: "field"
                }, {
                    nBitLength: "isSafeInteger",
                    nByteLength: "isSafeInteger"
                }), Object.freeze({ ...G(t.n, t.nBitLength),
                    ...t,
                    p: t.Fp.ORDER
                })
            } /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            function to(t) {
                void 0 !== t.lowS && g("lowS", t.lowS), void 0 !== t.prehash && g("prehash", t.prehash)
            }
            let {
                bytesToNumberBE: tl,
                hexToBytes: tf
            } = n, ts = {
                Err: class extends Error {
                    constructor(t = "") {
                        super(t)
                    }
                },
                _tlv: {
                    encode: (t, e) => {
                        let {
                            Err: r
                        } = ts;
                        if (t < 0 || t > 256) throw new r("tlv.encode: wrong tag");
                        if (1 & e.length) throw new r("tlv.encode: unpadded data");
                        let n = e.length / 2,
                            i = m(n);
                        if (i.length / 2 & 128) throw new r("tlv.encode: long form length too big");
                        let o = n > 127 ? m(i.length / 2 | 128) : "";
                        return `${m(t)}${o}${i}${e}`
                    },
                    decode(t, e) {
                        let {
                            Err: r
                        } = ts, n = 0;
                        if (t < 0 || t > 256) throw new r("tlv.encode: wrong tag");
                        if (e.length < 2 || e[n++] !== t) throw new r("tlv.decode: wrong tlv");
                        let i = e[n++],
                            o = 0;
                        if (128 & i) {
                            let t = 127 & i;
                            if (!t) throw new r("tlv.decode(long): indefinite length not supported");
                            if (t > 4) throw new r("tlv.decode(long): byte length is too big");
                            let l = e.subarray(n, n + t);
                            if (l.length !== t) throw new r("tlv.decode: length bytes not complete");
                            if (0 === l[0]) throw new r("tlv.decode(long): zero leftmost byte");
                            for (let t of l) o = o << 8 | t;
                            if (n += t, o < 128) throw new r("tlv.decode(long): not minimal encoding")
                        } else o = i;
                        let l = e.subarray(n, n + o);
                        if (l.length !== o) throw new r("tlv.decode: wrong value length");
                        return {
                            v: l,
                            l: e.subarray(n + o)
                        }
                    }
                },
                _int: {
                    encode(t) {
                        let {
                            Err: e
                        } = ts;
                        if (t < tu) throw new e("integer: negative integers are not allowed");
                        let r = m(t);
                        if (8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length) throw new e("unexpected assertion");
                        return r
                    },
                    decode(t) {
                        let {
                            Err: e
                        } = ts;
                        if (128 & t[0]) throw new e("Invalid signature integer: negative");
                        if (0 === t[0] && !(128 & t[1])) throw new e("Invalid signature integer: unnecessary leading zero");
                        return tl(t)
                    }
                },
                toSig(t) {
                    let {
                        Err: e,
                        _int: r,
                        _tlv: n
                    } = ts, i = "string" == typeof t ? tf(t) : t;
                    c(i);
                    let {
                        v: o,
                        l: l
                    } = n.decode(48, i);
                    if (l.length) throw new e("Invalid signature: left bytes after parsing");
                    let {
                        v: f,
                        l: s
                    } = n.decode(2, o), {
                        v: u,
                        l: a
                    } = n.decode(2, s);
                    if (a.length) throw new e("Invalid signature: left bytes after parsing");
                    return {
                        r: r.decode(f),
                        s: r.decode(u)
                    }
                },
                hexFromSig(t) {
                    let {
                        _tlv: e,
                        _int: r
                    } = ts, n = `${e.encode(2,r.encode(t.r))}${e.encode(2,r.encode(t.s))}`;
                    return e.encode(48, n)
                }
            }, tu = BigInt(0), ta = BigInt(1), td = (BigInt(2), BigInt(3));
            BigInt(4); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            let th = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
                tc = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                tg = BigInt(1),
                tp = BigInt(2),
                ty = (t, e) => (t + e / tp) / e,
                tm = Q(th, void 0, void 0, {
                    sqrt: function(t) {
                        let e = BigInt(3),
                            r = BigInt(6),
                            n = BigInt(11),
                            i = BigInt(22),
                            o = BigInt(23),
                            l = BigInt(44),
                            f = BigInt(88),
                            s = t * t * t % th,
                            u = s * s * t % th,
                            a = M(u, e, th) * u % th,
                            d = M(a, e, th) * u % th,
                            h = M(d, tp, th) * s % th,
                            c = M(h, n, th) * h % th,
                            g = M(c, i, th) * c % th,
                            p = M(g, l, th) * g % th,
                            y = M(p, f, th) * p % th,
                            m = M(y, l, th) * g % th,
                            w = M(m, e, th) * u % th,
                            E = M(w, o, th) * c % th,
                            b = M(E, r, th) * s % th,
                            B = M(b, tp, th);
                        if (!tm.eql(tm.sqr(B), t)) throw Error("Cannot find square root");
                        return B
                    }
                }),
                tw = function(t, e) {
                    let r = e => (function(t) {
                        let e = function(t) {
                                let e = ti(t);
                                return F(e, {
                                    hash: "hash",
                                    hmac: "function",
                                    randomBytes: "function"
                                }, {
                                    bits2int: "function",
                                    bits2int_modN: "function",
                                    lowS: "boolean"
                                }), Object.freeze({
                                    lowS: !0,
                                    ...e
                                })
                            }(t),
                            {
                                Fp: r,
                                n: n
                            } = e,
                            i = r.BYTES + 1,
                            o = 2 * r.BYTES + 1;

                        function l(t) {
                            return D(t, n)
                        }
                        let {
                            ProjectivePoint: f,
                            normPrivateKeyToScalar: s,
                            weierstrassEquation: u,
                            isWithinCurveOrder: a
                        } = function(t) {
                            let e = function(t) {
                                    let e = ti(t);
                                    F(e, {
                                        a: "field",
                                        b: "field"
                                    }, {
                                        allowedPrivateKeyLengths: "array",
                                        wrapPrivateKey: "boolean",
                                        isTorsionFree: "function",
                                        clearCofactor: "function",
                                        allowInfinityPoint: "boolean",
                                        fromBytes: "function",
                                        toBytes: "function"
                                    });
                                    let {
                                        endo: r,
                                        Fp: n,
                                        a: i
                                    } = e;
                                    if (r) {
                                        if (!n.eql(i, n.ZERO)) throw Error("Endomorphism can only be defined for Koblitz curves that have a=0");
                                        if ("object" != typeof r || "bigint" != typeof r.beta || "function" != typeof r.splitScalar) throw Error("Expected endomorphism with beta: bigint and splitScalar: function")
                                    }
                                    return Object.freeze({ ...e
                                    })
                                }(t),
                                {
                                    Fp: r
                                } = e,
                                n = Q(e.n, e.nBitLength),
                                i = e.toBytes || ((t, e, n) => {
                                    let i = e.toAffine();
                                    return O(Uint8Array.from([4]), r.toBytes(i.x), r.toBytes(i.y))
                                }),
                                o = e.fromBytes || (t => {
                                    let e = t.subarray(1),
                                        n = r.fromBytes(e.subarray(0, r.BYTES)),
                                        i = r.fromBytes(e.subarray(r.BYTES, 2 * r.BYTES));
                                    return {
                                        x: n,
                                        y: i
                                    }
                                });

                            function l(t) {
                                let {
                                    a: n,
                                    b: i
                                } = e, o = r.sqr(t), l = r.mul(o, t);
                                return r.add(r.add(l, r.mul(t, n)), i)
                            }
                            if (!r.eql(r.sqr(e.Gy), l(e.Gx))) throw Error("bad generator point: equation left != right");

                            function f(t) {
                                let r;
                                let {
                                    allowedPrivateKeyLengths: n,
                                    nByteLength: i,
                                    wrapPrivateKey: o,
                                    n: l
                                } = e;
                                if (n && "bigint" != typeof t) {
                                    if (h(t) && (t = y(t)), "string" != typeof t || !n.includes(t.length)) throw Error("Invalid key");
                                    t = t.padStart(2 * i, "0")
                                }
                                try {
                                    r = "bigint" == typeof t ? t : v(A("private key", t, i))
                                } catch (e) {
                                    throw Error(`private key must be ${i} bytes, hex or bigint, not ${typeof t}`)
                                }
                                return o && (r = D(r, l)), N("private key", r, ta, l), r
                            }

                            function s(t) {
                                if (!(t instanceof d)) throw Error("ProjectivePoint expected")
                            }
                            let u = P((t, e) => {
                                    let {
                                        px: n,
                                        py: i,
                                        pz: o
                                    } = t;
                                    if (r.eql(o, r.ONE)) return {
                                        x: n,
                                        y: i
                                    };
                                    let l = t.is0();
                                    null == e && (e = l ? r.ONE : r.inv(o));
                                    let f = r.mul(n, e),
                                        s = r.mul(i, e),
                                        u = r.mul(o, e);
                                    if (l) return {
                                        x: r.ZERO,
                                        y: r.ZERO
                                    };
                                    if (!r.eql(u, r.ONE)) throw Error("invZ was invalid");
                                    return {
                                        x: f,
                                        y: s
                                    }
                                }),
                                a = P(t => {
                                    if (t.is0()) {
                                        if (e.allowInfinityPoint && !r.is0(t.py)) return;
                                        throw Error("bad point: ZERO")
                                    }
                                    let {
                                        x: n,
                                        y: i
                                    } = t.toAffine();
                                    if (!r.isValid(n) || !r.isValid(i)) throw Error("bad point: x or y not FE");
                                    let o = r.sqr(i),
                                        f = l(n);
                                    if (!r.eql(o, f)) throw Error("bad point: equation left != right");
                                    if (!t.isTorsionFree()) throw Error("bad point: not in prime-order subgroup");
                                    return !0
                                });
                            class d {
                                constructor(t, e, n) {
                                    if (this.px = t, this.py = e, this.pz = n, null == t || !r.isValid(t)) throw Error("x required");
                                    if (null == e || !r.isValid(e)) throw Error("y required");
                                    if (null == n || !r.isValid(n)) throw Error("z required");
                                    Object.freeze(this)
                                }
                                static fromAffine(t) {
                                    let {
                                        x: e,
                                        y: n
                                    } = t || {};
                                    if (!t || !r.isValid(e) || !r.isValid(n)) throw Error("invalid affine point");
                                    if (t instanceof d) throw Error("projective point not allowed");
                                    let i = t => r.eql(t, r.ZERO);
                                    return i(e) && i(n) ? d.ZERO : new d(e, n, r.ONE)
                                }
                                get x() {
                                    return this.toAffine().x
                                }
                                get y() {
                                    return this.toAffine().y
                                }
                                static normalizeZ(t) {
                                    let e = r.invertBatch(t.map(t => t.pz));
                                    return t.map((t, r) => t.toAffine(e[r])).map(d.fromAffine)
                                }
                                static fromHex(t) {
                                    let e = d.fromAffine(o(A("pointHex", t)));
                                    return e.assertValidity(), e
                                }
                                static fromPrivateKey(t) {
                                    return d.BASE.multiply(f(t))
                                }
                                static msm(t, e) {
                                    return function(t, e, r, n) {
                                        if (!Array.isArray(r) || !Array.isArray(n) || n.length !== r.length) throw Error("arrays of points and scalars must have equal length");
                                        n.forEach((t, r) => {
                                            if (!e.isValid(t)) throw Error(`wrong scalar at index ${r}`)
                                        }), r.forEach((e, r) => {
                                            if (!(e instanceof t)) throw Error(`wrong point at index ${r}`)
                                        });
                                        let i = $(BigInt(r.length)),
                                            o = i > 12 ? i - 3 : i > 4 ? i - 2 : i ? 2 : 1,
                                            l = (1 << o) - 1,
                                            f = Array(l + 1).fill(t.ZERO),
                                            s = Math.floor((e.BITS - 1) / o) * o,
                                            u = t.ZERO;
                                        for (let e = s; e >= 0; e -= o) {
                                            f.fill(t.ZERO);
                                            for (let t = 0; t < n.length; t++) {
                                                let i = n[t],
                                                    o = Number(i >> BigInt(e) & BigInt(l));
                                                f[o] = f[o].add(r[t])
                                            }
                                            let i = t.ZERO;
                                            for (let e = f.length - 1, r = t.ZERO; e > 0; e--) r = r.add(f[e]), i = i.add(r);
                                            if (u = u.add(i), 0 !== e)
                                                for (let t = 0; t < o; t++) u = u.double()
                                        }
                                        return u
                                    }(d, n, t, e)
                                }
                                _setWindowSize(t) {
                                    p.setWindowSize(this, t)
                                }
                                assertValidity() {
                                    a(this)
                                }
                                hasEvenY() {
                                    let {
                                        y: t
                                    } = this.toAffine();
                                    if (r.isOdd) return !r.isOdd(t);
                                    throw Error("Field doesn't support isOdd")
                                }
                                equals(t) {
                                    s(t);
                                    let {
                                        px: e,
                                        py: n,
                                        pz: i
                                    } = this, {
                                        px: o,
                                        py: l,
                                        pz: f
                                    } = t, u = r.eql(r.mul(e, f), r.mul(o, i)), a = r.eql(r.mul(n, f), r.mul(l, i));
                                    return u && a
                                }
                                negate() {
                                    return new d(this.px, r.neg(this.py), this.pz)
                                }
                                double() {
                                    let {
                                        a: t,
                                        b: n
                                    } = e, i = r.mul(n, td), {
                                        px: o,
                                        py: l,
                                        pz: f
                                    } = this, s = r.ZERO, u = r.ZERO, a = r.ZERO, h = r.mul(o, o), c = r.mul(l, l), g = r.mul(f, f), p = r.mul(o, l);
                                    return p = r.add(p, p), a = r.mul(o, f), a = r.add(a, a), s = r.mul(t, a), u = r.mul(i, g), u = r.add(s, u), s = r.sub(c, u), u = r.add(c, u), u = r.mul(s, u), s = r.mul(p, s), a = r.mul(i, a), g = r.mul(t, g), p = r.sub(h, g), p = r.mul(t, p), p = r.add(p, a), a = r.add(h, h), h = r.add(a, h), h = r.add(h, g), h = r.mul(h, p), u = r.add(u, h), g = r.mul(l, f), g = r.add(g, g), h = r.mul(g, p), s = r.sub(s, h), a = r.mul(g, c), a = r.add(a, a), new d(s, u, a = r.add(a, a))
                                }
                                add(t) {
                                    s(t);
                                    let {
                                        px: n,
                                        py: i,
                                        pz: o
                                    } = this, {
                                        px: l,
                                        py: f,
                                        pz: u
                                    } = t, a = r.ZERO, h = r.ZERO, c = r.ZERO, g = e.a, p = r.mul(e.b, td), y = r.mul(n, l), m = r.mul(i, f), w = r.mul(o, u), E = r.add(n, i), b = r.add(l, f);
                                    E = r.mul(E, b), b = r.add(y, m), E = r.sub(E, b), b = r.add(n, o);
                                    let B = r.add(l, u);
                                    return b = r.mul(b, B), B = r.add(y, w), b = r.sub(b, B), B = r.add(i, o), a = r.add(f, u), B = r.mul(B, a), a = r.add(m, w), B = r.sub(B, a), c = r.mul(g, b), a = r.mul(p, w), c = r.add(a, c), a = r.sub(m, c), c = r.add(m, c), h = r.mul(a, c), m = r.add(y, y), m = r.add(m, y), w = r.mul(g, w), b = r.mul(p, b), m = r.add(m, w), w = r.sub(y, w), w = r.mul(g, w), b = r.add(b, w), y = r.mul(m, b), h = r.add(h, y), y = r.mul(B, b), a = r.mul(E, a), a = r.sub(a, y), y = r.mul(E, m), c = r.mul(B, c), new d(a, h, c = r.add(c, y))
                                }
                                subtract(t) {
                                    return this.add(t.negate())
                                }
                                is0() {
                                    return this.equals(d.ZERO)
                                }
                                wNAF(t) {
                                    return p.wNAFCached(this, t, d.normalizeZ)
                                }
                                multiplyUnsafe(t) {
                                    N("scalar", t, tu, e.n);
                                    let n = d.ZERO;
                                    if (t === tu) return n;
                                    if (t === ta) return this;
                                    let {
                                        endo: i
                                    } = e;
                                    if (!i) return p.unsafeLadder(this, t);
                                    let {
                                        k1neg: o,
                                        k1: l,
                                        k2neg: f,
                                        k2: s
                                    } = i.splitScalar(t), u = n, a = n, h = this;
                                    for (; l > tu || s > tu;) l & ta && (u = u.add(h)), s & ta && (a = a.add(h)), h = h.double(), l >>= ta, s >>= ta;
                                    return o && (u = u.negate()), f && (a = a.negate()), a = new d(r.mul(a.px, i.beta), a.py, a.pz), u.add(a)
                                }
                                multiply(t) {
                                    let n, i;
                                    let {
                                        endo: o,
                                        n: l
                                    } = e;
                                    if (N("scalar", t, ta, l), o) {
                                        let {
                                            k1neg: e,
                                            k1: l,
                                            k2neg: f,
                                            k2: s
                                        } = o.splitScalar(t), {
                                            p: u,
                                            f: a
                                        } = this.wNAF(l), {
                                            p: h,
                                            f: c
                                        } = this.wNAF(s);
                                        u = p.constTimeNegate(e, u), h = p.constTimeNegate(f, h), h = new d(r.mul(h.px, o.beta), h.py, h.pz), n = u.add(h), i = a.add(c)
                                    } else {
                                        let {
                                            p: e,
                                            f: r
                                        } = this.wNAF(t);
                                        n = e, i = r
                                    }
                                    return d.normalizeZ([n, i])[0]
                                }
                                multiplyAndAddUnsafe(t, e, r) {
                                    let n = d.BASE,
                                        i = (t, e) => e !== tu && e !== ta && t.equals(n) ? t.multiply(e) : t.multiplyUnsafe(e),
                                        o = i(this, e).add(i(t, r));
                                    return o.is0() ? void 0 : o
                                }
                                toAffine(t) {
                                    return u(this, t)
                                }
                                isTorsionFree() {
                                    let {
                                        h: t,
                                        isTorsionFree: r
                                    } = e;
                                    if (t === ta) return !0;
                                    if (r) return r(d, this);
                                    throw Error("isTorsionFree() has not been declared for the elliptic curve")
                                }
                                clearCofactor() {
                                    let {
                                        h: t,
                                        clearCofactor: r
                                    } = e;
                                    return t === ta ? this : r ? r(d, this) : this.multiplyUnsafe(e.h)
                                }
                                toRawBytes(t = !0) {
                                    return g("isCompressed", t), this.assertValidity(), i(d, this, t)
                                }
                                toHex(t = !0) {
                                    return g("isCompressed", t), y(this.toRawBytes(t))
                                }
                            }
                            d.BASE = new d(e.Gx, e.Gy, r.ONE), d.ZERO = new d(r.ZERO, r.ONE, r.ZERO);
                            let c = e.nBitLength,
                                p = function(t, e) {
                                    let r = (t, e) => {
                                            let r = e.negate();
                                            return t ? r : e
                                        },
                                        n = t => {
                                            if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw Error(`Wrong window size=${t}, should be [1..${e}]`)
                                        },
                                        i = t => {
                                            n(t);
                                            let r = Math.ceil(e / t) + 1,
                                                i = 2 ** (t - 1);
                                            return {
                                                windows: r,
                                                windowSize: i
                                            }
                                        };
                                    return {
                                        constTimeNegate: r,
                                        unsafeLadder(e, r) {
                                            let n = t.ZERO,
                                                i = e;
                                            for (; r > tt;) r & te && (n = n.add(i)), i = i.double(), r >>= te;
                                            return n
                                        },
                                        precomputeWindow(t, e) {
                                            let {
                                                windows: r,
                                                windowSize: n
                                            } = i(e), o = [], l = t, f = l;
                                            for (let t = 0; t < r; t++) {
                                                f = l, o.push(f);
                                                for (let t = 1; t < n; t++) f = f.add(l), o.push(f);
                                                l = f.double()
                                            }
                                            return o
                                        },
                                        wNAF(e, n, o) {
                                            let {
                                                windows: l,
                                                windowSize: f
                                            } = i(e), s = t.ZERO, u = t.BASE, a = BigInt(2 ** e - 1), d = 2 ** e, h = BigInt(e);
                                            for (let t = 0; t < l; t++) {
                                                let e = t * f,
                                                    i = Number(o & a);
                                                o >>= h, i > f && (i -= d, o += te);
                                                let l = e + Math.abs(i) - 1,
                                                    c = t % 2 != 0,
                                                    g = i < 0;
                                                0 === i ? u = u.add(r(c, n[e])) : s = s.add(r(g, n[l]))
                                            }
                                            return {
                                                p: s,
                                                f: u
                                            }
                                        },
                                        wNAFCached(t, e, r) {
                                            let n = tn.get(t) || 1,
                                                i = tr.get(t);
                                            return i || (i = this.precomputeWindow(t, n), 1 !== n && tr.set(t, r(i))), this.wNAF(n, i, e)
                                        },
                                        setWindowSize(t, e) {
                                            n(e), tn.set(t, e), tr.delete(t)
                                        }
                                    }
                                }(d, e.endo ? Math.ceil(c / 2) : c);
                            return {
                                CURVE: e,
                                ProjectivePoint: d,
                                normPrivateKeyToScalar: f,
                                weierstrassEquation: l,
                                isWithinCurveOrder: function(t) {
                                    return R(t, ta, e.n)
                                }
                            }
                        }({ ...e,
                            toBytes(t, e, n) {
                                let i = e.toAffine(),
                                    o = r.toBytes(i.x),
                                    l = O;
                                return (g("isCompressed", n), n) ? l(Uint8Array.from([e.hasEvenY() ? 2 : 3]), o) : l(Uint8Array.from([4]), o, r.toBytes(i.y))
                            },
                            fromBytes(t) {
                                let e = t.length,
                                    n = t[0],
                                    l = t.subarray(1);
                                if (e === i && (2 === n || 3 === n)) {
                                    let t;
                                    let e = v(l);
                                    if (!R(e, ta, r.ORDER)) throw Error("Point is not on curve");
                                    let i = u(e);
                                    try {
                                        t = r.sqrt(i)
                                    } catch (e) {
                                        let t = e instanceof Error ? ": " + e.message : "";
                                        throw Error("Point is not on curve" + t)
                                    }
                                    let o = (t & ta) === ta;
                                    return (1 & n) == 1 !== o && (t = r.neg(t)), {
                                        x: e,
                                        y: t
                                    }
                                }
                                if (e === o && 4 === n) {
                                    let t = r.fromBytes(l.subarray(0, r.BYTES)),
                                        e = r.fromBytes(l.subarray(r.BYTES, 2 * r.BYTES));
                                    return {
                                        x: t,
                                        y: e
                                    }
                                }
                                throw Error(`Point of length ${e} was invalid. Expected ${i} compressed bytes or ${o} uncompressed bytes`)
                            }
                        }), d = t => y(I(t, e.nByteLength));

                        function c(t) {
                            let e = n >> ta;
                            return t > e
                        }
                        let p = (t, e, r) => v(t.slice(e, r));
                        class m {
                            constructor(t, e, r) {
                                this.r = t, this.s = e, this.recovery = r, this.assertValidity()
                            }
                            static fromCompact(t) {
                                let r = e.nByteLength;
                                return new m(p(t = A("compactSignature", t, 2 * r), 0, r), p(t, r, 2 * r))
                            }
                            static fromDER(t) {
                                let {
                                    r: e,
                                    s: r
                                } = ts.toSig(A("DER", t));
                                return new m(e, r)
                            }
                            assertValidity() {
                                N("r", this.r, ta, n), N("s", this.s, ta, n)
                            }
                            addRecoveryBit(t) {
                                return new m(this.r, this.s, t)
                            }
                            recoverPublicKey(t) {
                                let {
                                    r: i,
                                    s: o,
                                    recovery: s
                                } = this, u = b(A("msgHash", t));
                                if (null == s || ![0, 1, 2, 3].includes(s)) throw Error("recovery id invalid");
                                let a = 2 === s || 3 === s ? i + e.n : i;
                                if (a >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                                let h = (1 & s) == 0 ? "02" : "03",
                                    c = f.fromHex(h + d(a)),
                                    g = W(a, n),
                                    p = l(-u * g),
                                    y = l(o * g),
                                    m = f.BASE.multiplyAndAddUnsafe(c, p, y);
                                if (!m) throw Error("point at infinify");
                                return m.assertValidity(), m
                            }
                            hasHighS() {
                                return c(this.s)
                            }
                            normalizeS() {
                                return this.hasHighS() ? new m(this.r, l(-this.s), this.recovery) : this
                            }
                            toDERRawBytes() {
                                return B(this.toDERHex())
                            }
                            toDERHex() {
                                return ts.hexFromSig({
                                    r: this.r,
                                    s: this.s
                                })
                            }
                            toCompactRawBytes() {
                                return B(this.toCompactHex())
                            }
                            toCompactHex() {
                                return d(this.r) + d(this.s)
                            }
                        }

                        function w(t) {
                            let e = h(t),
                                r = "string" == typeof t,
                                n = (e || r) && t.length;
                            return e ? n === i || n === o : r ? n === 2 * i || n === 2 * o : t instanceof f
                        }
                        let E = e.bits2int || function(t) {
                                let r = v(t),
                                    n = 8 * t.length - e.nBitLength;
                                return n > 0 ? r >> BigInt(n) : r
                            },
                            b = e.bits2int_modN || function(t) {
                                return l(E(t))
                            },
                            q = H(e.nBitLength);

                        function L(t) {
                            return N(`num < 2^${e.nBitLength}`, t, tu, q), I(t, e.nByteLength)
                        }
                        let _ = {
                                lowS: e.lowS,
                                prehash: !1
                            },
                            Z = {
                                lowS: e.lowS,
                                prehash: !1
                            };
                        return f.BASE._setWindowSize(8), {
                            CURVE: e,
                            getPublicKey: function(t, e = !0) {
                                return f.fromPrivateKey(t).toRawBytes(e)
                            },
                            getSharedSecret: function(t, e, r = !0) {
                                if (w(t)) throw Error("first arg must be private key");
                                if (!w(e)) throw Error("second arg must be public key");
                                let n = f.fromHex(e);
                                return n.multiply(s(t)).toRawBytes(r)
                            },
                            sign: function(t, i, o = _) {
                                let {
                                    seed: u,
                                    k2sig: d
                                } = function(t, i, o = _) {
                                    if (["recovered", "canonical"].some(t => t in o)) throw Error("sign() legacy options not supported");
                                    let {
                                        hash: u,
                                        randomBytes: d
                                    } = e, {
                                        lowS: h,
                                        prehash: g,
                                        extraEntropy: p
                                    } = o;
                                    null == h && (h = !0), t = A("msgHash", t), to(o), g && (t = A("prehashed msgHash", u(t)));
                                    let y = b(t),
                                        w = s(i),
                                        B = [L(w), L(y)];
                                    if (null != p && !1 !== p) {
                                        let t = !0 === p ? d(r.BYTES) : p;
                                        B.push(A("extraEntropy", t))
                                    }
                                    let v = O(...B);
                                    return {
                                        seed: v,
                                        k2sig: function(t) {
                                            let e = E(t);
                                            if (!a(e)) return;
                                            let r = W(e, n),
                                                i = f.BASE.multiply(e).toAffine(),
                                                o = l(i.x);
                                            if (o === tu) return;
                                            let s = l(r * l(y + o * w));
                                            if (s === tu) return;
                                            let u = (i.x === o ? 0 : 2) | Number(i.y & ta),
                                                d = s;
                                            return h && c(s) && (d = c(s) ? l(-s) : s, u ^= 1), new m(o, d, u)
                                        }
                                    }
                                }(t, i, o), h = z(e.hash.outputLen, e.nByteLength, e.hmac);
                                return h(u, d)
                            },
                            verify: function(t, r, i, o = Z) {
                                let s, u;
                                if (r = A("msgHash", r), i = A("publicKey", i), "strict" in o) throw Error("options.strict was renamed to lowS");
                                to(o);
                                let {
                                    lowS: a,
                                    prehash: d
                                } = o;
                                try {
                                    if ("string" == typeof t || h(t)) try {
                                        u = m.fromDER(t)
                                    } catch (e) {
                                        if (!(e instanceof ts.Err)) throw e;
                                        u = m.fromCompact(t)
                                    } else if ("object" == typeof t && "bigint" == typeof t.r && "bigint" == typeof t.s) {
                                        let {
                                            r: e,
                                            s: r
                                        } = t;
                                        u = new m(e, r)
                                    } else throw Error("PARSE");
                                    s = f.fromHex(i)
                                } catch (t) {
                                    if ("PARSE" === t.message) throw Error("signature must be Signature instance, Uint8Array or hex string");
                                    return !1
                                }
                                if (a && u.hasHighS()) return !1;
                                d && (r = e.hash(r));
                                let {
                                    r: c,
                                    s: g
                                } = u, p = b(r), y = W(g, n), w = l(p * y), E = l(c * y), B = f.BASE.multiplyAndAddUnsafe(s, w, E) ? .toAffine();
                                if (!B) return !1;
                                let v = l(B.x);
                                return v === c
                            },
                            ProjectivePoint: f,
                            Signature: m,
                            utils: {
                                isValidPrivateKey(t) {
                                    try {
                                        return s(t), !0
                                    } catch (t) {
                                        return !1
                                    }
                                },
                                normPrivateKeyToScalar: s,
                                randomPrivateKey: () => {
                                    let t = X(e.n);
                                    return function(t, e, r = !1) {
                                        let n = t.length,
                                            i = J(e),
                                            o = X(e);
                                        if (n < 16 || n < o || n > 1024) throw Error(`expected ${o}-1024 bytes of input, got ${n}`);
                                        let l = r ? v(t) : x(t),
                                            f = D(l, e - T) + T;
                                        return r ? S(f, i) : I(f, i)
                                    }(e.randomBytes(t), e.n)
                                },
                                precompute: (t = 8, e = f.BASE) => (e._setWindowSize(t), e.multiply(BigInt(3)), e)
                            }
                        }
                    })({ ...t,
                        hash: e,
                        hmac: (t, ...r) => s(e, t, (0, l.eV)(...r)),
                        randomBytes: l.O6
                    });
                    return Object.freeze({ ...r(e),
                        create: r
                    })
                }({
                    a: BigInt(0),
                    b: BigInt(7),
                    Fp: tm,
                    n: tc,
                    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
                    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
                    h: BigInt(1),
                    lowS: !0,
                    endo: {
                        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
                        splitScalar: t => {
                            let e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                                r = -tg * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                                n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                                i = BigInt("0x100000000000000000000000000000000"),
                                o = ty(e * t, tc),
                                l = ty(-r * t, tc),
                                f = D(t - o * e - l * n, tc),
                                s = D(-o * r - l * e, tc),
                                u = f > i,
                                a = s > i;
                            if (u && (f = tc - f), a && (s = tc - s), f > i || s > i) throw Error("splitScalar: Endomorphism failed, k=" + t);
                            return {
                                k1neg: u,
                                k1: f,
                                k2neg: a,
                                k2: s
                            }
                        }
                    }
                }, i.JQ);
            BigInt(0), tw.ProjectivePoint
        }
    }
]);