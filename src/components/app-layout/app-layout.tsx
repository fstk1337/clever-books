import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { isBooksLoading } from 'src/app/redux/book-slice';
import { isCategoriesLoading } from 'src/app/redux/category-slice';
import { isOneBookLoading } from 'src/app/redux/one-book-slice';

import { AppFooter } from '../app-footer/app-footer';
import { AppHeader } from '../app-header/app-header';
import { AppLoader } from '../app-loader/app-loader';
import { AppNavAdaptive } from '../app-nav/app-nav-adaptive';

import './app-layout.scss';

export const AppLayout = () => {
    const booksLoading = useSelector(isBooksLoading());
    const categoriesLoading = useSelector(isCategoriesLoading());
    const oneBookLoading = useSelector(isOneBookLoading());
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(booksLoading || categoriesLoading || oneBookLoading);
    }, [booksLoading, categoriesLoading, oneBookLoading])

    return ( 
        <React.Fragment>
            <AppHeader />
            <Outlet />
            <AppFooter />
            <AppNavAdaptive />
            {isLoading && <AppLoader />}
        </React.Fragment>
    )
};