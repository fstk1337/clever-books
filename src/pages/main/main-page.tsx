import { useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { isBooksError,isBooksLoading } from 'src/app/redux/book-slice';
import { isCategoriesError,isCategoriesLoading } from 'src/app/redux/category-slice';

import { AppSearchBar } from '../../components/app-search-bar/app-search-bar';
import { BookList } from '../../components/book-list/book-list';

import './main-page.scss';

export interface BooksView {
  style: 'tile' | 'list';
}

export const MainPage = () => {
  const [searchText, setSearchText] = useState('');
  const [searchMode, setSearchMode] = useState(false);
  const [sortDesc, setSortDesc] = useState(true);
  const [viewStyle, setViewStyle] = useState<BooksView>( {style: 'tile'} );
  const booksLoading = useSelector(isBooksLoading());
  const categoriesLoading = useSelector(isCategoriesLoading());
  const booksError = useSelector(isBooksError());
  const categoriesError = useSelector(isCategoriesError());

  const isLoading = booksLoading || categoriesLoading;
  const isError = booksError || categoriesError;

  const changeView = (view: BooksView) => {
    setViewStyle(view);
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  }

  return (
    <div className={classNames('content-wrapper', isLoading || isError ? 'hidden' : undefined)}>
      <AppSearchBar
        bookView={viewStyle}
        desc={sortDesc}
        handleInput={(event: React.ChangeEvent<HTMLInputElement>) => handleSearch(event)}
        searchMode={searchMode}
        setSearchMode={setSearchMode}
        changeView={changeView}
        toggleSort={() => setSortDesc(!sortDesc)}
      />
      <BookList listStyle={viewStyle.style} sortDesc={sortDesc} searchText={searchText} />
    </div>
  );
}
