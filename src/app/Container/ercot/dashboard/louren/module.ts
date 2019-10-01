import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RoutingModule } from './routing';
import { MaterialModule } from '../../../../app-material.module';
import { LourenComponent } from './louren.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        LourenComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RoutingModule,
        ChartsModule
    ],
    entryComponents: [
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class Module { }