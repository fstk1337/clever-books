import { AxiosInstance } from 'axios';

const url = '/categories';

export const CategoryModule = (instance: AxiosInstance) => {
    const getAllCategories = () => instance.get(url);
    
    return {
        getAllCategories
    };
}