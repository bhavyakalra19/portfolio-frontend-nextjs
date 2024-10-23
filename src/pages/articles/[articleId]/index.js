import React from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import ArticleDetail from "@/components/ArticleDetail";
import { notFound } from "next/navigation";
import Link from "next/link";

const index = ({ data }) => {
  if (!data) {
    return (
      <main className="flex h-screen flex-col items-center justify-center dark:text-light">
        <div className="flex justify-center items-center">No Article Found</div>
      </main>
    );
  }
  return (
    <main className="flex w-full flex-col items-center justify-center dark:text-light overflow-hidden sm:p-2 sm:flex-row">
      <Layout className="p-16 sm:p-4">
        <div className="grid w-full grid-cols-10 gap-16 md:grid-cols-1 md:gap-0">
          <div className="col-span-9 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 sm:p-4 dark:bg-dark dark:border-light sm:w-full">
            <div className="absolute top-1 -right-4 -z-10 w-[101%] h-[100%] sm:-right-2 rounded-3xl bg-dark dark:bg-light" />
            <AnimatedText
              text={data[0].name}
              className="mb-[50px] lg:!text-7xl sm:mb-8 sm:!text-4xl xs:!text-2xl"
            />
            <div className="w-full h-auto flex flex-col items-center justify-center overflow-hidden bg-gray-200 dark:bg-slate-700 p-10 md:p-5 sm:p-2">
              {data[0].mainImage && (
                <img
                  src={data[0].mainImage}
                  className="w-2/3 sm:w-full h-auto border border-gray-500 shadow-xl shadow-black dark:shadow-light"
                />
              )}
              {data[0].description && (
                <p className="p-6 m-10 sm:p-0 sm:mt-10 sm:m-0 font-Montserrat font-semibold sm:w-full md:!text-2xl sm:!text-lg xs:!text-sm">
                  {data[0].description}
                </p>
              )}
            </div>
            {data[0].articleData &&
              data[0].articleData.map((step) => (
                <ArticleDetail
                  key={step.step}
                  image={step.image}
                  heading={step.heading}
                  desc={step.description}
                />
              ))}
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="flex justify-between sm:text-xs md:text-base text-xl">
              <div>Bhavya Kalra</div>
              <div>{data[0].created_date}</div>
            </div>
          </div>
          <div className="col-span-10 m-10 sm:m-5">
            <Link href="/articles" className="text-blue-600">← Back to Articles...</Link>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export async function getStaticPaths() {
  const hostUrl = process.env.backend_url;
  const res = await fetch(`${hostUrl}/api/artcles-slug-list/`);
  if (res.ok) {
    const data = await res.json();
    const pathData = [];
    for (let index = 0; index < data.length; index++) {
      const currData = {
        params: {
          articleId: data[index]["slug"],
        },
      };
      pathData.push(currData);
    }
    return {
      fallback: false,
      paths: pathData,
    };
  } else {
    return {
      fallback: false,
      paths: null,
    };
  }
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  const articleId = context.params.articleId;
  const hostUrl = process.env.backend_url;
  const res = await fetch(`${hostUrl}/api/article-data/${articleId}/`);
  if (res.ok) {
    const data = await res.json();
    return {
      props: { data: data },
    };
  } else {
    return {
      props: { data: null },
    };
  }
}
export default index;
