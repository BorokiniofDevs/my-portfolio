import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        {/* <span>BorokiniOfDevs</span> */}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          BorokiniOfDevs
        </motion.span>
        <div className="social">
          <img src="/facebook.png" alt="" />
          <img src="/X_logo.jpg" alt="" />
          <img src="/instagram.png" alt="" />
          <img src="/linkedIn.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
