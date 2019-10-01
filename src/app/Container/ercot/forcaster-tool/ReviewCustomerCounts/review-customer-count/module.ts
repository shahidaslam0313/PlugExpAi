import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '../../../../../app-material.module';
import { RoutingModule } from './routing';
import { DialogCountWeatherComponent } from '../dialog-count-weather/dialog-count-weather.component';
import { DialogCountLoadComponent } from '../dialog-count-load/dialog-count-load.component';
import { DialogCountCustomerProfileComponent } from '../dialog-count-customer-profile/dialog-count-customer-profile.component';
import { DialogLoadCustomerProfileComponent } from '../dialog-load-customer-profile/dialog-load-customer-profile.component';
import { DialogWeatherzoneLoadProfileComponent } from '../dialog-weatherzone-load-profile/dialog-weatherzone-load-profile.component';
import { ReviewCustomerCountComponent } from './review-customer-count.component';


@NgModule({
    declarations: [
        ReviewCustomerCountComponent,
        DialogCountWeatherComponent,
        DialogCountLoadComponent,
        DialogCountCustomerProfileComponent,
        DialogLoadCustomerProfileComponent,
        DialogWeatherzoneLoadProfileComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RoutingModule
    ],
    entryComponents: [
        DialogCountWeatherComponent,
        DialogCountLoadComponent,
        DialogCountCustomerProfileComponent,
        DialogLoadCustomerProfileComponent,
        DialogWeatherzoneLoadProfileComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class Module { }