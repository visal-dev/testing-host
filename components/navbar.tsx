'use client'
import { Airplay, ArrowLeftToLine, Menu as MenuIcon, Search, Wifi, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleFullScreen } from '@/redux/fullScreenSlice';
import UserProfile from '@/app/[locale]/shop/_components/user-profile'
import LocaleSwitcher from '@/app/[locale]/shop/_components/locale-switcher'
import { Sidebar } from '@/app/[locale]/shop/_components/sidebar'
import SettingModal from '@/app/[locale]/shop/_components/setting-modal'
import { useLocale, useTranslations } from 'next-intl'

const username = 'chivanvisal'

const Navbar = () => {

    const dispatch = useDispatch();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isOnline, setIsOnline] = useState(true);

    const t = useTranslations('Navbar');


    const localActive = useLocale()


    const handleOutsideClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsProfileOpen(false);
        }
    };

    const handleToggleFullScreen = () => {
        dispatch(toggleFullScreen());
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        const handleOnlineStatusChange = () => {
            setIsOnline(navigator.onLine);
        };

        // Initial check
        handleOnlineStatusChange();

        // Add event listeners for online/offline status changes
        window.addEventListener('online', handleOnlineStatusChange);
        window.addEventListener('offline', handleOnlineStatusChange);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            window.removeEventListener('online', handleOnlineStatusChange);
            window.removeEventListener('offline', handleOnlineStatusChange);
        };
    }, []);


    return (
        <nav className='h-14 w-full gap-4 bg-[#061829] text-white top-0 z-50 fixed md:static  flex items-center px-4'>
            <Sidebar />
            <form className='md:flex-1 w-full'>
                <div className='flex w-full items-center border-white/25 gap-2 border px-2 py-1.5 rounded-md'>
                    <Search className='text-slate-300 ' size={20} />
                    <input
                        className='bg-transparent w-full flex-1 placeholder:text-sm outline-none'
                        type="text"
                        placeholder={t('searchPlaceholder')} />
                </div>
            </form>

            <div className='flex items-center gap-3'>
                <Link href={`/${localActive}/shop/chivanvisal/due-screen`} target='_blank'>
                    <Airplay />
                </Link>
                <Wifi className={isOnline ? 'text-green-600' : 'text-red-600 animate-pulse'} />
                <UserProfile />
                <button onClick={handleToggleFullScreen} className='text-white/60' type="button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-fullscreen"
                    >
                        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                        <rect width="10" height="8" x="7" y="8" rx="1" />
                    </svg>
                </button>

                <SettingModal />
            </div>
        </nav>
    )
}

export default Navbar