import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { getAllBooks } from 'src/app/redux/book-slice';
import { getAllCategories } from 'src/app/redux/category-slice';
import { countBooksInCategory } from 'src/utils/count-books';

import { disableShowExpanded } from '../../app/redux/nav-slice';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { AppNavCategoriesProps } from './app-nav-categories-props';

import './app-nav-categories.scss';

export const AppNavCategories: FC<AppNavCategoriesProps> = ({show, type}) => {
    const categories = useAppSelector(getAllCategories());
    const books = useAppSelector(getAllBooks());

    const location = useLocation();
    const dispatch = useAppDispatch();

    return (
        <div className={classNames('categories-wrapper', show ? 'show' : '')}>
            <ul className='categories-list'>
                {categories.map(category =>
                    <li
                        data-test-id={category.id === 0 ? type === 'main' ? 'navigation-books' : 'burger-books' : undefined}
                        key={category.id}
                        className={classNames('category', location.pathname === `/books/${category.path}` ? 'active' : '')}
                    >
                        <Link
                            to={`/books/${category.path}`}
                            onClick={type === 'adaptive' ? () => dispatch(disableShowExpanded()) : undefined}
                        >
                            <span className='genre'>{category.name}</span>
                        </Link>
                        <span className='quantity'>{countBooksInCategory(category.name, books)}</span>
                    </li> 
                )}
            </ul>
        </div>
    );
}