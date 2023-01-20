import React from 'react';
import cls from './karta.module.scss'
import Head from "../../components/UI/page-head/head";
import {TrashIcon} from "../../assets/icons";

const Karta = () => {
    return (
        <div className={cls.karta}>
            <div className="container" style={{padding: '0'}}>
                <div>
                    <Head link={'/menu'} title={'BANK KARTASI'} icon={true} iconLink={'/karta/qoshish'} />
                    <div className={cls.body}>
                        <ul className={cls.body__list}>
                            <li className={cls.item}>
                                <div className={cls.item__titles}>
                                    <p className={cls.item__card}>9860 0000 0000 0110</p>
                                    <span className={cls.item__name}>ISM FAMILIYA</span>
                                    <span className={cls.item__type}>Uzcard</span>
                                </div>
                                <button className={cls.item__btn}>
                                    <TrashIcon />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Karta;
