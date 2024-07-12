import React from "react";
import styles from "./index.module.css";

import Image from "next/image";
import classNames from "classnames";

const Intro = ({ className, texts, image }) => {
    return (
    <div className={classNames(styles.root, {
        [styles[className]]: className,
        [styles.fullsize]: !image
    })}>
        <div className={styles.content}>
            <div className={styles.textContent}>
                {
                    texts.title && <h1 className={styles.title}>{texts.title}</h1>
                }
                {
                    texts.subtitle && <div className={styles.subtitle}>{texts.subtitle}</div>
                }
                {
                    texts.description && <div className={styles.description}>{texts.description}</div>
                }
            </div>
            <div className={styles.imageContent}>
                {
                    image &&
                    <Image
                        className={styles.imageDesktop}
                        src={image.src}
                        width={image.imageWidth}
                        height={image.imageHeight}
                        alt={image.alt}
                    />
                }
                {
                    image &&
                    <Image
                        className={styles.imageMobile}
                        src={image.srcMobile || image.src}
                        width={image.imageMobileWidth || image.imageWidth}
                        height={image.imageHeight || image.imageHeight}
                        alt={image.alt}
                    />
                }
            </div>
        </div>
    </div>
  );
}

export default Intro;
