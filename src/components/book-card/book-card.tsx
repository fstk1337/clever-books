import { FC } from 'react';
import { Link } from 'react-router-dom';
import { getButtonOptions } from 'src/utils/button-options';

import { AppButton } from '../app-button/app-button';
import { BookStars } from '../book-stars/book-stars';

import { BookCardProps } from './book-card-props';

import './book-card.scss';

export const BookCard: FC<BookCardProps> = (props) => {
    const { buttonText, buttonStyle } = getButtonOptions(props.free, props.busyUntil);
 
    return (
        <Link to={`${props.id}`} className='book-card' data-test-id='card'>
            <div className="card-wrapper">
                <div className='card-info-wrapper'>
                    <img className='card-image' src={props.image} alt='' />
                    <div className='card-stars'>
                        {(props.stars <= 0 || props.stars >5) && 'ещё нет оценок'}
                        {(props.stars >0 && props.stars <= 5) && 
                            <BookStars quantity={props.stars} size='medium' />
                        }
                    </div>
                    <div className="card-info">
                        <div className="card-title">{props.title}</div>
                        <div className="card-author">{props.author}</div>
                    </div>
                </div>
                <div className='btn-wrapper'>
                    <AppButton styles={['card-btn', buttonStyle]} label={buttonText} />
                </div>
            </div>
        </Link>
    )
}