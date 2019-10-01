import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-power-trade',
  templateUrl: './new-power-trade.component.html',
  styleUrls: ['./new-power-trade.component.scss','../../../button.scss']
})
export class NewPowerTradeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  adjust;
  modify;
  buySell: string="Buy";
  buysell: string[] = ['Buy','Sell'];
  validWahtif: string="Valid";
  whatif: string[] = ['Valid','What if'];
  adjustEtags:string[]=['Yes','No','No Value'];
  modifyEtags:string[]=['Yes','No','No Value'];
}
