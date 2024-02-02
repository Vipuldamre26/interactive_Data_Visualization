const ctx = document.getElementById('myChart');
      
const chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Amravati', 'Nagpur', 'Akola', 'Aurangabad', 'Nanded', 'Yawatmal'],
            datasets: [{
              label: 'Population in Lakhs',
              data: [12, 19, 11, 15, 9, 11],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          },
          animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          },
          scales: {
            y: {
              min: 0,
              max: 100
            }
          }
        });

chart.options.plugins.tooltip = {
    callbacks: {
        label: function (context) {
            return `Population: ${context.parsed.y}`;
        },
    },
};
