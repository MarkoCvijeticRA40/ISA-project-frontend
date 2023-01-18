import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import { RegisterComponent } from "./modules/registered-user/register/register.component";
import { LoginComponent } from "./modules/pages/login/login.component";
import { CreateCenterComponent } from "./modules/system-admin/create-center/create-center.component";
import { RegisteredUsersComponent } from './modules/pages/registered-users/registered-users.component';
import { RegisterSystemAdministratorComponent } from './modules/pages/register-system-administrator/register-system-administrator.component';
import { CreateAvailableAppointmentComponent } from "./modules/medical-staff/create-available-appointment/create-available-appointment.component";
import { EditProfileComponent } from "./modules/medical-staff/edit-profile/edit-profile.component";
import { ShowProfileComponent } from "./modules/medical-staff/show-profile/show-profile.component";
import { DonorPollComponent } from "./modules/registered-user/donor-poll/donor-poll.component";
import { CreateScheduledAppointmentComponent } from "./modules/registered-user/create-scheduled-appointment/create-scheduled-appointment.component";
import { ChangePasswordComponent } from "./modules/system-admin/change-password/change-password.component";
import { EditUserProfileComponent } from "./modules/registered-user/edit-user-profile/edit-user-profile.component";
import { ShowUserProfileComponent } from "./modules/registered-user/show-user-profile/show-user-profile.component";
import { UpdateCenterComponent } from "./modules/medical-staff/update-center/update-center.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register/user', component: RegisterComponent},
  { path: 'admin/profile',component: ShowProfileComponent},
  { path: 'edit/admin/profile',component: EditProfileComponent},
  { path: 'user/profile', component : ShowUserProfileComponent},
  { path: 'edit/user/profile', component: EditUserProfileComponent},
  { path: 'create/scheduled/appointment',component: CreateScheduledAppointmentComponent},
  { path: 'login', component: LoginComponent},
  { path: 'poll', component: DonorPollComponent},
  { path: 'create/center', component: CreateCenterComponent},
  { path: 'registeredUsers', component: RegisteredUsersComponent},
  { path: 'register/systemAdministrator', component: RegisterSystemAdministratorComponent},
  { path: 'admin/center/update', component: UpdateCenterComponent },
  { path: 'change/saPassword/:id', component: ChangePasswordComponent },
  { path: 'create/available/appointment', component: CreateAvailableAppointmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
