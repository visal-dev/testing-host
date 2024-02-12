'use client'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { productsData, Product } from '@/utils/data';
import { Star } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct, setSelectedProduct, addToCart, addToCartWithSize } from '@/redux/productSlice';
import Image from 'next/image';

interface Tab {
    label?: string;
    queryType: string;
    icon?: boolean
}


interface TabsProps {
    tabs: Tab[];
}

const tabs = [
    { label: 'Favorite', queryType: 'favorites', icon: true },
    { label: 'All Products', queryType: 'all' },
    { label: 'Food', queryType: 'food' },
    { label: 'Drinks', queryType: 'drink' },
    { label: 'Sweets', queryType: 'sweet' },
];

export default function Products() {
    const dispatch = useDispatch();
    const { selectedProduct, cart } = useSelector(selectProduct);
    const [activeTab, setActiveTab] = useState(0);
    const [tabContent, setTabContent] = useState<Product[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const userFavoriteProductIds: number[] = [1, 3, 5];

    const modalRef = useRef<HTMLDivElement>(null);


    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setIsModalOpen(false);
        }
    };


    const handleProductClick = (product: Product) => {
        dispatch(setSelectedProduct(product));

        // Play sound when a product is clicked
        const clickSound = new Audio('/beepsound.mp3');
        clickSound.play();


        // Check if the product has sizes
        if (product.size && product.size.length > 0) {
            setSelectedSizes([]); // Reset selected sizes
            setIsModalOpen(true);
        } else {
            // If no sizes, add product directly to the cart (replace with actual cart logic)
            dispatch(addToCart(product));
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAddToCart = () => {
        if (selectedProduct) {
            // For simplicity, let's assume the first size in the array is selected
            const selectedSize = selectedProduct.size && selectedProduct.size.length > 0
                ? selectedProduct.size[0]
                : '';

            dispatch(addToCartWithSize({ product: selectedProduct, size: [selectedSize] }));
            setIsModalOpen(false);
        }
    };

    // setIsModalOpen(false);

    const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const size = event.target.value;
        setSelectedSizes((prevSizes) =>
            prevSizes.includes(size) ? prevSizes.filter((prevSize) => prevSize !== size) : [...prevSizes, size]
        );
    };

    useEffect(() => {

        // Function to fetch all products
        const fetchAllProducts = () => {
            setTabContent(productsData);
        };

        // Function to fetch favorite items (replace with actual logic)
        const fetchFavoriteItems = () => {
            // Replace this with actual logic to fetch user's favorite items
            const favoriteItems = productsData.filter((product) => userFavoriteProductIds.includes(product.product_id));
            setTabContent(favoriteItems);
        };

        // Function to handle different queryTypes
        const fetchData = () => {
            switch (tabs[activeTab].queryType) {
                case 'all':
                    fetchAllProducts();
                    break;
                case 'favorites':
                    fetchFavoriteItems();
                    break;
                default:
                    // Default case (e.g., 'food', 'drink', 'sweet')
                    const filteredProducts = productsData.filter((product) => product.type === tabs[activeTab].queryType);
                    setTabContent(filteredProducts);
                    break;
            }
        };


        fetchData();
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [activeTab]);

    return (
        <div className="w-full h-[calc(100%-56px)]">
            <div className="h-14 px-4 absolute z-50 mt-14 md:static md:z-0 md:mt-0 bg-slate-200 max-w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
                <div className='gap-3 h-full flex items-center w-full xl:w-fit'>
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => handleTabClick(index)}
                            className={index === activeTab ? 'py-2.5 whitespace-nowrap text-cyan-600 w-full px-5 text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-600' : 'py-2.5 px-5 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-600'}
                        >
                            {tab.icon ? <Star size={20} /> : tab.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="p-4 grid grid-cols-2 md:pt-3 pt-[122px] xl:grid-cols-5 md:grid-cols-4 gap-3 md:h-[calc(100%-120px)] h-full overflow-y-auto scrollbar-hide">
                {tabContent.map((product) => (
                    <div
                        onClick={() => handleProductClick(product)}
                        key={product.product_id}
                        className="flex xl:h-[200px] h-[165px] active:scale-105 transition-all flex-col items-center rounded-md border bg-white xl:px-5 px-3 py-0"
                    >
                        <div className="flex items-center w-20 h-[50%] relative justify-center">
                            <img className="w-full h-full object-contain absolute" src={product.image} alt={product.product_name} width={160} height={96} />
                        </div>
                        <div className="flex space-y-1 pb-3 flex-col h-[50%] items-center justify-between w-full">
                            <h1 className="font-medium w-full text-xs lg:text-[16px] line-clamp-2 h-auto text-center">{product.product_name}</h1>
                            <h1 className="font-bold text-lg">${product.price.toFixed(2)}</h1>
                        </div>
                    </div>
                ))}

                {isModalOpen && selectedProduct && selectedProduct.size && (
                    <div ref={modalRef} className="fixed top-1/2 left-1/2 transform -translate-x-1/2  transition-all duration-300 -translate-y-1/2 bg-white border border-gray-300 z-50 w-[40%] rounded-md max-h-3/4 h-auto overflow-auto">
                        {/* <h2>{selectedProduct.product_name}</h2> */}
                        <div
                            className="flex items-center justify-between p-4 md:p-5 border-b rounded-t"
                        >
                            <h3
                                className="text-xl font-semibold text-gray-900"
                            >
                                Select Size
                            </h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                type="button"
                                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                                data-modal-hide="modal-for-select-the-size"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-5 p-4 md:p-5">
                            {selectedProduct.size &&
                                selectedProduct.size.map((size) => (
                                    <div
                                        key={size}
                                        className="py-5 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                                        onClick={handleAddToCart}
                                    >
                                        <span className="px-2 py-1 bg-blue-900 text-white"
                                        >+$1.5</span>
                                        <button type="button" className="pl-10">{size}</button>
                                    </div>
                                ))}
                        </div>
                        <div className='border-t mt-4 p-4 flex items-center justify-end'>
                            <button onClick={handleCloseModal} className='bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-500'>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
