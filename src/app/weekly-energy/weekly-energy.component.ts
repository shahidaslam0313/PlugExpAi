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
  dates:any =[]
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
       this.dates =this.viewhourly.last_week
       this.dates =this.viewhourly.this_week
      // this.dates = 90;
             console.log(this.dates.day1)
             console.log(this.dates.day2)

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
                      this.dates.day1,
                      this.dates.day2,
                      this.dates.day3,
                      this.dates.day4,
                      this.dates.day5,
                      this.dates.day6,
                      this.dates.day7
                      
                     ],
                     backgroundColor:[  '#7AE2E2',
                    //   '#FF8BA4', '#FFE29A', '#2ECC71', '#4C4C7C',
                    //  '#AF7AC5',
                    //  '#CB4335',
                    ]
                   },
                   {
                    label:'This Week',
                    data:[
                     this.dates.day1,
                     this.dates.day2,
                     this.dates.day3,
                     this.dates.day4,
                     this.dates.day5,
                     this.dates.day6,
                     this.dates.day7
                     
                    ],
                    backgroundColor:[ 
                    //    '#7AE2E2', '#FF8BA4', 
                    // '#FFE29A', '#2ECC71', '#4C4C7C',
                    // '#AF7AC5',
                    '#CB4335',]
                  },
    
                  ],
                  //  background:['','',]
                 
               }

             })

            //  this.viewhourly.forEach(y => {
            //   this.price_detail.push(y.price_detail)
            //   this.no_of_payers.push(y.no_of_payers);
            // });
     
            //  for (let i = 0; i < res['last_week'].length; i++) {
            //   this.chartData2.barChartLabels[i] = res['last_week'][i]
            //   alert(i)
            //   console.log(this.chartData2.barChartLabels[i])
            // }
            // this.chartData2.barChartLabels['day1'] =  res['last_week']['day1']
            // this.chartData2.barChartLabels['day2'] =  res['last_week']['day2']
            // this.chartData2.barChartLabels['day3'] =  res['last_week']['day3']
            // this.chartData2.barChartLabels['day4'] =  res['last_week']['day4']
            // this.chartData2.barChartLabels['day5'] =  res['last_week']['day']
         
            this.esiidCountHoustan.data[0] = res['last_week']['day1']
            this.esiidCountHoustan.data[1] = res['last_week']['day2']
            this.esiidCountHoustan.data[2] = res['last_week']['day3']
            this.esiidCountHoustan.data[3] = res['last_week']['day4']
    });
    this.chartData2.barChartData[0] = this.esiidCountHoustan
  }


 




 

}
