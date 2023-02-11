import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { disableShow } from '../../app/store/slices/nav-slice';
import { Book, books } from '../../constants/books';
import { BookCategory } from '../../constants/categories';
import { useAppDispatch } from '../../hooks';

import { AppNavCategoriesProps } from './app-nav-categories-props';

import './app-nav-categories.scss';

const countBooksInCategory = (categoryId: number, bookList: Book[]) => (
    bookList.filter(book => book.category.id === categoryId).length
)

export const AppNavCategories: FC<AppNavCategoriesProps> = ({show, type}) => {
    const categories: BookCategory[] = books.map(book => book.category).filter((value, index, array) => array.indexOf(value) === index);
    const location = useLocation();
    const dispatch = useAppDispatch();

    return (
        <div className={classNames('categories-wrapper', show ? 'show' : '')}>
            <ul className='categories-list'>
                <li
                    className={classNames('category', 'all-books', location.pathname === '/books/all' ? 'active' : '')}
                >
                    <Link
                        data-test-id={type === 'main' ? 'navigation-books' : 'burger-books'}
                        to='/books/all'
                        onClick={type === 'adaptive' ? () => dispatch(disableShow()) : undefined}
                    >
                        Все книги
                    </Link>
                </li>
                {categories.map(category =>
                    <li
                        key={category.id}
                        className={classNames('category', location.pathname === `/books/${category.name}` ? 'active' : '')}
                    >
                        <Link
                            to={`/books/${category.name}`}
                            onClick={type === 'adaptive' ? () => dispatch(disableShow()) : undefined}
                        >
                            <span className='genre'>{category.label}</span>
                        </Link>
                        <span className='quantity'>{countBooksInCategory(category.id, books)}</span>
                    </li> 
                )}
            </ul>
        </div>
    );
}