import React from "react";
import styled from "styled-components";
import { ManropeNormalMidnight16px } from "../../styledMixins";


function Frame45(props) {
  const { children, className } = props;

  return (
    <Frame451 className={`frame-45 ${className || ""}`}>
      <Placeholder className="placeholder">
        <span className="spanjcvwvh manrope-normal-midnight-16px">{children}</span>
      </Placeholder>
    </Frame451>
  );
}

const Frame451 = styled.div`
  height: 60px;
  display: flex;
  padding: 18px 24px;
  align-items: flex-start;
  min-width: 508px;
  background-color: var(--mystic);
  border-radius: 8px;
`;

const Placeholder = styled.div`
  ${ManropeNormalMidnight16px}
  min-height: 22px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame45;
