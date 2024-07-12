import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import SliderDialog from './SliderDialogMobile';

const desktopTheme = {
    sliderControlSize: '20px',
    sliderHeight: '5px',
    sliderDialogWidth: '157px',
    sliderDialogHeight: '92px',
    dialogTextFontSize: '32px',
};

const mobileTheme = {
    sliderControlSize: '15px',
    sliderHeight: '4px',
    sliderDialogWidth: '110px',
    sliderDialogHeight: '64px',
    dialogTextFontSize: '24px',
};

export default function Slider({ value, onChange, payoffMonths }) {
    const sliderContainerRef = useRef(null);
    const sliderControlRef = useRef(null);
    const [boundOffset, setBoundOffset] = useState(0);
    const [endX, setEndX] = useState(0);
    const [sliderControlLeft, setSliderControlLeft] = useState('2%');
    const [isDialogFlipped, setIsDialogFlipped] = useState(false);


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

        // Calculate if the dialog box would go beyond the screen width, considering the SVG width (154px)
        const dialogWidthPercentage = parseFloat(sliderContainerRef.current.clientWidth) * .55;
        const dialogBeyondScreenWidth = (data.x + dialogWidthPercentage) >= window.innerWidth;
        // Update the state of dialog flipping
        setIsDialogFlipped(dialogBeyondScreenWidth);
    };


    const isMobile = true;

    return (
        <ThemeProvider theme={isMobile ? mobileTheme : desktopTheme}>
            <SliderContainer ref={sliderContainerRef}>
                <Draggable
                    axis="x"
                    bounds={{ left: 0, right: endX }}
                    onDrag={onDrag}
                >
                    <SliderControl left={sliderControlLeft} ref={sliderControlRef}>
                        <DialogContainer isFlipped={isDialogFlipped}>
                            <SliderDialog value={value} isFlipped={isDialogFlipped}>
                            </SliderDialog>
                        </DialogContainer>
                    </SliderControl>
                </Draggable>
            </SliderContainer>
        </ThemeProvider>
    );
}

const SliderContainer = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.sliderHeight};
  position: relative;
  background-color: #eee;
  border-radius: 10px;
  margin-top: 120px;
`;

const SliderControl = styled.span`
  width: ${({ theme }) => theme.sliderControlSize};
  height: ${({ theme }) => theme.sliderControlSize};
  background-color: #2d2dff;
  border-radius: 50%;
  position: absolute;
  left: ${props => props.left || '2%'};
  top: calc(-1 * ${({ theme }) => theme.sliderControlSize} / 2);
  cursor: pointer;
`;

const DialogContainer = styled.span`
  width: ${({ theme }) => theme.sliderDialogWidth};
  line-height: ${({ theme }) => theme.sliderDialogHeight};
  text-align: center;
  font-size: ${({ theme }) => theme.dialogTextFontSize};
  color: #fff;
  padding: 2px;
  border-radius: 3px;
  position: absolute;
  left: ${({ isFlipped }) => (isFlipped ? '-102px' : '5px')};
  top: calc(-1 * ${({ theme }) => theme.sliderDialogHeight} - 20px);
  /* transform: ${({ isFlipped }) => (isFlipped ? 'scale(-1,1)' : 'none')}; */
`;
