import classNames from 'classnames/bind';
import styles from './Menus.module.scss';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);
function Header({ title, onBack }) {
    return (
        <div className={cx('header')} onClick={onBack}>
            <span>{<FontAwesomeIcon icon={faChevronLeft} />}</span>
            <header>{title}</header>
        </div>
    );
}

export default Header;
