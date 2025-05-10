'use client';

import ProjectCard from '@/components/ProjectCard';

import { projectList } from '../data/project';

export default function HomePage() {
  return (
    <main className='custom-container bg-primary-200 overflow-hidden px-6 py-12'>
      <nav className='custom-container top-0 mb-8 flex w-full items-center justify-between bg-blue-600 p-4 text-white shadow-lg'>
        <div className='text-2xl font-bold'>
          <a href='#' className='hover:text-gray-200'>
            SHOWZONE
          </a>
        </div>
        <ul className='flex space-x-6 text-lg'>
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
      <h1 className='mb-8 text-center text-4xl font-bold text-red-500'>
        Welcome to <br />
        <span className='text-blue-600'>SHOWZONE WPH BATCH 2</span>
      </h1>
      <div className='mb-12 text-center text-2xl text-gray-600'>
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

      <div className='max-w-auto m-8 mt-10 grid grid-cols-1 gap-8 px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {projectList.map((project, index) => (
          <div
            key={project.id}
            className={`${
              index >= projectList.length - 2
                ? 'col-span-2 flex justify-center'
                : 'items-center'
            }`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <footer className='mt-12 mb-0 bg-gray-800 py-6 text-center text-white'>
        <p className='text-sm'>
          © {new Date().getFullYear()} SHOWZONE WPH BATCH 2. All rights
          reserved.
        </p>
        <p className='text-sm'>Built with ❤️ by @muhsinsuny.</p>
      </footer>
    </main>
  );
}
