import React from 'react';
import Head from 'next/head';
import generatePageSEO from '@/utils/generatePageSEO';
import InPress from '@/components/InPress';

export default function PressPage() {
  return (
    <>
      <Head>
        <title>Press</title>
        {generatePageSEO(
              'press',
              'Press',
              `The Debt Relief Co, in the News. Media mentions and features ranging 
              from personal finance studies to money saving tips.`,
              'press'
        )}
      </Head>
      <InPress/>
    </>
  )
}
