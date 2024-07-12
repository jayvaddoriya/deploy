import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Container } from '@/components/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import generatePageSEO from '@/utils/generatePageSEO';

export default function DebtResources() {
  return (
    <>
      <Head>
        <title>Debt Resources</title>
        {generatePageSEO(
              'debt-resources', 
              'Debt Resources', 
              `So, debt has been weighing on your mind? Our debt resources will help you 
              understand what’s important. So you can stay on top of your finances and 
              get out of debt for good.`,
              'links'
        )} 
      </Head>
      <main>
        <Header />
        <div className="mt-[86px] mb-12 overflow-hidden flex flex-col px-6 md:px-24">
          <Container className="text-left text-gray-700 flex-col flex bg-white h-auto mt-12 mb-12">
            <h1 className="text-4xl sm:text-3xl w-full text-gray-600 font-semibold">
              Debt Resources
            </h1>
            <div className="grid lg:grid-cols-2 gap-4 w-full mt-6">
              <Link href="/blog">
                <div className="bg-red-200 p-4 w-full flex flex-col gap-6 overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 justify-evenly cursor-pointer">
                  <h2 className="text-xl font-semibold">Debt Relief Blog</h2>
                  <p className="text-base">
                    Best Practices for building and maintaining great credit. Prioritizing budgets & lowering expenses.
                  </p>
                </div >
              </Link>
              <Link href="/credit-worthiness">
                <div className="bg-green-200 p-4 w-full flex flex-col gap-6 overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 justify-evenly cursor-pointer">
                  <h2 className="text-xl font-semibold">Credit Worthiness</h2>
                  <p className="text-base">
                    Your credit profile and how to better understand the determining factors that impact credit scores.
                  </p>
                </div >
              </Link>
              <Link href="/debt-to-income-ratio">
                <div className="bg-yellow-200 p-4 w-full flex flex-col gap-6 overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 justify-evenly cursor-pointer">
                  <h2 className="text-xl font-semibold">Debt To Income</h2>
                  <p className="text-base">
                    Your Debt to Income Ratio is one of the most important factors in determining your credit eligibility.
                  </p>
                </div >
              </Link>
              <Link href="/debt-collections">
                <div className="bg-blue-200 p-4 w-full flex flex-col gap-6 overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 justify-evenly cursor-pointer">
                  <h2 className="text-xl font-semibold">Debt Collections</h2>
                  <p className="text-base">
                    Collection agencies are 3rd party institutions that try to profit by purchasing debt from creditors.
                  </p>
                </div >
              </Link>
            </div>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
};
