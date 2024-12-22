import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menus.module.scss';
import { Wrapper as PoperWrapper } from '~/components/Popper';
import { useEffect, useState } from 'react';
import Header from './Header';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);

function Menus({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderMenu = () => {
        return current.data.map((item, index) => (
            <MenuItem
                data={item}
                key={index}
                onClick={() => {
                    if (item.children) {
                        setHistory([...history, item.children[0]]);
                    } else {
                        setHistory([...history]);
                    }
                }}
            />
        ));
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <PoperWrapper>
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() =>
                                    setHistory((pre) => {
                                        const newState = [...pre];
                                        newState.pop();
                                        return newState;
                                    })
                                }
                            />
                        )}
                        {renderMenu()}
                    </div>
                </PoperWrapper>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menus;
