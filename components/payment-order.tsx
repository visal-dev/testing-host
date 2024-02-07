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
import { CircleDollarSign, Minus, Package, Plus, Trash, X } from 'lucide-react';
import Image from 'next/image';
import PayModal from './pay-modal';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"




const PaymentOrder = () => {

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
                                            <div className="flex justify-center pl-1 items-center rounded-md">
                                                <input
                                                    type="text"
                                                    className="w-14 h-8 outline-none border bg-slate-50 px-2 rounded-md"
                                                    name="discount"
                                                    id="discount"
                                                />
                                            </div>
                                            <div className="flex w-fit justify-end">
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
                        <PayModal isOpen={isPayOpen} onClose={closeModal} >

                        </PayModal>


                        <div className="w-full flex items-center gap-2">
                            <Dialog >
                                <DialogTrigger asChild className='w-full'>
                                    <Button size={'xl'} variant="outline">Hold</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Create Hold</DialogTitle>
                                        <DialogDescription>
                                            Make changes to your profile here. Click save when you&apos;re done.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4">
                                        <div className="">
                                            <Label htmlFor="name" className="text-right">
                                                Title
                                            </Label>
                                            <Input id="name" className="py-5" />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit">Save changes</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>

                            <Button size={'xl'} className='w-full'>Print</Button>

                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button size={'xl'} className='w-full' variant="destructive">Reset</Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentOrder