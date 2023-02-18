import { FC } from 'react';

import Avatar from '../../assets/img/reviewer-avatar.png';
import { BookStars } from '../book-stars/book-stars';

import { BookReviewProps } from './book-review-props';

import './book-review.scss';

export const BookReview: FC<BookReviewProps> = ({avatar, name, date, stars, text}) => (
    <div className='review-wrapper'>
        <div className="review-author">
            <img src={avatar? `https://strapi.cleverland.by${avatar}` :Avatar} alt='reviewer' />
            <div className='review-author-info'>
                <div>{name}</div>
                <div>{date}</div>
            </div>
        </div>
        <div className="review-stars">
            <BookStars quantity={stars} size='medium' />
        </div>
        {text &&
            <div className="review-text">
                <p>{text}</p>
            </div>
        }
    </div>
)