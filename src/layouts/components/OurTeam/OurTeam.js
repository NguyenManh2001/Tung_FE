import classNames from 'classnames/bind';
import styles from './OurTeam.module.scss';
import { BiCheck, BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { IoIosCall } from 'react-icons/io';
import { MdOutlineMailOutline } from 'react-icons/md';
import React, { useState, useRef } from 'react';
import LibaryReactjs from '~/Components/LibaryReactjs';
const cx = classNames.bind(styles);

const MENUS = [
    {
        id: 1,
        img: require('~/Assets/Images/admin/admin1.jpg'),
        name: 'Emily Rees',
        email: 'emily@vehica.com',
        title:'Customer Advisor',
        phone: '(123) 345-6789 ',
    },
    {
        id: 2,
        img: require('~/Assets/Images/admin/admin2.jpg'),
        name: 'George Brown',
        email: 'george@vehica.com',
        title:'Customer Advisor',
        phone: '(123) 345-6789 ',
    },
    {
        id: 3,
        img: require('~/Assets/Images/admin/admin3.jpg'),
        name: 'Isabella Evans',
        email: 'isabella@vehica.com',
        title:'Customer Advisor',
        phone: '(123) 345-6789 ',
    },
    {
        id: 4,
        img: require('~/Assets/Images/admin/admin4.jpg'),
        name: 'Jacob Austin',
        email: 'jacob@vehica.com',
        title:'Customer Advisor',
        phone: '(123) 345-6789 ',
    },
    {
        id: 5,
        img: require('~/Assets/Images/admin/admin5.jpg'),
        name: 'Kate Hendricks',
        email: 'kate@vehica.com',
        title:'Customer Advisor',
        phone: '(123) 345-6789 ',
    },
];
function OurTeam() {
   // const [currentSlide, setCurrentSlide] = useState(0);
   const sliderRef = useRef(null);
   
 const handlePrevClick = () => {
   sliderRef.current.slickPrev();
 };

 const handleNextClick = () => {
   sliderRef.current.slickNext();
 };

 const MenuItem = () => {
   return MENUS.map((MENU) => (
      <div  key={MENU.id} className={cx('content')}>
      <div className={cx('menu')}>
          <div className={cx('img')}>
              <img src={MENU.img} alt="No image" />
          </div>
          <div className={cx('Icon')}>
              <div className={cx('IconMenu')}>
                  <div className={cx('CallIcon')}>
                      <a src="#" className={cx('Icons')}>
                          <IoIosCall />
                      </a>
                  </div>
              </div>
              <div className={cx('IconMenu')}>
                  <div className={cx('CallIcon')}>
                      <a src="#" className={cx('Icons')}>
                          <MdOutlineMailOutline />
                      </a>
                  </div>
              </div>
          </div>
          <div className={cx('MenuName')}>
              <div className={cx('name')}>
                  <a src="#">{MENU.name}</a>
              </div>
              <div className={cx('nametitle')}>{MENU.title}</div>
              <div className={cx('border')}></div>
              <div className={cx('email')}>
                  <a src="#">{MENU.email}</a>
              </div>
              <div className={cx('phone')}>
                  <a src="#">{MENU.phone}</a>
              </div>
          </div>
      </div>
   </div>
  ))
 }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('leftContainer')}>
                    <div className={cx('Name')}>Our team</div>
                    <div className={cx('list')}>
                        <div className={cx('icon')}>
                            <BiCheck />
                        </div>
                        <div className={cx('title')}>Praesent nibh luctus viverra</div>
                    </div>
                    <div className={cx('list')}>
                        <div className={cx('icon')}>
                            <BiCheck />
                        </div>
                        <div className={cx('title')}>Adipiscing elit</div>
                    </div>
                    <div className={cx('list')}>
                        <div className={cx('icon')}>
                            <BiCheck />
                        </div>
                        <div className={cx('title')}>Tempor incididunt ut labore</div>
                    </div>
                    <div className={cx('list')}>
                        <div className={cx('icon')}>
                            <BiCheck />
                        </div>
                        <div className={cx('title')}>Quis ipsum suspendisseviverra</div>
                    </div>
                    <div className={cx('list')}>
                        <div className={cx('icon')}>
                            <BiCheck />
                        </div>
                        <div className={cx('title')}>Maecenas ac</div>
                    </div>
                    <div className={cx('footerButton')}>
                        <a src="#">Learn more</a>
                    </div>
                    <div className={cx('icons')}>
                    <button className={cx('iconLeft')} onClick={handlePrevClick}><BiChevronLeft /></button> 
                <button className={cx('iconLeft')} onClick={handleNextClick} ><BiChevronRight /></button>  
                    </div>
                </div>
                <div className={cx('rightContainer')}>
                     <LibaryReactjs refs={sliderRef} show={3} className={cx('contentItem')}>
                        {MenuItem()}
                    </LibaryReactjs>
                   
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
