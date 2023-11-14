import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HeroComponent } from '../startup/hero/hero.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
