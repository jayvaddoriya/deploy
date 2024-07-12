import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const HorizontalScroll = ({ children }) => {
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef();
  let initialX, scrollStartX;

  const handleMouseDown = (event) => {
    initialX = event.clientX;
    scrollStartX = containerRef.current.scrollLeft;
    setDragging(true);
  };

  const handleMouseMove = (event) => {
    if (!dragging) return;
    const deltaX = initialX - event.clientX;
    const newScrollX = scrollStartX + deltaX;
    containerRef.current.scrollLeft = newScrollX;
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <Frame53 className="frame53" ref={containerRef}>
      <Rectangle2
        className="rectangle2"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      ></Rectangle2>
      {children}
    </Frame53>
  );
};

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 736px;
  height: 12px;
  top: 2739px;
  left: 413px;
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

const Rectangle2 = styled.div`
  position: absolute;
  width: 66px;
  height: 12px;
  top: 0;
  left: 0;
  background-color: var(--astronaut);
  border-radius: 20px;
  cursor: pointer;
`;

const Frame53 = styled.div`
  position: absolute;
  height: 307px;
  top: 2366px;
  left: 100px;
  display: flex;
  align-items: flex-start;
  min-width: 2560px;
  gap: 32px;
  overflow-x: scroll;
`;

export default HorizontalScroll;
