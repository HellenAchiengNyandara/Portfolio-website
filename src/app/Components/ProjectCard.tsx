import Image from 'next/image';
import Link from 'next/link';
import github2 from '../../../public/images/github2.png';

const ProjectCard = ({ project }) => {
  return (
    <section className="text-white border-r-8 p-20" id="projects">
      <div className="project p-3 rounded-xl">
        <div className="header flex justify-between mb-4">
          
          <div className='flex gap-3 items-center'>
            <Link href={project.githubLink} target='_blank'>
              <Image src={github2} alt="GitHub" width={50} height={50} />
            </Link>
            <Link href={project.liveLink} target='_blank'>
              <Image src="/external-link-icon.png" alt="Live" width={50} height={50} />
            </Link>
          </div>
        </div>
        <h1 className='flex gap-3 items-center'>
          <p className='font-bold text-xl text-[#44bd7f]'>{project.name}</p>
          {project.isPrivate ? (
            <p className='flex gap-2 justify-center items-center px-3 py-1 rounded-full bg-blue-800 text-white h-fit'>
              Private
            </p>
          ) : (
            <p className='flex gap-2 justify-center items-center px-3 py-1 rounded-full border border-blue-800 text-blue-800 h-fit'>
              Public
            </p>
          )}
        </h1>
        <p className="my-5 text-black">{project.description}</p>
        <div className="technologies flex-wrap mb-20">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
