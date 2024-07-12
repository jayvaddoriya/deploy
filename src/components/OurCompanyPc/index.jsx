import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./OurCompanyPc.module.css";
import classNames from "classnames";
import Image from "next/image";
import {useRouter} from "next/router";

function OurCompanyPc(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    group8,
    spanText5,
    spanText6,
    image1,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    image2,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    img_35081,
    group1,
    spanText17,
    spanText18,
    spanText19,
    spanText20,
    spanText21,
    spanText22,
    group2,
    spanText23,
    spanText24,
    spanText25,
    macBookPro164Props,
  } = props;
  const router = useRouter();

  return (
    <div className="container-center-horizontal">
      <div className={classNames('our-company-pc screen', styles.root)}>
        <div className={styles.rectangle1}></div>
        <div className={styles.frame98}>
          <div className={styles.overlapGroup2}>
            <div className={styles.overlapGroup1}>
              <div className={styles.landingContentFlex}>
                <div className={styles.landingHeaderFlex}>
                  <h1 className={styles.title}>
                    <span>{spanText5}</span>
                  </h1>
                  <h2 className={styles.committedToExcellence}>
                    <span>{spanText4}</span>
                  </h2>
                </div>
                <div className={styles.landingParagraphFlex}>
                  <p className={styles.atTheDebtReliefC}>
                    <span>{spanText1}</span>
                    <span className={styles.span12}>{spanText2}</span>
                  </p>
                  <div>
                  <h3 className={styles.Personalized}>{spanText25}</h3>
                  <p className={styles.weTakeGreatPride}>
                    <span>{spanText3}</span>
                  </p>
                  </div>
                </div>
                <Image className={styles.group8} src={group8} alt="Two Surfboards sticking out of the water on the beach." width={722} height={589}/>
              </div>
            </div>
          </div>
        </div>
        <Header className={macBookPro164Props.className} />
        <div className={styles.frame981}>
          <div className={styles.theTeam}>
            <h2>{spanText6}</h2>
          </div>
          <div className={styles.frame96}>
            <div className={styles.flexWrap}>
              <Image className={styles.photo} src={image1} alt="Adem Selita" width={176} height={176} objectFit={'cover'}/>
              <div className={styles.frame94Mobile}>
                <div className={styles.adamSelita}>
                  <span>{spanText7}</span>
                </div>
                <div className={styles.ceo}>
                  <span>{spanText8}</span>
                </div>
              </div>
            </div>
            <div className={styles.frame92}>
              <div className={styles.frame94}>
                <div className={styles.adamSelita}>
                  <span>{spanText7}</span>
                </div>
                <div className={styles.ceo}>
                  <span>{spanText8}</span>
                </div>
              </div>
              <div className={styles.frame111}>
                <p className={styles.adamSelitaAkaAda}>
                  <span>{spanText9}</span>
                </p>
                <p className={styles.adamReceivedBach}>
                  <span>{spanText10}</span>
                </p>
                {/* <p className={styles.adamHelpedCloseFa}>
                  <span>{spanText11}</span>
                </p> */}
              </div>
            </div>
          </div>
          <div className={styles.frame95}>
            <div className={styles.flexWrap}>
              <Image className={styles.photo} src={image2} alt="Dino Selita" width={176} height={176} objectFit={'cover'}/>
              <div className={styles.frame93Mobile}>
                <div className={styles.adamSelita}>
                  <span>{spanText12}</span>
                </div>
                <div className={styles.ceo}>
                  <span>{spanText13}</span>
                </div>
              </div>
            </div>
            <div className={styles.frame91}>
              <div className={styles.frame93}>
                <div className={styles.adamSelita}>
                  <span>{spanText12}</span>
                </div>
                <div className={styles.ceo}>
                  <span>{spanText13}</span>
                </div>
              </div>
              <div className={styles.frame110}>
                <p className={styles.dinoSelitaIsANat}>
                  <span>{spanText14}</span>
                </p>
                <p className={styles.dinoGraduatedFrom}>
                  <span>{spanText15}</span>
                </p>
                <p className={styles.moreRecentlyDinoH}>
                  <span>{spanText16}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.overlapGroup4}>
          <Image src={img_35081} className={styles.img35083} alt="Group picture of the team at The Debt Relief Company." width={736} height={555}/>
          <div className={styles.frame128}>
            <Image className={styles.group1Duck} src={group1} alt="Inflatable duck"  width={200} height={131}/>
            <div className={styles.frame127}>
              <div className={styles.adamSelita}>
                <h2>{spanText17}</h2>
              </div>
              <p className={styles.loremIpsumDolorSi}>
                <span>{spanText18}</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.frame100}>
          <p className={styles.whyDidTheDebtReliefCoFrom}>
            <h2>{spanText19}</h2>
          </p>
          <div className={styles.frame101}>
            <p className={styles.theDebtReliefComp}>
              <span>{spanText20}</span> 
               &nbsp;<a className='text-blue-500' href="https://www.thedebtreliefcompany.com/press">in the press</a> to learn more about our contributions to financial literacy, consumer advocacy and adding to the well of knowledge for American consumers.
            </p>
            {/* <p className={styles.althoughTheRoadTo}>
              <span>{spanText21}</span>
            </p>
            <p className={styles.ourCompanyStrives}>
              <span>{spanText22}</span>
            </p> */}
          </div>
          <Image src={group2} className={styles.group1} alt="Tropical drink with umbrella and flower." width={230} height={292}/>
        </div>
        <div className={styles.overlapGroup3}>
          <div className={styles.frame104}>
            <Image className={styles.palm} src="/static/img/vector-2@2x.svg" alt="Hammock in between two palm trees." width={354} height={488}/>
            <div className={styles.frame102}>
              <div className={styles.theDrcMissionStatement}>
                <h2>{spanText23}</h2>
              </div>
              <p className={styles.firstAndForemost}>
                <span>{spanText24}</span>
                &nbsp; <a className='text-blue-500' href="https://www.thecreditcardmonster.com">The Credit Card Monster</a>, designed to educate and inform consumers about managing debt wisely.
              </p>
            </div>
          </div>
        </div>
        <Image className={styles.frame129} onClick={() => router.push('tel:+1-888-344-0214')} src={"/static/img/frame-129-2@2x.svg"} alt="Frame 129" width={112} height={112}/>
        <Footer />
      </div>
    </div>
  );
}

export default OurCompanyPc;
