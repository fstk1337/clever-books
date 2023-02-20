import { useLocation } from 'react-router-dom';

import { navTabs } from '../../constants/nav-tabs';
import { AppNavTab } from '../app-nav-tab/app-nav-tab';

import './app-nav-main.scss';

export const AppNavMain = () => {
    const location = useLocation();
    
    return (
        <div className='nav-main-wrapper'>
            <ul className='main-tabs'>
                {navTabs.map(navItem => 
                    <AppNavTab
                        key={navItem.id}
                        text={navItem.text}
                        icon={navItem.icon}
                        type={navItem.type}
                        view='main'
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