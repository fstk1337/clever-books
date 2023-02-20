import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCategories } from 'src/app/redux/category-slice';
import { fetchOneBook, getBookDetails, isOneBookError, isOneBookLoading } from 'src/app/redux/one-book-slice';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { EmptyBook } from 'src/models/one-book.model';

import { BookHeader } from '../../components/book-header/book-header';
import { BookMain } from '../../components/book-main/book-main';

import './book-page.scss';

export const BookPage = () => {
    const { bookId } = useParams();
    const dispatch = useAppDispatch();
    const currentBook = useAppSelector(getBookDetails(bookId || '0')) || EmptyBook;

    const loading = useSelector(isOneBookLoading());
    const error = useSelector(isOneBookError());
    

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchOneBook(bookId || '0'));
    }, [dispatch, bookId])

    return (
        <div className='book-wrapper'>
            <BookHeader
                title={currentBook.title}
            />
            { !loading && !error &&
                <BookMain
                    book={currentBook}
                />
            }
        </div>
    )
};
