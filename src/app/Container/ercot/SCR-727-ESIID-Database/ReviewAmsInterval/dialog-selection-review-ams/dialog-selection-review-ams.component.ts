import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-selection-review-ams',
  templateUrl: './dialog-selection-review-ams.component.html',
  styleUrls: ['./dialog-selection-review-ams.component.scss','../../../../button.scss']
})
export class DialogSelectionReviewAmsComponent implements OnInit {

  selectCriteria = new FormGroup({
    esiid: new FormControl("", Validators.required),
    loadzone: new FormControl("", Validators.required),
    weatherzone: new FormControl("", Validators.required),
    max_esiid: new FormControl("", Validators.required),
    customerprofile: new FormControl("", Validators.required),

    to: new FormControl("", Validators.required),
    from: new FormControl("", Validators.required),
  })

  constructor() { }

  ngOnInit() {
  }

}
