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
  const [viewStyle, setViewStyle] = useState<BooksView>( {style: 'tile'} );
  const booksLoading = useSelector(isBooksLoading());
  const categoriesLoading = useSelector(isCategoriesLoading());
  const booksError = useSelector(isBooksError());
  const categoriesError = useSelector(isCategoriesError());

  const isLoading = booksLoading || categoriesLoading;
  const isError = booksError || categoriesError;

  const handleClick = (view: BooksView) => {
    setViewStyle(view);
  }

  return (
    <div className={classNames('content-wrapper', isLoading || isError ? 'hidden' : undefined)}>
      <AppSearchBar bookView={viewStyle} handleClick={handleClick} />
      <BookList listStyle={viewStyle.style} />
    </div>
  );
}
