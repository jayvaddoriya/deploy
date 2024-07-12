import React from "react";
import styles from './HomePc.module.css';
import Image from "next/image";

const ClientSection = (props) => {
    const { data } = props
    const { spanText6, forbes, theWallSteetJournal, bloomberg, usaToday, businessInsider} = data;

    return (
        <div className={styles.flexCol}>
            <p className={styles.whereWeHaveBeenFeature}>
                <span>{spanText6}</span>
            </p>
            <div className={styles.overlapGroup7}>
                <Image className={styles.forbes} src={forbes} alt="Forbes" width={155} height={38} />
                <Image src={theWallSteetJournal} alt="The wall street journal" width={311} height={26} />
                <Image src={bloomberg} alt="Bloomberg" width={207} height={38} />
                <Image className={styles.usaToday} src={usaToday} alt="USA TODAY" width={158} height={55} />
                <Image src={businessInsider} alt="BUSINESS INSIDER" width={159} height={48} />
            </div>
        </div>
    )
}
export default ClientSection