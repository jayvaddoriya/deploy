import React from 'react';
import Head from 'next/head';
import generatePageSEO from '@/utils/generatePageSEO';
import DebtToIncome from "@/components/DebtToIncome";

export default function DebtToIncomePage() {
  return (
    <>
      <Head>
        <title>Debt to Income Ratio</title>
        {generatePageSEO(
              'debt-to-income-ratio',
              'Debt to Income Ratio',
              `Why is your Debt to income ratio so important? Well, your DTI is 
              possibly the most important factor when applying for a mortgage. 
              Here's why it's so important…`,
              'article'
        )}
      </Head>
        <DebtToIncome/>
    </>
  );
};
