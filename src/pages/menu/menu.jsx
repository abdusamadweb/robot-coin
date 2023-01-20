import React, {useState} from 'react';
import cls from './menu.module.scss'
import {
    BankIcon,
    BigUserIcon, BonusIcon, LogoutIcon,
    SettingsIcon,
    Users2Icon,
    Wallet1Icon,
    Wallet2Icon,
    WalletPlusIcon
} from "../../assets/icons";
import {Link} from "react-router-dom";

const Menu = () => {

    const navList = [
        {
            title: 'Sozlamalar',
            href: '/sozlamalar',
            icon: <SettingsIcon />
        },
        {
            title: 'Bonus kupon ',
            href: undefined,
            icon: <BonusIcon />
        },
        {
            title: 'Savdo qilish',
            href: '/savdo',
            icon: <BankIcon />
        },
        {
            title: 'Bank kartasi',
            href: '/karta',
            icon: <WalletPlusIcon />
        },
        {
            title: 'Mening jamoam',
            href: '/my-team',
            icon: <Users2Icon />
        },
        {
            title: 'Hisobdan chiqish',
            href: '/log-out',
            icon: <LogoutIcon />
        },
    ]

    const [modal, setModal] = useState(false)

    return (
        <div className={cls.menu}>
            {
                modal &&
                <div className={cls.modal}>
                    <div className={cls.content}>
                        <button className={cls.content__close} onClick={() => setModal(false)}>
                            <i className="fa-solid fa-xmark"/>
                        </button>
                        <span className={cls.content__title}>KUPON KODINI KIRITING</span>
                        <input className={cls.content__inp} type="text" placeholder='KUPON KODINI KIRITING'/>
                        <button className={cls.content__btn}>QABUL QILISH</button>
                    </div>
                    <div className={cls.modal__bg} onClick={() => setModal(false)}/>
                </div>
            }
            <div className="container" style={{padding: '0'}}>
                <div>
                    <div className={cls.head}>
                        <div className='row align-center'>
                            <BigUserIcon />
                            <div style={{marginLeft: '1rem'}}>
                                <span className={cls.head__txt} style={{marginBottom: '10px'}}>Ism familiya</span>
                                <span className={cls.head__txt}>+998991928124</span>
                            </div>
                        </div>
                        <p className={cls.head__usd}>100 usdt = 1 180 000 so’m</p>
                        <div className='row evenly' style={{marginBottom: '0'}}>
                            <Link className={cls.head__link} to='/hisob'>
                                <Wallet1Icon />
                                <span>Hisobni to’ldirish</span>
                            </Link>
                            <Link className={cls.head__link} style={{marginBottom: '0'}} to='/hisob/chiqarish'>
                                <Wallet2Icon />
                                <span>Hisobni chiqarish</span>
                            </Link>
                        </div>
                    </div>
                    <div className={cls.body}>
                        <div className={cls.body__wrapper}>
                            <ul className={cls.body__list}>
                                {
                                    navList.map((item, i) => (
                                        <li key={i}>
                                            <Link className={cls.body__link} onClick={(e) => e.target.innerText === 'Bonus kupon' && setModal(true)} to={item.href}>
                                                <div className='row align-center'>
                                                    { item.icon }
                                                    <span>{ item.title }</span>
                                                </div>
                                                <i className="fa-solid fa-chevron-right"/>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
