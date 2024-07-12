import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./index.module.css";
import classNames from "classnames";
import Image from "next/image";
import Intro from "@/components/Intro";
import ListItem from "@/components/ListItem";
import Glossary from "@/components/Glossary";
import {useRouter} from "next/router";

const LIST = [
    {
        texts: {
            title: 'Medical History',
            description: 'Medical collections will now have less of an impact on your credit score. This is important as it has been shown that many Americans rely on credit when going through a medical emergency. It is unlikely someone has the thousands needed for procedures and doctors visits, so medical collections have become a norm for many people. Because of this new addition made by FICO, these collections accounts will no longer play as big of a role as say a collections account for an unpaid cellphone bill.'
        }
    },
    {
        texts: {
            title: 'Third Party Collections',
            description: 'Paid-off debt collections accounts will no longer have any negative impact on your credit score. This is extremely significant because your past will no longer haunt you when trying to re-build your credit. Many times, when a collection account hits your report, you are either unaware of the debt owed, or are unable to pay it. Showing that you were able to work out an agreement with the company on the debt owed allows creditors to now see you as financially responsible, whereas in the past, it would’ve prevented them from extending you credit.'
        }
    },
    {
        texts: {
            title: 'Rental History is Now Included',
            description: 'Paid-off debt collections accounts will no longer have any negative impact on your credit score. This is extremely significant because your past will no longer haunt you when trying to re-build your credit. Many times, when a collection account hits your report, you are either unaware of the debt owed, or are unable to pay it. Showing that you were able to work out an agreement with the company on the debt owed allows creditors to now see you as financially responsible, whereas in the past, it would’ve prevented them from extending you credit.'
        }
    }
]

const LIST_2 = [
    {
        texts: {
            title: 'Payment History (35%)',
            description: 'Lenders will want to know if you are good at making payments on time. From the viewpoint of lenders, past behavior will likely predict future behavior. This is why payment history makes up the largest portion of your credit score. It is important to note, that not all late payments are marked the same (i.e. 90 day delinquencies are more impactful than 30 day missed payments). As time passes, the further in the past your late payments occurred, the less of an impact it will have on your current credit score.'
        }
    },
    {
        texts: {
            title: 'Amounts Owed (30%)',
            description: 'Lenders view borrowers who regularly carry high balances, or max out their spending limits, as people who cannot handle debt responsibly and will use this factor when determining if they should open a line of credit for a potential consumer, or reduce/close a line of credit for an existing consumer. This is why it is important that you keep your utilization on open lines of credit below 30%. When your balances are more than 30% of your total available credit, you will begin to see a decrease in your credit score overtime.'
        }
    },
    {
        texts: {
            title: 'Length of Credit History (15%)',
            description: 'This factor provides the history of your borrowing habits. It gives lenders a better idea of what your financial behavior looks like and can help assess their level of risk when lending out credit. This is akin to the longtime customer that is allowed to keep a running tab open because the store owner knows they are good for it and will pay them back. This factor is based on an average of your open accounts. This is why it can be beneficial to keep old cards open (assuming they are in good standing), and avoid opening new lines of credit when unnecessary.'
        }
    },
    {
        texts: {
            title: 'Credit Mix (10%)',
            description: 'This factor is viewed by lenders to determine the types of debt that a consumer can handle. Having different types of debt on your credit report, such as revolving, installment loans, or mortgages will indicate that you can responsibly pay off a variety of debts. Consumers who only have one type of debt, like unsecured debts, may be seen as a risk, since they have a dependency on revolving accounts.'
        }
    },
    {
        texts: {
            title: 'New Credit (10%)',
            description: 'Opening too many accounts in a short amount of time will impact the average length of credit history, but will also impact the amount of new remarks on your credit report. Consumers who regularly apply for new credit will undoubtedly see inquiries impact their credit score. An inquiry can hurt your credit score even if you are not approved for the line of credit. A good rule of thumb is keeping inquiries to 2 or less per year.'
        }
    }
];

const CARDS = [
    {
        title: 'Very Poor',
        value: '300-579'
    },
    {
        title: 'Fair',
        value: '580-669'
    },
    {
        title: 'Good',
        value: '670-739'
    },
    {
        title: 'Very Good',
        value: '740-799'
    },
    {
        title: 'Exceptional',
        value: '800-850'
    }
];

function CreditWorthiness() {
    const router = useRouter();
  return (
    <div className="container-center-horizontal">
      <div className={classNames("creditWorthiness screen", styles.root)}>
        <Header className={'mac-book-pro-16-4-3'} />
        <Intro
            className={'creditWorthiness'}
            texts={{
                title: 'Credit Worthiness',
                subtitle: 'What is a Credit Score and How Does Credit Work?',
                description: 'A credit score is a three-digit number that is used by lenders and credit card companies to predict the likelihood of someone paying them back. Although the Vantage score is becoming more popular, the most popular score currently used by lenders is the FICO credit score. Your FICO score ranges from 300-850 and the higher your credit score, the better lending opportunities you will have. The score is also used to determine how much interest you will pay back. The lower your score, the higher your interest rates will be.'
            }}
            image={{
                src: '/static/img/group-13@2x.svg',
                alt: 'Icecream',
                imageWidth: 229,
                imageHeight: 440,
            }}
        />
          <div className={styles.section1}>
              <div className={classNames(styles.content, styles.section1Content)}>
                  <div className={classNames(styles.textContent, styles.textContentSection1)}>
                      <div className={styles.title}>Credit Score Ranges</div>
                      <div className={styles.cards}>
                          {
                              CARDS.map((card, i) => (<div className={styles.card} key={i}>
                                  <div className={styles.cardTitle}>{card.title}</div>
                                  <div className={styles.cardValue}>{card.value}</div>
                              </div>))

                          }
                      </div>
                  </div>
                  <Image className={styles.crabImage} src={'/static/img/group-14@2x.svg'} alt={'Crab'} width={197} height={191}/>
              </div>
          </div>
          <div className={styles.section2}>
              <div className={classNames(styles.content, styles.section2Content)}>
                  <Image className={styles.cocktailImage} src={'/static/img/group-4@2x.svg'} alt={'Tropical drink'} width={230} height={292}/>
                  <div className={classNames(styles.textContent, styles.textContentSection2)}>
                      <div className={classNames(styles.title, styles.section2Title)}>There are five main factors that your credit score is comprised of:</div>
                      <div className={styles.list2}>
                          {
                              LIST_2.map((item, i) => (
                                  <div className={styles.listItem2} key={i}>
                                      <ListItem texts={item.texts} className={'headerColumn'}/>
                                  </div>
                              ))
                          }
                      </div>
                  </div>
              </div>
          </div>
          <div className={styles.section3}>
              <div className={classNames(styles.content, styles.section3Content)}>
                  <div className={classNames(styles.textContent, styles.textContentSection3)}>
                      <div className={styles.title}>I Make My Payments Every Month, Why is My Credit Score Going Down?</div>
                      <div className={styles.texts}>
                          <div className={classNames(styles.textLong, styles.textLongSection3)}>
                              <p className={styles.textParagraph}>This is a common question for many people struggling with credit card debt. You always make sure to keep up with your minimum payments, and try your best to pay more when you can. So why does your credit score continue going down? The most common reason is that other factors from your credit score (besides payment history) are outweighing the positives of making on time payments. Most consumers find that the utilization levels on their credit cards have reached a point where they are well over 30% and because of compounding interest, are unable to make the dent they would like to in order to get their balances back down.</p>
                              <p className={styles.textParagraph}>If you are unable to make progress on your credit card debt you should consider enlisting the help of a debt relief company. Moreover, because carrying credit card debt is seen as high risk, this 30% factor in the credit scoring algorithm begins to negatively impact your score. When you are carrying unsecured debt, you are also showing a reliance on credit. This also negatively impacts your credit mix. When you combine both factors, you see that 40% of your credit scoring calculation is being negatively impacted. This is similar to driving a car with a nail stuck in one of your tires. As you continue to drive the tire will lose air over time. The same is happening with your credit score as each month passes, and this is why you will continue to see your score gradually decrease every month, even though you are making all your payments on time.</p>
                          </div>
                      </div>
                  </div>
                  <Image className={styles.diagramImage} src={'/static/img/creditWorthiness/diagram.svg'} alt={'Hammock'} width={547} height={389}/>
              </div>
          </div>
          <div className={styles.section4}>
              <div className={classNames(styles.content, styles.section4Content)}>
                  <Image className={styles.saverImage} src={'static/img/group-12@2x.svg'} alt={'Life saver'} width={319} height={513}/>
                  <Image className={styles.sunImage} src={'static/img/creditWorthiness/sun.svg'} alt={'Life saver'} width={101} height={97}/>
                  <div className={classNames(styles.textContent, styles.textContentSection4)}>
                      <div className={classNames(styles.title)}>FICO 9.0 Score</div>
                      <div className={classNames(styles.textLong, styles.textLongSection4)}>
                          <p className={styles.textParagraph}>This is the version of the FICO score that is most commonly used by lenders. Although, FICO has recently released a FICO 10.0 scoring model, many lenders have not opted in to using the new score system. In fact, many lenders still use previous FICO scoring models but FICO 9.0 is the most predominant. It generally follows the same scoring calculation as previous FICO scores, except for three major changes that were added to protect you, the consumer.</p>
                      </div>
                      <div className={styles.list}>
                          {
                              LIST.map((item, i) => (
                                  <div className={styles.listItem} key={i}>
                                      <ListItem index={i + 1} texts={item.texts} className={'headerColumn'}/>
                                  </div>
                              ))
                          }
                      </div>
                      <div className={classNames(styles.textLong, styles.textLongSection4, styles.textLongSection4Second)}>
                          <p className={styles.textParagraph}>Due to the considerable changes made with the release of FICO 9.0, the opportunity cost of enrolling in a debt relief program has become much more favorable to U.S. consumers.</p>
                      </div>
                  </div>
              </div>
          </div>
          <Glossary/>
          <Image className={styles.frame129} onClick={() => router.push('tel:+1-888-344-0214')} src={"/static/img/frame-129-2@2x.svg"} alt="Frame 129" width={112} height={112}/>
        <Footer />
      </div>
    </div>
  );
}

export default CreditWorthiness;
