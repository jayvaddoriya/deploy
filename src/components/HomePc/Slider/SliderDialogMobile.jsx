import React, { useEffect } from 'react';
import styled from 'styled-components';

function SliderDialog({ value, isFlipped }) {
    useEffect(() => console.log(isFlipped), [])
    return (
        <SVGWrapper>
            {/* <SVGContainer isFlipped={isFlipped}>
        <svg width="157" height="92" viewBox="0 0 157 92" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 8C1.5 4.41015 4.41015 1.5 8 1.5H149C152.59 1.5 155.5 4.41015 155.5 8V68C155.5 71.5898 152.59 74.5 149 74.5H26.6069C24.5952 74.5 22.6353 75.1386 21.0098 76.3239L2.29459 89.9704C1.96417 90.2114 1.5 89.9754 1.5 89.5664V76V8Z" stroke="#1546C5" stroke-width="3"/>
        </svg>
      </SVGContainer> */}
            {isFlipped ? (
                <svg width="110" height="73" viewBox="0 0 110 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M102 1.5H8C4.41015 1.5 1.5 4.41015 1.5 8V47C1.5 50.5899 4.41015 53.5 8 53.5H83.393C85.4048 53.5 87.3647 54.1386 88.9902 55.3239L107.705 68.9704C108.036 69.2114 108.5 68.9754 108.5 68.5664V55V8C108.5 4.41015 105.59 1.5 102 1.5Z" stroke="#1546C5" strokeWidth="3"/>
                </svg>
            ) : (
                <svg width="110" height="71" viewBox="0 0 110 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 8C1.5 4.41015 4.41015 1.5 8 1.5H102C105.59 1.5 108.5 4.41015 108.5 8V47C108.5 50.5899 105.59 53.5 102 53.5H26.607C24.5952 53.5 22.6353 54.1386 21.0098 55.3239L2.29458 68.9704C1.96417 69.2114 1.5 68.9754 1.5 68.5664V55V8Z" stroke="#1546C5" strokeWidth="3"/>
                </svg>
            )
            }
            <TextWrapper>${value.toLocaleString('en-US')}</TextWrapper>
        </SVGWrapper>
    );
}

const SVGWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TextWrapper = styled.span`
  position: absolute;
  top: 77%;
  left: 50%;
  transform: translate(-50%, -90%);
  font-family: var(--font-family-manrope);
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  color: #000;
`;

export default SliderDialog;
