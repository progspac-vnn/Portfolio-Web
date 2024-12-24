"use client"

import { useState } from "react";
import Link from "next/link";
import {FiMenu, FiX} from "react-icons/fi"

const Navbar = () => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDropDownOpen(!isDropDownOpen)
    }

    return (
        <header className="bg-[#060608] text-white fixed top-0 left-0 right-0 z-[9999] px-5">

            <div className="max-w-screen-xl mx-auto flex justify-between items-center md:py-8 py-5">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-0.5 bg-white"></div>
                    <Link href="/" className="text-lg font-semibold">VNN Website</Link>
                </div>
            

                {/*desktop navigation*/}
                <div>
                    <p className="text=[#86868D] hidden md:block">
                        Software Engineer <br /> 
                        based in Mumbai, India</p>
                </div>

                <div className="hidden md:flex items-center space-x-6 font-semibold">
                    <a href="#work-experience" className="hover:underline hover:text-gray-400">Work Experience</a>
                    <a href="#professional-achievements" className="hover:underline hover:text-gray-400">Professional Achievements</a>
                    <a href="#projects" className="hover:underline hover:text-gray-400">Projects</a>
                    <a href="#hire-me" className="hover:underline hover:text-gray-400">Hire Me</a>
                </div>

                {/* Start Up*/}
                <div className="hidden md:flex items-center justify-end">
                    <button className="bg-gray-700 px-5 py-2 rounded-full hover:bg-white hover:bg-white hover:text-black transition-all duration-200 ease-in"> My Start-Up</button>
                </div>

                {/* mobile menu icon */}
                <div className="md:hidden">
                    <button onClick={toggleDrawer} className="text-2xl">
                        {
                            isDropDownOpen ? <FiX/> 
                            : <FiMenu/>
                        }
                    </button>
                </div>


            </div>

            {/* Mobile Drop Down Menu */}
            {
                isDropDownOpen && (
                    <div className="mt-3 bg-gray-800 p-4 rounded-lg md:hidden">
                        <p className="mb-4">
                        Software Engineer <br /> 
                        based in Mumbai, India</p>

                        {/* Switch */}
                    <div className="hidden md:flex relative w-10 h-5 bg-gray-700 rounded-full items-center justify-end p-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <Link
                        href="#work-experience"
                        className="block mb-2 hover:underline hover:text-gray-400"
                        onClick={toggleDrawer}
                    >
                        Work Experience
                    </Link>
                    <Link
                        href="#professional-achievements"
                        className="block mb-2 hover:underline hover:text-gray-400"
                        onClick={toggleDrawer}
                    >
                        Professional Achievements
                    </Link>
                    <Link
                        href="#projects"
                        className="block mb-2 hover:underline hover:text-gray-400"
                        onClick={toggleDrawer}
                    >
                        Projects 
                    </Link>
                    <Link
                        href="#hire-me"
                        className="block hover:underline hover:text-gray-400"
                        onClick={toggleDrawer}
                    >
                        Hire me
                    </Link>

                    </div>
                )
            }

        </header>
    )
}

export default Navbar;