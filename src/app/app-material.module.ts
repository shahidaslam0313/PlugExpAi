import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule, MatPaginatorModule, MatSnackBarModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule,MatDialogRef } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';



@NgModule({
    imports: [
        MatSnackBarModule,
        MatSlideToggleModule,
        MatStepperModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatMenuModule,
        MatSortModule,
        MatCardModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatDividerModule,
        MatTabsModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatCheckboxModule,
        MatRadioModule,
        FormsModule,
        ReactiveFormsModule,
        MatChipsModule,
        MatGridListModule,
        MatTooltipModule,
        MatExpansionModule,
        MatSidenavModule,
        MatProgressBarModule,
        MatButtonToggleModule
    ],
    exports: [
        MatSnackBarModule,
        MatSlideToggleModule,
        MatGridListModule,
        MatStepperModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatMenuModule,
        MatSortModule,
        MatCardModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatTabsModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatDividerModule,
        MatCheckboxModule,
        MatRadioModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatChipsModule,
        MatTooltipModule,
        MatExpansionModule,
        MatSidenavModule,
        MatProgressBarModule,
        MatButtonToggleModule
    ],
    providers: [{
        provide: MatDialogRef,
      }]
}) export class MaterialModule { }
