import classNames from 'classnames/bind';
import styles from './HomeHeader.module.scss';
import { CarIcons1, CarIcons2, CarIcons3, CarIcons4, CarIcons5, DownIcons } from '~/Components/icons/icons';
import { BiSearchAlt2 } from 'react-icons/bi';
const cx = classNames.bind(styles);
function HomeHeader() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('Header_Wrapper')}>
                <h1 className={cx('Name')}>
                    Find Your
                    <span className={cx('NameTitle')}>Perfect</span>
                    Car
                </h1>
                <div className={cx('Menu')}>
                    <div className={cx('MenuItem')}>All</div>
                    <div className={cx('MenuItem')}>New</div>
                    <div className={cx('MenuItem')}>Used</div>
                </div>
                <div className={cx('Search')}>
                    <div className={cx('SearchInput')}>
                        <input
                            className={cx('Input')}
                            placeholder="All Makes"
                            aria-labelledby="vs1__combobox"
                            aria-controls="vs1__listbox"
                            type="search"
                        />
                        <div className={cx('button')}>
                            <DownIcons className={cx('downIcons')} />
                        </div>
                    </div>
                    <div className={cx('SearchInput')}>
                        <input
                            className={cx('Input')}
                            placeholder="All Models"
                            aria-labelledby="vs1__combobox"
                            aria-controls="vs1__listbox"
                            type="search"
                        />
                        <div className={cx('button')}>
                            <DownIcons className={cx('downIcons')} />
                        </div>
                    </div>
                    <div className={cx('SearchInput')}>
                        <input
                            className={cx('Input')}
                            placeholder="Max Price"
                            aria-labelledby="vs1__combobox"
                            aria-controls="vs1__listbox"
                            type="search"
                        />
                        <div className={cx('button')}>
                            <DownIcons className={cx('downIcons')} />
                        </div>
                    </div>
                    <div className={cx('Button')}>
                        <button className={cx('ButtonIcon')}>
                            <BiSearchAlt2 />
                        </button>
                    </div>
                    <div className={cx('SearchBottom')}></div>
                </div>
            </div>
            <div className={cx('Car')}>
                <div className={cx('CarMenu')}>
                    <div className={cx('CarItem')}>
                        <a className={cx('Linkcar')} src="#">
                            <CarIcons1 />
                        </a>
                    </div>
                    <div className={cx('NameCar')}>Sedan</div>
                </div>
                <div className={cx('CarMenu')}>
                    <div className={cx('CarItem')}>
                        <a className={cx('Linkcar')} src="#">
                            <CarIcons2 />
                        </a>
                    </div>
                    <div className={cx('NameCar')}>Coupe</div>
                </div>
                <div className={cx('CarMenu')}>
                    <div className={cx('CarItem')}>
                        <a className={cx('Linkcar')} src="#">
                            <CarIcons3 />
                        </a>
                    </div>
                    <div className={cx('NameCar')}>SUV</div>
                </div>
                <div className={cx('CarMenu')}>
                    <div className={cx('CarItem')}>
                        <a className={cx('Linkcar')} src="#">
                            <CarIcons4 />
                        </a>
                    </div>
                    <div className={cx('NameCar')}>Hatchback</div>
                </div>
                <div className={cx('CarMenu')}>
                    <div className={cx('CarItem')}>
                        <a className={cx('Linkcar')} src="#">
                            <CarIcons5 />
                        </a>
                    </div>
                    <div className={cx('NameCar')}>Convertible</div>
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;
