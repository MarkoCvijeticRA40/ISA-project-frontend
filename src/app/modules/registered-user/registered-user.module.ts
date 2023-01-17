import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAvailableAppointmentComponent } from './create-available-appointment/create-available-appointment.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { Routes } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: 'create/available/appointment', component: CreateAvailableAppointmentComponent }
  
];

@NgModule({
  declarations: [
    CreateAvailableAppointmentComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class RegisteredUserModule { }
