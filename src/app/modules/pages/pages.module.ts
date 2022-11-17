import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { UserLoginComponent } from './user-login/user-login.component';
import { DonorPollComponent } from './donor-poll/donor-poll.component';
import {MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

/*const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register/user', component: RegisterUserComponent}
];*/

@NgModule({
  declarations: [
    HomeComponent,
    RegisterUserComponent,
    UserLoginComponent,
    DonorPollComponent,
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
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class PagesModule { }
