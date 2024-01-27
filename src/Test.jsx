import React, { useState } from "react";
import { motion } from "framer-motion";

function Test() {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: {
      opacity: 1,
      x: 100,
      transition: { type: "spring", stiffness: 100, damping: 100 },
    },
    hidden: { opacity: 0 },
  };
  return (
    <div className="course">
      <motion.div
        className="box"
        // initial={{opacity:0, scale:0.5}}
        variants={variants}
        transition={{ duration: 2 }}
        animate={open ? "visible" : "hidden"}
        whileHover={{ opacity: 1, scale: 2 }}
        drag
      ></motion.div>
      <button onClick={() => setOpen((prev) => !prev)}>Click</button>
    </div>
  );
}

export default Test;
