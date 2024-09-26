'use client';

import Link from 'next/link';
import React from 'react';
import { BsTicketPerforated } from "react-icons/bs";
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname();
    
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' },
    ];

    return (
        <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
            <Link href="/" className="text-xl">
                <BsTicketPerforated />
            </Link>
            <ul className="flex space-x-6">
                {links.map((link) => (
                    <li key={link.label}>
                        <Link 
                            href={link.href} 
                            className={classNames(
                                'hover:text-zinc-800 transition-all duration-300', 
                                {
                                    'text-cyan-600 font-bold': link.href === currentPath,
                                    'text-zinc-900 font-normal': link.href !== currentPath
                                }
                            )}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
