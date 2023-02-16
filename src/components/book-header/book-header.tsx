import { FC } from 'react';
import { Link } from 'react-router-dom';

import { BookHeaderProps } from './book-header-props';

import './book-header.scss';

export const BookHeader: FC<BookHeaderProps> = ({category, title}) => (
    <div className='book-header-wrapper'>
        <div className='book-header'>
            <div className='book-header-text'>
                <Link to={`/books/${category.path}`}>{category.name}</Link>
                {` / ${title}`}
            </div>
        </div>
    </div>
)