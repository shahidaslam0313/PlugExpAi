import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-ams-interval-data',
  templateUrl: './ams-interval-data.component.html',
  styleUrls: ['./ams-interval-data.component.scss','../../../../table.scss','../../../../button.scss']
})
export class AmsIntervalDataComponent implements OnInit {
  
  DisplayedColumns: string[] = ['1','2', '3']
  DataSource = new MatTableDataSource()

Form=new  FormGroup({
  to:new FormControl("",Validators.required),
  from:new FormControl("",Validators.required)
})
onSubmit(){
  
}
  constructor() { }

  ngOnInit() {
  }

}
