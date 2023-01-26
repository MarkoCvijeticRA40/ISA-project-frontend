import { Scheduledappointment } from 'src/app/model/scheduledappointment.model';

export class ScheduldedAppointmentCalendar {

    id: number = 0;
    startTime: Date;
    endTime: Date;
    center: any;
    nameSurname : string = ''
    
    public constructor(obj: Scheduledappointment) {
        
            this.id = obj.id;
            this.startTime = obj.date
            this.endTime = new Date(new Date(this.startTime).getTime() +  obj.duration*60000)
            this.center = obj.center;
            this.nameSurname = obj.registeredUser.name + " "+obj.registeredUser.surname;
            }

}
