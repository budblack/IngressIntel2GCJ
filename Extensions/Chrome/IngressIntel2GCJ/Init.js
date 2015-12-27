$(document).ready(function(){
    console.log("Page loaded.");
    $('script[src*="//maps.googleapis.com/maps/api/js?client=gme-nianticinc&sensor=true&v=3.12"]').remove();
    $("body").append('<script src="https://budblack.me/Lab/Ingress/IngressIntel2GCJ/JSHacker/Ingress.js" type="text/javascript" />');
    console.assert("Script Done.");


    //Baidu tongji
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?838220e6c6be41482d150e5b1c46257d";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
});
