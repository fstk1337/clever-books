import { FC, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchBooks } from 'src/app/redux/book-slice';
import { fetchCategories, getAllCategories } from 'src/app/redux/category-slice';
import { useAppDispatch, useAppSelector } from 'src/hooks';

import { BookHeaderProps } from './book-header-props';

import './book-header.scss';

export const BookHeader: FC<BookHeaderProps> = ({title}) => {
    const dispatch = useAppDispatch();
    const location = useLocation().pathname;
    const categories = useAppSelector(getAllCategories());
    const path = location.split('/')[2];
    const name = categories.find(category => category.path === path)?.name || '';

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])

    return (
        <div className='book-header-wrapper'>
            <div className='book-header'>
                <div className='book-header-text'>
                    <Link
                        data-test-id='breadcrumbs-link'
                        to={`/books/${path}`}
                        onClick={() => dispatch(fetchBooks())}
                    >
                        {name}
                    </Link>
                    {' / '}
                    <span data-test-id='book-name'>{title}</span>
                </div>
            </div>
        </div>
    )
};