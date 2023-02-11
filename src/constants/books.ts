import { BookImage, fiveImages, oneImage, threeImages, twoImages } from './book-images';
import { BookCategory, categories, EmptyCategory } from './categories';

export interface Book {
    id: number;
    category: BookCategory;
    author: string;
    title: string;
    images?: BookImage[],
    stars: number;
    free: boolean;
    busyUntil?: string;
}

export const emptyBook: Book = {
    id: -1,
    category: EmptyCategory,
    author: '',
    title: '',
    stars: 0,
    free: false
}

export const books: Book[] = [
    {
        id: 1,
        category: categories.find(category => category.id === 1) || EmptyCategory,
        author: 'Адитья Бхаргава, Патрик Нимейер, 2019',
        title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        images: threeImages,
        stars: 4.3,
        free: true,
    },
    {
        id: 2,
        category: categories.find(category => category.id === 1) || EmptyCategory,
        author: 'Адитья Бхаргава, 2019',
        title: 'Грокаем алгоритмы. Иллюстрированное ',
        images: twoImages,
        stars: 0,
        free: true
    },
    {
        id: 3,
        category: categories.find(category => category.id === 1) || EmptyCategory,
        author: 'Адитья Бхаргава, 2019',
        title: 'Грокаем алгоритмы. ',
        images: twoImages,
        stars: 4.3,
        free: false,
        busyUntil: '03.05'
    },
    {
        id: 4,
        category: categories.find(category => category.id === 1) || EmptyCategory,
        author: 'Адитья Бхаргава, 2019',
        title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        images: oneImage,
        stars: 4.3,
        free: true
    },
    {
        id: 5,
        category: categories.find(category => category.id === 1) || EmptyCategory,
        author: 'Адитья Бхаргава, Патрик Нимейер, 2019',
        title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        stars: 4.3,
        free: false
    },
    {
        id: 6,
        category: categories.find(category => category.id === 1) || EmptyCategory,
        author: 'Адитья Бхаргава, Патрик Нимейер, 2019',
        title: 'Грокаем алгоритмы. Иллюстрированное ',
        stars: 0,
        free: false,
        busyUntil: '23.04'
    },
    {
        id: 7,
        category: categories.find(category => category.id === 1) || EmptyCategory,
        author: 'Адитья Бхаргава, Патрик Нимейер, 2019',
        title: 'Грокаем алгоритмы. ',
        images: fiveImages,
        stars: 4.3,
        free: true
    },
    {
        id: 8,
        category: categories.find(category => category.id === 1) || EmptyCategory,
        title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        author: 'Адитья Бхаргава, Патрик Нимейер, 2019',
        images: fiveImages,
        stars: 4.3,
        free: true
    },
    {
        id: 9,
        category: categories.find(category => category.id === 1) || EmptyCategory,
        author: 'Адитья Бхаргава, 2019',
        title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        images: threeImages,
        stars: 4.3,
        free: true
    },
    {
        id: 10,
        category: categories.find(category => category.id === 1) || EmptyCategory,
        author: 'Адитья Бхаргава, 2019',
        title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        stars: 4.3,
        free: true
    }
]