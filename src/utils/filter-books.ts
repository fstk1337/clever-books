import { BookModel } from 'src/models';

export const filterBooksByCategory = (books: BookModel[], category: string | undefined) => {
    if (!category) {
        return [];
    }
    
    return books.filter(book => 
        book.categories.find(cat => cat === category)
    );
}