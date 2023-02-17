import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { api } from 'src/api';

import { OneBookModel } from '../../models';
import { RootState } from '../store';

interface OneBookState {
    bookDetails: OneBookModel[];
    status: 'idle' | 'loading' | 'success' | 'error';
    error: string | null;
}

const initialState: OneBookState = {
    bookDetails: [],
    status: 'idle',
    error: null
};

export const fetchOneBook = createAsyncThunk<OneBookModel, string, { rejectValue: string }>('book/getById',
    async (id, { rejectWithValue }) => {
        const response = await api.books.getBookById(id);

        if (response.status !== 200) {
            return rejectWithValue('Server Error.');
        }

        return response.data;
    },
    {
      condition: (id, { getState }) => {
        const { book } = getState() as RootState;

        if (book.status === 'loading' || book.bookDetails.findIndex(detail => detail.id === Number(id)) !== -1) {
            return false;
        }

        return true;
      }
    }
);

export const oneBookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOneBook.pending, (state) => (
                {
                    bookDetails: [...state.bookDetails],
                    status: 'loading',
                    error: null
                }
            ))
            .addCase(fetchOneBook.fulfilled, (state, action) => {
                const newDetails = [...state.bookDetails];

                if (newDetails.findIndex(detail => detail.id === action.payload.id) === -1) {
                    newDetails.push(action.payload);
                }

                return {
                    bookDetails: newDetails,
                    status: 'success',
                    error: null
                }
            })
            .addCase(fetchOneBook.rejected, (state, action) => (
                {
                    bookDetails: [...state.bookDetails],
                    status: 'error',
                    error: action.payload || null
                }
            ))
    }
});

const getBookState = (state: RootState) => state.book;

export const getBookDetails = (id: string) => (
    createSelector(getBookState, (state) => state.bookDetails.find(detail => detail.id === Number(id)))
)

export const isOneBookLoading = () => (
    createSelector(getBookState, (state) => state.status === 'loading')
)

export const oneBookReducer = oneBookSlice.reducer;