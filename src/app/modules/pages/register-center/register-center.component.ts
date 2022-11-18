import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Gender } from 'src/app/model/gender.model';
import { MedicalStaff } from 'src/app/model/medical-staff.model';
import { Center } from 'src/app/model/center.model';



import { CenterService } from 'src/app/service/center.service';
import { UserService } from 'src/app/service/user.service';
import { ThisReceiver } from '@angular/compiler';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-register-center',
  templateUrl: './register-center.component.html',
  styleUrls: ['./register-center.component.css']
})
export class RegisterCenterComponent implements OnInit {
  
  public center: Center = new Center()
  
  public medicalStaff: MedicalStaff = new MedicalStaff();


  public confirmationPass: string = '';

  times = [
    {value: '06:00', viewValue: '06:00'},
    {value: '06:30', viewValue: '06:30'},
    {value: '07:00', viewValue: '07:00'},
    {value: '07:30', viewValue: '07:30'},
    {value: '08:00', viewValue: '08:00'},
    {value: '08:30', viewValue: '08:30'},
    {value: '09:00', viewValue: '09:00'},
    {value: '09:30', viewValue: '09:30'},
    {value: '10:00', viewValue: '10:00'},
    {value: '10:30', viewValue: '10:30'},
    {value: '11:00', viewValue: '11:00'},
    {value: '11:30', viewValue: '11:30'},
    {value: '12:00', viewValue: '12:00'},
    {value: '12:30', viewValue: '12:30'},
    {value: '13:00', viewValue: '13:00'},
    {value: '13:30', viewValue: '13:30'},
    {value: '14:00', viewValue: '14:00'},
    {value: '14:30', viewValue: '14:30'},
    {value: '15:00', viewValue: '15:00'},
    {value: '15:30', viewValue: '15:30'},
    {value: '16:00', viewValue: '16:00'},
    {value: '16:30', viewValue: '16:30'},
    {value: '17:00', viewValue: '17:00'},
    {value: '18:30', viewValue: '18:30'},
    {value: '19:00', viewValue: '19:00'},
    {value: '20:30', viewValue: '20:30'},
    {value: '21:00', viewValue: '21:00'},
    {value: '21:30', viewValue: '21:30'},
    {value: '22:00', viewValue: '22:00'}

  ];

  constructor(private centerService: CenterService,private userService: UserService, private router: Router) { }


  genders = [
    { value: Gender.Male, viewValue: "Male" },
    { value: Gender.Female, viewValue: "Female"}
  ]

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  ngOnInit(): void {

  }
  
  public registerCenter() {
      
      this.setMedicalStaff();

      
     if (this.isInputValid()) {

       if(this.isWorkTimeValid()){
      
        this.userService.registerCenterAdministrator(this.medicalStaff).subscribe(res => {
        this.userService.findAdministrator(this.medicalStaff.email).subscribe(res => {
        this.center.medicalStaff.push(res);
        this.centerService.registerCenter(this.center).subscribe(res => {
          alert("You have registered center successfully!");
        })
        
        });
        
        });
      }else{
        alert("End work time must be greater than start work time!");
      }
    }
    

  }


  emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
  ]);

  requiredPasswordControl = new FormControl('', [
    Validators.required,
  ]);

  requiredNameControl = new FormControl('', [
    Validators.required,
  ]);
  requiredNameCenterControl = new FormControl('', [
    Validators.required,
  ]);

  requireStartWorkTimeControl = new FormControl('', [
    Validators.required,
  ]);

  requireEndWorkTimeControl = new FormControl('', [
    Validators.required,
  ]);

  requireGenderControl = new FormControl('', [
    Validators.required,
  ]);


  requiredDescriptionCenterControl = new FormControl('', [
    Validators.required,
  ]);

  requiredSurnameControl = new FormControl('', [
    Validators.required,
  ]);

  requiredCenterCityControl = new FormControl('', [
    Validators.required,
  ]);

  requiredCenterStateControl = new FormControl('', [
    Validators.required,
  ]);

  requiredCenterStreetControl = new FormControl('', [
    Validators.required,
  ]);

  requiredCenterNumberControl = new FormControl('', [
    Validators.required,
  ]);

  requiredPhoneControl = new FormControl('', [
    Validators.required,
  ]);

  requiredIDControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]{13}')
  ]);

  requiredProfessionControl = new FormControl('', [
    Validators.required,
  ]);

  requiredConfirmationPasswordControl = new FormControl('', [
    Validators.required,
  ])

  requiredCityControl = new FormControl('', [
    Validators.required,
  ]);

  requiredStateControl = new FormControl('', [
    Validators.required,
  ]);

  requiredStreetControl = new FormControl('', [
    Validators.required,
  ]);

  requiredNumberControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  private isInputValid(): boolean {
    return this.center.name!= '' && this.center.description!= ''
        && this.center.address.city != '' && this.center.address.state != '' 
        && this.center.address.street != ''
        && this.center.workTime.startTime != '' 
        && this.center.workTime.endTime != '' 
         &&this.medicalStaff.email != '' && this.medicalStaff.password != ''
         && this.medicalStaff.name != '' && this.medicalStaff.surname != '' 
         && this.medicalStaff.address.city != '' && this.medicalStaff.address.state != '' 
         && this.medicalStaff.address.street != '' && this.medicalStaff.phoneNum != '' 
         && this.medicalStaff.identityNumber.length === 13 && this.medicalStaff.profession != ''
         && this.confirmationPass != '';

  }

  private isWorkTimeValid(): boolean{

    if(parseInt(this.center.workTime.startTime.slice(0, 2)) > parseInt(this.center.workTime.endTime.slice(0, 2)))
    {return false
    }else if(parseInt(this.center.workTime.startTime.slice(0, 2)) == parseInt(this.center.workTime.endTime.slice(0, 2)))
    {
      if(parseInt(this.center.workTime.startTime.slice(3, 5)) < parseInt(this.center.workTime.endTime.slice(3, 5)))
      {
        return true;
      }
      return false;
    }
    return true

  }

  private isPassConfirmed(): boolean {
    return this.medicalStaff.password === this.confirmationPass;
  }

  private setMedicalStaff(): void{
     this.medicalStaff.facilityInfo = this.center.name
     this.medicalStaff.profession = "Center admin"
  }

}


  function detectChanges() {
    throw new Error('Function not implemented.');
  }
  
  
