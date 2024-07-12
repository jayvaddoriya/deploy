import React from "react";
import styled from "styled-components";
import { ManropeBoldMidnight24px, ManropeBoldMidnight20px } from "../../styledMixins";


function Frame59() {
  return (
    <Frame591>
      <Frame62>
        <Number>
          <span className="manrope-bold-midnight-24px">3</span>
        </Number>
      </Frame62>
      <ConsultTime>
        <span className="manrope-bold-midnight-20px">Consult time</span>
      </ConsultTime>
    </Frame591>
  );
}

const Frame591 = styled.div`
  width: 126px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 103px;
  gap: 15px;
`;

const Frame62 = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  padding: 8.5px 23px;
  align-items: flex-start;
  border-radius: 50px;
  overflow: hidden;
`;

const Number = styled.div`
  ${ManropeBoldMidnight24px}
  min-height: 33px;
  letter-spacing: 0;
  line-height: normal;
`;

const ConsultTime = styled.div`
  ${ManropeBoldMidnight20px}
  min-height: 27px;
  min-width: 126px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame592 = styled.div`
  width: 126px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 103px;
  gap: 15px;
`;

const Frame621 = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  padding: 8.5px 23px;
  align-items: flex-start;
  border-radius: 50px;
  overflow: hidden;
`;

const Number1 = styled.div`
  ${ManropeBoldMidnight24px}
  min-height: 33px;
  letter-spacing: 0;
  line-height: normal;
`;

const ConsultTime1 = styled.div`
  ${ManropeBoldMidnight20px}
  min-height: 27px;
  min-width: 126px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame59;
