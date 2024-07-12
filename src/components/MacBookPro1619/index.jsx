import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import MenuMobile from "../MenuMobile";
import { useRouter } from "next/router";
import logo2Animation from "../Header/logo2.json";
import lottie from "lottie-web";

function MacBookPro1619(props) {
  const { tablerMenu2, className } = props;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();

  const logoContainerRef = useRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: logoContainerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: logo2Animation,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  ///rotate Tablermenu2 image and show MenuMobile
  const handleMenuClick = () => { 
    setIsMenuOpen(!isMenuOpen);
    console.log('Toggle menu home');
  }

  return (
    <MacBookPro16191 className={`mac-book-pro-16-19 ${className || ""}`}>
      {/* <LogoDebtRelief1
        onClick={() => router.push("/")}
        className="logo-debt-relief-1-3"
        src="/static/img/logo-debt-relief-1-6@2x.png"
        alt="logo debt relief 1"
      /> */}
      <div 
        onClick={() => router.push("/")}
        ref={logoContainerRef} 
        role="img" 
        aria-describedby="The Debt Relief Co Logo."
        className="logo-debt-relief-1-3 w-1/2 cursor-pointer" 
      />

      <Tablermenu2 onClick={handleMenuClick} className="tablermenu-2" src={isMenuOpen ? "/static/img/tabler-menu-2-1@2x.svg" : tablerMenu2} alt="tabler:menu-2" />
      {isMenuOpen && <MenuMobile />}
    </MacBookPro16191>
  );
}

const MacBookPro16191 = styled.div`
  position: fixed;
  width: 100vw;
  height: 72px;
  top: 0;
  left: 0;
  z-index: 9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 24px;
  align-items: center;
  gap: 172px;
  background-color: var(--white);
  box-shadow: 0px 4px 20px #1546c50d;

  &.mac-book-pro-16-19.mac-book-pro-16-19-1 {
    z-index: 2;
  }

  &.mac-book-pro-16-19.mac-book-pro-16-19-2 {
    z-index: 12;
  }

  &.mac-book-pro-16-19.mac-book-pro-16-19-3 {
    z-index: 4;
  }
`;

const LogoDebtRelief1 = styled.img`
  width: 100px;
  height: 47px;
  align-self: flex-end;
`;

const Tablermenu2 = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 1px;
  cursor: pointer;
`;

export default MacBookPro1619;
