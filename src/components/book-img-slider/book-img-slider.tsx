import { FC } from 'react';
import classNames from 'classnames';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BookImgSliderProps } from './book-img-slider-props';

import './book-img-slider.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

export const BookImgSlider: FC<BookImgSliderProps> = ({images, slidesPerView, active, handler}) => (
    <Swiper
        className={images.length > 1 ? '' : 'swiper-single'}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        navigation={true}
        pagination={{
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => (
                `<span class='${className}' aria-label='Go to slide ${index + 1}'></span>`
            )
         }}
        scrollbar={{ draggable: true }}
    >
        {images.map((image, index) => (
            <SwiperSlide data-test-id={index === 0 ? 'slide-big' : 'slide-mini'} className={classNames('swiper-slide-visible', active === image.url ? 'active' : undefined)} key={image.url} onClick={() => handler(image.url)}>
                <img src={`https://strapi.cleverland.by${image.url}`} alt='' />
            </SwiperSlide>
        ))}
    </Swiper>
);