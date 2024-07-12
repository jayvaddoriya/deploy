import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import lottie from "lottie-web";
import logo2Animation from "./logo2.json";
import classNames from "classnames";
import styles from "./index.module.css";
// import MenuMobile from "@/components/MenuMobile";
import Image from "next/image";
import dynamic from "next/dynamic";
const MenuMobile = dynamic(() => import("@/components/MenuMobile"));

function Header(props) {
  const { className } = props;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const logoContainerRef = useRef();
  const router = useRouter();
  const [currPath, setCurrPath] = useState(router.asPath);

  useEffect(() => {
    setCurrPath(router.asPath);
  }, [router.asPath]);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: logoContainerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: logo2Animation,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Toggle menu home");
  };

  return (
    <div className={styles.container}>
      <div
        className={classNames(
          className || "",
          "mac-book-pro-16-4-2",
          styles.root
        )}
      >
        <div
          onClick={() => router.push("/")}
          ref={logoContainerRef}
          role="img"
          aria-describedby="The Debt Relief Co Logo."
          className={classNames(
            "logo-debt-relief-1-1",
            "cursor-pointer",
            styles.logo
          )}
        />
        <div className={styles.frame12}>
          <div className={styles.frame5}>
            <div className={styles.frame83}>
              <Link href="/" className={styles.place}>
                <span>Home</span>
              </Link>
              {currPath === "/" && <div className={styles.ellipse7}></div>}
            </div>
            <div className={styles.frame83}>
              <Link href="/the-drc-program" className={styles.resources}>
                <span>Debt Relief Program</span>
              </Link>
              {currPath === "/the-drc-program" && (
                <div className={styles.ellipse7}></div>
              )}
            </div>
            <div className={styles.frame83}>
              <Link href="/our-company" className={styles.reviews}>
                <span>Our Company</span>
              </Link>
              {currPath === "/our-company" && (
                <div className={styles.ellipse7}></div>
              )}
            </div>
          </div>
          <button
            className={classNames(styles.frame4, "grow")}
            onClick={() => router.push("/book-online")}
          >
            <div className={styles.bookAConsultation}>
              <span>Book a consultation</span>
            </div>
          </button>
        </div>
        <Image
          onClick={handleMenuClick}
          className={styles.toggle}
          src={
            isMenuOpen
              ? "/static/img/tabler-menu-2-1@2x.svg"
              : "/static/img/tabler-menu-2-2@2x.svg"
          }
          alt="tabler:menu-2"
          width={40}
          height={40}
        />
        {isMenuOpen && <MenuMobile />}
      </div>
    </div>
  );
}

export default Header;
