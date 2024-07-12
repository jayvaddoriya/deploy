import React from "react";
import styled from "styled-components";
import { ManropeNormalMidnight16px } from "../../styledMixins";


function Frame452(props) {
  const { children, className } = props;

  return (
    <Frame45 className={`frame-45-1 ${className || ""}`}>
      <Placeholder className="placeholder-1">
        <span className="spanu4e69 manrope-normal-midnight-16px">{children}</span>
      </Placeholder>
    </Frame45>
  );
}

const Frame45 = styled.div`
  height: 60px;
  display: flex;
  padding: 18px 24px;
  align-items: flex-start;
  min-width: 400px;
  background-color: var(--mystic);
  border-radius: 8px;
`;

const Placeholder = styled.div`
  ${ManropeNormalMidnight16px}
  min-height: 22px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame452;
