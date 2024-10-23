import React from "react";
import parse from "html-react-parser";

const ArticleDetail = ({image, heading, desc}) => {
  // const dt = `<p>Hello</p>
  //               <ul className="list-disc ml-4">
  //                 <li>Accessing S3 from AWS Lambda.</li>
  //                 <li>Accessing ECR from AWS Lambda.</li>
  //                 <li>Accessing Secret Manager.</li>
  //               </ul>`;
  // const data = parse(dt);
  // console.log(data);
  return (
    <>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <span className="absolute px-3 font-pacifico italic text-dark -translate-x-1/2 bg-light left-1/2 dark:text-light dark:bg-dark">
          ""
        </span>
      </div>
      <div className="w-full h-auto flex flex-col items-start justify-start overflow-hidden m-10 md:m-5 sm:m-0 md:justify-center md:items-center">
        <p className="font-semibold mb-4 text-2xl">{heading}</p>
        {image && <img src={image} alt="article" className="w-2/3 h-auto sm:w-full" />}
        {desc && <div className="p-6 mb-10 sm:p-2 font-pacifico italic sm:text-xs">
          {parse(desc)}
        </div>}
      </div>
    </>
  );
};

export default ArticleDetail;
