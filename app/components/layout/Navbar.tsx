"use client"
import { useTranslation } from 'react-i18next'

const Navbar = () => {

  const { t } = useTranslation();
  return (
    <nav className='flex justify-between items-center sticky top-0 shadow-md h-16 bg-[rgb(8,81,156)] text-[rgb(236,231,242)]'>
        <div className='flex justify-evenly h-full'>
            <div className='flex justify-center items-center px-3 h-ful hover:bg-white/4 active:bg-white/8 duration-500'><img src="Logo" alt="Logo" /></div>
            <button className='hover:shadow-md px-7 h-full hover:bg-white/4 active:bg-white/8 duration-500'>{t('feed')}</button>
            <button className='hover:shadow-md px-7 h-full hover:bg-white/4 active:bg-white/8 duration-500'>{t('profile')}</button>
        </div>
        <div className='h-full'>
            <button className='hover:shadow-md px-7 h-full hover:bg-white/4 active:bg-white/8 duration-500'>{t('logout')}</button>
        </div>
    </nav>
  )
}

export default Navbar