export const fadeIn = (direction, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: duration,
        // ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

export const plateVariants = {
  hidden: {
    x: '120%',
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      duration: 2,
      delay: 0.3,
    },
  },
};
