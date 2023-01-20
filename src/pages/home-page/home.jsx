import React from 'react';
import cls from './home.module.scss'
import {TgIcon} from "../../assets/icons";

const Home = () => {
    return (
        <div className={cls.home}>
            <div className="container">
                <div>
                    <a className={cls.link} href="#">
                        <span>Robot coin exchange</span>
                        <TgIcon />
                    </a>
                    <div className={cls.slider}>
                        <button className={cls.arrow1}>
                            <i className="fa-solid fa-chevron-left"/>
                        </button>
                        <button className={cls.arrow2}>
                            <i className="fa-solid fa-chevron-right"/>
                        </button>
                    </div>
                    <div>
                        <p className={cls.desc}>Dunyodagi birinchi Stablecoin Tether tokeni</p>
                        <p className={cls.desc}>Teter tokenlari raqamli tokenlar sohasida kontseptsiyani yaratgan eng keng tarqalgan stabilkoinlardir. An'anaviy moliyaviy tizimni buzgan va an'anaviy valyutalardan raqamli foydalanishga kashshof bo'lgan Tether Tokens blokcheyn sohasida o'sib borayotgan biznes va innovatsiyalarni qo'llab-quvvatlaydi va kuchaytiradi. Tether tokenlari bir nechta blokcheynlarga asoslangan raqamli tokenlar sifatida mavjud.
                            Teter tokenlari birinchi, eng ko'p ishlatiladigan stabilkoin va hajmi bo'yicha eng ko'p sotiladigan tokenlardan biri bo'lish uchun uzoq yo'lni bosib o'tdi. Teter tokenlari bugungi kunda yirik birjalar, birjadan tashqari jadvallar va hamyonlarda eng ko'p qabul qilingan stabilkoinlardir.
                        </p>
                        <p className={cls.desc}>Peer-to-peer (P2P) xizmati - bu markazlashtirilmagan platforma bo'lib, unda ikki kishi uchinchi tomon vositachisisiz bir-biri bilan to'g'ridan-to'g'ri muloqot qiladi. Buning o'rniga, xaridor va sotuvchi P2P xizmati orqali bir-biri bilan to'g'ridan-to'g'ri bitim tuzadilar. P2P platformasi qidiruv, skrining, reyting, to'lovni qayta ishlash yoki eskrow kabi xizmatlarni taqdim etishi mumkin.</p>
                        <p className={cls.desc}>Peer-to-peer xizmati uchinchi tomon vositachisisiz bitim taraflarini bevosita bog'laydigan platformadir.
                            Peer-to-peer xizmatlari ishonchli uchinchi tomonlar yordamida an'anaviy tarzda hal qilinadigan ishonch, majburiyat va axborot nosimmetrikligi bilan bog'liq tranzaksiya xarajatlarini bartaraf etish uchun texnologiyadan foydalanadi.
                            Peer-to-peer platformalari o'z foydalanuvchilariga to'lovlarni qayta ishlash, xaridor va sotuvchi haqida ma'lumot va sifat kafolati kabi xizmatlarni taklif qiladi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
