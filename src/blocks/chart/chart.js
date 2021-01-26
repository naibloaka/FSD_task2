const Chart = require('Chart.js');

const ctx = document.getElementById('js-myChart').getContext('2d');

const gradient2 = ctx.createLinearGradient(0, 0, 0, 175);
gradient2.addColorStop(0.0, '#BC9CFF');
gradient2.addColorStop(1.0, '#8BA4F9');

const gradient3 = ctx.createLinearGradient(0, 0, 0, 175);
gradient3.addColorStop(0.0, '#6FCF97');
gradient3.addColorStop(1.0, '#66D2EA');

const gradient1 = ctx.createLinearGradient(0, 0, 0, 175);
gradient1.addColorStop(0.0, '#FFE39C');
gradient1.addColorStop(1.0, '#FFBA9C');

const gradient4 = ctx.createLinearGradient(0, 0, 0, 175);
gradient4.addColorStop(0.0, '#909090');
gradient4.addColorStop(1.0, '#3D4975');

const data = {
  datasets: [{
    data: [130, 65, 65, 0],
    backgroundColor: [gradient1, gradient2, gradient3, gradient4],

    hoverBorderWidth: 0,
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Удовлетворительно',
    'Хорошо',
    'Великолепно',
    'Разочарован',
  ],
};

const myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data,
  options: {
    cutoutPercentage: 90,
    rotation: 0.5 * Math.PI,
    legend: {
      display: false,
      boxWidth: 0,
    },
    tooltips: { enabled: false },

    animation: {
      duration: 1000, // general animation time
    },
    // hoverBorderWidth: 15,
    responsiveAnimationDuration: 0, // animation duration after a resize
  },
});

// get vouts number
const voutsNum = document.querySelector('.chart__votes-num');
let counter = 0;

data.datasets[0].data.forEach((element) => {
  counter += element;
});
voutsNum.innerHTML = counter;
