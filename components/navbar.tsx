'use client'
import { Menu as MenuIcon, Search, Wifi } from 'lucide-react'
import Image from 'next/image'
import React, { Fragment, useEffect, useRef, useState } from 'react'


const Navbar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isOnline, setIsOnline] = useState(true);

    const handleOutsideClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsProfileOpen(false);
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
        <nav className='h-14 w-full bg-[#061829] text-white  flex items-center px-4 justify-between'>
            <div className='hover:scale-105 transition-all cursor-pointer'>
                <MenuIcon onClick={() => setIsDrawerOpen(true)} />
            </div>
            <>
                <div onClick={() => setIsDrawerOpen(!isDrawerOpen)} className={isDrawerOpen ? 'fixed w-full h-full bg-black/50 top-0 left-0 transition-all duration-300 z-50' : 'hidden transition-all duration-300'} />
                <div className={isDrawerOpen ? 'fixed bg-white z-50 w-[270px] left-0 top-0 h-full transition-all duration-200' : 'fixed bg-white w-[270px] -left-[50%] top-0 h-full transition-all duration-200'}>
                    drawer
                </div>
            </>
            <form>
                <div className='flex items-center gap-2 border px-2 py-1.5 rounded-md'>
                    <Search className='text-slate-300 ' size={20} />
                    <input
                        className='bg-transparent placeholder:text-sm outline-none'
                        type="text"
                        placeholder='Search Product and Barcode...' />
                </div>
            </form>

            <div className='flex items-center'>
                <Wifi className={isOnline ? 'text-green-600' : 'text-red-600 animate-pulse'} />
                <div className='relative' ref={dropdownRef}>
                    <div onClick={() => setIsProfileOpen(!isProfileOpen)} className='w-9 h-9 rounded-full relative cursor-pointer'>
                        <Image width={36} height={36} className='absolute w-full h-full rounded-full object-cover' src="/profile.jpg" alt="" />
                    </div>
                    <div className={isProfileOpen ? 'w-56 right-0 top-12 rounded-md transition-all duration-200 bg-[#061829] text-white h-48 absolute' : 'hidden'}>
                        <h1>chivanvisal</h1>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar