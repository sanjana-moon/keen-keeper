'use client'
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const pathname = usePathname()

    const link = <>
        <li><Link href="/" className={`pb-2 font-semibold ${pathname === '/' ?
            'border-b-2 border-purple-500 text-violet-500' : ''}`}>Home</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <GiHamburgerMenu />
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold text-[#244D3F]">
                    <span className='text-[#1F2937]'>Keen</span>Keeper</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;