import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { fetchBooks } from 'src/app/redux/book-slice';
import { fetchCategories } from 'src/app/redux/category-slice';
import { RootState } from 'src/app/store';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { BookModel } from 'src/models';

import { BookCard } from '../book-card/book-card';
import { BookItem } from '../book-item/book-item';

import { BookListProps } from './book-list-props';

import './book-list.scss';

const getRouteLastWord = (route: string) => (
    route.split('/').at(-1)
);

export const BookList: FC<BookListProps> = ({listStyle}) => {
    const dispatch = useAppDispatch();
    const location = useLocation().pathname;
    
    let booksToShow: BookModel[] = useAppSelector((state: RootState) => state.book.books);
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
                    route={`/books/${categories.find(category => category.name === book.categories[0])?.path}`}
                    title={book.title}
                    author={book.authors[0]}
                    free={book.booking ? !book.booking.order : true}
                    busyUntil={book.booking?.dateOrder}
                />
            )} 
            {listStyle === 'list' && booksToShow.map(book => 
                <BookItem
                    key={book.id}
                    id={book.id}
                    image={book.image ? `https://strapi.cleverland.by${book.image.url}` : undefined}
                    stars={book.rating}
                    route={`/books/${categories.find(category => category.name === book.categories[0])?.path}`}
                    title={book.title}
                    author={book.authors[0]}
                    free={book.booking ? !book.booking.order : true}
                    busyUntil={book.booking?.dateOrder}
                />
            )}
        </div>
    )
};


