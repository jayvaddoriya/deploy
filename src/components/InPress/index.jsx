import React, {useMemo, useRef, useState} from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./index.module.css";
import classNames from "classnames";
import Image from "next/image";
import Intro from "@/components/Intro";
import {useRouter} from "next/router";

const posts = [
    {
        title: 'Survey: 47% of U.S. adults have at least one unused gift card',
        href: 'https://www.bankrate.com/finance/credit-cards/gift-cards-survey/',
        imagePreviewUrl: 'https://www.bankrate.com/2023/07/17120545/Banking_Gift-card-survey.jpg?auto=webp&optimize=high&crop=16:9&width=912',
        resource: 'Bankrate',
        category: { name: 'Article', href: '#' },
        description:
            'If you’ve found a gift card (or three) you had forgotten about in the back of your wallet, or were surprised by the store credit you found sitting in an app, you’re in good company. Nearly half (47 percent) of U.S. adults have at least one unused gift card, gift voucher or store credit, according to a new Bankrate study.',
        date: 'July 26, 2021',
        datetime: '2020-03-16',
        imageUrl: "/static/img/bankrateLogo.webp",
        readingTime: '6 min',
        author: {
            name: 'Roel Aufderehar',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        title: 'How to hedge against inflation with investments that keep pace with rising prices',
        href: 'https://www.businessinsider.com/personal-finance/how-to-invest-for-inflation',
        imagePreviewUrl: 'https://i.insider.com/60021a96e3d62500185fce73?width=1300&format=jpeg&auto=webp',
        resource: 'Business Insider',
        category: { name: 'Case Study', href: '#' },
        description:
            'Our experts answer readers\' investing questions and write unbiased product reviews (here\'s how we assess investing products). Paid non-client promotion: In some cases, we receive a commission from our partners. Our opinions are always our own.',
        date: 'Aug 16, 2022',
        datetime: '2020-02-12',
        imageUrl: "/static/img/businessInsiderLogo.png",
        readingTime: '11 min',
        author: {
            name: 'Daniela Metz',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        title: 'If You Can’t Pay All of Your Bills, Here Are the Ones to Put on Hold First',
        href: 'https://www.apartmenttherapy.com/bills-on-hold-36762526',
        imagePreviewUrl: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/at%2Fart%2Fphoto%2F2020-01%2FMoney%20Stock%20Photography%2Ffinance-shoot-19',
        resource: 'Apartment Therapy',
        category: { name: 'Case Study', href: '#' },
        description:
            'In the Before Times, you probably built your monthly budget based on a simple principle: More money should come in than go out. But coronavirus has created a pandemic and recession double-whammy, ushering in a whole lot of economic uncertainty. Unlike recessions of the past, there is no roadmap for this one: No bubbles burst nor was there a natural disaster thrusting everything into a downturn—rather, industries were shut down to slow the spread of the pandemic. ',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl: "/static/img/apartmentTherapyLogo.png",
        readingTime: '11 min',
        author: {
            name: 'Daniela Metz',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        title: '14 Tips to Meet Your Financial Goals in 2021',
        href: 'https://blog.cheapism.com/financial-tips-for-new-year/',
        imagePreviewUrl: 'https://cdn.cheapism.com/images/Fundera.2e16d0ba.fill-1440x605.png',
        resource: 'Cheapism',
        category: { name: 'Case Study', href: '#' },
        description:
            'Who among us isn’t ready to bid good riddance to the year 2020? The pandemic has upended life across the globe and that includes creating financial chaos and stress for people of all walks of life. The good news is that 2021 is just around the corner. The bad news is that there will be pandemic fallout to deal with in the year ahead, and that could mean a continued rocky ride for your personal finances.',
        date: 'Dec 23rd, 2020',
        datetime: '2020-02-12',
        imageUrl: "/static/img/cheapismLogo.png",
        readingTime: '11 min',
        author: {
            name: 'Daniela Metz',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        title: 'How Amazon Changed Our Shopping Habits — For Better and Worse',
        href: 'https://www.gobankingrates.com/money/business/amazon-changed-shopping-habits-better-worse/',
        imagePreviewUrl: 'https://cdn.gobankingrates.com/wp-content/uploads/2019/11/woman-opening-up-Amazon-delivery-boxes-shutterstock_1100915651.jpg?quality=75&w=800&webp=1',
        resource: 'GOBankingRates',
        category: { name: 'Case Study', href: '#' },
        description:
            'For centuries, shopping was a social, in-person affair. Dating back to 800 B.C. in ancient Greece, the city center in Agora was buzzing with merchants selling their wares. People visited not only to shop but to mingle with one another, philosophize and talk politics. Fast forward to 2021, and shopping can be done online, in total isolation and with no conversation. Amazon didn’t singlehandedly spearhead this evolution in shopping (eBay was just as important an early pioneer in e-commerce) — but it is hastening the rise of online shopping and changing consumer behavior at a lightning-fast pace. ',
        date: 'Mar 31, 2021',
        datetime: '2020-02-12',
        imageUrl: "/static/img/gobankingratesLogo.png",
        readingTime: '11 min',
        author: {
            name: 'Daniela Metz',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        title: 'There\'s a 40 Percent Chance Your Family Is Keeping This Secret From You',
        href: 'https://bestlifeonline.com/financial-secrets/',
        imagePreviewUrl: 'https://bestlifeonline.com/wp-content/uploads/sites/3/2020/11/mother-daughter.jpg?quality=82&strip=1&resize=970%2C546',
        resource: 'BestLife',
        category: { name: 'Case Study', href: '#' },
        description:
            'You may have told the friends and family members who matter most to you that they can tell you anything, but there\'s one topic that people tend to keep close the vest, even with those they trust: money.',
        date: 'Nov 23, 2020',
        datetime: '2020-02-12',
        imageUrl: "/static/img/bestlifeLogo.webp",
        readingTime: '11 min',
        author: {
            name: 'Daniela Metz',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        title: 'How To Invest In A Post-COVID-19 World – 45 Financial Experts Weigh In',
        href: 'https://www.drwealth.com/investing-in-post-covid19-world/',
        imagePreviewUrl: 'https://www.drwealth.com/wp-content/uploads/How-To-Invest-In-A-Post-COVID-19-World.jpg',
        resource: 'DrWealth',
        category: { name: 'Case Study', href: '#' },
        description:
            'How to invest in a post-COVID-19 world? This is what everybody is asking. The pandemic took us all by surprise. Many businesses have closed, some are waiting for the restrictions to be lifted while others have gone bankrupt already. ',
        date: 'Sep 30, 2020',
        datetime: '2020-02-12',
        imageUrl: "/static/img/drwealthLogo.png",
        readingTime: '11 min',
        author: {
            name: 'Daniela Metz',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        title: '10 Mindful Tips For Achieving Big Things At Work',
        href: 'https://www.inverse.com/mind-body/entrepreneurs-share-tips-for-achieving-a-state-of-flow-at-work',
        imagePreviewUrl: 'https://imgix.bustle.com/uploads/image/2020/6/16/deee65af-a986-4ab3-908b-ac6b21ac63af-gettyimages-1213655703.jpg?w=688&h=310&fit=crop&crop=focalpoint&auto=format%2Ccompress&q=50&dpr=2&fp-x=0.5026737967914439&fp-y=0.33136094674556216',
        resource: 'Inverse',
        category: { name: 'Video', href: '#' },
        description:
            'Psychologists call "flow" the moment when you\'ve achieved a state of pure focus and creativity. Entrepreneurs share tips for how to accomplish a state of flow to accomplish work goals.',
        date: 'June 16, 2020',
        datetime: '2020-03-10',
        imageUrl: "/static/img/inverseLogo.svg.png",
        readingTime: '4 min',
        author: {
            name: 'Brenna Goyette',
            href: '#',
            imageUrl:
                'https://imgix.bustle.com/uploads/getty/2022/10/31/d58c8dff-d47a-4e66-9c32-0c3ee2efcd28-getty-3216816.jpg?w=720&h=720&fit=crop&crop=faces&auto=format%2Ccompress&q=50&blend=000000&blendAlpha=45&blendMode=normal&dpr=2',
        },
    },
    {
        title: 'Report: Massive Uptick in Consumer Finance Complaints During Coronavirus Pandemic',
        href: 'https://lendedu.com/blog/consumer-finance-complaints-coronavirus/',
        resource: 'LendEDU',
        category: { name: 'Video', href: '#' },
        description:
            'The role of the Consumer Financial Protection Bureau (CFPB) has come under scrutiny, but as of the time of this writing, it’s still a place for consumers to log complaints against financial institutions.',
        date: ' Jan 15, 2021 ',
        datetime: '2020-03-10',
        imageUrl: "/static/img/lendeduLogo.png",
        readingTime: '4 min',
        author: {
            name: 'Brenna Goyette',
            href: '#',
            imageUrl:
                'https://imgix.bustle.com/uploads/getty/2022/10/31/d58c8dff-d47a-4e66-9c32-0c3ee2efcd28-getty-3216816.jpg?w=720&h=720&fit=crop&crop=faces&auto=format%2Ccompress&q=50&blend=000000&blendAlpha=45&blendMode=normal&dpr=2',
        },
    }
]

const PAGE_SIZE = 6;

function InPress() {
    const router = useRouter();
    const [page, setPage] = useState(0);

    const handleShowMore = () => {
        setPage(page + 1);
    }

    const cards = useMemo(() => posts.slice(0, page * PAGE_SIZE + PAGE_SIZE), [page]);
    const isNextPage = useMemo(() => !!posts.slice((page + 1) * PAGE_SIZE, (page + 1) * PAGE_SIZE + PAGE_SIZE).length, [page]);

    return (
    <div className="container-center-horizontal">
      <div className={classNames("inPress screen", styles.root)}>
        <Header className={'mac-book-pro-16-4-3'} />
        <Intro
            className={'inPress'}
            texts={{
                title: 'In the Press'
            }}
        />
          <div className={styles.section1}>
              <div className={classNames(styles.content, styles.section1Content)}>
                  <div className={styles.cardsWrapper}>
                      {
                          cards.map((item, i) => (<div className={styles.card} key={i}>
                              <a href={item.href} target='_blank' rel='nofollow' className={styles.image}>
                                <Image src={item.imagePreviewUrl || item.imageUrl} alt={item.title} fill={true} objectFit={'cover'}/>
                              </a>
                              <a href={item.href} target='_blank' rel='nofollow' className={styles.cardTitle}>{item.title}</a>
                              <div className={styles.cardDescription}>{item.description}</div>
                              <div className={styles.cardDetails}>
                                  <a className={styles.cardResourceLogo}>
                                      <Image src={item.imageUrl} alt={item.title} fill={true} objectFit={'contain'}/>
                                  </a>
                                  <div className={styles.cardResourceTitle}>{item.resource}</div>
                                  <div className={styles.cardReadTime}>{item.readingTime} read</div>
                              </div>
                          </div>))
                      }
                  </div>
                  {
                      isNextPage &&
                      <div className={styles.moreButton} onClick={handleShowMore}>Load More</div>
                  }
              </div>
              <div className={styles.section2}>
                  <div className={classNames(styles.content, styles.section2Content)}>
                      <p className={styles.textParagraph}>By entering into any financial transaction or agreement, Name knowledges and agrees that any money borrowed or financial obligation incurred is a legitimate debt owed to Name. The terms and conditions of the debt, including but not limited to interest rates, repayment schedules, and any other agreed-upon terms, are as outlined in the original agreement between the parties. Both parties are expected to adhere to these terms. <span className={styles.bold}>Any communication</span> regarding the debt shall be conducted in a respectful and professional manner. Both parties agree to communicate openly and honestly about the status of the debt and any relevant updates. In the event of a dispute related to the debt, both parties agree to make a good-faith effort to resolve the issue amicably through negotiation or, if necessary, through mediation or arbitration in accordance with the laws of the This debt disclaimer is not intended to be legal advice. If either party requires legal advice concerning the debt, it is recommended to consult with a qualified attorney. By continuing with any financial transactions or agreements, both parties acknowledge their understanding and acceptance of the terms outlined in this debt disclaimer. Please sign and return a copy of this letter to confirm your acknowledgment and acceptance of the terms.</p>
                  </div>
              </div>
          </div>
        <Footer />
          <Image className={styles.frame129} onClick={() => router.push('tel:+1-888-344-0214')} src={"/static/img/frame-129-2@2x.svg"} alt="Frame 129" width={112} height={112}/>
      </div>
    </div>
  );
}

export default InPress;
