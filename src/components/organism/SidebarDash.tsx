'use client';

import React from 'react';
import SidebarItem from '../molecules/SidebarItem';
import { Expletus_Sans } from 'next/font/google';

const expletus = Expletus_Sans({ subsets: ['latin'] });

export default function SidebarDash() {
  return (
    <aside className='w-64 overflow-y-auto bg-[#FFC92B] pb-12 text-white'>
      <div className='text-center py-6 bg-black'>
        <h1 className={`text-2xl font-semibold mb-2 ${expletus.className}`}>TokoKu</h1>
        <p className='text-xs'>Savoring Halal Delights Daily.</p>
      </div>
      <ul className='mt-4'>
        <SidebarItem href='/' label='Dashboard' />
        <p className='px-4 py-2 text-sm text-gray-400'>Master Data</p>
        <SidebarItem href='category' label='Kategori' isLinkActive={true} />
        <SidebarItem href='product' label='List Produk' isLinkActive={true} />
        <SidebarItem href='#' label='Satuan Unit' isLinkActive={true} />
        <p className='px-4 py-2 text-sm text-gray-400'>Manajemen Pesanan</p>
        <SidebarItem href='order' label='Pesanan' isLinkActive={true} />
        <p className='px-4 py-2 text-sm text-gray-400'>Pelanggan</p>
        <SidebarItem href='#' label='Akun Client' isLinkActive={true} />
        <SidebarItem href='#' label='Akun Admin' isLinkActive={true} />
      </ul>
    </aside>
  );
}
