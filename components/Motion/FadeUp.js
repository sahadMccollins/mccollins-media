import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeUp = ({ children, delay, threshold }) => {
  const { ref, inView } = useInView({
    threshold: threshold ? threshold : 0.5,
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 30,
        transition: { duration: 0.5, delay: delay ? delay : 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
