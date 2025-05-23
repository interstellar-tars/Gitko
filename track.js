(function() {
  const endpoint = 'https://main.apis.gitko.st1.dolphinlabs.ie/track';
  const payload = {
    url: window.location.pathname,
    referrer: document.referrer,
    ua: navigator.userAgent,
    screen: screen.width < 768 ? 'mobile' : 'desktop'
  };
  navigator.sendBeacon(endpoint, JSON.stringify(payload));
})();
