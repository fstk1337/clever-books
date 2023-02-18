import { ReactComponent as LoadingIcon } from '../../assets/icon/loading.svg';

import './app-fetch-loader.scss';

export const AppFetchLoader = () =>  (
    <div className='loader-wrapper' data-test-id='loader'>
        <div className='spinner-wrapper'>
            <LoadingIcon />
        </div>
    </div>
);