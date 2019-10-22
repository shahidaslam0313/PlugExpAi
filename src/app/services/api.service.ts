import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError, forkJoin } from "rxjs"
import { catchError } from 'rxjs/_esm5/operators'
import { Cacheable } from 'ngx-cacheable'
import { UtilityService } from './utility.service';
// import { UtilityService } from './utility.service'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // new = "http://192.168.29.219:8000/"
  // url2 = "http://192.168.29.243:8000/"
  new2 = "http://192.168.29.212:8000/"
  new = "https://apis.plugexpai.com/"


  constructor(private http: HttpClient, private util: UtilityService) { }


  // demo(obj) {
  //   // delete obj.granularity
  //   return this.http.post<any>(`${this.new2}reports/allzones/`, obj)
  // }
  domo1()
  {
    return this.http.get<any>(`${this.new}reports/allzones-dummy/`).pipe(catchError(this.errorHandler))
  }

  domo2()
  {
    return this.http.get<any>(`${this.new}forecast/loadzone-hourly-get/`).pipe(catchError(this.errorHandler))
  }
  newForecast(granularity, obj) {
    delete obj.granularity
    return this.http.post<any>(`${this.new}forecast/` + granularity + `/`, obj)
  }
  //hourly review forcast
  hourlyLoadzone(hourlyValue) {
    let val = {
      from_date:hourlyValue.from_date,
      to_date:hourlyValue.to_date
    }
    return this.http.post<any>(`${this.new}forecast/${'loadzone-hourly-get'}/`, val)
  }
  ForecastCount(granularity, obj) {
    delete obj.granularity
    return this.http.post<any>(`${this.new}reviewcustcounts/` + granularity + `/`, obj)
  }
  // https://apis.plugexpai.com/reports/last-week-monitoring/
  lastweekmonitoring(granularity, obj) {
  
    return this.http.post<any>(`${this.new}reports/last-week-monitoring/` + granularity + `/`, obj)
  }



  @Cacheable()
  esiidDescrepancy(): Observable<any> {
    return this.http.get<any>(`${this.new}reports/esid-list/`).pipe(catchError(this.errorHandler))
  }
  @Cacheable()
  maturityForecast(): Observable<any> {
    return this.http.get<any>(`${this.new}reports/maturity-date-file-list/`).pipe(catchError(this.errorHandler))
  }
  @Cacheable()
  loadForecast(): Observable<any> {
    return this.http.get<any>(`${this.new}reports/loadforecast-file-list/`).pipe(catchError(this.errorHandler))
  }
  @Cacheable()
  customerReport(): Observable<any> {
    return this.http.get<any>(`${this.new}reports/customer-file-list/`).pipe(catchError(this.errorHandler))
  }
  weatherZoneActual(obj): Observable<any> {
    console.log(obj)
    return this.http.get<any>(`${this.new}forecast/weather-zone-actual-get/${obj.timezone}/${obj.to}/${obj.to}/`).pipe(catchError(this.errorHandler))
  }
  weatherZoneForecast(obj): Observable<any> {
    return this.http.get<any>(`${this.new}forecast/weather-zone-forecast-get/${obj.timezone}/${obj.to}/${obj.to}/`).pipe(catchError(this.errorHandler))
  }
  weatherZoneForecast1(obj): Observable<any> {
    return this.http.get<any>(`${this.new2}reports/hourly-prediction-date-range-get/${obj.timezone}/${obj.to}/${obj.to}/`).pipe(catchError(this.errorHandler))
  }
  hourlyLoadzone1(hourlyValue) {
    let val = {
      start_date:hourlyValue.start_date,
      end_date:hourlyValue.end_date
    }
    return this.http.post<any>(`${this.new}reports/hourly-prediction-date-range-get/`, val)
  }
  weeklycomparison(hourlyValue1) {
   
    return this.http.post<any>(`${this.new}reports/weekly-comparison/`, {'u_id': hourlyValue1})
  }

  dailyenergymonitoring(hourlyValue1) {
   
    return this.http.post<any>(`${this.new}reports/daily-energy-monitoring/`, {'u_id': hourlyValue1})
  }
  lastweekweekenergymonitoring(hourlyValue1) {
   
    return this.http.post<any>(`${this.new}reports/last-week-monitoring/`, {'u_id': hourlyValue1})
  }
  // https://apis.plugexpai.com/reports/last-week-monitoring/

  // https://apis.plugexpai.com/reports/daily-energy-monitoring/
  
  retailPrice(obj): Observable<any> {
    return this.http.get<any>(`${this.new}forecast/retail-prices-get/${obj.timezone}/${obj.to}/${obj.to}/`).pipe(catchError(this.errorHandler))
  }
  //import customer account
  importCustomerAccount(obj): Observable<any> {
    return this.http.post<any>(`${this.new}reports/import-customer-upload/`, obj).pipe(catchError(this.errorHandler))
  }
  //Trade Capture //Alert Monitor Service
  alertMonitorService(): Observable<any> {
    return this.http.get<any>(`${this.new}`).pipe(catchError(this.errorHandler))
  }

  //ESIID lookup
  esiidLookup(search): Observable<any> {
    return this.http.get<any>(`${this.new}premise/premise-search/${search}`).pipe(catchError(this.errorHandler))
  }

  //Ercot Load
  ercotLoad(search): Observable<any> {
    return this.http.get<any>(`${this.new}forecast/weather-zone-forecast-single/${search}`).pipe(catchError(this.errorHandler))
  }
  //LOUREN
  @Cacheable()
  lourenForecast(): Observable<any> {
    return this.http.get<any>(`${this.new}forecast/loadzone-loadprofile-graph-get/`).pipe(catchError(this.errorHandler))
  }
  @Cacheable()
  lourenEsiidCount(): Observable<any> {
    return this.http.get<any>(`${this.new}premise/esiid-graph/`).pipe(catchError(this.errorHandler))
  }
  @Cacheable()
  graphRetailPrice(): Observable<any> {
    return this.http.get<any>(`${this.new}forecast/retail-prices-get-graph/`).pipe(catchError(this.errorHandler))
  }
  @Cacheable()
  forecastBackcastActual(): Observable<any> {
    return this.http.get<any>(`${this.new}forecast/forecast-graph/`).pipe(catchError(this.errorHandler))
  }
  @Cacheable()
  forecastNetSupply(): Observable<any> {
    return this.http.get<any>(`${this.new}forecast/forecast-net-supply-net-position-graph/`).pipe(catchError(this.errorHandler))
  }
  @Cacheable()
  AmsCoverageCmz(): Observable<any> {
    return this.http.get<any>(`${this.new}forecast/load-by-ams-cmz-graph/`).pipe(catchError(this.errorHandler))
  }
  @Cacheable()
  imbalance(): Observable<any> {
    return this.http.get<any>(`${this.new}forecast/louren-imbalance-graph/`).pipe(catchError(this.errorHandler))
  }
  @Cacheable()
  imbalance1(): Observable<any> {
    return this.http.get<any>(`${this.new}reports/dummy/`).pipe(catchError(this.errorHandler))
  }




  //Trade capture
  newfixedFloat(obj): Observable<any> {
    return this.http.post<any>(`${this.new}tradecapture/fix-float-post/`, obj).pipe(catchError(this.errorHandler))
  }
  @Cacheable()
  fixedFloat(): Observable<any> {
    return this.http.get<any>(`${this.new}tradecapture/fix-float-get/`).pipe(catchError(this.errorHandler))
  }
  @Cacheable()
  blockGraph(): Observable<any> {
    return this.http.get<any>(`${this.new}tradecapture/graph-dummy/`).pipe(catchError(this.errorHandler))
  }
  //esiid count
  getEsiidCount(obj): Observable<any> {
    return this.http.post<any>(`${this.new}premise/esiid-count-search-with-date/`, obj).pipe(catchError(this.errorHandler))
  }
  //Meter Reads
  getMeterReads(lower, upper): Observable<any> {
    return this.http.get<any>(`${this.new}premise/esiid-usage-list/${lower}/${upper}/`).pipe(catchError(this.errorHandler))
  }
  //filter meter read
  getMeterReadsSearch(obj): Observable<any> {
    return this.http.post<any>(`${this.new}premise/esiid-usage-search/`, obj).pipe(catchError(this.errorHandler))
  }
  //service history
  getServiceHistory(obj): Observable<any> {
    return this.http.post<any>(`${this.new}premise/esiid-service-hist-search/`, obj).pipe(catchError(this.errorHandler))
  }
   //ams
   getReviewAmsInterval(obj): Observable<any> {
    return this.http.post<any>(`${this.new}premise/ams-interval-search/`, obj).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    let errorMsg
    if (error.status != null && error.statusText != null) {
      errorMsg = error.status == 0 ? `The service is unavailable at this time, please try again.` : `${error.status} (${error.statusText})`
    }
    else if (error.message != null) {
      errorMsg = error.message
    }
    else {
      errorMsg = `Server Error`
    }
    return throwError(errorMsg)
  }
}
