import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { StartupModule } from './startup/startup.module';
import { LandingModule } from './landing/landing.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LandingModule,
    CoreModule,
    ProfileModule,
    BrowserModule,
    BrowserAnimationsModule,
    StartupModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
