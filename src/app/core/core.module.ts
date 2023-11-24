import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [
    NavBarComponent,
    HeaderComponent,
    ContainerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavBarComponent,
    HeaderComponent,
    ContainerComponent,
  ]
})
export class CoreModule { }
