import React from "react";
import styled from "styled-components";
import { ManropeExtraBoldWhite16px } from "../../styledMixins";
import { useRouter } from "next/router";

function Frame28({ className, text = "Get Started"}) {

  const router = useRouter();

  return (
    <Frame281 onClick={() => router.push('/book-online')} className={`frame-28-3 ${className || ""} grow`}>
      <GetStarted className="get-started-7">
        <span className="spanhurvg manrope-extra-bold-white-24px">{text}</span>
      </GetStarted>
    </Frame281>
  );
}

const Frame281 = styled.button`
  height: 60px;
  /* align-self: center; */
  /* margin-top: 32px; */
  /* margin-left: 472px; */
  display: flex;
  /* padding: 26.5px 32px; */
  /* align-items: flex-start; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  background-color: var(--international-orange);
  border-radius: 8px;
  box-shadow: 0px 20px 30px #f9874d99;

  border: none;
  cursor: pointer;

  &.frame-28-3.frame-28-4 {
    align-self: flex-start;
    /* margin-left: 16px; */
  }
`;

const GetStarted = styled.div`
  ${ManropeExtraBoldWhite16px}
  min-height: 33px;
  letter-spacing: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 33px;

  text-transform: uppercase;

  color: #FFFFFF;
`;

export default Frame28;
