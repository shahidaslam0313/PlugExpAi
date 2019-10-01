import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-power-option',
  templateUrl: './new-power-option.component.html',
  styleUrls: ['./new-power-option.component.scss','../../../button.scss']
})
export class NewPowerOptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usValue = [
    { value: 'US$/MWh', viewValue: 'US$/MWh' },
  ]

  information = [
    { value: 'Fixed', viewValue: 'Fixed' },
    { value: 'Indexed', viewValue: 'Indexed' },
    { value: 'Weighted Indexed', viewValue: 'Weighted Indexed' },
    { value: 'Heat Rate', viewValue: 'Heat Rate' },
    { value: 'Weighted Heat Rate', viewValue: 'Weighted Heat Rate' },
    { value: 'Profiled Repeating', viewValue: 'Profiled Repeating' },
  ]
  
  index = [
    { value: 'abc', viewValue: 'abc' },
  ]

  adjust: string="Yes";
  modify: string="No";
  callput: string="Call";
  buySell: string="Buy";
  buysell: string[] = ['Buy','Sell'];
  validWahtif: string="Valid";
  whatif: string[] = ['Valid','What if'];
  adjustEtags:string[]=['Yes','No','No Value'];
  modifyEtags:string[]=['Yes','No','No Value'];
  callPuts: string[] = ['Call', 'Put', 'Either'];

  gasIndexArray=[]
  addPrice(gasindex, weight) {
    let obj = {
    }
    obj['index'] = gasindex
    obj['weight'] = weight
    this.gasIndexArray.push(obj)
    console.log(this.gasIndexArray)
  }
  deleteWeightHeat(a) {
    // console.log(a.index)
    for (let i = 0; i < this.gasIndexArray.length; i++) {
      if (this.gasIndexArray[i] == a) {
        this.gasIndexArray.splice(i, 1);
      }
    }
    console.log(this.gasIndexArray)
  }  
}
