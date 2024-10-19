import React from "react";
const AllSkills = ({ directionLeft, skillData, dark }) => {
    if(dark === ""){
      dark = window.localStorage.getItem("theme")
    }
  return (
    <>
      <div className="group relative flex cursor-pointer">
        {/* <motion.img initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
            }} transition={{duration: 1}} whileInView={{opacity: 1, x: 0}} src="/images/svgs/pythonNight.png" className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out' /> */}
        <img
          alt={skillData.name}
          src= {dark !== 'dark' ? skillData.logo : skillData.nightLogo}
          className="rounded-full border border-gray-500 object-cover w-32 h-32 lg:w-24 lg:h-24 sm:w-15 sm:h-15 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-32 w-32 sm:w-15 sm:h-15 lg:w-24 lg:h-24 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">{skillData.percentage}%</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllSkills;
