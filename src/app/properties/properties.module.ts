import {NgModule} from '@angular/core';
import {PropertiesComponent} from "./properties/properties.component";
import {PropertiesRoutingModule} from "./properties-routing.module";
import {SharedModule} from "../shared/shared.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    PropertiesComponent
  ],
  exports: [
    PropertiesComponent
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
