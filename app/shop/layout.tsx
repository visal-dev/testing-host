import Navbar from '@/components/navbar';
import PaymentOrder from '@/components/payment-order';
import FullScreen from '@/providers/FullScreen';
import React from 'react'

const PosLayout = ({
    children
}: {
    children: React.ReactNode
}) => {


    return (
        <FullScreen>
            <div className='flex h-full w-full'>
                <main className='bg-slate-100 w-full md:w-[calc(100%-400px)] xl:w-[calc(100%-500px)]' >
                    <Navbar />
                    {children}
                </main >
                <aside className='bg-white fixed right-0 h-full text-black hidden md:block md:w-[400px] xl:w-[500px]'>
                    <PaymentOrder />
                </aside>
            </div >
        </FullScreen>

    )
}

export default PosLayout