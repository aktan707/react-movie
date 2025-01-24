import React from 'react';
import {call, phone, tg} from "../../assets/index.js";

const Footer = () => {
    return (
        <div className={'container px-[265px] mx-auto h-[288px] bg-[#1A1A1A]'}>
            <div className={''}>
                <div className={'flex justify-between'}>
                    <div className={'py-[48px]'}>
                        <h1 className={'text-[16px] leading-[20px] font-medium text-white mb-[10px]'}>Cinemax</h1>
                        <div className={'w-[99px] h-[180px] text-white text-[16px] leading-[]'}>
                            <p className={'mb-[15px]'}>О нас </p>
                            <p className={'mb-[15px]'}>Блог</p>
                            <p className={'mb-[15px]'}>Вакансии</p>
                            <p>Акции</p>
                        </div>
                    </div>
                    <div className={'py-[48px]'}>
                        <h1 className={'text-[16px] leading-[20px] font-medium text-white mb-[10px]'}>Помощь</h1>
                        <div className={'h-[180px] text-white text-[16px] leading-[]'}>
                            <p className={'mb-[15px]'}>Вопросы и ответы </p>
                            <p className={'mb-[15px]'}>Контакты</p>
                        </div>
                    </div>
                    <div className={'py-[48px]'}>
                        <h1 className={'text-[16px] leading-[20px] font-medium text-white mb-[10px]'}>Поддержка</h1>
                        <div className={' h-[180px] text-white text-[16px] leading-[]'}>
                            <p className={'mb-[15px] text-[16px] leading-[28px] font-normal w-[250px]'}>Мы всегда готовы вам помочь.
                                Наши операторы онлайн 24/7 </p>
                            <div className={'flex gap-[20px] mb-[20px]'}>
                                <img src={phone} alt=""/>
                                <img src={call} alt=""/>
                                <img src={tg} alt=""/>
                            </div>
                            <button className={'w-[142px] h-[33px] rounded-[36px] bg-[#EF4234] text-[white]'}>Написать в чате</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
