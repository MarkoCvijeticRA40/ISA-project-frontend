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
import { MatTableModule } from '@angular/material/table';
import { RegisteredUserComponent } from './registered-user/registered-user.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { CentersComponent } from './centers/centers.component';
import { SelectedCenterComponent } from './selected-center/selected-center.component';

const routes: Routes = [
  {
    path: '', component: RegisteredUserComponent, children: [
      { path: 'poll', component: DonorPollComponent },
      { path: 'create/scheduled/appointment', component: CreateScheduledAppointmentComponent },
      { path: 'edit/user/profile', component: EditUserProfileComponent},
      { path: 'user/profile', component : ShowUserProfileComponent},
      { path: 'centers', component: CentersComponent },
      { path: 'center/:centerId', component:SelectedCenterComponent},
      
    ]
  }
];

@NgModule({
  declarations: [
    DonorPollComponent,
    CreateScheduledAppointmentComponent,
    ShowUserProfileComponent,
    EditUserProfileComponent,
    RegisteredUserComponent,
    CentersComponent,
    SelectedCenterComponent,
  ],
  exports: [RouterModule],
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
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    RouterModule.forChild(routes),

  ]
})
export class RegisteredUserModule { }
