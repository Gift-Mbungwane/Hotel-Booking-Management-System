import { DateFormatter } from "ngx-bootstrap/datepicker";

export interface Customer {
    $key: string,
    email: string, 
    arrivalDate: Date,
    departureDate: Date,
    guests: any[],
    roomType: any[]
}
