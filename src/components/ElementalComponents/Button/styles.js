import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 14px 20px 12px;
  margin: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Comfortaa', cursive;

  &:hover {
    cursor: pointer;
    background-color: lightsteelblue;
  }

  ${props => props.descriptionButton && `
    margin: 30px 0;

    @media (max-width: 667px) {
    margin: 20px 0 10px;
  }
  `}
`;