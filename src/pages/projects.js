import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import project3 from "../../public/images/profile/mainImg2.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-gray-200 shadow-black shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-3xl bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-pacifico italic text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-pacifico italic text-dark dark:text-light sm:text-[fontSize: 5px]">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <GithubIcon className="w-10 sm:w-7" />

          <Link
            href={link}
            target={"_blank"}
            className="ml-4 bg-dark text-light p-1 px-6 sm:px-3 font-semibold rounded-lg dark:bg-light dark:text-dark border border-solid dark:border-light sm:text-xs"
          >
            Visit Project
          </Link>
          {/* <Link href={link} className="ml-4 bg-dark text-light p-2 px-6 text-lg font-semibold">Visit Project</Link> */}
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, summary }) => {
  return (
    <motion.article
      initial={{ x: -50 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1, type: "linear" }}
      className="w-full h-full flex flex-col items-center justify-between rounded-2xl border-2 border-solid border-dark bg-gray-200 p-6 shadow-black shadow-2xl relative dark:bg-dark dark:border-light dark:shadow-light xs:p-4"
    >
      <div>
        <Link
          href={link}
          target={"_blank"}
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            src={img}
            alt={title}
            className="w-full h-auto"
          />
        </Link>
        <div className="w-full flex flex-col items-start justify-between mt-4 sm:items-center">
          <span className="text-primary font-pacifico italic text-xl dark:text-primaryDark lg:text-lg md:text-base sm:text-xs">
            {type}
          </span>
          <Link
            href={link}
            target={"_blank"}
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl sm:text-base">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-pacifico italic text-dark dark:text-light sm:text-xs sm:hidden">
            {summary}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-row items-start sm:items-center sm:justify-center">
        <GithubIcon className="max-w-7 items-center max-h-7 sm:hidden" />

        <Link
          href={link}
          target={"_blank"}
          className="ml-4 bg-dark text-light p-1 sm:px-2 sm:ml-0 px-6 font-semibold rounded-2xl dark:bg-light dark:text-dark border border-solid dark:border-light text-base sm:text-xs items-center"
        >
          Visit
        </Link>
      </div>
    </motion.article>
  );
};

const CreateProjectData = ({ data }) => {
  return (
    <div className="grid grid-cols-12 gap-[4rem] gap-y-32 xl:gap-x-16 lg:gap-x-9 md:gap-y-24 sm:gap-x-0">
      {data.map((project, counterIncrement) =>
        "img" in project ? (
          <div key={counterIncrement} className="col-span-4 sm:hidden">
            <motion.div
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, type: "linear" }}
            >
              <Image src={project3} alt="centre image" />
            </motion.div>
          </div>
        ) : project.featured === true ? (
          <div key={counterIncrement} className="col-span-12">
            <FeaturedProject
              title={project.name}
              summary={project.description}
              link={project.gitLink}
              type="Featured Project"
              img={project.gitImage}
            />
          </div>
        ) : (
          <div key={counterIncrement} className="col-span-4 sm:col-span-12">
            <Project
              title={project.name}
              summary={project.description}
              link={project.gitLink}
              type="Basic Project"
              img={project.gitImage}
            />
          </div>
        )
      )}
    </div>
  );
};

const projects = (props) => {
  return (
    <>
      <Head>
        <title>Project | BK</title>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Dreams inspire reality!"
            className="text-9xl mb-16 lg:!text-7xl sm:mb-8 sm:!text-4xl xs:!text-2xl"
          />
          <Suspense>
            {props && (
              <CreateProjectData data={props.data} />
            )}
          </Suspense>
        </Layout>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  //fetch data for a single meetup
  const hostUrl = process.env.backend_url;
  const res = await fetch(`${hostUrl}/api/project-list/`);
  if (res.ok) {
    const data = await res.json();
    return {
      props: { data: data },
    };
  } else {
    return {
      props: null,
    };
  }
}

export default projects;
