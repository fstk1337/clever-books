import { all } from 'redux-saga/effects';

import { fetchBooksSaga } from '../redux/book-saga';
import { fetchCategoriesSaga } from '../redux/category-saga';

export function* rootSaga() {
    yield all([fetchBooksSaga(), fetchCategoriesSaga()]);
}