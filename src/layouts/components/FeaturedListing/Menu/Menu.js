import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { AiOutlineStar } from 'react-icons/ai';
import { FaRegImages } from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {IoLogoTwitter,IoLogoInstagram} from 'react-icons/io';
import { useState } from 'react';
import React from 'react';
const cx = classNames.bind(styles);



function Menu({name,src,price,year,automatic,diesel,width}) {
    const buttonStyle = {
        width: width,
      };
    return (
        // <div key={id} className={cx('Menu')}>
             <div className={cx('MenuItem')} style={buttonStyle}>
                    <div className={cx('img')}>
                        <a src="#">
                           <img
                                className={cx('ImgCar2')}
                                src={src}
                                alt="No Image"
                            />
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
                        <div className={cx('Name1')}>
                            <a src="#">{name}</a>
                        </div>
                        <div className={cx('price1')}>{price}</div>
                        <div className={cx('listCar1')}>
                            <div className={cx('list1')}>
                                <div className={cx('listItem2')}>{year}</div>
                                <div className={cx('listItem1')}>{automatic}</div>
                                <div className={cx('listItem1')}>{diesel}</div>
                            </div>
                        </div>
                    </div>
                </div>
        // </div>
    );
}

export default Menu;
