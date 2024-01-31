'use client'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { productsData, Product } from '@/utils/data';
import { Star } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct, setSelectedProduct, addToCart } from '@/redux/productSlice';
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

export default function PosPage({ params }: { params: { shopId: string } }) {
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
        // const clickSound = new Audio('/beepsound.mp3');
        // clickSound.play();


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

    const handleAddToCartFromModal = () => {
        // Add selected product with sizes to the cart (replace with actual cart logic)
        if (selectedProduct) {
            const productWithSelectedSizes: Product = {
                ...selectedProduct,
                size: selectedSizes,
            };
            console.log('Adding to cart:', productWithSelectedSizes);
            dispatch(addToCart(productWithSelectedSizes));
            setIsModalOpen(false);
        }
    };

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
    }, [activeTab, userFavoriteProductIds]);

    return (
        <div className="w-full h-[calc(100%-120px)] overflow-y-auto scrollbar-hide">
            <div className="h-14 px-4 flex items-center gap-3 w-full border-b">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={index === activeTab ? 'py-2.5 text-cyan-600 px-5 text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-600' : 'py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-600'}
                    >
                        {tab.icon ? <Star size={20} /> : tab.label}
                    </button>
                ))}
            </div>
            <div className="p-4 grid lg:grid-cols-5 md:grid-cols-4 gap-5">
                {tabContent.map((product) => (
                    <div
                        onClick={() => handleProductClick(product)}
                        key={product.product_id}
                        className="flex h-[200px] active:scale-105 transition-all flex-col items-center rounded-md border bg-white px-5 py-5"
                    >
                        <div className="flex items-center justify-center">
                            <Image className="w-40 h-24 object-contain" src={`/images/${product.image}`} alt={product.product_name} width={160} height={96} />
                        </div>
                        <div className="flex flex-col h-[50%] items-center w-full">
                            <h1 className="font-semibold w-full text-[16px] line-clamp-2 text-center">{product.product_name}</h1>
                            <h1 className="font-bold text-lg">${product.price.toFixed(2)}</h1>
                        </div>
                    </div>


                ))}
                {isModalOpen && selectedProduct && selectedProduct.size && (
                    <div ref={modalRef} className="fixed top-1/2 left-1/2 transform -translate-x-1/2  transition-all duration-300 -translate-y-1/2 bg-white border border-gray-300 z-50 w-[40%] rounded-md max-h-3/4 h-[60%] overflow-auto">
                        <h2>{selectedProduct.product_name}</h2>
                        <p>Price: ${selectedProduct.price.toFixed(2)}</p>
                        <div className="size-options">
                            {selectedProduct.size &&
                                selectedProduct.size.map((size) => (
                                    <div key={size} className="size-option">
                                        <input
                                            type="checkbox"
                                            id={`size-${size}`}
                                            value={size}
                                            checked={selectedSizes.includes(size)}
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleSizeChange(event)}
                                        />
                                        <label htmlFor={`size-${size}`}>{size}</label>
                                    </div>
                                ))}
                        </div>
                        <button onClick={handleAddToCartFromModal}>Add to Cart</button>
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                )}
            </div>
        </div>
    )
}
