import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.scss']
})
export class MaindashboardComponent implements OnInit {

  viewhourly: any = [];

  dates1: any = []
  dates2: any = []
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }
  image =' ../../../assets/img/fidget_red.svg'
  chart: any = [];
  chart4: any = [];
  chart2: any = [];
  chart3: any = [];
  chartdays: any = []
  constructor(private service: ApiService) { }


  ngOnInit() {
    this.save();
    this.save1();
    this.save2();
 
  }


  save1() {
    this.service.dailyenergymonitoring('17459928').subscribe(data => {
      // console.log(data)
      this.viewhourly = data;
      this.dates1 = this.viewhourly.last_week
      this.dates2 = this.viewhourly.this_week
      // this.dates = 90;


      this.chart3 = new Chart('chart3',
        {
          type: 'bar',
          data: {
            labels: ['1-hour',
              '2-hour',
              '3-hour',
              '4-hour',
              '5-hour',
              '6-hour',
              '7-hour',
              '8-hour',
              '9-hour',
              '10-hour',
              '11-hour',
              '12-hour',
              '13-hour',
              '14-hour',
              '15-hour',
              '16-hour',
              '17-hour',
              '18-hour',

              '19-hour',
              '20-hour',
              '21-hour',
              '22-hour',
              '23-hour',
              '24-hour',
            ],
            datasets: [
              // labels:'this.week',
              {
                label: 'Last Week Usage',
                data: [
                  this.viewhourly.message[0],
                  this.viewhourly.message[1],
                  this.viewhourly.message[2],
                  this.viewhourly.message[3],
                  this.viewhourly.message[4],
                  this.viewhourly.message[5],
                  this.viewhourly.message[6],
                  this.viewhourly.message[7],
                  this.viewhourly.message[8],
                  this.viewhourly.message[9],
                  this.viewhourly.message[10],
                  this.viewhourly.message[11],
                  this.viewhourly.message[12],
                  this.viewhourly.message[13],
                  this.viewhourly.message[14],
                  this.viewhourly.message[15],
                  this.viewhourly.message[16],
                  this.viewhourly.message[17],
                  this.viewhourly.message[18],
                  this.viewhourly.message[19],
                  this.viewhourly.message[20],
                  this.viewhourly.message[21],
                  this.viewhourly.message[22],
                  this.viewhourly.message[23],


                  // this.viewhourly.last_week.day2,
                  // this.viewhourly.last_week.day3,
                  // this.viewhourly.last_week.day4,
                  // this.viewhourly.last_week.day5,
                  // this.viewhourly.last_week.day6,
                  // this.viewhourly.last_week.day7

                ],
                backgroundColor: [


                  '#20c997',
                  '#dc3545',
                  '#6610f2',

                  '#7AE2E2',
                  '#FF8BA4',
                  '#FFE29A',
                  '#2ECC71',
                  '#4C4C7C',
                  '#AF7AC5',
                  '#CB4335',
                  '#FF8BA4',

                  '#CB4335',
                  '#7AE2E2',
                  '#FFE29A',
                  '#2ECC71',
                  '#FFE29A',
                  '#FF8BA4',
                  '#48C9B0',
                  '#A04000',
                  '#4C4C7C',
                  '#B3B6B7',
                  '#CB4335',
                  '#D6DBDF',
                  '#0E6251',

                ]
              },
              //  {
              //   label:'This Week',
              //   data:[
              //     this.viewhourly.this_week.day1,
              //     this.viewhourly.this_week.day2,
              //     this.viewhourly.this_week.day3,
              //     this.viewhourly.this_week.day4,
              //     this.viewhourly.this_week.day5,
              //     this.viewhourly.this_week.day6,
              //     this.viewhourly.this_week.day7

              //   ],
              //   backgroundColor:[ 
              //      '#7AE2E2', 
              //      '#7AE2E2', 
              //      '#7AE2E2', 
              //      '#7AE2E2', 
              //      '#7AE2E2', 
              //      '#7AE2E2', 
              //      '#7AE2E2', 
              //  ,
              // ]
              // },

            ],
            //  background:['','',]

          },
          options: {
            legend: {
              display: true,
              // labels: {
              //     fontColor: 'rgb(255, 99, 132)'
              // }
            }
          }

        })

    });

  }
  days0: any = [];
  days1: any = [];
  days2: any = [];
  days3: any = [];
  days4: any = [];
  days5: any = [];
  days6: any = []
  save() {
    this.service.lastweekweekenergymonitoring('17459928').subscribe(data => {
 

      this.viewhourly = data;

      this.dates1 = this.viewhourly.last_week
      this.dates2 = this.viewhourly.this_week
      this.days0 = this.viewhourly.usage_24_7[0][0] +
        this.viewhourly.usage_24_7[0][1] +
        this.viewhourly.usage_24_7[0][2] +
        this.viewhourly.usage_24_7[0][3] +
        this.viewhourly.usage_24_7[0][4] +
        this.viewhourly.usage_24_7[0][5] +
        this.viewhourly.usage_24_7[0][6] +
        this.viewhourly.usage_24_7[0][7] +
        this.viewhourly.usage_24_7[0][8] +
        this.viewhourly.usage_24_7[0][9] +
        this.viewhourly.usage_24_7[0][10] +
        this.viewhourly.usage_24_7[0][11] +
        this.viewhourly.usage_24_7[0][12] +
        this.viewhourly.usage_24_7[0][13] +
        this.viewhourly.usage_24_7[0][14] +
        this.viewhourly.usage_24_7[0][15] +
        this.viewhourly.usage_24_7[0][16] +
        this.viewhourly.usage_24_7[0][17] +
        this.viewhourly.usage_24_7[0][18] +
        this.viewhourly.usage_24_7[0][19] +
        this.viewhourly.usage_24_7[0][20] +
        this.viewhourly.usage_24_7[0][21] +
        this.viewhourly.usage_24_7[0][22] +
        this.viewhourly.usage_24_7[0][23]




      this.days1 = this.viewhourly.usage_24_7[1][0] +
        this.viewhourly.usage_24_7[1][1] +
        this.viewhourly.usage_24_7[1][2] +
        this.viewhourly.usage_24_7[1][3] +
        this.viewhourly.usage_24_7[1][4] +
        this.viewhourly.usage_24_7[1][5] +
        this.viewhourly.usage_24_7[1][6] +
        this.viewhourly.usage_24_7[1][7] +
        this.viewhourly.usage_24_7[1][8] +
        this.viewhourly.usage_24_7[1][9] +
        this.viewhourly.usage_24_7[1][10] +
        this.viewhourly.usage_24_7[1][11] +
        this.viewhourly.usage_24_7[1][12] +
        this.viewhourly.usage_24_7[1][13] +
        this.viewhourly.usage_24_7[1][14] +
        this.viewhourly.usage_24_7[1][15] +
        this.viewhourly.usage_24_7[1][16] +
        this.viewhourly.usage_24_7[1][17] +
        this.viewhourly.usage_24_7[1][18] +
        this.viewhourly.usage_24_7[1][19] +
        this.viewhourly.usage_24_7[1][20] +
        this.viewhourly.usage_24_7[1][21] +
        this.viewhourly.usage_24_7[1][22] +
        this.viewhourly.usage_24_7[1][23]




      this.days2 =
        this.viewhourly.usage_24_7[2][0] +
        this.viewhourly.usage_24_7[2][1] +
        this.viewhourly.usage_24_7[2][2] +
        this.viewhourly.usage_24_7[2][3] +
        this.viewhourly.usage_24_7[2][4] +
        this.viewhourly.usage_24_7[2][5] +
        this.viewhourly.usage_24_7[2][6] +
        this.viewhourly.usage_24_7[2][7] +
        this.viewhourly.usage_24_7[2][8] +
        this.viewhourly.usage_24_7[2][9] +
        this.viewhourly.usage_24_7[2][10] +
        this.viewhourly.usage_24_7[2][11] +
        this.viewhourly.usage_24_7[2][12] +
        this.viewhourly.usage_24_7[2][13] +
        this.viewhourly.usage_24_7[2][14] +
        this.viewhourly.usage_24_7[2][15] +
        this.viewhourly.usage_24_7[2][16] +
        this.viewhourly.usage_24_7[2][17] +
        this.viewhourly.usage_24_7[2][18] +
        this.viewhourly.usage_24_7[2][19] +
        this.viewhourly.usage_24_7[2][20] +
        this.viewhourly.usage_24_7[2][21] +
        this.viewhourly.usage_24_7[2][22] +
        this.viewhourly.usage_24_7[2][23]


      this.days3 =
        this.viewhourly.usage_24_7[3][0] +
        this.viewhourly.usage_24_7[3][1] +
        this.viewhourly.usage_24_7[3][2] +
        this.viewhourly.usage_24_7[3][3] +
        this.viewhourly.usage_24_7[3][4] +
        this.viewhourly.usage_24_7[3][5] +
        this.viewhourly.usage_24_7[3][6] +
        this.viewhourly.usage_24_7[3][7] +
        this.viewhourly.usage_24_7[3][8] +
        this.viewhourly.usage_24_7[3][9] +
        this.viewhourly.usage_24_7[3][10] +
        this.viewhourly.usage_24_7[3][11] +
        this.viewhourly.usage_24_7[3][12] +
        this.viewhourly.usage_24_7[3][13] +
        this.viewhourly.usage_24_7[3][14] +
        this.viewhourly.usage_24_7[3][15] +
        this.viewhourly.usage_24_7[3][16] +
        this.viewhourly.usage_24_7[3][17] +
        this.viewhourly.usage_24_7[3][18] +
        this.viewhourly.usage_24_7[3][19] +
        this.viewhourly.usage_24_7[3][20] +
        this.viewhourly.usage_24_7[3][21] +
        this.viewhourly.usage_24_7[3][22] +
        this.viewhourly.usage_24_7[3][23]


      this.days4 =
        this.viewhourly.usage_24_7[4][0] +
        this.viewhourly.usage_24_7[4][1] +
        this.viewhourly.usage_24_7[4][2] +
        this.viewhourly.usage_24_7[4][3] +
        this.viewhourly.usage_24_7[4][4] +
        this.viewhourly.usage_24_7[4][5] +
        this.viewhourly.usage_24_7[4][6] +
        this.viewhourly.usage_24_7[4][7] +
        this.viewhourly.usage_24_7[4][8] +
        this.viewhourly.usage_24_7[4][9] +
        this.viewhourly.usage_24_7[4][10] +
        this.viewhourly.usage_24_7[4][11] +
        this.viewhourly.usage_24_7[4][12] +
        this.viewhourly.usage_24_7[4][13] +
        this.viewhourly.usage_24_7[4][14] +
        this.viewhourly.usage_24_7[4][15] +
        this.viewhourly.usage_24_7[4][16] +
        this.viewhourly.usage_24_7[4][17] +
        this.viewhourly.usage_24_7[4][18] +
        this.viewhourly.usage_24_7[4][19] +
        this.viewhourly.usage_24_7[4][20] +
        this.viewhourly.usage_24_7[4][21] +
        this.viewhourly.usage_24_7[4][22] +
        this.viewhourly.usage_24_7[4][23]


      this.days5 =
        this.viewhourly.usage_24_7[5][0] +
        this.viewhourly.usage_24_7[5][1] +
        this.viewhourly.usage_24_7[5][2] +
        this.viewhourly.usage_24_7[5][3] +
        this.viewhourly.usage_24_7[5][4] +
        this.viewhourly.usage_24_7[5][5] +
        this.viewhourly.usage_24_7[5][6] +
        this.viewhourly.usage_24_7[5][7] +
        this.viewhourly.usage_24_7[5][8] +
        this.viewhourly.usage_24_7[5][9] +
        this.viewhourly.usage_24_7[5][10] +
        this.viewhourly.usage_24_7[5][11] +
        this.viewhourly.usage_24_7[5][12] +
        this.viewhourly.usage_24_7[5][13] +
        this.viewhourly.usage_24_7[5][14] +
        this.viewhourly.usage_24_7[5][15] +
        this.viewhourly.usage_24_7[5][16] +
        this.viewhourly.usage_24_7[5][17] +
        this.viewhourly.usage_24_7[5][18] +
        this.viewhourly.usage_24_7[5][19] +
        this.viewhourly.usage_24_7[5][20] +
        this.viewhourly.usage_24_7[5][21] +
        this.viewhourly.usage_24_7[5][22] +
        this.viewhourly.usage_24_7[5][23]

      this.days6 =
        this.viewhourly.usage_24_7[6][0] +
        this.viewhourly.usage_24_7[6][1] +
        this.viewhourly.usage_24_7[6][2] +
        this.viewhourly.usage_24_7[6][3] +
        this.viewhourly.usage_24_7[6][4] +
        this.viewhourly.usage_24_7[6][5] +
        this.viewhourly.usage_24_7[6][6] +
        this.viewhourly.usage_24_7[6][7] +
        this.viewhourly.usage_24_7[6][8] +
        this.viewhourly.usage_24_7[6][9] +
        this.viewhourly.usage_24_7[6][10] +
        this.viewhourly.usage_24_7[6][11] +
        this.viewhourly.usage_24_7[6][12] +
        this.viewhourly.usage_24_7[6][13] +
        this.viewhourly.usage_24_7[6][14] +
        this.viewhourly.usage_24_7[6][15] +
        this.viewhourly.usage_24_7[6][16] +
        this.viewhourly.usage_24_7[6][17] +
        this.viewhourly.usage_24_7[6][18] +
        this.viewhourly.usage_24_7[6][19] +
        this.viewhourly.usage_24_7[6][20] +
        this.viewhourly.usage_24_7[6][21] +
        this.viewhourly.usage_24_7[6][22] +
        this.viewhourly.usage_24_7[6][23]
      console.log(this.days0, 'day0')
      console.log(this.days1, 'day1')
      console.log(this.days2, 'day2')
      console.log(this.days3, 'day3')
      console.log(this.days4, 'day4')
      console.log(this.days5, 'day5')
      console.log(this.days6, 'day6')



      this.chartdays = new Chart('chart5',
        {
          type: 'bar',
          data: {
            labels: [
              'Day-1',
              'Day-2',
              'Day-3',
              'Day-4',
              'Day-5',
              'Day-6',
              'Day-7',


            ],
            datasets: [
              // labels:'this.week',
              {
                label: ' Total Usage',
                data: [
                  this.days0,
                  this.days1,
                  this.days2,
                  this.days3,
                  this.days4,
                  this.days5, this.days6




                ],

                backgroundColor: [

                  // '#17a2b8',
                  // '#007bff',
                  // '#20c997',
                  // '#e83e8c',
                  // '#ffc107',
                  // '#007bff',
                  // '#AF7AC5',
                  '#20c997',
                  '#dc3545',
                  '#6610f2',

                  '#7AE2E2',
                  '#FF8BA4',
                  '#FFE29A',
                  '#2ECC71',


                ]
              },


            ],


          },
          options: {
            legend: {
              display: true,
              // labels: {
              //     fontColor: 'rgb(255, 99, 132)'
              // }
            }
          }

        })

      this.chart = new Chart('chart1',
        {
          type: 'doughnut',
          data: {
            labels: [
              'Day-1',
              'Day-2',
              'Day-3',
              'Day-4',
              'Day-5',
              'Day-6',
              'Day-7',


            ],
            datasets: [
              // labels:'this.week',
              {
                label: 'Daily Total Usage',
                data: [
                  this.viewhourly.daily_total_usages[0],
                  this.viewhourly.daily_total_usages[1],
                  this.viewhourly.daily_total_usages[2],
                  this.viewhourly.daily_total_usages[3],
                  this.viewhourly.daily_total_usages[4],
                  this.viewhourly.daily_total_usages[5],
                  this.viewhourly.daily_total_usages[6],




                ],
                backgroundColor: [

                  '#FFE29A',

                  '#7AE2E2',


                  '#dc3545',
                  '#4C4C7C',
                  '#2ECC71',
                  '#6610f2', '#FF8BA4',
                ]
              },


            ],


          },
          options: {
            legend: {
              display: true,
              // labels: {
              //     fontColor: 'rgb(255, 99, 132)'
              // }
            }
          }

        })
      this.chart2 = new Chart('chart2',
        {
          type: 'doughnut',
          data: {
            labels: [
              'Day-1',
              'Day-2',
              'Day-3',
              'Day-4',
              'Day-5',
              'Day-6',
              'Day-7',


            ],
            datasets: [
              // labels:'this.week',
              {
                label: 'Daily Total Usage',
                data: [
                  this.viewhourly.daily_min_usages[0],
                  this.viewhourly.daily_min_usages[1],
                  this.viewhourly.daily_min_usages[2],
                  this.viewhourly.daily_min_usages[3],
                  this.viewhourly.daily_min_usages[4],
                  this.viewhourly.daily_min_usages[5],
                  this.viewhourly.daily_min_usages[6],




                ],
                backgroundColor: [

                  '#dc3545',
                  '#6610f2',

                  '#7AE2E2',
                  '#FF8BA4',
                  '#FFE29A',
                  '#2ECC71',
                  '#4C4C7C',



                ]
              },


            ],


          },
          options: {
            legend: {
              display: true,
              // labels: {
              //     fontColor: 'rgb(255, 99, 132)'
              // }
            }
          }

        })

    });


  }
  save2() {
    this.service.weeklycomparison('17459928').subscribe(res => {
      // console.log(data.last_week.day1)
      this.viewhourly = res;
      this.dates1 = this.viewhourly.last_week
      this.dates2 = this.viewhourly.this_week
      // this.dates = 90;


      this.chart4 = new Chart('chart4',
        {
          type: 'bar',
          data: {
            labels: ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7'],
            datasets: [
              // labels:'this.week',
              {
                label: 'daliy hour',
                data: [
                  this.viewhourly.last_week.day1,
                  this.viewhourly.last_week.day2,
                  this.viewhourly.last_week.day3,
                  this.viewhourly.last_week.day4,
                  this.viewhourly.last_week.day5,
                  this.viewhourly.last_week.day6,
                  this.viewhourly.last_week.day7

                ],
                backgroundColor: [

                  //  '#AF7AC5',
                  //  '#AF7AC5',
                  //  '#AF7AC5',
                  //  '#AF7AC5',
                  //  '#AF7AC5',
                  //  '#AF7AC5',
                  //  '#AF7AC5',


                  // '#007bff',
                  // '#007bff',
                  // '#AF7AC5',
                  '#20c997', '#20c997', '#20c997', '#20c997', '#20c997', '#20c997', '#20c997',
                  // '#e83e8c',
                  // '#ffc107',
                  // '#17a2b8',



                ]
              },
              {
                label: 'This Week',
                data: [
                  this.viewhourly.this_week.day1,
                  this.viewhourly.this_week.day2,
                  this.viewhourly.this_week.day3,
                  this.viewhourly.this_week.day4,
                  this.viewhourly.this_week.day5,
                  this.viewhourly.this_week.day6,
                  this.viewhourly.this_week.day7

                ],
                backgroundColor: [
                  '#7AE2E2',
                  '#7AE2E2',
                  '#7AE2E2',
                  '#7AE2E2',
                  '#7AE2E2',
                  '#7AE2E2',
                  '#7AE2E2',
                  ,
                ]
              },

            ],
            //  background:['','',]

          },
          options: {
            legend: {
              display: true,
              // labels: {
              //     fontColor: 'rgb(255, 99, 132)'
              // }
            }
          }

        })

    });

  }

}
