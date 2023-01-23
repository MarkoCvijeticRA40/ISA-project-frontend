import { Address } from "./address.model";
import { DonorPoll } from "./donor-poll.model";
import { Gender } from "./gender.model";

export class RegisteredUser {
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
    enabled: boolean = false;
    lastPassworResetDate: Date = new Date();
    points: number = 0;
    numOfPenalities: number = 0;
    userCategory: any = null;
    visitedCenters: any[] = [];
    scheduledAppointments: any[] = [];
    performedAppointments: any[] = [];


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
            this.lastPassworResetDate = obj.lastPassworResetDate;
            this.points = obj.points;
            this.numOfPenalities = obj.numOfPenalities;
            this.userCategory = obj.userCategory;
            this.visitedCenters  = obj.visitedCenters;
            this.scheduledAppointments = obj.scheduledAppointments;
            this.performedAppointments = obj.performedAppointments;
        }
    }

}
