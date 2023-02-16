import { configureStore } from '@reduxjs/toolkit';

import { bookReducer } from '../redux/book-slice';
import { categoryReducer } from '../redux/category-slice';
import { navReducer } from '../redux/nav-slice';

export const store = configureStore({
    reducer: {
        nav: navReducer,
        book: bookReducer,
        category: categoryReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;