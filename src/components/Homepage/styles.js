import styled, { keyframes } from "styled-components";

const slideup = keyframes`
  0%   {opacity: 0; top: 50%;}
  100% {opacity: 1; top: 40%;}
`;

export const Visitor = styled.div`
  position: absolute; 
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%); 
  animation: ${slideup} 1s;
`;

export const StyledHomepage = styled.div`
  text-align: center;

`;

export const FavoritePlacesListContainer = styled.ul`
  margin: 0 20px;
  padding: 0;
`;

export const ButtonStyled = styled.button`
  padding: 14px 20px 12px;
  margin: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: lightsteelblue;
  }
`;
