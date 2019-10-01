import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-ercot-outlook',
  templateUrl: './ercot-outlook.component.html',
  styleUrls: ['./ercot-outlook.component.scss']
})
export class ErcotOutlookComponent implements OnInit {

  constructor(private _location: Location) {
    window.open('http://www.ercot.com/content/cdr/main/currentDayForecastSystemLoad.html', '_blank')
   }

  ngOnInit() {
    this._location.back()
  }

}
