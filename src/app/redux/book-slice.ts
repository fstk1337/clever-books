import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from 'src/api';
import { EmptyBook } from 'src/models/one-book.model';

import { BookModel, OneBookModel } from '../../models';
import { RootState } from '../store';

interface BookState {
    books: BookModel[];
    currentBook: OneBookModel;
    status: 'idle' | 'loading' | 'success' | 'error';
    error: string | null;
}

const initialState: BookState = {
    books: [],
    currentBook: EmptyBook,
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
        const { book } = getState() as RootState;

        if (book.status === 'success' || book.status === 'loading') {
          return false;
        }

        return true;
      }
    }
);

export const fetchOneBook = createAsyncThunk<OneBookModel, string, { rejectValue: string }>('books/getOne',
    async (id, { rejectWithValue }) => {
        const response = await api.books.getBookById(id);

        if (response.status !== 200) {
            return rejectWithValue('Server Error.');
        }

        return response.data;
    }
);

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        loadStart: (): BookState => (
            {
                books: [],
                currentBook: EmptyBook,
                status: 'loading',
                error: null
            }
        ),
        loadSuccess: (state, action: PayloadAction<BookModel[]>): BookState => (
            {
                books: action.payload,
                currentBook: {...state.currentBook},
                status: 'success',
                error: null
            }
        ),
        loadOneSuccess: (state, action: PayloadAction<OneBookModel>): BookState => (
            {
                books: [...state.books],
                currentBook: action.payload,
                status: 'success',
                error: null
            }
        ),
        loadError: (state: BookState, action: PayloadAction<string>): BookState => (
            {
                books: [],
                currentBook: {...state.currentBook},
                status: 'error',
                error: action.payload
            }
        ),
        loadOneError: (state: BookState, action: PayloadAction<string>): BookState => (
            {
                books: {...state.books},
                currentBook: EmptyBook,
                status: 'error',
                error: action.payload
            }
        )
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, () => (
                {
                    books: [],
                    currentBook: EmptyBook,
                    status: 'loading',
                    error: null
                }
            ))
            .addCase(fetchBooks.fulfilled, (state, action) => (
                {
                    books: action.payload,
                    currentBook: {...state.currentBook},
                    status: 'success',
                    error: null
                }
            ))
            .addCase(fetchBooks.rejected, (_, action) => (
                {
                    books: [],
                    currentBook: EmptyBook,
                    status: 'error',
                    error: action.payload || null
                }
            ))
            .addCase(fetchOneBook.pending, (state) => (
                {
                    books: [...state.books],
                    currentBook: EmptyBook,
                    status: 'loading',
                    error: null
                }
            ))
            .addCase(fetchOneBook.fulfilled, (state, action) => (
                {
                    books: [...state.books],
                    currentBook: action.payload,
                    status: 'success',
                    error: null
                }
            ))
            .addCase(fetchOneBook.rejected, (state, action) => (
                {
                    books: [...state.books],
                    currentBook: EmptyBook,
                    status: 'error',
                    error: action.payload || null
                }
            ))
    }
});

export const { loadStart, loadSuccess, loadOneSuccess, loadError, loadOneError } = bookSlice.actions;

export const bookReducer = bookSlice.reducer;
