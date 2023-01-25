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
import { UpdateCenterComponent } from './update-center/update-center.component';
import { MedicalStaffComponent } from './medical-staff/medical-staff.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { RegisteredUsersComponent } from '../pages/registered-users/registered-users.component';
import { WorkingCalendarComponent } from './working-calendar/working-calendar.component';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, View } from '@syncfusion/ej2-angular-schedule';



const routes: Routes = [
  {
    path: '', component: MedicalStaffComponent, children: [
      { path: 'create/available/appointment', component: CreateAvailableAppointmentComponent },
      { path: 'admin/profile',component: ShowProfileComponent},
      { path: 'edit/admin/profile',component: EditProfileComponent},
      { path: 'admin/center/update', component: UpdateCenterComponent },
      { path: 'registeredUsers', component: RegisteredUsersComponent},
      { path: 'workingCalendar', component: WorkingCalendarComponent},      
    ]
  }
];



@NgModule({
  declarations: [
    CreateAvailableAppointmentComponent,
    EditProfileComponent,
    ShowProfileComponent,
    UpdateCenterComponent,
    MedicalStaffComponent,
    WorkingCalendarComponent,
    
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
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    RouterModule.forChild(routes),
    ScheduleModule, RecurrenceEditorModule,
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService]
})
export class MedicalStaffModule { }
