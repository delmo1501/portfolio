import React, { useState, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Tooltip as ReactTooltip } from 'react-tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Modal, Typography, Grow } from '@mui/material';
import { Box } from '@mui/system';

// eslint-disable-next-line react/prop-types
function Contact({ mode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [feedback, setFeedback] = useState('');

  const iconData = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/bruno-delmoro-63b92b201/', icon: <LinkedInIcon style={{ fontSize: 40, color: '#0c2f60' }} /> },
    { name: 'Instagram', href: 'https://instagram.com/bruno.delmo', icon: <InstagramIcon style={{ fontSize: 40, color: '#0c2f60' }} /> },
    { name: 'GitHub', href: 'https://github.com/delmo1501', icon: <GitHubIcon style={{ fontSize: 40, color: '#0c2f60' }} /> },
    { name: 'Email', href: 'mailto:delmo123123@gmail.com', icon: <AlternateEmailIcon style={{ fontSize: 40, color: '#0c2f60' }} /> },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://portfolio-delmo1501.vercel.app/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        console.log('Email sent successfully!');
        setOpen(true);
        setFeedback('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        console.error(data.error);
        setOpen(true);
        setFeedback('Error sending email. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred while sending the request:', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalStyle = {
    position: 'absolute',
    top: '40%',
    left: '40%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#8bcfef',
    border: '8px solid #444ce0',
    boxShadow: 24,
    borderRadius: 4,
    p: 4,
  };

  return (
    <div style={{ paddingBottom: mode === 'light' ? '20px' : '0px', borderRadius: '15px', backgroundColor: mode === 'light' ? 'rgba(243, 249, 247, 0.715)' : 'inherit' }} className="md:px-10 px-7 my-10" id="contact">
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
          <h1 style={{ color: mode === 'light' ? '#0c2f60' : 'white' }} className=" font-semibold text-3xl mt-16">
            Connect with me:
          </h1>
          <p style={{ color: mode === 'light' ? '#0c2f60' : 'white' }} className="my-3 text-white md:w-3/4 leading-[2]">
            Interesting on me? Let me know
          </p>
          {/* social icons */}
          <div className="flex ">
            {iconData.map((iconInfo) => (
              <div style={{ padding: '2%' }} key={iconInfo.name}>
                <a data-tooltip-id="my-tooltip" data-tooltip-content={iconInfo.name} className="icon" href={iconInfo.href} target="_blank" rel="noreferrer">
                  {iconInfo.icon}
                </a>
                <ReactTooltip id="my-tooltip" />
              </div>
            ))}
          </div>
        </div>
        {/* form */}
        <div className="md:w-1/2">
          <p style={{ color: mode === 'light' ? '#0c2f60' : 'white' }} className="mt-16  text-2xl mb-6">Contact me, lets make magic together</p>
          <form action="https://portfolio-qg4jn3vnf-delmo1501.vercel.app/api/send-email" method="POST" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name:" value={formData.name} onChange={handleChange} className={`mb-3 py-3 bg-opacity-10 px-3 md:w-3/4 w-full rounded ${mode === 'light' ? 'bg-[rgba(203,214,211,0.715)]' : 'bg-[#F5F5F5]'}`} />
            <input type="email" name="email" placeholder="Email:" value={formData.email} onChange={handleChange} className={`mb-3 py-3 bg-opacity-10 px-3 md:w-3/4 w-full rounded ${mode === 'light' ? 'bg-[rgba(203,214,211,0.715)]' : 'bg-[#F5F5F5]'}`} />
            <textarea name="message" id="message" cols="54" rows="4" value={formData.message} onChange={handleChange} className={`mb-3 py-3 bg-opacity-10 px-3 md:w-3/4 w-full rounded ${mode === 'light' ? 'bg-[rgba(203,214,211,0.715)]' : 'bg-[#F5F5F5]'}`} placeholder="Message:" />
            <button type="submit" className={`btn transition-all duration-500 py-2 px-12 rounded block ${mode === 'light' ? 'bg-[rgba(203,214,211,0.715)] text-primary' : 'bg-primary text-white'}`}>
              Send
            </button>
          </form>
        </div>
      </div>
      <div>
        <Modal
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          open={open}
          ref={modalRef}
        >
          <Grow in={open} timeout={800}>
            <Box sx={modalStyle}>
              <Typography style={{ fontFamily: 'Raleway, sans-serif' }} display="flex" alignContent="center" justifyContent="center" alignItems="center" id="modal-modal-title" variant="h6" component="h2">
                Email sent successfully!!
              </Typography>
            </Box>
          </Grow>
        </Modal>
      </div>
    </div>
  );
}

export default Contact;
