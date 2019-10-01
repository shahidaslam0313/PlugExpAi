import  { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators
  } from '@angular/forms';
  import {
    MatTableDataSource,
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA
  } from '@angular/material';

@Component({
    selector: 'power-option',
    templateUrl: 'physical.power.options.html',
    styleUrls:['./physical.power.options.scss','../../../button.scss','../../../table.scss']
})
export class PhysicalPowerOptionTrade implements OnInit {

    constructor(public dialog: MatDialog) { }

    ngOnInit() { 

    }
    tab = [{
      BuySell: "Buy",
      first_Dt: "1/2/2019",
      last_Dt: "1/2/2019",
      counterParty: "ABC",
      location: "XYZ",
      Price_desc: "Empty",
      mw_amnt: "20000"
    }];
   
    ngAfterViewInit() {
      setTimeout(() => {
        this.openSelectionDialog();
      });
    }
    displayedColumns: string[] = ['Buy/Sell', 'FirstDate', 'LastDate', 'CounterParty', 'Location', '# of Extra Cost', 'Price Description', 'MW Amount'];
    dataSource = this.tab;
    openSelectionDialog(): void {
        const dialogRef = this.dialog.open(PhysicalPowerOptionsDialog, {});
      }
    

}
@Component({
    selector: 'power-options-dialog',
    templateUrl: 'physical.power.options.dialog.html',
    styleUrls:['./physical.power.options.dialog.scss','../../../button.scss']
})
export class PhysicalPowerOptionsDialog implements OnInit {
 
    tradeType:any
    selectAll = false;
    label="Select All";
  
    constructor(public dialogRef: MatDialogRef < PhysicalPowerOptionsDialog > ) {
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
    ngOnInit() { 

    }
    close() {
        this.dialogRef.close();
      }
    selectCriteria = new FormGroup({
        noticeTime: new FormControl('', [Validators.required]),
        strikes: new FormControl('', [Validators.required]),
        strikesUsed: new FormControl('', [Validators.required]),
        strikesRemain: new FormControl('', [Validators.required]),
        premium: new FormControl('', [Validators.required]),
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
        optDescription: new FormControl('', [Validators.required]),
        amount:new FormControl('', [Validators.required]),
        callPut: new FormControl('',[Validators.required]),
        trader: new FormControl('', [Validators.required]),
        uniqueId:new FormControl('', [Validators.required]),
        
      })
      buySells: string[] = ['Buy', 'Sell', 'Either'];
      statuss: string[] = ['Valid', 'Void', 'Pending','What-If'];
      callPuts: string[] = ['Call', 'Put', 'Either'];
       

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
    ]
    trader = [{
      key: "direct_Energy",
      value: "Direct Energy Integration"
    }]
    dba = [{
      key: "ouren",
      value: "OUREN"
    }]
    agreement = [{
      key: 'dire',
      value: 'DIRE-EEI'
    }, {
      key: 'twin_eagle_agreement',
      value: 'Twin Eagle Agreement'
    }] 
    shape=[
        {
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