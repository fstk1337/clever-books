import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { disableShowExpanded, enableShowCollapsed } from '../../app/redux/nav-slice';
import { ReactComponent as Burger } from '../../assets/icon/burger.svg';
import logo from '../../assets/img/logo.png';
import { useAppDispatch, useAppSelector } from '../../hooks';

import './app-header.scss';

export const AppHeader = () => {
    const show = useAppSelector(state => state.nav.show);
    const dispatch = useAppDispatch();

    const toggleShow = () => {
        dispatch(show ? disableShowExpanded() : enableShowCollapsed());
    }


    return (
        <div className="header-wrapper">
            <header className='app-header'>
                <div className='logo-title'>
                    <Link to="/" className='logo-link'>
                        <img src={logo} alt='Cleverland' />
                    </Link>
                    <button
                        data-test-id='button-burger'
                        type='button'
                        className={classNames('burger-btn', show ? 'cross' : 'bar')}
                        onClick={toggleShow}
                    >
                        <Burger />
                    </button>
                    <h1>Библиотека</h1>
                </div>
                <div className='person'>
                    <div className='name'>Привет, Иван!</div>
                    <div className='avatar' />
                </div>
            </header>
        </div>
    )
};