import Link from "next/link";
import React, { useContext, useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { cntx } from "@/context/context";
import AboutMe from "./AboutMe";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const wid = router.route === href ? "w-full" : "w-0";
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block ${wid} bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const wid = router.route === href ? "w-full" : "w-0";
  const handleClick = () => {
    toggle()
    router.push(href)
  }
  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span
        className={`h-[1px] inline-block ${wid} bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const { message, setMessage } = useContext(cntx);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [mode, setMode] = useThemeSwitcher();
  const updateMode = () => {
    setIsOpen(!open)
    const data =
      mode === "dark"
        ? "light"
        : window.localStorage.getItem("theme") === "light"
        ? "dark"
        : "light";
    setMode(data);
    setMessage(data);
  };
  return (
    <header className="fixed top-0 w-full lg:h-[90px] px-32 py-8 sm:px-10 xs:px-10 font-medium flex items-center justify-between dark:text-light z-20 bg-blue-100 dark:bg-cyan-800">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1 " : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1 " : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/bhavyakalra19"
            target={"_blank"}
            whileHover={{ y: -2, x: -2, scale: 1.2 }}
            className="w-9 mx-3"
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/bhavya-kalra-174a82148"
            target={"_blank"}
            whileHover={{ y: -2, x: 2, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 ml-3"
          >
            <LinkedInIcon />
          </motion.a>
          <button
            onClick={updateMode}
            className={`ml-6 flex items-center justify-center rounded-full p-1 ${
              mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"
            }`}
          >
            {mode === "light" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>

      {isOpen && <motion.div initial={{scale: 0, opacity: 0, x:"-50%", y:"-50%"}} animate={{scale: 1, opacity: 1}} className="min-w-[70vw] flex flex-col justify-between items-center fixed z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <nav className="flex items-center flex-col justify-center">
          <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
          <CustomMobileLink href="/about" title="About" className="" toggle={handleClick} />
          <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
          <CustomMobileLink href="/articles" title="Articles" className="" toggle={handleClick} />
        </nav>
        <nav className="flex items-center justify-center flex-wrap mt-2">
          <motion.a
            href="https://github.com/bhavyakalra19"
            target={"_blank"}
            whileHover={{ y: -2, x: -2, scale: 1.2 }}
            className="w-9 mx-3"
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon className="bg-light dark:bg-dark rounded-full" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/bhavya-kalra-174a82148"
            target={"_blank"}
            whileHover={{ y: -2, x: 2, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 ml-3"
          >
            <LinkedInIcon />
          </motion.a>
          <button
            onClick={updateMode}
            className={`ml-6 flex items-center justify-center rounded-full p-1 ${
              mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"
            }`}
          >
            {mode === "light" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </motion.div>}

      <div className="absolute left-[50%] top-2 translate-x-[-50%] sm:hidden">
        <Logo />
      </div>
      <div className="absolute left-[50%] top-2 translate-x-[-50%] hidden sm:block">
        <AboutMe />
      </div>
    </header>
  );
};

export default NavBar;
