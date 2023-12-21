import React, { useState } from 'react';
import { JackInTheBox } from 'react-awesome-reveal';
import services from '../../public/services';

function Services() {
  const [shadows, setShadows] = useState({});

  const handleMouseMove = (id) => (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const left = x < rect.width / 2 ? '-10px' : '10px';
    const top = y < rect.height / 2 ? '-10px' : '10px';
    setShadows({ ...shadows, [id]: `${left} ${top} 20px rgba(41, 12, 203, 0.8)` });
  };

  return (
    <div>
      <JackInTheBox direction="left">
        <h1 className="text-primary font-semibold text-3xl mt-14">Services</h1>
      </JackInTheBox>
      <div className="grid md:grid-cols-3 my-8 gap-5">
        {services.map((service) => (
          <article
            key={service.id}
            onMouseMove={handleMouseMove(service.id)}
            style={{ boxShadow: shadows[service.id] || '' }}
            className="service-card flex flex-col justify-center items-center p-6 text-center text-white"
          >
            <img src={service.image} alt="" className="mb-3" />
            <h6 className="text-2xl mb-4">{service.name}</h6>
            <p className="text-base">{service.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Services;
