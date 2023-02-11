export interface BookItemProps {
    id: number;
    image?: string;
    stars: number;
    route: string;
    title: string;
    author: string;
    free: boolean;
    busyUntil?: string;
}