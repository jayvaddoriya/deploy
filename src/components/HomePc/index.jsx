import React, { useEffect, useState, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import heroAnimation from "public/static/img/heroPCAnimation.json";
import lottie from "lottie-web";
import { useRouter } from "next/router";
import styles from "./HomePc.module.css";
import Image from "next/image";

import Header from "../Header";
import HeroSection from "./HeroSection";

const Footer = dynamic(() => import("../Footer"));

const ClientSection = dynamic(() => import("./ClientSection"));
const SunShineSection = dynamic(() => import("./SunShineSection"));
const FinancialSection = dynamic(() => import("./FinancialSection"));
const PaymentSection = dynamic(() => import("./PaymentSection"));
const DebtReliefSection = dynamic(() => import("./DebtReliefSection"));

function HomePc(props) {
  const lottieContainerRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieContainerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: heroAnimation,
    });
    anim.setSpeed(1.0);

    return () => {
      anim.destroy();
    };
  }, []);

  const containerRef = useRef();
  const overlapGroupRef = useRef();
  const rectangleRef = useRef();
  const [dragging, setDragging] = useState(false);
  let initialX, initialY, scrollStartX;

  const handleMouseDown = useCallback((e) => {
    setDragging(true);
    e.persist();
  }, []);

  const handleMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!dragging) return;
      const containerWidth = containerRef.current.clientWidth;
      const scrollWidth = containerRef.current.scrollWidth - containerWidth;
      const sliderWidth = sliderRef.current.clientWidth;
      const maxSliderPosition =
        overlapGroupRef.current.clientWidth - sliderWidth;
      const deltaX = e.movementX;

      let newSliderPos = parseFloat(sliderRef.current.style.left || 0) + deltaX;
      newSliderPos = Math.max(0, Math.min(newSliderPos, maxSliderPosition));

      const scrollPercentage = newSliderPos / maxSliderPosition;
      containerRef.current.scrollLeft = scrollWidth * scrollPercentage;
      sliderRef.current.style.left = `${newSliderPos}px`;
    },
    [dragging]
  );

  const { macBookPro164Props, footerProps } = props;

  return (
    <div className="container-center-horizontal">
      <Header className={macBookPro164Props.className} />
      <HeroSection data={props} />
      <ClientSection data={props} />
      <SunShineSection data={props} />
      <div className={styles.flexCol2}>
        <div className={styles.overlapGroup5}>
          <FinancialSection data={props} />
          <PaymentSection data={props} />
          <DebtReliefSection data={props} />
        </div>
        <Image
          className={styles.frame129}
          onClick={() => router.push("tel:+1-888-344-0214")}
          src={"/static/img/frame-129-2@2x.svg"}
          alt="Frame 129"
          width={112}
          height={112}
        />
        <Footer className={footerProps.className} />
      </div>
    </div>
  );
}

export default HomePc;
