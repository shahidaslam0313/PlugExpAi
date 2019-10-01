import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogSelectionUsageMeterComponent } from '../dialog-selection-usage-meter/dialog-selection-usage-meter.component';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { ApiService } from '../../../../../services/api.service';
import { UtilityService } from '../../../../../services/utility.service';

@Component({
  selector: 'app-review-esi-id-usage-meter-reads',
  templateUrl: './review-esi-id-usage-meter-reads.component.html',
  styleUrls: ['./review-esi-id-usage-meter-reads.component.scss', '../../../../button.scss', '../../../../table.scss', '../../../../table-animation.scss']
})
export class ReviewEsiIdUsageMeterReadsComponent implements OnInit {

  @ViewChild(MatPaginator) Paginator: MatPaginator
  loading = true
  Form = new FormGroup({
    esiid: new FormControl("", Validators.pattern('[0-9-]+')),
    metertype: new FormControl(""),
    readstatus: new FormControl(""),
  })
  displayedColumns: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
  DataSource = new MatTableDataSource()

  openSelectionDialog(): void {
    let dialogRef = this.dialog.open(DialogSelectionUsageMeterComponent, {
      // data: this.obj,
      width: "1200px",
    })
    dialogRef.afterClosed().subscribe(result => {
      // this.clearObject()
    })
  }
  constructor(public dialog: MatDialog, private service: ApiService, private util: UtilityService) { }

  ngOnInit() {
    // this.onChanges()
    this.setPaginator()
    // this.getMeterReads(lower, upper)
    console.log("ngonit")
    this.getMeterReads(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    this.Paginator.page.subscribe(() => {
      this.getMeterReads(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    })
  }
  searchValue() {
    // this.onChanges()
    // this.setPaginator()
    // // this.getMeterReads(lower, upper)
    // console.log("ngonit")
    // this.getMeterReads(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    // this.Paginator.page.subscribe(() => {
    //   this.getMeterReads(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    // })
    this.onSubmit(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    this.Paginator.page.subscribe(() => {
      this.onSubmit(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    })
  }
  // onChanges(): void {
  //   this.obj = this.Form.value
  //   if (this.obj != null) {

  //     this.setPaginator()
  //     console.log("onchange")
  //     // this.onSubmit()
  //     this.onSubmit(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
  //     this.Paginator.page.subscribe(() => {
  //       this.onSubmit(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
  //     })
  //   } else {
  //     console.log("onchange2")
  //     this.setPaginator()
  //     this.getMeterReads(this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
  //   }
  // }
  getMeterReads(lower, upper) {
    this.service.getMeterReads(lower, upper).subscribe(res => {
      this.Paginator.length = res.total_count
      console.log(res)
      if (res['status'] == true) {
        this.loading = false
        this.DataSource.data = res['message']
      }
      else {
        this.loading = false
        this.util.openFailureSnackBar('Could not fetch Meter Reads data, please try again.')
      }
    }, err => {
      this.util.openFailureSnackBar(err)
    })
  }
  obj = {}
  onSubmit(lower, upper) {
    if (this.Form.valid) {
      this.obj = this.Form.value
      this.DataSource.data = null
      this.loading = true

      console.log(this.obj)
      console.log(lower, upper)
      // this.obj['start_row'] = this.Paginator.pageIndex * this.Paginator.pageSize
      // this.obj['end_row'] = (this.Paginator.pageIndex + 1) * this.Paginator.pageSize
      this.obj['start_row'] = lower
      this.obj['end_row'] = upper

      this.service.getMeterReadsSearch(this.obj).subscribe(res => {
        // if (res['status'] == true) {
        //   this.loading = false
        //   this.Paginator.length = res.total_count
        //   this.DataSource.data = res['message']
        //   console.log(res)
        // } else {
        //   this.loading = false
        // }
        console.log(res)
        if (res['status'] == true) {
          this.loading = false
          this.Paginator.length = res.total_count
          this.DataSource.data = res['message']
        }
        else {
          this.loading = false
          this.util.openFailureSnackBar(res['message'])
        }
      }, err => {
        this.util.openFailureSnackBar(err)
      })
    }
  }

  setPaginator() {
    this.Paginator.pageIndex = 0
    this.Paginator.pageSize = 20
  }
}
