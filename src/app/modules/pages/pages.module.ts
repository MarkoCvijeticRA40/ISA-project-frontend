import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register/user', component: RegisterUserComponent},
  { path: 'registeredUsers', component: RegisteredUsersComponent}
  
];

@NgModule({
  declarations: [
    HomeComponent,
    RegisterUserComponent,
    RegisteredUsersComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTableModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule
    
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class PagesModule { }
