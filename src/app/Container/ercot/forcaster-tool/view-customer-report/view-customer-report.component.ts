import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-view-customer-report',
  templateUrl: './view-customer-report.component.html',
  styleUrls: ['./view-customer-report.component.scss', '../../../table.scss', '../../../table-animation.scss']
})
export class ViewCustomerReportComponent implements OnInit {
  DisplayedColumns: string[] = ['1', '2', '3', '4']
  DataSource = new MatTableDataSource()
  loading = true
  constructor(private service: ApiService) { }

  ngOnInit() {
    this.getEsiid()
  }
  getEsiid() {
    this.service.customerReport().subscribe(res => {
      console.log(res)
      this.loading = false
      this.DataSource.data = res['message']
      for (let i = 0; res['message'].length; i++) {
        this.DataSource.data[i]['file_name'] = res['message'][i].customer_reports.slice(40)
        // console.log(this.DataSource)
      }
    })
  }

  openDocument(path) {
    window.open(path, '_blank')
  }
}
