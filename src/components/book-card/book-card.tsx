import { FC } from 'react';
import { Link } from 'react-router-dom';

import { AppButton } from '../app-button/app-button';
import { BookStars } from '../book-stars/book-stars';

import { BookCardProps } from './book-card-props';

import './book-card.scss';

const convertDate = (dateString: string): string => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    
    return `${date.getDate()}.${month}`;
}

export const BookCard: FC<BookCardProps> = (props) => {
    let buttonText = 'Забронировать';
    let buttonStyle = 'active';

    if (!props.free) {
        buttonText = props.busyUntil ? `занята до ${convertDate(props.busyUntil)}` : 'Забронирована';
        buttonStyle = props.busyUntil ? 'busy' : 'booked';
    }
 
    return (
        <Link to={`${props.route}/${props.id}`} className='book-card' data-test-id='card'>
            <div className="card-wrapper">
                <div className='card-info-wrapper'>
                    <img className='card-image' src={props.image} alt={props.image? 'book' : ''}/>
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