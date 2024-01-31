'use client'
import { Wifi } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const InternetChecker = ({ children }: { children: React.ReactNode }) => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const handleOnlineStatusChange = () => {
            setIsOnline(navigator.onLine);
        };

        // Initial check
        handleOnlineStatusChange();

        // Add event listeners for online/offline status changes
        window.addEventListener('online', handleOnlineStatusChange);
        window.addEventListener('offline', handleOnlineStatusChange);

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('online', handleOnlineStatusChange);
            window.removeEventListener('offline', handleOnlineStatusChange);
        };
    }, []);
    return (
        <>
            {isOnline ? (
                children
            ) : (
                <div className='fixed top-0 left-0 w-full h-full flex items-center opacity-15 bg-transparent'>
                    <Wifi />
                </div>
            )}
        </>
    )
}

export default InternetChecker