import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { api } from 'src/api';
import { CategoryModel } from 'src/models/category.model';

import { RootState } from '../store';

export interface CategoryState {
    categories: CategoryModel[];
    status: 'idle' | 'loading' | 'success' | 'error';
    error: string | null;
}

const initialState: CategoryState = {
    categories: [],
    status: 'idle',
    error: null
};

export const fetchCategories = createAsyncThunk<CategoryModel[], undefined, { rejectValue: string }>('categories/getAll',
    async (_, { rejectWithValue }) => {
        const response = await api.categories.getAllCategories();

        if (response.status !== 200) {
            return rejectWithValue('Server Error.');
        }

        return response.data;
    },
    {
      condition: (_, { getState }) => {
        const { category } = getState() as RootState;

        if (category.status === 'success' || category.status === 'loading') {
          return false;
        }

        return true;
      }
    }
);

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, () => (
                {
                    categories: [],
                    status: 'loading',
                    error: null
                }
            ))
            .addCase(fetchCategories.fulfilled, (_, action) => (
                {
                    categories: action.payload,
                    status: 'success',
                    error: null
                }
            ))
            .addCase(fetchCategories.rejected, (_, action) => (
                {
                    categories: [],
                    status: 'error',
                    error: action.payload || null
                }
            ))
    }
});

const getCategoryState = (state: RootState) => state.category;

export const getAllCategories = () => (
    createSelector(getCategoryState, (state) => state.categories)
)

export const getCategoryByPath = (path: string) => (
    createSelector(getCategoryState, (state) => state.categories.find(category => category.path === path))
)

export const isCategoriesLoading = () => (
    createSelector(getCategoryState, (state) => state.status === 'loading')
)

export const categoryReducer = categorySlice.reducer;