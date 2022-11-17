import { Address } from "./address.model";
import { Gender } from "./gender.model";

export class DonorPoll {
    id: number = 0;
    name: string = '';
    surname: string = '';
    nameOfFather: string = '';
    identityNumber: string = '';
    dateOfBirth: Date = new Date();
    phoneNum: string = '';
    facility: string = '';
    profession: string = '';
    numberOfBloodDonations: number = 0;
    address: Address = new Address();
    gender: Gender = 0;
    hasAlreadyDonatedBlood: boolean = false;
    isProfessionDangerous: boolean = false;
    wasRejectedToDonateBlood: boolean = false;
    isTakingAnyMedicines: boolean = false;
    hasSomeAllergies: boolean = false;
    hasChronicDisease: boolean = false;
    isFeelingHealthy: boolean = false;


    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.name = obj.name;
            this.surname = obj.surname;
            this.nameOfFather = obj.nameOfFather;
            this.identityNumber = obj.identityNumber;
            this.dateOfBirth = obj.dateOfBirth;
            this.phoneNum = obj.phoneNum;
            this.facility = obj.facility;
            this.profession = obj.profession;
            this.numberOfBloodDonations = obj.numberOfBloodDonations;  
            this.address = obj.address;
            this.gender = obj.gender;
            this.hasAlreadyDonatedBlood = obj.hasAlreadyDonatedBlood;
            this.isProfessionDangerous = obj.isProfessionDangerous;
            this.wasRejectedToDonateBlood = obj.wasRejectedToDonateBlood;
            this.isTakingAnyMedicines = obj.isTakingAnyMedicines;
            this.hasSomeAllergies = obj.hasSomeAllergies;
            this.hasChronicDisease = obj.hasChronicDisease;
            this.isFeelingHealthy = obj.isFeelingHealthy; 
        }
    }

}
