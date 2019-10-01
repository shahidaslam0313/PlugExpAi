import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogSelectionChannelCutsComponent } from '../dialog-selection-channel-cuts/dialog-selection-channel-cuts.component';

@Component({
  selector: 'app-review-ls-channel-cuts',
  templateUrl: './review-ls-channel-cuts.component.html',
  styleUrls: ['./review-ls-channel-cuts.component.scss', '../../../../button.scss', '../../../../table.scss']
})
export class ReviewLSChannelCutsComponent implements OnInit {

  tab = [{
    BuySell: "Buy",
    first_Dt: "1/2/2019",
    last_Dt: "1/2/2019",
    counterParty: "ABC",
    location: "XYZ",
    Price_desc: "Empty",
    mw_amnt: "20000"
  }];
  displayedColumns: string[] = ['1','2','3','4','5','6','7','8','9','10'];
  dataSource = this.tab;

  openSelectionDialog(): void {
    let dialogRef = this.dialog.open(DialogSelectionChannelCutsComponent, {
      // data: this.obj,
      width: "1200px",
    })
    dialogRef.afterClosed().subscribe(result => {
      // this.clearObject()
    })  }
  constructor(public dialog: MatDialog) { }


  ngOnInit() {
  }

}
