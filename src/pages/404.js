import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styled from "styled-components";
import React from "react";
import Frame28 from "@/components/Frame28";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="container-center-horizontal">
      <HomePcScreen className="screen">
        <Header />
        <OverlapGroup6>
          <Image 
                src="/static/img/umbrellaCastle.svg"
                width={500}
                height={500}
                alt=""
              />
          <h1 className="text-7xl">404</h1>
          <p className="text-xl">We can't find what you're looking for. Want some help?</p>
          <ButtonContainer>
            <Frame28 text="Book an Appointment" className="p-5" onClick={() => router.push('/book-online')} />
          </ButtonContainer>
        </OverlapGroup6>
        <Footer className="footer-2"/>
      </HomePcScreen>
    </div>)
}

const HomePcScreen = styled.div`
  background-color: var(--coconut);
  border: 1px none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const ButtonContainer = styled.div`
  /* width: 318px; */
  /* margin-top: 211px; */
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;


const OverlapGroup6 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 1000px;
  gap: 30px;
`;

// const OverlapGroup8 = styled.div`
//   height: 216px;
//   /* margin-top: 390px; */
//   display: flex;
//   position: absolute;
//   z-index: 999;
//   top: 1150px;
//   padding: 29px 10px;
//   align-items: flex-start;
//   width: 100%;
//   justify-content: center;
//   /* background-color: var(--white);
//   filter: blur(150px); */
// `;

const OverlapGroup8 = styled.div`
  height: 216px;
  display: flex;
  position: absolute;
  z-index: 50;
  top: 66.5%; // Update this line
  left: 50%; // Add this line
  transform: translate(-50%, -50%); // Add this line
  padding: 29px 10px;
  align-items: flex-start;
  width: 100%;
  justify-content: center;

  @media (max-width: 1024px) {
    height: 150px; // Adjust the value based on your design
    padding: 20px 10px; // Adjust the value based on your design
  }
`;