import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import{Chart} from 'chart.js'

@Component({
  selector: 'app-daily-energy',
  templateUrl: './daily-energy.component.html',
  styleUrls: ['./daily-energy.component.scss']
})
export class DailyEnergyComponent implements OnInit {

 
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
  }
  // save() {
  //   this.service.dailyenergymonitoring('17459928').subscribe(data=>{
  //     // console.log(data)
  //     this.viewhourly = data;
  //     console.log(this.viewhourly.status)
  //   });

     
  // }

  save() {
    this.service.dailyenergymonitoring('17459928').subscribe(data=>{
      // console.log(data)
      this.viewhourly = data;
       this.dates1 =this.viewhourly.last_week
       this.dates2 =this.viewhourly.this_week
      // this.dates = 90;
          

             this.chart=new Chart('chart1',
             { 
               type:'line',
               data:{
                 labels:['1-hour' ,
                 '1-hour' ,
                 '2-hour' ,
                 '3-hour' ,
                 '4-hour' ,
                 '5-hour' ,
                 '6-hour' ,
                 '7-hour' ,
                 '8-hour' ,
                 '9-hour' ,
                 '10-hour' ,
                 '11-hour' ,
                 '12-hour' ,
                 '13-hour' ,
                 '14-hour' ,
                 '15-hour' ,
                 '16-hour' ,
                 '17-hour' ,
                 '18-hour' ,
                 '1-hour' ,
                 '19-hour' ,
                 '20-hour' ,
                 '21-hour' ,
                 '22-hour' ,
                 '23-hour' ,
                 '24-hour' ,
                 ],
                 datasets:[
                  // labels:'this.week',
                   {
                     label:'Last Week',
                     data:[
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
                     backgroundColor:[ 
                     
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                     '#AF7AC5',
                    //  '#AF7AC5',
                     
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
}
