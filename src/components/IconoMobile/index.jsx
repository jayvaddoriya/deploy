import React from "react";
import styled from "styled-components";
import { ManropeBoldWhite20px } from "../../styledMixins";


function IconoMobile(props) {
  const { children, className } = props;

  return (
    <IconoMobile1 className={`icono-mobile-2 ${className || ""}`}>
      <Number className="number-6">
        <span className="spanxj1dm manrope-bold-white-20px">{children}</span>
      </Number>
    </IconoMobile1>
  );
}

const IconoMobile1 = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  padding: 1.5px 9.5px;
  align-items: flex-start;
  background-color: var(--new-car);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 10px 30px #1546c533;
`;

const Number = styled.div`
  ${ManropeBoldWhite20px}
  min-height: 27px;
  min-width: 12px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Number1 = styled.div`
  ${ManropeBoldWhite20px}

  .icono-mobile-2.icono-mobile-4  & {
    min-width: 13px;
  }
`;

export default IconoMobile;
