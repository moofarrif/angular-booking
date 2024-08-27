export interface Guest {
    id: number;
    bookingId: number;
    firstname: string;
    lastname: string;
    birthdate: Date;
    gender: string;
    documentType: string;
    documentNumber: string;
    email: string;
    phone: string;
};