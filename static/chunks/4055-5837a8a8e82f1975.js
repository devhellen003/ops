(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4055], {
        28794: function(e, r, n) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            let {
                Decimal: t,
                objectEnumValues: i,
                makeStrictEnum: s,
                Public: o,
                getRuntime: u,
                skip: a
            } = n(935), l = {};
            r.Prisma = l, r.$Enums = {}, l.prismaVersion = {
                client: "5.21.1",
                engine: "bf0e5e8a04cada8225617067eaa03d041e2bba36"
            }, l.PrismaClientKnownRequestError = () => {
                let e = u().prettyName;
                throw Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
            }, l.PrismaClientUnknownRequestError = () => {
                let e = u().prettyName;
                throw Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
            }, l.PrismaClientRustPanicError = () => {
                let e = u().prettyName;
                throw Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
            }, l.PrismaClientInitializationError = () => {
                let e = u().prettyName;
                throw Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
            }, l.PrismaClientValidationError = () => {
                let e = u().prettyName;
                throw Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
            }, l.NotFoundError = () => {
                let e = u().prettyName;
                throw Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
            }, l.Decimal = t, l.sql = () => {
                let e = u().prettyName;
                throw Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
            }, l.empty = () => {
                let e = u().prettyName;
                throw Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
            }, l.join = () => {
                let e = u().prettyName;
                throw Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
            }, l.raw = () => {
                let e = u().prettyName;
                throw Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
            }, l.validator = o.validator, l.getExtensionContext = () => {
                let e = u().prettyName;
                throw Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
            }, l.defineExtension = () => {
                let e = u().prettyName;
                throw Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
            }, l.DbNull = i.instances.DbNull, l.JsonNull = i.instances.JsonNull, l.AnyNull = i.instances.AnyNull, l.NullTypes = {
                DbNull: i.classes.DbNull,
                JsonNull: i.classes.JsonNull,
                AnyNull: i.classes.AnyNull
            }, r.Prisma.TransactionIsolationLevel = s({
                ReadUncommitted: "ReadUncommitted",
                ReadCommitted: "ReadCommitted",
                RepeatableRead: "RepeatableRead",
                Serializable: "Serializable"
            }), r.Prisma.UserScalarFieldEnum = {
                id: "id",
                address: "address",
                password: "password",
                balance: "balance",
                role: "role"
            }, r.Prisma.NodeScalarFieldEnum = {
                id: "id",
                userId: "userId",
                serverId: "serverId",
                wallet: "wallet",
                status: "status",
                createdAt: "createdAt",
                blockchainId: "blockchainId"
            }, r.Prisma.StakingScalarFieldEnum = {
                id: "id",
                userId: "userId",
                stakeId: "stakeId",
                createdAt: "createdAt"
            }, r.Prisma.NodeHistoryScalarFieldEnum = {
                id: "id",
                nodeId: "nodeId",
                message: "message",
                status: "status"
            }, r.Prisma.ServerScalarFieldEnum = {
                id: "id",
                host: "host",
                port: "port",
                username: "username",
                password: "password",
                active: "active",
                type: "type"
            }, r.Prisma.PaymentScalarFieldEnum = {
                id: "id",
                duration: "duration",
                nodeId: "nodeId",
                credit: "credit",
                stakeId: "stakeId",
                date: "date",
                userId: "userId"
            }, r.Prisma.TxVerifierScalarFieldEnum = {
                id: "id",
                verifier: "verifier",
                tx: "tx"
            }, r.Prisma.BlockchainScalarFieldEnum = {
                id: "id",
                name: "name",
                description: "description",
                url: "url",
                price: "price",
                hasWallet: "hasWallet",
                staking: "staking",
                launchedAt: "launchedAt",
                payType: "payType",
                rewardWallet: "rewardWallet",
                rewardLockTime: "rewardLockTime",
                rewardPerMonth: "rewardPerMonth",
                floorPrice: "floorPrice",
                count: "count"
            }, r.Prisma.CreditScalarFieldEnum = {
                id: "id",
                tx: "tx",
                credits: "credits",
                userId: "userId",
                date: "date"
            }, r.Prisma.ClaimScalarFieldEnum = {
                id: "id",
                userId: "userId",
                amount: "amount"
            }, r.Prisma.RewardScalarFieldEnum = {
                id: "id",
                userId: "userId",
                reflectionReward: "reflectionReward",
                rewardWithdrawTime: "rewardWithdrawTime"
            }, r.Prisma.TaxHistoryScalarFieldEnum = {
                id: "id",
                amount: "amount",
                totalOpsec: "totalOpsec",
                createdAt: "createdAt"
            }, r.Prisma.SortOrder = {
                asc: "asc",
                desc: "desc"
            }, r.Prisma.JsonNullValueInput = {
                JsonNull: l.JsonNull
            }, r.Prisma.QueryMode = {
                default: "default",
                insensitive: "insensitive"
            }, r.Prisma.NullsOrder = {
                first: "first",
                last: "last"
            }, r.Prisma.JsonNullValueFilter = {
                DbNull: l.DbNull,
                JsonNull: l.JsonNull,
                AnyNull: l.AnyNull
            }, r.Role = r.$Enums.Role = {
                USER: "USER",
                ADMIN: "ADMIN"
            }, r.Status = r.$Enums.Status = {
                CREATED: "CREATED",
                INSTALLING: "INSTALLING",
                LIVE: "LIVE",
                FAILED: "FAILED",
                EXPIRED: "EXPIRED"
            }, r.SERVER_TYPE = r.$Enums.SERVER_TYPE = {
                MULTI_NODE: "MULTI_NODE",
                SINGLE_NODE: "SINGLE_NODE"
            }, r.PAY_TYPE = r.$Enums.PAY_TYPE = {
                FULL: "FULL",
                PARTIAL: "PARTIAL"
            }, r.Prisma.ModelName = {
                User: "User",
                Node: "Node",
                Staking: "Staking",
                NodeHistory: "NodeHistory",
                Server: "Server",
                Payment: "Payment",
                TxVerifier: "TxVerifier",
                Blockchain: "Blockchain",
                Credit: "Credit",
                Claim: "Claim",
                Reward: "Reward",
                TaxHistory: "TaxHistory"
            };
            class c {
                constructor() {
                    return new Proxy(this, {
                        get(e, r) {
                            let n = u();
                            throw Error((n.isEdge ? `PrismaClient is not configured to run in ${n.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
` : "PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `" + n.prettyName + "`).") + `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`)
                        }
                    })
                }
            }
            r.PrismaClient = c, Object.assign(r, l)
        },
        64055: function(e, r, n) {
            let t = n(28794);
            e.exports = t
        },
        935: function(e) {
            "use strict";
            var r = Object.defineProperty,
                n = Object.getOwnPropertyDescriptor,
                t = Object.getOwnPropertyNames,
                i = Object.prototype.hasOwnProperty,
                s = (e, n) => {
                    for (var t in n) r(e, t, {
                        get: n[t],
                        enumerable: !0
                    })
                },
                o = {};
            s(o, {
                Decimal: () => e0,
                Public: () => u,
                getRuntime: () => E,
                makeStrictEnum: () => b,
                objectEnumValues: () => g
            }), e.exports = ((e, s, o, u) => {
                if (s && "object" == typeof s || "function" == typeof s)
                    for (let o of t(s)) i.call(e, o) || void 0 === o || r(e, o, {
                        get: () => s[o],
                        enumerable: !(u = n(s, o)) || u.enumerable
                    });
                return e
            })(r({}, "__esModule", {
                value: !0
            }), o);
            var u = {};

            function a(...e) {
                return e => e
            }
            s(u, {
                validator: () => a
            });
            var l = Symbol(),
                c = new WeakMap,
                h = class {
                    constructor(e) {
                        e === l ? c.set(this, "Prisma.".concat(this._getName())) : c.set(this, "new Prisma.".concat(this._getNamespace(), ".").concat(this._getName(), "()"))
                    }
                    _getName() {
                        return this.constructor.name
                    }
                    toString() {
                        return c.get(this)
                    }
                },
                d = class extends h {
                    _getNamespace() {
                        return "NullTypes"
                    }
                },
                f = class extends d {};
            w(f, "DbNull");
            var p = class extends d {};
            w(p, "JsonNull");
            var m = class extends d {};
            w(m, "AnyNull");
            var g = {
                classes: {
                    DbNull: f,
                    JsonNull: p,
                    AnyNull: m
                },
                instances: {
                    DbNull: new f(l),
                    JsonNull: new p(l),
                    AnyNull: new m(l)
                }
            };

            function w(e, r) {
                Object.defineProperty(e, "name", {
                    value: r,
                    configurable: !0
                })
            }
            var N = new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);

            function b(e) {
                return new Proxy(e, {
                    get(e, r) {
                        if (r in e) return e[r];
                        if (!N.has(r)) throw TypeError("Invalid enum value: ".concat(String(r)))
                    }
                })
            }
            var v = {
                node: "Node.js",
                workerd: "Cloudflare Workers",
                deno: "Deno and Deno Deploy",
                netlify: "Netlify Edge Functions",
                "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)"
            };

            function E() {
                var e, r, n;
                let t = "object" == typeof Netlify ? "netlify" : "string" == typeof EdgeRuntime ? "edge-light" : (null == (e = globalThis.navigator) ? void 0 : e.userAgent) === "Cloudflare-Workers" ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : (null == (n = null == (r = globalThis.process) ? void 0 : r.release) ? void 0 : n.name) === "node" ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
                return {
                    id: t,
                    prettyName: v[t] || t,
                    isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(t)
                }
            }
            var y, x, P = "0123456789abcdef",
                I = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
                S = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
                A = {
                    precision: 20,
                    rounding: 4,
                    modulo: 1,
                    toExpNeg: -7,
                    toExpPos: 21,
                    minE: -9e15,
                    maxE: 9e15,
                    crypto: !1
                },
                R = !0,
                T = "[DecimalError] ",
                M = T + "Invalid argument: ",
                D = T + "Precision limit exceeded",
                O = T + "crypto unavailable",
                F = "[object Decimal]",
                k = Math.floor,
                C = Math.pow,
                _ = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
                q = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
                L = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
                U = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                $ = I.length - 1,
                V = S.length - 1,
                Z = {
                    toStringTag: F
                };

            function j(e) {
                var r, n, t, i = e.length - 1,
                    s = "",
                    o = e[0];
                if (i > 0) {
                    for (s += o, r = 1; r < i; r++)(n = 7 - (t = e[r] + "").length) && (s += ee(n)), s += t;
                    (n = 7 - (t = (o = e[r]) + "").length) && (s += ee(n))
                } else if (0 === o) return "0";
                for (; o % 10 == 0;) o /= 10;
                return s + o
            }

            function H(e, r, n) {
                if (e !== ~~e || e < r || e > n) throw Error(M + e)
            }

            function J(e, r, n, t) {
                var i, s, o, u;
                for (s = e[0]; s >= 10; s /= 10) --r;
                return --r < 0 ? (r += 7, i = 0) : (i = Math.ceil((r + 1) / 7), r %= 7), s = C(10, 7 - r), u = e[i] % s | 0, null == t ? r < 3 ? (0 == r ? u = u / 100 | 0 : 1 == r && (u = u / 10 | 0), o = n < 4 && 99999 == u || n > 3 && 49999 == u || 5e4 == u || 0 == u) : o = (n < 4 && u + 1 == s || n > 3 && u + 1 == s / 2) && (e[i + 1] / s / 100 | 0) == C(10, r - 2) - 1 || (u == s / 2 || 0 == u) && (e[i + 1] / s / 100 | 0) == 0 : r < 4 ? (0 == r ? u = u / 1e3 | 0 : 1 == r ? u = u / 100 | 0 : 2 == r && (u = u / 10 | 0), o = (t || n < 4) && 9999 == u || !t && n > 3 && 4999 == u) : o = ((t || n < 4) && u + 1 == s || !t && n > 3 && u + 1 == s / 2) && (e[i + 1] / s / 1e3 | 0) == C(10, r - 3) - 1, o
            }

            function B(e, r, n) {
                for (var t, i, s = [0], o = 0, u = e.length; o < u;) {
                    for (i = s.length; i--;) s[i] *= r;
                    for (s[0] += P.indexOf(e.charAt(o++)), t = 0; t < s.length; t++) s[t] > n - 1 && (void 0 === s[t + 1] && (s[t + 1] = 0), s[t + 1] += s[t] / n | 0, s[t] %= n)
                }
                return s.reverse()
            }
            Z.absoluteValue = Z.abs = function() {
                var e = new this.constructor(this);
                return e.s < 0 && (e.s = 1), Y(e)
            }, Z.ceil = function() {
                return Y(new this.constructor(this), this.e + 1, 2)
            }, Z.clampedTo = Z.clamp = function(e, r) {
                var n = this.constructor;
                if (e = new n(e), r = new n(r), !e.s || !r.s) return new n(NaN);
                if (e.gt(r)) throw Error(M + r);
                return 0 > this.cmp(e) ? e : this.cmp(r) > 0 ? r : new n(this)
            }, Z.comparedTo = Z.cmp = function(e) {
                var r, n, t, i, s = this.d,
                    o = (e = new this.constructor(e)).d,
                    u = this.s,
                    a = e.s;
                if (!s || !o) return u && a ? u !== a ? u : s === o ? 0 : !s ^ u < 0 ? 1 : -1 : NaN;
                if (!s[0] || !o[0]) return s[0] ? u : o[0] ? -a : 0;
                if (u !== a) return u;
                if (this.e !== e.e) return this.e > e.e ^ u < 0 ? 1 : -1;
                for (t = s.length, i = o.length, r = 0, n = t < i ? t : i; r < n; ++r)
                    if (s[r] !== o[r]) return s[r] > o[r] ^ u < 0 ? 1 : -1;
                return t === i ? 0 : t > i ^ u < 0 ? 1 : -1
            }, Z.cosine = Z.cos = function() {
                var e, r, n = this,
                    t = n.constructor;
                return n.d ? n.d[0] ? (e = t.precision, r = t.rounding, t.precision = e + Math.max(n.e, n.sd()) + 7, t.rounding = 1, n = function(e, r) {
                    var n, t, i;
                    if (r.isZero()) return r;
                    (t = r.d.length) < 32 ? i = (1 / el(4, n = Math.ceil(t / 3))).toString() : (n = 16, i = "2.3283064365386962890625e-10"), e.precision += n, r = ea(e, 1, r.times(i), new e(1));
                    for (var s = n; s--;) {
                        var o = r.times(r);
                        r = o.times(o).minus(o).times(8).plus(1)
                    }
                    return e.precision -= n, r
                }(t, ec(t, n)), t.precision = e, t.rounding = r, Y(2 == x || 3 == x ? n.neg() : n, e, r, !0)) : new t(1) : new t(NaN)
            }, Z.cubeRoot = Z.cbrt = function() {
                var e, r, n, t, i, s, o, u, a, l, c = this.constructor;
                if (!this.isFinite() || this.isZero()) return new c(this);
                for (R = !1, (s = this.s * C(this.s * this, 1 / 3)) && Math.abs(s) != 1 / 0 ? t = new c(s.toString()) : (n = j(this.d), (s = ((e = this.e) - n.length + 1) % 3) && (n += 1 == s || -2 == s ? "0" : "00"), s = C(n, 1 / 3), e = k((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), (t = new c(n = s == 1 / 0 ? "5e" + e : (n = s.toExponential()).slice(0, n.indexOf("e") + 1) + e)).s = this.s), o = (e = c.precision) + 3;;)
                    if (t = W((l = (a = (u = t).times(u).times(u)).plus(this)).plus(this).times(u), l.plus(a), o + 2, 1), j(u.d).slice(0, o) === (n = j(t.d)).slice(0, o)) {
                        if ("9999" != (n = n.slice(o - 3, o + 1)) && (i || "4999" != n)) {
                            +n && (+n.slice(1) || "5" != n.charAt(0)) || (Y(t, e + 1, 1), r = !t.times(t).times(t).eq(this));
                            break
                        }
                        if (!i && (Y(u, e + 1, 0), u.times(u).times(u).eq(this))) {
                            t = u;
                            break
                        }
                        o += 4, i = 1
                    }
                return R = !0, Y(t, e, c.rounding, r)
            }, Z.decimalPlaces = Z.dp = function() {
                var e, r = this.d,
                    n = NaN;
                if (r) {
                    if (n = ((e = r.length - 1) - k(this.e / 7)) * 7, e = r[e])
                        for (; e % 10 == 0; e /= 10) n--;
                    n < 0 && (n = 0)
                }
                return n
            }, Z.dividedBy = Z.div = function(e) {
                return W(this, new this.constructor(e))
            }, Z.dividedToIntegerBy = Z.divToInt = function(e) {
                var r = this.constructor;
                return Y(W(this, new r(e), 0, 1, 1), r.precision, r.rounding)
            }, Z.equals = Z.eq = function(e) {
                return 0 === this.cmp(e)
            }, Z.floor = function() {
                return Y(new this.constructor(this), this.e + 1, 3)
            }, Z.greaterThan = Z.gt = function(e) {
                return this.cmp(e) > 0
            }, Z.greaterThanOrEqualTo = Z.gte = function(e) {
                var r = this.cmp(e);
                return 1 == r || 0 === r
            }, Z.hyperbolicCosine = Z.cosh = function() {
                var e, r, n, t, i, s = this,
                    o = s.constructor,
                    u = new o(1);
                if (!s.isFinite()) return new o(s.s ? 1 / 0 : NaN);
                if (s.isZero()) return u;
                n = o.precision, t = o.rounding, o.precision = n + Math.max(s.e, s.sd()) + 4, o.rounding = 1, (i = s.d.length) < 32 ? r = (1 / el(4, e = Math.ceil(i / 3))).toString() : (e = 16, r = "2.3283064365386962890625e-10"), s = ea(o, 1, s.times(r), new o(1), !0);
                for (var a, l = e, c = new o(8); l--;) a = s.times(s), s = u.minus(a.times(c.minus(a.times(c))));
                return Y(s, o.precision = n, o.rounding = t, !0)
            }, Z.hyperbolicSine = Z.sinh = function() {
                var e, r, n, t, i = this,
                    s = i.constructor;
                if (!i.isFinite() || i.isZero()) return new s(i);
                if (r = s.precision, n = s.rounding, s.precision = r + Math.max(i.e, i.sd()) + 4, s.rounding = 1, (t = i.d.length) < 3) i = ea(s, 2, i, i, !0);
                else {
                    e = (e = 1.4 * Math.sqrt(t)) > 16 ? 16 : 0 | e, i = ea(s, 2, i = i.times(1 / el(5, e)), i, !0);
                    for (var o, u = new s(5), a = new s(16), l = new s(20); e--;) o = i.times(i), i = i.times(u.plus(o.times(a.times(o).plus(l))))
                }
                return s.precision = r, s.rounding = n, Y(i, r, n, !0)
            }, Z.hyperbolicTangent = Z.tanh = function() {
                var e, r, n = this.constructor;
                return this.isFinite() ? this.isZero() ? new n(this) : (e = n.precision, r = n.rounding, n.precision = e + 7, n.rounding = 1, W(this.sinh(), this.cosh(), n.precision = e, n.rounding = r)) : new n(this.s)
            }, Z.inverseCosine = Z.acos = function() {
                var e, r = this,
                    n = r.constructor,
                    t = r.abs().cmp(1),
                    i = n.precision,
                    s = n.rounding;
                return -1 !== t ? 0 === t ? r.isNeg() ? X(n, i, s) : new n(0) : new n(NaN) : r.isZero() ? X(n, i + 4, s).times(.5) : (n.precision = i + 6, n.rounding = 1, r = r.asin(), e = X(n, i + 4, s).times(.5), n.precision = i, n.rounding = s, e.minus(r))
            }, Z.inverseHyperbolicCosine = Z.acosh = function() {
                var e, r, n = this,
                    t = n.constructor;
                return n.lte(1) ? new t(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = t.precision, r = t.rounding, t.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, t.rounding = 1, R = !1, n = n.times(n).minus(1).sqrt().plus(n), R = !0, t.precision = e, t.rounding = r, n.ln()) : new t(n)
            }, Z.inverseHyperbolicSine = Z.asinh = function() {
                var e, r, n = this,
                    t = n.constructor;
                return !n.isFinite() || n.isZero() ? new t(n) : (e = t.precision, r = t.rounding, t.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, t.rounding = 1, R = !1, n = n.times(n).plus(1).sqrt().plus(n), R = !0, t.precision = e, t.rounding = r, n.ln())
            }, Z.inverseHyperbolicTangent = Z.atanh = function() {
                var e, r, n, t, i = this,
                    s = i.constructor;
                return i.isFinite() ? i.e >= 0 ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = s.precision, r = s.rounding, Math.max(t = i.sd(), e) < -(2 * i.e) - 1 ? Y(new s(i), e, r, !0) : (s.precision = n = t - i.e, i = W(i.plus(1), new s(1).minus(i), n + e, 1), s.precision = e + 4, s.rounding = 1, i = i.ln(), s.precision = e, s.rounding = r, i.times(.5))) : new s(NaN)
            }, Z.inverseSine = Z.asin = function() {
                var e, r, n, t, i = this,
                    s = i.constructor;
                return i.isZero() ? new s(i) : (r = i.abs().cmp(1), n = s.precision, t = s.rounding, -1 !== r ? 0 === r ? ((e = X(s, n + 4, t).times(.5)).s = i.s, e) : new s(NaN) : (s.precision = n + 6, s.rounding = 1, i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan(), s.precision = n, s.rounding = t, i.times(2)))
            }, Z.inverseTangent = Z.atan = function() {
                var e, r, n, t, i, s, o, u, a, l = this,
                    c = l.constructor,
                    h = c.precision,
                    d = c.rounding;
                if (l.isFinite()) {
                    if (l.isZero()) return new c(l);
                    if (l.abs().eq(1) && h + 4 <= V) return (o = X(c, h + 4, d).times(.25)).s = l.s, o
                } else {
                    if (!l.s) return new c(NaN);
                    if (h + 4 <= V) return (o = X(c, h + 4, d).times(.5)).s = l.s, o
                }
                for (c.precision = u = h + 10, c.rounding = 1, e = n = Math.min(28, u / 7 + 2 | 0); e; --e) l = l.div(l.times(l).plus(1).sqrt().plus(1));
                for (R = !1, r = Math.ceil(u / 7), t = 1, a = l.times(l), o = new c(l), i = l; - 1 !== e;)
                    if (i = i.times(a), s = o.minus(i.div(t += 2)), i = i.times(a), void 0 !== (o = s.plus(i.div(t += 2))).d[r])
                        for (e = r; o.d[e] === s.d[e] && e--;);
                return n && (o = o.times(2 << n - 1)), R = !0, Y(o, c.precision = h, c.rounding = d, !0)
            }, Z.isFinite = function() {
                return !!this.d
            }, Z.isInteger = Z.isInt = function() {
                return !!this.d && k(this.e / 7) > this.d.length - 2
            }, Z.isNaN = function() {
                return !this.s
            }, Z.isNegative = Z.isNeg = function() {
                return this.s < 0
            }, Z.isPositive = Z.isPos = function() {
                return this.s > 0
            }, Z.isZero = function() {
                return !!this.d && 0 === this.d[0]
            }, Z.lessThan = Z.lt = function(e) {
                return 0 > this.cmp(e)
            }, Z.lessThanOrEqualTo = Z.lte = function(e) {
                return 1 > this.cmp(e)
            }, Z.logarithm = Z.log = function(e) {
                var r, n, t, i, s, o, u, a = this.constructor,
                    l = a.precision,
                    c = a.rounding;
                if (null == e) e = new a(10), r = !0;
                else {
                    if (n = (e = new a(e)).d, e.s < 0 || !n || !n[0] || e.eq(1)) return new a(NaN);
                    r = e.eq(10)
                }
                if (n = this.d, this.s < 0 || !n || !n[0] || this.eq(1)) return new a(n && !n[0] ? -1 / 0 : 1 != this.s ? NaN : n ? 0 : 1 / 0);
                if (r) {
                    if (n.length > 1) i = !0;
                    else {
                        for (t = n[0]; t % 10 == 0;) t /= 10;
                        i = 1 !== t
                    }
                }
                if (R = !1, J((u = W(es(this, o = l + 5), r ? K(a, o + 10) : es(e, o), o, 1)).d, t = l, c))
                    do
                        if (o += 10, u = W(es(this, o), r ? K(a, o + 10) : es(e, o), o, 1), !i) {
                            +j(u.d).slice(t + 1, t + 15) + 1 == 1e14 && (u = Y(u, l + 1, 0));
                            break
                        }
                while (J(u.d, t += 10, c));
                return R = !0, Y(u, l, c)
            }, Z.minus = Z.sub = function(e) {
                var r, n, t, i, s, o, u, a, l, c, h, d, f = this.constructor;
                if (e = new f(e), !this.d || !e.d) return this.s && e.s ? this.d ? e.s = -e.s : e = new f(e.d || this.s !== e.s ? this : NaN) : e = new f(NaN), e;
                if (this.s != e.s) return e.s = -e.s, this.plus(e);
                if (l = this.d, d = e.d, u = f.precision, a = f.rounding, !l[0] || !d[0]) {
                    if (d[0]) e.s = -e.s;
                    else {
                        if (!l[0]) return new f(3 === a ? -0 : 0);
                        e = new f(this)
                    }
                    return R ? Y(e, u, a) : e
                }
                if (n = k(e.e / 7), c = k(this.e / 7), l = l.slice(), s = c - n) {
                    for ((h = s < 0) ? (r = l, s = -s, o = d.length) : (r = d, n = c, o = l.length), s > (t = Math.max(Math.ceil(u / 7), o) + 2) && (s = t, r.length = 1), r.reverse(), t = s; t--;) r.push(0);
                    r.reverse()
                } else {
                    for ((h = (t = l.length) < (o = d.length)) && (o = t), t = 0; t < o; t++)
                        if (l[t] != d[t]) {
                            h = l[t] < d[t];
                            break
                        }
                    s = 0
                }
                for (h && (r = l, l = d, d = r, e.s = -e.s), o = l.length, t = d.length - o; t > 0; --t) l[o++] = 0;
                for (t = d.length; t > s;) {
                    if (l[--t] < d[t]) {
                        for (i = t; i && 0 === l[--i];) l[i] = 1e7 - 1;
                        --l[i], l[t] += 1e7
                    }
                    l[t] -= d[t]
                }
                for (; 0 === l[--o];) l.pop();
                for (; 0 === l[0]; l.shift()) --n;
                return l[0] ? (e.d = l, e.e = G(l, n), R ? Y(e, u, a) : e) : new f(3 === a ? -0 : 0)
            }, Z.modulo = Z.mod = function(e) {
                var r, n = this.constructor;
                return e = new n(e), this.d && e.s && (!e.d || e.d[0]) ? e.d && (!this.d || this.d[0]) ? (R = !1, 9 == n.modulo ? (r = W(this, e.abs(), 0, 3, 1), r.s *= e.s) : r = W(this, e, 0, n.modulo, 1), r = r.times(e), R = !0, this.minus(r)) : Y(new n(this), n.precision, n.rounding) : new n(NaN)
            }, Z.naturalExponential = Z.exp = function() {
                return ei(this)
            }, Z.naturalLogarithm = Z.ln = function() {
                return es(this)
            }, Z.negated = Z.neg = function() {
                var e = new this.constructor(this);
                return e.s = -e.s, Y(e)
            }, Z.plus = Z.add = function(e) {
                var r, n, t, i, s, o, u, a, l, c, h = this.constructor;
                if (e = new h(e), !this.d || !e.d) return this.s && e.s ? this.d || (e = new h(e.d || this.s === e.s ? this : NaN)) : e = new h(NaN), e;
                if (this.s != e.s) return e.s = -e.s, this.minus(e);
                if (l = this.d, c = e.d, u = h.precision, a = h.rounding, !l[0] || !c[0]) return c[0] || (e = new h(this)), R ? Y(e, u, a) : e;
                if (s = k(this.e / 7), t = k(e.e / 7), l = l.slice(), i = s - t) {
                    for (i < 0 ? (n = l, i = -i, o = c.length) : (n = c, t = s, o = l.length), i > (o = (s = Math.ceil(u / 7)) > o ? s + 1 : o + 1) && (i = o, n.length = 1), n.reverse(); i--;) n.push(0);
                    n.reverse()
                }
                for ((o = l.length) - (i = c.length) < 0 && (i = o, n = c, c = l, l = n), r = 0; i;) r = (l[--i] = l[i] + c[i] + r) / 1e7 | 0, l[i] %= 1e7;
                for (r && (l.unshift(r), ++t), o = l.length; 0 == l[--o];) l.pop();
                return e.d = l, e.e = G(l, t), R ? Y(e, u, a) : e
            }, Z.precision = Z.sd = function(e) {
                var r;
                if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(M + e);
                return this.d ? (r = Q(this.d), e && this.e + 1 > r && (r = this.e + 1)) : r = NaN, r
            }, Z.round = function() {
                var e = this.constructor;
                return Y(new e(this), this.e + 1, e.rounding)
            }, Z.sine = Z.sin = function() {
                var e, r, n = this,
                    t = n.constructor;
                return n.isFinite() ? n.isZero() ? new t(n) : (e = t.precision, r = t.rounding, t.precision = e + Math.max(n.e, n.sd()) + 7, t.rounding = 1, n = function(e, r) {
                    var n, t = r.d.length;
                    if (t < 3) return r.isZero() ? r : ea(e, 2, r, r);
                    n = (n = 1.4 * Math.sqrt(t)) > 16 ? 16 : 0 | n, r = ea(e, 2, r = r.times(1 / el(5, n)), r);
                    for (var i, s = new e(5), o = new e(16), u = new e(20); n--;) i = r.times(r), r = r.times(s.plus(i.times(o.times(i).minus(u))));
                    return r
                }(t, ec(t, n)), t.precision = e, t.rounding = r, Y(x > 2 ? n.neg() : n, e, r, !0)) : new t(NaN)
            }, Z.squareRoot = Z.sqrt = function() {
                var e, r, n, t, i, s, o = this.d,
                    u = this.e,
                    a = this.s,
                    l = this.constructor;
                if (1 !== a || !o || !o[0]) return new l(!a || a < 0 && (!o || o[0]) ? NaN : o ? this : 1 / 0);
                for (R = !1, 0 == (a = Math.sqrt(+this)) || a == 1 / 0 ? (((r = j(o)).length + u) % 2 == 0 && (r += "0"), a = Math.sqrt(r), u = k((u + 1) / 2) - (u < 0 || u % 2), t = new l(r = a == 1 / 0 ? "5e" + u : (r = a.toExponential()).slice(0, r.indexOf("e") + 1) + u)) : t = new l(a.toString()), n = (u = l.precision) + 3;;)
                    if (t = (s = t).plus(W(this, s, n + 2, 1)).times(.5), j(s.d).slice(0, n) === (r = j(t.d)).slice(0, n)) {
                        if ("9999" != (r = r.slice(n - 3, n + 1)) && (i || "4999" != r)) {
                            +r && (+r.slice(1) || "5" != r.charAt(0)) || (Y(t, u + 1, 1), e = !t.times(t).eq(this));
                            break
                        }
                        if (!i && (Y(s, u + 1, 0), s.times(s).eq(this))) {
                            t = s;
                            break
                        }
                        n += 4, i = 1
                    }
                return R = !0, Y(t, u, l.rounding, e)
            }, Z.tangent = Z.tan = function() {
                var e, r, n = this,
                    t = n.constructor;
                return n.isFinite() ? n.isZero() ? new t(n) : (e = t.precision, r = t.rounding, t.precision = e + 10, t.rounding = 1, (n = n.sin()).s = 1, n = W(n, new t(1).minus(n.times(n)).sqrt(), e + 10, 0), t.precision = e, t.rounding = r, Y(2 == x || 4 == x ? n.neg() : n, e, r, !0)) : new t(NaN)
            }, Z.times = Z.mul = function(e) {
                var r, n, t, i, s, o, u, a, l, c = this.constructor,
                    h = this.d,
                    d = (e = new c(e)).d;
                if (e.s *= this.s, !h || !h[0] || !d || !d[0]) return new c(e.s && (!h || h[0] || d) && (!d || d[0] || h) ? h && d ? 0 * e.s : e.s / 0 : NaN);
                for (n = k(this.e / 7) + k(e.e / 7), (a = h.length) < (l = d.length) && (s = h, h = d, d = s, o = a, a = l, l = o), s = [], t = o = a + l; t--;) s.push(0);
                for (t = l; --t >= 0;) {
                    for (r = 0, i = a + t; i > t;) u = s[i] + d[t] * h[i - t - 1] + r, s[i--] = u % 1e7 | 0, r = u / 1e7 | 0;
                    s[i] = (s[i] + r) % 1e7 | 0
                }
                for (; !s[--o];) s.pop();
                return r ? ++n : s.shift(), e.d = s, e.e = G(s, n), R ? Y(e, c.precision, c.rounding) : e
            }, Z.toBinary = function(e, r) {
                return eh(this, 2, e, r)
            }, Z.toDecimalPlaces = Z.toDP = function(e, r) {
                var n = this,
                    t = n.constructor;
                return n = new t(n), void 0 === e ? n : (H(e, 0, 1e9), void 0 === r ? r = t.rounding : H(r, 0, 8), Y(n, e + n.e + 1, r))
            }, Z.toExponential = function(e, r) {
                var n, t = this,
                    i = t.constructor;
                return void 0 === e ? n = z(t, !0) : (H(e, 0, 1e9), void 0 === r ? r = i.rounding : H(r, 0, 8), n = z(t = Y(new i(t), e + 1, r), !0, e + 1)), t.isNeg() && !t.isZero() ? "-" + n : n
            }, Z.toFixed = function(e, r) {
                var n, t, i = this.constructor;
                return void 0 === e ? n = z(this) : (H(e, 0, 1e9), void 0 === r ? r = i.rounding : H(r, 0, 8), n = z(t = Y(new i(this), e + this.e + 1, r), !1, e + t.e + 1)), this.isNeg() && !this.isZero() ? "-" + n : n
            }, Z.toFraction = function(e) {
                var r, n, t, i, s, o, u, a, l, c, h, d, f = this.d,
                    p = this.constructor;
                if (!f) return new p(this);
                if (l = n = new p(1), t = a = new p(0), o = (s = (r = new p(t)).e = Q(f) - this.e - 1) % 7, r.d[0] = C(10, o < 0 ? 7 + o : o), null == e) e = s > 0 ? r : l;
                else {
                    if (!(u = new p(e)).isInt() || u.lt(l)) throw Error(M + u);
                    e = u.gt(r) ? s > 0 ? r : l : u
                }
                for (R = !1, u = new p(j(f)), c = p.precision, p.precision = s = 14 * f.length; h = W(u, r, 0, 1, 1), 1 != (i = n.plus(h.times(t))).cmp(e);) n = t, t = i, i = l, l = a.plus(h.times(i)), a = i, i = r, r = u.minus(h.times(i)), u = i;
                return i = W(e.minus(n), t, 0, 1, 1), a = a.plus(i.times(l)), n = n.plus(i.times(t)), a.s = l.s = this.s, d = 1 > W(l, t, s, 1).minus(this).abs().cmp(W(a, n, s, 1).minus(this).abs()) ? [l, t] : [a, n], p.precision = c, R = !0, d
            }, Z.toHexadecimal = Z.toHex = function(e, r) {
                return eh(this, 16, e, r)
            }, Z.toNearest = function(e, r) {
                var n = this,
                    t = n.constructor;
                if (n = new t(n), null == e) {
                    if (!n.d) return n;
                    e = new t(1), r = t.rounding
                } else {
                    if (e = new t(e), void 0 === r ? r = t.rounding : H(r, 0, 8), !n.d) return e.s ? n : e;
                    if (!e.d) return e.s && (e.s = n.s), e
                }
                return e.d[0] ? (R = !1, n = W(n, e, 0, r, 1).times(e), R = !0, Y(n)) : (e.s = n.s, n = e), n
            }, Z.toNumber = function() {
                return +this
            }, Z.toOctal = function(e, r) {
                return eh(this, 8, e, r)
            }, Z.toPower = Z.pow = function(e) {
                var r, n, t, i, s, o, u = this,
                    a = u.constructor,
                    l = +(e = new a(e));
                if (!u.d || !e.d || !u.d[0] || !e.d[0]) return new a(C(+u, l));
                if ((u = new a(u)).eq(1)) return u;
                if (t = a.precision, s = a.rounding, e.eq(1)) return Y(u, t, s);
                if ((r = k(e.e / 7)) >= e.d.length - 1 && (n = l < 0 ? -l : l) <= 9007199254740991) return i = er(a, u, n, t), e.s < 0 ? new a(1).div(i) : Y(i, t, s);
                if ((o = u.s) < 0) {
                    if (r < e.d.length - 1) return new a(NaN);
                    if (1 & e.d[r] || (o = 1), 0 == u.e && 1 == u.d[0] && 1 == u.d.length) return u.s = o, u
                }
                return (r = 0 != (n = C(+u, l)) && isFinite(n) ? new a(n + "").e : k(l * (Math.log("0." + j(u.d)) / Math.LN10 + u.e + 1))) > a.maxE + 1 || r < a.minE - 1 ? new a(r > 0 ? o / 0 : 0) : (R = !1, a.rounding = u.s = 1, n = Math.min(12, (r + "").length), (i = ei(e.times(es(u, t + n)), t)).d && J((i = Y(i, t + 5, 1)).d, t, s) && (r = t + 10, +j((i = Y(ei(e.times(es(u, r + n)), r), r + 5, 1)).d).slice(t + 1, t + 15) + 1 == 1e14 && (i = Y(i, t + 1, 0))), i.s = o, R = !0, a.rounding = s, Y(i, t, s))
            }, Z.toPrecision = function(e, r) {
                var n, t = this,
                    i = t.constructor;
                return void 0 === e ? n = z(t, t.e <= i.toExpNeg || t.e >= i.toExpPos) : (H(e, 1, 1e9), void 0 === r ? r = i.rounding : H(r, 0, 8), n = z(t = Y(new i(t), e, r), e <= t.e || t.e <= i.toExpNeg, e)), t.isNeg() && !t.isZero() ? "-" + n : n
            }, Z.toSignificantDigits = Z.toSD = function(e, r) {
                var n = this.constructor;
                return void 0 === e ? (e = n.precision, r = n.rounding) : (H(e, 1, 1e9), void 0 === r ? r = n.rounding : H(r, 0, 8)), Y(new n(this), e, r)
            }, Z.toString = function() {
                var e = this.constructor,
                    r = z(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
                return this.isNeg() && !this.isZero() ? "-" + r : r
            }, Z.truncated = Z.trunc = function() {
                return Y(new this.constructor(this), this.e + 1, 1)
            }, Z.valueOf = Z.toJSON = function() {
                var e = this.constructor,
                    r = z(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
                return this.isNeg() ? "-" + r : r
            };
            var W = function() {
                function e(e, r, n) {
                    var t, i = 0,
                        s = e.length;
                    for (e = e.slice(); s--;) t = e[s] * r + i, e[s] = t % n | 0, i = t / n | 0;
                    return i && e.unshift(i), e
                }

                function r(e, r, n, t) {
                    var i, s;
                    if (n != t) s = n > t ? 1 : -1;
                    else
                        for (i = s = 0; i < n; i++)
                            if (e[i] != r[i]) {
                                s = e[i] > r[i] ? 1 : -1;
                                break
                            } return s
                }

                function n(e, r, n, t) {
                    for (var i = 0; n--;) e[n] -= i, i = e[n] < r[n] ? 1 : 0, e[n] = i * t + e[n] - r[n];
                    for (; !e[0] && e.length > 1;) e.shift()
                }
                return function(t, i, s, o, u, a) {
                    var l, c, h, d, f, p, m, g, w, N, b, v, E, x, P, I, S, A, R, T, M = t.constructor,
                        D = t.s == i.s ? 1 : -1,
                        O = t.d,
                        F = i.d;
                    if (!O || !O[0] || !F || !F[0]) return new M(t.s && i.s && (O ? !F || O[0] != F[0] : F) ? O && 0 == O[0] || !F ? 0 * D : D / 0 : NaN);
                    for (a ? (f = 1, c = t.e - i.e) : (a = 1e7, f = 7, c = k(t.e / f) - k(i.e / f)), R = F.length, S = O.length, N = (w = new M(D)).d = [], h = 0; F[h] == (O[h] || 0); h++);
                    if (F[h] > (O[h] || 0) && c--, null == s ? (x = s = M.precision, o = M.rounding) : x = u ? s + (t.e - i.e) + 1 : s, x < 0) N.push(1), p = !0;
                    else {
                        if (x = x / f + 2 | 0, h = 0, 1 == R) {
                            for (d = 0, F = F[0], x++;
                                (h < S || d) && x--; h++) P = d * a + (O[h] || 0), N[h] = P / F | 0, d = P % F | 0;
                            p = d || h < S
                        } else {
                            for ((d = a / (F[0] + 1) | 0) > 1 && (F = e(F, d, a), O = e(O, d, a), R = F.length, S = O.length), I = R, v = (b = O.slice(0, R)).length; v < R;) b[v++] = 0;
                            (T = F.slice()).unshift(0), A = F[0], F[1] >= a / 2 && ++A;
                            do d = 0, (l = r(F, b, R, v)) < 0 ? (E = b[0], R != v && (E = E * a + (b[1] || 0)), (d = E / A | 0) > 1 ? (d >= a && (d = a - 1), g = (m = e(F, d, a)).length, v = b.length, 1 == (l = r(m, b, g, v)) && (d--, n(m, R < g ? T : F, g, a))) : (0 == d && (l = d = 1), m = F.slice()), (g = m.length) < v && m.unshift(0), n(b, m, v, a), -1 == l && (v = b.length, (l = r(F, b, R, v)) < 1 && (d++, n(b, R < v ? T : F, v, a))), v = b.length) : 0 === l && (d++, b = [0]), N[h++] = d, l && b[0] ? b[v++] = O[I] || 0 : (b = [O[I]], v = 1); while ((I++ < S || void 0 !== b[0]) && x--);
                            p = void 0 !== b[0]
                        }
                        N[0] || N.shift()
                    }
                    if (1 == f) w.e = c, y = p;
                    else {
                        for (h = 1, d = N[0]; d >= 10; d /= 10) h++;
                        w.e = h + c * f - 1, Y(w, u ? s + w.e + 1 : s, o, p)
                    }
                    return w
                }
            }();

            function Y(e, r, n, t) {
                var i, s, o, u, a, l, c, h, d, f = e.constructor;
                e: if (null != r) {
                    if (!(h = e.d)) return e;
                    for (i = 1, u = h[0]; u >= 10; u /= 10) i++;
                    if ((s = r - i) < 0) s += 7, o = r, a = (c = h[d = 0]) / C(10, i - o - 1) % 10 | 0;
                    else if ((d = Math.ceil((s + 1) / 7)) >= (u = h.length)) {
                        if (t) {
                            for (; u++ <= d;) h.push(0);
                            c = a = 0, i = 1, s %= 7, o = s - 7 + 1
                        } else break e
                    } else {
                        for (c = u = h[d], i = 1; u >= 10; u /= 10) i++;
                        s %= 7, a = (o = s - 7 + i) < 0 ? 0 : c / C(10, i - o - 1) % 10 | 0
                    }
                    if (t = t || r < 0 || void 0 !== h[d + 1] || (o < 0 ? c : c % C(10, i - o - 1)), l = n < 4 ? (a || t) && (0 == n || n == (e.s < 0 ? 3 : 2)) : a > 5 || 5 == a && (4 == n || t || 6 == n && (s > 0 ? o > 0 ? c / C(10, i - o) : 0 : h[d - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), r < 1 || !h[0]) return h.length = 0, l ? (r -= e.e + 1, h[0] = C(10, (7 - r % 7) % 7), e.e = -r || 0) : h[0] = e.e = 0, e;
                    if (0 == s ? (h.length = d, u = 1, d--) : (h.length = d + 1, u = C(10, 7 - s), h[d] = o > 0 ? (c / C(10, i - o) % C(10, o) | 0) * u : 0), l)
                        for (;;)
                            if (0 == d) {
                                for (s = 1, o = h[0]; o >= 10; o /= 10) s++;
                                for (o = h[0] += u, u = 1; o >= 10; o /= 10) u++;
                                s != u && (e.e++, 1e7 == h[0] && (h[0] = 1));
                                break
                            } else {
                                if (h[d] += u, 1e7 != h[d]) break;
                                h[d--] = 0, u = 1
                            }
                    for (s = h.length; 0 === h[--s];) h.pop()
                }
                return R && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [0])), e
            }

            function z(e, r, n) {
                if (!e.isFinite()) return eo(e);
                var t, i = e.e,
                    s = j(e.d),
                    o = s.length;
                return r ? (n && (t = n - o) > 0 ? s = s.charAt(0) + "." + s.slice(1) + ee(t) : o > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (s = "0." + ee(-i - 1) + s, n && (t = n - o) > 0 && (s += ee(t))) : i >= o ? (s += ee(i + 1 - o), n && (t = n - i - 1) > 0 && (s = s + "." + ee(t))) : ((t = i + 1) < o && (s = s.slice(0, t) + "." + s.slice(t)), n && (t = n - o) > 0 && (i + 1 === o && (s += "."), s += ee(t))), s
            }

            function G(e, r) {
                var n = e[0];
                for (r *= 7; n >= 10; n /= 10) r++;
                return r
            }

            function K(e, r, n) {
                if (r > $) throw R = !0, n && (e.precision = n), Error(D);
                return Y(new e(I), r, 1, !0)
            }

            function X(e, r, n) {
                if (r > V) throw Error(D);
                return Y(new e(S), r, n, !0)
            }

            function Q(e) {
                var r = e.length - 1,
                    n = 7 * r + 1;
                if (r = e[r]) {
                    for (; r % 10 == 0; r /= 10) n--;
                    for (r = e[0]; r >= 10; r /= 10) n++
                }
                return n
            }

            function ee(e) {
                for (var r = ""; e--;) r += "0";
                return r
            }

            function er(e, r, n, t) {
                var i, s = new e(1),
                    o = Math.ceil(t / 7 + 4);
                for (R = !1;;) {
                    if (n % 2 && ed((s = s.times(r)).d, o) && (i = !0), 0 === (n = k(n / 2))) {
                        n = s.d.length - 1, i && 0 === s.d[n] && ++s.d[n];
                        break
                    }
                    ed((r = r.times(r)).d, o)
                }
                return R = !0, s
            }

            function en(e) {
                return 1 & e.d[e.d.length - 1]
            }

            function et(e, r, n) {
                for (var t, i = new e(r[0]), s = 0; ++s < r.length;)
                    if ((t = new e(r[s])).s) i[n](t) && (i = t);
                    else {
                        i = t;
                        break
                    }
                return i
            }

            function ei(e, r) {
                var n, t, i, s, o, u, a, l = 0,
                    c = 0,
                    h = 0,
                    d = e.constructor,
                    f = d.rounding,
                    p = d.precision;
                if (!e.d || !e.d[0] || e.e > 17) return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
                for (null == r ? (R = !1, a = p) : a = r, u = new d(.03125); e.e > -2;) e = e.times(u), h += 5;
                for (a += t = Math.log(C(2, h)) / Math.LN10 * 2 + 5 | 0, n = s = o = new d(1), d.precision = a;;) {
                    if (s = Y(s.times(e), a, 1), n = n.times(++c), j((u = o.plus(W(s, n, a, 1))).d).slice(0, a) === j(o.d).slice(0, a)) {
                        for (i = h; i--;) o = Y(o.times(o), a, 1);
                        if (null != r) return d.precision = p, o;
                        if (!(l < 3 && J(o.d, a - t, f, l))) return Y(o, d.precision = p, f, R = !0);
                        d.precision = a += 10, n = s = u = new d(1), c = 0, l++
                    }
                    o = u
                }
            }

            function es(e, r) {
                var n, t, i, s, o, u, a, l, c, h, d, f = 1,
                    p = e,
                    m = p.d,
                    g = p.constructor,
                    w = g.rounding,
                    N = g.precision;
                if (p.s < 0 || !m || !m[0] || !p.e && 1 == m[0] && 1 == m.length) return new g(m && !m[0] ? -1 / 0 : 1 != p.s ? NaN : m ? 0 : p);
                if (null == r ? (R = !1, c = N) : c = r, g.precision = c += 10, t = (n = j(m)).charAt(0), !(15e14 > Math.abs(s = p.e))) return l = K(g, c + 2, N).times(s + ""), p = es(new g(t + "." + n.slice(1)), c - 10).plus(l), g.precision = N, null == r ? Y(p, N, w, R = !0) : p;
                for (; t < 7 && 1 != t || 1 == t && n.charAt(1) > 3;) t = (n = j((p = p.times(e)).d)).charAt(0), f++;
                for (s = p.e, t > 1 ? (p = new g("0." + n), s++) : p = new g(t + "." + n.slice(1)), h = p, a = o = p = W(p.minus(1), p.plus(1), c, 1), d = Y(p.times(p), c, 1), i = 3;;) {
                    if (o = Y(o.times(d), c, 1), j((l = a.plus(W(o, new g(i), c, 1))).d).slice(0, c) === j(a.d).slice(0, c)) {
                        if (a = a.times(2), 0 !== s && (a = a.plus(K(g, c + 2, N).times(s + ""))), a = W(a, new g(f), c, 1), null != r) return g.precision = N, a;
                        if (!J(a.d, c - 10, w, u)) return Y(a, g.precision = N, w, R = !0);
                        g.precision = c += 10, l = o = p = W(h.minus(1), h.plus(1), c, 1), d = Y(p.times(p), c, 1), i = u = 1
                    }
                    a = l, i += 2
                }
            }

            function eo(e) {
                return String(e.s * e.s / 0)
            }

            function eu(e, r) {
                var n, t, i;
                for ((n = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (t = r.search(/e/i)) > 0 ? (n < 0 && (n = t), n += +r.slice(t + 1), r = r.substring(0, t)) : n < 0 && (n = r.length), t = 0; 48 === r.charCodeAt(t); t++);
                for (i = r.length; 48 === r.charCodeAt(i - 1); --i);
                if (r = r.slice(t, i)) {
                    if (i -= t, e.e = n = n - t - 1, e.d = [], t = (n + 1) % 7, n < 0 && (t += 7), t < i) {
                        for (t && e.d.push(+r.slice(0, t)), i -= 7; t < i;) e.d.push(+r.slice(t, t += 7));
                        t = 7 - (r = r.slice(t)).length
                    } else t -= i;
                    for (; t--;) r += "0";
                    e.d.push(+r), R && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]))
                } else e.e = 0, e.d = [0];
                return e
            }

            function ea(e, r, n, t, i) {
                var s, o, u, a, l = e.precision,
                    c = Math.ceil(l / 7);
                for (R = !1, a = n.times(n), u = new e(t);;) {
                    if (o = W(u.times(a), new e(r++ * r++), l, 1), u = i ? t.plus(o) : t.minus(o), t = W(o.times(a), new e(r++ * r++), l, 1), void 0 !== (o = u.plus(t)).d[c]) {
                        for (s = c; o.d[s] === u.d[s] && s--;);
                        if (-1 == s) break
                    }
                    s = u, u = t, t = o, o = s
                }
                return R = !0, o.d.length = c + 1, o
            }

            function el(e, r) {
                for (var n = e; --r;) n *= e;
                return n
            }

            function ec(e, r) {
                var n, t = r.s < 0,
                    i = X(e, e.precision, 1),
                    s = i.times(.5);
                if ((r = r.abs()).lte(s)) return x = t ? 4 : 1, r;
                if ((n = r.divToInt(i)).isZero()) x = t ? 3 : 2;
                else {
                    if ((r = r.minus(n.times(i))).lte(s)) return x = en(n) ? t ? 2 : 3 : t ? 4 : 1, r;
                    x = en(n) ? t ? 1 : 4 : t ? 3 : 2
                }
                return r.minus(i).abs()
            }

            function eh(e, r, n, t) {
                var i, s, o, u, a, l, c, h, d, f = e.constructor,
                    p = void 0 !== n;
                if (p ? (H(n, 1, 1e9), void 0 === t ? t = f.rounding : H(t, 0, 8)) : (n = f.precision, t = f.rounding), e.isFinite()) {
                    for (o = (c = z(e)).indexOf("."), p ? (i = 2, 16 == r ? n = 4 * n - 3 : 8 == r && (n = 3 * n - 2)) : i = r, o >= 0 && (c = c.replace(".", ""), (d = new f(1)).e = c.length - o, d.d = B(z(d), 10, i), d.e = d.d.length), s = a = (h = B(c, 10, i)).length; 0 == h[--a];) h.pop();
                    if (h[0]) {
                        if (o < 0 ? s-- : ((e = new f(e)).d = h, e.e = s, h = (e = W(e, d, n, t, 0, i)).d, s = e.e, l = y), o = h[n], u = i / 2, l = l || void 0 !== h[n + 1], l = t < 4 ? (void 0 !== o || l) && (0 === t || t === (e.s < 0 ? 3 : 2)) : o > u || o === u && (4 === t || l || 6 === t && 1 & h[n - 1] || t === (e.s < 0 ? 8 : 7)), h.length = n, l)
                            for (; ++h[--n] > i - 1;) h[n] = 0, n || (++s, h.unshift(1));
                        for (a = h.length; !h[a - 1]; --a);
                        for (o = 0, c = ""; o < a; o++) c += P.charAt(h[o]);
                        if (p) {
                            if (a > 1) {
                                if (16 == r || 8 == r) {
                                    for (o = 16 == r ? 4 : 3, --a; a % o; a++) c += "0";
                                    for (a = (h = B(c, i, r)).length; !h[a - 1]; --a);
                                    for (o = 1, c = "1."; o < a; o++) c += P.charAt(h[o])
                                } else c = c.charAt(0) + "." + c.slice(1)
                            }
                            c = c + (s < 0 ? "p" : "p+") + s
                        } else if (s < 0) {
                            for (; ++s;) c = "0" + c;
                            c = "0." + c
                        } else if (++s > a)
                            for (s -= a; s--;) c += "0";
                        else s < a && (c = c.slice(0, s) + "." + c.slice(s))
                    } else c = p ? "0p+0" : "0";
                    c = (16 == r ? "0x" : 2 == r ? "0b" : 8 == r ? "0o" : "") + c
                } else c = eo(e);
                return e.s < 0 ? "-" + c : c
            }

            function ed(e, r) {
                if (e.length > r) return e.length = r, !0
            }

            function ef(e) {
                return new this(e).abs()
            }

            function ep(e) {
                return new this(e).acos()
            }

            function em(e) {
                return new this(e).acosh()
            }

            function eg(e, r) {
                return new this(e).plus(r)
            }

            function ew(e) {
                return new this(e).asin()
            }

            function eN(e) {
                return new this(e).asinh()
            }

            function eb(e) {
                return new this(e).atan()
            }

            function ev(e) {
                return new this(e).atanh()
            }

            function eE(e, r) {
                e = new this(e), r = new this(r);
                var n, t = this.precision,
                    i = this.rounding,
                    s = t + 4;
                return e.s && r.s ? e.d || r.d ? !r.d || e.isZero() ? (n = r.s < 0 ? X(this, t, i) : new this(0)).s = e.s : !e.d || r.isZero() ? (n = X(this, s, 1).times(.5)).s = e.s : r.s < 0 ? (this.precision = s, this.rounding = 1, n = this.atan(W(e, r, s, 1)), r = X(this, s, 1), this.precision = t, this.rounding = i, n = e.s < 0 ? n.minus(r) : n.plus(r)) : n = this.atan(W(e, r, s, 1)) : (n = X(this, s, 1).times(r.s > 0 ? .25 : .75)).s = e.s : n = new this(NaN), n
            }

            function ey(e) {
                return new this(e).cbrt()
            }

            function ex(e) {
                return Y(e = new this(e), e.e + 1, 2)
            }

            function eP(e, r, n) {
                return new this(e).clamp(r, n)
            }

            function eI(e) {
                if (!e || "object" != typeof e) throw Error(T + "Object expected");
                var r, n, t, i = !0 === e.defaults,
                    s = ["precision", 1, 1e9, "rounding", 0, 8, "toExpNeg", -9e15, 0, "toExpPos", 0, 9e15, "maxE", 0, 9e15, "minE", -9e15, 0, "modulo", 0, 9];
                for (r = 0; r < s.length; r += 3)
                    if (n = s[r], i && (this[n] = A[n]), void 0 !== (t = e[n])) {
                        if (k(t) === t && t >= s[r + 1] && t <= s[r + 2]) this[n] = t;
                        else throw Error(M + n + ": " + t)
                    }
                if (n = "crypto", i && (this[n] = A[n]), void 0 !== (t = e[n])) {
                    if (!0 === t || !1 === t || 0 === t || 1 === t) {
                        if (t) {
                            if ("u" > typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
                            else throw Error(O)
                        } else this[n] = !1
                    } else throw Error(M + n + ": " + t)
                }
                return this
            }

            function eS(e) {
                return new this(e).cos()
            }

            function eA(e) {
                return new this(e).cosh()
            }

            function eR(e, r) {
                return new this(e).div(r)
            }

            function eT(e) {
                return new this(e).exp()
            }

            function eM(e) {
                return Y(e = new this(e), e.e + 1, 3)
            }

            function eD() {
                var e, r, n = new this(0);
                for (R = !1, e = 0; e < arguments.length;)
                    if (r = new this(arguments[e++]), r.d) n.d && (n = n.plus(r.times(r)));
                    else {
                        if (r.s) return R = !0, new this(1 / 0);
                        n = r
                    }
                return R = !0, n.sqrt()
            }

            function eO(e) {
                return e instanceof eQ || e && e.toStringTag === F || !1
            }

            function eF(e) {
                return new this(e).ln()
            }

            function ek(e, r) {
                return new this(e).log(r)
            }

            function eC(e) {
                return new this(e).log(2)
            }

            function e_(e) {
                return new this(e).log(10)
            }

            function eq() {
                return et(this, arguments, "lt")
            }

            function eL() {
                return et(this, arguments, "gt")
            }

            function eU(e, r) {
                return new this(e).mod(r)
            }

            function e$(e, r) {
                return new this(e).mul(r)
            }

            function eV(e, r) {
                return new this(e).pow(r)
            }

            function eZ(e) {
                var r, n, t, i, s = 0,
                    o = new this(1),
                    u = [];
                if (void 0 === e ? e = this.precision : H(e, 1, 1e9), t = Math.ceil(e / 7), this.crypto) {
                    if (crypto.getRandomValues)
                        for (r = crypto.getRandomValues(new Uint32Array(t)); s < t;)(i = r[s]) >= 429e7 ? r[s] = crypto.getRandomValues(new Uint32Array(1))[0] : u[s++] = i % 1e7;
                    else if (crypto.randomBytes) {
                        for (r = crypto.randomBytes(t *= 4); s < t;)(i = r[s] + (r[s + 1] << 8) + (r[s + 2] << 16) + ((127 & r[s + 3]) << 24)) >= 214e7 ? crypto.randomBytes(4).copy(r, s) : (u.push(i % 1e7), s += 4);
                        s = t / 4
                    } else throw Error(O)
                } else
                    for (; s < t;) u[s++] = 1e7 * Math.random() | 0;
                for (t = u[--s], e %= 7, t && e && (i = C(10, 7 - e), u[s] = (t / i | 0) * i); 0 === u[s]; s--) u.pop();
                if (s < 0) n = 0, u = [0];
                else {
                    for (n = -1; 0 === u[0]; n -= 7) u.shift();
                    for (t = 1, i = u[0]; i >= 10; i /= 10) t++;
                    t < 7 && (n -= 7 - t)
                }
                return o.e = n, o.d = u, o
            }

            function ej(e) {
                return Y(e = new this(e), e.e + 1, this.rounding)
            }

            function eH(e) {
                return (e = new this(e)).d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN
            }

            function eJ(e) {
                return new this(e).sin()
            }

            function eB(e) {
                return new this(e).sinh()
            }

            function eW(e) {
                return new this(e).sqrt()
            }

            function eY(e, r) {
                return new this(e).sub(r)
            }

            function ez() {
                var e = 0,
                    r = arguments,
                    n = new this(r[e]);
                for (R = !1; n.s && ++e < r.length;) n = n.plus(r[e]);
                return R = !0, Y(n, this.precision, this.rounding)
            }

            function eG(e) {
                return new this(e).tan()
            }

            function eK(e) {
                return new this(e).tanh()
            }

            function eX(e) {
                return Y(e = new this(e), e.e + 1, 1)
            }
            Z[Symbol.for("nodejs.util.inspect.custom")] = Z.toString, Z[Symbol.toStringTag] = "Decimal";
            var eQ = Z.constructor = function e(r) {
                var n, t, i;

                function s(e) {
                    var r, n, t;
                    if (!(this instanceof s)) return new s(e);
                    if (this.constructor = s, eO(e)) {
                        this.s = e.s, R ? !e.d || e.e > s.maxE ? (this.e = NaN, this.d = null) : e.e < s.minE ? (this.e = 0, this.d = [0]) : (this.e = e.e, this.d = e.d.slice()) : (this.e = e.e, this.d = e.d ? e.d.slice() : e.d);
                        return
                    }
                    if ("number" == (t = typeof e)) {
                        if (0 === e) {
                            this.s = 1 / e < 0 ? -1 : 1, this.e = 0, this.d = [0];
                            return
                        }
                        if (e < 0 ? (e = -e, this.s = -1) : this.s = 1, e === ~~e && e < 1e7) {
                            for (r = 0, n = e; n >= 10; n /= 10) r++;
                            R ? r > s.maxE ? (this.e = NaN, this.d = null) : r < s.minE ? (this.e = 0, this.d = [0]) : (this.e = r, this.d = [e]) : (this.e = r, this.d = [e]);
                            return
                        }
                        if (0 * e != 0) {
                            e || (this.s = NaN), this.e = NaN, this.d = null;
                            return
                        }
                        return eu(this, e.toString())
                    }
                    if ("string" !== t) throw Error(M + e);
                    return 45 === (n = e.charCodeAt(0)) ? (e = e.slice(1), this.s = -1) : (43 === n && (e = e.slice(1)), this.s = 1), U.test(e) ? eu(this, e) : function(e, r) {
                        var n, t, i, s, o, u, a, l, c;
                        if (r.indexOf("_") > -1) {
                            if (r = r.replace(/(\d)_(?=\d)/g, "$1"), U.test(r)) return eu(e, r)
                        } else if ("Infinity" === r || "NaN" === r) return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
                        if (q.test(r)) n = 16, r = r.toLowerCase();
                        else if (_.test(r)) n = 2;
                        else if (L.test(r)) n = 8;
                        else throw Error(M + r);
                        for ((s = r.search(/p/i)) > 0 ? (a = +r.slice(s + 1), r = r.substring(2, s)) : r = r.slice(2), o = (s = r.indexOf(".")) >= 0, t = e.constructor, o && (s = (u = (r = r.replace(".", "")).length) - s, i = er(t, new t(n), s, 2 * s)), s = c = (l = B(r, n, 1e7)).length - 1; 0 === l[s]; --s) l.pop();
                        return s < 0 ? new t(0 * e.s) : (e.e = G(l, c), e.d = l, R = !1, o && (e = W(e, i, 4 * u)), a && (e = e.times(54 > Math.abs(a) ? C(2, a) : eQ.pow(2, a))), R = !0, e)
                    }(this, e)
                }
                if (s.prototype = Z, s.ROUND_UP = 0, s.ROUND_DOWN = 1, s.ROUND_CEIL = 2, s.ROUND_FLOOR = 3, s.ROUND_HALF_UP = 4, s.ROUND_HALF_DOWN = 5, s.ROUND_HALF_EVEN = 6, s.ROUND_HALF_CEIL = 7, s.ROUND_HALF_FLOOR = 8, s.EUCLID = 9, s.config = s.set = eI, s.clone = e, s.isDecimal = eO, s.abs = ef, s.acos = ep, s.acosh = em, s.add = eg, s.asin = ew, s.asinh = eN, s.atan = eb, s.atanh = ev, s.atan2 = eE, s.cbrt = ey, s.ceil = ex, s.clamp = eP, s.cos = eS, s.cosh = eA, s.div = eR, s.exp = eT, s.floor = eM, s.hypot = eD, s.ln = eF, s.log = ek, s.log10 = e_, s.log2 = eC, s.max = eq, s.min = eL, s.mod = eU, s.mul = e$, s.pow = eV, s.random = eZ, s.round = ej, s.sign = eH, s.sin = eJ, s.sinh = eB, s.sqrt = eW, s.sub = eY, s.sum = ez, s.tan = eG, s.tanh = eK, s.trunc = eX, void 0 === r && (r = {}), r && !0 !== r.defaults)
                    for (i = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < i.length;) r.hasOwnProperty(t = i[n++]) || (r[t] = this[t]);
                return s.config(r), s
            }(A);
            I = new eQ(I), S = new eQ(S);
            var e0 = eQ;
            /*! Bundled license information:

            decimal.js/decimal.mjs:
              (*!
               *  decimal.js v10.4.3
               *  An arbitrary-precision Decimal type for JavaScript.
               *  https://github.com/MikeMcl/decimal.js
               *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
               *  MIT Licence
               *)
            */
        }
    }
]);