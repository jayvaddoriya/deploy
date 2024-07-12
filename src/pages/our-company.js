import React from "react";
import OurCompanyPc from "@/components/OurCompanyPc";
import generatePageSEO from "@/utils/generatePageSEO";
import Head from "next/head";

const macBookPro1642Data = {
  className: "mac-book-pro-16-4-1",
};

const ourCompanyPcData = {
  spanText1: "At The Debt Relief Company, our mission is clear: to provide exceptional customer service nationwide, easing the burdens of our clients—financial and beyond. With nearly a decade of expertise in consumer debt relief, we've been dedicated to helping individuals achieve financial freedom since 2018. The proof is in the pudding, as a small mom-and-pop business we founded our company without the use of any debt or financing.",
  spanText2: "Our ultimate goal is always to get you out of debt and save you as much money as possible. We take pride in helping Americans avoid debt and we will do everything in our power to help promote debt free living, help Americans rebuild their life after debt and help eliminate debt for all our clients.",
  spanText3: "We use a personal touch and take pride in creating a custom plan that prioritizes your financial goals from the start. Each debt relief program is tailored specifically to your needs and we do our best to set realistic expectations with our clients. We strongly believe in our ability to save you money on our debt. We charge no upfront fees, and if we don't reduce your debt, you pay nothing for our services. This is how we ensure that our goals are aligned with our clients and that our ability to collect fees is contingent on their success in paying down credit card debt.",
  spanText4: "Committed to Excellence",
  group8: "/static/img/group-8-1@2x.svg",
  spanText5: "About Us",
  spanText6: "Meet Our Founders",
  image1: "/static/img/image-1-1@2x.png",
  spanText7: "Adem Selita",
  spanText8: " Co-founder",
  spanText9: "A second-generation Albanian Muslim American and native Staten Islander, Adem earned his Bachelor's in Economics from New York University.",
  spanText10: "With nearly a decade in experience his journey into debt relief began back in 2015.",
  //spanText11: "With nearly a decade in experience his journey into debt relief began back in 2015.",
  image2: "/static/img/image-2-1@2x.png",
  spanText12: "Dino Selita",
  spanText13: "Co-founder",
  spanText14: "A lifelong New Yorker and community advocate, Dino holds a degree in Finance from Wagner College.",
  spanText15: "With over two decades in financial services in various roles, he has helped countless clients achieve financial freedom.",
  //spanText16: "More recently Dino has spent over half a decade in the credit card consolidation industry, helping consumers make the most of their personal finances. Dino has helped over 1,000 clients eliminate their unsecured debt and achieve financial freedom.",
  img_35081: "/static/img/img-3508-1-1@2x.png",
  group1: "/static/img/group-2@2x.svg",
  spanText17: "Our Origin Story",
  spanText18: "The Debt Relief Company was born out of a commitment to help consumers save money and get out of debt as quickly as possible while also providing a fair and transparent service. We started with some simple word of mouth and a desire to always put our clients first. Years of navigating the debt relief industry and financial services industry have honed our expertise in the space and have allowed us to add our own personal touch to how we think a debt relief program should look. We operate of our own accord and although we are a profit seeking business we always put the success of our clients before profits.",
  spanText19: "Media Recognition",
  spanText20: "We're honored to be recognized as leaders in debt relief, frequently featured in reputable news outlets. Explore our media mentions and our company",
  // spanText21: "Although the road to our formation wasn't easy, by any means. Years of trials and tribulations in the financial services industry helped develop our expertise and know-how of debt consolidation and various debt relief products (loan modifications, credit card resolution programs, traditional debt settlement programs, debt consolidation loans, etc). Until eventually, right time and right place. Previously strangers, an introduction from a friend of a friend in downtown Manhattan would lead our co-founders to form The Debt Relief Company in New York as it is known today.",
  // spanText22: "Our Company strives to provide value to US consumers whenever possible. To this extent, we are frequently cited and featured on various news platforms and receive a considerable amount of press. Feel free to check out our media mentions.",
  group2: "/static/img/group-1@2x.svg",
  spanText23: "Our Mission",
  spanText24: "Our primary mission is to empower struggling Americans to achieve debt-free lives and secure their financial futures. We also strive to enhance financial literacy nationwide through initiatives like",
  spanText25: "Personalized Debt Relief",

  macBookPro164Props: macBookPro1642Data,
};

function OurCompany() {
  return (
    <>
     <Head>
        <title>Our Company</title>
        {generatePageSEO(
              'our-company',
              'Our Company',
              `Our goal is to help struggling Americans become debt free and gain a better 
              foothold on their personal finances. Co-founded by Adem Selita and Dino Selita.`,
              'explainer'
        )}
      </Head>
      <OurCompanyPc {...ourCompanyPcData} />
    </>
  );
}

export default OurCompany;
