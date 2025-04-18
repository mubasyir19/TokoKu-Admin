'use client';

import Link from 'next/link';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import useAuthPayload from '@/hooks/Auth/useAuthPayload';

export default function NavbarDash() {
  const router = useRouter();
  const { payload } = useAuthPayload();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleLogout = () => {
    Cookies.remove('authToken');
    router.push('/login');
  };

  return (
    <nav className='bg-white shadow'>
      <div className='mx-auto flex items-center justify-end'>
        <button onClick={handleOpenMenu} className='relative flex items-center gap-x-2 bg-gray-100 px-4 py-3'>
          {/* <Icon
            icon="material-symbols:person"
            className="h-5 w-auto text-secondary-blue"
          /> */}
          <p className='text-black text-sm'>{payload?.username}</p>
          {isOpenMenu && (
            <div className='absolute left-0 top-full w-full bg-white'>
              <ul>
                <li>
                  <Link
                    href='/dashboard/profile'
                    className='flex items-center gap-x-2 px-4 py-2 text-black duration-150 hover:bg-black hover:text-yellow-300'
                  >
                    <span className='text-sm'>Profile</span>
                  </Link>
                  <Link
                    href='#'
                    className='flex items-center gap-x-2 px-4 py-2 text-black duration-150 hover:bg-black hover:text-yellow-300'
                  >
                    <span className='text-sm'>Setting</span>
                  </Link>
                  <div
                    onClick={handleLogout}
                    className='flex items-center gap-x-2 px-4 py-2 text-black duration-150 hover:bg-black hover:text-yellow-300'
                  >
                    <span className='text-sm'>Logout</span>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
}
