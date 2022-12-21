import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { UpdateCenterComponent } from './update-center/update-center.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { ShowProfileComponent } from './show-profile/show-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ShowAdministratorProfileComponent } from './show-administrator-profile/show-administrator-profile.component';
import { EditAdministratorProfileComponent } from './edit-administrator-profile/edit-administrator-profile.component';
import { CaCreateFreeAppComponent } from './ca-create-free-app/ca-create-free-app.component';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { UserLoginComponent } from './user-login/user-login.component';
import { DonorPollComponent } from './donor-poll/donor-poll.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule, Routes } from "@angular/router";
import { RegisterCenterComponent } from './register-center/register-center.component';
import { RuCreateAppComponent } from './ru-create-app/ru-create-app.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register/user', component: RegisterUserComponent},
  { path: 'registeredUsers', component: RegisteredUsersComponent}
  
];


@NgModule({
  declarations: [
    HomeComponent,
    UpdateCenterComponent,
    RegisterUserComponent,
    ShowProfileComponent,
    EditProfileComponent,
    ShowAdministratorProfileComponent,
    EditAdministratorProfileComponent,
    CaCreateFreeAppComponent,
    UserLoginComponent,
    DonorPollComponent,
    RegisteredUsersComponent,
    RegisterCenterComponent,
    RuCreateAppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,   
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class PagesModule { }
