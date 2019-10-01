import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-block-graphs',
  templateUrl: './block-graphs.component.html',
  styleUrls: ['./block-graphs.component.scss']
})
export class BlockGraphsComponent implements OnInit {

  // june month for 2x16,5x16,7x16
  chartData1 = {
    tempDataContainer: [],
    barChartOptions: {
      title: {
        display: true,
        text: 'June,2019 2x16',
        fontColor: 'black',
      },
      elements: {
        line: {
          tension: 0, // disables bezier curves
          borderWidth: 2,
          radius: 1,
        }
      },
      scales: {
        xAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            // min: 'Feb',
            beginAtZero: true,
            maxRotation: 0
          },
          gridLines: {
            color: '#dbd9d9'
          },
          scaleLabel: {
            display: true,
            labelString: 'Days',
            fontColor: 'black',
          }
        }],
        yAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            min: 0,
            beginAtZero: true,

          },
          gridLines: {
            color: '#dbd9d9'
          },
          scaleLabel: {
            display: true,
            labelString: 'MW',
            fontColor: 'black',
          }
        }]
      },
      scaleShowVerticalLines: false,
      responsive: true,
      animationEnabled: true,
      animationDuration: 2000,
      legend: {
        display: false
      },
      tooltips: {
        displayColors: false,
        bodyFontSize: 20,
      }
    },
    barChartColors: [
      {
        // backgroundColor: "rgba(63, 81, 181, 1)",
        borderColor: "rgba(63, 81, 181, 1)",
        pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
        pointBorderColor: 'rgba(63, 81, 181, 0.5)',
        pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
        pointHoverBorderColor: 'rgba(63, 81, 181, 1)'
      },
    ],
    barChartLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    barChartType: 'line',
    barChartData: [
      {
        data: [],
        label: 'Forecast Load',
      },
      {
        data: [],
        label: 'Net Supply',
      }
    ]
  }
  chartData2 = {
    tempDataContainer: [],
    barChartOptions: {
      title: {
        display: true,
        text: 'June,2019 5x16',
        fontColor: 'black',
      },
      elements: {
        line: {
          tension: 0, // disables bezier curves
          borderWidth: 2,
          radius: 1,
        }
      },
      scales: {
        xAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            // min: 'Feb',
            beginAtZero: true,
            maxRotation: 0
          },
          gridLines: {
            color: '#dbd9d9'
          },
          scaleLabel: {
            display: true,
            labelString: 'Days',
            fontColor: 'black',
          }
        }],
        yAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            min: 0,
            beginAtZero: true,

          },
          gridLines: {
            color: '#dbd9d9'
          },
          scaleLabel: {
            display: true,
            labelString: 'MW',
            fontColor: 'black',
          }
        }]
      },
      scaleShowVerticalLines: false,
      responsive: true,
      animationEnabled: true,
      animationDuration: 2000,
      legend: {
        display: false
      },
      tooltips: {
        displayColors: false,
        bodyFontSize: 20,
      }
    },
    barChartColors: [
      {
        // backgroundColor: "rgba(63, 81, 181, 1)",
        borderColor: "rgba(63, 81, 181, 1)",
        pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
        pointBorderColor: 'rgba(63, 81, 181, 0.5)',
        pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
        pointHoverBorderColor: 'rgba(63, 81, 181, 1)'
      },
    ],
    barChartLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    barChartType: 'line',
    barChartData: [
      {
        data: [],
        label: 'Forecast Load',
      },
      {
        data: [],
        label: 'Net Supply',
      }
    ]
  }
  chartData3 = {
    tempDataContainer: [],
    barChartOptions: {
      title: {
        display: true,
        text: 'June,2019 7x16',
        fontColor: 'black',
      },
      elements: {
        line: {
          tension: 0, // disables bezier curves
          borderWidth: 2,
          radius: 1,
        }
      },
      scales: {
        xAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            // min: 'Feb',
            beginAtZero: true,
            maxRotation: 0
          },
          gridLines: {
            color: '#dbd9d9'
          },
          scaleLabel: {
            display: true,
            labelString: 'Days',
            fontColor: 'black',
          }
        }],
        yAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            min: 0,
            beginAtZero: true,

          },
          gridLines: {
            color: '#dbd9d9'
          },
          scaleLabel: {
            display: true,
            labelString: 'MW',
            fontColor: 'black',
          }
        }]
      },
      scaleShowVerticalLines: false,
      responsive: true,
      animationEnabled: true,
      animationDuration: 2000,
      legend: {
        display: false
      },
      tooltips: {
        displayColors: false,
        bodyFontSize: 20,
      }
    },
    barChartColors: [
      {
        // backgroundColor: "rgba(63, 81, 181, 1)",
        borderColor: "rgba(63, 81, 181, 1)",
        pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
        pointBorderColor: 'rgba(63, 81, 181, 0.5)',
        pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
        pointHoverBorderColor: 'rgba(63, 81, 181, 1)'
      },
    ],
    barChartLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    barChartType: 'line',
    barChartData: [
      {
        data: [],
        label: 'Forecast Load',
      },
      {
        data: [],
        label: 'Net Supply',
      }
    ]
  }
  // july month for 2x16,5x16,7x16
  chartData4 = {
    tempDataContainer: [],
    barChartOptions: {
      title: {
        display: true,
        text: 'July,2019 2x16',
        fontColor: 'black',
      },
      elements: {
        line: {
          tension: 0, // disables bezier curves
          borderWidth: 2,
          radius: 1,
        }
      },
      scales: {
        xAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            // min: 'Feb',
            beginAtZero: true,
            maxRotation: 0
          },
          gridLines: {
            color: '#dbd9d9'
          },
          scaleLabel: {
            display: true,
            labelString: 'Days',
            fontColor: 'black',
          }
        }],
        yAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            min: 0,
            beginAtZero: true,

          },
          gridLines: {
            color: '#dbd9d9'
          },
          scaleLabel: {
            display: true,
            labelString: 'MW',
            fontColor: 'black',
          }
        }]
      },
      scaleShowVerticalLines: false,
      responsive: true,
      animationEnabled: true,
      animationDuration: 2000,
      legend: {
        display: false
      },
      tooltips: {
        displayColors: false,
        bodyFontSize: 20,
      }
    },
    barChartColors: [
      {
        // backgroundColor: "rgba(63, 81, 181, 1)",
        borderColor: "rgba(63, 81, 181, 1)",
        pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
        pointBorderColor: 'rgba(63, 81, 181, 0.5)',
        pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
        pointHoverBorderColor: 'rgba(63, 81, 181, 1)'
      },
    ],
    barChartLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30','31'],
    barChartType: 'line',
    barChartData: [
      {
        data: [],
        label: 'Forecast Load',
      },
      {
        data: [],
        label: 'Net Supply',
      }
    ]
  }

  chartData5 = {
    tempDataContainer: [],
    barChartOptions: {
      title: {
        display: true,
        text: 'July,2019 2x16',
        fontColor: 'black',
      },
      elements: {
        line: {
          tension: 0, // disables bezier curves
          borderWidth: 2,
          radius: 1,
        }
      },
      scales: {
        xAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            // min: 'Feb',
            beginAtZero: true,
            maxRotation: 0
          },
          gridLines: {
            color: '#dbd9d9'
          },
          scaleLabel: {
            display: true,
            labelString: 'Days',
            fontColor: 'black',
          }
        }],
        yAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            min: 0,
            beginAtZero: true,

          },
          gridLines: {
            color: '#dbd9d9'
          },
          scaleLabel: {
            display: true,
            labelString: 'MW',
            fontColor: 'black',
          }
        }]
      },
      scaleShowVerticalLines: false,
      responsive: true,
      animationEnabled: true,
      animationDuration: 2000,
      legend: {
        display: false
      },
      tooltips: {
        displayColors: false,
        bodyFontSize: 20,
      }
    },
    barChartColors: [
      {
        // backgroundColor: "rgba(63, 81, 181, 1)",
        borderColor: "rgba(63, 81, 181, 1)",
        pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
        pointBorderColor: 'rgba(63, 81, 181, 0.5)',
        pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
        pointHoverBorderColor: 'rgba(63, 81, 181, 1)'
      },
    ],
    barChartLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30','31'],
    barChartType: 'line',
    barChartData: [
      {
        data: [],
        label: 'Forecast Load',
      },
      {
        data: [],
        label: 'Net Supply',
      }
    ]
  }

  chartData6 = {
    tempDataContainer: [],
    barChartOptions: {
      title: {
        display: true,
        text: 'July,2019 2x16',
        fontColor: 'black',
      },
      elements: {
        line: {
          tension: 0, // disables bezier curves
          borderWidth: 2,
          radius: 1,
        }
      },
      scales: {
        xAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            // min: 'Feb',
            beginAtZero: true,
            maxRotation: 0
          },
          gridLines: {
            color: '#dbd9d9'
          },
          scaleLabel: {
            display: true,
            labelString: 'Days',
            fontColor: 'black',
          }
        }],
        yAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            min: 0,
            beginAtZero: true,

          },
          gridLines: {
            color: '#dbd9d9'
          },
          scaleLabel: {
            display: true,
            labelString: 'MW',
            fontColor: 'black',
          }
        }]
      },
      scaleShowVerticalLines: false,
      responsive: true,
      animationEnabled: true,
      animationDuration: 2000,
      legend: {
        display: false
      },
      tooltips: {
        displayColors: false,
        bodyFontSize: 20,
      }
    },
    barChartColors: [
      {
        // backgroundColor: "rgba(63, 81, 181, 1)",
        borderColor: "rgba(63, 81, 181, 1)",
        pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
        pointBorderColor: 'rgba(63, 81, 181, 0.5)',
        pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
        pointHoverBorderColor: 'rgba(63, 81, 181, 1)'
      },
    ],
    barChartLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30','31'],
    barChartType: 'line',
    barChartData: [
      {
        data: [],
        label: 'Forecast Load',
      },
      {
        data: [],
        label: 'Net Supply',
      }
    ]
  }

  // August month for 2x16,5x16,7x16
  chartData7 = {
    tempDataContainer: [],
    barChartOptions: {
      title: {
        display: true,
        text: 'August,2019 2x16',
        fontColor: 'black',
      },
      elements: {
        line: {
          tension: 0, // disables bezier curves
          borderWidth: 2,
          radius: 1,
        }
      },
      scales: {
        xAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            // min: 'Feb',
            beginAtZero: true,
            maxRotation: 0
          },
          gridLines: {
            color: '#dbd9d9'
          },
          scaleLabel: {
            display: true,
            labelString: 'Days',
            fontColor: 'black',
          }
        }],
        yAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            min: 0,
            beginAtZero: true,

          },
          gridLines: {
            color: '#dbd9d9'
          },
          scaleLabel: {
            display: true,
            labelString: 'MW',
            fontColor: 'black',
          }
        }]
      },
      scaleShowVerticalLines: false,
      responsive: true,
      animationEnabled: true,
      animationDuration: 2000,
      legend: {
        display: false
      },
      tooltips: {
        displayColors: false,
        bodyFontSize: 20,
      }
    },
    barChartColors: [
      {
        // backgroundColor: "rgba(63, 81, 181, 1)",
        borderColor: "rgba(63, 81, 181, 1)",
        pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
        pointBorderColor: 'rgba(63, 81, 181, 0.5)',
        pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
        pointHoverBorderColor: 'rgba(63, 81, 181, 1)'
      },
    ],
    barChartLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30','31'],
    barChartType: 'line',
    barChartData: [
      {
        data: [],
        label: 'Forecast Load',
      },
      {
        data: [],
        label: 'Net Supply',
      }
    ]
  }

  chartData8 = {
    tempDataContainer: [],
    barChartOptions: {
      title: {
        display: true,
        text: 'August,2019 2x16',
        fontColor: 'black',
      },
      elements: {
        line: {
          tension: 0, // disables bezier curves
          borderWidth: 2,
          radius: 1,
        }
      },
      scales: {
        xAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            // min: 'Feb',
            beginAtZero: true,
            maxRotation: 0
          },
          gridLines: {
            color: '#dbd9d9'
          },
          scaleLabel: {
            display: true,
            labelString: 'Days',
            fontColor: 'black',
          }
        }],
        yAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            min: 0,
            beginAtZero: true,

          },
          gridLines: {
            color: '#dbd9d9'
          },
          scaleLabel: {
            display: true,
            labelString: 'MW',
            fontColor: 'black',
          }
        }]
      },
      scaleShowVerticalLines: false,
      responsive: true,
      animationEnabled: true,
      animationDuration: 2000,
      legend: {
        display: false
      },
      tooltips: {
        displayColors: false,
        bodyFontSize: 20,
      }
    },
    barChartColors: [
      {
        // backgroundColor: "rgba(63, 81, 181, 1)",
        borderColor: "rgba(63, 81, 181, 1)",
        pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
        pointBorderColor: 'rgba(63, 81, 181, 0.5)',
        pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
        pointHoverBorderColor: 'rgba(63, 81, 181, 1)'
      },
    ],
    barChartLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30','31'],
    barChartType: 'line',
    barChartData: [
      {
        data: [],
        label: 'Forecast Load',
      },
      {
        data: [],
        label: 'Net Supply',
      }
    ]
  }

  chartData9 = {
    tempDataContainer: [],
    barChartOptions: {
      title: {
        display: true,
        text: 'August,2019 2x16',
        fontColor: 'black',
      },
      elements: {
        line: {
          tension: 0, // disables bezier curves
          borderWidth: 2,
          radius: 1,
        }
      },
      scales: {
        xAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            // min: 'Feb',
            beginAtZero: true,
            maxRotation: 0
          },
          gridLines: {
            color: '#dbd9d9'
          },
          scaleLabel: {
            display: true,
            labelString: 'Days',
            fontColor: 'black',
          }
        }],
        yAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            min: 0,
            beginAtZero: true,

          },
          gridLines: {
            color: '#dbd9d9'
          },
          scaleLabel: {
            display: true,
            labelString: 'MW',
            fontColor: 'black',
          }
        }]
      },
      scaleShowVerticalLines: false,
      responsive: true,
      animationEnabled: true,
      animationDuration: 2000,
      legend: {
        display: false
      },
      tooltips: {
        displayColors: false,
        bodyFontSize: 20,
      }
    },
    barChartColors: [
      {
        // backgroundColor: "rgba(63, 81, 181, 1)",
        borderColor: 'rgba(63, 81, 181, 1)',
        pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
        pointBorderColor: 'rgba(63, 81, 181, 0.5)',
        pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
        pointHoverBorderColor: 'rgba(63, 81, 181, 1)'
      },
    ],
    barChartLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30','31'],
    barChartType: 'line',
    barChartData: [
      {
        data: [],
        label: 'Forecast Load',
      },
      {
        data: [],
        label: 'Net Supply',
      }
    ]
  }
  constructor(private service: ApiService) { }

  ngOnInit() {
    this.getBlockGraph()
  }
  getBlockGraph() {
    this.service.blockGraph().subscribe(res => {
      if (res[0]['status'] == true) {
        for (let i = 1; i <= 30; i++) {
          //june
          this.chartData1.barChartData[0]['data'].push(res[0]['forecast_load'][0][`d${i}`])
          this.chartData1.barChartData[1]['data'].push(res[0]['net_supply'][0][`d${i}`])


          this.chartData2.barChartData[0]['data'].push(res[1]['forecast_load'][0][`d${i}`])
          this.chartData2.barChartData[1]['data'].push(res[1]['net_supply'][0][`d${i}`])

          this.chartData3.barChartData[0]['data'].push(res[2]['forecast_load'][0][`d${i}`])
          this.chartData3.barChartData[1]['data'].push(res[2]['net_supply'][0][`d${i}`])
        }
        
        for (let i = 1; i <= 31; i++) {
          //july
          this.chartData4.barChartData[0]['data'].push(res[3]['forecast_load'][0][`d${i}`])
          this.chartData4.barChartData[1]['data'].push(res[3]['net_supply'][0][`d${i}`])


          this.chartData5.barChartData[0]['data'].push(res[4]['forecast_load'][0][`d${i}`])
          this.chartData5.barChartData[1]['data'].push(res[4]['net_supply'][0][`d${i}`])

          this.chartData6.barChartData[0]['data'].push(res[5]['forecast_load'][0][`d${i}`])
          this.chartData6.barChartData[1]['data'].push(res[5]['net_supply'][0][`d${i}`])

          // august
          this.chartData7.barChartData[0]['data'].push(res[6]['forecast_load'][0][`d${i}`])
          this.chartData7.barChartData[1]['data'].push(res[6]['net_supply'][0][`d${i}`])


          this.chartData8.barChartData[0]['data'].push(res[7]['forecast_load'][0][`d${i}`])
          this.chartData8.barChartData[1]['data'].push(res[7]['net_supply'][0][`d${i}`])

          this.chartData9.barChartData[0]['data'].push(res[8]['forecast_load'][0][`d${i}`])
          this.chartData9.barChartData[1]['data'].push(res[8]['net_supply'][0][`d${i}`])
        }
      }
    })
  }
}
