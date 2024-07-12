import React from "react";
import MacBookPro164 from "../Header";
import Frame62 from "../Frame62";
import Frame58 from "../Frame58";
import Frame59 from "../Frame59";
import Frame622 from "../Frame622";
import Frame45 from "../Frame45";
import Frame30 from "../Frame30";
import Frame302 from "../Frame302";
import Frame303 from "../Frame303";
import Frame304 from "../Frame304";
import Group5 from "../Group5";
import styled from "styled-components";
import {
  ManropeExtraBoldWhite16px,
  ManropeBoldNewCar20px,
  ManropeSemiBoldWhite15px,
  ManropeExtraBoldMidnight48px,
  ManropeExtraBoldMidnight32px,
  ManropeExtraBoldWhite15px,
  ManropeBoldMidnight20px,
} from "../../styledMixins";
// import "./MacBookPro1613.css";

function MacBookPro1613(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    logoDebtRelief1,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    frame58Props,
    frame622Props,
    frame451Props,
    frame452Props,
    frame453Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <MacBookPro1613Screen className="screen">
        <Rectangle1></Rectangle1>
        <MacBookPro164 />
        <FormPc>
          <FlexCol>
            <Title>
              <span className="manrope-extra-bold-midnight-48px">{spanText1}</span>
              <span className="manrope-extra-bold-new-car-48px">{spanText2}</span>
              <span className="manrope-extra-bold-midnight-48px">{spanText3}</span>
            </Title>
            <OverlapGroup1>
              <Ellipse9></Ellipse9>
              <Vector src="/static/img/vector-1@2x.png" alt="Vector" />
            </OverlapGroup1>
          </FlexCol>
          <Frame97>
            <Frame65>
              <Frame57>
                <Frame62 />
                <Place>
                  <span className="manrope-bold-new-car-20px">{spanText4}</span>
                </Place>
              </Frame57>
              <Frame58 frame622Props={frame58Props.frame622Props} />
              <Frame59 />
              <Frame60>
                <Frame622 className={frame622Props.className}>{frame622Props.children}</Frame622>
                <Review>
                  <span className="manrope-bold-midnight-20px">{spanText5}</span>
                </Review>
              </Frame60>
            </Frame65>
            <Frame68>
              <Frame67>
                <TellUsAboutYourself>
                  <span className="manrope-extra-bold-midnight-32px">{spanText6}</span>
                </TellUsAboutYourself>
                <Frame66>
                  <Frame45>{frame451Props.children}</Frame45>
                  <Frame45 className={frame452Props.className}>{frame452Props.children}</Frame45>
                  <Frame45 className={frame453Props.className}>{frame453Props.children}</Frame45>
                </Frame66>
              </Frame67>
              <Frame55>
                <GetStarted>
                  <span className="manrope-extra-bold-white-16px">{spanText7}</span>
                </GetStarted>
              </Frame55>
            </Frame68>
          </Frame97>
        </FormPc>
        <Footer>
          <OverlapGroup2>
            <FlexRow>
              <LogoDebtRelief1 src={logoDebtRelief1} alt="logo debt relief 1" />
              <Frame34>
                <OurWebsite>
                  <span className="manrope-extra-bold-white-15px">{spanText8}</span>
                </OurWebsite>
                <Frame30 />
              </Frame34>
              <Frame31>
                <OurWebsite>
                  <span className="manrope-extra-bold-white-15px">{spanText9}</span>
                </OurWebsite>
                <Frame302 />
              </Frame31>
              <Frame31>
                <OurWebsite>
                  <span className="manrope-extra-bold-white-15px">{spanText10}</span>
                </OurWebsite>
                <Frame303 />
              </Frame31>
              <Frame31>
                <OurWebsite>
                  <span className="manrope-extra-bold-white-15px">{spanText11}</span>
                </OurWebsite>
                <Frame304 />
              </Frame31>
            </FlexRow>
            <Divider></Divider>
            <X2019AlyeskaResor>
              <span className="manrope-semi-bold-white-15px">{spanText12}</span>
            </X2019AlyeskaResor>
          </OverlapGroup2>
        </Footer>
        <Group5 />
      </MacBookPro1613Screen>
    </div>
  );
}

const MacBookPro1613Screen = styled.div`
  align-items: flex-start;
  background-color: var(--coconut);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 1749px;
  overflow: hidden;
  position: relative;
  width: 1728px;
`;

const Rectangle1 = styled.div`
  width: 1728px;
  height: 102px;
  z-index: 1;
  margin-top: -1346px;
  margin-left: -1045px;
  background-color: var(--coconut);
`;

const FormPc = styled.div`
  width: 1728px;
  height: 1021px;
  z-index: 3;
  margin-top: 1340px;
  display: flex;
  align-items: center;
  gap: 60px;
  background-color: var(--sauvignon);
  overflow: hidden;
`;

const FlexCol = styled.div`
  width: 1053px;
  margin-left: -233px;
  align-self: flex-end;
  margin-bottom: -84px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 885px;
  gap: 34px;
`;

const Title = styled.h1`
  ${ManropeExtraBoldMidnight48px}
  min-height: 66px;
  align-self: flex-end;
  min-width: 480px;
  letter-spacing: 0;
  line-height: normal;
`;

const OverlapGroup1 = styled.div`
  width: 839px;
  height: 785px;
  position: relative;
`;

const Ellipse9 = styled.div`
  position: absolute;
  width: 561px;
  height: 561px;
  top: 224px;
  left: 0;
  background-color: #ff5b0dbf;
  border-radius: 280.5px;
`;

const Vector = styled.img`
  position: absolute;
  width: 518px;
  height: 717px;
  top: 0;
  left: 321px;
`;

const Frame97 = styled.div`
  width: 510px;
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 547px;
  gap: 40px;
`;

const Frame65 = styled.div`
  height: 103px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 510px;
  gap: 19px;
`;

const Frame57 = styled.div`
  width: 103px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 103px;
  gap: 15px;
`;

const Place = styled.div`
  ${ManropeBoldNewCar20px}
  min-height: 27px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame60 = styled.div`
  width: 98px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 103px;
  gap: 15px;
`;

const Review = styled.div`
  ${ManropeBoldMidnight20px}
  min-height: 27px;
  min-width: 70px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame68 = styled.div`
  width: 508px;
  margin-left: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 404px;
  gap: 40px;
`;

const Frame67 = styled.div`
  width: 508px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 304px;
  gap: 33px;
`;

const TellUsAboutYourself = styled.div`
  ${ManropeExtraBoldMidnight32px}
  margin-top: -1px;
  min-height: 44px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame66 = styled.div`
  width: 508px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 228px;
  gap: 24px;
`;

const Frame55 = styled.div`
  height: 60px;
  display: flex;
  padding: 18px 232.5px;
  align-items: flex-start;
  min-width: 508px;
  background-color: var(--international-orange);
  border-radius: 8px;
  box-shadow: 0px 20px 30px #f9874d99;
`;

const GetStarted = styled.div`
  ${ManropeExtraBoldWhite16px}
  min-height: 22px;
  letter-spacing: 0;
  line-height: normal;
`;

const Footer = styled.footer`
  width: 1728px;
  height: 632px;
  z-index: 4;
  flex-shrink: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: var(--white);
  mix-blend-mode: normal;
`;

const OverlapGroup2 = styled.div`
  width: 1728px;
  display: flex;
  flex-direction: column;
  padding: 111px 219px;
  align-items: flex-start;
  min-height: 632px;
  background-color: var(--tundora);
`;

const FlexRow = styled.div`
  height: 241px;
  margin-left: 13px;
  display: flex;
  align-items: center;
  min-width: 1215px;
`;

const LogoDebtRelief1 = styled.img`
  width: 152px;
  height: 91px;
  align-self: flex-start;
  object-fit: cover;
`;

const Frame34 = styled.div`
  width: 135px;
  position: relative;
  align-self: flex-end;
  margin-left: 280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 216px;
  gap: 33px;
`;

const OurWebsite = styled.div`
  ${ManropeExtraBoldWhite15px}
  width: 135px;
  margin-top: -1px;
  min-height: 20px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame31 = styled.div`
  width: 135px;
  position: relative;
  margin-left: 81px;
  margin-bottom: 47px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 144px;
  gap: 33px;
`;

const Divider = styled.div`
  width: 1289px;
  height: 2px;
  align-self: flex-end;
  margin-top: 101px;
  background-color: var(--white);
  opacity: 0.15;
`;

const X2019AlyeskaResor = styled.p`
  ${ManropeSemiBoldWhite15px}
  min-height: 20px;
  align-self: center;
  margin-top: 34px;
  margin-right: 1px;
  min-width: 493px;
  opacity: 0.75;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default MacBookPro1613;
