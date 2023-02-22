import { FC, useRef, useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as CrossIcon } from '../../assets/icon/cross.svg';
import { ReactComponent as ListIcon } from '../../assets/icon/list.svg';
import { ReactComponent as SearchIcon } from '../../assets/icon/search.svg';
import { ReactComponent as SortIcon} from '../../assets/icon/sort.svg';
import { ReactComponent as TileIcon } from '../../assets/icon/tile.svg';

import { AppSearchBarProps } from './app-search-bar-props';

import './app-search-bar.scss';

export const AppSearchBar: FC<AppSearchBarProps> = (props) => {
    const [wideSearch, setWideSearch] = useState(false);

    const search = useRef<HTMLInputElement>(null);

    const handleSearchClick = (width: number) => {
        props.setSearchMode(true);
        search.current?.focus();
        if (width < 600) {
            setWideSearch(true);
        }
    }

    return (
        <div className='searchbar-wrapper'>
            <div className={classNames('search', wideSearch ? 'wide' : undefined)}>
                <div className={classNames('search-field', wideSearch ? 'wide' : undefined)}>
                    <button
                        data-test-id='button-search-open'
                        className={classNames('search-button', wideSearch ? 'hidden' : undefined)}
                        type='button'
                        onClick={() => handleSearchClick(window.innerWidth)}
                    >
                        <SearchIcon fill={props.searchMode ? 'url(#active_search)' : '#A7A7A7'} />
                    </button>
                    <input
                        data-test-id='input-search'
                        className={classNames('search-text', wideSearch ? 'wide' : undefined)}
                        type='text'
                        ref={search}
                        onFocus={() => props.setSearchMode(true)}
                        onBlur={() => props.setSearchMode(false)}
                        onChange={(event) => props.handleInput(event)}
                        placeholder='Поиск книги или автора…'
                    />
                    <button
                        data-test-id='button-search-close'
                        className={classNames('cancel-search-button', wideSearch ? undefined : 'hidden')}
                        type='button'
                        onClick={() => setWideSearch(false)}
                    >
                        <CrossIcon />
                    </button>
                </div>
                <div className={classNames('sort-btn', wideSearch ? 'hidden' : undefined)}>
                    <button
                        data-test-id='sort-rating-button'
                        type='button'
                        onClick={props.toggleSort}
                    >
                        <SortIcon className={props.desc ? undefined : 'asc'} />
                        <span className='sort-text'>По рейтингу</span>
                    </button>
                </div>
            </div>
            <div className={classNames('view-toggler', wideSearch ? 'hidden' : undefined)}>
                <button
                    className={classNames(props.bookView.style === 'tile' ? 'active' : '')}
                    type='button'
                    data-test-id='button-menu-view-window'
                    onClick={() => props.changeView({style: 'tile'})}
                >
                    <TileIcon />
                </button>
                <button
                    className={classNames(props.bookView.style === 'list' ? 'active' : '')}
                    type='button'
                    data-test-id='button-menu-view-list'
                    onClick={() => props.changeView({style: 'list'})}
                >
                    <ListIcon />
                </button>
            </div>
        </div>
    )
};