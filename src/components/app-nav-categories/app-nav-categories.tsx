import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { RootState } from 'src/app/store';
import { BookModel } from 'src/models';
import { CategoryModel } from 'src/models/category.model';

import { disableShow } from '../../app/redux/nav-slice';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { AppNavCategoriesProps } from './app-nav-categories-props';

import './app-nav-categories.scss';

const countBooksInCategory = (categoryName: string, bookList: BookModel[]) => (
    bookList.filter(book => book.categories.find(category => category === categoryName)).length
)

export const AppNavCategories: FC<AppNavCategoriesProps> = ({show, type}) => {
    const categories: CategoryModel[] = useAppSelector((state: RootState) => state.category.categories);
    const books: BookModel[] = useAppSelector((state: RootState) => state.book.books);

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
                        className={classNames('category', location.pathname === `/books/${category.path}` ? 'active' : '')}
                    >
                        <Link
                            to={`/books/${category.path}`}
                            onClick={type === 'adaptive' ? () => dispatch(disableShow()) : undefined}
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