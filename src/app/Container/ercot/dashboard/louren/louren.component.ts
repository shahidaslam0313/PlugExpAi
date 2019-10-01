import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import * as moment from 'moment';


@Component({
  selector: 'app-louren',
  templateUrl: './louren.component.html',
  styleUrls: ['./louren.component.scss'],
})
export class LourenComponent implements OnInit {
  //for date
  date = new Date();
  month = this.date.getMonth.name;
  yearForlouren = this.date.getFullYear();
  monthForlouren = moment().month(this.month).format("MMMM");

  //Louren forecast data
  business = {
    data: [],
    label: 'Business',
  }
  residential = {
    data: [],
    label: 'Residential',
  }

  //esiidcount data
  esiidCountHoustan = {
    data: [],
    label: 'Houstan',
    // backgroundColor:"rgba(0, 255, 0,1)",
  }
  esiidCountNorth = {
    data: [],
    label: 'North',
    // backgroundColor:"rgba(237, 255, 0,1)",
  }
  esiidCountSouth = {
    data: [],
    label: 'South',
    // backgroundColor:"rgba(251, 0, 0,1)"
  }
  esiidCountWest = {
    data: [],
    label: 'West',
    // backgroundColor:"rgba(72, 0, 173,1)"
  }

  //Backcast,forecast and actual chart 4




  south = {
    data: [],
    label: 'South',
  }
  houston = {
    data: [],
    label: 'Houston',
  }
  north = {
    data: [],
    label: 'North',
  }
  west = {
    data: [],
    label: 'West',
  }
  //LOUREN forecast chart
  chartData1 = {
    tempDataContainer: [],
    barChartOptions: {
      title: {
        display: true,
        text: 'Forecast by CMZ by Profile Type (' + this.monthForlouren + ' ' + this.yearForlouren + ')',
        fontColor: 'black',
      },
      scales: {
        xAxes: [{
          stacked: true,
          ticks: {
            fontColor: 'black',
          },
          gridLines: {
            color: '#dbd9d9'
          }
        }],
        yAxes: [{
          stacked: true,
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
            // labelString: 'Scale Label',
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
        backgroundColor: "rgba(63, 81, 181, 1)",
        borderColor: "rgb(63, 81, 181, 0.8)",
        pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
        pointBorderColor: 'rgba(63, 81, 181, 0.5)',
        pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
        pointHoverBorderColor: 'rgba(63, 81, 181, 1)'
      },
    ],
    barChartLabels: ['HOUSTON', 'NORTH', 'SOUTH', 'WEST'],
    barChartType: 'bar',
    barChartData: []
  }

  //Esiid Count chart
  chartData2 = {
    tempDataContainer: [],
    barChartOptions: {
      title: {
        display: true,
        text: 'ESIID Count by Zone by Month (' + this.yearForlouren + ')',
        fontColor: 'black',
      },
      // scales: {
      //   xAxes: [{
      //     stacked: true,
      //     ticks: {
      //       fontColor: 'black',
      //     },
      //     gridLines: {
      //       color: '#dbd9d9'
      //     }
      //   }],
      //   yAxes: [{
      //     stacked: true,
      //     ticks: {
      //       fontColor: 'black',
      //       min: 0,
      //       beginAtZero: true,

      //     },
      //     gridLines: {
      //       color: '#dbd9d9'
      //     },
      //     scaleLabel: {
      //       display: true,
      //       // labelString: 'Scale Label',
      //       fontColor: 'black',
      //     }
      //   }]
      // },
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
        backgroundColor: "rgba(63, 81, 181, 1)",
        borderColor: "rgb(63, 81, 181, 0.8)",
        pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
        pointBorderColor: 'rgba(63, 81, 181, 0.5)',
        pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
        pointHoverBorderColor: 'rgba(63, 81, 181, 1)'
      },
    ],
    barChartLabels: [],
    barChartType: 'bar',
    barChartData: []
  }

  //Retail Price Chart
  chartData3 = {
    tempDataContainer: [],
    barChartOptions: {
      title: {
        display: true,
        text: 'Cost of Energy $/Month',
        fontColor: 'black',
      },
      scales: {
        xAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            min: 'Feb',
            beginAtZero: true,
          },
          gridLines: {
            color: '#dbd9d9'
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
            // labelString: 'Scale Label',
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
    barChartLabels: [],
    barChartType: 'line',
    barChartData: [
      {
        data: []
      }
    ]
  }
  //forecast backcast and actual load
  chartData4 = {
    tempDataContainer: [],
    barChartOptions: {
      title: {
        display: true,
        text: 'Forecast, Backcast and Actual Load',
        fontColor: 'black',
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
        backgroundColor: "rgba(63, 81, 181, 1)",
        borderColor: "rgb(63, 81, 181, 0.8)",
        pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
        pointBorderColor: 'rgba(63, 81, 181, 0.5)',
        pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
        pointHoverBorderColor: 'rgba(63, 81, 181, 1)'
      },
    ],
    barChartLabels: [],
    barChartType: 'bar',
    barChartData: []
  }

  //forecast backcast and actual load
  chartData5 = {
    tempDataContainer: [],
    barChartOptions: {
      title: {
        display: true,
        text: 'Bal of Yr Forecast/Net Supply/Net Position (Fixed)',
        fontColor: 'black',
      },
      elements: {
        line: {
          tension: 0, // disables bezier curves
        }
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
        borderColor: "rgb(63, 81, 181, 0.8)",
        pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
        pointBorderColor: 'rgba(63, 81, 181, 0.5)',
        pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
        pointHoverBorderColor: 'rgba(63, 81, 181, 1)'
      },
    ],
    barChartLabels: [],
    barChartType: 'bar',
    barChartData: [
      {
        data: [],
        label: 'Forecast',
        type: 'line',
        backgroundColor: "rgba(0, 0, 0,0)",
      },
      {
        data: [],
        label: 'Net Supply',
        type: 'line',
        backgroundColor: "rgba(0, 0, 0,0)",
      },
      {
        data: [],
        label: 'Net Position'
      }
    ]
  }

  //Load By Ams Coverage Cmz
  chartData6 = {
    tempDataContainer: [],
    barChartOptions: {
      title: {
        display: true,
        text: 'Load By Ams Coverage Cmz (Apr 2019)',
        fontColor: 'black',
      },
      scales: {
        xAxes: [{
          stacked: true,
          ticks: {
            fontColor: 'black',
          },
          gridLines: {
            color: '#dbd9d9'
          }
        }],
        yAxes: [{
          stacked: true,
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
            // labelString: 'Scale Label',
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
        backgroundColor: "rgba(63, 81, 181, 1)",
        borderColor: "rgb(63, 81, 181, 0.8)",
        pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
        pointBorderColor: 'rgba(63, 81, 181, 0.5)',
        pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
        pointHoverBorderColor: 'rgba(63, 81, 181, 1)'
      },
    ],
    barChartLabels: ['HOUSTON', 'NORTH', 'SOUTH', 'WEST'],
    barChartType: 'bar',
    barChartData: [
      {
        data: [],
        label: 'AMS'
      },
      {
        data: [],
        label: 'Non AMS'
      }
    ]
  }

  //Retail Price Chart
  chartData7 = {
    tempDataContainer: [],
    barChartOptions: {
      title: {
        display: true,
        text: 'Imbalance $/MWh',
        fontColor: 'black',
      },
      elements: {
        line: {
          tension: 0, // disables bezier curves
        }
      },
      scales: {
        xAxes: [{
          // stacked: true,
          ticks: {
            fontColor: 'black',
            min: 'Feb',
            beginAtZero: false,
          },
          gridLines: {
            color: '#dbd9d9'
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
            // labelString: 'Scale Label',
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
    barChartLabels: [],
    barChartType: 'line',
    barChartData: [
      {
        data: [],
        backgroundColor: "rgba(0, 0, 0,0)",
        label: 'Imbalance $/MWh'
      }
    ]
  }
  constructor(private service: ApiService) { }
  ngOnInit() {
    this.getLouren()
    this.getLourenEsiidCount()
    this.getRetailPrice()
    this.getForecastBackcastActual()
    this.getForecastNetSupply()
    this.getAmsCoverageCmz()
    this.getImbalance()
  }

  getLouren() {
    this.service.lourenForecast().subscribe(res => {
      if (res['status'] == true) {
        // this.business.data[0] = res['huston_b']['huston_bus_sum']
        // this.business.data[1] = res['north_b']['north_bus_sum']
        // this.business.data[2] = res['south_b']['south_bus_sum']
        // this.business.data[3] = res['west_b']['west_bus_sum']

        // this.residential.data[0] = res['huston_r']['huston_res_sum']
        // this.residential.data[1] = res['north_r']['north_res_sum']
        // this.residential.data[2] = res['south_r']['south_res_sum']
        // this.residential.data[3] = res['west_r']['west_res_sum']
        this.business.data[0] = res['huston_cust']['huston_b']
        this.business.data[1] = res['north_cust']['north_b']
        this.business.data[2] = res['south_cust']['south_b']
        this.business.data[3] = res['west_cust']['west_b']

        this.residential.data[0] = res['huston_cust']['huston_r']
        this.residential.data[1] = res['north_cust']['north_r']
        this.residential.data[2] = res['south_cust']['south_r']
        this.residential.data[3] = res['west_cust']['west_r']
      }
    })
    this.chartData1.barChartData[0] = this.business
    this.chartData1.barChartData[1] = this.residential
  }

  getLourenEsiidCount() {
    this.service.lourenEsiidCount().subscribe(res => {
      // console.log(res)
      if (res['status'] == true) {
        // console.log(res)
        for (let i = 0; i < res['months_name'].length; i++) {
          this.chartData2.barChartLabels[i] = res['months_name'][i]
        }
        this.esiidCountHoustan.data[0] = res['huston_usage']['huston_sum1']
        this.esiidCountHoustan.data[1] = res['huston_usage']['huston_sum2']
        this.esiidCountHoustan.data[2] = res['huston_usage']['huston_sum3']
        this.esiidCountHoustan.data[3] = res['huston_usage']['huston_sum4']

        this.esiidCountNorth.data[0] = res['north_usage']['north_sum1']
        this.esiidCountNorth.data[1] = res['north_usage']['north_sum2']
        this.esiidCountNorth.data[2] = res['north_usage']['north_sum3']
        this.esiidCountNorth.data[3] = res['north_usage']['north_sum4']

        this.esiidCountSouth.data[0] = res['south_usage']['south_sum1']
        this.esiidCountSouth.data[1] = res['south_usage']['south_sum2']
        this.esiidCountSouth.data[2] = res['south_usage']['south_sum3']
        this.esiidCountSouth.data[3] = res['south_usage']['south_sum4']

        this.esiidCountWest.data[0] = res['west_usage']['west_sum1']
        this.esiidCountWest.data[1] = res['west_usage']['west_sum2']
        this.esiidCountWest.data[2] = res['west_usage']['west_sum3']
        this.esiidCountWest.data[3] = res['west_usage']['west_sum4']
        // console.log(this.esiidCountHoustan)
        // console.log(this.esiidCountNorth)
      }
    })
    this.chartData2.barChartData[0] = this.esiidCountHoustan
    this.chartData2.barChartData[1] = this.esiidCountNorth
    this.chartData2.barChartData[2] = this.esiidCountSouth
    this.chartData2.barChartData[3] = this.esiidCountWest
  }

  getRetailPrice() {
    this.service.graphRetailPrice().subscribe(res => {
      // console.log(res)
      if (res['status'] == true) {
        let data = []
        for (let i = 1; i <= 12; i++) {
          data[i - 1] = res['message']['Mon' + i]
          this.chartData3.barChartLabels.push(res['months'][i - 1])
        }
        this.chartData3.barChartData[0].data = data
      }
    })
  }
  getForecastBackcastActual() {
    // console.log('111')
    this.service.forecastBackcastActual().subscribe(res => {
      console.log(res)
      if (res['status'] == true) {
        // console.log(res)
        for (let i = 0; i < res['message']['month'].length; i++) {
          this.south.data[i] = res['message']['predictions_south'][i]
          this.houston.data[i] = res['message']['predictions_houston'][i]
          this.north.data[i] = res['message']['predictions_north'][i]
          this.west.data[i] = res['message']['predictions_west'][i]

          this.chartData4.barChartLabels.push(res['message']['month'][i] + '-' + res['message']['year'][i])
        }
      }
      this.chartData4.barChartData[0] = this.south
      this.chartData4.barChartData[1] = this.west
      this.chartData4.barChartData[2] = this.north
      this.chartData4.barChartData[3] = this.houston
    })
  }
  getForecastNetSupply() {
    this.service.forecastNetSupply().subscribe(res => {
      if (res['status'] == true) {
        for (let i = 0; i < res['forecast'].length; i++) {
          this.chartData5.barChartData[0]['data'][i] = res['forecast'][i]
          this.chartData5.barChartData[1]['data'][i] = res['net_supply'][i]
          this.chartData5.barChartData[2]['data'][i] = res['net_position'][i]
          this.chartData5.barChartLabels[i] = res['months_name'][i]
        }
      }
    })
    this.chartData1.barChartData[0] = this.business
    this.chartData1.barChartData[1] = this.residential
  }
  getAmsCoverageCmz() {
    this.service.AmsCoverageCmz().subscribe(res => {
      if (res['status'] == true) {
        this.chartData6.barChartData[0]['data'][0] = res['AMS'][0]['huston']
        this.chartData6.barChartData[0]['data'][1] = res['AMS'][0]['north']
        this.chartData6.barChartData[0]['data'][2] = res['AMS'][0]['south']
        this.chartData6.barChartData[0]['data'][3] = res['AMS'][0]['west']

        this.chartData6.barChartData[1]['data'][0] = res['NON_AMS'][0]['huston']
        this.chartData6.barChartData[1]['data'][1] = res['NON_AMS'][0]['north']
        this.chartData6.barChartData[1]['data'][2] = res['NON_AMS'][0]['south']
        this.chartData6.barChartData[1]['data'][3] = res['NON_AMS'][0]['west']
      }
    })
  }
  getImbalance() {
    this.service.imbalance().subscribe(res => {
      if (res['status'] == true) {
        for (let i = 0; i < res['months_name'].length; i++) {
          this.chartData7.barChartLabels.push(res['months_name'][i])
          this.chartData7.barChartData[0]['data'].push(res['forecast'][i])
        }
      }
    })
  }
}
