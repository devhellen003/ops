(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2965], {
        62981: function(t) {
            "use strict";
            t.exports = function(t) {
                for (var e = [], r = t.length, i = 0; i < r; i++) {
                    var o = t.charCodeAt(i);
                    if (o >= 55296 && o <= 56319 && r > i + 1) {
                        var n = t.charCodeAt(i + 1);
                        n >= 56320 && n <= 57343 && (o = (o - 55296) * 1024 + n - 56320 + 65536, i += 1)
                    }
                    if (o < 128) {
                        e.push(o);
                        continue
                    }
                    if (o < 2048) {
                        e.push(o >> 6 | 192), e.push(63 & o | 128);
                        continue
                    }
                    if (o < 55296 || o >= 57344 && o < 65536) {
                        e.push(o >> 12 | 224), e.push(o >> 6 & 63 | 128), e.push(63 & o | 128);
                        continue
                    }
                    if (o >= 65536 && o <= 1114111) {
                        e.push(o >> 18 | 240), e.push(o >> 12 & 63 | 128), e.push(o >> 6 & 63 | 128), e.push(63 & o | 128);
                        continue
                    }
                    e.push(239, 191, 189)
                }
                return new Uint8Array(e).buffer
            }
        },
        20102: function(t, e, r) {
            let i = r(5364),
                o = r(63865),
                n = r(52503),
                l = r(99104);

            function a(t, e, r, n, l) {
                let a = [].slice.call(arguments, 1),
                    s = a.length,
                    c = "function" == typeof a[s - 1];
                if (!c && !i()) throw Error("Callback required as last argument");
                if (c) {
                    if (s < 2) throw Error("Too few arguments provided");
                    2 === s ? (l = r, r = e, e = n = void 0) : 3 === s && (e.getContext && void 0 === l ? (l = n, n = void 0) : (l = n, n = r, r = e, e = void 0))
                } else {
                    if (s < 1) throw Error("Too few arguments provided");
                    return 1 === s ? (r = e, e = n = void 0) : 2 !== s || e.getContext || (n = r, r = e, e = void 0), new Promise(function(i, l) {
                        try {
                            let l = o.create(r, n);
                            i(t(l, e, n))
                        } catch (t) {
                            l(t)
                        }
                    })
                }
                try {
                    let i = o.create(r, n);
                    l(null, t(i, e, n))
                } catch (t) {
                    l(t)
                }
            }
            e.create = o.create, e.toCanvas = a.bind(null, n.render), e.toDataURL = a.bind(null, n.renderToDataURL), e.toString = a.bind(null, function(t, e, r) {
                return l.render(t, r)
            })
        },
        5364: function(t) {
            t.exports = function() {
                return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        75428: function(t, e, r) {
            let i = r(49210).getSymbolSize;
            e.getRowColCoords = function(t) {
                if (1 === t) return [];
                let e = Math.floor(t / 7) + 2,
                    r = i(t),
                    o = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * e - 2)),
                    n = [r - 7];
                for (let t = 1; t < e - 1; t++) n[t] = n[t - 1] - o;
                return n.push(6), n.reverse()
            }, e.getPositions = function(t) {
                let r = [],
                    i = e.getRowColCoords(t),
                    o = i.length;
                for (let t = 0; t < o; t++)
                    for (let e = 0; e < o; e++)(0 !== t || 0 !== e) && (0 !== t || e !== o - 1) && (t !== o - 1 || 0 !== e) && r.push([i[t], i[e]]);
                return r
            }
        },
        60051: function(t, e, r) {
            let i = r(20608),
                o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function n(t) {
                this.mode = i.ALPHANUMERIC, this.data = t
            }
            n.getBitsLength = function(t) {
                return 11 * Math.floor(t / 2) + 6 * (t % 2)
            }, n.prototype.getLength = function() {
                return this.data.length
            }, n.prototype.getBitsLength = function() {
                return n.getBitsLength(this.data.length)
            }, n.prototype.write = function(t) {
                let e;
                for (e = 0; e + 2 <= this.data.length; e += 2) {
                    let r = 45 * o.indexOf(this.data[e]);
                    r += o.indexOf(this.data[e + 1]), t.put(r, 11)
                }
                this.data.length % 2 && t.put(o.indexOf(this.data[e]), 6)
            }, t.exports = n
        },
        69873: function(t) {
            function e() {
                this.buffer = [], this.length = 0
            }
            e.prototype = {
                get: function(t) {
                    return (this.buffer[Math.floor(t / 8)] >>> 7 - t % 8 & 1) == 1
                },
                put: function(t, e) {
                    for (let r = 0; r < e; r++) this.putBit((t >>> e - r - 1 & 1) == 1)
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(t) {
                    let e = Math.floor(this.length / 8);
                    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
                }
            }, t.exports = e
        },
        54813: function(t) {
            function e(t) {
                if (!t || t < 1) throw Error("BitMatrix size must be defined and greater than 0");
                this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t)
            }
            e.prototype.set = function(t, e, r, i) {
                let o = t * this.size + e;
                this.data[o] = r, i && (this.reservedBit[o] = !0)
            }, e.prototype.get = function(t, e) {
                return this.data[t * this.size + e]
            }, e.prototype.xor = function(t, e, r) {
                this.data[t * this.size + e] ^= r
            }, e.prototype.isReserved = function(t, e) {
                return this.reservedBit[t * this.size + e]
            }, t.exports = e
        },
        75112: function(t, e, r) {
            let i = r(62981),
                o = r(20608);

            function n(t) {
                this.mode = o.BYTE, "string" == typeof t && (t = i(t)), this.data = new Uint8Array(t)
            }
            n.getBitsLength = function(t) {
                return 8 * t
            }, n.prototype.getLength = function() {
                return this.data.length
            }, n.prototype.getBitsLength = function() {
                return n.getBitsLength(this.data.length)
            }, n.prototype.write = function(t) {
                for (let e = 0, r = this.data.length; e < r; e++) t.put(this.data[e], 8)
            }, t.exports = n
        },
        58045: function(t, e, r) {
            let i = r(6084),
                o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                n = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            e.getBlocksCount = function(t, e) {
                switch (e) {
                    case i.L:
                        return o[(t - 1) * 4 + 0];
                    case i.M:
                        return o[(t - 1) * 4 + 1];
                    case i.Q:
                        return o[(t - 1) * 4 + 2];
                    case i.H:
                        return o[(t - 1) * 4 + 3];
                    default:
                        return
                }
            }, e.getTotalCodewordsCount = function(t, e) {
                switch (e) {
                    case i.L:
                        return n[(t - 1) * 4 + 0];
                    case i.M:
                        return n[(t - 1) * 4 + 1];
                    case i.Q:
                        return n[(t - 1) * 4 + 2];
                    case i.H:
                        return n[(t - 1) * 4 + 3];
                    default:
                        return
                }
            }
        },
        6084: function(t, e) {
            e.L = {
                bit: 1
            }, e.M = {
                bit: 0
            }, e.Q = {
                bit: 3
            }, e.H = {
                bit: 2
            }, e.isValid = function(t) {
                return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4
            }, e.from = function(t, r) {
                if (e.isValid(t)) return t;
                try {
                    return function(t) {
                        if ("string" != typeof t) throw Error("Param is not a string");
                        let r = t.toLowerCase();
                        switch (r) {
                            case "l":
                            case "low":
                                return e.L;
                            case "m":
                            case "medium":
                                return e.M;
                            case "q":
                            case "quartile":
                                return e.Q;
                            case "h":
                            case "high":
                                return e.H;
                            default:
                                throw Error("Unknown EC Level: " + t)
                        }
                    }(t)
                } catch (t) {
                    return r
                }
            }
        },
        2379: function(t, e, r) {
            let i = r(49210).getSymbolSize;
            e.getPositions = function(t) {
                let e = i(t);
                return [
                    [0, 0],
                    [e - 7, 0],
                    [0, e - 7]
                ]
            }
        },
        88566: function(t, e, r) {
            let i = r(49210),
                o = i.getBCHDigit(1335);
            e.getEncodedBits = function(t, e) {
                let r = t.bit << 3 | e,
                    n = r << 10;
                for (; i.getBCHDigit(n) - o >= 0;) n ^= 1335 << i.getBCHDigit(n) - o;
                return (r << 10 | n) ^ 21522
            }
        },
        88201: function(t, e) {
            let r = new Uint8Array(512),
                i = new Uint8Array(256);
            ! function() {
                let t = 1;
                for (let e = 0; e < 255; e++) r[e] = t, i[t] = e, 256 & (t <<= 1) && (t ^= 285);
                for (let t = 255; t < 512; t++) r[t] = r[t - 255]
            }(), e.log = function(t) {
                if (t < 1) throw Error("log(" + t + ")");
                return i[t]
            }, e.exp = function(t) {
                return r[t]
            }, e.mul = function(t, e) {
                return 0 === t || 0 === e ? 0 : r[i[t] + i[e]]
            }
        },
        26250: function(t, e, r) {
            let i = r(20608),
                o = r(49210);

            function n(t) {
                this.mode = i.KANJI, this.data = t
            }
            n.getBitsLength = function(t) {
                return 13 * t
            }, n.prototype.getLength = function() {
                return this.data.length
            }, n.prototype.getBitsLength = function() {
                return n.getBitsLength(this.data.length)
            }, n.prototype.write = function(t) {
                let e;
                for (e = 0; e < this.data.length; e++) {
                    let r = o.toSJIS(this.data[e]);
                    if (r >= 33088 && r <= 40956) r -= 33088;
                    else if (r >= 57408 && r <= 60351) r -= 49472;
                    else throw Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                    r = (r >>> 8 & 255) * 192 + (255 & r), t.put(r, 13)
                }
            }, t.exports = n
        },
        61760: function(t, e) {
            e.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            let r = {
                N1: 3,
                N2: 3,
                N3: 40,
                N4: 10
            };
            e.isValid = function(t) {
                return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7
            }, e.from = function(t) {
                return e.isValid(t) ? parseInt(t, 10) : void 0
            }, e.getPenaltyN1 = function(t) {
                let e = t.size,
                    i = 0,
                    o = 0,
                    n = 0,
                    l = null,
                    a = null;
                for (let s = 0; s < e; s++) {
                    o = n = 0, l = a = null;
                    for (let c = 0; c < e; c++) {
                        let e = t.get(s, c);
                        e === l ? o++ : (o >= 5 && (i += r.N1 + (o - 5)), l = e, o = 1), (e = t.get(c, s)) === a ? n++ : (n >= 5 && (i += r.N1 + (n - 5)), a = e, n = 1)
                    }
                    o >= 5 && (i += r.N1 + (o - 5)), n >= 5 && (i += r.N1 + (n - 5))
                }
                return i
            }, e.getPenaltyN2 = function(t) {
                let e = t.size,
                    i = 0;
                for (let r = 0; r < e - 1; r++)
                    for (let o = 0; o < e - 1; o++) {
                        let e = t.get(r, o) + t.get(r, o + 1) + t.get(r + 1, o) + t.get(r + 1, o + 1);
                        (4 === e || 0 === e) && i++
                    }
                return i * r.N2
            }, e.getPenaltyN3 = function(t) {
                let e = t.size,
                    i = 0,
                    o = 0,
                    n = 0;
                for (let r = 0; r < e; r++) {
                    o = n = 0;
                    for (let l = 0; l < e; l++) o = o << 1 & 2047 | t.get(r, l), l >= 10 && (1488 === o || 93 === o) && i++, n = n << 1 & 2047 | t.get(l, r), l >= 10 && (1488 === n || 93 === n) && i++
                }
                return i * r.N3
            }, e.getPenaltyN4 = function(t) {
                let e = 0,
                    i = t.data.length;
                for (let r = 0; r < i; r++) e += t.data[r];
                let o = Math.abs(Math.ceil(100 * e / i / 5) - 10);
                return o * r.N4
            }, e.applyMask = function(t, r) {
                let i = r.size;
                for (let o = 0; o < i; o++)
                    for (let n = 0; n < i; n++) r.isReserved(n, o) || r.xor(n, o, function(t, r, i) {
                        switch (t) {
                            case e.Patterns.PATTERN000:
                                return (r + i) % 2 == 0;
                            case e.Patterns.PATTERN001:
                                return r % 2 == 0;
                            case e.Patterns.PATTERN010:
                                return i % 3 == 0;
                            case e.Patterns.PATTERN011:
                                return (r + i) % 3 == 0;
                            case e.Patterns.PATTERN100:
                                return (Math.floor(r / 2) + Math.floor(i / 3)) % 2 == 0;
                            case e.Patterns.PATTERN101:
                                return r * i % 2 + r * i % 3 == 0;
                            case e.Patterns.PATTERN110:
                                return (r * i % 2 + r * i % 3) % 2 == 0;
                            case e.Patterns.PATTERN111:
                                return (r * i % 3 + (r + i) % 2) % 2 == 0;
                            default:
                                throw Error("bad maskPattern:" + t)
                        }
                    }(t, n, o))
            }, e.getBestMask = function(t, r) {
                let i = Object.keys(e.Patterns).length,
                    o = 0,
                    n = 1 / 0;
                for (let l = 0; l < i; l++) {
                    r(l), e.applyMask(l, t);
                    let i = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
                    e.applyMask(l, t), i < n && (n = i, o = l)
                }
                return o
            }
        },
        20608: function(t, e, r) {
            let i = r(80789),
                o = r(80347);
            e.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, e.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, e.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, e.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, e.MIXED = {
                bit: -1
            }, e.getCharCountIndicator = function(t, e) {
                if (!t.ccBits) throw Error("Invalid mode: " + t);
                if (!i.isValid(e)) throw Error("Invalid version: " + e);
                return e >= 1 && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2]
            }, e.getBestModeForData = function(t) {
                return o.testNumeric(t) ? e.NUMERIC : o.testAlphanumeric(t) ? e.ALPHANUMERIC : o.testKanji(t) ? e.KANJI : e.BYTE
            }, e.toString = function(t) {
                if (t && t.id) return t.id;
                throw Error("Invalid mode")
            }, e.isValid = function(t) {
                return t && t.bit && t.ccBits
            }, e.from = function(t, r) {
                if (e.isValid(t)) return t;
                try {
                    return function(t) {
                        if ("string" != typeof t) throw Error("Param is not a string");
                        let r = t.toLowerCase();
                        switch (r) {
                            case "numeric":
                                return e.NUMERIC;
                            case "alphanumeric":
                                return e.ALPHANUMERIC;
                            case "kanji":
                                return e.KANJI;
                            case "byte":
                                return e.BYTE;
                            default:
                                throw Error("Unknown mode: " + t)
                        }
                    }(t)
                } catch (t) {
                    return r
                }
            }
        },
        98163: function(t, e, r) {
            let i = r(20608);

            function o(t) {
                this.mode = i.NUMERIC, this.data = t.toString()
            }
            o.getBitsLength = function(t) {
                return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(t) {
                let e, r;
                for (e = 0; e + 3 <= this.data.length; e += 3) r = parseInt(this.data.substr(e, 3), 10), t.put(r, 10);
                let i = this.data.length - e;
                i > 0 && (r = parseInt(this.data.substr(e), 10), t.put(r, 3 * i + 1))
            }, t.exports = o
        },
        60466: function(t, e, r) {
            let i = r(88201);
            e.mul = function(t, e) {
                let r = new Uint8Array(t.length + e.length - 1);
                for (let o = 0; o < t.length; o++)
                    for (let n = 0; n < e.length; n++) r[o + n] ^= i.mul(t[o], e[n]);
                return r
            }, e.mod = function(t, e) {
                let r = new Uint8Array(t);
                for (; r.length - e.length >= 0;) {
                    let t = r[0];
                    for (let o = 0; o < e.length; o++) r[o] ^= i.mul(e[o], t);
                    let o = 0;
                    for (; o < r.length && 0 === r[o];) o++;
                    r = r.slice(o)
                }
                return r
            }, e.generateECPolynomial = function(t) {
                let r = new Uint8Array([1]);
                for (let o = 0; o < t; o++) r = e.mul(r, new Uint8Array([1, i.exp(o)]));
                return r
            }
        },
        63865: function(t, e, r) {
            let i = r(49210),
                o = r(6084),
                n = r(69873),
                l = r(54813),
                a = r(75428),
                s = r(2379),
                c = r(61760),
                d = r(58045),
                h = r(14196),
                u = r(87667),
                m = r(88566),
                p = r(20608),
                g = r(22844);

            function f(t, e, r) {
                let i, o;
                let n = t.size,
                    l = m.getEncodedBits(e, r);
                for (i = 0; i < 15; i++) o = (l >> i & 1) == 1, i < 6 ? t.set(i, 8, o, !0) : i < 8 ? t.set(i + 1, 8, o, !0) : t.set(n - 15 + i, 8, o, !0), i < 8 ? t.set(8, n - i - 1, o, !0) : i < 9 ? t.set(8, 15 - i - 1 + 1, o, !0) : t.set(8, 15 - i - 1, o, !0);
                t.set(n - 8, 8, 1, !0)
            }
            e.create = function(t, e) {
                let r, m;
                if (void 0 === t || "" === t) throw Error("No input text");
                let w = o.M;
                return void 0 !== e && (w = o.from(e.errorCorrectionLevel, o.M), r = u.from(e.version), m = c.from(e.maskPattern), e.toSJISFunc && i.setToSJISFunction(e.toSJISFunc)),
                    function(t, e, r, o) {
                        let m;
                        if (Array.isArray(t)) m = g.fromArray(t);
                        else if ("string" == typeof t) {
                            let i = e;
                            if (!i) {
                                let e = g.rawSplit(t);
                                i = u.getBestVersionForData(e, r)
                            }
                            m = g.fromString(t, i || 40)
                        } else throw Error("Invalid data");
                        let w = u.getBestVersionForData(m, r);
                        if (!w) throw Error("The amount of data is too big to be stored in a QR Code");
                        if (e) {
                            if (e < w) throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + w + ".\n")
                        } else e = w;
                        let v = function(t, e, r) {
                                let o = new n;
                                r.forEach(function(e) {
                                    o.put(e.mode.bit, 4), o.put(e.getLength(), p.getCharCountIndicator(e.mode, t)), e.write(o)
                                });
                                let l = i.getSymbolTotalCodewords(t),
                                    a = d.getTotalCodewordsCount(t, e),
                                    s = (l - a) * 8;
                                for (o.getLengthInBits() + 4 <= s && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(0);
                                let c = (s - o.getLengthInBits()) / 8;
                                for (let t = 0; t < c; t++) o.put(t % 2 ? 17 : 236, 8);
                                return function(t, e, r) {
                                    let o, n;
                                    let l = i.getSymbolTotalCodewords(e),
                                        a = d.getTotalCodewordsCount(e, r),
                                        s = l - a,
                                        c = d.getBlocksCount(e, r),
                                        u = l % c,
                                        m = c - u,
                                        p = Math.floor(l / c),
                                        g = Math.floor(s / c),
                                        f = g + 1,
                                        w = p - g,
                                        v = new h(w),
                                        b = 0,
                                        y = Array(c),
                                        x = Array(c),
                                        $ = 0,
                                        A = new Uint8Array(t.buffer);
                                    for (let t = 0; t < c; t++) {
                                        let e = t < m ? g : f;
                                        y[t] = A.slice(b, b + e), x[t] = v.encode(y[t]), b += e, $ = Math.max($, e)
                                    }
                                    let C = new Uint8Array(l),
                                        E = 0;
                                    for (o = 0; o < $; o++)
                                        for (n = 0; n < c; n++) o < y[n].length && (C[E++] = y[n][o]);
                                    for (o = 0; o < w; o++)
                                        for (n = 0; n < c; n++) C[E++] = x[n][o];
                                    return C
                                }(o, t, e)
                            }(e, r, m),
                            b = i.getSymbolSize(e),
                            y = new l(b);
                        return function(t, e) {
                                let r = t.size,
                                    i = s.getPositions(e);
                                for (let e = 0; e < i.length; e++) {
                                    let o = i[e][0],
                                        n = i[e][1];
                                    for (let e = -1; e <= 7; e++)
                                        if (!(o + e <= -1) && !(r <= o + e))
                                            for (let i = -1; i <= 7; i++) n + i <= -1 || r <= n + i || (e >= 0 && e <= 6 && (0 === i || 6 === i) || i >= 0 && i <= 6 && (0 === e || 6 === e) || e >= 2 && e <= 4 && i >= 2 && i <= 4 ? t.set(o + e, n + i, !0, !0) : t.set(o + e, n + i, !1, !0))
                                }
                            }(y, e),
                            function(t) {
                                let e = t.size;
                                for (let r = 8; r < e - 8; r++) {
                                    let e = r % 2 == 0;
                                    t.set(r, 6, e, !0), t.set(6, r, e, !0)
                                }
                            }(y),
                            function(t, e) {
                                let r = a.getPositions(e);
                                for (let e = 0; e < r.length; e++) {
                                    let i = r[e][0],
                                        o = r[e][1];
                                    for (let e = -2; e <= 2; e++)
                                        for (let r = -2; r <= 2; r++) - 2 === e || 2 === e || -2 === r || 2 === r || 0 === e && 0 === r ? t.set(i + e, o + r, !0, !0) : t.set(i + e, o + r, !1, !0)
                                }
                            }(y, e), f(y, r, 0), e >= 7 && function(t, e) {
                                let r, i, o;
                                let n = t.size,
                                    l = u.getEncodedBits(e);
                                for (let e = 0; e < 18; e++) r = Math.floor(e / 3), i = e % 3 + n - 8 - 3, o = (l >> e & 1) == 1, t.set(r, i, o, !0), t.set(i, r, o, !0)
                            }(y, e),
                            function(t, e) {
                                let r = t.size,
                                    i = -1,
                                    o = r - 1,
                                    n = 7,
                                    l = 0;
                                for (let a = r - 1; a > 0; a -= 2)
                                    for (6 === a && a--;;) {
                                        for (let r = 0; r < 2; r++)
                                            if (!t.isReserved(o, a - r)) {
                                                let i = !1;
                                                l < e.length && (i = (e[l] >>> n & 1) == 1), t.set(o, a - r, i), -1 == --n && (l++, n = 7)
                                            }
                                        if ((o += i) < 0 || r <= o) {
                                            o -= i, i = -i;
                                            break
                                        }
                                    }
                            }(y, v), isNaN(o) && (o = c.getBestMask(y, f.bind(null, y, r))), c.applyMask(o, y), f(y, r, o), {
                                modules: y,
                                version: e,
                                errorCorrectionLevel: r,
                                maskPattern: o,
                                segments: m
                            }
                    }(t, r, w, m)
            }
        },
        14196: function(t, e, r) {
            let i = r(60466);

            function o(t) {
                this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree)
            }
            o.prototype.initialize = function(t) {
                this.degree = t, this.genPoly = i.generateECPolynomial(this.degree)
            }, o.prototype.encode = function(t) {
                if (!this.genPoly) throw Error("Encoder not initialized");
                let e = new Uint8Array(t.length + this.degree);
                e.set(t);
                let r = i.mod(e, this.genPoly),
                    o = this.degree - r.length;
                if (o > 0) {
                    let t = new Uint8Array(this.degree);
                    return t.set(r, o), t
                }
                return r
            }, t.exports = o
        },
        80347: function(t, e) {
            let r = "[0-9]+",
                i = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
            i = i.replace(/u/g, "\\u");
            let o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + i + ")(?:.|[\r\n]))+";
            e.KANJI = RegExp(i, "g"), e.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), e.BYTE = RegExp(o, "g"), e.NUMERIC = RegExp(r, "g"), e.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g");
            let n = RegExp("^" + i + "$"),
                l = RegExp("^" + r + "$"),
                a = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            e.testKanji = function(t) {
                return n.test(t)
            }, e.testNumeric = function(t) {
                return l.test(t)
            }, e.testAlphanumeric = function(t) {
                return a.test(t)
            }
        },
        22844: function(t, e, r) {
            let i = r(20608),
                o = r(98163),
                n = r(60051),
                l = r(75112),
                a = r(26250),
                s = r(80347),
                c = r(49210),
                d = r(13526);

            function h(t) {
                return unescape(encodeURIComponent(t)).length
            }

            function u(t, e, r) {
                let i;
                let o = [];
                for (; null !== (i = t.exec(r));) o.push({
                    data: i[0],
                    index: i.index,
                    mode: e,
                    length: i[0].length
                });
                return o
            }

            function m(t) {
                let e, r;
                let o = u(s.NUMERIC, i.NUMERIC, t),
                    n = u(s.ALPHANUMERIC, i.ALPHANUMERIC, t);
                c.isKanjiModeEnabled() ? (e = u(s.BYTE, i.BYTE, t), r = u(s.KANJI, i.KANJI, t)) : (e = u(s.BYTE_KANJI, i.BYTE, t), r = []);
                let l = o.concat(n, e, r);
                return l.sort(function(t, e) {
                    return t.index - e.index
                }).map(function(t) {
                    return {
                        data: t.data,
                        mode: t.mode,
                        length: t.length
                    }
                })
            }

            function p(t, e) {
                switch (e) {
                    case i.NUMERIC:
                        return o.getBitsLength(t);
                    case i.ALPHANUMERIC:
                        return n.getBitsLength(t);
                    case i.KANJI:
                        return a.getBitsLength(t);
                    case i.BYTE:
                        return l.getBitsLength(t)
                }
            }

            function g(t, e) {
                let r;
                let s = i.getBestModeForData(t);
                if ((r = i.from(e, s)) !== i.BYTE && r.bit < s.bit) throw Error('"' + t + '" cannot be encoded with mode ' + i.toString(r) + ".\n Suggested mode is: " + i.toString(s));
                switch (r !== i.KANJI || c.isKanjiModeEnabled() || (r = i.BYTE), r) {
                    case i.NUMERIC:
                        return new o(t);
                    case i.ALPHANUMERIC:
                        return new n(t);
                    case i.KANJI:
                        return new a(t);
                    case i.BYTE:
                        return new l(t)
                }
            }
            e.fromArray = function(t) {
                return t.reduce(function(t, e) {
                    return "string" == typeof e ? t.push(g(e, null)) : e.data && t.push(g(e.data, e.mode)), t
                }, [])
            }, e.fromString = function(t, r) {
                let o = m(t, c.isKanjiModeEnabled()),
                    n = function(t) {
                        let e = [];
                        for (let r = 0; r < t.length; r++) {
                            let o = t[r];
                            switch (o.mode) {
                                case i.NUMERIC:
                                    e.push([o, {
                                        data: o.data,
                                        mode: i.ALPHANUMERIC,
                                        length: o.length
                                    }, {
                                        data: o.data,
                                        mode: i.BYTE,
                                        length: o.length
                                    }]);
                                    break;
                                case i.ALPHANUMERIC:
                                    e.push([o, {
                                        data: o.data,
                                        mode: i.BYTE,
                                        length: o.length
                                    }]);
                                    break;
                                case i.KANJI:
                                    e.push([o, {
                                        data: o.data,
                                        mode: i.BYTE,
                                        length: h(o.data)
                                    }]);
                                    break;
                                case i.BYTE:
                                    e.push([{
                                        data: o.data,
                                        mode: i.BYTE,
                                        length: h(o.data)
                                    }])
                            }
                        }
                        return e
                    }(o),
                    l = function(t, e) {
                        let r = {},
                            o = {
                                start: {}
                            },
                            n = ["start"];
                        for (let l = 0; l < t.length; l++) {
                            let a = t[l],
                                s = [];
                            for (let t = 0; t < a.length; t++) {
                                let c = a[t],
                                    d = "" + l + t;
                                s.push(d), r[d] = {
                                    node: c,
                                    lastCount: 0
                                }, o[d] = {};
                                for (let t = 0; t < n.length; t++) {
                                    let l = n[t];
                                    r[l] && r[l].node.mode === c.mode ? (o[l][d] = p(r[l].lastCount + c.length, c.mode) - p(r[l].lastCount, c.mode), r[l].lastCount += c.length) : (r[l] && (r[l].lastCount = c.length), o[l][d] = p(c.length, c.mode) + 4 + i.getCharCountIndicator(c.mode, e))
                                }
                            }
                            n = s
                        }
                        for (let t = 0; t < n.length; t++) o[n[t]].end = 0;
                        return {
                            map: o,
                            table: r
                        }
                    }(n, r),
                    a = d.find_path(l.map, "start", "end"),
                    s = [];
                for (let t = 1; t < a.length - 1; t++) s.push(l.table[a[t]].node);
                return e.fromArray(s.reduce(function(t, e) {
                    let r = t.length - 1 >= 0 ? t[t.length - 1] : null;
                    return r && r.mode === e.mode ? t[t.length - 1].data += e.data : t.push(e), t
                }, []))
            }, e.rawSplit = function(t) {
                return e.fromArray(m(t, c.isKanjiModeEnabled()))
            }
        },
        49210: function(t, e) {
            let r;
            let i = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            e.getSymbolSize = function(t) {
                if (!t) throw Error('"version" cannot be null or undefined');
                if (t < 1 || t > 40) throw Error('"version" should be in range from 1 to 40');
                return 4 * t + 17
            }, e.getSymbolTotalCodewords = function(t) {
                return i[t]
            }, e.getBCHDigit = function(t) {
                let e = 0;
                for (; 0 !== t;) e++, t >>>= 1;
                return e
            }, e.setToSJISFunction = function(t) {
                if ("function" != typeof t) throw Error('"toSJISFunc" is not a valid function.');
                r = t
            }, e.isKanjiModeEnabled = function() {
                return void 0 !== r
            }, e.toSJIS = function(t) {
                return r(t)
            }
        },
        80789: function(t, e) {
            e.isValid = function(t) {
                return !isNaN(t) && t >= 1 && t <= 40
            }
        },
        87667: function(t, e, r) {
            let i = r(49210),
                o = r(58045),
                n = r(6084),
                l = r(20608),
                a = r(80789),
                s = i.getBCHDigit(7973);

            function c(t, e) {
                return l.getCharCountIndicator(t, e) + 4
            }
            e.from = function(t, e) {
                return a.isValid(t) ? parseInt(t, 10) : e
            }, e.getCapacity = function(t, e, r) {
                if (!a.isValid(t)) throw Error("Invalid QR Code version");
                void 0 === r && (r = l.BYTE);
                let n = i.getSymbolTotalCodewords(t),
                    s = o.getTotalCodewordsCount(t, e),
                    d = (n - s) * 8;
                if (r === l.MIXED) return d;
                let h = d - c(r, t);
                switch (r) {
                    case l.NUMERIC:
                        return Math.floor(h / 10 * 3);
                    case l.ALPHANUMERIC:
                        return Math.floor(h / 11 * 2);
                    case l.KANJI:
                        return Math.floor(h / 13);
                    case l.BYTE:
                    default:
                        return Math.floor(h / 8)
                }
            }, e.getBestVersionForData = function(t, r) {
                let i;
                let o = n.from(r, n.M);
                if (Array.isArray(t)) {
                    if (t.length > 1) return function(t, r) {
                        for (let i = 1; i <= 40; i++) {
                            let o = function(t, e) {
                                let r = 0;
                                return t.forEach(function(t) {
                                    let i = c(t.mode, e);
                                    r += i + t.getBitsLength()
                                }), r
                            }(t, i);
                            if (o <= e.getCapacity(i, r, l.MIXED)) return i
                        }
                    }(t, o);
                    if (0 === t.length) return 1;
                    i = t[0]
                } else i = t;
                return function(t, r, i) {
                    for (let o = 1; o <= 40; o++)
                        if (r <= e.getCapacity(o, i, t)) return o
                }(i.mode, i.getLength(), o)
            }, e.getEncodedBits = function(t) {
                if (!a.isValid(t) || t < 7) throw Error("Invalid QR Code version");
                let e = t << 12;
                for (; i.getBCHDigit(e) - s >= 0;) e ^= 7973 << i.getBCHDigit(e) - s;
                return t << 12 | e
            }
        },
        52503: function(t, e, r) {
            let i = r(86957);
            e.render = function(t, e, r) {
                var o;
                let n = r,
                    l = e;
                void 0 !== n || e && e.getContext || (n = e, e = void 0), e || (l = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (t) {
                        throw Error("You need to specify a canvas element")
                    }
                }()), n = i.getOptions(n);
                let a = i.getImageWidth(t.modules.size, n),
                    s = l.getContext("2d"),
                    c = s.createImageData(a, a);
                return i.qrToImageData(c.data, t, n), o = l, s.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = a, o.width = a, o.style.height = a + "px", o.style.width = a + "px", s.putImageData(c, 0, 0), l
            }, e.renderToDataURL = function(t, r, i) {
                let o = i;
                void 0 !== o || r && r.getContext || (o = r, r = void 0), o || (o = {});
                let n = e.render(t, r, o),
                    l = o.type || "image/png",
                    a = o.rendererOpts || {};
                return n.toDataURL(l, a.quality)
            }
        },
        99104: function(t, e, r) {
            let i = r(86957);

            function o(t, e) {
                let r = t.a / 255,
                    i = e + '="' + t.hex + '"';
                return r < 1 ? i + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : i
            }

            function n(t, e, r) {
                let i = t + e;
                return void 0 !== r && (i += " " + r), i
            }
            e.render = function(t, e, r) {
                let l = i.getOptions(e),
                    a = t.modules.size,
                    s = t.modules.data,
                    c = a + 2 * l.margin,
                    d = l.color.light.a ? "<path " + o(l.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
                    h = "<path " + o(l.color.dark, "stroke") + ' d="' + function(t, e, r) {
                        let i = "",
                            o = 0,
                            l = !1,
                            a = 0;
                        for (let s = 0; s < t.length; s++) {
                            let c = Math.floor(s % e),
                                d = Math.floor(s / e);
                            c || l || (l = !0), t[s] ? (a++, s > 0 && c > 0 && t[s - 1] || (i += l ? n("M", c + r, .5 + d + r) : n("m", o, 0), o = 0, l = !1), c + 1 < e && t[s + 1] || (i += n("h", a), a = 0)) : o++
                        }
                        return i
                    }(s, a, l.margin) + '"/>',
                    u = l.width ? 'width="' + l.width + '" height="' + l.width + '" ' : "",
                    m = '<svg xmlns="http://www.w3.org/2000/svg" ' + u + ('viewBox="0 0 ' + c) + " " + c + '" shape-rendering="crispEdges">' + d + h + "</svg>\n";
                return "function" == typeof r && r(null, m), m
            }
        },
        86957: function(t, e) {
            function r(t) {
                if ("number" == typeof t && (t = t.toString()), "string" != typeof t) throw Error("Color should be defined as hex string");
                let e = t.slice().replace("#", "").split("");
                if (e.length < 3 || 5 === e.length || e.length > 8) throw Error("Invalid hex color: " + t);
                (3 === e.length || 4 === e.length) && (e = Array.prototype.concat.apply([], e.map(function(t) {
                    return [t, t]
                }))), 6 === e.length && e.push("F", "F");
                let r = parseInt(e.join(""), 16);
                return {
                    r: r >> 24 & 255,
                    g: r >> 16 & 255,
                    b: r >> 8 & 255,
                    a: 255 & r,
                    hex: "#" + e.slice(0, 6).join("")
                }
            }
            e.getOptions = function(t) {
                t || (t = {}), t.color || (t.color = {});
                let e = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
                    i = t.width && t.width >= 21 ? t.width : void 0,
                    o = t.scale || 4;
                return {
                    width: i,
                    scale: i ? 4 : o,
                    margin: e,
                    color: {
                        dark: r(t.color.dark || "#000000ff"),
                        light: r(t.color.light || "#ffffffff")
                    },
                    type: t.type,
                    rendererOpts: t.rendererOpts || {}
                }
            }, e.getScale = function(t, e) {
                return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale
            }, e.getImageWidth = function(t, r) {
                let i = e.getScale(t, r);
                return Math.floor((t + 2 * r.margin) * i)
            }, e.qrToImageData = function(t, r, i) {
                let o = r.modules.size,
                    n = r.modules.data,
                    l = e.getScale(o, i),
                    a = Math.floor((o + 2 * i.margin) * l),
                    s = i.margin * l,
                    c = [i.color.light, i.color.dark];
                for (let e = 0; e < a; e++)
                    for (let r = 0; r < a; r++) {
                        let d = (e * a + r) * 4,
                            h = i.color.light;
                        if (e >= s && r >= s && e < a - s && r < a - s) {
                            let t = Math.floor((e - s) / l),
                                i = Math.floor((r - s) / l);
                            h = c[n[t * o + i] ? 1 : 0]
                        }
                        t[d++] = h.r, t[d++] = h.g, t[d++] = h.b, t[d] = h.a
                    }
            }
        },
        82965: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                WcmModal: function() {
                    return iJ
                },
                WcmQrCode: function() {
                    return rX
                }
            });
            /**
             * @license
             * Copyright 2019 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let i = window,
                o = i.ShadowRoot && (void 0 === i.ShadyCSS || i.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
                n = Symbol(),
                l = new WeakMap;
            class a {
                constructor(t, e, r) {
                    if (this._$cssResult$ = !0, r !== n) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                    this.cssText = t, this.t = e
                }
                get styleSheet() {
                    let t = this.o,
                        e = this.t;
                    if (o && void 0 === t) {
                        let r = void 0 !== e && 1 === e.length;
                        r && (t = l.get(e)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), r && l.set(e, t))
                    }
                    return t
                }
                toString() {
                    return this.cssText
                }
            }
            let s = t => new a("string" == typeof t ? t : t + "", void 0, n),
                c = (t, ...e) => {
                    let r = 1 === t.length ? t[0] : e.reduce((e, r, i) => e + (t => {
                        if (!0 === t._$cssResult$) return t.cssText;
                        if ("number" == typeof t) return t;
                        throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
                    })(r) + t[i + 1], t[0]);
                    return new a(r, t, n)
                },
                d = (t, e) => {
                    o ? t.adoptedStyleSheets = e.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : e.forEach(e => {
                        let r = document.createElement("style"),
                            o = i.litNonce;
                        void 0 !== o && r.setAttribute("nonce", o), r.textContent = e.cssText, t.appendChild(r)
                    })
                },
                h = o ? t => t : t => t instanceof CSSStyleSheet ? (t => {
                    let e = "";
                    for (let r of t.cssRules) e += r.cssText;
                    return s(e)
                })(t) : t,
                u = window,
                m = u.trustedTypes,
                p = m ? m.emptyScript : "",
                g = u.reactiveElementPolyfillSupport,
                f = {
                    toAttribute(t, e) {
                        switch (e) {
                            case Boolean:
                                t = t ? p : null;
                                break;
                            case Object:
                            case Array:
                                t = null == t ? t : JSON.stringify(t)
                        }
                        return t
                    },
                    fromAttribute(t, e) {
                        let r = t;
                        switch (e) {
                            case Boolean:
                                r = null !== t;
                                break;
                            case Number:
                                r = null === t ? null : Number(t);
                                break;
                            case Object:
                            case Array:
                                try {
                                    r = JSON.parse(t)
                                } catch (t) {
                                    r = null
                                }
                        }
                        return r
                    }
                },
                w = (t, e) => e !== t && (e == e || t == t),
                v = {
                    attribute: !0,
                    type: String,
                    converter: f,
                    reflect: !1,
                    hasChanged: w
                },
                b = "finalized";
            class y extends HTMLElement {
                constructor() {
                    super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu()
                }
                static addInitializer(t) {
                    var e;
                    this.finalize(), (null !== (e = this.h) && void 0 !== e ? e : this.h = []).push(t)
                }
                static get observedAttributes() {
                    this.finalize();
                    let t = [];
                    return this.elementProperties.forEach((e, r) => {
                        let i = this._$Ep(r, e);
                        void 0 !== i && (this._$Ev.set(i, r), t.push(i))
                    }), t
                }
                static createProperty(t, e = v) {
                    if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
                        let r = "symbol" == typeof t ? Symbol() : "__" + t,
                            i = this.getPropertyDescriptor(t, r, e);
                        void 0 !== i && Object.defineProperty(this.prototype, t, i)
                    }
                }
                static getPropertyDescriptor(t, e, r) {
                    return {
                        get() {
                            return this[e]
                        },
                        set(i) {
                            let o = this[t];
                            this[e] = i, this.requestUpdate(t, o, r)
                        },
                        configurable: !0,
                        enumerable: !0
                    }
                }
                static getPropertyOptions(t) {
                    return this.elementProperties.get(t) || v
                }
                static finalize() {
                    if (this.hasOwnProperty(b)) return !1;
                    this[b] = !0;
                    let t = Object.getPrototypeOf(this);
                    if (t.finalize(), void 0 !== t.h && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
                        let t = this.properties,
                            e = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
                        for (let r of e) this.createProperty(r, t[r])
                    }
                    return this.elementStyles = this.finalizeStyles(this.styles), !0
                }
                static finalizeStyles(t) {
                    let e = [];
                    if (Array.isArray(t)) {
                        let r = new Set(t.flat(1 / 0).reverse());
                        for (let t of r) e.unshift(h(t))
                    } else void 0 !== t && e.push(h(t));
                    return e
                }
                static _$Ep(t, e) {
                    let r = e.attribute;
                    return !1 === r ? void 0 : "string" == typeof r ? r : "string" == typeof t ? t.toLowerCase() : void 0
                }
                _$Eu() {
                    var t;
                    this._$E_ = new Promise(t => this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach(t => t(this))
                }
                addController(t) {
                    var e, r;
                    (null !== (e = this._$ES) && void 0 !== e ? e : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (r = t.hostConnected) || void 0 === r || r.call(t))
                }
                removeController(t) {
                    var e;
                    null === (e = this._$ES) || void 0 === e || e.splice(this._$ES.indexOf(t) >>> 0, 1)
                }
                _$Eg() {
                    this.constructor.elementProperties.forEach((t, e) => {
                        this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e])
                    })
                }
                createRenderRoot() {
                    var t;
                    let e = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
                    return d(e, this.constructor.elementStyles), e
                }
                connectedCallback() {
                    var t;
                    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach(t => {
                        var e;
                        return null === (e = t.hostConnected) || void 0 === e ? void 0 : e.call(t)
                    })
                }
                enableUpdating(t) {}
                disconnectedCallback() {
                    var t;
                    null === (t = this._$ES) || void 0 === t || t.forEach(t => {
                        var e;
                        return null === (e = t.hostDisconnected) || void 0 === e ? void 0 : e.call(t)
                    })
                }
                attributeChangedCallback(t, e, r) {
                    this._$AK(t, r)
                }
                _$EO(t, e, r = v) {
                    var i;
                    let o = this.constructor._$Ep(t, r);
                    if (void 0 !== o && !0 === r.reflect) {
                        let n = (void 0 !== (null === (i = r.converter) || void 0 === i ? void 0 : i.toAttribute) ? r.converter : f).toAttribute(e, r.type);
                        this._$El = t, null == n ? this.removeAttribute(o) : this.setAttribute(o, n), this._$El = null
                    }
                }
                _$AK(t, e) {
                    var r;
                    let i = this.constructor,
                        o = i._$Ev.get(t);
                    if (void 0 !== o && this._$El !== o) {
                        let t = i.getPropertyOptions(o),
                            n = "function" == typeof t.converter ? {
                                fromAttribute: t.converter
                            } : void 0 !== (null === (r = t.converter) || void 0 === r ? void 0 : r.fromAttribute) ? t.converter : f;
                        this._$El = o, this[o] = n.fromAttribute(e, t.type), this._$El = null
                    }
                }
                requestUpdate(t, e, r) {
                    let i = !0;
                    void 0 !== t && (((r = r || this.constructor.getPropertyOptions(t)).hasChanged || w)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), !0 === r.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, r))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej())
                }
                async _$Ej() {
                    this.isUpdatePending = !0;
                    try {
                        await this._$E_
                    } catch (t) {
                        Promise.reject(t)
                    }
                    let t = this.scheduleUpdate();
                    return null != t && await t, !this.isUpdatePending
                }
                scheduleUpdate() {
                    return this.performUpdate()
                }
                performUpdate() {
                    var t;
                    if (!this.isUpdatePending) return;
                    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, e) => this[e] = t), this._$Ei = void 0);
                    let e = !1,
                        r = this._$AL;
                    try {
                        (e = this.shouldUpdate(r)) ? (this.willUpdate(r), null === (t = this._$ES) || void 0 === t || t.forEach(t => {
                            var e;
                            return null === (e = t.hostUpdate) || void 0 === e ? void 0 : e.call(t)
                        }), this.update(r)) : this._$Ek()
                    } catch (t) {
                        throw e = !1, this._$Ek(), t
                    }
                    e && this._$AE(r)
                }
                willUpdate(t) {}
                _$AE(t) {
                    var e;
                    null === (e = this._$ES) || void 0 === e || e.forEach(t => {
                        var e;
                        return null === (e = t.hostUpdated) || void 0 === e ? void 0 : e.call(t)
                    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t)
                }
                _$Ek() {
                    this._$AL = new Map, this.isUpdatePending = !1
                }
                get updateComplete() {
                    return this.getUpdateComplete()
                }
                getUpdateComplete() {
                    return this._$E_
                }
                shouldUpdate(t) {
                    return !0
                }
                update(t) {
                    void 0 !== this._$EC && (this._$EC.forEach((t, e) => this._$EO(e, this[e], t)), this._$EC = void 0), this._$Ek()
                }
                updated(t) {}
                firstUpdated(t) {}
            }
            y[b] = !0, y.elementProperties = new Map, y.elementStyles = [], y.shadowRootOptions = {
                mode: "open"
            }, null == g || g({
                ReactiveElement: y
            }), (null !== (tv = u.reactiveElementVersions) && void 0 !== tv ? tv : u.reactiveElementVersions = []).push("1.6.3");
            let x = window,
                $ = x.trustedTypes,
                A = $ ? $.createPolicy("lit-html", {
                    createHTML: t => t
                }) : void 0,
                C = "$lit$",
                E = `lit$${(Math.random()+"").slice(9)}$`,
                _ = "?" + E,
                k = `<${_}>`,
                O = document,
                T = () => O.createComment(""),
                I = t => null === t || "object" != typeof t && "function" != typeof t,
                M = Array.isArray,
                P = t => M(t) || "function" == typeof(null == t ? void 0 : t[Symbol.iterator]),
                R = "[ 	\n\f\r]",
                N = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
                S = /-->/g,
                L = />/g,
                B = RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
                D = /'/g,
                j = /"/g,
                H = /^(?:script|style|textarea|title)$/i,
                U = t => (e, ...r) => ({
                    _$litType$: t,
                    strings: e,
                    values: r
                }),
                W = U(1),
                z = U(2),
                Z = Symbol.for("lit-noChange"),
                V = Symbol.for("lit-nothing"),
                F = new WeakMap,
                q = O.createTreeWalker(O, 129, null, !1);

            function K(t, e) {
                if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
                return void 0 !== A ? A.createHTML(e) : e
            }
            let Y = (t, e) => {
                let r = t.length - 1,
                    i = [],
                    o, n = 2 === e ? "<svg>" : "",
                    l = N;
                for (let e = 0; e < r; e++) {
                    let r = t[e],
                        a, s, c = -1,
                        d = 0;
                    for (; d < r.length && (l.lastIndex = d, null !== (s = l.exec(r)));) d = l.lastIndex, l === N ? "!--" === s[1] ? l = S : void 0 !== s[1] ? l = L : void 0 !== s[2] ? (H.test(s[2]) && (o = RegExp("</" + s[2], "g")), l = B) : void 0 !== s[3] && (l = B) : l === B ? ">" === s[0] ? (l = null != o ? o : N, c = -1) : void 0 === s[1] ? c = -2 : (c = l.lastIndex - s[2].length, a = s[1], l = void 0 === s[3] ? B : '"' === s[3] ? j : D) : l === j || l === D ? l = B : l === S || l === L ? l = N : (l = B, o = void 0);
                    let h = l === B && t[e + 1].startsWith("/>") ? " " : "";
                    n += l === N ? r + k : c >= 0 ? (i.push(a), r.slice(0, c) + C + r.slice(c) + E + h) : r + E + (-2 === c ? (i.push(void 0), e) : h)
                }
                return [K(t, n + (t[r] || "<?>") + (2 === e ? "</svg>" : "")), i]
            };
            class J {
                constructor({
                    strings: t,
                    _$litType$: e
                }, r) {
                    let i;
                    this.parts = [];
                    let o = 0,
                        n = 0,
                        l = t.length - 1,
                        a = this.parts,
                        [s, c] = Y(t, e);
                    if (this.el = J.createElement(s, r), q.currentNode = this.el.content, 2 === e) {
                        let t = this.el.content,
                            e = t.firstChild;
                        e.remove(), t.append(...e.childNodes)
                    }
                    for (; null !== (i = q.nextNode()) && a.length < l;) {
                        if (1 === i.nodeType) {
                            if (i.hasAttributes()) {
                                let t = [];
                                for (let e of i.getAttributeNames())
                                    if (e.endsWith(C) || e.startsWith(E)) {
                                        let r = c[n++];
                                        if (t.push(e), void 0 !== r) {
                                            let t = i.getAttribute(r.toLowerCase() + C).split(E),
                                                e = /([.?@])?(.*)/.exec(r);
                                            a.push({
                                                type: 1,
                                                index: o,
                                                name: e[2],
                                                strings: t,
                                                ctor: "." === e[1] ? te : "?" === e[1] ? ti : "@" === e[1] ? to : tt
                                            })
                                        } else a.push({
                                            type: 6,
                                            index: o
                                        })
                                    }
                                for (let e of t) i.removeAttribute(e)
                            }
                            if (H.test(i.tagName)) {
                                let t = i.textContent.split(E),
                                    e = t.length - 1;
                                if (e > 0) {
                                    i.textContent = $ ? $.emptyScript : "";
                                    for (let r = 0; r < e; r++) i.append(t[r], T()), q.nextNode(), a.push({
                                        type: 2,
                                        index: ++o
                                    });
                                    i.append(t[e], T())
                                }
                            }
                        } else if (8 === i.nodeType) {
                            if (i.data === _) a.push({
                                type: 2,
                                index: o
                            });
                            else {
                                let t = -1;
                                for (; - 1 !== (t = i.data.indexOf(E, t + 1));) a.push({
                                    type: 7,
                                    index: o
                                }), t += E.length - 1
                            }
                        }
                        o++
                    }
                }
                static createElement(t, e) {
                    let r = O.createElement("template");
                    return r.innerHTML = t, r
                }
            }

            function Q(t, e, r = t, i) {
                var o, n, l;
                if (e === Z) return e;
                let a = void 0 !== i ? null === (o = r._$Co) || void 0 === o ? void 0 : o[i] : r._$Cl,
                    s = I(e) ? void 0 : e._$litDirective$;
                return (null == a ? void 0 : a.constructor) !== s && (null === (n = null == a ? void 0 : a._$AO) || void 0 === n || n.call(a, !1), void 0 === s ? a = void 0 : (a = new s(t))._$AT(t, r, i), void 0 !== i ? (null !== (l = r._$Co) && void 0 !== l ? l : r._$Co = [])[i] = a : r._$Cl = a), void 0 !== a && (e = Q(t, a._$AS(t, e.values), a, i)), e
            }
            class G {
                constructor(t, e) {
                    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e
                }
                get parentNode() {
                    return this._$AM.parentNode
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                u(t) {
                    var e;
                    let {
                        el: {
                            content: r
                        },
                        parts: i
                    } = this._$AD, o = (null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e ? e : O).importNode(r, !0);
                    q.currentNode = o;
                    let n = q.nextNode(),
                        l = 0,
                        a = 0,
                        s = i[0];
                    for (; void 0 !== s;) {
                        if (l === s.index) {
                            let e;
                            2 === s.type ? e = new X(n, n.nextSibling, this, t) : 1 === s.type ? e = new s.ctor(n, s.name, s.strings, this, t) : 6 === s.type && (e = new tn(n, this, t)), this._$AV.push(e), s = i[++a]
                        }
                        l !== (null == s ? void 0 : s.index) && (n = q.nextNode(), l++)
                    }
                    return q.currentNode = O, o
                }
                v(t) {
                    let e = 0;
                    for (let r of this._$AV) void 0 !== r && (void 0 !== r.strings ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++
                }
            }
            class X {
                constructor(t, e, r, i) {
                    var o;
                    this.type = 2, this._$AH = V, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = i, this._$Cp = null === (o = null == i ? void 0 : i.isConnected) || void 0 === o || o
                }
                get _$AU() {
                    var t, e;
                    return null !== (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== e ? e : this._$Cp
                }
                get parentNode() {
                    let t = this._$AA.parentNode,
                        e = this._$AM;
                    return void 0 !== e && 11 === (null == t ? void 0 : t.nodeType) && (t = e.parentNode), t
                }
                get startNode() {
                    return this._$AA
                }
                get endNode() {
                    return this._$AB
                }
                _$AI(t, e = this) {
                    I(t = Q(this, t, e)) ? t === V || null == t || "" === t ? (this._$AH !== V && this._$AR(), this._$AH = V) : t !== this._$AH && t !== Z && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : P(t) ? this.T(t) : this._(t)
                }
                k(t) {
                    return this._$AA.parentNode.insertBefore(t, this._$AB)
                }
                $(t) {
                    this._$AH !== t && (this._$AR(), this._$AH = this.k(t))
                }
                _(t) {
                    this._$AH !== V && I(this._$AH) ? this._$AA.nextSibling.data = t : this.$(O.createTextNode(t)), this._$AH = t
                }
                g(t) {
                    var e;
                    let {
                        values: r,
                        _$litType$: i
                    } = t, o = "number" == typeof i ? this._$AC(t) : (void 0 === i.el && (i.el = J.createElement(K(i.h, i.h[0]), this.options)), i);
                    if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === o) this._$AH.v(r);
                    else {
                        let t = new G(o, this),
                            e = t.u(this.options);
                        t.v(r), this.$(e), this._$AH = t
                    }
                }
                _$AC(t) {
                    let e = F.get(t.strings);
                    return void 0 === e && F.set(t.strings, e = new J(t)), e
                }
                T(t) {
                    M(this._$AH) || (this._$AH = [], this._$AR());
                    let e = this._$AH,
                        r, i = 0;
                    for (let o of t) i === e.length ? e.push(r = new X(this.k(T()), this.k(T()), this, this.options)) : r = e[i], r._$AI(o), i++;
                    i < e.length && (this._$AR(r && r._$AB.nextSibling, i), e.length = i)
                }
                _$AR(t = this._$AA.nextSibling, e) {
                    var r;
                    for (null === (r = this._$AP) || void 0 === r || r.call(this, !1, !0, e); t && t !== this._$AB;) {
                        let e = t.nextSibling;
                        t.remove(), t = e
                    }
                }
                setConnected(t) {
                    var e;
                    void 0 === this._$AM && (this._$Cp = t, null === (e = this._$AP) || void 0 === e || e.call(this, t))
                }
            }
            class tt {
                constructor(t, e, r, i, o) {
                    this.type = 1, this._$AH = V, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = o, r.length > 2 || "" !== r[0] || "" !== r[1] ? (this._$AH = Array(r.length - 1).fill(new String), this.strings = r) : this._$AH = V
                }
                get tagName() {
                    return this.element.tagName
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AI(t, e = this, r, i) {
                    let o = this.strings,
                        n = !1;
                    if (void 0 === o)(n = !I(t = Q(this, t, e, 0)) || t !== this._$AH && t !== Z) && (this._$AH = t);
                    else {
                        let i, l;
                        let a = t;
                        for (t = o[0], i = 0; i < o.length - 1; i++)(l = Q(this, a[r + i], e, i)) === Z && (l = this._$AH[i]), n || (n = !I(l) || l !== this._$AH[i]), l === V ? t = V : t !== V && (t += (null != l ? l : "") + o[i + 1]), this._$AH[i] = l
                    }
                    n && !i && this.j(t)
                }
                j(t) {
                    t === V ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "")
                }
            }
            class te extends tt {
                constructor() {
                    super(...arguments), this.type = 3
                }
                j(t) {
                    this.element[this.name] = t === V ? void 0 : t
                }
            }
            let tr = $ ? $.emptyScript : "";
            class ti extends tt {
                constructor() {
                    super(...arguments), this.type = 4
                }
                j(t) {
                    t && t !== V ? this.element.setAttribute(this.name, tr) : this.element.removeAttribute(this.name)
                }
            }
            class to extends tt {
                constructor(t, e, r, i, o) {
                    super(t, e, r, i, o), this.type = 5
                }
                _$AI(t, e = this) {
                    var r;
                    if ((t = null !== (r = Q(this, t, e, 0)) && void 0 !== r ? r : V) === Z) return;
                    let i = this._$AH,
                        o = t === V && i !== V || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive,
                        n = t !== V && (i === V || o);
                    o && this.element.removeEventListener(this.name, this, i), n && this.element.addEventListener(this.name, this, t), this._$AH = t
                }
                handleEvent(t) {
                    var e, r;
                    "function" == typeof this._$AH ? this._$AH.call(null !== (r = null === (e = this.options) || void 0 === e ? void 0 : e.host) && void 0 !== r ? r : this.element, t) : this._$AH.handleEvent(t)
                }
            }
            class tn {
                constructor(t, e, r) {
                    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AI(t) {
                    Q(this, t)
                }
            }
            let tl = x.litHtmlPolyfillSupport;
            null == tl || tl(J, X), (null !== (tb = x.litHtmlVersions) && void 0 !== tb ? tb : x.litHtmlVersions = []).push("2.8.0");
            let ta = (t, e, r) => {
                var i, o;
                let n = null !== (i = null == r ? void 0 : r.renderBefore) && void 0 !== i ? i : e,
                    l = n._$litPart$;
                if (void 0 === l) {
                    let t = null !== (o = null == r ? void 0 : r.renderBefore) && void 0 !== o ? o : null;
                    n._$litPart$ = l = new X(e.insertBefore(T(), t), t, void 0, null != r ? r : {})
                }
                return l._$AI(t), l
            };
            class ts extends y {
                constructor() {
                    super(...arguments), this.renderOptions = {
                        host: this
                    }, this._$Do = void 0
                }
                createRenderRoot() {
                    var t, e;
                    let r = super.createRenderRoot();
                    return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = r.firstChild), r
                }
                update(t) {
                    let e = this.render();
                    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ta(e, this.renderRoot, this.renderOptions)
                }
                connectedCallback() {
                    var t;
                    super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0)
                }
                disconnectedCallback() {
                    var t;
                    super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1)
                }
                render() {
                    return Z
                }
            }
            ts.finalized = !0, ts._$litElement$ = !0, null === (ty = globalThis.litElementHydrateSupport) || void 0 === ty || ty.call(globalThis, {
                LitElement: ts
            });
            let tc = globalThis.litElementPolyfillSupport;
            null == tc || tc({
                LitElement: ts
            }), (null !== (tx = globalThis.litElementVersions) && void 0 !== tx ? tx : globalThis.litElementVersions = []).push("3.3.3");
            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let td = t => e => "function" == typeof e ? (customElements.define(t, e), e) : ((t, e) => {
                    let {
                        kind: r,
                        elements: i
                    } = e;
                    return {
                        kind: r,
                        elements: i,
                        finisher(e) {
                            customElements.define(t, e)
                        }
                    }
                })(t, e),
                th = (t, e) => "method" !== e.kind || !e.descriptor || "value" in e.descriptor ? {
                    kind: "field",
                    key: Symbol(),
                    placement: "own",
                    descriptor: {},
                    originalKey: e.key,
                    initializer() {
                        "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this))
                    },
                    finisher(r) {
                        r.createProperty(e.key, t)
                    }
                } : { ...e,
                    finisher(r) {
                        r.createProperty(e.key, t)
                    }
                },
                tu = (t, e, r) => {
                    e.constructor.createProperty(r, t)
                };

            function tm(t) {
                return (e, r) => void 0 !== r ? tu(t, e, r) : th(t, e)
            }
            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            function tp(t) {
                return tm({ ...t,
                    state: !0
                })
            }
            null != (null === (t$ = window.HTMLSlotElement) || void 0 === t$ ? void 0 : t$.prototype.assignedElements) || ((t, e) => t.assignedNodes(e).filter(t => t.nodeType === Node.ELEMENT_NODE));
            class tg {
                constructor(t) {}
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AT(t, e, r) {
                    this._$Ct = t, this._$AM = e, this._$Ci = r
                }
                _$AS(t, e) {
                    return this.update(t, e)
                }
                update(t, e) {
                    return this.render(...e)
                }
            }
            /**
             * @license
             * Copyright 2018 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let tf = (tw = class extends tg {
                constructor(t) {
                    var e;
                    if (super(t), 1 !== t.type || "class" !== t.name || (null === (e = t.strings) || void 0 === e ? void 0 : e.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
                }
                render(t) {
                    return " " + Object.keys(t).filter(e => t[e]).join(" ") + " "
                }
                update(t, [e]) {
                    var r, i;
                    if (void 0 === this.it) {
                        for (let i in this.it = new Set, void 0 !== t.strings && (this.nt = new Set(t.strings.join(" ").split(/\s/).filter(t => "" !== t))), e) !e[i] || (null === (r = this.nt) || void 0 === r ? void 0 : r.has(i)) || this.it.add(i);
                        return this.render(e)
                    }
                    let o = t.element.classList;
                    for (let t in this.it.forEach(t => {
                            t in e || (o.remove(t), this.it.delete(t))
                        }), e) {
                        let r = !!e[t];
                        r === this.it.has(t) || (null === (i = this.nt) || void 0 === i ? void 0 : i.has(t)) || (r ? (o.add(t), this.it.add(t)) : (o.remove(t), this.it.delete(t)))
                    }
                    return Z
                }
            }, (...t) => ({
                _$litDirective$: tw,
                values: t
            }));
            var tw, tv, tb, ty, tx, t$, tA = r(60718);
            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let tC = globalThis,
                tE = tC.trustedTypes,
                t_ = tE ? tE.createPolicy("lit-html", {
                    createHTML: t => t
                }) : void 0,
                tk = "$lit$",
                tO = `lit$${Math.random().toFixed(9).slice(2)}$`,
                tT = "?" + tO,
                tI = `<${tT}>`,
                tM = document,
                tP = () => tM.createComment(""),
                tR = t => null === t || "object" != typeof t && "function" != typeof t,
                tN = Array.isArray,
                tS = t => tN(t) || "function" == typeof t ? .[Symbol.iterator],
                tL = "[ 	\n\f\r]",
                tB = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
                tD = /-->/g,
                tj = />/g,
                tH = RegExp(`>|${tL}(?:([^\\s"'>=/]+)(${tL}*=${tL}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
                tU = /'/g,
                tW = /"/g,
                tz = /^(?:script|style|textarea|title)$/i,
                tZ = t => (e, ...r) => ({
                    _$litType$: t,
                    strings: e,
                    values: r
                }),
                tV = (tZ(1), tZ(2)),
                tF = (tZ(3), Symbol.for("lit-noChange")),
                tq = Symbol.for("lit-nothing"),
                tK = new WeakMap,
                tY = tM.createTreeWalker(tM, 129);

            function tJ(t, e) {
                if (!tN(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
                return void 0 !== t_ ? t_.createHTML(e) : e
            }
            let tQ = (t, e) => {
                let r = t.length - 1,
                    i = [],
                    o, n = 2 === e ? "<svg>" : 3 === e ? "<math>" : "",
                    l = tB;
                for (let e = 0; e < r; e++) {
                    let r = t[e],
                        a, s, c = -1,
                        d = 0;
                    for (; d < r.length && (l.lastIndex = d, null !== (s = l.exec(r)));) d = l.lastIndex, l === tB ? "!--" === s[1] ? l = tD : void 0 !== s[1] ? l = tj : void 0 !== s[2] ? (tz.test(s[2]) && (o = RegExp("</" + s[2], "g")), l = tH) : void 0 !== s[3] && (l = tH) : l === tH ? ">" === s[0] ? (l = o ? ? tB, c = -1) : void 0 === s[1] ? c = -2 : (c = l.lastIndex - s[2].length, a = s[1], l = void 0 === s[3] ? tH : '"' === s[3] ? tW : tU) : l === tW || l === tU ? l = tH : l === tD || l === tj ? l = tB : (l = tH, o = void 0);
                    let h = l === tH && t[e + 1].startsWith("/>") ? " " : "";
                    n += l === tB ? r + tI : c >= 0 ? (i.push(a), r.slice(0, c) + tk + r.slice(c) + tO + h) : r + tO + (-2 === c ? e : h)
                }
                return [tJ(t, n + (t[r] || "<?>") + (2 === e ? "</svg>" : 3 === e ? "</math>" : "")), i]
            };
            class tG {
                constructor({
                    strings: t,
                    _$litType$: e
                }, r) {
                    let i;
                    this.parts = [];
                    let o = 0,
                        n = 0,
                        l = t.length - 1,
                        a = this.parts,
                        [s, c] = tQ(t, e);
                    if (this.el = tG.createElement(s, r), tY.currentNode = this.el.content, 2 === e || 3 === e) {
                        let t = this.el.content.firstChild;
                        t.replaceWith(...t.childNodes)
                    }
                    for (; null !== (i = tY.nextNode()) && a.length < l;) {
                        if (1 === i.nodeType) {
                            if (i.hasAttributes())
                                for (let t of i.getAttributeNames())
                                    if (t.endsWith(tk)) {
                                        let e = c[n++],
                                            r = i.getAttribute(t).split(tO),
                                            l = /([.?@])?(.*)/.exec(e);
                                        a.push({
                                            type: 1,
                                            index: o,
                                            name: l[2],
                                            strings: r,
                                            ctor: "." === l[1] ? t5 : "?" === l[1] ? t4 : "@" === l[1] ? t3 : t2
                                        }), i.removeAttribute(t)
                                    } else t.startsWith(tO) && (a.push({
                                        type: 6,
                                        index: o
                                    }), i.removeAttribute(t));
                            if (tz.test(i.tagName)) {
                                let t = i.textContent.split(tO),
                                    e = t.length - 1;
                                if (e > 0) {
                                    i.textContent = tE ? tE.emptyScript : "";
                                    for (let r = 0; r < e; r++) i.append(t[r], tP()), tY.nextNode(), a.push({
                                        type: 2,
                                        index: ++o
                                    });
                                    i.append(t[e], tP())
                                }
                            }
                        } else if (8 === i.nodeType) {
                            if (i.data === tT) a.push({
                                type: 2,
                                index: o
                            });
                            else {
                                let t = -1;
                                for (; - 1 !== (t = i.data.indexOf(tO, t + 1));) a.push({
                                    type: 7,
                                    index: o
                                }), t += tO.length - 1
                            }
                        }
                        o++
                    }
                }
                static createElement(t, e) {
                    let r = tM.createElement("template");
                    return r.innerHTML = t, r
                }
            }

            function tX(t, e, r = t, i) {
                if (e === tF) return e;
                let o = void 0 !== i ? r._$Co ? .[i] : r._$Cl,
                    n = tR(e) ? void 0 : e._$litDirective$;
                return o ? .constructor !== n && (o ? ._$AO ? .(!1), void 0 === n ? o = void 0 : (o = new n(t))._$AT(t, r, i), void 0 !== i ? (r._$Co ? ? = [])[i] = o : r._$Cl = o), void 0 !== o && (e = tX(t, o._$AS(t, e.values), o, i)), e
            }
            class t0 {
                constructor(t, e) {
                    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e
                }
                get parentNode() {
                    return this._$AM.parentNode
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                u(t) {
                    let {
                        el: {
                            content: e
                        },
                        parts: r
                    } = this._$AD, i = (t ? .creationScope ? ? tM).importNode(e, !0);
                    tY.currentNode = i;
                    let o = tY.nextNode(),
                        n = 0,
                        l = 0,
                        a = r[0];
                    for (; void 0 !== a;) {
                        if (n === a.index) {
                            let e;
                            2 === a.type ? e = new t1(o, o.nextSibling, this, t) : 1 === a.type ? e = new a.ctor(o, a.name, a.strings, this, t) : 6 === a.type && (e = new t6(o, this, t)), this._$AV.push(e), a = r[++l]
                        }
                        n !== a ? .index && (o = tY.nextNode(), n++)
                    }
                    return tY.currentNode = tM, i
                }
                p(t) {
                    let e = 0;
                    for (let r of this._$AV) void 0 !== r && (void 0 !== r.strings ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++
                }
            }
            class t1 {
                get _$AU() {
                    return this._$AM ? ._$AU ? ? this._$Cv
                }
                constructor(t, e, r, i) {
                    this.type = 2, this._$AH = tq, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = i, this._$Cv = i ? .isConnected ? ? !0
                }
                get parentNode() {
                    let t = this._$AA.parentNode,
                        e = this._$AM;
                    return void 0 !== e && 11 === t ? .nodeType && (t = e.parentNode), t
                }
                get startNode() {
                    return this._$AA
                }
                get endNode() {
                    return this._$AB
                }
                _$AI(t, e = this) {
                    tR(t = tX(this, t, e)) ? t === tq || null == t || "" === t ? (this._$AH !== tq && this._$AR(), this._$AH = tq) : t !== this._$AH && t !== tF && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : tS(t) ? this.k(t) : this._(t)
                }
                O(t) {
                    return this._$AA.parentNode.insertBefore(t, this._$AB)
                }
                T(t) {
                    this._$AH !== t && (this._$AR(), this._$AH = this.O(t))
                }
                _(t) {
                    this._$AH !== tq && tR(this._$AH) ? this._$AA.nextSibling.data = t : this.T(tM.createTextNode(t)), this._$AH = t
                }
                $(t) {
                    let {
                        values: e,
                        _$litType$: r
                    } = t, i = "number" == typeof r ? this._$AC(t) : (void 0 === r.el && (r.el = tG.createElement(tJ(r.h, r.h[0]), this.options)), r);
                    if (this._$AH ? ._$AD === i) this._$AH.p(e);
                    else {
                        let t = new t0(i, this),
                            r = t.u(this.options);
                        t.p(e), this.T(r), this._$AH = t
                    }
                }
                _$AC(t) {
                    let e = tK.get(t.strings);
                    return void 0 === e && tK.set(t.strings, e = new tG(t)), e
                }
                k(t) {
                    tN(this._$AH) || (this._$AH = [], this._$AR());
                    let e = this._$AH,
                        r, i = 0;
                    for (let o of t) i === e.length ? e.push(r = new t1(this.O(tP()), this.O(tP()), this, this.options)) : r = e[i], r._$AI(o), i++;
                    i < e.length && (this._$AR(r && r._$AB.nextSibling, i), e.length = i)
                }
                _$AR(t = this._$AA.nextSibling, e) {
                    for (this._$AP ? .(!1, !0, e); t && t !== this._$AB;) {
                        let e = t.nextSibling;
                        t.remove(), t = e
                    }
                }
                setConnected(t) {
                    void 0 === this._$AM && (this._$Cv = t, this._$AP ? .(t))
                }
            }
            class t2 {
                get tagName() {
                    return this.element.tagName
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                constructor(t, e, r, i, o) {
                    this.type = 1, this._$AH = tq, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = o, r.length > 2 || "" !== r[0] || "" !== r[1] ? (this._$AH = Array(r.length - 1).fill(new String), this.strings = r) : this._$AH = tq
                }
                _$AI(t, e = this, r, i) {
                    let o = this.strings,
                        n = !1;
                    if (void 0 === o)(n = !tR(t = tX(this, t, e, 0)) || t !== this._$AH && t !== tF) && (this._$AH = t);
                    else {
                        let i, l;
                        let a = t;
                        for (t = o[0], i = 0; i < o.length - 1; i++)(l = tX(this, a[r + i], e, i)) === tF && (l = this._$AH[i]), n || = !tR(l) || l !== this._$AH[i], l === tq ? t = tq : t !== tq && (t += (l ? ? "") + o[i + 1]), this._$AH[i] = l
                    }
                    n && !i && this.j(t)
                }
                j(t) {
                    t === tq ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ? ? "")
                }
            }
            class t5 extends t2 {
                constructor() {
                    super(...arguments), this.type = 3
                }
                j(t) {
                    this.element[this.name] = t === tq ? void 0 : t
                }
            }
            class t4 extends t2 {
                constructor() {
                    super(...arguments), this.type = 4
                }
                j(t) {
                    this.element.toggleAttribute(this.name, !!t && t !== tq)
                }
            }
            class t3 extends t2 {
                constructor(t, e, r, i, o) {
                    super(t, e, r, i, o), this.type = 5
                }
                _$AI(t, e = this) {
                    if ((t = tX(this, t, e, 0) ? ? tq) === tF) return;
                    let r = this._$AH,
                        i = t === tq && r !== tq || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive,
                        o = t !== tq && (r === tq || i);
                    i && this.element.removeEventListener(this.name, this, r), o && this.element.addEventListener(this.name, this, t), this._$AH = t
                }
                handleEvent(t) {
                    "function" == typeof this._$AH ? this._$AH.call(this.options ? .host ? ? this.element, t) : this._$AH.handleEvent(t)
                }
            }
            class t6 {
                constructor(t, e, r) {
                    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AI(t) {
                    tX(this, t)
                }
            }
            let t7 = tC.litHtmlPolyfillSupport;
            t7 ? .(tG, t1), (tC.litHtmlVersions ? ? = []).push("3.2.1");
            let t8 = {
                    duration: .3,
                    delay: 0,
                    endDelay: 0,
                    repeat: 0,
                    easing: "ease"
                },
                t9 = {
                    ms: t => 1e3 * t,
                    s: t => t / 1e3
                },
                et = () => {},
                ee = t => t;

            function er(t, e = !0) {
                if (t && "finished" !== t.playState) try {
                    t.stop ? t.stop() : (e && t.commitStyles(), t.cancel())
                } catch (t) {}
            }
            let ei = t => t(),
                eo = (t, e, r = t8.duration) => new Proxy({
                    animations: t.map(ei).filter(Boolean),
                    duration: r,
                    options: e
                }, el),
                en = t => t.animations[0],
                el = {
                    get: (t, e) => {
                        let r = en(t);
                        switch (e) {
                            case "duration":
                                return t.duration;
                            case "currentTime":
                                return t9.s((null == r ? void 0 : r[e]) || 0);
                            case "playbackRate":
                            case "playState":
                                return null == r ? void 0 : r[e];
                            case "finished":
                                return t.finished || (t.finished = Promise.all(t.animations.map(ea)).catch(et)), t.finished;
                            case "stop":
                                return () => {
                                    t.animations.forEach(t => er(t))
                                };
                            case "forEachNative":
                                return e => {
                                    t.animations.forEach(r => e(r, t))
                                };
                            default:
                                return void 0 === (null == r ? void 0 : r[e]) ? void 0 : () => t.animations.forEach(t => t[e]())
                        }
                    },
                    set: (t, e, r) => {
                        switch (e) {
                            case "currentTime":
                                r = t9.ms(r);
                            case "playbackRate":
                                for (let i = 0; i < t.animations.length; i++) t.animations[i][e] = r;
                                return !0
                        }
                        return !1
                    }
                },
                ea = t => t.finished,
                es = t => "object" == typeof t && !!t.createAnimation,
                ec = t => "number" == typeof t,
                ed = t => Array.isArray(t) && !ec(t[0]),
                eh = (t, e, r) => -r * t + r * e + t,
                eu = (t, e, r) => e - t == 0 ? 1 : (r - t) / (e - t);

            function em(t, e) {
                let r = t[t.length - 1];
                for (let i = 1; i <= e; i++) {
                    let o = eu(0, e, i);
                    t.push(eh(r, 1, o))
                }
            }
            let ep = (t, e, r) => {
                    let i = e - t;
                    return ((r - t) % i + i) % i + t
                },
                eg = (t, e, r) => Math.min(Math.max(r, t), e),
                ef = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;

            function ew(t, e, r, i) {
                if (t === e && r === i) return ee;
                let o = e => (function(t, e, r, i, o) {
                    let n, l;
                    let a = 0;
                    do(n = ef(l = e + (r - e) / 2, i, o) - t) > 0 ? r = l : e = l; while (Math.abs(n) > 1e-7 && ++a < 12);
                    return l
                })(e, 0, 1, t, r);
                return t => 0 === t || 1 === t ? t : ef(o(t), e, i)
            }
            let ev = (t, e = "end") => r => {
                    r = "end" === e ? Math.min(r, .999) : Math.max(r, .001);
                    let i = r * t;
                    return eg(0, 1, ("end" === e ? Math.floor(i) : Math.ceil(i)) / t)
                },
                eb = t => "function" == typeof t,
                ey = t => Array.isArray(t) && ec(t[0]),
                ex = {
                    ease: ew(.25, .1, .25, 1),
                    "ease-in": ew(.42, 0, 1, 1),
                    "ease-in-out": ew(.42, 0, .58, 1),
                    "ease-out": ew(0, 0, .58, 1)
                },
                e$ = /\((.*?)\)/;

            function eA(t) {
                if (eb(t)) return t;
                if (ey(t)) return ew(...t);
                let e = ex[t];
                if (e) return e;
                if (t.startsWith("steps")) {
                    let e = e$.exec(t);
                    if (e) {
                        let t = e[1].split(",");
                        return ev(parseFloat(t[0]), t[1].trim())
                    }
                }
                return ee
            }
            class Animation {
                constructor(t, e = [0, 1], {
                    easing: r,
                    duration: i = t8.duration,
                    delay: o = t8.delay,
                    endDelay: n = t8.endDelay,
                    repeat: l = t8.repeat,
                    offset: a,
                    direction: s = "normal",
                    autoplay: c = !0
                } = {}) {
                    if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = ee, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((t, e) => {
                            this.resolve = t, this.reject = e
                        }), es(r = r || t8.easing)) {
                        let t = r.createAnimation(e);
                        r = t.easing, e = t.keyframes || e, i = t.duration || i
                    }
                    this.repeat = l, this.easing = ed(r) ? ee : eA(r), this.updateDuration(i);
                    let d = function(t, e = function(t) {
                        let e = [0];
                        return em(e, t - 1), e
                    }(t.length), r = ee) {
                        let i = t.length,
                            o = i - e.length;
                        return o > 0 && em(e, o), o => {
                            var n;
                            let l = 0;
                            for (; l < i - 2 && !(o < e[l + 1]); l++);
                            let a = eg(0, 1, eu(e[l], e[l + 1], o)),
                                s = (n = l, ed(r) ? r[ep(0, r.length, n)] : r);
                            return a = s(a), eh(t[l], t[l + 1], a)
                        }
                    }(e, a, ed(r) ? r.map(eA) : ee);
                    this.tick = e => {
                        var r;
                        let i = 0;
                        i = void 0 !== this.pauseTime ? this.pauseTime : (e - this.startTime) * this.rate, this.t = i, i /= 1e3, i = Math.max(i - o, 0), "finished" === this.playState && void 0 === this.pauseTime && (i = this.totalDuration);
                        let l = i / this.duration,
                            a = Math.floor(l),
                            c = l % 1;
                        !c && l >= 1 && (c = 1), 1 === c && a--;
                        let h = a % 2;
                        ("reverse" === s || "alternate" === s && h || "alternate-reverse" === s && !h) && (c = 1 - c);
                        let u = i >= this.totalDuration ? 1 : Math.min(c, 1),
                            m = d(this.easing(u));
                        t(m);
                        let p = void 0 === this.pauseTime && ("finished" === this.playState || i >= this.totalDuration + n);
                        p ? (this.playState = "finished", null === (r = this.resolve) || void 0 === r || r.call(this, m)) : "idle" !== this.playState && (this.frameRequestId = requestAnimationFrame(this.tick))
                    }, c && this.play()
                }
                play() {
                    let t = performance.now();
                    this.playState = "running", void 0 !== this.pauseTime ? this.startTime = t - this.pauseTime : this.startTime || (this.startTime = t), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick)
                }
                pause() {
                    this.playState = "paused", this.pauseTime = this.t
                }
                finish() {
                    this.playState = "finished", this.tick(0)
                }
                stop() {
                    var t;
                    this.playState = "idle", void 0 !== this.frameRequestId && cancelAnimationFrame(this.frameRequestId), null === (t = this.reject) || void 0 === t || t.call(this, !1)
                }
                cancel() {
                    this.stop(), this.tick(this.cancelTimestamp)
                }
                reverse() {
                    this.rate *= -1
                }
                commitStyles() {}
                updateDuration(t) {
                    this.duration = t, this.totalDuration = t * (this.repeat + 1)
                }
                get currentTime() {
                    return this.t
                }
                set currentTime(t) {
                    void 0 !== this.pauseTime || 0 === this.rate ? this.pauseTime = t : this.startTime = performance.now() - t / this.rate
                }
                get playbackRate() {
                    return this.rate
                }
                set playbackRate(t) {
                    this.rate = t
                }
            }
            var eC = function() {};
            class eE {
                setAnimation(t) {
                    this.animation = t, null == t || t.finished.then(() => this.clearAnimation()).catch(() => {})
                }
                clearAnimation() {
                    this.animation = this.generator = void 0
                }
            }
            let e_ = new WeakMap;

            function ek(t) {
                return e_.has(t) || e_.set(t, {
                    transforms: [],
                    values: new Map
                }), e_.get(t)
            }
            let eO = ["", "X", "Y", "Z"],
                eT = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ"
                },
                eI = {
                    syntax: "<angle>",
                    initialValue: "0deg",
                    toDefaultUnit: t => t + "deg"
                },
                eM = {
                    translate: {
                        syntax: "<length-percentage>",
                        initialValue: "0px",
                        toDefaultUnit: t => t + "px"
                    },
                    rotate: eI,
                    scale: {
                        syntax: "<number>",
                        initialValue: 1,
                        toDefaultUnit: ee
                    },
                    skew: eI
                },
                eP = new Map,
                eR = t => `--motion-${t}`,
                eN = ["x", "y", "z"];
            ["translate", "scale", "rotate", "skew"].forEach(t => {
                eO.forEach(e => {
                    eN.push(t + e), eP.set(eR(t + e), eM[t])
                })
            });
            let eS = (t, e) => eN.indexOf(t) - eN.indexOf(e),
                eL = new Set(eN),
                eB = t => eL.has(t),
                eD = (t, e) => {
                    var r;
                    eT[e] && (e = eT[e]);
                    let {
                        transforms: i
                    } = ek(t);
                    r = e, -1 === i.indexOf(r) && i.push(r), t.style.transform = ej(i)
                },
                ej = t => t.sort(eS).reduce(eH, "").trim(),
                eH = (t, e) => `${t} ${e}(var(${eR(e)}))`,
                eU = t => t.startsWith("--"),
                eW = new Set,
                ez = (t, e) => document.createElement("div").animate(t, e),
                eZ = {
                    cssRegisterProperty: () => "undefined" != typeof CSS && Object.hasOwnProperty.call(CSS, "registerProperty"),
                    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
                    partialKeyframes: () => {
                        try {
                            ez({
                                opacity: [1]
                            })
                        } catch (t) {
                            return !1
                        }
                        return !0
                    },
                    finished: () => !!ez({
                        opacity: [0, 1]
                    }, {
                        duration: .001
                    }).finished,
                    linearEasing: () => {
                        try {
                            ez({
                                opacity: 0
                            }, {
                                easing: "linear(0, 1)"
                            })
                        } catch (t) {
                            return !1
                        }
                        return !0
                    }
                },
                eV = {},
                eF = {};
            for (let t in eZ) eF[t] = () => (void 0 === eV[t] && (eV[t] = eZ[t]()), eV[t]);
            let eq = (t, e) => {
                    let r = "",
                        i = Math.round(e / .015);
                    for (let e = 0; e < i; e++) r += t(eu(0, i - 1, e)) + ", ";
                    return r.substring(0, r.length - 2)
                },
                eK = (t, e) => eb(t) ? eF.linearEasing() ? `linear(${eq(t,e)})` : t8.easing : ey(t) ? eY(t) : t,
                eY = ([t, e, r, i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`,
                eJ = t => Array.isArray(t) ? t : [t];

            function eQ(t) {
                return eT[t] && (t = eT[t]), eB(t) ? eR(t) : t
            }
            let eG = {
                    get: (t, e) => {
                        let r = eU(e = eQ(e)) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
                        if (!r && 0 !== r) {
                            let t = eP.get(e);
                            t && (r = t.initialValue)
                        }
                        return r
                    },
                    set: (t, e, r) => {
                        eU(e = eQ(e)) ? t.style.setProperty(e, r) : t.style[e] = r
                    }
                },
                eX = t => "string" == typeof t,
                e0 = (t, e) => t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t),
                e1 = function(t, e, r = {}) {
                    var i, o, n, l, a;
                    "string" == typeof(i = t) ? o ? (null !== (n = o[i]) && void 0 !== n || (o[i] = document.querySelectorAll(i)), i = o[i]) : i = document.querySelectorAll(i): i instanceof Element && (i = [i]), t = Array.from(i || []);
                    let s = t.length;
                    eC(!!s, "No valid element provided."), eC(!!e, "No keyframes defined.");
                    let c = [];
                    for (let i = 0; i < s; i++) {
                        let o = t[i];
                        for (let t in e) {
                            let n = e0(r, t);
                            n.delay = (l = n.delay, a = i, eb(l) ? l(a, s) : l);
                            let d = function(t, e, r, i = {}, o) {
                                var n;
                                let l;
                                let a = window.__MOTION_DEV_TOOLS_RECORD,
                                    s = !1 !== i.record && a,
                                    {
                                        duration: c = t8.duration,
                                        delay: d = t8.delay,
                                        endDelay: h = t8.endDelay,
                                        repeat: u = t8.repeat,
                                        easing: m = t8.easing,
                                        persist: p = !1,
                                        direction: g,
                                        offset: f,
                                        allowWebkitAcceleration: w = !1,
                                        autoplay: v = !0
                                    } = i,
                                    b = ek(t),
                                    y = eB(e),
                                    x = eF.waapi();
                                y && eD(t, e);
                                let $ = eQ(e),
                                    A = ((n = b.values).has($) || n.set($, new eE), n.get($)),
                                    C = eP.get($);
                                return er(A.animation, !(es(m) && A.generator) && !1 !== i.record), () => {
                                    let n = () => {
                                            var e, r;
                                            return null !== (r = null !== (e = eG.get(t, $)) && void 0 !== e ? e : null == C ? void 0 : C.initialValue) && void 0 !== r ? r : 0
                                        },
                                        b = function(t, e) {
                                            for (let r = 0; r < t.length; r++) null === t[r] && (t[r] = r ? t[r - 1] : e());
                                            return t
                                        }(eJ(r), n),
                                        E = function(t, e) {
                                            var r;
                                            let i = (null == e ? void 0 : e.toDefaultUnit) || ee,
                                                o = t[t.length - 1];
                                            if (eX(o)) {
                                                let t = (null === (r = o.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === r ? void 0 : r[2]) || "";
                                                t && (i = e => e + t)
                                            }
                                            return i
                                        }(b, C);
                                    if (es(m)) {
                                        let t = m.createAnimation(b, "opacity" !== e, n, $, A);
                                        m = t.easing, b = t.keyframes || b, c = t.duration || c
                                    }
                                    if (eU($) && (eF.cssRegisterProperty() ? function(t) {
                                            if (!eW.has(t)) {
                                                eW.add(t);
                                                try {
                                                    let {
                                                        syntax: e,
                                                        initialValue: r
                                                    } = eP.has(t) ? eP.get(t) : {};
                                                    CSS.registerProperty({
                                                        name: t,
                                                        inherits: !1,
                                                        syntax: e,
                                                        initialValue: r
                                                    })
                                                } catch (t) {}
                                            }
                                        }($) : x = !1), y && !eF.linearEasing() && (eb(m) || ed(m) && m.some(eb)) && (x = !1), x) {
                                        C && (b = b.map(t => ec(t) ? C.toDefaultUnit(t) : t)), 1 === b.length && (!eF.partialKeyframes() || s) && b.unshift(n());
                                        let e = {
                                            delay: t9.ms(d),
                                            duration: t9.ms(c),
                                            endDelay: t9.ms(h),
                                            easing: ed(m) ? void 0 : eK(m, c),
                                            direction: g,
                                            iterations: u + 1,
                                            fill: "both"
                                        };
                                        (l = t.animate({
                                            [$]: b,
                                            offset: f,
                                            easing: ed(m) ? m.map(t => eK(t, c)) : void 0
                                        }, e)).finished || (l.finished = new Promise((t, e) => {
                                            l.onfinish = t, l.oncancel = e
                                        }));
                                        let r = b[b.length - 1];
                                        l.finished.then(() => {
                                            p || (eG.set(t, $, r), l.cancel())
                                        }).catch(et), w || (l.playbackRate = 1.000001)
                                    } else if (o && y) 1 === (b = b.map(t => "string" == typeof t ? parseFloat(t) : t)).length && b.unshift(parseFloat(n())), l = new o(e => {
                                        eG.set(t, $, E ? E(e) : e)
                                    }, b, Object.assign(Object.assign({}, i), {
                                        duration: c,
                                        easing: m
                                    }));
                                    else {
                                        let e = b[b.length - 1];
                                        eG.set(t, $, C && ec(e) ? C.toDefaultUnit(e) : e)
                                    }
                                    return s && a(t, e, b, {
                                        duration: c,
                                        delay: d,
                                        easing: m,
                                        repeat: u,
                                        offset: f
                                    }, "motion-one"), A.setAnimation(l), l && !v && l.pause(), l
                                }
                            }(o, t, e[t], n, Animation);
                            c.push(d)
                        }
                    }
                    return eo(c, r, r.duration)
                };

            function e2(t, e = {}) {
                return eo([() => {
                    let r = new Animation(t, [0, 1], e);
                    return r.finished.catch(() => {}), r
                }], e, e.duration)
            }

            function e5(t, e, r) {
                let i = eb(t) ? e2 : e1;
                return i(t, e, r)
            }
            /**
             * @license
             * Copyright 2018 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let e4 = t => null != t ? t : V;
            var e3 = r(20102),
                e6 = Object.defineProperty,
                e7 = Object.getOwnPropertySymbols,
                e8 = Object.prototype.hasOwnProperty,
                e9 = Object.prototype.propertyIsEnumerable,
                rt = (t, e, r) => e in t ? e6(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                re = (t, e) => {
                    for (var r in e || (e = {})) e8.call(e, r) && rt(t, r, e[r]);
                    if (e7)
                        for (var r of e7(e)) e9.call(e, r) && rt(t, r, e[r]);
                    return t
                };

            function rr() {
                return {
                    "--wcm-accent-color": "#3396FF",
                    "--wcm-accent-fill-color": "#FFFFFF",
                    "--wcm-z-index": "89",
                    "--wcm-background-color": "#3396FF",
                    "--wcm-background-border-radius": "8px",
                    "--wcm-container-border-radius": "30px",
                    "--wcm-wallet-icon-border-radius": "15px",
                    "--wcm-wallet-icon-large-border-radius": "30px",
                    "--wcm-wallet-icon-small-border-radius": "7px",
                    "--wcm-input-border-radius": "28px",
                    "--wcm-button-border-radius": "10px",
                    "--wcm-notification-border-radius": "36px",
                    "--wcm-secondary-button-border-radius": "28px",
                    "--wcm-icon-button-border-radius": "50%",
                    "--wcm-button-hover-highlight-border-radius": "10px",
                    "--wcm-text-big-bold-size": "20px",
                    "--wcm-text-big-bold-weight": "600",
                    "--wcm-text-big-bold-line-height": "24px",
                    "--wcm-text-big-bold-letter-spacing": "-0.03em",
                    "--wcm-text-big-bold-text-transform": "none",
                    "--wcm-text-xsmall-bold-size": "10px",
                    "--wcm-text-xsmall-bold-weight": "700",
                    "--wcm-text-xsmall-bold-line-height": "12px",
                    "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
                    "--wcm-text-xsmall-bold-text-transform": "uppercase",
                    "--wcm-text-xsmall-regular-size": "12px",
                    "--wcm-text-xsmall-regular-weight": "600",
                    "--wcm-text-xsmall-regular-line-height": "14px",
                    "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
                    "--wcm-text-xsmall-regular-text-transform": "none",
                    "--wcm-text-small-thin-size": "14px",
                    "--wcm-text-small-thin-weight": "500",
                    "--wcm-text-small-thin-line-height": "16px",
                    "--wcm-text-small-thin-letter-spacing": "-0.03em",
                    "--wcm-text-small-thin-text-transform": "none",
                    "--wcm-text-small-regular-size": "14px",
                    "--wcm-text-small-regular-weight": "600",
                    "--wcm-text-small-regular-line-height": "16px",
                    "--wcm-text-small-regular-letter-spacing": "-0.03em",
                    "--wcm-text-small-regular-text-transform": "none",
                    "--wcm-text-medium-regular-size": "16px",
                    "--wcm-text-medium-regular-weight": "600",
                    "--wcm-text-medium-regular-line-height": "20px",
                    "--wcm-text-medium-regular-letter-spacing": "-0.03em",
                    "--wcm-text-medium-regular-text-transform": "none",
                    "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                    "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
                    "--wcm-success-color": "rgb(38,181,98)",
                    "--wcm-error-color": "rgb(242, 90, 103)",
                    "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
                    "--wcm-overlay-backdrop-filter": "none"
                }
            }
            let ri = {
                    getPreset: t => rr()[t],
                    setTheme() {
                        let t = document.querySelector(":root"),
                            {
                                themeVariables: e
                            } = tA.ThemeCtrl.state;
                        if (t) {
                            let r = re(re(re({}, function() {
                                var t;
                                let e = null != (t = tA.ThemeCtrl.state.themeMode) ? t : "dark",
                                    r = {
                                        light: {
                                            foreground: {
                                                1: "rgb(20,20,20)",
                                                2: "rgb(121,134,134)",
                                                3: "rgb(158,169,169)"
                                            },
                                            background: {
                                                1: "rgb(255,255,255)",
                                                2: "rgb(241,243,243)",
                                                3: "rgb(228,231,231)"
                                            },
                                            overlay: "rgba(0,0,0,0.1)"
                                        },
                                        dark: {
                                            foreground: {
                                                1: "rgb(228,231,231)",
                                                2: "rgb(148,158,158)",
                                                3: "rgb(110,119,119)"
                                            },
                                            background: {
                                                1: "rgb(20,20,20)",
                                                2: "rgb(39,42,42)",
                                                3: "rgb(59,64,64)"
                                            },
                                            overlay: "rgba(255,255,255,0.1)"
                                        }
                                    }[e];
                                return {
                                    "--wcm-color-fg-1": r.foreground[1],
                                    "--wcm-color-fg-2": r.foreground[2],
                                    "--wcm-color-fg-3": r.foreground[3],
                                    "--wcm-color-bg-1": r.background[1],
                                    "--wcm-color-bg-2": r.background[2],
                                    "--wcm-color-bg-3": r.background[3],
                                    "--wcm-color-overlay": r.overlay
                                }
                            }()), rr()), e);
                            Object.entries(r).forEach(([e, r]) => t.style.setProperty(e, r))
                        }
                    },
                    globalCss: c `*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`
                },
                ro = c `button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
            var rn = Object.defineProperty,
                rl = Object.getOwnPropertyDescriptor,
                ra = (t, e, r, i) => {
                    for (var o, n = i > 1 ? void 0 : i ? rl(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                    return i && n && rn(e, r, n), n
                };
            let rs = class extends ts {
                constructor() {
                    super(...arguments), this.disabled = !1, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = () => null, this.variant = "default"
                }
                render() {
                    let t = {
                            "wcm-icon-left": void 0 !== this.iconLeft,
                            "wcm-icon-right": void 0 !== this.iconRight,
                            "wcm-ghost": "ghost" === this.variant,
                            "wcm-outline": "outline" === this.variant
                        },
                        e = "inverse";
                    return "ghost" === this.variant && (e = "secondary"), "outline" === this.variant && (e = "accent"), W `<button class="${tf(t)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<wcm-text variant="small-regular" color="${e}"><slot></slot></wcm-text>${this.iconRight}</button>`
                }
            };
            rs.styles = [ri.globalCss, ro], ra([tm({
                type: Boolean
            })], rs.prototype, "disabled", 2), ra([tm()], rs.prototype, "iconLeft", 2), ra([tm()], rs.prototype, "iconRight", 2), ra([tm()], rs.prototype, "onClick", 2), ra([tm()], rs.prototype, "variant", 2), rs = ra([td("wcm-button")], rs);
            let rc = c `:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
            var rd = Object.defineProperty,
                rh = Object.getOwnPropertyDescriptor,
                ru = (t, e, r, i) => {
                    for (var o, n = i > 1 ? void 0 : i ? rh(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                    return i && n && rd(e, r, n), n
                };
            let rm = class extends ts {
                constructor() {
                    super(...arguments), this.disabled = !1, this.variant = "primary"
                }
                render() {
                    let t = {
                        "wcm-secondary": "secondary" === this.variant
                    };
                    return W `<button ?disabled="${this.disabled}" class="${tf(t)}"><slot></slot></button>`
                }
            };
            rm.styles = [ri.globalCss, rc], ru([tm({
                type: Boolean
            })], rm.prototype, "disabled", 2), ru([tm()], rm.prototype, "variant", 2), rm = ru([td("wcm-button-big")], rm);
            let rp = c `:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
            var rg = Object.defineProperty,
                rf = Object.getOwnPropertyDescriptor;
            let rw = class extends ts {
                render() {
                    return W `<div><slot></slot></div>`
                }
            };
            rw.styles = [ri.globalCss, rp], rw = ((t, e, r, i) => {
                for (var o, n = i > 1 ? void 0 : i ? rf(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                return i && n && rg(e, r, n), n
            })([td("wcm-info-footer")], rw);
            let rv = {
                    CROSS_ICON: tV `<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
                    WALLET_CONNECT_LOGO: tV `<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
                    WALLET_CONNECT_ICON: tV `<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
                    WALLET_CONNECT_ICON_COLORED: tV `<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
                    BACK_ICON: tV `<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
                    COPY_ICON: tV `<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
                    RETRY_ICON: tV `<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
                    DESKTOP_ICON: tV `<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
                    MOBILE_ICON: tV `<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
                    ARROW_DOWN_ICON: tV `<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
                    ARROW_UP_RIGHT_ICON: tV `<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
                    ARROW_RIGHT_ICON: tV `<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
                    QRCODE_ICON: tV `<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
                    SCAN_ICON: tV `<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
                    CHECKMARK_ICON: tV `<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
                    SEARCH_ICON: tV `<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
                    WALLET_PLACEHOLDER: tV `<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
                    GLOBE_ICON: tV `<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`
                },
                rb = c `.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
            var ry = Object.defineProperty,
                rx = Object.getOwnPropertyDescriptor;
            let r$ = class extends ts {
                render() {
                    return W `<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${rv.WALLET_CONNECT_LOGO} <button @click="${tA.jb.close}">${rv.CROSS_ICON}</button></div>`
                }
            };
            r$.styles = [ri.globalCss, rb], r$ = ((t, e, r, i) => {
                for (var o, n = i > 1 ? void 0 : i ? rx(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                return i && n && ry(e, r, n), n
            })([td("wcm-modal-backcard")], r$);
            let rA = c `main{padding:20px;padding-top:0;width:100%}`;
            var rC = Object.defineProperty,
                rE = Object.getOwnPropertyDescriptor;
            let r_ = class extends ts {
                render() {
                    return W `<main><slot></slot></main>`
                }
            };
            r_.styles = [ri.globalCss, rA], r_ = ((t, e, r, i) => {
                for (var o, n = i > 1 ? void 0 : i ? rE(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                return i && n && rC(e, r, n), n
            })([td("wcm-modal-content")], r_);
            let rk = c `footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
            var rO = Object.defineProperty,
                rT = Object.getOwnPropertyDescriptor;
            let rI = class extends ts {
                render() {
                    return W `<footer><slot></slot></footer>`
                }
            };
            rI.styles = [ri.globalCss, rk], rI = ((t, e, r, i) => {
                for (var o, n = i > 1 ? void 0 : i ? rT(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                return i && n && rO(e, r, n), n
            })([td("wcm-modal-footer")], rI);
            let rM = c `header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
            var rP = Object.defineProperty,
                rR = Object.getOwnPropertyDescriptor,
                rN = (t, e, r, i) => {
                    for (var o, n = i > 1 ? void 0 : i ? rR(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                    return i && n && rP(e, r, n), n
                };
            let rS = class extends ts {
                constructor() {
                    super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = !1
                }
                backBtnTemplate() {
                    return W `<button class="wcm-back-btn" @click="${tA.AV.goBack}">${rv.BACK_ICON}</button>`
                }
                actionBtnTemplate() {
                    return W `<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`
                }
                render() {
                    let t = {
                            "wcm-border": this.border
                        },
                        e = tA.AV.state.history.length > 1,
                        r = this.title ? W `<wcm-text variant="big-bold">${this.title}</wcm-text>` : W `<slot></slot>`;
                    return W `<header class="${tf(t)}">${e?this.backBtnTemplate():null} ${r} ${this.onAction?this.actionBtnTemplate():null}</header>`
                }
            };
            rS.styles = [ri.globalCss, rM], rN([tm()], rS.prototype, "title", 2), rN([tm()], rS.prototype, "onAction", 2), rN([tm()], rS.prototype, "actionIcon", 2), rN([tm({
                type: Boolean
            })], rS.prototype, "border", 2), rS = rN([td("wcm-modal-header")], rS);
            let rL = {
                    MOBILE_BREAKPOINT: 600,
                    WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
                    EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
                    getShadowRootElement(t, e) {
                        let r = t.renderRoot.querySelector(e);
                        if (!r) throw Error(`${e} not found`);
                        return r
                    },
                    getWalletIcon({
                        id: t,
                        image_id: e
                    }) {
                        let {
                            walletImages: r
                        } = tA.ConfigCtrl.state;
                        return (null == r ? void 0 : r[t]) ? r[t] : e ? tA.ExplorerCtrl.getWalletImageUrl(e) : ""
                    },
                    getWalletName: (t, e = !1) => e && t.length > 8 ? `${t.substring(0,8)}..` : t,
                    isMobileAnimation: () => window.innerWidth <= rL.MOBILE_BREAKPOINT,
                    async preloadImage(t) {
                        let e = new Promise((e, r) => {
                            let i = new Image;
                            i.onload = e, i.onerror = r, i.crossOrigin = "anonymous", i.src = t
                        });
                        return Promise.race([e, tA.zv.wait(3e3)])
                    },
                    getErrorMessage: t => t instanceof Error ? t.message : "Unknown Error",
                    debounce(t, e = 500) {
                        let r;
                        return (...i) => {
                            r && clearTimeout(r), r = setTimeout(function() {
                                t(...i)
                            }, e)
                        }
                    },
                    handleMobileLinking(t, e = "_self") {
                        let {
                            walletConnectUri: r
                        } = tA.OptionsCtrl.state, {
                            mobile: i,
                            name: o
                        } = t, n = null == i ? void 0 : i.native, l = null == i ? void 0 : i.universal;
                        rL.setRecentWallet(t), r && function(t) {
                            if (n) {
                                let r = tA.zv.formatNativeUrl(n, t, o);
                                tA.zv.openHref(r, e)
                            } else if (l) {
                                let r = tA.zv.formatUniversalUrl(l, t, o);
                                tA.zv.openHref(r, e)
                            }
                        }(r)
                    },
                    handleAndroidLinking() {
                        let {
                            walletConnectUri: t
                        } = tA.OptionsCtrl.state;
                        t && (tA.zv.setWalletConnectAndroidDeepLink(t), tA.zv.openHref(t, tA.zv.isTelegram() ? "_blank" : "_self"))
                    },
                    async handleUriCopy() {
                        let {
                            walletConnectUri: t
                        } = tA.OptionsCtrl.state;
                        if (t) try {
                            await navigator.clipboard.writeText(t), tA.ToastCtrl.openToast("Link copied", "success")
                        } catch (t) {
                            tA.ToastCtrl.openToast("Failed to copy", "error")
                        }
                    },
                    getCustomImageUrls() {
                        let {
                            walletImages: t
                        } = tA.ConfigCtrl.state, e = Object.values(null != t ? t : {});
                        return Object.values(e)
                    },
                    truncate: (t, e = 8) => t.length <= e ? t : `${t.substring(0,4)}...${t.substring(t.length-4)}`,
                    setRecentWallet(t) {
                        try {
                            localStorage.setItem(rL.WCM_RECENT_WALLET_DATA, JSON.stringify(t))
                        } catch (t) {
                            console.info("Unable to set recent wallet")
                        }
                    },
                    getRecentWallet() {
                        try {
                            let t = localStorage.getItem(rL.WCM_RECENT_WALLET_DATA);
                            if (t) {
                                let e = JSON.parse(t);
                                return e
                            }
                        } catch (t) {
                            console.info("Unable to get recent wallet")
                        }
                    },
                    caseSafeIncludes: (t, e) => t.toUpperCase().includes(e.toUpperCase()),
                    openWalletExplorerUrl() {
                        tA.zv.openHref(rL.EXPLORER_WALLET_URL, "_blank")
                    },
                    getCachedRouterWalletPlatforms() {
                        let {
                            desktop: t,
                            mobile: e
                        } = tA.zv.getWalletRouterData(), r = !!(null == t ? void 0 : t.native), i = !!(null == t ? void 0 : t.universal), o = !!(null == e ? void 0 : e.native) || !!(null == e ? void 0 : e.universal);
                        return {
                            isDesktop: r,
                            isMobile: o,
                            isWeb: i
                        }
                    },
                    goToConnectingView(t) {
                        tA.AV.setData({
                            Wallet: t
                        });
                        let e = tA.zv.isMobile(),
                            {
                                isDesktop: r,
                                isWeb: i,
                                isMobile: o
                            } = rL.getCachedRouterWalletPlatforms();
                        e ? o ? (tA.AV.push("MobileConnecting"), !tA.zv.isAndroid() && tA.zv.isTelegram() && this.handleMobileLinking(t, "_blank")) : i ? tA.AV.push("WebConnecting") : tA.AV.push("InstallWallet") : r ? tA.AV.push("DesktopConnecting") : i ? tA.AV.push("WebConnecting") : o ? tA.AV.push("MobileQrcodeConnecting") : tA.AV.push("InstallWallet")
                    }
                },
                rB = c `.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
            var rD = Object.defineProperty,
                rj = Object.getOwnPropertyDescriptor,
                rH = (t, e, r, i) => {
                    for (var o, n = i > 1 ? void 0 : i ? rj(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                    return i && n && rD(e, r, n), n
                };
            let rU = class extends ts {
                constructor() {
                    super(), this.view = tA.AV.state.view, this.prevView = tA.AV.state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = tA.AV.subscribe(t => {
                        this.view !== t.view && this.onChangeRoute()
                    })
                }
                firstUpdated() {
                    this.resizeObserver = new ResizeObserver(([t]) => {
                        let e = `${t.contentRect.height}px`;
                        "0px" !== this.oldHeight && e5(this.routerEl, {
                            height: [this.oldHeight, e]
                        }, {
                            duration: .2
                        }), this.oldHeight = e
                    }), this.resizeObserver.observe(this.contentEl)
                }
                disconnectedCallback() {
                    var t, e;
                    null == (t = this.unsubscribe) || t.call(this), null == (e = this.resizeObserver) || e.disconnect()
                }
                get routerEl() {
                    return rL.getShadowRootElement(this, ".wcm-router")
                }
                get contentEl() {
                    return rL.getShadowRootElement(this, ".wcm-content")
                }
                viewTemplate() {
                    switch (this.view) {
                        case "ConnectWallet":
                            return W `<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
                        case "DesktopConnecting":
                            return W `<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
                        case "MobileConnecting":
                            return W `<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
                        case "WebConnecting":
                            return W `<wcm-web-connecting-view></wcm-web-connecting-view>`;
                        case "MobileQrcodeConnecting":
                            return W `<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
                        case "WalletExplorer":
                            return W `<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
                        case "Qrcode":
                            return W `<wcm-qrcode-view></wcm-qrcode-view>`;
                        case "InstallWallet":
                            return W `<wcm-install-wallet-view></wcm-install-wallet-view>`;
                        default:
                            return W `<div>Not Found</div>`
                    }
                }
                async onChangeRoute() {
                    await e5(this.routerEl, {
                        opacity: [1, 0],
                        scale: [1, 1.02]
                    }, {
                        duration: .15,
                        delay: .1
                    }).finished, this.view = tA.AV.state.view, e5(this.routerEl, {
                        opacity: [0, 1],
                        scale: [.99, 1]
                    }, {
                        duration: .37,
                        delay: .05
                    })
                }
                render() {
                    return W `<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`
                }
            };
            rU.styles = [ri.globalCss, rB], rH([tp()], rU.prototype, "view", 2), rH([tp()], rU.prototype, "prevView", 2), rU = rH([td("wcm-modal-router")], rU);
            let rW = c `div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
            var rz = Object.defineProperty,
                rZ = Object.getOwnPropertyDescriptor,
                rV = (t, e, r, i) => {
                    for (var o, n = i > 1 ? void 0 : i ? rZ(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                    return i && n && rz(e, r, n), n
                };
            let rF = class extends ts {
                constructor() {
                    super(), this.open = !1, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = tA.ToastCtrl.subscribe(t => {
                        t.open ? (this.open = !0, this.timeout = setTimeout(() => tA.ToastCtrl.closeToast(), 2200)) : (this.open = !1, clearTimeout(this.timeout))
                    })
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unsubscribe) || t.call(this), clearTimeout(this.timeout), tA.ToastCtrl.closeToast()
                }
                render() {
                    let {
                        message: t,
                        variant: e
                    } = tA.ToastCtrl.state;
                    return this.open ? W `<div class="${tf({"wcm-success":"success"===e,"wcm-error":"error"===e})}">${"success"===e?rv.CHECKMARK_ICON:null} ${"error"===e?rv.CROSS_ICON:null}<wcm-text variant="small-regular">${t}</wcm-text></div>` : null
                }
            };

            function rq(t, e, r) {
                return t !== e && (t - e < 0 ? e - t : t - e) <= r + .1
            }
            rF.styles = [ri.globalCss, rW], rV([tp()], rF.prototype, "open", 2), rF = rV([td("wcm-modal-toast")], rF);
            let rK = {
                    generate(t, e, r) {
                        let i = "#141414",
                            o = [],
                            n = function(t, e) {
                                let r = Array.prototype.slice.call(e3.create(t, {
                                        errorCorrectionLevel: "Q"
                                    }).modules.data, 0),
                                    i = Math.sqrt(r.length);
                                return r.reduce((t, e, r) => (r % i == 0 ? t.push([e]) : t[t.length - 1].push(e)) && t, [])
                            }(t, 0),
                            l = e / n.length,
                            a = [{
                                x: 0,
                                y: 0
                            }, {
                                x: 1,
                                y: 0
                            }, {
                                x: 0,
                                y: 1
                            }];
                        a.forEach(({
                            x: t,
                            y: e
                        }) => {
                            let r = (n.length - 7) * l * t,
                                s = (n.length - 7) * l * e;
                            for (let t = 0; t < a.length; t += 1) {
                                let e = l * (7 - 2 * t);
                                o.push(z `<rect fill="${t%2==0?i:"#ffffff"}" height="${e}" rx="${.45*e}" ry="${.45*e}" width="${e}" x="${r+l*t}" y="${s+l*t}">`)
                            }
                        });
                        let s = Math.floor((r + 25) / l),
                            c = n.length / 2 - s / 2,
                            d = n.length / 2 + s / 2 - 1,
                            h = [];
                        n.forEach((t, e) => {
                            t.forEach((t, r) => {
                                !n[e][r] || e < 7 && r < 7 || e > n.length - 8 && r < 7 || e < 7 && r > n.length - 8 || e > c && e < d && r > c && r < d || h.push([e * l + l / 2, r * l + l / 2])
                            })
                        });
                        let u = {};
                        return h.forEach(([t, e]) => {
                            u[t] ? u[t].push(e) : u[t] = [e]
                        }), Object.entries(u).map(([t, e]) => {
                            let r = e.filter(t => e.every(e => !rq(t, e, l)));
                            return [Number(t), r]
                        }).forEach(([t, e]) => {
                            e.forEach(e => {
                                o.push(z `<circle cx="${t}" cy="${e}" fill="${i}" r="${l/2.5}">`)
                            })
                        }), Object.entries(u).filter(([t, e]) => e.length > 1).map(([t, e]) => {
                            let r = e.filter(t => e.some(e => rq(t, e, l)));
                            return [Number(t), r]
                        }).map(([t, e]) => {
                            e.sort((t, e) => t < e ? -1 : 1);
                            let r = [];
                            for (let t of e) {
                                let e = r.find(e => e.some(e => rq(t, e, l)));
                                e ? e.push(t) : r.push([t])
                            }
                            return [t, r.map(t => [t[0], t[t.length - 1]])]
                        }).forEach(([t, e]) => {
                            e.forEach(([e, r]) => {
                                o.push(z `<line x1="${t}" x2="${t}" y1="${e}" y2="${r}" stroke="${i}" stroke-width="${l/1.25}" stroke-linecap="round">`)
                            })
                        }), o
                    }
                },
                rY = c `@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
            var rJ = Object.defineProperty,
                rQ = Object.getOwnPropertyDescriptor,
                rG = (t, e, r, i) => {
                    for (var o, n = i > 1 ? void 0 : i ? rQ(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                    return i && n && rJ(e, r, n), n
                };
            let rX = class extends ts {
                constructor() {
                    super(...arguments), this.uri = "", this.size = 0, this.imageId = void 0, this.walletId = void 0, this.imageUrl = void 0
                }
                svgTemplate() {
                    let t = "light" === tA.ThemeCtrl.state.themeMode,
                        e = t ? this.size : this.size - 36;
                    return z `<svg height="${e}" width="${e}">${rK.generate(this.uri,e,e/4)}</svg>`
                }
                render() {
                    let t = {
                        "wcm-dark": "dark" === tA.ThemeCtrl.state.themeMode
                    };
                    return W `<div style="${`width: ${this.size}px`}" class="${tf(t)}">${this.walletId||this.imageUrl?W`<wcm-wallet-image walletId="${e4(this.walletId)}" imageId="${e4(this.imageId)}" imageUrl="${e4(this.imageUrl)}"></wcm-wallet-image>`:rv.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`
                }
            };
            rX.styles = [ri.globalCss, rY], rG([tm()], rX.prototype, "uri", 2), rG([tm({
                type: Number
            })], rX.prototype, "size", 2), rG([tm()], rX.prototype, "imageId", 2), rG([tm()], rX.prototype, "walletId", 2), rG([tm()], rX.prototype, "imageUrl", 2), rX = rG([td("wcm-qrcode")], rX);
            let r0 = c `:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
            var r1 = Object.defineProperty,
                r2 = Object.getOwnPropertyDescriptor,
                r5 = (t, e, r, i) => {
                    for (var o, n = i > 1 ? void 0 : i ? r2(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                    return i && n && r1(e, r, n), n
                };
            let r4 = class extends ts {
                constructor() {
                    super(...arguments), this.onChange = () => null
                }
                render() {
                    return W `<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${rv.SEARCH_ICON}`
                }
            };
            r4.styles = [ri.globalCss, r0], r5([tm()], r4.prototype, "onChange", 2), r4 = r5([td("wcm-search-input")], r4);
            let r3 = c `@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
            var r6 = Object.defineProperty,
                r7 = Object.getOwnPropertyDescriptor;
            let r8 = class extends ts {
                render() {
                    return W `<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`
                }
            };
            r8.styles = [ri.globalCss, r3], r8 = ((t, e, r, i) => {
                for (var o, n = i > 1 ? void 0 : i ? r7(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                return i && n && r6(e, r, n), n
            })([td("wcm-spinner")], r8);
            let r9 = c `span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
            var it = Object.defineProperty,
                ie = Object.getOwnPropertyDescriptor,
                ir = (t, e, r, i) => {
                    for (var o, n = i > 1 ? void 0 : i ? ie(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                    return i && n && it(e, r, n), n
                };
            let ii = class extends ts {
                constructor() {
                    super(...arguments), this.variant = "medium-regular", this.color = "primary"
                }
                render() {
                    let t = {
                        "wcm-big-bold": "big-bold" === this.variant,
                        "wcm-medium-regular": "medium-regular" === this.variant,
                        "wcm-small-regular": "small-regular" === this.variant,
                        "wcm-small-thin": "small-thin" === this.variant,
                        "wcm-xsmall-regular": "xsmall-regular" === this.variant,
                        "wcm-xsmall-bold": "xsmall-bold" === this.variant,
                        "wcm-color-primary": "primary" === this.color,
                        "wcm-color-secondary": "secondary" === this.color,
                        "wcm-color-tertiary": "tertiary" === this.color,
                        "wcm-color-inverse": "inverse" === this.color,
                        "wcm-color-accnt": "accent" === this.color,
                        "wcm-color-error": "error" === this.color
                    };
                    return W `<span><slot class="${tf(t)}"></slot></span>`
                }
            };
            ii.styles = [ri.globalCss, r9], ir([tm()], ii.prototype, "variant", 2), ir([tm()], ii.prototype, "color", 2), ii = ir([td("wcm-text")], ii);
            let io = c `button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
            var il = Object.defineProperty,
                ia = Object.getOwnPropertyDescriptor,
                is = (t, e, r, i) => {
                    for (var o, n = i > 1 ? void 0 : i ? ia(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                    return i && n && il(e, r, n), n
                };
            let ic = class extends ts {
                constructor() {
                    super(...arguments), this.onClick = () => null, this.name = "", this.walletId = "", this.label = void 0, this.imageId = void 0, this.installed = !1, this.recent = !1
                }
                sublabelTemplate() {
                    return this.recent ? W `<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>` : this.installed ? W `<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>` : null
                }
                handleClick() {
                    tA.uA.click({
                        name: "WALLET_BUTTON",
                        walletId: this.walletId
                    }), this.onClick()
                }
                render() {
                    var t;
                    return W `<button @click="${this.handleClick.bind(this)}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${e4(this.imageId)}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${null!=(t=this.label)?t:rL.getWalletName(this.name,!0)}</wcm-text>${this.sublabelTemplate()}</div></button>`
                }
            };
            ic.styles = [ri.globalCss, io], is([tm()], ic.prototype, "onClick", 2), is([tm()], ic.prototype, "name", 2), is([tm()], ic.prototype, "walletId", 2), is([tm()], ic.prototype, "label", 2), is([tm()], ic.prototype, "imageId", 2), is([tm({
                type: Boolean
            })], ic.prototype, "installed", 2), is([tm({
                type: Boolean
            })], ic.prototype, "recent", 2), ic = is([td("wcm-wallet-button")], ic);
            let id = c `:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
            var ih = Object.defineProperty,
                iu = Object.getOwnPropertyDescriptor,
                im = (t, e, r, i) => {
                    for (var o, n = i > 1 ? void 0 : i ? iu(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                    return i && n && ih(e, r, n), n
                };
            let ip = class extends ts {
                constructor() {
                    super(...arguments), this.walletId = "", this.imageId = void 0, this.imageUrl = void 0
                }
                render() {
                    var t;
                    let e = (null == (t = this.imageUrl) ? void 0 : t.length) ? this.imageUrl : rL.getWalletIcon({
                        id: this.walletId,
                        image_id: this.imageId
                    });
                    return W `${e.length?W`<div><img crossorigin="anonymous" src="${e}" alt="${this.id}"></div>`:rv.WALLET_PLACEHOLDER}`
                }
            };
            ip.styles = [ri.globalCss, id], im([tm()], ip.prototype, "walletId", 2), im([tm()], ip.prototype, "imageId", 2), im([tm()], ip.prototype, "imageUrl", 2), ip = im([td("wcm-wallet-image")], ip);
            var ig = Object.defineProperty,
                iw = Object.getOwnPropertyDescriptor,
                iv = (t, e, r, i) => {
                    for (var o, n = i > 1 ? void 0 : i ? iw(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                    return i && n && ig(e, r, n), n
                };
            let ib = class extends ts {
                constructor() {
                    super(), this.preload = !0, this.preloadData()
                }
                async loadImages(t) {
                    try {
                        (null == t ? void 0 : t.length) && await Promise.all(t.map(async t => rL.preloadImage(t)))
                    } catch (e) {
                        console.info("Unsuccessful attempt at preloading some images", t)
                    }
                }
                async preloadListings() {
                    if (tA.ConfigCtrl.state.enableExplorer) {
                        await tA.ExplorerCtrl.getRecomendedWallets(), tA.OptionsCtrl.setIsDataLoaded(!0);
                        let {
                            recomendedWallets: t
                        } = tA.ExplorerCtrl.state, e = t.map(t => rL.getWalletIcon(t));
                        await this.loadImages(e)
                    } else tA.OptionsCtrl.setIsDataLoaded(!0)
                }
                async preloadCustomImages() {
                    let t = rL.getCustomImageUrls();
                    await this.loadImages(t)
                }
                async preloadData() {
                    try {
                        this.preload && (this.preload = !1, await Promise.all([this.preloadListings(), this.preloadCustomImages()]))
                    } catch (t) {
                        console.error(t), tA.ToastCtrl.openToast("Failed preloading", "error")
                    }
                }
            };
            iv([tp()], ib.prototype, "preload", 2), ib = iv([td("wcm-explorer-context")], ib);
            var iy = Object.defineProperty,
                ix = Object.getOwnPropertyDescriptor;
            let i$ = class extends ts {
                constructor() {
                    super(), this.unsubscribeTheme = void 0, ri.setTheme(), this.unsubscribeTheme = tA.ThemeCtrl.subscribe(ri.setTheme)
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unsubscribeTheme) || t.call(this)
                }
            };
            i$ = ((t, e, r, i) => {
                for (var o, n = i > 1 ? void 0 : i ? ix(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                return i && n && iy(e, r, n), n
            })([td("wcm-theme-context")], i$);
            let iA = c `@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
            var iC = Object.defineProperty,
                iE = Object.getOwnPropertyDescriptor;
            let i_ = class extends ts {
                onGoToQrcode() {
                    tA.AV.push("Qrcode")
                }
                render() {
                    let {
                        recomendedWallets: t
                    } = tA.ExplorerCtrl.state, e = [...t, ...t], r = 2 * tA.zv.RECOMMENDED_WALLET_AMOUNT;
                    return W `<wcm-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${rv.QRCODE_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${rv.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[...Array(r)].map((t,r)=>{let i=e[r%e.length];return i?W`<wcm-wallet-image walletId="${i.id}" imageId="${i.image_id}"></wcm-wallet-image>`:rv.WALLET_PLACEHOLDER})}</div><wcm-button-big @click="${rL.handleAndroidLinking}"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`
                }
            };
            i_.styles = [ri.globalCss, iA], i_ = ((t, e, r, i) => {
                for (var o, n = i > 1 ? void 0 : i ? iE(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                return i && n && iC(e, r, n), n
            })([td("wcm-android-wallet-selection")], i_);
            let ik = c `@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
            var iO = Object.defineProperty,
                iT = Object.getOwnPropertyDescriptor,
                iI = (t, e, r, i) => {
                    for (var o, n = i > 1 ? void 0 : i ? iT(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                    return i && n && iO(e, r, n), n
                };
            let iM = class extends ts {
                constructor() {
                    super(...arguments), this.walletId = void 0, this.imageId = void 0, this.isError = !1, this.isStale = !1, this.label = ""
                }
                svgLoaderTemplate() {
                    var t, e;
                    let r = null != (e = null == (t = tA.ThemeCtrl.state.themeVariables) ? void 0 : t["--wcm-wallet-icon-large-border-radius"]) ? e : ri.getPreset("--wcm-wallet-icon-large-border-radius"),
                        i = 0;
                    i = (r.includes("%") ? .88 * parseInt(r, 10) : parseInt(r, 10)) * 1.17;
                    let o = 317 - 1.57 * i,
                        n = 425 - 1.8 * i;
                    return W `<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${i}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${o}" stroke-dashoffset="${n}"></use></svg>`
                }
                render() {
                    let t = {
                        "wcm-error": this.isError,
                        "wcm-stale": this.isStale
                    };
                    return W `<div class="${tf(t)}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${e4(this.walletId)}" imageId="${e4(this.imageId)}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${this.isError?"error":"primary"}">${this.isError?"Connection declined":this.label}</wcm-text>`
                }
            };
            iM.styles = [ri.globalCss, ik], iI([tm()], iM.prototype, "walletId", 2), iI([tm()], iM.prototype, "imageId", 2), iI([tm({
                type: Boolean
            })], iM.prototype, "isError", 2), iI([tm({
                type: Boolean
            })], iM.prototype, "isStale", 2), iI([tm()], iM.prototype, "label", 2), iM = iI([td("wcm-connector-waiting")], iM);
            let iP = {
                    manualWallets() {
                        var t, e;
                        let {
                            mobileWallets: r,
                            desktopWallets: i
                        } = tA.ConfigCtrl.state, o = null == (t = iP.recentWallet()) ? void 0 : t.id, n = tA.zv.isMobile() ? r : i, l = null == n ? void 0 : n.filter(t => o !== t.id);
                        return null != (e = tA.zv.isMobile() ? null == l ? void 0 : l.map(({
                            id: t,
                            name: e,
                            links: r
                        }) => ({
                            id: t,
                            name: e,
                            mobile: r,
                            links: r
                        })) : null == l ? void 0 : l.map(({
                            id: t,
                            name: e,
                            links: r
                        }) => ({
                            id: t,
                            name: e,
                            desktop: r,
                            links: r
                        }))) ? e : []
                    },
                    recentWallet: () => rL.getRecentWallet(),
                    recomendedWallets(t = !1) {
                        var e;
                        let r = t ? void 0 : null == (e = iP.recentWallet()) ? void 0 : e.id,
                            {
                                recomendedWallets: i
                            } = tA.ExplorerCtrl.state,
                            o = i.filter(t => r !== t.id);
                        return o
                    }
                },
                iR = {
                    onConnecting(t) {
                        rL.goToConnectingView(t)
                    },
                    manualWalletsTemplate() {
                        let t = iP.manualWallets();
                        return t.map(t => W `<wcm-wallet-button walletId="${t.id}" name="${t.name}" .onClick="${()=>this.onConnecting(t)}"></wcm-wallet-button>`)
                    },
                    recomendedWalletsTemplate(t = !1) {
                        let e = iP.recomendedWallets(t);
                        return e.map(t => W `<wcm-wallet-button name="${t.name}" walletId="${t.id}" imageId="${t.image_id}" .onClick="${()=>this.onConnecting(t)}"></wcm-wallet-button>`)
                    },
                    recentWalletTemplate() {
                        let t = iP.recentWallet();
                        if (t) return W `<wcm-wallet-button name="${t.name}" walletId="${t.id}" imageId="${e4(t.image_id)}" .recent="${!0}" .onClick="${()=>this.onConnecting(t)}"></wcm-wallet-button>`
                    }
                },
                iN = c `.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
            var iS = Object.defineProperty,
                iL = Object.getOwnPropertyDescriptor;
            let iB = class extends ts {
                render() {
                    let {
                        explorerExcludedWalletIds: t,
                        enableExplorer: e
                    } = tA.ConfigCtrl.state, r = iR.manualWalletsTemplate(), i = iR.recomendedWalletsTemplate(), o = iR.recentWalletTemplate(), n = [o, ...r, ...i];
                    n = n.filter(Boolean);
                    let l = n.length > 4 || "ALL" !== t && e,
                        a = [];
                    a = l ? n.slice(0, 3) : n;
                    let s = !!a.length;
                    return W `<wcm-modal-header .border="${!0}" title="Connect your wallet" .onAction="${rL.handleUriCopy}" .actionIcon="${rv.COPY_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${rv.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${rv.SCAN_ICON}<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${s?W`<wcm-modal-footer><div class="wcm-desktop-title">${rv.DESKTOP_ICON}<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${a} ${l?W`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`:null}</div></wcm-modal-footer>`:null}`
                }
            };
            iB.styles = [ri.globalCss, iN], iB = ((t, e, r, i) => {
                for (var o, n = i > 1 ? void 0 : i ? iL(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                return i && n && iS(e, r, n), n
            })([td("wcm-desktop-wallet-selection")], iB);
            let iD = c `div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
            var ij = Object.defineProperty,
                iH = Object.getOwnPropertyDescriptor;
            let iU = class extends ts {
                render() {
                    let {
                        termsOfServiceUrl: t,
                        privacyPolicyUrl: e
                    } = tA.ConfigCtrl.state;
                    return (null != t ? t : e) ? W `<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${t?W`<a href="${t}" target="_blank" rel="noopener noreferrer">Terms of Service</a>`:null} ${t&&e?"and":null} ${e?W`<a href="${e}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>`:null}</wcm-text></div>` : null
                }
            };
            iU.styles = [ri.globalCss, iD], iU = ((t, e, r, i) => {
                for (var o, n = i > 1 ? void 0 : i ? iH(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                return i && n && ij(e, r, n), n
            })([td("wcm-legal-notice")], iU);
            let iW = c `div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
            var iz = Object.defineProperty,
                iZ = Object.getOwnPropertyDescriptor;
            let iV = class extends ts {
                onQrcode() {
                    tA.AV.push("Qrcode")
                }
                render() {
                    let {
                        explorerExcludedWalletIds: t,
                        enableExplorer: e
                    } = tA.ConfigCtrl.state, r = iR.manualWalletsTemplate(), i = iR.recomendedWalletsTemplate(), o = iR.recentWalletTemplate(), n = [o, ...r, ...i];
                    n = n.filter(Boolean);
                    let l = n.length > 8 || "ALL" !== t && e,
                        a = [];
                    a = l ? n.slice(0, 7) : n;
                    let s = !!a.length;
                    return W `<wcm-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${rv.QRCODE_ICON}"></wcm-modal-header>${s?W`<wcm-modal-content><div>${a} ${l?W`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`:null}</div></wcm-modal-content>`:null}`
                }
            };
            iV.styles = [ri.globalCss, iW], iV = ((t, e, r, i) => {
                for (var o, n = i > 1 ? void 0 : i ? iZ(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                return i && n && iz(e, r, n), n
            })([td("wcm-mobile-wallet-selection")], iV);
            let iF = c `:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
            var iq = Object.defineProperty,
                iK = Object.getOwnPropertyDescriptor,
                iY = (t, e, r, i) => {
                    for (var o, n = i > 1 ? void 0 : i ? iK(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                    return i && n && iq(e, r, n), n
                };
            let iJ = class extends ts {
                constructor() {
                    super(), this.open = !1, this.active = !1, this.unsubscribeModal = void 0, this.abortController = void 0, this.unsubscribeModal = tA.jb.subscribe(t => {
                        t.open ? this.onOpenModalEvent() : this.onCloseModalEvent()
                    })
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.unsubscribeModal) || t.call(this)
                }
                get overlayEl() {
                    return rL.getShadowRootElement(this, ".wcm-overlay")
                }
                get containerEl() {
                    return rL.getShadowRootElement(this, ".wcm-container")
                }
                toggleBodyScroll(t) {
                    let e = document.querySelector("body");
                    if (e) {
                        if (t) {
                            let t = document.getElementById("wcm-styles");
                            null == t || t.remove()
                        } else document.head.insertAdjacentHTML("beforeend", '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>')
                    }
                }
                onCloseModal(t) {
                    t.target === t.currentTarget && tA.jb.close()
                }
                onOpenModalEvent() {
                    this.toggleBodyScroll(!1), this.addKeyboardEvents(), this.open = !0, setTimeout(async () => {
                        let t = rL.isMobileAnimation() ? {
                            y: ["50vh", "0vh"]
                        } : {
                            scale: [.98, 1]
                        };
                        await Promise.all([e5(this.overlayEl, {
                            opacity: [0, 1]
                        }, {
                            delay: .1,
                            duration: .2
                        }).finished, e5(this.containerEl, t, {
                            delay: .1,
                            duration: .2
                        }).finished]), this.active = !0
                    }, 0)
                }
                async onCloseModalEvent() {
                    this.toggleBodyScroll(!0), this.removeKeyboardEvents();
                    let t = rL.isMobileAnimation() ? {
                        y: ["0vh", "50vh"]
                    } : {
                        scale: [1, .98]
                    };
                    await Promise.all([e5(this.overlayEl, {
                        opacity: [1, 0]
                    }, {
                        duration: .2
                    }).finished, e5(this.containerEl, t, {
                        duration: .2
                    }).finished]), this.containerEl.removeAttribute("style"), this.active = !1, this.open = !1
                }
                addKeyboardEvents() {
                    this.abortController = new AbortController, window.addEventListener("keydown", t => {
                        var e;
                        "Escape" === t.key ? tA.jb.close() : "Tab" !== t.key || (null == (e = t.target) ? void 0 : e.tagName.includes("wcm-")) || this.containerEl.focus()
                    }, this.abortController), this.containerEl.focus()
                }
                removeKeyboardEvents() {
                    var t;
                    null == (t = this.abortController) || t.abort(), this.abortController = void 0
                }
                render() {
                    let t = {
                        "wcm-overlay": !0,
                        "wcm-active": this.active
                    };
                    return W `<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${tf(t)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${this.open?W`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>`:null}</div></div>`
                }
            };
            iJ.styles = [ri.globalCss, iF], iY([tp()], iJ.prototype, "open", 2), iY([tp()], iJ.prototype, "active", 2), iJ = iY([td("wcm-modal")], iJ);
            let iQ = c `div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
            var iG = Object.defineProperty,
                iX = Object.getOwnPropertyDescriptor,
                i0 = (t, e, r, i) => {
                    for (var o, n = i > 1 ? void 0 : i ? iX(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                    return i && n && iG(e, r, n), n
                };
            let i1 = class extends ts {
                constructor() {
                    super(...arguments), this.isMobile = !1, this.isDesktop = !1, this.isWeb = !1, this.isRetry = !1
                }
                onMobile() {
                    let t = tA.zv.isMobile();
                    t ? tA.AV.replace("MobileConnecting") : tA.AV.replace("MobileQrcodeConnecting")
                }
                onDesktop() {
                    tA.AV.replace("DesktopConnecting")
                }
                onWeb() {
                    tA.AV.replace("WebConnecting")
                }
                render() {
                    return W `<div>${this.isRetry?W`<slot></slot>`:null} ${this.isMobile?W`<wcm-button .onClick="${this.onMobile}" .iconLeft="${rv.MOBILE_ICON}" variant="outline">Mobile</wcm-button>`:null} ${this.isDesktop?W`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${rv.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>`:null} ${this.isWeb?W`<wcm-button .onClick="${this.onWeb}" .iconLeft="${rv.GLOBE_ICON}" variant="outline">Web</wcm-button>`:null}</div>`
                }
            };
            i1.styles = [ri.globalCss, iQ], i0([tm({
                type: Boolean
            })], i1.prototype, "isMobile", 2), i0([tm({
                type: Boolean
            })], i1.prototype, "isDesktop", 2), i0([tm({
                type: Boolean
            })], i1.prototype, "isWeb", 2), i0([tm({
                type: Boolean
            })], i1.prototype, "isRetry", 2), i1 = i0([td("wcm-platform-selection")], i1);
            let i2 = c `button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
            var i5 = Object.defineProperty,
                i4 = Object.getOwnPropertyDescriptor;
            let i3 = class extends ts {
                onClick() {
                    tA.AV.push("WalletExplorer")
                }
                render() {
                    let {
                        recomendedWallets: t
                    } = tA.ExplorerCtrl.state, e = iP.manualWallets(), r = [...t, ...e].reverse().slice(0, 4);
                    return W `<button @click="${this.onClick}"><div class="wcm-icons">${r.map(t=>{let e=rL.getWalletIcon(t);if(e)return W`<img crossorigin="anonymous" src="${e}">`;let r=rL.getWalletIcon({id:t.id});return r?W` < img crossorigin = "anonymous"
                    src = "${r}" > `:rv.WALLET_PLACEHOLDER})} ${[...Array(4-r.length)].map(()=>rv.WALLET_PLACEHOLDER)}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`
                }
            };
            i3.styles = [ri.globalCss, i2], i3 = ((t, e, r, i) => {
                for (var o, n = i > 1 ? void 0 : i ? i4(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                return i && n && i5(e, r, n), n
            })([td("wcm-view-all-wallets-button")], i3);
            let i6 = c `.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
            var i7 = Object.defineProperty,
                i8 = Object.getOwnPropertyDescriptor,
                i9 = (t, e, r, i) => {
                    for (var o, n = i > 1 ? void 0 : i ? i8(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                    return i && n && i7(e, r, n), n
                };
            let ot = class extends ts {
                constructor() {
                    super(), this.walletId = "", this.imageId = "", this.uri = "", setTimeout(() => {
                        let {
                            walletConnectUri: t
                        } = tA.OptionsCtrl.state;
                        this.uri = t
                    }, 0)
                }
                get overlayEl() {
                    return rL.getShadowRootElement(this, ".wcm-qr-container")
                }
                render() {
                    return W `<div class="wcm-qr-container">${this.uri?W`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${e4(this.walletId)}" imageId="${e4(this.imageId)}"></wcm-qrcode>`:W`<wcm-spinner></wcm-spinner>`}</div>`
                }
            };
            ot.styles = [ri.globalCss, i6], i9([tm()], ot.prototype, "walletId", 2), i9([tm()], ot.prototype, "imageId", 2), i9([tp()], ot.prototype, "uri", 2), ot = i9([td("wcm-walletconnect-qr")], ot);
            var oe = Object.defineProperty,
                or = Object.getOwnPropertyDescriptor;
            let oi = class extends ts {
                viewTemplate() {
                    return tA.zv.isAndroid() && !tA.zv.isTelegram() ? W `<wcm-android-wallet-selection></wcm-android-wallet-selection>` : tA.zv.isMobile() ? W `<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>` : W `<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`
                }
                render() {
                    return W `${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`
                }
            };
            oi.styles = [ri.globalCss], oi = ((t, e, r, i) => {
                for (var o, n = i > 1 ? void 0 : i ? or(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                return i && n && oe(e, r, n), n
            })([td("wcm-connect-wallet-view")], oi);
            let oo = c `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
            var on = Object.defineProperty,
                ol = Object.getOwnPropertyDescriptor,
                oa = (t, e, r, i) => {
                    for (var o, n = i > 1 ? void 0 : i ? ol(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                    return i && n && on(e, r, n), n
                };
            let os = class extends ts {
                constructor() {
                    super(), this.isError = !1, this.openDesktopApp()
                }
                onFormatAndRedirect(t) {
                    let {
                        desktop: e,
                        name: r
                    } = tA.zv.getWalletRouterData(), i = null == e ? void 0 : e.native, o = null == e ? void 0 : e.universal;
                    if (i) {
                        let e = tA.zv.formatNativeUrl(i, t, r);
                        tA.zv.openHref(e, "_self")
                    } else if (o) {
                        let e = tA.zv.formatUniversalUrl(o, t, r);
                        tA.zv.openHref(e, "_blank")
                    }
                }
                openDesktopApp() {
                    let {
                        walletConnectUri: t
                    } = tA.OptionsCtrl.state, e = tA.zv.getWalletRouterData();
                    rL.setRecentWallet(e), t && this.onFormatAndRedirect(t)
                }
                render() {
                    let {
                        name: t,
                        id: e,
                        image_id: r
                    } = tA.zv.getWalletRouterData(), {
                        isMobile: i,
                        isWeb: o
                    } = rL.getCachedRouterWalletPlatforms();
                    return W `<wcm-modal-header title="${t}" .onAction="${rL.handleUriCopy}" .actionIcon="${rv.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${e4(r)}" label="${`Continue in ${t}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${t} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${i}" .isWeb="${o}" .isRetry="${!0}"><wcm-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${rv.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`
                }
            };
            os.styles = [ri.globalCss, oo], oa([tp()], os.prototype, "isError", 2), os = oa([td("wcm-desktop-connecting-view")], os);
            let oc = c `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
            var od = Object.defineProperty,
                oh = Object.getOwnPropertyDescriptor;
            let ou = class extends ts {
                onInstall(t) {
                    t && tA.zv.openHref(t, "_blank")
                }
                render() {
                    let {
                        name: t,
                        id: e,
                        image_id: r,
                        homepage: i
                    } = tA.zv.getWalletRouterData();
                    return W `<wcm-modal-header title="${t}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${e4(r)}" label="Not Detected" .isStale="${!0}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${t} to continue. If multiple browser extensions are installed, disable non ${t} ones and try again`}</wcm-text><wcm-button .onClick="${()=>this.onInstall(i)}" .iconLeft="${rv.ARROW_DOWN_ICON}">Download</wcm-button></wcm-info-footer>`
                }
            };
            ou.styles = [ri.globalCss, oc], ou = ((t, e, r, i) => {
                for (var o, n = i > 1 ? void 0 : i ? oh(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                return i && n && od(e, r, n), n
            })([td("wcm-install-wallet-view")], ou);
            let om = c `wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
            var op = Object.defineProperty,
                og = Object.getOwnPropertyDescriptor,
                of = (t, e, r, i) => {
                    for (var o, n = i > 1 ? void 0 : i ? og(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                    return i && n && op(e, r, n), n
                };
            let ow = class extends ts {
                constructor() {
                    super(), this.isError = !1, this.openMobileApp()
                }
                onFormatAndRedirect(t, e = !1) {
                    let {
                        mobile: r,
                        name: i
                    } = tA.zv.getWalletRouterData(), o = null == r ? void 0 : r.native, n = null == r ? void 0 : r.universal, l = tA.zv.isTelegram() ? "_blank" : "_self";
                    if (t = tA.zv.isTelegram() && tA.zv.isAndroid() ? encodeURIComponent(t) : t, o && !e) {
                        let e = tA.zv.formatNativeUrl(o, t, i);
                        tA.zv.openHref(e, l)
                    } else if (n) {
                        let e = tA.zv.formatUniversalUrl(n, t, i);
                        tA.zv.openHref(e, l)
                    }
                }
                openMobileApp(t = !1) {
                    let {
                        walletConnectUri: e
                    } = tA.OptionsCtrl.state, r = tA.zv.getWalletRouterData();
                    e && this.onFormatAndRedirect(e, t), rL.setRecentWallet(r)
                }
                onGoToAppStore(t) {
                    t && tA.zv.openHref(t, "_blank")
                }
                render() {
                    let {
                        name: t,
                        id: e,
                        image_id: r,
                        app: i,
                        mobile: o
                    } = tA.zv.getWalletRouterData(), {
                        isWeb: n
                    } = rL.getCachedRouterWalletPlatforms(), l = null == i ? void 0 : i.ios, a = null == o ? void 0 : o.universal;
                    return W `<wcm-modal-header title="${t}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${e4(r)}" label="Tap 'Open' to continue…" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${n}" .isRetry="${!0}"><wcm-button .onClick="${()=>this.openMobileApp(!1)}" .iconRight="${rv.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection>${a?W`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${()=>this.openMobileApp(!0)}">Try this alternate link</span></wcm-text>`:null}</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${e}" imageId="${e4(r)}"></wcm-wallet-image><wcm-text>${`Get ${t}`}</wcm-text></div><wcm-button .iconRight="${rv.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGoToAppStore(l)}" variant="ghost">App Store</wcm-button></wcm-info-footer>`
                }
            };
            ow.styles = [ri.globalCss, om], of ([tp()], ow.prototype, "isError", 2), ow = of ([td("wcm-mobile-connecting-view")], ow);
            let ov = c `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
            var ob = Object.defineProperty,
                oy = Object.getOwnPropertyDescriptor;
            let ox = class extends ts {
                render() {
                    let {
                        name: t,
                        id: e,
                        image_id: r
                    } = tA.zv.getWalletRouterData(), {
                        isDesktop: i,
                        isWeb: o
                    } = rL.getCachedRouterWalletPlatforms();
                    return W `<wcm-modal-header title="${t}" .onAction="${rL.handleUriCopy}" .actionIcon="${rv.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${e}" imageId="${e4(r)}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${t} app`}</wcm-text><wcm-platform-selection .isDesktop="${i}" .isWeb="${o}"></wcm-platform-selection></wcm-info-footer>`
                }
            };
            ox.styles = [ri.globalCss, ov], ox = ((t, e, r, i) => {
                for (var o, n = i > 1 ? void 0 : i ? oy(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                return i && n && ob(e, r, n), n
            })([td("wcm-mobile-qr-connecting-view")], ox);
            var o$ = Object.defineProperty,
                oA = Object.getOwnPropertyDescriptor;
            let oC = class extends ts {
                render() {
                    return W `<wcm-modal-header title="Scan the code" .onAction="${rL.handleUriCopy}" .actionIcon="${rv.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`
                }
            };
            oC.styles = [ri.globalCss], oC = ((t, e, r, i) => {
                for (var o, n = i > 1 ? void 0 : i ? oA(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                return i && n && o$(e, r, n), n
            })([td("wcm-qrcode-view")], oC);
            let oE = c `wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
            var o_ = Object.defineProperty,
                ok = Object.getOwnPropertyDescriptor,
                oO = (t, e, r, i) => {
                    for (var o, n = i > 1 ? void 0 : i ? ok(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                    return i && n && o_(e, r, n), n
                };
            let oT = class extends ts {
                constructor() {
                    super(...arguments), this.loading = !tA.ExplorerCtrl.state.wallets.listings.length, this.firstFetch = !tA.ExplorerCtrl.state.wallets.listings.length, this.search = "", this.endReached = !1, this.intersectionObserver = void 0, this.searchDebounce = rL.debounce(t => {
                        t.length >= 1 ? (this.firstFetch = !0, this.endReached = !1, this.search = t, tA.ExplorerCtrl.resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), tA.ExplorerCtrl.resetSearch())
                    })
                }
                firstUpdated() {
                    this.createPaginationObserver()
                }
                disconnectedCallback() {
                    var t;
                    null == (t = this.intersectionObserver) || t.disconnect()
                }
                get placeholderEl() {
                    return rL.getShadowRootElement(this, ".wcm-placeholder-block")
                }
                createPaginationObserver() {
                    this.intersectionObserver = new IntersectionObserver(([t]) => {
                        t.isIntersecting && !(this.search && this.firstFetch) && this.fetchWallets()
                    }), this.intersectionObserver.observe(this.placeholderEl)
                }
                isLastPage() {
                    let {
                        wallets: t,
                        search: e
                    } = tA.ExplorerCtrl.state, {
                        listings: r,
                        total: i
                    } = this.search ? e : t;
                    return i <= 40 || r.length >= i
                }
                async fetchWallets() {
                    var t;
                    let {
                        wallets: e,
                        search: r
                    } = tA.ExplorerCtrl.state, {
                        listings: i,
                        total: o,
                        page: n
                    } = this.search ? r : e;
                    if (!this.endReached && (this.firstFetch || o > 40 && i.length < o)) try {
                        this.loading = !0;
                        let e = null == (t = tA.OptionsCtrl.state.chains) ? void 0 : t.join(","),
                            {
                                listings: r
                            } = await tA.ExplorerCtrl.getWallets({
                                page: this.firstFetch ? 1 : n + 1,
                                entries: 40,
                                search: this.search,
                                version: 2,
                                chains: e
                            }),
                            i = r.map(t => rL.getWalletIcon(t));
                        await Promise.all([...i.map(async t => rL.preloadImage(t)), tA.zv.wait(300)]), this.endReached = this.isLastPage()
                    } catch (t) {
                        console.error(t), tA.ToastCtrl.openToast(rL.getErrorMessage(t), "error")
                    } finally {
                        this.loading = !1, this.firstFetch = !1
                    }
                }
                onConnect(t) {
                    tA.zv.isAndroid() ? rL.handleMobileLinking(t) : rL.goToConnectingView(t)
                }
                onSearchChange(t) {
                    let {
                        value: e
                    } = t.target;
                    this.searchDebounce(e)
                }
                render() {
                    let {
                        wallets: t,
                        search: e
                    } = tA.ExplorerCtrl.state, {
                        listings: r
                    } = this.search ? e : t, i = this.loading && !r.length, o = this.search.length >= 3, n = iR.manualWalletsTemplate(), l = iR.recomendedWalletsTemplate(!0);
                    o && (n = n.filter(({
                        values: t
                    }) => rL.caseSafeIncludes(t[0], this.search)), l = l.filter(({
                        values: t
                    }) => rL.caseSafeIncludes(t[0], this.search)));
                    let a = !this.loading && !r.length && !l.length,
                        s = {
                            "wcm-loading": i,
                            "wcm-end-reached": this.endReached || !this.loading,
                            "wcm-empty": a
                        };
                    return W `<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(this)}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${tf(s)}"><div class="wcm-grid">${i?null:n} ${i?null:l} ${i?null:r.map(t=>W`${t?W`<wcm-wallet-button imageId="${t.image_id}" name="${t.name}" walletId="${t.id}" .onClick="${()=>this.onConnect(t)}"></wcm-wallet-button>`:null}`)}</div><div class="wcm-placeholder-block">${a?W`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>`:null} ${!a&&this.loading?W`<wcm-spinner></wcm-spinner>`:null}</div></wcm-modal-content>`
                }
            };
            oT.styles = [ri.globalCss, oE], oO([tp()], oT.prototype, "loading", 2), oO([tp()], oT.prototype, "firstFetch", 2), oO([tp()], oT.prototype, "search", 2), oO([tp()], oT.prototype, "endReached", 2), oT = oO([td("wcm-wallet-explorer-view")], oT);
            let oI = c `wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
            var oM = Object.defineProperty,
                oP = Object.getOwnPropertyDescriptor,
                oR = (t, e, r, i) => {
                    for (var o, n = i > 1 ? void 0 : i ? oP(e, r) : e, l = t.length - 1; l >= 0; l--)(o = t[l]) && (n = (i ? o(e, r, n) : o(n)) || n);
                    return i && n && oM(e, r, n), n
                };
            let oN = class extends ts {
                constructor() {
                    super(), this.isError = !1, this.openWebWallet()
                }
                onFormatAndRedirect(t) {
                    let {
                        desktop: e,
                        name: r
                    } = tA.zv.getWalletRouterData(), i = null == e ? void 0 : e.universal;
                    if (i) {
                        let e = tA.zv.formatUniversalUrl(i, t, r);
                        tA.zv.openHref(e, "_blank")
                    }
                }
                openWebWallet() {
                    let {
                        walletConnectUri: t
                    } = tA.OptionsCtrl.state, e = tA.zv.getWalletRouterData();
                    rL.setRecentWallet(e), t && this.onFormatAndRedirect(t)
                }
                render() {
                    let {
                        name: t,
                        id: e,
                        image_id: r
                    } = tA.zv.getWalletRouterData(), {
                        isMobile: i,
                        isDesktop: o
                    } = rL.getCachedRouterWalletPlatforms(), n = tA.zv.isMobile();
                    return W `<wcm-modal-header title="${t}" .onAction="${rL.handleUriCopy}" .actionIcon="${rv.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${e4(r)}" label="${`Continue in ${t}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${t} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${i}" .isDesktop="${!n&&o}" .isRetry="${!0}"><wcm-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${rv.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`
                }
            };
            oN.styles = [ri.globalCss, oI], oR([tp()], oN.prototype, "isError", 2), oR([td("wcm-web-connecting-view")], oN)
        }
    }
]);