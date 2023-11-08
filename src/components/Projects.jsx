import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../App.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
// import SwipeUpIcon from '@mui/icons-material/SwipeUp';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

// photos
import photo1 from '../../public/assets/icons/now-ui-dashboard-react.jpg';
import photo2 from '../../public/assets/projects/andsfklasd.png';
import photo3 from '../../public/assets/projects/Screenshot 2023-09-13 at 14.32.29.png';
import photo4 from '../../public/assets/projects/chat.png';

// eslint-disable-next-line react/jsx-props-no-spreading
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

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
    {
      title: 'Try my live chat',
      description: 'Trying a live chat with socket.io, Reactjs and Nodejs',
      photo: photo4,
    },
  ];

  const handleCardClick = (event, project) => {
    event.preventDefault();
    setCurrentProject(project);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  console.log(showModal, currentProject);
  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <h1 className="text-primary font-semibold text-3xl mt-16">Projects & Experiences:</h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
        I have worked on many projects over the course of being a System Developer,
        and Im going to include my biggest
        ones, that were for the companies Ive been working.
      </p>
      <div className="grid my-8 gap-5">
        {projects.map((project, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="project-card"
            style={{
              flex: '1', minWidth: '300px', maxWidth: '343px', height: '100%', flexDirection: 'column', justifyContent: 'space-between',
            }}
            // eslint-disable-next-line no-restricted-globals
            onClick={() => handleCardClick(event, project)}
            onKeyPress={() => handleCardClick(project)}
            role="button"
            tabIndex={0}
          >
            <a href={project.photo} target="_blank" rel="noreferrer" className="mb-4">
              <img src={project.photo} alt={project.title} />
            </a>
            <h3 className="text-primary font-semibold text-lg">{project.title}</h3>
            <p className="text-white mt-1">{project.description}</p>
            <div className="mt-5">
              {project.title === 'Try my live chat' ? (
                <a href="https://majestic-brioche-96b829.netlify.app" target="_blank" rel="noreferrer" className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
                  Lets go
                </a>
              ) : (
                <>
                  <Link to="about" smooth duration={500} className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
                    About me
                  </Link>
                  <Link to="projects" smooth duration={500} className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white">
                    Projects
                  </Link>
                </>
              )}
            </div>
          </div>
        ))}
        {showModal && (
        <Dialog PaperProps={{ style: { backgroundColor: 'rgba(0, 123, 255, 0.5)', border: '1px solid white' } }} TransitionComponent={Transition} open={showModal} onClose={handleCloseModal} maxWidth="md" fullWidth>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', marginRight: '1%',
          }}
          >
            <DialogTitle style={{
              color: '#0c2f60', textShadow: '0px 0px 4px white', borderRadius: '15px', border: '1px solid withe', backgroundColor: 'rgb(0, 255, 251)', height: '35px', display: 'flex', alignContent: 'center', alignItems: 'center',
            }}
            >
              {currentProject?.title}
            </DialogTitle>
            <IconButton edge="end" color="inherit" onClick={handleCloseModal} aria-label="close" style={{ color: 'rgb(0, 255, 251)' }}>
              <CloseIcon />
            </IconButton>
          </div>
          <DialogContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src={currentProject?.photo} alt={currentProject?.title} style={{ width: '40%' }} />
            {currentProject?.title === 'Try my live chat' ? (
              <div style={{
                display: 'flex', flexWrap: 'wrap', flexDirection: 'column-reverse', alignItems: 'center',
              }}
              >
                <p style={{
                  flex: 1, marginLeft: '16px', color: 'rgb(0, 255, 251)',
                }}
                >
                  So basically we have a live chat with
                  Socket.io, React.js and Node.js
                  <br />
                  The idea is that you click the phone on the top and try it out
                  <br />
                  Im still developing so be patient please :)
                </p>
                {/* <SwipeUpIcon fontSize="large" color="blue" /> */}
                <IconButton edge="end" color="inherit" onClick={handleCloseModal} aria-label="close" style={{ color: 'rgb(0, 255, 251)' }}>
                  <AddToHomeScreenIcon onClick={() => window.open('https://majestic-brioche-96b829.netlify.app', '_blank')} fontSize="large" />
                </IconButton>
              </div>
            ) : (
              <p style={{
                flex: 1, marginLeft: '16px', color: 'rgb(0, 255, 251)',
              }}
              >
                {currentProject?.description}
              </p>
            )}
          </DialogContent>
        </Dialog>
        )}
      </div>
    </div>
  );
}

export default Projects;
