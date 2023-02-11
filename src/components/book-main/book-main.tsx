import React, { FC, useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as HideReviewsIcon } from '../../assets/icon/arrowup.svg';
import Avatar from '../../assets/img/reviewer-avatar.png';
import { reviews } from '../../constants/reviews';
import { useWindowWidth } from '../../hooks';
import { AppButton } from '../app-button/app-button';
import { BookImgSlider } from '../book-img-slider/book-img-slider';
import { BookReview } from '../book-review/book-review';
import { BookStars } from '../book-stars/book-stars';

import { BookMainProps } from './book-main-props';

import './book-main.scss';

const getButtonOptions = (free: boolean, busyUntil: string | undefined) => {
    let buttonText = 'Забронировать';
    let buttonStyle = 'active';

    if (!free) {
        buttonText = busyUntil ? `занята до ${busyUntil}` : 'Забронирована';
        buttonStyle = busyUntil ? 'busy' : 'booked';
    }

    return { buttonText, buttonStyle };
}

const getSlidesPerView = (imagesCount: number, screen: number) => {
    const width = window.innerWidth;
    const slidesCount = 5;

    if (width < screen || imagesCount <= 1) {
        return 1;
    }

    return slidesCount;
}

export const BookMain: FC<BookMainProps> = (props) => {
    const [activeImage, setActiveImage] = useState<number>(props.images? props.images[0].id : 0);
    const { buttonText, buttonStyle } = getButtonOptions(props.free, props.busyUntil);
    const revsCount = props.rating === 0 ? 0 : reviews.length;
    const [showReviews, setShowReviews] = useState(true);

    return (
        <div className='book-main-wrapper'>
            <div className='book-main'>
                <div className='book-info'>
                    <div className={classNames('book-image-wrapper', props.images? '' : 'no-image')}>
                        {props.images && props.images.length > 1 &&
                            <div className='book-large-image'>
                                <img src={props.images? props.images.find(image => image.id === activeImage)?.image : ''} alt={props.images && props.images.length > 0 ? 'book' : ''} />
                            </div>
                        }
                        {props.images &&
                            <React.Fragment>
                                <BookImgSlider
                                    images={props.images}
                                    slidesPerView={getSlidesPerView(props.images.length, 1200)}
                                    active={activeImage}
                                    handler={(id: number) => setActiveImage(id)}
                                />
                                <div className='swiper-pagination' />
                            </React.Fragment>
                        }
                    </div>
                    <div className='book-info-reserve'>
                        <div className='book-info-text'>
                            <div className='book-title'>{props.title}</div>
                            <div className='book-author'>{props.author}</div>
                        </div>
                        <AppButton styles={['book-btn-big', buttonStyle]} label={buttonText} />
                        {useWindowWidth() >= 1200 &&
                            <div className="book-description">
                                <div className='book-info-heading'>О книге</div>
                                <p>Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?<br/><br/>
                                Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.
                                </p>
                            </div>
                        }
                    </div>
                </div>
                {useWindowWidth() < 1200 &&
                    <div className="book-description">
                        <div className='book-info-heading'>О книге</div>
                        <p>Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?<br/><br/>
                        Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.
                        </p>
                    </div>
                }
                <div className={classNames('book-rating', props.rating === 0 ? 'empty-rates' : '')}>            
                    <div className='book-info-heading'>
                        Рейтинг
                    </div>
                    <div className='rating-container'>
                        <BookStars quantity={Math.trunc(props.rating)} size='medium' />
                        {props.rating > 0 &&
                            <span className='rates'>{props.rating}</span>
                        }
                    </div>
                    {props.rating === 0 && <div className='no-rates'>ещё нет оценок</div>}
                </div>
                <div className='book-details'>
                    <div className='book-info-heading'>Подробная информация</div>
                    <div className='details-container'>
                        <div className='details-group'>
                            <ul>
                                <li className='detail-name'>
                                    Издательство
                                </li>
                                <li className='detail-name'>
                                    Год издания
                                </li>
                                <li className='detail-name'>
                                    Страниц
                                </li>
                                <li className='detail-name'>
                                    Переплёт
                                </li>
                                <li className='detail-name'>
                                    Формат
                                </li>
                            </ul>
                            <ul>
                                <li className='detail-data'>
                                    Питер
                                </li>
                                <li className='detail-data'>
                                    2019
                                </li>
                                <li className='detail-data'>
                                    288
                                </li>
                                <li className='detail-data'>
                                    Мягкая обложка
                                </li>
                                <li className='detail-data'>
                                    70x100
                                </li>
                            </ul>
                        </div>
                        <div className='details-group'>
                            <ul>
                                <li className='detail-name'>
                                    Жанр
                                </li>
                                <li className='detail-name'>
                                    Вес
                                </li>
                                <li className='detail-name'>
                                    ISBN
                                </li>
                                <li className='detail-name'>
                                    Изготовитель
                                </li>
                            </ul>
                            <ul>
                                <li className='detail-data'>
                                    Компьютерная литература
                                </li>
                                <li className='detail-data'>
                                    370 г
                                </li>
                                <li className='detail-data'>
                                    978-5-4461-0923-4
                                </li>
                                <li className='detail-data'>
                                    ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={classNames('book-reviews', revsCount === 0 ? 'no-revs' : '')}>
                    <div className={classNames('book-info-heading', showReviews ? undefined : 'mb')}>
                        Отзывы<span>{revsCount}</span>
                        <button
                            data-test-id='button-hide-reviews'
                            type='button'
                            className={classNames('reviews-button', showReviews ? undefined : 'down')}
                            onClick={() => setShowReviews(!showReviews)}
                        >
                            <HideReviewsIcon />
                        </button>
                    </div>
                    {revsCount !== 0 &&
                        <div className={classNames('reviews-container', showReviews ? undefined : 'hidden')}>
                            {reviews.map(review => 
                                <BookReview
                                    key={review.id}
                                    avatar={review.avatar === 'Avatar' ? Avatar : Avatar}
                                    name={review.name}
                                    date={review.date}
                                    stars={review.stars}
                                    text={review.text}
                                />
                            )}
                        </div>
                    }
                    <div className='rate-book-wrapper'>
                        <AppButton styles={['book-btn-big', 'wide', 'active']} label='Оценить книгу' />
                    </div>
                </div>
            </div>
        </div>
    )
}