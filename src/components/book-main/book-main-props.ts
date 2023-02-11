import { BookImage } from '../../constants/book-images';

export interface BookMainProps {
    author: string;
    title: string;
    mainImage?: BookImage;
    images?: BookImage[];
    rating: number;
    free: boolean;
    busyUntil?: string;
}