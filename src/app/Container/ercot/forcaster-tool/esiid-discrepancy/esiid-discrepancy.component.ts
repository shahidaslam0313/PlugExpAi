import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-esiid-discrepancy',
  templateUrl: './esiid-discrepancy.component.html',
  styleUrls: ['./esiid-discrepancy.component.scss', '../../../table.scss', '../../../table-animation.scss']
})
export class EsiidDiscrepancyComponent implements OnInit {

  usageDisplayedColumns: string[] = ['1', '2', '3', '4']
  DataSource = new MatTableDataSource()
  loading = true
  status
  error1
  constructor(private service: ApiService) { }

  ngOnInit() {
    this.getEsiid()
  }
  getEsiid() {
    this.service.esiidDescrepancy().subscribe(res => {
      // console.log(res)
      this.status=res['status']
      this.loading = false
      if (res["status"] === true) {
        this.DataSource.data = res['message']
        for (let i = 0; res['message'].length; i++) {
          this.DataSource.data[i]['file_name'] = res['message'][i].ercot_esiid_discrepancy_report.slice(40)
          // console.log(this.DataSource)
        }
      } else {
        if (res["status"] === false) {
          this.error1 = "No record found"
        }
      }
    })
  }
  openDocument(path) {
    window.open(path, '_blank')
  }

}
