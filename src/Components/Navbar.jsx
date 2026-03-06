import React from 'react';
import logo from '../assets/icons/logo.png';
import search from '../assets/icons/search.png';
import cart from '../assets/icons/cart.png';
import user from '../assets/icons/user.png';


const Navbar = () => {
    return (
        <div className='w-full h-[12vh] flex'>
            <div className="w-[25%] h-full  flex items-center justify-center">
                <img src={logo} alt="" className='h-[70%] min-h-[25px]' />
            </div>
            <div className="w-[50%] h-full flex items-center justify-center">
                <div className="w-[80%] h-[40px] bg-[#F0F5FF] flex items-center gap-2 rounded-sm">
                    <img src={search} alt="" className='h-[50%] flex items-center ml-2' />
                    <input type="text" className="flex items-center w-full h-full outline-none" placeholder='Search your items here!' ></input>
                </div>
            </div>
            <div className="w-[25%] h-full flex items-center justify-center">
                <div className="w-[50%] h-[40px] rounded-sm flex items-center gap-1">
                    <img src={user} alt="" className="h-[50%] min-h-[25px]" />
                    <select name="" id="" className='outline-none'>
                        <option value="" defaultValue="User" hidden>Login</option>
                        <option value="">User 1</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
