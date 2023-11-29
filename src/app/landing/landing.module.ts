import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { LandingComponent } from './landing/landing.component';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [
    HeroComponent,
    LandingComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  exports: [
    HeroComponent,
    LandingComponent,
  ]
})
export class LandingModule { }
