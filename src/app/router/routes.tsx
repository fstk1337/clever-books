// import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router-dom';
import { AuthContent } from 'src/components/auth-content/auth-content';
import { AuthLayout } from 'src/components/auth-layout/auth-layout';

// import { AppLayout } from '../../components/app-layout/app-layout';
// import { AppMainLayout } from '../../components/app-main-layout/app-main-layout';
// import { BookPage } from '../../pages/book';
// import { MainPage } from '../../pages/main';
// import { PublicOfferPage } from '../../pages/public-offer';
// import { RulesPage } from '../../pages/rules';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                element: <AuthContent />,
                index: true
            }
        ]
    }
    // {
    //     path: '/',
    //     element: <AppLayout />,
    //     children: [
    //         {
    //             element: <AppMainLayout />,
    //             children: [
    //                 {
    //                     path: '/',
    //                     element: <Navigate to='/books/all' replace={true} />
    //                 },
    //                 {
    //                     path: '/books/all',
    //                     exact: true,
    //                     element: <MainPage />
    //                 },
    //                 {
    //                     path: '/books/:category',
    //                     exact: true,
    //                     element: <MainPage />
    //                 },
    //                 {
    //                     path: '/rules',
    //                     exact: true,
    //                     element: <RulesPage />
    //                 },
    //                 {
    //                     path: '/public-offer',
    //                     exact: true,
    //                     element: <PublicOfferPage />
    //                 }
    //             ]
    //         },
    //         {
    //             path: '/books/:category/:bookId',
    //             element: <BookPage />
    //         }
    //     ]
    // }
];