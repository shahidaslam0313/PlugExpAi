import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-hourlys',
  templateUrl: './hourlys.component.html',
  styleUrls: ['./hourlys.component.scss']
})
export class HourlysComponent implements OnInit {

  hourlyValue = {
    start_date: null,
    end_date: null,
    // granularity: null
  }
  testhourlyValue = { start_date: "2019-3-3", end_date: "2019-3-9" }
  hourly = new FormGroup({
    // granularity: new FormControl("", Validators.required),
    start_date: new FormControl("", Validators.required),
    end_date: new FormControl("", Validators.required),
  })
  hourlyGranularity = [
    { value: 'loadzone-hourly-get', viewValue: 'Load Zone' },
    { value: 'weatherzone-hourly-get', viewValue: 'Weather Zone' },
  ]

  DisplayedColumns1: string[] = [ 'total', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27']
  DataSource1 = new MatTableDataSource()

  DisplayedColumns2: string[] = [ 'total', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27']
  DataSource2 = new MatTableDataSource()

  DisplayedColumns3: string[] = [ 'total', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27']
  DataSource3 = new MatTableDataSource()

  DisplayedColumns4: string[] = [ 'total', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27']
  DataSource4 = new MatTableDataSource()

  DisplayedColumns5: string[] = [ 'total', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27']
  DataSource5 = new MatTableDataSource()

  DisplayedColumns6: string[] = [ 'total', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27']
  DataSource6 = new MatTableDataSource()


  DisplayedColumns7: string[] = [ 'total', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27']
  DataSource7 = new MatTableDataSource()

  Form = new FormGroup({
    timezone: new FormControl("", Validators.required),
    to: new FormControl("", Validators.required),
    from: new FormControl("", Validators.required),
  })

  total = 0

  date

  date1
  date2
  date3
  date4
  date5
  date6
  date7

  day1 = false
  day2 = false
  day3 = false
  day4 = false
  day5 = false
  day6 = false
  day7 = false

  obj = {}


  differenceActive = false
  constructor(private service: ApiService, private util: UtilityService) { }

  ngOnInit() {

    // this.service.weatherZoneForecast(this.obj = { timezone: 'Atlantic Standard Time', to: '2019-3-26' }).subscribe(res => {
    //   console.log(res)
    //   this.day1 = true
    //   this.date1 = this.obj['to']

    //   this.obj['timezone'] = ''
    //   this.obj['to'] = ''
    //   if (res['status'] === true) {
    //     console.log(res['status'])
    //     this.DataSource1.data = res['message']
    //   } else {
    //     if (res["status"] === false) {
    //       this.error1 = "No data found"
    //     }
    //   }
    // })
    this.demo()


  }
  setDates = []
  demo() {
    console.log(this.testhourlyValue)
    this.service.hourlyLoadzone1(this.testhourlyValue).subscribe(res => {
      // this.service.imbalance1().subscribe(res=>{
      console.log(res['message'])

      this.day1 = true

      this.day2 = true
      this.day3 = true
      this.day4 = true
      this.day5 = true
      this.day6 = true
      this.day7 = true



      // this.date1 = date

      this.date1 = this.hourlyValue['start_date']
      this.date2 = this.hourlyValue['start_date']
      this.date3 = this.hourlyValue['start_date']
      this.date4 = this.hourlyValue['start_date']
      this.date5 = this.hourlyValue['start_date']
      this.date6 = this.hourlyValue['start_date']
      this.date7 = this.hourlyValue['end_date']

      // this.hourlyValue['granularity']=''
      // this.hourlyValue['end_date']=''

      if (res['status'] == true) {

        console.log(res['status'])
        this.DataSource1.data = res['message'].filter(res => res['predicted_date'] == "2019-03-03")
        this.DataSource2.data = res['message'].filter(res => res['predicted_date'] == "2019-03-04")

        this.setDates = res['message']

        // this.DataSource2.data = res['message']
        // this.DataSource3.data = res['message']
        // this.DataSource4.data = res['message']
        // this.DataSource5.data = res['message']
        // this.DataSource6.data = res['message']
        // this.DataSource7.data = res['message']

        // }
      }
      //   else {
      //         if (res["status"] === false) {
      //           this.error1 = "No data found"
      //         }
      //   // this.loading = false
      //   console.log(res)

      // }
    })
  }


  // datatable
  DataSource
  getZoneActual(i, date) {

    this.error1 = ''
    this.error2 = ''
    this.error3 = ''
    this.error4 = ''
    this.error5 = ''
    this.error6 = ''
    this.error7 = ''

    this.DataSource1.data = null //just to override the ngonit work

    this.service.hourlyLoadzone1(this.hourlyValue).subscribe(res => {
      console.log(res)
      console.log(i)
      if (i === 0) {
        this.day1 = true
        // this.date1 = date
        this.date1 = this.hourlyValue['start_date']
        if (res['status'] === true) {
          console.log(res['status'])
          this.DataSource1.data = res['message']
        } else {
          if (res["status"] === false) {
            this.error1 = "No data found"
          }
        }
      } else if (i === 1) {
        this.day2 = true
        this.date2 = this.hourlyValue['start_date']
        // this.date2 = date
        // this.DataSource2.data = res['message']
        if (res['status'] === true) {
          console.log(res['status'])
          this.DataSource2.data = res['message']
        } else {
          if (res["status"] === false) {
            this.error2 = "No data found"
          }
        }
      }
      else if (i === 2) {
        this.day3 = true
        this.date3 = date
        // this.DataSource3.data = res['message']
        if (res['status'] === true) {
          console.log(res['status'])
          this.DataSource3.data = res['message']
        } else {
          if (res["status"] === false) {
            this.error3 = "No data found"
          }
        }
      }
      else if (i === 3) {
        this.day4 = true
        this.date4 = date
        // this.DataSource4.data = res['message']
        if (res['status'] === true) {
          console.log(res['status'])
          this.DataSource4.data = res['message']
        } else {
          if (res["status"] === false) {
            this.error4 = "No data found"
          }
        }
      }
      else if (i === 4) {
        this.day5 = true
        this.date5 = date
        // this.DataSource5.data = res['message']
        if (res['status'] === true) {
          console.log(res['status'])
          this.DataSource5.data = res['message']
        } else {
          if (res["status"] === false) {
            this.error5 = "No data found"
          }
        }
      }
      else if (i === 5) {
        this.day6 = true
        this.date6 = date
        // this.DataSource6.data = res['message']
        if (res['status'] === true) {
          console.log(res['status'])
          this.DataSource6.data = res['message']
        } else {
          if (res["status"] === false) {
            this.error6 = "No data found"
          }
        }
      } else if (i === 6) {
        this.day7 = true
        this.date7 = date
        // this.DataSource7.data = res['message']
        if (res['status'] === true) {
          console.log(res['status'])
          this.DataSource7.data = res['message']
        } else {
          if (res["status"] === false) {
            this.error7 = "No data found"
          }
        }
      }
      // return res['message']
      // this.data = res['message']

      // for (let t = 0; t < 8; t++) {
      //   for (let i = 0; i < 24; i++) {
      //     this.total = res['message'][t]['h_' + (i + 1)] + this.total
      //   }
      // }
      // console.log(this.total)
    })
  }
  error1
  error2
  error3
  error4
  error5
  error6
  error7

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
  datePatternYMD(datee) { // YYYY-MM-DD
    if (this.completeChecker(datee)) {
      let date = new Date(datee)

      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    } else return null
  }
  completeChecker(value) {
    return value != null && value != undefined && value != "" ? true : false
  }
  difference
  to
  from
  month1
  month2
  differnce(datee1, datee2) {
    if (this.completeChecker(datee1) && this.completeChecker(datee2)) {
      this.to = new Date(datee1)
      this.from = new Date(datee2)

      if (`${this.to.getFullYear() === this.from.getFullYear()}`) {
        this.month1 = this.to.getMonth() + 1 //add one because getmonth function return value of month 1 less
        this.month2 = this.from.getMonth() + 1

        if (this.month1 === this.month2) {
          this.difference = `${this.from.getDate() - this.to.getDate()}`
        }
        else if (this.month1 + 1 == this.month2) {
          if (this.month1 === 1 || this.month1 === 3 || this.month1 === 5 || this.month1 === 7 || this.month1 === 8 || this.month1 === 10 || this.month1 === 12) {
            this.difference = (31 - this.to.getDate()) + this.from.getDate()
          } else if (this.month1 === 4 || this.month1 === 6 || this.month1 === 9 || this.month1 === 11) {
            this.difference = (30 - this.to.getDate()) + this.from.getDate()
          } else if (this.month1 === 2) {
            this.difference = (28 - this.to.getDate()) + this.from.getDate()
          }
        }
      }
    }
  }

  rough = 0

  onSubmit() {
    this.rough = 0
    this.hourlyValue.start_date = this.util.datePatternYMD(this.hourly.controls.start_date.value)
    this.hourlyValue.end_date = this.util.datePatternYMD(this.hourly.controls.end_date.value)
    // this.hourlyValue.granularity = this.hourly.controls.granularity.value
    this.demo()
    this.differenceActive = false

    // this.obj = this.Form.value
    this.hourlyValue = this.hourly.value

    // this.obj['to'] = this.datePatternYMD(this.Form.controls.to.value)
    // this.obj['from'] = this.datePatternYMD(this.Form.controls.from.value)
    this.hourlyValue['start_date'] = this.datePatternYMD(this.hourly.controls.start_date.value)
    this.hourlyValue['end_date'] = this.datePatternYMD(this.hourly.controls.end_date.value)

    // this.differnce(this.obj['to'], this.obj['from'])

    this.differnce(this.hourly['end_date'], this.hourly['start_date'])
    if (this.difference <= 6) {

      this.date1 = ''
      this.date2 = ''
      this.date3 = ''
      this.date4 = ''
      this.date5 = ''
      this.date6 = ''
      this.date7 = ''

      this.day1 = false
      this.day2 = false
      this.day3 = false
      this.day4 = false
      this.day5 = false
      this.day6 = false
      this.day7 = false

      for (let i = 0; i <= this.difference; i++) {
        // let date = new Date(this.Form.controls.to.value)
        let date = new Date(this.hourly.controls.end_date.value)

        // let date2 = new Date(this.Form.controls.from.value)

        if (`${this.to.getFullYear() === this.from.getFullYear()}`) {
          if (this.month1 === this.month2) {
            // this.obj['to'] = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + i}`
            this.hourly['end_date'] = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + i}`
          }
          else if (this.month1 + 1 == this.month2) {
            if (this.month1 === 1 || this.month1 === 3 || this.month1 === 5 || this.month1 === 7 || this.month1 === 8 || this.month1 === 10 || this.month1 === 12) {
              let condition = `${(date.getDate() + i) < 32}`
              if (condition == 'true') {
                // this.obj['to'] = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + i}`
                this.hourly['end_date'] = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + i}`
              } else {
                if (i % 2 == 0) {
                  console.log(i)
                  // this.obj['to'] = `${date.getFullYear()}-${date.getMonth() + 1 + 1}-${1 + this.rough}`
                  this.hourly['end_date'] = `${date.getFullYear()}-${date.getMonth() + 1 + 1}-${1 + this.rough}`
                  // console.log(this.obj['to'])
                  console.log(this.hourly['end_date'])
                  this.rough = 1 + this.rough
                } else if (i % 2 != 0) {
                  console.log(i)
                  // this.obj['to'] = `${date.getFullYear()}-${date.getMonth() + 1 + 1}-${1 + this.rough}`
                  this.hourly['end_date'] = `${date.getFullYear()}-${date.getMonth() + 1 + 1}-${1 + this.rough}`
                  // console.log(this.obj['to'])
                  console.log(this.hourly['end_date'])
                  this.rough = 1 + this.rough
                }
              }
            } else if (this.month1 === 4 || this.month1 === 6 || this.month1 === 9 || this.month1 === 11) {
              let condition = `${(date.getDate() + i) < 31}`
              if (condition == 'true') {
                this.obj['to'] = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + i}`
              } else {
                if (i % 2 == 0) {
                  console.log(i)
                  this.obj['to'] = `${date.getFullYear()}-${date.getMonth() + 1 + 1}-${1 + this.rough}`
                  console.log(this.obj['to'])
                  this.rough = 1 + this.rough
                } else if (i % 2 != 0) {
                  console.log(i)
                  this.obj['to'] = `${date.getFullYear()}-${date.getMonth() + 1 + 1}-${1 + this.rough}`
                  console.log(this.obj['to'])
                  this.rough = 1 + this.rough
                }
              }
            } else if (this.month1 === 2) {
              let condition = `${(date.getDate() + i) < 29}`
              if (condition == 'true') {
                this.obj['to'] = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + i}`
              } else {
                if (i % 2 == 0) {
                  console.log(i)
                  this.obj['to'] = `${date.getFullYear()}-${date.getMonth() + 1 + 1}-${1 + this.rough}`
                  console.log(this.obj['to'])
                  this.rough = 1 + this.rough
                } else if (i % 2 != 0) {
                  console.log(i)
                  this.obj['to'] = `${date.getFullYear()}-${date.getMonth() + 1 + 1}-${1 + this.rough}`
                  console.log(this.obj['to'])
                  this.rough = 1 + this.rough
                }
              }
            }
          }
        }
        this.getZoneActual(i, this.obj['to'])
      }
    } else {
      this.Form.controls.from.setValue('')
      this.differenceActive = true
    }
  }
}