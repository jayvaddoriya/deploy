import React from 'react';
import styled from 'styled-components';

function SliderDialog({ value }) {
  return (
    <SVGWrapper>
      <svg width="157" height="92" viewBox="0 0 157 92" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 8C1.5 4.41015 4.41015 1.5 8 1.5H149C152.59 1.5 155.5 4.41015 155.5 8V68C155.5 71.5898 152.59 74.5 149 74.5H26.6069C24.5952 74.5 22.6353 75.1386 21.0098 76.3239L2.29459 89.9704C1.96417 90.2114 1.5 89.9754 1.5 89.5664V76V8Z" stroke="#1546C5" strokeWidth="3"/>
      </svg>
      <TextWrapper>${value.toLocaleString('en-US')}</TextWrapper>
    </SVGWrapper>
  );
}

const SVGWrapper = styled.div`
  position: relative;
  display: inline-block;

  @media (max-width: 600px){
    transform: translateY(30px);
    svg{
      width: 110px;
      height: auto;
    }
  }
`;

const TextWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -90%);
  font-family: var(--font-family-manrope);
  font-size: 32px;
  font-weight: 600;
  font-style: normal;
  color: #000;
  
  @media (max-width: 600px){
    font-size: 20px;
    transform: translate(-50%, -70%);
  }
`;

export default SliderDialog;
