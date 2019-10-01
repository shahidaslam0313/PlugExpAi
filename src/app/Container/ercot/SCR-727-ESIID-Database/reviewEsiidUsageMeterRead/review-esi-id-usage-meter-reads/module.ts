import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RoutingModule } from './routing';
import { MaterialModule } from '../../../../../app-material.module';
import { DialogSelectionUsageMeterComponent } from '../dialog-selection-usage-meter/dialog-selection-usage-meter.component';
import { ReviewEsiIdUsageMeterReadsComponent } from './review-esi-id-usage-meter-reads.component';

@NgModule({
    declarations: [
        ReviewEsiIdUsageMeterReadsComponent,
        DialogSelectionUsageMeterComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RoutingModule
    ],
    entryComponents: [
        DialogSelectionUsageMeterComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class Module { }