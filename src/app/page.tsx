'use client';

import { useState } from 'react';

import ProjectCard from '@/components/ProjectCard';

import { projectList } from '../data/project';

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className='custom-container bg-primary-200 overflow-hidden px-4 py-8 sm:px-6 sm:py-12'>
      <nav className='custom-container top-0 mb-6 w-full bg-blue-600 p-4 text-white shadow-lg sm:mb-8'>
        <div className='flex items-center justify-between'>
          <div className='text-xl font-bold sm:text-2xl'>
            <a href='#' className='hover:text-gray-200'>
              SHOWZONE
            </a>
          </div>
          <button
            className='block focus:outline-none sm:hidden'
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
                  menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
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
      </nav>
      <h1 className='mb-6 text-center text-3xl font-bold text-red-500 sm:mb-8 sm:text-4xl'>
        Welcome to <br />
        <span className='text-blue-600'>SHOWZONE WPH BATCH 2</span>
      </h1>
      <div className='mb-8 text-center text-base text-gray-600 sm:mb-12 sm:text-2xl'>
        This is a showcase of our projects from the WPH Bootcamp. <br />
        We are a group of passionate developers who have come together to create
        amazing things. <br />
        <br />
        This is a collection of our projects, showcasing our skills and
        creativity. <br />
        We are excited to share our work with you and hope you enjoy it as much
        as we enjoyed creating it. <br />
        <br />
        <span className='text-blue-600'>Explore our projects</span> and discover
        the talent and dedication of our team. <br />
        <br />
        We are always looking for new challenges and opportunities to grow as
        developers. <br />
        If you have any questions or would like to collaborate, please feel free
        to reach out to us. <br />
        <br />
        Thank you for visiting our showcase! <br />
        <br />
        <span className='relative mb-8 text-blue-600'>Happy exploring!</span>
      </div>
      <div className='max-w-auto m-4 mt-6 grid grid-cols-1 gap-6 px-4 sm:m-8 sm:mt-10 sm:grid-cols-2 sm:gap-8 sm:px-8 md:grid-cols-3 lg:grid-cols-4'>
        {projectList.map((project, index) => (
          <div
            key={project.id}
            className={`${
              index >= projectList.length - 2
                ? 'col-span-1 flex justify-center sm:col-span-2'
                : 'items-center'
            }`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <footer className='mt-8 mb-0 bg-gray-800 py-4 text-center text-white sm:mt-12 sm:py-6'>
        <p className='text-xs sm:text-sm'>
          © {new Date().getFullYear()} SHOWZONE WPH BATCH 2. All rights
          reserved.
        </p>
        <p className='text-xs sm:text-sm'>Built with ❤️ by @muhsinsuny.</p>
      </footer>
      );
    </main>
  );
}
