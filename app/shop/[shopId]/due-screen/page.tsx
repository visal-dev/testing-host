'use client'
import { calculateTotalKhmerRiels, calculateTotalUSD, removeFromCart, selectProduct } from '@/redux/productSlice';
import { Package, Plus, Trash } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const DueScreen = () => {
    const dispatch = useDispatch();

    const { cart, subtotal, totalUSD, totalKhmerRiels, formattedTotalKhmerRiels } = useSelector(selectProduct);


    const handleRemoveFromCart = (productId: number) => {
        dispatch(removeFromCart(productId));
        dispatch(calculateTotalUSD());
        dispatch(calculateTotalKhmerRiels());
    };
    return (
        <div><div className="h-[calc(100%-50%)] overflow-y-auto px-3 scrollbar-hide">
            <div className="h-full space-y-1 py-2">
                {cart.length === 0 ? <div className='w-full h-full flex  flex-col items-center justify-center'>
                    <Package size={40} className='text-gray-400' />
                    <p>No items</p>
                </div>
                    : <>
                        {
                            cart.map(item => (
                                <div
                                    className="grid grid-cols-5 border-slate-400 bg-slate-100 text-black items-center text-center gap-2 rounded border px-2 py-2"
                                    key={item.product.product_id}
                                >
                                    <h1 className="font-semibold text-sm line-clamp-1">{item.product.product_name}</h1>
                                    <p className="text-sm font-medium">${item.product.price}</p>
                                    <div className="flex items-center gap-2">

                                        <input
                                            type="text"
                                            className="h-auto w-8 p-1 border-none text-black bg-transparent text-center outline-none"
                                            value={item.quantity}
                                        />

                                    </div>
                                    <div className="flex justify-end items-center gap-2 rounded-md">
                                        <input
                                            type="text"
                                            className="w-12 h-8 outline-none bg-transparent rounded-md"
                                            name="discount"
                                            id="discount"
                                        />
                                    </div>
                                    <div className="flex justify-end" onClick={() => handleRemoveFromCart(item.product.product_id)}>
                                        <button
                                            className="text-gray-900 gap-2 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-1 py-1 text-center inline-flex items-center "
                                        >
                                            <Trash size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                }
            </div>
        </div></div>
    )
}

export default DueScreen