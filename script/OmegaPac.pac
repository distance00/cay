var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+333", {
    "+333": function() {
        ;
function FindProxyForURL(url,host){var D='DIRECT';var p='HTTPS jp02.doublec1ick.com:443';host=host.toLowerCase(); var du = ['chrome-extension://','chrome://'];for(var a in du){if(url.indexOf(du[a]) == 0){return D;}} var dh = ['10.[0-9]+.[0-9]+.[0-9]+', '172.[0-9]+.[0-9]+.[0-9]+', '192.168.[0-9]+.[0-9]+'];for(var b in dh){if(shExpMatch(host,dh[b])){return D;}} var dn = ['0.0.0.0', '127.0.0.1', 'localhost'];for(var c in dn){if(dnsDomainIs(host,dn[c])){return D;}} var npd={"info":{"fastsecuritytunnel":{"admin":1,"api":1},"fastersecuritytunnel":{"api":1}},"com":{"fastsecuritytunnel":1,"ccb":1,"bankcomm":1,"abchina":1,"cmbchina":1,"psbc":1,"cebbank":1,"pingan":1,"ecitic":1,"alipay":1,"tenpay":1,"paymentwall":{"api":1}},"cn":{"com":{"icbc":1,"cmbc":1,"spdb":1,"cib":1,"hxb":1,"cgbchina":1},"boc":1},"co":{"fstunnel":1},"club":{"fstunnel":{"admin":1}}};var npdParts = host.split('.');for(var d=npdParts.length-1;d>=0;d--){var part=npdParts[d];npd=npd[part];if(npd == undefined||npd==1){break;}} if(npd==1){return D;} var node={"tv":{"twitch":{"www":1}},"com":{"bbc":1,"google":1,"twitter":1,"facebook":1,"youtube":1,"ggpht":1,"comgoogle":{"twimg":1},"googlevideo":1,"youtube-nocookie":1,"ytimg":1,"googletagservices":1,"googlecode":1,"blogspot":1,"instagram":1,"dropbox":1,"googleapis":1,"googlesyndication":1,"blogger":1,"googleusercontent":1,"gstatic":1,"flickr":1,"appspot":1,"vimeo":1,"feedburner":1,"tumblr":1,"twimg":1,"cdninstagram":1,"chrome":1,"gmail":1,"t66y":1,"pinterest":1,"dmm":1,"pinimg":1,"accountkit":1,"tellapart":1},"hk":{"com":{"google":1,"comgoogle":{"twimg":1}}},"jp":{"co":{"google":1,"dmm":1},"pinterest":1},"net":{"fbcdn":1,"doubleclick":1,"facebook":1,"sexinsex":1},"org":{"thepiratebay":1,"archive":1,"telegram":1,"chromium":1},"uk":{"co":1},"co":{"t":1},"tw":{"com":{"google":1}},"be":{"youtu":1},"cc":{"sex8":1},"gl":{"goo":1}};var hostParts = host.split('.');for(var d=hostParts.length-1;d>=0;d--){var part=hostParts[d];node=node[part];if(node == undefined||node==1){break;}} if(node==1){return p;}return D;}

/* End of PAC */;
        return FindProxyForURL;
    }.call(this)
});