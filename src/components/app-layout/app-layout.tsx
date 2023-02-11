import React from 'react';
import { Outlet } from 'react-router-dom';

import { AppFooter } from '../app-footer/app-footer';
import { AppHeader } from '../app-header/app-header';
import { AppNavAdaptive } from '../app-nav/app-nav-adaptive';

import './app-layout.scss';

export const AppLayout = () => (
    <React.Fragment>
        <AppHeader />
        <Outlet />
        <AppFooter />
        <AppNavAdaptive />
    </React.Fragment>
);