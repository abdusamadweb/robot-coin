import React from 'react';
import cls from "../sign.module.scss";
import MyInput from "../input/my-input";
import {Link} from "react-router-dom";

const SignIn = () => {
    return (
        <div className={cls.sign}>
            <div className="container">
                <div>
                    <h2 className={cls.title}>Login to Robot coin exchange</h2>
                    <form className={cls.form}>
                        <MyInput title={'Telefon raqam'} type={'number'} />
                        <MyInput title={'Password'} type={'password'} />
                        <button className={cls.btn}>Hisob yaratish</button>
                    </form>
                    <p className={cls.link}>Sizda hisob bormi ? <Link to='/sign-up'>Hisob yaratish</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
