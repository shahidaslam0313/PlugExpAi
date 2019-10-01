import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';
import { MatDialogRef } from '@angular/material';

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
  selector: 'review-invoice',
  templateUrl: './review-invoice-dialog.html',
  styleUrls: ['./review-invoice-dialog.scss','../../../button.scss']
})
export class ReviewInvoiceComponent implements OnInit {

  
  tradeType:any
  selectAll = false;
  label="Select All";

  constructor(public dialogRef:MatDialogRef<ReviewInvoiceComponent>) { 
    this.tradeType=[
      {key:"review",name : "Reviewed"},
      {key:"credited",name : "Credited"},
      {key:"approved",name : "Approved"},
      {key:"pending",name : "Pending"},
      {key:"voided",name : "Voided"}
    ];
  }
  ngOnInit() {

  }
  close() {
    this.dialogRef.close();
  }
  payments: string[] = ['Any', 'Fully Paid','No Payments','Outstanding'];
  types: string[] = ['Any Type', 'Receivable Only','Payable Only'];
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
  date = new FormControl(moment());
  counterParty = [{
    key: "dir",
    value: "DIRE"
  },
  {
    key: "twin",
    value: "Twin"
  }]
  commodity = [{
    key: "commodity",
    value: "All Commodities"
  },
  {
    key: "power",
    value: "Power"
  }]
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
