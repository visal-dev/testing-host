'use client'
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { CircleDollarSign, Package, Trash } from 'lucide-react'
import { useSelector } from 'react-redux'
import { selectProduct } from '@/redux/productSlice'
import { Button } from '@/components/ui/button'

const DueScreen = () => {

    const { cart, subtotal, totalUSD, totalKhmerRiels, formattedTotalKhmerRiels } = useSelector(selectProduct);

    const plugin = React.useRef(
        Autoplay({ delay: 4000 })
    )


    return (
        <div className='w-screen  h-full bg-[#061829] flex gap-5 overflow-hidden'>
            <div className='w-[50%] mb-4 ml-5 mt-5  rounded-xl  bg-white'>
                <h1 className='font-bold text-2xl rounded-xl pb-5 border-b bg-slate-700 text-white p-4 '>Your Order</h1>
                <div className='p-4'>
                    <div className="text-black/65 border w-full flex items-center h-14">
                        <div
                            className="grid items-center font-semibold text-md text-center w-full grid-cols-4"
                        >
                            <p>Name</p>
                            <p>Qty</p>
                            <p>Discount</p>
                            <p>Total Price</p>
                        </div>
                    </div>
                    <div className="flex h-[calc(100vh-108px)] flex-col justify-between">
                        <div className="h-[calc(100%-30%)] overflow-y-auto scrollbar-hide">
                            <div className="h-full space-y-1 py-2">
                                {cart.length === 2 ? <div className='w-full h-full flex  flex-col items-center justify-center'>
                                    <Package size={40} className='text-gray-400' />
                                    <p>No items</p>
                                </div>
                                    : <>
                                        {
                                            cart.map(item => (
                                                <div
                                                    className="grid grid-cols-4 border-slate-400 bg-slate-100 text-black items-center text-center gap-1 rounded border px-2 py-2"
                                                    key={item.product.product_id}
                                                >
                                                    <h1 className="font-semibold text-sm line-clamp-1">{item.product.product_name}</h1>
                                                    <div className="flex justify-center items-center xl:gap-1">
                                                        X
                                                        <input
                                                            type="text"
                                                            className="h-auto w-8 p-1 border-none text-black bg-transparent text-center outline-none"
                                                            value={item.quantity}
                                                        />
                                                    </div>
                                                    <div className="flex justify-center pl-1 items-center rounded-md">
                                                        <input
                                                            type="text"
                                                            className="w-14 h-8 outline-none border bg-slate-50 px-2 rounded-md"
                                                            name="discount"
                                                            id="discount"
                                                        />
                                                    </div>
                                                    <p className="text-sm font-medium">${item.product.price}</p>

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
                            <div className="w-full text-black py-6 flex gap-1 flex-col">
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
                                <div className='flex flex-col gap-1'>
                                    <div className="flex items-center text-xl justify-between font-semibold">
                                        <h1>Total USD</h1>
                                        <h2>${totalUSD}</h2>
                                    </div>
                                    <div className="flex items-center text-xl justify-between font-semibold">
                                        <h1>Total Khmer</h1>
                                        <h2>{formattedTotalKhmerRiels}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel
                plugins={[plugin.current]}
                className="w-[50%] h-[95vh] rounded-xl mt-5 mr-5 bg-[#061829]"
            >
                <CarouselContent className='w-full h-[95vh]'>
                    <CarouselItem className='relative w-full h-full rounded-xl'>
                        <img className='absolute w-full h-full rounded-xl' src="https://i.pinimg.com/736x/ce/93/6c/ce936caf1c8e5568af1c10f442db9c85.jpg" alt="" />
                    </CarouselItem>
                    <CarouselItem className='relative w-full h-full rounded-xl'>
                        <img className='absolute w-full h-full rounded-xl' src="https://i.pinimg.com/736x/2a/45/ad/2a45ad30bf88486c5916290bf0fb20c6.jpg" alt="" />
                    </CarouselItem>
                    <CarouselItem className='relative w-full h-full rounded-xl'>
                        <img className='absolute w-full h-full rounded-xl' src="" alt="" />
                    </CarouselItem>
                    <CarouselItem className='relative w-full h-full rounded-xl'>
                        <img className='absolute w-full h-full rounded-xl' src="https://i.pinimg.com/736x/2a/45/ad/2a45ad30bf88486c5916290bf0fb20c6.jpg" alt="" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default DueScreen