import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disable = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = { onClick, ...passProps };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof key === 'function') {
                delete props.key;
            }
        });
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        disable,
        text,
        small,
        rounded,
        large,
        leftIcon,
        rightIcon,
    });
    return (
        <Comp className={classes} {...props}>
            {{ leftIcon } && <span>{leftIcon}</span>}
            <span>{children}</span>
            {{ rightIcon } && <span>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
