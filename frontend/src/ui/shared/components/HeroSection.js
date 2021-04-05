import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/fadeIn';
import { Link } from "react-router-dom";


export const HeroSection = () => {
    return (
        <>
            <section className='hero-image min-h-screen'>
                <div className='overlay'>
                    <h1 className='lg:text-8xl md:text-6xl sm:text-5xl text-3xl px-6'>
                        <motion.div initial={fadeIn.hidden} animate={fadeIn.visible} transition={{ duration: 1.5 }}
                                    variants={fadeIn}>
                            <span className='text-indigo-300'>Passionate</span> fullstack web developer.
                        </motion.div>
                    </h1>
                    <div
                        className='text-indigo-200 lg:text-5xl md:text-3xl sm:text-2xl text-xl flex flex-row gap-1'>
                        <motion.div initial={fadeIn.hidden} animate={fadeIn.visible} transition={{ duration: 2.5 }}
                                    variants={fadeIn}>
                            <span className='text-yellow-500 pl-4'>Always </span>
                            <span className='text-white'>learning.</span>
                        </motion.div>
                        <motion.div initial={fadeIn.hidden} animate={fadeIn.visible} transition={{ duration: 2.5 }}
                                    variants={fadeIn}>
                            <span className='text-yellow-500'>Always </span>
                            <span className='text-white pr-4'>growing.</span>
                        </motion.div>
                    </div>
                    <div className='flex gap-2'>
                        <a href='#about' className='btn btn-primary shadow-lg'>About Kyle</a>
                        <a href='https://www.dropbox.com/s/tphpwff3vc7ggtg/kyle-mayer-resume-2021.pdf?dl=0'
                           target='_blank' rel='noreferrer' className='btn btn-secondary'>Get Resume</a>
                        <Link to="/portfolio" className="btn btn-primary">Portfolio</Link>
                    </div>
                </div>
            </section>
        </>
    );
};