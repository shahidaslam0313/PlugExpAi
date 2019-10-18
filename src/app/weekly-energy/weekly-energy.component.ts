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


  constructor( private service: ApiService) { }

  ngOnInit() {
    this.save();
    // alert('usman')
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
