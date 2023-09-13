import React from 'react';

const Projects = () => {

  const projects = [
    {
      title: 'Stark' ,
      description: 'Project in function of showing a summary and overview of the company, manipulating financial, economic and humanities metrics. ',
      photo: '/src/assets/icons/now-ui-dashboard-react.jpg',
    },
    {
      title: 'PPMS - ProServ',
      description: 'Recruitment system for sharing candidates, information, metrics between companies like ProServ, Michelin, LGI, etc',
      photo: '/src/assets/icons/proservppms.png',
    },
    {
      title: 'Airbus Ticket System',
      description: 'Airbus buddy ticket system, internal communication',
      photo: '/src/assets/icons/Screenshot 2023-09-13 at 13.40.18.png',
    },
  ];
  return (
    <div className="px-7 md:px-10 my-8" id="projects">
      <h1 className="text-3xl mt-5 text-primary font-semibold">Projects & Experiences:</h1>
      <p className="text-white my-2 md:w-2/3 leading-[2]">I have worked on many projects over the course of being System Developer,
        im gonna include my biggest ones, that were for the companies i've been working</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {
          projects.map((project, index) => <div key={index} className="flex flex-col shadow-sm md:w-[343px] bg-[#31313f] rounded p-4">
            <a href={project.photo} className="mb-4"><img src={project.photo} alt="" /></a>
            <h3 className="text-primary font-semibold text-lg">{project.title}</h3>
            <p className="text-white mt-1">{project.description}</p>
            <div className="mt-5">
              <button className="btn bg-primary py-2 px-4 text-white rounded hover:bg:white hover:text-primary transition-all duration-500">About me</button>
              <button className="btn outline py-1.5 px-9 text-white rounded border-none ml-5">Projects</button>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Projects;