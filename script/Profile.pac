var wall_proxy = "DIRECT;";
var ip_proxy = wall_proxy;
var nowall_proxy = "DIRECT;";
var direct = "DIRECT;";

function FindProxyForURL(url, host) {
    
            if(host == "android.com"||shExpMatch(host, "*.android.com")){return "HTTPS qtds3.pw:443";}if(host == "gstatic.com"||shExpMatch(host, "*.gstatic.com")||host == "googleusercontent.com"||shExpMatch(host, "*.googleusercontent.com")||host == "gvt2.com"||shExpMatch(host, "*.gvt2.com")||host == "gvt3.com"||shExpMatch(host, "*.gvt3.com")||host == "ggpht.com"||shExpMatch(host, "*.ggpht.com")||host == "googleapis.com"||shExpMatch(host, "*.googleapis.com")||host == "google.com.hk"||shExpMatch(host, "*.google.com.hk")||host == "google.com"||shExpMatch(host, "*.google.com")||host == "gmail.com"||shExpMatch(host, "*.gmail.com")||host == "ggpht.com"||shExpMatch(host, "*.ggpht.com")||host == "chrome.com"||shExpMatch(host, "*.chrome.com")||host == "googleadservices.com"||shExpMatch(host, "*.googleadservices.com")||host == "googleusercontent.com"||shExpMatch(host, "*.googleusercontent.com")||host == "googletagservices.com"||shExpMatch(host, "*.googletagservices.com")||host == "googlesyndication.com"||shExpMatch(host, "*.googlesyndication.com")||host == "google.co.jp"||shExpMatch(host, "*.google.co.jp")){return "HTTPS qtds3.pw:443";}if(host == "wikipedia.org"||shExpMatch(host, "*.wikipedia.org")){return "HTTPS qtds3.pw:443";}if(host == "dropbox.com"||shExpMatch(host, "*.dropbox.com")){return "HTTPS qtds3.pw:443";}    
        return direct;
    }