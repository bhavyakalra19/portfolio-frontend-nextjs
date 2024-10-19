import React from "react";
import circleImage from "../../public/circleTrans.png";
import Image from "next/image";
import Link from "next/link";

const AboutMe = ({classes}) => {
  return (
    <div className={`${classes} flex items-center justify-center overflow-hidden z-30`}>
        <div className="w-48 h-auto flex items-center justify-center relative">
        <Image
          src={circleImage}
          height={150}
          width={150}
          className="animate-spin-slow dark:fill-light md:w-20"
        />
        <Link href="/about" className="flex hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:bg-light dark:text-dark items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark md:w-12 md:h-12 md:text-[10px]">About</Link>
      </div>
    </div>
  );
};

export default AboutMe;
