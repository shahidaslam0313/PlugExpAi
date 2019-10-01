import { Component, OnInit } from '@angular/core';

import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'alert-email',
    templateUrl: 'alert-email.html',
    styleUrls: ['./alert-email.scss']
})
export class AlertEmailComponent  {

    list: any
    constructor(public dialogRef: MatDialogRef<AlertEmailComponent>,) {
  
   
    }
    closeDialog(){
      this.dialogRef.close();
    }

}