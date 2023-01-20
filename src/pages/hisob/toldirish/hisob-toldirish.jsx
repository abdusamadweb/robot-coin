import React from 'react';
import cls from '../hisob.module.scss'
import {Link} from "react-router-dom";
import Head from "../../../components/UI/page-head/head";

const HisobToldirish = () => {
    return (
        <div className={cls.hisob}>
            <div className="container" style={{padding: '0'}}>
                <div>
                    <Head link={'/menu'} title={'HISOBNI TO’LDIRISH'} />
                    <div className={cls.body}>
                        <div className={cls.body__inner}>
                            <input className={cls.body__inp} type="number" placeholder='Usdt miqdori'/>
                            <p className={cls.body__desc}>Hisobingizni to’ldirmoqchi bo’lgan summani usdt da kiriting misol uchun 100
                                Ishonch hosil qilib keyingi sahifa tugmasini bosing  !</p>
                            <Link className={cls.body__btn} to='/hisob/tasdiqlash'>Keyingi sahifa</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HisobToldirish;
