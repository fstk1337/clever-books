import { call, put, takeLatest } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { api } from 'src/api';

import { loadStart, loadSuccess } from './category-slice';

export const loadCategoriesAction = createAction('category/load');

function* fetchCategories() {
    put(loadStart);
    try {
        const response: AxiosResponse = yield call(api.categories.getAllCategories);
        
        yield put(loadSuccess(response.data));
    } catch(error) {
        throw new Error('Error fetching data from API');
    }
}

export function* fetchCategoriesSaga() {
    yield takeLatest(loadCategoriesAction.type, fetchCategories);
}