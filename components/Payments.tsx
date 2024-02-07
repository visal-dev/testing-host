import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';
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

interface PaymentsProps {
    onHandleClearCart: () => void;
}

const Payments: React.FC<PaymentsProps> = ({
    onHandleClearCart
}) => {
    return (
        <div
            className="flex h-[55%] border-t w-full flex-col justify-between px-4 py-2"
        >
            <div className="w-full text-black py-6">
                <div className="flex items-center justify-between">
                    <h1>Subtotal</h1>
                    <h2>$40.00</h2>
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
                    <h2>-$5.00</h2>
                </div>
                <div className="flex items-center justify-between">
                    <h1>Tax</h1>
                    <h2>$1.00</h2>
                </div>
                <div>
                    <div className="flex items-center justify-between font-semibold">
                        <h1>Total USD</h1>
                        <h2>$40.00</h2>
                    </div>
                    <div className="flex items-center justify-between font-semibold">
                        <h1>Total Khmer</h1>
                        <h2>$160,000.00</h2>
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
                                                            src="./assets/aba.jpg"
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
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">Hold</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you&apos;re done.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Name
                                    </Label>
                                    <Input id="name" value="Pedro Duarte" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">
                                        Username
                                    </Label>
                                    <Input id="username" value="@peduarte" className="col-span-3" />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    <button
                        onClick={onHandleClearCart}
                        className="w-[50%] focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        type="button"
                    >
                        Reset Order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Payments