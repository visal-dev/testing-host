'use client'
import Navbar from '@/components/navbar';
import PaymentOrder from '@/components/payment-order';
import { Metadata } from 'next';
import React from 'react'

import { useSelector } from 'react-redux';
import { selectIsFullScreen } from '@/redux/fullScreenSlice';



const PosLayout = ({
    children
}: {
    children: React.ReactNode
}) => {

    const isFullScreen = useSelector(selectIsFullScreen);

    return (
        // <FullScreen>
        <div className={`flex h-full w-full ${isFullScreen ? 'full-screen' : ''}`}>
            <main className='bg-slate-100 w-full md:w-[calc(100%-400px)] xl:w-[calc(100%-500px)]'>
                <Navbar />
                {children}
            </main>
            <aside className='bg-white fixed right-0 h-full text-black hidden md:block md:w-[400px] xl:w-[500px]'>
                <PaymentOrder />
            </aside>
        </div>
        // </FullScreen>

    )
}

export default PosLayout