import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { DonorPoll } from 'src/app/model/donor-poll.model';
import { Gender } from 'src/app/model/gender.model';
import { DonorPollService } from 'src/app/service/donor-poll.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-donor-poll',
  templateUrl: './donor-poll.component.html',
  styleUrls: ['./donor-poll.component.css']
})
export class DonorPollComponent implements OnInit {

  public donorPoll: DonorPoll = new DonorPoll();

  genders = [
    { value: Gender.Male, viewValue: "Male" },
    { value: Gender.Female, viewValue: "Female"}
  ]

  myOptions = [ 'yes', 'no' ];

  myValueOne: string = '';
  myValueTwo: string = '';
  myValueThree: string = '';
  myValueFour: string = '';
  myValueFive: string = '';
  myValueSix: string = '';
  myValueSeven: string = '';

  isGenderSelected: boolean = false;

  constructor(private donorPollService: DonorPollService, private router: Router) { }

  ngOnInit(): void {
    detectChanges();
  }

  public save() {
    if (this.isInputValid()) {
        if (this.areQuestionsAnswered()) {
          if (this.myValueOne === 'yes') {
            this.donorPoll.hasAlreadyDonatedBlood = true;
          } 
          else {
            this.donorPoll.hasAlreadyDonatedBlood = false;
          }
          if (this.myValueTwo === 'yes') {
            this.donorPoll.isProfessionDangerous = true;
          } 
          else {
            this.donorPoll.isProfessionDangerous = false;
          }
          if (this.myValueThree === 'yes') {
            this.donorPoll.wasRejectedToDonateBlood = true;
          } 
          else {
            this.donorPoll.wasRejectedToDonateBlood = false;
          }
          if (this.myValueFour === 'yes') {
            this.donorPoll.isTakingAnyMedicines = true;
          } 
          else {
            this.donorPoll.isTakingAnyMedicines = false;
          }
          if (this.myValueFive === 'yes') {
            this.donorPoll.hasSomeAllergies = true;
          } 
          else {
            this.donorPoll.hasSomeAllergies = false;
          }
          if (this.myValueSix === 'yes') {
            this.donorPoll.hasChronicDisease = true;
          } 
          else {
            this.donorPoll.hasChronicDisease = false;
          }
          if (this.myValueSeven === 'yes') {
            this.donorPoll.isFeelingHealthy = true;
          } 
          else {
            this.donorPoll.isFeelingHealthy = false;
          }
          
          this.donorPollService.save(this.donorPoll).subscribe(res => {
            alert("Saved!");
          })
        } else {
          alert("Please answer all questions!");
        }
    }
  }

  requiredNameControl = new FormControl('', [
    Validators.required,
  ]);

  requiredSurnameControl = new FormControl('', [
    Validators.required,
  ]);

  requiredNameOfFatherControl = new FormControl('', [
    Validators.required,
  ]);

  requiredIDControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]{13}')
  ]);

  requiredPhoneControl = new FormControl('', [
    Validators.required,
  ]);

  requiredFacilityControl = new FormControl('', [
    Validators.required,
  ]);

  requiredProfessionControl = new FormControl('', [
    Validators.required,
  ]);

  requiredNumberOfBloodDonationsControl = new FormControl('', [
    Validators.required,
  ]);

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

  requiredGenderControl = new FormControl('', [
    Validators.required,
  ]);

  requiredDateControl = new FormControl('',[
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();




  private isInputValid(): boolean {
    return this.donorPoll.name != '' && this.donorPoll.surname != ''
    && this.donorPoll.nameOfFather != '' && this.donorPoll.identityNumber != ''
    && this.donorPoll.phoneNum != '' && this.donorPoll.facility != ''
    && this.donorPoll.profession != '' && this.donorPoll.numberOfBloodDonations.toString() != ''
    && this.donorPoll.address.city != '' && this.donorPoll.address.street != ''
    && this.donorPoll.address.state != '' && this.donorPoll.address.number != ''
    && this.donorPoll.nameOfFather != '' && this.donorPoll.identityNumber.length === 13
    && this.isGenderSelected;
  }

  selectGender() {
    this.isGenderSelected = true;
  }


  private areQuestionsAnswered(): boolean {
    return this.myValueOne != '' && this.myValueTwo != ''
    && this.myValueThree != '' && this.myValueFour != ''
    && this.myValueFive != '' && this.myValueSix != ''
    && this.myValueSeven != '';
  }

}
function detectChanges() {
  throw new Error('Function not implemented.');
}

