import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./TheDebtReliefProgram.module.css";
import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";

function TheDebtReliefProgram(props) {
  const {
    group1,
    spanText1,
    spanText2,
    spanText3,
    frame129,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    vector5,
    group11,
    group2,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    group3,
    spanText13,
    spanText14,
    spanText15,
    macBookPro164Props,
    iconoPc1Props,
    iconoPc2Props,
    iconoPc3Props,
    frame38Props,
    footerProps,
  } = props;
  const router = useRouter();

  return (
    <div className="container-center-horizontal">
      <div className={classNames("the-debt-relief-program screen", styles.root)}>
        <div className={styles.rectangle1}></div>
        <div className={styles.frame98}>
          <Image className={styles.group1Image} src={group1} alt="Tropical lifeguard tower with lifesaver and straw roof." width={400} height={644}/>
          <div className={styles.flexCol}>
            <div className={styles.frame138}>
              <h1 className={styles.title}>
                <span>{spanText1}</span>
              </h1>
              <p className={styles.getOutFromDebtForGood}>
                <span>{spanText2}</span>
              </p>
            </div>
            <p className={styles.simplifyYourFinanc}>
              <span>{spanText3}</span>
            </p>
          </div>
        </div>
        <Header className={macBookPro164Props.className} />
        <div className={styles.frame142}>

          <div className={styles.frameContainerMobile}>
            <Image className={styles.group1} src={group2} alt="Beach crab." width={184} height={178}/>
            <div className={classNames(styles.frame40, styles.mobileDot)}>
              <div className={styles.frame141}>
                <div className={styles.iconoPc1}>
                  <div className={styles.number}>
                    <span>{spanText4}</span>
                  </div>
                </div>
                <div className={styles.freeConsultation}>
                  <span>{spanText5}</span>
                </div>
              </div>
              <p className={styles.weProvideAFreeAn}>
                <span>{spanText6}</span>
              </p>
            </div>
            <div className={classNames(styles.frame1412, styles.mobileDot)}>
              <div className={styles.frame1413}>
                <div className={styles.iconoPc1}>
                  <div className={styles.number}>
                    <span>{iconoPc2Props.children}</span>
                  </div>
                </div>
                <div className={styles.enrollingInTheProgram}>
                  <span>{spanText9}</span>
                </div>
              </div>
              <p className={styles.onceYouAreApproved}>
                <span>{spanText10}</span>
              </p>
            </div>
            <div className={classNames(styles.frame1421, styles.mobileDot)}>
              <div className={styles.frame1411}>
                <div className={styles.iconoPc1}>
                  <div className={styles.number}>
                    <span>{iconoPc1Props.children}</span>
                  </div>
                </div>
                <div className={styles.eliminatingHighInterestDebt}>
                  <span>{spanText7}</span>
                </div>
              </div>
              <p className={styles.weContractYourCred}>
                <span>{spanText8}</span>
              </p>
            </div>
            <div className={classNames(styles.frame143, styles.mobileDot)}>
              <div className={styles.frame1414}>
                <div className={styles.iconoPc1}>
                  <div className={styles.number}>
                    <span>{iconoPc3Props.children}</span>
                  </div>
                </div>
                <div className={styles.financialFreedom}>
                  <span>{spanText11}</span>
                </div>
              </div>
              <p className={styles.onceYouBecomeDebt}>
                <span>{spanText12}</span>
              </p>
            </div>
          </div>

          <div className={styles.frameContainer}>
            <div className={styles.frame40}>
              <div className={styles.frame141}>
                <div className={styles.iconoPc1}>
                  <div className={styles.number}>
                    <span>{spanText4}</span>
                  </div>
                </div>
                <div className={styles.freeConsultation}>
                  <span>{spanText5}</span>
                </div>
              </div>
              <p className={styles.weProvideAFreeAn}>
                <span>{spanText6}</span>
              </p>
            </div>
            <div className={styles.frame1421}>
              <div className={styles.frame1411}>
                <div className={styles.iconoPc1}>
                  <div className={styles.number}>
                    <span>{iconoPc1Props.children}</span>
                  </div>
                </div>
                <div className={styles.eliminatingHighInterestDebt}>
                  <span>{spanText7}</span>
                </div>
              </div>
              <p className={styles.weContractYourCred}>
                <span>{spanText8}</span>
              </p>
            </div>
          </div>
          <div className={styles.overlapGroup1}>
            <Image className={styles.vector5} src={vector5} alt="Vector 5" width={1} height={696}/>
            <Image className={styles.group11} src={group11} alt="Group 11" width={16} height={376}/>
          </div>
          <div className={styles.flexCol1}>
            <Image className={styles.group1} src={group2} alt="Beach crab." width={184} height={178}/>
            <div className={styles.frame1412}>
              <div className={styles.frame1413}>
                <div className={styles.iconoPc1}>
                  <div className={styles.number}>
                    <span>{iconoPc2Props.children}</span>
                  </div>
                </div>
                <div className={styles.enrollingInTheProgram}>
                  <span>{spanText9}</span>
                </div>
              </div>
              <p className={styles.onceYouAreApproved}>
                <span>{spanText10}</span>
              </p>
            </div>
            <div className={styles.frame143}>
              <div className={styles.frame1414}>
                <div className={styles.iconoPc1}>
                  <div className={styles.number}>
                    <span>{iconoPc3Props.children}</span>
                  </div>
                </div>
                <div className={styles.financialFreedom}>
                  <span>{spanText11}</span>
                </div>
              </div>
              <p className={styles.onceYouBecomeDebt}>
                <span>{spanText12}</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.frame100}>
          <div className={styles.differentContainer}>
            <div className={styles.flexRow}>
              <Image className={styles.group3} src={group3} alt="Orange ice cream cone." width={172} height={330}/>
              <div className={styles.frame401}>
                <div className={styles.whatMakesUsDifferent}>
                  <span>{spanText13}</span>
                </div>
                <p className={styles.onceYouBecomeDebt}>
                  <span >{spanText14}</span>
                </p>
              </div>
            </div>
            <div className={styles.frame402}>
              <div className={styles.whatMakesUsDifferent}>
                <span>{spanText15}</span>
              </div>
              <div className={classNames('frame-38', frame38Props.className, styles.frame381)}>
                <div className={styles.greatCustomerServi}>
                  <span>{frame38Props.children}</span>
                </div>
              </div>
            </div>
            <div>
              <button className={classNames('grow', 'frame-28-3', styles.frame281)} onClick={() => router.push('/book-online')}>
                <div className={styles.getStarted}>
                  <span>Get Started</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <Image className={styles.frame129} onClick={() => router.push('tel:+1-888-344-0214')} src={"/static/img/frame-129-2@2x.svg"} alt="Frame 129" width={112} height={112}/>
        <Footer />
      </div>
    </div>
  );
}

export default TheDebtReliefProgram;
