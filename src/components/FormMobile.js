import React, { useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import MacBookPro1619 from "./MacBookPro1619";
import AndroidSmall6 from "./AndroidSmall6";
import Select from "react-select";
import { FORM_SUBMIT_URL } from "@/constants";
import { useRouter } from "next/router";
import {Container} from "@/components/Container";

function splitName(name) {
  const [first_name] = name.split(' ', 1);
  const last_name = name.substr(first_name.length + 1)
  return { first_name, last_name };
}

export function FormMobile() {
  const [currentStep, setCurrentStep] = useState(0);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [debtAmount, setDebtAmount] = useState("");
	const [time, setTime] = useState({ hour: '', minute: '' });

	const router = useRouter();

	function onSuccess() {
    router.push("book-success");
  }

	async function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      ...splitName(name),
      email: email,
      phone: phoneNumber,
      debt_amount: debtAmount,
      contact_time: time.hour+':'+time.minute,
    }
    console.log(payload, FORM_SUBMIT_URL);
    const response = await fetch(
      FORM_SUBMIT_URL,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        method: 'POST',
        mode: "cors"
      }
    );
    if (response.status !== 200) {
      alert('Something went wrong, please resubmit');
    }
    else onSuccess();
  }

	const hourOptions = Array.from({ length: 24 }, (_, i) => ({
		value: i,
		label: i < 10 ? `0${i}` : i.toString(),
	}));

	const minuteOptions = Array.from({ length: 60 }, (_, i) => ({
		value: i,
		label: i < 10 ? `0${i}` : i.toString(),
	}));

	const selectStyles = {
		control: (provided) => ({
			...provided,
			width: 100,
			height: 56,
			backgroundColor: "rgb(228, 233, 248)",
			borderRadius: 8,
			padding: "10px 24px",
			fontFamily: "Manrope, sans-serif",
			fontSize: 16,
			color: "rgb(11, 20, 47)",
			zIndex: '40',
		}),
		placeholder: (provided) => ({
			...provided,
			color: "rgb(11, 20, 47)",
		}),
	};

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };
	const handleNameChange = (e) => setName(e.target.value);
	const handleEmailChange = (e) => setEmail(e.target.value);
	const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
	const handleHourChange = (e) => setDate(e);
	const handleDebtAmountChange = (e) => setDebtAmount(e.target.value);

	const steps = {
		0: (<Property1Default>
      <GetOutOfDebtNow>
        {/* Get out of debt <span style={{ color: '#1546C5' }}>now</span>. */}
		Free Debt Consultation
      </GetOutOfDebtNow>
      <Frame65>
        <Frame57>
          <Frame62>
            <_1>
              1
            </_1>
          </Frame62>
          <Contact>
            Contact
          </Contact>
        </Frame57>
        <Frame57>
          <Frame62_0001>
            <_2>
              2
            </_2>
          </Frame62_0001>
          <DebtDetails>
            Debt Details
          </DebtDetails>
        </Frame57>
        <Frame57>
          <Frame62_0001>
            <_2>
              3
            </_2>
          </Frame62_0001>
          <ConsultTime>
            Consult time
          </ConsultTime>
        </Frame57>
        <Frame57>
          <Frame62_0001>
            <_2>
              4
            </_2>
          </Frame62_0001>
          <Review>
            Review
          </Review>
        </Frame57>
      </Frame65>
      <Frame67>
        <TellUsAboutYourself>
          Tell us about yourself
        </TellUsAboutYourself>
        <Frame66>
					<Frame45>
						<Input
							type="text"
							placeholder="What’s your name?"
							value={name}
							onChange={handleNameChange}
						/>
					</Frame45>
					<Frame45>
						<Input
							type="email"
							placeholder="Enter your e-mail"
							value={email}
							onChange={handleEmailChange}
						/>
					</Frame45>
					<Frame45>
						<Input
							type="tel"
							placeholder="What’s your phone number?"
							value={phoneNumber}
							onChange={handlePhoneNumberChange}
						/>
					</Frame45>
        </Frame66>
      </Frame67>
      <Frame55 className="grow" onClick={() => handleNextStep()}>
        <GetStarted>
          Next
        </GetStarted>
      </Frame55>
    </Property1Default>),
		1: (<Property1Variant2>
      <GetOutOfDebtNow>
	  Free Debt Consultation
      </GetOutOfDebtNow>
      <Frame65>
        <Frame57_0001>
          <Frame62_0001>
            <_1_0001>
              1
            </_1_0001>
          </Frame62_0001>
          <Contact_0001>
            Contact
          </Contact_0001>
        </Frame57_0001>
        <Frame58_0001>
          <Frame62>
            <_2_0001>
              2
            </_2_0001>
          </Frame62>
          <DebtDetails_0001>
            Debt Details
          </DebtDetails_0001>
        </Frame58_0001>
        <Frame59_0001>
          <Frame62_0001>
            <_3_0001>
              3
            </_3_0001>
          </Frame62_0001>
          <ConsultTime>
            Consult time
          </ConsultTime>
        </Frame59_0001>
        <Frame57>
          <Frame62_0001>
            <_2>
              4
            </_2>
          </Frame62_0001>
          <Review>
            Review
          </Review>
        </Frame57>
      </Frame65>
      <Frame67_0001>
        <TellUsAboutYourDebt>
          Tell us about your debt
        </TellUsAboutYourDebt>
        <Frame74>
				{/* <label className="inputLabel">
					<input
						type="radio"
						name="debtAmount"
						value="< 1.000"
						checked={debtAmount === "< 1.000"}
						onChange={handleDebtAmountChange}
					/>
					{" < 1.000"}
				</label>
				<label className="inputLabel">
					<input
						type="radio"
						name="debtAmount"
						value="1.000 - 10.000"
						checked={debtAmount === "1.000 - 10.000"}
						onChange={handleDebtAmountChange}
					/>
					{' '}1.000 - 10.000
				</label>
				<label className="inputLabel">
					<input
						type="radio"
						name="debtAmount"
						value="10.000 - 50.000"
						checked={debtAmount === "10.000 - 50.000"}
						onChange={handleDebtAmountChange}
					/>
					{' '}10.000 - 50.000
				</label>
				<label className="inputLabel">
					<input
						type="radio"
						name="debtAmount"
						value="50.000 - 100.000"
						checked={debtAmount === "50.000 - 100.000"}
						onChange={handleDebtAmountChange}
					/>
					{' '}50.000 - 100.000
				</label>
				<label className="inputLabel">
					<input
						type="radio"
						name="debtAmount"
						value=">100.000"
						checked={debtAmount === ">100.000"}
						onChange={handleDebtAmountChange}
					/>
					{" > 100.000"}
				</label> */}
					{/* <label className=""> */}
						<TextInput
							type="text"
							name="debtAmount"
							min="10000"
							step="1"
							placeholder="Enter your debt amount"
							onChange={handleDebtAmountChange}
						/>
					{/* </label> */}

        </Frame74>
      </Frame67_0001>
      <Frame55 className="grow" onClick={() => handleNextStep()}>
        <GetStarted>
          Next
        </GetStarted>
      </Frame55>
    </Property1Variant2>),
		2: (<Property1Variant2>
      <GetOutOfDebtNow>
	  Free Debt Consultation
      </GetOutOfDebtNow>
      <Frame65>
        <Frame57_0001>
          <Frame62_0001>
            <_1_0001>
              1
            </_1_0001>
          </Frame62_0001>
          <Contact_0001>
            Contact
          </Contact_0001>
        </Frame57_0001>
        <Frame58_0001>
          <Frame62_0001>
            <_2_0002>
              2
            </_2_0002>
          </Frame62_0001>
          <DebtDetails>
            Debt Details
          </DebtDetails>
        </Frame58_0001>
        <Frame59_0001>
          <Frame62>
            <_3_0002>
              3
            </_3_0002>
          </Frame62>
          <ConsultTime_0002>
            Consult time
          </ConsultTime_0002>
        </Frame59_0001>
        <Frame57>
          <Frame62_0001>
            <_2>
              4
            </_2>
          </Frame62_0001>
          <Review>
            Review
          </Review>
        </Frame57>
      </Frame65>
      <WhatSTheBestTimeToReachYou>
        What’s the best time to reach you?
      </WhatSTheBestTimeToReachYou>
      <Frame55 className="grow" onClick={() => handleNextStep()}>
        <GetStarted>
          Next
        </GetStarted>
      </Frame55>
      <Frame76>
        {/* <Frame45_0001>
          <Placeholder_0008>
            _ _
          </Placeholder_0008>
        </Frame45_0001>
        <Placeholder_0008>
          :
        </Placeholder_0008>
        <Frame69_0001>
          <Placeholder_0008>
            _ _
          </Placeholder_0008>
        </Frame69_0001> */}
				<Select
					options={hourOptions}
					placeholder="_ _"
					className="hour-selector"
					styles={selectStyles}
					onChange={(selectedOption) => setTime({ ...time, hour: selectedOption.value })}
				/>
				<Placeholder_0008>:</Placeholder_0008>
				<Select
					options={minuteOptions}
					placeholder="_ _"
					className="minute-selector"
					styles={selectStyles}
					onChange={(selectedOption) => setTime({ ...time, minute: parseInt(selectedOption.value).toLocaleString('en-US', {
							minimumIntegerDigits: 2,
							useGrouping: false
						})
					})}
				/>
      </Frame76>
    </Property1Variant2>),
		3: (<Property1Variant2>
      <GetOutOfDebtNow>
	  Free Debt Consultation
      </GetOutOfDebtNow>
      <Frame65>
        <Frame57_0001>
          <Frame62_0001>
            <_1_0001>
              1
            </_1_0001>
          </Frame62_0001>
          <Contact_0001>
            Contact
          </Contact_0001>
        </Frame57_0001>
        <Frame58_0001>
          <Frame62_0001>
            <_2_0002>
              2
            </_2_0002>
          </Frame62_0001>
          <DebtDetails>
            Debt Details
          </DebtDetails>
        </Frame58_0001>
        <Frame59_0001>
          <Frame62_0014>
            <_3_0003>
              3
            </_3_0003>
          </Frame62_0014>
          <ConsultTime_0003>
            Consult time
          </ConsultTime_0003>
        </Frame59_0001>
        <Frame57>
          <Frame62>
            <_4_0003>
              4
            </_4_0003>
          </Frame62>
          <Review_0003>
            Review
          </Review_0003>
        </Frame57>
      </Frame65>
      <Frame67_0002>
        <ReviewAllYourInfo>
          Review all your info
        </ReviewAllYourInfo>
        <Frame74>
          <Frame77>
            <Placeholder>
              Name:
            </Placeholder>
            <Value>
              {name}
            </Value>
          </Frame77>
          <Frame77>
            <Placeholder>
              Email:
            </Placeholder>
            <Value>
              {email}
            </Value>
          </Frame77>
          <Frame77>
            <Placeholder>
              Phone:
            </Placeholder>
            <Value>
              {phoneNumber}
            </Value>
          </Frame77>
          <Frame77>
            <Placeholder>
              Debt Amount:
            </Placeholder>
            <Value>
              {debtAmount}
            </Value>
          </Frame77>
          <Frame77>
            <Placeholder>
              Best Contact Time:
            </Placeholder>
            <Value>
						{time.hour + ':' + time.minute}
            </Value>
          </Frame77>
        </Frame74>
      </Frame67_0002>
      <Frame55 className="grow" onClick={handleSubmit}>
        <GetStarted>
          Submit all info
        </GetStarted>
      </Frame55>
    </Property1Variant2>)
	}

	return (
    <div className="container-center-horizontal">
      <div className="screen">
        <MacBookPro1619 tablerMenu2="/static/img/tabler-menu-2-2@2x.svg" />
        <RootWrapperFormMobile>
          {steps[currentStep]}
        </RootWrapperFormMobile>
          <Container className={'mb-20 sm:mb-36 text-gray-700 text-base sm:text-lg'}>
              <p>
                  <span className={'font-medium'}>Disclaimer:</span> By providing my phone number to The Debt Relief Co, I agree and acknowledge that The Debt Relief Co may send text messages to my wireless phone number for any purpose. Message and data rates may apply.
                  <br/>
                  We will only send one SMS as a reply to you, and you will be able to Opt-out by replying “STOP”. For more information on how your data will be handled please visit our <a className={'font-medium underline'} href={'https://app.termly.io/policy-viewer/policy.html?policyUUID=8de218b0-b9dc-4ff8-983b-84d60f971f84'} target={'_blank'} rel={'nofollow'}>PRIVACY POLICY</a>.
              </p>
              <p className={'mt-2'}>
                  <span className={'font-medium'}>Privacy Policy:</span> No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
          </Container>
        <AndroidSmall6 />
      </div>
    </div>
  )
}

const RootWrapperFormMobile = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: flex-start;
	gap: 20px;
	/* border: solid 1px rgb(151, 71, 255); */
	border-radius: 5px;
	/* min-height: 100vh; */
  min-width: 100vw;
	box-sizing: border-box;
	padding: 20px;
  margin-top: 86px;
	z-index: 50;
`;

const Property1Default = styled.div`
	width: 100%;
	height: 640px;
	overflow: hidden;
	background-color: white;
	position: relative;
`;

const GetOutOfDebtNow = styled.h1`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 28px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
	position: absolute;
	left: 24px;
	top: 61px;
`;

const Frame65 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: flex-start;
	gap: 4px;
	box-sizing: border-box;
	position: absolute;
	left: 6px;
	top: 118px;
	width: 348px;
	height: 74px;
`;

const Frame57 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	flex: none;
	gap: 8px;
	width: 84px;
	box-sizing: border-box;
`;

const Frame62 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	flex: none;
	gap: 10px;
	border: solid 3px rgb(21, 70, 197);
	border-radius: 50px;
	width: 48px;
	height: 48px;
	box-sizing: border-box;
	padding: 16px 25px;
`;

const _1 = styled.span`
	color: rgb(21, 70, 197);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const Contact = styled.span`
	color: rgb(21, 70, 197);
	text-overflow: ellipsis;
	font-size: 13px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const Frame62_0001 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	flex: none;
	gap: 10px;
	border: solid 3px rgb(11, 20, 47);
	border-radius: 50px;
	width: 48px;
	height: 48px;
	box-sizing: border-box;
	padding: 16px 25px;
`;

const _2 = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const DebtDetails = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 13px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const ConsultTime = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 13px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const Review = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 13px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const Frame67 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	gap: 24px;
	box-sizing: border-box;
	position: absolute;
	left: 24px;
	top: 224px;
	width: 312px;
	height: 251px;
`;

const TellUsAboutYourself = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 20px;
	font-weight: 700;
	font-family: Manrope, sans-serif;
	text-align: left;
`;

const Frame66 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	flex: none;
	gap: 16px;
	box-sizing: border-box;
`;

const Frame45 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	flex: none;
	gap: 10px;
	border-radius: 8px;
	width: 312px;
	height: 56px;
	background-color: rgb(228, 233, 248);
	box-sizing: border-box;
	padding: 10px 24px;
`;

const Placeholder = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Manrope, sans-serif;
	font-weight: 700;
	text-align: left;
`;

const Value = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Manrope, sans-serif;
	font-weight: inherit;
	text-align: left;
`;

const Frame55 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	gap: 10px;
	box-shadow: 0px 20px 30px  rgba(249, 135, 78, 0.6);
	border-radius: 8px;
	background-color: rgb(255, 91, 13);
	box-sizing: border-box;
	padding: 10px 32px;
	position: absolute;
	left: 24px;
	top: 507px;
	width: 312px;
	height: 60px;
  cursor: pointer;
`;

const GetStarted = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
	text-transform: uppercase;
`;

const Property1Variant2 = styled.div`
	width: 100%;
	height: 640px;
	overflow: hidden;
	background-color: white;
	position: relative;
`;

const Frame57_0001 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	flex: none;
	gap: 8px;
	width: 84px;
	box-sizing: border-box;
`;

const _1_0001 = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const Contact_0001 = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 13px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const Frame58_0001 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	flex: none;
	gap: 8px;
	width: 84px;
	box-sizing: border-box;
`;

const _2_0001 = styled.span`
	color: rgb(21, 70, 197);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const DebtDetails_0001 = styled.span`
	color: rgb(21, 70, 197);
	text-overflow: ellipsis;
	font-size: 13px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const Frame59_0001 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	flex: none;
	gap: 8px;
	width: 84px;
	box-sizing: border-box;
`;

const _3_0001 = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const Frame67_0001 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	gap: 24px;
	box-sizing: border-box;
	position: absolute;
	left: 24px;
	top: 224px;
	width: 224px;
	height: 241px;
`;

const TellUsAboutYourDebt = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const Frame74 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	flex: none;
	gap: 20px;
	box-sizing: border-box;
	/* padding-left: 24px; */
	width: 300px;
`;

const Frame69 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	flex: none;
	gap: 16px;
	box-sizing: border-box;
`;

const Ellipse2 = styled.div`
	width: 16px;
	height: 16px;
	position: relative;
`;

const Ellipse2_0001 = styled.div`
	border-radius: 16px / 16px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const _2_0002 = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const _3_0002 = styled.span`
	color: rgb(21, 70, 197);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const ConsultTime_0002 = styled.span`
	color: rgb(21, 70, 197);
	text-overflow: ellipsis;
	font-size: 13px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const WhatSTheBestTimeToReachYou = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
	width: 312px;
	position: absolute;
	left: 24px;
	top: 224px;
`;

const Frame76 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	gap: 16px;
	box-sizing: border-box;
	position: absolute;
	left: 24px;
	top: 342px;
	width: 226px;
	height: 56px;
`;

const Frame45_0001 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	flex: none;
	gap: 10px;
	border-radius: 8px;
	width: 94px;
	height: 56px;
	background-color: rgb(228, 233, 248);
	box-sizing: border-box;
	padding: 10px 24px;
`;

const Placeholder_0008 = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const Frame69_0001 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	flex: none;
	gap: 10px;
	border-radius: 8px;
	width: 94px;
	height: 56px;
	background-color: rgb(228, 233, 248);
	box-sizing: border-box;
	padding: 10px 24px;
`;

const Frame62_0014 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	flex: none;
	gap: 10px;
	border: solid 3px rgb(28, 22, 20);
	border-radius: 50px;
	width: 48px;
	height: 48px;
	box-sizing: border-box;
	padding: 16px 25px;
`;

const _3_0003 = styled.span`
	color: rgb(28, 22, 20);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const ConsultTime_0003 = styled.span`
	color: rgb(28, 22, 20);
	text-overflow: ellipsis;
	font-size: 13px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const _4_0003 = styled.span`
	color: rgb(21, 70, 197);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const Review_0003 = styled.span`
	color: rgb(21, 70, 197);
	text-overflow: ellipsis;
	font-size: 13px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const Frame67_0002 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	gap: 24px;
	box-sizing: border-box;
	position: absolute;
	left: 24px;
	top: 224px;
	width: 250px;
	height: 241px;
`;

const ReviewAllYourInfo = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 600;
	text-align: left;
`;

const Frame77 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: flex-end;
	flex: none;
	gap: 6px;
	box-sizing: border-box;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-family: Manrope, sans-serif;
  color: rgb(11, 20, 47);
  &:focus {
    outline: none;
  }
`;


const TextInput = styled.input`
		display: flex;
		justify-content: flex-start;
		flex-direction: row;
		align-items: center;
		flex: none;
		gap: 10px;
		border-radius: 8px;
		width: 100%;
		height: 60px;
		background-color: rgb(228, 233, 248);
		box-sizing: border-box;
		padding: 10px 24px;
		border: none;
`;
