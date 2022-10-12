import React, { useState } from 'react';

// import components
import NavMobile from './NavMobile';
// import logo
import LogoWhite from '../assets/img/header/logo-white.png';
import LogoDark from '../assets/img/header/logo-dark.png';
// import motion
import { motion } from 'framer-motion';

const navMobileVariants = {
  hidden: {
    clipPath: 'circle(6.2% at 1% 1%)',
    opacity: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  show: {
    opacity: 1,
    clipPath: `circle(139.5% at 1% 2%)`,
    transition: {
      type: 'spring',
      stiffness: 40,
    },
  },
};

const menuBarRotateLeft = {
  hidden: { rotate: 0 },
  show: {
    rotate: -45,
    translateY: 2,
  },
};

const menuBarRotateRight = {
  hidden: { rotate: 0 },
  show: {
    rotate: 45,
  },
};

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header className='fixed w-full max-w-[1800px]'>
      <div className='container mx-auto'>
        <div className='text-white flex justify-between items-center py-[70px]'>
          {/* menu btn */}
          <div
            className={`${
              navMobile ? 'bg-accent gap-y-0' : 'bg-transparent gap-y-2'
            } flex flex-col items-center justify-center w-12 h-12 `}
            onClick={() => setNavMobile(!navMobile)}
          >
            <motion.div
              variants={menuBarRotateLeft}
              initial='hidden'
              animate={navMobile ? 'show' : ''}
              className='w-10 h-[2px] bg-white'
            ></motion.div>
            <motion.div
              variants={menuBarRotateRight}
              initial='hidden'
              animate={navMobile ? 'show' : ''}
              className='w-10 h-[2px] bg-white'
            ></motion.div>
          </div>
          {/* logo */}
          <div>
            <img src={LogoWhite} alt='' />
          </div>
          {/* social icons */}
          <div>social icons</div>
          {/* nav mobile */}
          <motion.div
            variants={navMobileVariants}
            initial='hidden'
            animate={navMobile ? 'show' : ''}
            className='bg-accent w-[310px] absolute h-screen xl:left-0 top-0 bottom-0 z-10'
          >
            <NavMobile />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;