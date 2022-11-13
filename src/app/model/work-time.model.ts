
export class WorkTime {
    id: number = 0;
    startTime: string = '';
    endTime: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.startTime = obj.startTime;
            this.endTime = obj.endTime;
        }
    }

}
