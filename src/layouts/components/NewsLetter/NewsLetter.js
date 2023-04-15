import classNames from "classnames/bind";
import styles from "./NewsLetter.module.scss";
import {FiSend} from 'react-icons/fi';

const cx = classNames.bind(styles);


function Newsletter() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('Name')}>
                Newsletter
                </div>
                <div className={cx('content')}>
                    <div className={cx('input')}>
                    <input className={cx('email')} type="email" placeholder="Your email address" />
                    </div>
                    <div className={cx('footerButton')}>
                        <a className={cx('link')} src="#">Sign up
                        <span className={cx('icon')}><FiSend /></span>
                        </a>
                    </div>
                </div>
                <div className={cx('title')}>
                Subscribe to our newsletter and stay updated with our offer
                </div>
            </div>
        </div>
     );
}

export default Newsletter;