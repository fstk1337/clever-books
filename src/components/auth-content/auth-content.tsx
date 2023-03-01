import './auth-content.scss';

import { ReactComponent as ArrowRight } from '../../assets/icon/arrow_right.svg';

export const AuthContent = () => (
    <div className='auth-content'>
        <form className='auth-form'>
            <h3 className='form-heading'>Вход в личный кабинет</h3>
            <div className="form-main">
                <fieldset>
                    {/* <label htmlFor='login'>Логин</label> */}
                    <input id='login' type="text" placeholder='Логин' />
                </fieldset>
                <fieldset>
                    {/* <label htmlFor='password'>Пароль</label> */}
                    <input id='password' type="text" placeholder='Пароль' />
                </fieldset>
                <a>Забыли логин или пароль?</a>
            </div>
            <div className="form-footer">
                <button type="button" className='button submit-btn'>Вход</button>
                <div className="form-helper">
                    <span>Нет учетной записи?</span>
                    <a href='#'>
                        <span>Регистрация</span>
                        <ArrowRight width={24} height={24} />
                    </a>
                </div>
            </div>
        </form>
    </div>
)