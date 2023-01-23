import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/model/address.model';
import { Center } from 'src/app/model/center.model';
import { Freeapointment } from 'src/app/model/freeapointment.model';
import { MedicalStaff } from 'src/app/model/medical-staff.model';
import { CenterService } from 'src/app/service/center.service';
import { FreeappointmentService } from 'src/app/service/freeappointment.service';
import { MedicalstaffService } from 'src/app/service/medicalstaff.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-available-appointment',
  templateUrl: './create-available-appointment.component.html',
  styleUrls: ['./create-available-appointment.component.css']
})
export class CreateAvailableAppointmentComponent implements OnInit {
  startDate: Date = new Date();

  workTimeStart : Date = new Date(); 
  
  workTimeEnd : Date = new Date();
  
  freeAppointmentStartWithDuration : Date = new Date();

  public freeAppointment : Freeapointment = new Freeapointment();
  
  public medicalStaff : MedicalStaff = new MedicalStaff();

  public centerForFreeApp : Center = new Center();

  public adressForFreeApp : Address = new Address();

  different : any;

  hour : number = 8;

  minute : number = 0;

  workTimeHour : number = 0;

  workTimeMinute : number = 0;

  hours = [
    {value: 8,  viewValue: '08'},
    {value: 9,  viewValue: '09'},
    {value: 10, viewValue: '10'},
    {value: 11, viewValue: '11'},
    {value: 12, viewValue: '12'},
    {value: 13, viewValue: '13'},
    {value: 14, viewValue: '14'},
    {value: 15, viewValue: '15'},
    {value: 16, viewValue: '16'},
    {value: 17, viewValue: '17'},
    {value: 18, viewValue: '18'},
    {value: 19, viewValue: '19'},
    {value: 20, viewValue: '20'},
    {value: 21, viewValue: '21'},
    {value: 22, viewValue: '22'},
  ];

  minutes = [
    {value: 0,   viewValue: '00'},
    {value: 15,  viewValue: '15'},
    {value: 30,  viewValue: '30'},
    {value: 60,  viewValue: '60'},
  ];

  durations = [
    {value: 15, viewValue: "15"},
    {value: 30, viewValue: "30"},
    {value: 45, viewValue: "45"},
    {value: 60, viewValue: "60"},
  ];
  
  constructor(private freeAppointmentService: FreeappointmentService,private service: MedicalstaffService,private centerService : CenterService, private userService: UserService) 

  { }

  public isCenterWorking() {
    
    //Kreiranje novog datuma koji postavljamo na datum free appointmenta,i postavljamo sat i minut od worktime da bih mogao da poredim -<> workTimeStart
    var stringForSplit = this.centerForFreeApp.workTime.startTime.toString();   
    var splitedFirstDate = stringForSplit.split(',');
    this.workTimeHour = parseInt(splitedFirstDate[0]);
    this.workTimeMinute = parseInt(splitedFirstDate[1])
    this.workTimeStart = new Date(this.freeAppointment.date);
    this.workTimeStart.setHours(this.workTimeHour);
    this.workTimeStart.setMinutes(this.workTimeMinute);

    //Kreiranje novog datuma koji postavljamo na datum free appointmenta,i postavljamo sat i minut od worktime da bih mogao da poredim -<> workTimeEnd
    var stringForSplit = this.centerForFreeApp.workTime.endTime.toString();   
    var splitedFirstDate = stringForSplit.split(',');
    this.workTimeHour = parseInt(splitedFirstDate[0]);
    this.workTimeMinute = parseInt(splitedFirstDate[1]);
    this.workTimeEnd = new Date(this.freeAppointment.date);
    this.workTimeEnd.setHours(this.workTimeHour);
    this.workTimeEnd.setMinutes(this.workTimeMinute);

    //Dodamo na termin appointmenta i duzinu trajanja jer i ona treba da bude ukljucena u potvrdu
    this.freeAppointmentStartWithDuration = new Date(this.freeAppointment.date);
    this.freeAppointmentStartWithDuration.setMinutes(this.freeAppointment.date.getMinutes() + this.freeAppointment.duration);
    
    if(this.freeAppointmentStartWithDuration >= this.workTimeStart && this.freeAppointmentStartWithDuration <= this.workTimeEnd ) {
      
      this.freeAppointmentStartWithDuration = new Date();
      return true;
    }

    return false;
  }

  public createFreeAppointment() {
    
    this.freeAppointment.date.setHours(1);
    this.freeAppointment.date.setMinutes(0);
    this.freeAppointment.date.setSeconds(0);
    this.freeAppointment.date.setMilliseconds(0);
    this.freeAppointment.center = this.centerForFreeApp;
    this.freeAppointment.date.setHours(this.hour);
    this.freeAppointment.date.setMinutes(this.minute);
    
    if(this.isCenterWorking() == true) 
    {
      if(new Date().getTime() - this.freeAppointment.date.getTime() > 0) 
      {
        alert("You can't make an appointment because it's in the past!");
      }
      else 
      {
        this.freeAppointmentService.createFreeAppointment(this.freeAppointment).subscribe(res => {
          this.freeAppointment = res;
          alert("You have successfully created a free appointment");
          this.freeAppointment = new Freeapointment();
          this.ngOnInit();
        })
      }
    }
    else 
    {
      alert("The center is not open during this period. The center is open from" + ' ' + this.workTimeStart.getHours().toString() + ' ' + "to" + ' ' + this.workTimeEnd.getHours().toString());
      this.freeAppointment = new Freeapointment();
      this.ngOnInit();
    }
  }

  ngOnInit(): void {
    this.service.find(this.userService.currentUser.email).subscribe(res => {
      this.medicalStaff = res;  
        this.freeAppointment.medicalStaff = this.medicalStaff; 
    })
    this.centerService.getCenterByMedicalStaffId(this.userService.currentUser.id).subscribe(res => {
      this.centerForFreeApp = res;   
    })
    this.freeAppointment.duration = 15;
  }

}
