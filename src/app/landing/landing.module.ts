import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { HeroComponent } from './hero/hero.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    HeroComponent,
    LandingComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeroComponent,
    LandingComponent,
  ]
})
export class LandingModule { }
