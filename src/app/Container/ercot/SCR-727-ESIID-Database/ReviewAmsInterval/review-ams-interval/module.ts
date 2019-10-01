import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RoutingModule } from './routing';
import { MaterialModule } from '../../../../../app-material.module';
import { ReviewAmsIntervalComponent } from './review-ams-interval.component';
import { DialogSelectionReviewAmsComponent } from '../dialog-selection-review-ams/dialog-selection-review-ams.component';

@NgModule({
    declarations: [
        ReviewAmsIntervalComponent,
        DialogSelectionReviewAmsComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RoutingModule
    ],
    entryComponents: [
        DialogSelectionReviewAmsComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class Module { }