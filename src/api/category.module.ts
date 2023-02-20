import { AxiosInstance, AxiosResponse } from 'axios';
import { CategoryModel } from 'src/models/category.model';

const url = '/categories';

export const CategoryModule = (instance: AxiosInstance) => {
    const getAllCategories = (): Promise<AxiosResponse<CategoryModel[]>> => instance.get(url);

    return {
        getAllCategories
    };
}