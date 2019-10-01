import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(public snackBar: MatSnackBar) { }

  completeChecker(value) {
    return value != null && value != undefined && value != "" ? true : false
  }
  datePatternYMD(datee) { // YYYY-MM-DD
    if (this.completeChecker(datee)) {
      let date = new Date(datee)

      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    } else return null
  }
  numericDatePatternY(datee) { // YYYY-MM-DD
    if (this.completeChecker(datee)) {
      let date = new Date(datee)

      return date.getFullYear()
    } else return null
  }
  numericDatePatternM(datee) { // YYYY-MM-DD
    if (this.completeChecker(datee)) {
      let date = new Date(datee)
      let month = date.getMonth() + 1
      return month
    } else return null
  }
  openFailureSnackBar(message) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: `failure-snackbar`
    })
  }

  openSuccessSnackBar(message) {
    this.snackBar.open(message, 'close', {
      duration: 3000,
      panelClass: `success-snackbar`
    })
  }
}
