import { PackageOpen, Trash, UserPlus, X } from 'lucide-react'
import React, { useState } from 'react'
import Select from 'react-select';

const options = [
    { value: 'walk-in customer', label: 'Walk-in customer' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const HOLD_ITEMS = [
    {
        id: 1,
        label: 'Item 1',
    },
    {
        id: 2,
        label: 'Item 1',
    },
    {
        id: 3,
        label: 'Item 1',
    },
    {
        id: 4,
        label: 'Item 1',
    },
    {
        id: 5,
        label: 'Item 1',
    },
    {
        id: 6,
        label: 'Item 1',
    },
]

const PaymentHeader = () => {

    const [isOpenHold, setIsOpenHold] = useState(false)


    const handleToggleOpenHold = () => {
        setIsOpenHold(!isOpenHold)
    }

    return (
        <header className='h-14 bg-slate-700 px-3 w-full flex gap-2 items-center'>
            <button onClick={handleToggleOpenHold} className='text-gray-900 whitespace-nowrap gap-2 bg-white hover:bg-gray-100 border border-gray-200 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center'><PackageOpen />Open Hold</button>
            {isOpenHold && (
                <>
                    <div onClick={handleToggleOpenHold} className='fixed top-0 left-0 bg-black/65 w-full h-full z-40 transition-all duration-300' />
                    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2  transition-all duration-300 -translate-y-1/2 bg-white border border-gray-300 z-50 w-[40%] rounded-md max-h-3/4 h-[60%] overflow-auto'>
                        <div className='py-5 px-3 flex justify-between items-center border-b'>
                            <h1>Open Hold</h1>
                            <X />
                        </div>
                        <div className='px-3 py-5 grid gap-3 grid-cols-3'>
                            {HOLD_ITEMS.map(item => (
                                <div
                                    key={item.id}
                                    className="border cursor-pointer rounded-md shadow flex items-center justify-between px-1 py-1"
                                >
                                    <p>{item.label}</p>
                                    <button
                                        className="border p-2 rounded-md hover:bg-red-600 hover:text-white"
                                    >
                                        <Trash size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
            <Select
                className="w-full"
                classNamePrefix="select"
                defaultValue={options[0]}
                isLoading={false}
                isClearable={true}
                placeholder="Search customer..."
                isSearchable
                name="color"
                options={options}
            />
            <button className='text-gray-900 whitespace-nowrap gap-2 bg-white hover:bg-gray-100 border border-gray-200 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center'><UserPlus size={20} /></button>
        </header >
    )
}

export default PaymentHeader