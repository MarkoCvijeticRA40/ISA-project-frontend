import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAvailableAppointmentComponent } from './create-available-appointment/create-available-appointment.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ShowProfileComponent } from './show-profile/show-profile.component';




@NgModule({
  declarations: [
    CreateAvailableAppointmentComponent,
    EditProfileComponent,
    ShowProfileComponent
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
export class MedicalStaffModule { }
