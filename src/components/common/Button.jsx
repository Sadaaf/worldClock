import styled from "styled-components";

const Button = styled.button`
  font-family: helvetica;
  color: #ffffff !important;
  font-size: 1rem;
  padding: 12px 25px;
  border-radius: 14px;
  border: 2px solid #000000;
  background: #000000;
  margin: 1rem 0;

  &:hover {
    color: #000000 !important;
    background: #ffffff;
    cursor: pointer;
  }
`;

export default Button;
