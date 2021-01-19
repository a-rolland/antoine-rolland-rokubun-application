import styled, { } from "styled-components";

// const slideup = (top0, top100) => keyframes`
//   0%   {opacity: 0; top: ${top0};}
//   100% {opacity: 1; top: ${top100};}
// `;

export const StyledHomepage = styled.div`
  text-align: center;
`;

export const ButtonStyled = styled.button`
  padding: 14px 20px 12px;
  margin: 8px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme};
  color: ${(props) => props.color};
  width: ${(props) => props.width};

  &:hover {
    cursor: pointer;
    background-color: lightsteelblue;
  }
`;

ButtonStyled.defaultProps = {
  theme: "white",
  color: "black",
};
