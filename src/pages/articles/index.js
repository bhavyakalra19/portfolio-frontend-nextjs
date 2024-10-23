import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import article1 from "../../../public/images/articles/create modal component in react using react portals.png";
// import article1 from "../../public/images/profile/mainImg.png";
import article2 from "../../../public/images/articles/form validation in reactjs using custom react hook.png";
import article3 from "../../../public/images/articles/What is higher order component in React.jpg";
import { easeInOut, motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={link} onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
      <h2 className="capitalize text-xl font-semibold hover:underline sm:text-sm xs:text-xs">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: easeInOut } }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex flex-row sm:flex-col items-center justify-between bg-light text-dark dark:text-light first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light"
    >
      <motion.img title={title} src={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:border-light dark:bg-dark flex flex-col justify-between">
      <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-3xl bg-dark dark:bg-light" />
      <div>
        <Link
          href={link}
          className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
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
      </div>
      <div>
        <Link href={link}>
          <h2 className="capitalize text-2xl font-bold font-pacifico italic my-2 mt-4 hover:underline xs:text-lg">
            {title}
          </h2>
        </Link>
        <p className="text-sm font-pacifico italic mb-2 xs:text-xs">{summary}</p>
        <span className="text-primary font-semibold font-pacifico italic pl-4 dark:text-primaryDarks">
          {time}
        </span>
      </div>
    </li>
  );
  8;
};

const Articles = ({ data }) => {
  let featuredData = [];
  let basicData = [];
  for (let a = 0; a < data.length; a++) {
    if (a < 2) {
      featuredData.push(data[a]);
    } else {
      basicData.push(data[a]);
    }
  }
  return (
    <>
      <Head>
        <title>Articles | BK</title>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-4xl xs:!text-2xl"
          />
          {featuredData.length > 0 && (
            <ul className="grid grid-cols-2 gap-16 lg:grid-cols-1 md:grid-cols-1 md:gap-y-16">
              {featuredData.map((article) => <FeaturedArticle key={article.name} title={article.name} summary={article.description} time={article.created_date} link={`/articles/${article.slug}`} img={article.mainImage} />)}
            </ul>
          )}
          {basicData.length > 0 && (
            <>
              <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
                All Articles
              </h2>
              <ul>
                {basicData.map((article) => <Article key={article.name} title={article.name} img={article.mainImage} date={article.created_date} link={`/articles/${article.slug}`} />)}
              </ul>
            </>
          )}
        </Layout>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  //fetch data for a single meetup
  const hostUrl = process.env.backend_url;
  const res = await fetch(`${hostUrl}/api/article-list/`);
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

export default Articles;
