export class Address {
    id:  number = 0;;
    street: string = '';
    number: string = '';
    city: string = '';
    state: string = '';
    longitude: number = 0;
    latitude: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.street = obj.street;
            this.number = obj.number;
            this.city = obj.city;
            this.state = obj.state;
            this.longitude = obj.longitude;
            this.latitude = obj.latitude;  
        }
    }
}
