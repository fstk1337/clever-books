import { FC } from 'react';

import { AppToggleViewButtonProps } from './app-toggle-view-button-props';

import './app-toggle-view-button.scss';

export const AppToggleViewButton: FC<AppToggleViewButtonProps> = ({active, dataTestId, clickHandler, children}) => (
    <button
        type='button'
        className={active ? 'active' : undefined}
        data-test-id={dataTestId}
        onClick={(e) => clickHandler(e)}
    >
        {children}
    </button>
)