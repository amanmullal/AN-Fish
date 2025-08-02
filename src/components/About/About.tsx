import React from "react";
import { motion } from "framer-motion";
import { Building, Award, Globe2 } from "lucide-react";

interface AboutProps {
  aboutRef: React.RefObject<HTMLHeadingElement>;
}

const About: React.FC<AboutProps> = ({ aboutRef }) => {
  return (
    <div
      className="px-6 md:px-20 py-16 bg-gradient-to-b from-blue-50 to-white font-Mainlux"
      ref={aboutRef}
    >
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2
          className="text-4xl md:text-5xl font-bold text-anBlueDark mb-6"
          id="about"
        >
          About An-Fish
        </h2>
        <p className="text-lg text-gray-600">
          An-Fish is your trusted destination for premium quality seafood,
          serving freshness and excellence to thousands of happy customers
          across our growing network of branches. We take pride in being the
          finest fish provider in the region.
        </p>
      </motion.div>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-lg shadow-xl p-8 rounded-2xl hover:shadow-2xl transition"
        >
          <div className="bg-blue-100 w-14 h-14 flex items-center justify-center rounded-full mb-5">
            <Building className="text-blue-800" />
          </div>
          <h3 className="text-2xl font-semibold text-blue-900 mb-2">
            10+ Branches
          </h3>
          <p className="text-gray-600">
            We’re proudly operating in over 10 cities across India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-lg shadow-xl p-8 rounded-2xl hover:shadow-2xl transition"
        >
          <div className="bg-yellow-100 w-14 h-14 flex items-center justify-center rounded-full mb-5">
            <Award className="text-yellow-600" />
          </div>
          <h3 className="text-2xl font-semibold text-yellow-800 mb-2">
            Best Fish Provider
          </h3>
          <p className="text-gray-600">
            Honored with the Best Fish Provider Award 2024 for unmatched
            quality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-lg shadow-xl p-8 rounded-2xl hover:shadow-2xl transition"
        >
          <div className="bg-green-100 w-14 h-14 flex items-center justify-center rounded-full mb-5">
            <Globe2 className="text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold text-green-700 mb-2">
            New Dubai Branch
          </h3>
          <p className="text-gray-600">
            We're now global! Visit our newly launched branch in Dubai.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
