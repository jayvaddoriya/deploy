import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-date-picker";
import Footer from "./Footer";
import Header from "./Header";
import Select from 'react-select';
import { FORM_SUBMIT_URL } from "@/constants";
import { useRouter } from "next/router";
import {Container} from "@/components/Container";

function splitName(name) {
  const [first_name] = name.split(' ', 1);
  const last_name = name.substr(first_name.length + 1)
  return { first_name, last_name };
}

export function Form() {
  const [currentStep, setCurrentStep] = useState(0);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [debtAmount, setDebtAmount] = useState(10000);
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
	const handleTimeChange = (e) => setDate(e);
	const handleDebtAmountChange = (e) => setDebtAmount(parseFloat(e.target.value));
	const steps = {
		0: (<Property1Default>
			<GetOutOfDebtNow>
				{/* Get out of debt now. */}
				Free Debt Consultation
			</GetOutOfDebtNow>
			<Frame68>
				<Frame67>
					<TellUsAboutYourself>
						Tell us about yourself
					</TellUsAboutYourself>
					<Frame66>
					<TextInput
						type="text"
						placeholder="What’s your name?"
						value={name}
						onChange={handleNameChange}
					/>
					<TextInput
						type="email"
						placeholder="Enter your e-mail"
						value={email}
						onChange={handleEmailChange}
					/>
					<TextInput
						type="tel"
						placeholder="What’s your phone number?"
						value={phoneNumber}
						onChange={handlePhoneNumberChange}
					/>

					</Frame66>
				</Frame67>
				<Frame55 className="grow" onClick={() => handleNextStep()}>
					<GetStarted>
						Next
					</GetStarted>
				</Frame55>
			</Frame68>
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
		</Property1Default>),
		1: (<Property1Variant2>
			<GetOutOfDebtNow>
			Free Debt Consultation
			</GetOutOfDebtNow>
			{/* <Frame67_0001>
				<TellUsAboutYourDebt>
					Tell us about your debt
				</TellUsAboutYourDebt>
				<Frame74>
					<label className="inputLabel">
						<DebtRadioInput
								type="radio"
								name="debtAmount"
								value="< 1.000"
								onChange={handleDebtAmountChange}
						/>{' < '}1.000
					</label>
					<label className="inputLabel">
						<DebtRadioInput
							type="radio"
							name="debtAmount"
							value="1.000 - 10.000"
							onChange={handleDebtAmountChange}
						/>{' '}1.000 - 10.000
					</label>
					<label className="inputLabel">
						<DebtRadioInput
							type="radio"
							name="debtAmount"
							value="10.000 - 50.000"
							onChange={handleDebtAmountChange}
						/>{' '}10.000 - 50.000
					</label>
					<label className="inputLabel">
						<DebtRadioInput
							type="radio"
							name="debtAmount"
							value="50.000 - 100.000"
							onChange={handleDebtAmountChange}
						/>{' '}50.000 - 100.000
					</label>
					<label className="inputLabel">
						<DebtRadioInput
							type="radio"
							name="debtAmount"
							value=">100.000"
							onChange={handleDebtAmountChange}
						/>{' '}100.000+
					</label>
				</Frame74>
			</Frame67_0001> */}
			<Frame67_0001>
				<TellUsAboutYourDebt>
					Tell us about your debt
				</TellUsAboutYourDebt>
				<Frame74>
					<label className="inputLabel">
						<TextInput
							type="number"
							name="debtAmount"
							min="10000"
							step="1"
							placeholder="Enter your debt amount"
							onChange={handleDebtAmountChange}
						/>
					</label>
				</Frame74>
			</Frame67_0001>
			<Frame55_0001 className="grow" onClick={() => handleNextStep()}>
				<GetStarted>
					Next
				</GetStarted>
			</Frame55_0001>
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
		</Property1Variant2>),
		2: (<Property1Variant2>
			<GetOutOfDebtNow>
			Free Debt Consultation
			</GetOutOfDebtNow>
			<Frame67_0002>
				<WhatSTheBestTimeToReachYou>
					What’s the best time to reach you?
				</WhatSTheBestTimeToReachYou>
				{/* <DatePicker onChange={handleDateChange} /> */}
				<Frame76>
					<Select
						options={hourOptions}
						placeholder="_ _"
						className="hour-selector"
						styles={selectStyles}
						onChange={(selectedOption) => setTime({ ...time, hour: selectedOption.value })}
					/>
					<>:</>
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
			</Frame67_0002>
			<Frame55_0001 className="grow" onClick={() => handleNextStep()}>
				<GetStarted>
					Next
				</GetStarted>
			</Frame55_0001>
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
		</Property1Variant2>),
		3: (<Property1Variant2>
			<GetOutOfDebtNow>
			Free Debt Consultation
			</GetOutOfDebtNow>
			<Frame67_0003>
				<ReviewAllYourInfo>
					Review all your info
				</ReviewAllYourInfo>
				<Frame74>
					{/* <Frame69_0001>
						<Ellipse1/>
						<Placeholder_0003>
							{"< 1.000"}
						</Placeholder_0003>
					</Frame69_0001>
					<Frame70_0001>
						<Ellipse2_0006/>
						<Placeholder_0003>
							1.000 - 10.000
						</Placeholder_0003>
					</Frame70_0001>
					<Frame71_0001>
						<Ellipse3_0001/>
						<Placeholder_0003>
							10.000 - 50.000
						</Placeholder_0003>
					</Frame71_0001>
					<Frame72_0001>
						<Ellipse4_0001/>
						<Placeholder_0003>
							50.000 - 100.000
						</Placeholder_0003>
					</Frame72_0001>
					<Frame69>
						<Ellipse5_0001/>
						<Placeholder_0003>
							{">100.000"}
						</Placeholder_0003>
					</Frame69> */}
						<Placeholder_0003>
							Name: <Value>{name}</Value>
						</Placeholder_0003>
						<Placeholder_0003>
							Email: <Value>{email}</Value>
						</Placeholder_0003>
						<Placeholder_0003>
							Phone Number: <Value>{phoneNumber}</Value>
						</Placeholder_0003>
						<Placeholder_0003>
							Debt Amount: <Value>${debtAmount.toLocaleString("en-US")}</Value>
						</Placeholder_0003>
						<Placeholder_0003>
							Best Contact Time: <Value>{time.hour + ':' + time.minute}</Value>
						</Placeholder_0003>
				</Frame74>
			</Frame67_0003>
			<Frame55_0001 className="grow" onClick={handleSubmit}>
				<GetStarted>
					send
				</GetStarted>
			</Frame55_0001>
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
		</Property1Variant2>)
	}
  return (
		<div className="container-center-horizontal">
      <div className="screen">
				<Header className="mac-book-pro-16-4-1" />
				<RootWrapperForm>
					{steps[currentStep]}
				</RootWrapperForm>
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
				<Footer />
			</div>
		</div>
  )
}


const DebtRadioInput = styled.input``;

const TextInput = styled.input`
		display: flex;
		justify-content: flex-start;
		flex-direction: row;
		align-items: center;
		flex: none;
		gap: 10px;
		border-radius: 8px;
		width: 400px;
		height: 60px;
		background-color: rgb(228, 233, 248);
		box-sizing: border-box;
		padding: 10px 24px;
		border: none;
`;

const RootWrapperForm = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	gap: 22px;
	/* border: solid 1px rgb(151, 71, 255); */
	border-radius: 5px;
	/* min-height: 100vh; */
	box-sizing: border-box;
	padding: 50px;
`;

const Property1Default = styled.div`
	width: 1728px;
	height: 794px;
	overflow: hidden;
	background-color: white;
	position: relative;
`;

const GetOutOfDebtNow = styled.h1`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 48px;
	font-family: Manrope, sans-serif;
	font-weight: 800;
	text-align: left;
	position: absolute;
	left: 340px;
	top: 179px;
`;

const Frame68 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	box-sizing: border-box;
	position: absolute;
	left: calc((calc((50% + 324px)) - 201px));
	top: calc((calc((50% + 0px)) - 202px));
	width: 402px;
	height: 404px;
`;

const Frame67 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	flex: none;
	gap: 32px;
	box-sizing: border-box;
`;

const TellUsAboutYourself = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 32px;
	font-family: Manrope, sans-serif;
	font-weight: 800;
	text-align: left;
`;

const Frame66 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	flex: none;
	gap: 24px;
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
	width: 400px;
	height: 60px;
	background-color: rgb(228, 233, 248);
	box-sizing: border-box;
	padding: 10px 24px;
`;

const Placeholder = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Manrope, sans-serif;
	font-weight: 800;
	text-align: left;
`;

const Frame55 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	flex: none;
	gap: 10px;
	box-shadow: 0px 20px 30px  rgba(249, 135, 78, 0.6);
	border-radius: 8px;
	width: 402px;
	height: 60px;
	background-color: rgb(255, 91, 13);
	box-sizing: border-box;
	padding: 10px 32px;
	cursor: pointer;
`;

const GetStarted = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Manrope, sans-serif;
	font-weight: 800;
	text-align: left;
	text-transform: uppercase;
`;

const Frame65 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: flex-start;
	gap: 19px;
	box-sizing: border-box;
	padding-left: 85px;
	padding-right: 78px;
	position: absolute;
	left: 232px;
	top: 269px;
	width: 724px;
	height: 103px;
`;

const Frame57 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	flex: none;
	gap: 16px;
	width: 126px;
	box-sizing: border-box;
`;

const Frame62 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	flex: none;
	gap: 10px;
	border: solid 5px rgb(21, 70, 197);
	border-radius: 50px;
	width: 60px;
	height: 60px;
	box-sizing: border-box;
	padding: 16px 25px;
`;

const _1 = styled.span`
	color: rgb(21, 70, 197);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Manrope, sans-serif;
	font-weight: 800;
	text-align: left;
`;

const Contact = styled.span`
	color: rgb(21, 70, 197);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 700;
	text-align: left;
`;

const Frame62_0001 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	flex: none;
	gap: 10px;
	border: solid 5px rgb(11, 20, 47);
	border-radius: 50px;
	width: 60px;
	height: 60px;
	box-sizing: border-box;
	padding: 16px 25px;
`;

const _2 = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Manrope, sans-serif;
	font-weight: 800;
	text-align: left;
`;

const DebtDetails = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 700;
	text-align: left;
`;

const ConsultTime = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 700;
	text-align: left;
`;

const Review = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 700;
	text-align: left;
`;

const Property1Variant2 = styled.div`
	width: 1728px;
	height: 794px;
	overflow: hidden;
	background-color: white;
	position: relative;
`;

const Frame67_0001 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	gap: 32px;
	box-sizing: border-box;
	position: absolute;
	left: calc((calc((50% + 324px)) - 201px));
	top: calc((calc((50% + 0px)) - 202px));
	width: 357px;
	height: 307px;
`;

const TellUsAboutYourDebt = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 32px;
	font-family: Manrope, sans-serif;
	font-weight: 800;
	text-align: left;
`;

const Frame74 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	flex: none;
	gap: 24px;
	box-sizing: border-box;
	/* padding-left: 24px; */
	width: 400px;
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

const Placeholder_0003 = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 700;
	text-align: left;
`;

const Value = styled.span`
color: rgb(11, 20, 47);
text-overflow: ellipsis;
font-size: 20px;
font-family: Manrope, sans-serif;
font-weight: 400;
text-align: left;
`;

const Frame55_0001 = styled.div`
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
	left: 987px;
	top: 539px;
	width: 402px;
	height: 60px;
	cursor: pointer;
`;

const Frame57_0001 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	flex: none;
	gap: 16px;
	width: 126px;
	box-sizing: border-box;
`;

const _1_0001 = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Manrope, sans-serif;
	font-weight: 800;
	text-align: left;
`;

const Contact_0001 = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 700;
	text-align: left;
`;

const Frame58_0001 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	flex: none;
	gap: 16px;
	width: 126px;
	box-sizing: border-box;
`;

const _2_0001 = styled.span`
	color: rgb(21, 70, 197);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Manrope, sans-serif;
	font-weight: 800;
	text-align: left;
`;

const DebtDetails_0001 = styled.span`
	color: rgb(21, 70, 197);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 700;
	text-align: left;
`;

const Frame59_0001 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	flex: none;
	gap: 16px;
	width: 126px;
	box-sizing: border-box;
`;

const _3_0001 = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Manrope, sans-serif;
	font-weight: 800;
	text-align: left;
`;

const Frame67_0002 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	gap: 32px;
	box-sizing: border-box;
	position: absolute;
	left: calc((calc((50% + 324px)) - 201px));
	top: calc((calc((50% + 0px)) - 202px));
	width: 400px;
	height: 88px;
`;

const WhatSTheBestTimeToReachYou = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 32px;
	font-family: Manrope, sans-serif;
	font-weight: 800;
	text-align: left;
	width: 400px;
`;

const _2_0002 = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Manrope, sans-serif;
	font-weight: 800;
	text-align: left;
`;

const _3_0002 = styled.span`
	color: rgb(21, 70, 197);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Manrope, sans-serif;
	font-weight: 800;
	text-align: left;
`;

const ConsultTime_0002 = styled.span`
	color: rgb(21, 70, 197);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 700;
	text-align: left;
`;

const Frame67_0003 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	gap: 32px;
	box-sizing: border-box;
	position: absolute;
	left: calc((calc((50% + 324px)) - 201px));
	top: calc((calc((50% + 0px)) - 202px));
	width: 303px;
	height: 307px;
`;

const ReviewAllYourInfo = styled.span`
	color: rgb(11, 20, 47);
	text-overflow: ellipsis;
	font-size: 32px;
	font-family: Manrope, sans-serif;
	font-weight: 800;
	text-align: left;
`;

const Frame69_0001 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	flex: none;
	gap: 16px;
	box-sizing: border-box;
`;

const Ellipse1 = styled.div`
	width: 16px;
	height: 16px;
	border-radius: 16px / 16px;
`;

const Frame70_0001 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	flex: none;
	gap: 16px;
	box-sizing: border-box;
`;

const Ellipse2_0006 = styled.div`
	width: 16px;
	height: 16px;
	border-radius: 16px / 16px;
`;

const Frame71_0001 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	flex: none;
	gap: 16px;
	box-sizing: border-box;
`;

const Ellipse3_0001 = styled.div`
	width: 16px;
	height: 16px;
	border-radius: 16px / 16px;
`;

const Frame72_0001 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	flex: none;
	gap: 16px;
	box-sizing: border-box;
`;

const Ellipse4_0001 = styled.div`
	width: 16px;
	height: 16px;
	border-radius: 16px / 16px;
`;

const Ellipse5_0001 = styled.div`
	width: 16px;
	height: 16px;
	border-radius: 16px / 16px;
`;

const _4_0003 = styled.span`
	color: rgb(21, 70, 197);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Manrope, sans-serif;
	font-weight: 800;
	text-align: left;
`;

const Review_0003 = styled.span`
	color: rgb(21, 70, 197);
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	font-weight: 700;
	text-align: left;
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
	top: 150px;
	width: 226px;
	height: 56px;
`;
