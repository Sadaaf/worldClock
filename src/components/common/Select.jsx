import styled from "styled-components";

const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  font-size: 18px;
  padding: 5px 10px 5px 10px;
  background-color: #ffffff;
  border: 1px solid #c4d1eb;
  border-radius: 5px;
  color: #000000;
  cursor: pointer;
  outline: none;
  box-shadow: 3px 3px 2px 0px #e2e2e2;

  &:focus {
    background: #f2f2f2;
    border: 1px solid #5a7ec7;
    border-radius: 5px;
  }

  &::after {
    content: "";
    position: absolute;
    pointer-events: none;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
    width: 12px;
    height: 12px;
    background-color: #000000;
    clip-path: polygon(8% 17%, 0% 25%, 50% 84%, 100% 25%, 92% 17%, 50% 65%);
  }
`;

export default Select;
