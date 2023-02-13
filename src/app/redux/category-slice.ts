import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryError, CategoryModel, CategoryResponse } from 'src/models/category-model';

interface CategoryState {
    data: {
        categories: CategoryModel[];
    };
    status: 'init' | 'loading' | 'success' | 'error';
    error?: CategoryError;
}

const initialState: CategoryState = {
    data: {
        categories: []
    },
    status: 'init'
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        loadStart: (state: CategoryState): CategoryState => (
            {
                data: {...state.data},
                status: 'loading'
            }
        ),
        loadSuccess: (state: CategoryState, action: PayloadAction<CategoryModel[]>): CategoryState => (
            {
                data: {
                    categories: action.payload
                },
                status: 'success'
            }
        ),
        loadError: (state: CategoryState, action: PayloadAction<CategoryResponse>): CategoryState => (
            {
                data: {
                    categories: []
                },
                status: 'error',
                error: action.payload.error
            }
        )
    }
});

export const { loadStart, loadSuccess, loadError } = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;