$(document).ready(function(){
    console.log("Page loaded.");
    $('script[src*="//maps.googleapis.com/maps/api/js?client=gme-nianticinc&sensor=true&v=3.12"]').remove();
    $("body").append('<script src="https://dn-budblack.qbox.me/Lab/Ingress/IngressIntel2GCJ/JSHacker/Ingress.js" type="text/javascript" />');
    console.assert("Script Done.");
});
