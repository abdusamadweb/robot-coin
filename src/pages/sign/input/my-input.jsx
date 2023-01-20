import React from 'react';
import cls from "../sign.module.scss";
import {HidePassword} from "../../../assets/icons";

const MyInput = ({ title, type }) => {

    return (
        <label className='relative-p'>
            <span className={cls.label}>{ title }</span>
            <input className={cls.inp} type={type}/>
            {
                type === 'password' &&
                <button className={cls.icon} type="button">
                    <HidePassword />
                </button>
            }
        </label>
    );
};

export default MyInput;
