import classNames from 'classnames/bind';
import styles from './AcountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AcountItems({ input }) {
    let AcountItemsList = [
        {
            name: 'Tài khoản một',
            image: 'https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg',
            info: 'Một ngày tốt đẹp',
            verify: true,
        },
        {
            name: 'Người đẹp vì lụa',
            image: 'https://cdnphoto.dantri.com.vn/UtWuYVDMRqsgVyY0csHN1u_1cgI=/thumb_w/1020/2022/10/21/pham-thu-anh-1666318823172.jpg',
            info: 'là một người đẹp',
            Verify: false,
        },
    ];
    return (
        <div>
            {AcountItemsList.filter((e) =>
                e.name.toLowerCase().startsWith(input.toLowerCase()),
            ).map((acount, index) => (
                <li key={index} className={cx('wrapper')}>
                    <img src={acount.image} alt="avatar" className={cx('avatar')} />
                    <div className={cx('content')}>
                        <h4 className={cx('acount-name')}>
                            {acount.name}
                            {acount.verify && (
                                <span className={cx('verify')}>
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                </span>
                            )}
                        </h4>
                        <p className={cx('acount-info')}>{acount.info}</p>
                    </div>
                </li>
            ))}
        </div>
    );
}

export default AcountItems;
