import { AxiosInstance } from 'axios';

const url = '/books';

export const BookModule = (instance: AxiosInstance) => {
    const getAllBooks = () => instance.get(url);
    
    return {
        getAllBooks
    };
}