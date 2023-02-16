import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchOneBook } from 'src/app/redux/book-slice';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { EmptyCategory } from 'src/models/category.model';

import { BookHeader } from '../../components/book-header/book-header';
import { BookMain } from '../../components/book-main/book-main';

import './book-page.scss';

export const BookPage = () => {
    const { bookId } = useParams();
    const dispatch = useAppDispatch();
    const location = useLocation();
    const currentBook = useAppSelector(state => state.book.currentBook);
    const categories = useAppSelector(state => state.category.categories);

    useEffect(() => {
        dispatch(fetchOneBook(bookId || '0'));
    }, [dispatch, bookId])

    return (
        <div className='book-wrapper'>
            <BookHeader
                category={categories.find(category => location.pathname === `/books/${category.name}/${bookId}`) || EmptyCategory}
                title={currentBook.title}
            />
            <BookMain
                author={currentBook.authors[0]}
                title={currentBook.title}
                mainImage={currentBook.images[0].url}
                images={currentBook.images}
                rating={currentBook.rating}
                free={!currentBook.booking || !currentBook.booking.order}
                busyUntil={currentBook.booking ? currentBook.booking.dateOrder : undefined}    
            />
        </div>
    )
};
