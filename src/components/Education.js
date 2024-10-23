import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon";


const Details = ({ grade, school, schoolLink, time, address }) => {

   const ref = useRef(null)

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]">
        <LiIcon reference={ref} />
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {grade}&nbsp;
          <a
            href={schoolLink}
            target={"_blank"}
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{school}
          </a>
        </h3>
        <span className="capitalize font-pacifico italic text-dark/75 dark:text-light/75 md:text-sm">
          {time} | {address}
        </span>
      </motion.div>
    </li>
  );
};

const Education = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
  return (
    <div className="mb-64 sm:mb-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:mb-16 md:text-6xl lg:!text-7xl sm:!text-5xl xs:!text-4xl sm:mb-8">
        Education
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]" ref={ref} />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            grade="High School (10th)"
            school="OSDAV PUBLIC SCHOOL"
            schoolLink="https://www.facebook.com/osdavps/"
            address="Kaithal, India"
            time="2014 - 2015"
          />
          <Details
            grade="Sn. High School(12th)"
            school="OSDAV PUBLIC SCHOOL"
            schoolLink="https://www.facebook.com/osdavps/"
            address="Kaithal, India"
            time="2016 - 2017"
          />
          <Details
            grade="Btech CSE"
            school="University of Petroleum and Energy Studies"
            schoolLink="https://www.upes.ac.in/"
            address="Dehradun, India"
            time="2017 - 2021"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
