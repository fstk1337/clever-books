export interface CategoryModel {
    name: string;
    path: string;
    id: number;
}

export interface CategoryError {
   status: number;
   name: string;
   message: string;
   details: Record<string, unknown>
}

export interface CategoryResponse {
    data: CategoryModel | null;
    error?: CategoryError;
}
