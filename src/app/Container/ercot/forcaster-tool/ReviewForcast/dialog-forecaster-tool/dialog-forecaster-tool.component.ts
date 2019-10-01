import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ApiService } from '../../../../../services/api.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { ForecasterToolComponent } from '../forecaster-tool/forecaster-tool.component';
import { MonthlyComponent } from '../../../../../monthly/monthly.component';


@Component({
  selector: 'app-dialog-forecaster-tool',
  templateUrl: './dialog-forecaster-tool.component.html',
  styleUrls: ['./dialog-forecaster-tool.component.scss', '../../../../table.scss', '../../../../table-animation.scss'],
})
export class DialogForecasterToolComponent implements OnInit {
  
  demoDisplayedColumns: string[] = ['222','1', '2', '3', '4', '5', '6', '7', '8']
  demoDataSource = new MatTableDataSource()
  panelOpenState: boolean = false;
  loading = true
  // usageDisplayedColumns: string[] = ['1', '14', '15', '18']
  // DataSource = new MatTableDataSource()

  // DisplayedColumns2: string[] = ['1', '14', '15', '18']
  // DataSource2 = new MatTableDataSource()

  // monthValue = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  // status1 = true
  // status2 = false

  // year = []
  dataResult = []
  // {
  // date: '',
  // month: '',
  // year: '',
  // predictions_south: '',
  // predictions_north: '',
  // predictions_west: '',
  // predictions_houston: '',
  // total: '',
  // }
  // constructor(private service: ApiService, @Inject(MAT_DIALOG_DATA) public data: any) { }
  constructor(private service: ApiService, @Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog) { }
  grad
  obj = this.data
  ngOnInit() {

    this.demo()
    //   this.year.push(this.data.year[0])
    //   this.year.push(this.data.year[1])

    //   if (this.data.year[0] === this.data.year[1]) {
    //     this.getReviewForecast()
    //     for (let i = 0; i < this.data.month[0].length; i++) {
    //       this.usageDisplayedColumns.push(this.data.month[0][i])
    //     }
    //   } else if (this.data.year[0] !== this.data.year[1]) {
    //     this.status2 = true
    //     this.grad = this.data.granularity
    //     this.getReviewForecast()
    //     this.getReviewForecast2()
    //     for (let i = 0; i < 12; i++) {
    //       if (this.monthValue[i] == this.data.month[0][0]) {
    //         let monthRange = this.monthValue.slice(this.monthValue.indexOf(this.monthValue[i]), this.monthValue.indexOf('Dec') + 1)
    //         for (let j = 0; j < monthRange.length; j++) {
    //           this.usageDisplayedColumns.push(monthRange[j])
    //         }
    //       }
    //     }
    //     for (let i = 0; i < 12; i++) {
    //       let endvalue = this.data.month[0].length - 1
    //       if (this.monthValue[i] == this.data.month[0][endvalue]) {
    //         let monthRange = this.monthValue.slice(this.monthValue.indexOf('Jan'), (this.monthValue.indexOf(this.data.month[0][endvalue]) + 1))
    //         for (let j = 0; j < monthRange.length; j++) {
    //           this.DisplayedColumns2.push(monthRange[j])
    //         }
    //       }
    //     }
    //   }
    //   delete this.data.month
  }
  // getReviewForecast() {
  //   console.log(this.data.year)
  //   this.data.year.length = 0
  //   this.data.year.push(this.year[0])
  //   this.service.newForecast(this.data.granularity, this.data).subscribe(res => {
  //     this.DataSource.data = res['message']
  //     this.loading = false
  //   })
  //   this.data.year.length = 0
  // }
  // getReviewForecast2() {
  //   this.data.year.length = 0
  //   this.data.year.push(this.year[1])
  //   this.service.newForecast(this.grad, this.data).subscribe(res => {
  //     this.DataSource2.data = res['message']
  //     this.loading = false
  //   })
  //   this.data.year.length = 0
  // }
  onSelect() {

    this.panelOpenState = !this.panelOpenState
    let dialogRef = this.dialog.open(MonthlyComponent, {

      // data: this.obj,
    width:"30%"
      // width: "600px",
      // height: "300px",
    
      
    })
    dialogRef.afterClosed().subscribe(result => {
      // this.clearObject()
    })

  }
  demo() {
    // console.log(this.obj)
    // let obj={
    //     // date: '',
    //     // month: '',
    //     // year: '',
    //     // predictions_south: '',
    //     // predictions_north: '',
    //     // predictions_west: '',
    //     // predictions_houston: '',
    //     // total:''
    // }

    // this.demoDataSource.data =this.dataResult.value
    // console.log(this.dataResult)
    this.service.domo1().subscribe(res => {
      console.log(res)
      if (res['status'] == true) {

        // for (let i = 0; i < res['message']['date'][0].length; i++) {
        //   let obj = {}
        //   obj['date'] = res['message']['date'][i]
        //   obj['month'] = res['message']['month'][i]
        //   obj['year'] = res['message']['year'][i]
        //   obj['predictions_south'] = res['message']['predictions_south'][i]
        //   obj['predictions_north'] = res['message']['predictions_north'][i]
        //   obj['predictions_west'] = res['message']['predictions_west'][i]
        //   obj['predictions_houston'] = res['message']['predictions_houston'][i]
        //   obj['total'] = res['message']['total'][i]
        //   this.dataResult.push(obj);
        //   obj = {}
        // }
        // this.demoDataSource.data = this.dataResult
        this.demoDataSource.data = res['message']
        this.loading = false
        console.log(res)
      }
    })

  }
}
