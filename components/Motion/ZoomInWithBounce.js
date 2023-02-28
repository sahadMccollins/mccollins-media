import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ZoomInWithBounce = ({ children, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Change threshold value to customize when the animation triggers
    triggerOnce: true,
  });

  const variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        damping: 20,
        stiffness: 300,
        type: "spring",
        delay: delay ? delay : 0,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ZoomInWithBounce;
