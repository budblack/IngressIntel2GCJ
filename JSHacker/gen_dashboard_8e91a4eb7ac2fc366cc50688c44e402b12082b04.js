'use strict';
var l, aa = aa || {}, n = this;
function q(a) {
    return void 0 !== a
}
function ba() {
}
function r(a) {
    a.l = function () {
        return a.vb ? a.vb : a.vb = new a
    }
}
function ca(a) {
    var b = typeof a;
    if ("object" == b)if (a) {
        if (a instanceof Array)return "array";
        if (a instanceof Object)return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c)return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return "function"
    } else return "null";
    else if ("function" == b && "undefined" == typeof a.call)return "object";
    return b
}
function da(a) {
    return "array" == ca(a)
}
function ea(a) {
    var b = ca(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}
function t(a) {
    return "string" == typeof a
}
function fa(a) {
    return "number" == typeof a
}
function ga(a) {
    return "function" == ca(a)
}
function ha(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}
function ia(a) {
    return a[ja] || (a[ja] = ++ka)
}
var ja = "closure_uid_" + (1E9 * Math.random() >>> 0), ka = 0;
function la(a, b, c) {
    return a.call.apply(a.bind, arguments)
}
function ma(a, b, c) {
    if (!a)throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function () {
        return a.apply(b, arguments)
    }
}
function v(a, b, c) {
    v = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
    return v.apply(null, arguments)
}
function na(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}
var x = Date.now || function () {
        return +new Date
    };
function oa(a, b) {
    var c = a.split("."), d = n;
    c[0] in d || !d.execScript || d.execScript("var " + c[0]);
    for (var f; c.length && (f = c.shift());)!c.length && q(b) ? d[f] = b : d[f] ? d = d[f] : d = d[f] = {}
}
function y(a, b) {
    function c() {
    }

    c.prototype = b.prototype;
    a.C = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Md = function (a, c, g) {
        for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++)h[k - 2] = arguments[k];
        return b.prototype[c].apply(a, h)
    }
};function pa(a, b, c, d) {
    this.displayName = a;
    this.color = b;
    this.css = c;
    this.Ia = d;
    this.Pc = d + "_symbol_black";
    this.ad = "mod_icon_" + d + "_L1"
}
pa.prototype.toString = function () {
    return this.css
};
var qa = new pa("Neutral", "#cccc00", "NEUTRAL", "neutral"), ra = new pa("Enlightened", "#00cc00", "ENLIGHTENED", "enl"), sa = new pa("Resistance", "#009eff", "RESISTANCE", "hum");
function ta(a) {
    return "ENLIGHTENED" == a || "E" == a ? ra : "RESISTANCE" == a || "R" == a ? sa : qa
};function ua(a, b, c, d) {
    this.i = a;
    this.s = ta(b);
    this.g = c;
    this.A = d
}
ua.prototype.toString = function () {
    return "guid:" + this.i + ",team:" + this.s.displayName
};
function va(a, b, c) {
    this.b = a;
    this.a = c || (b ? 5 : 1)
}
var wa = new va("getArtifactPortals", !0), xa = new va("getEntities", !0), ya = new va("getGameScore", !0), za = new va("getPlexts", !0), Aa = new va("getPortalDetails", !1), Ba = new va("getRegionScoreDetails", !0), Ca = new va("getMissionDetails", !0, 1), Da = new va("getTopMissionsForPortal", !1), Ea = new va("getTopMissionsInBounds", !1), Fa = new va("redeemReward", !1), Ga = new va("sendInviteEmail", !1), Ha = new va("sendPlext", !1), Ia = new va("wipeAccount", !1);
var Ja;
function Ka(a) {
    if (Error.captureStackTrace)Error.captureStackTrace(this, Ka); else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
}
y(Ka, Error);
Ka.prototype.name = "CustomError";
function La(a, b) {
    for (var c = a.split("%s"), d = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < c.length;)d += c.shift() + f.shift();
    return d + c.join("%s")
}
var Ma = String.prototype.trim ? function (a) {
    return a.trim()
} : function (a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};
function Na(a) {
    if (!Oa.test(a))return a;
    -1 != a.indexOf("&") && (a = a.replace(Pa, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(Qa, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(Ra, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(Sa, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(Ta, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(Ua, "&#0;"));
    return a
}
var Pa = /&/g, Qa = /</g, Ra = />/g, Sa = /"/g, Ta = /'/g, Ua = /\x00/g, Oa = /[\x00&<>"']/;
function z(a, b) {
    var c = q(void 0) ? a.toFixed(void 0) : String(a), d = c.indexOf(".");
    -1 == d && (d = c.length);
    d = Math.max(0, b - d);
    return Array(d + 1).join("0") + c
}
function Va(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
}
function Wa(a) {
    return String(a).replace(/\-([a-z])/g, function (a, c) {
        return c.toUpperCase()
    })
}
function Xa(a) {
    var b = t(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, f) {
        return b + f.toUpperCase()
    })
};function Ya(a, b) {
    b.unshift(a);
    Ka.call(this, La.apply(null, b));
    b.shift()
}
y(Ya, Ka);
Ya.prototype.name = "AssertionError";
function Za(a, b) {
    throw new Ya("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
};var $a = "closure_listenable_" + (1E6 * Math.random() | 0);
function ab(a) {
    return !(!a || !a[$a])
}
var bb = 0;
function cb(a, b, c, d, f) {
    this.listener = a;
    this.a = null;
    this.src = b;
    this.type = c;
    this.ya = !!d;
    this.Ea = f;
    this.tb = ++bb;
    this.oa = this.xa = !1
}
function db(a) {
    a.oa = !0;
    a.listener = null;
    a.a = null;
    a.src = null;
    a.Ea = null
};function C(a, b, c) {
    for (var d in a)b.call(c, a[d], d, a)
}
function eb(a, b, c) {
    var d = {}, f;
    for (f in a)b.call(c, a[f], f, a) && (d[f] = a[f]);
    return d
}
function fb(a) {
    var b = [], c = 0, d;
    for (d in a)b[c++] = a[d];
    return b
}
function gb(a) {
    var b = [], c = 0, d;
    for (d in a)b[c++] = d;
    return b
}
function hb(a, b) {
    for (var c in a)if (a[c] == b)return !0;
    return !1
}
function ib(a) {
    for (var b in a)return !1;
    return !0
}
function jb(a, b) {
    b in a && delete a[b]
}
function kb(a, b, c) {
    if (b in a)throw Error('The object already contains the key "' + b + '"');
    a[b] = c
}
function D(a, b, c) {
    return b in a ? a[b] : c
}
var lb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function mb(a, b) {
    for (var c, d, f = 1; f < arguments.length; f++) {
        d = arguments[f];
        for (c in d)a[c] = d[c];
        for (var g = 0; g < lb.length; g++)c = lb[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};var E = Array.prototype, nb = E.indexOf ? function (a, b, c) {
    return E.indexOf.call(a, b, c)
} : function (a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (t(a))return t(b) && 1 == b.length ? a.indexOf(b, c) : -1;
    for (; c < a.length; c++)if (c in a && a[c] === b)return c;
    return -1
}, F = E.forEach ? function (a, b, c) {
    E.forEach.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, f = t(a) ? a.split("") : a, g = 0; g < d; g++)g in f && b.call(c, f[g], g, a)
}, ob = E.filter ? function (a, b, c) {
    return E.filter.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, f = [], g = 0, h = t(a) ?
        a.split("") : a, k = 0; k < d; k++)if (k in h) {
        var m = h[k];
        b.call(c, m, k, a) && (f[g++] = m)
    }
    return f
}, pb = E.map ? function (a, b, c) {
    return E.map.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, f = Array(d), g = t(a) ? a.split("") : a, h = 0; h < d; h++)h in g && (f[h] = b.call(c, g[h], h, a));
    return f
}, qb = E.some ? function (a, b, c) {
    return E.some.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, f = t(a) ? a.split("") : a, g = 0; g < d; g++)if (g in f && b.call(c, f[g], g, a))return !0;
    return !1
};
function rb(a, b) {
    var c;
    a:{
        c = a.length;
        for (var d = t(a) ? a.split("") : a, f = 0; f < c; f++)if (f in d && b.call(void 0, d[f], f, a)) {
            c = f;
            break a
        }
        c = -1
    }
    return 0 > c ? null : t(a) ? a.charAt(c) : a[c]
}
function sb(a, b) {
    return 0 <= nb(a, b)
}
function tb(a) {
    if (!da(a))for (var b = a.length - 1; 0 <= b; b--)delete a[b];
    a.length = 0
}
function ub(a, b) {
    var c = nb(a, b), d;
    (d = 0 <= c) && E.splice.call(a, c, 1);
    return d
}
function vb(a) {
    return E.concat.apply(E, arguments)
}
function wb(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
        return c
    }
    return []
}
function xb(a, b, c, d) {
    E.splice.apply(a, yb(arguments, 1))
}
function yb(a, b, c) {
    return 2 >= arguments.length ? E.slice.call(a, b) : E.slice.call(a, b, c)
}
function zb(a, b) {
    a.sort(b || Ab)
}
function Ab(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
};function Bb(a) {
    this.src = a;
    this.a = {};
    this.b = 0
}
function Cb(a, b, c, d, f, g) {
    var h = b.toString();
    b = a.a[h];
    b || (b = a.a[h] = [], a.b++);
    var k = Db(b, c, f, g);
    -1 < k ? (a = b[k], d || (a.xa = !1)) : (a = new cb(c, a.src, h, !!f, g), a.xa = d, b.push(a));
    return a
}
function Eb(a, b) {
    var c = b.type;
    c in a.a && ub(a.a[c], b) && (db(b), 0 == a.a[c].length && (delete a.a[c], a.b--))
}
function Fb(a, b, c, d, f) {
    a = a.a[b.toString()];
    b = -1;
    a && (b = Db(a, c, d, f));
    return -1 < b ? a[b] : null
}
function Db(a, b, c, d) {
    for (var f = 0; f < a.length; ++f) {
        var g = a[f];
        if (!g.oa && g.listener == b && g.ya == !!c && g.Ea == d)return f
    }
    return -1
};var Gb;
a:{
    var Hb = n.navigator;
    if (Hb) {
        var Ib = Hb.userAgent;
        if (Ib) {
            Gb = Ib;
            break a
        }
    }
    Gb = ""
}
function G(a) {
    return -1 != Gb.indexOf(a)
};function Jb() {
    return G("Opera") || G("OPR")
}
function Kb() {
    return (G("Chrome") || G("CriOS")) && !Jb() && !G("Edge")
};var Lb = Jb(), H = G("Trident") || G("MSIE"), Mb = G("Edge"), Nb = G("Gecko") && !(-1 != Gb.toLowerCase().indexOf("webkit") && !G("Edge")) && !(G("Trident") || G("MSIE")) && !G("Edge"), Ob = -1 != Gb.toLowerCase().indexOf("webkit") && !G("Edge");
function Pb() {
    var a = Gb;
    if (Nb)return /rv\:([^\);]+)(\)|;)/.exec(a);
    if (Mb)return /Edge\/([\d\.]+)/.exec(a);
    if (H)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (Ob)return /WebKit\/(\S+)/.exec(a)
}
function Qb() {
    var a = n.document;
    return a ? a.documentMode : void 0
}
var Rb = function () {
    if (Lb && n.opera) {
        var a = n.opera.version;
        return ga(a) ? a() : a
    }
    var a = "", b = Pb();
    b && (a = b ? b[1] : "");
    return H && (b = Qb(), b > parseFloat(a)) ? String(b) : a
}(), Sb = {};
function I(a) {
    var b;
    if (!(b = Sb[a])) {
        b = 0;
        for (var c = Ma(String(Rb)).split("."), d = Ma(String(a)).split("."), f = Math.max(c.length, d.length), g = 0; 0 == b && g < f; g++) {
            var h = c[g] || "", k = d[g] || "", m = /(\d*)(\D*)/g, u = /(\d*)(\D*)/g;
            do {
                var p = m.exec(h) || ["", "", ""], w = u.exec(k) || ["", "", ""];
                if (0 == p[0].length && 0 == w[0].length)break;
                b = Va(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == w[1].length ? 0 : parseInt(w[1], 10)) || Va(0 == p[2].length, 0 == w[2].length) || Va(p[2], w[2])
            } while (0 == b)
        }
        b = Sb[a] = 0 <= b
    }
    return b
}
var Tb = n.document, Ub = Tb && H ? Qb() || ("CSS1Compat" == Tb.compatMode ? parseInt(Rb, 10) : 5) : void 0;
var Vb = !H || 9 <= Ub, Wb = !H || 9 <= Ub, Xb = H && !I("9");
!Ob || I("528");
Nb && I("1.9b") || H && I("8") || Lb && I("9.5") || Ob && I("528");
Nb && !I("8") || H && I("9");
function J() {
    0 != Yb && (Zb[ia(this)] = this);
    this.j = this.j;
    this.m = this.m
}
var Yb = 0, Zb = {};
J.prototype.j = !1;
J.prototype.ka = function () {
    if (!this.j && (this.j = !0, this.O(), 0 != Yb)) {
        var a = ia(this);
        delete Zb[a]
    }
};
function $b(a, b) {
    a.j ? b.call(void 0) : (a.m || (a.m = []), a.m.push(q(void 0) ? v(b, void 0) : b))
}
J.prototype.O = function () {
    if (this.m)for (; this.m.length;)this.m.shift()()
};
function ac(a) {
    a && "function" == typeof a.ka && a.ka()
};function bc(a, b) {
    this.type = a;
    this.a = this.target = b;
    this.c = !1;
    this.Hb = !0
}
bc.prototype.stopPropagation = function () {
    this.c = !0
};
bc.prototype.f = function () {
    this.Hb = !1
};
function cc(a) {
    cc[" "](a);
    return a
}
cc[" "] = ba;
function dc(a, b) {
    bc.call(this, a ? a.type : "");
    this.a = this.target = null;
    this.g = this.clientY = this.clientX = 0;
    this.b = this.state = null;
    if (a) {
        this.type = a.type;
        var c = a.changedTouches ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;
        var d = a.relatedTarget;
        if (d && Nb)try {
            cc(d.nodeName)
        } catch (f) {
        }
        null === c ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== c.clientX ? c.clientX : c.pageX, this.clientY = void 0 !== c.clientY ? c.clientY :
            c.pageY);
        this.g = a.keyCode || 0;
        this.state = a.state;
        this.b = a;
        a.defaultPrevented && this.f()
    }
}
y(dc, bc);
var ec = [1, 4, 2];
dc.prototype.stopPropagation = function () {
    dc.C.stopPropagation.call(this);
    this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
};
dc.prototype.f = function () {
    dc.C.f.call(this);
    var a = this.b;
    if (a.preventDefault)a.preventDefault(); else if (a.returnValue = !1, Xb)try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)a.keyCode = -1
    } catch (b) {
    }
};
var fc = "closure_lm_" + (1E6 * Math.random() | 0), gc = {}, hc = 0;
function K(a, b, c, d, f) {
    if (da(b)) {
        for (var g = 0; g < b.length; g++)K(a, b[g], c, d, f);
        return null
    }
    c = ic(c);
    return ab(a) ? a.P(b, c, d, f) : jc(a, b, c, !1, d, f)
}
function jc(a, b, c, d, f, g) {
    if (!b)throw Error("Invalid event type");
    var h = !!f, k = kc(a);
    k || (a[fc] = k = new Bb(a));
    c = Cb(k, b, c, d, f, g);
    if (c.a)return c;
    d = lc();
    c.a = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)a.addEventListener(b.toString(), d, h); else if (a.attachEvent)a.attachEvent(mc(b.toString()), d); else throw Error("addEventListener and attachEvent are unavailable.");
    hc++;
    return c
}
function lc() {
    var a = nc, b = Wb ? function (c) {
        return a.call(b.src, b.listener, c)
    } : function (c) {
        c = a.call(b.src, b.listener, c);
        if (!c)return c
    };
    return b
}
function oc(a, b, c, d, f) {
    if (da(b))for (var g = 0; g < b.length; g++)oc(a, b[g], c, d, f); else c = ic(c), ab(a) ? Cb(a.Y, String(b), c, !0, d, f) : jc(a, b, c, !0, d, f)
}
function pc(a, b, c, d, f) {
    if (da(b))for (var g = 0; g < b.length; g++)pc(a, b[g], c, d, f); else c = ic(c), ab(a) ? a.eb(b, c, d, f) : a && (a = kc(a)) && (b = Fb(a, b, c, !!d, f)) && qc(b)
}
function qc(a) {
    if (!fa(a) && a && !a.oa) {
        var b = a.src;
        if (ab(b))Eb(b.Y, a); else {
            var c = a.type, d = a.a;
            b.removeEventListener ? b.removeEventListener(c, d, a.ya) : b.detachEvent && b.detachEvent(mc(c), d);
            hc--;
            (c = kc(b)) ? (Eb(c, a), 0 == c.b && (c.src = null, b[fc] = null)) : db(a)
        }
    }
}
function mc(a) {
    return a in gc ? gc[a] : gc[a] = "on" + a
}
function rc(a, b, c, d) {
    var f = !0;
    if (a = kc(a))if (b = a.a[b.toString()])for (b = b.concat(), a = 0; a < b.length; a++) {
        var g = b[a];
        g && g.ya == c && !g.oa && (g = sc(g, d), f = f && !1 !== g)
    }
    return f
}
function sc(a, b) {
    var c = a.listener, d = a.Ea || a.src;
    a.xa && qc(a);
    return c.call(d, b)
}
function nc(a, b) {
    if (a.oa)return !0;
    if (!Wb) {
        var c;
        if (!(c = b))a:{
            c = ["window", "event"];
            for (var d = n, f; f = c.shift();)if (null != d[f])d = d[f]; else {
                c = null;
                break a
            }
            c = d
        }
        f = c;
        c = new dc(f, this);
        d = !0;
        if (!(0 > f.keyCode || void 0 != f.returnValue)) {
            a:{
                var g = !1;
                if (0 == f.keyCode)try {
                    f.keyCode = -1;
                    break a
                } catch (h) {
                    g = !0
                }
                if (g || void 0 == f.returnValue)f.returnValue = !0
            }
            f = [];
            for (g = c.a; g; g = g.parentNode)f.push(g);
            for (var g = a.type, k = f.length - 1; !c.c && 0 <= k; k--) {
                c.a = f[k];
                var m = rc(f[k], g, !0, c), d = d && m
            }
            for (k = 0; !c.c && k < f.length; k++)c.a = f[k], m = rc(f[k],
                g, !1, c), d = d && m
        }
        return d
    }
    return sc(a, new dc(b, this))
}
function kc(a) {
    a = a[fc];
    return a instanceof Bb ? a : null
}
var tc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function ic(a) {
    if (ga(a))return a;
    a[tc] || (a[tc] = function (b) {
        return a.handleEvent(b)
    });
    return a[tc]
};function uc(a) {
    if ("function" == typeof a.L)return a.L();
    if (t(a))return a.split("");
    if (ea(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++)b.push(a[d]);
        return b
    }
    return fb(a)
}
function vc(a) {
    if ("function" == typeof a.W)return a.W();
    if ("function" != typeof a.L) {
        if (ea(a) || t(a)) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++)b.push(c);
            return b
        }
        return gb(a)
    }
}
function wc(a, b, c) {
    if ("function" == typeof a.forEach)a.forEach(b, c); else if (ea(a) || t(a))F(a, b, c); else for (var d = vc(a), f = uc(a), g = f.length, h = 0; h < g; h++)b.call(c, f[h], d && d[h], a)
}
function xc(a, b, c) {
    if ("function" == typeof a.filter)return a.filter(b, c);
    if (ea(a) || t(a))return ob(a, b, c);
    var d, f = vc(a), g = uc(a), h = g.length;
    if (f) {
        d = {};
        for (var k = 0; k < h; k++)b.call(c, g[k], f[k], a) && (d[f[k]] = g[k])
    } else for (d = [], k = 0; k < h; k++)b.call(c, g[k], void 0, a) && d.push(g[k]);
    return d
};var yc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
function zc(a) {
    if (Ac) {
        Ac = !1;
        var b = n.location;
        if (b) {
            var c = b.href;
            if (c && (c = (c = zc(c)[3] || null) ? decodeURI(c) : c) && c != b.hostname)throw Ac = !0, Error();
        }
    }
    return a.match(yc)
}
var Ac = Ob;
function Bc(a, b) {
    if (a)for (var c = a.split("&"), d = 0; d < c.length; d++) {
        var f = c[d].indexOf("="), g = null, h = null;
        0 <= f ? (g = c[d].substring(0, f), h = c[d].substring(f + 1)) : g = c[d];
        b(g, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "")
    }
};function Cc(a, b) {
    this.c = a;
    this.f = b;
    this.b = 0;
    this.a = null
}
function Dc(a) {
    var b;
    0 < a.b ? (a.b--, b = a.a, a.a = b.next, b.next = null) : b = a.c();
    return b
}
function Ec(a, b) {
    a.f(b);
    100 > a.b && (a.b++, b.next = a.a, a.a = b)
};function Fc() {
    this.b = this.a = null
}
var Hc = new Cc(function () {
    return new Gc
}, function (a) {
    a.reset()
});
function Ic() {
    var a = Jc, b = null;
    a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
    return b
}
function Gc() {
    this.next = this.b = this.a = null
}
Gc.prototype.reset = function () {
    this.next = this.b = this.a = null
};
function Kc(a) {
    n.setTimeout(function () {
        throw a;
    }, 0)
}
var Lc;
function Mc() {
    var a = n.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !G("Presto") && (a = function () {
        var a = document.createElement("IFRAME");
        a.style.display = "none";
        a.src = "";
        document.documentElement.appendChild(a);
        var b = a.contentWindow, a = b.document;
        a.open();
        a.write("");
        a.close();
        var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = v(function (a) {
            if (("*" == d || a.origin == d) && a.data ==
                c)this.port1.onmessage()
        }, this);
        b.addEventListener("message", a, !1);
        this.port1 = {};
        this.port2 = {
            postMessage: function () {
                b.postMessage(c, d)
            }
        }
    });
    if ("undefined" !== typeof a && !G("Trident") && !G("MSIE")) {
        var b = new a, c = {}, d = c;
        b.port1.onmessage = function () {
            if (q(c.next)) {
                c = c.next;
                var a = c.qb;
                c.qb = null;
                a()
            }
        };
        return function (a) {
            d.next = {qb: a};
            d = d.next;
            b.port2.postMessage(0)
        }
    }
    return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (a) {
        var b = document.createElement("SCRIPT");
        b.onreadystatechange = function () {
            b.onreadystatechange = null;
            b.parentNode.removeChild(b);
            b = null;
            a();
            a = null
        };
        document.documentElement.appendChild(b)
    } : function (a) {
        n.setTimeout(a, 0)
    }
};function Nc(a, b) {
    Oc || Pc();
    Qc || (Oc(), Qc = !0);
    var c = Jc, d = Dc(Hc);
    d.a = a;
    d.b = b;
    d.next = null;
    c.b ? c.b.next = d : c.a = d;
    c.b = d
}
var Oc;
function Pc() {
    if (n.Promise && n.Promise.resolve) {
        var a = n.Promise.resolve(void 0);
        Oc = function () {
            a.then(Rc)
        }
    } else Oc = function () {
        var a = Rc;
        !ga(n.setImmediate) || n.Window && n.Window.prototype && n.Window.prototype.setImmediate == n.setImmediate ? (Lc || (Lc = Mc()), Lc(a)) : n.setImmediate(a)
    }
}
var Qc = !1, Jc = new Fc;
[].push(function () {
    Qc = !1;
    Jc = new Fc
});
function Rc() {
    for (var a = null; a = Ic();) {
        try {
            a.a.call(a.b)
        } catch (b) {
            Kc(b)
        }
        Ec(Hc, a)
    }
    Qc = !1
};function Sc(a) {
    a.prototype.then = a.prototype.then;
    a.prototype.$goog_Thenable = !0
}
function Tc(a) {
    if (!a)return !1;
    try {
        return !!a.$goog_Thenable
    } catch (b) {
        return !1
    }
};function Uc(a, b) {
    this.a = Vc;
    this.j = void 0;
    this.c = this.b = this.f = null;
    this.g = this.h = !1;
    if (a != ba)try {
        var c = this;
        a.call(b, function (a) {
            Wc(c, Xc, a)
        }, function (a) {
            try {
                if (a instanceof Error)throw a;
                throw Error("Promise rejected.");
            } catch (b) {
            }
            Wc(c, Yc, a)
        })
    } catch (d) {
        Wc(this, Yc, d)
    }
}
var Vc = 0, Xc = 2, Yc = 3;
function Zc() {
    this.next = this.c = this.b = this.f = this.a = null;
    this.g = !1
}
Zc.prototype.reset = function () {
    this.c = this.b = this.f = this.a = null;
    this.g = !1
};
var $c = new Cc(function () {
    return new Zc
}, function (a) {
    a.reset()
});
function ad(a, b, c) {
    var d = Dc($c);
    d.f = a;
    d.b = b;
    d.c = c;
    return d
}
Uc.prototype.then = function (a, b, c) {
    return bd(this, ga(a) ? a : null, ga(b) ? b : null, c)
};
Sc(Uc);
function cd(a, b) {
    a.b || a.a != Xc && a.a != Yc || dd(a);
    a.c ? a.c.next = b : a.b = b;
    a.c = b
}
function bd(a, b, c, d) {
    var f = ad(null, null, null);
    f.a = new Uc(function (a, h) {
        f.f = b ? function (c) {
            try {
                var f = b.call(d, c);
                a(f)
            } catch (u) {
                h(u)
            }
        } : a;
        f.b = c ? function (b) {
            try {
                var f = c.call(d, b);
                a(f)
            } catch (u) {
                h(u)
            }
        } : h
    });
    f.a.f = a;
    cd(a, f);
    return f.a
}
Uc.prototype.o = function (a) {
    this.a = Vc;
    Wc(this, Xc, a)
};
Uc.prototype.u = function (a) {
    this.a = Vc;
    Wc(this, Yc, a)
};
function Wc(a, b, c) {
    if (a.a == Vc) {
        a == c && (b = Yc, c = new TypeError("Promise cannot resolve to itself"));
        a.a = 1;
        var d;
        a:{
            var f = c, g = a.o, h = a.u;
            if (f instanceof Uc)cd(f, ad(g || ba, h || null, a)), d = !0; else if (Tc(f))f.then(g, h, a), d = !0; else {
                if (ha(f))try {
                    var k = f.then;
                    if (ga(k)) {
                        ed(f, k, g, h, a);
                        d = !0;
                        break a
                    }
                } catch (m) {
                    h.call(a, m);
                    d = !0;
                    break a
                }
                d = !1
            }
        }
        d || (a.j = c, a.a = b, a.f = null, dd(a), b != Yc || fd(a, c))
    }
}
function ed(a, b, c, d, f) {
    function g(a) {
        k || (k = !0, d.call(f, a))
    }

    function h(a) {
        k || (k = !0, c.call(f, a))
    }

    var k = !1;
    try {
        b.call(a, h, g)
    } catch (m) {
        g(m)
    }
}
function dd(a) {
    a.h || (a.h = !0, Nc(a.m, a))
}
function gd(a) {
    var b = null;
    a.b && (b = a.b, a.b = b.next, b.next = null);
    a.b || (a.c = null);
    return b
}
Uc.prototype.m = function () {
    for (var a = null; a = gd(this);) {
        var b = this.a, c = this.j;
        if (b == Yc && a.b && !a.g)for (var d = void 0, d = this; d && d.g; d = d.f)d.g = !1;
        if (a.a)a.a.f = null, hd(a, b, c); else try {
            a.g ? a.f.call(a.c) : hd(a, b, c)
        } catch (f) {
            id.call(null, f)
        }
        Ec($c, a)
    }
    this.h = !1
};
function hd(a, b, c) {
    b == Xc ? a.f.call(a.c, c) : a.b && a.b.call(a.c, c)
}
function fd(a, b) {
    a.g = !0;
    Nc(function () {
        a.g && id.call(null, b)
    })
}
var id = Kc;
function jd() {
    J.call(this);
    this.Y = new Bb(this);
    this.nc = this;
    this.J = null
}
y(jd, J);
jd.prototype[$a] = !0;
l = jd.prototype;
l.bb = function (a) {
    this.J = a
};
l.addEventListener = function (a, b, c, d) {
    K(this, a, b, c, d)
};
l.removeEventListener = function (a, b, c, d) {
    pc(this, a, b, c, d)
};
function kd(a, b) {
    var c, d = a.J;
    if (d)for (c = []; d; d = d.J)c.push(d);
    var d = a.nc, f = b, g = f.type || f;
    if (t(f))f = new bc(f, d); else if (f instanceof bc)f.target = f.target || d; else {
        var h = f, f = new bc(g, d);
        mb(f, h)
    }
    var h = !0, k;
    if (c)for (var m = c.length - 1; !f.c && 0 <= m; m--)k = f.a = c[m], h = ld(k, g, !0, f) && h;
    f.c || (k = f.a = d, h = ld(k, g, !0, f) && h, f.c || (h = ld(k, g, !1, f) && h));
    if (c)for (m = 0; !f.c && m < c.length; m++)k = f.a = c[m], h = ld(k, g, !1, f) && h
}
l.O = function () {
    jd.C.O.call(this);
    if (this.Y) {
        var a = this.Y, b = 0, c;
        for (c in a.a) {
            for (var d = a.a[c], f = 0; f < d.length; f++)++b, db(d[f]);
            delete a.a[c];
            a.b--
        }
    }
    this.J = null
};
l.P = function (a, b, c, d) {
    return Cb(this.Y, String(a), b, !1, c, d)
};
l.eb = function (a, b, c, d) {
    var f;
    f = this.Y;
    a = String(a).toString();
    if (a in f.a) {
        var g = f.a[a];
        b = Db(g, b, c, d);
        -1 < b ? (db(g[b]), E.splice.call(g, b, 1), 0 == g.length && (delete f.a[a], f.b--), f = !0) : f = !1
    } else f = !1;
    return f
};
function ld(a, b, c, d) {
    b = a.Y.a[String(b)];
    if (!b)return !0;
    b = b.concat();
    for (var f = !0, g = 0; g < b.length; ++g) {
        var h = b[g];
        if (h && !h.oa && h.ya == c) {
            var k = h.listener, m = h.Ea || h.src;
            h.xa && Eb(a.Y, h);
            f = !1 !== k.call(m, d) && f
        }
    }
    return f && 0 != d.Hb
};function md(a, b, c) {
    if (ga(a))c && (a = v(a, c)); else if (a && "function" == typeof a.handleEvent)a = v(a.handleEvent, a); else throw Error("Invalid listener argument");
    return 2147483647 < b ? -1 : n.setTimeout(a, b || 0)
};function nd() {
}
nd.prototype.a = null;
function od(a) {
    var b;
    (b = a.a) || (b = {}, pd(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
    return b
};var qd;
function rd() {
}
y(rd, nd);
function sd(a) {
    return (a = pd(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function pd(a) {
    if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d), a.b = d
            } catch (f) {
            }
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.b
}
qd = new rd;
function td() {
    this.b = ud
}
td.prototype.a = function () {
    return 1
};
td.prototype.toString = function () {
    return "SafeUrl{}"
};
var ud = {};
function vd() {
    this.a = "";
    this.b = wd
}
var wd = {};
vd.prototype.toString = function () {
    return "SafeStyle{" + this.a + "}"
};
function xd() {
    this.b = yd
}
xd.prototype.a = function () {
    return 1
};
xd.prototype.toString = function () {
    return "TrustedResourceUrl{}"
};
var yd = {};
function zd() {
    this.b = "";
    this.f = Ad;
    this.c = null
}
zd.prototype.a = function () {
    return this.c
};
zd.prototype.toString = function () {
    return "SafeHtml{" + this.b + "}"
};
var Ad = {};
function Bd(a) {
    var b = new zd;
    b.b = a;
    b.c = 0
}
Bd("<!DOCTYPE html>");
Bd("");
function Cd(a, b) {
    this.b = {};
    this.a = [];
    this.f = this.c = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2)throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)Dd(this, arguments[d], arguments[d + 1])
    } else if (a) {
        a instanceof Cd ? (c = a.W(), d = a.L()) : (c = gb(a), d = fb(a));
        for (var f = 0; f < c.length; f++)Dd(this, c[f], d[f])
    }
}
l = Cd.prototype;
l.F = function () {
    return this.c
};
l.L = function () {
    Ed(this);
    for (var a = [], b = 0; b < this.a.length; b++)a.push(this.b[this.a[b]]);
    return a
};
l.W = function () {
    Ed(this);
    return this.a.concat()
};
l.isEmpty = function () {
    return 0 == this.c
};
l.clear = function () {
    this.b = {};
    this.f = this.c = this.a.length = 0
};
function Fd(a, b) {
    return Gd(a.b, b) ? (delete a.b[b], a.c--, a.f++, a.a.length > 2 * a.c && Ed(a), !0) : !1
}
function Ed(a) {
    if (a.c != a.a.length) {
        for (var b = 0, c = 0; b < a.a.length;) {
            var d = a.a[b];
            Gd(a.b, d) && (a.a[c++] = d);
            b++
        }
        a.a.length = c
    }
    if (a.c != a.a.length) {
        for (var f = {}, c = b = 0; b < a.a.length;)d = a.a[b], Gd(f, d) || (a.a[c++] = d, f[d] = 1), b++;
        a.a.length = c
    }
}
function Hd(a, b) {
    return Gd(a.b, b) ? a.b[b] : void 0
}
function Dd(a, b, c) {
    Gd(a.b, b) || (a.c++, a.a.push(b), a.f++);
    a.b[b] = c
}
l.forEach = function (a, b) {
    for (var c = this.W(), d = 0; d < c.length; d++) {
        var f = c[d];
        a.call(b, Hd(this, f), f, this)
    }
};
l.clone = function () {
    return new Cd(this)
};
function Gd(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};function Id(a) {
    this.a = new Cd;
    if (a) {
        a = uc(a);
        for (var b = a.length, c = 0; c < b; c++) {
            var d = a[c];
            Dd(this.a, Jd(d), d)
        }
    }
}
function Jd(a) {
    var b = typeof a;
    return "object" == b && a || "function" == b ? "o" + ia(a) : b.substr(0, 1) + a
}
l = Id.prototype;
l.F = function () {
    return this.a.F()
};
l.clear = function () {
    this.a.clear()
};
l.isEmpty = function () {
    return this.a.isEmpty()
};
l.contains = function (a) {
    a = Jd(a);
    return Gd(this.a.b, a)
};
l.L = function () {
    return this.a.L()
};
l.clone = function () {
    return new Id(this)
};
function Kd(a, b, c, d, f) {
    this.reset(a, b, c, d, f)
}
Kd.prototype.a = null;
var Ld = 0;
Kd.prototype.reset = function (a, b, c, d, f) {
    "number" == typeof f || Ld++;
    d || x();
    this.b = b;
    delete this.a
};
function Md(a) {
    this.f = a;
    this.b = this.c = this.a = null
}
function Nd(a, b) {
    this.name = a;
    this.value = b
}
Nd.prototype.toString = function () {
    return this.name
};
var Od = new Nd("SEVERE", 1E3), Pd = new Nd("CONFIG", 700), Qd = new Nd("FINE", 500);
function Rd(a) {
    if (a.c)return a.c;
    if (a.a)return Rd(a.a);
    Za("Root logger has no level set.");
    return null
}
Md.prototype.log = function (a, b, c) {
    if (a.value >= Rd(this).value)for (ga(b) && (b = b()), a = new Kd(a, String(b), this.f), c && (a.a = c), c = "log:" + a.b, n.console && (n.console.timeStamp ? n.console.timeStamp(c) : n.console.markTimeline && n.console.markTimeline(c)), n.msWriteProfilerMark && n.msWriteProfilerMark(c), c = this; c;)c = c.a
};
var Sd = {}, Td = null;
function Ud(a) {
    Td || (Td = new Md(""), Sd[""] = Td, Td.c = Pd);
    var b;
    if (!(b = Sd[a])) {
        b = new Md(a);
        var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Ud(a.substr(0, c));
        c.b || (c.b = {});
        c.b[d] = b;
        b.a = c;
        Sd[a] = b
    }
    return b
};function Vd(a, b) {
    a && a.log(Qd, b, void 0)
};function Wd(a) {
    jd.call(this);
    this.h = new Cd;
    this.U = a || null;
    this.b = !1;
    this.I = this.a = null;
    this.f = this.ua = this.u = "";
    this.c = this.ja = this.o = this.ba = !1;
    this.g = 0;
    this.w = null;
    this.lb = Xd;
    this.A = this.Gc = !1
}
y(Wd, jd);
var Xd = "", Yd = Wd.prototype, Zd = Ud("goog.net.XhrIo");
Yd.T = Zd;
var $d = /^https?$/i, ae = ["POST", "PUT"];
function be(a, b, c) {
    if (a.a)throw Error("[goog.net.XhrIo] Object is active with another request=" + a.u + "; newUri=" + b);
    a.u = b;
    a.f = "";
    a.ua = "POST";
    a.ba = !1;
    a.b = !0;
    a.a = a.U ? sd(a.U) : sd(qd);
    a.I = a.U ? od(a.U) : od(qd);
    a.a.onreadystatechange = v(a.jb, a);
    try {
        Vd(a.T, ce(a, "Opening Xhr")), a.ja = !0, a.a.open("POST", String(b), !0), a.ja = !1
    } catch (d) {
        Vd(a.T, ce(a, "Error opening Xhr: " + d.message));
        de(a, d);
        return
    }
    b = c || "";
    c = a.h.clone();
    var f = rb(c.W(), ee), g = n.FormData && b instanceof n.FormData;
    !sb(ae, "POST") || f || g || Dd(c, "Content-Type",
        "application/x-www-form-urlencoded;charset=utf-8");
    c.forEach(function (a, b) {
        this.a.setRequestHeader(b, a)
    }, a);
    a.lb && (a.a.responseType = a.lb);
    "withCredentials" in a.a && (a.a.withCredentials = a.Gc);
    try {
        fe(a), 0 < a.g && (a.A = ge(a.a), Vd(a.T, ce(a, "Will abort after " + a.g + "ms if incomplete, xhr2 " + a.A)), a.A ? (a.a.timeout = a.g, a.a.ontimeout = v(a.mb, a)) : a.w = md(a.mb, a.g, a)), Vd(a.T, ce(a, "Sending request")), a.o = !0, a.a.send(b), a.o = !1
    } catch (h) {
        Vd(a.T, ce(a, "Send error: " + h.message)), de(a, h)
    }
}
function ge(a) {
    return H && I(9) && fa(a.timeout) && q(a.ontimeout)
}
function ee(a) {
    return "content-type" == a.toLowerCase()
}
Wd.prototype.mb = function () {
    "undefined" != typeof aa && this.a && (this.f = "Timed out after " + this.g + "ms, aborting", Vd(this.T, ce(this, this.f)), kd(this, "timeout"), this.a && this.b && (Vd(this.T, ce(this, "Aborting")), this.b = !1, this.c = !0, this.a.abort(), this.c = !1, kd(this, "complete"), kd(this, "abort"), he(this)))
};
function de(a, b) {
    a.b = !1;
    a.a && (a.c = !0, a.a.abort(), a.c = !1);
    a.f = b;
    ie(a);
    he(a)
}
function ie(a) {
    a.ba || (a.ba = !0, kd(a, "complete"), kd(a, "error"))
}
Wd.prototype.O = function () {
    this.a && (this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1), he(this, !0));
    Wd.C.O.call(this)
};
Wd.prototype.jb = function () {
    this.j || (this.ja || this.o || this.c ? je(this) : this.Cc())
};
Wd.prototype.Cc = function () {
    je(this)
};
function je(a) {
    if (a.b && "undefined" != typeof aa)if (a.I[1] && 4 == ke(a) && 2 == le(a))Vd(a.T, ce(a, "Local request error detected and ignored")); else if (a.o && 4 == ke(a))md(a.jb, 0, a); else if (kd(a, "readystatechange"), 4 == ke(a)) {
        Vd(a.T, ce(a, "Request complete"));
        a.b = !1;
        try {
            me(a) ? (kd(a, "complete"), kd(a, "success")) : (a.f = ne(a) + " [" + le(a) + "]", ie(a))
        } finally {
            he(a)
        }
    }
}
function he(a, b) {
    if (a.a) {
        fe(a);
        var c = a.a, d = a.I[0] ? ba : null;
        a.a = null;
        a.I = null;
        b || kd(a, "ready");
        try {
            c.onreadystatechange = d
        } catch (f) {
            (c = a.T) && c.log(Od, "Problem encountered resetting onreadystatechange: " + f.message, void 0)
        }
    }
}
function fe(a) {
    a.a && a.A && (a.a.ontimeout = null);
    fa(a.w) && (n.clearTimeout(a.w), a.w = null)
}
function me(a) {
    var b = le(a), c;
    a:switch (b) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            c = !0;
            break a;
        default:
            c = !1
    }
    if (!c) {
        if (b = 0 === b)a = zc(String(a.u))[1] || null, !a && n.self && n.self.location && (a = n.self.location.protocol, a = a.substr(0, a.length - 1)), b = !$d.test(a ? a.toLowerCase() : "");
        c = b
    }
    return c
}
function ke(a) {
    return a.a ? a.a.readyState : 0
}
function le(a) {
    try {
        return 2 < ke(a) ? a.a.status : -1
    } catch (b) {
        return -1
    }
}
function ne(a) {
    try {
        return 2 < ke(a) ? a.a.statusText : ""
    } catch (b) {
        return Vd(a.T, "Can not get status: " + b.message), ""
    }
}
function oe(a) {
    try {
        return a.a ? a.a.responseText : ""
    } catch (b) {
        return Vd(a.T, "Can not get responseText: " + b.message), ""
    }
}
function ce(a, b) {
    return b + " [" + a.ua + " " + a.u + " " + le(a) + "]"
};function pe() {
    this.b = [];
    this.a = []
}
function qe(a) {
    0 == a.b.length && (a.b = a.a, a.b.reverse(), a.a = []);
    return a.b.pop()
}
l = pe.prototype;
l.F = function () {
    return this.b.length + this.a.length
};
l.isEmpty = function () {
    return 0 == this.b.length && 0 == this.a.length
};
l.clear = function () {
    this.b = [];
    this.a = []
};
l.contains = function (a) {
    return sb(this.b, a) || sb(this.a, a)
};
l.L = function () {
    for (var a = [], b = this.b.length - 1; 0 <= b; --b)a.push(this.b[b]);
    for (var c = this.a.length, b = 0; b < c; ++b)a.push(this.a[b]);
    return a
};
function re(a, b) {
    J.call(this);
    this.h = a || 0;
    this.f = b || 10;
    if (this.h > this.f)throw Error(se);
    this.a = new pe;
    this.b = new Id;
    this.g = null;
    this.wa()
}
y(re, J);
var se = "[goog.structs.Pool] Min can not be greater than max";
l = re.prototype;
l.Ca = function () {
    var a = x();
    if (!(null != this.g && 0 > a - this.g)) {
        for (var b; 0 < this.a.F() && (b = qe(this.a), !this.Za(b));)this.wa();
        !b && this.F() < this.f && (b = this.Ma());
        b && (this.g = a, Dd(this.b.a, Jd(b), b));
        return b
    }
};
l.va = function (a) {
    Fd(this.b.a, Jd(a));
    this.Za(a) && this.F() < this.f ? this.a.a.push(a) : te(a)
};
l.wa = function () {
    for (var a = this.a; this.F() < this.h;) {
        var b = this.Ma();
        a.a.push(b)
    }
    for (; this.F() > this.f && 0 < this.a.F();)te(qe(a))
};
l.Ma = function () {
    return {}
};
function te(a) {
    if ("function" == typeof a.ka)a.ka(); else for (var b in a)a[b] = null
}
l.Za = function (a) {
    return "function" == typeof a.Mc ? a.Mc() : !0
};
l.contains = function (a) {
    return this.a.contains(a) || this.b.contains(a)
};
l.F = function () {
    return this.a.F() + this.b.F()
};
l.isEmpty = function () {
    return this.a.isEmpty() && this.b.isEmpty()
};
l.O = function () {
    re.C.O.call(this);
    if (0 < this.b.F())throw Error("[goog.structs.Pool] Objects not released");
    delete this.b;
    for (var a = this.a; !a.isEmpty();)te(qe(a));
    delete this.a
};
function ue(a, b) {
    this.a = a;
    this.b = b
}
ue.prototype.clone = function () {
    return new ue(this.a, this.b)
};
function ve(a) {
    this.a = [];
    if (a)a:{
        var b, c;
        if (a instanceof ve) {
            if (b = a.W(), c = a.L(), 0 >= a.F()) {
                a = this.a;
                for (var d = 0; d < b.length; d++)a.push(new ue(b[d], c[d]));
                break a
            }
        } else b = gb(a), c = fb(a);
        for (d = 0; d < b.length; d++)we(this, b[d], c[d])
    }
}
function we(a, b, c) {
    var d = a.a;
    d.push(new ue(b, c));
    b = d.length - 1;
    a = a.a;
    for (c = a[b]; 0 < b;)if (d = b - 1 >> 1, a[d].a > c.a)a[b] = a[d], b = d; else break;
    a[b] = c
}
function xe(a) {
    var b = a.a, c = b.length, d = b[0];
    if (!(0 >= c)) {
        if (1 == c)tb(b); else {
            b[0] = b.pop();
            b = 0;
            a = a.a;
            for (var c = a.length, f = a[b]; b < c >> 1;) {
                var g = 2 * b + 1, h = 2 * b + 2, g = h < c && a[h].a < a[g].a ? h : g;
                if (a[g].a > f.a)break;
                a[b] = a[g];
                b = g
            }
            a[b] = f
        }
        return d.b
    }
}
l = ve.prototype;
l.L = function () {
    for (var a = this.a, b = [], c = a.length, d = 0; d < c; d++)b.push(a[d].b);
    return b
};
l.W = function () {
    for (var a = this.a, b = [], c = a.length, d = 0; d < c; d++)b.push(a[d].a);
    return b
};
l.clone = function () {
    return new ve(this)
};
l.F = function () {
    return this.a.length
};
l.isEmpty = function () {
    return 0 == this.a.length
};
l.clear = function () {
    tb(this.a)
};
function ye() {
    ve.call(this)
}
y(ye, ve);
function ze(a, b) {
    this.c = new ye;
    re.call(this, a, b)
}
y(ze, re);
l = ze.prototype;
l.Ca = function (a, b) {
    if (!a)return ze.C.Ca.call(this);
    we(this.c, q(b) ? b : 100, a);
    this.Oa()
};
l.Oa = function () {
    for (var a = this.c; 0 < a.F();) {
        var b = this.Ca();
        if (b)xe(a).apply(this, [b]); else break
    }
};
l.va = function (a) {
    ze.C.va.call(this, a);
    this.Oa()
};
l.wa = function () {
    ze.C.wa.call(this);
    this.Oa()
};
l.O = function () {
    ze.C.O.call(this);
    n.clearTimeout(void 0);
    this.c.clear();
    this.c = null
};
function Ae(a, b, c) {
    ze.call(this, b, c);
    this.o = a
}
y(Ae, ze);
Ae.prototype.Ma = function () {
    var a = new Wd, b = this.o;
    b && b.forEach(function (b, d) {
        Dd(a.h, d, b)
    });
    return a
};
Ae.prototype.Za = function (a) {
    return !a.j && !a.a
};
function Be(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.f = c;
    this.c = d
};function Ce() {
    this.c = new ye;
    this.b = new L;
    this.a = new pe
}
function De(a, b) {
    var c = b.a;
    if (c == xa) {
        for (var c = b.b.tileKeys, d = 0, f = 0; f < c.length; f++) {
            var g;
            g = a;
            var h = c[f];
            g.b.contains(h) ? g = !1 : (g.b.a[Ee(h)] = null, g.a.a.push(h), g = !0);
            g && d++
        }
        q(a.ta) || (a.ta = b);
        c = Math.ceil(d / 25);
        d = b.a.a;
        for (f = 0; f < c; f++)we(a.c, d, a.ta)
    } else we(a.c, c.a, b)
};function Fe(a) {
    jd.call(this);
    this.g = a;
    this.b = null;
    this.a = !1;
    this.c = 0
}
y(Fe, jd);
function Ge(a) {
    if (null == a.b) {
        a.a && (a.a = !1, a.c++);
        var b = Math.min(Math.floor(Math.random() * Math.pow(1.1, a.c)) * a.g, 3E5);
        a.b = n.setTimeout(v(a.f, a), b)
    }
}
Fe.prototype.f = function () {
    this.b = null;
    kd(this, new bc(He, this))
};
Fe.prototype.reset = function () {
    this.a = !1;
    this.c = 0
};
var He = "tick";
function Ie(a, b) {
    document.cookie = "ingress.intelmap." + a + "=" + escape(b)
}
function Je(a) {
    return Ke("ingress.intelmap." + a)
}
function Ke(a) {
    for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
        var d = b[c], f = d.indexOf("=");
        if (d.substr(0, f).replace(/^\s+|\s+$/g, "") == a)return unescape(d.substr(f + 1))
    }
    return null
};function Le() {
    this.c = new Ae(new Cd({"Content-Type": "application/json; charset=utf-8"}), 1, 20);
    this.b = new Ce;
    this.a = new Fe(50);
    this.a.P(He, this.f, !1, this)
}
r(Le);
function Me(a) {
    return a ? function (b, c) {
        a(c)
    } : function () {
    }
}
function Ne(a, b, c, d, f) {
    De(a.b, new Be(b, c, Me(d), Me(f)));
    Ge(a.a)
}
Le.prototype.g = function (a, b) {
    var c = b.target;
    if (me(c)) {
        this.a.reset();
        var d = a.f, f = JSON.parse(oe(c));
        "error" in f && "out of date" == f.error ? (d = Oe.l(), Pe(!1), d.g = !0, Qe("Please refresh for the latest version.")) : "error" in f && "RETRY" == f.error ? (De(this.b, a), Ge(this.a)) : n.setTimeout(na(d, a.b, f), 0)
    } else this.a.a = !0, d = a.c, ga(d) && (f = {
        error: ne(c) || "unknown",
        respStatus: le(c)
    }, n.setTimeout(na(d, a.b, f), 0));
    d = this.c;
    Fd(d.b.a, Jd(c)) && d.va(c)
};
Le.prototype.f = function () {
    for (; ;) {
        var a = this.c.Ca();
        if (q(a)) {
            var b;
            var c = this.b;
            if (b = xe(c.c)) {
                if (b.a == xa) {
                    b = c;
                    var d = [];
                    if (0 != c.a.F())for (var f = 0; 25 > f;) {
                        var g = qe(c.a);
                        Re(c.b, g);
                        if (!g)break;
                        var h = g;
                        Se(Oe.l(), h) && (d.push(g), f++)
                    }
                    c = d;
                    b = 0 == c.length ? void 0 : new Be(b.ta.a, {tileKeys: c}, b.ta.f, b.ta.c)
                }
            } else b = void 0;
            if (!q(b)) {
                b = this.c;
                Fd(b.b.a, Jd(a)) && b.va(a);
                break
            }
            oc(a, "complete", v(this.g, this, b));
            c = "/r/" + b.a.b;
            d = a;
            if (f = !/^(GET|HEAD|OPTIONS|TRACE)$/.test("POST"))f = "//" + document.location.host, g = document.location.protocol +
                f, f = c == g || c.slice(0, g.length + 1) == g + "/" || c == f || c.slice(0, f.length + 1) == f + "/" || !/^(\/\/|http:|https:).*/.test(c);
            f ? Dd(d.h, "X-CSRFToken", Ke("csrftoken")) : Fd(d.h, "X-CSRFToken");
            b = b.b;
            b.v = "8e91a4eb7ac2fc366cc50688c44e402b12082b04";
            be(a, c, JSON.stringify(b))
        } else {
            Ge(this.a);
            break
        }
    }
};
function Te() {
    this.a = Le.l()
}
Te.prototype.b = function (a, b, c) {
    c = c.L();
    Ue(c);
    var d = this.a;
    De(d.b, new Be(xa, {tileKeys: c}, a, b));
    Ge(d.a)
};
function Ve(a, b, c) {
    Ne(a.a, Aa, {guid: b}, c)
}
function Ue(a) {
    var b = M.getCenter(), c = We(+a[0].split("_")[0], b.lat(), b.lng());
    a.sort(function (a, b) {
        var g = Xe(a, c), h = Xe(b, c);
        return g < h ? -1 : g > h ? 1 : 0
    })
}
function Xe(a, b) {
    var c = a.split("_"), d = b.x - c[1], c = b.y - c[2];
    return d * d + c * c
};var O = 0, Ye = [8, 8, 8, 8, 7, 7, 7, 6, 6, 5, 4, 4, 3, 2, 2, 1, 1];
function Ze(a) {
    O != a && (O = a, $e(af, a))
}
function bf() {
    return 14 >= O ? Ye[O] || 0 : 0
}
function cf() {
    return 18 <= O ? 1 : 16 <= O ? .8 : 14 <= O ? .6 : 12 <= O ? .4 : .3
};function df(a, b, c) {
    this.zoom = a;
    this.x = b;
    this.y = c
}
function We(a, b, c) {
    var d = ef[a] || ff;
    c = (c + 180) / 360;
    c = 1E-5 > Math.abs(c) ? 0 : c;
    c = Math.floor(d * c);
    c >= d && c--;
    b = (85.05112877980659 < b ? 85.05112877980659 : -85.05112877980659 > b ? -85.05112877980659 : b) * Math.PI / 180;
    b = Math.log(Math.tan(Math.PI / 4 + b / 2));
    b = (Math.PI - b) / (2 * Math.PI);
    b = 1E-5 > Math.abs(b) ? 0 : b;
    return new df(a, c, Math.floor(d * b))
}
var ef = [1, 1, 1, 40, 40, 80, 80, 320, 1E3, 2E3, 2E3, 4E3, 8E3, 16E3, 16E3, 32E3], ff = ef[ef.length - 1];
var P = -1, Q = 8, gf = -1, hf = 100;
function jf() {
    this.a = 0
};function L(a) {
    this.a = {};
    if (a)for (var b = 0; b < a.length; b++)this.a[Ee(a[b])] = null;
    for (var c in Object.prototype)Za(c + " should not be enumerable in Object.prototype.")
}
var kf = {};
function Ee(a) {
    return a in kf || 32 == String(a).charCodeAt(0) ? " " + a : a
}
function lf(a) {
    return 32 == a.charCodeAt(0) ? a.substr(1) : a
}
function mf(a, b) {
    for (var c = 0; c < b.length; c++)a.a[Ee(b[c])] = null
}
function nf(a, b) {
    for (var c in b.a)a.a[c] = null
}
l = L.prototype;
l.clear = function () {
    this.a = {}
};
l.clone = function () {
    var a = new L;
    nf(a, this);
    return a
};
l.contains = function (a) {
    return Ee(a) in this.a
};
l.forEach = function (a, b) {
    for (var c in this.a)a.call(b, lf(c), void 0, this)
};
l.F = Object.keys ? function () {
    return Object.keys(this.a).length
} : function () {
    var a = 0, b;
    for (b in this.a)a++;
    return a
};
function of(a, b) {
    var c = new L, d;
    for (d in a.a)d in b.a || (c.a[d] = null);
    return c
}
function pf(a, b) {
    var c = new L, d;
    for (d in a.a)d in b.a && (c.a[d] = null);
    return c
}
l.L = Object.keys ? function () {
    return Object.keys(this.a).map(lf, this)
} : function () {
    var a = [], b;
    for (b in this.a)a.push(lf(b));
    return a
};
l.isEmpty = function () {
    for (var a in this.a)return !1;
    return !0
};
function Re(a, b) {
    var c = Ee(b);
    c in a.a && delete a.a[c]
}
function qf(a, b) {
    for (var c in b.a)delete a.a[c]
};function rf() {
    this.b = {};
    this.a = {}
}
function sf(a, b) {
    var c = a.b[b];
    return c ? c.a : []
}
function tf(a) {
    for (var b = new L, c = gb(a.b), d = 0; d < c.length; d++)mf(b, a.b[c[d]].a);
    return b
}
function uf(a, b, c, d) {
    var f = a.a[b];
    if (!f || f.g < d.g)a.a[b] = d;
    d = a.b[c];
    d || (d = new vf, a.b[c] = d);
    d.a.push(b)
}
function wf(a, b) {
    var c = new L(sf(a, b));
    jb(a.b, b);
    var d = tf(a);
    qf(c, d);
    F(c.L(), function (a) {
        jb(this.a, a)
    }, a)
}
function xf(a, b) {
    var c = a.b[b];
    c || (c = new vf, a.b[b] = c);
    c.b = x()
}
function yf(a, b) {
    return new L(xc(b, function (a) {
        return zf(this, a)
    }, a))
}
function zf(a, b, c) {
    (a = a.b[b]) ? (b = 18E4, c && (b = c), c = a.b + b < x()) : c = !0;
    return c
}
function vf() {
    this.b = 0;
    this.a = []
};function Af() {
};function Bf(a, b) {
    this.lat = a;
    this.lng = b;
    this.a = null
}
function Cf(a) {
    a.a || (a.a = new google.maps.LatLng(a.lat, a.lng));
    return a.a
}
function Df(a, b) {
    if (!fa(a) || !fa(b) || -90 > a || 90 < a)return !1;
    var c;
    c = b + 180;
    360 < c ? c %= 360 : 0 > c && (c = 360 - -c % 360);
    c = c - 180;
    return -180 > c || 180 < c ? !1 : !0
};function Ef(a, b, c) {
    this.i = a;
    this.latLng = null != b && null != c ? new Bf(b, c) : null
}
function Ff(a) {
    return null != a.latLng ? Cf(a.latLng) : null
};function Gf(a, b, c) {
    ua.call(this, a, b, c, "edge");
    this.a = this.b = null;
    this.w = !1;
    this.c = Hf(this)
}
y(Gf, ua);
Gf.prototype.f = function () {
    return this.c
};
function Hf(a) {
    a.c = [a.b, a.a];
    a.w = Boolean(a.b && null != a.b.latLng && a.a && null != a.a.latLng);
    return a.c
};var If = /panoramio\.com\/photos/, Jf = /^((?:(?:(?:http(?:s)?):)?\/\/)?(?:(?:(?:lh|gp)\d\.(?:ggpht|googleusercontent|google)\.com)|(?:\d\.bp\.blogspot\.com)|(?:bp\d\.blogger\.com)|(?:db\d\.googleusercontent\.cn))\/(?:(?:public|image|proxy)\/)?)(.*)/, Kf = /^(.*=[^=]*)(s\d+)([^=]*)$/, Lf = /^(.*)(s\d+)(.*)$/, Mf = /mini_square|square|thumbnail|small|medium|original/;
function Nf(a, b, c) {
    this.level = a;
    this.kb = b;
    this.ca = Math.ceil(16 * c / Of[this.level])
}
var Of = [0, 1E3, 1500, 2E3, 2500, 3E3, 4E3, 5E3, 6E3];
function Pf(a) {
    a = ob(a, function (a) {
        return !!a
    });
    return pb(a, function (a) {
        return new Nf(a[1], a[0], a[2])
    })
};function Qf(a, b, c, d, f, g, h, k, m) {
    ua.call(this, a, b, x(), "player");
    this.Cb = c;
    this.Ic = d;
    this.Nb = f;
    this.level = g;
    this.Ya = 0;
    this.Bb = m;
    this.Ob = h;
    this.Pb = 0;
    this.Ya = 0 == this.Bb ? 0 : this.level + 1;
    this.Pb = Math.ceil(190 * this.Nb / this.Ob)
}
y(Qf, ua);
function Rf(a, b, c) {
    ua.call(this, a, b, c, "portal");
    this.state = Sf;
    this.lng = this.lat = 0;
    this.level = 1;
    this.ca = this.h = 0;
    this.m = [];
    this.o = [];
    this.Z = this.j = "";
    this.Ka = null;
    this.title = "";
    this.Pa = null;
    this.za = "";
    this.zb = [];
    this.Ab = [];
    this.u = this.J = this.la = !1
}
y(Rf, ua);
Rf.prototype.c = function () {
    return new google.maps.LatLng(this.lat, this.lng)
};
function Tf(a) {
    return new Ef(a.i, a.lat, a.lng)
}
var Sf = 1;
function Uf(a, b, c) {
    a = new Rf(a, b[1], c);
    Vf(a, b);
    return a
}
function Vf(a, b) {
    a.lat = b[2] / 1E6;
    a.lng = b[3] / 1E6;
    a.level = b[4];
    a.ca = b[5];
    a.h = b[6];
    a.la = 0 < a.h;
    a.title = b[8];
    var c;
    if (c = b[7]) {
        if (-1 < c.search(Jf)) {
            var d = c.match(Jf);
            c = d[1];
            d = d[2];
            if (-1 == d.indexOf("/")) {
                var f = "";
                1 == d.split("=").length ? f = [c, d, "=s", 130].join("") : (f = "", f = (f = d.match(Kf)) ? [f[1], "s", 130, f[3]].join("") : [d, "-", 130].join(""), f = c + f);
                c = f
            } else {
                f = d.split("/");
                d.lastIndexOf("/") == d.length - 1 && f.push("");
                switch (f.length) {
                    case 4:
                        f.push("");
                        break;
                    case 5:
                        f.splice(4, 0, "")
                }
                var d = f[4].match(Lf), g = "", g = d ? [d[1],
                    "s", 130, d[3]].join("") : "s130";
                f[4] = g;
                c = c + f.join("/")
            }
        } else c = -1 < c.search(If) ? c.replace(Mf, "thumbnail") : c;
        c = "https:" == window.location.protocol && -1 < c.indexOf("www.panoramio.com") ? c.replace("http://www", "https://ssl") : c.replace("http://", "//")
    } else c = "//commondatastorage.googleapis.com/ingress.com/img/default-portal-image.png";
    a.Pa = c;
    a.m = b[9].slice();
    a.J = b[10];
    a.u = b[11];
    a.s = ta(b[1]);
    d = c = "";
    b[12] && (c = b[12][0], d = b[12][1], c = 0 < c.length ? c[0][0] : "", d = 0 < d.length ? d[0][0] : "");
    a.Z = c;
    a.j = d;
    c = !1;
    a.g != b[13] && (a.g =
        b[13], c = !0);
    return c
}
function Wf(a, b) {
    a.state = 2;
    var c = Vf(a, b);
    a.Ab = Pf(b[15]);
    a.zb = pb(b[14], function (a) {
        return a ? {X: a[2], name: a[1], D: a[3], Fa: a[0]} : null
    });
    a.la = "" != b[16];
    a.za = b[16];
    var d = b[17];
    if (d) {
        var f = d[0];
        a.Z != f && (a.Z = f, c = !0);
        a.Ka = d[1];
        a.o = d[2]
    }
    c && $e(Xf, a)
}
function Yf(a) {
    return "" != a.j || "" != a.Z
}
function Zf(a) {
    var b = gf, c = hf, d = P, f = Q;
    if (Yf(a) || 0 < a.m.length || 14 >= O)return !0;
    var g = a.h ? a.level : 0;
    if (g < bf())return !1;
    if (0 <= d) {
        if (g < d || g > f)return !1
    } else if (g > f)return !1;
    if (0 <= b) {
        if (a.ca < b || a.ca > c)return !1
    } else if (a.ca > c)return !1;
    return !0
};function $f(a, b, c, d) {
    ua.call(this, a, b, c, "region");
    this.c = d
}
y($f, ua);
$f.prototype.f = function () {
    return this.c
};
function ag(a, b) {
    var c = pb(b[2], function (a) {
        return new Ef(a[0], a[1] / 1E6, a[2] / 1E6)
    });
    return new $f(a, b[1], 0, c)
};function R() {
    this.a = new rf;
    this.b = new Te;
    this.j = new L;
    this.h = !1;
    this.f = new L;
    this.g = new L;
    this.m = 0;
    this.c = []
}
r(R);
function bg() {
    return R.l().b
}
function cg(a, b) {
    F(b, function (a) {
        uf(this.a, a.i, "tm_wp_qk", a)
    }, a)
}
function dg(a, b, c, d) {
    d = Uf(c, d, 0);
    uf(a.a, c, b, d)
}
function eg(a) {
    for (var b = [], c = a.c, d = {}, f = 0, g = 0; g < c.length;) {
        var h = c[g++], k;
        k = h;
        k = ha(k) ? "o" + ia(k) : (typeof k).charAt(0) + k;
        Object.prototype.hasOwnProperty.call(d, k) || (d[k] = !0, c[f++] = h)
    }
    c.length = f;
    for (c = 0; 200 > c && 0 != a.c.length;)d = a.c.shift(), fg(a, d) && (d = a.a.a[d] || null) && (b.push(d), c++);
    return b
}
function gg(a) {
    var b = {};
    F(sf(a.a, "a_qk"), function (a) {
        b[a] = this.a.a[a] || null
    }, a);
    return b
}
function hg(a, b, c, d) {
    var f = [c], g = a.a.a[c] || null;
    g || (g = ag(c, d), uf(a.a, c, b, g));
    C(g.f(), function (a) {
        (a = ig(this, b, a.i, a.latLng.lat, a.latLng.lng, g.s)) && f.push(a)
    }, a);
    return f
}
function jg(a, b, c, d) {
    var f = [c], g = a.a.a[c] || null;
    g || (g = x(), g = new Gf(c, d[1], g), g.b = new Ef(d[2], d[3] / 1E6, d[4] / 1E6), g.a = new Ef(d[5], d[6] / 1E6, d[7] / 1E6), Hf(g), uf(a.a, c, b, g));
    c = g.b;
    (c = ig(a, b, c.i, c.latLng.lat, c.latLng.lng, g.s)) && f.push(c);
    c = g.a;
    (a = ig(a, b, c.i, c.latLng.lat, c.latLng.lng, g.s)) && f.push(a);
    return f
}
function ig(a, b, c, d, f, g) {
    if (14 >= O) {
        var h = a.a.a[c] || null;
        h || (h = new Rf(c, "", 0), h.state = 0, h.s = g, h.lat = d, h.lng = f);
        uf(a.a, c, b, h);
        return c
    }
    return ""
}
function kg(a, b) {
    var c = D(b, "tileKeys");
    if (q(c))for (var d = a.g, f = 0; f < c.length; f++)delete d.a[Ee(c[f])];
    Pe(!1)
}
l = R.prototype;
l.Lb = function (a, b) {
    kg(this, a);
    if ("result" in b && "map" in b.result) {
        var c = new L, d = new L;
        C(b.result.map, function (a, b) {
            "gameEntities" in a && (mf(d, sf(this.a, b)), this.j.contains(b) && (xf(this.a, b), F(a.gameEntities, function (a) {
                var c = a[0];
                a = a[2];
                var f = [];
                switch (a[0]) {
                    case "r":
                        f = hg(this, b, c, a);
                        break;
                    case "e":
                        f = jg(this, b, c, a);
                        break;
                    case "p":
                        dg(this, b, c, a), f = [c]
                }
                F(f, function (a) {
                    Re(d, a);
                    this.c.push(a);
                    this.f.a[Ee(a)] = null
                }, this)
            }, this)));
            a.deletedEntityGuids && nf(d, a.deletedEntityGuids);
            qf(this.f, d);
            "TIMEOUT" == a.error &&
            Se(Oe.l(), b) && (c.a[Ee(b)] = null)
        }, this);
        if (!c.isEmpty()) {
            nf(this.g, c);
            var f = v(this.Lb, this), g = v(this.ub, this);
            n.setTimeout(v(this.b.b, this.b, f, g, c), 1E3)
        }
        lg(this, d);
        mg()
    } else Af("RPC result error payload=" + JSON.stringify(a))
};
l.ub = function (a, b) {
    kg(this, a);
    JSON.stringify(b)
};
function ng(a) {
    var b = zf(a.a, "a_qk", 36E5);
    if (!a.h && b) {
        a.h = !0;
        var b = v(a.Gd, a), c = v(function () {
            this.h = !1
        }, a);
        Ne(a.b.a, wa, {}, b, c)
    }
}
l.Gd = function (a) {
    this.h = !1;
    if (ha(a) && a.result) {
        var b = gg(this);
        wf(this.a, "a_qk");
        C(a.result, function (a, d) {
            dg(this, "a_qk", d, a);
            b[d] && delete b[d]
        }, this);
        xf(this.a, "a_qk");
        C(b, function (a) {
            var b = this.a.a[a.i] || null;
            b && Yf(b) && (a.o = [], a.j = "", a.Z = "", a.Ka = null, a.g += 1, og(pg.l(), a), uf(this.a, b.i, "a_qk", b))
        }, this);
        pg.l().draw(gg(this))
    }
};
function qg(a, b) {
    wc(of(a.j, b), function (a) {
        wf(this.a, a)
    }, a);
    var c = new L;
    wc(b, function (a) {
        mf(c, sf(this.a, a))
    }, a);
    rg(a, c);
    a.j = b.clone()
}
function sg(a, b) {
    var c = a.a.a[b] || null;
    return c ? c : null
}
l.ud = function (a, b, c) {
    c && Wf(a, c.result);
    b()
};
l.td = function (a, b, c) {
    var d = this.a.a[a] || null;
    a = d ? d : Uf(a, c.result, 0);
    Wf(a, c.result);
    b(a)
};
function fg(a, b) {
    return gg(a)[b] ? !0 : a.f.contains(b)
}
function tg(a) {
    return 0 == a.m || 0 == a.g.F() ? 100 : 100 - Math.ceil(a.g.F() / a.m * 100)
}
function lg(a, b) {
    for (var c in b.L())for (var d = a.a, f = c, g = gb(d.b), h = 0; h < g.length; h++) {
        var k = f, m = d.b[g[h]];
        m && (jb(d.a, k), ub(m.a, k))
    }
}
function rg(a, b) {
    a.f = pf(a.f, b);
    a.c = ob(a.c, function (a) {
        return b.contains(a)
    }, a)
}
function ug() {
    var a = R.l();
    wc(a.f, function (a) {
        this.c.push(a)
    }, a)
};var vg = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;
var wg = {Pd: !0}, xg = {Rd: !0}, yg = {Od: !0}, zg = {Qd: !0};
function Ag() {
    throw Error("Do not instantiate directly");
}
Ag.prototype.La = null;
Ag.prototype.getContent = function () {
    return this.a
};
Ag.prototype.toString = function () {
    return this.a
};
function Bg(a, b) {
    this.width = a;
    this.height = b
}
l = Bg.prototype;
l.clone = function () {
    return new Bg(this.width, this.height)
};
l.toString = function () {
    return "(" + this.width + " x " + this.height + ")"
};
l.Jc = function () {
    return this.width * this.height
};
l.isEmpty = function () {
    return !this.Jc()
};
l.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
l.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
l.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
l.scale = function (a, b) {
    var c = fa(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this
};
var Cg = !Nb && !H || H && 9 <= Ub || Nb && I("1.9.1");
H && I("9");
var Dg = H || Lb || Ob;
function Eg(a) {
    return a ? new Fg(Gg(a)) : Ja || (Ja = new Fg)
}
function Hg(a, b) {
    return t(b) ? a.getElementById(b) : b
}
function Ig(a, b) {
    var c = b || document, d = null;
    c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = Jg(a, b)[0];
    return d || null
}
function Jg(a, b) {
    var c, d, f, g;
    c = document;
    c = b || c;
    if (c.querySelectorAll && c.querySelector && a)return c.querySelectorAll("" + (a ? "." + a : ""));
    if (a && c.getElementsByClassName) {
        var h = c.getElementsByClassName(a);
        return h
    }
    h = c.getElementsByTagName("*");
    if (a) {
        g = {};
        for (d = f = 0; c = h[d]; d++) {
            var k = c.className;
            "function" == typeof k.split && sb(k.split(/\s+/), a) && (g[f++] = c)
        }
        g.length = f;
        return g
    }
    return h
}
function Kg(a, b) {
    C(b, function (b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Lg.hasOwnProperty(d) ? a.setAttribute(Lg[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}
var Lg = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};
function Mg(a, b, c) {
    function d(c) {
        c && b.appendChild(t(c) ? a.createTextNode(c) : c)
    }

    for (var f = 1; f < c.length; f++) {
        var g = c[f];
        !ea(g) || ha(g) && 0 < g.nodeType ? d(g) : F(Ng(g) ? wb(g) : g, d)
    }
}
function Og(a, b) {
    Mg(Gg(a), a, arguments)
}
function Pg(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
}
function Qg(a) {
    var b, c = a.parentNode;
    if (c && 11 != c.nodeType)if (a.removeNode)a.removeNode(!1); else {
        for (; b = a.firstChild;)c.insertBefore(b, a);
        Pg(a)
    }
}
function Rg(a) {
    return Cg && void 0 != a.children ? a.children : ob(a.childNodes, function (a) {
        return 1 == a.nodeType
    })
}
function Sg(a) {
    var b;
    if (Dg && !(H && I("9") && !I("10") && n.SVGElement && a instanceof n.SVGElement) && (b = a.parentElement))return b;
    b = a.parentNode;
    return ha(b) && 1 == b.nodeType ? b : null
}
function Gg(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function Ng(a) {
    if (a && "number" == typeof a.length) {
        if (ha(a))return "function" == typeof a.item || "string" == typeof a.item;
        if (ga(a))return "function" == typeof a.item
    }
    return !1
}
function Fg(a) {
    this.a = a || n.document || document
}
Fg.prototype.K = function (a) {
    return Hg(this.a, a)
};
function Tg(a) {
    return a.a.createElement("DIV")
}
Fg.prototype.b = Pg;
Fg.prototype.contains = function (a, b) {
    if (a.contains && 1 == b.nodeType)return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;)b = b.parentNode;
    return b == a
};
function Ug(a, b, c, d) {
    a:if (a = a(b || Vg, void 0, c), d = Tg(d || Eg()), a = Wg(a), a.match(Xg), d.innerHTML = a, 1 == d.childNodes.length && (a = d.firstChild, 1 == a.nodeType)) {
        d = a;
        break a
    }
    return d
}
function Wg(a) {
    if (!ha(a))return String(a);
    if (a instanceof Ag) {
        if (a.ea === wg)return a.getContent();
        if (a.ea === zg)return Na(a.getContent())
    }
    Za("Soy template output is unsafe for use as HTML: " + a);
    return "zSoyz"
}
var Xg = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i, Vg = {};
H && I(8);
function Yg(a) {
    if (null != a)switch (a.La) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
    }
    return null
}
function Zg() {
    Ag.call(this)
}
y(Zg, Ag);
Zg.prototype.ea = wg;
function S(a) {
    if (null == a || a.ea !== wg)if (a instanceof zd) {
        var b = $g, c;
        a instanceof zd && a.constructor === zd && a.f === Ad ? c = a.b : (Za("expected object of type SafeHtml, got '" + a + "'"), c = "type_error:SafeHtml");
        a = b(c, a.a())
    } else a = $g(Na(String(String(a))), Yg(a));
    return a
}
var $g = function (a) {
    function b(a) {
        this.a = a
    }

    b.prototype = a.prototype;
    return function (a, d) {
        var f = new b(String(a));
        void 0 !== d && (f.La = d);
        return f
    }
}(Zg);
function T(a, b, c) {
    a.innerHTML = Wg(b(c || Vg, void 0, void 0))
}
function ah(a, b) {
    function c() {
    }

    c.prototype = a;
    var d = new c, f;
    for (f in b)d[f] = b[f];
    return d
}
(function (a) {
    function b(a) {
        this.a = a
    }

    b.prototype = a.prototype;
    return function (a, d) {
        var f = String(a);
        if (!f)return "";
        f = new b(f);
        void 0 !== d && (f.La = d);
        return f
    }
})(Zg);
function U(a) {
    null != a && a.ea === wg ? (a = String(a.getContent()).replace(bh, "").replace(ch, "&lt;"), a = String(a).replace(dh, eh)) : a = Na(String(a));
    return a
}
function fh(a) {
    null != a && a.ea === xg ? a = String(a).replace(gh, hh) : a instanceof td ? (a instanceof td && a.constructor === td && a.b === ud ? a = "" : (Za("expected object of type SafeUrl, got '" + a + "'"), a = "type_error:SafeUrl"), a = String(a).replace(gh, hh)) : a instanceof xd ? (a instanceof xd && a.constructor === xd && a.b === yd ? a = "" : (Za("expected object of type TrustedResourceUrl, got '" + a + "'"), a = "type_error:TrustedResourceUrl"), a = String(a).replace(gh, hh)) : (a = String(a), ih.test(a) ? a = a.replace(gh, hh) : (Za("Bad value `%s` for |filterNormalizeUri",
        [a]), a = "#zSoyz"));
    return a
}
function jh(a) {
    null != a && a.ea === yg ? a = a.getContent() : null == a ? a = "" : a instanceof vd ? a instanceof vd && a.constructor === vd && a.b === wd ? a = a.a : (Za("expected object of type SafeStyle, got '" + a + "'"), a = "type_error:SafeStyle") : (a = String(a), kh.test(a) || (Za("Bad value `%s` for |filterCssValue", [a]), a = "zSoyz"));
    return a
}
var lh = {
    "\x00": "&#0;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "-": "&#45;",
    "/": "&#47;",
    "<": "&lt;",
    "=": "&#61;",
    ">": "&gt;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
};
function eh(a) {
    return lh[a]
}
var mh = {
    "\x00": "%00",
    "\u0001": "%01",
    "\u0002": "%02",
    "\u0003": "%03",
    "\u0004": "%04",
    "\u0005": "%05",
    "\u0006": "%06",
    "\u0007": "%07",
    "\b": "%08",
    "\t": "%09",
    "\n": "%0A",
    "\x0B": "%0B",
    "\f": "%0C",
    "\r": "%0D",
    "\u000e": "%0E",
    "\u000f": "%0F",
    "\u0010": "%10",
    "\u0011": "%11",
    "\u0012": "%12",
    "\u0013": "%13",
    "\u0014": "%14",
    "\u0015": "%15",
    "\u0016": "%16",
    "\u0017": "%17",
    "\u0018": "%18",
    "\u0019": "%19",
    "\u001a": "%1A",
    "\u001b": "%1B",
    "\u001c": "%1C",
    "\u001d": "%1D",
    "\u001e": "%1E",
    "\u001f": "%1F",
    " ": "%20",
    '"': "%22",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "<": "%3C",
    ">": "%3E",
    "\\": "%5C",
    "{": "%7B",
    "}": "%7D",
    "\u007f": "%7F",
    "\u0085": "%C2%85",
    "\u00a0": "%C2%A0",
    "\u2028": "%E2%80%A8",
    "\u2029": "%E2%80%A9",
    "\uff01": "%EF%BC%81",
    "\uff03": "%EF%BC%83",
    "\uff04": "%EF%BC%84",
    "\uff06": "%EF%BC%86",
    "\uff07": "%EF%BC%87",
    "\uff08": "%EF%BC%88",
    "\uff09": "%EF%BC%89",
    "\uff0a": "%EF%BC%8A",
    "\uff0b": "%EF%BC%8B",
    "\uff0c": "%EF%BC%8C",
    "\uff0f": "%EF%BC%8F",
    "\uff1a": "%EF%BC%9A",
    "\uff1b": "%EF%BC%9B",
    "\uff1d": "%EF%BC%9D",
    "\uff1f": "%EF%BC%9F",
    "\uff20": "%EF%BC%A0",
    "\uff3b": "%EF%BC%BB",
    "\uff3d": "%EF%BC%BD"
};
function hh(a) {
    return mh[a]
}
var dh = /[\x00\x22\x27\x3c\x3e]/g, gh = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g, kh = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i, ih = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i, bh = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g, ch = /</g;
function nh(a) {
    return '<div id="header_invites_box" class="header_box header_text_box" onclick="stop(event)"><div id="invite_count_text" class="header_text_box_text">' + oh(a) + '</div><form onSubmit="return false;" id="send_invite_form" name="send_invite"><input type="email" id="invitee_email" placeholder="enter email" ' + (a.disabled ? "disabled" : "") + ' /><input type="submit" value="Send" ' + (a.disabled ? "disabled" : "") + ' /></form><div id="send_invite_status"></div></div>'
}
nh.a = "nemesis.dashboard.soy.invitesrender.sendInvitesBox";
function oh(a) {
    return "" + (0 == a.Qa ? "No invites left" : 1 == a.Qa ? "1 invite left" : S(a.Qa) + " invites left")
}
oh.a = "nemesis.dashboard.soy.invitesrender.inviteCount";
var ph;
function qh() {
}
qh.prototype.draw = function (a) {
    a = {Qa: a, disabled: 0 == a};
    var b = document.getElementById("invite_count_text");
    b ? T(b, oh, a) : (a = Ug(nh, a), b = document.getElementById("header_invites"), b.parentNode.insertBefore(a, b.nextSibling))
};
function rh() {
    this.c = new qh
}
rh.prototype.g = function () {
    var a = this.b.value;
    if (vg.test(a)) {
        this.b.value = "";
        this.a.innerHTML = "sending invite to " + a + "...";
        var b = bg(), c = v(this.f, this, a);
        Ne(b.a, Ga, {inviteeEmailAddress: a}, c);
        _gaq.push(["_trackEvent", "Action", "Send invite"])
    } else this.a.innerHTML = "invalid email"
};
rh.prototype.f = function (a, b) {
    var c = Number(b.result);
    isNaN(c) ? this.a.innerHTML = "error sending invite to " + a : (this.a.innerHTML = "invite sent to " + a, this.c.draw(c))
};
var sh = [{
    featureType: "all",
    elementType: "all",
    stylers: [{visibility: "on"}, {hue: "#131c1c"}, {saturation: "-50"}, {invert_lightness: !0}]
}, {
    featureType: "water",
    elementType: "all",
    stylers: [{visibility: "on"}, {hue: "#005eff"}, {invert_lightness: !0}]
}, {featureType: "poi", stylers: [{visibility: "off"}]}, {
    featureType: "transit",
    elementType: "all",
    stylers: [{visibility: "off"}]
}, {featureType: "road", elementType: "labels.icon", stylers: [{invert_lightness: !0}]}];
function V(a, b, c) {
    if (t(b))(b = th(a, b)) && (a.style[b] = c); else for (var d in b) {
        c = a;
        var f = b[d], g = th(c, d);
        g && (c.style[g] = f)
    }
}
var uh = {};
function th(a, b) {
    var c = uh[b];
    if (!c) {
        var d = Wa(b), c = d;
        void 0 === a.style[d] && (d = (Ob ? "Webkit" : Nb ? "Moz" : H ? "ms" : Lb ? "O" : null) + Xa(d), void 0 !== a.style[d] && (c = d));
        uh[b] = c
    }
    return c
}
function vh(a, b) {
    var c = a.style[Wa(b)];
    return "undefined" !== typeof c ? c : a.style[th(a, b)] || ""
}
function wh(a, b, c) {
    a.style.left = xh(b, !1);
    a.style.top = xh(c, !1)
}
function xh(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}
function yh(a) {
    var b = a.offsetWidth, c = a.offsetHeight, d = Ob && !b && !c;
    if ((!q(b) || d) && a.getBoundingClientRect) {
        var f;
        a:{
            try {
                f = a.getBoundingClientRect()
            } catch (g) {
                f = {left: 0, top: 0, right: 0, bottom: 0};
                break a
            }
            H && a.ownerDocument.body && (a = a.ownerDocument, f.left -= a.documentElement.clientLeft + a.body.clientLeft, f.top -= a.documentElement.clientTop + a.body.clientTop)
        }
        return new Bg(f.right - f.left, f.bottom - f.top)
    }
    return new Bg(b, c)
}
function W(a, b) {
    a.style.display = b ? "" : "none"
};function zh(a) {
    return '<div id="player_ap_icon"><div class="SPRITE_player_level_icon_' + U(a.S.s.Ia) + "_" + U(a.S.level) + '"><div id="player_level">' + S(a.S.level) + '</div></div></div><div class="' + U(a.S.s.css) + '"><div class="player_nickname">' + S(a.S.Cb) + '</div><div id="xm_slot"><div id="xm_indicator" style="width: ' + U(jh(a.S.Pb)) + 'px;"></div></div><div id="xm">' + S(a.S.Nb) + ' <span id="xm_reward"></span><span class="color_orange"> / ' + S(a.S.Ob) + ' XM</span></div><div id="ap" class="visible_on_show_box"><div><span class="number">' +
        S(a.S.Ic) + "</span> AP  Level " + S(a.S.level) + "</div>" + (0 < a.S.Ya ? '<div><span class="color_orange">[ </span><span class="number">' + S(a.S.Bb) + '</span> AP<span class="color_orange"> required for level ' + S(a.S.Ya) + " ]</span></div>" : "") + "</div></div>"
}
zh.a = "nemesis.dashboard.soy.playerdatarender.playerStats";
function Ah() {
}
r(Ah);
Ah.prototype.b = function (a) {
    Bh(this.a, "show_box", a)
};
Ah.prototype.c = function () {
    Ch(this.a, "show_box")
};
var M, Dh, Eh, Fh;
function Gh(a) {
    google.maps.event.trigger(M, "click", a)
}
function Hh(a) {
    google.maps.event.trigger(M, "mousemove", a)
}
var Ih = {}, Jh = 0;
function Kh(a) {
    M = a;
    (new Lh).setMap(a)
}
function Lh() {
    google.maps.OverlayView.call(this)
}
y(Lh, google.maps.OverlayView);
Lh.prototype.onAdd = function () {
    Dh = this.getPanes();
    Eh = this.getProjection()
};
Lh.prototype.onAdd = Lh.prototype.onAdd;
Lh.prototype.draw = function () {
};
Lh.prototype.draw = Lh.prototype.draw;
function Mh(a) {
    this.h = a;
    this.c = {};
    this.b = {}
}
Mh.prototype.ab = function (a, b, c) {
    c ? kb(this.b, a, b) : kb(this.c, a, b);
    q(this.a) || (this.a = google.maps.event.addListener(M, this.h, v(this.g, this)))
};
Mh.prototype.fb = function (a) {
    jb(this.c, a);
    jb(this.b, a);
    ib(this.c) && ib(this.b) && q(this.a) && (google.maps.event.removeListener(this.a), this.a = void 0)
};
Mh.prototype.g = function (a) {
    function b(a) {
        a(c)
    }

    var c = a ? a.latLng : void 0;
    ib(this.b) ? C(this.c, b) : C(this.b, b)
};
function Nh(a) {
    Mh.call(this, a)
}
y(Nh, Mh);
Nh.prototype.ab = function (a, b, c) {
    IS_VERSION_MOBILE || IS_DEVICE_TABLET || Nh.C.ab.call(this, a, b, c)
};
Nh.prototype.fb = function (a) {
    Nh.C.fb.call(this, a);
    q(this.a) || window.clearTimeout(this.f)
};
Nh.prototype.g = function (a) {
    this.f && window.clearTimeout(this.f);
    this.f = window.setTimeout(v(this.j, this, a), 300)
};
Nh.prototype.j = function (a) {
    Nh.C.g.call(this, a)
};
function Oh(a, b, c) {
    var d = D(Ih, a);
    null == d && ("mousemove" == a ? d = new Nh(a) : d = new Mh(a), Ih[a] = d);
    a = a + Jh++;
    d.ab(a, b, c);
    return a
}
function Ph(a, b) {
    var c = D(Ih, a);
    null != c && c.fb(b)
}
oa("doGeocode", function () {
    var a = document.getElementById("address");
    a.blur();
    a = a.value;
    /^[\s\xa0]*$/.test(a) || (Fh || (Fh = new google.maps.Geocoder), Fh.geocode({address: a}, function (a, c) {
        c == google.maps.GeocoderStatus.OK ? (M.fitBounds(a[0].geometry.viewport), _gaq.push(["_trackEvent", "Map", "Search"])) : _gaq.push(["_trackEvent", "Error", "geocode error", c])
    }))
});
function Qh() {
    0 < bf() && (M.setZoom(17), Ze(17))
}
function Rh(a) {
    Qh();
    M.getBounds().contains(a) || M.panTo(a)
}
function Sh(a, b) {
    var c = M.getBounds(), d = new google.maps.LatLngBounds(c.getSouthWest(), c.getNorthEast());
    d.extend(new google.maps.LatLng(a, b));
    return c.equals(d)
};function Th() {
    this.s = qa;
    this.c = 0;
    this.g = !0;
    this.b = !1;
    this.a = 1;
    this.m = this.h = "";
    this.f = this.o = this.u = !1;
    this.j = []
};function Uh(a, b, c) {
    a = {origin: Vh(0), size: Wh(b), url: a};
    Xh(a, b, c);
    return a
}
function Xh(a, b, c) {
    if (q(a.scaledSize) ? a.scaledSize.height != c * b : 1) {
        var d = Math.round(b / 2 * c);
        b *= c;
        a.anchor = Vh(d);
        a.scaledSize = Wh(b);
        return !0
    }
    return !1
}
var Yh = {};
function Vh(a) {
    var b = Math.round(a);
    a = b.toString();
    hb(Yh, a) || (b = new google.maps.Point(b, b), Yh[a] = b);
    return D(Yh, a)
}
var Zh = {};
function Wh(a) {
    var b = Math.round(a);
    a = b.toString();
    hb(Zh, a) || (b = new google.maps.Size(b, b), Zh[a] = b);
    return D(Zh, a)
};function $h() {
    this.b = {};
    this.a = {};
    this.c = {};
    this.h = {};
    this.f = {};
    this.g = {}
}
r($h);
function ai(a, b) {
    var c = a.g;
    c[b] || (c[b] = Uh("//commondatastorage.googleapis.com/ingress.com/img/map_icons/marker_images/tm_orange.png", 50, b));
    return c[b]
}
function bi(a, b, c) {
    var d = a.h, f = [];
    F(b, function (a) {
        d[a] || (d[a] = {});
        d[a][c] || (d[a][c] = Uh("//commondatastorage.googleapis.com/ingress.com/img/map_icons/marker_images/" + a + ".png", 84, c));
        f.push(d[a][c])
    });
    return f
}
function ci(a, b, c, d) {
    var f = b.Ia;
    a = a.b;
    a[f] || (a[f] = {});
    a[f][c] || (a[f][c] = {});
    a[f][c][d] || (a[f][c][d] = Uh(b == qa ? "//commondatastorage.googleapis.com/ingress.com/img/map_icons/marker_images/neutral.png" : "//commondatastorage.googleapis.com/ingress.com/img/map_icons/marker_images/" + b.Ia + "_reso_0" + c + ".png", 50, d));
    return a[f][c][d]
}
function di(a, b, c) {
    a = a.a;
    a[b] || (a[b] = {});
    a[b][c] || (a[b][c] = Uh("//commondatastorage.googleapis.com/ingress.com/img/map_icons/marker_images/" + b + "_shard_target.png", 100, c));
    return a[b][c]
}
function ei(a, b, c) {
    a = a.c;
    a[b] || (a[b] = {});
    a[b][c] || (a[b][c] = Uh("//commondatastorage.googleapis.com/ingress.com/img/map_icons/marker_images/" + b + "_shard.png", 50, c));
    return a[b][c]
}
function fi(a, b, c, d) {
    a = a.f;
    b = b.Ia;
    a[b] || (a[b] = {});
    a[b][c] || (a[b][c] = {});
    a[b][c][d] || (a[b][c][d] = Uh("//commondatastorage.googleapis.com/ingress.com/img/map_icons/marker_images/" + b + "_lev" + c + ".png", 60, d));
    return a[b][c][d]
};function gi(a) {
    this.w = a;
    this.a = new Th;
    this.c = $h.l();
    this.b = cf();
    this.o = this.g = this.j = this.m = this.f = null;
    this.h = [];
    this.u = []
}
function hi(a) {
    return ob(vb(a.f, a.j, a.m, a.g, a.o, a.h), Boolean)
}
gi.prototype.I = function (a) {
    this.A(a)
};
gi.prototype.J = function () {
    F(hi(this), function (a) {
        a.setMap(null)
    })
};
function ii(a, b) {
    b && (a.a = b);
    var c = a.a.g;
    a.f && c ? a.f.setIcon(ci(a.c, a.a.s, a.a.c, a.b)) : a.f && !c ? (a.f.setMap(null), a.f = null) : !a.f && c && (a.f = new google.maps.Marker({
        map: M,
        position: a.w,
        icon: ci(a.c, a.a.s, a.a.c, a.b),
        zIndex: a.a.b ? 32 : 12
    }), ji(a.f));
    var d = a.a.u;
    a.m && d ? a.m.setIcon(di(a.c, a.a.m, a.b)) : a.m && !d ? (a.m.setMap(null), a.m = null) : !a.m && d && (a.m = new google.maps.Marker({
        map: M,
        position: a.w,
        icon: di(a.c, a.a.m, a.b),
        clickable: !1,
        zIndex: 45
    }));
    d = a.a.o;
    a.j && d ? a.j.setIcon(ei(a.c, a.a.h, a.b)) : a.j && !d ? (a.j.setMap(null), a.j =
        null) : !a.j && d && (a.j = new google.maps.Marker({
        map: M,
        position: a.w,
        icon: ei(a.c, a.a.h, a.b),
        clickable: !1,
        zIndex: 44
    }));
    d = 1 < a.a.a;
    a.g && d ? a.g.setIcon(fi(a.c, a.a.s, a.a.a, a.b)) : a.g && !d ? (a.g.setMap(null), a.g = null) : !a.g && d && (a.g = new google.maps.Marker({
        map: M,
        position: a.w,
        icon: fi(a.c, a.a.s, a.a.a, a.b),
        clickable: !c,
        zIndex: a.a.b ? 33 : 13
    }), c || ji(a.g));
    c = a.a.f;
    a.o && c ? a.o.setIcon(ai(a.c, a.b)) : a.o && !c ? (a.o.setMap(null), a.o = null) : !a.o && c && (a.o = new google.maps.Marker({
        map: M, position: a.w, icon: ai(a.c, a.b), clickable: !1, zIndex: a.a.b ?
            34 : 14
    }));
    if (!(c = 0 < a.u.length)) {
        a:if (c = a.a.j, d = a.u, ea(c) && ea(d) && c.length == d.length) {
            for (var f = c.length, g = 0; g < f; g++)if (c[g] !== d[g]) {
                c = !1;
                break a
            }
            c = !0
        } else c = !1;
        c = !c
    }
    if (c) {
        a.u = a.a.j;
        if (a.h.length > a.u.length)for (c = a.u.length; c < a.h.length; c++)a.h[c].setMap(null);
        a.h.length = a.u.length;
        d = bi(a.c, a.u, a.b);
        for (c = 0; c < a.h.length; c++)(f = a.h[c]) ? f.setIcon(d[c]) : a.h[c] = new google.maps.Marker({
            map: M,
            position: a.w,
            icon: d[c],
            clickable: !1,
            zIndex: a.a.b ? 31 : 11
        })
    }
    ki(a)
}
gi.prototype.A = function (a) {
    this.b != a && (this.b = a, ii(this), ki(this))
};
function ki(a) {
    var b = 0 < a.h.length;
    F(hi(a), function (a) {
        b && a.setZIndex(google.maps.Marker.MAX_ZINDEX + a.getZIndex())
    })
}
function ji(a) {
    google.maps.event.clearListeners(a, "click");
    google.maps.event.clearListeners(a, "mouseover");
    google.maps.event.addListener(a, "click", Gh);
    google.maps.event.addListener(a, "mouseover", Hh)
};function li() {
    return '<div id="header_maplink_box" class="header_box header_text_box" ontouchstart="stop(event)" onclick="stop(event)"><div id="header_maplink_text" class="header_text_box_text">Map link</div><form onSubmit="return false;" id="maplink_form"><input type="text" id="maplink" value="" onClick="this.select()"></form><div id="header_maplink_warning" class="header_maplink_warning_text"></div></div>'
}
li.a = "nemesis.dashboard.soy.maplink.shareMapLinkBox";
/*

 Latitude/longitude spherical geodesy formulae & scripts           (c) Chris Veness 2002-2014
 - www.movable-type.co.uk/scripts/latlong.html                                   MIT License
 */
function X(a, b, c, d) {
    if (!(this instanceof X))return new X(a, b, c, d);
    "undefined" == typeof c && (c = 0);
    "undefined" == typeof d && (d = 6371);
    d = Math.min(Math.max(d, 6353), 6384);
    this.lat = Number(a);
    this.a = Number(b);
    this.height = Number(c);
    this.b = Number(d)
}
function mi(a, b) {
    var c = a.lat.G(), d = b.lat.G(), f = d - c, g = b.a.G() - a.a.G(), c = Math.sin(f / 2) * Math.sin(f / 2) + Math.cos(c) * Math.cos(d) * Math.sin(g / 2) * Math.sin(g / 2);
    return 2 * a.b * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
}
function ni(a, b) {
    var c = a.lat.G(), d = b.lat.G(), f = (b.a - a.a).G();
    return (Math.atan2(Math.sin(f) * Math.cos(d), Math.cos(c) * Math.sin(d) - Math.sin(c) * Math.cos(d) * Math.cos(f)).da() + 360) % 360
}
function oi(a, b, c, d) {
    var f = a.lat.G();
    a = a.a.G();
    var g = c.lat.G();
    c = c.a.G();
    b = Number(b).G();
    d = Number(d).G();
    var h = g - f, k = c - a, h = 2 * Math.asin(Math.sqrt(Math.sin(h / 2) * Math.sin(h / 2) + Math.cos(f) * Math.cos(g) * Math.sin(k / 2) * Math.sin(k / 2)));
    if (0 == h)return null;
    k = Math.acos((Math.sin(g) - Math.sin(f) * Math.cos(h)) / (Math.sin(h) * Math.cos(f)));
    isNaN(k) && (k = 0);
    g = Math.acos((Math.sin(f) - Math.sin(g) * Math.cos(h)) / (Math.sin(h) * Math.cos(g)));
    0 < Math.sin(c - a) ? (c = k, g = 2 * Math.PI - g) : c = 2 * Math.PI - k;
    c = (b - c + Math.PI) % (2 * Math.PI) - Math.PI;
    d = (g - d + Math.PI) % (2 * Math.PI) - Math.PI;
    if (0 == Math.sin(c) && 0 == Math.sin(d) || 0 > Math.sin(c) * Math.sin(d))return null;
    g = Math.atan2(Math.sin(h) * Math.sin(c) * Math.sin(d), Math.cos(d) + Math.cos(c) * Math.cos(Math.acos(-Math.cos(c) * Math.cos(d) + Math.sin(c) * Math.sin(d) * Math.cos(h))));
    d = Math.asin(Math.sin(f) * Math.cos(g) + Math.cos(f) * Math.sin(g) * Math.cos(b));
    f = a + Math.atan2(Math.sin(b) * Math.sin(g) * Math.cos(f), Math.cos(g) - Math.sin(f) * Math.sin(d));
    f = (f + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    return new X(d.da(), f.da())
}
"undefined" == typeof Number.prototype.G && (Number.prototype.G = function () {
    return this * Math.PI / 180
});
"undefined" == typeof Number.prototype.da && (Number.prototype.da = function () {
    return 180 * this / Math.PI
});
function pi(a, b) {
    var c = new X(a.lat, a.lng), d = new X(b.lat, b.lng), f = c.lat.G(), g = d.lat.G(), h = (d.a - c.a).G(), d = Math.cos(g) * Math.cos(h), h = Math.cos(g) * Math.sin(h), g = Math.atan2(Math.sin(f) + Math.sin(g), Math.sqrt((Math.cos(f) + d) * (Math.cos(f) + d) + h * h)), c = c.a.G() + Math.atan2(h, Math.cos(f) + d), c = (c + 3 * Math.PI) % (2 * Math.PI) - Math.PI, c = new X(g.da(), c.da());
    return new Bf(c.lat, c.a)
}
function qi(a, b, c, d) {
    a = new X(a.lat, a.lng);
    c = new X(c.lat, c.lng);
    b = new X(b.lat, b.lng);
    d = new X(d.lat, d.lng);
    return (d = oi(a, ni(a, b), c, ni(c, d))) ? new Bf(d.lat, d.a) : null
}
function ri(a, b) {
    var c = new X(a.lat, a.lng);
    zb(b, function (a, b) {
        var g = new X(a.lat, a.lng), h = new X(b.lat, b.lng), g = mi(c, g), h = mi(c, h);
        return g == h ? 0 : g < h ? -1 : 1
    });
    return b
}
function si(a, b, c) {
    var d = a.lat.G();
    a = a.lng.G();
    var f = b.lat.G(), g = c.G(), h = a - b.lng.G();
    b = Math.sin(d) * Math.cos(f) * Math.cos(g) * Math.sin(h);
    c = Math.sin(d) * Math.cos(f) * Math.cos(g) * Math.cos(h) - Math.cos(d) * Math.sin(f) * Math.cos(g);
    f = Math.cos(d) * Math.cos(f) * Math.sin(g) * Math.sin(h);
    d = Math.atan2(c, b);
    if (Math.abs(f) > Math.sqrt(b * b + c * c))return [];
    f = Math.acos(f / Math.sqrt(b * b + c * c));
    return [((a + f + d + Math.PI) % (2 * Math.PI) - Math.PI).da(), ((a - f + d + Math.PI) % (2 * Math.PI) - Math.PI).da()]
}
function ti(a) {
    return null != a ? new X(Number(a.lat), Number(a.lng)) : null
};function ui(a) {
    this.g = a.i;
    this.f = a.b.i;
    this.b = a.a.i;
    var b = Ff(a.b), c = Ff(a.a), b = [b, c];
    this.a = new google.maps.Polyline({
        path: b,
        geodesic: !0,
        strokeColor: "#ff0000",
        strokeOpacity: 0,
        icons: [{icon: {path: "M 0,-1 0,1", strokeOpacity: .9, scale: 4}, offset: "0", repeat: "20px"}],
        strokeWeight: 2,
        clickable: !1,
        zIndex: 2
    });
    this.a.setMap(M);
    this.c = new google.maps.Polyline({
        path: b,
        geodesic: !0,
        strokeColor: a.s.color,
        strokeOpacity: 1,
        strokeWeight: 2,
        clickable: !1
    });
    this.c.setMap(M);
    b = a.s;
    c = vi[b];
    c || (c = Uh("//commondatastorage.googleapis.com/ingress.com/img/map_icons/marker_images/" +
        (b == ra ? "enl_anchor.png" : "hum_anchor.png"), 60, cf()), vi[b] = c);
    b = c;
    wi(this.f, a.b, b);
    wi(this.b, a.a, b)
}
function wi(a, b, c) {
    var d = D(xi, a);
    d ? ++d.count : (d = google.maps.Marker.MAX_ZINDEX + 50, b = new google.maps.Marker({
        clickable: !1,
        position: Ff(b),
        icon: c,
        zIndex: d
    }), b.setMap(M), d = {count: 1, placeholder: b}, xi[a] = d)
}
function yi(a) {
    var b = D(xi, a);
    b && !--b.count && (b.placeholder.setMap(null), jb(xi, a))
}
function zi() {
    var a = cf();
    C(xi, function (b) {
        var c = b.placeholder.getIcon();
        Xh(c, 60, a);
        b.placeholder.setIcon(c)
    });
    C(vi, function (b) {
        Xh(b, 60, a)
    })
}
ui.prototype.clear = function () {
    this.a.setMap(null);
    this.c.setMap(null);
    yi(this.f);
    yi(this.b)
};
var xi = {}, vi = {};
function Ai(a, b) {
    this.f = this.m = this.c = "";
    this.j = null;
    this.g = this.h = "";
    this.a = !1;
    var c;
    a instanceof Ai ? (this.a = q(b) ? b : a.a, Bi(this, a.c), this.m = a.m, this.f = a.f, Ci(this, a.j), this.h = a.h, Di(this, a.b.clone()), this.g = a.g) : a && (c = zc(String(a))) ? (this.a = !!b, Bi(this, c[1] || "", !0), this.m = Ei(c[2] || ""), this.f = Ei(c[3] || "", !0), Ci(this, c[4]), this.h = Ei(c[5] || "", !0), Di(this, c[6] || "", !0), this.g = Ei(c[7] || "")) : (this.a = !!b, this.b = new Fi(null, 0, this.a))
}
Ai.prototype.toString = function () {
    var a = [], b = this.c;
    b && a.push(Gi(b, Hi, !0), ":");
    var c = this.f;
    if (c || "file" == b)a.push("//"), (b = this.m) && a.push(Gi(b, Hi, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.j, null != c && a.push(":", String(c));
    if (c = this.h)this.f && "/" != c.charAt(0) && a.push("/"), a.push(Gi(c, "/" == c.charAt(0) ? Ii : Ji, !0));
    (c = this.b.toString()) && a.push("?", c);
    (c = this.g) && a.push("#", Gi(c, Ki));
    return a.join("")
};
Ai.prototype.clone = function () {
    return new Ai(this)
};
function Bi(a, b, c) {
    a.c = c ? Ei(b, !0) : b;
    a.c && (a.c = a.c.replace(/:$/, ""))
}
function Ci(a, b) {
    if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b)throw Error("Bad port number " + b);
        a.j = b
    } else a.j = null
}
function Di(a, b, c) {
    b instanceof Fi ? (a.b = b, Li(a.b, a.a)) : (c || (b = Gi(b, Mi)), a.b = new Fi(b, 0, a.a))
}
function Ei(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
}
function Gi(a, b, c) {
    return t(a) ? (a = encodeURI(a).replace(b, Ni), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
}
function Ni(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Hi = /[#\/\?@]/g, Ji = /[\#\?:]/g, Ii = /[\#\?]/g, Mi = /[\#\?@]/g, Ki = /#/g;
function Fi(a, b, c) {
    this.c = this.a = null;
    this.b = a || null;
    this.f = !!c
}
function Oi(a) {
    a.a || (a.a = new Cd, a.c = 0, a.b && Bc(a.b, function (b, c) {
        var d = decodeURIComponent(b.replace(/\+/g, " "));
        Oi(a);
        a.b = null;
        var d = Pi(a, d), f = Hd(a.a, d);
        f || Dd(a.a, d, f = []);
        f.push(c);
        a.c++
    }))
}
l = Fi.prototype;
l.F = function () {
    Oi(this);
    return this.c
};
function Qi(a, b) {
    Oi(a);
    b = Pi(a, b);
    Gd(a.a.b, b) && (a.b = null, a.c -= Hd(a.a, b).length, Fd(a.a, b))
}
l.clear = function () {
    this.a = this.b = null;
    this.c = 0
};
l.isEmpty = function () {
    Oi(this);
    return 0 == this.c
};
l.W = function () {
    Oi(this);
    for (var a = this.a.L(), b = this.a.W(), c = [], d = 0; d < b.length; d++)for (var f = a[d], g = 0; g < f.length; g++)c.push(b[d]);
    return c
};
l.L = function (a) {
    Oi(this);
    var b = [];
    if (t(a)) {
        var c = a;
        Oi(this);
        c = Pi(this, c);
        Gd(this.a.b, c) && (b = vb(b, Hd(this.a, Pi(this, a))))
    } else for (a = this.a.L(), c = 0; c < a.length; c++)b = vb(b, a[c]);
    return b
};
l.toString = function () {
    if (this.b)return this.b;
    if (!this.a)return "";
    for (var a = [], b = this.a.W(), c = 0; c < b.length; c++)for (var d = b[c], f = encodeURIComponent(String(d)), d = this.L(d), g = 0; g < d.length; g++) {
        var h = f;
        "" !== d[g] && (h += "=" + encodeURIComponent(String(d[g])));
        a.push(h)
    }
    return this.b = a.join("&")
};
l.clone = function () {
    var a = new Fi;
    a.b = this.b;
    this.a && (a.a = this.a.clone(), a.c = this.c);
    return a
};
function Pi(a, b) {
    var c = String(b);
    a.f && (c = c.toLowerCase());
    return c
}
function Li(a, b) {
    b && !a.f && (Oi(a), a.b = null, a.a.forEach(function (a, b) {
        var f = b.toLowerCase();
        b != f && (Qi(this, b), Qi(this, f), 0 < a.length && (this.b = null, Dd(this.a, Pi(this, f), wb(a)), this.c += a.length))
    }, a));
    a.f = b
};function Ri(a) {
    J.call(this);
    this.b = a;
    this.a = {}
}
y(Ri, J);
var Si = [];
Ri.prototype.P = function (a, b, c, d) {
    da(b) || (b && (Si[0] = b.toString()), b = Si);
    for (var f = 0; f < b.length; f++) {
        var g = K(a, b[f], c || this.handleEvent, d || !1, this.b || this);
        if (!g)break;
        this.a[g.tb] = g
    }
    return this
};
Ri.prototype.eb = function (a, b, c, d, f) {
    if (da(b))for (var g = 0; g < b.length; g++)this.eb(a, b[g], c, d, f); else c = c || this.handleEvent, f = f || this.b || this, c = ic(c), d = !!d, b = ab(a) ? Fb(a.Y, String(b), c, d, f) : a ? (a = kc(a)) ? Fb(a, b, c, d, f) : null : null, b && (qc(b), delete this.a[b.tb]);
    return this
};
function Ti(a) {
    C(a.a, function (a, c) {
        this.a.hasOwnProperty(c) && qc(a)
    }, a);
    a.a = {}
}
Ri.prototype.O = function () {
    Ri.C.O.call(this);
    Ti(this)
};
Ri.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
};
function Ui() {
    return '<div id="clear_planned_links_button" class="clear_planned_links_button_img"><div class="clear_planned_links_button_text">Clear</div></div>'
}
Ui.a = "nemesis.dashboard.soy.linkplanning.clearPlannedLinks";
function Vi() {
    return '<div class="lp_clear"><div class="lp_clear_button"></div></div>'
}
Vi.a = "nemesis.dashboard.soy.linkplanning.plannedLinkOverlay";
function Wi(a, b, c, d, f, g) {
    google.maps.OverlayView.call(this);
    this.b = this.a = null;
    this.h = new Ef(a, b, c);
    this.f = new Ef(d, f, g);
    this.g = new Ri(this)
}
y(Wi, google.maps.OverlayView);
Wi.prototype.onAdd = function () {
    this.a = document.createElement("div");
    V(this.a, "position", "absolute");
    T(this.a, Vi);
    this.getPanes().floatPane.appendChild(this.a);
    Xi(!0);
    var a = Ig("lp_clear", this.a);
    this.g.P(a, "click", this.j);
    this.b = Ig("lp_clear_button", this.a);
    this.c = Oh("dragend", v(function () {
        this.draw()
    }, this))
};
Wi.prototype.onAdd = Wi.prototype.onAdd;
Wi.prototype.draw = function () {
    var a = this.getMap();
    if (a) {
        var b = a.getBounds(), a = this.h.latLng, c = this.f.latLng, d = b.getSouthWest(), b = b.getNorthEast(), d = new Bf(d.lat(), d.lng()), b = new Bf(b.lat(), b.lng()), c = Yi(a, c, d, b), a = Math.round(33 * cf()), d = "" + a + "px";
        vh(this.b, "width") != d && (V(this.b, "height", d), V(this.b, "width", d));
        c = this.getProjection().fromLatLngToDivPixel(Cf(c));
        a = Math.round(a / 2);
        wh(this.a, c.x - a, c.y - a)
    }
};
function Yi(a, b, c, d) {
    c = Zi(a, b, c, d);
    c = ob(c, function (c) {
        if (Sh(c.lat, c.lng)) {
            c = new X(c.lat, c.lng);
            var d = new X(a.lat, a.lng), h = new X(b.lat, b.lng);
            mi(d, h) > mi(d, c) ? (h = ni(d, h), c = Math.round(1E6 * ni(d, c)) == Math.round(1E6 * h)) : c = !1
        } else c = !1;
        return c
    }).concat(ob([a, b], function (a) {
        return Sh(a.lat, a.lng)
    }));
    c = ri(a, c);
    return 2 > c.length ? pi(a, b) : pi(c[0], c[1])
}
Wi.prototype.draw = Wi.prototype.draw;
function Zi(a, b, c, d) {
    var f = $i(a, b, d.lat, c.lat), g = [], h = qi(a, b, new Bf(d.lat, c.lng), c);
    h && g.push(h);
    (a = qi(a, b, d, new Bf(c.lat, d.lng))) && g.push(a);
    return f.concat(g)
}
function $i(a, b, c, d) {
    var f = [], f = f.concat(pb(si(a, b, c), function (a) {
        return new Bf(c, a)
    }));
    return f = f.concat(pb(si(a, b, d), function (a) {
        return new Bf(d, a)
    }))
}
Wi.prototype.onRemove = function () {
    this.a.parentNode.removeChild(this.a);
    this.a = null
};
Wi.prototype.onRemove = Wi.prototype.onRemove;
Wi.prototype.j = function (a) {
    ac(this.g);
    !a || "latLng" in a || a.stopPropagation();
    this.c && (Ph("dragend", this.c), this.c = void 0);
    a = aj.l();
    for (var b = this.h.i, c = this.f.i, d = 0; d < a.a.length; ++d) {
        var f = a.a[d];
        if (f.f.i == b && f.c.i == c) {
            a.a[d].clear();
            a.a.splice(d, 1);
            bj(a);
            break
        }
    }
};
function cj(a, b, c, d, f, g) {
    this.f = new Ef(a, b, c);
    this.c = new Ef(d, f, g);
    this.a = {};
    this.Xa = dj;
    this.h = new google.maps.Polyline({
        path: [Ff(this.f), Ff(this.c)],
        geodesic: !0,
        strokeColor: "#FFD200",
        strokeOpacity: .9,
        strokeWeight: 4,
        clickable: !1,
        cursor: "auto",
        zIndex: 10
    });
    this.b = null;
    this.g = 0;
    this.j = new Wi(a, b, c, d, f, g)
}
var ej = [.9, .8, .7, .6, .5, .4, .3, .3, .4, .5, .6, .7, .8, .9];
function fj(a, b) {
    return 0 < ob(b, function (a) {
            var b = this.f;
            if (b.i == a.i || a.latLng.lat == b.latLng.lat && a.latLng.lng == b.latLng.lng)return !0;
            b = this.c;
            return b.i == a.i || a.latLng.lat == b.latLng.lat && a.latLng.lng == b.latLng.lng ? !0 : !1
        }, a).length
}
cj.prototype.draw = function () {
    this.m(this.Xa == gj);
    this.h.setMap(M);
    this.j.setMap(M)
};
cj.prototype.clear = function () {
    this.b && window.clearTimeout(this.b);
    this.h.setMap(null);
    this.j.setMap(null);
    C(this.a, function (a) {
        a.clear()
    });
    this.a = {}
};
function hj(a, b) {
    var c = gb(a.a);
    if (0 != c.length) {
        var d = {};
        F(b, function (a) {
            d[a.i] = !0
        });
        F(c, function (a) {
            a in d || (this.a[a].clear(), jb(this.a, a))
        }, a)
    }
}
cj.prototype.m = function (a) {
    this.b && window.clearTimeout(this.b);
    var b = .9;
    a && (b = ej[this.g], this.g += 1, this.g %= ej.length, this.b = window.setTimeout(v(this.m, this, !0), 100));
    this.h.setOptions({strokeOpacity: b})
};
var dj = 0, gj = 1;
function ij() {
    J.call(this);
    this.g = 1;
    this.c = [];
    this.f = 0;
    this.a = [];
    this.b = {}
}
y(ij, J);
function Y(a, b, c) {
    var d = jj, f = d.b[a];
    f || (f = d.b[a] = []);
    var g = d.g;
    d.a[g] = a;
    d.a[g + 1] = b;
    d.a[g + 2] = c;
    d.g = g + 3;
    f.push(g)
}
l = ij.prototype;
l.Kb = function (a) {
    if (0 != this.f)return this.c.push(a), !1;
    var b = this.a[a];
    if (b) {
        var c = this.b[b];
        c && ub(c, a);
        delete this.a[a];
        delete this.a[a + 1];
        delete this.a[a + 2]
    }
    return !!b
};
l.xd = function (a, b) {
    var c = this.b[a];
    if (c) {
        this.f++;
        for (var d = Array(arguments.length - 1), f = 1, g = arguments.length; f < g; f++)d[f - 1] = arguments[f];
        f = 0;
        for (g = c.length; f < g; f++) {
            var h = c[f];
            this.a[h + 1].apply(this.a[h + 2], d)
        }
        this.f--;
        if (0 < this.c.length && 0 == this.f)for (; c = this.c.pop();)this.Kb(c);
        return 0 != f
    }
    return !1
};
l.clear = function (a) {
    if (a) {
        var b = this.b[a];
        b && (F(b, this.Kb, this), delete this.b[a])
    } else this.a.length = 0, this.b = {}
};
l.F = function (a) {
    if (a) {
        var b = this.b[a];
        return b ? b.length : 0
    }
    a = 0;
    for (b in this.b)a += this.F(b);
    return a
};
l.O = function () {
    ij.C.O.call(this);
    this.clear();
    this.c.length = 0
};
var jj = new ij;
function $e(a, b) {
    jj.xd.apply(jj, arguments)
}
var Xf = "pic", af = "zlu";
function kj(a) {
    this.b = a
}
y(kj, J);
function aj() {
    this.a = [];
    this.c = null;
    this.u = !1;
    this.w = new kj(v(this.zd, this));
    $b(this, na(ac, this.w));
    this.g = Uh("//storage.googleapis.com/ingress.com/img/map_icons/marker_images/lp-origin-ornament.png", 100, cf());
    this.f = new google.maps.Marker({clickable: !1, icon: this.g, zIndex: 20});
    this.b = new google.maps.Marker({clickable: !1, icon: this.g, zIndex: 20});
    Y("ged", this.Wa, this);
    Y(af, this.$c, this);
    Y("mov", this.Fd, this);
    Y("moh", this.Vc, this)
}
y(aj, J);
r(aj);
l = aj.prototype;
l.Vc = function () {
    bj(this, !1);
    C(this.a, function (a) {
        a.clear()
    });
    this.u = !0
};
l.Fd = function () {
    bj(this);
    C(this.a, function (a) {
        a.draw()
    });
    this.Wa();
    this.u = !1
};
function lj(a, b, c, d, f, g, h) {
    b = new cj(b, c, d, f, g, h);
    a.a.push(b);
    b.draw();
    mj([b]);
    bj(a)
}
function Xi(a) {
    if (q(Dh)) {
        var b = Dh.overlayLayer, c = Dh.overlayImage, d = vh(b, "zIndex"), f = vh(c, "zIndex");
        if (a && d < f || !a && d > f)V(c, "zIndex", d), V(b, "zIndex", f)
    }
}
function nj(a, b) {
    F(a, function (a) {
        var d;
        if (d = !(a.i in b.a)) {
            var f = b.c.latLng, g = a.b.latLng, h = a.a.latLng;
            d = ti(b.f.latLng);
            f = ti(f);
            g = ti(g);
            h = ti(h);
            if (d && f && g && h) {
                var k = oi(d, ni(d, f), g, ni(g, h));
                d = k && mi(d, f) > mi(d, k) && mi(g, h) > mi(g, k) ? new Bf(k.lat, k.a) : null
            } else d = null
        }
        d && (a = new ui(a), b.a[a.g] = a)
    }, b)
}
function oj(a, b) {
    return ob(a, function (a) {
        return "edge" == a.A ? !fj(b, [a.b, a.a]) : !1
    })
}
l.Wa = function (a) {
    this.u || mj(this.a, a)
};
function mj(a, b) {
    var c = R.l(), d = fb(c.a.a), f = 100 <= tg(c);
    F(a, function (a) {
        b && (a.Xa = gj);
        var c = oj(d, a);
        nj(c, a);
        f && (hj(a, c), a.Xa = 2);
        a.draw()
    })
}
l.zd = function () {
    for (var a = 0; a < this.a.length; ++a)this.a[a].clear();
    this.a = [];
    bj(this);
    var a = document.title, b = new Ai(document.URL);
    Qi(b.b, "pls");
    window.history.replaceState(null, a, b.toString())
};
function pj(a, b) {
    a.c.i != b.i && lj(a, a.c.i, a.c.latLng.lat, a.c.latLng.lng, b.i, b.latLng.lat, b.latLng.lng);
    a.c = null;
    a.f.setMap(null);
    a.b.setMap(null);
    a.o && (Ph("mousemove", a.o), a.o = void 0);
    a.h && (Ph("click", a.h), a.h = void 0)
}
l.kd = function (a) {
    a = qj(a, !1);
    null != a ? (rj(a.i), this.b.setPosition(Ff(a)), null != this.b.getMap() || this.b.setMap(M)) : this.b.setMap(null)
};
l.jd = function (a) {
    a = qj(a, !1);
    null != a && pj(this, a)
};
function bj(a, b) {
    var c;
    c = q(b) ? b : 0 < a.a.length;
    a:{
        var d = document.getElementById("clear_planned_links_button");
        if (!d) {
            if (!c)break a;
            var d = a.w, f = document.getElementById("clear_planned_links");
            f && (T(f, Ui), d.a = new Ri(d), $b(d, na(ac, d.a)), d.a.P(f, "touchstart", d.b), d.a.P(f, "click", d.b));
            d = document.getElementById("clear_planned_links_button")
        }
        d && W(d, c)
    }
    Xi(c)
}
l.$c = function () {
    Xh(this.g, 100, cf()) && (this.f.getMap() && this.f.setIcon(this.g), this.b.getMap() && this.b.setIcon(this.g));
    zi()
};
function sj() {
    for (var a = aj.l(), b = D(MAP_PARAMS, "pls").split("_"), c = 0; c < b.length; ++c) {
        var d = b[c].split(",");
        if (4 != d.length)break;
        d = pb(d, function (a) {
            return Number(a)
        });
        if (qb(d, function (a) {
                return null == a || isNaN(a)
            }))break;
        if (!Df(d[0], d[1]))break;
        if (!Df(d[2], d[3]))break;
        lj(a, ["url_guid", c, 0].join("_"), d[0], d[1], ["url_guid", c, 1].join("_"), d[2], d[3])
    }
};function tj() {
    this.a = null
}
r(tj);
function uj(a) {
    Y("mdt", a.c, a);
    Y("mde", a.b, a)
}
tj.prototype.c = function (a) {
    this.a = a
};
tj.prototype.b = function () {
    this.a = null
};
function vj() {
    var a = tj.l();
    if (!IS_VERSION_MOBILE) {
        var b = Hg(document, "maplink");
        if (!b) {
            var b = Ug(li), c = Hg(document, "header_maplink");
            c.parentNode.insertBefore(b, c.nextSibling);
            b = Hg(document, "maplink")
        }
        Kg(b, {value: wj(a)});
        b = aj.l();
        a = Hg(document, "header_maplink_warning");
        if (40 < b.a.length) {
            if ("textContent" in a)a.textContent = "Only the 40 most recent links drawn included"; else if (3 == a.nodeType)a.data = "Only the 40 most recent links drawn included"; else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild !=
                       a.firstChild;)a.removeChild(a.lastChild);
                a.firstChild.data = "Only the 40 most recent links drawn included"
            } else {
                for (; b = a.firstChild;)a.removeChild(b);
                a.appendChild(Gg(a).createTextNode("Only the 40 most recent links drawn included"))
            }
            V(a, "display", "block")
        } else V(a, "display", "none")
    }
}
oa("displaymaplink", function () {
    vj()
});
function wj(a) {
    if (a.a)return window.location.protocol + "//" + window.location.hostname + "/mission/" + a.a;
    a = M.getCenter().toUrlValue();
    a = window.location.protocol + "//" + window.location.hostname + "/intel?ll=" + a + "&z=" + O;
    var b;
    b = aj.l();
    var c = 0, d = b.a.length;
    40 < d && (c = d - 40);
    for (var f = []; c < d; ++c) {
        var g = b.a[c].f, h = b.a[c].c;
        f.push([g.latLng.lat, g.latLng.lng, h.latLng.lat, h.latLng.lng].join())
    }
    (b = f.join("_")) && (a += "&pls=" + b);
    (b = xj()) && (a += "&pll=" + b.latLng.lat + "," + b.latLng.lng);
    return a
};function yj(a) {
    var b = '<div id="portal_info_windows" class="' + U(a.H.s.css) + ' site_font">\x3c!-- Pointy bit --\x3e<div id="pointy_container"><div id="pointy"></div></div>';
    if (0 == a.H.state)a = '<div id="portal_details_container"><div id="portal_details_loading_message">Loading...</div></div>'; else {
        var c = '\x3c!-- Expanded info window --\x3e<div id="portal_details_container" ' + (a.H.la ? 'class="portal_details_container_captured"' : "") + '><div class="portal_details_row"><div id="portal_primary_title">' + S(a.H.title) +
            '</div><div id="portal_close"><div class="SPRITE_close"></div></div></div>', d = '<div class="portal_details_row"><div id="portal_image_container"><div id="portal_image">' + (a.H.Pa ? '<img style="max-width:100%; max-height:100%; margin:auto; display:block" src="' + U(fh(a.H.Pa)) + '">' : "") + '</div></div><div id="portal_metadata"><div id="lp_button"><div class="lp_button_img"></div></div>' + (a.H.level ? '<div id="portal_level">Level ' + S(a.H.level) + "</div>" : "") + '<div id="portal_capture_status">', f;
        f = a.H.la ? '<div id="portal_discovery_label">Owner:</div><div id="portal_capture_details">' +
        (a.H.la ? a.H.za ? '<span title="' + U(a.H.za) + '">' + S(a.H.za) + "</span>" : "<span>loading&hellip;</span>" : "") + "</div>" : "";
        d = d + f + '<div id="portal_fragments" class="scrolling ' + U(a.H.Z) + '">';
        f = a.H.Z;
        var g = a.H.Ka, h = a.oc;
        f = "" + (g && h ? "Shards: " + S(g) + " #" + S(h) : h ? "Shards: #" + S(h) : "" != f ? "Shards: loading" : "");
        c += d + f + "</div>" + (a.Fc ? '<div id="tm_by_portal_button"><img class="tm_icon" id="tm_by_portal_button_icon" src="//commondatastorage.googleapis.com/ingress.com/img/tm_icons/tm_cyan.png"></img><span class="tm_stats_text">Missions starting here</span></div>' :
                "") + "</div></div></div>";
        if (a.H.la) {
            d = a.H.Ab;
            f = a.H.s;
            for (var g = a.H.ca, h = '<div class="portal_details_row"><div id="resonators_left">', k = 0; 4 > k; k++)h += k < d.length ? zj(ah(d[k], {
                Ga: 1,
                ra: 0 < d.length
            })) : zj({Ra: 0, ra: 0 < d.length});
            for (var k = '<div id="resonatorsCenterPiece"><div id="resonator_arms_left">', m = 1; 5 > m; m++)k += '<div class="resonator_arm resonator_arm_' + U(m) + '"></div>';
            k += '</div><div id="resonator_arms_right">';
            for (m = 1; 5 > m; m++)k += '<div class="resonator_arm resonator_arm_' + U(m) + '"></div>';
            k += '</div><div id="resonators_bar"><div id="resonators_health"' +
                (g ? 'style="height: ' + U(jh(g / 100 * 87)) + 'px;"' : "") + '></div><div id="portal_faction_icon"><div class="SPRITE_' + U(f.Pc) + '"></div></div></div></div>';
            h = h + ('</div><div id="resonators_center">' + k + '</div><div id="resonators_right">');
            for (f = 4; 8 > f; f++)h += f < d.length ? zj(ah(d[f], {Ra: 1, Ga: 1, ra: 0 < d.length})) : zj({
                Ra: 1,
                ra: 0 < d.length
            });
            d = '<div id="tab_content_res">' + (h + "</div></div>") + '</div><div id="tab_content_mod">';
            f = a.H.zb;
            a = a.H.s;
            g = '<div class="portal_details_row">';
            for (h = 0; 4 > h; h++)g += (h < f.length && f[h] ? Aj(ah(f[h],
                    {
                        s: a,
                        Fa: f[h].Fa,
                        X: f[h].X,
                        D: f[h].D
                    })) : Aj(null)) + (3 != h ? '<div class="mod_separator"></div>' : "");
            a = '<div id="portal_tabs_container" class="res_tab_selected"><div class="portal_details_row"><div id="portal_tab_group_decorator"><div id="pi-tab-res" class="portal_tab_title tab_selected">RESONATORS</div><div id="pi-tab-mod" class="portal_tab_title">MODS</div></div></div><div id="deploy_details">' + (d + (g + "</div>") + "</div>") + "</div></div>"
        } else a = "";
        a = c + a + "</div></div>"
    }
    return b + a + "</div></div>"
}
yj.a = "nemesis.dashboard.soy.portalinfooverlay.main";
function Aj(a) {
    a = a || {};
    var b;
    if (null != a.name) {
        b = '<div class="mod_installer"><span title="' + U(a.Fa) + '">' + S(a.Fa) + '</span></div><div class="mod_icon"><div class="SPRITE_' + U(a.s.ad) + '"></div></div>';
        var c;
        c = (c = ah(a.D, {name: a.name, X: a.X})) || {};
        c = "" + (null != c.name ? "VERY_COMMON" == c.X ? '<div class="mod_name_very_common">' + S(c.name) + "</div>" : "COMMON" == c.X ? '<div class="mod_name_common">' + S(c.name) + "</div>" : "LESS_COMMON" == c.X ? '<div class="mod_name_less_common">' + S(c.name) + "</div>" : "RARE" == c.X ? '<div class="mod_name_rare">' +
            S(c.name) + "</div>" : "VERY_RARE" == c.X ? '<div class="mod_name_very_rare">' + S(c.name) + "</div>" : "EXTREMELY_RARE" == c.X ? '<div class="mod_name_extermely_rare">' + S(c.name) + "</div>" : '<div class="mod_name_common">' + S(c.name) + "</div>" : "");
        b += c;
        c = (c = ah(a.D, {D: a.D})) || {};
        a = "";
        if (null != c.D) {
            if (c.D.MITIGATION) {
                var d = "Shielding: +" + c.D.MITIGATION;
                a += '<div class="mod_stat"><span title="' + U(d) + '">' + S(d) + "</span></div>"
            }
            c.D.LINK_RANGE_MULTIPLIER && (d = "Link Range: +" + c.D.LINK_RANGE_MULTIPLIER / 1E3 + "x", a += '<div class="mod_stat"><span title="' +
                U(d) + '">' + S(d) + "</span></div>");
            c.D.BURNOUT_INSULATION && (d = "Hack Rate: +" + c.D.BURNOUT_INSULATION, a += '<div class="mod_stat"><span title="' + U(d) + '">' + S(d) + "</span></div>");
            c.D.FORCE_AMPLIFIER && (d = "Force Amp: +" + c.D.FORCE_AMPLIFIER / 1E3 + "x", a += '<div class="mod_stat"><span title="' + U(d) + '">' + S(d) + "</span></div>");
            c.D.ATTACK_FREQUENCY && (d = "Attack Rate: +" + c.D.ATTACK_FREQUENCY / 1E3 + "x", a += '<div class="mod_stat"><span title="' + U(d) + '">' + S(d) + "</span></div>");
            c.D.HIT_BONUS && (d = "Hit Bonus: " + c.D.HIT_BONUS / 1E4 +
                "%", a += '<div class="mod_stat"><span title="' + U(d) + '">' + S(d) + "</span></div>");
            c.D.HACK_SPEED && (d = "Hack Rate: +" + c.D.HACK_SPEED / 1E4 + "%", a += '<div class="mod_stat"><span title="' + U(d) + '">' + S(d) + "</span></div>");
            c.D.LINK_DEFENSE_BOOST && (d = "Link Defense: +" + c.D.LINK_DEFENSE_BOOST / 1E3 + "x", a += '<div class="mod_stat"><span title="' + U(d) + '">' + S(d) + "</span></div>");
            c.D.OUTGOING_LINKS_BONUS && (c = "Outgoing Links: +" + c.D.OUTGOING_LINKS_BONUS, a += '<div class="mod_stat"><span title="' + U(c) + '">' + S(c) + "</span></div>")
        }
        b +=
            a
    } else b = '<div class="mod_icon_empty"></div>';
    return '<div class="mod">' + b + "</div>"
}
function zj(a) {
    a = a || {};
    return '<div class="resonator">' + (a.Ra ? Bj(a) + (a.Ga ? Cj(a) + Dj(a) : a.ra ? "" : "<span>&nbsp;&nbsp;loading&hellip;&nbsp;&nbsp;</span>") : (a.Ga ? Dj(a) + Cj(a) : a.ra ? "<span>&nbsp;</span>" : "<span>&nbsp;&nbsp;loading&hellip;&nbsp;&nbsp;</span>") + Bj(a)) + "</div>"
}
function Bj(a) {
    return '<div class="resonator_health"><div class="resonator_health_slot">' + (a.level ? "<div " + (a.ca ? 'style="height: ' + U(jh(a.ca)) + 'px;"' : "") + 'class="resonator_health_indicator resonator_level_' + U(a.level) + '"></div>' : "") + "</div></div>"
}
function Cj(a) {
    return '<div class="resonator_level">' + (a.level ? "Level " + S(a.level) : "") + "</div>"
}
function Dj(a) {
    return '<div class="resonator_owner">' + (a.Ga ? '<span title="' + U(a.kb) + '">' + S(a.kb) + "</span>" : "") + "</div>"
};function Ej(a) {
    google.maps.OverlayView.call(this);
    this.a = document.createElement("div");
    V(this.a, "position", "absolute");
    this.c = a;
    this.f = null;
    this.b = new Ri(this)
}
var Fj;
y(Ej, google.maps.OverlayView);
var Gj = {tab: 0, toggle: 0};
Ej.prototype.onAdd = function () {
    this.getPanes().floatPane.appendChild(this.a);
    Hj(this)
};
Ej.prototype.onAdd = Ej.prototype.onAdd;
function Ij(a, b) {
    T(a.a, yj, {H: b, Fc: b.J && !IS_VERSION_MOBILE, oc: b.o.join(", ")})
}
function Hj(a) {
    var b = document.getElementById("pi-tab-res");
    b && a.b.P(b, ["click", "touchend"], v(a.Eb, a, "resonators"));
    (b = document.getElementById("pi-tab-mod")) && a.b.P(b, ["click", "touchend"], v(a.Eb, a, "mods"));
    (b = document.getElementById("portal_close")) && a.b.P(b, ["click", "touchstart"], a.na);
    a.f = google.maps.event.addListener(M, "click", v(function (a) {
        Gj.tab + 333 < x() ? this.na(a) : Jj(Fj)
    }, a));
    (b = document.getElementById("lp_button")) && a.b.P(b, ["click", "touchstart"], a.od);
    (b = document.getElementById("tm_by_portal_button")) &&
    a.b.P(b, ["click", "touchstart"], a.vd);
    a.b.P(a.a, ["click", "touchstart", "mousedown"], function (a) {
        a.stopPropagation()
    })
}
l = Ej.prototype;
l.na = function (a) {
    ac(this.b);
    !a || "latLng" in a || a.stopPropagation();
    this.setMap(null);
    google.maps.event.removeListener(this.f)
};
l.od = function (a) {
    var b = aj.l(), c = this.c;
    null != b.c ? pj(b, c) : (b.c = c, b.f.setPosition(Ff(c)), b.f.setMap(M), b.o = Oh("mousemove", v(b.kd, b)), b.h = Oh("click", v(b.jd, b), !0));
    this.na(a)
};
l.vd = function () {
    _gaq.push(["_trackEvent", "Missions", "ViewMissionList", "Portal"]);
    $e("mfp", this.c.i)
};
l.Eb = function (a, b) {
    Gj.tab = x();
    b.stopPropagation();
    var c = document.getElementById("portal_tabs_container"), d = document.getElementById("pi-tab-res"), f = document.getElementById("pi-tab-mod");
    "resonators" == a ? (Kj(c, "mod_tab_selected", "res_tab_selected"), Lj(d, "tab_selected"), Mj(f, "tab_selected")) : (Kj(c, "res_tab_selected", "mod_tab_selected"), Lj(f, "tab_selected"), Mj(d, "tab_selected"));
    _gaq.push(["_trackEvent", "Map", "Portal info window", a + " tab"])
};
l.draw = function () {
    var a = Jj(this);
    a && this.getMap().getBounds().contains(Ff(this.c)) && this.getMap().panTo(a)
};
Ej.prototype.draw = Ej.prototype.draw;
function Jj(a) {
    var b = null, c = a.a, d = document.getElementById("portal_details_container"), f = Ff(a.c), g = a.getProjection().fromLatLngToContainerPixel(f), h = document.getElementById("map_canvas"), k = g.y, m = h.offsetHeight - k, g = g.x, h = h.offsetWidth - g, u = d.offsetWidth, d = d.offsetHeight, p;
    b:{
        p = Gg(c);
        if (p.defaultView && p.defaultView.getComputedStyle && (p = p.defaultView.getComputedStyle(c, null))) {
            p = p.display || p.getPropertyValue("display") || "";
            break b
        }
        p = ""
    }
    p || (p = c.currentStyle ? c.currentStyle.display : null);
    if ("none" != (p || c.style &&
        c.style.display))p = yh(c); else {
        p = c.style;
        var w = p.display, N = p.visibility, A = p.position;
        p.visibility = "hidden";
        p.position = "absolute";
        p.display = "inline";
        var kn = yh(c);
        p.display = w;
        p.position = A;
        p.visibility = N;
        p = kn
    }
    p.width && p.height && (u = p.width, d = p.height);
    p = u;
    if (p instanceof Bg)w = p.height, p = p.width; else {
        if (void 0 == d)throw Error("missing height argument");
        w = d
    }
    c.style.width = xh(p, !0);
    c.style.height = xh(w, !0);
    w = a.getProjection().fromLatLngToDivPixel(f);
    N = Math.floor(u / 2);
    A = Math.floor(d / 2);
    f = w.x - N;
    p = w.y - A;
    N < g && N <
    h && d + 45 < k ? (p -= A + 45, Nj("bottom", d)) : N < g && N < h && d + 45 < m ? (p += A + 45, Nj("top")) : A < k && A < m && u + 45 < h ? (f += N + 45, Nj("left", A)) : A < k && A < m && u + 45 < g ? (f -= N + 45, Nj("right", A)) : (p -= A + 45, Nj("bottom", d), b = new google.maps.Point(w.x, w.y - (d + 45) / 2), b = a.getProjection().fromDivPixelToLatLng(b));
    wh(c, f, p);
    return b
}
function Nj(a, b) {
    var c = document.getElementById("pointy");
    Oj(c, "min") ? (c.className = "pointy_" + a, Lj(c, "min")) : c.className = "pointy_" + a;
    c.removeAttribute("style");
    b && V(c, "top", b + "px");
    "top" == a ? V(c, "top", "-20px") : "left" == a && V(c, "left", "-20px")
}
Ej.prototype.onRemove = function () {
    this.a.parentNode.removeChild(this.a);
    this.a.innerHTML = "";
    vj()
};
Ej.prototype.onRemove = Ej.prototype.onRemove;
Ej.prototype.g = function (a) {
    Ij(this, a);
    Hj(this);
    Pj()
};
function xj() {
    var a = Fj;
    return "undefined" !== typeof a && a.getMap() ? a.c : null
}
function Qj(a) {
    var b = Fj;
    !b || b.c.i != a && a || b.na()
}
function Pj() {
    var a = Fj;
    a && a.getMap() && Jj(a)
}
function rj(a) {
    var b = xj();
    if (!b || b.i != a) {
        var b = function (a) {
            var b = new Ej(Tf(a)), c = M;
            Ij(b, a);
            if (2 != a.state) {
                var d = R.l(), m = v(b.g, b, a);
                Ve(d.b, a.i, v(d.ud, d, a, m))
            }
            Fj && Fj.na();
            Fj = b;
            b.setMap(c);
            _gaq.push(["_trackEvent", "Map", "Portal info window"])
        }, c = R.l(), d = sg(c, a);
        d ? b(d) : Ve(c.b, a, v(c.td, c, a, b))
    }
};function Rj(a) {
    this.a = a;
    this.b = new gi(a.c())
}
function Sj(a) {
    var b = cf();
    Tj(a);
    a.b.I(b)
}
function Tj(a) {
    var b;
    if (b = 14 >= O)b = a.a, b = !(Yf(b) || 0 < b.m.length);
    if (b || 0 != a.a.state) {
        var c = new Th;
        c.s = a.a.s;
        c.u = 0 < a.a.j.length;
        c.o = 0 < a.a.Z.length;
        c.b = Yf(a.a);
        c.h = a.a.Z;
        c.m = a.a.j;
        c.j = a.a.m;
        b ? (c.c = 0, c.g = !1, c.f = !1, c.a = a.a.s != qa ? 8 : 0) : (c.c = a.a.h, c.g = !0, c.a = a.a.level, c.f = a.a.u);
        ii(a.b, c)
    }
};function pg() {
    this.a = {};
    this.b = !1
}
r(pg);
function Uj() {
    var a = pg.l();
    a.b = !0;
    C(a.a, function (a) {
        Qj(a.a.i);
        a.b.J()
    }, a);
    a.a = {}
}
function og(a, b) {
    var c = a.a[b.i];
    c && (c.a != b && (c.a = b, Tj(c)), Sj(c))
}
pg.prototype.draw = function (a) {
    this.a = eb(this.a, function (b) {
        var c = b.a;
        if (!Vj(c))return Qj(b.a.i), b.b.J(), !1;
        var d = a[c.i];
        d && (d.g > c.g && b.a != d && (b.a = d, Tj(b)), delete a[c.i]);
        c = cf();
        Tj(b);
        b.b.A(c);
        return !0
    }, this);
    C(a, function (a) {
        if (Vj(a) && !(a.i in this.a)) {
            var c = new Rj(a);
            Sj(c);
            this.a[a.i] = c
        }
    }, this)
};
function Wj(a, b, c) {
    a = pb(fb(a.a), function (a) {
        return Tf(a.a)
    });
    return Xj(a, b, c)
}
function Yj(a, b, c, d) {
    var f = [];
    C(b, function (a, b) {
        this.a[b] && f.push(Tf(a))
    }, a);
    return Xj(f, c, d)
}
function Vj(a) {
    return pg.l().b ? !1 : fg(R.l(), a.i) && Zf(a)
}
function Xj(a, b, c) {
    if (c)return rb(a, function (a) {
        return b.equals(Ff(a))
    });
    var d = Eh, f = d.fromLatLngToContainerPixel(b), g = 16 * cf();
    return rb(a, function (a) {
        a = d.fromLatLngToContainerPixel(Ff(a));
        return Math.abs(a.x - f.x) <= g && Math.abs(a.y - f.y) <= g
    })
};function Zj() {
    this.b = {}
}
var ak = [];
Object.freeze(ak);
Zj.prototype.draw = function (a) {
    var b = R.l();
    this.b = eb(this.b, function (a, d) {
        return null != (b.a.a[d] || null) && fg(b, d) ? !0 : (this.g(a), !1)
    }, this);
    C(a, function (a) {
        this.h(a);
        this.b[a.i] = a
    }, this)
};
function bk() {
    this.b = {};
    this.a = {};
    this.c = !1
}
y(bk, Zj);
r(bk);
function ck() {
    var a = bk.l();
    a.c = !0;
    C(a.a, function (a) {
        a.setMap(null)
    }, a);
    a.a = {}
}
bk.prototype.f = function (a) {
    return a ? a.f() : ak
};
bk.prototype.g = function (a) {
    var b = this.a[a.i];
    b && (delete this.a[a.i], b.setMap(null))
};
bk.prototype.h = function (a) {
    if (!this.c && !this.a[a.i] && a.w) {
        var b = pb(this.f(a), function (a) {
            return Ff(a)
        });
        this.a[a.i] = new google.maps.Polyline({
            map: M,
            path: b,
            geodesic: !0,
            strokeColor: a.s.color,
            strokeOpacity: .8,
            strokeWeight: 2,
            clickable: !1,
            cursor: "auto",
            zIndex: 1
        })
    }
};
function dk(a) {
    return '<div id="metascore"><div id="metascore_border_left"></div><div id="metascore_border_mid"></div><div id="metascore_border_right"></div></div>' + ek({
            s: sa,
            pa: a.Ad
        }) + ek({s: ra, pa: a.Oc})
}
dk.a = "nemesis.dashboard.soy.metascore.gameScoreBox";
function ek(a) {
    return '<div class="meta_team ' + U(a.s.css) + '"><div class="meta_team_score">' + S(a.pa) + '</div><div class="meta_team_icon"></div></div>'
}
function fk(a) {
    for (var b = '<div id="rs_details"><div id="rs_region_name">' + S(a.yd) + '</div><div id="rs_current_score"><div class="rs_resistance_score" style="width: ' + U(jh(a.Aa.Fb.$a)) + 'px">RES&nbsp;' + S(a.Aa.Fb.pa) + '</div><div class="rs_enlightened_score" style="width: ' + U(jh(a.Aa.rb.$a)) + 'px">ENL&nbsp;' + S(a.Aa.rb.pa) + "</div></div>", c = '<div id="rs_score_history_scores_container"><div id="rs_score_history_scores">', d = a.Ib, f = d.length, g = 0; g < f; g++)var h = d[g], c = c + ('<div class="rs_row"><div class="rs_score_history_score_data cp_header"><nobr>Checkpoint ' +
        S(h[0]) + '</nobr></div><div class="rs_score_history_score_data RESISTANCE">' + (h[2] ? S(h[2]) : "-") + '</div><div class="rs_score_history_score_data ENLIGHTENED">' + (h[1] ? S(h[1]) : "-") + "</div></div>");
    b = b + (c + "</div></div>") + '<div id="rs_cycle_end_topagents_container"><div id="rs_top_agents">';
    if (0 < a.cb.length) {
        b += '<span class="rs_content_header">Top ' + S(a.cb.length) + " Agents</span><ol>";
        c = a.cb;
        d = c.length;
        for (f = 0; f < d; f++)g = c[f], b += '<li><span class="' + U(g.s) + '">' + S(g.ed) + "</span></li>";
        b += "</ol>"
    }
    return b +=
        '</div><div id="rs_cycle_end"><span class="rs_content_header">Next Checkpoint</span><div id="rs_cycle_end_time">' + gk({ha: a.Cd}) + '</div></div></div></div><div style="clear: both"></div>'
}
fk.a = "nemesis.dashboard.soy.metascore.rsDetails";
function hk(a) {
    return '<div id="rs_box_header_left"></div><div id="rs_box_header"><div id="rs_box_header_tbl"><div id="rs_box_header_title">Regional Score</div><div' + (a.yb ? ' class="show_up"' : "") + ' id="rs_pointy_container"></div><div id="rs_box_header_scores"><div class="RESISTANCE rs_score">' + S(a.Gb) + '</div><div class="ENLIGHTENED rs_score">' + S(a.sb) + '</div></div></div></div><div id="rs_box_header_right"></div>'
}
hk.a = "nemesis.dashboard.soy.metascore.rsScore";
function gk(a) {
    return '<span class="number">' + (3 == a.ha.length ? S(a.ha[0]) + ":" + S(a.ha[1]) + ":" + S(a.ha[2]) : S(a.ha[0]) + ":" + S(a.ha[1])) + "</span>"
}
gk.a = "nemesis.dashboard.soy.metascore.rsCycleEnd";
function ik() {
    return '<div id="rs_error">Cool down in effect</div>'
}
ik.a = "nemesis.dashboard.soy.metascore.rsError";
function jk(a) {
    a = a.className;
    return t(a) && a.match(/\S+/g) || []
}
function Lj(a, b) {
    var c = jk(a);
    kk(c, yb(arguments, 1));
    a.className = c.join(" ")
}
function Mj(a, b) {
    var c = jk(a), c = lk(c, yb(arguments, 1));
    a.className = c.join(" ")
}
function kk(a, b) {
    for (var c = 0; c < b.length; c++)sb(a, b[c]) || a.push(b[c])
}
function lk(a, b) {
    return ob(a, function (a) {
        return !sb(b, a)
    })
}
function Kj(a, b, c) {
    for (var d = jk(a), f = !1, g = 0; g < d.length; g++)d[g] == b && (xb(d, g--, 1), f = !0);
    f && (d.push(c), a.className = d.join(" "))
}
function Oj(a, b) {
    return sb(jk(a), b)
}
function Bh(a, b, c) {
    c ? Lj(a, b) : Mj(a, b)
}
function Ch(a, b) {
    var c = !Oj(a, b);
    Bh(a, b, c);
    return c
};function mk(a) {
    var b, c = '<div id="display_msg_text">';
    switch (ha(b = a.zoom) ? b.toString() : b) {
        case 3:
        case 4:
            c += "Showing Links > 200km. Zoom in to see more Links and Portals.";
            break;
        case 5:
        case 6:
            c += "Showing Links > 60km. Zoom in to see more Links and Portals.";
            break;
        case 7:
            c += "Showing Links > 10km. Zoom in to see more Links and Portals.";
            break;
        case 8:
            c += "Showing Links > 5km. Zoom in to see more Links and Portals.";
            break;
        case 9:
        case 10:
            c += "Showing Links > 2.5km. Zoom in to see more Links and Portals.";
            break;
        case 11:
            c += "Showing Links > 800m. Zoom in to see more Links and Portals.";
            break;
        case 12:
            c += "Showing Links > 300m. Zoom in to see more Links and Portals.";
            break;
        case 13:
        case 14:
            c += "Showing all Links. Zoom in to see Portals.";
            break;
        default:
            c += " "
    }
    return c + "</div>"
}
mk.a = "nemesis.dashboard.soy.portallinklengthrender.main";
function nk() {
    this.b = {};
    this.a = {};
    this.c = !1
}
y(nk, Zj);
r(nk);
function ok() {
    var a = nk.l();
    a.c = !0;
    C(a.a, function (a) {
        a.setMap(null)
    }, a);
    a.a = {}
}
nk.prototype.f = function (a) {
    return a ? a.f() : ak
};
nk.prototype.g = function (a) {
    var b = this.a[a.i];
    b && (delete this.a[a.i], b.setMap(null))
};
nk.prototype.h = function (a) {
    if (!this.c && !this.a[a.i]) {
        var b = pb(this.f(a), function (a) {
            return Ff(a)
        });
        if (!(3 > b.length)) {
            for (var c = 0; c < b.length; c++)if (null === b[c])return;
            this.a[a.i] = new google.maps.Polygon({
                map: M,
                paths: b,
                geodesic: !0,
                strokeColor: a.s.color,
                strokeOpacity: .2,
                strokeWeight: 1,
                fillColor: a.s.color,
                fillOpacity: .35,
                clickable: !1,
                cursor: "auto"
            })
        }
    }
};
var pk = {
    Vb: ".",
    cc: ",",
    ic: "%",
    pb: "0",
    lc: "+",
    ec: "-",
    $b: "E",
    kc: "\u2030",
    dc: "\u221e",
    gc: "NaN",
    hb: "#,##0.###",
    pc: "#E0",
    jc: "#,##0%",
    Tb: "\u00a4#,##0.00",
    Wb: "USD"
}, Z = pk, Z = pk;
var qk = {
    Sb: {
        1E3: {other: "0K"},
        1E4: {other: "00K"},
        1E5: {other: "000K"},
        1E6: {other: "0M"},
        1E7: {other: "00M"},
        1E8: {other: "000M"},
        1E9: {other: "0B"},
        1E10: {other: "00B"},
        1E11: {other: "000B"},
        1E12: {other: "0T"},
        1E13: {other: "00T"},
        1E14: {other: "000T"}
    }, Rb: {
        1E3: {other: "0 thousand"},
        1E4: {other: "00 thousand"},
        1E5: {other: "000 thousand"},
        1E6: {other: "0 million"},
        1E7: {other: "00 million"},
        1E8: {other: "000 million"},
        1E9: {other: "0 billion"},
        1E10: {other: "00 billion"},
        1E11: {other: "000 billion"},
        1E12: {other: "0 trillion"},
        1E13: {other: "00 trillion"},
        1E14: {other: "000 trillion"}
    }
}, rk = qk, rk = qk;
var sk = {
    AED: [2, "dh", "\u062f.\u0625.", "DH"],
    ALL: [0, "Lek", "Lek"],
    AUD: [2, "$", "AU$"],
    BDT: [2, "\u09f3", "Tk"],
    BGN: [2, "lev", "lev"],
    BRL: [2, "R$", "R$"],
    CAD: [2, "$", "C$"],
    CDF: [2, "FrCD", "CDF"],
    CHF: [2, "CHF", "CHF"],
    CLP: [0, "$", "CL$"],
    CNY: [2, "\u00a5", "RMB\u00a5"],
    COP: [0, "$", "COL$"],
    CRC: [0, "\u20a1", "CR\u20a1"],
    CZK: [50, "K\u010d", "K\u010d"],
    DKK: [18, "kr", "kr"],
    DOP: [2, "$", "RD$"],
    EGP: [2, "\u00a3", "LE"],
    ETB: [2, "Birr", "Birr"],
    EUR: [2, "\u20ac", "\u20ac"],
    GBP: [2, "\u00a3", "GB\u00a3"],
    HKD: [2, "$", "HK$"],
    HRK: [2, "kn", "kn"],
    HUF: [0, "Ft",
        "Ft"],
    IDR: [0, "Rp", "Rp"],
    ILS: [2, "\u20aa", "IL\u20aa"],
    INR: [2, "\u20b9", "Rs"],
    IRR: [0, "Rial", "IRR"],
    ISK: [0, "kr", "kr"],
    JMD: [2, "$", "JA$"],
    JPY: [0, "\u00a5", "JP\u00a5"],
    KRW: [0, "\u20a9", "KR\u20a9"],
    LKR: [2, "Rs", "SLRs"],
    LTL: [2, "Lt", "Lt"],
    MNT: [0, "\u20ae", "MN\u20ae"],
    MVR: [2, "Rf", "MVR"],
    MXN: [2, "$", "Mex$"],
    MYR: [2, "RM", "RM"],
    NOK: [50, "kr", "NOkr"],
    PAB: [2, "B/.", "B/."],
    PEN: [2, "S/.", "S/."],
    PHP: [2, "\u20b1", "Php"],
    PKR: [0, "Rs", "PKRs."],
    PLN: [50, "z\u0142", "z\u0142"],
    RON: [2, "RON", "RON"],
    RSD: [0, "din", "RSD"],
    RUB: [50, "\u0440\u0443\u0431.",
        "\u0440\u0443\u0431."],
    SAR: [2, "Rial", "Rial"],
    SEK: [2, "kr", "kr"],
    SGD: [2, "$", "S$"],
    THB: [2, "\u0e3f", "THB"],
    TRY: [2, "TL", "YTL"],
    TWD: [2, "NT$", "NT$"],
    TZS: [0, "TSh", "TSh"],
    UAH: [2, "\u20b4", "UAH"],
    USD: [2, "$", "US$"],
    UYU: [2, "$", "$U"],
    VND: [0, "\u20ab", "VN\u20ab"],
    YER: [0, "Rial", "Rial"],
    ZAR: [2, "R", "ZAR"]
};
function tk(a) {
    this.f = Z.Wb;
    this.ua = uk;
    this.h = 40;
    this.a = 1;
    this.U = 0;
    this.c = 3;
    this.j = this.b = 0;
    this.ja = !1;
    this.I = this.A = "";
    this.m = "-";
    this.o = "";
    this.g = 1;
    this.J = 3;
    this.u = this.ba = !1;
    this.w = vk;
    if ("number" == typeof a)switch (a) {
        case 1:
            wk(this, Z.hb);
            break;
        case 2:
            wk(this, Z.pc);
            break;
        case 3:
            wk(this, Z.jc);
            break;
        case 4:
            a = Z.Tb;
            var b = ["0"], c = sk[this.f][0] & 7;
            if (0 < c) {
                b.push(".");
                for (var d = 0; d < c; d++)b.push("0")
            }
            a = a.replace(/0.00/g, b.join(""));
            wk(this, a);
            break;
        case 5:
            xk(this, 1);
            break;
        case 6:
            xk(this, 2);
            break;
        default:
            throw Error("Unsupported pattern type.");
    } else wk(this, a)
}
var uk = 0, vk = 0;
function wk(a, b) {
    b.replace(/ /g, "\u00a0");
    var c = [0];
    a.A = yk(a, b, c);
    for (var d = c[0], f = -1, g = 0, h = 0, k = 0, m = -1, u = b.length, p = !0; c[0] < u && p; c[0]++)switch (b.charAt(c[0])) {
        case "#":
            0 < h ? k++ : g++;
            0 <= m && 0 > f && m++;
            break;
        case "0":
            if (0 < k)throw Error('Unexpected "0" in pattern "' + b + '"');
            h++;
            0 <= m && 0 > f && m++;
            break;
        case ",":
            m = 0;
            break;
        case ".":
            if (0 <= f)throw Error('Multiple decimal separators in pattern "' + b + '"');
            f = g + h + k;
            break;
        case "E":
            if (a.u)throw Error('Multiple exponential symbols in pattern "' + b + '"');
            a.u = !0;
            a.j = 0;
            c[0] + 1 <
            u && "+" == b.charAt(c[0] + 1) && (c[0]++, a.ja = !0);
            for (; c[0] + 1 < u && "0" == b.charAt(c[0] + 1);)c[0]++, a.j++;
            if (1 > g + h || 1 > a.j)throw Error('Malformed exponential pattern "' + b + '"');
            p = !1;
            break;
        default:
            c[0]--, p = !1
    }
    0 == h && 0 < g && 0 <= f && (h = f, 0 == h && h++, k = g - h, g = h - 1, h = 1);
    if (0 > f && 0 < k || 0 <= f && (f < g || f > g + h) || 0 == m)throw Error('Malformed pattern "' + b + '"');
    k = g + h + k;
    a.c = 0 <= f ? k - f : 0;
    0 <= f && (a.b = g + h - f, 0 > a.b && (a.b = 0));
    a.a = (0 <= f ? f : k) - g;
    a.u && (a.h = g + a.a, 0 == a.c && 0 == a.a && (a.a = 1));
    a.J = Math.max(0, m);
    a.ba = 0 == f || f == k;
    d = c[0] - d;
    a.I = yk(a, b, c);
    c[0] < b.length &&
    b.charAt(c[0]) == zk ? (c[0]++, a.m = yk(a, b, c), c[0] += d, a.o = yk(a, b, c)) : (a.m = a.A + a.m, a.o += a.I)
}
function xk(a, b) {
    a.w = b;
    wk(a, Z.hb);
    a.b = 0;
    a.c = 2;
    if (0 < a.b)throw Error("Can't combine significant digits and minimum fraction digits");
    a.U = 2
}
function Ak(a, b) {
    if (isNaN(b))return Z.gc;
    var c = [], d;
    var f = b, g = b;
    a.w == vk ? d = Bk : (f = Math.abs(f), g = Math.abs(g), d = Ck(a, 1 >= f ? 0 : Dk(f)).Na, Ek(a, g / Math.pow(10, d)), f = Ek(a, f / Math.pow(10, d)), d = Ck(a, d + Dk(f.wb)));
    b /= Math.pow(10, d.Na);
    c.push(d.prefix);
    f = 0 > b || 0 == b && 0 > 1 / b;
    c.push(f ? a.m : a.A);
    if (isFinite(b))if (b = b * (f ? -1 : 1) * a.g, a.u)if (g = b, 0 == g)Fk(a, g, a.a, c), Gk(a, 0, c); else {
        var h;
        h = Math.log(g) / Math.log(10);
        h = Math.floor(h + 2E-15);
        var g = g / Math.pow(10, h), k = a.a;
        if (1 < a.h && a.h > a.a) {
            for (; 0 != h % a.h;)g *= 10, h--;
            k = 1
        } else 1 > a.a ? (h++,
            g /= 10) : (h -= a.a - 1, g *= Math.pow(10, a.a - 1));
        Fk(a, g, k, c);
        Gk(a, h, c)
    } else Fk(a, b, a.a, c); else c.push(Z.dc);
    c.push(f ? a.o : a.I);
    c.push(d.Jb);
    return c.join("")
}
function Ek(a, b) {
    var c = Math.pow(10, a.c), d = 0 >= a.U ? Math.round(b * c) : Math.round(Hk(b * c, a.U, a.c)), f;
    isFinite(d) ? (f = Math.floor(d / c), c = Math.floor(d - f * c)) : (f = b, c = 0);
    return {wb: f, Tc: c}
}
function Fk(a, b, c, d) {
    if (a.b > a.c)throw Error("Min value must be less than max value");
    b = Ek(a, b);
    var f = Math.pow(10, a.c), g = b.wb, h = b.Tc, k = 0 < a.b || 0 < h || !1;
    b = a.b;
    k && (b = a.b);
    for (var m = "", u = g; 1E20 < u;)m = "0" + m, u = Math.round(u / 10);
    var m = u + m, p = Z.Vb, w = Z.cc, u = Z.pb.charCodeAt(0), N = m.length;
    if (0 < g || 0 < c) {
        for (g = N; g < c; g++)d.push(String.fromCharCode(u));
        for (g = 0; g < N; g++)d.push(String.fromCharCode(u + 1 * m.charAt(g))), 1 < N - g && 0 < a.J && 1 == (N - g) % a.J && d.push(w)
    } else k || d.push(String.fromCharCode(u));
    (a.ba || k) && d.push(p);
    a = "" + (h +
        f);
    for (c = a.length; "0" == a.charAt(c - 1) && c > b + 1;)c--;
    for (g = 1; g < c; g++)d.push(String.fromCharCode(u + 1 * a.charAt(g)))
}
function Gk(a, b, c) {
    c.push(Z.$b);
    0 > b ? (b = -b, c.push(Z.ec)) : a.ja && c.push(Z.lc);
    b = "" + b;
    for (var d = Z.pb, f = b.length; f < a.j; f++)c.push(d);
    c.push(b)
}
var zk = ";";
function yk(a, b, c) {
    for (var d = "", f = !1, g = b.length; c[0] < g; c[0]++) {
        var h = b.charAt(c[0]);
        if ("'" == h)c[0] + 1 < g && "'" == b.charAt(c[0] + 1) ? (c[0]++, d += "'") : f = !f; else if (f)d += h; else switch (h) {
            case "#":
            case "0":
            case ",":
            case ".":
            case zk:
                return d;
            case "\u00a4":
                if (c[0] + 1 < g && "\u00a4" == b.charAt(c[0] + 1))c[0]++, d += a.f; else switch (a.ua) {
                    case uk:
                        d += sk[a.f][1];
                        break;
                    case 2:
                        var h = a.f, k = sk[h], d = d + (h == k[1] ? h : h + " " + k[1]);
                        break;
                    case 1:
                        d += sk[a.f][2]
                }
                break;
            case "%":
                if (1 != a.g)throw Error("Too many percent/permill");
                a.g = 100;
                d += Z.ic;
                break;
            case "\u2030":
                if (1 != a.g)throw Error("Too many percent/permill");
                a.g = 1E3;
                d += Z.kc;
                break;
            default:
                d += h
        }
    }
    return d
}
var Bk = {prefix: "", Jb: "", Na: 0};
function Ck(a, b) {
    var c = 1 == a.w ? rk.Sb : rk.Rb;
    if (3 > b)return Bk;
    b = Math.min(14, b);
    c = c[Math.pow(10, b)];
    if (!c)return Bk;
    c = c.other;
    return c && "0" != c ? (c = /([^0]*)(0+)(.*)/.exec(c)) ? {
        prefix: c[1],
        Jb: c[3],
        Na: b - (c[2].length - 1)
    } : Bk : Bk
}
function Dk(a) {
    for (var b = 0; 1 <= (a /= 10);)b++;
    return b
}
function Hk(a, b, c) {
    if (!a)return a;
    b = b - Dk(a) - 1;
    if (b < -c)return c = Math.pow(10, c), Math.round(a / c) * c;
    c = Math.pow(10, b);
    return Math.round(a * c) / c
};var Ik = new tk(1), Jk = new tk(3);
function Kk(a) {
    if (0 == a)return "-";
    var b;
    855E5 < a ? (a = Math.round(a / 864E5), b = "day", 1 != a && (b += "s")) : 315E4 < a ? (a = Math.round(a / 18E5) / 2, b = "hr") : (a = 15 * Math.max(1, Math.round(a / 9E5)), b = "min");
    return a + " " + b
};function Lk() {
    this.c = 0;
    this.b = new google.maps.Polygon({
        clickable: !1,
        geodesic: !0,
        strokeColor: "#ff9a03",
        strokeOpacity: .7,
        fillColor: "#ff9a03",
        fillOpacity: 0,
        strokeWeight: 2
    });
    this.a = 0;
    this.g = Mk ? 1E3 : 6E4
}
r(Lk);
var Mk = "IS_DEVICE_TABLET" in window && !IS_DEVICE_TABLET && "IS_DEVICE_MOBILE" in window && !IS_DEVICE_MOBILE;
function Nk(a) {
    var b = "00", c = "00", d = "00";
    0 < a && (b = z(Math.floor(a / 36E5), 2), a %= 36E5, c = z(Math.floor(a / 6E4), 2), d = z(Math.floor(a % 6E4 / 1E3), 2));
    return Mk ? [b, c, d] : [b, c]
}
function Ok(a, b) {
    var c = b.result;
    if (c) {
        var d = {};
        d.yd = c.regionName;
        var f = parseInt(c.gameScore[1], 10), g = parseInt(c.gameScore[0], 10), h = Ak(Ik, f), k = Ak(Ik, g), m = 10, u = 10, p = f + g;
        0 < p && (m = Math.floor(f / p * 300), u = Math.floor(g / p * 300));
        d.Aa = {Fb: {$a: m, pa: h}, rb: {$a: u, pa: k}};
        d.cb = pb(c.topAgents, function (a) {
            return {s: a.team, ed: a.nick}
        });
        d.Ib = [];
        for (f = 0; f < c.scoreHistory.length; f++)g = c.scoreHistory[f], d.Ib.push([g[0], Ak(Ik, g[1]), Ak(Ik, g[2])]);
        a.a = c.timeToEndOfBaseCycleMs;
        a.c = x();
        d.Cd = Nk(a.a);
        (f = document.getElementById("rs_details_score")) &&
        T(f, hk, {sb: k, Gb: h, yb: Pk()});
        (h = document.getElementById("rs_details_box")) && T(h, fk, d);
        a.f();
        Qk(a, c.regionVertices)
    } else Rk()
}
function Pk() {
    var a = document.getElementById("rs_details_score");
    return a ? Oj(a, "show_details") : !1
}
Lk.prototype.m = function () {
    var a = document.getElementById("rs_pointy_container");
    a && Ch(a, "show_up");
    (a = document.getElementById("rs_details_box")) && Ch(a, "show_box");
    (a = document.getElementById("rs_details_score")) && Ch(a, "show_details")
};
Lk.prototype.f = function () {
    clearTimeout(this.h);
    if (0 <= this.a) {
        var a = x();
        this.a -= a - this.c;
        this.c = a;
        a = v(this.f, this);
        this.h = setTimeout(a, this.g)
    }
    var a = Nk(this.a), b = document.getElementById("rs_cycle_end_time");
    b && T(b, gk, {ha: a})
};
function Qk(a, b) {
    if (9 < O || 5 > O)a.b.setMap(null); else if (a.j == b)a.b.getMap() || a.b.setMap(M); else {
        for (var c = [], d = 0; d < b.length; d++) {
            var f = b[d];
            c.push(new google.maps.LatLng(f[0] / 1E6, f[1] / 1E6))
        }
        a.b.setPaths(c);
        a.b.setMap(M);
        a.j = b
    }
}
function Rk() {
    var a = document.getElementById("rs_details_score");
    a && T(a, hk, {sb: "", Gb: "", yb: Pk()});
    (a = document.getElementById("rs_details_box")) && T(a, ik)
};var Sk = null, Tk = 0, Uk = [0, 25, 50, 75];
function Vk(a) {
    og(pg.l(), a)
}
function Wk() {
    Uj();
    ok();
    ck()
}
function Xk() {
    pg.l().b = !1;
    nk.l().c = !1;
    bk.l().c = !1;
    ug();
    mg()
}
function mg() {
    n.clearTimeout(Sk);
    Sk = null;
    var a = R.l(), b = {}, c = {}, d = {};
    F(eg(a), function (a) {
        switch (a.A) {
            case "portal":
                b[a.i] = a;
                break;
            case "region":
                c[a.i] = a;
                break;
            case "edge":
                d[a.i] = a
        }
    });
    pg.l().draw(b);
    nk.l().draw(c);
    bk.l().draw(d);
    Yk();
    pg.l().draw(gg(a));
    Pe(!1);
    $e("ged");
    0 == a.c.length || (Sk = n.setTimeout(mg, 5))
}
function Zk(a, b, c) {
    ph = new Ef("", a, b);
    if (c) {
        Qh();
        var d = M.getBounds();
        c = d.getSouthWest();
        d = d.getNorthEast().lng();
        c = c.lng();
        d < c && (d += 360);
        b -= (d - c) / 4;
        -180 >= b && (b += 360);
        a = new google.maps.LatLng(a, b);
        M.panTo(a)
    } else a = new google.maps.LatLng(a, b), Rh(a);
    Yk()
}
function Yk() {
    var a = ph;
    a && (a = Ff(a)) && (a = qj(a, !0), null != a && (rj(a.i), ph = null))
}
function qj(a, b) {
    var c = pg.l(), d = Yj(c, gg(R.l()), a, b);
    return null != d || !IS_VERSION_MOBILE && (d = $k.l(), d = al(d.a.c, a), null != d) ? d : Wj(c, a, b)
}
function bl(a) {
    a = qj(a, !1);
    null != a && rj(a.i)
}
function Pe(a) {
    var b = document.getElementById("loading_msg"), c = tg(R.l()), d = 100 > c, f = 0 != R.l().c.length;
    IS_VERSION_MOBILE ? W(b, a || f || d) : d ? cl(c) : a || f ? cl(0) : W(b, !1)
}
function cl(a) {
    W(document.getElementById("loading_msg"), !0);
    var b = Uk[++Tk % Uk.length], c = document.getElementById("loading_data_circle"), d = document.getElementById("percent_text");
    c && d && (d.textContent != a && (d.textContent = a || ""), c.className = "rotate" + b)
}
function dl(a) {
    if (a && "nickname" in a) {
        var b = Ah.l();
        a = new Qf(a.guid, a.team, a.nickname, +a.ap, +a.energy, +a.verified_level, +a.xm_capacity, 0, +a.min_ap_for_next_level);
        var c = document.getElementById("player_stats");
        if (c) {
            b.a = c;
            T(b.a, zh, {S: a});
            if (a = document.getElementById("player_ap_icon"))K(a, "touchstart", v(b.c, b)), K(a, "mouseover", v(b.b, b, !0)), K(a, "mouseout", v(b.b, b, !1));
            (a = document.getElementById("ap")) && K(a, "touchstart", v(b.b, b, !1))
        }
    }
}
function el(a) {
    Ok(Lk.l(), a)
}
function fl(a) {
    var b = "result" in a ? a.result : [], c = a = "";
    b[0] && b[1] && (a = Ak(Ik, +b[0]), c = Ak(Ik, +b[1]));
    (b = document.getElementById("global_score")) && T(b, dk, {Oc: a, Ad: c})
}
function gl() {
    var a = Fj;
    if (a && a.getMap()) {
        var b = a.c.i;
        (b = sg(R.l(), b)) && Vj(b) ? Jj(a) : a.na()
    }
    IS_VERSION_MOBILE || hl()
}
function il() {
    var a = document.getElementById("display_msg");
    "none" != a.style.display || W(a, !0);
    a && T(a, mk, {zoom: O})
};function jl(a) {
    return '<div class="closeable_window" id="' + U(a.id) + '"><div class="closeable_window_border"><div class="close_window_btn unselectable">&times;</div><div class="closeable_window_content"></div></div></div>'
}
jl.a = "nemesis.dashboard.soy.closeablewindow.main";
function kl() {
}
r(kl);
kl.prototype.a = 0;
function ll(a) {
    jd.call(this);
    this.g = a || Eg();
    this.w = null;
    this.V = !1;
    this.a = null;
    this.h = void 0;
    this.f = this.b = this.c = null;
    this.U = !1
}
y(ll, jd);
l = ll.prototype;
l.Wc = kl.l();
function ml(a) {
    return a.w || (a.w = ":" + (a.Wc.a++).toString(36))
}
l.K = function () {
    return this.a
};
function nl(a) {
    a.h || (a.h = new Ri(a));
    return a.h
}
function ol(a, b) {
    if (a == b)throw Error("Unable to set parent component");
    var c;
    if (c = b && a.c && a.w) {
        c = a.c;
        var d = a.w;
        c = c.f && d ? D(c.f, d) || null : null
    }
    if (c && a.c != b)throw Error("Unable to set parent component");
    a.c = b;
    ll.C.bb.call(a, b)
}
l.bb = function (a) {
    if (this.c && this.c != a)throw Error("Method not supported");
    ll.C.bb.call(this, a)
};
l.fa = function () {
    this.a = Tg(this.g)
};
function pl(a) {
    var b = n.document.body;
    if (a.V)throw Error("Component already rendered");
    if (b) {
        a.U = !0;
        var c = Gg(b);
        a.g && a.g.a == c || (a.g = Eg(b));
        a.a = b;
        a.R()
    } else throw Error("Invalid element to decorate");
}
l.R = function () {
    this.V = !0;
    ql(this, function (a) {
        !a.V && a.K() && a.R()
    })
};
l.N = function () {
    ql(this, function (a) {
        a.V && a.N()
    });
    this.h && Ti(this.h);
    this.V = !1
};
l.O = function () {
    this.V && this.N();
    this.h && (this.h.ka(), delete this.h);
    ql(this, function (a) {
        a.ka()
    });
    !this.U && this.a && Pg(this.a);
    this.c = this.a = this.f = this.b = null;
    ll.C.O.call(this)
};
function rl(a, b) {
    var c = a.b ? a.b.length : 0;
    if (b.V)throw Error("Component already rendered");
    if (0 > c || c > (a.b ? a.b.length : 0))throw Error("Child component index out of bounds");
    a.f && a.b || (a.f = {}, a.b = []);
    if (b.c == a) {
        var d = ml(b);
        a.f[d] = b;
        ub(a.b, b)
    } else kb(a.f, ml(b), b);
    ol(b, a);
    xb(a.b, c, 0, b);
    if (b.V && a.V && b.c == a)d = a.Ba(), c = d.childNodes[c] || null, c != b.K() && d.insertBefore(b.K(), c); else {
        a.a || a.fa();
        d = a.b ? a.b[c + 1] || null : null;
        c = a.Ba();
        d = d ? d.a : null;
        if (b.V)throw Error("Component already rendered");
        b.a || b.fa();
        c ? c.insertBefore(b.a,
            d || null) : b.g.a.body.appendChild(b.a);
        b.c && !b.c.V || b.R()
    }
}
l.Ba = function () {
    return this.a
};
function ql(a, b) {
    a.b && F(a.b, b, void 0)
}
l.removeChild = function (a, b) {
    if (a) {
        var c = t(a) ? a : ml(a);
        a = this.f && c ? D(this.f, c) || null : null;
        c && a && (jb(this.f, c), ub(this.b, a), b && (a.N(), a.a && Pg(a.a)), ol(a, null))
    }
    if (!a)throw Error("Child is not in parent component");
    return a
};
function sl(a) {
    ll.call(this);
    this.u = this.o = null;
    this.A = a
}
y(sl, ll);
sl.prototype.fa = function () {
    this.o = (this.a = Ug(jl, {id: this.A}, void 0, new Fg(void 0))) ? Ig("close_window_btn", this.a || this.g.a) : null;
    this.u = this.a ? Ig("closeable_window_content", this.a || this.g.a) : null
};
sl.prototype.Ba = function () {
    return this.u
};
sl.prototype.R = function () {
    W(this.K(), !0);
    sl.C.R.call(this);
    nl(this).P(this.o, "click", this.N)
};
sl.prototype.N = function () {
    sl.C.N.call(this);
    W(this.K(), !1)
};
function tl(a) {
    for (var b = '<div class="rr_status"><span class="rr_title">Passcode confirmed. Acquired items:</span><br /><ul id="redeem_reward_list">' + (0 < a.ga.xm ? "<li>" + S(a.ga.xm) + " XM</li>" : "") + (0 < a.ga.ap ? "<li>" + S(a.ga.ap) + " AP</li>" : ""), c = a.ga.other, d = c.length, f = 0; f < d; f++)b += "<li>" + S(c[f]) + "</li>";
    if (a.ga.inventory)for (a = a.ga.inventory, c = a.length, d = 0; d < c; d++)for (var f = a[d], g = f.awards, h = g.length, k = 0; k < h; k++)var m = g[k], b = b + ("<li>" + (0 < m.level ? '<span class="level_' + U(m.level) + ' rr_level_label">L' + S(m.level) +
        "</span> " : "") + S(f.name) + (1 < m.count ? " (" + S(m.count) + ")" : "") + "</li>");
    return b + "</ul></div>"
}
tl.a = "nemesis.dashboard.soy.passcoderender.passcodeRewards";
function ul(a) {
    return '<div class="rr_status rr_status_msg">' + S(a.sa) + "</div>"
}
ul.a = "nemesis.dashboard.soy.passcoderender.passcodeStatus";
function vl() {
    return '<div id="passcode_icon"><div class="img_passcode"></div></div>'
}
vl.a = "nemesis.dashboard.soy.passcoderender.passcodeIcon";
function wl() {
    return '<div id="mobile_rr_form"><div class="rr_form_title">Passcode</div><form onSubmit="return false;" id="redeem_reward_form"><input type="text" id="passcode" placeholder="enter passcode" /><input type="submit" id="submit" value="Submit" /></form></div>'
}
wl.a = "nemesis.dashboard.soy.passcoderender.mobileRewardsForm";
function xl() {
    ll.call(this)
}
y(xl, ll);
xl.prototype.R = function () {
    xl.C.R.call(this);
    nl(this).P(this.K(), "keydown", this.o)
};
xl.prototype.o = function (a) {
    27 == a.g && this.N()
};
function yl() {
    this.b = new xl;
    $b(this, na(ac, this.b));
    this.c = new sl("redeem_reward_status");
    $b(this, na(ac, this.c))
}
y(yl, J);
yl.prototype.h = function () {
    T(this.a, wl);
    this.f.style.height = "80px";
    this.b.R();
    zl(Al.l())
};
function Bl(a, b) {
    a.a.innerHTML = "";
    var c = !1, d = !1;
    b ? b.error ? T(a.a, ul, {sa: b.error}) : (T(a.a, tl, {ga: b}), c = !0) : (T(a.a, ul, {sa: "Redeeming passcode..."}), d = !0);
    IS_VERSION_MOBILE && Bh(document.getElementById("passcode_icon"), "in_progress", d);
    var d = 300, f = a.a.getElementsByClassName("rr_status")[0];
    f && (d = 1.3 * f.offsetHeight, d = 50 < d ? d : 50, 50 == d && c && (d = 300));
    a.f.style.height = d + "px";
    a.c.K().appendChild(a.a);
    a.b.R()
}
yl.prototype.g = function (a) {
    IS_VERSION_MOBILE || this.b.N();
    a.passcode.select()
};
function Al() {
    this.a = new yl;
    $b(this, na(ac, this.a))
}
y(Al, J);
r(Al);
function Cl(a) {
    var b = a.a;
    pl(b.b);
    if (IS_VERSION_MOBILE) {
        var c = document.createElement("div");
        T(c, vl);
        var d = M;
        google.maps.event.addDomListener(c, "click", v(b.h, b));
        d.controls[google.maps.ControlPosition.RIGHT_TOP].push(c)
    }
    rl(b.b, b.c);
    b.f = document.getElementById("redeem_reward_status");
    b.a = b.c.Ba();
    b.b.N();
    b.c.K().appendChild(b.a);
    zl(a)
}
function zl(a) {
    var b = document.getElementById("redeem_reward_form");
    b && (K(b, "submit", v(a.c, a)), K(b.passcode, "click", v(a.a.g, a.a, b)))
}
Al.prototype.b = function (a) {
    Bl(this.a, "rewards" in a ? a.rewards : a);
    dl(a.playerData)
};
Al.prototype.c = function () {
    var a = document.getElementById("passcode");
    if (a) {
        var b = a.value;
        if (!/^[\s\xa0]*$/.test(b)) {
            a.value = "";
            Bl(this.a);
            var a = bg(), c = v(this.b, this);
            Ne(a.a, Fa, {passcode: b}, c);
            _gaq.push(["_trackEvent", "Action", "Redeem reward"])
        }
    }
};
function Dl() {
    this.a = Le.l()
};var El;
El = {
    Zb: ["BC", "AD"],
    Yb: ["Before Christ", "Anno Domini"],
    hc: "JFMAMJJASOND".split(""),
    uc: "JFMAMJJASOND".split(""),
    fc: "January February March April May June July August September October November December".split(" "),
    tc: "January February March April May June July August September October November December".split(" "),
    qc: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    wc: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    Dc: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    yc: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    sc: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    xc: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    a: "SMTWTFS".split(""),
    vc: "SMTWTFS".split(""),
    rc: ["Q1", "Q2", "Q3", "Q4"],
    mc: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    Qb: ["AM", "PM"],
    gb: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    ob: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    Ub: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    ac: 6,
    b: [5, 6],
    bc: 5
};
function Fl() {
}
function Gl(a) {
    if ("number" == typeof a) {
        var b = new Fl;
        b.c = a;
        var c;
        c = a;
        if (0 == c)c = "Etc/GMT"; else {
            var d = ["Etc/GMT", 0 > c ? "-" : "+"];
            c = Math.abs(c);
            d.push(Math.floor(c / 60) % 100);
            c %= 60;
            0 != c && d.push(":", z(c, 2));
            c = d.join("")
        }
        b.f = c;
        c = a;
        0 == c ? c = "UTC" : (d = ["UTC", 0 > c ? "+" : "-"], c = Math.abs(c), d.push(Math.floor(c / 60) % 100), c %= 60, 0 != c && d.push(":", c), c = d.join(""));
        a = Hl(a);
        b.g = [c, c];
        b.a = {Ld: a, nb: a};
        b.b = [];
        return b
    }
    b = new Fl;
    b.f = a.id;
    b.c = -a.std_offset;
    b.g = a.names;
    b.a = a.names_ext;
    b.b = a.transitions;
    return b
}
function Hl(a) {
    var b = ["GMT"];
    b.push(0 >= a ? "+" : "-");
    a = Math.abs(a);
    b.push(z(Math.floor(a / 60) % 100, 2), ":", z(a % 60, 2));
    return b.join("")
}
function Il(a, b) {
    for (var c = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36E5, d = 0; d < a.b.length && c >= a.b[d];)d += 2;
    return 0 == d ? 0 : a.b[d - 1]
};function Jl(a) {
    this.b = [];
    this.a = El;
    "number" == typeof a ? Kl(this, a) : Ll(this, a)
}
var Ml = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvVwzZ]+/];
function Ll(a, b) {
    for (Nl && (b = b.replace(/\u200f/g, "")); b;)for (var c = 0; c < Ml.length; ++c) {
        var d = b.match(Ml[c]);
        if (d) {
            d = d[0];
            b = b.substring(d.length);
            0 == c && ("''" == d ? d = "'" : (d = d.substring(1, d.length - 1), d = d.replace(/\'\'/, "'")));
            a.b.push({text: d, type: c});
            break
        }
    }
}
function Kl(a, b) {
    var c;
    if (4 > b)c = a.a.gb[b]; else if (8 > b)c = a.a.ob[b - 4]; else if (12 > b)c = a.a.Ub[b - 8], c = c.replace("{1}", a.a.gb[b - 8]), c = c.replace("{0}", a.a.ob[b - 8]); else {
        Kl(a, 10);
        return
    }
    Ll(a, c)
}
function Ol(a, b) {
    var c;
    c = String(b);
    var d = a.a || El;
    if (void 0 !== d.Hc) {
        for (var f = [], g = 0; g < c.length; g++) {
            var h = c.charCodeAt(g);
            f.push(48 <= h && 57 >= h ? String.fromCharCode(d.Hc + h - 48) : c.charAt(g))
        }
        c = f.join("")
    }
    return c
}
var Nl = !1;
function Pl(a) {
    if (!(a.getHours && a.getSeconds && a.getMinutes))throw Error("The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields.");
}
function Ql(a, b, c, d, f) {
    var g = b.length;
    switch (b.charAt(0)) {
        case "G":
            return c = 0 < d.getFullYear() ? 1 : 0, 4 <= g ? a.a.Yb[c] : a.a.Zb[c];
        case "y":
            return c = d.getFullYear(), 0 > c && (c = -c), 2 == g && (c %= 100), Ol(a, z(c, g));
        case "M":
            a:switch (c = d.getMonth(), g) {
                case 5:
                    g = a.a.hc[c];
                    break a;
                case 4:
                    g = a.a.fc[c];
                    break a;
                case 3:
                    g = a.a.qc[c];
                    break a;
                default:
                    g = Ol(a, z(c + 1, g))
            }
            return g;
        case "k":
            return Pl(f), Ol(a, z(f.getHours() || 24, g));
        case "S":
            return Ol(a, (f.getTime() % 1E3 / 1E3).toFixed(Math.min(3, g)).substr(2) + (3 < g ? z(0, g - 3) : ""));
        case "E":
            return c =
                d.getDay(), 4 <= g ? a.a.Dc[c] : a.a.sc[c];
        case "a":
            return Pl(f), g = f.getHours(), a.a.Qb[12 <= g && 24 > g ? 1 : 0];
        case "h":
            return Pl(f), Ol(a, z(f.getHours() % 12 || 12, g));
        case "K":
            return Pl(f), Ol(a, z(f.getHours() % 12, g));
        case "H":
            return Pl(f), Ol(a, z(f.getHours(), g));
        case "c":
            a:switch (c = d.getDay(), g) {
                case 5:
                    g = a.a.vc[c];
                    break a;
                case 4:
                    g = a.a.yc[c];
                    break a;
                case 3:
                    g = a.a.xc[c];
                    break a;
                default:
                    g = Ol(a, z(c, 1))
            }
            return g;
        case "L":
            a:switch (c = d.getMonth(), g) {
                case 5:
                    g = a.a.uc[c];
                    break a;
                case 4:
                    g = a.a.tc[c];
                    break a;
                case 3:
                    g = a.a.wc[c];
                    break a;
                default:
                    g = Ol(a, z(c + 1, g))
            }
            return g;
        case "Q":
            return c = Math.floor(d.getMonth() / 3), 4 > g ? a.a.rc[c] : a.a.mc[c];
        case "d":
            return Ol(a, z(d.getDate(), g));
        case "m":
            return Pl(f), Ol(a, z(f.getMinutes(), g));
        case "s":
            return Pl(f), Ol(a, z(f.getSeconds(), g));
        case "v":
            return g = Gl(c.getTimezoneOffset()), g.f;
        case "V":
            return a = Gl(c.getTimezoneOffset()), 2 >= g ? a.f : 0 < Il(a, c) ? q(a.a.Xb) ? a.a.Xb : a.a.DST_GENERIC_LOCATION : q(a.a.nb) ? a.a.nb : a.a.STD_GENERIC_LOCATION;
        case "w":
            return c = a.a.bc, f = new Date(f.getFullYear(), f.getMonth(),
                f.getDate()), b = a.a.ac || 0, c = f.valueOf() + 864E5 * (((q(c) ? c : 3) - b + 7) % 7 - ((f.getDay() + 6) % 7 - b + 7) % 7), c = Math.floor(Math.round((c - (new Date((new Date(c)).getFullYear(), 0, 1)).valueOf()) / 864E5) / 7) + 1, Ol(a, z(c, g));
        case "z":
            return a = Gl(c.getTimezoneOffset()), 4 > g ? a.g[0 < Il(a, c) ? 2 : 0] : a.g[0 < Il(a, c) ? 3 : 1];
        case "Z":
            return f = Gl(c.getTimezoneOffset()), 4 > g ? (g = -(f.c - Il(f, c)), a = [0 > g ? "-" : "+"], g = Math.abs(g), a.push(z(Math.floor(g / 60) % 100, 2), z(g % 60, 2)), g = a.join("")) : g = Ol(a, Hl(f.c - Il(f, c))), g;
        default:
            return ""
    }
};function Rl(a, b, c) {
    ua.call(this, a, b, x(), "plext");
    this.c = c;
    a = new Date(c);
    b = new Date(x());
    if (c = a.getDate() == b.getDate())if (b = b || new Date(x()), c = a.getMonth() == b.getMonth())b = b || new Date(x()), c = a.getFullYear() == b.getFullYear();
    b = c ? Sl : Tl;
    if (!a)throw Error("The date to format must be non-null.");
    c = [];
    for (var d = 0; d < b.b.length; ++d) {
        var f = b.b[d].text;
        1 == b.b[d].type ? c.push(Ql(b, f, a, a, a)) : c.push(f)
    }
    this.timestamp = c.join("");
    this.type = Ul;
    this.Ta = [];
    this.ma = this.xb = !1
}
y(Rl, ua);
var Tl = new Jl("MMM d"), Sl = new Jl("h:mma"), Ul = 0;
function Vl(a) {
    var b = a[2].plext;
    a = new Rl(a[0], b.team, a[1]);
    "SYSTEM_NARROWCAST" == b.plextType ? a.type = 1 : "PLAYER_GENERATED" == b.plextType && (a.type = 2);
    a.Ta = pb(b.markup, Wl);
    a.xb = Xl(a, function (a) {
        return Yl == a.type && a.ib
    });
    a.ma = Xl(a, function (a) {
        return Zl == a.type
    });
    return a
}
function Xl(a, b) {
    return qb(a.Ta, b, void 0)
}
function $l(a) {
    if (!("result" in a))return [];
    a = pb(a.result, Vl);
    var b = {};
    return ob(a, function (a) {
        return b[a.i] ? !1 : b[a.i] = !0
    })
}
function am(a) {
    this.type = 0;
    this.ia = a
}
var Zl = 5, Yl = 6;
function Wl(a) {
    var b = a[1], c = new am(b.plain);
    switch (a[0]) {
        case "FACTION":
            c.type = 1;
            c.s = ta(b.team);
            break;
        case "PLAYER":
            c.type = 2;
            c.s = ta(b.team);
            c.i = b.guid;
            break;
        case "SENDER":
            c.type = 3;
            c.s = ta(b.team);
            c.i = b.guid;
            c.sender = b.plain.replace(/[:\']/g, "").trim();
            break;
        case "AT_PLAYER":
            c.type = Yl;
            c.s = ta(b.team);
            c.i = b.guid;
            c.ib = b.plain == "@" + PLAYER.nickname;
            break;
        case "PORTAL":
            c.type = 4;
            c.s = ta(b.team);
            c.lat = b.latE6 / 1E6;
            c.lng = b.lngE6 / 1E6;
            c.name = b.name;
            c.address = b.address;
            break;
        case "SECURE":
            c.type = Zl
    }
    return c
};function bm() {
    this.a = [];
    this.b = !0
}
var cm = {Id: "all", Hd: "alerts", Jd: "faction"}, dm = {VIEWPORT: "viewport", Kd: "global"};
function em(a) {
    return 1 < a.length && a[0].c > a[a.length - 1].c ? a.reverse() : a
};function fm() {
    return '<div id="pl_header_tab"><div id="pl_header_1" class="pl_header_part"></div><div id="pl_header_2" class="pl_header_part"><div id="plext_primary_title">COMM<div class="SPRITE_chevron"></div><div class="SPRITE_chevron_down"></div></div></div><div id="pl_header_3" class="pl_header_part"></div><div id="pl_header_4" class="pl_header_part"></div><div id="pl_header_5" class="pl_header_part"></div></div><div id="plext_tab_group_container"><div id="pl_tab_all" class="plext_tab_title tab_selected">All</div><div id="pl_tab_fac" class="plext_tab_title">Faction</div><div id="pl_tab_alerts" class="plext_tab_title">Alerts</div></div><div id="plext_viewport_restrict_checkbox_container"><input type="checkbox" checked="true" id="pl_checkbox" /><div id="pl_checkbox_text" class="color_orange">Restrict to map</div></div><div id="plext_container"><div id="pl_status"></div><div id="plexts"></div></div><form id="send_plext_form" name="send_plext" onSubmit="return false;"><input id="message" type="text" placeholder="start broadcasting here" maxlength="256"><input type="submit" value="Transmit"></form>'
}
fm.a = "nemesis.dashboard.soy.plextrender.main";
function gm() {
    return '<div id="pl_spinner"><div class="img_progress"></div><div class="pl_status_text">Loading...</div></div>'
}
gm.a = "nemesis.dashboard.soy.plextrender.spinner";
function hm() {
    return '<div class="pl_status_text">Oops! Something went wrong...</div>'
}
hm.a = "nemesis.dashboard.soy.plextrender.error";
function im(a) {
    for (var b = "", c = a.Ja, d = c.length, f = 0; f < d; f++) {
        for (var g = c[f], h = a.qa, k = g.xb, m = g.timestamp, u = k, p = '<div class="plext">' + ("\x3c!-- " + (null != u && u.ea === wg ? String(u.getContent()).replace(dh, eh) : Na(String(u))) + " --\x3e" + (k ? '<div class="pl_nudge_timestamp"><div class="pl_timestamp_container"><div class="pl_nudge_date">' + S(m) + '</div><div class="pl_nudge_pointy_spacer"></div></div></div>' : '<div class="pl_timestamp"><div class="pl_timestamp_container"><div class="pl_timestamp_date">' + S(m) + '</div><div class="pl_timestamp_spacer"></div></div></div>')) +
            '<div class="pl_content ' + (g.type == Ul ? "pl_broad" : 1 == g.type ? "pl_narrow" : "pl_player") + '" >', k = g.Ta, m = k.length, u = 0; u < m; u++) {
            var w = ah(k[u], {ma: g.ma, qa: h}), N = void 0, A = "";
            switch (ha(N = w.type) ? N.toString() : N) {
                case 1:
                    A += '<span class="' + U(w.s.css) + '">' + S(w.s.displayName) + "</span>";
                    break;
                case 2:
                    A += '<span class="' + U(w.s.css) + ' pl_nudge_player" data-playerstr="' + U("@" + w.ia) + '" data-isfaction="' + U(w.ma) + '">' + S(w.ia) + "</span>";
                    break;
                case 3:
                    A += "<span " + (PLAYER.Cb == w.sender ? 'class="' + U(w.s.css) + '"' : 'class="' + U(w.s.css) +
                        ' pl_nudge_player" data-playerstr="' + U("@" + w.sender) + '" data-isfaction="' + U(w.ma) + '"') + ">" + S(w.ia) + "</span>";
                    break;
                case Yl:
                    A += '<span class="' + (w.ib ? 'pl_nudge_me"' : U(w.s.css) + ' pl_nudge_player" data-playerstr="' + U(w.ia) + '" data-isfaction="' + U(w.ma) + '"') + ">" + S(w.ia) + "</span>";
                    break;
                case 4:
                    A += '<span class="pl_portal_name" data-plat="' + U(w.lat) + '" data-plng="' + U(w.lng) + '">' + S(w.name) + '</span> <span class="pl_portal_address">(' + S(w.address) + ")</span>";
                    break;
                case Zl:
                    A += "faction" != w.qa ? '<span class="pl_secure">' +
                    S(w.ia) + "</span>" : "";
                    break;
                default:
                    A += S(w.ia)
            }
            p = p + A
        }
        p += "</div></div>";
        b = b + p
    }
    return b
}
im.a = "nemesis.dashboard.soy.plextrender.plexts";
!G("Android") || Kb() || G("Firefox") || Jb();
Kb();
var jm = !H;
function km(a, b) {
    return jm && a.dataset ? b in a.dataset ? a.dataset[b] : null : a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
};function lm(a) {
    this.a = a;
    this.g = new Cd;
    Dd(this.g, "all", "pl_tab_all");
    Dd(this.g, "alerts", "pl_tab_alerts");
    Dd(this.g, "faction", "pl_tab_fac");
    this.h = document.getElementById("comm");
    T(this.h, fm);
    this.b = document.getElementById("plext_container");
    this.c = document.getElementById("plexts");
    this.j = document.getElementById("send_plext_form");
    this.f = document.getElementById("message");
    (a = document.getElementById("plext_primary_title")) && K(a, "click", v(this.Dd, this));
    mm(this);
    (a = document.getElementById("pl_checkbox")) &&
    K(a, "change", v(this.Ed, this));
    K(this.b, "scroll", v(this.a.Yc, this.a));
    K(this.j, "submit", v(this.a.bd, this.a));
    K(this.c, ["click", "touchstart"], v(this.sd, this))
}
function mm(a) {
    wc(a.g, function (a, c) {
        var d = document.getElementById(a);
        d && K(d, "click", v(this.Nc, this, c))
    }, a)
}
l = lm.prototype;
l.Dd = function (a) {
    a.stopPropagation();
    Ch(this.h, "comm_expanded") ? _gaq.push(["_trackEvent", "Action", "Comm view", "expanded"]) : _gaq.push(["_trackEvent", "Action", "Comm view", "minimized"])
};
l.Nc = function (a, b) {
    b.stopPropagation();
    nm(this.a, a)
};
function om(a, b) {
    wc(a.g, function (a, d) {
        var f = document.getElementById(a);
        f && Bh(f, "tab_selected", d == b)
    }, a)
}
l.Ed = function (a) {
    a.stopPropagation();
    a = this.a;
    var b = document.getElementById("pl_checkbox").checked ? "viewport" : "global";
    a.b != b && (a.b = b, pm(a))
};
l.draw = function (a) {
    T(this.c, im, {Ja: a, qa: this.a.a});
    this.b.scrollTop = this.b.scrollHeight
};
function qm(a) {
    var b = document.getElementById("pl_status");
    1 == a ? T(b, gm) : 2 == a ? T(b, hm) : b.innerHTML = ""
}
l.sd = function (a) {
    if (!("touchstart" in window && "click" in window && "touchstart" == a.type)) {
        a = a.target;
        if (Oj(a, "pl_nudge_player")) {
            var b = km(a, "playerstr"), c = km(a, "isfaction");
            if (null === b || null === c)return;
            var d = this.a;
            nm(d, "true" == c ? "faction" : "all");
            d.c.f.value = [d.c.f.value, b].join(" ").trim() + " ";
            this.f.focus()
        }
        Oj(a, "pl_portal_name") && (b = km(a, "plat"), c = km(a, "plng"), null !== b && null !== c && (a = +b, b = +c, c = Oj(this.a.c.h, "comm_expanded"), Zk(a, b, c)))
    }
};
function rm(a, b) {
    this.j = a;
    this.h = b;
    this.c = new lm(this);
    this.a = "all";
    this.b = "viewport";
    this.f = {};
    this.g = {}
}
function sm(a) {
    C(cm, function (a) {
        this.f[a] = {};
        this.g[a] = {};
        C(dm, function (c) {
            this.f[a][c] = new bm;
            this.g[a][c] = 1
        }, this)
    }, a)
}
function nm(a, b) {
    a.a != b && (om(a.c, b), a.a = b, pm(a), a.c.j.style.visibility = "alerts" != a.a ? "" : "hidden")
}
function pm(a) {
    var b = a.f[a.a][a.b];
    b && a.c.draw(b.a);
    qm(a.g[a.a][a.b]);
    b.b ? tm(a, !0) : a.Va();
    _gaq.push(["_trackEvent", "Action", "Comm click", a.b + " " + a.a])
}
l = rm.prototype;
l.Yc = function () {
    if (0 == this.c.b.scrollTop) {
        var a = this.a, b = this.b;
        um(this, a, b, 1);
        var a = v(this.Mb, this, a, b, !0, !1), c = this.f[this.a][this.b];
        vm(this, a, b, void 0, 1 > c.a.length ? -1 : c.a[0].c)
    }
};
l.bd = function () {
    _gaq.push(["_trackEvent", "Action", "Send plext"]);
    var a = this.c.f.value;
    if (!/^[\s\xa0]*$/.test(a)) {
        var b = v(this.Va, this, !0), c = this.h.getCenter(), d = Math.round(1E6 * c.lat()), c = Math.round(1E6 * c.lng());
        Ne(this.j.a, Ha, {message: a, latE6: d, lngE6: c, tab: this.a}, b);
        this.c.f.value = ""
    }
};
function tm(a, b) {
    var c = a.a, d = a.b, f = v(a.Bd, a, c, d);
    b || C(cm, function (a) {
        this.f[a].viewport.b = !0
    }, a);
    um(a, c, d, 1);
    vm(a, f, d)
}
l.Va = function (a) {
    var b = this.b;
    a = v(this.Mb, this, this.a, b, !1, !!a);
    var c = this.f[this.a][this.b];
    vm(this, a, b, 1 > c.a.length ? -1 : c.a[c.a.length - 1].c)
};
function vm(a, b, c, d, f) {
    var g;
    if ("viewport" == c) {
        c = a.h;
        g = new jf;
        g.a = x();
        var h = {};
        h.sw = c.getBounds().getSouthWest();
        h.ne = c.getBounds().getNorthEast();
        g.bounds = h
    } else g = void 0;
    c = a.j;
    a = a.a;
    g || (g = new jf, g.a = x(), h = {}, h.sw = new google.maps.LatLng(-90, -180), h.ne = new google.maps.LatLng(90, 180), g.bounds = h);
    d = d || -1;
    f = f || -1;
    f = {
        minLatE6: Math.round(1E6 * g.bounds.sw.lat()),
        minLngE6: Math.round(1E6 * g.bounds.sw.lng()),
        maxLatE6: Math.round(1E6 * g.bounds.ne.lat()),
        maxLngE6: Math.round(1E6 * g.bounds.ne.lng()),
        minTimestampMs: d,
        maxTimestampMs: f
    };
    f.tab = a;
    -1 < d && (f.ascendingTimestampOrder = !0);
    Ne(c.a, za, f, b)
}
l.Bd = function (a, b, c) {
    if ("result" in c) {
        var d = this.f[a][b];
        c = $l(c);
        d.a = em(c);
        d.b = !1;
        this.a == a && this.b == b && this.c.draw(c);
        um(this, a, b, 0)
    } else um(this, a, b, 2)
};
l.Mb = function (a, b, c, d, f) {
    if ("result" in f) {
        var g = this.f[a][b];
        f = $l(f);
        if (c)if (1 > f.length)g = []; else {
            if (1 > g.a.length)g.a = em(f), g.b = !1; else {
                f = em(f);
                for (var h = g.a[0], k = -1, m = f.length - 1; 0 <= m; m--) {
                    var u = f[m];
                    if (u.c < h.c)break;
                    if (u.i == h.i) {
                        k = m;
                        break
                    }
                }
                -1 < k && f.splice(k, f.length - k);
                0 < f.length && (g.a = f.concat(g.a))
            }
            g = f
        } else if (1 > f.length)g = []; else {
            if (1 > g.a.length)g.a = em(f), g.b = !1; else {
                f = em(f);
                h = g.a[g.a.length - 1];
                k = -1;
                for (m = 0; m < f.length; m++) {
                    u = f[m];
                    if (u.c > h.c)break;
                    if (u.i == h.i) {
                        k = m;
                        break
                    }
                }
                -1 < k && f.splice(0, k + 1);
                0 <
                f.length && (g.a = g.a.concat(f))
            }
            g = f
        }
        if (this.a == a && this.b == b && 0 < g.length)if (c) {
            d = this.c;
            c = Ug(im, {Ja: g, qa: d.a.a});
            f = d.c;
            if (q(f.firstElementChild))f = f.firstElementChild; else for (f = f.firstChild; f && 1 != f.nodeType;)f = f.nextSibling;
            h = f ? f.offsetTop : 0;
            k = d.c;
            k.insertBefore(c, k.childNodes[0] || null);
            1 < g.length && Qg(c);
            d.b.scrollTop = f ? d.b.scrollTop + f.offsetTop - h : d.b.scrollHeight
        } else c = this.c, f = Ug(im, {
            Ja: g,
            qa: c.a.a
        }), c.c && Og(c.c, f), 1 < g.length && Qg(f), d && (c.b.scrollTop = c.b.scrollHeight);
        um(this, a, b, 0)
    } else um(this,
        a, b, 2)
};
function um(a, b, c, d) {
    a.g[b][c] = d;
    a.a == b && a.b == c && qm(d)
};function wm(a, b) {
    ua.call(this, a, "", b, "fieldtripcard");
    this.lng = this.lat = 0
}
y(wm, ua);
wm.prototype.c = function () {
    q(this.h) || (this.h = new google.maps.LatLng(this.lat, this.lng));
    return this.h
};
function xm() {
    this.type = ym;
    this.Db = zm
}
var ym = 0, zm = 0;
function Am() {
    this.a = 0;
    this.waypoints = []
}
function Bm(a) {
    var b = new Am;
    b.i = a[0];
    b.title = a[1];
    b.description = a[2];
    b.Sa = a[10];
    b.Kc = a[3];
    b.Lc = ta(a[4]);
    b.rating = Ak(Jk, a[5] / 1E6);
    b.Ua = Kk(a[6]);
    b.fd = Ak(Ik, a[7]);
    b.a = a[8];
    a = a[9];
    for (var c = [], d = 0; d < a.length; ++d) {
        var f = a[d], g = new xm;
        g.i = f[1];
        g.Ha = f[0];
        g.title = f[2];
        g.type = f[3];
        g.Db = f[4];
        var h = null;
        if (f = f[5])switch (g.type) {
            case 1:
                h = Uf(g.i, f, x());
                break;
            case 2:
                var h = g.i, k = x(), h = new wm(h, k);
                h.lat = f[1] / 1E6;
                h.lng = f[2] / 1E6
        }
        g.M = h;
        c.push(g)
    }
    b.waypoints = c;
    b.waypoints[0].a = !0;
    return b
};function Cm(a) {
    return '<div id="tm_header_title_container" class="tm_header_background_black tm_header_cursor_pointer"><div id="tm_header_title"><div class="tm_header_icon"><img class="tm_icon" src="//commondatastorage.googleapis.com/ingress.com/img/tm_icons/close.png"></div><span class="tm_header_text" id="tm_header_portal_name">' + S(a.title) + "</span></div></div>"
}
Cm.a = "nemesis.dashboard.soy.missions.portalHeader";
function Dm() {
    return '<div id="tm_header_title_container" class="tm_header_background_blue tm_header_cursor_default"><div id="tm_header_title"><div class="tm_header_icon"><img class="tm_icon" src="//commondatastorage.googleapis.com/ingress.com/img/tm_icons/tm_cyan.png"></div><span class="tm_header_text">Nearby Missions</span></div></div>'
}
Dm.a = "nemesis.dashboard.soy.missions.viewportHeader";
function Em() {
    return '<div id="tm_header_title_container" class="tm_header_background_black tm_header_cursor_pointer"><div id="tm_header_title"><div class="tm_header_icon"><img class="tm_icon" src="//commondatastorage.googleapis.com/ingress.com/img/tm_icons/arrow_back.png"></div></div></div>'
}
Em.a = "nemesis.dashboard.soy.missions.detailsHeader";
function Fm(a) {
    var b = '<div id="tm_list">', c = a.Bc, d = c.length;
    if (0 < d)for (var f = 0; f < d; f++)var g = c[f], b = b + ('<div class="tm_list_element" data-mid="' + U(g.i) + '"><div><img class="tm_mission_logo" src="' + U(fh(g.Sa)) + '"></div><span class="tm_mission_summary"><div class="tm_mission_title">' + S(g.title) + '</div><div class="tm_mission_summary_container"><div class="tm_mission_summary_item"><img class="tm_icon" src="//commondatastorage.googleapis.com/ingress.com/img/tm_icons/time.png"><span class="tm_stats_text tm_mission_summary_time_value">' +
        S(g.Ua) + '<span></div><div class="tm_mission_summary_item"><img class="tm_icon" src="//commondatastorage.googleapis.com/ingress.com/img/tm_icons/like.png"><span class="tm_stats_text">' + S(g.rating) + "</span></div></div></span></div>"); else b += '<div id="tm_none" class="tm_list_element">' + (a.zc ? "No missions in range, try zooming out." : "No missions available") + "</div>";
    return b += (a.Ec ? '<div class="tm_list_element"><div id="tm_mat_link" ><a href="' + U(fh(a.Ac)) + '" target="_blank"><img class="tm_icon" src="//commondatastorage.googleapis.com/ingress.com/img/tm_icons/arrow_forward.png"><span class="tm_mat_link_text">Create a mission</span></a></div></div>' :
            "") + "</div>"
}
Fm.a = "nemesis.dashboard.soy.missions.list";
function Gm(a) {
    var b = '<div id="tm_details"><div id="tm_detailed_info"><div><img id="tm_logo_url" src="' + U(fh(a.aa.Sa)) + '"><div id="tm_detailed_info_text_box"><div id="tm_detailed_info_title">' + S(a.aa.title) + '</div><div id="tm_detailed_info_author" class="' + U(a.aa.Lc.css) + '">' + S(a.aa.Kc) + '</div></div></div><div class="tm_description_text tm_stats_container"><div class="tm_stats_row"><div class="tm_stats_left_column"><img class="tm_icon" src="//commondatastorage.googleapis.com/ingress.com/img/tm_icons/time.png"><span class="tm_stats_text">' + S(a.aa.Ua) +
        '</span></div><div class="tm_stats_middle_column"><img class="tm_icon" src="//commondatastorage.googleapis.com/ingress.com/img/tm_icons/like.png"><span class="tm_stats_text">' + S(a.aa.rating) + '</span></div><div class="tm_stats_right_column"><img class="tm_icon" src="//commondatastorage.googleapis.com/ingress.com/img/tm_icons/players.png"><span class="tm_stats_text">' + S(a.aa.fd) + '</span></div></div></div><div class="tm_description_text">' + S(a.aa.description) + '</div><div class="tm_spacer"></div></div><div id="tm_details_waypoints">';
    a = a.aa.waypoints;
    for (var c = a.length, d = 0; d < c; d++) {
        var f = a[d], g = 0 == d, h = "<div" + (f.M ? ' class="tm_wp_element clickable"' : ' class="tm_wp_element"') + 'data-wid="' + U(f.i) + '">';
        if (f.Ha)f = '<div class="tm_wp_title hidden">Waypoint Hidden</div><div class="tm_wp_obj hidden"><img class="tm_icon" src="https://commondatastorage.googleapis.com/ingress.com/img/tm_icons/checkbox_grey.png"><div class="tm_wp_obj_text">Complete objectives to unlock</div></div>'; else {
            var g = '<div class="tm_wp_title">' + S(f.title) + '</div><div class="tm_wp_obj ' +
                (g ? "first" : "") + '">' + (g ? '<img class="tm_icon" src="https://commondatastorage.googleapis.com/ingress.com/img/tm_icons/checkbox_orange.png">' : '<img class="tm_icon" src="https://commondatastorage.googleapis.com/ingress.com/img/tm_icons/checkbox_cyan.png">') + '<div class="tm_wp_obj_text">', k = void 0, m = "";
            switch (ha(k = f.Db) ? k.toString() : k) {
                case 1:
                    m += "Hack this Portal";
                    break;
                case 2:
                    m += "Capture or Upgrade Portal";
                    break;
                case 3:
                    m += "Create Link from Portal";
                    break;
                case 4:
                    m += "Create Field from Portal";
                    break;
                case 5:
                    m +=
                        "Install a Mod on this Portal";
                    break;
                case 6:
                    m += "Take a Photo";
                    break;
                case 7:
                    m += "View this Field Trip Waypoint";
                    break;
                case 8:
                    m += "Enter the Passphrase"
            }
            f = g + m + "</div></div>"
        }
        b = b + (h + f + "</div>")
    }
    return b + "</div></div>"
}
Gm.a = "nemesis.dashboard.soy.missions.details";
function Hm() {
    return '<div class="tm_status">Loading...</div>'
}
Hm.a = "nemesis.dashboard.soy.missions.loading";
function Im() {
    return '<div class="tm_status">An error has occurred or this mission is unavailable.</div>'
}
Im.a = "nemesis.dashboard.soy.missions.error";
function Jm(a) {
    return '<div class="tm_wp_num site_font">' + S(a.gd) + "</div>"
}
Jm.a = "nemesis.dashboard.soy.missions.waypointNumberOverlay";
function Km(a, b) {
    this.a = a;
    this.b = b;
    K(this.a, "click", this.b)
}
function Lm(a, b) {
    var c = sg(R.l(), b);
    T(a.a, Cm, {title: c ? c.title : ""})
};function Mm(a) {
    this.a = 1;
    this.c = a;
    this.b = null
}
var Nm = {};
Mm.prototype.I = function (a) {
    this.a = a;
    this.b ? this.b.setIcon(Om(this)) : this.b = new google.maps.Marker({
        position: this.c.c(),
        clickable: !1,
        icon: Om(this)
    });
    this.b.setMap(M)
};
Mm.prototype.J = function () {
    this.b.setMap(null)
};
Mm.prototype.A = function (a) {
    this.a != a && this.I(a)
};
function Om(a) {
    Nm[a.a] || (Nm[a.a] = Uh("//commondatastorage.googleapis.com/ingress.com/img/map_icons/marker_images/ftc.png", 50, a.a));
    return Nm[a.a]
};function Pm() {
    this.c = !1;
    this.b = null
}
function Qm(a) {
    var b = new Pm;
    switch (a.type) {
        case 1:
            b.c = !0;
            var c = a.M;
            if (c) {
                var d = new Th;
                d.s = c.s;
                d.c = c.h;
                d.g = !0;
                d.a = c.level;
                d.f = a.a;
                b.b = Tf(c);
                b.a = new gi(c.c());
                ii(b.a, d)
            }
            break;
        case 2:
            if (a = a.M)b.b = new Ef(a.i, a.lat, a.lng), b.a = new Mm(a)
    }
    return b
};function Rm(a, b) {
    google.maps.OverlayView.call(this);
    this.c = a;
    this.b = b;
    this.a = null
}
y(Rm, google.maps.OverlayView);
Rm.prototype.onAdd = function () {
    this.a = document.createElement("div");
    V(this.a, "position", "absolute");
    T(this.a, Jm, {gd: this.c});
    this.getPanes().floatPane.appendChild(this.a)
};
Rm.prototype.onAdd = Rm.prototype.onAdd;
Rm.prototype.draw = function () {
    if (this.getMap() && this.a) {
        var a = Math.round(16 * cf()), b = this.getProjection().fromLatLngToDivPixel(this.b), c = Math.round(12);
        wh(this.a, b.x - c, b.y - c);
        V(this.a, "font-size", a + "px")
    }
};
Rm.prototype.draw = Rm.prototype.draw;
Rm.prototype.onRemove = function () {
    this.a.parentNode.removeChild(this.a);
    this.a = null
};
Rm.prototype.onRemove = Rm.prototype.onRemove;
function Sm(a, b) {
    this.b = a;
    this.a = [];
    this.f = [];
    this.c = [];
    this.j = b;
    K(this.b, "click", v(this.m, this));
    Y(af, this.h, this)
}
function Tm(a) {
    F(a.f, function (a) {
        a.setMap(null)
    });
    a.f = [];
    F(a.a, function (a) {
        a.a && a.a.J()
    });
    a.a = [];
    F(a.c, function (a) {
        a.setMap(null)
    });
    a.c = []
}
function Um(a, b) {
    a.a = pb(b, Qm);
    var c = cf();
    F(a.a, function (a) {
        a.a && a.a.I(c)
    })
}
Sm.prototype.h = function () {
    var a = cf();
    F(this.a, function (b) {
        b.a && b.a.A(a)
    })
};
function al(a, b) {
    var c = [];
    F(a.a, function (a) {
        a.c && a.b && c.push(a.b)
    });
    return Xj(c, b, !1)
}
Sm.prototype.m = function (a) {
    var b = Vm(a.target, this.b, "wid");
    a = null;
    b && this.g && (a = rb(this.g.waypoints, function (a) {
        return a.M ? a.i == b : !1
    }));
    a && this.j(a)
};
function Wm(a, b, c, d, f) {
    this.i = a;
    this.title = b;
    this.Sa = c;
    this.rating = d;
    this.Ua = f
};function Vm(a, b, c) {
    for (; a && a != b;) {
        var d = km(a, c);
        if (t(d))return d;
        a = Sg(a)
    }
    return null
};function Xm(a) {
    this.a = a;
    K(this.a, "click", v(this.b, this))
}
function Ym(a, b, c) {
    T(a.a, Fm, {
        Bc: b,
        Ec: PLAYER && 7 <= PLAYER.verified_level,
        Ac: "https://mission-author-dot-betaspike.appspot.com/",
        zc: c
    })
}
Xm.prototype.b = function (a) {
    if (a = Vm(a.target, this.a, "mid"))_gaq.push(["_trackEvent", "Missions", "ViewMissionDetails", a]), $e("mdt", a, !1)
};
function Zm(a, b) {
    this.j = a;
    this.m = b
}
function $m(a) {
    T(a.a, Hm)
}
function an(a) {
    W(a.a, !0);
    W(a.f, !0);
    Bh(a.h, "tab_selected", !0)
}
function bn(a) {
    W(a.a, !1);
    W(a.f, !1);
    Bh(a.h, "tab_selected", !1)
};function $k() {
    this.f = this.g = this.c = null;
    this.b = cn;
    this.h = 0;
    this.a = new Zm(v(this.cd, this), v(this.dd, this))
}
r($k);
function dn() {
    var a = $k.l(), b = a.a, c = v(a.wd, a);
    b.a = document.getElementById("tm_main");
    b.f = document.getElementById("tm_header");
    b.h = document.getElementById("tm_button");
    K(b.h, "click", c);
    b.g = new Xm(b.a);
    b.c = new Sm(b.a, b.m);
    b.b = new Km(b.f, b.j);
    bn(b);
    Y("mvu", a.Zc, a);
    Y("mdt", a.Qc, a);
    Y("mfp", a.Rc, a);
    Y("mfv", a.Sc, a);
    Y("puh", a.Uc, a)
}
var cn = 0;
function en(a, b, c) {
    b == a.c && (a.f = c, 1 == a.b && 1 == c.length ? $e("mdt", c[0].i, !1) : (a.c = null, b = a.a, Ym(b.g, c, 2 == a.b), an(b)))
}
function fn(a, b, c) {
    if (gn(a.b)) {
        hn(b.waypoints[0].M, c);
        a = a.a;
        c = a.c;
        T(c.b, Gm, {aa: b});
        Um(c, b.waypoints);
        if (1 == b.a) {
            var d = b.waypoints;
            if (0 != d.length) {
                for (var f = 1; f < d.length; ++f)if (!d[f].Ha && !d[f - 1].Ha && d[f].M && d[f - 1].M) {
                    var g = new google.maps.Polyline({
                        path: [d[f].M.c(), d[f - 1].M.c()],
                        geodesic: !0,
                        strokeColor: "#ef8e2e",
                        strokeOpacity: .5,
                        strokeWeight: 4,
                        clickable: !1,
                        cursor: "auto",
                        map: M
                    });
                    c.f.push(g)
                }
                for (f = 1; f < d.length; ++f)!d[f].Ha && d[f].M && (g = new Rm(f + 1, d[f].M.c()), g.setMap(M), c.c.push(g))
            }
        }
        c.g = b;
        an(a)
    }
}
function hn(a, b) {
    if (null != a) {
        var c = a.c();
        if (b)Rh(c); else {
            var d = !M.getBounds().contains(c), f, g = M, h = g.getCenter();
            f = g.getBounds().getNorthEast();
            g = new google.maps.LatLng(g.getBounds().getSouthWest().lat(), h.lng());
            f = (new google.maps.LatLngBounds(g, f)).contains(c);
            (d || f) && M.panTo(c)
        }
    }
}
l = $k.prototype;
l.wd = function () {
    this.b == cn ? (_gaq.push(["_trackEvent", "Missions", "ViewMissionList", "Viewport"]), jn(this)) : (this.c = null, bn(this.a), ln(this, cn))
};
l.Uc = function (a) {
    "missions" != a && (this.c = null, bn(this.a), ln(this, cn))
};
l.cd = function () {
    switch (this.b) {
        case 1:
            jn(this);
            break;
        case 3:
            if (this.f && this.g) {
                var a = this.g;
                this.g = a;
                ln(this, 1);
                var b = this.a;
                Lm(b.b, a);
                $m(b);
                an(b);
                a = this.a;
                Ym(a.g, this.f, !1);
                an(a)
            } else jn(this);
            break;
        case 4:
            this.f ? (ln(this, 2), a = this.a, T(a.b.a, Dm), $m(a), an(a), a = this.a, Ym(a.g, this.f, !0), an(a)) : jn(this)
    }
};
function jn(a) {
    $e("mfv", "VIEWPORT" + a.h);
    a.h++
}
l.Zc = function () {
    switch (this.b) {
        case 2:
            jn(this);
            break;
        case 4:
            this.f = this.c = null
    }
};
l.Qc = function (a, b) {
    1 == this.b ? ln(this, 3) : ln(this, 4);
    $e("moh");
    var c = this.a;
    T(c.b.a, Em);
    $m(c);
    an(c);
    var c = bg(), d = v(this.ld, this, b);
    Ne(c.a, Ca, {guid: a}, d)
};
l.ld = function (a, b) {
    if ("result" in b && b.result) {
        var c = Bm(b.result), d = [];
        F(c.waypoints, function (a) {
            a.M && d.push(a.M)
        });
        cg(R.l(), d);
        fn(this, c, a)
    } else T(this.a.a, Im)
};
l.Rc = function (a) {
    this.g = a;
    ln(this, 1);
    var b = this.a;
    Lm(b.b, a);
    $m(b);
    an(b);
    this.c = a;
    var b = bg(), c = v(this.md, this, a);
    Ne(b.a, Da, {guid: a}, c)
};
l.md = function (a, b) {
    var c = mn(b);
    c ? en(this, a, c) : T(this.a.a, Im)
};
l.Sc = function (a) {
    ln(this, 2);
    var b = this.a;
    T(b.b.a, Dm);
    $m(b);
    an(b);
    this.c = a;
    var c = M.getBounds().getNorthEast(), d = M.getBounds().getSouthWest(), b = Math.round(1E6 * c.lat()), c = Math.round(1E6 * c.lng()), f = Math.round(1E6 * d.lat()), d = Math.round(1E6 * d.lng()), g = bg();
    a = v(this.nd, this, a);
    Ne(g.a, Ea, {northE6: b, eastE6: c, southE6: f, westE6: d}, a)
};
l.nd = function (a, b) {
    var c = mn(b);
    c ? en(this, a, c) : T(this.a.a, Im)
};
function mn(a) {
    if (!("result" in a))return null;
    a = a.result;
    for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c], f = d[0], g = d[1], h = d[2], k = Ak(Jk, d[3] / 1E6), d = Kk(d[4]);
        b.push(new Wm(f, g, h, k, d))
    }
    return b
}
function ln(a, b) {
    a.b == cn && b != cn && $e("puh", "missions");
    if (gn(a.b) && !gn(b)) {
        Tm(a.a.c);
        $e("mov");
        $e("mde");
        var c = R.l();
        wf(c.a, "tm_wp_qk")
    }
    a.b = b
}
function gn(a) {
    return 3 == a || 4 == a
}
l.dd = function (a) {
    a.M && 1 == a.type ? rj(a.M.i) : Qj();
    hn(a.M, !0)
};
function nn(a, b) {
    this.b = a < b ? a : b;
    this.a = a < b ? b : a
}
nn.prototype.clone = function () {
    return new nn(this.b, this.a)
};
nn.prototype.toString = function () {
    return "[" + this.b + ", " + this.a + "]"
};
var on, pn = 0, qn = 0, rn = [!0, !0, !0, !0], sn = [25, 50, 75, 100], tn = ba;
function un() {
    if (!(14 >= O)) {
        var a = document.getElementById("filters_container"), b = "none" == a.style.display;
        b && $e("puh", "filters");
        vn(b, a)
    }
}
function wn(a) {
    "filters" != a && vn(!1, document.getElementById("filters_container"))
}
function xn() {
    var a = document.getElementById("portal_filter_header"), b = document.getElementById("filters_container");
    14 >= O ? (Lj(a, "tab_disabled"), Lj(b, "filter_disabled")) : (Mj(a, "tab_disabled"), Mj(b, "filter_disabled"))
}
function yn(a) {
    tn = a
}
function vn(a, b) {
    Ie("shflt", a ? "viz" : "hdn");
    W(b, a);
    var c = document.getElementById("portal_filter_header");
    c && Bh(c, "tab_selected", a);
    a && hl();
    if (c = document.getElementById("loading_spacer")) {
        W(c, !a);
        var d = a ? "all" : "none";
        V(Sg(c), "pointer-events", d);
        V(c, "pointer-events", d)
    }
}
function zn() {
    K(document.getElementById("portal_filter_header"), "click", un);
    on = bf();
    hl();
    var a = "viz" == (Je("shflt") || "viz");
    vn(a, document.getElementById("filters_container"))
}
function An(a, b) {
    var c = parseInt(b.getAttribute("value"), 10);
    if (!isNaN(c) && 0 <= c && 8 >= c) {
        var d, f, g;
        a ? (f = -1 < Q ? Q : 8, d = c, g = "level_low") : (d = -1 < P ? P : on, f = c, g = "level_high");
        0 <= d && (P = d);
        8 >= f && (Q = f);
        Bn(g, c);
        Cn();
        tn()
    }
}
oa("filterPortalsByLevel", An);
function hl() {
    var a = on = bf(), b = new nn(a, 8), a = b.b <= P && b.a >= P ? P : a, b = b.b <= Q && b.a >= Q ? Q : 8;
    -1 < P && -1 < Q && (0 <= a && (P = a), 8 >= b && (Q = b));
    Bn("level_low", a);
    Bn("level_high", b)
}
function Bn(a, b, c) {
    var d = -1 == a.indexOf("high"), f = -1 < P ? P : on, g = -1 < Q ? Q : 8;
    if (!(d && b > g || !d && b < f)) {
        for (var h = on, k = 0; 8 >= k; k++) {
            var m = document.getElementById(a + k);
            m.className = "level_notch";
            k < h ? Lj(m, "invalid") : k < f && !d || k > g && d ? Lj(m, "inaccessible") : k == b && (Lj(m, "selected"), m.innerHTML = "L" + k + '<span class="list_pointy_up"></span>')
        }
        document.getElementById(a + "_filter_notches").style.bottom = m.offsetHeight * -(b - h) + "px";
        d && !c ? Bn("level_high", g, !0) : c || Bn("level_low", f, !0)
    }
}
function Cn() {
    var a = -1 < P ? P : on, b = -1 < Q ? Q : 8, c = on, d = document.getElementById("level_low" + a), f = document.getElementById("level_high" + b), g = d.offsetHeight, h = document.getElementById("level_high_filter_notches");
    document.getElementById("level_low_filter_notches").style.bottom = g * -(a - c) + "px";
    h.style.bottom = g * -(b - c) + "px";
    d.parentNode.parentNode.style.height = g + "px";
    f.parentNode.parentNode.style.height = g + "px"
}
oa("processLevelSelectorEvent", function (a) {
    _gaq.push(["_trackEvent", "Filters", "portal_level"]);
    if (!(x() < pn + 333)) {
        pn = x();
        a = a.currentTarget;
        var b = a.getAttribute("value"), c = a.getAttribute("id");
        if (!Oj(document.getElementById(c), "inaccessible")) {
            var d = parseInt(a.parentNode.parentNode.style.height, 10) > a.offsetHeight || 0 <= a.parentNode.style.bottom, c = -1 < c.indexOf("low"), f = -1 < P ? P : on, g = -1 < Q ? Q : 8;
            c && b != f || !c && b != g ? An(c, a) : d ? Cn() : (a.parentNode.style.bottom = 0, a.parentNode.parentNode.style.height = a.parentNode.offsetHeight +
                "px")
        }
    }
});
oa("processHealthSelectorEvent", function (a) {
    _gaq.push(["_trackEvent", "Filters", "portal_health"]);
    if (!(x() < qn + 333)) {
        qn = x();
        a = parseInt(a.currentTarget.getAttribute("value"), 10);
        for (var b = 0; b < rn.length; b++)rn[b] = b <= a;
        for (var b = ["selected", "rneighboron", "lneighboron"], c = null, d = 0; d < rn.length; d++) {
            var c = document.getElementById("health" + d), f = document.getElementById("healthtext" + d), g = [];
            rn[d] ? (g.push("selected"), Lj(f, "selected")) : Mj(f, "selected");
            0 <= d - 1 && rn[d - 1] && g.push("lneighboron");
            var f = b, h = jk(c);
            t(f) ?
                ub(h, f) : da(f) && (h = lk(h, f));
            t(g) && !sb(h, g) ? h.push(g) : da(g) && kk(h, g);
            c.className = h.join(" ")
        }
        a = sn[a];
        gf = 0;
        0 < a && 100 >= a && (hf = a);
        tn()
    }
});
function Dn(a) {
    return (a.sa ? a.Xc ? "" : S(a.sa) + "  " : "") + '<span style="text-decoration: underline;">Refresh page</span>.'
}
Dn.a = "nemesis.dashboard.soy.butterbar.butterbarmsg";
function En() {
    ll.call(this)
}
y(En, ll);
En.prototype.fa = function () {
    En.C.fa.call(this);
    this.K().id = "video_overlay"
};
En.prototype.R = function () {
    W(this.K(), !0);
    En.C.R.call(this);
    nl(this).P(this.K(), "click", this.o)
};
En.prototype.N = function () {
    En.C.N.call(this);
    W(this.K(), !1)
};
En.prototype.o = function (a) {
    a.target == this.K() && this.N()
};
var Fn, Gn;
function Hn(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.accuracy = Math.round(c);
    this.timestamp = d;
    this.c = x()
}
Hn.prototype.clone = function () {
    var a = new Hn(this.a, this.b, this.accuracy, this.timestamp);
    a.c = this.c;
    return a
};
var In = null, Jn = null, Kn = null, Ln = null, Mn = null, Nn = 0, On = [], Pn = [];
function Qn(a) {
    for (var b = 0, c; c = Pn[b]; b++)c(a)
}
function Rn() {
    Mn || (window.navigator.a && "undefined" != typeof window.navigator.a.watchPosition ? Mn = window.navigator.a : window.navigator.geolocation && "undefined" != typeof window.navigator.geolocation.watchPosition ? Mn = window.navigator.geolocation : Qn(!1));
    return Mn
}
function Sn() {
    var a = Rn();
    a && (Tn(0), Fn = a.watchPosition(Un, Vn, {maximumAge: 3E5, timeout: 3E4, enableHighAccuracy: !0, Nd: !1}))
}
function Un(a) {
    if (a && a.coords) {
        Nn = 0;
        var b = a.coords;
        a = new Hn(1E6 * b.latitude, 1E6 * b.longitude, b.accuracy, a.timestamp);
        var c = In;
        if (null == c)b = !1; else var b = Math.round(c.a / 1E3), c = Math.round(c.b / 1E3), d = Math.round(a.a / 1E3), f = Math.round(a.b / 1E3), b = b == d && c == f;
        if (b)Jn = null, Kn || Tn(1E3); else {
            if (b = In)b = In.c + 18E4 >= x();
            b && a.accuracy + 5 >= In.accuracy || Jn && a.accuracy > Jn.accuracy || (200 < a.accuracy ? (Jn || window.setTimeout(Wn, 2E3), Jn = a) : Xn(a))
        }
    }
}
function Wn() {
    Jn && Xn(Jn)
}
function Xn(a) {
    if (a) {
        In = a;
        for (var b = 0, c; c = On[b]; b++)c(a);
        Jn = null;
        Tn(6E4)
    }
}
function Vn(a) {
    Nn++;
    Fn && window.setTimeout(na(Tn, 0), 0);
    3 >= Nn && a.code != a.PERMISSION_DENIED ? window.setTimeout(Sn, 3E4) : (Nn = 0, Qn(a.code == a.PERMISSION_DENIED))
}
function Tn(a) {
    if (a) {
        var b = x() + a;
        Kn && b < Ln && (window.clearTimeout(Kn), Kn = null);
        Kn || (Kn = window.setTimeout(na(Tn, 0), a), Ln = b)
    } else(a = Rn()) && Fn && (a.clearWatch(Fn), Fn = null), Ln = Kn = null
};function Yn() {
    return '<div id="snapcontrol"><div class="img_snap"></div></div>'
}
Yn.a = "nemesis.dashboard.soy.snapcontrol.main";
var Zn = !1;
function $n(a) {
    var b = document.createElement("div");
    T(b, Yn);
    google.maps.event.addDomListener(b, "click", ao);
    a.controls[google.maps.ControlPosition.RIGHT_TOP].push(b)
}
function ao() {
    bo(!0);
    Zn || (On.push(co), Pn.push(eo), Zn = !0);
    In = null;
    Sn()
}
function co(a) {
    bo(!1);
    var b = a.a / 1E6;
    a = a.b / 1E6;
    IS_VERSION_MOBILE && fo(b, a);
    b = new google.maps.LatLng(b, a);
    Rh(b)
}
function fo(a, b) {
    if (Gn)Gn.getMap() || Gn.setMap(M), Gn.setPosition(new google.maps.LatLng(a, b)); else {
        var c = "//commondatastorage.googleapis.com/ingress.com/img/common/", c = "ENLIGHTENED" == PLAYER.team ? c + "player_icon_enl.png" : c + "player_icon_res.png", c = {
            anchor: new google.maps.Point(45, 45),
            origin: new google.maps.Point(0, 0),
            size: new google.maps.Size(90, 90),
            url: c
        };
        Gn = new google.maps.Marker({icon: c, map: M, position: new google.maps.LatLng(a, b)});
        Oh("dragend", function () {
            Gn.setMap(null)
        })
    }
}
function eo(a) {
    bo(!1);
    a ? alert("You must share location.") : alert("Location not working.")
}
function bo(a) {
    Bh(document.getElementById("snapcontrol"), "in_progress", a);
    Pe(a)
};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
 */
function go(a, b) {
    this.f = [];
    this.A = b || null;
    this.a = this.b = !1;
    this.c = void 0;
    this.u = this.w = this.h = !1;
    this.g = 0;
    this.j = null;
    this.J = 0
}
go.prototype.o = function (a, b) {
    this.h = !1;
    ho(this, a, b)
};
function ho(a, b, c) {
    a.b = !0;
    a.c = c;
    a.a = !b;
    io(a)
}
function jo(a) {
    if (a.b) {
        if (!a.u)throw new ko(a);
        a.u = !1
    }
}
go.prototype.m = function (a) {
    jo(this);
    ho(this, !0, a)
};
go.prototype.I = function (a) {
    jo(this);
    ho(this, !1, a)
};
function lo(a, b, c, d) {
    a.f.push([b, c, d]);
    a.b && io(a)
}
go.prototype.then = function (a, b, c) {
    var d, f, g = new Uc(function (a, b) {
        d = a;
        f = b
    });
    lo(this, d, function (a) {
        f(a)
    });
    return g.then(a, b, c)
};
Sc(go);
function mo(a) {
    return qb(a.f, function (a) {
        return ga(a[1])
    })
}
function io(a) {
    if (a.g && a.b && mo(a)) {
        var b = a.g, c = no[b];
        c && (n.clearTimeout(c.Da), delete no[b]);
        a.g = 0
    }
    a.j && (a.j.J--, delete a.j);
    for (var b = a.c, d = c = !1; a.f.length && !a.h;) {
        var f = a.f.shift(), g = f[0], h = f[1], f = f[2];
        if (g = a.a ? h : g)try {
            var k = g.call(f || a.A, b);
            q(k) && (a.a = a.a && (k == b || k instanceof Error), a.c = b = k);
            if (Tc(b) || "function" === typeof n.Promise && b instanceof n.Promise)d = !0, a.h = !0
        } catch (m) {
            b = m, a.a = !0, mo(a) || (c = !0)
        }
    }
    a.c = b;
    d && (k = v(a.o, a, !0), d = v(a.o, a, !1), b instanceof go ? (lo(b, k, d), b.w = !0) : b.then(k, d));
    c && (b = new oo(b),
        no[b.Da] = b, a.g = b.Da)
}
function ko(a) {
    Ka.call(this);
    this.deferred = a
}
y(ko, Ka);
ko.prototype.message = "Deferred has already fired";
ko.prototype.name = "AlreadyCalledError";
function oo(a) {
    this.Da = n.setTimeout(v(this.b, this), 0);
    this.a = a
}
oo.prototype.b = function () {
    delete no[this.Da];
    throw this.a;
};
var no = {};
function po() {
    this.a = null
}
r(po);
function qo(a) {
    ll.call(this);
    this.u = this.o = this.A = this.I = null;
    this.ba = a
}
y(qo, ll);
l = qo.prototype;
l.fa = function () {
    qo.C.fa.call(this);
    this.K().id = this.ba
};
l.R = function () {
    _gaq.push(["_trackEvent", "Videos", "Play", "Ingress promo"]);
    qo.C.R.call(this);
    var a = po.l();
    if (!a.a) {
        var b = n.document.createElement("script");
        b.src = "https://www.youtube.com/iframe_api";
        var c = document.getElementsByTagName("script")[0];
        c.parentNode.insertBefore(b, c);
        a.a = new go;
        n.onYouTubeIframeAPIReady = v(a.a.m, a.a)
    }
    a = a.a;
    b = new go;
    lo(a, b.m, b.I, b);
    lo(b, this.qd, null, this)
};
l.qd = function () {
    var a = this.K().getBoundingClientRect();
    if (0 != a.width || 0 != a.height)this.u = Tg(this.g), this.u.id = "ytvideo", this.K().appendChild(this.u), this.I = new YT.Player("ytvideo", {
        width: a.width,
        height: a.height,
        playerVars: {autoplay: 0, enablejsapi: 1, modestbranding: 1, rel: 0, showinfo: null != this.o ? 1 : 0, hd: 1},
        events: {onError: v(this.pd, this), onReady: v(this.rd, this)}
    })
};
l.pd = function (a) {
    console.error("player error: " + a.data)
};
l.rd = function (a) {
    a = a.target;
    a.setPlaybackQuality("hd720");
    this.A ? a.cueVideoById(this.A) : this.o && a.cuePlaylist({listType: "playlist", list: this.o})
};
l.N = function () {
    this.g.b(this.u);
    this.u = null;
    this.I && this.I.destroy();
    qo.C.N.call(this)
};
function Oe() {
    this.h = new L;
    this.m = new rh;
    this.w = Al.l();
    this.b = null;
    this.o = tj.l();
    this.f = 0;
    this.g = !1
}
r(Oe);
function ro(a) {
    window.setTimeout(a, 4)
}
Oe.prototype.J = function () {
    Ne(bg().a, ya, {}, fl);
    var a = Lk.l(), b = document.getElementById("rs_details_score");
    b && K(b, ["click", "touchstart"], a.m);
    PLAYER && "available_invites" in PLAYER && (a = this.m, a.c.draw(+PLAYER.available_invites), a.b = document.getElementById("invitee_email"), a.a = document.getElementById("send_invite_status"), (b = document.getElementById("send_invite_form")) && K(b, "submit", v(a.g, a)));
    dl(PLAYER);
    K(document, "click", so)
};
function so(a) {
    (Vb ? 0 == a.b.button : "click" == a.type || a.b.button & ec[0]) && to()
}
function uo(a, b) {
    var c = 25, d = 0, f = 3;
    ib(MAP_PARAMS) ? (c = +Je("lat") || c, d = +Je("lng") || d, f = +Je("zoom") || f) : (c = D(MAP_PARAMS, "lat", c), d = D(MAP_PARAMS, "lng", d), f = D(MAP_PARAMS, "zoom", f));
    var g = {
        backgroundColor: "#0b0c0d",
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        minZoom: 3,
        panControl: !1,
        styles: sh,
        zoom: f,
        mapTypeControl:true,
        mapTypeControlOptions: {
            style:google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position:google.maps.ControlPosition.TOP_RIGHT
        },
        streetViewControlOptions: {position: google.maps.ControlPosition.RIGHT_CENTER},
        zoomControlOptions: {position: google.maps.ControlPosition.RIGHT_CENTER}
    };
    Ze(f);
    c = new google.maps.LatLng(c, d);
    a.a = new google.maps.Map(document.getElementById("map_canvas"),
        g);
    Kh(a.a);
    new $n(a.a);
    Cl(a.w);
    uj(a.o);
    Y("moh", Wk, void 0);
    Y("mov", Xk, void 0);
    Y(Xf, Vk, void 0);
    Y(af, gl, void 0);
    Y("mvu", il, void 0);
    IS_VERSION_MOBILE || dn();
    a.a.setCenter(c);
    if (!b) {
        var h = new Dl;
        ro(v(function () {
            this.b = new rm(h, this.a);
            sm(this.b)
        }, a));
        14 >= O || (on = 0);
        xn();
        Y("puh", wn, void 0);
        Y(af, xn, void 0);
        yn(v(a.A, a));
        ro(zn)
    }
    google.maps.event.addListener(a.a, "idle", v(a.u, a));
    Oh("click", bl);
    Oh("dragend", Pj);
    "plat" in MAP_PARAMS && "plng" in MAP_PARAMS && (g = D(MAP_PARAMS, "plat", 0), c = D(MAP_PARAMS, "plng", 0), g && c &&
    google.maps.event.addListenerOnce(a.a, "bounds_changed", na(Zk, g, c, !1)));
    "pls" in MAP_PARAMS && sj();
    "mission_guid" in MAP_PARAMS && $e("mdt", D(MAP_PARAMS, "mission_guid"), !0)
}
Oe.prototype.u = function () {
    var a = this.a.getCenter(), b = this.a.getZoom();
    Ie("lat", "" + a.lat());
    Ie("lng", "" + a.lng());
    Ie("zoom", "" + b);
    Pe(!0);
    this.c && window.clearTimeout(this.c);
    Ze(b);
    $e("mvu");
    this.j(!0)
};
Oe.prototype.j = function (a) {
    if (!(this.f + 36E5 > x()))Qe("Human presence not detected."); else if (!this.g) {
        Pe(!0);
        if (a) {
            for (var b = O, c = this.a.getBounds(), d = c.getNorthEast(), c = c.getSouthWest(), d = We(b, d.lat(), d.lng()), c = We(b, c.lat(), c.lng()), f = (ef[b] || ff) - 1, g = new L, h = -1 == P ? bf() : P, k = Q, m = hf, h = bf(), k = 8, m = 100, u = d.y; u <= c.y; u++) {
                if (c.x <= d.x)var p = c.x; else {
                    for (p = c.x; p <= f; p++)g.a[Ee([b, p, u, h, k, m].join("_"))] = null;
                    p = 0
                }
                for (; p <= d.x; p++)g.a[Ee([b, p, u, h, k, m].join("_"))] = null
            }
            this.h = g
        }
        b = R.l();
        c = this.h;
        d = yf(b.a, c);
        b.g = d;
        b.m = d.F();
        f = b.b.a.b;
        f.a.clear();
        f.b.clear();
        qg(b, c);
        d.isEmpty() ? d = !1 : (c = v(b.Lb, b), f = v(b.ub, b), b.b.b(c, f, d), d = !0);
        ng(b);
        Pe(d);
        this.b && (a ? tm(this.b) : this.b.Va());
        Ne(b.b.a, ya, {}, fl);
        IS_VERSION_MOBILE || (b = b.b, c = M.getCenter(), d = Math.round(1E6 * c.lat()), c = Math.round(1E6 * c.lng()), Ne(b.a, Ba, {
            latE6: d,
            lngE6: c
        }, el));
        aj.l().Wa(a);
        this.c && window.clearTimeout(this.c);
        this.c = window.setTimeout(v(this.j, this, !1), 12E4)
    }
};
Oe.prototype.A = function () {
    ug();
    mg()
};
function Se(a, b) {
    return a.h.contains(b)
}
function Qe(a) {
    var b = document.getElementById("butterbar");
    T(b, Dn, {sa: a, Xc: IS_VERSION_MOBILE});
    b.style.left = (document.getElementById("dashboard_container").offsetWidth - b.offsetWidth) / 2 + "px";
    W(b, !0);
    K(b, "click", function () {
        n.location.href = wj(tj.l())
    })
}
oa("initialize", function (a) {
    var b = Oe.l();
    a || ro(v(b.J, b));
    uo(b, a);
    b.f = x()
});
oa("stop", function (a) {
    a.stopPropagation()
});
function to() {
    F(Rg(document.getElementById("header")), function (a) {
        Mj(a, "show_box")
    });
    F(Rg(document.getElementById("nav")), function (a) {
        Mj(a, "show_box")
    })
}
Oe.prototype.I = function () {
    var a = this.f + 36E5 > x();
    this.f = x();
    a || (this.j(!1), this.g || W(document.getElementById("butterbar"), !1))
};
oa("sbox", function (a) {
    var b = a.currentTarget;
    Oj(b, "show_box") || (to(), a.stopPropagation(), Lj(b, "show_box"))
});
function vo(a) {
    K(Hg(document, "play_button"), "click", v(a.R, a))
}
function wo() {
    switch (n.document.body.id) {
        case "landing":
            var a = new xl, b = new En, c = new qo("landing_video"), d = c;
            d.A = "Ss-Z-QjFUio";
            d.o = null;
            pl(a);
            rl(a, b);
            rl(b, c);
            a.N();
            vo(a);
            break;
        case "dashboard":
            a = new xl, b = new sl("youtube_closeable_window"), d = c = new qo("dashboard_video"), d.A = null, d.o = "PLDEUWItbkQ58nSqH-xyEbCxgsu0whBBLt", pl(a), rl(a, b), rl(b, c), a.N(), vo(a), a = Oe.l(), K(document.body, ["mousedown", "keydown", "touchstart"], v(a.I, a))
    }
}
n.document && K(n.document, "DOMContentLoaded", wo);
oa("wipe", function (a, b) {
    var c = R.l();
    Ne(c.b.a, Ia, {}, a, b)
});