import { useParams } from 'react-router-dom';

import { BookHeader } from '../../components/book-header/book-header';
import { BookMain } from '../../components/book-main/book-main';
import { Book, books, emptyBook } from '../../constants/books';

import './book-page.scss';

export const BookPage = () => {
    const { bookId } = useParams();
    const currentBook: Book = books.find(book => book.id.toString() === bookId) || emptyBook;

    return (
        <div className='book-wrapper'>
            <BookHeader
                category={currentBook.category}
                title={currentBook.title}
            />
            <BookMain
                author={currentBook.author}
                title={currentBook.title}
                mainImage={currentBook.images?.at(0)}
                images={currentBook.images}
                rating={currentBook.stars}
                free={currentBook.free}
                busyUntil={currentBook.busyUntil}    
            />
        </div>
    )
};
