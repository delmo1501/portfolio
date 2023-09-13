import React from 'react';
import Services from './Services';
import photo1 from '../../src/assets/icons/code.png';
import photo2 from '../../src/assets/icons/output-onlinepngtools.png';
import photo3 from '../../src/assets/icons/output-onlinepngtools (1).png';
import photo4 from '../../src/assets/icons/git-repo.png';

const About = () => {
  const skills = [
    {name: 'FULL STACK DEVELOPMENT', image:photo1},
    {name: 'MAIN STACK', image:photo2},
    {name: 'BACK END', image:photo3},
    {name: 'REST', image:photo4},
  ];
  return (
    <div className="md:px-10 px-7 sm:-mt-44" id="about">
      <h1 className="text-primary font-semibold text-3xl mt-5">About me:</h1>
      <p className="my-3 text-white md:w-2/3 leading-[2]">
          Argentinian fullstack developer living in Germany. Passionate about
          problem solving, mind games, enjoyer of a good environment, social interaction.
          Football lover as with the music and my guitar.
          <br />
          PS: None of the above activities can be performed without my precious mate 🧉🇦🇷
      </p>
      <div className="md:flex my-7 items-center">
        <div className="text-primary text-8xl font-bold">2+</div>
        <p className="text-white text-2xl md:ml-5">Years of experience. Specialised in building apps,
             while providing a good customer
             <br/>
             experience, within my team and a good working environment to move the project forward </p>
      </div>
      {/* skills card */}
      <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div key={index} className="md:w-[256px] md:h-[254px] bg-light hover:bg-primary flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500">
            <img src={skill.image} alt={skill.name} />
            <p className="mt-3 text-2xl text-white font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
      <Services />
    </div>
  );
};

export default About;