import {
  Component,
  OnInit
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
} from '@angular/material';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
@Component({
  selector: 'fixed-float',
  templateUrl: 'fixed-for-float-swaps.html',
  styleUrls: ['./fixed-for-float-swaps.scss', '../../../button.scss', '../../../table.scss']
})
export class FixedforFloatComponent implements OnInit {

  constructor(public dialog: MatDialog, private service: ApiService) { }
  tab = [{
    BuySell: "Buy",
    first_Dt: "1/2/2019",
    last_Dt: "1/2/2019",
    counterParty: "ABC",
    location: "XYZ",
    Price_desc: "Empty",
    mw_amnt: "20000"
  }];
  ngOnInit() {
    // this.getFixedFloat()
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.openSelectionDialog();
    });
  }
  // getFixedFloat() {
  //   this.service.fixedFloat().subscribe(res => {
  //     console.log(res)
  //     if (res['status'] == true) {
  //     }
  //   })
  // }
  displayedColumns: string[] = ['Buy/Sell', 'FirstDate', 'LastDate', 'CounterParty', 'Location', '# of Extra Cost', 'Price Description', 'MW Amount'];
  dataSource = this.tab;
  openSelectionDialog(): void {
    const dialogRef = this.dialog.open(FixedforFloatDialog, {});
  }

}




@Component({
  selector: 'fixed-float',
  templateUrl: 'fixed-for-float-dialog.html',
  styleUrls: ['./fixed-for-float-dialog.scss', '../../../button.scss']
})
export class FixedforFloatDialog {
  tradeType: any
  selectAll = false;
  label = "Select All";

  constructor(public dialogRef: MatDialogRef<FixedforFloatDialog>) {
    this.tradeType = [
      { name: "Valid", checked: false },
      { name: "Void", checked: false },
      { name: "Pending", checked: false },
      { name: "What-If", checked: false }
    ];
  }
  updateCheck() {
    console.log(this.selectAll);
    if (this.selectAll === true) {
      this.tradeType.map((trade) => {
        trade.checked = true;
        this.label = "Deselect All"
      });

    }
    else {
      this.tradeType.map((trade) => {
        trade.checked = false;
        this.label = "Select All"
      });
    }
  }
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
  priceList = [
    {
      key: "da_hbHouston",
      value: "ERCOT - DA HB_HOUSTON"
    },
    {
      key: "da_hbNorth",
      value: "ERCOT - DA HB_NORTH"
    },
    {
      key: "da_hbPan",
      value: "ERCOT - DA HB_PAN"
    },
    {
      key: "da_hbSouth",
      value: "ERCOT - DA HB_SOUTH"
    },
    {
      key: "da_hbWest",
      value: "ERCOT - DA HB_WEST"
    },
    {
      key: "da_lzHouston",
      value: "ERCOT - DA LZ_HOUSTON"
    },
    {
      key: "da_lzNorth",
      value: "ERCOT - DA LZ_NORTH"
    },
    {
      key: "da_lzSouth",
      value: "ERCOT - DA LZ_SOUTH"
    },
    {
      key: "da_lzWest",
      value: "ERCOT - DA LZ_WEST"
    },
    {
      key: "rt_hbHouston",
      value: "ERCOT - RT HB_HOUSTON"
    },
    {
      key: "rt_hbNorth",
      value: "ERCOT - RT HB_NORTH"
    },
    {
      key: "rt_hbPan",
      value: "ERCOT - RT HB_PAN"
    },
    {
      key: "rt_hbSouth",
      value: "ERCOT - RT HB_SOUTH"
    },
    {
      key: "rt_hbWest",
      value: "ERCOT - RT HB_WEST"
    },
    {
      key: "rt_lzHouston",
      value: "ERCOT - RT LZ_HOUSTON"
    },
    {
      key: "rt_lzNorth",
      value: "ERCOT - RT LZ_NORTH"
    },
    {
      key: "rt_lzSouth",
      value: "ERCOT - RT LZ_SOUTH"
    }
  ]
  counterParty = [
    {
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
    key: "17",
    value: "Central 5x16"
  }
    ,
  {
    key: "18",
    value: "Central 5x8"
  },
  {
    key: "19",
    value: "Central 7x16"
  },
  {
    key: "20",
    value: "Central 7x8"
  },
  {
    key: "21",
    value: "ERCOT CRR Off-peak"
  },
  {
    key: "22",
    value: "ERCOT CRR PEAKWD"
  },
  {
    key: "23",
    value: "ERCOT CRR PEAKWE"
  },
  {
    key: "24",
    value: "Fully Profiled"
  },
  {
    key: "25",
    value: "HE 01"
  },
  {
    key: "26",
    value: "HE 01-06"
  },
  {
    key: "27",
    value: "HE 01-10"
  },
  {
    key: "28",
    value: "HE 02"
  },
  {
    key: "29",
    value: "HE 02S"
  },
  {
    key: "30",
    value: "HE 03"
  },
  {
    key: "31",
    value: "HE 04"
  },
  {
    key: "32",
    value: "HE 05"
  },
  {
    key: "33",
    value: "HE 06"
  },
  {
    key: "34",
    value: "HE 06-10"
  },
  {
    key: "35",
    value: "HE 06-11"
  },
  {
    key: "36",
    value: "HE 07"
  },
  {
    key: "37",
    value: "HE 07-08"
  },
  {
    key: "38",
    value: "HE 07-10"
  },
  {
    key: "39",
    value: "HE 07-11"
  },
  {
    key: "40",
    value: "HE 08"
  },
  {
    key: "41",
    value: "HE 09"
  },
  {
    key: "42",
    value: "HE 10"
  },
  {
    key: "43",
    value: "HE 11"
  },
  {
    key: "44",
    value: "HE 11-12"
  },
  {
    key: "45",
    value: "HE 12"
  },
  {
    key: "46",
    value: "HE 12-22"
  },
  {
    key: "47",
    value: "HE 12-24"
  },
  {
    key: "48",
    value: "HE 13"
  },
  {
    key: "49",
    value: "HE 13-14"
  },
  {
    key: "50",
    value: "HE 14"
  },
  {
    key: "51",
    value: "HE 14-17"
  },
  {
    key: "52",
    value: "HE 15"
  },
  {
    key: "53",
    value: "HE 15-16"
  },
  {
    key: "54",
    value: "HE 15-18"
  },
  {
    key: "55",
    value: "HE 15-22"
  },
  {
    key: "56",
    value: "HE 15-24"
  },
  {
    key: "57",
    value: "HE 16"
  },
  {
    key: "58",
    value: "HE 16-18"
  },
  {
    key: "59",
    value: "HE 16-24"
  },
  {
    key: "60",
    value: "HE 17"
  },
  {
    key: "61",
    value: "HE 17-18"
  },
  {
    key: "62",
    value: "HE 17-24"
  },
  {
    key: "63",
    value: "HE 18"
  },
  {
    key: "64",
    value: "HE 18-19"
  },
  {
    key: "65",
    value: "HE 18-21"
  },
  {
    key: "66",
    value: "HE 18-22"
  },
  {
    key: "67",
    value: "HE 18-24"
  },
  {
    key: "68",
    value: "HE 19"
  },
  {
    key: "69",
    value: "HE 19-22"
  },
  {
    key: "70",
    value: "HE 19-24"
  },
  {
    key: "71",
    value: "HE 20"
  },
  {
    key: "72",
    value: "HE 21"
  },
  {
    key: "73",
    value: "HE 22"
  },
  {
    key: "74",
    value: "HE 23"
  },
  {
    key: "75",
    value: "HE 23-24"
  },
  {
    key: "76",
    value: "HE 24"
  },
  {
    key: "77",
    value: "Load Profile by Count:BUSHILF COAST"
  },
  {
    key: "78",
    value: "Load Profile by Count:BUSHILF EAST"
  },
  {
    key: "79",
    value: "Load Profile by Count:BUSHILF FWEST"
  },
  {
    key: "80",
    value: "Load Profile by Count:BUSHILF NCENT "
  },
  {
    key: "81",
    value: "Load Profile by Count:BUSHILF NORTH"
  },
  {
    key: "82",
    value: "Load Profile by Count:BUSHILF SCENT"
  },
  {
    key: "83",
    value: "Load Profile by Count:BUSHILF SOUTH"
  },
  {
    key: "84",
    value: "Load Profile by Count:BUSHILF WEST"
  },
  {
    key: "85",
    value: "Load Profile by Count:BUSIDRRQ COAST"
  },
  {
    key: "86",
    value: "Load Profile by Count:BUSMEDLF COAST"
  },
  {
    key: "87",
    value: "Load Profile by Count:BUSMEDLF EAST"
  },
  {
    key: "88",
    value: "Load Profile by Count:BUSMEDLF FWEST"
  },
  {
    key: "89",
    value: "Load Profile by Count:BUSMEDLF NCENT"
  },
  {
    key: "90",
    value: "Load Profile by Count:BUSMEDLF NORTH"
  },
  {
    key: "91",
    value: "Load Profile by Count:BUSMEDLF SCENT"
  },
  {
    key: "92",
    value: "Load Profile by Count:BUSMEDLF SOUTH"
  },
  {
    key: "93",
    value: "Load Profile by Count:BUSMEDLF WEST"
  },
  {
    key: "94",
    value: "Load Profile by Count:BUSNODEM COAST"
  },
  {
    key: "95",
    value: "Load Profile by Count:BUSNODEM EAST"
  },
  {
    key: "96",
    value: "Load Profile by Count:BUSNODEM FWEST"
  },
  {
    key: "97",
    value: "Load Profile by Count:BUSNODEM NCENT"
  },
  {
    key: "98",
    value: "Load Profile by Count:BUSNODEM NORTH"
  },
  {
    key: "99",
    value: "Load Profile by Count:BUSNODEM SCENT"
  },
  {
    key: "100",
    value: "Load Profile by Count:BUSNODEM SOUTH"
  },
  {
    key: "100",
    value: "Load Profile by Count:BUSNODEM WEST"
  },


  ]
}