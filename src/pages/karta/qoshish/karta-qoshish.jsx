import React from 'react';
import cls from '../karta.module.scss'
import Head from "../../../components/UI/page-head/head";
import SozlamalarInp from "../../sozlamalar/sozlamalar-input/sozlamalar-inp";

const KartaQoshish = () => {
    return (
        <div className={cls.karta}>
            <div className="container" style={{padding: '0'}}>
                <div>
                    <Head link={'/karta'} title={'BANK KARTASI'} icon={true} />
                    <div className={cls.body}>
                        <form className={cls.body__inner}>
                            <SozlamalarInp type={'number'} placeholder={'KARTA RAQAMI'} />
                            <SozlamalarInp type={'text'} placeholder={'ISM FAMILIYA'} />
                            <SozlamalarInp type={'text'} placeholder={'BANK NOMI'} />
                            <button className={cls.body__btn}>TASDIQLASH</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KartaQoshish;
