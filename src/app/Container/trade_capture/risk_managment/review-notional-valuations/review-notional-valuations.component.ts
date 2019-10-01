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
  selector: 'app-review-notional-valuations',
  templateUrl: './review-notional-valuations.component.html',
  styleUrls: ['./review-notional-valuations.component.scss','../../../button.scss','../../../table.scss']
})
export class ReviewNotionalValuationsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  tab = [];
  displayedColumns: string[] = ['1', '2', '3', '4', '5', '6', '7', '8','9','10','11','12','13','14','15','16','17','18'];
  dataSource = this.tab;
  ngOnInit() {}
  ngAfterViewInit() {
    setTimeout(() => {
      this.openSelectionDialog();
    });
  }
  openSelectionDialog(){
this.dialog.open(ReviewNotionalDialogComponent,{})
  }

}
@Component({
  selector: 'review-notional-dialog',
  templateUrl: './review-notional-dialog.html',
  styleUrls: ['./review-notional-dialog.scss','../../../button.scss']
})
export class ReviewNotionalDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef <ReviewNotionalDialogComponent> ){}
  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
  selectCriteria = new FormGroup({
    tradeName: new FormControl('', [Validators.required]),
    buySell: new FormControl('', [Validators.required]),
    valuationDate: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    tradingBook: new FormControl('', [Validators.required]),
    breakbyMonths: new FormControl('', [Validators.required]),
    counterParty: new FormControl('', [Validators.required]),
    reportVersion: new FormControl('', [Validators.required]),
    shape: new FormControl('', [Validators.required]),
    product: new FormControl('', [Validators.required]),
    timeRange: new FormControl('', [Validators.required]),
    tradeType: new FormControl('', [Validators.required]),
    mtmPrizeSet:new FormControl('')
  })
  buySells: string[] = ['Buy', 'Sell', 'Both'];
  breakbyMonth: string[] = ['Yes', 'No'];
  timeRanges: string[] = ['Forward', 'Valuation Time Range'];
  trades=[{key:"trade",value:"ERCOT CRR"},{key:"pjm_ftr",value:"PJM FTR"}];
  mtmPrizeSets=[{key:"prizeSet",value:"OUREN ERCOT"}];
  repoVersions=[{key:"repo_version",value:"001"}];
  products=[{key:"product",value:"Energy"}];
  shape = [
    {
    key: "1",
    value: "1x8"
  },
  {
    key: "2",
    value: "2x16 On-Peak"
  },
  {
    key: "3",
    value: "2x24"
  },
  {
    key: "4",
    value: "2x8 Off-Peak"
  },
  {
    key: "5",
    value: "3x16"
  },
  {
    key: "6",
    value: "3x8"
  },
  {
    key: "7",
    value: "5x16 On-Peak"
  },
  {
    key: "8",
    value: "5x24"
  },
  {
    key: "9",
    value: "5x8 Off-Peak"
  }, {
    key: "10",
    value: "7x16 On-Peak"
  },
  {
    key: "11",
    value: "7x24"
  },
  {
    key: "12",
    value: "7x8 Off-Peak"
  },
  {
    key: "13",
    value: "All Days HE12-22 "
  },
  {
    key: "14",
    value: "All Days HE13-20"
  },
  {
    key: "15",
    value: "Central 2x16"
  },

  {
    key: "16",
    value: "Central 2x8"
  },

  {
    key: "15",
    value: "Central 5x16"
  }
]
locations = [{
  key: "ercot",
  value: "ERCOT"
},
{
  key: "hbHouston",
  value: "ERCOT HB_HOUSTON"
},
{
  key: "hbNorth",
  value: "ERCOT HB_NORTH"
},
{
  key: "hbPan",
  value: "ERCOT HB_PAN"
},
{
  key: "hbSouth",
  value: "ERCOT HB_SOUTH"
},
{
  key: "hbWest",
  value: "ERCOT HB_WEST"
},
{
  key: "lzHouston",
  value: "ERCOT LZ_HOUSTON"
},
{
  key: "lzSouth",
  value: "ERCOT LZ_SOUTH"
},
{
  key: "lzWest",
  value: "ERCOT LZ_WEST"
}
]

counterParty = [{
  key: "dir",
  value: "DIRE"
},
{
  key: "twin",
  value: "Twin"
}
]}
