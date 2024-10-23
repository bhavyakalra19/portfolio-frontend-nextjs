import Layout from "@/components/Layout";
import Head from "next/head";
import profilePic from "../../public/images/profile/purposeoflife.jpg";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/UI/text-generate-effect";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import copy from "copy-to-clipboard";
import { useState } from "react";
import { LinkArrow } from "@/components/Icons";
import classes from "./index.module.css";
import ligthBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import car from "../../public/images/svgs/car.png";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  const [showCopyText, setShowCopyText] = useState("");

  function copyToClipBoard() {
    copy("bkbkbhavyakalra@gmail.com");
    setShowCopyText("Copied to clipboard");
    setTimeout(() => {
      setShowCopyText("");
    }, 2000);
  }

  return (
    <>
      {/* <TransitionEffect /> */}
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 lg:full md:inline-block md:w-full">
              <Image
                className={`${classes.homeImage} max-w-[600px] w-full h-auto border-solid border-[10px] sm:border-[5px] xs:border-[4px] border-grey-400 dark:border-cyan-100`}
                src={profilePic}
                alt="Bhavya Kalra"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <div className="w-full mx-auto flex items-center justify-center text-center">
                <TextGenerateEffect
                  duration={2}
                  words="Hi, I&apos;m Bhavya Kalra, Full stack Web Developer"
                  className="inline-block w-full text-dark font-bold capitalize text-5xl md:text-4xl"
                />
              </div>
              <AnimatedText
                text="Welcome, to my portfolio website. Explore my latest study, articles and projects showcasing my expertise in full stack development. This website is backed with django and most of it's content is configurable through django admin."
                className="!text-xl font-pacifico italic my-6 xl:!text-5xl lg:text-center lg:!text-4xl md:!text-2xl sm:!text-xl"
              />
              <div className="flex items-center mt-2">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  download={true}
                  className="flex items-center hover:dark:bg-dark hover:dark:text-light hover:dark:border-light bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark"
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <button
                  onClick={copyToClipBoard}
                  className="ml-4 text-lg font-pacifico italic capitalize text-dark underline dark:text-light"
                >
                  Copy Email
                </button>
              </div>
              {showCopyText === "" ? undefined : (
                <AnimatedText
                  text={showCopyText}
                  className=" !text-xs font-pacifico italic mt-6 dark:text-light text-dark z-10 "
                />
              )}
              <div className="inline-block w-[200px] z-10">
                <Image src={car} alt="bhavya" className="w-full h-full" />
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
