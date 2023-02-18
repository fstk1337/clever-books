export interface BookItemProps {
    id: number;
    image?: string;
    stars: number;
    title: string;
    author: string;
    free: boolean;
    busyUntil?: string;
}