'use client'
import { Airplay, ArrowLeftToLine, Menu as MenuIcon, Search, Wifi, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleFullScreen } from '@/redux/fullScreenSlice';
import UserProfile from '@/app/shop/_components/user-profile'

const username = 'chivanvisal'

const Navbar = () => {

    const dispatch = useDispatch();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isOnline, setIsOnline] = useState(true);

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
        <nav className='h-14 w-full gap-4 bg-[#061829] text-white  flex items-center px-4'>
            <div className='hover:scale-105 transition-all cursor-pointer'>
                <MenuIcon onClick={() => setIsDrawerOpen(true)} />
            </div>
            <>
                <div onClick={() => setIsDrawerOpen(!isDrawerOpen)} className={isDrawerOpen ? 'fixed w-full h-full bg-black/50 top-0 left-0 transition-all duration-300 z-50' : 'hidden transition-all duration-300'} />
                <div className={isDrawerOpen ? 'fixed bg-[#061829] z-50 w-[270px] left-0 top-0 h-full transition-all duration-200' : 'fixed bg-[#061829] w-[270px] -left-[100%] top-0 h-full transition-all duration-200'}>
                    <div className='flex items-center justify-between px-2 py-1'>
                        <Image src={'/images/logo-2.png'} width={60} height={50} alt='logo' />
                        <div className='hover:scale-105 transition-all cursor-pointer text-gray-400 hover:text-white'>
                            <ArrowLeftToLine onClick={() => setIsDrawerOpen(false)} size={20} className='' />
                        </div>
                    </div>
                    <ul className="space-y-1.5">
                        <h1 className="text-sm font-semibold text-gray-500 pl-3 py-2">
                            General
                        </h1>
                        <Link href={""} className="flex items-center gap-x-3.5 py-2 px-6 text-sm text-white/80 hover:bg-[#153153] ">
                            <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            Dashboard
                        </Link>
                        <Link href="" className="flex items-center gap-x-3.5 py-2 px-6 text-sm text-white/80 hover:bg-[#153153] ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-user-cog"
                            >
                                <circle cx="18" cy="15" r="3" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                                <path d="m21.7 16.4-.9-.3" />
                                <path d="m15.2 13.9-.9-.3" />
                                <path d="m16.6 18.7.3-.9" />
                                <path d="m19.1 12.2.3-.9" />
                                <path d="m19.6 18.7-.4-1" />
                                <path d="m16.8 12.3-.4-1" />
                                <path d="m14.3 16.6 1-.4" />
                                <path d="m20.7 13.8 1-.4" />
                            </svg>
                            Users
                        </Link>

                        <h1 className="text-sm font-semibold text-gray-500 pl-3 py-2">
                            System
                        </h1>

                        <Link href="" className="flex items-center bg-[#153153] gap-x-3.5 py-2 px-6 text-sm text-white/80 hover:bg-[#153153] ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-users"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            Customers
                        </Link>

                        <Link href="" className="flex items-center gap-x-3.5 py-2 px-6 text-sm text-white/80 hover:bg-[#153153] ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-boxes"
                            >
                                <path
                                    d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"
                                />
                                <path d="m7 16.5-4.74-2.85" />
                                <path d="m7 16.5 5-3" />
                                <path d="M7 16.5v5.17" />
                                <path
                                    d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"
                                />
                                <path d="m17 16.5-5-3" />
                                <path d="m17 16.5 4.74-2.85" />
                                <path d="M17 16.5v5.17" />
                                <path
                                    d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"
                                />
                                <path d="M12 8 7.26 5.15" />
                                <path d="m12 8 4.74-2.85" />
                                <path d="M12 13.5V8" />
                            </svg>
                            Items
                        </Link>

                        <Link href="" className="flex items-center gap-x-3.5 py-2 px-6 text-sm text-white/80 hover:bg-[#153153] ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-tag"
                            >
                                <path
                                    d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"
                                />
                                <path d="M7 7h.01" />
                            </svg>
                            Category
                        </Link>

                        <Link href="" className="flex items-center gap-x-3.5 py-2 px-6 text-sm text-white/80 hover:bg-[#153153] ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-file-line-chart"
                            >
                                <path
                                    d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                                />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                <path d="m16 13-3.5 3.5-2-2L8 17" />
                            </svg>
                            Reports
                        </Link>

                        <h1 className="text-sm font-semibold text-gray-500 pl-3 py-2">
                            Settings
                        </h1>

                        <Link href="" className="flex items-center gap-x-3.5 py-2 px-6 text-sm text-white/80 hover:bg-[#153153] ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-settings"
                            >
                                <path
                                    d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                                />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            Settings
                        </Link>
                    </ul>
                </div>
            </>
            <form className='md:flex-1 w-full'>
                <div className='flex w-full items-center border-white/25 gap-2 border px-2 py-1.5 rounded-md'>
                    <Search className='text-slate-300 ' size={20} />
                    <input
                        className='bg-transparent w-full flex-1 placeholder:text-sm outline-none'
                        type="text"
                        placeholder='Search Product and Barcode...' />
                </div>
            </form>

            <div className='flex items-center gap-3'>
                <Link href={'/shop/chivanvisal'} target='_parent'>
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
            </div>
        </nav>
    )
}

export default Navbar