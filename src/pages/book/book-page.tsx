import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCategories, getCategoryByPath } from 'src/app/redux/category-slice';
import { fetchOneBook, getBookDetails } from 'src/app/redux/one-book-slice';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { EmptyCategory } from 'src/models/category.model';
import { EmptyBook } from 'src/models/one-book.model';

import { BookHeader } from '../../components/book-header/book-header';
import { BookMain } from '../../components/book-main/book-main';

import './book-page.scss';

export const BookPage = () => {
    const { bookId } = useParams();
    const dispatch = useAppDispatch();
    const location = useLocation();
    const currentBook = useAppSelector(getBookDetails(bookId || '0')) || EmptyBook;
    const currentCategory = useAppSelector(getCategoryByPath(location.pathname.split('/')[2]));
    

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchOneBook(bookId || '0'));
    }, [dispatch, bookId])

    return (
        <div className='book-wrapper'>
            <BookHeader
                category={currentCategory || EmptyCategory}
                title={currentBook.title}
            />
            <BookMain
                book={currentBook}
            />
        </div>
    )
};
