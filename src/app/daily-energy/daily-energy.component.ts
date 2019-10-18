import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-daily-energy',
  templateUrl: './daily-energy.component.html',
  styleUrls: ['./daily-energy.component.scss']
})
export class DailyEnergyComponent implements OnInit {

  viewhourly :any =[];
  constructor( private service: ApiService) { }

  ngOnInit() {
    this.save();
  }
  save() {
    this.service.dailyenergymonitoring('17459928').subscribe(data=>{
      // console.log(data)
      this.viewhourly = data;
      console.log(this.viewhourly.status)
    });

     
  }

  // dailyenergymonitoring
}
