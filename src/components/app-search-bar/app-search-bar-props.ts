import { BooksView } from '../../pages/main/main-page';

export interface AppSearchBarProps {
    bookView: BooksView;
    handleClick: (view: BooksView) => void;
}