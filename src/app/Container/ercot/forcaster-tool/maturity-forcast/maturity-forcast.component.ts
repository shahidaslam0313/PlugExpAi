import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ApiService } from '../../../../services/api.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-maturity-forcast',
  templateUrl: './maturity-forcast.component.html',
  styleUrls: ['./maturity-forcast.component.scss', '../../../table.scss', '../../../table-animation.scss']
})
export class MaturityForcastComponent implements OnInit {

  usageDisplayedColumns: string[] = ['2', '5', '3', '4']
  DataSource = new MatTableDataSource()
  loading = true;
  constructor(private service: ApiService, public router: Router) { }

  ngOnInit() {
    this.getEsiid()
  }

getEsiid() {
  this.service.maturityForecast().subscribe(res => {
    // console.log(res)
    this.loading = false
    this.DataSource.data = res['message']
    for (let i = 0; res['message'].length; i++) {
      this.DataSource.data[i]['file_name'] = res['message'][i]['maturitydateforecastreports'].slice(40)
    }
  })
}
openDocument(path) {
  window.open(path, '_blank')
}
}
