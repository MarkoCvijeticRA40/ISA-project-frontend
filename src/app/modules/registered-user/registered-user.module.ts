import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { DonorPollComponent } from './donor-poll/donor-poll.component';
import { MatRadioModule } from '@angular/material/radio';
import { CreateScheduledAppointmentComponent } from './create-scheduled-appointment/create-scheduled-appointment.component';
import { ShowUserProfileComponent } from './show-user-profile/show-user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { RegisterComponent } from './register/register.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    DonorPollComponent,
    CreateScheduledAppointmentComponent,
    ShowUserProfileComponent,
    EditUserProfileComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatTableModule
  ]
})
export class RegisteredUserModule { }
