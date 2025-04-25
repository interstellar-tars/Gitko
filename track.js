(function() {
  const endpoint = 'https://gitko.cubiodojo.workers.dev/track';
  const payload = {
    url: window.location.pathname,
    referrer: document.referrer,
    ua: navigator.userAgent,
  };
  navigator.sendBeacon(endpoint, JSON.stringify(payload));
})();
