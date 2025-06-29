'use client';

import Navbar from '@/components/navbar';
import ProjectCard from '@/components/ProjectCard';

import { projectList } from '../data/project';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className='custom-container relative top-0 z-1 overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4'>
        <div className='relative'>
          <div className='relative flex h-screen flex-col items-center justify-center text-center md:mt-8'>
            <h1 className='mb-6 text-center text-3xl font-bold text-red-500 sm:mb-8 sm:text-4xl'>
              Welcome to <br />
              <span className='text-white'>SHOWZONE WPH BATCH 2</span>
            </h1>
            <div
              id='about'
              className='text-center text-base text-gray-800 sm:text-2xl'
            >
              This is a showcase of our projects from the WPH Bootcamp. <br />
              We are a group of passionate developers who have come together to
              create amazing things. <br />
              <br />
              This is a collection of our projects, showcasing our skills and
              creativity. <br />
              We are excited to share our work with you and hope you enjoy it as
              much as we enjoyed creating it. <br />
              <br />
              <span className='text-white'>Explore our projects</span> and
              discover the talent and dedication of our team. <br />
              <br />
              We are always looking for new challenges and opportunities to grow
              as developers. <br />
              If you have any questions or would like to collaborate, please
              feel free to reach out to us. <br />
              <br />
              Thank you for visiting our showcase! <br />
              <br />
              <span className='relative text-white'>Happy exploring!</span>
            </div>
          </div>
          <div
            id='projects'
            className='max-w-auto relative grid grid-cols-1 gap-6 px-4 sm:m-8 sm:grid-cols-2 sm:gap-8 sm:px-8 md:grid-cols-3 lg:grid-cols-4'
          >
            {projectList.map((project, index) => (
              <div
                key={project.id}
                className={`${
                  index >= projectList.length - 1
                    ? 'col-span-1 flex justify-center sm:col-span-1'
                    : 'items-center'
                }`}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <footer
            className='relative mt-8 mb-0 h-20 rounded-t-full bg-gray-800 py-4 text-center text-white sm:mt-12 sm:py-6'
            id='contact'
          >
            <p className='text-xs sm:text-sm'>
              © {new Date().getFullYear()} SHOWZONE WPH BATCH 2. All rights
              reserved.
            </p>
            <p className='text-xs sm:text-sm'>Built with ❤️ by @muhsinsuny.</p>
          </footer>
        </div>
      </main>
    </>
  );
}
