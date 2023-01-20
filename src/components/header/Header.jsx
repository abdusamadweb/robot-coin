import React from 'react';
import cls from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {BankIcon, HomeIcon, UserIcon} from "../../assets/icons";

const Header = () => {

    const nav = [
        {
            name: 'home',
            path: '/',
            icon: <HomeIcon />,
            txt: 'Bosh sahifa'
        },
        {
            name: 'trade',
            path: '/savdo',
            icon: <BankIcon />,
            txt: 'Savdo qilish'
        },
        {
            name: 'menu',
            path: '/menu',
            icon: <UserIcon />,
            txt: 'Menyu'
        },
    ]

    console.log(nav[0])

    return (
        <div className={cls.header}>
            <div className="container" style={{padding: '0'}}>
                <nav>
                    <ul className={cls.list}>
                        {
                            nav.map((item, i) => (
                                <li key={i}>
                                    <NavLink className={cls.link} to={item.path}>
                                        {item.icon}
                                        <span>{ item.txt }</span>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
