import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion'


import { styles } from "../styles";
import { github } from '../assets';
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";



const ProjectCard = (index, name, description, tags, image, source_code_url) => {
  return ( 
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]"></div>
      </Tilt>

    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>
          My Works
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>
      <div 
        className="w-full flex"
      >
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
           The following projects serve as tangible demonstrations of my skills and expertise, showcasing real-world instances of my work. 
           Each project is succinctly described, accompanied by links to both code repositories and live demos. 
           These examples underscore my proficiency in tackling intricate challenges, adeptness with diverse technologies, and effective project management.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              {...project}
              index={index}
            />
          ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
