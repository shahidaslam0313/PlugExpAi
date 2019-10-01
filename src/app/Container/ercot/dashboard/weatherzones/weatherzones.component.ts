import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weatherzones',
  templateUrl: './weatherzones.component.html',
  styleUrls: ['./weatherzones.component.scss', '../../../button.scss']
})
export class WeatherzonesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  coastHouston(){
    window.open('https://weather.com/weather/tenday/l/77001?from=36hr_topnav_undeclared', '_blank')
  }
  eastRusk() {
    window.open('https://weather.com/weather/tenday/l/USTX1186?from=36hr_topnav_undeclared', '_blank')
  }
  WestMidland() {
    window.open('https://weather.com/weather/tenday/l/USTX0888?from=36hr_topnav_undeclared', '_blank')
  }
  NorthWichitaFalls() {
    window.open('https://weather.com/weather/tenday/l/USTX1464?from=36hr_topnav_undeclared', '_blank')
  }
  NorthCentralDallas() {
    window.open('https://weather.com/weather/tenday/l/USTX0327?from=36hr_topnav_undeclared', '_blank')
  }
  SouthCorpus() {
    window.open('https://weather.com/weather/tenday/l/USTX0294?from=36hr_topnav_undeclared', '_blank')
  }
  SouthCentralAustin() {
    window.open('https://weather.com/weather/tenday/l/USTX0057?from=36hr_topnav_undeclared', '_blank')
  }
  WestSanAngelo() {
    window.open('https://weather.com/weather/tenday/l/USTX1199?from=36hr_topnav_undeclared', '_blank')
  }
}






