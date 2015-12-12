! function() {
    function t(n, t) {
        function r(t) {
            var r, e = n.arcs[0 > t ? ~t : t],
                o = e[0];
            return n.transform ? (r = [0, 0], e.forEach(function(n) {
                r[0] += n[0], r[1] += n[1]
            })) : r = e[e.length - 1], 0 > t ? [r, o] : [o, r]
        }

        function e(n, t) {
            for (var r in n) {
                var e = n[r];
                delete t[e.start], delete e.start, delete e.end, e.forEach(function(n) {
                    o[0 > n ? ~n : n] = 1
                }), f.push(e)
            }
        }
        var o = {},
            i = {},
            u = {},
            f = [],
            c = -1;
        return t.forEach(function(r, e) {
            var o, i = n.arcs[0 > r ? ~r : r];
            i.length < 3 && !i[1][0] && !i[1][1] && (o = t[++c], t[c] = r, t[e] = o)
        }), t.forEach(function(n) {
            var t, e, o = r(n),
                f = o[0],
                c = o[1];
            if (t = u[f])
                if (delete u[t.end], t.push(n), t.end = c, e = i[c]) {
                    delete i[e.start];
                    var a = e === t ? t : t.concat(e);
                    i[a.start = t.start] = u[a.end = e.end] = a
                } else i[t.start] = u[t.end] = t;
            else if (t = i[c])
                if (delete i[t.start], t.unshift(n), t.start = f, e = u[f]) {
                    delete u[e.end];
                    var s = e === t ? t : e.concat(t);
                    i[s.start = e.start] = u[s.end = t.end] = s
                } else i[t.start] = u[t.end] = t;
            else t = [n], i[t.start = f] = u[t.end = c] = t
        }), e(u, i), e(i, u), t.forEach(function(n) {
            o[0 > n ? ~n : n] || f.push([n])
        }), f
    }

    function r(n, r, e) {
        function o(n) {
            var t = 0 > n ? ~n : n;
            (s[t] || (s[t] = [])).push({
                i: n,
                g: a
            })
        }

        function i(n) {
            n.forEach(o)
        }

        function u(n) {
            n.forEach(i)
        }

        function f(n) {
            "GeometryCollection" === n.type ? n.geometries.forEach(f) : n.type in l && (a = n, l[n.type](n.arcs))
        }
        var c = [];
        if (arguments.length > 1) {
            var a, s = [],
                l = {
                    LineString: i,
                    MultiLineString: u,
                    Polygon: u,
                    MultiPolygon: function(n) {
                        n.forEach(u)
                    }
                };
            f(r), s.forEach(arguments.length < 3 ? function(n) {
                c.push(n[0].i)
            } : function(n) {
                e(n[0].g, n[n.length - 1].g) && c.push(n[0].i)
            })
        } else
            for (var h = 0, p = n.arcs.length; p > h; ++h) c.push(h);
        return {
            type: "MultiLineString",
            arcs: t(n, c)
        }
    }

    function e(r, e) {
        function o(n) {
            n.forEach(function(t) {
                t.forEach(function(t) {
                    (f[t = 0 > t ? ~t : t] || (f[t] = [])).push(n)
                })
            }), c.push(n)
        }

        function i(n) {
            return l(u(r, {
                type: "Polygon",
                arcs: [n]
            }).coordinates[0]) > 0
        }
        var f = {},
            c = [],
            a = [];
        return e.forEach(function(n) {
            "Polygon" === n.type ? o(n.arcs) : "MultiPolygon" === n.type && n.arcs.forEach(o)
        }), c.forEach(function(n) {
            if (!n._) {
                var t = [],
                    r = [n];
                for (n._ = 1, a.push(t); n = r.pop();) t.push(n), n.forEach(function(n) {
                    n.forEach(function(n) {
                        f[0 > n ? ~n : n].forEach(function(n) {
                            n._ || (n._ = 1, r.push(n))
                        })
                    })
                })
            }
        }), c.forEach(function(n) {
            delete n._
        }), {
            type: "MultiPolygon",
            arcs: a.map(function(e) {
                var o = [];
                if (e.forEach(function(n) {
                        n.forEach(function(n) {
                            n.forEach(function(n) {
                                f[0 > n ? ~n : n].length < 2 && o.push(n)
                            })
                        })
                    }), o = t(r, o), (n = o.length) > 1)
                    for (var u, c = i(e[0][0]), a = 0; n > a; ++a)
                        if (c === i(o[a])) {
                            u = o[0], o[0] = o[a], o[a] = u;
                            break
                        }
                return o
            })
        }
    }

    function o(n, t) {
        return "GeometryCollection" === t.type ? {
            type: "FeatureCollection",
            features: t.geometries.map(function(t) {
                return i(n, t)
            })
        } : i(n, t)
    }

    function i(n, t) {
        var r = {
            type: "Feature",
            id: t.id,
            properties: t.properties || {},
            geometry: u(n, t)
        };
        return null == t.id && delete r.id, r
    }

    function u(n, t) {
        function r(n, t) {
            t.length && t.pop();
            for (var r, e = s[0 > n ? ~n : n], o = 0, i = e.length; i > o; ++o) t.push(r = e[o].slice()), a(r, o);
            0 > n && f(t, i)
        }

        function e(n) {
            return n = n.slice(), a(n, 0), n
        }

        function o(n) {
            for (var t = [], e = 0, o = n.length; o > e; ++e) r(n[e], t);
            return t.length < 2 && t.push(t[0].slice()), t
        }

        function i(n) {
            for (var t = o(n); t.length < 4;) t.push(t[0].slice());
            return t
        }

        function u(n) {
            return n.map(i)
        }

        function c(n) {
            var t = n.type;
            return "GeometryCollection" === t ? {
                type: t,
                geometries: n.geometries.map(c)
            } : t in l ? {
                type: t,
                coordinates: l[t](n)
            } : null
        }
        var a = v(n.transform),
            s = n.arcs,
            l = {
                Point: function(n) {
                    return e(n.coordinates)
                },
                MultiPoint: function(n) {
                    return n.coordinates.map(e)
                },
                LineString: function(n) {
                    return o(n.arcs)
                },
                MultiLineString: function(n) {
                    return n.arcs.map(o)
                },
                Polygon: function(n) {
                    return u(n.arcs)
                },
                MultiPolygon: function(n) {
                    return n.arcs.map(u)
                }
            };
        return c(t)
    }

    function f(n, t) {
        for (var r, e = n.length, o = e - t; o < --e;) r = n[o], n[o++] = n[e], n[e] = r
    }

    function c(n, t) {
        for (var r = 0, e = n.length; e > r;) {
            var o = r + e >>> 1;
            n[o] < t ? r = o + 1 : e = o
        }
        return r
    }

    function a(n) {
        function t(n, t) {
            n.forEach(function(n) {
                0 > n && (n = ~n);
                var r = o[n];
                r ? r.push(t) : o[n] = [t]
            })
        }

        function r(n, r) {
            n.forEach(function(n) {
                t(n, r)
            })
        }

        function e(n, t) {
            "GeometryCollection" === n.type ? n.geometries.forEach(function(n) {
                e(n, t)
            }) : n.type in u && u[n.type](n.arcs, t)
        }
        var o = {},
            i = n.map(function() {
                return []
            }),
            u = {
                LineString: t,
                MultiLineString: r,
                Polygon: r,
                MultiPolygon: function(n, t) {
                    n.forEach(function(n) {
                        r(n, t)
                    })
                }
            };
        n.forEach(e);
        for (var f in o)
            for (var a = o[f], s = a.length, l = 0; s > l; ++l)
                for (var h = l + 1; s > h; ++h) {
                    var p, g = a[l],
                        v = a[h];
                    (p = i[g])[f = c(p, v)] !== v && p.splice(f, 0, v), (p = i[v])[f = c(p, g)] !== g && p.splice(f, 0, g)
                }
        return i
    }

    function s(n, t) {
        function r(n) {
            i.remove(n), n[1][2] = t(n), i.push(n)
        }
        var e = v(n.transform),
            o = m(n.transform),
            i = g();
        return t || (t = h), n.arcs.forEach(function(n) {
            for (var u, f, c = [], a = 0, s = 0, l = n.length; l > s; ++s) f = n[s], e(n[s] = [f[0], f[1], 1 / 0], s);
            for (var s = 1, l = n.length - 1; l > s; ++s) u = n.slice(s - 1, s + 2), u[1][2] = t(u), c.push(u), i.push(u);
            for (var s = 0, l = c.length; l > s; ++s) u = c[s], u.previous = c[s - 1], u.next = c[s + 1];
            for (; u = i.pop();) {
                var h = u.previous,
                    p = u.next;
                u[1][2] < a ? u[1][2] = a : a = u[1][2], h && (h.next = p, h[2] = u[2], r(h)), p && (p.previous = h, p[0] = u[0], r(p))
            }
            n.forEach(o)
        }), n
    }

    function l(n) {
        for (var t, r = -1, e = n.length, o = n[e - 1], i = 0; ++r < e;) t = o, o = n[r], i += t[0] * o[1] - t[1] * o[0];
        return .5 * i
    }

    function h(n) {
        var t = n[0],
            r = n[1],
            e = n[2];
        return Math.abs((t[0] - e[0]) * (r[1] - t[1]) - (t[0] - r[0]) * (e[1] - t[1]))
    }

    function p(n, t) {
        return n[1][2] - t[1][2]
    }

    function g() {
        function n(n, t) {
            for (; t > 0;) {
                var r = (t + 1 >> 1) - 1,
                    o = e[r];
                if (p(n, o) >= 0) break;
                e[o._ = t] = o, e[n._ = t = r] = n
            }
        }

        function t(n, t) {
            for (;;) {
                var r = t + 1 << 1,
                    i = r - 1,
                    u = t,
                    f = e[u];
                if (o > i && p(e[i], f) < 0 && (f = e[u = i]), o > r && p(e[r], f) < 0 && (f = e[u = r]), u === t) break;
                e[f._ = t] = f, e[n._ = t = u] = n
            }
        }
        var r = {},
            e = [],
            o = 0;
        return r.push = function(t) {
            return n(e[t._ = o] = t, o++), o
        }, r.pop = function() {
            if (!(0 >= o)) {
                var n, r = e[0];
                return --o > 0 && (n = e[o], t(e[n._ = 0] = n, 0)), r
            }
        }, r.remove = function(r) {
            var i, u = r._;
            if (e[u] === r) return u !== --o && (i = e[o], (p(i, r) < 0 ? n : t)(e[i._ = u] = i, u)), u
        }, r
    }

    function v(n) {
        if (!n) return y;
        var t, r, e = n.scale[0],
            o = n.scale[1],
            i = n.translate[0],
            u = n.translate[1];
        return function(n, f) {
            f || (t = r = 0), n[0] = (t += n[0]) * e + i, n[1] = (r += n[1]) * o + u
        }
    }

    function m(n) {
        if (!n) return y;
        var t, r, e = n.scale[0],
            o = n.scale[1],
            i = n.translate[0],
            u = n.translate[1];
        return function(n, f) {
            f || (t = r = 0);
            var c = (n[0] - i) / e | 0,
                a = (n[1] - u) / o | 0;
            n[0] = c - t, n[1] = a - r, t = c, r = a
        }
    }

    function y() {}
    var d = {
        version: "1.6.19",
        mesh: function(n) {
            return u(n, r.apply(this, arguments))
        },
        meshArcs: r,
        merge: function(n) {
            return u(n, e.apply(this, arguments))
        },
        mergeArcs: e,
        feature: o,
        neighbors: a,
        presimplify: s
    };
    "function" == typeof define && define.amd ? define(d) : "object" == typeof module && module.exports ? module.exports = d : this.topojson = d
}();