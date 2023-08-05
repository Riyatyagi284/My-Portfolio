import React from 'react'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from './canvas'

const Hero = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer","Frontend Developer", "React Js Developer"], 
      startDelay: 300,
      typeSpeed: 10,
      backSpeed: 10,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor:true,
    });

    return () => {
      typed.destroy();
    };
  }, []);




  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-w-7xl mx-auto flex fle-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 sm:block h:40 violet-gradient' />
        </div>

        <div className='mb-[4rem]'>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Riya</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am a</p>
          <span className="text-[3.2rem] text-violet-400" ref={el}></span>
          {/* <p><a href="/RiyaResume.pdf" rel="noopener noreferrer" target="_blank" className={`${styles.heroSubText} decoration-none cursor-pointer mt-2 text-violet-400`}>Resume</a></p> */}
        </div>
      </div>

      <ComputersCanvas className="mt-[4rem]" />   

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
              animate={{y:[0,24,0]}}
                transition = {{
                  duration:1.5,
                repeat:Infinity,
                repeatType:'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              >

              </motion.div>
            </div>
        </a>
      </div>
    </section>
  )
}

export default Hero