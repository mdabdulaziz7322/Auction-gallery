import React from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Auctions</a></li>
                            <li><a>Categories</a></li>
                            <li><a>How to works</a></li>
                        </ul>
                    </div>
                    <h3 className='text-3xl font-light text-blue-600 ml-10'>Auction<span className='font-bold text-yellow-500'>Gallery</span></h3>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Auctions</a></li>
                        <li><a>Categories</a></li>
                        <li><a>How to works</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-3 m-3 mr-15">
                    <IoMdNotificationsOutline size={30} />
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;