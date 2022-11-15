import { WorkTime } from "./work-time.model";

export class Center {
    id: number = 0;
    name: string = '';
    description: string = '';
    avgGrade: number = 0;
    address: any = null;
    workTime: WorkTime = new WorkTime();
    blood: any[] = [];
    equipments: any[] = [];
    freeAppointments: any[] = [];
    medicalStaff: any[] = [];

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.name = obj.name;
            this.description = obj.description;
            this.avgGrade = obj.avgGrade;
            this.address = obj.address;
            this.workTime = obj.workTime;
            this.blood = obj.blood;
            this.equipments = obj.equipments;
            this.freeAppointments = obj.freeAppointments;
            this.medicalStaff = obj.medicalStaff;  
        }
    }
}
