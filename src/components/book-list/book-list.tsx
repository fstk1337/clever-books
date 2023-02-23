import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { fetchBooks, getAllBooks } from 'src/app/redux/book-slice';
import { fetchCategories, getCategoryByPath } from 'src/app/redux/category-slice';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { convertDateToDDMM } from 'src/utils/convert-date';
import { filterBooksByCategory, filterBooksByPattern } from 'src/utils/filter-books';
import { getRouteLastWord } from 'src/utils/route-util';
import { sortBooksByOrder } from 'src/utils/sort-books';

import { BookCard } from '../book-card/book-card';
import { BookItem } from '../book-item/book-item';

import { BookListProps } from './book-list-props';

import './book-list.scss';

export const BookList: FC<BookListProps> = ({listStyle, sortDesc, searchText}) => {
    const dispatch = useAppDispatch();
    const location = useLocation().pathname;
    
    const category = useAppSelector(getCategoryByPath(getRouteLastWord(location)));
    const books = useAppSelector(getAllBooks());
    let booksToShow = location === '/books/all' ? books : filterBooksByCategory(books, category?.name);
    const isCategoryEmpty = booksToShow.length === 0;
    
    booksToShow = filterBooksByPattern(booksToShow, searchText);
    const isNothingFound = booksToShow.length === 0;
    
    booksToShow = sortBooksByOrder(booksToShow, sortDesc);
    
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchBooks());
    }, [dispatch]);

    return (
        <div className={classNames(listStyle === 'tile' ? 'tile-container' : 'list-container')}>
            {isCategoryEmpty && 
                <div className='no-books-message' data-test-id='empty-category'>
                    <span>В этой категории книг </span><span>ещё нет</span>
                </div>
            }
            {!isCategoryEmpty && isNothingFound && 
                <div className='no-books-message' data-test-id='search-result-not-found'>
                    <span>По запросу ничего </span><span>не найдено</span>
                </div>
            }
            {listStyle === 'tile' && booksToShow.map(book => 
                <BookCard
                    key={book.id}
                    id={book.id}
                    image={book.image ? `https://strapi.cleverland.by${book.image.url}` : undefined}
                    stars={Math.trunc(book.rating)}
                    title={book.title}
                    highlight={searchText}
                    author={book.authors[0]}
                    free={book.booking ? !book.booking.order : true}
                    busyUntil={convertDateToDDMM(book.booking?.dateOrder)}
                />
            )} 
            {listStyle === 'list' && booksToShow.map(book => 
                <BookItem
                    key={book.id}
                    id={book.id}
                    image={book.image ? `https://strapi.cleverland.by${book.image.url}` : undefined}
                    stars={book.rating}
                    title={book.title}
                    highlight={searchText}
                    author={book.authors[0]}
                    free={book.booking ? !book.booking.order : true}
                    busyUntil={convertDateToDDMM(book.booking?.dateOrder)}
                />
            )}
        </div>
    )
};


