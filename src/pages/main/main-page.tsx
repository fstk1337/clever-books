import { useState } from 'react';

import { AppSearchBar } from '../../components/app-search-bar/app-search-bar';
import { BookList } from '../../components/book-list/book-list';

import './main-page.scss';

export interface BooksView {
  style: 'tile' | 'list';
}

export const MainPage = () => {
  const [viewStyle, setViewStyle] = useState<BooksView>( {style: 'tile'} );

  const handleClick = (view: BooksView) => {
    setViewStyle(view);
  }

  return (
    <div className='content-wrapper'>
      <AppSearchBar bookView={viewStyle} handleClick={handleClick} />
      <BookList listStyle={viewStyle.style} />
    </div>
  );
}
