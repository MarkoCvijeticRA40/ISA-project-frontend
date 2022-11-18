import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import { RegisterUserComponent } from "./modules/pages/register-user/register-user.component";
import { RegisterCenterComponent } from "./modules/pages/register-center/register-center.component";
import { RegisteredUsersComponent } from './modules/pages/registered-users/registered-users.component';

import { ShowProfileComponent } from "./modules/pages/show-profile/show-profile.component";
import { EditProfileComponent } from "./modules/pages/edit-profile/edit-profile.component";
import { ShowAdministratorProfileComponent } from "./modules/pages/show-administrator-profile/show-administrator-profile.component";
import { EditAdministratorProfileComponent } from "./modules/pages/edit-administrator-profile/edit-administrator-profile.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register/user', component: RegisterUserComponent},
  { path: 'register/center', component: RegisterCenterComponent},
  { path: 'registeredUsers', component: RegisteredUsersComponent},
  { path: 'profile' , component: ShowProfileComponent },
  { path: 'editprofile' , component: EditProfileComponent },
  { path: 'adminprofile',component: ShowAdministratorProfileComponent},
  { path: 'editadminprofile',component: EditAdministratorProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
