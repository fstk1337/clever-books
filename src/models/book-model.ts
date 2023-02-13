export interface BookingModel {
    id: number;
    order: boolean;
    dateOrder: string;
    customerId: number;
    customerFirstName: string;
    customerLastName: string;
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

export interface BookModelResponse {
    data: BookModel | null;
    error?: BookError;
}

export interface BookError {
    status: number;
    name: string;
    message: string;
    details: Record<string, never>;
}
