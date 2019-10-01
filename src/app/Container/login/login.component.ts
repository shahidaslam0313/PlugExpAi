import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap, CanActivate } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { RecapchaService } from '../../recapcha.service';
import { UtilityService } from '../../services/utility.service';
// import { LoginService } from '../../../Store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // validate_email = new FormControl('', [Validators.required, Validators.email]);
  validate_email = new FormControl('', [Validators.required]);
  validate_password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  email;
  password;
  rememberMe = false;
  error;
  cap_result;
  showSpinner: boolean = false;
  checked = 'false'
  x
  invalid: boolean = false;


  constructor(public recapcha: RecapchaService, private http: HttpClient, private router: Router, public dialog: MatDialog,private util: UtilityService ) { }

  ngOnInit() {
  }

  signIn() {
    let status = this.recapcha.check();

    if (status == false) {
      this.cap_result = "Please re-enter text"
    } else {
      this.cap_result = ""
      this.Login()
    }
  }
  Login() {
    this.invalid = false
    let obj = {
      email: this.email,
      password: this.password,
    }
    // this.http.post('https://apis.wattcrm.com/config/login/', obj, {
    //   'headers': {
    //     'Content-Type': 'application/json',
    //   }
    // }).subscribe(res => {
    //   console.log(res)
    //   obj['cust_id'] = res['message'][0].sub_id.cust_id
    //   if (res['status'] == true) {
    if (this.validate_email.valid && this.validate_password.valid) {
      // this.x = setTimeout(() => {


        this.http.post('https://apis.wattcrm.com/config/login/', obj, {
          // this.http.post('http://192.168.29.212:8000/config/login/', obj, {   
          'headers': {
            'Content-Type': 'application/json',
          }
        }).subscribe(res => {
          if (res['status'] == true) {
            localStorage.setItem('access_token', res['data']['token']);
            this.showSpinner = false;
            this.router.navigate(['/'])

          }
          else {
            if (res['status'] != true) {
              // this.showSpinner = false;
              // clearTimeout(this.x)
              // this.invalid = true
              this.util.openFailureSnackBar(`Incorrect Username or Password`)
            }
          }

        })

      // }, 2000)
      this.showSpinner = true
      // console.log("1")

      //   }
      // })
    }
  }
  getErrorMessageEmail() {
    return this.validate_email.hasError('required') ? 'Email or Username is required' :
      this.validate_email.hasError('email') ? 'Not a valid email' :
        '';
  }
  getErrorMessagePassword() {
    return this.validate_password.hasError('required') ? 'Password is required' :
      this.validate_password.hasError('minlength') ? 'Password should contain 8 characters' :
        '';
  }
  hide = true;
  showError = false;

  remeberMe() {
    if (localStorage.getItem('remember') == 'false' || localStorage.getItem('remember') == undefined) {
      localStorage.setItem('remember', 'true')
    }
    else if (localStorage.getItem('remember') == 'true') {
      localStorage.setItem('remember', 'false')
      localStorage.removeItem('username')
      localStorage.removeItem('cust_password')
    }
  }

}

