import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [

  {
    path: 'pages',
    loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'registered-user',
    loadChildren: () => import('./modules/registered-user/registered-user.module').then(m => m.RegisteredUserModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'system-admin',
    loadChildren: () => import('./modules/system-admin/system-admin.module').then(m => m.SystemAdminModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'medical-staff',
    loadChildren: () => import('./modules/medical-staff/medical-staff.module').then(m => m.MedicalStaffModule),
    //canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
