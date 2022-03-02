import Head from "next/head";
import React from "react";
import Header from "./header/Header";
import {Sidebar} from './sidebar/'

const Layout: React.FC<{title: string}> = ({ children, title }) => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Head >
        <>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </>
      </Head>

      <Header />

      <div className='flex w-full h-[94.4vh]'>

        <Sidebar />

        {children}  

      </div>
   
    </div>
  );
};

export default Layout;
