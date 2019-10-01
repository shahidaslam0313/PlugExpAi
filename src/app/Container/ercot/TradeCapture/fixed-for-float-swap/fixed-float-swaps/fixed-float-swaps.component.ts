import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { DialogFixedComponent } from '../dialog-fixed/dialog-fixed.component';
import { ApiService } from '../../../../../services/api.service';

@Component({
  selector: 'app-fixed-float-swaps',
  templateUrl: './fixed-float-swaps.component.html',
  styleUrls: ['./fixed-float-swaps.component.scss', '../../../../button.scss', '../../../../table.scss']
})
export class FixedFloatSwapsComponent implements OnInit {


  // Form = new FormGroup({
  //   buy: new FormControl("", Validators.required),
  //   tradename: new FormControl("", Validators.required),
  //   book: new FormControl("", Validators.required),
  //   location: new FormControl("", Validators.required),
  //   flowtime_start: new FormControl("", Validators.required),
  //   flowtime_end: new FormControl("", Validators.required),
  //   tradedate_start: new FormControl("", Validators.required),
  //   tradedate_end: new FormControl("", Validators.required),
  //   counterparty: new FormControl("", Validators.required),
  //   agreement: new FormControl("", Validators.required),
  //   shape: new FormControl("", Validators.required),
  //   dba: new FormControl("", Validators.required),
  //   fixedprice: new FormControl("", Validators.required),
  //   indexpricelist: new FormControl("", Validators.required),
  //   mwamount: new FormControl("", Validators.required),
  //   description: new FormControl("", Validators.required),
  //   trader: new FormControl("", Validators.required),
  //   unique: new FormControl("", Validators.required),
  // })

  // constructor() { }

  // ngOnInit() {
  // }
  DisplayedColumns: string[] = ['1', '2', '3', '4','5','6','7','8','9','10','11','13','14','15','16','17','18','19']
  DataSource = new MatTableDataSource()

  constructor(public dialog: MatDialog, private service: ApiService) { }
  // tab = [{
  //   BuySell: "Buy",
  //   first_Dt: "1/2/2019",
  //   last_Dt: "1/2/2019",
  //   counterParty: "ABC",
  //   location: "XYZ",
  //   Price_desc: "Empty",
  //   mw_amnt: "20000"
  // }];
  ngOnInit() {
    this.getFixedFloat()
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.openSelectionDialog();
    });
  }
  getFixedFloat() {
    this.service.fixedFloat().subscribe(res => {
      // console.log(res)
      if (res['status'] == true) {
        this.DataSource.data = res['message']
      }
    })
  }
  // displayedColumns: string[] = ['Buy/Sell', 'FirstDate', 'LastDate', 'CounterParty', 'Location', '# of Extra Cost', 'Price Description', 'MW Amount'];
  // dataSource = this.tab;
  openSelectionDialog(): void {
    const dialogRef = this.dialog.open(DialogFixedComponent, {});
  }

}
