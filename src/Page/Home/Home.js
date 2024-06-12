import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Image } from 'antd';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}></div>
                <div className={cx('content')}>
                    <div className={cx('left')}>
                        <div className={cx('title')}>Tin tức</div>
                        <div className={cx('menu')}>
                            <div className={cx('Image')}>
                                <Image src="/anh-dep-thien-nhien-2-1.jpg" />
                            </div>
                            <div className={cx('name')}>
                                <a href="#">Link</a>
                                <div>Tieu de</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('title')}>Nổi bật</div>
                        <div className={cx('menu')}>
                            <div className={cx('Image')}>
                                <Image src="/anh-dep-thien-nhien-2-1.jpg" />
                            </div>
                            <div className={cx('name')}>
                                <a href="#">Link</a>
                                <div>Tieu de</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
