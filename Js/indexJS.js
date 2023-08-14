
const ctx = document.getElementById('MyChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['United States', 'Germany', 'United Kingdom', 'Brazil', 'France'],
      datasets: [{
        label: 'Million',
        data: [64.2, 11.6, 10.4, 10.3, 6.2],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });