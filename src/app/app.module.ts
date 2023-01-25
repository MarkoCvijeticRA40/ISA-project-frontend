import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { PagesModule } from "./modules/pages/pages.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { CdkTableModule } from "@angular/cdk/table";
import { TokenInterceptor } from "./interceptor/token-interceptor";
import { RegisteredUserModule } from "./modules/registered-user/registered-user.module";
import { MedicalStaffModule } from "./modules/medical-staff/medical-staff.module";
import { SystemAdminModule } from "./modules/system-admin/system-admin.module";
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, View } from '@syncfusion/ej2-angular-schedule';



@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    PagesModule,
    MatTableModule,
    CdkTableModule,
    RegisteredUserModule,
    MedicalStaffModule,
    SystemAdminModule,
    ScheduleModule, RecurrenceEditorModule,
    
    
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService,
    {
      
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
