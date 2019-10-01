import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-load-forecast',
  templateUrl: './load-forecast.component.html',
  styleUrls: ['./load-forecast.component.scss','../../../table.scss', '../../../table-animation.scss']
})
export class LoadForecastComponent implements OnInit {
  DisplayedColumns: string[] = ['1', '2', '3', '4']
  DataSource = new MatTableDataSource()
 loading=true
  constructor(private service: ApiService) { }

  ngOnInit() {
    this.getEsiid()
  }
  getEsiid() {
    this.service.loadForecast().subscribe(res => {
      // console.log(res)
      this.loading=false
      this.DataSource.data = res['message']
      for (let i = 0; res['message'].length; i++) {
        this.DataSource.data[i]['file_name'] = res['message'][i].load_forecast_report.slice(40)
        // console.log(this.DataSource)
      }
    })
  }


}
