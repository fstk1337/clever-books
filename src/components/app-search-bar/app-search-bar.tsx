import { ChangeEvent, FC, useRef, useState } from 'react';

import { ReactComponent as CrossIcon } from '../../assets/icon/cross.svg';
import { ReactComponent as ListIcon } from '../../assets/icon/list.svg';
import { ReactComponent as SearchIcon } from '../../assets/icon/search.svg';
import { ReactComponent as SortIcon} from '../../assets/icon/sort.svg';
import { ReactComponent as TileIcon } from '../../assets/icon/tile.svg';
import { AppToggleViewButton } from '../app-toggle-view-button/app-toggle-view-button';

import { AppSearchBarProps } from './app-search-bar-props';

import './app-search-bar.scss';

export const AppSearchBar: FC<AppSearchBarProps> = (props) => {
    const [wideSearch, setWideSearch] = useState(false);
    const [searchText, setSearchText] = useState('');

    const search = useRef<HTMLInputElement>(null);

    const handleSearchClick = (width: number) => {
        props.setSearchMode(true);
        search.current?.focus();
        if (width < 600) {
            setWideSearch(true);
        }
    }

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
        props.handleInput(event);
    }

    return (
        <div className='searchbar-wrapper'>
            <div className='search'>
                {!wideSearch &&
                    <div className='search-field'>
                        <button
                            data-test-id='button-search-open'
                            className='search-button'
                            type='button'
                            onClick={() => handleSearchClick(window.innerWidth)}
                        >
                            <SearchIcon fill={props.searchMode ? 'url(#active_search)' : '#A7A7A7'} />
                        </button>
                        <input
                            data-test-id='input-search'
                            className='search-text'
                            type='text'
                            ref={search}
                            onFocus={() => props.setSearchMode(true)}
                            onBlur={() => props.setSearchMode(false)}
                            onChange={(event) => handleInput(event)}
                            value={searchText}
                            placeholder='Поиск книги или автора…'
                        />
                    </div>
                }
                {wideSearch &&
                    <div className='search-field wide'>
                        <input
                            data-test-id='input-search'
                            className='search-text wide'
                            type='text'
                            ref={search}
                            onFocus={() => props.setSearchMode(true)}
                            onBlur={() => props.setSearchMode(false)}
                            onChange={(event) => handleInput(event)}
                            value={searchText}
                            placeholder='Поиск книги или автора…'
                        />
                        <button
                            data-test-id='button-search-close'
                            className='cancel-search-button'
                            type='button'
                            onClick={() => setWideSearch(false)}
                        >
                            <CrossIcon />
                        </button>
                    </div>
                }
                {!wideSearch && 
                    <div className='sort-btn'>
                        <button
                            data-test-id='sort-rating-button'
                            type='button'
                            onClick={props.toggleSort}
                        >
                            <SortIcon className={props.desc ? undefined : 'asc'} />
                            <span className='sort-text'>По рейтингу</span>
                        </button>
                    </div>
                }
            </div>
            {!wideSearch &&
                <div className='view-toggler'>
                    <AppToggleViewButton active={props.bookView.style === 'tile'} dataTestId='button-menu-view-window' clickHandler={() => props.changeView({style: 'tile'})}>
                        <TileIcon />
                    </AppToggleViewButton>
                    <AppToggleViewButton active={props.bookView.style === 'list'} dataTestId='button-menu-view-list' clickHandler={() => props.changeView({style: 'list'})}>
                        <ListIcon />
                    </AppToggleViewButton>
                </div>
            }
        </div>
    )
};