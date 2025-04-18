'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface SidebarItemProps {
  href: string;
  label: string;
  isLinkActive?: boolean;
}

export default function SidebarItem({ href, label, isLinkActive }: SidebarItemProps) {
  const pathname = usePathname();
  const mainRoute: string = 'dashboard';
  const route = `/${mainRoute}/${href}`;
  const linkActive = (path: string) => pathname.startsWith(path);

  const isActive = isLinkActive ? linkActive(route) : pathname === `/${mainRoute}`;

  return (
    <Link
      href={route}
      className={`flex px-6 py-2 text-black ${
        isActive ? 'bg-black text-white' : 'bg-none duration-150 hover:bg-black hover:text-white'
      }`}
    >
      <span className='text-base'>{label}</span>
    </Link>
  );
}
