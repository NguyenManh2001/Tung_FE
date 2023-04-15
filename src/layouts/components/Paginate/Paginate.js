import React from 'react';
// import { Pagination } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Paginate.module.scss';
import { TbEdit, TbPlayerTrackPrev, TbPlayerTrackNext } from 'react-icons/tb';

const cx = classNames.bind(styles);
function Pagination({ currentPage, totalPages, onChangePage }) {
    const pages = [];

    // Tạo một mảng số trang
    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <div
                className={cx({ active: currentPage === i, item: true })}
                key={i}
                onClick={() => onChangePage(i)}
            >
                {i}
            </div>,
        );
    }
    return (
        <div className={cx('List')}>
            <div className={cx('prev')}>
                <button
                    className={cx('btnPrev')}
                    disabled={currentPage === 1}
                    onClick={() => onChangePage(currentPage - 1)}
                >
                    <TbPlayerTrackPrev />
                </button>
            </div>
            <div className={cx('number')}>{pages}</div>
            <div className={cx('next')}>
                <button
                    className={cx('btnPrev')}
                    disabled={currentPage === totalPages}
                    onClick={() => onChangePage(currentPage + 1)}
                >
                    <TbPlayerTrackNext />
                </button>
            </div>
        </div>
    );
}

export default Pagination;
