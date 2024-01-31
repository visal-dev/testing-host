'use client'
import React, { useEffect } from 'react'
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
import { Minus, Package, Plus, Trash } from 'lucide-react';
import Image from 'next/image';



const PaymentOrder = () => {

    const dispatch = useDispatch();
    const { cart, subtotal, totalUSD, totalKhmerRiels, formattedTotalKhmerRiels } = useSelector(selectProduct);

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
                    className="grid items-center font-semibold text-sm text-center w-full grid-cols-5"
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
                                            className="grid grid-cols-5 border-slate-400 bg-slate-100 text-black items-center text-center gap-2 rounded border px-2 py-2"
                                            key={item.product.product_id}
                                        >
                                            <h1 className="font-semibold text-sm line-clamp-1">{item.product.product_name}</h1>
                                            <p className="text-sm font-medium">${item.product.price}</p>
                                            <div className="flex items-center gap-2">
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
                    <div className="space-y-2">
                        <button
                            data-modal-target="default-modal"
                            data-modal-toggle="default-modal"
                            className="text-white w-full py-4 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            type="button"
                        >
                            Pay ($40.00)
                        </button>

                        <div
                            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                        >
                            <div className="relative p-4 w-full max-w-2xl max-h-full">
                                <div
                                    className="relative bg-white rounded-lg shadow dark:bg-gray-700"
                                >
                                    <div
                                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
                                    >
                                        <h3
                                            className="text-xl font-semibold text-gray-900 dark:text-white"
                                        >
                                            Terms of Service
                                        </h3>
                                        <button
                                            type="button"
                                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                            data-modal-hide="default-modal"
                                        >

                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <div className="p-4 md:p-5 space-y-4">
                                        <div
                                            className="modal-box flex flex-col items-center justify-center"
                                        >
                                            <div className="flex w-full flex-col text-center">
                                                <div
                                                    className="w-full rounded-md bg-[#061829] py-2 text-white"
                                                >
                                                    <h3 className="text-5xl font-bold">$40.00</h3>
                                                </div>
                                                <div className="rounded-md bg-slate-200 py-2">
                                                    <h3 className="text-xl font-bold">៛160,000.00</h3>
                                                </div>
                                            </div>
                                            <div className="w-full py-5">
                                                <form className="space-y-5">
                                                    <div className="flex">
                                                        <label htmlFor="" className="w-[30%] pt-2 font-semibold"
                                                        >Receive Dolla</label>
                                                        <div className="w-[70%] space-y-2">
                                                            <input
                                                                type="text"
                                                                className="w-full border p-2 outline-none"
                                                            />
                                                            <div className="grid grid-cols-4 gap-2">
                                                                <button
                                                                    className="w-full rounded-md border bg-slate-50 px-2 py-2"
                                                                >
                                                                    $5
                                                                </button>
                                                                <button
                                                                    className="w-full rounded-md border bg-slate-50 px-2 py-2"
                                                                >
                                                                    $10
                                                                </button>
                                                                <button
                                                                    className="w-full rounded-md border bg-slate-50 px-2 py-2"
                                                                >
                                                                    $20
                                                                </button>
                                                                <button
                                                                    className="w-full rounded-md border bg-slate-50 px-2 py-2"
                                                                >
                                                                    $50
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex">
                                                        <label htmlFor="" className="w-[30%] pt-2 font-semibold"
                                                        >Receive Khmer</label>
                                                        <div className="w-[70%] space-y-2">
                                                            <input
                                                                type="text"
                                                                className="w-full border p-2 outline-none"
                                                            />
                                                            <div className="grid grid-cols-4 gap-2">
                                                                <button
                                                                    className="w-full rounded-md border bg-slate-50 px-2 py-2"
                                                                >
                                                                    ៛10,000
                                                                </button>
                                                                <button
                                                                    className="w-full rounded-md border bg-slate-50 px-2 py-2"
                                                                >
                                                                    ៛20,000
                                                                </button>
                                                                <button
                                                                    className="w-full rounded-md border bg-slate-50 px-2 py-2"
                                                                >
                                                                    ៛50,000
                                                                </button>
                                                                <button
                                                                    className="w-full rounded-md border bg-slate-50 px-2 py-2"
                                                                >
                                                                    ៛100,000
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center">
                                                        <label htmlFor="" className="w-[30%] font-semibold"
                                                        >Return</label>
                                                        <div
                                                            className="flex w-[70%] items-center gap-5 text-center"
                                                        >
                                                            <div
                                                                className="w-[50%] rounded-md border bg-slate-100 p-3 font-bold"
                                                            >
                                                                $20.00
                                                            </div>
                                                            <div
                                                                className="w-[50%] rounded-md border bg-slate-100 p-3 font-bold"
                                                            >
                                                                ៛12,000.00
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-action">
                                                <div className="flex items-center">
                                                    <div className="flex items-center gap-3"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center justify-between p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
                                    >
                                        <div className="flex items-center">
                                            <button
                                                className="text-white bg-[#21324f] hover:bg-bg-[#21324f]/90 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                Acleda
                                            </button>
                                            <button
                                                data-modal-target="aba-pay-modal"
                                                data-modal-toggle="aba-pay-modal"
                                                className="text-white bg-[#255a77] hover:bg-[#255a77]/90 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                ABA
                                            </button>
                                            <div
                                                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                                            >
                                                <div className="relative p-4 w-full max-w-2xl max-h-full">
                                                    <div
                                                        className="relative bg-white rounded-lg shadow dark:bg-gray-700"
                                                    >
                                                        <div className="p-4 md:p-5 space-y-4">
                                                            <div className="w-full h-[430px] relative">
                                                                <Image
                                                                    width={50}
                                                                    height={50}
                                                                    src="/images/aba-qrcode.jpg"
                                                                    className="w-full object-cover h-full absolute"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <button
                                                data-modal-hide="default-modal"
                                                type="button"
                                                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                data-modal-hide="default-modal"
                                                type="submit"
                                                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                            >
                                                Pay By Cash
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


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