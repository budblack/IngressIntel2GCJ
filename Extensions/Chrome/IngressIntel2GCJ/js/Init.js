$.get(chrome.extension.getURL("teamplate/Ingress.html"),function(IngressHtml){
    $.get("https://www.ingress.com/intel",function(BaseHtml){
        var Player = BaseHtml.match(/var PLAYER = \{.+\};/g);
        var HeaderLoginInfo = BaseHtml.match(/<span class="pointer" id="header_email">.+@.+.com<\/span>&nbsp;/g);
        //console.log(Player);
        if (Player) {
            IngressHtml = IngressHtml.replace("__var_PLAYER_INF__", Player);
            IngressHtml = IngressHtml.replace("__Header_Login_Info__",HeaderLoginInfo);
            document.open();
            document.write(IngressHtml);
            document.close();
        }
    });
});