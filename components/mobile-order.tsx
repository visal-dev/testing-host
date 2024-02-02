'use client'
import { CircleDollarSign, Minus, Package, Plus, ScanBarcode, ShoppingCart, Trash, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import PayModal from './pay-modal'
import PaymentHeader from './payment-header'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotalKhmerRiels, calculateTotalUSD, clearCart, decreaseQuantity, increaseQuantity, removeFromCart, selectProduct } from '@/redux/productSlice'

const MobileOrder = () => {
    const [isOpenMobilePayment, setIsOpenMobilePayment] = useState(false)

    const dispatch = useDispatch();
    const { cart, subtotal, totalUSD, totalKhmerRiels, formattedTotalKhmerRiels } = useSelector(selectProduct);

    const [isPayOpen, setIsPayOpen] = useState(false)
    const [isHoldOrder, setIsHoldOrder] = useState(false)


    const openModal = () => {
        setIsPayOpen(true);
    };

    const closeModal = () => {
        setIsPayOpen(false);
    };

    const handleToggleHoldOrder = () => {
        setIsHoldOrder(!isHoldOrder);
    }


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

    const handleToggleModal = () => {
        setIsOpenMobilePayment(!isOpenMobilePayment)
    }
    return (
        <>
            <div className='fixed md:hidden bottom-0 w-full px-4 pb-6 flex items-center gap-3'>
                <div onClick={handleToggleModal} className='bg-[#061829] text-white px-6 rounded-full py-3 flex items-center justify-between w-full'>
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
            {
                isOpenMobilePayment && (
                    <div className='fixed md:hidden top-0 bg-white left-0 w-full h-full'>
                        <div className='w-full flex items-center flex-col justify-between'>
                            <PaymentHeader onClose={handleToggleModal} />
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
                            <div className="flex h-[calc(100vh-108px)] w-full flex-col justify-between">
                                <div className="h-[calc(100%-50%)] w-full overflow-y-auto px-3 scrollbar-hide">
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
                                                            <div className="flex items-center xl:gap-1">
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
                                                            <div className="flex ml-4 justify-end pl-1 items-center rounded-md">
                                                                <input
                                                                    type="text"
                                                                    className="w-full h-8 outline-none border bg-slate-50 px-2 rounded-md"
                                                                    name="discount"
                                                                    id="discount"
                                                                />
                                                            </div>
                                                            <div className="flex w-full justify-end">
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
                                    className="flex h-[55%] border-t px-3 py-3 w-full flex-col justify-between"
                                >
                                    <div className="w-full text-black pt-6">
                                        <div className="flex items-center justify-between">
                                            <h1>Subtotal</h1>
                                            <h2>${subtotal}</h2>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <h1>Discount</h1>
                                            <form className="flex w-fit gap-2 items-center rounded-md">
                                                <CircleDollarSign className='text-gray-400' size={18} />
                                                <input
                                                    type="text"
                                                    placeholder="Discount amount"
                                                    className="w-fit pl-2 border h-9 rounded-md bg-transparent outline-none placeholder:text-sm"
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
                                            className="text-white w-full mb-2 py-4 bg-green-700 hover:bg-green-800 active:scale-105 transition-all font-medium rounded-md text-sm px-5 text-center"
                                            type="button"
                                        >
                                            Pay ($40.00)
                                        </button>
                                        <PayModal isOpen={isPayOpen} onClose={closeModal} />


                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={handleToggleHoldOrder}
                                                className="text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-md text-sm px-5 py-4 text-center dark:focus:ring-yellow-900 w-[50%]"
                                                type="button"
                                            >
                                                Hold Order
                                            </button>

                                            {isHoldOrder && (
                                                <>
                                                    <div onClick={handleToggleHoldOrder} className='fixed top-0 left-0 bg-black/65 w-full h-full z-40 transition-all duration-300' />
                                                    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2  transition-all duration-300 -translate-y-1/2 bg-white border border-gray-300 z-50 w-[30%] rounded-md max-h-3/4 h-auto overflow-auto'>
                                                        <div className='py-5 px-3 flex justify-between items-center border-b'>
                                                            <h1>Create Hold</h1>
                                                            <X onClick={handleToggleHoldOrder} />
                                                        </div>
                                                        <form className='px-3 py-3'>
                                                            <div className='flex flex-col gap-2'>
                                                                <label>Title</label>
                                                                <input
                                                                    className='border p-3 outline-none rounded-md'
                                                                    type="text"
                                                                    placeholder='Enter the title for hold order' />
                                                            </div>
                                                            <div className='flex items-center justify-end gap-3 pt-3'>
                                                                <button onClick={handleToggleHoldOrder} className='bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-500'>Cancel</button>
                                                                <button className='bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-500'>Create Hold</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </>
                                            )}

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
                    </div>
                )
            }
        </>
    )
}

export default MobileOrder