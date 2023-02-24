import { BookModel } from 'src/models';

export const sortBooksByOrder = (books: BookModel[], desc: boolean) => {
    if (desc) {
        return [...books].sort((book1, book2) => book2.rating - book1.rating);
    }
    
    return [...books].sort((book1, book2) => book1.rating - book2.rating);
}