import React, { useEffect, useState, useRef, useCallback } from "react";
// import Header from "../Header";
// import Footer from "../Footer";
import styled from "styled-components";
import { Form } from "@/components/Form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FormMobile } from "@/components/FormMobile";
import { useMediaQuery } from "@/utils/mediaQueryHook";
import Head from "next/head";
import generatePageSEO from "@/utils/generatePageSEO";

function BookOnline() {
    const isBreakpoint = useMediaQuery(400);
  
  return (
    <div>
      <Head>
        <title>Free Debt Consultation</title>
        {generatePageSEO(
              'book-online', 
              'Free Debt Consultation', 
              `Why our clients are raving about how much money we just 
              saved them? Schedule a free debt consultation with The Debt Relief Co. to find out!`,
              'contact'
        )} 
      </Head>
    {isBreakpoint ? <FormMobile /> : <Form />}
    </div>
    // <div className="container-center-horizontal">
    //   <div className="screen">
    //     {/* <Header className="mac-book-pro-16-4-1"/> */}
    //     {isBreakpoint ? <FormMobile /> : <Form />}
    //     <Footer className=""/>
    //   </div>
    // </div>
  );
}

export default BookOnline;
