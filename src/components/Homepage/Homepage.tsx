import { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import HeroBanner from "../HeroBanner/HeroBanner";
import FishInfoGrid from "../FishInfoGrid/FishInfoGrid";
import About from "../About/About";

function Homepage() {
  const aboutRef = useRef<HTMLDivElement>(null!);
  return (
    <div>
      <div className="bg-black min-h-screen">
        <Navbar aboutRef={aboutRef} />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <HeroBanner />
        </motion.div>

        <About aboutRef={aboutRef} />
        <FishInfoGrid />
      </div>
    </div>
  );
}

export default Homepage;
