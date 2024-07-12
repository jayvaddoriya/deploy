import React, { useId, useRef, useState } from 'react'
import Link from 'next/link'

import { Container } from '@/components/Container'
// import DebtCoSplash from '@/components/DebtCoSplash'
import Head from 'next/head';
// import { Footer } from '@/components/Footer';
import Image from 'next/image';
// import { Header } from '@/components/Header';
// import { Button } from '@/components/Button';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import coconutSun from 'public/static/img/croppedCoconutSun.svg'
import crabSign from 'public/static/img/Crab_Sign.svg'
import crabCredit from 'public/static/img/CrabCredit.svg';
import Frame28 from '@/components/Frame28';
// import { AnimatedForm } from '@/components/AnimatedForm';
// import { AnimatePresence } from 'framer-motion';
// import { FormModal } from '@/components/FormModal'
// import ModalButton from '@/components/CtaModalButton'
import generatePageSEO from '@/utils/generatePageSEO';

export default function ContactUs() {
  const [formOpen, setFormOpen] = useState(false);
  const [modalAnimateSectionId, setModalAnimateSectionId] = useState(null);

  const toggleFormOpen = () => {
    setFormOpen(value => !value);
  };

  const handleSavingsClick = () => {
    console.log('savings click')
    // implement wi h popout modal form later ?
  }
  return (
    <>
      <Head>
        <title>Contact The Debt Relief Co.</title>
        {generatePageSEO(
              'contact-us',
              'Contact The Debt Relief Co.',
              `Toll Free Number: (888) 344-0214. Email: cs@thedebtreliefcompany.com.
              Location 1: 99 Wall Street #725, New York, New York 10005, United States. 
              Location 2: 480 Castleton Ave, Staten Island, NY 10301.`,
              'contact'
        )}
      </Head>
      <main>
        <Header />
      <div
        className='mt-12 overflow-hidden flex flex-col pb-20 sm:pb-36'
        >
        <Container className="text-center text-gray-700 flex-col flex w-[90%] sm:w-2/3 mt-12">

          {/* <span className="text-3xl sm:text-5xl w-full text-black font-medium">
            Contact Us
          </span> */}
          <h1 className="text-3xl sm:text-5xl w-full text-black font-medium">Contact The Debt Relief</h1>
          {/* <span className='mt-4 text-md sm:text-2xl font-semibold text-gray-500'>
            {props.subtitle}
          </span> */}
        </Container>
        <Container className='flex flex-col text-center md:text-left w-full h-1/2 justify-around items-center mt-4 px-4 gap-8'>
          <div className='w-full sm:w-3/4 px-8'>
            <iframe
              width=""
              height="450" src="https://www.youtube.com/embed/3_Gr9Q2Kh5c"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            >
            </iframe>
          </div>
          <h3 className="text-center font-medium text-2xl">
              The Debt Relief Company <br />
              {/* 99 Wall Street #725, New York, NY 10005, United States <br /> */}
              Email: cs@thedebtreliefcompany.com <br />
              Toll Free: (888) 344-0214 <br />
              Fax: (917) 810-4543
          </h3>
          {/* <Link href="/" className="h-full w-full sm:w-2/3 text-xl mt-0 mx-auto mb-auto py-4 inline-flex justify-center rounded-lg px-3 font-bold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-main_orange text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-main_orange active:text-white/80 before:transition-colors drop-shadow-lg hover:drop-shadow-xl">Our Reviews</Link> */}
          {/* <ModalButton
            setModalAnimateSectionId={setModalAnimateSectionId}
            toggleFormOpen={toggleFormOpen}
            text="Book an Appointment"
            sectionId="consultation-cta"
          /> */}
          <Frame28 className="w-full md:w-1/2" onClick={() => router.push('/book-online')} text="Book an Appointment">
            Book an Appointment
          </Frame28>
          <div className='w-full h-auto flex flex-col md:flex-row gap-2 justify-center items-center mt-6'>
            <div className='flex flex-col gap-2 w-2/3 items-center justify-center'>
              <h3 className="text-center font-medium text-2xl">
                99 Wall Street #725, New York, NY 10005 <br />
              </h3>
              <p className='text-xl text-center'>
                Hours of Operation: <br />
                Monday - Thursday: 9:00am - 8:00pm EST <br />
                Friday: 9:00am - 6:00pm EST
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.60000761717!2d-74.0072812!3d40.7048062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bb24df21675%3A0x744b97d40f4fb525!2sThe%20Debt%20Relief%20Company!5e0!3m2!1sen!2sus!4v1665875758202!5m2!1sen!2sus"
                width="500"
                height="450"
                style={{ border: 0, marginRight: '50px', marginLeft: '50px'}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
            <div className='flex flex-col gap-2 w-2/3 items-center justify-center'>
              <h3 className="text-center font-medium text-2xl">
                480 Castleton Ave, Staten Island, NY 10301
              </h3>
              <p className='text-xl text-center'>
                Hours of Operation: <br />
                Monday - Thursday: 10:00am - 7:00pm EST <br />
                Friday: 10:00am - 5:00pm EST <br />
              </p>
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.8208986318477!2d-74.0985278!3d40.63383159999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24f0c8ebcfe3d%3A0x745b74e69cf739f0!2sThe%20Debt%20Relief%20Company!5e0!3m2!1sen!2sus!4v1665875798710!5m2!1sen!2sus"
              width="500"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
          </div>

        </Container>
        <Container className={'mt-20 sm:mt-36 text-gray-700 text-base sm:text-lg'}>
          <p>
            <span className={'font-medium'}>Disclaimer:</span> By providing my phone number to The Debt Relief Co, I agree and acknowledge that The Debt Relief Co may send text messages to my wireless phone number for any purpose. Message and data rates may apply.
            <br/>
            We will only send one SMS as a reply to you, and you will be able to Opt-out by replying “STOP”. For more information on how your data will be handled please visit our <a className={'font-medium underline'} href={'https://app.termly.io/policy-viewer/policy.html?policyUUID=8de218b0-b9dc-4ff8-983b-84d60f971f84'} target={'_blank'} rel={'nofollow'}>PRIVACY POLICY</a>.
          </p>
          <p className={'mt-2'}>
             <span className={'font-medium'}>Privacy Policy:</span> No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
          </p>
        </Container>
        </div>
      </main>
      <Footer />
    </>
  )
}
