import {NgModule} from '@angular/core';
import {PropertiesComponent} from "./properties/properties.component";
import {PropertiesRoutingModule} from "./properties-routing.module";
import {SharedModule} from "../shared/shared.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { PropertyDetailComponent } from './property-detail/property-detail.component';


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
  ]
})
export class PropertiesModule {
}
