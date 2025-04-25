(function() {
  const endpoint = 'https://gitko.cubiodojo.workers.dev/track';
  const payload = {
    url: window.location.pathname,
    referrer: document.referrer,
    ua: navigator.userAgent,
    screen: screen.width < 768 ? 'mobile' : 'desktop'
  };
  navigator.sendBeacon(endpoint, JSON.stringify(payload));
})();
