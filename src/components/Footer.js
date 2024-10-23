import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-pacifico italic text-lg dark:text-light dark:border-light">
      <Layout className="py-8 sm:py-4 flex items-center justify-between md:flex-col bg-blue-50">
        <span className="sm:text-base xs:text-xs">{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center mt-5 sm:hidden">
          Build With <span className="text-primary text-2xl px-1 dark:text-primaryDark">&#9825;</span>{" "}
          Python, Django, NextJs, Framer Motion, Tailwindcss
        </div>
        <Link
          className="p-1 mt-5 rounded-full bg-gradient-to-r sm:text-base xs:text-xs from-blue-400 to-purple-900 hover:from-pink-500 hover:to-orange-50 text-light"
          href="mailto:bkbkbhavyakalra@gmail.com"
        >
          Contact Me
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
