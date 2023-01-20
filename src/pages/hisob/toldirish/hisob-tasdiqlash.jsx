import React from 'react';
import cls from '../hisob.module.scss'
import {Link} from "react-router-dom";
import {CopyIcon} from "../../../assets/icons";
import Head from "../../../components/UI/page-head/head";

const HisobTasdiqlash = () => {
    return (
        <div className={cls.hisob}>
            <div className="container" style={{padding: '0'}}>
                <Head link={'/hisob'} title={'HISOBNI TASDIQLASH'} />
                <div className={cls.body}>
                    <div className={cls.body__inner}>
                        <div>
                            <div className={cls.body__inp}>
                                <span className={cls.body__inp_txt}>{ 'IU7g6f98g97G86WFGX7YVY9X' }</span>
                                <CopyIcon />
                            </div>
                            <p className={cls.body__desc_red}>Tolov qilayotgan usdt adresga etiborli bo’ling faqatgina TRC20  setida yubiring boshqa setda yuborilgan to’lovlar qabul qilinmaydi bekor qilinadi !</p>
                        </div>
                        <div>
                            <div className={cls.body__inps}>
                                <input className={cls.body__inp} defaultValue={100} type="number" placeholder='Usdt miqdori'/>
                                <CopyIcon />
                            </div>
                            <p className={cls.body__desc}>Tolovni ko’rsatilgan miqdordan kam yubormang !</p>
                        </div>
                        <Link className={cls.body__btn} to='/hisob/tasdiqlash'>Tolovni tasdiqlash</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HisobTasdiqlash;
