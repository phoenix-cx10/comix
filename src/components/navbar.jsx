import React from 'react'
import { useState } from "react";
import { Search, Heart, User, ShoppingCart, ChevronDown } from "lucide-react";



function Navbar() {

    const [open, setOpen] = useState(false);
    return (
        <nav className='w-full bg-[#A8BBA3] flex items-center justify-between px-4 py-2'>
            {/* left section */}
            <div className='flex items-center gap-2 p-0'>
                {/* logo */}
                <img src='/assets/nav-logo.png' className='w-10 h-10 object-contain' />
                <span className='font-mono font-bold text-xl pb-[5px]'>Comix</span>

                <div className='relative'>
                <button
                    onClick={() => setOpen(!open)}
                    className='text-sm text-black flex item-center gap-1 pl-7'  >
                    Categories
                    <ChevronDown
                        size={20}
                        className={`pt-1 transition-transform duration-150 ${open ? "rotate-180":"rotate-0"}`}
                    />
                </button>
                    {open && (
                            <div className="absolute left-0 mt-5 ml-7 w-40 bg-[#F7F4EA] rounded shadow p-2 text-sm">
                            <p className="hover:bg-gray-600 px-2 py-1 cursor-pointer">Option 1</p>
                            <p className="hover:bg-gray-600 px-2 py-1 cursor-pointer">Option 2</p>
                            </div>
                        )}
                </div>

            </div>

        </nav>
    );
}


export default Navbar