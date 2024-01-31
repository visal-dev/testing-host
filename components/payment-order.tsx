'use client'
import React, { useEffect, useState } from 'react'
import PaymentHeader from './payment-header'
import { useSelector, useDispatch } from 'react-redux';
import {
    selectProduct,
    removeFromCart,
    clearCart,
    calculateTotalUSD,
    calculateTotalKhmerRiels,
    decreaseQuantity,
    increaseQuantity,
} from '@/redux/productSlice'
import { CircleDollarSign, Minus, Package, Plus, Trash } from 'lucide-react';
import Image from 'next/image';
import PayModal from './pay-modal';



const PaymentOrder = () => {

    const dispatch = useDispatch();
    const { cart, subtotal, totalUSD, totalKhmerRiels, formattedTotalKhmerRiels } = useSelector(selectProduct);

    const [isPayOpen, setIsPayOpen] = useState(false)


    const openModal = () => {
        setIsPayOpen(true);
    };

    const closeModal = () => {
        setIsPayOpen(false);
    };


    useEffect(() => {
        dispatch(calculateTotalUSD());
        dispatch(calculateTotalKhmerRiels());
    }, [dispatch, cart]);

    const handleRemoveFromCart = (productId: number) => {
        dispatch(removeFromCart(productId));
        dispatch(calculateTotalUSD());
        dispatch(calculateTotalKhmerRiels());
    };

    const handleClearCart = () => {
        dispatch(clearCart());
        dispatch(calculateTotalUSD());
        dispatch(calculateTotalKhmerRiels());
    };

    const handleIncreaseQuantity = (productId: number) => {
        dispatch(increaseQuantity(productId));
    };

    const handleDecreaseQuantity = (productId: number) => {
        dispatch(decreaseQuantity(productId));
    };

    return (
        <div className='w-full h-full'>
            <PaymentHeader />
            <div
                className="text-black/65 border w-full flex items-center h-14"
            >
                <div
                    className="grid items-center font-semibold text-xs text-center w-full grid-cols-5"
                >
                    <p>Name</p>
                    <p>Total Price</p>
                    <p>Qty</p>
                    <p>Discount</p>
                    <p>Actions</p>
                </div>
            </div>
            <div className="flex h-[calc(100vh-108px)] flex-col justify-between">
                <div className="h-[calc(100%-50%)] overflow-y-auto px-3 scrollbar-hide">
                    <div className="h-full space-y-1 py-2">
                        {cart.length === 0 ? <div className='w-full h-full flex  flex-col items-center justify-center'>
                            <Package size={40} className='text-gray-400' />
                            <p>No items</p>
                        </div>
                            : <>
                                {
                                    cart.map(item => (
                                        <div
                                            className="grid grid-cols-5 border-slate-400 bg-slate-100 text-black items-center text-center gap-1 rounded border px-2 py-2"
                                            key={item.product.product_id}
                                        >
                                            <h1 className="font-semibold text-sm line-clamp-1">{item.product.product_name}</h1>
                                            <p className="text-sm font-medium">${item.product.price}</p>
                                            <div className="flex items-center gap-1">
                                                <button
                                                    onClick={() => handleDecreaseQuantity(item.product.product_id)}
                                                    className="text-gray-900 gap-2 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-1 py-1 text-center inline-flex items-center"
                                                >
                                                    <Minus size={18} />
                                                </button>
                                                <input
                                                    type="text"
                                                    className="h-auto w-8 p-1 border-none text-black bg-transparent text-center outline-none"
                                                    value={item.quantity}
                                                />
                                                <button
                                                    onClick={() => handleIncreaseQuantity(item.product.product_id)}
                                                    className="text-gray-900 gap-2 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-1 py-1 text-center inline-flex items-center "
                                                >
                                                    <Plus size={18} />
                                                </button>
                                            </div>
                                            <div className="flex justify-center pl-4 items-center rounded-md">
                                                <input
                                                    type="text"
                                                    className="w-16 h-8 outline-none border bg-slate-50 px-2 rounded-md"
                                                    name="discount"
                                                    id="discount"
                                                />
                                            </div>
                                            <div className="flex justify-end">
                                                <button
                                                    onClick={() => handleRemoveFromCart(item.product.product_id)}
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
                </div>
                <div
                    className="flex h-[55%] border-t w-full flex-col justify-between px-4 py-2"
                >
                    <div className="w-full text-black py-6">
                        <div className="flex items-center justify-between">
                            <h1>Subtotal</h1>
                            <h2>${subtotal}</h2>
                        </div>
                        <div className="flex items-center justify-between">
                            <h1>Discount</h1>
                            <form className="flex w-fit gap-2 items-center rounded-md">
                                <CircleDollarSign size={18} />
                                <input
                                    type="text"
                                    placeholder="Discount amount"
                                    className="w-fit border h-9 rounded-md bg-transparent outline-none placeholder:text-sm"
                                    name="discount"
                                    id="discount"
                                />
                            </form>
                            <h2>-$0.00</h2>
                        </div>
                        <div className="flex items-center justify-between">
                            <h1>Tax</h1>
                            <h2>$0.00</h2>
                        </div>
                        <div>
                            <div className="flex items-center justify-between font-semibold">
                                <h1>Total USD</h1>
                                <h2>${totalUSD}</h2>
                            </div>
                            <div className="flex items-center justify-between font-semibold">
                                <h1>Total Khmer</h1>
                                <h2>{formattedTotalKhmerRiels}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <button
                            onClick={openModal}
                            className="text-white w-full py-4 bg-green-700 hover:bg-green-800 active:scale-105 transition-all font-medium rounded-md text-sm px-5 text-center"
                            type="button"
                        >
                            Pay ($40.00)
                        </button>
                        <PayModal isOpen={isPayOpen} onClose={closeModal} />


                        <div className="flex items-center gap-2">
                            <button
                                className="text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-md text-sm px-5 py-4 text-center dark:focus:ring-yellow-900 w-[50%]"
                                type="button"
                            >
                                Hold Order
                            </button>

                            <div
                                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                            >
                                <div className="relative p-4 w-full max-w-md max-h-full">
                                    <div
                                        className="relative bg-white rounded-lg shadow dark:bg-gray-700"
                                    >
                                        <div
                                            className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
                                        >
                                            <h3
                                                className="text-xl font-semibold text-gray-900 dark:text-white"
                                            >
                                                Create Hold
                                            </h3>
                                            <button
                                                type="button"
                                                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                data-modal-hide="hold-order-modal"
                                            >

                                                <span className="sr-only">Close modal</span>
                                            </button>
                                        </div>
                                        <div className="p-4 md:p-5">
                                            <form className="space-y-4" action="#">
                                                <div>
                                                    <label
                                                        htmlFor="title"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >Title</label>
                                                    <input
                                                        type="text"
                                                        name="title"
                                                        id="title"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                        placeholder="Table-1"
                                                        required
                                                    />
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="w-full flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                >

                                                    Create Hold
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleClearCart}
                                className="w-[50%] focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                type="button"
                            >
                                Reset Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentOrder