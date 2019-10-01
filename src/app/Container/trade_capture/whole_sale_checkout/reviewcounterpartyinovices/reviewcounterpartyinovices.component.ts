import { Component, OnInit } from '@angular/core';
import {
  MatTableDataSource,
} from '@angular/material';
import {
  MatDialog,
  MatDialogRef,
} from '@angular/material';
import { ReviewInvoiceComponent } from '../review-invoice/review-invoice.component';


@Component({
  selector: 'app-reviewcounterpartyinovices',
  templateUrl: './reviewcounterpartyinovices.component.html',
  styleUrls: ['./reviewcounterpartyinovices.component.scss','../../../table.scss','../../../button.scss']
})
export class ReviewcounterpartyinovicesComponent implements OnInit {

 constructor(public dialog: MatDialog){}
  displayedColumns: string[] = ['0','1', '2', '3', '4', '5', '6', '7', '8','9','10','11','12','13','14']
  dataSource = new MatTableDataSource();
  shifts= [{status:"Pending"}]
   ngOnInit(){
    this.dataSource.data=this.shifts 
   }
   ngAfterViewInit() {
    setTimeout(() => {
      this.openSelectionDialog();
    });
  }
  openSelectionDialog(): void {
    this.dialog.open(ReviewInvoiceComponent, {});
  }
  
}
