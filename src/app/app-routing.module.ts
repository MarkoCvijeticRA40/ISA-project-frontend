import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import { UpdateCenterComponent } from "./modules/pages/update-center/update-center.component";
import { RegisterUserComponent } from "./modules/pages/register-user/register-user.component";
import { UserLoginComponent } from "./modules/pages/user-login/user-login.component";
import { RegisterCenterComponent } from "./modules/pages/register-center/register-center.component";
import { RegisteredUsersComponent } from './modules/pages/registered-users/registered-users.component';
import { RuCreateAppComponent } from "./modules/pages/ru-create-app/ru-create-app.component";
import { RegisterSystemAdministratorComponent } from './modules/pages/register-system-administrator/register-system-administrator.component';
import { ChangePasswordSystemAdministratorComponent } from './modules/pages/change-password-system-administrator/change-password-system-administrator.component';
import { ShowRegisterUserProfileComponent } from "./modules/pages/show-register-user-profile/show-register-user-profile.component";
import { CreateAvailableAppointmentComponent } from "./modules/medical-staff/create-available-appointment/create-available-appointment.component";
import { EditProfileComponent } from "./modules/medical-staff/edit-profile/edit-profile.component";
import { ShowProfileComponent } from "./modules/medical-staff/show-profile/show-profile.component";
import { DonorPollComponent } from "./modules/registered-user/donor-poll/donor-poll.component";
import { EditUserProfileComponent } from "./modules/registered-user/edit-user-profile/edit-user-profile.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register/user', component: RegisterUserComponent},
  { path: 'adminprofile',component: ShowProfileComponent},
  { path: 'editadminprofile',component: EditProfileComponent},
  { path: 'userprofile', component : ShowRegisterUserProfileComponent},
  { path: 'edituserprofile', component: EditUserProfileComponent},
  { path: 'rucreateapp',component: RuCreateAppComponent},
  { path: 'login', component: UserLoginComponent},
  { path: 'poll', component: DonorPollComponent},
  { path: 'register/center', component: RegisterCenterComponent},
  { path: 'registeredUsers', component: RegisteredUsersComponent},
  { path: 'register/systemAdministrator', component: RegisterSystemAdministratorComponent},
  { path: 'admin/center-update', component: UpdateCenterComponent },
  { path: 'change/saPassword/:id', component: ChangePasswordSystemAdministratorComponent },
  { path: 'create/available/appointment', component: CreateAvailableAppointmentComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
