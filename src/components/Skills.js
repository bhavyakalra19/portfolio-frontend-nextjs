import React, { useRef, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import AllSkills from "./AllSkills";
import { useInView } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { cntx } from "@/context/context";

const Skills = ({ skillData }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const {message, setMessage} = useContext(cntx);
  return (
    <>
      <AnimatedText
        text="Skills"
        className="font-bold text-7xl mt-24 w-full text-center lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-0"
      />
      {/* <h2 className='font-bold text-7xl mt-44 w-full text-center'>Skills</h2> */}
      <h3 className="top-10 relative capitalize tracking-[3px] text-gray-500 text-2xl text-center sm:text-xl xs:text-base xs:my-0">
        Hover over a skill for current Proficiency
      </h3>
      <div ref={ref}>
        {isInView && (
          <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
            className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] py-[150px] sm:pt-[100px] sm:py-0 justify-center xl:space-y-0 mx-auto items-center"
          >
            <div className="grid grid-cols-5 gap-5 sm:grid-cols-4 sm:gap-5 xs:grid-cols-3 xs:gap-2">
              {skillData.map((skill) => <AllSkills key={skill.id} skillData={skill} dark={message}/>)}
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Skills;
