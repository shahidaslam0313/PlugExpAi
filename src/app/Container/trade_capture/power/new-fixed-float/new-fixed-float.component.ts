import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { UtilityService } from '../../../../services/utility.service';



@Component({
  selector: 'app-new-fixed-float',
  templateUrl: './new-fixed-float.component.html',
  styleUrls: ['./new-fixed-float.component.scss', '../../../button.scss']
})

export class NewFixedFloatComponent implements OnInit {
  tradeType: any
  selectAll = false;
  label = "Select All";
  Form = new FormGroup({
    buy_sell: new FormControl("", Validators.required),
    status: new FormControl("", Validators.required),
    reason: new FormControl("", Validators.required),
    trade_name: new FormControl("", Validators.required),
    trade_date: new FormControl("", Validators.required),
    trading_book: new FormControl("", Validators.required),
    trader_name: new FormControl("", Validators.required),
    comments: new FormControl("", Validators.required),
    counter_party: new FormControl("", Validators.required),
    agreement: new FormControl("", Validators.required),
    special_terms: new FormControl("", Validators.required),
    location: new FormControl("", Validators.required),
    shape: new FormControl("", Validators.required),
    time_zone: new FormControl("", Validators.required),
    ranking: new FormControl("", Validators.required),
    first_date: new FormControl("", Validators.required),
    last_date: new FormControl("", Validators.required),
    currency_mwh: new FormControl("", Validators.required),
    fixed_price: new FormControl("", Validators.required),
    offset: new FormControl("", Validators.required),
    updated_at:new FormControl("")
  })
  // tiles = [
  //   { text: 'One', cols: 1, rows: 1, border: '1px solid #b9b9b9', title: "Broker" },
  //   { text: 'Two', cols: 1, rows: 1, border: '1px solid #b9b9b9', title: "Fee Type" },
  //   { text: 'Three', cols: 1, rows: 1, border: '1px solid #b9b9b9', title: "Amount" },
  // ];
  constructor(private service: ApiService, public util: UtilityService) {
    this.tradeType = [
      { name: "Override Rate", checked: false, disabled: false },
      { name: "Override Flat Fee", checked: false, disabled: false },
      { name: "Override %", checked: false, disabled: false },
      { name: "Configured Rate", checked: false, disabled: true },
      { name: "Configured %", checked: false, disabled: true }

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
  checked: boolean = true;
  ngOnInit() {
  }
  onSubmit() {
    console.log(this.Form.value)
    this.obj = this.Form.value
    this.obj['hedge_allocation'] = this.hedgevalues
    this.obj['index'] = this.priceIndex
    this.obj['trade_date'] = this.util.datePatternYMD(this.Form.controls.trade_date.value)
    this.obj['first_date'] = this.util.datePatternYMD(this.Form.controls.first_date.value)
    this.obj['last_date'] = this.util.datePatternYMD(this.Form.controls.last_date.value)
    this.service.newfixedFloat(this.obj).subscribe(res => {
      console.log(res)
      if (res['status'] == true) {
        this.util.openSuccessSnackBar(res['message'])
      } else {
        this.util.openFailureSnackBar(res['Error'])
      }
    })
    console.log(this.obj)
  }
  obj = {}
  // buySell: string = "Buy";
  buysell = [
    { value: 'Buy', viewValue: 'Buy' },
    { value: 'Sell', viewValue: 'Sell' },
    { value: 'Either', viewValue: 'Either' },
  ];

  // validWahtif: string = "Valid";
  // whatif: string[] = ['Valid', 'What if'];

  hedgevalues = []
  priceIndex = []
  addHedge(hedge, mw) {
    let obj = {
    }
    obj['location'] = hedge;
    obj['mw'] = mw
    this.hedgevalues.push(obj)
    console.log(this.hedgevalues)
  }
  addPrice(index, weight) {
    let obj = {
    }
    obj['index'] = index
    obj['weight'] = weight
    this.priceIndex.push(obj)
    console.log(this.priceIndex)
  }
  deleteHedge(a) {
    // console.log(a.index)
    for (let i = 0; i < this.hedgevalues.length; i++) {
      if (this.hedgevalues[i] == a) {
        this.hedgevalues.splice(i, 1);
      }
    }
    console.log(this.hedgevalues)
  }
  deleteWeight(a) {
    // console.log(a.index)
    for (let i = 0; i < this.priceIndex.length; i++) {
      if (this.priceIndex[i] == a) {
        this.priceIndex.splice(i, 1);
      }
    }
    console.log(this.priceIndex)
  }
  location = [
    { value: 'ERCOT', viewValue: 'ERCOT' },
    { value: 'ERCOT_HB_HUSTON', viewValue: 'ERCOT_HB_HUSTON' },
    { value: 'ERCOT_HB_NORTH', viewValue: 'ERCOT_HB_NORTH' },
    { value: 'ERCOT_HB_PAN', viewValue: 'ERCOT_HB_PAN' },
    { value: 'ERCOT_HB_SOUTH', viewValue: 'ERCOT_HB_SOUTH' },
    { value: 'ERCOT_HB_WEST', viewValue: 'ERCOT_HB_WEST' },
    { value: 'ERCOT_LZ_HOUSTON', viewValue: 'ERCOT_LZ_HOUSTON' },
    { value: 'ERCOT_LZ_NORTH', viewValue: 'ERCOT_LZ_NORTH' },
    { value: 'ERCOT_LZ_SOUTH', viewValue: 'ERCOT_LZ_SOUTH' },
    { value: 'ERCOT_LZ_WEST', viewValue: 'ERCOT_LZ_WEST' },
  ]
  indexValue = [
    { value: 'HB_HOUSTON', viewValue: 'HB_HOUSTON' },
    { value: 'HB_NORTH', viewValue: 'HB_NORTH' },
    { value: 'HB_NORTH', viewValue: 'HB_NORTH' },
    { value: 'HB_SOUTH', viewValue: 'HB_SOUTH' },
    { value: 'HB_WEST', viewValue: 'HB_WEST' },
    { value: 'LZ_HUSTON', viewValue: 'LZ_HUSTON' },
    { value: 'LZ_NORTH', viewValue: 'LZ_NORTH' },
    { value: 'LZ_SOUTH', viewValue: 'LZ_SOUTH' },
    { value: 'LZ_WEST', viewValue: 'LZ_WEST' },
    { value: 'RT_HB_HOUSTON', viewValue: 'RT_HB_HOUSTON' },
    { value: 'RT_HB_NORTH', viewValue: 'RT_HB_NORTH' },
    { value: 'RT_HB_NORTH', viewValue: 'RT_HB_NORTH' },
    { value: 'RT_HB_SOUTH', viewValue: 'RT_HB_SOUTH' },
    { value: 'RT_HB_WEST', viewValue: 'RT_HB_WEST' },
    { value: 'RT_LZ_HUSTON', viewValue: 'RT_LZ_HUSTON' },
    { value: 'RT_LZ_NORTH', viewValue: 'RT_LZ_NORTH' },
    { value: 'RT_LZ_SOUTH', viewValue: 'RT_LZ_SOUTH' },
    { value: 'RT_LZ_WEST', viewValue: 'RT_LZ_WEST' },
  ]

  timezone = [
    { value: 'AD', viewValue: 'AD' },
    { value: 'AS', viewValue: 'AS' },
    { value: 'BS', viewValue: 'BS' },
    { value: 'CD', viewValue: 'CD' },
    { value: 'CS', viewValue: 'CS' },
    { value: 'ED', viewValue: 'ED' },
    { value: 'ES', viewValue: 'ES' },
    { value: 'MD', viewValue: 'MD' },
    { value: 'MS', viewValue: 'MS' },
    { value: 'PD', viewValue: 'PD' },
    { value: 'PS', viewValue: 'PS' },
    { value: 'UTC', viewValue: 'UTC' },
  ]
  counterparty = [
    { value: 'DIRE', viewValue: 'DIRE' },
    { value: 'TwinEagle', viewValue: 'TwinEagle' },
  ]
  agreement = [
    { value: 'DIRE-EEI', viewValue: 'DIRE-EEI' },
    { value: 'TwinEagleAgreement', viewValue: 'TwinEagleAgreement' },
  ]
  shape = [
    { value: '1x8', viewValue: '1x8' },
    { value: '2x16 On-Peak', viewValue: '2x16 On-Peak' },
    { value: '2x24', viewValue: '2x24' },
    { value: '2x8 Off-Peak', viewValue: '2x8 Off-Peak' },
    { value: '3x16', viewValue: '3x16' },
    { value: '3x8', viewValue: '3x8' },
    { value: '5x16 On-Peak', viewValue: '5x16 On-Peak' },
    { value: '5x24', viewValue: '5x24' },
    { value: '5x8 Off-Peak', viewValue: '5x8 Off-Peak' },
    { value: '7x16 On-Peak', viewValue: '7x16 On-Peak' },
    { value: '7x24', viewValue: '7x24' },
    { value: '7x8 Off-Peak', viewValue: '7x8 Off-Peak' },
    { value: 'All Days HE12-22', viewValue: 'All Days HE12-22' },
    { value: 'All Days HE13-20', viewValue: 'All Days HE13-20' },
    { value: 'Central 2x16', viewValue: 'Central 2x16' },
    { value: 'Central 2x8', viewValue: 'Central 2x8' },
    { value: 'Central 5x16', viewValue: 'Central 5x16' },
    { value: 'Central 5x8', viewValue: 'Central 5x8' },
    { value: 'Central 7x16', viewValue: 'Central 7x16' },
    { value: 'Central 7x8', viewValue: 'Central 7x8' },
    { value: 'ERCOT CRR Off-peak', viewValue: 'ERCOT CRR Off-peak' },
    { value: 'ERCOT CRR PeakWD', viewValue: 'ERCOT CRR PeakWD' },
    { value: 'ERCOT CRR PeakWE', viewValue: 'ERCOT CRR PeakWE' },
    { value: 'Fully Profiled', viewValue: 'Fully Profiled' },
    { value: 'HE 01', viewValue: 'HE 01' },
    { value: 'Load Profile by Count: BUSHILF COAST', viewValue: 'Load Profile by Count: BUSHILF COAST' },
    { value: 'Load Profile by Count: BUSHILF EAST', viewValue: 'Load Profile by Count: BUSHILF EAST' },
    { value: 'Load Profile by Count: BUSHILF FWEST', viewValue: 'Load Profile by Count: BUSHILF FWEST' },
    { value: 'Load Profile by Count: BUSHILF NCENT', viewValue: 'Load Profile by Count: BUSHILF NCENT' },
    { value: 'Load Profile by Count: BUSHILF NORTH', viewValue: 'Load Profile by Count: BUSHILF NORTH' },
    { value: 'Load Profile by Count: BUSHILF SCENT', viewValue: 'Load Profile by Count: BUSHILF SCENT' },
    { value: 'Load Profile by Count: BUSHILF SOUTH', viewValue: 'Load Profile by Count: BUSHILF SOUTH' },
    { value: 'Load Profile by Count: BUSHILF WEST', viewValue: 'Load Profile by Count: BUSHILF WEST' },
    { value: 'Load Profile by Count: BUSIDRRQ COAST', viewValue: 'Load Profile by Count: BUSIDRRQ COAST' },
    { value: 'Load Profile by Count: BUSLOLF COAST', viewValue: 'Load Profile by Count: BUSLOLF COAST' },
    { value: 'Load Profile by Count: BUSLOLF EAST', viewValue: 'Load Profile by Count: BUSLOLF EAST' },
    { value: 'Load Profile by Count: BUSLOLF FWEST', viewValue: 'Load Profile by Count: BUSLOLF FWEST' },
    { value: 'Load Profile by Count: BUSLOLF NCENT', viewValue: 'Load Profile by Count: BUSLOLF NCENT' },
    { value: 'Load Profile by Count: BUSLOLF NORTH', viewValue: 'Load Profile by Count: BUSLOLF NORTH' },
    { value: 'Load Profile by Count: BUSLOLF SCENT', viewValue: 'Load Profile by Count: BUSLOLF SCENT' },
    { value: 'Load Profile by Count: BUSLOLF SOUTH', viewValue: 'Load Profile by Count: BUSLOLF SOUTH' },
    { value: 'Load Profile by Count: BUSLOLF WEST', viewValue: 'Load Profile by Count: BUSLOLF WEST' },
    { value: 'Load Profile by Count: BUSMEDLF COAST', viewValue: 'Load Profile by Count: BUSMEDLF COAST' },
    { value: 'Load Profile by Count: BUSMEDLF EAST', viewValue: 'Load Profile by Count: BUSMEDLF EAST' },
    { value: 'Load Profile by Count: BUSMEDLF FWEST', viewValue: 'Load Profile by Count: BUSMEDLF FWEST' },
    { value: 'Load Profile by Count: BUSMEDLF NCENT', viewValue: 'Load Profile by Count: BUSMEDLF NCENT' },
    { value: 'Load Profile by Count: BUSMEDLF NORTH', viewValue: 'Load Profile by Count: BUSMEDLF NORTH' },
    { value: 'Load Profile by Count: BUSMEDLF SCENT', viewValue: 'Load Profile by Count: BUSMEDLF SCENT' },
    { value: 'Load Profile by Count: BUSMEDLF SOUTH', viewValue: 'Load Profile by Count: BUSMEDLF SOUTH' },
    { value: 'Load Profile by Count: BUSMEDLF WEST', viewValue: 'Load Profile by Count: BUSMEDLF WEST' },
    { value: 'Load Profile by Count: BUSNODEM COAST', viewValue: 'Load Profile by Count: BUSNODEM COAST' },
    { value: 'Load Profile by Count: BUSNODEM EAST', viewValue: 'Load Profile by Count: BUSNODEM EAST' },
    { value: 'Load Profile by Count: BUSNODEM FWEST', viewValue: 'Load Profile by Count: BUSNODEM FWEST' },
    { value: 'Load Profile by Count: BUSNODEM NCENT', viewValue: 'Load Profile by Count: BUSNODEM NCENT' },
    { value: 'Load Profile by Count: BUSNODEM NORTH', viewValue: 'Load Profile by Count: BUSNODEM NORTH' },
    { value: 'Load Profile by Count: BUSNODEM SCENT', viewValue: 'Load Profile by Count: BUSNODEM SCENT' },
    { value: 'Load Profile by Count: BUSNODEM SOUTH', viewValue: 'Load Profile by Count: BUSNODEM SOUTH' },
    { value: 'Load Profile by Count: BUSNODEM WEST', viewValue: 'Load Profile by Count: BUSNODEM WEST' },
    { value: 'Load Profile by Count: NMLIGHT COAST', viewValue: 'Load Profile by Count: NMLIGHT COAST' },
    { value: 'Load Profile by Count: NMLIGHT EAST', viewValue: 'Load Profile by Count: NMLIGHT EAST' },
    { value: 'Load Profile by Count: NMLIGHT FWEST', viewValue: 'Load Profile by Count: NMLIGHT FWEST' },
    { value: 'Load Profile by Count: NMLIGHT NCENT', viewValue: 'Load Profile by Count: NMLIGHT NCENT' },
    { value: 'Load Profile by Count: NMLIGHT NORTH', viewValue: 'Load Profile by Count: NMLIGHT NORTH' },
    { value: 'Load Profile by Count: NMLIGHT SCENT', viewValue: 'Load Profile by Count: NMLIGHT SCENT' },
    { value: 'Load Profile by Count: NMLIGHT SOUTH', viewValue: 'Load Profile by Count: NMLIGHT SOUTH' },
    { value: 'Load Profile by Count: NMLIGHT WEST', viewValue: 'Load Profile by Count: NMLIGHT WEST' },
    { value: 'Load Profile by Count: RESHIWR COAST', viewValue: 'Load Profile by Count: RESHIWR COAST' },
    { value: 'Load Profile by Count: RESHIWR EAST', viewValue: 'Load Profile by Count: RESHIWR EAST' },
    { value: 'Load Profile by Count: RESHIWR FWEST', viewValue: 'Load Profile by Count: RESHIWR FWEST' },
    { value: 'Load Profile by Count: RESHIWR NCENT', viewValue: 'Load Profile by Count: RESHIWR NCENT' },
    { value: 'Load Profile by Count: RESHIWR NORTH', viewValue: 'Load Profile by Count: RESHIWR NORTH' },
    { value: 'Load Profile by Count: RESHIWR SCENT', viewValue: 'Load Profile by Count: RESHIWR SCENT' },
    { value: 'Load Profile by Count: RESHIWR SOUTH', viewValue: 'Load Profile by Count: RESHIWR SOUTH' },
    { value: 'Load Profile by Count: RESHIWR WEST', viewValue: 'Load Profile by Count: RESHIWR WEST' },
    { value: 'Load Profile by Count: RESLOWR COAST', viewValue: 'Load Profile by Count: RESLOWR COAST' },
    { value: 'Load Profile by Count: RESLOWR EAST', viewValue: 'Load Profile by Count: RESLOWR EAST' },
    { value: 'Load Profile by Count: RESLOWR FWEST', viewValue: 'Load Profile by Count: RESLOWR FWEST' },
    { value: 'Load Profile by Count: RESLOWR NCENT', viewValue: 'Load Profile by Count: RESLOWR NCENT' },
    { value: 'Load Profile by Count: RESLOWR NORTH', viewValue: 'Load Profile by Count: RESLOWR NORTH' },
    { value: 'Load Profile by Count: RESLOWR SCENT', viewValue: 'Load Profile by Count: RESLOWR SCENT' },
    { value: 'Load Profile by Count: RESLOWR SOUTH', viewValue: 'Load Profile by Count: RESLOWR SOUTH' },
    { value: 'Load Profile by Count: RESLOWR WEST', viewValue: 'Load Profile by Count: RESLOWR WEST' },
    { value: 'Repeating All Days', viewValue: 'Repeating All Days' },
    { value: 'Repeating Weekdays', viewValue: 'Repeating Weekdays' },
    { value: 'Repeating Weekends', viewValue: 'Repeating Weekends' },
    { value: 'Weekday HE 07-11', viewValue: 'Weekday HE 07-11' },
    { value: 'Weekday HE 12-22', viewValue: 'Weekday HE 12-22' },
    { value: 'Weekday HE 14-17', viewValue: 'Weekday HE 14-17' },
    { value: 'Weekday HE 16-19', viewValue: 'Weekday HE 16-19' },
    { value: 'Weekday HE01', viewValue: 'Weekday HE01' },
    { value: 'Weekday HE02', viewValue: 'Weekday HE02' },
    { value: 'Weekday HE03', viewValue: 'Weekday HE03' },
    { value: 'Weekday HE04', viewValue: 'Weekday HE04' },
    { value: 'Weekday HE05', viewValue: 'Weekday HE05' },
    { value: 'Weekday HE06', viewValue: 'Weekday HE06' },
    { value: 'Weekday HE07', viewValue: 'Weekday HE07' },
    { value: 'Weekday HE08', viewValue: 'Weekday HE08' },
    { value: 'Weekday HE09', viewValue: 'Weekday HE09' },
    { value: 'Weekday HE10', viewValue: 'Weekday HE10' },
    { value: 'Weekday HE11', viewValue: 'Weekday HE11' },
    { value: 'Weekday HE12', viewValue: 'Weekday HE12' },
    { value: 'Weekday HE13', viewValue: 'Weekday HE13' },
    { value: 'Weekday HE14', viewValue: 'Weekday HE14' },
    { value: 'Weekday HE15', viewValue: 'Weekday HE15' },
    { value: 'Weekday HE16', viewValue: 'Weekday HE16' },
    { value: 'Weekday HE17', viewValue: 'Weekday HE17' },
    { value: 'Weekday HE18', viewValue: 'Weekday HE18' },
    { value: 'Weekday HE19', viewValue: 'Weekday HE19' },
    { value: 'Weekday HE20', viewValue: 'Weekday HE20' },
    { value: 'Weekday HE21', viewValue: 'Weekday HE21' },
    { value: 'Weekday HE22', viewValue: 'Weekday HE22' },
    { value: 'Weekday HE23', viewValue: 'Weekday HE23' },
    { value: 'Weekday HE24', viewValue: 'Weekday HE24' },
    { value: 'Weekdays HE12-22', viewValue: 'Weekdays HE12-22' },
    { value: 'Weekend HE 12-22', viewValue: 'Weekend HE 12-22' },
    { value: 'Weekend HE 14-17', viewValue: 'Weekend HE 14-17' },
    { value: 'Weekend HE01', viewValue: 'Weekend HE01' },
    { value: 'Weekend HE02', viewValue: 'Weekend HE02' },
    { value: 'Weekend HE03', viewValue: 'Weekend HE03' },
    { value: 'Weekend HE04', viewValue: 'Weekend HE04' },
    { value: 'Weekend HE05', viewValue: 'Weekend HE05' },
    { value: 'Weekend HE06', viewValue: 'Weekend HE06' },
    { value: 'Weekend HE07', viewValue: 'Weekend HE07' },
    { value: 'Weekend HE08', viewValue: 'Weekend HE08' },
    { value: 'Weekend HE09', viewValue: 'Weekend HE09' },
    { value: 'Weekend HE10', viewValue: 'Weekend HE10' },
    { value: 'Weekend HE11', viewValue: 'Weekend HE11' },
    { value: 'Weekend HE12', viewValue: 'Weekend HE12' },
    { value: 'Weekend HE13', viewValue: 'Weekend HE13' },
    { value: 'Weekend HE14', viewValue: 'Weekend HE14' },
    { value: 'Weekend HE15', viewValue: 'Weekend HE15' },
    { value: 'Weekend HE16', viewValue: 'Weekend HE16' },
    { value: 'Weekend HE17', viewValue: 'Weekend HE17' },
    { value: 'Weekend HE18', viewValue: 'Weekend HE18' },
    { value: 'Weekend HE19', viewValue: 'Weekend HE19' },
    { value: 'Weekend HE20', viewValue: 'Weekend HE20' },
    { value: 'Weekend HE21', viewValue: 'Weekend HE21' },
    { value: 'Weekend HE22', viewValue: 'Weekend HE22' },
    { value: 'Weekend HE23', viewValue: 'Weekend HE23' },
    { value: 'Weekend HE24', viewValue: 'Weekend HE24' },
    { value: 'Weekends HE12-22', viewValue: 'Weekends HE12-22' },
    { value: 'Wrap', viewValue: 'Wrap' },
  ]

  usValue = [
    { value: 'US$/MWh', viewValue: 'US$/MWh' },
  ]
  status = [
    { value: 'Valid', viewValue: 'Valid-if' },
    { value: 'Void', viewValue: 'Void-if' },
    { value: 'Pending', viewValue: 'Pending-if' },
    { value: 'What-if', viewValue: 'What-if' },
  ]
}
