import React from 'react';
import cls from '../hisob.module.scss'
import Head from "../../../components/UI/page-head/head";
import {Link} from "react-router-dom";

const HisobChiqarish = () => {
    return (
        <div className={cls.hisob}>
            <div className="container" style={{padding: '0'}}>
                <div>
                    <Head link={'/menu'} title={'HISOBNI CHIQARISH'} />
                    <div className={cls.body}>
                        <div className={cls.body__inner} style={{borderRadius: '20px'}}>
                            <div style={{marginBottom: '1rem'}}>
                                <input className={cls.body__inp} type="text" placeholder='USDT ADRES NI KIRITING'/>
                                <p className={cls.body__desc_red}>Adressni kiritishda etiborli bo’ling !</p>
                            </div>
                            <div style={{marginBottom: '2rem'}}>
                                <input className={cls.body__inp} type="number" placeholder='SUMMANI USDT DA KIRITING'/>
                                <p className={cls.body__desc} style={{textAlign: 'end'}}>Hisobingizda mavjud : {'100'} usdt</p>
                            </div>
                            <Link className={cls.body__btn_green} to='/hisob/chiqarish'>CHIQARISH</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HisobChiqarish;
