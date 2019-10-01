import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MAT_DIALOG_DATA, MatDialog, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements OnInit {
  demoDataSource = new MatTableDataSource()

  loading = true
  obj = this.data

  constructor(private service: ApiService, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }
  ngOnInit() {
    // this.getImbalance()
    // this.showmessage()
    this.getLineGraph1()
  //  this. getImbalance() 

  }


  //  chartData2 = {
  //   tempDataContainer: [],
  //   barChartOptions: {
  //     title: {
  //       display: true,
  //       text: 'Imbalance $/MWh',
  //       fontColor: 'black',
  //     },
  //     elements: {
  //       line: {
  //         tension: 0, // disables bezier curves
  //       }
  //     },
  //     scales: {
  //       xAxes: [{
  //         // stacked: true,
  //         ticks: {
  //           fontColor: 'black',
  //           // min: 'Feb',
  //           beginAtZero: false,
  //         },
  //         gridLines: {
  //           color: '#dbd9d9'
  //         }
  //       }],
  //       yAxes: [{
  //         // stacked: true,
  //         ticks: {
  //           fontColor: 'black',
  //           min: 0,
  //           beginAtZero: true,

  //         },
  //         gridLines: {
  //           color: '#dbd9d9'
  //         },
  //         scaleLabel: {
  //           display: true,
  //           // labelString: 'Scale Label',
  //           fontColor: 'black',
  //         }
  //       }]
  //     },
  //     scaleShowVerticalLines: false,
  //     responsive: true,
  //     animationEnabled: true,
  //     animationDuration: 2000,
  //     legend: {
  //       display: false
  //     },
  //     tooltips: {
  //       displayColors: false,
  //       bodyFontSize: 20,
  //     }
  //   },
  //   barChartColors: [
  //     {
  //       // backgroundColor: "rgba(63, 81, 181, 1)",
  //       borderColor: "rgba(63, 81, 181, 1)",
  //       pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
  //       pointBorderColor: 'rgba(63, 81, 181, 0.5)',
  //       pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
  //       pointHoverBorderColor: 'rgba(63, 81, 181, 1)'
  //     },
  //   ],
  //   barChartLabels: [],
  //   barChartType: 'line',
  //   barChartData: [
  //     {
  //       data: [],
  //       backgroundColor: "rgba(0, 0, 0,0)",
  //       label: 'Line Graph'
  //     }
  //   ]
  // }


  // date = new Date();
  // month = this.date.getMonth.name;
  // yearForlouren = this.date.getFullYear();
  // // monthForlouren = moment().month(this.month).format("MMMM");

  // //Louren forecast data
  // business = {
  //   data: [],
  //   label: 'Business',
  // }
  // residential = {
  //   data: [],
  //   label: 'Residential',
  // }

  // //esiidcount data
  // esiidCountHoustan = {
  //   data: [],
  //   label: 'Houstan',
  //   // backgroundColor:"rgba(0, 255, 0,1)",
  // }
  // esiidCountNorth = {
  //   data: [],
  //   label: 'North',
  //   // backgroundColor:"rgba(237, 255, 0,1)",
  // }
  // esiidCountSouth = {
  //   data: [],
  //   label: 'South',
  //   // backgroundColor:"rgba(251, 0, 0,1)"
  // }
  // esiidCountWest = {
  //   data: [],
  //   label: 'West',
  //   // backgroundColor:"rgba(72, 0, 173,1)"
  // }

  // //Backcast,forecast and actual chart 4




  // south = {
  //   data: [],
  //   label: 'South',
  // }
  // houston = {
  //   data: [],
  //   label: 'Houston',
  // }
  // north = {
  //   data: [],
  //   label: 'North',
  // }
  // west = {
  //   data: [],
  //   label: 'West',
  // }
  // //LOUREN forecast chart
  //  chartData2 = {
  //   tempDataContainer: [],
  //   barChartOptions: {
  //     title: {
  //       display: true,
  //       // text: 'Forecast by CMZ by Profile Type (' + this.monthForlouren + ' ' + this.yearForlouren + ')',
  //       text :'monthly',
  //       fontColor: 'black',
  //     },
  //     scales: {
  //       xAxes: [{
  //         stacked: true,
  //         ticks: {
  //           fontColor: 'black',
  //         },
  //         gridLines: {
  //           color: '#dbd9d9'
  //         }
  //       }],
  //       yAxes: [{
  //         stacked: true,
  //         ticks: {
  //           fontColor: 'black',
  //           min: 0,
  //           beginAtZero: true,

  //         },
  //         gridLines: {
  //           color: '#dbd9d9'
  //         },
  //         scaleLabel: {
  //           display: true,
  //           // labelString: 'Scale Label',
  //           fontColor: 'black',
  //         }
  //       }]
  //     },
  //     scaleShowVerticalLines: false,
  //     responsive: true,
  //     animationEnabled: true,
  //     animationDuration: 2000,
  //     legend: {
  //       display: false
  //     },
  //     tooltips: {
  //       displayColors: false,
  //       bodyFontSize: 20,
  //     }
  //   },
  //   barChartColors: [
  //     {
  //       backgroundColor: "rgba(63, 81, 181, 1)",
  //       backgroundColor1: "rgba(0, 0, 0, 0)",
  //       borderColor: "rgb(63, 81, 181, 0.8)",
  //       pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
  //       pointBorderColor: 'rgba(63, 81, 181, 0.5)',
  //       pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
  //       pointHoverBorderColor: 'rgba(63, 81, 181, 1)'
  //     },
  //   ],
  //   // barChartLabels: ['HOUSTON', 'NORTH', 'SOUTH', 'WEST'],
  //   barChartLabels: [],
  //   barChartType: 'bar',
  //   barChartData: [
  //     {
  //       data: [],
  //       backgroundColor: "rgba(0, 0, 0,0)",
  //       label: 'Imbalance $/MWh'
  //     }

  //   ]
  // }

  chartData2 = {
    tempDataContainer: [],
    barChartOptions: {
      title: {
        display: true,
        text: 'ESIID Count by Zone by Month ',
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
    barChartColors1: [
      {
        // backgroundColor: "rgba(63, 81, 181, 1)",
        backgroundColor: ['#C3FDB8', '#F0AB05', '#B6B6B4', ' #FFF8C6','#43C6DB'],
        // backgroundColor: "rgb(255, 64, 0)",  
        borderColor: "rgb(63, 81, 181, 0.8)",
        pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
        pointBorderColor: 'rgba(63, 81, 181, 0.5)',
        pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
        pointHoverBorderColor: 'rgba(63, 81, 181, 1)'
      },
   
    ],
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
    barChartData: [
      {
              data: [],
              backgroundColor: "rgba(0, 0, 0,0)",
              label: 'Imbalance $/MWh'
            }
      
    ]
  }



  getLineGraph1() {
    this.service.domo1().subscribe(res => {
      console.log(res['message'][0])
      let message = res['message'][0]
      console.log(message)
      this.chartData2.barChartLabels.push(`Houston`)  
      this.chartData2.barChartData[0]['data'].push(message[`predictions_houston`])
      this.chartData2.barChartLabels.push(`North`)
      this.chartData2.barChartData[0]['data'].push(message[`predictions_north`])
      this.chartData2.barChartLabels.push(`South`)
      this.chartData2.barChartData[0]['data'].push(message[`predictions_south`])
      this.chartData2.barChartLabels.push(`West`)
      this.chartData2.barChartData[0]['data'].push(message[`predictions_west`])
      this.chartData2.barChartLabels.push(`Total`)
      this.chartData2.barChartData[0]['data'].push(message[`total`])
    })
  }
















 
}
