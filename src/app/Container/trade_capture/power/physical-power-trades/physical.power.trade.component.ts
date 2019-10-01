import { Component, OnInit } from '@angular/core';
import {
    MatTableDataSource,
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA
  } from '@angular/material';
  import {
    FormGroup,
    FormControl,
    Validators
  } from '@angular/forms';
@Component({
    selector: 'power-trade',
    templateUrl:'physical.power.trade.component.html',
    styleUrls:['./physical.power.trade.component.scss','../../../button.scss', '../../../table.scss']
})
export class PhysicalPowerTradeComponent implements OnInit {

    constructor(public dialog: MatDialog) { }
    tab = [{
      BuySell: "Buy",
      first_Dt: "1/2/2019",
      last_Dt: "1/2/2019",
      counterParty: "ABC",
      location: "XYZ",
      Price_desc: "Empty",
      mw_amnt: "20000"
    }];
    ngOnInit() {}
    ngAfterViewInit() {
      setTimeout(() => {
        this.openSelectionDialog();
      });
    }
    displayedColumns: string[] = ['Buy/Sell', 'FirstDate', 'LastDate', 'CounterParty', 'Location', '# of Extra Cost', 'Price Description', 'MW Amount'];
    dataSource = this.tab;
    openSelectionDialog(): void {
        this.dialog.open(PowerTradeSelectionDialog, {});
      }
}

@Component({
    selector:'power-trade-dialog',
    templateUrl:'power.trade.selection.dialog.html',
    styleUrls:['./power.trade.selection.dialog.scss','../../../table.scss','../../../button.scss']
})
export class PowerTradeSelectionDialog {
tradeType:any
selectAll = false;
label="Select All";

constructor(public dialogRef: MatDialogRef < PowerTradeSelectionDialog > ) {
  this.tradeType=[
    {name : "Valid", checked : false},
    {name : "Void", checked : false},
    {name : "Pending", checked : false},
    {name : "What-If", checked : false}
  ];
}
updateCheck(){
  console.log(this.selectAll);
  if(this.selectAll === true){
    this.tradeType.map((trade)=>{
      trade.checked=true;
      this.label="Deselect All" 
    });
    
  }
  else {
    this.tradeType.map((trade)=>{
      trade.checked=false;
      this.label="Select All"
    });
  }
}
selectCriteria = new FormGroup({
    fixedPrice: new FormControl('', [Validators.required]),
    fixedHeatRate: new FormControl('', [Validators.required]),
    tradeName: new FormControl('', [Validators.required]),
    buySell: new FormControl('', [Validators.required]),
    flowTimeRange: new FormControl('', [Validators.required]),
    tradeDate : new FormControl('', [Validators.required]),
    location: new FormControl('',[Validators.required]),
    tradingBook: new FormControl('', [Validators.required]),
    status : new FormControl('', [Validators.required]),
    counterParty: new FormControl('',[Validators.required]),
    agreement: new FormControl('', [Validators.required]),
    shape : new FormControl('', [Validators.required]),
    DBA: new FormControl('',[Validators.required]),
    priceDescription: new FormControl('', [Validators.required]),
    mwAmount:new FormControl('', [Validators.required]),
    IsOptStrike: new FormControl('',[Validators.required]),
    trader: new FormControl('', [Validators.required]),
    uniqueId:new FormControl('', [Validators.required]),
    
  })
  buySells: string[] = ['Buy', 'Sell', 'Either'];
  statuss: string[] = ['Valid', 'Void', 'Pending','What-If'];
  IsOptStrikes: string[] = ['Yes', 'No', 'Either'];
   
  buySellValue() //use using change not click
  {
    this.selectCriteria.controls.buySell.value
  }
  
  close() {
    this.dialogRef.close();
  }
    locations = [
  {
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
  ]
  trader = [{
    key: "direct_Energy",
    value: "Direct Energy Integration"
  }]
  dba = [{
    key: "ouren",
    value: "OUREN"
  }]
  agreement = [
    {
    key: 'dire',
    value: 'DIRE-EEI'
  }, {
    key: 'twin_eagle_agreement',
    value: 'Twin Eagle Agreement'
  }]

  shape=[{
    key:"1" ,
    value:"1x8"
  },
  {
    key:"2",
    value:"2x16 On-Peak" 
  },
  {
    key:"3" ,
    value: "2x24"
  },
  {
    key:"4",
    value:"2x8 Off-Peak" 
  },
  {
    key:"5" ,
    value:"3x16"
  },
  {
    key:"6",
    value:"3x8" 
  },
  {
    key:"7" ,
    value:"5x16 On-Peak"
  },
  {
    key:"8",
    value:"5x24" 
  },
  {
    key:"9",
    value:"5x8 Off-Peak" 
  },{
    key:"10",
    value:"7x16 On-Peak" 
  },
  {
    key:"11" ,
    value:"7x24"
  },
  {
    key:"12",
    value:"7x8 Off-Peak" 
  },
  {
    key:"13" ,
    value:"All Days HE12-22 "
  },
  {
    key:"14",
    value:"All Days HE13-20" 
  },
  {
    key:"15",
    value:"Central 2x16" 
  },
  
  {
    key:"16",
    value:"Central 2x8" 
  },
  
  {
    key:"15",
    value:"Central 5x16" 
  }
]
}