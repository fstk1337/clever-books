import { FC, useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as CrossIcon } from '../../assets/icon/cross.svg';
import { ReactComponent as ListIcon } from '../../assets/icon/list.svg';
import { ReactComponent as SearchIcon } from '../../assets/icon/search.svg';
import { ReactComponent as SortIcon} from '../../assets/icon/sort.svg';
import { ReactComponent as TileIcon } from '../../assets/icon/tile.svg';
import { useWindowWidth } from '../../hooks';

import { AppSearchBarProps } from './app-search-bar-props';

import './app-search-bar.scss';

export const AppSearchBar: FC<AppSearchBarProps> = (props) => { 
    const [searchMode, setSearchMode] = useState(false);

    return (
        <div className='searchbar-wrapper'>
            <div className={classNames('search', searchMode ? 'wide' : undefined)}>
                <div className={classNames('search-field', searchMode ? 'wide' : undefined)}>
                    <button
                        data-test-id='button-search-open'
                        className={classNames('search-button', searchMode ? 'hidden' : undefined)}
                        type='button'
                        onClick={() => setSearchMode(true)}
                        disabled={useWindowWidth() > 599}
                    >
                        <SearchIcon />
                    </button>
                    <input
                        data-test-id='input-search'
                        className={classNames('search-text', searchMode ? 'wide' : undefined)}
                        type='text'
                        placeholder='Поиск книги или автора…'
                    />
                    <button
                        data-test-id='button-search-close'
                        className={classNames('cancel-search-button', searchMode ? undefined : 'hidden')}
                        type='button'
                        onClick={() => setSearchMode(false)}
                    >
                        <CrossIcon />
                    </button>
                </div>
                <div className={classNames('sort-btn', searchMode ? 'hidden' : undefined)}>
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
            <div className={classNames('view-toggler', searchMode ? 'hidden' : undefined)}>
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