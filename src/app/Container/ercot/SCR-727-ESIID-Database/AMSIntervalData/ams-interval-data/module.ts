import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RoutingModule } from './routing';
import { MaterialModule } from '../../../../../app-material.module';
import { AmsIntervalDataComponent } from './ams-interval-data.component';

@NgModule({
    declarations: [
        AmsIntervalDataComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RoutingModule
    ],
    entryComponents: [
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class Module { }