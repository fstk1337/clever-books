import { BookImage } from '../../constants/book-images';

export interface BookImgSliderProps {
    images: BookImage[];
    slidesPerView: number;
    active: number;
    handler: (id: number) => void;
}