import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Containers } from './Container';
import { OnlyLoggedInUsersGuard, OnlyLoggedOutUsersGuard } from './services/authentication.service';
import { ReviewLSChannelCutsComponent } from './Container/ercot/SCR-727-ESIID-Database/reviewChannelCuts/review-ls-channel-cuts/review-ls-channel-cuts.component';
import { ReviewEsiIdServiceHistoryComponent } from './Container/ercot/SCR-727-ESIID-Database/review-esi-id-service-history/review-esi-id-service-history.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { LourenComponent } from './Container/ercot/dashboard/louren/louren.component';
import { DailyEnergyComponent } from './daily-energy/daily-energy.component';
import { EnergyWasteComponent } from './energy-waste/energy-waste.component';
import { WeeklyEnergyComponent } from './weekly-energy/weekly-energy.component';
import { EnergySpikesComponent } from './energy-spikes/energy-spikes.component';
// import { ReviewEsiIdUsageMeterReadsComponent } from './Container/ercot/SCR-727-ESIID-Database/review-esi-id-usage-meter-reads/review-esi-id-usage-meter-reads.component';



const routes: Routes = [
      {
            path: 'login', component: Containers.LoginComponent,
            canActivate: [OnlyLoggedOutUsersGuard]
      },
      {
            path: '', component: Containers.HomeLayoutComponent,
            canActivate: [OnlyLoggedInUsersGuard],
            children: [
                  // { path: '', component: DashboardComponent }
                  { path: '', pathMatch: 'full', component: MaindashboardComponent },
                  // { path: '/louren', pathMatch: 'full', redirectTo: '/louren' },
                  // loadChildren: './Container/ercot/daahboard/louren/module#Module'
                  { path: 'louren',component:Containers.LourenComponent },
                  { path: 'energywaste',component:EnergyWasteComponent },
                  { path: 'dailyenergy',component:DailyEnergyComponent },
                  { path: 'energy-spikes',component:EnergySpikesComponent },
                  { path: 'weekly-comparison',component:WeeklyEnergyComponent },
                  // RoutingModule
                  { path: 'home', component: Containers.HomeComponent },
                  { path: 'forecastertool', loadChildren: './Container/ercot/forcaster-tool/ReviewForcast/forecaster-tool/module#Module' },
                  { path: 'esiiddiscrepancy', loadChildren: './Container/ercot/forcaster-tool/esiid-discrepancy/module#Module' },
                  { path: 'maturity-forecast', loadChildren: './Container/ercot/forcaster-tool/maturity-forcast/module#Module' },
                  { path: 'review-customer-count', loadChildren: './Container/ercot/forcaster-tool/ReviewCustomerCounts/review-customer-count/module#Module' },
                  { path: 'viewcustomerreport', loadChildren: './Container/ercot/forcaster-tool/view-customer-report/module#Module' },
                  { path: 'load-forecast', loadChildren: './Container/ercot/forcaster-tool/load-forecast/module#Module' },

                  { path: 'fixed-float-swaps', component: Containers.FixedFloatSwapsComponent },
                  { path: 'physical-power', component: Containers.PhysicalPowerComponent },

                  { path: 'review-ls-channel-cuts-component', loadChildren: './Container/ercot/SCR-727-ESIID-Database/reviewChannelCuts/review-ls-channel-cuts/module#Module' },
                  { path: 'review-esiid-service-history-component', loadChildren: './Container/ercot/SCR-727-ESIID-Database/review-esi-id-service-history/module#Module' },
                  { path: 'review-esiid-usage-meter-reads-component', loadChildren: './Container/ercot/SCR-727-ESIID-Database/reviewEsiidUsageMeterRead/review-esi-id-usage-meter-reads/module#Module' },

                  { path: 'ercot-crr', component: Containers.ERCOTCRRComponent },
                  { path: 'review-notional-valuations', component: Containers.ReviewNotionalValuationsComponent },
                  { path: 'alert-monitor', component: Containers.AlertMonitorComponent },

                  { path: 'weather-zone-actual', loadChildren: './Container/ercot/forcaster-tool/weatherzone-actual/module#Module' },
                  { path: 'weather-zone-forecast', loadChildren: './Container/ercot/forcaster-tool/weatherzone-forecast/module#Module' },
                  { path: 'retail-price', loadChildren: './Container/ercot/forcaster-tool/retail-price/module#Module' },
                  { path: 'esiid-lookup', loadChildren: './Container/ercot/esiid-lookup/module#Module' },

                  { path: 'review-mtm-trade-valuations', component: Containers.ReviewMTMTradeValuationsComponent },
                  { path: 'crrs', component: Containers.CRRsComponent },
                  { path: 'HourlyForecast', component: Containers.HourlyComponent},
                  { path:'MonthlyForecast', component: Containers.MonthlysComponent},
                  { path:'DateRangeForecast', component: Containers.DateRangeComponent },
                  { path: 'administration-crrs', component: Containers.CRRComponent },

                  { path: 'ercot-load', loadChildren: './Container/ercot/dashboard/ercot-load/module#Module' },

                  { path: 'ercot-outlook', component: Containers.ErcotOutlookComponent },
                  { path: 'shift-log-reports', component: Containers.ShiftLogReportsComponent },
                  { path: 'physical-power-trade', component: Containers.PhysicalPowerTradeComponent },
                  { path: 'physical-power-option-trade', component: Containers.PhysicalPowerOptionTrade, },//trade capture
                  { path: 'fixed-for-float', component: Containers.FixedforFloatComponent },
                  { path: 'import-forward-prices', component: Containers.ImportforwardpricesComponent },
                  { path: 'review-forward-prices', component: Containers.ReviewForwardPricesComponent },
                  { path: 'generate-power-counterparty-invoices', component: Containers.GeneratepowercounterpartyinovicesComponent },
                  { path: 'review-counterparty-invoices', component: Containers.ReviewcounterpartyinovicesComponent },
                  { path: 'review-uninvoiced-authority-report', component: Containers.ReviewuninvoicedactivityreportsComponent },

                  { path: 'import-customer-account', loadChildren: './Container/ercot/forcaster-tool/import-customer-account/module#Module' },
                  { path: 'weather-zones', loadChildren: './Container/ercot/dashboard/weatherzones/module#Module' },

                  { path: 'prices', component: Containers.PricesComponent },

                  { path: 'louren', loadChildren: './Container/ercot/dashboard/louren/module#Module' },

                  { path: 'block-graph', component: Containers.BlockGraphsComponent },
                  { path: 'power-trade-option', component: Containers.PhysicalPowerTradeOptionErcotComponent }, //ercot

                  { path: 'esiid-count', loadChildren: './Container/ercot/SCR-727-ESIID-Database/esiidCount/esiid-count/module#Module' },
                  { path: 'ams-interval', loadChildren: './Container/ercot/SCR-727-ESIID-Database/AMSIntervalData/ams-interval-data/module#Module' },
                  { path: 'review-ams-interval', loadChildren: './Container/ercot/SCR-727-ESIID-Database/ReviewAmsInterval/review-ams-interval/module#Module' },


            ]
      },
];

@NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
})
export class AppRoutingModule { }
