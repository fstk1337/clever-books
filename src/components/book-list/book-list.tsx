import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { Book, books } from '../../constants/books';
import { BookCard } from '../book-card/book-card';
import { BookItem } from '../book-item/book-item';

import { BookListProps } from './book-list-props';

import './book-list.scss';

const getRouteLastWord = (route: string) => (
    route.split('/').at(-1)
);

export const BookList: FC<BookListProps> = ({listStyle}) => {
    const location = useLocation().pathname;
    let booksToShow: Book[] = [...books];

    if (location !== '/books/all') {
        booksToShow = booksToShow.filter(book => book.category.name === getRouteLastWord(location));
    }

    return (
        <div className={classNames(listStyle === 'tile' ? 'tile-container' : 'list-container')}> 
            {listStyle === 'tile' && booksToShow.map(book => 
                <BookCard
                    key={book.id}
                    id={book.id}
                    image={book.images? book.images.at(0)?.image : undefined}
                    stars={Math.trunc(book.stars)}
                    route={`/books/${book.category.name}`}
                    title={book.title}
                    author={book.author}
                    free={book.free}
                    busyUntil={book.busyUntil}
                />
            )} 
            {listStyle === 'list' && booksToShow.map(book => 
                <BookItem
                    key={book.id}
                    id={book.id}
                    image={book.images? book.images.at(0)?.image : undefined}
                    stars={book.stars}
                    route={`/books/${book.category.name}`}
                    title={book.title}
                    author={book.author}
                    free={book.free}
                    busyUntil={book.busyUntil}
                />
            )}
        </div>
    )
};