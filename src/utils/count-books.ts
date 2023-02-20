import { BookModel } from 'src/models';

export const countBooksInCategory = (categoryName: string, bookList: BookModel[]) => (
    bookList.filter(book => book.categories.find(category => category === categoryName)).length
)