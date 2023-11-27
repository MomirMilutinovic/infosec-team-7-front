import {NgModule} from '@angular/core';
import {PropertiesComponent} from "./properties/properties.component";
import {PropertiesRoutingModule} from "./properties-routing.module";
import {SharedModule} from "../shared/shared.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    PropertiesComponent,
    PropertyDetailComponent
  ],
  imports: [
    SharedModule,
    PropertiesRoutingModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    ReactiveFormsModule,
    MatGridListModule,
    FlexLayoutModule,
  ]
})
export class PropertiesModule {
}
