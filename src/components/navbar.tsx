'use client';
import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='custom-container flex-between md:flex-center fixed z-20 flex h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:mb-2 md:px-28'>
      <nav className='absolute top-0 left-1/2 z-60 h-20 w-full -translate-x-1/2 rounded-b-full border-1 border-amber-200 p-4 text-white shadow-lg sm:mb-8 md:flex md:flex-row md:items-center md:justify-between'>
        <div className='flex h-20 w-full flex-row items-center justify-between md:px-4'>
          <div className='top-0 right-0 left-0 z-10 w-full items-center justify-between md:flex'>
            <div className='text-xl font-bold sm:text-2xl'>
              <a href='#' className='hover:text-gray-200'>
                SHOWZONE
              </a>
            </div>
            <button
              className='block cursor-pointer focus:outline-none sm:hidden'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
          <ul
            className={`mb:justify-between mb:flex-row mt-4 flex-col space-y-4 text-sm sm:mt-0 sm:flex sm:flex-row sm:space-y-0 sm:space-x-6 sm:text-lg ${
              menuOpen ? 'flex' : 'hidden'
            }`}
          >
            <li>
              <a href='#' className='hover:text-gray-200'>
                Home
              </a>
            </li>
            <li>
              <a href='#projects' className='hover:text-gray-200'>
                Projects
              </a>
            </li>
            <li>
              <a href='#about' className='hover:text-gray-200'>
                About
              </a>
            </li>
            <li>
              <a href='#contact' className='hover:text-gray-200'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
