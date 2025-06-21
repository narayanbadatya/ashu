export const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50, rotateY: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateY: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      type: "spring",
      bounce: 0.3,
    },
  },
};
