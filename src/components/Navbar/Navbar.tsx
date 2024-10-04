"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import SearchBar from '../Search/Search';
import { useRouter } from 'next/navigation';

function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');

    const router = useRouter();

    const onLogout = () => {
        router.push("/Login");
    };

    const handleSearch = () => {
        // Implement search logic here
        console.log("Searching for:", searchQuery);
    };

    const onClearSearch = () => {
        setSearchQuery('');
    };

    return (
        <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
            <Link href="/Dashboard">
                <h2 className='text-2xl font-medium text-black py-2'>Notes</h2>
            </Link>
            <SearchBar
                value={searchQuery}
                // Update the onChange handler to directly accept the string value
                onChange={(value: string) => {
                    setSearchQuery(value);
                }}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
            />
            <ProfileInfo onLogout={onLogout} />
        </div>
    );
}

export default Navbar;
