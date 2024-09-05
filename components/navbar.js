/* eslint-disable */

import React from 'react';

const Navbar = () => {
    return (
        <div className="">
            <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-5 pb-4 lg:pb-0">
                <img src="/assets/logo.svg" alt="logo"/>
                <div className="flex flex-row items-center gap-5 lg:justify-between">
                    <p className="font-semibold opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-pointer">Courses</p>
                    <p className="font-semibold opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-pointer">Teachers</p>
                    <p className="font-semibold opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-pointer">Pricing</p>
                    <p className="font-semibold opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-pointer">Careers</p>
                    <p className="font-semibold opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-pointer">Blog</p>
                </div>
                <button
                    className="hidden lg:flex btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded full">
                    Get started
                </button>
            </div>
        </div>
    )
}

export default Navbar;