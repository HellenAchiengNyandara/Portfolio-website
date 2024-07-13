import Image from 'next/image';
import Link from 'next/link';
import github2 from '../../../public/images/github2.png';
import externalicon from '../../../public/images/externalicon.png';

interface Project {
  name: string;
  isPrivate: boolean;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] transition ease-in-out delay-1 hover:-translate-y-1 hover:scale-110 hover:bg-grey-500 duration-300 rounded-md border border-neutral-800 bg-black-900/50 p-8 text-center shadow" id="projects">
      <div className="header flex justify-between mb-4">
        <div className='flex gap-3 items-center'>
          <Link href={project.githubLink} target='_blank'>
            <Image src={github2} alt="GitHub" width={50} height={50} />
          </Link>
          <Link href={project.liveLink} target='_blank'>
            <Image src={externalicon} alt="Live" width={50} height={50} />
          </Link>
        </div>
      </div>
      <h1 className='flex gap-3 items-center'>
        <p className='font-bold text-xl text-[#44bd7f]'>{project.name}</p>
        {project.isPrivate ? (
          <p className='flex gap-2 justify-center items-center px-3 py-1 rounded-full bg-red-800 text-white h-fit'>
            Private
          </p>
        ) : (
          <p className='flex gap-2 justify-center items-center px-3 py-1 rounded-full border border-blue-800 text-blue-800 h-fit'>
            Public
          </p>
        )}
      </h1>
      <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-black-400">{project.description}</p>
      <div className="technologies flex-wrap mb-20">
        {project.techStack.map((tech, index) => (
          <span key={index} className="tech bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
