const canvas = document.getElementById('soda-chart')
const ctx = canvas.getContext('2d')

const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Coke', 'Pepsi', 'Either', 'Neither'],
    datasets:[{
      label: 'Number of votes',
      data: [11, 13, 5, 6],
      backgroundColor: ['red', 'blue', 'yellow', 'green']
    }] 
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
})