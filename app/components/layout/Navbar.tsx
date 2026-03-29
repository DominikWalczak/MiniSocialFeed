"use client"
import { useTranslation } from 'react-i18next'

const Navbar = () => {

  const { t } = useTranslation();
  return (
    <nav className='flex justify-between items-center sticky top-0 shadow-md h-22 bg-primary text-text-primary'>
        <div className='flex justify-evenly h-full'>
            <div className='flex justify-center items-center px-3 h-ful hover:bg-primary-dark active:bg-primary-light duration-400'>
              {/* <img src="Logo" alt="Logo" /> */}
            </div>
            <button className='hover:shadow-md px-7 h-full hover:bg-primary-dark active:bg-primary-light duration-400 cursor-pointer'>{t('feed')}</button>
            <button className='hover:shadow-md px-7 h-full hover:bg-primary-dark active:bg-primary-light duration-400 cursor-pointer'>{t('profile')}</button>
        </div>
        <div className='h-full'>
            <button className='hover:shadow-md px-7 h-full hover:bg-primary-dark active:bg-primary-light duration-400 cursor-pointer'>{t('logout')}</button>
        </div>
    </nav>
  )
}

export default Navbar