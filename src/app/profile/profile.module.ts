import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from "./profile/profile.component";
import { CoreModule } from '../core/core.module';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { InfoFormComponent } from './info-form/info-form.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MaterialModule } from '../../infrastructure/material/material.module';


@NgModule({
  declarations: [
    ProfileComponent,
    BasicInfoComponent,
    InfoFormComponent,
    EditProfileComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule
  ],
  exports: [
    ProfileComponent,
    BasicInfoComponent,
    InfoFormComponent,
    EditProfileComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileModule { }
