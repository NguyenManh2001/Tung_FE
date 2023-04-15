import classNames from 'classnames/bind';
import styles from './LinkApp.module.scss';
import { BiCheck, BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { AiFillApple } from 'react-icons/ai';
import React, { useState, useRef } from 'react';
import LibaryReactjs from '~/Components/LibaryReactjs';
import { FaGooglePlay } from 'react-icons/fa';

const cx = classNames.bind(styles);

const LINKS = [
    {
        id: 1,
        src: require('~/Assets/Images/Link/Link1.png'),
    },
    {
        id: 2,
        src: require('~/Assets/Images/Link/Link2.png'),
    },
    {
        id: 3,
        src: require('~/Assets/Images/Link/Link3.png'),
    },
    {
        id: 4,
        src: require('~/Assets/Images/Link/Link4.png'),
    },
    {
        id: 5,
        src: require('~/Assets/Images/Link/Link5.png'),
    },
];
function LinkApp() {
    const sliderRef = useRef(null);
    const handlePrevClick = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextClick = () => {
        sliderRef.current.slickNext();
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('Link')}>
                    <button className={cx('iconLeft')} onClick={handlePrevClick}>
                        <BiChevronLeft />
                    </button>
                    <LibaryReactjs refs={sliderRef} show={4} className={cx('LinkItem')}>
                        {LINKS.map((LINK) => (
                            <div key={LINK.id} className={cx('LinkIcon')}>
                                <a className={cx('Link1')} src="#">
                                    <img className={cx('img')} src={LINK.src} />
                                </a>
                            </div>
                        ))}
                    </LibaryReactjs>
                    <button className={cx('iconLeft')} onClick={handleNextClick}>
                        <BiChevronRight />
                    </button>
                </div>
                <div className={cx('Menu')}>
                    <div className={cx('LeftMenu')}>
                        <div className={cx('dowload')}>
                            <div className={cx('Name')}>Download our app</div>
                            <div className={cx('IOS')}>
                                <div className={cx('btnIos')}>
                                    <span className={cx('iconIos')}>
                                        <AiFillApple />
                                    </span>
                                    <span className={cx('nameIos')}>For IOS</span>
                                </div>
                            </div>
                            <div className={cx('Android')}>
                                <div className={cx('btnIos')}>
                                    <span className={cx('iconIoss')}>
                                        <FaGooglePlay />
                                    </span>
                                    <span className={cx('nameIos')}>For Android</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('Imgdowload')}>
                            <img src={require('~/Assets/Images/phone.png')} />
                        </div>
                    </div>
                    <div className={cx('RightMenu')}>
                        <div className={cx('BuyCar')}>
                            <div className={cx('Name')}>How to buy a car?</div>
                            <div className={cx('Readcar')}>
                                <button className={cx('btnRead')}>Read more</button>
                            </div>
                        </div>
                        <div className={cx('listCar')}>
                            <div className={cx('list')}>
                                <div className={cx('icon')}>
                                    <BiCheck />
                                </div>
                                <div className={cx('title')}>best deals</div>
                            </div>
                            <div className={cx('list')}>
                                <div className={cx('icon')}>
                                    <BiCheck />
                                </div>
                                <div className={cx('title')}>sell your car</div>
                            </div>
                            <div className={cx('list')}>
                                <div className={cx('icon')}>
                                    <BiCheck />
                                </div>
                                <div className={cx('title')}>car book values</div>
                            </div>
                            <div className={cx('list')}>
                                <div className={cx('icon')}>
                                    <BiCheck />
                                </div>
                                <div className={cx('title')}>car dealers</div>
                            </div>
                            <div className={cx('list')}>
                                <div className={cx('icon')}>
                                    <BiCheck />
                                </div>
                                <div className={cx('title')}>compare prices</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LinkApp;
