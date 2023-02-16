export interface BookMainProps {
    author: string;
    title: string;
    mainImage?: string;
    images?: [{
        url: string;
    }];
    rating: number;
    free: boolean;
    busyUntil?: string;
}