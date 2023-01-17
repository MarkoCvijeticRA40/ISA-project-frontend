import { Center } from "./center.model";

export class Freeapointment {

    id: number = 0;
    date: Date = new Date();
    duration: number = 0;
    center: any;
    medicalStaff: any;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.date = obj.date;
            this.duration = obj.duration;
            this.center = obj.center;
            this.medicalStaff = obj.medicalStaff;
        }
    }
}
