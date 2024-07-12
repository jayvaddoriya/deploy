import React from "react";
import styles from './HomePc.module.css';
import Image from "next/image";
import { useMediaQuery } from "@/utils/mediaQueryHook";
import classNames from "classnames";

const SunShineSection = (props) => {
    const { data } = props
    const { spanText7, spanText8, spanText9, spanText11, group1, frame231Props, frame232Props } = data;
    const isTabletBreakpoint = useMediaQuery(1550);

    return (
        <>
            <div className={styles.flexRow}>
                <div className={styles.flexCol1}>
                    <h2 className={styles.dontLentCreditCar}>
                        <span>{spanText7}</span>
                        <span>{spanText8}</span>
                        <span>{spanText9}</span>
                    </h2>
                    <h3 className={styles.cutYourMonthlyPay}>
                        <span>{spanText11}</span>
                    </h3>
                </div>
                <Image className={styles.group1} src={group1} alt="Linear orange sun." width={168} height={163} />
            </div>
            <div className={styles.flexCol2}>
                <div className={styles.flexRow1}>
                    {!isTabletBreakpoint && <Image className={styles.sombruilla} src={'static/img/home/sombruilla2.svg'} alt="sombruilla 1" width={526} height={534} objectFit={'cover'} />}
                    <div className={styles.frame25}>
                        <div className={styles.frame231}>
                            {
                                [frame231Props.frame171Props, frame231Props.frame172Props, frame231Props.frame173Props].map((item, i) => (<Item item={item} key={i}></Item>))
                            }
                        </div>
                        <div className={styles.frame231}>
                            {
                                [frame232Props.frame171Props, frame232Props.frame172Props, frame232Props.frame173Props].map((item, i) => (<Item item={item} key={i}></Item>))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Item = ({ item, key }) => <div key={key} className={classNames('frame-17', item.className, styles.frame171)}>
    <div className={classNames('icono-pc', styles.iconoPc)}>
        <Image className="tablercoin-off" src={item.tablerCoinOff} alt="tabler:coin-off" width={32} height={32} />
    </div>
    <div className={classNames('frame-15', styles.frame15)}>
        <div className={classNames('no-up-front-cost-ever', styles.noUpFrontCostEver)}>
            <h4>{item.spanText1}</h4>
        </div>
        <p className={classNames('as-a-part-of-our-gua', styles.asAPartOfOurGua)}>
            <span>{item.spanText2}</span>
        </p>
    </div>
</div>;
export default SunShineSection