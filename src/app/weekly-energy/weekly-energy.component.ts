import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import{Chart} from 'chart.js'

@Component({
  selector: 'app-weekly-energy',
  templateUrl: './weekly-energy.component.html',
  styleUrls: ['./weekly-energy.component.scss']
})
export class WeeklyEnergyComponent implements OnInit {
  viewhourly :any =[];
  dates1:any =[]
  dates2:any =[]
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }
  chart:any=[];

//   "last_week": {
//     "day1": 97.25,
//     "day2": 96.4,
//     "day3": 86.56,
//     "day4": 84.4,
//     "day5": 86.4,
//     "day6": 74.25,
//     "day7": 91.94
// },
// "this_week": {
//     "day1": 100.25,
//     "day2": 98.56,
//     "day3": 101.56,
//     "day4": 91.25,
//     "day5": 87.4,
//     "day6": 96.1,
//     "day7": 105.94
// },
esiidCountHoustan = {
  data: [],
  label: 'day1',
  
  // backgroundColor:"rgba(0, 255, 0,1)",
}

  constructor( private service: ApiService) { }

  ngOnInit() {
    this.save();
    // alert('usman')
  }
  chartData2 = {
    tempDataContainer: [],
    barChartOptions: {
      title: {
        display: true,
        text: 'ESIID Count by Zone by Month (' + 'weekly'+ ')',
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
  save() {
    this.service.weeklycomparison('17459928').subscribe(res=>{
      // console.log(data.last_week.day1)
      this.viewhourly = res;
       this.dates1 =this.viewhourly.last_week
       this.dates2 =this.viewhourly.this_week
      // this.dates = 90;
          

             this.chart=new Chart('chart1',
             { 
               type:'bar',
               data:{
                 labels:['day1' , 'day2','day3','day4','day5','day6','day7'],
                 datasets:[
                  // labels:'this.week',
                   {
                     label:'Last Week',
                     data:[
                      this.viewhourly.last_week.day1,
                      this.viewhourly.last_week.day2,
                      this.viewhourly.last_week.day3,
                      this.viewhourly.last_week.day4,
                      this.viewhourly.last_week.day5,
                      this.viewhourly.last_week.day6,
                      this.viewhourly.last_week.day7
                      
                     ],
                     backgroundColor:[ 
                     
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     
                    ]
                   },
                   {
                    label:'This Week',
                    data:[
                      this.viewhourly.this_week.day1,
                      this.viewhourly.this_week.day2,
                      this.viewhourly.this_week.day3,
                      this.viewhourly.this_week.day4,
                      this.viewhourly.this_week.day5,
                      this.viewhourly.this_week.day6,
                      this.viewhourly.this_week.day7
                     
                    ],
                    backgroundColor:[ 
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
