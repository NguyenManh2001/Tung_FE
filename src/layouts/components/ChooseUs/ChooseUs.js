import classNames from 'classnames/bind';
import { ElementIcons, FrentIcons, HanldIcons } from '~/Components/icons/icons';
import styles from './ChooseUs.module.scss';

const cx = classNames.bind(styles);

function ChooseUs() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>Why choose us?</div>
                <div className={cx('content')}>
                    <div className={cx('contentItem')}>
                        <div className={cx('Icon')}>
                            <div className={cx('emlementIcon')}>
                                <ElementIcons />
                            </div>
                        </div>
                        <div className={cx('name')}>Wide range of brands</div>
                        <div className={cx('title')}>
                            We can help with your financing plan, we can offer some tips and tricks. Drive off with this
                            dream car of yours regardless of your credit history.
                        </div>
                    </div>
                    <div className={cx('contentItem')}>
                        <div className={cx('Icon')}>
                            <div className={cx('frentIcon')}>
                                <FrentIcons />
                            </div>
                        </div>
                        <div className={cx('name')}>Wide range of brands</div>
                        <div className={cx('title')}>
                            We can help with your financing plan, we can offer some tips and tricks. Drive off with this
                            dream car of yours regardless of your credit history.
                        </div>
                    </div>
                    <div className={cx('contentItem')}>
                        <div className={cx('Icon')}>
                            <div className={cx('handIcon')}>
                                <HanldIcons />
                            </div>
                        </div>
                        <div className={cx('name')}>Wide range of brands</div>
                        <div className={cx('title')}>
                            We can help with your financing plan, we can offer some tips and tricks. Drive off with this
                            dream car of yours regardless of your credit history.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseUs;
