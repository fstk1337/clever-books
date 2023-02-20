export interface BookingModel {
    id: number;
    order: boolean;
    dateOrder: string;
    customerId: number;
    customerFirstName: string;
    customerLastName: string;
}

const EmptyBooking: BookingModel = {
    id: 0,
    order: false,
    dateOrder: '',
    customerId: 0,
    customerFirstName: '',
    customerLastName: ''
}

export interface DeliveryModel {
    id: number;
    handed: boolean;
    dateHandedFrom: string;
    dateHandedTo: string;
    recipientId: number;
    recipientFirstName: string;
    recipientLastName: string;
}

const EmptyDelivery: DeliveryModel = {
    id: 0,
    handed: false,
    dateHandedFrom: '',
    dateHandedTo: '',
    recipientId: 0,
    recipientFirstName: '',
    recipientLastName: ''
}

export interface HistoryModel {
    id: number;
    userId: number;
}

export interface BookModel {
    issueYear: string;
    rating: number;
    title: string;
    authors: string[],
    image: {url: string};
    categories: string[];
    id: number;
    booking: BookingModel,
    delivery: DeliveryModel,
    histories: HistoryModel[]
}

export const EmptyBook: BookModel = {
    issueYear: '',
    rating: 0,
    title: '',
    authors: [],
    image: {
        url: ''
    },
    categories: [],
    id: 0,
    booking: EmptyBooking,
    delivery: EmptyDelivery,
    histories: []
}

export interface BookModelResponse {
    data: BookModel[] | null;
    error?: BookError;
}

export interface BookError {
    status: number;
    name: string;
    message: string;
    details: Record<string, never>;
}