import { Component, OnInit } from '@angular/core';
import {
  MatTableDataSource,
} from '@angular/material';
@Component({
  selector: 'app-reviewuninvoicedactivityreports',
  templateUrl: './reviewuninvoicedactivityreports.component.html',
  styleUrls: ['./reviewuninvoicedactivityreports.component.scss','../../../table.scss','../../../button.scss']
})
export class ReviewuninvoicedactivityreportsComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = [ '1', '2', '3']
  dataSource = new MatTableDataSource();
  shifts= [];
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
   ngOnInit(){
    this.dataSource.data=this.shifts; 
   }
}
