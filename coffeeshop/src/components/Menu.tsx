import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import CartIcon from './CartIcon';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;

  const toggleMenu = () => {
    setOpen(!open);
  };

  let links = [
    {
      id: 1,
      name: 'Home',
      url: '/', // Corrected URL for Home link
    },
    {
      id: 2,
      name: 'Contact Us',
      url: '/',
    },
    {
      id: 3,
      name: 'About Us',
      url: '/',
    },
    {
      id: 4,
      name: 'Menu',
      url: '/menuitems',
    },
  ];

  return (
    <div>
      {open ? (
        <button onClick={toggleMenu}>
          {' '}
          <Image src="/open.png" alt="hamburger menu image" width={20} height={20} />{' '}
        </button>
      ) : (
        <>
          <button onClick={toggleMenu}>
            <Image src="/close.png" alt="exit image" width={20} height={20} />
          </button>
          <div className='bg-amber-800 text-white absolute right-0 top-24 w-full h-[calc(100vh-6rem)] flex items-center justify-center flex-col gap-8 text-2xl z-10'>
            {links.map((link) => (
              <div key={link.id}>
                <Link onClick={() => setOpen(true)} href={link.url}>
                  {link.name}
                </Link>
              </div>
            ))}
            {!user ? (
              <Link onClick={() => setOpen(true)} href="/login">
                {' '}
                Login{' '}
              </Link>
            ) : (
              <Link onClick={() => setOpen(true)} href="/orders">
                {' '}
                Orders{' '}
              </Link>
            )}
            <CartIcon />
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
