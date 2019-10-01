import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ApiService } from '../../../../../services/api.service';
import { UtilityService } from '../../../../../services/utility.service';

@Component({
  selector: 'app-esiid-count',
  templateUrl: './esiid-count.component.html',
  styleUrls: ['./esiid-count.component.scss', '../../../../table.scss', '../../../../table-animation.scss', '../../../../button.scss']
})
export class EsiidCountComponent implements OnInit {

  @ViewChild(MatPaginator) Paginator: MatPaginator
  ngOnInit() {
    this.onChanges()
    // this.getEsiidCount()
  }
  // date1 =this.util.datePatternYMD(new Date()) 
  // date2 = this.util.datePatternYMD(new Date())
  date1 = '2019-01-01'
  date2 = '2019-01-30'
  date1Validate
  date2Validate
  loading = true
  DisplayedColumns: string[] = ['1', '2', '3']
  DataSource = new MatTableDataSource()

  constructor(public util: UtilityService, private service: ApiService) { }

  onChanges(): void {
    // this.obj = this.Form.value
    // if (this.obj != null) {

    this.setPaginator()
    // console.log("onchange")
    // this.onSubmit()
    this.getEsiidCount(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    this.Paginator.page.subscribe(() => {
      this.getEsiidCount(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    })
    // } else {
    //   console.log("onchange2")
    //   this.setPaginator()
    //   this.getMeterReads(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    // }
  }
  setPaginator() {
    this.Paginator.pageIndex = 0
    this.Paginator.pageSize = 20
  }
  getEsiidCount(lower, upper) {
    // console.log(lower, upper)
    let obj = {
      date_from: this.date1,
      date_to: this.date2,
      start_row: lower,
      end_row: upper
    }
    this.loading=true
    this.DataSource.data = null
    this.service.getEsiidCount(obj).subscribe(res => {
      // console.log(res)
      if (res['status'] == true) {
        this.loading = false
        this.Paginator.length = res.total_count
        this.DataSource.data = res['message']
      }
      else {
        this.loading = false
        this.util.openFailureSnackBar('Could not fetch Esiid count data, please try again.')
      }
    }, err => {
      this.util.openFailureSnackBar(err)
    })
  }
  applyFilter1(filterValue: string) {
    this.date1Validate = filterValue
    this.date1 = this.util.datePatternYMD(filterValue)
    this.setPaginator()
    this.getEsiidCount(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    this.Paginator.page.subscribe(() => {
      this.getEsiidCount(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    })
  }
  applyFilter2(filterValue: string) {
    this.date2Validate = filterValue
    this.date2 = this.util.datePatternYMD(filterValue)
    this.setPaginator()
    this.getEsiidCount(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    this.Paginator.page.subscribe(() => {
      this.getEsiidCount(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    })
  }
}
