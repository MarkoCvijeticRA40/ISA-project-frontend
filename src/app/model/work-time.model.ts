
export class WorkTime {
    id: number = 0;
    endTime: string = '';
    startTime: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.endTime = obj.endTime;
            this.startTime = obj.startTime;
        }
    }

}
