import React from "react";
import styles from './HomePc.module.css';
import classNames from "classnames";
import Image from "next/image";

const HeroSection = (props) => {
    const {data} = props   
    const {spanText2, spanText3, spanText4} = data;

    return (
        <div className={classNames(styles.root, 'screen')}>
            <div className={styles.background}>
                <Image src={'static/img/home/hero2.svg'} alt={'Grey line art of sunrise via a beach perspective.'} fill={true} objectFit={'cover'} />
            </div>
            <div className={styles.backgroundMobile}>
                <Image src={'static/img/home/heroMobile2.svg'} priority={true} alt={'Grey line art of sunrise via a beach perspective.'} fill={true} objectFit={'cover'} />
            </div>
            <div className={styles.overlapGroup8}>
                <h1 className={styles.takeControlOverYo}>
                    {/* {spanText2} */}
                    Take control of your finances <br/> and become debt free today!
                </h1>
            </div>
            <button className={classNames(styles.button, "grow")} onClick={() => router.push('/book-online')}>
                <div className={styles.getStarted}>
                    <span>{spanText3}</span>
                    <span>{spanText4}</span>
                </div>
            </button>
        </div>
    )

}

export default HeroSection