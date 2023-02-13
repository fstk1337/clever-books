import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { disableShow } from '../../app/redux/nav-slice';
import { navTabs } from '../../constants/nav-tabs';
import { useAppDispatch, useAppSelector, useClickOutside } from '../../hooks';
import { AppNavTab } from '../app-nav-tab/app-nav-tab';

import './app-nav-adaptive.scss';

export const AppNavAdaptive = () => {
    const location = useLocation();
    const show = useAppSelector(state => state.nav.show);
    const dispatch = useAppDispatch();
    const navRef = useClickOutside(() => {
        if (show) {
            dispatch(disableShow());
        }
    });

    useEffect(() => {
        const body: HTMLElement | null = document.querySelector('body');

        body?.classList.toggle('fixed');
    }, [show]);
    
    return (
        <div ref={navRef} className={classNames('nav-adaptive-wrapper', show ? 'show' : '')}>
            <ul className='main-tabs'>
                {navTabs.map(navItem => 
                    <AppNavTab
                        key={navItem.id}
                        text={navItem.text}
                        icon={navItem.icon}
                        type={navItem.type}
                        view='adaptive'
                        route={navItem.route}
                        active={location.pathname.startsWith(navItem.route)}
                    />    
                )}
            </ul>
            <ul className='extended-tabs'>
                <li className='nav-tab'>
                    <button
                        className='tab-wrapper'
                        type='button'
                        onClick={() => dispatch(disableShow())}
                    >
                        <div className='link-wrapper'> 
                            <div className='nav-link'>
                                Профиль
                            </div>
                        </div>
                    </button>
                </li>
                <li className='nav-tab'>
                    <button
                        className='tab-wrapper'
                        type='button'
                        onClick={() => dispatch(disableShow())}
                    >
                        <div className='link-wrapper'> 
                            <div className='nav-link'>
                                Выход
                            </div>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    );
}