import React from 'react'
import Head from 'next/head';
import generatePageSEO from '@/utils/generatePageSEO';
import CreditWorthiness from "@/components/CreditWorthiness";

export default function CreditWorthinessPage() {
  return (
    <>
      <Head>
        <title>Credit Worthiness</title>
        {generatePageSEO(
              'credit-worthiness',
              'Credit Worthiness',
              `Want to know more about how credit works? Here’s the ultimate 
              guide to understanding your credit worthiness and credit score.`,
              'article'
        )}
      </Head>
      <CreditWorthiness />
    </>
  )
}
