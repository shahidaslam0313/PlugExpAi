import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { filter } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'home-layout',
  templateUrl: './home.layout.component.html',
  styleUrls: ['./home.layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  btnStatus: boolean = true;
  currentUrl = { route: null, cust_id: null };
  year = new Date().getFullYear();
  menuItems = [
    {
      // name: 'Home', route: '/louren', icon: 'fa fa-home', submenu: [
      name: 'Home', route: '', icon: 'fa fa-home', submenu: [
        {
          name: 'Dashboard', route: '', icon: 'fa fa-tachometer-alt', submenu: [

            { name: 'ERCOT Load', route: '/ercot-load', icon: 'fas fa-window-restore', submenu: [] },
            // { name: 'ERCOT Outlook', route: '/ercot-outlook', icon: 'fas fa-clipboard-list', submenu: [] },
            // { name: 'Weather zones', route: '/weather-zones', icon: 'fas fa-cloud-meatball', submenu: [] },
            // { name: 'Prices', route: '/prices', icon: '', submenu: [] },
            { name: 'Load Graphs', route: '/louren', icon: 'fas fa-chart-line', submenu: [] },
          ]
        },
       
        
        { name: 'ESIID Lookup', route: '/esiid-lookup', icon: 'fas fa-id-card-alt', submenu: [] },
      ]
    },
    {
      name: 'Dashboard ', route: '/', icon: 'fas fa-poo-storm', submenu: []
    },
    {
      name: 'WattExpert Forecast', route: '', icon: 'fas fa-poo-storm', submenu: [
        // { name: 'WattExpert Al Review Forecast', route: '/forecastertool', icon: 'fab fa-wpforms', submenu: [] },
        { name: 'Monthly Forecast', route: '/MonthlyForecast', icon: 'fas fa-window-restore', submenu: [], },
        { name: 'Hourly Forecast', route: '/HourlyForecast', icon: 'fas fa-window-restore', submenu: [] },
        { name: 'DateRange Forecast', route: '/DateRangeForecast', icon: 'fas fa-window-restore', submenu: [] },
     
        { name: 'Weather Zone Forecast ', route: '/weather-zone-forecast', icon: 'fas fa-cloud-sun	', submenu: [] },
        { name: 'Weather Zone Actual', route: '/weather-zone-actual', icon: 'fas fa-cloud-meatball', submenu: [] },
      ]
    },
    {
      name: 'Individual Customer Forecast', route: '', icon: 'fas fa-poo-storm', submenu: [
        {
          name: 'Daily Energy Monitoring  ', route: '/dailyenergy', icon: 'fas fa-poo-storm', submenu: []
        },
        // {
        //   name: 'Energy Wastage', route: '/energywaste', icon: 'fas fa-poo-storm', submenu: []
        // },
         {
          name: 'Weekly Comparison', route: '/weekly-comparison', icon: 'fas fa-poo-storm', submenu: []
        },
    
        {
          name: 'Energy Spikes', route: '/', icon: 'fas fa-poo-storm', submenu: []
        },
        {
          name: 'Weather Related Events', route: '/', icon: 'fas fa-poo-storm', submenu: []
        },
        
      ]
    },
    {
      name: 'Company Forecast (For ALL Customers)', route: '', icon: 'fas fa-poo-storm', submenu: [
        {
          name: 'Daily Energy Monitoring  ', route: '/dailyenergy', icon: 'fas fa-poo-storm', submenu: []
        },
        // {
        //   name: 'Energy Wastage', route: '/energywaste', icon: 'fas fa-poo-storm', submenu: []
        // },
         {
          name: 'Weekly Comparison', route: '/weekly-comparison', icon: 'fas fa-poo-storm', submenu: []
        },
    
        {
          name: 'Energy Spikes', route: '/', icon: 'fas fa-poo-storm', submenu: []
        },
        {
          name: 'Weather Related Events', route: '/', icon: 'fas fa-poo-storm', submenu: []
        },
        
      ]
    },
 
    
    {
      name: 'SCR-727 Data Mart', route: '', icon: 'fas fa-database', submenu: [
        { name: 'ESIID Counts', route: '/esiid-count', icon: 'fas fa-clipboard-list', submenu: [] },
        { name: 'Review ESIID Service History', route: '/review-esiid-service-history-component', icon: '	fas fa-clipboard-list', submenu: [] },
        { name: 'Review ESIID Usage (Meter Reads)', route: '/review-esiid-usage-meter-reads-component', icon: 'fa fa-clipboard', submenu: [] },
        // { name: 'Review LS Channel Cuts', route: '/review-ls-channel-cuts-component', icon: 'fab fa-wpforms', submenu: [] },
        // { name: 'AMS Interval Data Export', route: '/ams-interval', icon: 'fab fa-wpforms', submenu: [] },
        { name: 'Review AMS Interval Data ', route: '/review-ams-interval', icon: 'fab fa-wpforms', submenu: [] },
        // { name: 'Usage by ESIID', route: '/', icon: 'fas fa-clipboard-list', submenu: [] },
      ]
    },
  ];

  constructor(private router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog, private location: Location, private route: ActivatedRoute) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.currentUrl.cust_id = location.path().substr(location.path().lastIndexOf('/') + 1);
      this.currentUrl.route = location.path().substr(0, location.path().lastIndexOf('/')).substr(location.path().substr(0, location.path().lastIndexOf('/')).lastIndexOf('/') + 1);
    });
  }
  logOut() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
  header_name;
  get_local(val1): void{
    this.header_name = val1

  }
  
   
  ngOnInit() {
 
  //  this.header_name= this.router.url;
   if ( this.router.url == "/ercot-load"){
     this.header_name= "ERCOT Load"
   }else if ( this.router.url == "/louren"){
    this.header_name = "Load Graphs"
   }
   else if ( this.router.url == "/esiid-lookup"){
    this.header_name = "ESIID Lookup" 
   }
   else if ( this.router.url == "/"){
    this.header_name = "Dashboard" 
   }
   else if ( this.router.url == "/MonthlyForecast"){
    this.header_name = "Monthly Forecast"
    
   
   }
   else if ( this.router.url == "/HourlyForecast"){
    this.header_name = "Hourly Forecast"
     
   }
   else if ( this.router.url == "/DateRangeForecast"){
    this.header_name = "DateRange Forecast"
   }
   else if ( this.router.url == "/DateRangeForecast"){
    this.header_name = "DateRange Forecast"
   }
   else if ( this.router.url == "/weather-zone-forecast"){
    this.header_name = "Weather Zone Forecast"
   }
   else if ( this.router.url == "/weather-zone-actual"){
    this.header_name = "Weather Zone Actual"
   }
   else if ( this.router.url == "/dailyenergy"){
    this.header_name = "Daily Energy Monitoring "
   }
   else if ( this.router.url == "/energywaste"){
    this.header_name = "Energy Wastage"
   }
   else if ( this.router.url == "/weekly-comparison"){
    this.header_name = "Weekly Comparison"
   }
  //  else if ( this.router.url == "/#"){
  //   this.header_name = "Energy Spikes"
  //  }
  //  else if ( this.router.url == "/#"){
  //   this.header_name = "Energy Spikes"
  //  }
  //  else if ( this.router.url == "/#"){
  //   this.header_name = "Weather Related Events"
  //  }
   else if ( this.router.url == "/esiid-count"){
    this.header_name = "ESIID Counts"
   }
   else if ( this.router.url == "/review-esiid-service-history-component"){
    this.header_name = "Review ESIID Service History"
   }
   else if ( this.router.url == "/review-esiid-usage-meter-reads-component"){
    this.header_name = "Review ESIID Usage (Meter Reads)"
   }
   else if ( this.router.url == "/review-ams-interval"){
    this.header_name = "Review AMS Interval Data"
   }

 



    
  }
 

}
