import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Container } from '@/components/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import generatePageSEO from '@/utils/generatePageSEO';

export default function DebtManagement() {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Debt Management</title>
        {generatePageSEO(
              'debt-management', 
              'Debt Management', 
              `What is a debt management plan? Debt management plans are designed to put 
              consumers on a strict budget with the aim of solving their financial woes.`,
              'article'
        )} 
      </Head>
      <main>
        <Header />
        <div className="mt-[86px] -mb-8 overflow-hidden flex flex-col px-6 md:px-24">
          <Frame129 onClick={() => router.push('tel:+1-888-344-0214')} src={"/static/img/frame-129-2@2x.svg"} alt="Frame 129" />
          <Container className="text-left text-gray-700 flex-col flex bg-white h-auto mt-12 ">
            <h1 className="text-4xl sm:text-3xl w-full text-gray-600 font-semibold">
              Debt Management Program
            </h1>
            <h2 className="mt-4 text-xl font-semibold text-gray-500 mb-6">
              What is a Debt Management Plan?
            </h2>
            <p>
              {"A Debt Management Plan (DMP) helps consumers eliminate credit card debt in an expedited fashion by working with lenders to bring a borrower's accounts current, lower their APRs and eliminate finance fees."}
            </p>
            <p>
              {"This in turn means that more of the monthly payment goes towards reducing a borrower's credit card balances and principal on the debt amount, however, your payment will also increase along with this."}
            </p>
            <p>
              Regardless if the credit counselor you chose is a non-profit organization or not, you will have to pay more than you were before you started the program.
            </p>
            <p>
              There is no such thing as free debt management. 
            </p>
            <p>
              The costs of the program will typically offset any savings you see from interest savings. So in this sense, the benefit of enrolling in a DMP is essentially a zero sum game.
            </p>
            <p>
              However, these programs do provide some benefits in some instances.
            </p>
            <p>
              Another added benefit of a DMP is that once the terms of debt management program become established, the borrower will receive less calls from debt collectors. In turn, this will lower credit card balances which will help them reduce worries and allow them to stress less about their current debt situation. Therefore, individuals enrolling in a DMP typically feel an increased sense of comfort regarding their debt repayment plan.
            </p>
            <p>
              This however, comes at a cost, and means you as a consumer will have to pay more money to maintain your money management plan.
            </p>
          </Container>
        </div>
        {/* section 2 */}
          <div
            className={`py-12 px-6 md:px-24 bg-white h-auto max-w-full`}
          >
            <Container className="flex flex-col gap-6">
              <h2 className="text-3xl mt-4 w-full text-main_text font-semibold text-center">How Debt Management Programs Work</h2>
              <p>
                {"All legitimate companies will always start with a 100% confidential and free financial assessment. A counselor will ask a lot of questions in order to thoroughly assess a borrower's household income and expenses. Moreover, after the credit counselor's assessment, educational debt resources are provided to help the borrower find places to reduce expenditures and save additional money on an ongoing monthly basis."}
              </p>
              <p>
                After this they will explore other feasible options and develop a personalized budget in order to achieve their money goals and better their financial standing.
​              </p>
              <p>
                The DMP helps the program participant in eliminating credit card debt more quickly by bringing accounts into a satisfactory status, lowering applicable interest rates and waiving any late fees.
              </p>
              <p>
                Deposits are made directly to the credit counselor and program disbursements are allocated to the creditors on behalf of the borrower. Program participants usually make one consolidated monthly payment and the agency pays the creditors through that consolidation payment. With this, the borrower is able to pay down the debt more aggressively and ideally setup a plan for financial success. 
              </p>
              <p>
                A Debt Management Plan typically allows the participant to pay off all unsecured debt within a five year timeframe. Because many creditors agree to lower interest rates, more of the payments are going towards reducing the principal of the debt and less is applied towards accruing interest. Collection calls and other correspondence will usually stop after a few months in the program.
              </p>
              <p>
                Some debt management plans also give the added option to include other monthly obligations (such as mortgages, auto payment, utilities, insurance, etc.).
              </p>
              <p>
                In total, this becomes a great tool for responsible budgeting and allows the borrower to remain current while better managing all household expenses in aggregate. This prioritization of managing income and expenses is essential for the completion of any related debt relief program, not just a debt management plan.
              </p>
            </Container>
          </div>
          {/* section 3 */}
          <div
            className={`py-12 px-6 md:px-24 bg-soft_gray h-auto max-w-full`}
          >
            <Container className="flex flex-col gap-6">
              <h2 className="text-3xl mt-4 w-full text-main_text font-semibold text-center">Implications of a DMP</h2>
              <p>
                When participating in a Debt Management Program, all open lines of credit will typically be closed out whilst you are an active participant.
              </p>
              <p>
                Moreover, all accounts included in a DMP will have a notation on your credit report and show that the accounts were placed in a debt management plan. Although the process varies per credit counseling organization, most companies will also freeze your accounts until the program is completed.
​              </p>
              <p>
                Successfully completing a debt management plan is not always an easy feat. The best bet is to include all approved credit cards. However, if the participant needs to retain use of one card for emergencies, a deal can be worked out in rare instances, where the credit counselor will allow it.
              </p>
              <p>
                There can definitely be credit implications when participating in a Debt Management Program.
              </p>
              <p>
                Credit Counseling companies do not actually report payment history to the three credit bureaus, that is done by creditors.              
              </p>
              <p>
                {"Therefore, depending on the particular plan (and the borrower's credit card companies), the impact to a credit report can be favorable or not."}
              </p>
              <p>
                Although it usually tends to be negative since open lines of credit are closed.
              </p>
              <p>
                In general, anytime open lines of credit are closed there will be a negative impact to your credit. Moreover, since total credit availability and therefore utilization rate have also decreased, this also tends to negatively impact your credit score.
              </p>
              <p>
                {"So, if a participant's credit limit decreases you would see an initial dip in your credit worthiness. This can sometimes be offset by paying monthly obligations in a timely manner (as this is the most important factor in determining a borrower's credit worthiness) but the impact will still be there."}
              </p>
            </Container>
          </div>
          {/* section 4 */}
          <div
            className={`py-12 px-6 md:px-24 bg-white h-auto max-w-full`}
          >
            <Container className="flex flex-col gap-6">
              <h2 className="text-3xl mt-4 w-full text-main_text font-semibold text-center">Are Debt Management Plans a Recommended Debt Relief Option?</h2>
              <p>
                As of late, debt management programs have been proven to be one of the least successful options in helping consumers <Link href="/" className="font-semibold">become debt free</Link> and lessen their financial worries.
              </p>
              <p>
                Debt management plans have a reported success rate of 20% or worse. So, 4 out of 5 participants will NOT succeed in a debt management program and resolve their financial issues.
​              </p>
              <p>
                There are multitude of reason for the lack of success in efficacy related to DMPs, but a lot has to do with the fact that people entering these programs typically have to pay more than they were before they got into financial trouble.
              </p>
              <p>
                If you miss a payment or cannot afford to pay the company managing your debt and your revolving debt obligations, the credit counselors typically offer little to no assistance and leeway in terms of help. Missed payments could also result in you paying retroactive interest. 
              </p>
              <p>
                The program could be forfeit entirely due to one missed payment, leaving you with no results and usually making your situation worse than when it started. 
              </p>
              <p>
                Bottom line: make sure to do your homework and fully understand the option before moving forward with a DMP.
              </p>
            </Container>
          </div>
      </main>
      <Footer />
    </>
  );
};

const Frame129 = styled.img`
  position: fixed;
  width: 100px;
  height: 100px;
  bottom: 14%;
  right: 5px;
  z-index: 13;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
