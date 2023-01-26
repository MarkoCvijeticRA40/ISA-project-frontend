import { Scheduledappointment } from 'src/app/model/scheduledappointment.model';

export class ScheduldedAppointmentCalendar {

    //id: number = 0;
    startTime: Date;
    endTime: Date;
    center: any;
    nameSurname : string = ''
    
    public constructor( startTime : Date , duration: number ,nameSurname: string) {
        
          //  this.id = id;
            this.startTime = startTime
            this.endTime = new Date(new Date(startTime).getTime() +  duration*60000)
            this.nameSurname = nameSurname;
            }

}
