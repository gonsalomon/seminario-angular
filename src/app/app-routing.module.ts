import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
