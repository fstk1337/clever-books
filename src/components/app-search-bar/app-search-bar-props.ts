import React from 'react';

import { BooksView } from '../../pages/main/main-page';

export interface AppSearchBarProps {
    desc: boolean;
    searchMode: boolean;
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setSearchMode: (searchMode: boolean) => void;
    bookView: BooksView;
    changeView: (view: BooksView) => void;
    toggleSort: () => void;
}