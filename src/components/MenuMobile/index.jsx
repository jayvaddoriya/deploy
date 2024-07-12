import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from './MenuMobile.module.css';
import classNames from "classnames";

function MenuMobile(props) {
  const router = useRouter();
  const [currPath, setCurrPath] = React.useState(router.asPath);

  React.useEffect(() => {
    setCurrPath(router.asPath);
  }, [router.asPath]);

  return (
    <div className={styles.root}>
      <div className={styles.frame5}>
        <div className={styles.frame83}>
          {currPath === '/' && <div className={styles.ellipse7}></div>}
          <Link className={classNames(styles.place, {
            [styles.active]: currPath === '/'
          })} href='/'>
            <span>Home</span>
          </Link>
          {currPath === '/' && <div className={styles.ellipse7}></div>}
        </div>
        <div className={styles.frame83}>
          {currPath === '/the-drc-program' && <div className={styles.ellipse7}></div>}
          <Link className={classNames(styles.resources, {
            [styles.active]: currPath === '/the-drc-program'
          })} href='/the-drc-program'>
            <span>Debt Relief Program</span>
          </Link>
          {currPath === '/the-drc-program' && <div className={styles.ellipse7}></div>}
        </div>
        <div className={styles.frame83}>
          {currPath === '/our-company' && <div className={styles.ellipse7}></div>}
          <Link className={classNames(styles.reviews, {
            [styles.active]: currPath === '/our-company'
          })} href='/our-company'>
          <span>Our Company</span>
        </Link>
          {currPath === '/our-company' && <div className={styles.ellipse7}></div>}
        </div>
        <button className={styles.frame4} onClick={() => router.push('/book-online')}>
        <div className={styles.bookAConsultation}>
          <span>Book A Consultation</span>
        </div>
      </button>
      </div>
    </div>
  );
}

export default MenuMobile;
