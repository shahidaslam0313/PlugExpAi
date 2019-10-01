import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';
import { MAT_DIALOG_DATA, MatTableDataSource, MatDialog } from '@angular/material';
import { LinegraphComponent } from '../../../../../linegraph/linegraph.component';

@Component({
  selector: 'app-dialog-hourly',
  templateUrl: './dialog-hourly.component.html',
  styleUrls: ['./dialog-hourly.component.scss', '../../../../table.scss','../../../../table-animation.scss']
})
export class DialogHourlyComponent implements OnInit {

  demoDisplayedColumns: string[] = ['220','2','3', '4', '5', '6', '7', '8','9','10','11','12','13','14','15','16','17','18','18','20','21','22','23','24','25','26','27','total']
  demoDataSource = new MatTableDataSource()
  chartData7
  loading = true
  obj = this.data
  constructor(private service: ApiService, @Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog) { }

  ngOnInit() {
    this.showHourly()
    // this. getLineGraph1()
  }
  panelOpenState: boolean = false;

  onSelect() {

    this.panelOpenState = !this.panelOpenState
    let dialogRef = this.dialog.open(LinegraphComponent, {
      // data: this.obj,
    
      // width: "600px",
      // height: "300px",
      width:"30%"
      
    })
    dialogRef.afterClosed().subscribe(result => {
      // this.clearObject()
    })

  }
  showHourly() {
    console.log(this.obj)
    this.service.hourlyLoadzone(this.obj).subscribe(res => {
      // this.service.imbalance1().subscribe(res=>{
      // console.log(res)
      if (res['status'] == true) {
        // if (res['Status'] == true) {
        // this.demoDataSource.data = res['data']
        this.demoDataSource.data = res['message']
        this.loading = false
        console.log(res)
      }
    })
  }

  // getLineGraph1() {
  //   this.service.hourlyLoadzone(this.obj).subscribe(res => {
  //     console.log(res['message'][0])
  //     let message = res['message'][0]
  //     console.log(message)
  //     this.chartData7.barChartLabels.push(`h_1`)  
  //     this.chartData7.barChartData[0]['data'].push(message[`h_1`])
    
  //   })
  // }

  // getLineGraph() {
  //   this.service.imbalance1().subscribe(res => {
  //     if (res['Status'] == true) {
  //       for (let i = 3; i < res['data'].length; i++) {
  //         this.chartData7.barChartLabels.push(res['data'][i])
  //         this.chartData7.barChartData[0]['data1'].push(res['data'][i])
  //       }
  //     }
  //   })
  // }
}
