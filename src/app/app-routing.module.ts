import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {CreateUserComponent} from './create-user/create-user.component';

const routes: Routes = [
  {path: '' , redirectTo: '/appComponent', pathMatch: 'full'},
  {path: 'appComponent' , component: AppComponent},
  {path: 'user', component: UserComponent},
  {path: 'createUser', component: CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
