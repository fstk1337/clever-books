export interface NavTab {
    id: number;
    text: string;
    icon?: string;
    type: 'link' | 'dropdown';
    route: string;
    subMenu?: string;
}

export const navTabs: NavTab[] = [
    {
        id: 1,
        text: 'Витрина книг',
        type: 'dropdown',
        route: '/books',
        subMenu: 'AppNavCategories'
    },
    {
        id: 2,
        text: 'Правила пользования',
        type: 'link',
        route: '/rules'
    },
    {
        id: 3,
        text: 'Договор оферты',
        type: 'link',
        route: '/public-offer'
    }
];