import { useState } from 'react';
import classNames from 'classnames';

import ErrorIcon from '../../assets/icon/error.svg';
import { ReactComponent as ErrorCloseIcon } from '../../assets/icon/error_close.svg';

import './app-fetch-error.scss';

export const AppFetchError = () => {
    const [showError, setShowError] = useState(true);

    return (
        <div
            data-test-id='error'
            className={classNames('error-wrapper', showError ? undefined : 'hidden')}
        >
            <div className="fetch-error">
                <div className="error-message">
                    <img src={ErrorIcon} alt='!' />
                    <div className="error-text">
                        Что-то пошло не так. Обновите страницу через некоторое время.
                    </div>
                </div>
                <button
                    type='button'
                    className='msg-close-btn'
                    onClick={() => setShowError(false)}
                >
                    <ErrorCloseIcon />
                </button>
            </div>
        </div>
    )
};