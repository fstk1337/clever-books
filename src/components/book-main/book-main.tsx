import React, { FC, useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as HideReviewsIcon } from '../../assets/icon/arrowup.svg';
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

const convertDate = (dateString: string): string => {
    const date = new Date(dateString);
    const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const month = monthNames[date.getMonth()];
    
    return `${date.getDate()} ${month} ${date.getFullYear()}`;
}

export const BookMain: FC<BookMainProps> = ({book}) => {
    const [activeImage, setActiveImage] = useState<string>(book.images[0].url);
    const { buttonText, buttonStyle } = getButtonOptions(book.booking? book.booking.order : true, book.booking?.dateOrder);
    const revsCount = book.comments? book.comments.length : 0;
    const [showReviews, setShowReviews] = useState(true);

    return (
        <div className='book-main-wrapper'>
            <div className='book-main'>
                <div className='book-info'>
                    <div className={classNames('book-image-wrapper', book.images? '' : 'no-image')}>
                        {book.images && book.images.length > 1 &&
                            <div className='book-large-image'>
                                <img src={`https://strapi.cleverland.by${activeImage}`} alt='' />
                            </div>
                        }
                        {book.images &&
                            <React.Fragment>
                                <BookImgSlider
                                    images={book.images}
                                    slidesPerView={getSlidesPerView(book.images.length, 1200)}
                                    active={activeImage}
                                    handler={(url: string) => setActiveImage(url)}
                                />
                                <div className='swiper-pagination' />
                            </React.Fragment>
                        }
                    </div>
                    <div className='book-info-reserve'>
                        <div className='book-info-text'>
                            <div className='book-title'>{book.title}</div>
                            <div className='book-author'>{book.authors}</div>
                        </div>
                        <AppButton styles={['book-btn-big', buttonStyle]} label={buttonText} />
                        {useWindowWidth() >= 1200 &&
                            <div className="book-description">
                                <div className='book-info-heading'>О книге</div>
                                <p>{book.description}</p>
                            </div>
                        }
                    </div>
                </div>
                {useWindowWidth() < 1200 &&
                    <div className="book-description">
                        <div className='book-info-heading'>О книге</div>
                        <p>{book.description}</p>
                    </div>
                }
                <div className={classNames('book-rating', book.rating === 0 ? 'empty-rates' : '')}>            
                    <div className='book-info-heading'>
                        Рейтинг
                    </div>
                    <div className='rating-container'>
                        <BookStars quantity={Math.trunc(book.rating)} size='medium' />
                        {book.rating > 0 &&
                            <span className='rates'>{book.rating}</span>
                        }
                    </div>
                    {book.rating === 0 && <div className='no-rates'>ещё нет оценок</div>}
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
                                    {book.publish}
                                </li>
                                <li className='detail-data'>
                                    {book.issueYear}
                                </li>
                                <li className='detail-data'>
                                    {book.pages}
                                </li>
                                <li className='detail-data'>
                                    {book.cover}
                                </li>
                                <li className='detail-data'>
                                    {book.format}
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
                                    {book.categories[0]}
                                </li>
                                <li className='detail-data'>
                                    {book.weight}
                                </li>
                                <li className='detail-data'>
                                    {book.ISBN}
                                </li>
                                <li className='detail-data'>
                                    {book.producer}
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
                            {book.comments.map(review => 
                                <BookReview
                                    key={review.id}
                                    avatar={review.user.avatarUrl}
                                    name={`${review.user.firstName} ${review.user.lastName}`}
                                    date={convertDate(review.createdAt)}
                                    stars={review.rating}
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