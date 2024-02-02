'use client'
import { selectIsFullScreen } from '@/redux/fullScreenSlice';
import React from 'react'
import { useSelector } from 'react-redux';

const FullScreen = ({
    children
}: {
    children: React.ReactNode
}) => {

    const isFullScreen = useSelector(selectIsFullScreen);

    return (
        <div className={`flex h-full w-full ${isFullScreen ? 'full-screen' : ''}`}>
            {children}
        </div>
    )
}

export default FullScreen