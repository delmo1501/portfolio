import React, { useState } from 'react';
import '../App.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
// import SwipeUpIcon from '@mui/icons-material/SwipeUp';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// photos
import { Button, Typography } from '@mui/material';
import photo1 from '../../public/assets/icons/now-ui-dashboard-react.jpg';
import photo2 from '../../public/assets/projects/andsfklasd.png';
import photo3 from '../../public/assets/projects/fourth.png';
import photo4 from '../../public/assets/projects/astro.avif';

// eslint-disable-next-line react/jsx-props-no-spreading
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

// eslint-disable-next-line react/prop-types
function Projects({ mode }) {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
      title: 'Learning Astro',
      description: 'The idea is to tell you my story, by a multi-page portfolio with Astro to learn more about it, and the islands architecture ',
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
  return (
    <div
      className="md:px-10 pr-7 pl-7 my-8"
      id="projects"
    >
      <div
        className="md:px-10 px-7 my-10 pt-1 pb-6"
        style={{
          borderRadius: '15px', backgroundColor: mode === 'light' ? 'rgba(243, 249, 247, 0.715)' : 'inherit',
        }}
      >
        <h1 className="text-primary font-semibold text-3xl mt-16">Projects & Experiences:</h1>
        <p style={{ color: mode === 'light' ? '#0c2f60' : 'white' }} className="my-3  md:w-3/4 leading-[2]">
          I have worked on many projects over the course of being a System Developer,
          and Im going to include my biggest
          ones, that were for the companies Ive been working.
        </p>
      </div>
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
              {project.title === 'Learning Astro' ? (
                <a href="https://endearing-centaur-57bad7.netlify.app/" target="_blank" rel="noreferrer" className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
                  Lets go
                </a>
              ) : (
                <Button smooth duration={500} className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
                  Display Modal
                </Button>
              )}
            </div>
          </div>
        ))}
        {showModal && (
        <Dialog
          PaperProps={{
            style: {
              backgroundColor: 'black',
              border: '1px solid white',
              width: fullScreen ? '100%' : 'auto',
              maxWidth: fullScreen ? '400px' : 'auto',
              maxHeight: fullScreen ? '40vh' : 'auto',
              padding: '10px',
              overflow: 'auto',
              boxSizing: 'border-box',
            },
          }}
          TransitionComponent={Transition}
          open={showModal}
          onClose={handleCloseModal}
          maxWidth="md"
          fullWidth
          fullScreen={fullScreen}
        >
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', marginRight: '1%',
          }}
          >
            <DialogTitle style={{
              color: 'rgba(0, 123, 255, 0.5)', textShadow: '0px 0px 2px white', height: '35px', display: 'flex', alignContent: 'center', alignItems: 'center',
            }}
            >
              <Typography variant={fullScreen ? 'h6' : 'h3'} component="div" gutterBottom sx={{ borderBottom: '1px solid #000' }}>
                {currentProject?.title}
              </Typography>
            </DialogTitle>
            <IconButton edge="end" color="inherit" onClick={handleCloseModal} aria-label="close" style={{ color: 'rgb(0, 255, 251)' }}>
              <CloseIcon />
            </IconButton>
          </div>
          <DialogContent style={{
            maxWidth: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}
          >
            <img src={currentProject?.photo} alt={currentProject?.title} style={{ width: '40%' }} />
            {currentProject?.title === 'Learning Astro' ? (
              <div style={{
                display: 'flex', flexWrap: 'wrap', flexDirection: 'column-reverse', alignItems: 'center',
              }}
              >
                <p style={{
                  flex: 1, marginLeft: '16px', color: 'rgba(0, 123, 255, 0.841)',
                }}
                >
                  Do you wanna go and see how Astro is working? Also my story!
                  <br />
                  The idea is that you click the phone on the top and try it out
                  <br />
                  Im still developing so be patient please
                </p>
                {/* <SwipeUpIcon fontSize="large" color="blue" /> */}
                <IconButton edge="end" color="inherit" onClick={handleCloseModal} aria-label="close" style={{ color: 'rgba(0, 123, 255, 0.841)' }}>
                  <AddToHomeScreenIcon onClick={() => window.open('https://endearing-centaur-57bad7.netlify.app/', '_blank')} fontSize="large" />
                </IconButton>
              </div>
            ) : (
              <p style={{
                flex: 1, marginLeft: '16px', color: 'rgba(0, 123, 255, 0.841)',
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
