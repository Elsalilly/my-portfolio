import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInWork = ({ children}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin:"0px 0px -100px 0px"});
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y:40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut"}}
        >
            {children}
        </motion.div> 
    );
};

export default FadeInWork;
