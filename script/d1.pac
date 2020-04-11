function FindProxyForURL(url, host) {
                try {
                  var servers = ["185.223.95.29","185.159.82.4","204.155.30.114"];
                  var whiteList = undefined;

                  if(servers.indexOf(host) != -1 || dnsDomainIs(host, 'ip-api.com'))
                      return 'system';

                  if (isPlainHostName(host) || dnsDomainLevels(host) == 0 ||
                      shExpMatch(host, "*.local") || shExpMatch(host, "localhost") ||
                      isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
                      isInNet(dnsResolve(host), "172.16.0.0",  "255.240.0.0") ||
                      isInNet(dnsResolve(host), "192.168.0.0",  "255.255.0.0") ||
                      isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0"))
                      return 'system';

                  if(whiteList && whiteList.length > 0 && whiteList.indexOf(host.replace(/^www./,'')) == -1)
                      return 'system';

                  return 'socks5 23.237.128.51:11084';
                } catch(ex) {
                  return 'system';
                }
            }
