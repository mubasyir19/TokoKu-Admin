'use client';

import ErrorModals from '@/components/molecules/ErrorModals';
import LoadingModals from '@/components/molecules/LoadingModals';
import useLoginForm from '@/hooks/Auth/useLoginForm';
import { Expletus_Sans } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

const expletus = Expletus_Sans({ subsets: ['latin'] });

export default function LoginPage() {
  const { formData, loading, error, isModalOpen, closeModal, handleChange, handleLogin } = useLoginForm();

  return (
    <section className='flex h-screen w-full'>
      <div className='hidden relative h-full w-1/2 bg-white md:block'>
        {/* <div className='h-full w-full bg-black bg-opacity-50'></div> */}
        <Image src='/images/background2.png' width={1900} height={2000} alt='splash' className='h-full w-full' />
        <div className='text-center absolute text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <h1 className={`text-5xl font-semibold mb-2 ${expletus.className}`}>TokoKu</h1>
          <p>Savoring Halal Delights Daily.</p>
        </div>
      </div>
      <div className='relative flex h-full bg-white w-full flex-col items-center justify-center md:w-1/2'>
        {/* <Image
          src="/images/logo2.png"
          height={150}
          width={200}
          alt="logo"
          className="absolute left-10 top-4 mx-auto h-8 w-auto"
        /> */}
        <div className='w-full px-10 md:w-3/5'>
          <div className='w-full text-start'>
            <p className='text-black'>Welcome back!👋</p>
            <h3 className='text-2xl font-bold text-black'>Login to your admin account</h3>
          </div>
          <form className='mt-8 flex flex-col gap-y-4' onSubmit={handleLogin}>
            <div className='form-group text-black'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                id='username'
                name='username'
                value={formData.username}
                placeholder='Enter your username'
                className='w-full rounded-lg border-2 border-gray-300 px-4 py-2 focus:border-[#FFC92B] focus:outline-none'
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group text-black'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                value={formData.password}
                placeholder='Enter your password'
                className='w-full rounded-lg border-2 border-gray-300 px-4 py-2 focus:border-[#FFC92B] focus:outline-none'
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <button
                type='submit'
                className='w-full rounded-lg bg-[#FFC92B] py-2 text-base text-white hover:bg-secondary-blue'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {loading && <LoadingModals />}
      {error && (
        <ErrorModals isOpen={isModalOpen} onClose={closeModal} title='An Error Occured'>
          <p>{error}</p>
        </ErrorModals>
      )}
    </section>
  );
}
