import React, { useState } from 'react';
import CategoryMenu from './categoryMenu';
import { Link } from 'react-router-dom';
import { Search, Heart, User, ShoppingCart, ChevronDown } from "lucide-react";

function Navbar({ showMenu, onToggleMenu, cartCount, wishlistCount }) {
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);

    return (
        <nav className='w-full bg-[#A8BBA3] flex items-center justify-between px-6 py-3'>
            {/* Left section */}
            <div className='flex items-center gap-6'>
                {/* Logo */}
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src='/assets/nav-logo.png' className='w-10 h-10 object-contain' alt='Logo' />
                    <span className='font-mono font-bold text-2xl'>Comix</span>
                </Link>
                
                {/* Shop Button */}
                <div className='relative'>
                    <Link to="/products">
                        <button className='text-lg text-black flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#95AA90] transition-colors duration-200'>
                            Shop
                            <ChevronDown size={18} className={`transition-transform duration-200 ${showMenu ? "rotate-180" : "rotate-0"}`} />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Search Section */}
            <div className={`flex items-center transition-all duration-300 ${isSearchExpanded ? 'w-80' : 'w-auto'}`}>
                {isSearchExpanded ? (
                    <div className='relative w-full'>
                        <input
                            type='text'
                            placeholder='Search books, authors, genres...'
                            className='w-full rounded-full bg-[#F7F4EA] pl-6 pr-12 py-2.5 outline-none border-2 border-transparent focus:border-[#B95723] transition-all'
                            autoFocus
                            onBlur={() => setIsSearchExpanded(false)}
                        />
                        <Search size={20} className='absolute right-4 top-2.5 text-black cursor-pointer' />
                    </div>
                ) : (
                    <Search
                        size={24}
                        className='text-black cursor-pointer hover:text-gray-800 transition-colors p-2'
                        onClick={() => setIsSearchExpanded(true)}
                        title="Search"
                    />
                )}
            </div>

            {/* Right Icons */}
            <div className='flex items-center gap-6'>


                <Link to="/contact" className='text-black hover:text-gray-800 transition-colors p-2'>
                    <User size={24} title="Account" />
                </Link>
                
                <Link to="/wishlist" className='relative text-black hover:text-gray-800 transition-colors p-2'>
                    <Heart size={24} title="Wishlist" />
                    {wishlistCount > 0 && (
                        <span className='absolute -top-1 -right-1 text-xs bg-[#B95723] text-white rounded-full w-5 h-5 flex items-center justify-center'>
                            {wishlistCount}
                        </span>
                    )}
                </Link>
                
                <Link to="/cart" className='relative text-black hover:text-gray-800 transition-colors p-2'>
                    <ShoppingCart size={24} title="Cart" />
                    {cartCount > 0 && (
                        <span className='absolute -top-1 -right-1 text-xs bg-[#B95723] text-white rounded-full w-5 h-5 flex items-center justify-center'>
                            {cartCount}
                        </span>
                    )}
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;