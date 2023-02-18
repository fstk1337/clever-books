import { configureStore } from '@reduxjs/toolkit';

import { booksReducer } from '../redux/book-slice';
import { categoryReducer } from '../redux/category-slice';
import { navReducer } from '../redux/nav-slice';
import { oneBookReducer } from '../redux/one-book-slice';

export const store = configureStore({
    reducer: {
        nav: navReducer,
        books: booksReducer,
        book: oneBookReducer,
        category: categoryReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;