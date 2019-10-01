import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatPaginator } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogSelectionReviewAmsComponent } from '../dialog-selection-review-ams/dialog-selection-review-ams.component';
import { UtilityService } from '../../../../../services/utility.service';
import { ApiService } from '../../../../../services/api.service';

@Component({
  selector: 'app-review-ams-interval',
  templateUrl: './review-ams-interval.component.html',
  styleUrls: ['./review-ams-interval.component.scss', '../../../../table.scss', '../../../../table-animation.scss', '../../../../button.scss']
})
export class ReviewAmsIntervalComponent implements OnInit {

  DisplayedColumns: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  DataSource = new MatTableDataSource()

  // constructor(public dialog: MatDialog) { }
  // ngOnInit() {
  // }
  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.openSelectionDialog();
  //   });
  // }
  // openSelectionDialog(): void {
  //   const dialogRef = this.dialog.open(DialogSelectionReviewAmsComponent, {});
  // }

  @ViewChild(MatPaginator) Paginator: MatPaginator
  ngOnInit() {
    this.onChanges()
  }
  // date1 =this.util.datePatternYMD(new Date()) 
  // date2 = this.util.datePatternYMD(new Date())
  date1
  date2
  date1Validate
  date2Validate
  loading = true

  constructor(public util: UtilityService, private service: ApiService) { }

  onChanges(): void {
    // this.obj = this.Form.value
    // if (this.obj != null) {

    this.setPaginator()
    this.getAmsInterval(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    this.Paginator.page.subscribe(() => {
      this.getAmsInterval(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    })
  }
  setPaginator() {
    this.Paginator.pageIndex = 0
    this.Paginator.pageSize = 20
  }
  getAmsInterval(lower, upper) {
    let obj = {
      start_row: lower,
      end_row: upper
    }
    if (this.date1 != null) {
      obj['date_from'] = this.date1,
        this.loading = true
      this.DataSource.data = null
      // console.log("if")
    } else {
      delete obj['date_from']
    }
    if (this.date2 != null) {
      obj['date_to'] = this.date2
    } else {
      delete obj['date_to']
    }
    this.service.getReviewAmsInterval(obj).subscribe(res => {
      if (res['status'] == true) {
        this.loading = false
        this.Paginator.length = res.total_count
        this.DataSource.data = res['message']
      }
      else {
        this.loading = false
        this.util.openFailureSnackBar('Could not fetch Ams interval data, please try again.')
      }
    }, err => {
      this.util.openFailureSnackBar(err)
    })
  }
  applyFilter1(filterValue: string) {
    this.date1Validate = filterValue
    this.date1 = this.util.datePatternYMD(filterValue)
    this.setPaginator()
    this.getAmsInterval(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    this.Paginator.page.subscribe(() => {
      this.getAmsInterval(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    })
  }
  applyFilter2(filterValue: string) {
    this.date2Validate = filterValue
    this.date2 = this.util.datePatternYMD(filterValue)
    this.setPaginator()
    this.getAmsInterval(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    this.Paginator.page.subscribe(() => {
      this.getAmsInterval(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    })
  }

}
