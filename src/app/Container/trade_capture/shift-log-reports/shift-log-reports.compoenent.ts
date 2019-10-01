import { Component, OnInit} from '@angular/core';
import {SharedMethodService} from '../../../services/sharedmethods.service'
import {
    MatTableDataSource,
  } from '@angular/material';
  import {FormGroup,FormBuilder} from '@angular/forms';
@Component({
    selector: 'app-shift-log',
    templateUrl: 'shift-log-reports.html',
    styleUrls: ['./shift-log-reports.scss','../../table.scss','../../button.scss']
})

export class ShiftLogReportsComponent  {
  
 form:FormGroup;
  constructor(private dateFormatService:SharedMethodService, private fb:FormBuilder) {}  
  menus=[
  {trigger:"today",name:"Current Dates"},
  {trigger:"tomorrow",name:"Coming Dates"},
  {trigger:"yesterday",name:"Past Dates"},
  {trigger:"rest",name:"From Tomorrow"},
  {trigger:"toDate",name:"Till Today"}]

  objectKeys = Object.keys;

  my_menu = {
    'Current Dates': ['Today', 'This Week', 'This Month', 'This Year'],
    'Coming Dates': ['Tomorrow', 'Next Week', 'Next Month','Next Year'],
    'Past Dates': ['Yesterday', 'Last Week', 'Last Month','Last Year'],
    'From Tomorrow': ['Rest of Week', 'Rest of Month', 'Rest of Year'],
    'Till Today': ['Week to Date', 'Month to Date', 'Year to Date'],
  };
  displayedColumns: string[] = [ '1', '2', '3']
  dataSource = new MatTableDataSource();
  shifts= [
      {  shiftLog: "ERROR", size: "8KB", changed: "3/13/2019 12:2:12",},
      {  shiftLog: "ERROR", size: "8KB",changed: "3/13/2019 12:2:12",},
      {  shiftLog: "ERROR", size: "8KB", changed: "3/13/2019 12:2:12",}
    ]
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
   ngOnInit(){
    this.form=this.fb.group({
      from:[''],
      to:['']
    })
    this.dataSource.data=this.shifts 
  
   }
   PickQuickDates(param)
   {console.log("run")
     if(this.my_menu["Coming Dates"][0]==param)
      this.form.setValue({
      from:new Date(),
      to:new Date(),
      });
     else if(this.my_menu["Coming Dates"][1]==param)
      this.form.setValue({
      from:"1/2/1/2",
      to:"1/2/1/2",
      });
      else{
        console.log("Not running")
      }

   }
   search(){
   this.dateFormatService.FormatDate(this.form.value["from"]),
   this.dateFormatService.FormatDate(this.form.value["to"]);
   }
  
}

const dates=function(date)
{
  switch(date) { 
   case "A": { 
      console.log("Excellent"); 
      break; 
   } 
   case "B": { 
      console.log("Good"); 
      break; 
   } 
   case "C": {
      console.log("Fair"); 
      break;    
   } 
   case "D": { 
      console.log("Poor"); 
      break; 
   }  
   default: { 
      console.log("Invalid choice"); 
      break;              
   }
  } 
}
