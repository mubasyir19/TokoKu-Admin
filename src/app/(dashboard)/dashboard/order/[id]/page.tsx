'use client';

import { useParams } from 'next/navigation';
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import React from 'react';
// import Image from 'next/image';

export default function DetailOrderPage() {
  const params = useParams();
  const { id } = params;
  console.log('ID = ', id);

  return (
    <div className='flex gap-x-4 min-h-screen'>
      <div className='w-3/4 flex flex-col gap-y-4'>
        <div className='bg-white p-4 rounded-lg'>
          <h3 className='text-base text-black font-semibold mb-5'>Produk Pesanan</h3>
          <div id='cardOrder' className='flex justify-between items-center'>
            <div className='flex items-center gap-x-2'>
              {/* <Image
            src=""
            width={100}
            height={100}
            alt="photo product"
            className="size-16"
          /> */}
              <div className='bg-gray-500 size-12'></div>
              <p className='text-black text-sm'>N-Qua Botol 1 Karton</p>
            </div>
            <div className=''>
              <p className='text-sm font-medium text-black'>Rp45.000</p>
            </div>
            <div className=''>
              <p className='text-sm font-medium text-black'>3</p>
            </div>
            <div className=''>
              <p className='text-sm font-medium text-black'>Rp45.000</p>
            </div>
          </div>
        </div>
        <div className='bg-white p-4 rounded-lg'>
          <h3 className='text-base text-black font-semibold mb-5'>Payment Summary</h3>
          <div className='flex items-center justify-between'>
            <p className='text-sm text-black font-medium'>SubTotal</p>
            <p className='text-sm text-black font-semibold'>Rp134.000</p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-sm text-black font-medium'>Delivery</p>
            <p className='text-sm text-black font-semibold'>Rp.10.000</p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-sm text-black font-medium'>Total Payment</p>
            <p className='text-sm text-black font-semibold'>Rp.10.000</p>
          </div>
        </div>
      </div>
      <div className='w-1/4 bg-white p-4 rounded-lg'>
        <h3 className='text-base text-black font-semibold'>Customer</h3>
        <div className='flex mt-2 gap-x-2 items-center'>
          <div className='size-8 rounded-full bg-gray-300'></div>
          <p className='text-gray-400 text-sm'>Mahdy Mubasyir</p>
        </div>
        <hr className='my-4' />
        {/* <div className='h-6'></div> */}
        <div className=''>
          <p className='text-base text-black font-semibold'>Contact info</p>
          <div className='flex items-center gap-x-2 mt-2'>
            <PhoneIcon className='size-4 text-yellow-500' />
            <p className='text-gray-400 text-sm'>087774026818</p>
          </div>
          <div className='flex items-start mt-2 gap-x-2'>
            <MapPinIcon className='size-6 text-yellow-500' />
            <p className='text-gray-400 text-sm'>Jl. Kemangsari 1 Gg.H.Wahab 1 no.36A, Jatibening, Bekasi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
