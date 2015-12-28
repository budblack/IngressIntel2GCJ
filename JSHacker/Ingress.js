console.log("My Ingress loading.");
ii = m_ii;
Ff = m_Ff;
cj = m_cj;
console.log("Hacking function");

//Marker
function m_ii(a, b) {
    //console.log("m_ii");
    if (!a.IsGCJ) {
        //console.log(a.w);
        var GCJa = wgs2gcj(a.w.G, a.w.K);
        a.IsGCJ = true;
        a.w.G = GCJa.lat;
        a.w.K = GCJa.lng;
        //console.log(a.w);
    }
    //console.log("=========");
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

//Polygon
function m_Ff(a) {
    //console.log("m_Ff");
    if (!a.IsGCJ) {
        //console.log(a.latLng);
        var GCJa = wgs2gcj(a.latLng.lat, a.latLng.lng);
        a.IsGCJ = true;
        a.latLng.lat = GCJa.lat;
        a.latLng.lng = GCJa.lng;
        //console.log(a.latLng);
    }
    //console.log("=========");
    return null != a.latLng ? Cf(a.latLng) : null
}

function m_cj(a, b, c, d, f, g) {
    this.f = new Ef(a, b, c);
    this.f.IsGCJ = true;
    this.c = new Ef(d, f, g);
    this.c.IsGCJ = true;
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
//Mouse_Click
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

console.log("My Ingress loaded.");
//Ext

var exports
if (typeof module === "object" && exports) {
    exports = module.exports
} else if (typeof window !== "undefined") {
    exports = window["eviltransform"] = {}
}

function outOfChina(lat, lng) {
    if ((lng < 72.004) || (lng > 137.8347)) {
        return true;
    }
    if ((lat < 0.8293) || (lat > 55.8271)) {
        return true;
    }
    return false;
}

function transformLat(x, y) {
    var ret = -100.0 + 2.0*x + 3.0*y + 0.2*y*y + 0.1*x*y + 0.2*Math.sqrt(Math.abs(x));
    ret += (20.0*Math.sin(6.0*x*Math.PI) + 20.0*Math.sin(2.0*x*Math.PI)) * 2.0 / 3.0;
    ret += (20.0*Math.sin(y*Math.PI) + 40.0*Math.sin(y/3.0*Math.PI)) * 2.0 / 3.0;
    ret += (160.0*Math.sin(y/12.0*Math.PI) + 320*Math.sin(y*Math.PI/30.0)) * 2.0 / 3.0;
    return ret;
}

function transformLon(x, y) {
    var ret = 300.0 + x + 2.0*y + 0.1*x*x + 0.1*x*y + 0.1*Math.sqrt(Math.abs(x));
    ret += (20.0*Math.sin(6.0*x*Math.PI) + 20.0*Math.sin(2.0*x*Math.PI)) * 2.0 / 3.0;
    ret += (20.0*Math.sin(x*Math.PI) + 40.0*Math.sin(x/3.0*Math.PI)) * 2.0 / 3.0;
    ret += (150.0*Math.sin(x/12.0*Math.PI) + 300.0*Math.sin(x/30.0*Math.PI)) * 2.0 / 3.0;
    return ret;
}

function delta(lat, lng) {
    var a = 6378245.0;
    var ee = 0.00669342162296594323;
    var dLat = transformLat(lng-105.0, lat-35.0);
    var dLng = transformLon(lng-105.0, lat-35.0);
    var radLat = lat / 180.0 * Math.PI;
    var magic = Math.sin(radLat);
    magic = 1 - ee*magic*magic;
    var sqrtMagic = Math.sqrt(magic);
    dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * Math.PI);
    dLng = (dLng * 180.0) / (a / sqrtMagic * Math.cos(radLat) * Math.PI);
    return {"lat": dLat, "lng": dLng};
}

function wgs2gcj(wgsLat, wgsLng) {
    if (outOfChina(wgsLat, wgsLng)) {
        return {"lat": wgsLat, "lng": wgsLng};
    }
    var d = delta(wgsLat, wgsLng);
    return {"lat": wgsLat + d.lat, "lng": wgsLng + d.lng};
}
exports.wgs2gcj = wgs2gcj;

function gcj2wgs(gcjLat, gcjLng) {
    if (outOfChina(gcjLat, gcjLng)) {
        return {"lat": gcjLat, "lng": gcjLng};
    }
    var d = delta(gcjLat, gcjLng);
    return {"lat": gcjLat - d.lat, "lng": gcjLng - d.lng};
}
exports.gcj2wgs = gcj2wgs;

function gcj2wgs_exact(gcjLat, gcjLng) {
    var initDelta = 0.01;
    var threshold = 0.000001;
    var dLat = initDelta, dLng = initDelta;
    var mLat = gcjLat-dLat, mLng = gcjLng-dLng;
    var pLat = gcjLat+dLat, pLng = gcjLng+dLng;
    var wgsLat, wgsLng;
    for (var i = 0; i < 30; i++) {
        wgsLat = (mLat+pLat)/2;
        wgsLng = (mLng+pLng)/2;
        var tmp = wgs2gcj(wgsLat, wgsLng)
        dLat = tmp.lat-gcjLat;
        dLng = tmp.lng-gcjLng;
        if ((Math.abs(dLat) < threshold) && (Math.abs(dLng) < threshold)) {
            return {"lat": wgsLat, "lng": wgsLng};
        }
        if (dLat > 0) {
            pLat = wgsLat;
        } else {
            mLat = wgsLat;
        }
        if (dLng > 0) {
            pLng = wgsLng;
        } else {
            mLng = wgsLng;
        }
    }
    return {"lat": wgsLat, "lng": wgsLng};
}
exports.gcj2wgs_exact = gcj2wgs_exact;

function distance(latA, lngA, latB, lngB) {
    var earthR = 6371000;
    var x = Math.cos(latA*Math.PI/180) * Math.cos(latB*Math.PI/180) * Math.cos((lngA-lngB)*Math.PI/180);
    var y = Math.sin(latA*Math.PI/180) * Math.sin(latB*Math.PI/180);
    var s = x + y;
    if (s > 1) {
        s = 1;
    }
    if (s < -1) {
        s = -1;
    }
    var alpha = Math.acos(s);
    var distance = alpha * earthR;
    return distance;
}
exports.distance = distance;

function gcj2bd(gcjLat, gcjLng) {
    if (outOfChina(gcjLat, gcjLng)) {
        return {"lat": gcjLat, "lng": gcjLng};
    }

    var x = gcjLng, y = gcjLat;
    var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * Math.PI);
    var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * Math.PI);
    var bdLng = z * Math.cos(theta) + 0.0065;
    var bdLat = z * Math.sin(theta) + 0.006;
    return {"lat": bdLat, "lng": bdLng};
}
exports.gcj2bd = gcj2bd;

function bd2gcj(bdLat, bdLng) {
    if (outOfChina(bdLat, bdLng)) {
        return {"lat": bdLat, "lng": bdLng};
    }

    var x = bdLng - 0.0065, y = bdLat - 0.006;
    var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * Math.PI);
    var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * Math.PI);
    var gcjLng = z * Math.cos(theta);
    var gcjLat = z * Math.sin(theta);
    return {"lat": gcjLat, "lng": gcjLng};
}
exports.bd2gcj = bd2gcj;

function wgs2bd(wgsLat, wgsLng) {
    var gcj = wgs2gcj(wgsLat, wgsLng)
    return gcj2bd(gcj.lat, gcj.lng)
}
exports.wgs2bd = wgs2bd;

function bd2wgs(bdLat, bdLng) {
    var gcj = bd2gcj(bdLat, bdLng)
    return gcj2wgs(gcj.lat, gcj.lng)
}
exports.bd2wgs = bd2wgs;
