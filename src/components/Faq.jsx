import React, { useState } from 'react';
import FaqBox from './FaqBox';

const faqs = [
  {
    question: 'How Do I Know This is the Best Debt Relief Program for Me?',
    answer:
      `The Debt Relief Company was founded to assist clients in alleviating financial burdens and help them achieve financial prosperity. 
      If you have excessive credit card or personal loan debt you are in the right place. Or more simply put, if your future financial goals 
      and financial well-being are not aligned, then chances are that we can help! Our expertise lies in eliminating all your unsecured debts 
      within a 1-4 year time frame, while saving you money each month by negotiating new deals with your creditors to payback less than what 
      you currently owe. We strive to provide our clients with the best debt relief program and best customer service in the United States. 
      We never charge upfront fees and the success of our clientele is always our top priority. Our foremost goal is to save you as much money 
      as possible and get you out of debt as quickly as possible, and we are willing to stake our reputation on it.`
  },
  {
    question: 'How is The DRC Program Specifically Tailored to Help Me and My Individual Needs?',
    answer:
      `Each and every financial consultation performed begins with both a credit and balance sheet overview along with expert analysis 
      of your current financial situation. Once we understand your situation we can custom tailor a plan to help you achieve your individual 
      goals! You should expect one main point of contact throughout the entirety of your time working with us. The financial consultant you 
      initially spoke to will be your main point of contact throughout the course of The DRC Program. Accountability is very important to us, 
      so we will never defer your questions or concerns to anyone except your personal financial consultant. We don’t believe in cookie cutter
      solutions or a one size fits all policy, everyone’s situation is completely different! For that reason our service is designed to align 
      with your specific needs. Feel free to use our debt relief calculator to get a quote for your new low monthly payment.`
  },
  {
    question: 'Do Services Provided by The Debt Relief Company Have Any Credit Requirements?',
    answer:
      `There are currently no credit requirements for all services we provide. Moreover, all consultations are risk-free and require no commitment
       on your part. Seldom are we unable to add value to a client's financial well-being, even if you feel one of our programs is not the correct
       fit for you, all consultations are completely free and require no obligation on your end. However, The DRC Program does have some minimum 
       requirements and isn't always a good fit for everyone, especially if it doesn't align with your personal goals. If this is the case, we would 
       never recommend our services unless it is to your benefit. We are always happy to assist you in finding alternative options.`
  },
  {
    question: 'Will I Become Totally Debt Free After I Complete the Debt Relief Program?',
    answer:
      `Here at The Debt Relief Company, we specialize in dealing with debts like unsecured personal loans, credit card debt, 
      student loans, revolving lines of credit, medical debt, etc. (or more specifically "bad debt"). High utilization rates 
      and high balances on these types of accounts have the most detrimental impact to your credit score so these are the highest 
      priority for improving a client's credit worthiness and financial well-being overtime. However, even though we do not specialize 
      in secured or collateralized debt you can always use your monthly savings from The DRC program to more aggressively pay off any 
      mortgages, HELOCs, auto loans, etc. (otherwise known as "good debt"). As long as your debt is unsecured and eligible for the debt 
      relief program, we will strive to help you pay it off and save as much money as possible! However, it is unlikely for you to become 
      completely debt free, given the fact that many Americans have secured debts like mortgages and auto loans that cannot be included 
      in the program.`
  },
  {
    question: 'How Will Debt Relief Impact My Credit Worthiness?',
    answer:
      `Although each case is specific to an individual's current financial situation, depending on the current standing of your credit report
       and credit worthiness at the time of enrollment, debt relief could very well have a negative impact to your credit worthiness in the short
        to intermediate term. However, we do not take a short-term approach to improving the financial well-being of our clients. Good things take 
        time. We do not pretend to offer an overnight solution. Odds are that your debt did not accrue overnight, so it will take a reasonable amount 
        of time to better your financial standing. So, if you initially see an adverse effect to your credit score, we would focus on fixing the root 
        cause of the problem (too much "bad debt", high debt-to-income ratios, high credit utilization rates and reliance on revolving lines of credit) 
        which will gradually lead to you becoming more credit worthy over time.`
  },
  {
    question: 'This Seems Too Good to Be True. What is the Catch?',
    answer:
      `There is no catch associated with any options we offer! All monthly quotes provided are all inclusive and never include any hidden fees. 
      Moreover, our estimates are always conservative as we always aim to under promise and overdeliver. Otherwise, one drawback of the debt 
      relief program, will be that credit cards you want to enroll in the program will have to be closed out (as would any other open lines of 
        credit you include in the program). However, you can still pick and chose what accounts you want to include in enrollment. You don’t have 
        to include all lines of credit if you still want to retain use of credit during the program. So yes, you will see significant monthly savings, 
        but you still have to give some things up in order to benefit from the reduction in interest and debt owed. Life is all about give and take. As 
        long as you are okay with all of the above, then enrolling in The DRC Program would most definitely be to your benefit.

      `
  },
  {
    question: 'Can\'t I Negotiate Debt on My Own?',
    answer:
      `You absolutely can! However, you can also do your own indoor plumbing. But, if you have no experience or know-how of how plumbing works 
      and how to approach a job, it will likely be a bad idea and lead to a less than ideal situation. You could make mistakes which end up 
      costing you more money in the long-run and end up making your situation worse off than when you started. With this being said, in a small 
      percentage of cases, negotiating on your debt by yourself may actually be the best option for you. If the debt amount does not meet our 
      minimum requirement and you carry a relatively small number of accounts you should definitely consider it—as long as you are willing to 
      do the research and put it in the work.`
  },
  {
    question: 'What Fees Does The Debt Relief Company Charge?',
    answer:
      `The Debt Relief Company charge absolutely no upfront fees — ever! In fact, the ability to collect fees from clients is contingent upon 
      our performance. So, until we save you money we will not charge you anything. Our service cost is 20% of the enrolled debt amount, which 
      is substantially less than that of all major debt relief companies in the industry. We pride ourselves on never charging any upfront fees
       and always providing savings and value to your life before taking any fees from your enrollment in the debt relief program. We firmly believe 
       that if we don’t save you money on your credit card debt we should not be able to collect any fees for the duration of your debt relief program. 
       We have no hidden fees or costs and the monthly payment you are quoted is always inclusive of all program costs.`
  },
  {
    question: 'How Do I Inquire and Sign Up for the Debt Relief Program?',
    answer:
      `Inquiring with The Debt Relief Company is relatively straight forward. You can fill out a form on our website denoting the best call back time 
      for a consultant to reach out to you and we will be sure to get back to expeditiously. Click here to schedule your free debt consultation. Alternatively, 
      you can call us at our toll-free number (888) 344-0214, reach out via email or reach out to us via any social media outlet (Facebook, Twitter, Instagram, 
        LinkedIn, Pinterest, Yelp, etc.). Once you speak with your financial consultant and decide on which option and payment term you would like to move forward 
        with they will assist you in the enrolling in the debt relief program.`
  },
  {
    question: 'What Happens if I Can’t Make a Monthly Payment Due to an Emergency?',
    answer:
      `Our greatest responsibility always rests in helping our clients get out of debt and alleviating their financial burdens. If you have a financial emergency 
      or have experienced excessive hardship due to the impact of COVID-19 please feel free to reach out, we are here to serve and help! If this occurs, please 
      feel free to contact your financial consultant directly. The impacts of quarantine and social distancing from the coronavirus has changed the daily life of 
      all Americans, and we will do everything in our power to assist you however we can. Please don't hesitate to reach out, we are glad to help in any way possible.`
  },
]
export default function Faq(props) {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => {
              return (
                <FaqBox key={faq.question} question={faq.question} answer={faq.answer} />
              )
            })}
            </dl>
          </div>
        </div>
    </div>
  )
}