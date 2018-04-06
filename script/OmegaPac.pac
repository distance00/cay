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
}("+444", {
    "+444": function() {
        ;
var FindProxyForURL = function(url, host){
    if(host == 'localhost'
        || host == '127.0.0.1'
        || shExpMatch(host, '192.168.*')
        || shExpMatch(host, '10.168.*')
        || shExpMatch(host, '*.ghelper-server.com')
        || shExpMatch(host, '*.21t.xyz')
        || shExpMatch(host, '*.stunnel.co')
        || shExpMatch(host, '*.tcpbbr.net')
        || shExpMatch(host, '*.chromehelper.net')
        || shExpMatch(host, 'stunnel.co')
        || shExpMatch(host, 'tcpbbr.net')
        || shExpMatch(host, '51netflix.com')
        || host == 'chromehelper.net') {return 'DIRECT';}
                        
                             
if( shExpMatch(host, '*.ghelper-server.com') || shExpMatch(host, '*.*.ghelper-server.com')){return 'DIRECT';}if( shExpMatch(host, 'google.com') || shExpMatch(host, '*.google.com')){return 'HTTPS hkt.21t.xyz:3674;HTTPS pccw2.tcpbbr.net:443;HTTPS us.ghelper-server.com:1233';}if( shExpMatch(host, 'google.com.hk') || shExpMatch(host, '*.google.com.hk')){return 'HTTPS pccw2.tcpbbr.net:443;HTTPS hk2.stunnel.co:443;HTTPS 51netflix.com:80';}if( shExpMatch(host, 'google.*') || shExpMatch(host, '*.google.*')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp.ghelper-server.com:443;HTTPS fremont.stunnel.co:443';}if( shExpMatch(host, 'gstatic.com') || shExpMatch(host, '*.gstatic.com')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp.ghelper-server.com:443;HTTPS fremont.stunnel.co:443';}if( shExpMatch(host, 'googleusercontent.com') || shExpMatch(host, '*.googleusercontent.com')){return 'HTTPS hkt.21t.xyz:3674;HTTPS pccw2.tcpbbr.net:443;HTTPS us.ghelper-server.com:1233';}if( shExpMatch(host, 'gmail.com') || shExpMatch(host, '*.gmail.com')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp.ghelper-server.com:443;HTTPS fremont.stunnel.co:443';}if( shExpMatch(host, 'googleusercontent.com	') || shExpMatch(host, '*.googleusercontent.com	')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp.ghelper-server.com:443;HTTPS fremont.stunnel.co:443';}if( shExpMatch(host, 'chrome.com') || shExpMatch(host, '*.chrome.com')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp.ghelper-server.com:443;HTTPS fremont.stunnel.co:443';}if( shExpMatch(host, 'chromium.org') || shExpMatch(host, '*.chromium.org')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp.ghelper-server.com:443;HTTPS fremont.stunnel.co:443';}if( shExpMatch(host, 'wikipedia.org') || shExpMatch(host, '*.wikipedia.org')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp.ghelper-server.com:443;HTTPS fremont.stunnel.co:443';}if( shExpMatch(host, 'stackoverflow.com') || shExpMatch(host, '*.stackoverflow.com')){return 'HTTPS hkt.21t.xyz:3674;HTTPS pccw2.tcpbbr.net:443;HTTPS us.ghelper-server.com:1233';}if( shExpMatch(host, 'android.com') || shExpMatch(host, '*.android.com')){return 'HTTPS hkt.21t.xyz:3674;HTTPS pccw2.tcpbbr.net:443;HTTPS us.ghelper-server.com:1233';}if( shExpMatch(host, 'fbcdn.net') || shExpMatch(host, '*.fbcdn.net')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp.ghelper-server.com:443;HTTPS fremont.stunnel.co:443';}if( shExpMatch(host, 'ggpht.com') || shExpMatch(host, '*.ggpht.com')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp.ghelper-server.com:443;HTTPS fremont.stunnel.co:443';}if( shExpMatch(host, 'appspot.com') || shExpMatch(host, '*.appspot.com')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp.ghelper-server.com:443;HTTPS fremont.stunnel.co:443';}if( shExpMatch(host, 'html5rocks.com') || shExpMatch(host, '*.html5rocks.com')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp.ghelper-server.com:443;HTTPS fremont.stunnel.co:443';}if( shExpMatch(host, 'instagram.com') || shExpMatch(host, '*.instagram.com')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp.ghelper-server.com:443;HTTPS fremont.stunnel.co:443';}if( shExpMatch(host, 'cdninstagram.com') || shExpMatch(host, '*.cdninstagram.com')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp.ghelper-server.com:443;HTTPS fremont.stunnel.co:443';}if( shExpMatch(host, 'domains.google') || shExpMatch(host, '*.domains.google')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp.ghelper-server.com:443;HTTPS fremont.stunnel.co:443';}if( shExpMatch(host, 'googleapis.com') || shExpMatch(host, '*.googleapis.com')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp.ghelper-server.com:443;HTTPS fremont.stunnel.co:443';}if( shExpMatch(host, 'youtube.com') || shExpMatch(host, '*.youtube.com')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp2.ghelper-server.com:1445;HTTPS jp.ghelper-server.com:443';}if( shExpMatch(host, 'googlevideo.com') || shExpMatch(host, '*.googlevideo.com')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp2.ghelper-server.com:1445;HTTPS jp.ghelper-server.com:443';}if( shExpMatch(host, 'ytimg.com') || shExpMatch(host, '*.ytimg.com')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp2.ghelper-server.com:1445;HTTPS jp.ghelper-server.com:443';}if( shExpMatch(host, 'facebook.com') || shExpMatch(host, '*.facebook.com')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp2.ghelper-server.com:1445;HTTPS jp.ghelper-server.com:443';}if( shExpMatch(host, 'tumblr.com') || shExpMatch(host, '*.tumblr.com')){return 'HTTPS hkt.21t.xyz:3674;HTTPS jp2.ghelper-server.com:1445;HTTPS jp.ghelper-server.com:443';}
                return 'DIRECT';
}


/* End of PAC */;
        return FindProxyForURL;
    }.call(this)
});
