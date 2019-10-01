import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ApiService } from '../../../../services/api.service';
import { UtilityService } from '../../../../services/utility.service';

@Component({
  selector: 'app-review-esi-id-service-history',
  templateUrl: './review-esi-id-service-history.component.html',
  styleUrls: ['./review-esi-id-service-history.component.scss', '../../../table.scss', '../../../table-animation.scss', '../../../button.scss']
})
export class ReviewEsiIdServiceHistoryComponent implements OnInit {

  @ViewChild(MatPaginator) Paginator: MatPaginator
  loading = true
  Form = new FormGroup({
    esiid: new FormControl("", Validators.pattern('[0-9-]+')),
    // stationcode: new FormControl(""),
    // profilecode: new FormControl(""),
  })

  displayedColumns: string[] = ['1', '2', '3', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];
  DataSource = new MatTableDataSource()


  constructor(private service: ApiService, private util: UtilityService) { }

  ngOnInit() {
    this.setPaginator()
    // console.log("ngonit")
    this.getServiceHistory(``, this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    this.Paginator.page.subscribe(() => {
      this.getServiceHistory(``, this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
    })
  }
  setPaginator() {
    this.Paginator.pageIndex = 0
    this.Paginator.pageSize = 20
  }
  getServiceHistory(filterValue, lower, upper) {
    if (this.Form.valid) {
      this.DataSource.data = null
      this.loading = true
      let obj = this.Form.value
      if (filterValue != null) {
        obj['esiid'] = filterValue
      }else{
        delete obj['esiid']
      }
      obj['start_row'] = lower
      obj['end_row'] = upper
      this.service.getServiceHistory(obj).subscribe(res => {
        this.Paginator.length = res.total_count
        console.log(res)
        if (res['status'] == true) {
          this.loading = false
          this.DataSource.data = res['message']
        }
        else {
          this.loading = false
          this.util.openFailureSnackBar('Could not fetch Esiid service history data, please try again.')
        }
      }, err => {
        this.util.openFailureSnackBar(err)
      })

    }
  }
  applyFilter(filtervalue) {
    this.setPaginator()
    this.getServiceHistory(filtervalue, this.Paginator.pageIndex * this.Paginator.pageSize, (this.Paginator.pageIndex + 1) * this.Paginator.pageSize)
  }
}
