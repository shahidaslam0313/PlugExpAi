import { Component, OnInit } from '@angular/core';
import {
  MatTableDataSource,
} from '@angular/material';
@Component({
  selector: 'app-ercotcrr',
  templateUrl: './ercotcrr.component.html',
  styleUrls: ['./ercotcrr.component.scss','../../../table.scss','../../../button.scss']
})
export class ERCOTCRRComponent implements OnInit {

  displayedColumns: string[] = [ '1', '2', '3']
  dataSource = new MatTableDataSource();
  shifts= [
      {  shiftLog: "", size: "", changed: "",},
    ]
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
   ngOnInit(){
    this.dataSource.data=this.shifts 
   }
}
