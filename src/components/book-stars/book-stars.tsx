import { FC } from 'react';
import classNames from 'classnames';
import { createStars } from 'src/utils/create-stars';

import { ReactComponent as StarIcon } from '../../assets/img/star.svg';

import { BookStarsProps } from './book-stars-props';

import './book-stars.scss';

export const BookStars: FC<BookStarsProps> = ({size, quantity}) => {
    const stars = createStars(quantity);

    return (
    <div className={classNames('stars-wrapper', `stars-${size}`)}>
        {stars.map(star => (
            <div key={star.id} className={classNames('star-item', star.active ? 'active' : '')}>
                <StarIcon />
            </div>
        ))}
    </div>
)}