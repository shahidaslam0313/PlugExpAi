import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import{Chart} from 'chart.js'

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.scss']
})
export class MaindashboardComponent implements OnInit {

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
  save() {
    this.service.lastweekweekenergymonitoring('17459928').subscribe(data=>{
      
      this.viewhourly = data;
  
      this.dates1 =this.viewhourly.last_week
      this.dates2 =this.viewhourly.this_week
     
      // daily_min_usages
            this.chart=new Chart('chart1',
            { 
              type:'bar',
              data:{
                labels:[
                  'Day-1' ,
                  'Day-2' ,
                  'Day-3' ,
                  'Day-4' ,
                  'Day-5' ,
                  'Day-6' ,
                  'Day-7' ,
                 
                 
                ],
                datasets:[
                 // labels:'this.week',
                  {
                    label:'Daily Total Usage',
                    data:[
                     this.viewhourly.daily_total_usages[0],
                     this.viewhourly.daily_total_usages[1],
                     this.viewhourly.daily_total_usages[2],
                     this.viewhourly.daily_total_usages[3],
                     this.viewhourly.daily_total_usages[4],
                     this.viewhourly.daily_total_usages[5],
                     this.viewhourly.daily_total_usages[6],
              

                    
                     
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
            this.chart=new Chart('chart2',
            { 
              type:'bar',
              data:{
                labels:[
                  'Day-1' ,
                  'Day-2' ,
                  'Day-3' ,
                  'Day-4' ,
                  'Day-5' ,
                  'Day-6' ,
                  'Day-7' ,
                 
                 
                ],
                datasets:[
                 // labels:'this.week',
                  {
                    label:'Daily Total Usage',
                    data:[
                     this.viewhourly.daily_min_usages[0],
                     this.viewhourly.daily_min_usages[1],
                     this.viewhourly.daily_min_usages[2],
                     this.viewhourly.daily_min_usages[3],
                     this.viewhourly.daily_min_usages[4],
                     this.viewhourly.daily_min_usages[5],
                     this.viewhourly.daily_min_usages[6],
              

                    
                     
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
                   
   
                 ],
              
                
              },
              options: {
               legend: {
                   display: false,
                   // labels: {
                   //     fontColor: 'rgb(255, 99, 132)'
                   // }
               }
           }

            })

   });

     
  }
  
}
