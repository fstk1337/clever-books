import bookImage from '../assets/img/book-large.png';
import book2 from '../assets/img/book2.jpg';

export interface BookImage {
    id: number;
    image: string;
}

export const oneImage: BookImage[] = [
    {
        id: 1,
        image: bookImage
    }
];

export const twoImages: BookImage[] = [
    {
        id: 1,
        image: bookImage
    },
    {
        id: 2,
        image: book2
    }
];

export const threeImages: BookImage[] = [
    {
        id: 1,
        image: bookImage
    },
    {
        id: 2,
        image: book2
    },
    {
        id: 3,
        image: bookImage
    }
];

export const fiveImages: BookImage[] = [
    {
        id: 1,
        image: bookImage
    },
    {
        id: 2,
        image: book2
    },
    {
        id: 3,
        image: bookImage
    },
    {
        id: 4,
        image: book2
    },
    {
        id: 5,
        image: bookImage
    }
]