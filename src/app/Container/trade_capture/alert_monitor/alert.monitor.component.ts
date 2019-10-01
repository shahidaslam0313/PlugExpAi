import {
  Component,
  Inject
} from '@angular/core'
import {
  MatTableDataSource,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import {
  AlertEmailComponent
} from '../alert-email-configuration/alert-email';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections'
export interface DialogData {
  message: any;
}

@Component({
  selector: 'alert-monitor',
  templateUrl: './alert.monitor.html',
  styleUrls: ['./alert_monitor.scss','../../button.scss','../../table.scss']
})
export class AlertMonitorComponent {
  message: any;
  constructor(public dialog: MatDialog) {}

  alerts = [{
      
      Priority: "ERROR",
      Category: "ERCOT Forecast Tool",
      Timestamp: "3/13/2019 12:2:12",
      Message: "Generated Dashboard Images"
    },
    {
      
      Priority: "ERROR",
      Category: "ERCOT Forecast Tool",
      Timestamp: "3/13/2019 12:2:12",
      Message: "Generated Dashboard Images"
    },
    
    {
      
      Priority: "INFO",
      Category: "ERCOT Forecast Tool",
      Timestamp: "3/13/2019 12:2:12",
      Message: "Generated Dashboard Images"
    },
    {
      
      Priority: "INFO",
      Category: "ERCOT Forecast Tool",
      Timestamp: "3/13/2019 12:2:12",
      Message: "Generated Dashboard Images"
    },
    {
      
      Priority: "ERROR",
      Category: "ERCOT Forecast Tool",
      Timestamp: "3/13/2019 12:2:12",
      Message: "Ran Generate Direct energy customer report process for LOURAN"
    },
    {
      
      Priority: "ERROR",
      Category: "ERCOT Forecast Tool",
      Timestamp: "3/13/2019 12:2:12",
      Message: "Generated Dashboard Images"
    },
    {
      
      Priority: "INFO",
      Category: "ERCOT Forecast Tool",
      Timestamp: "3/13/2019 12:2:12",
      Message: "Generated Dashboard Images"
    },
    {
      
      Priority: "INFO",
      Category: "",
      Timestamp: "3/13/2019 12:2:12",
      Message: "Generated Dashboard Images"
    },
    {
      
      Priority: "INFO",
      Category: "",
      Timestamp: "3/13/2019 12:2:12",
      Message: "Generated Dashboard Images"
    },
  ];
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['select','1', '2', '3', '4'];
 
  selection = new SelectionModel(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
    
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
       
  }

  checkboxLabel(row?): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  ngOnInit() {
    this.dataSource.data = this.alerts;
  }
  openAlertsDialog(row): void {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: row
      },
    });
  }
  openSelectionDialog(): void {
    const dialogRef = this.dialog.open(SelectionCriteriaDialog, {
    });
  } 
}


@Component({
  selector: 'alert-dialog',
  templateUrl: './aler-dialog.html',
  styleUrls: ['./alert_monitor.scss','../../button.scss']
})

export class AlertDialogComponent {

  list: any
  constructor(public dialogRef: MatDialogRef < AlertDialogComponent > , @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    this.list = Object.values(data)
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'selection-dialog',
  templateUrl: './selection-dialog.html',
  styleUrls: ['./alert_monitor.scss','../../button.scss']
})

export class SelectionCriteriaDialog {


  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef < AlertDialogComponent > ) {}
  selectCriteria = new FormGroup({
    alertView: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    timeRange: new FormControl('', [Validators.required]),
    timeZone: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    autoRefresh: new FormControl(''),
    maxRows: new FormControl('', [Validators.required]),
  })
  openAlertEmailDialog(): void {
    const dialogRef = this.dialog.open(AlertEmailComponent, {
      width: "50%",
    })
  }
  
  close() {
    this.dialogRef.close();
  }
  alerts = [{
      key: "1",
      value: "Default"
    },
    {
      key: "2",
      value: "Alerts for All Categories"
    },
    {
      key: "3",
      value: "Alerts for Specific Category"
    },
    {
      key: "4",
      value: "ACTION ITEM Alerts"
    },
    {
      key: "5",
      value: "WARNING Alerts"
    },
    {
      key: "6",
      value: "ERROR Alerts"
    },
    {
      key: "7",
      value: "INFO Alerts"
    }
  ]
  ack = [{
      key: "1",
      value: "Unacknowledge Alerts"
    },
    {
      key: "2",
      value: "Acknowledge Alerts"
    },
    {
      key: "3",
      value: "Both Unacknowledge and Acknowledge Alerts"
    }

  ]
  time = [{
      key: "1",
      value: "Most Recent"
    },
    {
      key: "2",
      value: "Specific Time"
    },
  ]
  refresh = [{
      key: "1",
      value: "None"
    },
    {
      key: "2",
      value: "30 Seconds"
    },
    {
      key: "3",
      value: "1 Minute"
    },
    {
      key: "4",
      value: "5 Minutes"
    },
    {
      key: "5",
      value: "10 Minutes"
    },
  ]
  max_rows = [{
      key: "1",
      value: "100"
    },
    {
      key: "2",
      value: "200"
    },
    {
      key: "3",
      value: "300"
    },
    {
      key: "4",
      value: "400"
    },
    {
      key: "5",
      value: "500"
    },
  ]
  time_zone = [{
      key: "1",
      value: "Atlantic Time"
    },
    {
      key: "2",
      value: "Atlantic Time (Always Standard)"
    },
    {
      key: "3",
      value: "British Time (Prevailing, uses Daylight saving time)"
    },
    {
      key: "4",
      value: "British Time (Always Standard"
    },
    {
      key: "5",
      value: "Central Time (Prevailing, uses Daylight saving time)"
    },
    {
      key: "6",
      value: "Central Time (Always Standard"
    },
    {
      key: "7",
      value: "Eastern Time (Prevailing, uses Daylight saving time)"
    },
    {
      key: "8",
      value: "Eastern Time (Always Standard"
    },
    {
      key: "9",
      value: "Mountain Time (Prevailing, uses Daylight saving time)"
    },
    {
      key: "10",
      value: "Mountain Time (Always Standard"
    },
    {
      key: "12",
      value: "Pacific Time (Prevailing, uses Daylight saving time)"
    },
    {
      key: "13",
      value: "Pacific Time (Always Standard"
    },
    {
      key: "14",
      value: "Universal Time"
    },

  ]
}

