import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AccountModule } from '../account/account.module';
import { MaterialModule } from '../../infrastructure/material/material.module';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AccountModule,
    MaterialModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }
