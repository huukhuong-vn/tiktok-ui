import images from '~/assets/images';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faCircleXmark,
    faEllipsisVertical,
    faGlobeAsia,
    faKeyboard,
    faMagnifyingGlass,
    faQuestionCircle,
    faSignIn,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { Wrapper as PoperWrapper } from '~/components/Popper';
import AcountItems from '../AcountItems';
import Button from '~/components/Button';
import Menus from '~/components/Popper/Menus';
const cx = classNames.bind(styles);
const MENU_ITEM = [
    {
        title: 'English',
        icon: <FontAwesomeIcon icon={faGlobeAsia} />,
        children: [
            {
                title: 'Language',
                data: [
                    {
                        code: 'vn',
                        title: 'Việt Nam',
                    },
                    {
                        code: 'eng',
                        title: 'English',
                        children: [
                            {
                                title: 'Language 2',
                                data: [
                                    {
                                        code: 'vn',
                                        title: 'Việt Nam 1',
                                    },
                                    {
                                        code: 'eng',
                                        title: 'English 2',
                                    },
                                    {
                                        code: 'cn',
                                        title: 'China 3',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        code: 'cn',
                        title: 'China',
                    },
                ],
            },
        ],
    },
    {
        title: 'Feedback and help',
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        to: '/feedback',
    },
    { title: 'Keyboard Shortcuts ', icon: <FontAwesomeIcon icon={faKeyboard} /> },
];

function Header() {
    const [searchResult, setSearchResult] = useState('');
    const [searchFocus, setSearchFocus] = useState(false);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>

                <Tippy
                    interactive
                    visible={searchResult.length > 0 && searchFocus}
                    render={(attrs) => (
                        <PoperWrapper>
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <h5 className={cx('taikhoan')}>Acounts</h5>
                                <AcountItems input={searchResult} />
                            </div>
                        </PoperWrapper>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            type="text"
                            className={'input'}
                            id="input"
                            placeholder="Search"
                            spellCheck="false"
                            onInput={(e) => setSearchResult(e.target.value)}
                            onClick={() => setSearchFocus(true)}
                            onBlur={() => setSearchFocus(false)}
                        />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button outline>Upload</Button>
                    <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                        Log in
                    </Button>
                    <Menus items={MENU_ITEM}>
                        <button className={cx('more-btn')}>
                            {<FontAwesomeIcon icon={faEllipsisVertical} />}
                        </button>
                    </Menus>
                </div>
            </div>
        </header>
    );
}

export default Header;
