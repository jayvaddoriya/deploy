import React from "react";
import DebtConsolidation from "@/components/DebtConsolidation";
import generatePageSEO from "@/utils/generatePageSEO";
import Head from "next/head";

function DebtConsolidationPage() {
  return (
    <>
      <Head>
          <title>Debt Consolidation</title>
          {generatePageSEO(
              'debt-consolidation',
              'Debt Consolidation',
              `What is debt consolidation exactly? Debt consolidation loans can be 
              complicated but we got you covered. Here’s everything you need to know 
              about the different types of consolidation options available.`,
              'article'
          )}
      </Head>
      <DebtConsolidation />
    </>
  );
}

export default DebtConsolidationPage;
