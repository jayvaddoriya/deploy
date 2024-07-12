import React from "react";
import styles from './index.module.css';
import Image from "next/image";
import classNames from "classnames";

function Slide(props) {
  const { spanText, frame38Props, frame39Props } = props;

  return (
    <div className={styles.frame731}>
      <Image className={styles.stars} src="/static/img/stars-2@2x.png" alt="Stars" width={88} height={16}/>
      <div className={styles.frame42}>
        <p className={styles.noUpFrontCostEver}>
          <span>{spanText}</span>
        </p>
          <div className={classNames('frame-38', frame38Props.className, styles.frame381)}>
              <div className={styles.greatCustomerServi}>
                  <span>{frame38Props.children}</span>
              </div>
          </div>
      </div>
        <div className={classNames('frame-39', frame39Props.className, styles.frame391)}>
            <div className={styles.samuel}>
                <span>{frame39Props.spanText}</span>
            </div>
        </div>
    </div>
  );
}

export default Slide;
