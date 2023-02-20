import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { fetchBooks, getAllBooks } from 'src/app/redux/book-slice';
import { fetchCategories } from 'src/app/redux/category-slice';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { convertDateToDDMM } from 'src/utils/convert-date';
import { getRouteLastWord } from 'src/utils/route-util';

import { BookCard } from '../book-card/book-card';
import { BookItem } from '../book-item/book-item';

import { BookListProps } from './book-list-props';

import './book-list.scss';

export const BookList: FC<BookListProps> = ({listStyle}) => {
    const dispatch = useAppDispatch();
    const location = useLocation().pathname;
    
    let booksToShow = useAppSelector(getAllBooks());
    const categories = useAppSelector((state) => state.category.categories);

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchBooks());
    }, [dispatch]);

    if (location !== '/books/all') {
        booksToShow = booksToShow.filter(book => categories.find(category => category.name === book.categories[0])?.path === getRouteLastWord(location));
    }

    return (
        <div className={classNames(listStyle === 'tile' ? 'tile-container' : 'list-container')}>
            {listStyle === 'tile' && booksToShow.map(book => 
                <BookCard
                    key={book.id}
                    id={book.id}
                    image={book.image ? `https://strapi.cleverland.by${book.image.url}` : undefined}
                    stars={Math.trunc(book.rating)}
                    title={book.title}
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
                    author={book.authors[0]}
                    free={book.booking ? !book.booking.order : true}
                    busyUntil={convertDateToDDMM(book.booking?.dateOrder)}
                />
            )}
        </div>
    )
};


