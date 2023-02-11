export interface BookCategory {
    id: number;
    name: string;
    label: string;
}

export const EmptyCategory: BookCategory = {
    id: 0,
    name: '',
    label: ''
}

export const categories: BookCategory[] = [
    {
        id: 1,
        name: 'business',
        label: 'Бизнес-книги'
    },
    {
        id: 2,
        name: 'detective',
        label: 'Детективы'
    },
    {
        id: 3,
        name: 'children',
        label: 'Детские книги'
    },
    {
        id: 4,
        name: 'foreign',
        label: 'Зарубежная литература'
    },
    {
        id: 5,
        name: 'history',
        label: 'История'
    },
    {
        id: 6,
        name: 'classic',
        label: 'Классическая литература'
    },
    {
        id: 7,
        name: 'psychology',
        label: 'Книги по психологии'
    },
    {
        id: 8,
        name: 'computer',
        label: 'Компьютерная литература'
    },
    {
        id: 9,
        name: 'art',
        label: 'Культура и искусство'
    },
    {
        id: 10,
        name: 'science',
        label: 'Наука и образование'
    },
    {
        id: 11,
        name: 'journal',
        label: 'Публицистическая литература'
    },
    {
        id: 12,
        name: 'manual',
        label: 'Справочники'
    },
    {
        id: 13,
        name: 'fantasy',
        label: 'Фантастика'
    },
    {
        id: 14,
        name: 'humour',
        label: 'Юмористическая литература'
    }
];