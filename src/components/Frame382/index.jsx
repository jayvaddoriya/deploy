import React from "react";
import styled from "styled-components";
import { ManropeNormalChicago16px } from "../../styledMixins";


function Frame382(props) {
  const { children, className } = props;

  return (
    <Frame38 className={`frame-38-7 ${className || ""}`}>
      <GreatCustomerServi className="great-customer-servi-1">
        <span className="spanyrzp9i manrope-normal-chicago-16px">{children}</span>
      </GreatCustomerServi>
    </Frame38>
  );
}

const Frame38 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
`;

const GreatCustomerServi = styled.p`
  ${ManropeNormalChicago16px}
  width: 100%;
  min-height: auto;
  max-height: 96px; // Limit the height to 4 lines (24px * 4)
  margin-bottom: 0;
  letter-spacing: 0.16px;
  line-height: 24px;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const GreatCustomerServi1 = styled.p`
  ${ManropeNormalChicago16px}
  .frame-38-7.frame-38-8  & {
    min-height: 144px;
    margin-bottom: -47px;
  }
`;

const GreatCustomerServi2 = styled.p`
  ${ManropeNormalChicago16px}

  .frame-38-7.frame-38-9  & {
    min-height: 360px;
    margin-bottom: -263px;
  }
`;

const GreatCustomerServi3 = styled.p`
  ${ManropeNormalChicago16px}

  .frame-38-7.frame-38-10  & {
    min-height: 216px;
    margin-bottom: -119px;
  }
`;

const GreatCustomerServi4 = styled.p`
  ${ManropeNormalChicago16px}

  .frame-38-7.frame-38-12  & {
    min-height: 360px;
    margin-bottom: -263px;
  }
`;

export default Frame382;
