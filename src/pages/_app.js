import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import Context from "../context/context";

const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favico.svg" />
        <title>Bhavya Kalra</title>
      </Head>
      <main
        className={`${mont.variable} font-mont bg-light w-full min-h-screen dark:bg-dark pt-[100px] overflow-hidden`}
      >
        <NavBar />
        <Component {...pageProps} />
        <AboutMe classes="fixed left-4 bottom-4 sm:hidden" />
        <Footer />
      </main>
    </Context>
  );
}
