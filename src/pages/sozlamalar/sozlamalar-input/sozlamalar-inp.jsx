import React from 'react';
import cls from "../sozlamalar.module.scss";

const SozlamalarInp = ({ type, placeholder }) => {
    return (
        <label style={{display: 'block'}}>
            <input className={cls.inp} type={type} placeholder={placeholder}/>
        </label>
    )
}

export default SozlamalarInp;
