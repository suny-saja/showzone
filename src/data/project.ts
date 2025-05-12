export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

export const projectList = [
  {
    id: 1,
    title: 'Portfolio By Zul',
    subtitle: 'Variant Porto 2',
    description: 'This is the best portfolio from WPH bootcamp students.',
    image: '/thumbnails/zul.png',
    link: 'https://first-porto-zul.vercel.app',
  },
  {
    id: 2,
    title: 'Portfolio By Yana',
    subtitle: 'Variant Porto 5',
    description: 'This is the best portfolio from WPH bootcamp students.',
    image: '/thumbnails/yana.png',
    link: 'https://yanasoup-portfolio5.vercel.app',
  },
  {
    id: 3,
    title: 'Portfolio By Budi Hakim',
    subtitle: 'Variant Porto 5',
    description: 'This is the best portfolio from WPH bootcamp students.',
    image: '/thumbnails/budi.png',
    link: 'https://portofolio-liard-six.vercel.app',
  },
  {
    id: 4,
    title: 'Portfolio By Dwi Hermawati',
    subtitle: 'Variant Porto 2',
    description: 'This is the best portfolio from WPH bootcamp students.',
    image: '/thumbnails/dwi.png',
    link: 'https://lp-portfolio-bice.vercel.app',
  },
  {
    id: 5,
    title: 'Portfolio By Surya',
    subtitle: 'Variant Porto 2',
    description: 'This is the best portfolio from WPH bootcamp students.',
    image: '/thumbnails/surya.png',
    link: 'https://portfolio2-ub79.vercel.app',
  },
  {
    id: 6,
    title: 'Portfolio By Singgih',
    subtitle: 'Variant Porto 5',
    description: 'This is the best portfolio from WPH bootcamp students.',
    image: '/thumbnails/singgih.png',
    link: 'https://sdwianto-portfolio1.vercel.app',
  },
  {
    id: 7,
    title: 'Portfolio By Eza Fontana Romanza',
    subtitle: 'Variant Porto 4',
    description: 'This is the best portfolio from WPH bootcamp students.',
    image: '/thumbnails/eza.png',
    link: 'https://portfolio-romanza-147.vercel.app',
  },
  {
    id: 8,
    title: 'Portfolio By Angga Wijaya',
    subtitle: 'Variant Porto 4',
    description: 'This is the best portfolio from WPH bootcamp students.',
    image: '/thumbnails/zul.png',
    link: 'https://https://portfolio-angga-wijaya.vercel.app/',
  },
  {
    id: 9,
    title: 'Portfolio By',
    subtitle: 'Variant Porto',
    description: 'This is the best portfolio from WPH bootcamp students.',
    image: '/thumbnails/zul.png',
    link: 'https://example.com/project-9',
  },
  {
    id: 10,
    title: 'Portfolio By',
    subtitle: 'Variant Porto',
    description: 'This is the best portfolio from WPH bootcamp students.',
    image: '/thumbnails/zul.png',
    link: 'https://example.com/project-10',
  },
];

export default projectList;
// export const projects: Project[] = Array.from({ length: 20 }, (_, i) => ({
//   id: i + 1,
//   title: `Project ${i + 1}`,
//   subtitle: `Subtitle for Project ${i + 1}`,
//   description: `This is a brief description of project number ${i + 1}. It showcases creativity, collaboration, and technology.`,
//   image: `https://via.placeholder.com/300x200?text=Project+${i + 1}`,
//   link: `https://${id.projectList}`,
// }));
