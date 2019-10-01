import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { Containers } from 'src/app/Container';
import { Containers } from '../../../../index';

const routes: Routes = [
// { path: 'forecastertool', component: Containers.ForecasterToolComponent },

{ path: '', component: Containers.ReviewCustomerCountComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
