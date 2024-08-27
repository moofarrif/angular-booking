export interface Booking {
    id: number;
    roomId: number;
    checkInDate: Date;
    checkOutDate: Date;
    numberPeople: number;
    state: boolean;
};