import { Navigate } from 'react-router-dom';

import { AppLayout } from '../../components/app-layout/app-layout';
import { AppMainLayout } from '../../components/app-main-layout/app-main-layout';
import { BookPage } from '../../pages/book';
import { MainPage } from '../../pages/main';
import { PublicOfferPage } from '../../pages/public-offer';
import { RulesPage } from '../../pages/rules';

export const routes = [
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                element: <AppMainLayout />,
                children: [
                    {
                        path: '/',
                        element: <Navigate to='/books/all' replace={true} />
                    },
                    {
                        path: '/books/all',
                        exact: true,
                        element: <MainPage />
                    },
                    {
                        path: '/books/:category',
                        exact: true,
                        element: <MainPage />
                    },
                    {
                        path: '/rules',
                        exact: true,
                        element: <RulesPage />
                    },
                    {
                        path: '/public-offer',
                        exact: true,
                        element: <PublicOfferPage />
                    }
                ]
            },
            {
                path: '/books/:category/:bookId',
                element: <BookPage />
            }
        ]
    }
];