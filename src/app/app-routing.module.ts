import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import { RegisterUserComponent } from "./modules/pages/register-user/register-user.component";
import { ShowProfileComponent } from "./modules/pages/show-profile/show-profile.component";
import { EditProfileComponent } from "./modules/pages/edit-profile/edit-profile.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register/user', component: RegisterUserComponent},
  { path: 'profile' , component: ShowProfileComponent },
  { path: 'editprofile' , component: EditProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
