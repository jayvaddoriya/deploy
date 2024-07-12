import React from "react";
import styled from "styled-components";
import { ManropeBoldNewCar24px } from "../../styledMixins";


function Frame62(props) {
  const { className } = props;

  return (
    <Frame621 className={`frame-62 ${className || ""}`}>
      <Number className="number">
        <span className="spanncfmfl manrope-bold-new-car-24px">1</span>
      </Number>
    </Frame621>
  );
}

const Frame621 = styled.div`
  width: 60px;
  height: 60px;
  margin-left: 10px;
  display: flex;
  padding: 8.5px 24.5px;
  align-items: flex-start;
  border-radius: 50px;
  overflow: hidden;

  &.frame-62.frame-62-1 {
    margin-left: unset;
  }
`;

const Number = styled.div`
  ${ManropeBoldNewCar24px}
  min-height: 33px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame62;
