/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
// src/components/ExperienceTimeline.jsx
import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@mui/lab';
import {
  Typography, Paper, useTheme, Avatar,
} from '@mui/material';

// Update each entry with the logo path in public/assets/icons
const experiences = [
  {
    company: 'The Adecco Group',
    date: 'Mar 2024 – Present',
    icon: '/assets/icons/adecco.png',
    description: 'Only developer for a large project using Django/Python (Logistic, Recruitment + AI) and maintenance of a React/Nodejs project',
  },
  {
    company: 'Akkodis',
    date: 'May 2022 – Mar 2024',
    icon: '/assets/icons/akkodis.png',
    description: 'Developer of 2 systems, using React/Nodejs and React/NestJS. Handling a team of 5 persons',
  },
  {
    company: 'PrimeroSystems',
    date: 'Mar 2021 – Oct 2021',
    icon: '/assets/icons/primero.ico',
    description: 'Working with React Framework and working with .NET, C#, CSS, HTML and Javascript',
  },
];

export default function ExperienceTimeline() {
  const theme = useTheme();

  return (
    <div id="experience" className="mb-10">
      <Timeline position="alternate">
        {experiences.map((exp, idx) => (
          <TimelineItem key={idx}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align={idx % 2 === 0 ? 'right' : 'left'}
            >
              <Typography variant="body2" color="textSecondary">
                {exp.date}
              </Typography>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot>
                <Avatar
                  alt={exp.company}
                  src={exp.icon}
                  sx={{ width: 32, height: 32 }}
                />
              </TimelineDot>
              {idx < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Paper
                elevation={3}
                style={{ borderRadius: '15px' }}
                sx={{
                  p: 2,
                  backgroundColor:
                    theme.palette.mode === 'light'
                      ? 'rgba(243, 249, 247, 0.715)'
                      : theme.palette.grey[900],
                }}
              >
                <Typography variant="h6" component="span">
                  {exp.company}
                </Typography>
                <Typography sx={{ mt: 1 }}>{exp.description}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
