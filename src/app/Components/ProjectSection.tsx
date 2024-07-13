import ProjectCard from './ProjectCard';

const projects = [
  {
    name: 'To-do List',
    isPrivate: false,
    description: 'Modern To do list,Can also be ,modified to a shopping List #Its a javascript refresher for Crud operations...Thanks for watching.',
    techStack: ['javascript', 'CSS'],
    githubLink: 'https://github.com/HellenAchiengNyandara/Modern_To_Do_List',
    liveLink: 'https://modern-mtodolist.netlify.app/',
  },
  {
    name: 'Web Content Integration',
    isPrivate: true,
    description: 'The Goal of the assignment is to gain practical experienc in integrating diverse web content.',
    techStack: ['html', 'javascript', 'CSS'],
    githubLink: 'https://github.com/HellenAchiengNyandara/AZ-WebContent',
    liveLink: 'https://github.com/HellenAchiengNyandara/AZ-WebContent',
  },
  {
    name: 'Kwintech Digital Solution',
    isPrivate: true,
    description: 'A company website for Kwintech digital solution.',
    techStack: ['React js', 'tailwind CSS'],
    githubLink: 'https://github.com/HellenAchiengNyandara/kwintech',
    liveLink: 'https://www.kwintechdigitalsolutions.com/',
  },
];

const ProjectSection = () => {
  return (
    <div id='projects' className='text-white flex flex-col justify-center sm:items-center sm:min-h-screen gap-8 my-8 sm:m-0 sm:gap-20'>
      <h1 className="text-xl font-bold mb-6">My Projects</h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;