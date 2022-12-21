import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DonorPollComponent } from "./modules/pages/donor-poll/donor-poll.component";
import { HomeComponent } from "./modules/pages/home/home.component";
import { UpdateCenterComponent } from "./modules/pages/update-center/update-center.component";
import { RegisterUserComponent } from "./modules/pages/register-user/register-user.component";
import { ShowProfileComponent } from "./modules/pages/show-profile/show-profile.component";
import { EditProfileComponent } from "./modules/pages/edit-profile/edit-profile.component";
import { ShowAdministratorProfileComponent } from "./modules/pages/show-administrator-profile/show-administrator-profile.component";
import { EditAdministratorProfileComponent } from "./modules/pages/edit-administrator-profile/edit-administrator-profile.component";
import { CaCreateFreeAppComponent } from "./modules/pages/ca-create-free-app/ca-create-free-app.component";
import { UserLoginComponent } from "./modules/pages/user-login/user-login.component";
import { RegisterCenterComponent } from "./modules/pages/register-center/register-center.component";
import { RegisteredUsersComponent } from './modules/pages/registered-users/registered-users.component';
import { RuCreateAppComponent } from "./modules/pages/ru-create-app/ru-create-app.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register/user', component: RegisterUserComponent},
  { path: 'profile' , component: ShowProfileComponent },
  { path: 'editprofile' , component: EditProfileComponent },
  { path: 'adminprofile',component: ShowAdministratorProfileComponent},
  { path: 'editadminprofile',component: EditAdministratorProfileComponent},
  { path: 'cacreateapp',component: CaCreateFreeAppComponent},
  { path: 'rucreateapp',component: RuCreateAppComponent},
  { path: 'login', component: UserLoginComponent},
  { path: 'poll', component: DonorPollComponent},
  { path: 'register/center', component: RegisterCenterComponent},
  { path: 'registeredUsers', component: RegisteredUsersComponent},
  { path: 'admin/center-update', component: UpdateCenterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
