import styled from "styled-components";

const Input = styled.input`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 30%;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  width: 100%;
  outline: none;
  background: #ffffff;
  color: #000000;
  border: 1px solid #c4d1eb;
  border-radius: 14px;
  box-shadow: 3px 3px 2px 0px #e2e2e2;
  transition: 0.3s ease;

  &:focus {
    background: #ffffff;
    border: 1px solid #5a7ec7;
    border-radius: 10px;
  }

  &::placeholder {
    color: #dddddd;
  }
`;

export default Input;
