import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Container } from '@/components/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import generatePageSEO from '@/utils/generatePageSEO';

export default function DebtCollections() {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Debt Collections</title>
        {generatePageSEO(
              'debt-collections', 
              'Debt Collections', 
              `Don’t let debt collectors cramp your style. This guide will help you understand 
              how debt collection works, how to protect yourself from deceptive debt collection 
              agencies and take advantage of FDCPA guidelines.`,
              'article'
        )} 
      </Head>
      <main>
        <Header />
        <div className="mt-[86px] -mb-8 relative overflow-hidden flex flex-col w-screen prose">
          <Frame129 onClick={() => router.push('tel:+1-888-344-0214')} src={"/static/img/frame-129-2@2x.svg"} alt="Frame 129" />
          <Container className="text-center text-gray-700 flex-col flex w-full sm:w-2/3 mt-12 px-4 sm:px-0">
            <h1 className="text-4xl sm:text-5xl w-full text-gray-600 font-semibold">
              Debt Collections
            </h1>
            <h2 className="mt-4 text-xl font-semibold text-gray-500 mb-6">
              How Does Debt Collection Work?
            </h2>
          </Container>
          <Container className="px-6 md:px-24 bg-white h-auto max-w-full">
            <p>
              In essence, collection agencies are third party institutions that try to profit from purchasing your debt from creditors 
              (i.e. the original owner of the debt).
            </p>
            <p>
              Debt collectors buy your debt (typically for pennies on the dollar, although please note things aren&apos;t always as black and 
              white as this) with the hopes of collecting on the debt you owe. Although, there is little you can do to improve 
              your <a href="credit-worthiness" className="font-semibold">credit worthiness</a>  once your accounts enter collections besides 
              settling the balance for less.
            </p>
            <p>
              Debt collection efforts can be lumped into two stages.
            </p>
            <p>
              <span className="underline">Pre-Charge Off</span> – When the creditor gives the debtor notice that the account is in default and 
              will be sent to collections -- unless a payment agreement is made by a specified date.
            </p>
            <p>
              <span className="underline">Charge Off</span> – When the original creditor has exhausted their collection efforts. The creditor 
              then considers the remaining balance to be a “Bad Debt” or “Charge Off.” This does not mean the client no longer owes the debt, 
              it simply means the account will be transitioning to a 3rd party debt collector such as a collection agency or law firm.
            </p>
            <p>
              Since 3rd party debt collectors purchase debt from financial institutions, they are not actually the original owner of your debt. 
              Due to this there are clear federal guidelines on what they can and cannot do in order to collect. 
            </p>
            <p>
              Moreover, many credit card companies and lenders have set guidelines for debt settlement on their consumer debt accounts. For example, 
              the original debt issuer may have a set repayment they need to acquire from the consumer. Unfortunately, this often means that you may 
              not be able to settle your debt for as cheaply as you would like to.
            </p>
          </Container>
          </div>
          {/* section 2 */}
          <div
            className={`py-16 px-6 md:px-24 bg-white h-auto max-w-full`}
          >
            <Container className="flex flex-col gap-6">
              <h2 className="text-3xl mt-4 w-full text-main_text font-semibold text-center">How Do Collection Agencies Buy Your Debt?</h2>
              <p>
                After a set amount of time, credit card companies and banking institutions sell your debt for a lot less than the original amount so 
                that they can bypass the work of having to collect from you. They benefit by taking tax loss and then re-selling the responsibility of 
                collecting the debt to a 3rd party.
              </p>
            </Container>
          </div>
          {/* section 3 */}
          <div
            className={`py-16 px-6 md:px-24 bg-soft_gray h-auto max-w-full`}
          >
            <Container className="flex flex-col gap-6">
              <h2 className="text-3xl mt-4 w-full text-main_text font-semibold text-center">FDCPA - Debt Collection Guidelines</h2>
              <p>
                You have rights as a consumer!
              </p>
              <p>
                All consumers should be aware that they have rights under the FDCPA (Fair Debt Collection Practices Act).
              </p>
              <p>
                The FDCPA was put in place to help protect consumers from abusive or deceptive debt collection practices.
              </p>
              <p>
                Debt Collectors are legally not allowed to contact you before 8 am or after 9 pm or at your place of work (as long as you make them aware 
                they are doing so) and not allowed to you incessantly harass you.
              </p>
              <p>
                Debt collectors that clearly violate the terms of the FDCPA can be sued for damages and legal fees within one year of the violation. You 
                can even counter sue creditors who practice bad collecting habits such as calling at illegal times or harassing you at work. This can cost 
                the collections agency more than the debt they are collecting on is worth. So, it&apos;s important to understand your rights.
              </p>
              <p>
                Unfortunately, in 2020 the Consumer Financial Protection Bureau passed legislation that allows debt collectors to contact consumers via 
                social media and other avenues of communication. This is ultimately a loss for consumers experiencing hardship, as there are now no 
                limits on how frequently you can receive contact from collection agencies via social media, email, text messages, etc.
            </p>
            </Container>
          </div>
          {/* section 4 */}
          <div
            className={`py-16 px-6 md:px-24 bg-white h-auto max-w-full`}
          >
            <Container className="flex flex-col gap-6">
            <h3 className="text-3xl mt-4 w-full text-main_text font-semibold text-center">What Should You Do If You&apos;re Getting Harassed?</h3>
              <p>
                The best move for you to make is to request that they send all further communication in writing or stop contacting you entirely. You 
                can do this by sending a letter to the debt collector and telling them to stop contacting you. They will need to stop calling you at 
                that point. This doesn’t mean that they can’t still report to credit bureaus or look to sue, but it will allow you time and quiet before 
                figuring a plan out.
              </p>
              <p>
                If this doesn&apos;t resolve the issue and you are still experiencing any harmful practices or harassment from a debt collector, it may be best 
                to file a complaint through the CFPB, FTC, and your states Attorney General office. If you win a case against the collection agency, they 
                will have to pay for your attorney fees and possible damages as well.
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