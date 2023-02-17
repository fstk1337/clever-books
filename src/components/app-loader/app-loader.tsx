import { ReactComponent as LoadingIcon } from '../../assets/icon/loading.svg';

import './app-loader.scss';

export const AppLoader = () => (
    <div className='loader-wrapper'>
        <div className='spinner-wrapper'>
            <LoadingIcon />
        </div>
    </div>
)