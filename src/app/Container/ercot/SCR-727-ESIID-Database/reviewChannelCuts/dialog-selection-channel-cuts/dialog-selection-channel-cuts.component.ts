import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-selection-channel-cuts',
  templateUrl: './dialog-selection-channel-cuts.component.html',
  styleUrls: ['./dialog-selection-channel-cuts.component.scss', '../../../../button.scss']
})
export class DialogSelectionChannelCutsComponent implements OnInit {
  Form = new FormGroup({
    flowtime_start: new FormControl("", Validators.required),
  })
  constructor() { }

  ngOnInit() {
  }

}
