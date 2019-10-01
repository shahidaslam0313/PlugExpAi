import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-linegraph',
  templateUrl: './linegraph.component.html',
  styleUrls: ['./linegraph.component.scss']
})

export class LinegraphComponent implements OnInit {
  // demoDisplayedColumns: string[] = ['220','2','3', '4', '5', '6', '7', '8','9','10','11','12','13','14','15','16','17','18','18','20','21','22','23','24','25','26','27','total']
  demoDataSource = new MatTableDataSource()

  loading = true
  // obj = this.data
  // obj = this.data
  constructor(private service: ApiService, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private util: UtilityService) { }
  hourly = new FormGroup({
    granularity: new FormControl("", Validators.required),
    from_date: new FormControl("", Validators.required),
    to_date: new FormControl("", Validators.required),
  })

  // hourlyValue
  obj = {
    from_date: '2019-6-12',
    to_date: '2019-6-15',
    granularity:''
  }

  ngOnInit() {


  // if (this.hourly.valid) {
  //   this.hourlyValue.from_date = this.util.datePatternYMD(this.hourly.controls.from_date.value)
  //   this.hourlyValue.to_date = this.util.datePatternYMD(this.hourly.controls.to_date.value)
  //   this.hourlyValue.granularity=this.hourly.controls.granularity.value
    this.getLineGraph1()
  // }

  }


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
            // min: 'Feb',
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
        label: 'Line Graph'
      }
    ]
  }


  // showHourly() {
  //   this.service.hourlyLoadzone(this.obj).subscribe(res => {
  //     if (res['status'] == true) {

  //       // for (let i = 0; i < res['months_name'].length; i++) {
  //         for (let i = 0; i < res['months_name'].length; i++) {
  //         this.chartData7.barChartLabels.push(res['months_name'][i])
  //         this.chartData7.barChartData[0]['data'].push(res['forecast'][i])
  //       }
  //     }
  //   })
  // }
  // getLineGraph() {
  //   this.service.imbalance1().subscribe(res => {
  //     console.log(res['data'][0].hourly)
  //     let HourlyRate = [];
  //     let hourly = res['data'][0].hourly
  //     console.log(hourly)
  //     for (let i = 0; i < 24; i++) {
  //       console.log(`hour_${i + 1}`)
  //       HourlyRate.push(hourly[0][`hour_${i + 1}`])
  //     }
  //     console.log(HourlyRate.map(parseInt))
     
  //     this.chartData7.barChartData[0]['data1'] = HourlyRate.map(parseInt)
  //   })
  // }



  // getLineGraph1() {
  //   this.service.imbalance1().subscribe(res => {
  //     console.log(res['data'][0].hourly)
  //     let hourly = res['data'][0].hourly
  //     console.log(hourly)
  //       this.chartData7.barChartLabels.push(hourly[0][`hour_1`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_1`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_2`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_2`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_3`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_3`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_4`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_4`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_5`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_5`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_6`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_6`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_7`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_7`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_8`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_8`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_9`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_9`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_10`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_10`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_11`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_11`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_12`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_12`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_13`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_13`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_14`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_14`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_15`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_15`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_16`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_16`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_17`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_17`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_18`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_18`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_19`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_19`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_20`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_20`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_21`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_21`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_22`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_22`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_23`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_23`])
  //     this.chartData7.barChartLabels.push(hourly[0][`hour_24`])
  //     this.chartData7.barChartData[0]['data'].push(hourly[0][`hour_24`])
  //   })
  // }






    getLineGraph1() {
      this.service.hourlyLoadzone(this.obj).subscribe(res => {
        if (res['status'] == true) {
          console.log(res)
        console.log(res['message'][0])
        let message = res['message'][0]
        console.log(message)
        this.chartData7.barChartLabels.push(`H1`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_1`])
        this.chartData7.barChartLabels.push(`H2`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_2`])
        this.chartData7.barChartLabels.push(`H3`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_3`])
        this.chartData7.barChartLabels.push(`H4`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_4`])
        this.chartData7.barChartLabels.push(`H5`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_5`])
        this.chartData7.barChartLabels.push(`H6`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_6`])
        this.chartData7.barChartLabels.push(`H7`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_7`])
        this.chartData7.barChartLabels.push(`H8`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_8`])
        this.chartData7.barChartLabels.push(`H9`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_9`])
        this.chartData7.barChartLabels.push(`H10`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_10`])  
         this.chartData7.barChartLabels.push(`H11`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_11`])
        this.chartData7.barChartLabels.push(`H12`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_12`])
        this.chartData7.barChartLabels.push(`H13`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_13`])
        this.chartData7.barChartLabels.push(`H14`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_14`])
        this.chartData7.barChartLabels.push(`H15`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_15`])
        this.chartData7.barChartLabels.push(`H16`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_16`])
        this.chartData7.barChartLabels.push(`H17`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_17`])
        this.chartData7.barChartLabels.push(`H18`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_18`])
        this.chartData7.barChartLabels.push(`H19`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_19`])
        this.chartData7.barChartLabels.push(`H20`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_20`])
        this.chartData7.barChartLabels.push(`H21`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_21`])
        this.chartData7.barChartLabels.push(`H22`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_22`])
        this.chartData7.barChartLabels.push(`H23`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_23`])
        this.chartData7.barChartLabels.push(`H24`)  
        this.chartData7.barChartData[0]['data'].push(message[`h_24`])
        }

        // this.chartData7.barChartLabels.push(`North`)
        // this.chartData7.barChartData[0]['data'].push(message[`predictions_north`])
        // this.chartData7.barChartLabels.push(`South`)
        // this.chartData7.barChartData[0]['data'].push(message[`predictions_south`])
        // this.chartData7.barChartLabels.push(`West`)
        // this.chartData7.barChartData[0]['data'].push(message[`predictions_west`])
        // this.chartData7.barChartLabels.push(`Total`)
        // this.chartData7.barChartData[0]['data'].push(message[`total`])
      })
    }

  
  














  // getImbalance() {
  //   this.service.imbalance1().subscribe(res => {
  //     if (res['Status'] == true) {
  //       for (let i = 0; i < 24; i++) {
  //         this.chartData7.barChartLabels.push(res['hourly'][i])
  //       }
  //     }
  //   })
  // }


  // getForecastBackcastActual() {
  //   // console.log('111')
  //   this.service.forecastBackcastActual().subscribe(res => {
  //     console.log(res)
  //     if (res['status'] == true) {
  //       // console.log(res)
  //       for (let i = 0; i < res['message']['month'].length; i++) {
  //         this.south.data[i] = res['message']['predictions_south'][i]
  //         this.houston.data[i] = res['message']['predictions_houston'][i]
  //         this.north.data[i] = res['message']['predictions_north'][i]
  //         this.west.data[i] = res['message']['predictions_west'][i]

  //         this.chartData4.barChartLabels.push(res['message']['month'][i] + '-' + res['message']['year'][i])
  //       }
  //     }
  //     this.chartData4.barChartData[0] = this.south
  //     this.chartData4.barChartData[1] = this.west
  //     this.chartData4.barChartData[2] = this.north
  //     this.chartData4.barChartData[3] = this.houston
  //   })
  // }

  // showHourly1() {
  //   console.log(this.obj)
  //   this.service.hourlyLoadzone(this.obj).subscribe(res => {
  //     // console.log(res)
  //     if (res['status'] == true) {
  //       this.demoDataSource.data = res['message']
  //       this.loading = false
  //       console.log(res)
  //     }
  //   })
  // }
}
