import React, { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3001/send-email", { // Update the URL to your backend endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (data.success) {
        // Email sent successfully, you can show a success message or redirect the user.
        console.log("Email sent successfully!");
      } else {
        // Handle the error, e.g., display an error message to the user.
        console.error(data.error);
      }
    } catch (error) {
      console.error("An error occurred while sending the request:", error);
    }
  };
  return (
    <div className="md:px-10 px-7 my-10" id="contact">
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
        <h1 className="text-primary font-semibold text-3xl mt-16">
      Connect with me:
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
      Interesting on me? Let me know
      </p>
      {/* social icons */}
      <div className="flex ">
        <a href="https://www.linkedin.com/in/bruno-delmoro-63b92b201/" target="_blank" rel="noreferrer">
          <LinkedInIcon style={{ fontSize: 40, color: '#0c2f60' }} />
        </a>
        <a className="ml-4" href="https://instagram.com/bruno.delmo" target="_blank" rel="noreferrer">
          <InstagramIcon style={{ fontSize: 40, color: '#0c2f60' }} />
        </a>
        <a className="ml-4" href="https://github.com/delmo1501" target="_blank" rel="noreferrer">
          <GitHubIcon style={{ fontSize: 40, color: '#0c2f60' }} />
        </a>
        <a className="ml-4" href="mailto:delmo123123@gmail.com" target="_blank" rel="noreferrer">
          <AlternateEmailIcon style={{ fontSize: 40, color: '#0c2f60' }} />
        </a>
      </div>
        </div>
        {/* form */}
          <div className="md:w-1/2">
              <p className="mt-16 text-white text-2xl mb-6">Contact me, let's make magic together</p>
        <form action="http://localhost:3001/send-email" method="POST" onSubmit={handleSubmit}>
                  <input type="text" name="name" placeholder="Name:" value={formData.name} onChange={handleChange} className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded "/>
                  <input type="email" name="email" placeholder="Email:" value={formData.email} onChange={handleChange} className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3"/>
                  <textarea name="message" id="message" cols="54" rows="4" value={formData.message} onChange={handleChange} className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2" placeholder="Message:"></textarea>
                  <button type="submit" className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-white hover:bg-white hover:text-primary block">
                    Send
                  </button>
        </form>
          </div>
      </div>
    </div>
  );
};

export default Contact;