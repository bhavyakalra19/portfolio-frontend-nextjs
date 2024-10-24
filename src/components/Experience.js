import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {

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
          {position}&nbsp;
          <a
            href={companyLink}
            target={"_blank"}
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-pacifico text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-pacifico w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
  return (
    <div className="mb-64 sm:my-32">
    <h2 className="font-bold text-8xl mb-32 w-full text-center md:my-16 md:text-6xl lg:!text-7xl sm:!text-5xl xs:!text-4xl sm:mb-8">
      Experience
    </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]" ref={ref} />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer"
            company="To The New"
            companyLink="https://www.tothenew.com"
            address="Noida, India"
            time="2021 - present"
            work="Worked on various tech stack such as Python, PhP, Drupal, ReactJs, NextJS, Django. Used Elasticsearch and Mysql Dbms."
          />
          <Details
            position="Intern"
            company="IBM"
            companyLink="https://www.ibm.com/in-en"
            address="Noida, India"
            time="2021"
            work="Worked on mysql queries and php codebase"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
