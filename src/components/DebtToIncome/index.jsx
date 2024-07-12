import React, {useRef, useState} from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./index.module.css";
import classNames from "classnames";
import Image from "next/image";
import Intro from "@/components/Intro";
import {useRouter} from "next/router";

const HEADER_HEIGHT = 86;
const INPUTS = [
    {
        title: 'Mortgage / Rent', name: 'rent'
    },
    {
        title: 'Food', name: 'food'
    },
    {
        title: 'Home Owners Insurance', name: 'insuranceHome'
    },
    {
        title: 'Household Item', name: 'household'
    },
    {
        title: 'Life Insurance', name: 'insuranceLife'
    },
    {
        title: 'Clothing', name: 'clothing'
    },
    {
        title: 'Medical Care', name: 'medical'
    },
    {
        title: 'Laundry / Dry Cleaning', name: 'cleaning'
    },
    {
        title: 'Child Care / Support / Alimony', name: 'child'
    },
    {
        title: 'Utilities', name: 'utilities'
    },
    {
        title: 'Cable TV / Satellite', name: 'tv'
    },
    {
        title: 'Telephone', name: 'telephone'
    },
    {
        title: 'Charity / Donations', name: 'charity'
    },
    {
        title: 'Auto Loans', name: 'autoLoans'
    },
    {
        title: 'Entertainment', name: 'entertainment'
    },
    {
        title: 'Auto Other', name: 'autoOther'
    },
    {
        title: 'Gym / Health', name: 'gym'
    },
    {
        title: 'Auto Insurance', name: 'autoInsurance'
    },
    {
        title: 'Personal Care', name: 'personal'
    },
    {
        title: 'Education', name: 'education'
    },
    {
        title: 'Back Taxes', name: 'taxes'
    },
    {
        title: 'Student Loans', name: 'studentLoans'
    },
    {
        title: 'Subscriptions', name: 'subscriptions'
    },
    {
        title: 'Misc / Other', name: 'other'
    }
]

function DebtToIncome() {
    const router = useRouter();
    const [income, setIncome] = useState('');
    const [values, setValues] = useState(INPUTS.reduce((acc, item) => ({ ...acc, [item.name]: '' }), {}));
    const [totalSpendings, setTotalSpendings] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [budget, setBudget] = useState(0);
    const result = useRef();

    const handleInputChange = (name) => (event) => {
        let value = event.target.value;

        const reg = /^[\d|.|,|$]+$/;
        if (!reg.test(value)) {
            return;
        }

        if (!value) {
            if (name === 'income'){
                setIncome('$0');
                return;
            }

            setValues({ ...values, [name]: '$0'  })
            return;
        }

        value = value.replaceAll('$', '').replaceAll(',', '').replaceAll('.', '');
        value = Number(value).toLocaleString('en-US').toString();
        value = '$' + value;

        if (name === 'income'){
            setIncome(value);
            return;
        }

        setValues({ ...values, [name]: value  })
    }

    const handleCalculate = () => {
        const incomeValue = Number(income.replaceAll('$', '').replaceAll(',', '').replaceAll('.', ''));
        const spendingsValue = Object.keys(values).reduce((acc, key) => acc + Number(values[key].replaceAll('$', '').replaceAll(',', '').replaceAll('.', '')), 0);
        setTotalIncome(incomeValue);
        setTotalSpendings(spendingsValue);
        setBudget(incomeValue - spendingsValue);

        const top = result.current.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
        window.scrollTo({ top, behavior: "smooth" });
    }

  return (
    <div className="container-center-horizontal">
      <div className={classNames("debtToIncome screen", styles.root)}>
        <Header className={'mac-book-pro-16-4-3'} />
        <Intro
            className={'debtToIncome'}
            texts={{
                title: 'Debt to Income Page'
            }}
        />
          <div className={styles.section1}>
              <div className={classNames(styles.content, styles.section1Content)}>
                  <Image className={styles.cocktailImage} src={'/static/img/debtToIncome/cocktail.svg'} alt={'Cocktail'} width={130} height={219}/>
                  <Image className={styles.surfingImage} src={'/static/img/debtToIncome/surfing.svg'} alt={'Surfing board'} width={173} height={300}/>
                <div className={styles.inputs}>
                    <div className={styles.container}>
                        <div className={styles.inputsContainer}>
                            <div className={styles.title}>Income(s)</div>
                            <div className={styles.inputsWrapper}>
                                <div className={styles.input}>
                                    <label className={styles.label}>Monthly Income</label>
                                    <input
                                        type='text'
                                        value={income}
                                        onChange={handleInputChange('income')}
                                        placeholder={'$0'}
                                        className={styles.numberInput}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.inputsContainer}>
                            <div className={styles.title}>Monthly expenses</div>
                            <div className={styles.inputsWrapper}>
                                {
                                    INPUTS.map((item, i) => (<div className={styles.input} key={i}>
                                        <label className={styles.label}>{item.title}</label>
                                        <input
                                            type='text'
                                            value={values[item.name]}
                                            onChange={handleInputChange(item.name)}
                                            placeholder={'$0'}
                                            className={styles.numberInput}
                                        />
                                    </div>))
                                }
                            </div>
                        </div>
                        <button className={styles.submit} onClick={handleCalculate}>CALCULATE BUDGET</button>
                    </div>
                </div>
                <div className={styles.result} ref={result}>
                    <div className={styles.title}>Your Budget Calculator</div>
                    <div className={styles.cards}>
                        <div className={classNames(styles.card, styles.income)}>
                            <div className={styles.cardTitle}>
                                Your Income are:
                                <Image src={'/static/img/debtToIncome/arrowDown.svg'} alt={'Arrow down'} width={24} height={24}/>
                            </div>
                            <div className={styles.cardStats}>
                                ${totalIncome.toLocaleString('en-US')}
                            </div>
                        </div>
                        <div className={classNames(styles.card, styles.spendings)}>
                            <div className={styles.cardTitle}>
                                Your spending are:
                                <Image src={'/static/img/debtToIncome/arrowUp.svg'} alt={'Arrow up'} width={24} height={24}/>
                            </div>
                            <div className={styles.cardStats}>
                                ${totalSpendings.toLocaleString('en-US')}
                            </div>
                        </div>
                        <div className={classNames(styles.card, styles.budget)}>
                            <div className={styles.cardTitle}>Your Budget:</div>
                            <div className={styles.cardStats}>
                                ${budget.toLocaleString('en-US')}
                                <Image src={'/static/img/debtToIncome/graph.svg'} alt={'Graph icon'} width={46} height={25}/>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
          {/* <div className={styles.section2}>
              <div className={classNames(styles.content, styles.section2Content)}>
                  <p className={styles.textParagraph}>By entering into any financial transaction or agreement, Name knowledges and agrees that any money borrowed or financial obligation incurred is a legitimate debt owed to Name. The terms and conditions of the debt, including but not limited to interest rates, repayment schedules, and any other agreed-upon terms, are as outlined in the original agreement between the parties. Both parties are expected to adhere to these terms. <span className={styles.bold}>Any communication</span> regarding the debt shall be conducted in a respectful and professional manner. Both parties agree to communicate openly and honestly about the status of the debt and any relevant updates. In the event of a dispute related to the debt, both parties agree to make a good-faith effort to resolve the issue amicably through negotiation or, if necessary, through mediation or arbitration in accordance with the laws of the This debt disclaimer is not intended to be legal advice. If either party requires legal advice concerning the debt, it is recommended to consult with a qualified attorney. By continuing with any financial transactions or agreements, both parties acknowledge their understanding and acceptance of the terms outlined in this debt disclaimer. Please sign and return a copy of this letter to confirm your acknowledgment and acceptance of the terms.</p>
              </div>
          </div> */}
          <Image className={styles.frame129} onClick={() => router.push('tel:+1-888-344-0214')} src={"/static/img/frame-129-2@2x.svg"} alt="Frame 129" width={112} height={112}/>
        <Footer />
      </div>
    </div>
  );
}

export default DebtToIncome;
