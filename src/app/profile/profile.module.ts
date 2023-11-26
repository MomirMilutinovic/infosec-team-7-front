import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from "./profile/profile.component";
import { CoreModule } from '../core/core.module';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { InfoFormComponent } from './info-form/info-form.component';
import { ManagementButtonsComponent } from './management-buttons/management-buttons.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    ProfileComponent,
    BasicInfoComponent,
    InfoFormComponent,
    ManagementButtonsComponent,
    EditProfileComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
  exports: [
    ProfileComponent,
    BasicInfoComponent,
    InfoFormComponent,
    ManagementButtonsComponent,
    EditProfileComponent,
  ]
})
export class ProfileModule { }
