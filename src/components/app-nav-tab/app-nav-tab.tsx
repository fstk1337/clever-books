import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { disableShow, disableShowCats, toggleShowCats } from '../../app/store/slices/nav-slice';
import { ReactComponent as ArrowIcon } from '../../assets/icon/arrowdown.svg';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppNavCategories } from '../app-nav-categories/app-nav-categories';

import { AppNavTabProps } from './app-nav-tab-props';

import './app-nav-tab.scss';

export const AppNavTab: FC<AppNavTabProps> = (props) => {
    const showCats = useAppSelector(state => state.nav.showCats);
    const dispatch = useAppDispatch();

    const getDataTestId = () => {
        if (props.route === '/rules') {
            if (props.view === 'main') {
                return 'navigation-terms';
            }

            return 'burger-terms';
        }
        if (props.route === '/public-offer') {
            if (props.view === 'main') {
                return 'navigation-contract';
            }

            return 'burger-contract';
        }

        return undefined;
    }

    return (
        <li
            className='nav-tab'
            data-test-id={getDataTestId()}
        >
            {props.type === 'link' &&
                <Link
                    to={props.route}
                    className={classNames('tab-wrapper', props.active ? 'active' : '')}
                    onClick={props.view === 'adaptive' ? () => dispatch(disableShow()) : () => dispatch(disableShowCats())}
                >
                    <div className='link-wrapper'>
                        <span className='nav-link'>{ props.text }</span>
                    </div>
                </Link>
            }
            {props.type === 'dropdown' &&
                <React.Fragment>
                    <Link
                        to={`${props.route}/all`}
                        data-test-id={props.view === 'main' ? 'navigation-showcase' : 'burger-showcase'}
                        className={classNames('tab-wrapper', props.active ? 'active' : '')}
                        onClick={() => dispatch(toggleShowCats())}
                    >
                        <div className='link-wrapper'>
                            <div className='nav-link'>
                                { props.text }
                            </div>
                            <div className={classNames('dropdown-btn', showCats ? 'down' : '')}>
                                <ArrowIcon />
                            </div>
                        </div>
                    </Link>
                    <AppNavCategories show={showCats} type={props.view} />
                </React.Fragment>
            }
        </li>
    );
}