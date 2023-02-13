import { call, put, takeLatest } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { api } from 'src/api';

import { loadStart, loadSuccess } from './book-slice';

export const loadBooksAction = createAction('book/load');

function* fetchBooks() {
    put(loadStart);
    try {
        const response: AxiosResponse = yield call(api.books.getAllBooks);
        
        yield put(loadSuccess(response.data));
    } catch(error) {
        throw new Error('Error fetching data from API');
    }
}

export function* fetchBooksSaga() {
    yield takeLatest(loadBooksAction.type, fetchBooks);
}