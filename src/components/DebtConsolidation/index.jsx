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
            title: 'Lower Effective APR & Less Finance Charges',
            description: 'If you aren\'t achieving a lower interest rate than you don\'t have your head in the game and are focusing on the all the wrong financial objectives. With any of these options, your ultimate goal should always be to save money on interest payments and have more of your payments go towards paying down the principal. If not, then what is the point?'
        }
    },
    {
        texts: {
            title: 'One Convenient Monthly Payment',
            description: 'Convenience is a big one here. Convenience dominates our lives on a daily basis and we pay up for it all the time. Don\'t believe me? Check out the most popular apps on your phone. Amazon, GrubHub and Uber are probably at the top of that list. American consumers love convenience and we often have no problem paying up for it. However, the convenience of having one monthly payment should never be the motivating factor behind your desire to consolidate. It should only be the sprinkles on top of the icing.'
        }
    },
    {
        texts: {
            title: 'Negligible Impact to Credit',
            description: 'The good thing about a consolidation loan is that it will typically have a minimal impact to your credit worthiness. However, under some circumstances the lender may require you close out some of your credit cards in order to qualify. This isn\'t always the case, but the reasoning is that if you have less available credit, you are more likely to repay your loan back.'
        }
    }
]

const LIST_2 = [
    {
        texts: {
            title: 'Difficult Qualification Parameters',
            description: 'Stringent lending criteria is likely to be the reason that most people seeking a debt consolidation loan cannot qualify for one. Back to our original point, consumers that don\'t need this option are typically the ones that qualify it. In this regard, the game is somewhat rigged.'
        }
    },
    {
        texts: {
            title: 'High Monthly Payments',
            description: 'Regardless, if you qualify for an unsecured loan or secured loan, the monthly payment on your consolidation will be much higher than your smaller debt accounts. So, in order for you to realize interest savings and the benefits of consolidating, you will have to pay much more monthly.'
        }
    },
    {
        texts: {
            title: 'Securitization',
            description: 'If you can only qualify for a debt consolidation loan by securing it to property or other assets, you are putting your collateralized property at risk. As a rule of thumb in personal finance, this is almost always a bad idea. You never want to turn unsecured debt into secured debt. No one knows what the future holds and for you to put your home or other assets at risk is a big no-no.'
        }
    }
]

function DebtConsolidation() {
    const router = useRouter();
  return (
    <div className="container-center-horizontal">
      <div className={classNames("debtConsolidation screen", styles.root)}>
        <Header className={'mac-book-pro-16-4-3'} />
        <Intro
            className={'debtConsolidation'}
            texts={{
                title: 'Debt Consolidation',
                subtitle: 'What is Debt Consolidation?',
                description: 'Debt consolidation is the process of combining smaller debt obligations — typically credit card balances, unsecured personal loans or revolving lines of credit — into one larger and centralized debt repayment option.'
            }}
            image={{
                src: '/static/img/debtConsolidation/intro.svg',
                alt: 'Beach & ocean',
                imageWidth: 615,
                imageHeight: 576,
            }}
        />
          <div className={styles.section1}>
              <div className={classNames(styles.content, styles.section1Content)}>
                  <div className={styles.textContent}>
                      <div className={styles.texts}>
                          <div className={styles.text}>
                              <p className={styles.textParagraph}>Many people become confused when they hear the term "Debt Consolidation" and for good reason.
                                  The term is used interchangeably with many debt relief options and this can lead consumers to a lot of unnecessary confusion.</p>
                              <p className={styles.textParagraph}>Filing for a Chapter 7 Bankruptcy liquidates properties & assets to pay off "some" debts and absolves the filer of any remaining debt obligations. When a debtor files for Chapter 7, a trustee is appointed to administer the case. After reviewing the paperwork and supporting documents, the trustee designates which nonexempt assets will be sold to pay back creditors. If the debtor has no nonexempt assets or properties to sell the creditors will in turn receive nothing. As a result, those that benefit most from a Chapter 7 filing are individuals with low income or little to no assets</p>
                              <p className={styles.textParagraph}>However, a traditional debt consolidation loan is quite different from a debt settlement program, debt management plan or a credit card balance transfer.
                                  To truly understand this term we first need to break it down into its simplest form and start from there.
                                  To consolidate something is the act of combining many things into one unified structure. Many things go through consolidation; small streams of running-water consolidate into rivers, price movements in the stock market consolidate and revert back to the mean, companies consolidate under mergers and acquisitions, etc.</p>
                          </div>
                          <div className={styles.text}>
                              <p className={styles.textParagraph}>Due to this, it's highly understandable why this term is so loosely thrown around in regards to personal finance. Ideally, after your done reading this you will know the difference between all the above and be all the wiser for it.</p>
                              <p className={styles.textParagraph}>So, with a debt consolidation loan option, you take out a single loan in order to combine your smaller credit card debts and personal loans. This in turn, leaves you with just one monthly payment rather than numerous smaller ones.</p>
                              <p className={styles.textParagraph}>The rationale behind consolidating is quite simple. As a consumer, you will only have to worry about managing one monthly payment — that is if your credit is good enough to consolidate all your debts in their entirety.</p>
                              <p className={styles.textParagraph}>Doing so, will definitely make things easier to manage on your end. No one likes having to worry about making multiple payments each month and this is part of the reason why autopay has become so popular in recent years.</p>
                          </div>
                      </div>
                  </div>
                  <Image className={styles.cocktailImage} src={'/static/img/debtConsolidation/cocktail.svg'} alt={'Cocktail'} width={265} height={446}/>
                  <Image className={styles.ballImage} src={'/static/img/debtConsolidation/ball.svg'} alt={'Ball'} width={120} height={160}/>
              </div>
          </div>
          <div className={styles.section2}>
              <div className={classNames(styles.content, styles.section2Content)}>
                  <div className={styles.textsWithImage}>
                      <Image className={styles.gogglesImage} src={'/static/img/debtConsolidation/goggles.svg'} alt={'Goggles'} width={254} height={254}/>
                      <div className={styles.text}>
                          <p className={styles.textParagraph}>Moreover, by combining your unsecured loans and credit cards you should theoretically be able to lower the overall interest rate on the total debt you owe.</p>
                          <p className={styles.textParagraph}>Besides convenience, the ultimate goal of a debt consolidation loan is to lower your interest payments and effective APR. Otherwise, there is no real benefit to consolidating your debt.</p>
                          <p className={styles.textParagraph}>In turn, this will allow you to have one convenient monthly payment and pay more towards your principal balance and ultimately pay off your debt quicker.</p>
                      </div>
                  </div>
                  <div className={styles.textsWithImage}>
                      <div className={styles.text}>
                          <p className={styles.textParagraph}>Although, all of these options are technically a debt consolidation, with a debt consolidation loan you are paying your debt back in full (plus interest) and typically eliminating any negative consequences to your credit.</p>
                          <p className={styles.textParagraph}>Programs offered by <span className={styles.bold}>debt relief companies</span> on the other hand, allow you to resolve your unsecured debts for less than what you owe. You will save much more money and get out of debt much quicker. However, these options are not best suited to every consumer. Since, the savings from principal and interest does require some give and take on your end (you must close credit card accounts, your credit score may dip, etc.).</p>
                      </div>
                      <Image className={styles.lifesaverImage} src={'/static/img/debtConsolidation/lifesaver.svg'} alt={'Lifesaver'} width={285} height={285}/>
                  </div>
              </div>
          </div>
          <div className={styles.section3}>
              <div className={classNames(styles.content, styles.section3Content)}>
                  <Image className={styles.saverImage} src={'static/img/group-12@2x.svg'} alt={'Life saver'} width={285} height={459}/>
                  <div className={styles.textContent}>
                      <div className={classNames(styles.title, styles.titleSection3)}>Qualifying for a Debt Consolidation Loan</div>
                      <div className={styles.texts}>
                          <div className={styles.text}>
                              <p className={styles.textParagraph}>The first option you should try to qualify for is an unsecured debt consolidation loan. If that doesn't pan out, you might have to secure the loan in order to get approved.</p>
                              <p className={styles.textParagraph}>However, unsecured debt consolidation loans are not easy to qualify for, by any standards. These loans are based solely on your "promise" of repayment.
                                  Medical debt, personal loans, credit cards, and revolving lines of credits are all examples of unsecured loans. Because unsecured loans are not backed by collateral and carry more risk for any given lender, they usually have a higher interest rate.</p>
                              <p className={styles.textParagraph}>Depending on the amount of debt you're currently carrying, you may not be able to qualify for one at all.
                                  As the old adage goes, "your credit worthiness is your ability to demonstrate to banks that you don't need credit". Unfortunately consumers that do not have a lot of debt are the ones that find qualifying for these options much easier.</p>
                              <p className={styles.textParagraph}>In order to qualify, lenders will scrutinize your payment history, debt to income ratio and credit score. Often times, this means you need exceptional credit.
                                  If your credit score and DTI aren't up to par, your last resort in qualifying for a consolidation loan may be to put up collateral against the loan and go the route of collateralizing.</p>
                          </div>
                          <div className={styles.text}>
                              <p className={styles.textParagraph}>In this scenario, you will have to pledge assets or property as means of guaranteeing banks repayment of the loan. If you were to ever default on the loan, the bank that issued the loan has some "security or "collateral" which they can legally take ownership of, if you fail to make timely payments.
                                  Lenders aren't dumb, if they perceive an outsized risk associated with lending to you, they will make sure the terms are more favorable for them or not lend to you at all.</p>
                              <p className={styles.textParagraph}>So if you were to ever default on the collateralized loan, the bank that issued the loan has some "security" or "collateral" which they can legally take ownership of. In a way, it is a safeguard, so that if worst came to worst, the bank or lender would not be completely out of the money they lent to you.</p>
                              <p className={styles.textParagraph}>For example, when you obtain a mortgage, your house is the security or collateral backing your repayment. If you were to default, the mortgage holder could foreclose on your house to satisfy the terms of the loan. However, since you live in the home, this is viewed as unlikely and less risky (from the lender's perspective at least). So banks and lenders tend to view home mortgages as less risky.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className={styles.section4}>
              <div className={classNames(styles.content, styles.section4Content)}>
                  <div className={classNames(styles.textContent, styles.textContentSection4)}>
                      <div className={classNames(styles.title)}>Pros of Debt Consolidation</div>
                      <div className={classNames(styles.textLongSection4)}>
                          <p className={styles.textParagraph}>This first one should be somewhat obvious:</p>
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
                  <Image className={styles.castleImage} src={'/static/img/debtConsolidation/castle.svg'} alt={'Sand castle'} width={660} height={940}/>
                  <Image className={styles.castleImageMobile} src={'/static/img/debtConsolidation/castleMobile.svg'} alt={'Sand castle'} width={313} height={322}/>
              </div>
          </div>
          <div className={styles.section5}>
              <div className={classNames(styles.content, styles.section5Content)}>
                  <Image className={styles.castle2Image} src={'/static/img/debtConsolidation/castle2.svg'} alt={'Sand castle'} width={594} height={963}/>
                  <Image className={styles.castle2ImageMobile} src={'/static/img/debtConsolidation/castle2Mobile.svg'} alt={'Sand castle'} width={317} height={323}/>
                  <div className={classNames(styles.textContent, styles.textContentSection5)}>
                      <div className={classNames(styles.title)}>Cons of Debt Consolidation</div>
                      <div className={styles.list}>
                          {
                              LIST_2.map((item, i) => (
                                  <div className={styles.listItem} key={i}>
                                      <ListItem index={i + 1} texts={item.texts}/>
                                  </div>
                              ))
                          }
                      </div>
                  </div>
              </div>
          </div>
          <div className={styles.section6}>
              <div className={classNames(styles.content, styles.section6Content)}>
                  <div className={classNames(styles.textContent, styles.textContentSection6)}>
                      <div className={classNames(styles.title)}>Cons of Debt Consolidation</div>
                      <div className={classNames(styles.textLongSection6)}>
                          <p className={styles.textParagraph}>An unsecured debt consolidation loan may be hard to get unless you have exceptional credit worthiness. Most people who actually need debt consolidation loans typically do not qualify for them (which is really unfortunate and says a lot about the current state of the US credit & banking system). Interest rates from these types of loans are also generally much higher than collateralized loans. More often than not, the resulting monthly payment is not low enough to make a significant difference to your financial situation. For this reason, it may be prudent to consider other options to alleviate your debt burdens.</p>
                          <p className={styles.textParagraph}>Using no interest credit card balance transfer options or other promotional credit card offers can also be a slippery slope. In essence, you are robbing Peter to pay Paul and just delaying the inevitable. Additionally, in most cases there is a substantial balance transfer fee which will negate most of your savings and is essentially just an upfront interest payment. Also, the no-interest period is generally limited and sometimes under a time constraint. So, if you can't pay the debt off during the promotional time period, you may actually end up paying severely high interest rates once the promotional period expires.</p>
                          <p className={styles.textParagraph}>Bottom Line: Consolidation loans can be a pipe dream for many consumers. That pie in the sky we continually strive for, but only qualify for, when we don't actually need them. The ultimate catch-22 of personal finance.</p>
                      </div>
                  </div>
                  <Image className={styles.cocktail2Image} src={'/static/img/group-7@2x.svg'} alt={'Sand castle'} width={183} height={245}/>
              </div>
          </div>
          <Image className={styles.frame129} onClick={() => router.push('tel:+1-888-344-0214')} src={"/static/img/frame-129-2@2x.svg"} alt="Frame 129" width={112} height={112}/>
        <Footer />
      </div>
    </div>
  );
}

export default DebtConsolidation;
