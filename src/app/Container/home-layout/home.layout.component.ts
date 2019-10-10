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
       
        // {
        //   name: 'Trade Capture', route: '', icon: 'fas fa-boxes', submenu: [
        //     { name: 'Block Graphs', route: '/block-graph', icon: 'fas fa-chart-line', submenu: [] },
        //     { name: 'Fixed-for-Float Swaps', route: '/fixed-float-swaps', icon: 'fas fa-clipboard-check', submenu: [] },
        //     // { name: 'Physical Power Option Trades', route: '/power-trade-option', icon: 'fas fa-layer-group', submenu: [] },
        //     { name: 'Physical Power Trades', route: '/physical-power-trade', icon: 'fas fa-archive', submenu: [] },
        //     // { name: 'CRRs', route: '/crrs', icon: ' ', submenu: [] },
        //   ]
        // },
        // { name: 'Nodal Scheduling', route: '', icon: '', submenu: [] },
       

        // { name: 'Settlements & Invoicing', route: '', icon: '', submenu: [] },
        // { name: 'Downloaded ERCOT Reports', route:'', icon: '', submenu: [] },
        { name: 'ESIID Lookup', route: '/esiid-lookup', icon: 'fas fa-id-card-alt', submenu: [] },
      ]
    },
    // {
    //   name: 'Trade Capture', route: '', icon: 'fas fa-boxes', submenu: [
    //     { name: 'Alert Monitor', route: '/alert-monitor', icon: '', submenu: [] },
    //     { name: 'Shift Log Reports', route: '/shift-log-reports', icon: 'fas fa-tasks', submenu: [] },
    //     {
    //       name: 'Power', route: '', icon: '', submenu: [
    //         { name: 'Fixed-For-Float Swaps', route: '/fixed-for-float', icon: 'fas fa-clipboard-check', submenu: [] },
    //         { name: 'Physical Power Option Trades', route: '/physical-power-option-trade', icon: 'fas fa-layer-group', submenu: [] },
    //         { name: 'Physical Power Trades', route: '/physical-power-trade', icon: 'fas fa-archive', submenu: [] },
    //       ]
    //     },
    //     {
    //       name: 'Risk Management', route: '', icon: '', submenu: [
    //         { name: 'Import Forward Prices', route: '/import-forward-prices', icon: 'fa fa-upload', submenu: [] },
    //         { name: 'Review Forward Prices', route: '/review-forward-prices', icon: 'fas fa-clipboard-list', submenu: [] },
    //         { name: 'Review MtM Trade Valuations', route: '/review-mtm-trade-valuations', icon: '', submenu: [] },
    //         { name: 'Review Notional Valuations', route: '/review-notional-valuations', icon: 'fa fa-clipboard', submenu: [] },
    //         { name: 'ERCOT CRR P&L', route: '/ercot-crr', icon: '', submenu: [] },
    //       ]
    //     },
    //     {
    //       name: 'Wholesale Checkout & Billing', route: '', icon: '', submenu: [
    //         { name: 'Generate Power Counterparty Invoices', route: '/generate-power-counterparty-invoices', icon: 'fas fa-window-restore', submenu: [] },
    //         { name: 'Review Counterparty Invoices', route: '/review-counterparty-invoices', icon: 'fas fa-clipboard-list', submenu: [] },
    //         { name: 'Review Uninvoiced Activity Reports', route: '/review-uninvoiced-authority-report', icon: 'fas fa-layer-group', submenu: [] },
    //       ]
    //     },
    //   ]
    // },
    {
      name: 'New Component ', route: '', icon: 'fas fa-poo-storm', submenu: []
    },



    {
      name: 'WattExpert Al  Forecast', route: '', icon: 'fas fa-poo-storm', submenu: [
        // { name: 'WattExpert Al Review Forecast', route: '/forecastertool', icon: 'fab fa-wpforms', submenu: [] },
        { name: 'WattExpert Al Review Forecast', route: '/forecastertool', icon: 'fab fa-wpforms', submenu: [
    
          { name: 'Monthly', route: '/monthlys', icon: 'fas fa-window-restore', submenu: [] },
          { name: 'Hourly', route: '/hourly', icon: 'fas fa-window-restore', submenu: [] },

        ] },
        // { name: 'Review Customer Counts', route: '/review-customer-count', icon: 'fa fa-clipboard', submenu: [] },
        // { name: 'Import Customer Account', route: '/import-customer-account', icon: 'fa fa-upload', submenu: [] },
        // { name: 'ESIID Discrepancy Reports', route: '/esiiddiscrepancy', icon: 'fa fa-file', submenu: [] },
        // { name: 'Maturity Date Forecast Reports', route: '/maturity-forecast', icon: 'fas fa-file-signature', submenu: [] },
        // { name: 'Retail Prices', route: '/retail-price', icon: 'fas fa-layer-group', submenu: [] },
        // { name: 'Customer Report', route: '/viewcustomerreport', icon: '	fas fa-file-alt', submenu: [] },
        // { name: 'Load Forecast Reports', route: '/load-forecast', icon: 'fa fa-file-contract', submenu: [] },
        { name: 'Weather Zone Forecast ', route: '/weather-zone-forecast', icon: 'fas fa-cloud-sun	', submenu: [] },
        { name: 'Weather Zone Actual', route: '/weather-zone-actual', icon: 'fas fa-cloud-meatball', submenu: [] },
      ]
    },
    // {
    //   name: 'Setup', route: '', icon: 'fas fa-user-edit', submenu: [
        // {
        //   name: 'User Access', route: '', icon: ' ', submenu: [
        //   ]
        // },
        // {
          // name: 'ERCOT', route: '', icon: 'fas fa-hospital-alt', submenu: [
          //   { name: 'Alert Monitor', route: '/alert-monitor', icon: 'fas fa-bell', submenu: [] },
          //   { name: 'CRRs', route: '/administration-crrs', icon: 'fas fa-poll-h', submenu: [] },
            //     {
            //       name: 'Nodal Market Configuration', route: '', icon: '', submenu: [
            //         { name: 'Schedule Netting Flags', route: '', icon: '', submenu: [] },
            //         { name: 'Maintain Administration Fee', route: '', icon: ' ', submenu: [] },
            //         { name: 'Maintain Counterparties', route: '', icon: '', submenu: [] },
            //         { name: 'Maintain Determinant Tolerances', route: '', icon: '', submenu: [] },
            //       ]
            //     },
            //     { name: 'TMS Message Log', route: '', icon: '', submenu: [] },
            //   ]
            // },
            // {
            //   name: 'Trade Capture', route: '', icon: '', submenu: [
            //     { name: 'Maintain Counterparties', route: '', icon: '', submenu: [] },
            //     { name: 'Maintain DBAs', route: '', icon: ' ', submenu: [] },
            //     { name: 'Maintain Enabling Agreements', route: '', icon: ' ', submenu: [] },
            //     { name: 'Maintain Invoice Templates', route: '', icon: ' ', submenu: [] },
            //     { name: 'Maintain Power Products', route: '', icon: ' ', submenu: [] },
            //     { name: 'Maintain Traders', route: '', icon: ' ', submenu: [] },
            //     { name: 'Maintain Trading Books', route: '', icon: ' ', submenu: [] },
            //     { name: 'Maintain Trading Desk', route: '', icon: ' ', submenu: [] },
            //     { name: 'Maintain Trading Location', route: '', icon: ' ', submenu: [] },
            //     { name: 'Synchronize Configuration Updtaes', route: '', icon: ' ', submenu: [] },
            //     {
            //       name: 'Maintain Predefined Reasons', route: '', icon: ' ', submenu: [
            //         { name: 'for Power Trade Editors', route: '', icon: ' ', submenu: [] },
            //       ]
            //     },
            //     {
            //       name: 'Market to Market', route: '', icon: ' ', submenu: [
            //         { name: 'Force Re-evaluation', route: '', icon: ' ', submenu: [] },
            //         { name: 'Maintain Power Price Curve sets', route: '', icon: ' ', submenu: [] },
            //         { name: 'Review Forward Prices', route: '', icon: ' ', submenu: [] },
            //         { name: 'Import Forward Prices', route: '', icon: ' ', submenu: [] },
            //       ]
            //     },
    //       ]
    //     },
        
    //   ]
    // },
    
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
  ngOnInit() {
  }

}
