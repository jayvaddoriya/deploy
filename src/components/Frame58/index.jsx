import React from "react";
import Frame622 from "../Frame622";
import styled from "styled-components";
import { ManropeBoldMidnight20px } from "../../styledMixins";


function Frame58(props) {
  const { frame622Props } = props;

  return (
    <Frame581>
      <Frame622>{frame622Props.children}</Frame622>
      <DebtDetails>
        <span className="manrope-bold-midnight-20px">Debt Details</span>
      </DebtDetails>
    </Frame581>
  );
}

const Frame581 = styled.div`
  width: 126px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 103px;
  gap: 15px;
`;

const DebtDetails = styled.div`
  ${ManropeBoldMidnight20px}
  min-height: 27px;
  min-width: 120px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame582 = styled.div`
  width: 126px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 103px;
  gap: 15px;
`;

const DebtDetails1 = styled.div`
  ${ManropeBoldMidnight20px}
  min-height: 27px;
  min-width: 120px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame58;
