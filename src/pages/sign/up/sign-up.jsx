import React from 'react';
import cls from "../sign.module.scss";
import MyInput from "../input/my-input";
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className={cls.sign}>
            <div className="container">
                <h2 className={cls.title}>Welcome to Robot coin exchange</h2>
                <form className={cls.form}>
                    <MyInput title={'Ism familiya'} type={'text'} />
                    <MyInput title={'Telefon raqam'} type={'number'} />
                    <MyInput title={'Password'} type={'password'} />
                    <MyInput title={'Confirm password'} type={'password'} />
                    <MyInput title={'Referal code'} type={'text'} />
                    <button className={cls.btn}>Hisob yaratish</button>
                </form>
                <p className={cls.link}>Sizda hisob bormi ? <Link to='/sign-in'>Hisobga kirish</Link></p>
            </div>
        </div>
    );
};

export default SignUp;
