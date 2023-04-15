import classNames from 'classnames/bind';
import styles from './AdminLayout.module.scss';
import Header from '~/Page/admin/Layout/Header';
import { useState } from 'react';
import Sibar from '~/Page/admin/Layout/Sibar';
const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    const [fullScreen,setFullScreen] = useState(true);
    const handlefullscreen = () => {
        setFullScreen(!fullScreen);
    }
    return (
        <div className={fullScreen ? cx('wrapper'): cx('fullwrapper')}>
            <div className={cx('header')}>
                <Header handlefullscreen={handlefullscreen} />
            </div>
            <div className={cx('container')}>
            <div className={cx('containerLeft')}>
                <Sibar />
            </div>
            <div className={cx('containerRight')}>{children}</div>
        </div>
        </div>
    );
}

export default AdminLayout;