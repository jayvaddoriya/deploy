import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Container } from '@/components/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import generatePageSEO from '@/utils/generatePageSEO';

export default function DebtReliefOptions() {
  return (
    <>
      <Head>
        <title>Debt Relief Options</title>
        {generatePageSEO(
              'debt-relief-options', 
              'Debt Relief Options', 
              `The Debt Relief Co.'s guide for everything you need to know about 
              alternative debt relief options like Bankruptcy, Debt Consolidation and 
              Debt Management Programs.`,
              'links'
        )} 
      </Head>
      <main>
        <Header />
        <div className="mt-[86px] mb-12 overflow-hidden flex flex-col px-6 md:px-24">
          <Container className="text-left text-gray-700 flex-col flex bg-white h-auto mt-12 mb-12">
            <h1 className="text-4xl sm:text-3xl w-full text-gray-600 font-semibold">
              {/* Alternative Debt Relief Options */}
              Debt Relief Options 
            </h1>
            <div className="grid lg:grid-cols-2 gap-4 w-full mt-6">
              <Link href="/debt-consolidation">
                <div className="bg-red-200 p-4 w-full flex flex-col gap-6 overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 justify-evenly cursor-pointer">
                  <h2 className="text-xl font-semibold">Debt Consolidation</h2>
                  <p className="text-base">
                    With a Debt Consolidation option, you receive a single (and presumably larger) loan to pay off all your smaller debt obligations (credit cards, etc.) With this option you are left with one consolidated monthly payment as opposed to multiple smaller payments.
                  </p>
                </div>
              </Link>
              <Link href="/debt-management">
                <div className="bg-green-200 p-4 w-full flex flex-col gap-6 overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 justify-evenly cursor-pointer">
                  <h2 className="text-xl font-semibold">Debt Management</h2>
                  <p className="text-base">
                    With a Debt Management Plan, you work with credit card companies to lower your APRs and eliminate finance fees. In doing so, the goal is to eliminate credit card debt faster than you would have been able to by paying more towards principal and less towards interest.
                  </p>
                </div>
              </Link>
              <Link href="/bankruptcy">
                <div className="bg-yellow-200 p-4 w-full flex flex-col gap-6 overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 justify-evenly cursor-pointer">
                  <h2 className="text-xl font-semibold">Bankruptcy</h2>
                  <p className="text-base">
                    With Bankruptcy, whether it is a Chapter 7 or Chapter 13, you are essentially liquidating or reorganizing assets in order to pay off some debts and absolve yourself of any other possible debts. Since 2005 federal bankruptcy guidelines have changed significantly.
                  </p>
                </div>
              </Link>
              <Link href="/the-drc-program">
                <div className="bg-blue-200 p-4 w-full flex flex-col gap-6 overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 justify-evenly cursor-pointer">
                  <h2 className="text-xl font-semibold">Debt Relief Program</h2>
                  <p className="text-base">
                    Debt relief programs are a great option for anyone looking to save money on their principal without any long term repercussions. Although, this debt relief option isn't advised for everyone, it is definitely beneficial for struggling consumers.
                  </p>
                </div>
              </Link>
            </div>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
};