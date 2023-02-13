import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BookError, BookModel, BookModelResponse } from '../../models';

interface BookState {
    data: {
        books: BookModel[];
    };
    status: 'init' | 'loading' | 'success' | 'error';
    error?: BookError;
}

const initialState: BookState = {
    data: {
        books: []
    },
    status: 'init'
};

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        loadStart: (state: BookState): BookState => (
            {
                data: {...state.data},
                status: 'loading'
            }
        ),
        loadSuccess: (state: BookState, action: PayloadAction<BookModel[]>): BookState => (
            {
                data: {
                    books: action.payload
                },
                status: 'success'
            }
        ),
        loadError: (state: BookState, action: PayloadAction<BookModelResponse>): BookState => (
            {
                data: {
                    books: []
                },
                status: 'error',
                error: action.payload.error
            }
        )
    }
});

export const { loadStart, loadSuccess, loadError } = bookSlice.actions;

export const bookReducer = bookSlice.reducer;
