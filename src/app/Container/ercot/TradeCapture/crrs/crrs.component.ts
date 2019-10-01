import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crrs',
  templateUrl: './crrs.component.html',
  styleUrls: ['./crrs.component.scss']
})
export class CRRsComponent implements OnInit {

  Form = new FormGroup({
    // buy: new FormControl("", Validators.required),
  })
  constructor() { }

  ngOnInit() {
  }

}
