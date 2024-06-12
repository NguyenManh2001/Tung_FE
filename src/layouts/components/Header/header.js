import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { AiOutlineDown } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import React from 'react';
import Tippy from '@tippyjs/react/headless';
import config from '~/config';
const cx = classNames.bind(styles);

const Menus = [
    {
        id: 1,
        link: config.routers.Home,
        name: 'Trang chủ',
    },
    {
        id: 2,
        link: config.routers.Forecast,
        name: 'Dự đoán ung thư',
    },
    {
        id: 3,
        link: config.routers.Information,
        name: 'Dữ liệu',
    },
    {
        id: 4,
        link: config.routers.Login,
        name: 'Đăng nhập',
    },
];

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header-menu')}>
                    {Menus.map((Menu) => (
                        <div key={Menu.id} className={cx('menuItem')}>
                            <a href={Menu.link} className={cx('Home')}>
                                {Menu.name}
                                {/* <AiOutlineDown className={cx('down')} /> */}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;
