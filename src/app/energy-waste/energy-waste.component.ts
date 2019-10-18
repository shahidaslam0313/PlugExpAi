import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-energy-waste',
  templateUrl: './energy-waste.component.html',
  styleUrls: ['./energy-waste.component.scss']
})
export class EnergyWasteComponent implements OnInit {
viewhourly :any =[];
  constructor( private service: ApiService) { }

  ngOnInit() {
    // this.save();
  }
  save() {
    this.service.weeklycomparison('17459928').subscribe(data=>{
      // console.log(data)
      this.viewhourly = data;
      console.log(this.viewhourly.status)
    });

     
  }

}
