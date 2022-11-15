import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import { RegisterUserComponent } from "./modules/pages/register-user/register-user.component";
import { RegisteredUsersComponent } from './modules/pages/registered-users/registered-users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register/user', component: RegisterUserComponent},
  { path: 'registeredUsers', component: RegisteredUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
