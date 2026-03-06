import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/icons/logo.png';
import search from '../assets/icons/search.png';
import cart from '../assets/icons/cart.png';
import user from '../assets/icons/user.png';


const Navbar = () => {
        const [open, setOpen] = useState(false);
        const dropdownRef = useRef(null);

        useEffect(() => {
            function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []);

    return (
        <div className='w-full h-[12vh] flex'>
            <div className="w-[25%] h-full  flex items-center justify-center">
                <div className='h-[70%] w-[70%] min-h-6 flex items-center'>
                    <img src={logo} alt="" className='' />
                </div>
                
            </div>
            <div className="w-[50%] h-full flex items-center justify-center">
                <div className="w-[90%] h-10 bg-[#dde5fa] flex items-center gap-2 rounded-sm shadow-xl">
                    <img src={search} alt="" className='h-[45%] flex items-center ml-2' />
                    <input type="text" className="flex items-center w-full h-full outline-none" placeholder='Search for Products, Brands and More' ></input>
                </div>
            </div>
            <div className="w-[25%] h-full flex items-center ">
                <div className="w-full h-10 rounded flex items-center justify-end gap-7 mr-8">
                    <div className="relative inline-block text-left" ref={dropdownRef}>
                        <button onClick={() => setOpen(!open)} className="group px-2 py-2 font-medium rounded flex items-center gap-1 cursor-pointer hover:bg-blue-700 hover:text-white transition">
                            <div className='h-[25px] w-[25px] '><img src={user} alt="" className="filter transition duration-300 group-hover:invert" /></div>
                            <span className='transition duration-300'>Login</span>
                        </button>
                        {open && (
                            <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white border border-gray-200">
                            <ul className="py-2">
                            <li>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                New customer? <span className="text-blue-600 font-medium">Sign Up</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Profile</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Flipkart Plus Zone</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Orders</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Wishlist</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Rewards</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Gift Cards</a>
                            </li>
                            </ul>
                        </div>
                        )}
                    </div>
                    <div className='group px-2 py-2 font-medium rounded flex items-center gap-1 cursor-pointer hover:bg-blue-700 hover:text-white transition'>
                        <div className='h-[25px] w-[25px] '><img src={cart} alt="" className="filter transition duration-300 group-hover:invert" /></div>
                        <span className='transition duration-300'>Cart</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
