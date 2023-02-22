import { BooksView } from '../../pages/main/main-page';

export interface AppSearchBarProps {
    desc: boolean;
    bookView: BooksView;
    changeView: (view: BooksView) => void;
    toggleSort: () => void;
}