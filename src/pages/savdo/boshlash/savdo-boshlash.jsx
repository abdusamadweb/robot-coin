import React, {useState} from 'react';
import cls from '../savdo.module.scss'
import {DocsIcon} from "../../../assets/icons";
import {Link} from "react-router-dom";

const SavdoBoshlash = () => {

    const [cancel, setCancel] = useState(false)

    const cancelTrade = () => {


        setCancel(false)
    }
    const confirmTrade = () => {

    }

    return (
        <div className={cls.savdo}>
            <div className="container" style={{padding: '0'}}>
                <div className={cls.inner}>
                    <Link className={cls.inner__docs} to='/savdo/boshlash/arxiv'>
                        <DocsIcon />
                    </Link>
                    <div>
                        <h2 className={cls.title}>1 USDT = {'11800'} so’m</h2>
                        <button className={cls.btn}>SAVDO DAVOM ETMOQDA . . .</button>
                    </div>
                </div>
                <div className={cls.wrapper}>
                    <div style={{marginBottom: '2rem'}}>
                        <div className='row between align-center'>
                            <span className={cls.wrapper__title}>Sotilmoqda . . .</span>
                            <button className={cls.wrapper__btn}>Tugatish</button>
                        </div>
                        <div className={cls.content}>
                            <div className="row between">
                                <span>Umumiy miqdor :</span>
                                <span>{ '100' }</span>
                            </div>
                            <div className="row between">
                                <span>Tolov karta raqami :</span>
                                <span>{ '9860 0000 0000 0110' }</span>
                            </div>
                            <div className="row between">
                                <span>Amaldagi buyurtma miqdori :</span>
                                <span>{ '50' }</span>
                            </div>
                            <div className="row between">
                                <span>Tugallangan buyurtma miqdori :</span>
                                <span>{ '0' }</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className={cls.wrapper__title}>Buyurtma bajarilmoqda . . .</p>
                        <div className={cls.content}>
                            <div className="row between">
                                <span>Buyurtma holati :</span>
                                <span>{ 'To’lanmagan' }</span>
                            </div>
                            <div className="row between">
                                <span>Buyurtma raqami : </span>
                                <span className={cls.content__id}>{ '893492736498723648392649283' }</span>
                            </div>
                            <div className="row between">
                                <span>Usdt miqdori :</span>
                                <span>{ '50' }</span>
                            </div>
                            <div className="row between">
                                <span>Sotildi (so’m) :</span>
                                <span>{ '590000' }</span>
                            </div>
                            <div className="row between">
                                <span>Xaridorning ismi :</span>
                                <span>{ 'Ism familiya' }</span>
                            </div>
                            <div className="row between">
                                <span>Telefon raqami :</span>
                                <span>{ '+99899***8124' }</span>
                            </div>
                            <div className="row between">
                                <span>Karta raqami :</span>
                                <span>{ '9860 0000 0000 0110 ' }</span>
                            </div>
                            <div style={{textAlign: 'end'}}>
                                <button
                                    className={cls.content__btn_red}
                                    onClick={() => setCancel(true)}
                                >
                                    Buyurtmani bekor qilish
                                </button>
                                <button
                                    className={cls.content__btn}
                                    onClick={confirmTrade}
                                >
                                    Buyurtmani tasdiqlash
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    cancel &&
                    <div className={cls.modal}>
                        <div className="container" style={{padding: '0'}}>
                            <div className={cls.modal__content}>
                                <textarea className={cls.modal__inp} placeholder='Bekor qilish sababini kiriting...'/>
                                <div className="row between">
                                    <button
                                        className={cls.modal__btn}
                                        style={{background: '#fff', color: '#111'}}
                                    >
                                        Rasm yuklash
                                    </button>
                                    <button
                                        className={cls.modal__btn}
                                        onClick={cancelTrade}
                                    >
                                        Bekor qilish
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default SavdoBoshlash;
