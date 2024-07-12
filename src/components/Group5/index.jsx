import React from "react";
import styled from "styled-components";


function Group5(props) {
  const { className } = props;

  return (
    <Group51 className={`group-5 ${className || ""}`}>
      <OverlapGroup className="overlap-group">
        <Rectangle className="rectangle"></Rectangle>
        <Rectangle1 className="rectangle-2"></Rectangle1>
      </OverlapGroup>
    </Group51>
  );
}

const Group51 = styled.div`
  z-index: 2;
  align-self: center;
  margin-top: 2304px;
  display: flex;
  align-items: flex-start;
  min-width: 736px;
  border-radius: 20px;

  &.group-5.group-5-1 {
    margin-top: 3031px;
    z-index: unset;
  }
`;

const OverlapGroup = styled.div`
  width: 736px;
  height: 12px;
  position: relative;
`;

const Rectangle = styled.div`
  position: absolute;
  width: 736px;
  height: 8px;
  top: 2px;
  left: 0;
  background-color: var(--coconut);
  border-radius: 20px;
`;

const Rectangle1 = styled.div`
  position: absolute;
  width: 66px;
  height: 12px;
  top: 0;
  left: 0;
  background-color: var(--blaze-orange);
  border-radius: 20px;
`;

export default Group5;
