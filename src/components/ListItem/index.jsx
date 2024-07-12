import React from "react";
import styles from "./index.module.css";

import classNames from "classnames";
import Image from "next/image";

const ListItem = ({ className, texts, index }) => {
    return (
    <div className={classNames(styles.root, {
        [styles[className]]: className
    })}>
        <div className={styles.header}>
            {
                index
                    ? <div className={styles.number}>{index}</div>
                    :  <Image src={'static/img/creditWorthiness/sun.svg'} alt={'Life saver'} width={41} height={39}/>

            }
            {
                texts.title &&
                <div className={styles.title}>{texts.title}</div>
            }
        </div>
        <div className={styles.text}>{texts.description}</div>
    </div>
  );
}

export default ListItem;
