import { Address } from "./address.model";
import { Gender } from "./gender.model";

export class MedicalStaff {
    id: number = 0;
    email: string = '';
    password: string = '';
    name: string = '';
    surname: string = '';
    phoneNum: string = '';
    identityNumber: string = '';
    profession: string = '';
    facilityInfo: string = '';
    role: any = null;
    address: Address = new Address();
    gender: Gender = 0;
    enabled : any;
    lastPasswordResetDate : any;
 
    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.email = obj.email;
            this.password = obj.password;
            this.name = obj.name;
            this.surname = obj.surname;
            this.phoneNum = obj.phoneNum;
            this.identityNumber = obj.identityNumber;
            this.profession = obj.profession;
            this.facilityInfo = obj.facilityInfo;
            this.role = obj.role;
            this.address = obj.address;
            this.gender = obj.gender;
            this.enabled = obj.enabled;
            this.lastPasswordResetDate = obj.lastPasswordResetDate

        }
    }
}
