export interface CategoryModel {
    name: string;
    path: string;
    id: number;
}

export const AllBooksCategory: CategoryModel = {
    name: 'Все книги',
    path: 'all',
    id: 0
}

export const EmptyCategory: CategoryModel = {
    name: '',
    path: '',
    id: 0
}

export interface CategoryError {
   status: number;
   name: string;
   message: string;
   details: Record<string, unknown>
}

export const EmptyError: ErrorResponse = {
    data: null,
    error: {
        status: 0,
        name: '',
        message: '',
        details: {}
    }
}

export interface ErrorResponse {
    data: null;
    error: CategoryError;
}
