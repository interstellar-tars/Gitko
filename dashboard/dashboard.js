const token = localStorage.getItem('jwt_token');
if (!token) {
  alert('You must be logged in to view this page.');
  window.location.href = '/signup.html';
}

fetch('https://main.apis.gitko.st1.dolphinlabs.ie/dashboard-data', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
  .then(res => res.json())
  .then(data => {
    document.getElementById('loading').classList.add('d-none');
    ['pageviewsChart', 'referrersChart', 'devicesChart'].forEach(id => {
      document.getElementById(id).classList.remove('d-none');
    });

    const renderChart = (ctxId, label, dataSet) => {
      const ctx = document.getElementById(ctxId).getContext('2d');
      const dark = document.body.classList.contains('bg-dark');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Object.keys(dataSet),
          datasets: [{
            label,
            data: Object.values(dataSet),
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          plugins: {
            legend: { labels: { color: dark ? 'white' : 'black' } }
          },
          scales: {
            x: { ticks: { color: dark ? 'white' : 'black' } },
            y: { ticks: { color: dark ? 'white' : 'black' }, beginAtZero: true }
          }
        }
      });
    };

    renderChart('pageviewsChart', 'Pageviews', data.pageviews);
    renderChart('referrersChart', 'Top Referrers', data.referrers);
    renderChart('devicesChart', 'Device Types', data.devices);
  });
