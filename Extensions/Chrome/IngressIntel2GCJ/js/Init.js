$.get(chrome.extension.getURL("teamplate/Ingress.html"),function(IngressHtml){
    $.get("https://www.ingress.com/intel",function(BaseHtml){
        var Player = BaseHtml.match(/var PLAYER = \{.+\};/g);
        //console.log(Player);
        IngressHtml = IngressHtml.replace("__var_PLAYER_INF__",Player);
        document.open();
        document.write(IngressHtml);
        document.close();
    });
});