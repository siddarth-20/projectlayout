
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
	type: 'line', 

	data: {
		labels: ["23%", "29%", "58%", "75%", "33%", "20%", "73%", "49%"],
    datasets: [{
			label: "Rainfall",
			backgroundColor: 'lightblue',
			borderColor: 'royalblue',
			data: [27, 28, 28, 29, 30, 29, 29, 28],
		}]
	},

	options: {
    layout: {
      padding: 20,
    },
		legend: {
			position: 'bottom',
		},
		
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
				},

                gridLines: {
        display: false,
      },
			}],
			xAxes: [{
				scaleLabel: {
					display: true,
				}
			}]
		}
	}
});