import { FC } from 'react';
import classNames from 'classnames';

import { AppButtonProps } from './app-button-props';

import './app-button.scss';

export const AppButton: FC<AppButtonProps> = ({styles, label}) => (
    <button data-test-id='button-rating' className={classNames('btn', styles)} type='button'>
        {label}
    </button>
)