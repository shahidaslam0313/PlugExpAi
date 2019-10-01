import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedMethodService {

  constructor() { }
 
  FormatDate=function(dt)
  {
   dt=new Date(dt).toLocaleDateString();
   return dt;
  }
}
