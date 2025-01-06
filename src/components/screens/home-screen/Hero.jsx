import React from 'react'
import { motion } from 'framer-motion';
import { useCardTilt } from '../../../hooks/useCardTilt';
import { ben_blue, ben_white } from '../../../assets';

export default function Hero() {
  const firstCardTilt = useCardTilt();
  const secondCardTilt = useCardTilt();

  return (
    <main className='h-full md:h-screen flex-col w-screen relative flex z-0 bg-gradient-to-tr from-white from-60% to-60% to-purple-200 p-4 overflow-x-hidden'>
      <section className='rounded-3xl bg-white  flex-1 z-10 min-h-full '>

     

        <div className=' flex-col justify-center items-center hidden md:flex h-16 w-[500px] absolute top-4 right-4 bg-purple-200 rounded-tr-3xl'>

          {/* thing */}
        <div className=" absolute flex items-center justify-center top-3 -left-[87%] h-fit   w-fit ">
        <section className='flex gap-4'>

        <div className='h-5 w-5 -mr-2 bg-gradient-to-r to-[#DA70D6] from-[#DA70D6] rounded-3xl'/>

        <div className='h-5 w-7 -mr-2 bg-gradient-to-r to-[#DA70D6] from-[#DA70D6] rounded-3xl'/>

        <div className='h-5 w-10 -mr-2 bg-gradient-to-r to-[#DA70D680] from-[#DA70D6] rounded-3xl'/>

       

        <div className='h-5 w-60 -mr-2 bg-gradient-to-r to-purple-200 from-[#DA70D6] rounded-l-3xl'/>

            </section>
     
      
              <div className="relative h-12 w-12 group">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Definitions for gradients and filters */}
                  <defs>
                    {/* Radial gradient for main sphere */}
                    <radialGradient id="sphereGradient" cx="30%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#DA70D6" /> {/* purple color */}
                      <stop offset="50%" stopColor="#DA70D6" /> {/* purple color */}
                      <stop offset="100%" stopColor="#CF9FFF" /> {/* purple color */}
                    </radialGradient>

                    {/* Highlight gradient */}
                    <radialGradient id="highlightGradient" cx="35%" cy="25%" r="50%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </radialGradient>

                    {/* Drop shadow filter */}
                    {/* <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                      <feOffset dx="2" dy="4" />
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.4" />
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter> */}
                  </defs>

                  {/* Base circle with shadow */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="url(#sphereGradient)"
                    filter="url(#dropShadow)"
                    className="transition-all duration-300 group-hover:filter-none"
                  />

                  {/* Highlight overlay */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="url(#highlightGradient)"
                    className="transition-opacity duration-300 group-hover:opacity-80"
                  />

                  {/* Rim highlight */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1"
                  />

                  {/* Moving shine effect on hover */}
                  <g className="transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000">
                    <rect
                      x="35"
                      y="0"
                      width="30"
                      height="100"
                      fill="url(#highlightGradient)"
                      transform="rotate(-45 50 50)"
                      className="opacity-0 group-hover:opacity-50"
                    />
                  </g>
                </svg>
              </div>
            
            </div>
            {/* top left */}
            <div className='bg-purple-200 h-8 w-8  top-0 -left-8 absolute'>
                <div className='bg-white h-8 w-8 rounded-tr-3xl absolute'/>
            </div>
            {/* bottom left */}
            <div className='bg-white h-8 w-8 bottom-0 left-0 absolute'>
                <div className='bg-purple-200 h-full w-full rounded-bl-3xl inset-0 absolute'/>
            </div>
            {/* bottom right */}
            <div className='bg-purple-200 h-8 w-8 -bottom-8 right-0 absolute'>
                <div className='bg-white h-full w-full rounded-tr-3xl inset-0 absolute'/>
            </div>

            <nav className='flex flex-row justify-center px-6  items-center  h-full w-fit'>
                <ul className='flex flex-row justify-around gap-4 items-center h-full w-full'>
                    <li className='text-white text-base font-bold'>About</li>
                    <li className='text-white text-base font-bold'>Services</li>
                    <li className='text-white text-base font-bold'>Companies</li>
                    <li className='text-white text-base font-bold'>Contact</li>
                </ul>
            </nav>

        </div>

        {/* main content */}
        <div className='flex items-center flex-col min-[900px]:flex-row min-[900px]:px-8 justify-between h-full w-full overflow-hidden pt-40 min-[900px]:pt-0'>
          <div className='flex flex-col w-full  gap-4 pr-2'>
            <p className='min-[1124px]:text-7xl text-6xl font-extrabold  text-neutral-950'>Benjamin <br />Eisenstein Miller</p>
            <h1 className='pl-2 text-sm md:text-base max-w-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vel nulla aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error odit architecto debitis?</h1>
            <button
  class="relative py-3 mt-2 px-10 max-w-fit  text-sm font-bold nded-full overflow-hidden bg-purple-500 rounded-full transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white text-white hover:shadow-lg active:scale-95 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-purple-500 before:to-purple-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] hover:-rotate-2 before:rounded-full hover:before:left-0"
>
  Explore more
</button>
 
          </div>
          <section className='flex mt-8 min-[900px]:mt-0 w-full justify-center min-[900px]:justify-end  items-center min-[900px]:gap-12 gap-4'>
            <motion.div
              className='min-[1124px]:h-[360px] aspect-[8/11] h-48  min-[460px]:h-60  min-[900px]:h-[280px]   mt-40 bg-slate-300 overflow-hidden min-[460px]:rounded-3xl rounded-2xl'
              style={{ 
                transformStyle: "preserve-3d",
                rotateX: firstCardTilt.rotateX,
                rotateY: firstCardTilt.rotateY,
                boxShadow: firstCardTilt.shadowX.get() !== 0 
                  ? `
                    ${firstCardTilt.shadowX}px 
                    ${firstCardTilt.shadowY}px 
                    ${firstCardTilt.shadowBlur}px 
                    rgba(0, 0, 0, ${firstCardTilt.shadowOpacity})
                  `
                  : '0px 5px 15px rgba(0, 0, 0, 0.3)'
              }}
              onMouseMove={firstCardTilt.handleMouseMove}
              onMouseLeave={firstCardTilt.handleMouseLeave}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img src={ben_blue} alt="ben" className='h-full w-full object-cover'/>
            </motion.div>

            <motion.div
              className=' h-48  min-[460px]:h-60  min-[900px]:h-[280px] min-[1124px]:h-[360px] aspect-[8/11] -mt-40 bg-slate-300 overflow-hidden min-[460px]:rounded-3xl rounded-2xl'
              style={{ 
                transformStyle: "preserve-3d",
                rotateX: secondCardTilt.rotateX,
                rotateY: secondCardTilt.rotateY,
                boxShadow: secondCardTilt.shadowX.get() !== 0 
                  ? `
                    ${secondCardTilt.shadowX}px 
                    ${secondCardTilt.shadowY}px 
                    ${secondCardTilt.shadowBlur}px 
                    rgba(0, 0, 0, ${secondCardTilt.shadowOpacity})
                  `
                  : '0px 5px 15px rgba(0, 0, 0, 0.3)'
              }}
              onMouseMove={secondCardTilt.handleMouseMove}
              onMouseLeave={secondCardTilt.handleMouseLeave}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img src={ben_white} alt="ben" className='h-full w-full object-cover'/>
            </motion.div>
          </section>
         
        </div>


      </section>
    </main>
  )
}

