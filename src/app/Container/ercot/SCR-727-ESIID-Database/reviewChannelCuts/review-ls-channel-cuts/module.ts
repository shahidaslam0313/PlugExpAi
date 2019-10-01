import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RoutingModule } from './routing';
import { MaterialModule } from '../../../../../app-material.module';
import { ReviewLSChannelCutsComponent } from './review-ls-channel-cuts.component';
import { DialogSelectionChannelCutsComponent } from '../dialog-selection-channel-cuts/dialog-selection-channel-cuts.component';
// import { ReviewAmsIntervalComponent } from './review-ams-interval.component';
// import { DialogSelectionReviewAmsComponent } from '../dialog-selection-review-ams/dialog-selection-review-ams.component';

@NgModule({
    declarations: [
        ReviewLSChannelCutsComponent,
        DialogSelectionChannelCutsComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RoutingModule
    ],
    entryComponents: [
        DialogSelectionChannelCutsComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class Module { }