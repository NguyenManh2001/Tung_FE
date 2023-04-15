import classNames from 'classnames/bind';
import styles from './FeaturedListing.module.scss';
import { AiOutlineStar } from 'react-icons/ai';
import { FaRegImages } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter, IoLogoInstagram } from 'react-icons/io';
import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import FeaturedListins from '~/Components/FeaturedListing/FeaturedListing.js';
const cx = classNames.bind(styles);

function FeaturedListing() {
    const [id, setId] = useState(1);
    const menu = () => {
        return FeaturedListins.map((FeaturedListin) => {
            if (FeaturedListin.id === id) {
                return (
                    <div key={FeaturedListin.id} className={cx('MenuCar')}>
                        <div className={cx('MenucarItem')}>
                            <div className={cx('img')}>
                                <a src="#">
                                    <img className={cx('ImgCar1')} src={FeaturedListin.src} alt="No Image" />
                                </a>
                            </div>
                            <div className={cx('carIcon')}>
                                <AiOutlineStar />
                                <div className={cx('imgIcon')}>
                                    <FaRegImages />
                                    <span>7</span>
                                </div>
                            </div>
                            <div className={cx('NameCar')}>
                                <div className={cx('Name')}>
                                    <a src="#">{FeaturedListin.name}</a>
                                </div>
                                <div className={cx('listCar')}>
                                    <div className={cx('list')}>
                                        <div className={cx('listItem')}>{FeaturedListin.year}</div>
                                        <div className={cx('listItem1')}>{FeaturedListin.automatic}</div>
                                        <div className={cx('listItem1')}>{FeaturedListin.petrol}</div>
                                        <div className={cx('listItem1')}>{FeaturedListin.FrontWD}</div>
                                    </div>
                                    <div className={cx('price')}>{FeaturedListin.price}</div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('Menu')}>
                            {FeaturedListin.lists.map((list) => (
                                <Menu
                                width="44%"
                                    key={list.id}
                                    name={list.name}
                                    src={list.src}
                                    price={list.price}
                                    year={list.year}
                                    automatic={list.automatic}
                                    diesel={list.diesel}
                                />
                            ))}
                        </div>
                    </div>
                );
            }
        });
    };
    return (
        <div className={cx('content')}>
            <div className={cx('contentMenu')}>
                <div className={cx('contentCar')}>
                    <div className={cx('headerCar')}>
                        <h3>Handy picked</h3>
                        <h2 className={cx('title')}>Featured Listings</h2>
                    </div>
                    <div className={cx('ButtonCar')}>
                        <div
                            className={cx({ active: id === 1, btnNew: true })}
                            onClick={() => {
                                setId(1);
                            }}
                        >
                            New
                        </div>
                        <div
                            className={cx({ active: id === 2, btnNew: true })}
                            onClick={() => {
                                setId(2);
                            }}
                        >
                            Used
                        </div>
                    </div>
                </div>
                {menu()}
            </div>
            <div className={cx('Fotter')}>
                <div className={cx('fotterCar')}>
                    <div className={cx('follow')}>Follow us</div>
                    <div className={cx('Icon')}>
                        <a className={cx('icon1')} src="#">
                            <FaFacebookF />
                        </a>
                    </div>
                    <div className={cx('Icon')}>
                        <a className={cx('icon1')} src="#">
                            <IoLogoTwitter />
                        </a>
                    </div>
                    <div className={cx('Icon')}>
                        <a className={cx('icon1')} src="#">
                            <IoLogoInstagram />
                        </a>
                    </div>
                </div>
                <div className={cx('footerButton')}>
                    <a src="#">View 29 New</a>
                </div>
            </div>
        </div>
    );
}

export default FeaturedListing;
