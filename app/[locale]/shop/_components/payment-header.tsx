import { Minimize2 } from 'lucide-react'
import React from 'react'

import AddCustomer from '@/app/[locale]/shop/_components/add-customer'
import OpenHold from '@/app/[locale]/shop/_components/open-hold'
import SearchCustomer from '@/app/[locale]/shop/_components/search-customer'


const PaymentHeader = () => {



    return (
        <header className='h-14 bg-slate-700 px-3 w-full flex gap-2 items-center'>
            <div onClick={() => { }} className='md:hidden text-gray-900 whitespace-nowrap gap-2 bg-white hover:bg-gray-100 border border-gray-200 font-medium rounded text-sm  px-2 py-2 text-center inline-flex items-center cursor-pointer'>
                <Minimize2 size={20} />
            </div>
            <OpenHold />

            <SearchCustomer />

            <AddCustomer />

        </header >
    )
}

export default PaymentHeader