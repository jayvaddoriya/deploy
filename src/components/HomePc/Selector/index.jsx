import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

function Selector({ setPayoffMonths, handleSliderChange, sliderValue }) {

  const [selectedOption, setSelectedOption] = useState(42);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectorClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    handleSliderChange(sliderValue, option);
  };

  const handleChevronClick = (e) => {
    e.stopPropagation();
    toggleDropdown();
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <CloseOnClickOutside onClick={closeDropdown}>
      <CustomDropdownWrapper>
        <DisplayedValue onClick={toggleDropdown} isOpen={isDropdownOpen}>
          {selectedOption} Months
          <ChevronDownIcon onClick={handleChevronClick}>
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 9L12 15L6 9" stroke="#1546C5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </ChevronDownIcon>
        </DisplayedValue>
        {isDropdownOpen && (
          <OptionsList>
            {[24, 36, 42].map((option) => (
              <Option key={option} onClick={() => handleSelectorClick(option)}>
                {option} Months
              </Option>
            ))}
          </OptionsList>
        )}
      </CustomDropdownWrapper>
    </CloseOnClickOutside>
  );
}

const CloseOnClickOutside = ({ children, onClick }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClick]);

  return <div ref={ref}>{children}</div>;
};

const CustomDropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DisplayedValue = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--midnight);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-l);
  font-weight: 600;
  font-style: normal;
  width: 180px;
  height: 60px;
  padding: 6px 12px;
  box-shadow: ${props => props.isOpen ? '0px 4px 6px rgba(0, 0, 0, 0.1);' : 'none'};
  background-color: white;
  border: #E4E9F8 3px solid;
  border-radius: 8px;
`;

const ChevronDownIcon = styled.span`
  cursor: pointer;
  margin-left: 20px;
`;

const OptionsList = styled.div`
  position: absolute;
  width: 170px;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 1;
  color: var(--midnight);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-m);
  font-weight: 600;
  font-style: normal;
`;

const Option = styled.div`
  cursor: pointer;
  padding: 6px 12px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export default Selector;