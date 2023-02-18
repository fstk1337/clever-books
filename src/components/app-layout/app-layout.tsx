import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { isBooksError, isBooksLoading } from 'src/app/redux/book-slice';
import { isCategoriesError, isCategoriesLoading } from 'src/app/redux/category-slice';
import { isOneBookError, isOneBookLoading } from 'src/app/redux/one-book-slice';

import { AppFetchError } from '../app-fetch-error/app-fetch-error';
import { AppFetchLoader } from '../app-fetch-loader/app-fetch-loader';
import { AppFooter } from '../app-footer/app-footer';
import { AppHeader } from '../app-header/app-header';
import { AppNavAdaptive } from '../app-nav/app-nav-adaptive';

import './app-layout.scss';

export const AppLayout = () => {
    const booksLoading = useSelector(isBooksLoading());
    const categoriesLoading = useSelector(isCategoriesLoading());
    const oneBookLoading = useSelector(isOneBookLoading());
    const booksError = useSelector(isBooksError());
    const categoriesError = useSelector(isCategoriesError());
    const oneBookError = useSelector(isOneBookError());
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    
    useEffect(() => {
        setLoading(booksLoading || categoriesLoading || oneBookLoading);
        if (isLoading) {
            document.body.classList.add('fixed');
        } else {
            document.body.classList.remove('fixed');
        }
    }, [isLoading, booksLoading, categoriesLoading, oneBookLoading])

    useEffect(() => {
        setError(booksError || categoriesError || oneBookError);
    }, [booksError, categoriesError, oneBookError])

    return ( 
        <React.Fragment>
            <AppHeader />
            <Outlet />
            <AppFooter />
            <AppNavAdaptive />
            {isLoading && <AppFetchLoader />}
            {isError && <AppFetchError />}
        </React.Fragment>
    )
};