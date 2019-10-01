import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-what-if',
  templateUrl: './dialog-what-if.component.html',
  styleUrls: ['./dialog-what-if.component.scss', '../../../../button.scss']
})
export class DialogWhatIfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toggle = true
  onValChange(val) {
    this.toggle = val.checked
  }

  form = new FormGroup({
    from: new FormControl("", Validators.required),
    to: new FormControl("", Validators.required),
    customerprofile: new FormControl("", Validators.required),
    weatherzone: new FormControl("", Validators.required),
    loadzone: new FormControl("", Validators.required),
    addcustomer: new FormControl("", Validators.required),
    dropcustomer: new FormControl("", Validators.required),
    historicalUsage: new FormControl("", Validators.required),
    period: new FormControl("", Validators.required),
    proxyfactor: new FormControl("", Validators.required),
    weatheradjustment: new FormControl("", Validators.required)
  })
  timeZone = [
    { value: 'Atlantic Daylight Time', viewValue: 'Atlantic Daylight Time' },
    { value: 'Atlantic Standard Time', viewValue: 'Atlantic Standard Time' },
    { value: 'British Summer Time', viewValue: 'British Summer Time' },
    { value: 'Central Daylight Time', viewValue: 'Central Daylight Time' },
    { value: 'Central Standard Time', viewValue: 'Central Standard Time' },
    { value: 'Eastern Daylight Time', viewValue: 'Eastern Daylight Time' },
    { value: 'Eastern Standard Time', viewValue: 'Eastern Standard Time' },
    { value: 'Mountain Daylight Time', viewValue: 'Mountain Daylight Time' },
    { value: 'Mountain Standard Time', viewValue: 'Mountain Standard Time' },
    { value: 'Pacific Daylight Time', viewValue: 'Pacific Daylight Time' },
    { value: 'Pacific Standard Time', viewValue: 'Pacific Standard Time' },
    { value: 'Coordinated Universal Time', viewValue: 'Coordinated Universal Time' },
  ]

}
