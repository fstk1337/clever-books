import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import { bookReducer } from '../redux/book-slice';
import { categoryReducer } from '../redux/category-slice';
import { navReducer } from '../redux/nav-slice';

import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        nav: navReducer,
        book: bookReducer,
        category: categoryReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;