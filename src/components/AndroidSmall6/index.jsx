import React from "react";
import Frame30 from "../Frame30";
import Frame302 from "../Frame302";
import Frame303 from "../Frame303";
import Frame304 from "../Frame304";
import styled from "styled-components";
import { ManropeSemiBoldWhite14px, ManropeExtraBoldWhite15px, ManropeSemiBoldWhite15px } from "../../styledMixins";


const PhoneIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path fillrule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  )
}

const MailIcon = () => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
    )
}

const socials = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/Thedebtreliefcompany/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/debtreliefcompany',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/debtreliefco',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/thedebtreliefcompany/',
      icon: (props) => (
        <svg fill="currentColor" height="20" viewBox="0 0 72 72" width="20" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="m8 72h56c4.418278 0 8-3.581722 8-8v-56c0-4.418278-3.581722-8-8-8h-56c-4.418278 0-8 3.581722-8 8v56c0 4.418278 3.581722 8 8 8z" fill="currentColor"/><path d="m62 62h-10.684375v-18.1978851c0-4.9893607-1.8958333-7.7775826-5.8449219-7.7775826-4.2960937 0-6.540625 2.901578-6.540625 7.7775826v18.1978851h-10.2967448v-34.6666667h10.2967448v4.669595s3.0959636-5.7287132 10.452474-5.7287132c7.353125 0 12.6174479 4.4902554 12.6174479 13.7769969zm-45.650651-39.2059867c-3.5072917 0-6.349349-2.8643566-6.349349-6.3970066 0-3.5326501 2.8420573-6.3970067 6.349349-6.3970067 3.5072916 0 6.3476562 2.8643566 6.3476562 6.3970067 0 3.53265-2.8403646 6.3970066-6.3476562 6.3970066zm-5.3167969 39.2059867h10.7368489v-34.6666667h-10.7368489z" fill="#464140"/></g></svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCPFWaIMPqgxs-W36rBOddXg',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];


function AndroidSmall6(props) {
  const { className } = props;

  return (
    <AndroidSmall61 className={`android-small-6 ${className || ""}`}>
      <LogoDebtRelief1
        className="logo-debt-relief-1-4"
        src="/static/img/logo-debt-relief-1-5@2x.svg"
        alt="The Debt Relief Co Logo."
      />
      <FrameContainer className="frame-container">
        <Frame34 className="frame-34-2">
          <OurWebsite className="our-website-2">
            <a href="/" className="span5q1ztl manrope-extra-bold-white-15px">Home</a>
          </OurWebsite>
          <Frame30 />
        </Frame34>
        <Frame31 className="frame-31-2">
          <OurWebsite className="the-drc-program-2">
            <a href="/the-drc-program" className="spanjaqhyk manrope-extra-bold-white-15px">The DRC Program</a>
          </OurWebsite>
          <Frame302 />
        </Frame31>
      </FrameContainer>
      <FrameContainer1 className="frame-container-1">
        <Frame31 className="frame-32-2">
          <Resources className="resources-3">
            <a href="/debt-resources" className="spanln86t manrope-extra-bold-white-15px">Resources</a>
          </Resources>
          <Frame303 />
        </Frame31>
        <Frame31 className="frame-33-2">
          <OurWebsite className="options-2">
            <a href="/debt-relief-options" className="spanzrn88g manrope-extra-bold-white-15px">Options</a>
          </OurWebsite>
          <Frame304 />
        </Frame31>
      </FrameContainer1>
      <div className='flex flex-col w-screen px-10 mt-16'> 
    <Follow className='text-gray-50 font-inherit'>Follow Us</Follow>
      <div className="flex gap-5 mt-4">
        {socials.map((item) => (
          <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-50 hover:text-gray-400 ">
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <Follow className='text-gray-50 font-inherit mt-6'>Contact Us</Follow>
      <Contact className='w-screen gap-4 pt-4 items-center flex flex-col'>
        <div className="w-full flex items-center gap-2">
          <PhoneIcon />
          <a href="tel:18883440214">
            1-888-344-0214
          </a>
        </div>
        <div className="w-full flex items-center gap-2">
          <MailIcon /> 
          <a href="mailto:cs@thedebtreliefcompany.com">cs@thedebtreliefcompany.com</a>
        </div>
        
        </Contact>
      </div>
      <Divider className="divider-2"></Divider>
      <X2019AlyeskaResor className="x2019-alyeska-resor-2">
        <span className="spang2685 manrope-semi-bold-white-14px">
          © Copyright The Good Debt Relief Company 2023. All rights reserved.
        </span>
      </X2019AlyeskaResor>
      <div className='text-xs text-gray-500 w-full mt-4 h-auto px-10 mb-10'>
          The Debt Relief Program is not available in all states across the United States and not all debt accounts are eligible to be included.
          ​The Debt Relief Company is not a lender and does not assume the responsibility of a consumer's debt obligations. Clients that enroll in our debt relief program and make all monthly payments in a timely fashion pay approximately 65%-75% of the enrolled debt amount (including all fees and associated costs). These figures are based on conservative estimates and may vary. Available program terms range from 12-48 months. Not all clients who enroll will complete The Debt Relief Program. 
          The Debt Relief Company cannot guarantee percentage reductions for our debt resolution services and the timeframe in which they are achieved. The Debt Relief Company does not provide clients with legal, tax, bankruptcy, accounting or investment advice. The use of our debt relief services and your participation in the debt relief program will likely affect your credit worthiness. 
          We do our best to provide clients with realistic and conservative financial goals, however if you miss program payments it will likely impact your ability to become debt free and pay off your credit card accounts within the estimated timeframe.
        </div>
    </AndroidSmall61>
  );
}

const AndroidSmall61 = styled.div`
  width: 100%;
  height: auto;
  z-index: 1;
  display: flex;
  flex-direction: column;
  /* padding: 72px 0; */
  padding-top: 72px;
  align-items: center;
  background-color: var(--tundora);

  &.android-small-6.android-small-6-1 {
    z-index: 11;
    margin-right: 2px;
  }
`;

const LogoDebtRelief1 = styled.img`
  width: 126px;
  height: 58px;
`;

const FrameContainer = styled.div`
  height: 216px;
  margin-top: 72px;
  display: flex;
  align-items: flex-start;
  min-width: 312px;
  gap: 12px;
`;

const Frame34 = styled.div`
  width: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 216px;
  gap: 33px;
`;

const OurWebsite = styled.div`
  ${ManropeExtraBoldWhite15px}
  width: 150px;
  margin-top: -1px;
  min-height: 20px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame31 = styled.div`
  width: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 144px;
  gap: 33px;
`;

const FrameContainer1 = styled.div`
  height: 144px;
  margin-top: 72px;
  display: flex;
  align-items: flex-start;
  min-width: 312px;
  gap: 12px;
`;

const Resources = styled.div`
  ${ManropeExtraBoldWhite15px}
  width: 135px;
  margin-top: -1px;
  min-height: 20px;
  letter-spacing: 0;
  line-height: normal;
`;

const Divider = styled.div`
  width: 313px;
  height: 2px;
  margin-top: 71px;
  background-color: var(--white);
  opacity: 0.15;
`;

const X2019AlyeskaResor = styled.p`
  ${ManropeSemiBoldWhite14px}
  width: 287px;
  min-height: 38px;
  margin-top: 54px;
  margin-left: 1px;
  opacity: 0.75;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Follow = styled.span`
  ${ManropeSemiBoldWhite15px}
`;

const Contact = styled.div`
  ${ManropeExtraBoldWhite15px}
  min-height: 20px;
  letter-spacing: 0;
  line-height: normal;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;


export default AndroidSmall6;
