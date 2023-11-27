import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { PageComponent } from './page/page.component';
import { HelperMenuComponent } from './helper-menu/helper-menu.component';
import { AccountModule } from '../account/account.module';
import { MaterialModule } from '../../infrastructure/material/material.module';

@NgModule({
  declarations: [
    HelperMenuComponent,
    PageComponent,
    NavBarComponent,
    HeaderComponent,
    ContainerComponent,
  ],
  imports: [
    CommonModule,
    AccountModule,
    MaterialModule
  ],
  exports: [
    HelperMenuComponent,
    PageComponent,
    NavBarComponent,
    HeaderComponent,
    ContainerComponent,
  ]
})
export class CoreModule { }
