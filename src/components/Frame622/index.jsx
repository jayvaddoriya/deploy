import React from "react";
import styled from "styled-components";
import { ManropeBoldMidnight24px } from "../../styledMixins";


function Frame622(props) {
  const { children, className } = props;

  return (
    <Frame62 className={`frame-62-2 ${className || ""}`}>
      <Number className="number-1">
        <span className="spann3zg4 manrope-bold-midnight-24px">{children}</span>
      </Number>
    </Frame62>
  );
}

const Frame62 = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  padding: 8.5px 22.5px;
  align-items: flex-start;
  border-radius: 50px;
  overflow: hidden;

  &.frame-62-2.frame-62-3 {
    margin-right: 5px;
  }
`;

const Number = styled.div`
  ${ManropeBoldMidnight24px}
  min-height: 33px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame622;
