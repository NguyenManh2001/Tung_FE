import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { AiOutlineDown } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import React from 'react';
import Tippy from '@tippyjs/react/headless';
const cx = classNames.bind(styles);

const Menus = [
    {
        id: 1,
        name: 'Home',
        menus: [
            {
                id: 1,
                item: 'Homepage Mosaic',
            },
            {
                id: 2,
                item: 'Homepage Car Dealer',
            },
            {
                id: 3,
                item: 'Homepage Location',
            },
            {
                id: 4,
                item: 'Homepage Modern',
            },
            {
                id: 5,
                item: 'Homepage Video',
            },
            {
                id: 6,
                item: 'Homepage Classic',
            },
            {
                id: 7,
                item: 'Homepage Slideshow',
            },
        ],
    },
    {
        id: 2,
        name: 'Search',
        menus: [
            {
                id: 1,
                item: 'Classic - Rows',
            },
            {
                id: 2,
                item: 'Classic - Cards',
            },
            {
                id: 3,
                item: 'Map - Rows',
            },
            {
                id: 4,
                item: 'Map - Cards',
            },
        ],
    },
    {
        id: 3,
        name: 'Listing',
        menus: [
            {
                id: 1,
                item: 'Gallery',
            },
            {
                id: 2,
                item: 'Mosaic',
            },
            {
                id: 3,
                item: 'Carousel',
            },
            {
                id: 4,
                item: 'Private Message System',
            },
        ],
    },
    {
        id: 4,
        name: 'Pages',
        menus: [
            {
                id: 1,
                item: 'Blog',
            },
            {
                id: 2,
                item: 'About us',
            },
            {
                id: 3,
                item: 'Contact',
            },
            {
                id: 4,
                item: 'Our team – simple',
            },
            {
                id: 5,
                item: 'Our team – advanced',
            },
            {
                id: 6,
                item: 'User profile page ',
            },
            {
                id: 7,
                item: 'Sold',
            },
            {
                id: 8,
                item: 'Loan Calculator',
            },
            {
                id: 9,
                item: 'FAQ',
            },
            {
                id: 10,
                item: 'Login / Register ',
            },
        ],
    },
    {
        id: 5,
        name: 'More',
        menus: [
            {
                id: 1,
                item: 'Main Features',
            },
            {
                id: 2,
                item: 'Refund Policy',
            },
            {
                id: 3,
                item: 'Help Center (Support)',
            },
            {
                id: 4,
                item: 'Reviews',
            },
            {
                id: 5,
                item: 'Free Demo',
            },
            {
                id: 6,
                item: 'Listivo Classified Ads WordPress Theme',
            },
            {
                id: 7,
                item: 'MyHome Real Estate WordPress Theme',
            },
        ],
    },
];

function Header() {
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
                <div className={cx('header-menu')}>
                    {Menus.map((Menu) => (
                        <div key={Menu.id} className={cx('menuItem')}>
                            <Tippy
                                interactive
                                delay={[50, 50]}
                                placement={'bottom-end'}
                                render={(attrs) => (
                                    <div className="box" tabIndex="-1" {...attrs}>
                                        <div className={cx('TippyWrapper')}>
                                            {Menu.menus.map((menu) => (
                                                <div key={menu.id} className={cx('TippyContainer')}>
                                                    <div className={cx('TippyMenu')}>
                                                        <a href="#" className={cx('Menu')}>
                                                            {menu.item}
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            >
                                <a href="#" className={cx('Home')}>
                                    {Menu.name}
                                    <AiOutlineDown className={cx('down')} />
                                </a>
                            </Tippy>
                        </div>
                    ))}
                </div>
                <div className={cx('MenuLogin')}>
                    <div className={cx('imgLogin')}>
                        <FaRegUser className={cx('logoUse')} />
                    </div>
                    <div className={cx('Login')}>
                        <a href="#" className={cx('Home')}>
                            Login
                        </a>
                    </div>
                    <span className={cx('line')}></span>
                    <div className={cx('Rigister')}>
                        <a href="#" className={cx('Home')}>
                            Rigister
                        </a>
                    </div>
                    <a href="#" className={cx('AddListing')}>
                        <IoMdAdd className={cx('logoAdd')} />
                        <span>Add Listing</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
