import Image from 'next/image';
import Link from 'next/link';

import projectList from '../data/project';

type Props = {
  project: (typeof projectList)[number];
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={project.link} target='_blank' rel='noopener noreferrer'>
      <div className='pointer-events-auto flex h-full w-full flex-col gap-8 overflow-hidden rounded-2xl bg-white p-4 shadow-xl transition duration-300 hover:scale-105 hover:shadow-xl'>
        <div className='flex-shrink-0'>
          <Image
            src={project.image}
            alt={project.title}
            className='h-48 w-full rounded-3xl object-cover'
            width={400}
            height={400}
            loading='lazy'
            placeholder='blur'
            blurDataURL='/thumbnails/zul.png'
            sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, (min-width: 1281px) 20vw'
            quality={100}
          />
        </div>
        <div className='flex-grow'>
          <h2 className='text-xl font-semibold text-gray-800'>
            0{project.id} -{' '}
            <span className='text-blue-600'>{project.title}</span>
          </h2>
          <h3 className='text-sm text-gray-500'>{project.subtitle}</h3>
          <p className='text-sm text-wrap text-gray-700'>
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
