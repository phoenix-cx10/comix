import React from 'react'
import CategoryMenu from './categoryMenu';
import { Link } from 'react-router-dom';
import { Search, Heart, User, ShoppingCart, ChevronDown } from "lucide-react";




function Navbar({showMenu, onToggleMenu}) {

    /* const [open, setOpen] = useState(false); */
    return (
        <nav className='w-full bg-[#A8BBA3] flex items-center justify-between px-4 py-2 hide-scrollbar'>
            {/* left section */}
            <div className='flex items-center gap-2 p-0'>
                {/* logo */}
                <Link to={'/'} className='flex'>
                <img src='/assets/nav-logo.png' className='w-10 h-10 object-contain' />
                <span className='font-mono font-bold text-xl pb-[5px] mt-1'>Comix</span>
                </Link>
                <div className='relative'>
                <button
                    onClick={onToggleMenu}
                    className='text-sm text-black flex item-center gap-1 pl-7 cursor-pointer'  >
                    Categories
                    <ChevronDown
                        size={16}
                        className={`mt-0.5 transition-transform duration-150 ${showMenu ? "rotate-180":"rotate-0"}`}
                    />
                </button>
                    {/* {open && (
                            <div className="absolute left-0 mt-5 ml-7 w-40 bg-[#F7F4EA] rounded shadow p-2 text-sm">
                            <p className="hover:bg-gray-600 px-2 py-1 cursor-pointer">Option 1</p>
                            <p className="hover:bg-gray-600 px-2 py-1 cursor-pointer">Option 2</p>
                            </div>
                        )} */}
                </div>
            </div>

                {/* Search button */}
                
                <div className='relative w-1/5 ml-150' >
                    <input
                        type='text'
                        placeholder='Search'
                        className='w-full rounded-full bg-[#F7F4EA] pl-4 pr-3 py-1 outline-accent   '
                    />
                    <Search
                        size={18}
                        className='absolute right-3 top-1.5 text-black cursor-pointer'
                    />
                    </div>
                

                <div className='flex items-end gap-7 text-black font-mono mr-5'>
                    <User className='cursor-pointer ' size={20} />
                    <Heart className='cursor-pointer ' size={20} />
                    <div className='relative cursor-pointer'>
                        <ShoppingCart size={20} />
                        <span className=' absolute -top-2 -right-2 text-xs px-1 py-0.5 bg-accent text-black rounded-full'>0</span>
                    </div>
                </div>

        </nav>
    );
}


export default Navbar