import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
} from '@angular/material';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-review-forward-prices',
  templateUrl: './review-forward-prices.component.html',
  styleUrls: ['./review-forward-prices.component.scss','../../../button.scss','../../../table.scss']
})
export class ReviewForwardPricesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
    
  tab = [{
    BuySell: "HOUSTON",
    first_Dt: "33.560",
    last_Dt: "53.560",
    counterParty: "43.560",
    location: "53.560",
    Price_desc: "73.560",
    mw_amnt: "33.560"
  }];
  displayedColumns: string[] = ['3', '4', '5', '6', '7','8','9'];
  dataSource = this.tab;
  ngOnInit() {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.openSelectionDialog();
    });
  }
openSelectionDialog(){
this.dialog.open(ReviewForwardDialogComponent,{})
}

}

@Component({
  selector: 'app-review-forward-prices-dialog',
  templateUrl: './review-forward-prices-dialog.component.html',
  styleUrls: ['./review-forward-prices.component.scss','../../../button.scss']
})
export class ReviewForwardDialogComponent{
  constructor(public dialogRef: MatDialogRef < ReviewForwardDialogComponent > ){

  }
  
  close() {
    this.dialogRef.close();
  }
  
  output: string[] = ['Screen', 'PDF', 'Excel'];
  selectCriteria=new FormGroup({
    timeZone:new FormControl('',[Validators.required]),
    periodicity:new FormControl('',[Validators.required]),
    from:new FormControl('',[Validators.required]),
    through:new FormControl('',[Validators.required]),
    curveSets:new FormControl(''),
    output:new FormControl('')
  });
  periodicity=[{key:"1",value:"Hourly"},{key:"2",value:"Daily"},{key:"3",value:"Monthly"}]
  timeZone = [
    { value: 'Atlantic Daylight Time', viewValue: 'Atlantic Daylight Time' },
    { value: 'Atlantic Standard Time', viewValue: 'Atlantic Standard Time' },
    { value: 'British Daylight Time', viewValue: 'British Daylight Time' },
    { value: 'British Standard Time', viewValue: 'British Standard Time' },
    { value: 'Central Daylight Time', viewValue: 'Central Daylight Time' },
    { value: 'Central Standard Time', viewValue: 'Central Standard Time' },
    { value: 'Eastern Daylight Time', viewValue: 'Eastern Daylight Time' },
    { value: 'Eastern Standard Time', viewValue: 'Eastern Standard Time' },
    { value: 'Mountain Daylight Time', viewValue: 'Mountain Daylight Time' },
    { value: 'Mountain Standard Time', viewValue: 'Mountain Standard Time' },
    { value: 'Pacific Daylight Time', viewValue: 'Pacific Daylight Time' },
    { value: 'Pacific Standard Time', viewValue: 'Pacific Standard Time' },
    { value: 'Universal Time', viewValue: 'Universal Time' },
  ]
}