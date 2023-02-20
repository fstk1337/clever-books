import { FC, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
                    <Link to={`/books/${path}`}>{name}</Link>
                    {` / ${title}`}
                </div>
            </div>
        </div>
    )
};