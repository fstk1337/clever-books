import facebook from '../../assets/icon/facebook.svg';
import instagram from '../../assets/icon/instagram.svg';
import linkedin from '../../assets/icon/linkedin.svg';
import vk from '../../assets/icon/vk.svg';

import './app-footer.scss';

export const AppFooter = () => (
    <div className='footer-wrapper'>
        <footer className="app-footer">
            <div className='copyright'>
                <span>© 2020-2023 Cleverland.</span>
                <span>&nbsp;Все права защищены.</span>
            </div>
            <ul className='socials'>
                <li>
                    <a href='https://facebook.com' target='_blank' rel='noreferrer'><img src={facebook} alt='fb' /></a>
                </li>
                <li>
                    <a href='https://instagram.com' target='_blank' rel='noreferrer'><img src={instagram} alt='ig' /></a>
                </li>
                <li>
                    <a href='https://vk.com' target='_blank' rel='noreferrer'><img src={vk} alt='vk' /></a>
                </li>
                <li>
                    <a href='https://linkedin.com' target='_blank' rel='noreferrer'><img src={linkedin} alt='in' /></a>
                </li>
            </ul>
        </footer>
    </div>
)