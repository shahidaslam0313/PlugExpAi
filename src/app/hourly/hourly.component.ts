import { Component, OnInit } from '@angular/core';
import { DialogWhatIfComponent } from '../Container/ercot/forcaster-tool/ReviewForcast/dialog-what-if/dialog-what-if.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ApiService } from '../services/api.service';
import { UtilityService } from '../services/utility.service';
import { DialogForecasterCustomerProfileComponent } from '../Container/ercot/forcaster-tool/ReviewForcast/dialog-forecaster-customer-profile/dialog-forecaster-customer-profile.component';
import { DialogForecasterToolComponent } from '../Container/ercot/forcaster-tool/ReviewForcast/dialog-forecaster-tool/dialog-forecaster-tool.component';
import { DialogForcasterWeatherZoneComponent } from '../Container/ercot/forcaster-tool/ReviewForcast/dialog-forcaster-weather-zone/dialog-forcaster-weather-zone.component';
import { DialogLoadProfileComponent } from '../Container/ercot/forcaster-tool/ReviewForcast/dialog-load-profile/dialog-load-profile.component';
import { DialogWeatherzoneProfileComponent } from '../Container/ercot/forcaster-tool/ReviewForcast/dialog-weatherzone-profile/dialog-weatherzone-profile.component';
import { DialogHourlyComponent } from '../Container/ercot/forcaster-tool/ReviewForcast/dialog-hourly/dialog-hourly.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('150ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ],
})
export class HourlyComponent implements OnInit {
  a; GraphData = []
Data = []

  // data
  // obj1 = this.data
  // data
  // obj = {
  //   loadtype: [],
  //   category: [],
  //   year: [],
  //   month: [],
  //   granularity: [],
  //   loadzone: '',
  //   weatherzonelist: '',
  //   customerprofile: '',
  //   loadzoneloadprofile: ''
  // }

  // monthValue = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


  // value
  // year1
  // year2

  // LoadtypeStatus: boolean = false
  // CategoryStatus: boolean = false

  // ScheduleForm = new FormGroup({
  //   // previousMonthValue: new FormControl("", Validators.required),
  //   // previousYearValue: new FormControl("", Validators.required),
  //   // nextYearValue: new FormControl("", Validators.required),
  //   // nextMonthValue: new FormControl("", Validators.required),
  //   granularity: new FormControl("", Validators.required),
  //   // date : new FormControl("", Validators.required),
  //   // dateEnd : new FormControl("", Validators.required),
  // })

  // constructor(public dialog: MatDialog, private service: ApiService, private util: UtilityService) { }

  // ngOnInit() {
  //   // console.log(this.obj.month)
  //   // console.log(this.obj.year)

  // }
  // date = new FormControl("", Validators.required);
  // dateEnd = new FormControl("", Validators.required);
  // chosenYearHandler(normalizedYear: Moment) {
  //   this.date.setValue(moment())
  //   let ctrlValue = this.date.value;
  //   ctrlValue.year(normalizedYear.year());
  //   this.date.setValue(ctrlValue.year(normalizedYear.year()));
  //   this.year1 = normalizedYear.year()
  // }
  // mon1
  // chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
  //   let ctrlValue = this.date.value;
  //   ctrlValue.month(normalizedMonth.month().toString());
  //   this.date.setValue(ctrlValue);
  //   datepicker.close()
  //   this.mon1 = moment().month(normalizedMonth.month().toString()).format("MMM")
  //   console.log(moment().month(normalizedMonth.month().toString()).format("MMM"))
  //   // this.ScheduleForm.controls.date.value=
  // }
  // chosenYearHandler2(normalizedYear: Moment) {
  //   this.dateEnd.setValue(moment())
  //   const ctrlValue = this.dateEnd.value;
  //   ctrlValue.year(normalizedYear.year());
  //   this.dateEnd.setValue(ctrlValue);
  //   this.year2 = normalizedYear.year()
  // }
  // mon2
  // chosenMonthHandler2(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
  //   const ctrlValue = this.dateEnd.value;
  //   ctrlValue.month(normalizedMonth.month().toString());
  //   this.dateEnd.setValue(ctrlValue);
  //   datepicker.close();
  //   this.mon2 = moment().month(normalizedMonth.month().toString()).format("MMM")
  // }
  // // previousYear = [
  // //   { value: 2018, viewValue: '2018' },
  // //   { value: 2019, viewValue: '2019' }
  // // ]


  // // nextYear = [
  // //   { value: 2018, viewValue: '2018' },
  // //   { value: 2019, viewValue: '2019' }
  // // ]

  // // previousMonth = [
  // //   { value: 'm_jan', viewValue: 'Jan' },
  // //   { value: 'm_feb', viewValue: 'Feb' },
  // //   { value: 'm_mar', viewValue: 'Mar' },
  // //   { value: 'm_apr', viewValue: 'Apr' },
  // //   { value: 'm_may', viewValue: 'May' },
  // //   { value: 'm_jun', viewValue: 'Jun' },
  // //   { value: 'm_jul', viewValue: 'Jul' },
  // //   { value: 'm_aug', viewValue: 'Aug' },
  // //   { value: 'm_sep', viewValue: 'Sep' },
  // //   { value: 'm_oct', viewValue: 'Oct' },
  // //   { value: 'm_nov', viewValue: 'Nov' },
  // //   { value: 'm_dec', viewValue: 'Dec' },
  // // ]
  // // nextMonth = [
  // //   { value: 'm_jan', viewValue: 'Jan' },
  // //   { value: 'm_feb', viewValue: 'Feb' },
  // //   { value: 'm_mar', viewValue: 'Mar' },
  // //   { value: 'm_apr', viewValue: 'Apr' },
  // //   { value: 'm_may', viewValue: 'May' },
  // //   { value: 'm_jun', viewValue: 'Jun' },
  // //   { value: 'm_jul', viewValue: 'Jul' },
  // //   { value: 'm_aug', viewValue: 'Aug' },
  // //   { value: 'm_sep', viewValue: 'Sep' },
  // //   { value: 'm_oct', viewValue: 'Oct' },
  // //   { value: 'm_nov', viewValue: 'Nov' },
  // //   { value: 'm_dec', viewValue: 'Dec' },
  // // ]
  // granularityValue = [
  //   // { value: 'wrong', viewValue: 'ERCOT Total' },
  //   // { value: 'wrong', viewValue: 'Customer Category' },
  //   { value: 'loadzone-month-get', viewValue: 'Load Zone' },
  //   // { value: 'wrong', viewValue: 'Load Zone/ Category' },
  //   // { value: 'weatherzone-get-month-get', viewValue: 'Weather Zone' },
  //   // { value: 'customer-profile-month-get', viewValue: 'Customer Load Profile' },
  //   // { value: 'loadzone-loadprofile-month-get', viewValue: 'Load Zone / Load Profile' },
  //   // { value: 'weatherzone-loadprofile-month-get', viewValue: 'Weather Zone / Load Profile' },
  // ]



  // loadZone = [
  //   { value: '', viewValue: 'All' },
  //   { value: 'HOUSTON', viewValue: 'LZ_HOUSTON' },
  //   { value: 'NORTH', viewValue: 'LZ_NORTH' },
  //   { value: 'SOUTH', viewValue: 'LZ_SOUTH' },
  //   { value: 'WEST', viewValue: 'LZ_WEST' },
  // ]

  // weatherZone = [
  //   { value: '', viewValue: 'All' },
  //   { value: 'COAST', viewValue: 'Coast (COAST)' },
  //   { value: 'EAST', viewValue: 'East Texas (EAST)' },
  //   { value: 'FWEST', viewValue: 'Far West Texas (FWEST)' },
  //   { value: 'NCENT', viewValue: 'North Texas (NORTH)' },
  //   { value: 'NORTH', viewValue: 'North-Central Texas (NCENT)' },
  //   { value: 'SOUTH', viewValue: 'South Texas (SOUTH)' },
  //   { value: 'SCENT', viewValue: 'South-Central Texas (SCENT)' },
  //   { value: 'WEST', viewValue: 'West Texas (WEST)' },
  // ]

  // customerProfile = [
  //   { value: '', viewValue: 'All' },
  //   { value: 'BUSHILF', viewValue: 'Business High Load-Factor (BUSHILF)' },
  //   { value: 'BUSHIPV', viewValue: 'Business High PV Renewable (BUSHIPV)' },
  //   { value: 'BUSHIWD', viewValue: 'Business High Non-PV Renewable (BUSHIWD)' },
  //   { value: 'BUSHIDG', viewValue: 'Business High Distributed Generation (BUSHIDG)' },
  //   { value: 'BUSLOPV', viewValue: 'Business Low PV Renewable (BUSLOPV)' },
  //   { value: 'BUSLODG', viewValue: 'Business Low Distribued Generation (BUSLODG)' },
  //   { value: 'BUSLOWD', viewValue: 'Business Low Non-PV Renewable (BUSLOWD)' },
  //   { value: 'BUSLOLF', viewValue: 'Business Low Load-Factor (BUSLOLF)' },
  //   { value: 'BUSMEDDG', viewValue: 'Business Medium Distributed Generation (BUSMEDDG)' },
  //   { value: 'BUSMEDLF', viewValue: 'Business Medium Load-Factor (BUSMEDLF)' },
  //   { value: 'BUSMEDWD', viewValue: 'Business Medium Non-PV Renewable (BUSMEDWD)' },
  //   { value: 'BUSMEDPV', viewValue: 'Business Medium PV Renewable (BUSMEDPV)' },
  //   { value: 'BUSNODEM', viewValue: 'Business Non-Demand (BUSNODEM)' },
  //   { value: 'BUSNODDG', viewValue: 'Business Non-Demand Distributed Generation (BUSNODDG)' },
  //   { value: 'BUSNODWD', viewValue: 'Business Non-Demand Non-PV Renewable (BUSNODWD)' },
  //   { value: 'BUSNODPV', viewValue: 'Business Non-Demand PV Renewable (BUSNODPV)' },
  //   { value: 'BUSOGFDG', viewValue: 'Business Oil & Gas Distributed Generation (BUSOGFDG)' },
  //   { value: 'BUSOGFLAT', viewValue: 'Business Oil & Gas Flat (BUSOGFLAT)' },
  //   { value: 'BUSOGFWD', viewValue: 'Business Oil & Gas Non-PV Renewable (BUSOGFWD)' },
  //   { value: 'BUSOGFPV', viewValue: 'Business Oil & Gas PV Renewable (BUSOGFPV)' },
  //   { value: 'BUSIDRRQ', viewValue: 'Business Interval Data Recorder Required (BUSIDRRQ)' },
  //   { value: 'NMLIGHT', viewValue: 'Non-Metered Lighting (NMLIGHT)' },
  //   { value: 'NMFLAT', viewValue: 'Non-Metered Flat (NMFLAT)' },
  //   { value: 'RESHIDG', viewValue: 'Residential High Distributed Generation (RESHIDG)' },
  //   { value: 'RESHIWD', viewValue: 'Residential High Non-PV Renewable (RESHIWD)' },
  //   { value: 'RESHIPV', viewValue: 'Residential High PV Renewable (RESHIPV)' },
  //   { value: 'RESHIWR', viewValue: 'Residential High Winter Ratio (RESHIWR)' },
  //   { value: 'RESLODG', viewValue: 'Residential Low Distributed Generation (RESLODG)' },
  //   { value: 'RESLOPV', viewValue: 'Residential Low PV Renewable (RESLOPV)' },
  //   { value: 'RESLOWD', viewValue: 'Residential Low Non-PV Renewable (RESLOWD)' },
  //   { value: 'RESLOWDR', viewValue: 'Residential Low Winter Ratio (RESLOWDR)' },
  // ]

  // onSubmit(loadzone, weatherzone, profile) {
  //   // console.log(this.date['Moment']['_d'].value)
  //   // console.log(this.dateEnd.get('_d'))
  //   // console.log(this.date.value)
  //   if (this.obj.category.length == 3) {
  //     this.util.openFailureSnackBar(`Uncategorized and other Customer categories can not be choosen at the same time.`)
  //   } else if (this.obj.loadtype.length == 0) {
  //     this.LoadtypeStatus = true;
  //   } else if (this.obj.category.length == 0) {
  //     this.CategoryStatus = true
  //   } else {
  //     this.LoadtypeStatus = false
  //     this.CategoryStatus = false
  //     this.obj.loadzone = loadzone
  //     this.obj.weatherzonelist = weatherzone
  //     this.obj.customerprofile = profile

  //     if (this.ScheduleForm.controls.granularity.value === "loadzone-loadprofile-month-get") {
  //       if (loadzone != null && profile != null) {
  //         this.obj.loadzoneloadprofile = loadzone + '/' + profile
  //       }
  //     }

  //     if (this.ScheduleForm.valid && this.date.valid && this.dateEnd.valid) {
  //       this.data = this.obj

  //       this.Month()
  //       this.obj.year.push(this.year1)
  //       this.obj.year.push(this.year2)
  //       this.obj.granularity.push(this.ScheduleForm.controls.granularity.value)
  //       this.mergeAllValue()
  //       this.obj.month.push(this.monthRange)
  //       // console.log(this.obj)
  //       // console.log(this.obj.month)
  //     }
  //   }
  // }
  // start
  // end
  // monthRange
  // Month() {
  //   for (let i = 0; i < this.monthValue.length; i++) {
  //     if (this.monthValue[i] == this.mon1) {
  //       this.start = this.monthValue[i]
  //     }
  //     if (this.monthValue[i] == this.mon2) {
  //       this.end = this.monthValue[i]
  //     }
  //   }
  //   // console.log(this.start)
  //   // console.log(this.end)
  //   this.monthRange = this.monthValue.slice(this.monthValue.indexOf(this.start), (this.monthValue.indexOf(this.end) + 1))

  //   // console.log(this.monthValue.slice(this.monthValue.indexOf(this.start), ((this.monthValue.indexOf(this.end) + 1))));
  // }

  // //load type
  // valueLosses(event) {
  //   if (event.checked == true) {
  //     this.obj.loadtype.push('Forecast With Losses')
  //   }
  //   else {
  //     for (let i = 0; i < this.obj.loadtype.length; i++) {
  //       if (this.obj.loadtype[i] == 'Forecast With Losses') {
  //         this.obj.loadtype.splice(i, 1);
  //       }
  //     }
  //   }
  // }

  // valueSmoothedLooses(event) {
  //   if (event.checked == true) {
  //     this.obj.loadtype.push('Forecast Smoothed With Losses')
  //   }
  //   else {
  //     for (let i = 0; i < this.obj.loadtype.length; i++) {
  //       if (this.obj.loadtype[i] == 'Forecast Smoothed With Losses') {
  //         this.obj.loadtype.splice(i, 1);
  //       }
  //     }
  //   }
  // }
  // valueMinimumLosses(event) {
  //   if (event.checked == true) {
  //     this.obj.loadtype.push('Forecast Minimum With Losses')
  //   }
  //   else {

  //     for (let i = 0; i < this.obj.loadtype.length; i++) {
  //       if (this.obj.loadtype[i] == 'Forecast Minimum With Losses') {
  //         this.obj.loadtype.splice(i, 1);
  //       }
  //     }
  //   }
  // }


  // valueMaximumLosses(event) {
  //   if (event.checked == true) {
  //     this.obj.loadtype.push('Forecast Maximum With Losses')
  //   }
  //   else {
  //     for (let i = 0; i < this.obj.loadtype.length; i++) {
  //       if (this.obj.loadtype[i] == 'Forecast Maximum With Losses') {
  //         this.obj.loadtype.splice(i, 1);
  //       }
  //     }
  //   }
  // }

  // valueBackcastLosses(event) {
  //   if (event.checked == true) {
  //     this.obj.loadtype.push('Backcast With Losses')
  //   }
  //   else {
  //     for (let i = 0; i < this.obj.loadtype.length; i++) {
  //       if (this.obj.loadtype[i] == 'Backcast With Losses') {
  //         this.obj.loadtype.splice(i, 1);
  //       }
  //     }
  //   }
  // }

  // valueBackcastSmoothLosses(event) {
  //   if (event.checked == true) {
  //     this.obj.loadtype.push('Backcast Smoth with losses')
  //   }
  //   else {
  //     for (let i = 0; i < this.obj.loadtype.length; i++) {
  //       if (this.obj.loadtype[i] == 'Backcast Smoth with losses') {
  //         this.obj.loadtype.splice(i, 1);
  //       }
  //     }
  //   }
  // }

  // valueBackcastMinimum(event) {
  //   if (event.checked == true) {
  //     this.obj.loadtype.push('Backcast Minimum With Losses')
  //   }
  //   else {
  //     for (let i = 0; i < this.obj.loadtype.length; i++) {
  //       if (this.obj.loadtype[i] == 'Backcast Minimum With Losses') {
  //         this.obj.loadtype.splice(i, 1);
  //       }
  //     }
  //   }
  // }

  // valueBackcastMaximum(event) {
  //   if (event.checked == true) {
  //     this.obj.loadtype.push('Backcast Maximum With Losses')
  //   }
  //   else {
  //     for (let i = 0; i < this.obj.loadtype.length; i++) {
  //       if (this.obj.loadtype[i] == 'Backcast Maximum With Losses') {
  //         this.obj.loadtype.splice(i, 1);
  //       }
  //     }
  //   }
  // }

  // valueExtractUnadjusted(event) {
  //   if (event.checked == true) {
  //     this.obj.loadtype.push('Load Extracts: Unadjusted')
  //   }
  //   else {
  //     for (let i = 0; i < this.obj.loadtype.length; i++) {
  //       if (this.obj.loadtype[i] == 'Load Extracts: Unadjusted') {
  //         this.obj.loadtype.splice(i, 1);
  //       }
  //     }
  //   }
  // }

  // valueExtracts(event) {
  //   if (event.checked == true) {
  //     this.obj.loadtype.push('Load Extracts: With Losses')
  //   }
  //   else {
  //     for (let i = 0; i < this.obj.loadtype.length; i++) {
  //       if (this.obj.loadtype[i] == 'Load Extracts: With Losses') {
  //         this.obj.loadtype.splice(i, 1);
  //       }
  //     }
  //   }
  // }

  // //categories
  // valueUncategorized(event) {
  //   if (event.checked == true) {
  //     this.obj.category.push('Uncategorized')
  //   }
  //   else {
  //     for (let i = 0; i < this.obj.category.length; i++) {
  //       if (this.obj.category[i] == 'Uncategorized') {
  //         this.obj.category.splice(i, 1);
  //       }
  //     }
  //   }
  // }

  // valueCategoryFixed(event) {
  //   if (event.checked == true) {
  //     this.obj.category.push('Fixed')
  //   }
  //   else {
  //     for (let i = 0; i < this.obj.category.length; i++) {
  //       if (this.obj.category[i] == 'Fixed') {
  //         this.obj.category.splice(i, 1);
  //       }
  //     }
  //   }
  // }

  // valueCategoryVariable(event) {
  //   if (event.checked == true) {
  //     this.obj.category.push('Variable')
  //   }
  //   else {
  //     for (let i = 0; i < this.obj.category.length; i++) {
  //       if (this.obj.category[i] == 'Variable') {
  //         this.obj.category.splice(i, 1);
  //       }
  //     }
  //   }
  // }

  // clearObject() {
  //   this.obj.granularity = []
  //   this.obj.month = []
  //   this.obj.year = []
  //   this.obj.loadzone = ''
  //   this.obj.customerprofile = ''
  //   this.obj.weatherzonelist = ''
  // }

  // mergeAllValue() {
  //   this.openDialog()
  // }
  // openDialog() {
  //   if (this.ScheduleForm.controls.granularity.value == "customer-profile-month-get") {
  //     let dialogRef = this.dialog.open(DialogForecasterCustomerProfileComponent, {
  //       data: this.obj,
  //       width: "1200px",
  //       // height: "60vh"
  //     })
  //     dialogRef.afterClosed().subscribe(result => {
  //       this.clearObject()
  //     })
  //   } else if (this.ScheduleForm.controls.granularity.value === "loadzone-month-get") {
  //     let dialogRef = this.dialog.open(DialogForecasterToolComponent, {
  //       data: this.obj,
  //       width: "1200px",
  //       // height: "50vh"
  //     })
  //     dialogRef.afterClosed().subscribe(result => {
  //       this.clearObject()
  //     })
  //   } else if (this.ScheduleForm.controls.granularity.value === "weatherzone-get-month-get") {
  //     let dialogRef = this.dialog.open(DialogForcasterWeatherZoneComponent, {
  //       data: this.obj,
  //       width: "1200px",
  //       // height: "70vh"
  //     })
  //     dialogRef.afterClosed().subscribe(result => {
  //       this.clearObject()
  //     })
  //   } else if (this.ScheduleForm.controls.granularity.value === "loadzone-loadprofile-month-get") {
  //     // console.log(this.obj)
  //     // console.log(this.obj.granularity)
  //     let dialogRef = this.dialog.open(DialogLoadProfileComponent, {
  //       data: this.obj,
  //       width: "1200px",
  //       // height: "70vh"
  //     })
  //     dialogRef.afterClosed().subscribe(result => {
  //       this.clearObject()
  //     })
  //   } else if (this.ScheduleForm.controls.granularity.value === "weatherzone-loadprofile-month-get") {
  //     // console.log(this.obj)
  //     // console.log(this.obj.granularity)
  //     let dialogRef = this.dialog.open(DialogWeatherzoneProfileComponent, {
  //       data: this.obj,
  //       width: "1200px",
  //       // height: "70vh"
  //     })
  //     dialogRef.afterClosed().subscribe(result => {
  //       this.clearObject()
  //     })
  //   }
  // }
  // // endDate = moment("30-04-2020", "DD-MM-YYYY")
  // endDate
  // current = moment("30-04-2019", "DD-MM-YYYY")
  // checkvalue(val) {
  //   console.log(val)
  //   console.log(this.obj['month'])

  //   this.endDate = moment("30-04-2020", "DD-MM-YYYY")
  //   // this.endDate = moment(val, "DD-MM-YYYY").add(1, 'year').month('dec');
  //   // this.endDate = moment(val, "DD-MM-YYYY").add(1, 'year')
  // }
  // hourly = new FormGroup({
  //   granularity: new FormControl("", Validators.required),
  //   from_date: new FormControl("", Validators.required),
  //   to_date: new FormControl("", Validators.required),
  // })




  // hourly = new FormGroup({
  //   granularity: new FormControl("", Validators.required),
  //   from_date: new FormControl("", Validators.required),
  //   to_date: new FormControl("", Validators.required),
  // })

  // hourlyValue
  obj1 = {
    from_date: '2019-6-12',
    to_date: '2019-6-15',
    // from_date: '',
    // to_date: '',
    granularity: ''
  }
  public show: boolean = false;
  public show1: boolean = false;
  public buttonName: any = 'Show';

  chartData7;

  toggle() {


    
    // row=this.a
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  showHourlyGraph(element) {
    // console.log(element)
    this.GraphData = []
    this.Data=[]
    // this.chartData7.barChartLabels.push(`H1`)
    this.GraphData.push(element[`h_1`])
    
    this.Data.push(element[`h_1`])

    // this.chartData7.barChartLabels.push(`H2`)
    // this.GraphData.push(element[`h_2`])
    this.GraphData.push[`h_2`]
    // this.GraphData.push(element[`h_6`])

    // this.chartData7.barChartLabels.push(`H3`)
    this.GraphData.push(element[`h_3`])
    // this.chartData7.barChartLabels.push(`H4`)
    this.GraphData.push(element[`h_4`])
    // this.chartData7.barChartLabels.push(`H5`)
    this.GraphData.push(element[`h_5`])
    // this.chartData7.barChartLabels.push(`H6`)
    this.GraphData.push(element[`h_6`])
    // this.chartData7.barChartLabels.push(`H7`)
    this.GraphData.push(element[`h_7`])
    // this.chartData7.barChartLabels.push(`H8`)
    this.GraphData.push(element[`h_8`])
    // this.chartData7.barChartLabels.push(`H9`)
    this.GraphData.push(element[`h_9`])
    // this.chartData7.barChartLabels.push(`H10`)
    this.GraphData.push(element[`h_10`])
    // this.chartData7.barChartLabels.push(`H11`)
    this.GraphData.push(element[`h_11`])
    // this.chartData7.barChartLabels.push(`H12`)
    this.GraphData.push(element[`h_12`])
    // this.chartData7.barChartLabels.push(`H13`)
    this.GraphData.push(element[`h_13`])
    // this.chartData7.barChartLabels.push(`H14`)
    this.GraphData.push(element[`h_14`])
    // this.chartData7.barChartLabels.push(`H15`)
    this.GraphData.push(element[`h_15`])
    // this.chartData7.barChartLabels.push(`H16`)
    this.GraphData.push(element[`h_16`])
    // this.chartData7.barChartLabels.push(`H17`)
    this.GraphData.push(element[`h_17`])
    // this.chartData7.barChartLabels.push(`H18`)
    this.GraphData.push(element[`h_18`])
    // this.chartData7.barChartLabels.push(`H19`)
    this.GraphData.push(element[`h_19`])
    // this.chartData7.barChartLabels.push(`H20`)
    this.GraphData.push(element[`h_20`])
    // this.chartData7.barChartLabels.push(`H21`)
    this.GraphData.push(element[`h_21`])
    // this.chartData7.barChartLabels.push(`H22`)
    this.GraphData.push(element[`h_22`])
    // this.chartData7.barChartLabels.push(`H23`)
    this.GraphData.push(element[`h_23`])
    // this.chartData7.barChartLabels.push(`H24`)
    this.GraphData.push(element[`h_24`])

    console.log(this.GraphData)

    // console.log(this.chartData7.barChartData)

    let ctx = 'myChart';
    new Chart(ctx, {
      type: 'line',
      
      data: {
        labels: ['H1','H2','H3','H4','H5','H6','H7','H8','H9','H10','H11','H12','H13','H14','H15','H16','H17','H18','H19','H20','H21','H22','H23','H24'],
        datasets:[{
          label: 'Hourly Values',
          data: this.GraphData,
        
      
          
          // fill: 'none',
          backgroundColor: 'rgba(255, 99, 132, 1)',
          borderColor: 'rgba(255, 99, 132, 1)',
          // backgroundColor: "rgba(63, 81, 181, 1)",
            // borderColor: "rgba(63, 81, 181, 1)",
          borderWidth: 2
        },
//         {
// data:this.Data,
//    backgroundColor: 'rgba(255, 99, 132, 1)',
//           borderColor: 'rgba(255, 99, 132, 1)',
//         },
        
      ],
      

      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    //  this.chartData7 = {
    //     tempDataContainer: [],
    //     barChartOptions: {
    //       title: {
    //         display: true,
    //         text: 'Imbalance $/MWh',
    //         fontColor: 'black',
    //       },
    //       elements: {
    //         line: {
    //           tension: 0, // disables bezier curves
    //         }
    //       },
    //       scales: {
    //         xAxes: [{
    //           // stacked: true,
    //           ticks: {
    //             fontColor: 'black',
    //             // min: 'Feb',
    //             beginAtZero: false,
    //           },
    //           gridLines: {
    //             color: '#dbd9d9'
    //           }
    //         }],
    //         yAxes: [{
    //           // stacked: true,
    //           ticks: {
    //             fontColor: 'black',
    //             min: 0,
    //             beginAtZero: true,

    //           },
    //           gridLines: {
    //             color: '#dbd9d9'
    //           },
    //           scaleLabel: {
    //             display: true,
    //             // labelString: 'Scale Label',
    //             fontColor: 'black',
    //           }
    //         }]
    //       },
    //       scaleShowVerticalLines: false,
    //       responsive: true,
    //       animationEnabled: true,
    //       animationDuration: 2000,
    //       legend: {
    //         display: false
    //       },
    //       tooltips: {
    //         displayColors: false,
    //         bodyFontSize: 20,
    //       }
    //     },
    //     barChartColors: [
    //       {
    //         // backgroundColor: "rgba(63, 81, 181, 1)",
    //         borderColor: "rgba(63, 81, 181, 1)",
    //         pointBackgroundColor: 'rgba(63, 81, 181, 0.4)',
    //         pointBorderColor: 'rgba(63, 81, 181, 0.5)',
    //         pointHoverBackgroundColor: 'rgba(63, 81, 181, 1)',
    //         pointHoverBorderColor: 'rgba(63, 81, 181, 1)'
    //       },
    //     ],
    //     barChartLabels: [],
    //     barChartType: 'line',
    //     barChartData: [
    //       {
    //         data: this.GraphData,
    //         backgroundColor: "rgba(0, 0, 0,0)",
    //         label: 'Line Graph'
    //       }
    //     ]
    //   }
  }
  toggle1(element) {
    console.log(element)
    this.showHourlyGraph(element)
    // this.showHourly()
    // this.getLineGraph1()
    this.show1 = !this.show1;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show1)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  // hourlyValue
  // obj = {
  //   from_date: '2019-6-12',
  //   to_date: '2019-6-15',
  //   granularity:''
  // }
  // data
  obj = {
    // loadtype: [],
    // category: [],
    // year: [],
    // month: [],
    // granularity: [],
    // loadzone: '',
    // weatherzonelist: '',
    // customerprofile: '',
    // loadzoneloadprofile: ''
    endyear: null,
    startyear: null,
    startmonth: null,
    endmonth: null
  }

  hourlyValue = {
    from_date: null,
    to_date: null,
    granularity: null
  }

  panelOpenState: boolean = false;



  deleteMsg() {

    delete this.chartData7.barChartData[0]['data'];
  }




  togglePanel() {
    this.panelOpenState = !this.panelOpenState
    let dialogRef = this.dialog.open(DialogWhatIfComponent, {
      // data: this.obj,
      width: "1200px",
      // height: "70vh"
    })
    dialogRef.afterClosed().subscribe(result => {
      // this.clearObject()
    })
  }
  value
  year1
  year2

  LoadtypeStatus: boolean = false
  CategoryStatus: boolean = false

  ScheduleForm = new FormGroup({
    granularity: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
    dateEnd: new FormControl("", Validators.required),
    // date : new FormControl("", Validators.required),
    // dateEnd : new FormControl("", Validators.required),
  })


  hourly = new FormGroup({
    granularity: new FormControl("", Validators.required),
    from_date: new FormControl("", Validators.required),
    to_date: new FormControl("", Validators.required),
  })

  constructor(public dialog: MatDialog, private service: ApiService, private util: UtilityService) { }

  ngOnInit() {
    // console.log(this.obj.month)
    // console.log(this.obj.year)
    this.showHourly()
    // this.getLineGraph1()

  }
  // getLineGraph1() {
  //   // i=this.hourlyValue

  //   this.service.hourlyLoadzone(this.hourlyValue).subscribe(res => {
  //     if (res['status'] == true) {
  //       // delete res['status']
  //       console.log(res)
  //       console.log('11', this.hourlyValue)
  //       console.log(res['message'][0])
  //       let message = res['message'][0]
  //       console.log(message)

  //       this.chartData7.barChartData[0]['data'] = []

  //       this.chartData7.barChartLabels.push(`H1`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_1`])

  //       this.chartData7.barChartLabels.push(`H2`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_2`])
  //       // delete this.chartData7.barChartData[0]['data'].push[`h_2`]

  //       this.chartData7.barChartLabels.push(`H3`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_3`])
  //       this.chartData7.barChartLabels.push(`H4`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_4`])
  //       this.chartData7.barChartLabels.push(`H5`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_5`])
  //       this.chartData7.barChartLabels.push(`H6`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_6`])
  //       this.chartData7.barChartLabels.push(`H7`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_7`])
  //       this.chartData7.barChartLabels.push(`H8`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_8`])
  //       this.chartData7.barChartLabels.push(`H9`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_9`])
  //       this.chartData7.barChartLabels.push(`H10`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_10`])
  //       this.chartData7.barChartLabels.push(`H11`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_11`])
  //       this.chartData7.barChartLabels.push(`H12`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_12`])
  //       this.chartData7.barChartLabels.push(`H13`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_13`])
  //       this.chartData7.barChartLabels.push(`H14`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_14`])
  //       this.chartData7.barChartLabels.push(`H15`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_15`])
  //       this.chartData7.barChartLabels.push(`H16`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_16`])
  //       this.chartData7.barChartLabels.push(`H17`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_17`])
  //       this.chartData7.barChartLabels.push(`H18`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_18`])
  //       this.chartData7.barChartLabels.push(`H19`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_19`])
  //       this.chartData7.barChartLabels.push(`H20`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_20`])
  //       this.chartData7.barChartLabels.push(`H21`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_21`])
  //       this.chartData7.barChartLabels.push(`H22`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_22`])
  //       this.chartData7.barChartLabels.push(`H23`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_23`])
  //       this.chartData7.barChartLabels.push(`H24`)
  //       this.chartData7.barChartData[0]['data'].push(message[`h_24`])



  //       // delete message['data']
  //       // delete this.data.month
  //       // delete message['']
  //       // delete this.chartData7.barChartData[0]['data']
  //       //   delete message['h_2']
  //       //  delete message['h_3']
  //       //  delete message['h_4']
  //       //  delete message['h_5']





  //       for (var propName in this.hourlyValue) {
  //         // if (this.chartData7.barChartData[0]['data'][propName] === "" || this.chartData7.barChartData[0]['data'][propName] === undefined) {
  //         // delete this.hourlyValue;
  //         // }
  //       }


  //     }



  //   })
  //   // delete this.chartData7.barChartData[0]['data'].push

  // }

  showHourly() {

    console.log(this.obj)
    this.service.hourlyLoadzone(this.hourlyValue).subscribe(res => {
      // this.service.imbalance1().subscribe(res=>{
      // console.log(res)
      if (res['status'] == true) {
        // if (res['Status'] == true) {
        // this.demoDataSource.data = res['data']
        this.demoDataSource.data = res['message']
        this.showHourlyGraph(res['message'][0])
        this.loading = false
        console.log(res)
      }
    })
  }

  onSubmitHourly() {
    // if (this.hourly.valid) {
    this.hourlyValue.from_date = this.util.datePatternYMD(this.hourly.controls.from_date.value)
    this.hourlyValue.to_date = this.util.datePatternYMD(this.hourly.controls.to_date.value)
    this.hourlyValue.granularity = this.hourly.controls.granularity.value
    // this.hourlyDialog()
    this.showHourly()
    // this.getLineGraph1()
    // }
  }
  // chosenYearHandler(normalizedYear: Moment) {
  //   this.date.setValue(moment())
  //   let ctrlValue = this.date.value;
  //   ctrlValue.year(normalizedYear.year());
  //   this.date.setValue(ctrlValue.year(normalizedYear.year()));
  //   this.year1 = normalizedYear.year()
  // }
  // mon1
  // chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
  //   let ctrlValue = this.date.value;
  //   ctrlValue.month(normalizedMonth.month().toString());
  //   this.date.setValue(ctrlValue);
  //   datepicker.close()
  //   this.mon1 = moment().month(normalizedMonth.month().toString()).format("MMM")
  //   console.log(moment().month(normalizedMonth.month().toString()).format("MMM"))
  //   // this.ScheduleForm.controls.date.value=
  // }
  // chosenYearHandler2(normalizedYear: Moment) {
  //   this.dateEnd.setValue(moment())
  //   const ctrlValue = this.dateEnd.value;
  //   ctrlValue.year(normalizedYear.year());
  //   this.dateEnd.setValue(ctrlValue);
  //   this.year2 = normalizedYear.year()
  // }
  // mon2
  // chosenMonthHandler2(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
  //   const ctrlValue = this.dateEnd.value;
  //   ctrlValue.month(normalizedMonth.month().toString());
  //   this.dateEnd.setValue(ctrlValue);
  //   datepicker.close();
  //   this.mon2 = moment().month(normalizedMonth.month().toString()).format("MMM")
  // }
  // previousYear = [
  //   { value: 2018, viewValue: '2018' },
  //   { value: 2019, viewValue: '2019' }
  // ]


  // nextYear = [
  //   { value: 2018, viewValue: '2018' },
  //   { value: 2019, viewValue: '2019' }
  // ]

  // ]
  granularityValue = [
    // { value: 'wrong', viewValue: 'ERCOT Total' },
    // { value: 'wrong', viewValue: 'Customer Category' },
    { value: 'loadzone-month-get', viewValue: 'Load Zone' },
    // { value: 'wrong', viewValue: 'Load Zone/ Category' },
    // { value: 'weatherzone-get-month-get', viewValue: 'Weather Zone' },
    // { value: 'customer-profile-month-get', viewValue: 'Customer Load Profile' },
    // { value: 'loadzone-loadprofile-month-get', viewValue: 'Load Zone / Load Profile' },
    // { value: 'weatherzone-loadprofile-month-get', viewValue: 'Weather Zone / Load Profile' },
  ]
  hourlyGranularity = [
    // { value: 'loadzone-hourly-get', viewValue: 'Load Zone' },
    // { value: 'weatherzone-hourly-get', viewValue: 'Weather Zone' },
    { value: 'Machine-Learning', viewValue: 'Machine Learning' },
    { value: 'Hybrid', viewValue: 'Hybrid' },
    { value: 'Statistical', viewValue: 'Statistical' },
    // Machine Learning
    // Hybrid
  ]
  summarize = new FormControl("")
  summarization = [
    { value: 'Peak', viewValue: 'Peak' },
    { value: '7x16', viewValue: '7x16' },
    { value: '5x16', viewValue: '5x16' },
    { value: 'Average', viewValue: 'Average' },
    { value: 'Maximum', viewValue: 'Maximum' },
    { value: 'Off-Peak', viewValue: 'Off-Peak' },
    { value: '7x8', viewValue: '7x8' },
    { value: '2x16', viewValue: '2x16' },
  ]

  // demoDisplayedColumns: string[] = ['1', '2', '3', '4', '5', '6', '7', '8']
  demoDisplayedColumns: string[] = ['222', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '18', '20', '21', '22', '23', '24', '25', '26', '27', 'total']
  demoDataSource = new MatTableDataSource()

  loading = true

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
  // onSubmit(loadzone, weatherzone, profile) {

  onSubmit() {
    // console.log(this.ScheduleForm.controls.date.value)
    // console.log(this.ScheduleForm.controls.dateEnd.value)
    // let date1 = this.util.datePatternYMD(this.ScheduleForm.controls.date.value)
    // let date2 = this.util.datePatternYMD(this.ScheduleForm.controls.dateEnd.value)
    // for (let i = 0; i < date1.length; i++) {
    // console.log(date1)
    this.ScheduleForm.controls.granularity.setValue("loadzone-month-get")
    this.obj.startyear = this.util.numericDatePatternY(this.ScheduleForm.controls.date.value)
    this.obj.endyear = this.util.numericDatePatternY(this.ScheduleForm.controls.dateEnd.value)
    this.obj.startmonth = this.util.numericDatePatternM(this.ScheduleForm.controls.date.value)
    this.obj.endmonth = this.util.numericDatePatternM(this.ScheduleForm.controls.dateEnd.value)
    console.log(this.obj)
    // // }
    // console.log(date1)
    // console.log(date2)
    // if (this.obj.category.length == 3) {
    //   this.util.openFailureSnackBar(`Uncategorized and other Customer categories can not be choosen at the same time.`)
    // } else if (this.obj.loadtype.length == 0) {
    //   this.LoadtypeStatus = true;
    // } else if (this.obj.category.length == 0) {
    //   this.CategoryStatus = true
    // } else {
    //   this.LoadtypeStatus = false
    //   this.CategoryStatus = false
    //   this.obj.loadzone = loadzone
    //   this.obj.weatherzonelist = weatherzone
    //   this.obj.customerprofile = profile

    //   if (this.ScheduleForm.controls.granularity.value === "loadzone-loadprofile-month-get") {
    //     if (loadzone != null && profile != null) {
    //       this.obj.loadzoneloadprofile = loadzone + '/' + profile
    //     }
    //   }

    if (this.ScheduleForm.valid) {
      // this.data = this.obj

      // this.Month()
      // this.obj.granularity.push(this.ScheduleForm.controls.granularity.value)
      // this.mergeAllValue()
      // this.obj.month.push(this.monthRange)
      // console.log(this.obj)
      // console.log(this.obj.month)
      this.openDialog()
    }
  }
  start
  end
  monthRange

  valueLosses(event) {
  }
  Month() { }

  valueSmoothedLooses(event) {
    // if (event.checked == true) {
    //   this.obj.loadtype.push('Forecast Smoothed With Losses')
    // }
    // else {
    //   for (let i = 0; i < this.obj.loadtype.length; i++) {
    //     if (this.obj.loadtype[i] == 'Forecast Smoothed With Losses') {
    //       this.obj.loadtype.splice(i, 1);
    //     }
    //   }
    // }
  }
  valueMinimumLosses(event) {
    // if (event.checked == true) {
    //   this.obj.loadtype.push('Forecast Minimum With Losses')
    // }
    // else {

    //   for (let i = 0; i < this.obj.loadtype.length; i++) {
    //     if (this.obj.loadtype[i] == 'Forecast Minimum With Losses') {
    //       this.obj.loadtype.splice(i, 1);
    //     }
    //   }
    // }
  }


  valueMaximumLosses(event) {
    // if (event.checked == true) {
    //   this.obj.loadtype.push('Forecast Maximum With Losses')
    // }
    // else {
    //   for (let i = 0; i < this.obj.loadtype.length; i++) {
    //     if (this.obj.loadtype[i] == 'Forecast Maximum With Losses') {
    //       this.obj.loadtype.splice(i, 1);
    //     }
    //   }
    // }
  }

  valueBackcastLosses(event) {
    // if (event.checked == true) {
    //   this.obj.loadtype.push('Backcast With Losses')
    // }
    // else {
    //   for (let i = 0; i < this.obj.loadtype.length; i++) {
    //     if (this.obj.loadtype[i] == 'Backcast With Losses') {
    //       this.obj.loadtype.splice(i, 1);
    //     }
    //   }
    // }
  }

  valueBackcastSmoothLosses(event) {
    // if (event.checked == true) {
    //   this.obj.loadtype.push('Backcast Smoth with losses')
    // }
    // else {
    //   for (let i = 0; i < this.obj.loadtype.length; i++) {
    //     if (this.obj.loadtype[i] == 'Backcast Smoth with losses') {
    //       this.obj.loadtype.splice(i, 1);
    //     }
    //   }
    // }
  }

  valueBackcastMinimum(event) {

  }

  valueBackcastMaximum(event) {
  }

  valueExtractUnadjusted(event) {
  }

  valueExtracts(event) {
  }

  //categories
  valueUncategorized(event) {
    //   if (event.checked == true) {
    //     this.obj.category.push('Uncategorized')
    //   }
    //   else {
    //     for (let i = 0; i < this.obj.category.length; i++) {
    //       if (this.obj.category[i] == 'Uncategorized') {
    //         this.obj.category.splice(i, 1);
    //       }
    //     }
    //   }
  }

  valueCategoryFixed(event) {
    // if (event.checked == true) {
    //   this.obj.category.push('Fixed')
    // }
    // else {
    //   for (let i = 0; i < this.obj.category.length; i++) {
    //     if (this.obj.category[i] == 'Fixed') {
    //       this.obj.category.splice(i, 1);
    //     }
    //   }
    // }
  }

  valueCategoryVariable(event) {
    // if (event.checked == true) {
    //   this.obj.category.push('Variable')
    // }
    // else {
    //   for (let i = 0; i < this.obj.category.length; i++) {
    //     if (this.obj.category[i] == 'Variable') {
    //       this.obj.category.splice(i, 1);
    //     }
    //   }
    // }
  }

  clearObject() {
    // this.obj.granularity = []
    // this.obj.month = []
    // this.obj.year = []
    // this.obj.loadzone = ''
    // this.obj.customerprofile = ''
    // this.obj.weatherzonelist = ''
  }

  // mergeAllValue() {
  //   this.openDialog()
  // }
  openDialog() {
    if (this.ScheduleForm.controls.granularity.value == "customer-profile-month-get") {
      let dialogRef = this.dialog.open(DialogForecasterCustomerProfileComponent, {
        data: this.obj,
        width: "1200px",
        // height: "60vh"
      })
      dialogRef.afterClosed().subscribe(result => {
        this.clearObject()
      })
    } else if (this.ScheduleForm.controls.granularity.value === "loadzone-month-get") {
      let dialogRef = this.dialog.open(DialogForecasterToolComponent, {
        data: this.obj,
        width: "1200px",
        // height: "50vh"
      })
      dialogRef.afterClosed().subscribe(result => {
        this.clearObject()
      })
    } else if (this.ScheduleForm.controls.granularity.value === "weatherzone-get-month-get") {
      let dialogRef = this.dialog.open(DialogForcasterWeatherZoneComponent, {
        data: this.obj,
        width: "1200px",
        // height: "70vh"
      })
      dialogRef.afterClosed().subscribe(result => {
        this.clearObject()
      })
    } else if (this.ScheduleForm.controls.granularity.value === "loadzone-loadprofile-month-get") {
      // console.log(this.obj)
      // console.log(this.obj.granularity)
      let dialogRef = this.dialog.open(DialogLoadProfileComponent, {
        data: this.obj,
        width: "1200px",
        // height: "70vh"
      })
      dialogRef.afterClosed().subscribe(result => {
        this.clearObject()
      })
    } else if (this.ScheduleForm.controls.granularity.value === "weatherzone-loadprofile-month-get") {
      // console.log(this.obj)
      // console.log(this.obj.granularity)
      let dialogRef = this.dialog.open(DialogWeatherzoneProfileComponent, {
        data: this.obj,
        width: "1200px",
        // height: "70vh"
      })
      dialogRef.afterClosed().subscribe(result => {
        this.clearObject()
      })
    }
  }

  hourlyDialog() {
    let dialogRef = this.dialog.open(DialogHourlyComponent, {
      data: this.hourlyValue,
      width: "1200px",

      // height: "60vh"
    })
    dialogRef.afterClosed().subscribe(result => {
      this.clearObject()
    })
  }
  endDate = new Date(2020, 5, 1);
  current = new Date(2019, 4, 1);

  endDateHour = new Date(2019, 5, 22);
  currentHour = new Date(2019, 5, 12);
  // checkvalue(val) {
  //   console.log(val)
  //   console.log(this.obj['month'])

  //   // this.endDate = moment("30-04-2020", "DD-MM-YYYY")
  //   // this.endDate = moment(val, "DD-MM-YYYY").add(1, 'year').month('dec');
  //   // this.endDate = moment(val, "DD-MM-YYYY").add(1, 'year')
  // }
}
