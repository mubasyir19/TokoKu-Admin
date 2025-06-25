'use client';

import { useParams } from 'next/navigation';
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import React from 'react';
import useFetchUserOrder from '@/hooks/Order/useFetchUserOrder';
import { formatPrice } from '@/helpers/helper';
// import Image from 'next/image';

export default function DetailOrderPage() {
  const params = useParams();
  const { userId, orderId } = params;
  const { dataUserOrder } = useFetchUserOrder({ userId: userId as string, orderId: orderId as string });

  return (
    <>
      <h1 className='text-xl text-black font-semibold'>
        Pesanan <span className='bg-[#FFC92B]'>TK-503553</span>
      </h1>
      <div className='mt-5 flex gap-x-4 min-h-screen'>
        <div className='w-3/4 flex flex-col gap-y-4'>
          <div className='bg-white p-4 rounded-lg'>
            <h3 className='text-lg text-black font-semibold mb-5'>Produk Pesanan</h3>
            {dataUserOrder?.OrderItem.map((item) => {
              return (
                // <div key={item.id} id='cardOrder' className='flex justify-between items-center'>
                <div key={item.id} id='cardOrder' className='grid grid-cols-4 place-content-center space-y-1'>
                  <div className='flex items-center gap-x-2'>
                    {/* <Image src={item.product.photo} width={100} height={100} alt='photo product' className='size-16' /> */}
                    <div className='bg-gray-500 size-12'></div>
                    <p className='text-black flex-1 text-sm line-clamp-1'>{item.product.name}</p>
                  </div>
                  <div className='flex flex-col items-center justify-center text-center'>
                    <p className='text-sm font-medium text-black'>{formatPrice(item.product.price)}</p>
                  </div>
                  <div className='flex flex-col items-center justify-center text-center'>
                    <p className='text-sm font-medium text-black'>{item.quantity}</p>
                  </div>
                  <div className='flex flex-col items-center justify-center text-center'>
                    <p className='text-sm font-medium text-black'>{formatPrice(item.subTotal)}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='bg-white p-4 rounded-lg'>
            <h3 className='text-lg text-black font-semibold mb-5'>Payment Summary</h3>
            <div className='space-y-3'>
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
          <div className=''>
            <h3 className='text-lg text-black font-semibold mb-5'>Order Tracking</h3>
            <ol className='relative border-s border-gray-200 dark:border-gray-700'>
              <li className='mb-10 ms-4'>
                <div className='absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-black'></div>
                <p className='mb-1 text-base font-semibold text-gray-400'>Today</p>
                <div className='bg-white p-4 rounded-lg'>
                  <h3 className='text-base font-semibold text-black'>Pesanan Sedang Di Proses</h3>
                  <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                    1st place in the sub-district level futsal competition + Score 10 (Perfect) in the National Exam,
                    Science (IPA) subject
                  </p>
                </div>
              </li>
              <li className='mb-10 ms-4'>
                <div className='absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-black'></div>
                <p className='mb-1 text-base font-semibold text-gray-400'>26-06-2025</p>
                <div className='bg-white p-4 rounded-lg'>
                  <h3 className='text-base font-semibold text-black'>Pesanan Sedang Diantar</h3>
                  <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                    1st place in the sub-district level futsal competition + Score 10 (Perfect) in the National Exam,
                    Science (IPA) subject
                  </p>
                </div>
              </li>
              <li className='mb-10 ms-4'>
                <div className='absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-black'></div>
                <p className='mb-1 text-base font-semibold text-gray-400'>27-06-2025</p>
                <div className='bg-white p-4 rounded-lg'>
                  <h3 className='text-base font-semibold text-black'>Pesanan Sudah Diterima</h3>
                  <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                    1st place in the sub-district level futsal competition + Score 10 (Perfect) in the National Exam,
                    Science (IPA) subject
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className='w-1/4 h-fit bg-white p-4 rounded-lg'>
          <h3 className='text-base text-black font-semibold'>Customer</h3>
          <div className='flex mt-2 gap-x-2 items-center'>
            <div className='size-8 rounded-full bg-gray-300'></div>
            <p className='text-gray-400 text-sm'>{dataUserOrder?.user.name}</p>
          </div>
          <hr className='my-4' />
          {/* <div className='h-6'></div> */}
          <div className=''>
            <p className='text-base text-black font-semibold'>Contact info</p>
            <div className='flex items-center gap-x-2 mt-2'>
              <PhoneIcon className='size-4 text-yellow-500' />
              <p className='text-gray-400 text-sm'>{dataUserOrder?.user.phoneNumber}</p>
            </div>
            <div className='flex items-start mt-2 gap-x-2'>
              <MapPinIcon className='size-6 text-yellow-500' />
              <p className='text-gray-400 text-sm'>{dataUserOrder?.user.address}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
