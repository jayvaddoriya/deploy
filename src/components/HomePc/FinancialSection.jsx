import React from "react";
import styles from './HomePc.module.css';
import Image from "next/image";
import classNames from "classnames";

const FinancialSection = (props) => {
  const { data } = props
  const { spanText12, spanText13, spanText14, group2 } = data;

  return (
    <div className={styles.takeStepContainer}>
      <div className={styles.takeControlContent}>
        <h2 className={styles.takeYourFirstStep}>
          <span>{spanText12}</span>
        </h2>
        <p className={styles.itTakes30Seconds}>
          <span>{spanText13}</span>
        </p>
        <button className={classNames('grow', styles.frame28)} onClick={() => router.push('/book-online')}>
          <div className={styles.getStarted}>
            <span>{spanText14}</span>
          </div>
        </button>
      </div>
      <Image className={styles.group2} src={group2} alt="Orange beach sand castle with protruding bucket and shovel." width={660} height={562} />
    </div>
  )
}
export default FinancialSection