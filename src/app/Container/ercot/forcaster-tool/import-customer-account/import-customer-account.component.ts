import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ApiService } from '../../../../services/api.service';
import { UtilityService } from '../../../../services/utility.service';

@Component({
  selector: 'app-import-customer-account',
  templateUrl: './import-customer-account.component.html',
  styleUrls: ['./import-customer-account.component.scss', '../../../table.scss', '../../../button.scss']
})
export class ImportCustomerAccountComponent implements OnInit {

  displayedColumns: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  DataSource1 = new MatTableDataSource()
  data: string[] = ['one', 'two', 'three', 'four', 'five'];
  status: boolean
  showSpinner: boolean = false;
  button: boolean = false;
  fd = new FormData()
  x
  Processing: string[] = [
    'Processing Option:     Read and check the file, and generate an alert to report the results, but do not store the customer account information.',
    'Store customer account information unless errors are detected while processing the file.'
  ];
  obj = {
    'message': [
      {
        profile: 'BUSMEDLF_HOUSTON_IDR_WS_NOTOU',
        s_date: '03/17/2008',
        e_date: '04/30/2015',
        esiid: '19932789455397588',
        category: 'Fixed',
        usage: '',
        u_s_date: '',
        u_e_Date: '',
        retail_price: '0.05'
      },
      {
        profile: 'RESLOWR_NORTH_NIDR_NWS_NOTOU',
        s_date: '02/10/2015',
        e_date: '03 / 31 / 2016',
        esiid: '10034449407840921',
        category: 'Future',
        usage: '734',
        u_s_date: '12 / 02 / 2014',
        u_e_Date: '01 / 03 / 2015',
        retail_price: '0.07'
      }
    ]
  }

  constructor(private service: ApiService,private util: UtilityService) { }

  ngOnInit() {
    this.DataSource1.data = this.obj['message']
  }
  fileToUpload: File = null;
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.status = null
    if (this.fileToUpload != null) {
      this.button = true
      this.fd.append('file', this.fileToUpload)
    }
    console.log(this.fd.get('file'))
  }

  importCustumer() {
    // this.service.importCustomerAccount(this.fd).subscribe(res => {
    //   console.log(res)
    //   this.status = res['status']
    // })
    this.button = false
    this.showSpinner = true
    this.x = setTimeout(() => {
      this.service.importCustomerAccount(this.fd).subscribe(res => {
        this.status = res['status']
        this.showSpinner = false;
        if (this.status == true) {
          this.util.openSuccessSnackBar(`File Uploaded Successfully.`)
        }else{
          this.util.openFailureSnackBar(`This format is not supported.`)
        }
      })
      clearTimeout(this.x)
    }, 1000)
    this.showSpinner = true
  }


}
