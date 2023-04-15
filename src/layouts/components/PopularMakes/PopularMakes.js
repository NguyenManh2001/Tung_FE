import classNames from 'classnames/bind';
import styles from './PopularMakes.module.scss';
import popularMakes from '~/Components/PopularMakes/PopularMakes.js';
import Menu from '../FeaturedListing/Menu';
import {BiChevronRight , BiChevronLeft} from 'react-icons/bi';
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const cx = classNames.bind(styles);

function PopularMakes() {
    const [id,setId] = useState(1);
    const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
};
   
    const MenuCars = () => {
        return popularMakes.map((popularMake) => {
        if(popularMake.id === id){
               return(
                 popularMake.lists.map((list) => (
                    <Menu
                       width="95%"
                        key={list.id}
                        autoPlay={3}
                        name={list.name}
                        src={list.src}
                        price={list.price}
                        year={list.year}
                        automatic={list.automatic}
                        diesel={list.diesel}
                    />
                )))
            }
            })
    }
    return (
        <div className={cx('Wrapper')}>
            <div className={cx('headerContent')}>
                <div className={cx('NameContent')}>Popular Makes</div>
                <div className={cx('btnheader')}>
                    <div  className={cx({ active: id === 1, btn: true })}   onClick={() => {
                                setId(1);
                            }}>
                        Audi
                        <div className={cx('btnList')}>14 Listings</div>
                    </div>
                    <div  className={cx({ active: id === 2, btn: true })}   onClick={() => {
                                setId(2);
                            }}>
                        BMW
                        <div className={cx('btnList')}>11 Listings</div>
                    </div>
                    <div  className={cx({ active: id === 3, btn: true })}   onClick={() => {
                                setId(3);
                            }}>
                        Cadillac
                        <div className={cx('btnList')}>13 Listings</div>
                    </div>
                    <div  className={cx({ active: id === 4, btn: true })}   onClick={() => {
                                setId(4);
                            }}>
                        Ferrary
                        <div className={cx('btnList')}>12 Listings</div>
                    </div>
                </div>
            </div>
            <Slider ref={sliderRef} {...settings} className={cx('MenuContent')}> 
                {/* <div className={cx('MenuContent')}> */}
                  {MenuCars()}
                  {/* </div> */}
            </Slider>
            <div className={cx('footerContent')}>
                <div className={cx('icon')}>
                <button className={cx('iconLeft')} onClick={() => sliderRef.current.slickPrev()}><BiChevronLeft /></button> 
                <button className={cx('iconLeft')} onClick={() => sliderRef.current.slickNext()} ><BiChevronRight /></button>  
                </div>
                <div className={cx('footerButton')}>
                    <a src="#">View 29 New</a>
                </div>
            </div>
        </div>
    );
}

export default PopularMakes;
