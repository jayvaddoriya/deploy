import React from "react";
import styled from "styled-components";
import { ManropeSemiBoldNewCar16px } from "../../styledMixins";


function Frame392(props) {
  const { spanText, className } = props;

  return (
    <Frame39 className={`frame-39-6 ${className || ""}`}>
      <Samuel className="">
        <span className="spanaa6lq manrope-semi-bold-new-car-16px">{spanText}</span>
      </Samuel>
      {/* <TablerchevronRight
        className="tablerchevron-right-3"
        src="/static/img/tabler-chevron-right-5@2x.png"
        alt="tabler:chevron-right"
      /> */}
    </Frame39>
  );
}

const Frame39 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 222px;
  gap: 41px;

  &.frame-39-6.frame-39-7 {
    gap: 129px;
  }

  &.frame-39-6.frame-39-8 {
    gap: 95px;
  }

  &.frame-39-6.frame-39-9 {
    gap: 72px;
  }

  &.frame-39-6.frame-39-10 {
    gap: 122px;
  }

  &.frame-39-6.frame-39-11 {
    gap: 114px;
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

  .frame-39-6.frame-39-7  & {
    min-width: 69px;
  }
`;

const Samuel2 = styled.div`
  ${ManropeSemiBoldNewCar16px}

  .frame-39-6.frame-39-8  & {
    min-width: 103px;
  }
`;

const Samuel3 = styled.div`
  ${ManropeSemiBoldNewCar16px}

  .frame-39-6.frame-39-9  & {
    min-width: 126px;
  }
`;

const Samuel4 = styled.div`
  ${ManropeSemiBoldNewCar16px}

  .frame-39-6.frame-39-10  & {
    min-width: 76px;
  }
`;

const Samuel5 = styled.div`
  ${ManropeSemiBoldNewCar16px}

  .frame-39-6.frame-39-11  & {
    min-width: 84px;
  }
`;

export default Frame392;
