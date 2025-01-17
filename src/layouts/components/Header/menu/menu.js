import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Menu({children}) {
    return <nav className={cx('container')}>{children}</nav>;
};

Menu.propTypes = {
    children: PropTypes.node.isRequired,
}


export default Menu;