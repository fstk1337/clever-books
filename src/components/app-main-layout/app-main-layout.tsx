import { Outlet } from 'react-router-dom';

import { AppNavMain } from '../app-nav/app-nav-main';

import './app-main-layout.scss';

export const AppMainLayout = () => (
    <div className="main-wrapper">
        <div className='app-main'>
            <AppNavMain />
            <Outlet />
        </div>
    </div>
);