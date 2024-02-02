import { Minimize2, PackageOpen, Trash, UserPlus, X } from 'lucide-react'
import React, { useState } from 'react'
import Select from 'react-select';

interface PaymentHeaderProps {
    isOpen?: boolean;
    onClose?: () => void;
}

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const customStyles: any = {
    control: (provided: any) => ({
        ...provided,
        padding: '0rem 0rem',
        height: '0rem'
        // Adjust padding as needed
    }),
    placeholder: (provided: any) => ({
        ...provided,
        fontSize: '0.75rem', // Adjust font size as needed
    }),
    input: (provided: any) => ({
        ...provided,
        padding: '0rem',
    })
};

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

const PaymentHeader: React.FC<PaymentHeaderProps> = ({ isOpen, onClose }) => {

    const [isOpenHold, setIsOpenHold] = useState(false)
    const [isAddNewCustomerOpen, setIsAddNewCustomerOpen] = useState(false)


    const handleToggleOpenHold = () => {
        setIsOpenHold(!isOpenHold)
    }

    const handleAddNewCustomerModal = () => {
        setIsAddNewCustomerOpen(!isAddNewCustomerOpen);
    }

    return (
        <header className='h-14 bg-slate-700 px-3 w-full flex gap-2 items-center'>
            <div onClick={onClose} className='md:hidden text-gray-900 whitespace-nowrap gap-2 bg-white hover:bg-gray-100 border border-gray-200 font-medium rounded text-sm  px-2 py-2 text-center inline-flex items-center cursor-pointer'>
                <Minimize2 size={20} />
            </div>
            <button onClick={handleToggleOpenHold} className='text-gray-900 whitespace-nowrap gap-2 bg-white hover:bg-gray-100 border border-gray-200 font-medium rounded text-sm px-2  py-2 md:text-xs text-center inline-flex items-center'><PackageOpen className='w-5 h-5' />Open Hold</button>
            {isOpenHold && (
                <>
                    <div onClick={handleToggleOpenHold} className='fixed top-0 left-0 bg-black/65 w-full h-full z-40 transition-all duration-300' />
                    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2  transition-all duration-300 -translate-y-1/2 bg-white border border-gray-300 z-50 w-[40%] rounded-md h-[420px]'>

                        <div className='py-5 px-3 flex justify-between items-center border-b'>
                            <h1>Open Hold</h1>
                            <X onClick={handleToggleOpenHold} className='cursor-pointer' />
                        </div>
                        <div className='px-3 py-5 grid gap-3 grid-cols-2 overflow-auto h-[60%]'>
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
                        <div className='border-t flex items-center  pt-7 justify-end px-5'>
                            <button onClick={handleToggleOpenHold} className='bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-500'>Close</button>
                        </div>
                    </div>
                </>
            )}
            <Select
                styles={customStyles}
                className="w-full placeholder:text-xs"
                classNamePrefix="select"
                isLoading={false}
                isClearable={true}
                placeholder="Search customer..."
                isSearchable
                name="color"
                options={options}
            />
            <button onClick={handleAddNewCustomerModal} className='text-gray-900 whitespace-nowrap gap-2 bg-white hover:bg-gray-100 border border-gray-200 font-medium rounded text-sm  px-2 py-2 text-center inline-flex items-center'><UserPlus size={20} /></button>

            {isAddNewCustomerOpen && (
                <>
                    <div onClick={handleAddNewCustomerModal} className='fixed top-0 left-0 bg-black/65 w-full h-full z-40 transition-all duration-300' />
                    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2  transition-all duration-300 -translate-y-1/2 bg-white border border-gray-300 z-50 w-[30%] rounded-md max-h-3/4 h-auto overflow-auto'>
                        <div className='py-5 px-3 flex justify-between items-center border-b'>
                            <h1 className='text-xl font-semibold'>Add Customer</h1>
                            <X onClick={handleAddNewCustomerModal} className='cursor-pointer' />
                        </div>
                        <form className='px-3 py-3 space-y-3'>
                            <div className='grid grid-cols-2 gap-3'>
                                <div className='flex flex-col gap-2'>
                                    <label className='font-medium'>First Name</label>
                                    <input
                                        className='border p-3 outline-none rounded-md'
                                        type="text" />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='font-medium'>Last Name</label>
                                    <input
                                        className='border p-3 outline-none rounded-md'
                                        type="text" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='font-medium'>Email</label>
                                <input
                                    className='border p-3 outline-none rounded-md'
                                    type="email" />
                            </div>
                            <div className='grid grid-cols-2 gap-3'>
                                <div className='flex flex-col gap-2'>
                                    <label className='font-medium'>Telephone</label>
                                    <input
                                        className='border p-3 outline-none rounded-md'
                                        type="text" />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='font-medium'>Gender</label>
                                    <select name="" id="" className='border h-full rounded-md'>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex border-t mt-5 items-center justify-end gap-3 pt-3'>
                                <button onClick={handleAddNewCustomerModal} className='bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-500'>Cancel</button>
                                <button className='bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-500'>Create New Customer</button>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </header >
    )
}

export default PaymentHeader