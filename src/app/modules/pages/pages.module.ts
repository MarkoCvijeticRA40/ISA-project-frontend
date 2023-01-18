import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'register/user', component: RegisterUserComponent},
      { path: 'login', component: LoginComponent},
      
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    RegisteredUsersComponent,
    RegisteredUsersComponent,
    LoginComponent,
    RegisterUserComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,   
    // AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    RouterModule.forChild(routes),

  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class PagesModule { }
