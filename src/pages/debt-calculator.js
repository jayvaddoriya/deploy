import { useState, useRef, useCallback } from 'react';
import { Container } from '@/components/Container';
import Head from 'next/head';
import Image from 'next/image';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CircularSlider from '@/components/Slider';
import Selector from '@/components/HomePc/Selector';
import styled from 'styled-components';
import { ManropeSemiBoldMidnight32px, ManropeBoldMidnight24px, ManropeExtraBoldAstronaut28px, ManropeExtraBoldAstronaut48px, ManropeExtraBoldWhite16px, ManropeBoldMidnight20px, ManropeSemiBoldMidnight20px, ManropeNormalChicago16px, ManropeBoldMidnight40px } from '@/styledMixins';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@/utils/mediaQueryHook';
import Slider from '@/components/HomePc/Slider';
import generatePageSEO from '@/utils/generatePageSEO';

const timePeriods = [
  { id: 24, name: '24 Months' },
  { id: 36, name: '36 Months' },
  { id: 42, name: '42 Months' },
];

export default function DebtCalculatorPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [modalAnimateSectionId, setModalAnimateSectionId] = useState(null);
  const [sliderValue, setSliderValue] = useState(10000);
  const [monthlyPayment, setMonthlyPayment] = useState(177.42);
  const [newPayoff, setNewPayoff] = useState(7451.50);
  const [totalSavings, setTotalSavings] = useState(2548.50);
  const [payoffMonths, setPayoffMonths] = useState(42);

  const isMobile = useMediaQuery(900);

  const router = useRouter();

  const handleSliderChange = (value, months) => {
    setSliderValue(value);
    setPayoffMonths(months);

    setMonthlyPayment(parseFloat((((value) * 0.7) / months + 10.75).toFixed(2)));
    setNewPayoff(parseFloat(((((value) * 0.7) / months + 10.75) * months)).toFixed(2));
    setTotalSavings(parseFloat((value - ((((value) * 0.7) / months + 10.75) * months))).toFixed(2));
  };

  if (isMobile) return (
    <div className="container-center-horizontal">
      <Head>
        <title>Debt Relief Calculator</title>
        {generatePageSEO(
              'debt-calculator',
              'Debt Relief Calculator',
              `Curious about how much you’ll be saving from high interest credit card debt? 
              Our DRC Program payment calculator has you covered. Calculate your monthly savings here.`,
              'tool'
        )}
      </Head>
      <HomeMobileScreen className="screen">
      <Header />
      <>
    <FlexRow>
      <Group2 src="/static/img/group-10@2x.svg" alt="Group" />
      <TheDRCProgramDebtCalculator>
        {/* <span className="manrope-extra-bold-astronaut-28px">The DRC Program Debt Calculator</span> */}
        <h1 className="manrope-extra-bold-astronaut-28px">Debt Relief Calculator</h1>
      </TheDRCProgramDebtCalculator>
      <Frame129 onClick={() => router.push('tel:+1-888-344-0214')} src={"/static/img/frame-129-2@2x.svg"} alt="Frame 129" />
    </FlexRow>
    <Frame118>
        <FlexCol>
          <HowMuchTotalUnsec>
            <span className="manrope-bold-midnight-20px">How much total unsecured debt do you have?</span>
          </HowMuchTotalUnsec>
          <Slider payoffMonths={payoffMonths} value={sliderValue} onChange={handleSliderChange} />
          <PayoffOption>
            <span className="manrope-bold-midnight-20px">Payoff option</span>
          </PayoffOption>
          <PayoffMonths>
            <Selector handleSliderChange={handleSliderChange} sliderValue={sliderValue} setPayoffMonths={setPayoffMonths} />
          </PayoffMonths>
          <DebtCalculatorPayments>
            <DebtCalculator>
              <MonthlyPayment>
                <span className="manrope-normal-chicago-16px">Monthly Payment</span>
              </MonthlyPayment>
              <Frame116>
                <Price1>
                  <span className="manrope-bold-midnight-24px">$</span>
                </Price1>
                <Text4>
                  <span className="manrope-bold-midnight-24px">{monthlyPayment.toLocaleString("en-US")}</span>
                </Text4>
              </Frame116>
            </DebtCalculator>
            <DebtCalculator>
              <MonthlyPayment>
                <span className="manrope-normal-chicago-16px">New Payoff Amount</span>
              </MonthlyPayment>
              <Frame1161>
                <Price1>
                  <span className="manrope-bold-midnight-24px">$</span>
                </Price1>
                <Text4>
                  <span className="manrope-bold-midnight-24px">{newPayoff.toLocaleString("en-US")}</span>
                </Text4>
              </Frame1161>
            </DebtCalculator>
            <DebtCalculator>
              <MonthlyPayment>
                <span className="manrope-normal-chicago-16px">Total Savings</span>
              </MonthlyPayment>
              <Frame1162>
                <Price1>
                  <span className="manrope-bold-midnight-24px">$</span>
                </Price1>
                <Text4>
                  <span className="manrope-bold-midnight-24px">{totalSavings.toLocaleString("en-US")}</span>
                </Text4>
              </Frame1162>
            </DebtCalculator>
          </DebtCalculatorPayments>
        </FlexCol>
      </Frame118>
      </>
      </HomeMobileScreen>
      <Footer />

    </div>
  )
  return (
    <>
      <Head>
        <title>Debt Relief Calculator</title>
        {generatePageSEO(
              'debt-calculator',
              'Debt Relief Calculator',
              `Curious about how much you’ll be saving from high interest credit card debt? 
              Our DRC Program payment calculator has you covered. Calculate your monthly savings here.`,
              'tool'
        )}
      </Head>
      <main>
      <Header />
      <Frame98>
        <FlexRow2>
          <Group2 src="/static/img/group-7@2x.svg" alt="Group" />
          <TheDRCProgramDebtCalculator>
            {/* <span className="manrope-extra-bold-astronaut-48px">The DRC Program Debt Calculator</span> */}
            <h1 className="manrope-extra-bold-astronaut-48px">Debt Relief Calculator</h1>
          </TheDRCProgramDebtCalculator>
        </FlexRow2>
        <OverlapGroup2>
          <Frame117>
            <HowMuchTotalUnsec>
              <span className="manrope-bold-midnight-20px">How much total unsecured debt do you have?</span>
            </HowMuchTotalUnsec>
            <FlexRow3>
            <CircularSlider payoffMonths={payoffMonths} value={sliderValue} onChange={handleSliderChange} />
              <PayoffContainer>
                <PayoffOption>
                  <span className="manrope-bold-midnight-20px">Payoff option</span>
                </PayoffOption>
                <PayoffMonths>
                  <Frame119>
                    <Selector handleSliderChange={handleSliderChange} sliderValue={sliderValue} setPayoffMonths={setPayoffMonths}/>
                  </Frame119>
                </PayoffMonths>
              </PayoffContainer>
            </FlexRow3>
            <DebtCalculatorPayments>
              <DebtCalculator>
                <MonthlyPayment>
                  <span className="manrope-normal-chicago-16px">Monthly Payment</span>
                </MonthlyPayment>
                <Frame116>
                  <Price1>
                    <span className="manrope-bold-midnight-40px">$</span>
                  </Price1>
                  <Text1>
                    <span className="manrope-bold-midnight-40px">{monthlyPayment.toLocaleString("en-US")}</span>
                  </Text1>
                </Frame116>
              </DebtCalculator>
              <DebtCalculator>
                <MonthlyPayment>
                  <span className="manrope-normal-chicago-16px">New Payoff Amount</span>
                </MonthlyPayment>
                <Frame1161>
                  <Price1>
                    <span className="manrope-bold-midnight-40px">$</span>
                  </Price1>
                  <Text1>
                    <span className="manrope-bold-midnight-40px">{newPayoff.toLocaleString("en-US")}</span>
                  </Text1>
                </Frame1161>
              </DebtCalculator>
              <DebtCalculator>
                <MonthlyPayment>
                  <span className="manrope-normal-chicago-16px">Total Savings</span>
                </MonthlyPayment>
                <Frame1162>
                  <Price1>
                    <span className="manrope-bold-midnight-40px">$</span>
                  </Price1>
                  <Text1>
                    <span className="manrope-bold-midnight-40px">{totalSavings.toLocaleString("en-US")}</span>
                  </Text1>
                </Frame1162>
              </DebtCalculator>
            </DebtCalculatorPayments>
            <Frame281 className="grow" onClick={() => router.push('/book-online')}>
              <GetStarted>
                <span className="manrope-extra-bold-white-24px">Ask For Help</span>
              </GetStarted>
            </Frame281>
          </Frame117>
        </OverlapGroup2>
      </Frame98>
      </main>
      <Footer />
    </>
  )
  return (
    <>
      <Head>
        <title>Debt Calculator</title>
        <meta name="description" content="add meta description" />
      </Head>
      <main>
        <Header />
        <Frame98>
          <FlexRow>
            <Group2 src="/static/img/group-7@2x.svg" alt="Group" />
            <TheDRCProgramDebtCalculator>
              <span className="manrope-extra-bold-astronaut-48px">The DRC Program Debt Calculator</span>
            </TheDRCProgramDebtCalculator>
          </FlexRow>
          <Frame118>
            <FlexCol>
              <HowMuchTotalUnsec>
                <span className="manrope-bold-midnight-20px">How much total unsecured debt do you have?</span>
              </HowMuchTotalUnsec>
              <CircularSlider payoffMonths={payoffMonths} value={sliderValue} onChange={handleSliderChange} />
              <PayoffOption>
                <span className="manrope-bold-midnight-20px">Payoff option</span>
              </PayoffOption>
              <PayoffMonths>
                <Frame119>
                  <Selector handleSliderChange={handleSliderChange} sliderValue={sliderValue} setPayoffMonths={setPayoffMonths} />
                </Frame119>
              </PayoffMonths>
              <DebtCalculatorPayments>
                <DebtCalculator>
                  <MonthlyPayment>
                    <span className="manrope-normal-chicago-16px">Monthly Payment</span>
                  </MonthlyPayment>
                  <Frame116>
                    <Price1>
                      <span className="manrope-bold-midnight-40px">$</span>
                    </Price1>
                    <Text4>
                      <span className="manrope-bold-midnight-40px">{monthlyPayment.toLocaleString("en-US")}</span>
                    </Text4>
                  </Frame116>
                </DebtCalculator>
                <DebtCalculator>
                  <MonthlyPayment>
                    <span className="manrope-normal-chicago-16px">New Payoff Amount</span>
                  </MonthlyPayment>
                  <Frame1161>
                    <Price1>
                      <span className="manrope-bold-midnight-40px">$</span>
                    </Price1>
                    <Text4>
                      <span className="manrope-bold-midnight-40px">{newPayoff.toLocaleString("en-US")}</span>
                    </Text4>
                  </Frame1161>
                </DebtCalculator>
                <DebtCalculator>
                  <MonthlyPayment>
                    <span className="manrope-normal-chicago-16px">Total Savings</span>
                  </MonthlyPayment>
                  <Frame1162>
                    <Price1>
                      <span className="manrope-bold-midnight-40px">$</span>
                    </Price1>
                    <Text4>
                      <span className="manrope-bold-midnight-40px">{totalSavings.toLocaleString("en-US")}</span>
                    </Text4>
                  </Frame1162>
                </DebtCalculator>
              </DebtCalculatorPayments>
            </FlexCol>
            <PayoffOption1>
              <span className="manrope-bold-midnight-20px">Ask For Help</span>
            </PayoffOption1>
          </Frame118>
        </Frame98>
      </main>
      <Footer />
    </>
  )

}

const OverlapGroup2 = styled.div`
  width: 100%;
  height: 553px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-self: center; */
  /* margin-left: 108px; */
`;

const Frame117 = styled.div`
  position: absolute;
  width: 940px;
  /* height: 498px; */
  top: 13px;
  /* left: 0; */
  display: flex;
  flex-direction: column;
  /* padding: 59px 0; */
  align-items: center;
  gap: 56px;
  background-color: var(--white);
`;

const FlexRow3 = styled.div`
  height: 122px;
  display: flex;
  align-items: flex-start;
  min-width: 940px;
  gap: 252px;
`;

const OverlapGroupContainer = styled.div`
  width: 500px;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 118px;
  gap: 8px;
`;

const OverlapGroup = styled.div`
  height: 94px;
  margin-left: 8px;
  display: flex;
  padding: 15px 16px;
  align-items: flex-start;
  min-width: 157px;
  background-size: 100% 100%;
`;

const HomeMobileScreen = styled.div`
  align-items: center;
  background-color: var(--coconut);
  border: 1px none;
  /* display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox; */
  display: flex;
  /* -webkit-flex-direction: column;
  -ms-flex-direction: column; */
  flex-direction: column;
  height: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 0px 20px;
`;

const Price = styled.div`
  ${ManropeSemiBoldMidnight32px}
  min-height: 44px;
  letter-spacing: 0;
  line-height: normal;
`;

const OverlapGroup1 = styled.div`
  width: 500px;
  height: 16px;
  position: relative;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 492px;
  height: 1px;
  top: 8px;
  left: 8px;
`;

const Ellipse10 = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  background-color: var(--new-car);
  border-radius: 8px;
  box-shadow: 0px 4px 20px #1546c54c;
`;

const Vector3 = styled.img`
  position: absolute;
  width: 4px;
  height: 1px;
  top: 8px;
  left: 8px;
`;

const PayoffContainer = styled.div`
  width: 188px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 114px;
  gap: 17px;
`;

const PayoffOption = styled.div`
  ${ManropeBoldMidnight20px}
  min-height: 27px;
  margin-right: 27px;
  min-width: 129px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 20px;
`;

const PayoffMonths = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 188px;
  /* background-color: var(--mystic); */
  border-radius: 8px;
`;

const Frame119 = styled.div`
  height: 70px;
  display: flex;
  padding: 20px 24px;
  align-items: flex-start;
  min-width: 188px;
  gap: 24px;
  background-color: var(--coconut);
  border-radius: 8px;
`;

const Address = styled.div`
  ${ManropeSemiBoldMidnight20px}
  min-width: 92px;
  letter-spacing: 0.2px;
  line-height: 24px;
  white-space: nowrap;
`;

const TablerchevronRight = styled.img`
  width: 24px;
  height: 24px;
  align-self: center;
`;

const DebtCalculatorPayments = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 940px;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    min-width: 100%;
    gap: 20px;
    margin-top: 20px;
  }
`;

const DebtCalculator = styled.div`
  width: 292px;
  height: 151px;
  display: flex;
  flex-direction: column;
  padding: 31px 24px;
  align-items: flex-start;
  gap: 9px;
  background-color: var(--white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 20px 50px #1546c533;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 20px;
  }
`;

const MonthlyPayment = styled.div`
  ${ManropeNormalChicago16px}
  letter-spacing: 0.16px;
  line-height: 24px;
  white-space: nowrap;
`;

const Frame116 = styled.div`
  ${ManropeBoldMidnight40px}
  height: 55px;
  display: flex;
  align-items: flex-start;
  min-width: 155px;
  gap: 8px;

  @media (max-width: 768px) {
    ${ManropeBoldMidnight24px}
    height: 33px;
    min-width: 97px;
  }
`;

const Frame129 = styled.img`
  position: fixed;
  width: 100px;
  height: 100px;
  bottom: 14%;
  right: 5px;
  z-index: 13;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Price1 = styled.div`
  min-height: 55px;
  margin-top: -1px;
  min-width: 26px;
  letter-spacing: 0;
  line-height: normal;
`;

const Text1 = styled.div`
  min-height: 55px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1161 = styled.div`
  ${ManropeBoldMidnight40px}
  height: 55px;
  display: flex;
  align-items: flex-start;
  min-width: 193px;
  gap: 8px;

  @media (max-width: 768px) {
    ${ManropeBoldMidnight24px}
    height: 33px;
    min-width: 120px;
  }
`;

const Frame1162 = styled.div`
  ${ManropeBoldMidnight40px}
  height: 55px;
  display: flex;
  align-items: flex-start;
  min-width: 214px;
  gap: 8px;

  @media (max-width: 768px) {
    ${ManropeBoldMidnight24px}
    height: 33px;
    min-width: 132px;
  }
`;

const HowMuchTotalUnsec = styled.p`
  ${ManropeBoldMidnight20px}
  /* position: absolute; */
  /* width: 445px; */
  /* top: 0; */
  /* left: 108px; */
  /* margin-left: -490px; */
  margin-top: 20px;
  letter-spacing: 0;
  line-height: normal;
  width: 100%;
`;

const Frame281 = styled.button`
  border: none;
  min-height: 88px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: start;
  min-width: 229px;
  background-color: var(--international-orange);
  border-radius: 8px;
  box-shadow: 0px 20px 30px #f9874d99;

  @media (max-width: 768px) {
    min-height: 60px;
    min-width: 150px;
  }
`;


const GetStarted = styled.div`
  ${ManropeExtraBoldWhite16px}
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 33px;
  width: 100%;
  text-transform: uppercase;

  @media (max-width: 1100px) {
    font-size: 16px;
  }
`;


const FlexRow2 = styled.div`
  margin-left: -640px;
  display: flex;
  align-items: flex-end;
  min-width: 724px;
  gap: 33px;

  @media (max-width: 768px) {
    margin-left: 0;
    flex-direction: column;
    align-items: center;
    min-width: 100%;
    gap: 20px;
  }
`;

const Frame98 = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  padding: 100px 0;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background-color: var(--coconut);

  @media (max-width: 768px) {
    height: auto;
    padding: 50px 0;
  }
`;

const FlexRow = styled.div`
  margin-left: -640px;
  display: flex;
  align-items: flex-end;
  min-width: 724px;
  gap: 33px;

  @media (max-width: 768px) {
    margin-left: 0;
    /* flex-direction: column; */
    align-items: center;
    min-width: 100%;
    gap: 20px;
    margin-top: 130px;
  }
`;

const Group2 = styled.img`
  width: 183px;
  height: 245px;

  @media (max-width: 768px) {
    width: 96px;
    height: 140px;
  }
`;


const TheDRCProgramDebtCalculator = styled.p`
  ${ManropeExtraBoldAstronaut48px}
  width: 508px;
  min-height: 132px;
  margin-bottom: 22.37px;
  letter-spacing: 0;
  line-height: normal;

  @media (max-width: 768px) {
    ${ManropeExtraBoldAstronaut28px}
    width: 204px;
    min-height: 114px;
    margin-bottom: 0.48px;
  }
`;


const Frame118 = styled.div`
  ${ManropeBoldMidnight20px}
  width: 100%;
  height: 781px;
  z-index: 9;
  margin-top: 34px;
  margin-right: 8px;
  display: flex;
  align-items: flex-start;
  gap: 540px;
  background-color: var(--white);
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    margin-top: 0px;
  }
`;

const FlexCol = styled.div`
  width: 312px;
  margin-left: 24px;
  margin-top: -1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 702px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 0;
  }
`;


const Text4 = styled.div`
  min-height: 33px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

// const Frame1161 = styled.div`
//   ${ManropeBoldMidnight24px}
//   height: 33px;
//   display: flex;
//   align-items: flex-start;
//   min-width: 120px;
//   gap: 8px;
// `;

// const Frame1162 = styled.div`
//   ${ManropeBoldMidnight24px}
//   height: 33px;
//   display: flex;
//   align-items: flex-start;
//   min-width: 132px;
//   gap: 8px;
// `;

const PayoffOption1 = styled.div`
  min-height: 27px;
  margin-top: 65px;
  letter-spacing: 0;
  line-height: normal;
`;
