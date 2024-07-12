import React from "react";
import TheDebtReliefProgram from "@/components/TheDebtReliefProgram";
import generatePageSEO from "@/utils/generatePageSEO";
import Head from "next/head";

const macBookPro1644Data = {
  className: "mac-book-pro-16-4-3",
};

const iconoPc1Data = {
  children: "3",
};

const iconoPc2Data = {
  children: "2",
  className: "icono-pc-3",
};

const iconoPc3Data = {
  children: "4",
  className: "icono-pc-4",
};

const frame387Data = {
  children: "Life without debt is hard enough. Relieve your financial stresses so that you can focus on the things that actually matter.",
  className: "frame-38-6",
};

const footer3Data = {
  className: "footer-3",
};

const theDebtReliefProgramData = {
  group1: "/static/img/group-12@2x.svg",
  spanText1: "The Debt Relief Program",
  spanText2: "Get Out of Debt– For Good",
  spanText3: "Simplify your finances with one easy monthly payment. Reduce the principal amount you owe. Achieve financial freedom in 12-48 months.",
  frame129: "/static/img/frame-129-2@2x.svg",
  spanText4: "1",
  spanText5: "Free Consultation",
  spanText6: "We provide a free analysis of your financial situation and design a solution to get you out of debt. This includes budgeting, an income and expense evaluation and numerous ways to free up your monthly cashflow.",
  spanText7: "Eliminating High Interest Debt",
  spanText8: "We contact your creditors and let them know you’ve enrolled in our debt relief program. If you are undergoing any financial hardship we clearly explain your situation to the creditors. As funds accrue in your dedicated account, our debt specialists begin the process of settling your accounts for less and saving you money. As each account gets resolved we will reach out to you and inform you about your savings and terms of repayment. Once you approve the settlements the rest is on us.",
  vector5: "/static/img/vector-5-1@2x.png",
  group11: "/static/img/group-11-2@2x.png",
  group2: "/static/img/group-14@2x.svg",
  spanText9: "Enrolling in the program",
  spanText10: "Once you’re approved, we open an FDIC insured bank in your name and under your control. This account is dedicated to paying down your debt and is where your monthly draft gets deposited into each month.",
  spanText11: "Financial Freedom",
  spanText12: "Once you become debt free you can begin the next chapter of your financial journey. Clients that graduate our program end up investing in their future with the extra savings. You belong on a beach, not worrying about high interest minimum payments and stressing about debt.",
  group3: "/static/img/group-13@2x.svg",
  spanText13: "What makes us different?",
  spanText14: "There are never any upfront costs and we don't charge for our service until your debt is resolved and you save money. You will have one main point of contact throughout the debt relief process. The heavy lifting is on us -- take care of your monthly payment and we’ll handle the rest.",
  spanText15: "Start Saving Today",
  macBookPro164Props: macBookPro1644Data,
  iconoPc1Props: iconoPc1Data,
  iconoPc2Props: iconoPc2Data,
  iconoPc3Props: iconoPc3Data,
  frame38Props: frame387Data,
  footerProps: footer3Data,
};

function TheDRCProgram() {
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
      <TheDebtReliefProgram {...theDebtReliefProgramData} />
    </>
  );
}

export default TheDRCProgram;
