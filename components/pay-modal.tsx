import Image from 'next/image'
import React, { useState } from 'react'

interface PayModalProps {
    isOpen: boolean;
    onClose: () => void;
}
const PayModal: React.FC<PayModalProps> = ({ isOpen, onClose }) => {

    return isOpen && (
        <>
            <div onClick={onClose} className='fixed top-0 left-0 bg-black/65 w-full h-full z-40 transition-all duration-300' />
            <div className='fixed top-1/2 transition-all duration-300 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 z-50 md:w-[60%] w-full  xl:w-[50%] rounded-md h-auto'>
                <div
                    className="bg-white w-full h-full rounded-lg shadow"
                >
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
                                            <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
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
                                className="text-white bg-[#21324f] hover:bg-bg-[#21324f]/90 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                            >
                                Acleda
                            </button>
                            <button
                                className="text-white ml-1 mr-1 bg-[#255a77] hover:bg-[#255a77]/90 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
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
                                onClick={onClose}
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
        </>
    )
}

export default PayModal