export const getSlidesPerView = (imagesCount: number, screen: number) => {
    const width = window.innerWidth;
    const slidesCount = 5;

    if (width < screen || imagesCount <= 1) {
        return 1;
    }

    return slidesCount;
}