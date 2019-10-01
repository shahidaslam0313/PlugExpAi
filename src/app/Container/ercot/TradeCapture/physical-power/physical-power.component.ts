import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-physical-power',
  templateUrl: './physical-power.component.html',
  styleUrls: ['./physical-power.component.scss']
})
export class PhysicalPowerComponent implements OnInit {


  Form = new FormGroup({
    buy: new FormControl("", Validators.required),
    call: new FormControl("", Validators.required),
    tradename: new FormControl("", Validators.required),
    book: new FormControl("", Validators.required),
    location: new FormControl("", Validators.required),
    flowtime_start: new FormControl("", Validators.required),
    flowtime_end: new FormControl("", Validators.required),
    tradedate_start: new FormControl("", Validators.required),
    tradedate_end: new FormControl("", Validators.required),
    counterparty: new FormControl("", Validators.required),
    agreement: new FormControl("", Validators.required),
    shape: new FormControl("", Validators.required),
    dba: new FormControl("", Validators.required),
    fixedprice: new FormControl("", Validators.required),
    indexpricelist: new FormControl("", Validators.required),
    mwamount: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    trader: new FormControl("", Validators.required),
    unique: new FormControl("", Validators.required),
  })
  constructor() { }

  ngOnInit() {
  }

}
