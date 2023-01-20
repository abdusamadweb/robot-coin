import React, {useState} from 'react';
import cls from './savdo.module.scss'
import {Link} from "react-router-dom";

const Savdo = () => {

    const [start, setStart] = useState(false)

    return (
        <div className={cls.savdo}>
            <div className="container" style={{padding: '0'}}>
                <div className={cls.inner}>
                    {
                        !start &&
                        <div>
                            <h2 className={cls.title}>1 USDT = {'11800'} so’m</h2>
                            <button className={cls.btn} onClick={() => setStart(true)}>SAVDONI BOSHLASH</button>
                        </div>
                    }
                    {
                        start &&
                        <div className={cls.wrapper}>
                            <button className={cls.wrapper__navigate} onClick={() => setStart(false)}>
                                <i className="fa-solid fa-chevron-left"/>
                            </button>
                            <div>
                                <div>
                                    <input className={cls.wrapper__inp} type="number" placeholder='Usdt miqdori'/>
                                    <span className={cls.wrapper__txt}>Mavjud: {'100'} USDT</span>
                                </div>
                                <div className={cls.wrapper__sel}>
                                    <i className="fa-solid fa-play"/>
                                    <select className={cls.wrapper__select}>
                                        <option value="">9860 0000 0000 0101 - Humo card</option>
                                        <option value="">9860 0000 0000 0101 - UZ card</option>
                                    </select>
                                </div>
                                <Link className={cls.wrapper__link} to='/savdo/boshlash'>SAVDONI BOSHLASH</Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Savdo;
