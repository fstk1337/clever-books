import { Outlet } from 'react-router-dom';

import './auth-layout.scss';

export const AuthLayout = () => (
    <div className='auth-layout'>
        <div className='auth-wrapper'>
            <h1 className='auth-heading'>Cleverland</h1>
            <Outlet />
        </div>
    </div>
)