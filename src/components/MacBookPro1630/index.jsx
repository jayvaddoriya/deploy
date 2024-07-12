import React from "react";
import Frame62 from "../Frame62";
import Frame58 from "../Frame58";
import Frame59 from "../Frame59";
import Frame622 from "../Frame622";
import Frame452 from "../Frame452";
import Group5 from "../Group5";
import styled from "styled-components";
import {
  ManropeExtraBoldWhite16px,
  ManropeBoldNewCar20px,
  ManropeExtraBoldMidnight48px,
  ManropeExtraBoldMidnight32px,
  ManropeBoldMidnight20px,
} from "../../styledMixins";
// import "./MacBookPro1630.css";

function MacBookPro1630(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    lifesaver,
    tablerMenu2,
    frame62Props,
    frame58Props,
    frame622Props,
    frame4521Props,
    frame4522Props,
    frame4523Props,
    group5Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <MacBookPro1530Screen className="macbook-pro-16-30 screen">
        <Rectangle1></Rectangle1>
        <OverlapGroup1>
          <FormPcOLD>
            <FlexCol>
              <Title>
                <span className="manrope-extra-bold-midnight-48px">{spanText1}</span>
                <span className="manrope-extra-bold-new-car-48px">{spanText2}</span>
                <span className="manrope-extra-bold-midnight-48px">{spanText3}</span>
              </Title>
              <Frame65>
                <Frame57>
                  <Frame62 className={frame62Props.className} />
                  <Place>
                    <span className="manrope-bold-new-car-20px">{spanText4}</span>
                  </Place>
                </Frame57>
                <Frame58 frame622Props={frame58Props.frame622Props} />
                <Frame59 />
                <Frame57>
                  <Frame622>{frame622Props.children}</Frame622>
                  <Review>
                    <span className="manrope-bold-midnight-20px">{spanText5}</span>
                  </Review>
                </Frame57>
              </Frame65>
            </FlexCol>
            <Frame68>
              <Frame67>
                <TellUsAboutYourself>
                  <span className="manrope-extra-bold-midnight-32px">{spanText6}</span>
                </TellUsAboutYourself>
                <Frame66>
                  <Frame452>{frame4521Props.children}</Frame452>
                  <Frame452 className={frame4522Props.className}>{frame4522Props.children}</Frame452>
                  <Frame452 className={frame4523Props.className}>{frame4523Props.children}</Frame452>
                </Frame66>
              </Frame67>
              <Frame55>
                <GetStarted>
                  <span className="manrope-extra-bold-white-16px">{spanText7}</span>
                </GetStarted>
              </Frame55>
            </Frame68>
          </FormPcOLD>
          <Lifesaver src={lifesaver} alt="lifesaver" />
          <Group9>
            <IconClose src={tablerMenu2} alt="icon-close" />
          </Group9>
        </OverlapGroup1>
        <Group5 className={group5Props.className} />
      </MacBookPro1530Screen>
    </div>
  );
}

const MacBookPro1530Screen = styled.div`
  align-items: flex-start;
  background-color: var(--coconut);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 1117px;
  overflow: hidden;
  position: relative;
  width: 1728px;
`;

const Rectangle1 = styled.div`
  width: 1728px;
  height: 102px;
  margin-top: -1346px;
  margin-left: -1045px;
  background-color: var(--coconut);
`;

const OverlapGroup1 = styled.div`
  width: 1728px;
  height: 822px;
  position: relative;
  margin-top: 1444px;
`;

const FormPcOLD = styled.div`
  position: absolute;
  width: 1728px;
  height: 794px;
  top: 28px;
  left: 0;
  display: flex;
  padding: 178px 232px;
  align-items: flex-start;
  gap: 31px;
  background-color: var(--coconut);
`;

const FlexCol = styled.div`
  width: 724px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 194px;
  gap: 25px;
`;

const Title = styled.h1`
  ${ManropeExtraBoldMidnight48px}
  min-height: 66px;
  margin-right: 28px;
  min-width: 480px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame65 = styled.div`
  height: 103px;
  position: relative;
  display: flex;
  padding: 0 78px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 724px;
  gap: 19px;
`;

const Frame57 = styled.div`
  width: 126px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 103px;
  gap: 15px;
`;

const Place = styled.div`
  ${ManropeBoldNewCar20px}
  min-height: 27px;
  min-width: 80px;
  letter-spacing: 0;
  line-height: normal;
`;

const Review = styled.div`
  ${ManropeBoldMidnight20px}
  min-height: 27px;
  min-width: 70px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame68 = styled.div`
  width: 402px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 404px;
  gap: 40px;
`;

const Frame67 = styled.div`
  width: 400px;
  margin-left: 1px;
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
  width: 400px;
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
  padding: 18px 179.5px;
  align-items: flex-start;
  min-width: 402px;
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

const Lifesaver = styled.img`
  position: absolute;
  width: 272px;
  height: 272px;
  top: 20px;
  left: 144px;
`;

const Group9 = styled.div`
  position: absolute;
  height: 60px;
  top: 0;
  left: 1436px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  min-width: 60px;
  background-color: var(--mystic);
  border-radius: 30px;
`;

const IconClose = styled.img`
  width: 40px;
  height: 40px;
`;

export default MacBookPro1630;
