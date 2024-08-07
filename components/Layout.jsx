import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Abida GUl | SQA Engineer</title>
        <meta
          name="description"
          content="Abida Gul is a SQA enginner with a 3+ years of experience."
        />
        <meta
          name="keywords"
          content="SQA, projectmanagement, testing, bugs, error,  html, css, javascript, js, portfolio"/>
      
        <meta name="author" content="Sanidhya Kumar Verma" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
