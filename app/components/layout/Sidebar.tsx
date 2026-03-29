"use client";

import Link from "next/link";
import React from 'react'
import { useTranslation } from "react-i18next";

const Sidebar = () => { 
    const { t } = useTranslation();
    return (
        <aside className="
            sticky 
            top-22 
            h-[calc(100vh-88px)] 
            w-36 
            flex flex-col 
            justify-start 
            items-center 
            shadow-md 
            bg-primary 
            text-text-primary
        ">
            <button className='hover:shadow-md py-3 w-full hover:bg-primary-dark active:bg-primary-light duration-400 cursor-pointer'>{t('feed')}</button>
            <button className='hover:shadow-md py-3 w-full hover:bg-primary-dark active:bg-primary-light duration-400 cursor-pointer'>{t('profile')}</button>
            <button className='hover:shadow-md py-3 w-full hover:bg-primary-dark active:bg-primary-light duration-400 cursor-pointer'>{t('logout')}</button>
        </aside>
    )
}

export default Sidebar
