import React from 'react';
import { Link } from 'react-scroll';
import photo1 from '../assets/icons/now-ui-dashboard-react.jpg';
import photo2 from '../assets/projects/andsfklasd.png';
import photo3 from '../assets/projects/Screenshot 2023-09-13 at 14.32.29.png';

const Projects = () => {
  const projects = [
    {
      title: 'Stark',
      description:
        'Project in function of showing a summary and overview of the company, manipulating financial, economic and humanities metrics.',
      photo: photo1,
    },
    {
      title: 'PPMS - ProServ',
      description:
        'Recruitment system for sharing candidates, information, metrics between companies like ProServ, Michelin, LGI, etc',
      photo: photo2,
    },
    {
      title: 'Airbus Ticket System',
      description: 'Airbus buddy ticket system, internal communication',
      photo: photo3,
    },
  ];

  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <h1 className="text-primary font-semibold text-3xl mt-16">Projects & Experiences:</h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
        I have worked on many projects over the course of being a System Developer, and I'm going to include my biggest
        ones, that were for the companies I've been working.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            style={{ flex: '1', minWidth: '300px', maxWidth: '343px', height: '100%', flexDirection: 'column', justifyContent: 'space-between' }} // Added styles here
          >
            <a href={project.photo} target="_blank" rel="noreferrer" className="mb-4">
              <img src={project.photo} alt={project.title} />
            </a>
            <h3 className="text-primary font-semibold text-lg">{project.title}</h3>
            <p className="text-white mt-1">{project.description}</p>
            <div className="mt-5">
              <Link to="about" smooth={true} duration={500} className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
                About me
              </Link>
              <Link to="projects" smooth={true} duration={500} className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white">
                Projects
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
