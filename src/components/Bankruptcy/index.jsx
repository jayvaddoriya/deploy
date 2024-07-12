import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./index.module.css";
import classNames from "classnames";
import Image from "next/image";
import Intro from "@/components/Intro";
import ListItem from "@/components/ListItem";
import {useRouter} from "next/router";

const LIST = [
    {
        texts: {
            description: 'Impact To Credit Worthiness - Filing for any type of Bankruptcy will leave your credit score and credit report in the dumps for a long time. The Bankruptcy will stay on your credit report for 7 to 10 years and you will be viewed as un-lendable in the long term.'
        }
    },
    {
        texts: {
            description: 'Public Record - Any bankruptcies that are filed become public record. So anyone that conducts a background check can see that you\'ve filed for bankruptcy (Employers, landlords, etc.)'
        }
    },
    {
        texts: {
            description: 'Expensive - Filing for bankruptcy is costly and far from free. In order to correctly process the filing you will need a decent attorney (which tend to be quite expensive).'
        }
    },
    {
        texts: {
            description: 'Property Loss - You may lose property that you own that is not exempt from sale by the bankruptcy trustee.'
        }
    }
]

function Bankruptcy() {
    const router = useRouter();
  return (
    <div className="container-center-horizontal">
      <div className={classNames("bankruptcy screen", styles.root)}>
        <Header className={'mac-book-pro-16-4-3'} />
        <Intro
            className={'bankruptcy'}
            texts={{
                title: 'Bankruptcy',
                subtitle: 'What is Bankruptcy?',
                description: 'Bankruptcy should always be a last resort! However, if you feel it\'s the only option available to you, here\'s everything you need to know.'
            }}
            image={{
                src: '/static/img/bankruptcy/intro.svg',
                srcMobile: '/static/img/bankruptcy/introMobile.svg',
                alt: 'Sand castle',
                imageWidth: 724,
                imageHeight: 464,
                imageMobileWidth: 308,
                imageMobileHeight: 251
            }}
        />
          <div className={styles.section1}>
              <div className={classNames(styles.content, styles.section1Content)}>
                  <Image className={styles.cocktailImage} src={'/static/img/group-4@2x.svg'} alt={'Tropical drink'} width={230} height={292}/>
                  <div className={styles.textContent}>
                      <div className={styles.title}>What is a Chapter 7 Bankruptcy?</div>
                      <div className={styles.texts}>
                          <div className={styles.text}>
                              <p className={styles.textParagraph}>Bankruptcy is one of the many debt relief options available to consumers struggling to achieve financial stability.
                                  Chapter 7 is a liquidation bankruptcy designed to wipe out general unsecured debts such as credit cards and medical bills. In order to qualify, the debtor must have little to no disposable income. If the individual's income is too high, they would more than likely be required to file for a Chapter 13 bankruptcy.</p>
                              <p className={styles.textParagraph}>Filing for a Chapter 7 Bankruptcy liquidates properties & assets to pay off "some" debts and absolves the filer of any remaining debt obligations. When a debtor files for Chapter 7, a trustee is appointed to administer the case. After reviewing the paperwork and supporting documents, the trustee designates which nonexempt assets will be sold to pay back creditors. If the debtor has no nonexempt assets or properties to sell the creditors will in turn receive nothing. As a result, those that benefit most from a Chapter 7 filing are individuals with low income or little to no assets.</p>
                          </div>
                          <div className={styles.text}>
                              <p className={styles.textParagraph}>However in 2005, the US government mandated an overhaul of federal bankruptcy laws aimed at encouraging consumers to file Chapter 13 filings. This is significant due to the fact that it forces consumers to sign onto debt-repayment plans in exchange for keeping certain assets and altogether eliminated an era of leniency towards Chapter 7 filings.</p>
                              <p className={styles.textParagraph}>The overhaul of federal bankruptcy laws included the introduction of a "means" test. The introduction of the means test was designed to separate those would could afford to repay their debt from those who couldn't. In essence, since these regulatory changes were passed anyone that cannot sufficiently pass the means test (meaning they can at least pay back a portion of their debt after it is restructured) can no longer file for a Chapter 7 bankruptcy. These changes were really designed to make it much more difficult for people eliminate their debt scot free by utilizing a Chapter 7 filing.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className={styles.section2}>
              <div className={classNames(styles.content, styles.section2Content)}>
                  <div className={classNames(styles.textContent, styles.textContentSection2)}>
                      <div className={styles.title}>What is a Chapter 13 Bankruptcy?</div>
                      <div className={styles.texts}>
                          <div className={styles.text}>
                              <p className={styles.textParagraph}>Commonly referred to as a reorganization bankruptcy, Chapter 13 is designed for debtors who can pay back at least a portion of their debts through a repayment plan and restructuring. If an individual cannot satisfy the means test and has too much disposable income for a Chapter 7 bankruptcy, the individual would most likely have no choice but to file for a Chapter 13. However, Chapter 13 bankruptcy offers some benefits that Chapter 7 doesn't. For example, with a Chapter 13, an individual has the ability to catch up on missed mortgage payments or strip wholly unsecured junior liens from a house.</p>
                              <p className={styles.textParagraph}>In a Chapter 13 bankruptcy, the debtor gets to keep all of their assets/property (which includes nonexempt assets). In exchange, the individual pays back all or a portion of their debts through a structured repayment plan (again the amount they must pay back is dependent upon their income, monthly expenses and debt type).</p>
                          </div>
                      </div>
                  </div>
                  <Image className={styles.hammockImage} src={'/static/img/bankruptcy/hammock.svg'} alt={'Hammock'} width={700} height={700}/>
              </div>
          </div>
          <div className={styles.section3}>
              <div className={classNames(styles.content, styles.section3Content)}>
                  <Image className={styles.icecreamImage} src={'/static/img/group-13@2x.svg'} alt={'Icecream'} width={172} height={330}/>
                  <div className={classNames(styles.textContent, styles.textContentSection3)}>
                      <div className={classNames(styles.title, styles.titleSection3)}>Reasons You Should Avoid Bankruptcy</div>
                      <div className={classNames(styles.textLong, styles.textLongSection3)}>
                          <p className={styles.textParagraph}>There are never any upfront costs and we don't charge for our service until your debt is resolved and you save money. You will have one main point of contact throughout the debt relief process. The heavy lifting is on us -- take care of your monthly payment and we’ll handle the rest.</p>
                      </div>
                      <div className={styles.list}>
                          {
                              LIST.map((item, i) => (
                                  <div className={styles.listItem} key={i}>
                                      <ListItem index={i + 1} texts={item.texts}/>
                                  </div>
                              ))
                          }
                      </div>
                  </div>
              </div>
          </div>
          <Image className={styles.frame129} onClick={() => router.push('tel:+1-888-344-0214')} src={"/static/img/frame-129-2@2x.svg"} alt="Frame 129" width={112} height={112}/>
        <Footer />
      </div>
    </div>
  );
}

export default Bankruptcy;
