import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <img
                        className={cx('logoCar')}
                        src={require('~/Assets/Images/vehica-logo-white-retina.png')}
                        alt="No Images"
                    />
                </div>
                <div className={cx('MenuFooter')}>
                    <div className={cx('Menu')}>
                        <ul className={cx('menu')}>
                           <li className={cx('menuItem')}><a className={cx('Item')}src="#">Listings</a></li>
                            <li className={cx('menuItem')}><a className={cx('Item')}src="#">FAQ</a></li>
                            <li className={cx('menuItem')}><a className={cx('Item')}src="#">About us</a></li>
                        </ul>
                    </div>
                    <div className={cx('Menu')}>
                        <ul className={cx('menu')}>
                            <li className={cx('menuItem')}><a className={cx('Item')} src="#">Blog</a></li>
                            <li className={cx('menuItem')}><a className={cx('Item')}src="#">Our team</a></li>
                            <li className={cx('menuItem')}><a className={cx('Item')}src="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className={cx("FooterTitle")}>
                Award-winning, family owned dealership of new and pre-owned vehicles with several locations across the city. Lowest prices and the best customer service guaranteed.
                </div>
                <div className={cx("Footerlink")}>
                    <div className={cx("NumberFone")}>
                        <a src="#"><span className={cx("Fone")}>(123)</span>456-78901</a>
                    </div>
                    <div className={cx("Email")}>
                        <a src="#">support@vehica.com </a>
                    </div>
                    <div className={cx("Address")}>
                        <a src="#">West 12th Street New York, NY, USA</a>
                    </div>
                </div>
            </div>
            <div className={cx("FooterEnd")}>
            <span className={cx("line")}></span>
            <div className={cx("Link")}>
            Copyright © 2021. All rights reserved.
            <a className={cx("link")} src="#">Privacy Policy</a>
            </div>
            </div>
        </div>
    );
}

export default Footer;
