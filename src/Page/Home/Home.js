import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HomeHeader from '../../layouts/components/HomeHeader';
import FeaturedListing from '../../layouts/components/FeaturedListing';
import PopularMakes from '../../layouts/components/PopularMakes';
import ChooseUs from '../../layouts/components/ChooseUs';
import OurTeam from '../../layouts/components/OurTeam';
import LinkApp from '../../layouts/components/LinkApp';
import NewsLetter from '../../layouts/components/NewsLetter'
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <HomeHeader />
                </div>
                <div className={cx('FeaturedListing')}>
                    <FeaturedListing />
                </div>
                <div className={cx('PopularMakes')}>
                   <PopularMakes />
                </div>
                <div className={cx('ChooseUs')}>
                  <ChooseUs />
                </div>
                <div className={cx('Ourteam')}>
                    <OurTeam />
                </div>
                <div className={cx('LinkApp')}>
                    <LinkApp />
                </div>
                <div className={cx('NewsLetter')}>
                    <NewsLetter />
                </div>
            </div>
        </div>
    );
}

export default Home;
