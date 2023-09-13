import React from 'react';
import heroImg from '../assets/Willie.png';

const Home = () => {
    return (
        <div className="px-7 md:px-10 my-14 md:h-screen bg-[#1a1a29]" id="home">
            <div>
                <div className="w-full flex flex-col md:flex-row items-center justify-between">
                    {/* texts */}
                    <div className="text-white">
                        <h6 className="text-3x1 mt-12">Hello, I'm</h6>
                        <h1 className="font-semibold text-3x1 md:text-5x1 my-4">Bruno Delmoro</h1>
                        <p className="md:w-96">Fullstack self taught developer</p>
                        <div className="mt-5">
                            <button className="btn bg-primary py-2 px-4 text-white rounded hover:bg:white hover:text-primary transition-all duration-500">About me</button>
                            <button className="btn outline py-1.5 px-6 text-white rounded border-none ml-5">Projects</button>
                        </div>
                    </div>
                    <div className="order-first md:order-last relative">
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </div>
            <div className="w-full h-24 bg-[#181824] mx-auto absolute left-0 hidden md:block">

            </div>
        </div>
    );
};

export default Home;