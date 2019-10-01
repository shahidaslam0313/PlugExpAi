import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-selection-usage-meter',
  templateUrl: './dialog-selection-usage-meter.component.html',
  styleUrls: ['./dialog-selection-usage-meter.component.scss', '../../../../button.scss']
})
export class DialogSelectionUsageMeterComponent implements OnInit {

  Form = new FormGroup({
    flowtime_start: new FormControl("", Validators.required),
  })

  constructor() { }

  ngOnInit() {
  }

}
