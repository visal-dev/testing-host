import { Button } from '@/components/ui/button'
import React from 'react'

const receipts = [
    {
        id: 1,
        product: 'Coca',
        qty: 3,
        price: 2.00,
    },
    {
        id: 2,
        product: 'Chicken',
        qty: 2,
        price: 8.00,
    },
    {
        id: 3,
        product: 'Spy',
        qty: 2,
        price: 5.00,
    }
]
const Receipt = () => {
    return (
        <div className='w-full h-full justify-center flex items-center'>
            <div className='w-[280px]'>
                <div className='flex bg-[#061829] text-white px-7 py-4 flex-col items-center justify-center'>
                    <img width={100} src="/images/logo.png" alt="" />
                    <p className='text-center text-xs'>Phnom Penh City Center, City Blvd, Sangkat Sras Chork, khan Doun Penh, Phnom Penh</p>
                    <p className='text-xs font-semibold'>TIN : K003-901904770</p>
                </div>
                <div className='flex items-center flex-col w-full'>
                    <h1 className='text-2xl font-bold py-5'>$20.00</h1>
                    <div className='w-full'>
                        <div className='flex items-center justify-between text-xs font-medium'>
                            <h1>Tel: 09875757565</h1>
                            <p>Reference NO. 12</p>
                        </div>
                        <div className='flex items-center justify-between text-xs font-medium'>
                            <h1>Seller: Visal</h1>
                            <p>Date: 2024-02-07</p>
                        </div>
                        <div className='flex items-center justify-between text-xs font-medium'>
                            <h1>EXR: $1 = ៛4100</h1>
                            <p>Time: 10:39:26</p>
                        </div>
                    </div>
                </div>
                <div className='w-full pt-2'>
                    <div className='w-full h-10 grid grid-cols-5 items-center bg-[#061829] text-white px-2'>
                        <div className='text-xs text-start'>
                            <p>ល.រ</p>
                            <p>#</p>
                        </div>
                        <div className='text-xs text-start'>
                            <p>ទំនិញ</p>
                            <p>Item</p>
                        </div>
                        <div className='text-xs'>
                            <p>ចំនួន</p>
                            <p>Qty</p>
                        </div>
                        <div className='text-xs'>
                            <p>តម្លៃ</p>
                            <p>Price</p>
                        </div>
                        <div className='text-xs text-end'>
                            <p>សរុប</p>
                            <p>Total</p>
                        </div>
                    </div>
                    {
                        receipts.map((receipt) => (
                            <div key={receipt.id} className='w-full border-b rounded-b-xl px-2 h-10 grid grid-cols-5 items-center'>
                                <div className='text-xs text-start'>
                                    <p>{receipt.id}</p>
                                </div>
                                <div className='text-xs text-start'>
                                    <p>{receipt.product}</p>
                                </div>
                                <div className='text-xs'>
                                    <p>x {receipt.qty}</p>
                                </div>
                                <div className='text-xs'>
                                    <p>${receipt.price.toFixed(2)}</p>
                                </div>
                                <div className='text-xs text-end'>
                                    <p>${(receipt.price * receipt.qty).toFixed(2)}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='w-full pt-2 '>
                    <div className='flex items-center justify-between text-xs font-medium'>
                        <h1>Sub Total</h1>
                        <p>$30.00</p>
                    </div>
                    <div className='flex items-center justify-between text-xs font-medium'>
                        <h1>Discount ($)</h1>
                        <p>$0</p>
                    </div>
                    <div className='flex items-center justify-between text-xs font-medium'>
                        <h1>VAT (10)</h1>
                        <p>Time: 10:39:26</p>
                    </div>
                    <div className='flex font-bold items-center justify-between text-xs'>
                        <h1>Total (KHR)</h1>
                        <p>$120,000</p>
                    </div>
                    <div className='flex font-bold items-center justify-between text-xs'>
                        <h1>Total (USD)</h1>
                        <p>$30.00</p>
                    </div>
                </div>
                <div className='w-full pt-2 text-center text-xs'>
                    <p>Thank you so much!</p>
                    <p>WIFI: 9887ggg</p>
                    <p>Account ABA : 096544567890</p>
                    <p>Account Name: Visal</p>
                </div>
            </div>
        </div>
    )
}

export default Receipt