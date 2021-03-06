import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Containers } from '../../../index';

const routes: Routes = [
    { path: '', component: Containers.MaturityForcastComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
