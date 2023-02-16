import { CategoryModel } from 'src/models/category.model';

export interface BookHeaderProps {
    category: CategoryModel;
    title: string;
}