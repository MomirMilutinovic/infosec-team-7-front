import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { ProfileComponent } from './profile/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'properties', pathMatch: 'full' },
  { path: 'properties', loadChildren: () => import('./properties/properties.module').then(m => m.PropertiesModule) },
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
