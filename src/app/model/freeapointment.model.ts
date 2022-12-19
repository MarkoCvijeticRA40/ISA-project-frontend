import { Center } from "./center.model";
import { Medicalstaff } from "./medicalstaff.model";

export class Freeapointment {

    id: number = 0;
    dateStart: Date = new Date();
    duration: number = 0;
    freeAppointments: any[] = [];
    centers: any[] = [];

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.dateStart = obj.dateStart;
            this.duration = obj.duration;
            this.centers = obj.centers;
            this.freeAppointments = obj.freeAppointments;
        }
    }
}
