import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ShowProfileComponent } from './show-profile/show-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ShowAdministratorProfileComponent } from './show-administrator-profile/show-administrator-profile.component';
import { EditAdministratorProfileComponent } from './edit-administrator-profile/edit-administrator-profile.component';
import { CaCreateFreeAppComponent } from './ca-create-free-app/ca-create-free-app.component';
import { MatDatepicker, MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";


/*const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register/user', component: RegisterUserComponent}
];*/

@NgModule({
  declarations: [
    HomeComponent,
    RegisterUserComponent,
    ShowProfileComponent,
    EditProfileComponent,
    ShowAdministratorProfileComponent,
    EditAdministratorProfileComponent,
    CaCreateFreeAppComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTableModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,   
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class PagesModule { }
