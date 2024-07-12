import React from "react";
import styled from "styled-components";
import { ManropeSemiBoldNewCar16px } from "../../styledMixins";


function Frame39(props) {
  const { spanText, tablerChevronRight, className } = props;

  return (
    <Frame391 className={`frame-39 ${className || ""}`}>
      <Samuel className="samuel">
        <span className="span3t8co manrope-semi-bold-new-car-16px">{spanText}</span>
      </Samuel>
      {/* <TablerchevronRight className="tablerchevron-right-1" src={tablerChevronRight} alt="tabler:chevron-right" /> */}
    </Frame391>
  );
}

const Frame391 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 336px;
  gap: 155px;

  &.frame-39.frame-39-1 {
    gap: 243px;
  }

  &.frame-39.frame-39-2 {
    gap: 209px;
  }

  &.frame-39.frame-39-3 {
    gap: 186px;
  }

  &.frame-39.frame-39-4 {
    gap: 236px;
  }

  &.frame-39.frame-39-5 {
    gap: 67px;
  }
`;

const Samuel = styled.div`
  ${ManropeSemiBoldNewCar16px}
  min-height: 22px;
  min-width: 157px;
  letter-spacing: 0.16px;
  line-height: normal;
`;

const TablerchevronRight = styled.img`
  width: 24px;
  height: 24px;
`;

const Samuel1 = styled.div`
  ${ManropeSemiBoldNewCar16px}

  .frame-39.frame-39-1  & {
    min-width: 69px;
  }
`;

const Samuel2 = styled.div`
  ${ManropeSemiBoldNewCar16px}

  .frame-39.frame-39-2  & {
    min-width: 103px;
  }
`;

const Samuel3 = styled.div`
  ${ManropeSemiBoldNewCar16px}

  .frame-39.frame-39-3  & {
    min-width: 126px;
  }
`;

const Samuel4 = styled.div`
  ${ManropeSemiBoldNewCar16px}

  .frame-39.frame-39-4  & {
    min-width: 76px;
  }
`;

const Samuel5 = styled.div`
  ${ManropeSemiBoldNewCar16px}

  .frame-39.frame-39-5  & {
    min-width: 245px;
  }
`;

export default Frame39;
