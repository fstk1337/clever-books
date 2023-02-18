import { FC } from 'react';
import { Link } from 'react-router-dom';

import { AppButton } from '../app-button/app-button';
import { BookStars } from '../book-stars/book-stars';

import { BookItemProps } from './book-item-props';

import './book-item.scss';

const convertDate = (dateString: string): string => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    
    return `${date.getDate()}.${month}`;
}

export const BookItem: FC<BookItemProps> = (props) =>  {
    let buttonText = 'Забронировать';
    let buttonStyle = 'active';

    if (!props.free) {
        buttonText = props.busyUntil ? `занята до ${convertDate(props.busyUntil)}` : 'Забронирована';
        buttonStyle = props.busyUntil ? 'busy' : 'booked';
    }

    return (
        <Link to={`${props.id}`} className='book-item' data-test-id='card'>
            <div className="item-wrapper">
                <img className='item-image' src={props.image} alt='' />
                <div className="item-text">
                    <div className='item-info'>
                        <div className="item-title">{props.title}</div>
                        <div className="item-author">{props.author}</div>
                        <div className='item-stars-top'>
                            {(props.stars <= 0 || props.stars >5) && 'ещё нет оценок'}
                            {(props.stars >0 && props.stars <= 5) && 
                                <BookStars quantity={props.stars} size='medium' />
                            }
                        </div>
                    </div>
                    <div className="item-footer">
                        <div className='item-stars-bottom'>
                            {(props.stars <= 0 || props.stars >5) && 'ещё нет оценок'}
                            {(props.stars >0 && props.stars <= 5) && 
                                <BookStars quantity={props.stars} size='medium' />
                            }
                        </div>
                        <AppButton styles={['item-btn', buttonStyle]} label={buttonText} />
                    </div>
                </div>
            </div>
        </Link>
    );
}