'use client';
import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='custom-container flex-between fixed top-0 left-1/2 z-50 h-20 w-full -translate-x-1/2 rounded-b-full bg-gray-800 bg-gradient-to-r p-4 text-white opacity-80 shadow-2xl sm:mb-8 md:flex md:flex-row md:items-center md:justify-between md:px-28'>
      <div className='flex-between flex w-full flex-row md:px-4'>
        <div className='flex w-full items-center justify-between px-4 md:flex'>
          <div className='text-xl font-bold sm:text-2xl'>
            <a href='#' className='hover:text-gray-200'>
              SHOWZONE
            </a>
          </div>
          <button
            className='block cursor-pointer focus:outline-none md:hidden'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle menu'
            type='button'
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
                  menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
        <ul
          className={`mt-4 flex-col space-y-4 text-sm md:mt-0 md:flex md:flex-row md:space-y-0 md:space-x-6 md:text-lg ${
            menuOpen ? 'flex' : 'hidden'
          } md:flex`}
        >
          <li>
            <a href='#' className='cursor-pointer hover:text-gray-200'>
              Home
            </a>
          </li>
          <li>
            <a href='#projects' className='cursor-pointer hover:text-gray-200'>
              Projects
            </a>
          </li>
          <li>
            <a href='#about' className='cursor-pointer hover:text-gray-200'>
              About
            </a>
          </li>
          <li>
            <a href='#contact' className='cursor-pointer hover:text-gray-200'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
