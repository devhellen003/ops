(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1721], {
        99303: function(e, t, i) {
            Promise.resolve().then(i.bind(i, 61471)), Promise.resolve().then(i.t.bind(i, 77208, 23))
        },
        61471: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                TreasuryChart: function() {
                    return c
                }
            });
            var n = i(92284);
            i(78572);
            var o = i(93570),
                a = i(99211),
                s = i(69332),
                r = i(17223),
                l = i(97766);
            let p = [{
                    name: "Page A",
                    pv: 2400
                }, {
                    name: "Page B",
                    pv: 1398
                }, {
                    name: "Page C",
                    pv: 9800
                }, {
                    name: "Page D",
                    pv: 3908
                }, {
                    name: "Page E",
                    pv: 6800
                }, {
                    name: "Page F",
                    pv: 4800
                }, {
                    name: "Page G",
                    pv: 8300
                }],
                c = () => (0, n.jsx)(o.h, {
                    width: "100%",
                    height: "100%",
                    children: (0, n.jsxs)(a.T, {
                        width: 730,
                        height: 250,
                        data: p,
                        margin: {
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0
                        },
                        children: [(0, n.jsx)("defs", {
                            children: (0, n.jsxs)("linearGradient", {
                                id: "colorPv",
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [(0, n.jsx)("stop", {
                                    offset: "25%",
                                    stopColor: "#F4433640",
                                    stopOpacity: 1
                                }), (0, n.jsx)("stop", {
                                    offset: "95%",
                                    stopColor: "#F4433600",
                                    stopOpacity: 1
                                })]
                            })
                        }), (0, n.jsx)(s.K, {
                            dataKey: "name",
                            axisLine: !1,
                            tickLine: !1,
                            tick: {
                                fontSize: 12
                            }
                        }), (0, n.jsx)(r.B, {
                            domain: ["auto", "auto"],
                            axisLine: !1,
                            tickLine: !1,
                            tick: {
                                fontSize: 12
                            }
                        }), (0, n.jsx)(l.u, {
                            type: "monotone",
                            dataKey: "pv",
                            stroke: "#F44336",
                            strokeWidth: 2,
                            fillOpacity: 1,
                            fill: "url(#colorPv)",
                            dot: {
                                stroke: "#F44336",
                                strokeWidth: 2,
                                fill: "#fff",
                                r: 3
                            }
                        })]
                    })
                })
        }
    },
    function(e) {
        e.O(0, [7208, 6516, 7013, 6620, 1744], function() {
            return e(e.s = 99303)
        }), _N_E = e.O()
    }
]);