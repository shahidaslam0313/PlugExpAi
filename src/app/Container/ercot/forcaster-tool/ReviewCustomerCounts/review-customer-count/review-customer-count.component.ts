import { Component, OnInit } from '@angular/core';
import { MatDialog, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDatepicker } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogCountWeatherComponent } from '../dialog-count-weather/dialog-count-weather.component';
import { DialogCountLoadComponent } from '../dialog-count-load/dialog-count-load.component';
import { ApiService } from '../../../../../services/api.service';
import { UtilityService } from '../../../../../services/utility.service';
import { DialogCountCustomerProfileComponent } from '../dialog-count-customer-profile/dialog-count-customer-profile.component';
import { DialogLoadCustomerProfileComponent } from '../dialog-load-customer-profile/dialog-load-customer-profile.component';
import { DialogWeatherzoneLoadProfileComponent } from '../dialog-weatherzone-load-profile/dialog-weatherzone-load-profile.component';
import { trigger, transition, style, animate } from '@angular/animations';
import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
let moment = _rollupMoment || _moment;

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
  selector: 'app-review-customer-count',
  templateUrl: './review-customer-count.component.html',
  styleUrls: ['./review-customer-count.component.scss','../../../../button.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('150ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ],providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class ReviewCustomerCountComponent implements OnInit {


  data
  obj = {
    counttype: [],
    category: [],
    year: [],
    month: [],
    granularity: [],
    loadzone: '',
    weatherzonelist: '',
    customerprofile: ''
  }

  monthValue = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


  value
  year1
  year2

  CounttypeStatus: boolean = false
  CategoryStatus: boolean = false

  ScheduleForm = new FormGroup({
    // previousMonthValue: new FormControl("", Validators.required),
    // previousYearValue: new FormControl("", Validators.required),
    // nextYearValue: new FormControl("", Validators.required),
    // nextMonthValue: new FormControl("", Validators.required),
    granularity: new FormControl("", Validators.required),
  })


  date = new FormControl("", Validators.required);
  dateEnd = new FormControl("", Validators.required);
  chosenYearHandler(normalizedYear: Moment) {
    this.date.setValue(moment())
    let ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue.year(normalizedYear.year()));
    // console.log(normalizedYear.year())
    this.year1 = normalizedYear.year()
  }
  mon1
  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    let ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month().toString());
    this.date.setValue(ctrlValue);
    datepicker.close()
    this.mon1 = moment().month(normalizedMonth.month().toString()).format("MMM")
    // console.log(moment().month(normalizedMonth.month().toString()).format("MMM"))
    // this.ScheduleForm.controls.date.value=
  }
  chosenYearHandler2(normalizedYear: Moment) {
    this.dateEnd.setValue(moment())
    const ctrlValue = this.dateEnd.value;
    ctrlValue.year(normalizedYear.year());
    this.dateEnd.setValue(ctrlValue);
    this.year2 = normalizedYear.year()
  }
  mon2
  chosenMonthHandler2(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.dateEnd.value;
    ctrlValue.month(normalizedMonth.month().toString());
    this.dateEnd.setValue(ctrlValue);
    datepicker.close();
    this.mon2 = moment().month(normalizedMonth.month().toString()).format("MMM")
    // console.log(ctrlValue)
  }
  // previousYear = [
  //   { value: 2018, viewValue: '2018' },
  //   { value: 2019, viewValue: '2019' }
  // ]


  // nextYear = [
  //   { value: 2018, viewValue: '2018' },
  //   { value: 2019, viewValue: '2019' }
  // ]

  // previousMonth = [
  //   { value: 'm_jan', viewValue: 'Jan' },
  //   { value: 'm_feb', viewValue: 'Feb' },
  //   { value: 'm_mar', viewValue: 'Mar' },
  //   { value: 'm_apr', viewValue: 'Apr' },
  //   { value: 'm_may', viewValue: 'May' },
  //   { value: 'm_jun', viewValue: 'Jun' },
  //   { value: 'm_jul', viewValue: 'Jul' },
  //   { value: 'm_aug', viewValue: 'Aug' },
  //   { value: 'm_sep', viewValue: 'Sep' },
  //   { value: 'm_oct', viewValue: 'Oct' },
  //   { value: 'm_nov', viewValue: 'Nov' },
  //   { value: 'm_dec', viewValue: 'Dec' },
  // ]
  // nextMonth = [
  //   { value: 'm_jan', viewValue: 'Jan' },
  //   { value: 'm_feb', viewValue: 'Feb' },
  //   { value: 'm_mar', viewValue: 'Mar' },
  //   { value: 'm_apr', viewValue: 'Apr' },
  //   { value: 'm_may', viewValue: 'May' },
  //   { value: 'm_jun', viewValue: 'Jun' },
  //   { value: 'm_jul', viewValue: 'Jul' },
  //   { value: 'm_aug', viewValue: 'Aug' },
  //   { value: 'm_sep', viewValue: 'Sep' },
  //   { value: 'm_oct', viewValue: 'Oct' },
  //   { value: 'm_nov', viewValue: 'Nov' },
  //   { value: 'm_dec', viewValue: 'Dec' },
  // ]
  granularityValue = [
    // { value: 'wrong', viewValue: 'ERCOT Total' },
    // { value: 'wrong', viewValue: 'Customer Category' },
    { value: 'loadzone-month-get', viewValue: 'Load Zone' },
    // { value: 'wrong', viewValue: 'Load Zone/ Category' },
    { value: 'weatherzone-get-month-get', viewValue: 'Weather Zone' },
    { value: 'customer-profile-month-get', viewValue: 'Customer Load Profile' },
    { value: 'loadzone-loadprofile-month-get', viewValue: 'Load Zone / Load Profile' },
    { value: 'weatherzone-loadprofile-month-get', viewValue: 'Weather Zone / Load Profile' },
  ]



  loadZone = [
    { value: '', viewValue: 'All' },
    { value: 'HOUSTON', viewValue: 'LZ_HOUSTON' },
    { value: 'NORTH', viewValue: 'LZ_NORTH' },
    { value: 'SOUTH', viewValue: 'LZ_SOUTH' },
    { value: 'WEST', viewValue: 'LZ_WEST' },
  ]

  weatherZone = [
    { value: '', viewValue: 'All' },
    { value: 'COAST', viewValue: 'Coast (COAST)' },
    { value: 'EAST', viewValue: 'East Texas (EAST)' },
    { value: 'FWEST', viewValue: 'Far West Texas (FWEST)' },
    { value: 'NCENT', viewValue: 'North Texas (NORTH)' },
    { value: 'NORTH', viewValue: 'North-Central Texas (NCENT)' },
    { value: 'SOUTH', viewValue: 'South Texas (SOUTH)' },
    { value: 'SCENT', viewValue: 'South-Central Texas (SCENT)' },
    { value: 'WEST', viewValue: 'West Texas (WEST)' },
  ]

  customerProfile = [
    { value: '', viewValue: 'All' },
    { value: 'BUSHILF', viewValue: 'Business High Load-Factor (BUSHILF)' },
    { value: 'BUSHIPV', viewValue: 'Business High PV Renewable (BUSHIPV)' },
    { value: 'BUSHIWD', viewValue: 'Business High Non-PV Renewable (BUSHIWD)' },
    { value: 'BUSHIDG', viewValue: 'Business High Distributed Generation (BUSHIDG)' },
    { value: 'BUSLOPV', viewValue: 'Business Low PV Renewable (BUSLOPV)' },
    { value: 'BUSLODG', viewValue: 'Business Low Distribued Generation (BUSLODG)' },
    { value: 'BUSLOWD', viewValue: 'Business Low Non-PV Renewable (BUSLOWD)' },
    { value: 'BUSLOLF', viewValue: 'Business Low Load-Factor (BUSLOLF)' },
    { value: 'BUSMEDDG', viewValue: 'Business Medium Distributed Generation (BUSMEDDG)' },
    { value: 'BUSMEDLF', viewValue: 'Business Medium Load-Factor (BUSMEDLF)' },
    { value: 'BUSMEDWD', viewValue: 'Business Medium Non-PV Renewable (BUSMEDWD)' },
    { value: 'BUSMEDPV', viewValue: 'Business Medium PV Renewable (BUSMEDPV)' },
    { value: 'BUSNODEM', viewValue: 'Business Non-Demand (BUSNODEM)' },
    { value: 'BUSNODDG', viewValue: 'Business Non-Demand Distributed Generation (BUSNODDG)' },
    { value: 'BUSNODWD', viewValue: 'Business Non-Demand Non-PV Renewable (BUSNODWD)' },
    { value: 'BUSNODPV', viewValue: 'Business Non-Demand PV Renewable (BUSNODPV)' },
    { value: 'BUSOGFDG', viewValue: 'Business Oil & Gas Distributed Generation (BUSOGFDG)' },
    { value: 'BUSOGFLAT', viewValue: 'Business Oil & Gas Flat (BUSOGFLAT)' },
    { value: 'BUSOGFWD', viewValue: 'Business Oil & Gas Non-PV Renewable (BUSOGFWD)' },
    { value: 'BUSOGFPV', viewValue: 'Business Oil & Gas PV Renewable (BUSOGFPV)' },
    { value: 'BUSIDRRQ', viewValue: 'Business Interval Data Recorder Required (BUSIDRRQ)' },
    { value: 'NMLIGHT', viewValue: 'Non-Metered Lighting (NMLIGHT)' },
    { value: 'NMFLAT', viewValue: 'Non-Metered Flat (NMFLAT)' },
    { value: 'RESHIDG', viewValue: 'Residential High Distributed Generation (RESHIDG)' },
    { value: 'RESHIWD', viewValue: 'Residential High Non-PV Renewable (RESHIWD)' },
    { value: 'RESHIPV', viewValue: 'Residential High PV Renewable (RESHIPV)' },
    { value: 'RESHIWR', viewValue: 'Residential High Winter Ratio (RESHIWR)' },
    { value: 'RESLODG', viewValue: 'Residential Low Distributed Generation (RESLODG)' },
    { value: 'RESLOPV', viewValue: 'Residential Low PV Renewable (RESLOPV)' },
    { value: 'RESLOWD', viewValue: 'Residential Low Non-PV Renewable (RESLOWD)' },
    { value: 'RESLOWDR', viewValue: 'Residential Low Winter Ratio (RESLOWDR)' },
  ]

  onSubmit(loadzone, weatherzone, profile) {
    if (this.obj.counttype.length == 0) {
      this.CounttypeStatus = true;
    } else if (this.obj.category.length == 0) {
      this.CategoryStatus = true
    } else {
      this.CounttypeStatus = false
      this.CategoryStatus = false
      this.obj.loadzone = loadzone
      this.obj.weatherzonelist = weatherzone
      this.obj.customerprofile = profile

      if (this.ScheduleForm.valid && this.date.valid && this.dateEnd.valid) {
        this.data = this.obj

        this.Month()
        // this.obj.year.push(this.ScheduleForm.controls.previousYearValue.value)
        // this.obj.year.push(this.ScheduleForm.controls.nextYearValue.value)
        this.obj.year.push(this.year1)
        this.obj.year.push(this.year2)
        this.obj.granularity.push(this.ScheduleForm.controls.granularity.value)
        this.mergeAllValue()
        this.obj.month.push(this.monthRange)
        // console.log(this.obj)
      }
    }
  }
  start
  end
  monthRange
  Month() {
    for (let i = 0; i < this.monthValue.length; i++) {
      if (this.monthValue[i] == this.mon1) {
        this.start = this.monthValue[i]
      }
      if (this.monthValue[i] == this.mon2) {
        this.end = this.monthValue[i]
      }
    }
    // console.log(this.start)
    // console.log(this.end)
    this.monthRange = this.monthValue.slice(this.monthValue.indexOf(this.start), (this.monthValue.indexOf(this.end) + 1))

    // console.log(this.monthValue.slice(this.monthValue.indexOf(this.start), ((this.monthValue.indexOf(this.end) + 1))));
  }
  constructor(public dialog: MatDialog, private service: ApiService, private util: UtilityService) { }

  ngOnInit() {
  }

  //load type
  valueAdjusted(event) {
    if (event.checked == true) {
      this.obj.counttype.push('Based on Load Extracts, Adjusted')
    }
    else {
      for (let i = 0; i < this.obj.counttype.length; i++) {
        if (this.obj.counttype[i] == 'Based on Load Extracts, Adjusted') {
          this.obj.counttype.splice(i, 1);
        }
      }
    }
  }

  valueAdjustedSmoothed(event) {
    if (event.checked == true) {
      this.obj.counttype.push('Based on Load Extracts, Adjusted, Smoothed')
    }
    else {
      for (let i = 0; i < this.obj.counttype.length; i++) {
        if (this.obj.counttype[i] == 'Based on Load Extracts, Adjusted, Smoothed') {
          this.obj.counttype.splice(i, 1);
        }
      }
    }
  }
  valueAdjustedMaximum(event) {
    if (event.checked == true) {
      this.obj.counttype.push('Based on Load Extracts, Adjusted, Maximum')
    }
    else {

      for (let i = 0; i < this.obj.counttype.length; i++) {
        if (this.obj.counttype[i] == 'Based on Load Extracts, Adjusted, Maximum') {
          this.obj.counttype.splice(i, 1);
        }
      }
    }
  }


  valueAdjustedMinimum(event) {
    if (event.checked == true) {
      this.obj.counttype.push('Based on Load Extracts, Adjusted, Minimum')
    }
    else {
      for (let i = 0; i < this.obj.counttype.length; i++) {
        if (this.obj.counttype[i] == 'Based on Load Extracts, Adjusted, Minimum') {
          this.obj.counttype.splice(i, 1);
        }
      }
    }
  }

  valueUnadjusted(event) {
    if (event.checked == true) {
      this.obj.counttype.push('Based on Load Extracts, Unadjusted')
    }
    else {
      for (let i = 0; i < this.obj.counttype.length; i++) {
        if (this.obj.counttype[i] == 'Based on Load Extracts, Unadjusted') {
          this.obj.counttype.splice(i, 1);
        }
      }
    }
  }

  valueUnadjustedSmoothed(event) {
    if (event.checked == true) {
      this.obj.counttype.push('Based on Load Extracts, Unadjusted, Smoothed')
    }
    else {
      for (let i = 0; i < this.obj.counttype.length; i++) {
        if (this.obj.counttype[i] == 'Based on Load Extracts, Unadjusted, Smoothed') {
          this.obj.counttype.splice(i, 1);
        }
      }
    }
  }

  valueUnadjustedMaximum(event) {
    if (event.checked == true) {
      this.obj.counttype.push('Based on Load Extracts, Unadjusted, Maximum')
    }
    else {
      for (let i = 0; i < this.obj.counttype.length; i++) {
        if (this.obj.counttype[i] == 'Based on Load Extracts, Unadjusted, Maximum') {
          this.obj.counttype.splice(i, 1);
        }
      }
    }
  }

  valueUnadjustedMinimum(event) {
    if (event.checked == true) {
      this.obj.counttype.push('Based on Load Extracts, Unadjusted, Minimum')
    }
    else {
      for (let i = 0; i < this.obj.counttype.length; i++) {
        if (this.obj.counttype[i] == 'Based on Load Extracts, Unadjusted, Minimum') {
          this.obj.counttype.splice(i, 1);
        }
      }
    }
  }

  //categories
  valueUncategorized(event) {
    if (event.checked == true) {
      this.obj.category.push('Uncategorized')
    }
    else {
      for (let i = 0; i < this.obj.category.length; i++) {
        if (this.obj.category[i] == 'Uncategorized') {
          this.obj.category.splice(i, 1);
        }
      }
    }
  }

  valueCategoryFixed(event) {
    if (event.checked == true) {
      this.obj.category.push('Fixed')
    }
    else {
      for (let i = 0; i < this.obj.category.length; i++) {
        if (this.obj.category[i] == 'Fixed') {
          this.obj.category.splice(i, 1);
        }
      }
    }
  }

  valueCategoryVariable(event) {
    if (event.checked == true) {
      this.obj.category.push('Variable')
    }
    else {
      for (let i = 0; i < this.obj.category.length; i++) {
        if (this.obj.category[i] == 'Variable') {
          this.obj.category.splice(i, 1);
        }
      }
    }
  }

  clearObject() {
    this.obj.granularity = []
    this.obj.month = []
    this.obj.year = []
    this.obj.loadzone = ''
    this.obj.customerprofile = ''
    this.obj.weatherzonelist = ''
  }

  mergeAllValue() {
    this.openDialog()
  }
  openDialog() {
    if (this.ScheduleForm.controls.granularity.value === "weatherzone-get-month-get") {
      let dialogRef = this.dialog.open(DialogCountWeatherComponent, {
        data: this.obj,
        width: "1200px",
        // height: "50vh"
      })
      dialogRef.afterClosed().subscribe(result => {
        this.clearObject()
      })
    } else if (this.ScheduleForm.controls.granularity.value === "loadzone-month-get") {
      let dialogRef = this.dialog.open(DialogCountLoadComponent, {
        data: this.obj,
        width: "1200px",
        // height: "50vh"
      })
      dialogRef.afterClosed().subscribe(result => {
        this.clearObject()
      })
    } else if (this.ScheduleForm.controls.granularity.value === "customer-profile-month-get") {
      let dialogRef = this.dialog.open(DialogCountCustomerProfileComponent, {
        data: this.obj,
        width: "1200px",
        // height: "50vh"
      })
      dialogRef.afterClosed().subscribe(result => {
        this.clearObject()
      })
    } else if (this.ScheduleForm.controls.granularity.value === "loadzone-loadprofile-month-get") {
      let dialogRef = this.dialog.open(DialogLoadCustomerProfileComponent, {
        data: this.obj,
        width: "1200px",
        // height: "50vh"
      })
      dialogRef.afterClosed().subscribe(result => {
        this.clearObject()
      })
    } else if (this.ScheduleForm.controls.granularity.value === "weatherzone-loadprofile-month-get") {
      let dialogRef = this.dialog.open(DialogWeatherzoneLoadProfileComponent, {
        data: this.obj,
        width: "1200px",
        // height: "50vh"
      })
      dialogRef.afterClosed().subscribe(result => {
        this.clearObject()
      })
    }
  }
  endDate
  checkvalue(val) {
   this.endDate = moment(val, "DD-MM-YYYY").add(1, 'year').month('dec');
  } 
}
