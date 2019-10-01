import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-esiid-lookup',
  templateUrl: './esiid-lookup.component.html',
  styleUrls: ['./esiid-lookup.component.scss','../../button.scss']
})
export class EsiidLookupComponent implements OnInit {

  show: boolean
  value
  status = true
  esiid
  Form = new FormGroup({
    search: new FormControl("", [Validators.required, Validators.pattern('[0-9-]+')]),
  })

  onSubmit() {
    this.status = true
    this.show = false

    if (this.Form.valid) {
      this.value = this.Form.controls.search.value
      this.service.esiidLookup(this.Form.controls.search.value).subscribe(res => {
        // console.log(res)
        if (res['status'] == true) {
          this.show = true
          this.esiid = res['message'][0]
        } else {
          this.status = false
        }
      })
    }
  }
  constructor(private service: ApiService) { }

  ngOnInit() {
  }

}
