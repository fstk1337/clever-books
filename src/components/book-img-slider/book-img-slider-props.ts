export interface BookImgSliderProps {
    images: [
        {
            url: string;
        }
    ];
    slidesPerView: number;
    active: string;
    handler: (url: string) => void;
}