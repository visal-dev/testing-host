import Navbar from '@/components/navbar'
import PaymentOrder from '@/app/[locale]/shop/_components/payment-order'
import MobileOrder from '@/app/[locale]/shop/_components/mobile-order'
import FullScreen from '@/providers/FullScreen'
import React from 'react'
import Products from '@/app/[locale]/shop/_components/products'

const ShopPage = () => {
    return (
        <FullScreen>
            <div className='flex h-full w-full overflow-hidden'>
                <main className='bg-slate-100 w-full h-full md:w-[calc(100%-450px)] xl:w-[calc(100%-500px)]' >
                    <Navbar />
                    <Products />
                    <MobileOrder />
                </main >
                <aside className='bg-white fixed right-0 h-full text-black hidden md:block md:w-[450px] xl:w-[500px]'>
                    <PaymentOrder />
                </aside>
            </div >
        </FullScreen>
    )
}

export default ShopPage