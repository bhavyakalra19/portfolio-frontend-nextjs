import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import React, { Suspense, useEffect, useRef } from "react";
import ProfilePic from "../../public/images/profile/developer.jpeg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";


//Animate the numbers counting from zero
const AnimatedNumbers = ({ value }) => {
  const ref = useRef();
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if (isInView) {
      return motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = (props) => {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Carpe Diem!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me...
              </h2>
              <p className="font-pacifico sm:text-base">
                - Hi, I&apos;m Bhavya Kalra, Proactive, collaborative, and
                user-oriented Full Stack web developer with 3+ years of
                experience leveraging programming skills to deliver custom
                software solutions to support company goals. Efficient team
                player with proficiencies in multiple tech stack, track record of
                collaborating via Git / GitHub, and ability to work
                independently or as part of a team to complete development tasks
                while meeting delivery deadlines.
              </p>
              <p className="font-pacifico mt-4 sm:text-base">
                - Proficient in frontend technologies (HTML, CSS, JavaScript)
                and backend languages (Python, C++, PHP), with expertise in web
                frameworks like ReactJs, NextJs, DRF and Django. Adept at database
                management using MySQL. Proven track record of optimizing web
                performance and improving user experience, resulting in a 20%
                increase in customer engagement. Strong communicator and team
                player, committed to delivering high-quality solutions on time.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={ProfilePic}
                alt="bhavya"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold text-end md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-pacifico capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base  xs:text-sm">
                  Years of Exp.
                </h2>
              </div>
              <div className="flex flex-col justify-center">
                <span className="inline-block text-7xl font-bold text-end md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-pacifico capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base  xs:text-sm">
                  Projects
                </h2>
              </div>
              <div className="flex flex-col justify-center">
                <span className="inline-block text-7xl font-bold text-end md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-pacifico capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base  xs:text-sm">
                  Tech. used
                </h2>
              </div>
            </div>
          </div>
        </Layout>
        <Suspense><Skills skillData = {props.data}/></Suspense>
        <Experience />
        <Education />
        <div id="contact-form" className="w-full flex flex-col items-center justify-center mb-32">
          <h2 className="w-[60%] sm:w-full text-4xl text-center font-grand md:text-4xl sm:text-3xl xs:text-2xl">
            Ever Tried Ever Failed... NO MATTER Try Again Fail Again Fail Better...
          </h2>  
          <p className="sm:text-xs mt-4">- SAMUEL BECKETT</p>   
        </div>
      </main>
    </>
  );
};


export async function getServerSideProps(){
  //fetch data for a single meetup
  const res = await fetch(`${process.env.NEXT_PUBLIC_backend_url}/api/skills-list/`);
  if(res.ok){
    const data = await res.json()
    return {
      props: { data: data },
    }
  }else{
    return {
      props: null
    }
  }

}

export default about;
