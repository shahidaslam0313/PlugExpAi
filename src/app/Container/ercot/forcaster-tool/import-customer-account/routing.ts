import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Containers } from '../../../index';

const routes: Routes = [
    { path: '', component: Containers.ImportCustomerAccountComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
