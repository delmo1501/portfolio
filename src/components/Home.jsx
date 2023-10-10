import React from 'react';
import heroImg from '../../public/assets/Willie.png';
import middleImg from '../../public/assets/icons/MERN.png';

const Home = () => {
    return (
        <div className='md:px-10 px-7 my-14 bg-[#121213] custom-home' id='home'>
            <div>
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    {/* image & content */}
                    {/* text */}
                    <div className='text-white'>
                        <h6 className='text-3xl mt-12'>Hello, I'm</h6>
                        <h1 className='font-semibold md:text-5xl my-4 text-3xl'>Bruno Delmoro</h1>
                        <p className='md:w-96'>Fullstack self-taught developer. I create seamless web experiences for end-users, group worker, sport and music lover.</p>
                        <div className='mt-5'>
                            <button className='btn transition-all duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary'>About me</button> 
                            <button className='btn outline py-1.5 px-6 rounded border-none ml-5 text-white '>Projects</button>
                        </div>
                    </div>
                    {/* img */}
                    <div className='order-first md:order-last relativo'>
                        <img src={middleImg} alt="" />
                    </div>
                    <div className='relative'>
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className='h-24 bg-[#13131c] w-full mx-auto absolute left-0 hidden md:block'>
            </div>
        </div>
    );
};

export default Home;