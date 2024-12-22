import classNames from 'classnames/bind';
import styles from './Menus.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button
            leftIcon={data.icon}
            href={data.href}
            to={data.to}
            className={cx('custom')}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
