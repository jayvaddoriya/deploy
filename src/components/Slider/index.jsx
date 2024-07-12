import React, { useState, useEffect, useRef} from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import SliderDialog from './SliderDialog';


export default function CircularSlider({ value, onChange, payoffMonths }) {
  const sliderContainerRef = useRef(null);
  const sliderControlRef = useRef(null);
  const [boundOffset, setBoundOffset] = useState(0);
  const [endX, setEndX] = useState(0);
  const [sliderControlLeft, setSliderControlLeft] = useState('2%');

  useEffect(() => {
    if (sliderContainerRef.current && sliderControlRef.current) {
      const sliderWidth = sliderContainerRef.current.clientWidth;
      const sliderControlWidth = sliderControlRef.current.clientWidth;
      const newBoundOffset = (sliderControlWidth * 1.5) / sliderWidth * 100;
      setBoundOffset(newBoundOffset);
      setEndX(sliderWidth - sliderControlWidth);
      setSliderControlLeft((sliderControlWidth / 2) * -1);
    }
  }, [sliderContainerRef, sliderControlRef]);

  const onDrag = (e, data) => {
    const percentage = (data.x / endX);
    const value = (Math.round(percentage * 90000 + 10000));
    onChange(value, payoffMonths);
  };


  return (
    <SliderContainer ref={sliderContainerRef}>
      <Draggable
        axis="x"
        bounds={{ left: 0, right: endX }}
        onDrag={onDrag}
      >
        <SliderControl left={sliderControlLeft} ref={sliderControlRef}>
          <DialogContainer>
            <SliderDialog value={value}>
            </SliderDialog>
          </DialogContainer>
        </SliderControl>
      </Draggable>
    </SliderContainer>
  );
}


const SliderContainer = styled.div`
  width: 100%;
  height: 5px;
  position: relative;
  background-color: #eee;
  border-radius: 10px;
  margin-top: auto;
`;

const SliderControl = styled.span`
  width: 20px;
  height: 20px;
  background-color: #2d2dff;
  border-radius: 50%;
  position: absolute;
  left: ${props => props.left || '2%'};
  top: -7px;
  cursor: pointer;
`;

const DialogContainer = styled.span`
  width: 80px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  color: #fff;
  padding: 2px;
  border-radius: 3px;
  position: absolute;
  left: 5px;
  top: -105px;
`;
