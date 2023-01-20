import React from 'react';
import cls from './head.module.scss'
import {Link} from "react-router-dom";
import {PlusIcon} from "../../../assets/icons";

const Head = ({ link, title, icon, iconLink }) => {
    return (
        <div className={cls.head}>
            <Link className={cls.head__link} to={link}>
                <i className="fa-solid fa-chevron-left"/>
            </Link>
            <h2 className={cls.head__title}>{ title }</h2>
            {
                icon &&
                <Link className={cls.head__plus} to={iconLink}>
                    <PlusIcon />
                </Link>
            }
        </div>
    );
};

export default Head;
