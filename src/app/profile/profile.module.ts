import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from "./profile/profile.component";
import { CoreModule } from '../core/core.module';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { InfoFormComponent } from './info-form/info-form.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ManagementButtonsComponent } from './management-buttons/management-buttons.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MaterialModule } from '../../infrastructure/material/material.module';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [
    ProfileComponent,
    BasicInfoComponent,
    InfoFormComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    ManagementButtonsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MaterialModule,
    ProfileRoutingModule,
  ],
  exports: [
    ProfileComponent,
    BasicInfoComponent,
    InfoFormComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    ManagementButtonsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileModule { }
