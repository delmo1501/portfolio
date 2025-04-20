/* eslint-disable linebreak-style */
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
        'Project in function of showing a summary and overview of the company, manipulating financial, economic and humanities metrics. Using Nodejs/React and being Scrum Master of a 5 persons team',
      photo: photo1,
    },
    {
      title: 'PPMS - ProServ',
      description:
        'Only developer of a Huge Logistic + Recruitment system for sharing candidates, information, metrics between companies like ProServ, Michelin, LGI. Features like automatic communication through emails, supplier competition for candidate uploading, etc.',
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
        className="md:px-10 px-7 my-10 pt-1 pb-1"
        style={{
          borderRadius: '15px', backgroundColor: mode === 'light' ? 'rgba(243, 249, 247, 0.715)' : 'inherit',
        }}
      >
        <h1 className="text-primary font-semibold text-3xl mt-5">Projects & Experiences:</h1>
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
            <h3 className="text-primary text-white font-semibold text-lg">{project.title}</h3>
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
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                width: fullScreen ? '100%' : '80%',
                maxWidth: fullScreen ? '100%' : '800px',
                maxHeight: fullScreen ? '80vh' : '80vh',
                overflow: 'hidden',
                boxSizing: 'border-box',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
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
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
            >
              {/* Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 24px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              >
                <DialogTitle style={{
                  color: '#fff',
                  padding: 0,
                  fontWeight: 600,
                }}
                >
                  <Typography variant={fullScreen ? 'h5' : 'h4'} component="div">
                    {currentProject?.title}
                  </Typography>
                </DialogTitle>
                <IconButton
                  edge="end"
                  onClick={handleCloseModal}
                  aria-label="close"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': {
                      color: '#fff',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </div>

              {/* Content */}
              <DialogContent style={{
                padding: '24px',
                display: 'flex',
                flexDirection: fullScreen ? 'column' : 'row',
                gap: '24px',
                overflow: 'auto',
              }}
              >
                <div style={{
                  flex: '0 0 auto',
                  width: fullScreen ? '100%' : '45%',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                }}
                >
                  <img
                    src={currentProject?.photo}
                    alt={currentProject?.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>

                <div style={{
                  flex: '1 1 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                >
                  {currentProject?.title === 'Learning Astro' ? (
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                    }}
                    >
                      <div style={{ flex: '1' }}>
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            lineHeight: 1.7,
                            marginBottom: '20px',
                          }}
                        >
                          Do you want to see how Astro is working? Also my story!
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            lineHeight: 1.7,
                          }}
                        >
                          The idea is that you click the button below to try it out.
                          <br />
                          Im still developing so be patient please.
                        </Typography>
                      </div>

                      <Button
                        variant="contained"
                        startIcon={<AddToHomeScreenIcon />}
                        onClick={() => window.open('https://endearing-centaur-57bad7.netlify.app/', '_blank')}
                        sx={{
                          marginTop: '24px',
                          backgroundColor: '#3b82f6',
                          color: 'white',
                          padding: '10px 20px',
                          borderRadius: '8px',
                          textTransform: 'none',
                          fontWeight: 500,
                          '&:hover': {
                            backgroundColor: '#2563eb',
                          },
                        }}
                      >
                        Visit Project
                      </Button>
                    </div>
                  ) : (
                    <div style={{ height: '100%' }}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          lineHeight: 1.7,
                        }}
                      >
                        {currentProject?.description}
                      </Typography>
                    </div>
                  )}
                </div>
              </DialogContent>
            </div>
          </Dialog>
        )}
      </div>
    </div>
  );
}

export default Projects;
