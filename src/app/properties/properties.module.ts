import {NgModule} from '@angular/core';
import {PropertiesComponent} from "./properties/properties.component";
import {PropertiesRoutingModule} from "./properties-routing.module";
import {SharedModule} from "../shared/shared.module";
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "../../infrastructure/material/material.module";
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    PropertiesComponent,
    PropertyDetailComponent
  ],
  imports: [
    SharedModule,
    PropertiesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    CoreModule
  ]
})
export class PropertiesModule {
}
