/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
// src/components/About.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Fade } from 'react-awesome-reveal';
import { useTheme } from '@mui/material';
import Services from './Services';
import ImageButton from './ImageButton';
import ExperienceTimeline from './ExperienceTimeline';

function About({ toggleMode, mode }) {
  const [ref] = useInView();
  const theme = useTheme();
  return (
    <div className="md:px-10 px-7" id="about">
      {/* two‑column grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10"
        style={{
          backgroundColor: mode === 'light'
            ? 'rgba(243, 249, 247, 0.715)'
            : theme.palette.grey[900],
          borderRadius: '15px',
          marginBottom: mode === 'light' ? '20px' : '0px',
        }}
      >
        <Fade direction="left">
          <div>
            <h1
              className="font-semibold text-3xl mt-5"
              style={{ color: mode === 'light' ? '#0c2f60' : 'white' }}
            >
              About me:
            </h1>
            <p
              className="my-3 leading-[2]"
              style={{ color: mode === 'light' ? '#0c2f60' : 'white' }}
            >
              Argentinian fullstack developer living in Germany.
              <br />
              Passionate about
              problem solving, mind games, and building great user experiences.
              <br />
              Lover of football, music, and my guitar.
              <br />
              PS: None of the above activities can be performed without my
              precious mate 🧉
            </p>
            <div className="md:flex my-7 items-center">
              <div className="text-primary text-8xl font-bold">4+</div>
              <p
                className="text-2xl md:ml-5"
                style={{ color: mode === 'light' ? '#0c2f60' : 'white' }}
              >
                Years of experience in frontend and backend development,
                cloud, and DevOps.
              </p>
            </div>
          </div>
        </Fade>

        <div className="relative h-96">
          <div className="tech-galaxy">
            {[
              { category: 'Frontend', icons: ['reactjs2.webp', 'nextjs.png', 'django.png'] },
              { category: 'Backend', icons: ['nodejs2.png', 'nestjs.png', 'python.webp'] },
              { category: 'DevOps & DB', icons: ['docker.webp', 'postgresql.png', 'azure.png'] },
            ].map((group, groupIndex) => (
              <div key={group.category} className="tech-group">
                <div className="tech-category">{group.category}</div>
                <div className="tech-icons-container">
                  {group.icons.map((icon, iconIndex) => (
                    <div
                      key={icon}
                      className="tech-icon-wrapper"
                      style={{
                        animationDelay: `${(iconIndex * 0.7) + (groupIndex * 0.3)}s`,
                        animationDuration: `${10 + iconIndex * 2}s`,
                      }}
                    >
                      <img
                        src={`/assets/icons/${icon}`}
                        alt={icon.split('.')[0]}
                        className="tech-icon-img"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* rest of your About... */}
      <ExperienceTimeline mode={mode} />
      <ImageButton toggleMode={toggleMode} mode={mode} />
      <div ref={ref}>
        <Services mode={mode} />
      </div>
    </div>
  );
}

export default About;
