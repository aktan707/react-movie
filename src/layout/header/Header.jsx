import React, {useState} from 'react';
import {NavLink} from "react-router";
import {logo, userIcon} from "../../assets/index.js";

const Header = () => {
    const [language , setLanguage] = useState("EN");

    const changeLanguage = () => {
        setLanguage((prevLang) => {
            if (prevLang === "EN") {
                return "RU";
            }else if (prevLang === "RU") {
                return "KG";
            }else {
                return "EN";
            }
        });
    }
    return (
        <div className={'flex justify-center'}>
            <div className={'px-[48px] fixed w-[1400px] mx-auto top-0 pt-[36px] bg-transparent flex text-white justify-between'}>
                <div className={'flex items-center gap-[70px]'}>
                    <img src={logo} alt="logo"/>
                    <NavLink to={"/"}> Главная</NavLink>
                </div>
                <div className={'flex items-center gap-[70px]'}>
                    <p onClick={changeLanguage}>{language}</p>
                    <p>
                        <img src={userIcon} alt=""/>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
