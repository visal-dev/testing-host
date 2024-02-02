import Navbar from '@/components/navbar';
import PaymentOrder from '@/components/payment-order';
import FullScreen from '@/providers/FullScreen';
import { ScanBarcode, ShoppingCart } from 'lucide-react';
import React from 'react'

const PosLayout = ({
    children
}: {
    children: React.ReactNode
}) => {


    return (
        <FullScreen>
            <div className='flex h-full w-full'>
                <main className='bg-slate-100 w-full md:w-[calc(100%-450px)] xl:w-[calc(100%-500px)]' >
                    <Navbar />
                    {children}
                    <div className='fixed md:hidden bottom-0 w-full px-4 py-3 flex items-center gap-3'>
                        <div className='bg-[#061829] text-white px-6 rounded-full py-3 flex items-center justify-between w-full'>
                            <div className='flex items-center gap-2'>
                                <ShoppingCart />
                                <h1>4 items</h1>
                            </div>
                            <h1>$40.00</h1>
                        </div>
                        <div className='bg-[#061829] text-white rounded-full p-3'>
                            <ScanBarcode />
                        </div>
                    </div>
                </main >
                <aside className='bg-white fixed right-0 h-full text-black hidden md:block md:w-[450px] xl:w-[500px]'>
                    <PaymentOrder />
                </aside>
            </div >
        </FullScreen>

    )
}

export default PosLayout