import { AxiosInstance, AxiosResponse } from 'axios';
import { BookModel, OneBookModel } from 'src/models';

const url = '/books';

export const BookModule = (instance: AxiosInstance) => {
    const getAllBooks = (): Promise<AxiosResponse<BookModel[]>> => instance.get(url);
    const getBookById = (id: string): Promise<AxiosResponse<OneBookModel>> => instance.get(`${url}/${id}`);
    
    return {
        getAllBooks,
        getBookById
    };
}