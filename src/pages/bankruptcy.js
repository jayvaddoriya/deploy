import React from "react";
import Bankruptcy from "@/components/Bankruptcy";
import generatePageSEO from "@/utils/generatePageSEO";
import Head from "next/head";

function BankruptcyPage() {
  return (
    <>
      <Head>
        <title>The Debt Relief Program – America’s Best</title>
        {generatePageSEO(
              'the-drc-program',
              'The Debt Relief Program – America’s Best',
              `Resolve your credit card debt for less with The DRC Program. One low monthly 
              payment. Find out why our debt relief program really is the best.`,
              'explainer'
        )}
      </Head>
      <Bankruptcy />
    </>
  );
}

export default BankruptcyPage;
