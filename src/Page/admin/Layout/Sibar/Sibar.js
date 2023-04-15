import classNames from 'classnames/bind';
import styles from './Sibar.module.scss';
import {HiClipboardList} from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import config from '~/config/config';
import { FaUserCircle } from 'react-icons/fa';
import {BsFillTrashFill} from 'react-icons/bs';
const cx = classNames.bind(styles);
function Sibar() {

    const MENUS = [
        {
            id:1,
            name:'Danh sách ô tô',
            icon: <HiClipboardList />,
            link: config.routers.ListCar
        },
        {
            id:2,
            name:'Thông tin cá nhân',
            icon: <FaUserCircle />,
              link: config.routers.CreateCar
        },
        {
            id:3,
            name:'Thùng giác',
            icon: <BsFillTrashFill />,
            link: config.routers.EditCar
        },
    ]
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
            <div className={cx('logo')}>
                    <img
                        className={cx('imgLogo')}
                        src={require('~/Assets/Images/vehica-logo-white-retina.png')}
                        alt="Girl in a jacket"
                    />
                </div>
                <div className={cx('menu')}>
                    {MENUS.map((MENU) => (
                    <NavLink key={MENU.id} to={MENU.link} className={(nav) => cx('menuItem', {active: nav.isActive})}>
                        <div className={cx('Icon')}>{MENU.icon}</div>
                        <div className={cx('Name')}>{MENU.name}</div>
                    </NavLink>
                    ))}
                     {/* <Link to='#' className={cx('menuItem')}>
                        <div className={cx('Icon')}><FaUserCircle /></div>
                        <div className={cx('Name')}>Thông tin cá nhân</div>
                    </Link>
                    <Link to='#' className={cx('menuItem')}>
                        <div className={cx('Icon')}><BsFillTrashFill /></div>
                        <div className={cx('Name')}>Thùng giác</div>
                    </Link> */}
                </div>
            </div>
        </div>
    );
}

export default Sibar;
