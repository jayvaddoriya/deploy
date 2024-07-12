import React, { useState } from "react";
import styles from './HomePc.module.css';
import Image from "next/image";
import classNames from "classnames";
import CircularSlider from "../Slider";
import Selector from "./Selector";

const PaymentSection = (props) => {
    const { data } = props
    const { group3, spanText15, spanText17, spanText19, spanText20, spanText22,
        spanText23, spanText25, spanText26, spanText28, spanText29 } = data;

    const [sliderValue, setSliderValue] = useState(10000);
    const [monthlyPayment, setMonthlyPayment] = useState(177.42);
    const [newPayoff, setNewPayoff] = useState(7451.50);
    const [totalSavings, setTotalSavings] = useState(2548.50);
    const [payoffMonths, setPayoffMonths] = useState(42);

    const handleSliderChange = (value, months) => {
        setSliderValue(value);
        setPayoffMonths(months);
        setMonthlyPayment(parseFloat((((value) * 0.7) / months + 10.75).toFixed(2)));
        setNewPayoff(parseFloat(((((value) * 0.7) / months + 10.75) * months)).toFixed(2));
        setTotalSavings(parseFloat((value - ((((value) * 0.7) / months + 10.75) * months))).toFixed(2));
        // (total debt - projected payoff) = total savings
        // monthly payment * amount of months = projected payoff
    };

    return (
        <div className={styles.frame98}>
            <div className={styles.flexRow2}>
                <Image className={styles.group3} src={group3} alt="Coconut margarita drink." width={183} height={245} />
                <h2 className={styles.theDRCProgramDebtCalculator}>
                    {/* <span>{spanText15}</span> */}
                    <span>Calculate your new monthly payment</span>
                </h2>
            </div>
            <div className={styles.overlapGroup2}>
                <div className={styles.frame117}>
                    <h3 className={styles.howMuchTotalUnsec}>
                        <span>{spanText28}</span>
                    </h3>
                    <div className={styles.flexRow3}>
                        <CircularSlider payoffMonths={payoffMonths} value={sliderValue} onChange={handleSliderChange} />
                        <div className={styles.payOffContainer}>
                            <div className={styles.payOffOption}>
                                <span>{spanText17}</span>
                            </div>
                            <div className={styles.payOffMonths}>
                                <div className={styles.frame119}>
                                    <Selector handleSliderChange={handleSliderChange} sliderValue={sliderValue} setPayoffMonths={setPayoffMonths} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.debtCalculatorPayments}>
                        <div className={styles.debtCalculator}>
                            <div className={styles.monthlyPayment}>
                                <span>{spanText19}</span>
                            </div>
                            <div className={styles.frame116}>
                                <div className={styles.price1}>
                                    <span>{spanText20}</span>
                                </div>
                                <div className={styles.text1}>
                                    <span>{monthlyPayment.toLocaleString("en-US")}</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.debtCalculator}>
                            <div className={styles.monthlyPayment}>
                                <span>{spanText22}</span>
                            </div>
                            <div className={styles.frame1161}>
                                <div className={styles.price1}>
                                    <span>{spanText23}</span>
                                </div>
                                <div className={styles.text1}>
                                    <span>{newPayoff.toLocaleString("en-US")}</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.debtCalculator}>
                            <div className={styles.monthlyPayment}>
                                <span>{spanText25}</span>
                            </div>
                            <div className={styles.frame1162}>
                                <div className={styles.price1}>
                                    <span>{spanText26}</span>
                                </div>
                                <div className={styles.text1}>
                                    <span>{totalSavings.toLocaleString("en-US")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={classNames('grow', styles.frame281)} onClick={() => router.push('/book-online')}>
                        <div className={styles.getStarted}>
                            <span>{spanText29}</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default PaymentSection