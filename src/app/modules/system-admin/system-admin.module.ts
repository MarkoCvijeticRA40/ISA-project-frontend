import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { CreateCenterComponent } from './create-center/create-center.component';
import { SystemAdminComponent } from './system-admin/system-admin.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { RegisterSystemAdminComponent } from './register-system-admin/register-system-admin.component';
import { RegisteredUsersComponent } from '../pages/registered-users/registered-users.component';

const routes: Routes = [
  {
    path: '', component: SystemAdminComponent, children: [
      { path: 'change/saPassword', component: ChangePasswordComponent },
      { path: 'create/center', component: CreateCenterComponent},
      { path: 'register/systemAdministrator', component: RegisterSystemAdminComponent},
      { path: 'registeredUsers', component: RegisteredUsersComponent},
      
    ]
  }
];



@NgModule({
  declarations: [
    ChangePasswordComponent,
    CreateCenterComponent,
    SystemAdminComponent,
    RegisterSystemAdminComponent
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
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,  
    RouterModule,
    RouterModule.forChild(routes),  
  ]
})
export class SystemAdminModule { }
