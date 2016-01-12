/**
 * Created by budblack on 16/1/11.
 */
var m_res = {};

m_res.getMapAPI = function(){
    $.get(_mapAPIUrl, function(MapAPI) {
        console.log(MapAPI);
        MapAPI = MapAPI.replace("http://mt0.google.cn/maps/", "https://mt0.google.com/maps/");
        MapAPI = MapAPI.replace("http://mt1.google.cn/maps/", "https://mt1.google.com/maps/");
        MapAPI = MapAPI.replace("http://maps.gstatic.cn", "https://maps.gstatic.com");
        MapAPI = MapAPI.replace("http://csi.gstatic.com", "https://csi.gstatic.com");
        MapAPI = MapAPI.replace("http://mt0.google.cn/maps/vt", "https://mt0.google.com/maps/vt");
        MapAPI = MapAPI.replace("http://mt1.google.cn/maps/vt", "https://mt1.google.com/maps/vt");

    });
}