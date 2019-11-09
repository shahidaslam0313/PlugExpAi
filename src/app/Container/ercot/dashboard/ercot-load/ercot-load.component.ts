import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilityService } from '../../../../services/utility.service';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-ercot-load',
  templateUrl: './ercot-load.component.html',
  styleUrls: ['./ercot-load.component.scss', '../../../table.scss']
})
export class ErcotLoadComponent implements OnInit {

  DisplayedColumns1: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', 'total']
  DataSource1 = new MatTableDataSource()

  findDate
  //for datepicker validation
  start
  end

  Form = new FormGroup({
    date: new FormControl("", Validators.required),
  })
  status = false;
  error: string;

  startEndDate(days) {
    var date = new Date();
    var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
    var day = last.getDate();
    var month = last.getMonth() + 1;
    var year = last.getFullYear();
    return last
  }

  constructor(public util: UtilityService, private service: ApiService) { }

  ngOnInit() {
    this.start = this.startEndDate(6);
    this.end = this.startEndDate(1)
    this.applyFilter(this.end)
  }

  applyFilter(filterValue: string) {
    let value = this.util.datePatternYMD(filterValue)
    // console.log(this.findDate)
    this.ercotLoad(value)
  }

  ercotLoad(value) {
    this.service.ercotLoad(value).subscribe(res => {
      if (res['status'] == true) {
        this.status = true;
        this.error = null
        this.DataSource1.data = res['message']
        // console.log(res['message'])
      } else {
        this.status = false
        this.DataSource1.data = null
        this.error = "No Data Found"
      }
    })
  }
}
