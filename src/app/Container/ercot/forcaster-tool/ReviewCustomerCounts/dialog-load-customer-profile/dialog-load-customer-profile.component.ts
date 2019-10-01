import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../../../../../services/api.service';

@Component({
  selector: 'app-dialog-load-customer-profile',
  templateUrl: './dialog-load-customer-profile.component.html',
  styleUrls: ['./dialog-load-customer-profile.component.scss', '../../../../table.scss']
})
export class DialogLoadCustomerProfileComponent implements OnInit {
  loading = true
  usageDisplayedColumns: string[] = ['1', '14', '15', '18']
  DataSource = new MatTableDataSource()

  DisplayedColumns2: string[] = ['1', '14', '15', '18']
  DataSource2 = new MatTableDataSource()

  monthValue = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  status1 = true
  status2 = false

  year = []
  constructor(private service: ApiService, @Inject(MAT_DIALOG_DATA) public data: any) { }
  grad
  ngOnInit() {
    this.year.push(this.data.year[0])
    this.year.push(this.data.year[1])


    if (this.data.year[0] === this.data.year[1]) {
      this.getReviewForecast()
      for (let i = 0; i < this.data.month[0].length; i++) {
        this.usageDisplayedColumns.push(this.data.month[0][i])
      }
    } else if (this.data.year[0] !== this.data.year[1]) {
      this.status2 = true
      // this.year = this.data.year
      this.grad = this.data.granularity
      // console.log(this.grad)
      this.getReviewForecast()
      this.getReviewForecast2()
      for (let i = 0; i < 12; i++) {
        if (this.monthValue[i] == this.data.month[0][0]) {
          let monthRange = this.monthValue.slice(this.monthValue.indexOf(this.monthValue[i]), this.monthValue.indexOf('Dec') + 1)
          for (let j = 0; j < monthRange.length; j++) {
            this.usageDisplayedColumns.push(monthRange[j])
          }
        }
      }
      for (let i = 0; i < 12; i++) {
        let endvalue = this.data.month[0].length - 1
        if (this.monthValue[i] == this.data.month[0][endvalue]) {
          let monthRange = this.monthValue.slice(this.monthValue.indexOf('Jan'), (this.monthValue.indexOf(this.data.month[0][endvalue]) + 1))
          for (let j = 0; j < monthRange.length; j++) {
            this.DisplayedColumns2.push(monthRange[j])
          }
        }
      }

    }
    delete this.data.month
  }
  getReviewForecast() {
    console.log(this.data.year)
    this.data.year.length = 0
    this.data.year.push(this.year[0])
    this.service.ForecastCount(this.data.granularity, this.data).subscribe(res => {
      this.DataSource.data = res['message']
      this.loading = false
    })
    this.data.year.length = 0
  }
  getReviewForecast2() {
    this.data.year.length = 0
    this.data.year.push(this.year[1])
    this.service.ForecastCount(this.grad, this.data).subscribe(res => {
      this.DataSource2.data = res['message']
      this.loading = false
    })
    this.data.year.length = 0
  }
}
