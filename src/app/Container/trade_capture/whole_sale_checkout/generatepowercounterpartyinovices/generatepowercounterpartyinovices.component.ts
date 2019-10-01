import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'MMM YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-generatepowercounterpartyinovices',
  templateUrl: './generatepowercounterpartyinovices.component.html',
  styleUrls: ['./generatepowercounterpartyinovices.component.scss','../../../button.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class GeneratepowercounterpartyinovicesComponent implements OnInit {
  
   tradeType:any
  selectAll = false;
  label="Select All";

  constructor() { 
    this.tradeType=[
      {name : "Physical Power Trade", checked : false},
      {name : "Physical Power Option Trade", checked : false},
      {name : "Fixed For Float Power Trade", checked : false}
    ];
  }
  ngOnInit() {

  }
  updateCheck(){
    console.log(this.selectAll);
    if(this.selectAll === true){
      this.tradeType.map((trade)=>{
        trade.checked=true;
        this.label="Deselect All" 
      });
      
    }
    else {
      this.tradeType.map((trade)=>{
        trade.checked=false;
        this.label="Select All"
      });
    }
  }
  adjustments: string[] = ['Include Per Counterparty Accounting Adjustment', 'Do Not Include Them'];
  date = new FormControl(moment());
  counterParty = [{
    key: "dir",
    value: "DIRE"
  },
  {
    key: "twin",
    value: "Twin"
  }]
  agreement = [{
    key: 'dire',
    value: 'DIRE-EEI'
  }, {
    key: 'twin_eagle_agreement',
    value: 'Twin Eagle Agreement'
  }]
  timeZone = [
    { value: 'Atlantic Daylight Time', viewValue: 'Atlantic Daylight Time' },
    { value: 'Atlantic Standard Time', viewValue: 'Atlantic Standard Time' },
    { value: 'British Daylight Time', viewValue: 'British Daylight Time' },
    { value: 'British Standard Time', viewValue: 'British Standard Time' },
    { value: 'Central Daylight Time', viewValue: 'Central Daylight Time' },
    { value: 'Central Standard Time', viewValue: 'Central Standard Time' },
    { value: 'Eastern Daylight Time', viewValue: 'Eastern Daylight Time' },
    { value: 'Eastern Standard Time', viewValue: 'Eastern Standard Time' },
    { value: 'Mountain Daylight Time', viewValue: 'Mountain Daylight Time' },
    { value: 'Mountain Standard Time', viewValue: 'Mountain Standard Time' },
    { value: 'Pacific Daylight Time', viewValue: 'Pacific Daylight Time' },
    { value: 'Pacific Standard Time', viewValue: 'Pacific Standard Time' },
    { value: 'Universal Time', viewValue: 'Universal Time' },
  ]
  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month().toString());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }
}
