import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styled from 'styled-components';

export default function BookSuccess() {
  return (
    <>
      <Head>
        <title>Book Success</title>
      </Head>
      <main>
        <Header className="mac-book-pro-16-4-2"/>
        <SuccessContainer>
          <h1 className="text-3xl font-light">Booking Successful!</h1>
          <Image src="/static/img/croppedUmbrella.svg" alt="Your SVG" width={500} height={500} />
          <p className="text-2xl font-light">Thank you for booking with us. We will contact you shortly.</p>
        </SuccessContainer>
      </main>
      <Footer />
    </>
  );
}

const SuccessContainer = styled.div`
  display: flex;
  height: 70vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  gap: 6rem;
  /* padding-top: 6rem; */

  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;
