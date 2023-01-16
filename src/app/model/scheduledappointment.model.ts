export class Scheduledappointment {

    id: number = 0;
    date: Date = new Date();
    duration: number = 0;
    center: any;
    medicalStaff: any;
    bloodDonorInfo : any;
    registeredUser: any;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.date = obj.date;
            this.duration = obj.duration;
            this.center = obj.center;
            this.medicalStaff = obj.medicalStaff;
            this.bloodDonorInfo = obj.bloodDonorInfo;
            this.registeredUser = obj.registeredUser;
        }
    }
}

