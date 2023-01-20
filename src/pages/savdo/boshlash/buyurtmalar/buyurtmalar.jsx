import React, {useState} from 'react';
import cls from './buyurtmalar.module.scss'
import Head from "../../../../components/UI/page-head/head";

const Buyurtmalar = () => {

    const [activeList, setActiveList] = useState(1)

    return (
        <div className={cls.buyurtma}>
            <div className='container' style={{padding: '0'}}>
                <div>
                    <Head link={'/savdo/boshlash'} title={'Tasdiqlangan va bekor qilingan buyurtmalar'} />
                    <div className={cls.body}>
                        <div className='row evenly align-center' style={{margin: '1rem 0 2rem 0', flexFlow: 'nowrap'}}>
                            <button
                                className={cls.body__txt}
                                style={{color: activeList === 1 ? '#007074' : '#111'}}
                                onClick={() => setActiveList(1)}
                            >
                                Bekor qilingan buyurtmalar
                            </button>
                            <button className={cls.body__txt}
                                  style={{color: activeList === 2 ? '#007074' : '', marginBottom: '0'}}
                                  onClick={() => setActiveList(2)}
                            >
                                Tasdiqlangan buyurtmalar
                            </button>
                        </div>
                        <ul>
                            <li className={cls.item}>
                                <span className={cls.item__title}>Buyurtma raqami : <span>{'982398374928374289374289347'}</span></span>
                                <p style={{color: activeList === 1 ? '#FFC700' : '#24FF00'}}>
                                    {
                                        activeList === 1 ? 'Bekor qilingan va ko’rib chiqilayotgan buyurtama' : 'Buyurtma tasdiqlangan'
                                    }
                                </p>
                                <div className="row between">
                                    <span>Sotilgan miqdor :</span>
                                    <span>{ '50' }</span>
                                </div>
                                <div className="row between">
                                    <span>Sotilgan miqdor (so’m) :</span>
                                    <span>{ '590000' }</span>
                                </div>
                                <div className="row between">
                                    <span>Karta raqami :</span>
                                    <span>{ '9860 ******* 0110' }</span>
                                </div>
                                <div className="row between" style={{marginBottom: '0'}}>
                                    <span>Yaratilgan vaqt :</span>
                                    <span>{ '20.10.2023' }</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buyurtmalar;
