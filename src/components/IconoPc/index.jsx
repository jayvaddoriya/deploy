import React from "react";
import styled from "styled-components";
import { ManropeBoldWhite24px } from "../../styledMixins";


function IconoPc(props) {
  const { children, className } = props;

  return (
    <IconoPc1 className={`${className || ""}`}>
      <Number className="number-4">
        <span className="span40fyx manrope-bold-white-24px">{children}</span>
      </Number>
    </IconoPc1>
  );
}

const IconoPc1 = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  padding: 2px 12px;
  align-items: flex-start;
  background-color: var(--new-car);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 10px 30px #1546c533;
`;

const Number = styled.div`
  ${ManropeBoldWhite24px}
  min-height: 33px;
  min-width: 14px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Number1 = styled.div`
  ${ManropeBoldWhite24px}

  .icono-pc-2.icono-pc-3  & {
    min-width: 15px;
  }
`;

const Number2 = styled.div`
  ${ManropeBoldWhite24px}

  .icono-pc-2.icono-pc-4  & {
    min-width: 15px;
  }
`;

export default IconoPc;
