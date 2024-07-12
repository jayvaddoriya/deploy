import styled from "styled-components";
import { ManropeSemiBoldWhite16px } from "@/styledMixins";

const Button = ({ text, onClick }) => {
  return (
    <Frame4 className="frame-4 grow" onClick={onClick}>
      <BookAConsultation className="book-a-consultation">
        <span className="spant8ko9 manrope-semi-bold-white-16px">{text}</span>
      </BookAConsultation>
    </Frame4>
  )
}

export default Button;

const Frame4 = styled.button`
  border: none;
  cursor: pointer;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 228px;
  background-color: var(--international-orange);
  border-radius: 8px;
`;

const BookAConsultation = styled.div`
  ${ManropeSemiBoldWhite16px}
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  text-transform: uppercase;

  min-height: 22px;
  letter-spacing: 0;
`;