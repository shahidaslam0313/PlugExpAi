import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app-material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Containers } from './Container';
import { HomeLayoutComponent } from './Container/home-layout/home.layout.component';
import { UtilityService } from './services/utility.service';
import { HttpClientModule } from '@angular/common/http';
import { EsiidDiscrepancyComponent } from './Container/ercot/forcaster-tool/esiid-discrepancy/esiid-discrepancy.component';
import { MaturityForcastComponent } from './Container/ercot/forcaster-tool/maturity-forcast/maturity-forcast.component';
import { ViewCustomerReportComponent } from './Container/ercot/forcaster-tool/view-customer-report/view-customer-report.component';
import { LoginComponent } from './Container/login/login.component';
import { OnlyLoggedInUsersGuard, OnlyLoggedOutUsersGuard } from './services/authentication.service';
import { LoadForecastComponent } from './Container/ercot/forcaster-tool/load-forecast/load-forecast.component';
import { ForecasterToolComponent } from './Container/ercot/forcaster-tool/ReviewForcast/forecaster-tool/forecaster-tool.component';
import { DialogForecasterToolComponent } from './Container/ercot/forcaster-tool/ReviewForcast/dialog-forecaster-tool/dialog-forecaster-tool.component';
import { DialogForecasterCustomerProfileComponent } from './Container/ercot/forcaster-tool/ReviewForcast/dialog-forecaster-customer-profile/dialog-forecaster-customer-profile.component';
import { DialogForcasterWeatherZoneComponent } from './Container/ercot/forcaster-tool/ReviewForcast/dialog-forcaster-weather-zone/dialog-forcaster-weather-zone.component';
import { DialogCountLoadComponent } from './Container/ercot/forcaster-tool/ReviewCustomerCounts/dialog-count-load/dialog-count-load.component';
import { DialogCountWeatherComponent } from './Container/ercot/forcaster-tool/ReviewCustomerCounts/dialog-count-weather/dialog-count-weather.component';
import { ReviewCustomerCountComponent } from './Container/ercot/forcaster-tool/ReviewCustomerCounts/review-customer-count/review-customer-count.component';
import { DialogLoadProfileComponent } from './Container/ercot/forcaster-tool/ReviewForcast/dialog-load-profile/dialog-load-profile.component';
import { DialogCountCustomerProfileComponent } from './Container/ercot/forcaster-tool/ReviewCustomerCounts/dialog-count-customer-profile/dialog-count-customer-profile.component';
// import { FixedFloatSwapsComponent } from './Container/ercot/forcaster-tool/TradeCapture/fixed-for-float-swap/fixed-float-swaps/fixed-float-swaps.component';
// import { PhysicalPowerComponent } from './Container/ercot/forcaster-tool/TradeCapture/physical-power/physical-power.component';
import { ReviewLSChannelCutsComponent } from './Container/ercot/SCR-727-ESIID-Database/reviewChannelCuts/review-ls-channel-cuts/review-ls-channel-cuts.component';
import { ReviewEsiIdServiceHistoryComponent } from './Container/ercot/SCR-727-ESIID-Database/review-esi-id-service-history/review-esi-id-service-history.component';
import { ApiService } from './services/api.service';
import { WeatherzoneForecastComponent } from './Container/ercot/forcaster-tool/weatherzone-forecast/weatherzone-forecast.component';
import { WeatherzoneActualComponent } from './Container/ercot/forcaster-tool/weatherzone-actual/weatherzone-actual.component';
import { RetailPriceComponent } from './Container/ercot/forcaster-tool/retail-price/retail-price.component';
import { EsiidLookupComponent } from './Container/ercot/esiid-lookup/esiid-lookup.component';
// import { CRRsComponent } from './Container/ercot/forcaster-tool/TradeCapture/crrs/crrs.component';
import { CRRComponent } from './Container/administration/ercot/crr/crr.component';
import { ErcotLoadComponent } from './Container/ercot/dashboard/ercot-load/ercot-load.component';
import { AlertComponent } from './Container/administration/ercot/alert/alert.component';
import { ErcotOutlookComponent } from './Container/ercot/dashboard/ercot-outlook/ercot-outlook.component';
import { PhysicalPowerTradeComponent } from './Container/trade_capture/power/physical-power-trades/physical.power.trade.component';
import { DialogLoadCustomerProfileComponent } from './Container/ercot/forcaster-tool/ReviewCustomerCounts/dialog-load-customer-profile/dialog-load-customer-profile.component';
import { DialogWeatherzoneLoadProfileComponent } from './Container/ercot/forcaster-tool/ReviewCustomerCounts/dialog-weatherzone-load-profile/dialog-weatherzone-load-profile.component';
import { DialogWeatherzoneProfileComponent } from './Container/ercot/forcaster-tool/ReviewForcast/dialog-weatherzone-profile/dialog-weatherzone-profile.component';
// import { DialogFixedComponent } from './Container/ercot/forcaster-tool/TradeCapture/fixed-for-float-swap/dialog-fixed/dialog-fixed.component';
import { ResponsiveColumnsDirective } from './Container/trade_capture/power/new-fixed-float/responsive-directive';
import { WeatherzonesComponent } from './Container/ercot/dashboard/weatherzones/weatherzones.component';
import { ChartsModule } from 'ng2-charts';
// import { BlockGraphsComponent } from './Container/ercot/forcaster-tool/TradeCapture/block-graphs/block-graphs.component';
import { RecapchaService } from './recapcha.service';
import { RecapchaComponent } from './Container/recapcha/recapcha.component';
// import { PhysicalPowerTradeOptionErcotComponent } from './Container/ercot/forcaster-tool/TradeCapture/physical-power-trade-option-ercot/physical-power-trade-option-ercot.component';
import { EsiidCountComponent } from './Container/ercot/SCR-727-ESIID-Database/esiidCount/esiid-count/esiid-count.component';
import { FixedFloatSwapsComponent } from './Container/ercot/TradeCapture/fixed-for-float-swap/fixed-float-swaps/fixed-float-swaps.component';
import { PhysicalPowerComponent } from './Container/ercot/TradeCapture/physical-power/physical-power.component';
import { CRRsComponent } from './Container/ercot/TradeCapture/crrs/crrs.component';
import { DialogFixedComponent } from './Container/ercot/TradeCapture/fixed-for-float-swap/dialog-fixed/dialog-fixed.component';
import { BlockGraphsComponent } from './Container/ercot/TradeCapture/block-graphs/block-graphs.component';
import { PhysicalPowerTradeOptionErcotComponent } from './Container/ercot/TradeCapture/physical-power-trade-option-ercot/physical-power-trade-option-ercot.component';
import { ReviewEsiIdUsageMeterReadsComponent } from './Container/ercot/SCR-727-ESIID-Database/reviewEsiidUsageMeterRead/review-esi-id-usage-meter-reads/review-esi-id-usage-meter-reads.component';
import { DialogSelectionUsageMeterComponent } from './Container/ercot/SCR-727-ESIID-Database/reviewEsiidUsageMeterRead/dialog-selection-usage-meter/dialog-selection-usage-meter.component';
import { DialogSelectionChannelCutsComponent } from './Container/ercot/SCR-727-ESIID-Database/reviewChannelCuts/dialog-selection-channel-cuts/dialog-selection-channel-cuts.component';
import { AmsIntervalDataComponent } from './Container/ercot/SCR-727-ESIID-Database/AMSIntervalData/ams-interval-data/ams-interval-data.component';
import { ReviewAmsIntervalComponent } from './Container/ercot/SCR-727-ESIID-Database/ReviewAmsInterval/review-ams-interval/review-ams-interval.component';
import { DialogSelectionReviewAmsComponent } from './Container/ercot/SCR-727-ESIID-Database/ReviewAmsInterval/dialog-selection-review-ams/dialog-selection-review-ams.component';
import { LinegraphComponent } from './linegraph/linegraph.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { EnergyWasteComponent } from './energy-waste/energy-waste.component';
import { DailyEnergyComponent } from './daily-energy/daily-energy.component';
import { WeeklyEnergyComponent } from './weekly-energy/weekly-energy.component';
import { DateRangeComponent } from './date-range/date-range.component';

@NgModule({
  declarations: [
    AppComponent,
    // Containers.DashboardComponent,
    Containers.HomeComponent,
Containers.LinegraphComponent,
Containers.HourlysComponent,
Containers.MonthlyComponent,
Containers.HourlyComponent,
Containers.MonthlysComponent, 
Containers.DateRangeComponent, 
Containers.AlertDialogComponent,
    Containers.AlertMonitorComponent,
    Containers.AlertDialogComponent,
    Containers.AlertEmailComponent,
    Containers.SelectionCriteriaDialog,
    Containers.ShiftLogReportsComponent,
    Containers.PhysicalPowerTradeComponent,
    Containers.PowerTradeSelectionDialog,
    Containers.PhysicalPowerOptionTrade,
    Containers.PhysicalPowerOptionsDialog,
    Containers.FixedforFloatComponent,
    Containers.FixedforFloatDialog,
Containers.LourenComponent,
    Containers.ReviewForwardPricesComponent,
    Containers.ImportforwardpricesComponent,
    Containers.ReviewForwardDialogComponent,
    HomeLayoutComponent,
    Containers.DialogForecasterToolComponent,
 
    // ForecasterToolComponent,
    // DialogForecasterToolComponent,
    // EsiidDiscrepancyComponent,
    // MaturityForcastComponent,
    // ReviewCustomerCountComponent,
    // ViewCustomerReportComponent,
    LoginComponent,
    // DialogForecasterCustomerProfileComponent,
    // DialogForcasterWeatherZoneComponent,
    // LoadForecastComponent,
    // DialogCountWeatherComponent,
    // DialogCountLoadComponent,
    // DialogLoadProfileComponent,
    // DialogCountCustomerProfileComponent,
    FixedFloatSwapsComponent,
    PhysicalPowerComponent,
    // ReviewLSChannelCutsComponent,
    // ReviewEsiIdServiceHistoryComponent,
    // ReviewEsiIdUsageMeterReadsComponent,
    // WeatherzoneActualComponent,
    // WeatherzoneForecastComponent,
    // RetailPriceComponent,
    // EsiidLookupComponent,
    PhysicalPowerTradeComponent,
    CRRsComponent,
    CRRComponent,
    // ErcotLoadComponent,
    AlertComponent,
    ErcotOutlookComponent,
    Containers.NewFixedFloatComponent,
    Containers.NewPowerTradeComponent,
    Containers.NewPowerOptionComponent,
    // DialogLoadCustomerProfileComponent,
    // DialogWeatherzoneLoadProfileComponent,
    // DialogWeatherzoneProfileComponent,
    DialogFixedComponent,
    Containers.ReviewMTMTradeValuationsComponent,
    Containers.ReviewNotionalValuationsComponent,
    Containers.ERCOTCRRComponent,
    Containers.ReviewTradeValuationDialogComponent,
    Containers.ReviewNotionalDialogComponent,
    Containers.GeneratepowercounterpartyinovicesComponent,
    Containers.ReviewcounterpartyinovicesComponent,
    Containers.ReviewuninvoicedactivityreportsComponent,
  
    // Containers.ImportCustomerAccountComponent,
    ResponsiveColumnsDirective,
    Containers.ReviewInvoiceComponent,
    // Containers.WeatherzonesComponent,
    Containers.PricesComponent,
    // Containers.LourenComponent,
    BlockGraphsComponent,
    RecapchaComponent,
    PhysicalPowerTradeOptionErcotComponent,
    // EsiidCountComponent,
    // DialogSelectionUsageMeterComponent,
    // DialogSelectionChannelCutsComponent,
    // AmsIntervalDataComponent,
    // ReviewAmsIntervalComponent,
    // DialogSelectionReviewAmsComponent
    Containers.DialogHourlyComponent,
    MaindashboardComponent,
    EnergyWasteComponent,
    DailyEnergyComponent,
    WeeklyEnergyComponent,
    DateRangeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    ApiService,
    UtilityService,
    OnlyLoggedInUsersGuard,
    OnlyLoggedOutUsersGuard,
    RecapchaService
    
  ],
  entryComponents: [
    // DialogForecasterToolComponent,
    // DialogForecasterCustomerProfileComponent,
    // DialogForcasterWeatherZoneComponent,
    // DialogCountWeatherComponent,
    // DialogCountLoadComponent,
    // DialogLoadProfileComponent,
    // DialogCountCustomerProfileComponent,
    Containers.AlertDialogComponent,
    // DialogForecasterToolComponent,
    Containers.DialogForecasterToolComponent,
    Containers.MonthlyComponent,
    Containers.HourlyComponent,
Containers.MonthlysComponent, 
    Containers.SelectionCriteriaDialog,
    Containers.AlertEmailComponent,
    Containers.PowerTradeSelectionDialog,
    Containers.PhysicalPowerOptionsDialog,
    Containers.FixedforFloatDialog,
    Containers.ReviewTradeValuationDialogComponent,
    Containers.LinegraphComponent ,
    // DialogLoadCustomerProfileComponent,
    // DialogWeatherzoneLoadProfileComponent,
    Containers.ReviewForwardDialogComponent,
    Containers.ReviewNotionalDialogComponent,
    Containers.ReviewInvoiceComponent,
    // DialogWeatherzoneProfileComponent,
    DialogFixedComponent,
    Containers.DialogHourlyComponent,
    // DialogSelectionUsageMeterComponent,
    // DialogSelectionChannelCutsComponent,
    // DialogSelectionReviewAmsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// SFoe2019**
