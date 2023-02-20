import { BookError, BookingModel, DeliveryModel, HistoryModel } from './book.model';

export interface OneBookModel {
    id: number;
    title: string;
    rating: number;
    issueYear: string;
    description: string;
    publish: string;
    pages: string;
    cover: string;
    weight: string;
    format: string;
    ISBN: string;
    producer: string;
    authors: string[];
    images: [{
        url: string;
    }];
    categories: string[];
    comments: BookCommentModel[];
    booking: BookingModel;
    delivery: DeliveryModel;
    histories: HistoryModel[];   
}

interface BookCommentModel {
    id: number;
    rating: number;
    text: string;
    createdAt: string;
    user: {
        commentUserId: number;
        firstName: string;
        lastName: string;
        avatarUrl: string;
    }
}

export interface OneBookResponse {
    data: OneBookModel | null,
    error?: BookError
}

const EmptyBooking: BookingModel = {
    id: 0,
    order: false,
    dateOrder: '',
    customerId: 0,
    customerFirstName: '',
    customerLastName: ''
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

export const EmptyBook: OneBookModel = {
    id: 0,
    title: '',
    rating: 0,
    issueYear: '',
    description: '',
    publish: '',
    pages: '',
    cover: '',
    weight: '',
    format: '',
    ISBN: '',
    producer: '',
    authors: [],
    images: [{ url: ''}],
    categories: [],
    comments: [],
    booking: EmptyBooking,
    delivery: EmptyDelivery,
    histories: []
}