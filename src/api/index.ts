import { BookModule } from './book.module';
import { CategoryModule } from './category.module';
import { instance } from './instance';

export const api = {
    books: BookModule(instance),
    categories: CategoryModule(instance)
}
