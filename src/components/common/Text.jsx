import styled from "styled-components";

const Text = styled.div`
  font-size: ${(props) => (props.size ? props.size : "1rem")};
  ${(props) => props.$padding && "padding:" + props.$padding};
  ${(props) => props.$border && "border:" + props.$border};
  display: ${(props) => (props.display ? props.display : "inline-block")};
`;

export default Text;
