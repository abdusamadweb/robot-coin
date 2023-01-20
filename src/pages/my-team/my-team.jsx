import React from 'react';
import cls from './my-team.module.scss'
import Head from "../../components/UI/page-head/head";
import {CopyIcon} from "../../assets/icons";

const MyTeam = () => {
    return (
        <div className={cls.team}>
            <div className="container" style={{padding: '0'}}>
                <div>
                    <Head link={'/menu'} title={'MENING JAMOAM'} />
                    <div className={cls.body}>
                        <div className={cls.inner}>
                            <form className={cls.form}>
                                <label className={cls.form__label}>
                                    <input className={cls.form__inp} type="text" placeholder='Referal ssilka'/>
                                    <button className={cls.form__icon}>
                                        <CopyIcon />
                                    </button>
                                </label>
                                <label className={cls.form__label2}>
                                    <input className={cls.form__inp2} type="text" placeholder='Referal code'/>
                                    <button className={cls.form__icon}>
                                        <CopyIcon />
                                    </button>
                                </label>
                                <button className={cls.form__btn}>Tasdiqlash</button>
                                <p className={cls.form__desc}>Har bitta chaqirilgan do’stingiz hisobini to’ldirsa sizga 5% miqdorida bonus beriladi </p>
                                <p className={cls.form__total}>Umumiy foyda : {'1000'} usdt</p>
                            </form>
                        </div>
                        <div className={cls.wrapper}>
                            <table className={cls.table}>
                                <tr>
                                    <th>No1</th>
                                    <th>Ism familiya</th>
                                    <th>Foyda</th>
                                    <th>Vaqt</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>John due</td>
                                    <td>100</td>
                                    <td>12.12.2023</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>John due</td>
                                    <td>100</td>
                                    <td>12.12.2023</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>John due</td>
                                    <td>100</td>
                                    <td>12.12.2023</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>John due</td>
                                    <td>100</td>
                                    <td>12.12.2023</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>John due</td>
                                    <td>100</td>
                                    <td>12.12.2023</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>John due</td>
                                    <td>100</td>
                                    <td>12.12.2023</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTeam;