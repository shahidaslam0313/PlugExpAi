import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '../../../../../app-material.module';
import { ForecasterToolComponent } from './forecaster-tool.component';
import { RoutingModule } from './routing';
import { DialogForecasterCustomerProfileComponent } from '../dialog-forecaster-customer-profile/dialog-forecaster-customer-profile.component';
import { DialogForecasterToolComponent } from '../dialog-forecaster-tool/dialog-forecaster-tool.component';
import { DialogWeatherzoneProfileComponent } from '../dialog-weatherzone-profile/dialog-weatherzone-profile.component';
import { DialogLoadProfileComponent } from '../dialog-load-profile/dialog-load-profile.component';
import { DialogForcasterWeatherZoneComponent } from '../dialog-forcaster-weather-zone/dialog-forcaster-weather-zone.component';
import { DialogWhatIfComponent } from '../dialog-what-if/dialog-what-if.component';


@NgModule({
    declarations: [
        ForecasterToolComponent,
        DialogForecasterCustomerProfileComponent,
        DialogForecasterToolComponent,
        DialogForcasterWeatherZoneComponent,
        DialogLoadProfileComponent,
        DialogWeatherzoneProfileComponent,
        DialogWhatIfComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RoutingModule
    ],
    entryComponents: [
        DialogForecasterCustomerProfileComponent,
        DialogForecasterToolComponent,
        DialogForcasterWeatherZoneComponent,
        DialogLoadProfileComponent,
        DialogWeatherzoneProfileComponent,
        DialogWhatIfComponent
        // ChargeDetailsDialog,
        // AddDialogTosComponent,
        // AddProductDialogComponent,
        // AddRemoveContractComponent,
        // AddRemoveTdspComponent,
        // EditProductDialogComponent,
        // AddPromoDialogComponent,
        // EditPromoDialogComponent,
        // EditDialogTosComponent,
        // SearchDialogComponent,
        // UploadTransactionDialog,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class Module { }