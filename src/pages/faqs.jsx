import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Container } from '@/components/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Faq from '@/components/Faq';
import styled from 'styled-components';
import generatePageSEO from '@/utils/generatePageSEO';

export default function Faqs() {

  return (
    <>
      <Head>
        <title>Frequently Asked Questions</title>
        {generatePageSEO(
              'faqs', 
              'Frequently Asked Questions', 
              `Got questions? We can help. Questions about your finances are normal and it's hard to find all 
              the answers in trying times. Feel free to read our FAQs for debt help and popular program questions.`,
              'faqs'
        )} 
      </Head>
      <main>
        <Header />
        <div
          className="pb-12 pt-[86px] px-6 md:px-24 overflow-hidden flex flex-col text-main_text relative"
        >
          <Frame129 onClick={() => router.push('tel:+1-888-344-0214')} src={"/static/img/frame-129-2@2x.svg"} alt="Frame 129" />
          <Container className="text-center flex-col flex w-full mt-12">
            {/* <span className="text-5xl w-full font-semibold">FAQs</span> */}
            <h1 className="text-5xl w-full font-semibold">Frequently Asked Questions</h1>
            <span className="mt-4 text-xl font-medium">
              If you can&apos;t find the answer you&apos;re looking for, feel free to call us at{' '}
              <a
                className="whitespace-nowrap underline text-main_orange"
                href="tel:888-344-0214"
              >
                888-344-0214
              </a>
            </span>
          </Container>
          <Container className="flex flex-col text-center md:text-left w-full h-1/2 md:flex-row justify-around items-center mt-12 px-10 gap-4">
            <div className="w-2/3 md:w-1/4">
              <Image src="/static/img/Goggles.svg" alt="beach snorkel" width={500} height={500} />
            </div>
          </Container>
          {/* section 1 */}
          <div className="h-auto max-w-full flex flex-col justify-center">
            <Faq />
          </div>
          <a
            href="/blog"
            className="h-full w-full bg-[--international-orange] sm:w-2/3 text-xl my-16 mx-auto mb-auto py-4 inline-flex justify-center rounded-lg px-3 font-bold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-main_orange text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-main_orange active:text-white/80 before:transition-colors drop-shadow-lg hover:drop-shadow-xl"
          >
            Debt Relief Blog
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

const Frame129 = styled.img`
  position: fixed;
  width: 100px;
  height: 100px;
  bottom: 14%;
  right: 5px;
  z-index: 13;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;