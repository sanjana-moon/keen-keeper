'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineMoreTime } from 'react-icons/md';
import { RiDashboardFill } from 'react-icons/ri';

const Navbar = () => {
    const pathname = usePathname()

    const link = <div className='flex gap-3 items-center justify-center'>
        <li>
            <Link href="/" className={`pb-2 font-semibold border ${pathname === '/' ?
                'bg-[#244D3F] text-white' : ''}`}><RiDashboardFill />Dashboard</Link>
        </li>
        <li>
            <Link href="/timeline" className={`pb-2 font-semibold border ${pathname === '/timeline' ?
                'bg-[#244D3F] text-white' : ''}`}><MdOutlineMoreTime />Timeline</Link>
        </li>
        <li>
            <Link href="/stats" className={`pb-2 font-semibold border ${pathname === '/stats' ?
                'bg-[#244D3F] text-white' : ''}`}><MdOutlineMoreTime />Stats</Link>
        </li>
    </div>

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