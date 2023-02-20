import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { api } from 'src/api';

import { BookModel } from '../../models';
import { RootState } from '../store';

interface BookState {
    books: BookModel[];
    status: 'idle' | 'loading' | 'success' | 'error';
    error: string | null;
}

const initialState: BookState = {
    books: [],
    status: 'idle',
    error: null
};

export const fetchBooks = createAsyncThunk<BookModel[], undefined, { rejectValue: string }>('books/getAll',
    async (_, { rejectWithValue }) => {
        const response = await api.books.getAllBooks();

        if (response.status !== 200) {
            return rejectWithValue('Server Error.');
        }

        return response.data;
    },
    {
      condition: (_, { getState }) => {
        const { books } = getState() as RootState;

        if (books.status === 'success' || books.status === 'loading') {
          return false;
        }

        return true;
      }
    }
);

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, () => (
                {
                    books: [],
                    status: 'loading',
                    error: null
                }
            ))
            .addCase(fetchBooks.fulfilled, (_, action) => (
                {
                    books: action.payload,
                    status: 'success',
                    error: null
                }
            ))
            .addCase(fetchBooks.rejected, (_, action) => (
                {
                    books: [],
                    status: 'error',
                    error: action.payload || null
                }
            ))
    }
});

const getBookState = (state: RootState) => state.books;

export const getAllBooks = () => (
    createSelector(getBookState, (state) => state.books)
)

export const isBooksLoading = () => (
    createSelector(getBookState, (state) => state.status === 'loading')
)

export const isBooksError = () => (
    createSelector(getBookState, (state) => state.status === 'error')
)

export const booksReducer = booksSlice.reducer;