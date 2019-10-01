import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-fixed',
  templateUrl: './dialog-fixed.component.html',
  styleUrls: ['./dialog-fixed.component.scss','../../../../button.scss']
})
export class DialogFixedComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<DialogFixedComponent>) {
  }
  ngOnInit() {}
  
  selectCriteria = new FormGroup({
    fixedPrice: new FormControl('', [Validators.required]),
    tradeName: new FormControl('', [Validators.required]),
    buySell: new FormControl('', [Validators.required]),
    flowTimeRange: new FormControl('', [Validators.required]),
    tradeDate: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    tradingBook: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    counterParty: new FormControl('', [Validators.required]),
    agreement: new FormControl('', [Validators.required]),
    shape: new FormControl('', [Validators.required]),
    DBA: new FormControl('', [Validators.required]),
    priceDescription: new FormControl('', [Validators.required]),
    mwAmount: new FormControl('', [Validators.required]),
    trader: new FormControl('', [Validators.required]),
    uniqueId: new FormControl('', [Validators.required]),
    comments: new FormControl(''),
    powerIndexPriceList: new FormControl('', [Validators.required]),
  })
  buySells: string[] = ['Buy', 'Sell', 'Either'];
  statuss: string[] = ['Valid', 'Void', 'Pending', 'What-If'];

  buySellValue() //use using change not click
  {
    this.selectCriteria.controls.buySell.value
  }

  close() {
    this.dialogRef.close();
  }
  locations = [{
    key: "1",
    value: "ERCOT"
  },
  {
    key: "2",
    value: "ERCOT HB_HOUSTON"
  },
  {
    key: "3",
    value: "ERCOT HB_NORTH"
  },
  {
    key: "4",
    value: "ERCOT HB_PAN"
  },
  {
    key: "5",
    value: "ERCOT HB_SOUTH"
  },
  {
    key: "6",
    value: "ERCOT HB_WEST"
  },
  {
    key: "7",
    value: "ERCOT LZ_HOUSTON"
  },
  {
    key: "8",
    value: "ERCOT LZ_SOUTH"
  },
  {
    key: "9",
    value: "ERCOT LZ_WEST"
  }
  ]

  counterParty = [{
    key: "1",
    value: "DIRE"
  },
  {
    key: "2",
    value: "Twin"
  }
  ]
  trader = [{
    key: "1",
    value: "Direct Energy Integration"
  }]
  dba = [{
    key: "1",
    value: "OUREN"
  }]
  agreement = [{
    key: '1',
    value: 'DIRE-EEI'
  }, {
    key: '2',
    value: 'Twin Eagle Agreement'
  }]

  shape = [{
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
}
