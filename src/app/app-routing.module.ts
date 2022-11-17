import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DonorPollComponent } from "./modules/pages/donor-poll/donor-poll.component";
import { HomeComponent } from "./modules/pages/home/home.component";
import { RegisterUserComponent } from "./modules/pages/register-user/register-user.component";
import { UserLoginComponent } from "./modules/pages/user-login/user-login.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register/user', component: RegisterUserComponent},
  { path: 'login', component: UserLoginComponent},
  { path: 'poll', component: DonorPollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
