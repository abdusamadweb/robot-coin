import React from 'react';
import cls from './sozlamalar.module.scss'
import Head from "../../components/UI/page-head/head";
import SozlamalarInp from "./sozlamalar-input/sozlamalar-inp";

const Sozlamalar = () => {
    return (
        <div className={cls.sozlamalar}>
            <div className="container" style={{padding: '0'}}>
                <div>
                    <Head link={'/menu'} title={'SOZLAMALAR'} />
                    <div className={cls.body}>
                        <form className={cls.body__inner}>
                            <SozlamalarInp type={'number'} placeholder={'TELEFON RAQAM'} />
                            <SozlamalarInp type={'text'} placeholder={'ISM FAMILIYA'} />
                            <SozlamalarInp type={'password'} placeholder={'PAROL'} />
                            <SozlamalarInp type={'password'} placeholder={'PAROLNI QAYTADAN KIRITING'} />
                            <button className={cls.body__btn}>TASDIQLASH</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sozlamalar;
