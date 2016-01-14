var _mapAPIUrl = "https://maps.google.com/maps/api/js?key=AIzaSyAvuujvCBm1bd_sDtapk9MJfFA8OeJXie4&v=3.12";

$.get(chrome.extension.getURL("teamplate/Ingress.html"), function (IngressHtml) {
    $.ajaxSetup({async: false});

    var _mapAPIFix;
    $.get(_mapAPIUrl, function(MapAPI) {
        var apiLoadRe = /apiLoad\(.+loadScriptTime\);/;
        var apiLoadStr = MapAPI.match(apiLoadRe,'')[0].replace(/apiLoad\(/g,'').replace(/, loadScriptTime\);/g,'');
        var apiLoadObj = eval(apiLoadStr);
        _mapAPIFix = MapAPI;
        apiLoadObj[1][0][6] = eval('["https://mts0.google.com/maps/vt?lyrs=m@335000000\u0026src=api\u0026hl=zh-CN\u0026gl=CN\u0026","https://mts1.google.com/maps/vt?lyrs=m@335000000\u0026src=api\u0026hl=zh-CN\u0026gl=CN\u0026"]');
        apiLoadObj[1][1][0] = eval('["http://mt0.google.cn/maps/vt?lyrs=s@192\u0026hl=zh-CN\u0026gl=CN\u0026","http://mt1.google.cn/maps/vt?lyrs=s@192\u0026hl=zh-CN\u0026gl=CN\u0026"]');
        apiLoadObj[24][7] = eval('["http://www.google.cn/cbk"]');
        apiLoadObj[24][8] = eval('"http://www.google.cn/maps/api/js/GeoPhotoService.GetMetadata"');
        apiLoadObj[24][9] = eval('"http://www.google.cn/maps/api/js/GeoPhotoService.SingleImageSearch"');
        var apiLoadRep = 'apiLoad('+JSON.stringify(apiLoadObj)+',loadScriptTime);';
        _mapAPIFix = MapAPI.replace(apiLoadRe,apiLoadRep);
    });

    var _jsHacker;
    $.get(chrome.extension.getURL("js/hacker.js"),function(JsHacker){
        _jsHacker = JsHacker;
    });
    $.ajaxSetup({async: true});

    $.get("https://www.ingress.com/intel", function (BaseHtml) {
        var Player = BaseHtml.match(/var PLAYER = \{.+\};/g);
        var HeaderLoginInfo = BaseHtml.match(/<span class="pointer" id="header_email">.+@.+.com<\/span>&nbsp;/g);
        var EnDashboard = BaseHtml.match(/<script type="text\/javascript" src="\/jsc\/gen_dashboard_.+\.js"><\/script>/g);

        //console.log(Player);
        if (Player) {
            //Base Info
            IngressHtml = IngressHtml.replace("__var_PLAYER_INF__", Player);
            IngressHtml = IngressHtml.replace("__Header_Login_Info__", HeaderLoginInfo);
            IngressHtml = IngressHtml.replace("__gen_dashboard__", EnDashboard);

            //GoogleMapAPI CN Fixed
            IngressHtml = IngressHtml.replace("__google_map_api__", _mapAPIFix);

            //JSHacker
            IngressHtml = IngressHtml.replace("__js_hacker__", _jsHacker);
            document.open();
            document.write(IngressHtml);
            document.close();
        }
    });


});
