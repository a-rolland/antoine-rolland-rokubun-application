import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 0;
  height: 50px;
  margin-bottom: 100px;

  a {
    text-decoration: none;
  }
`;

export const Brand = styled.h1`
  font-size: 40px;
  font-style: italic;
  /* font-family: 'Bubblegum Sans', cursive; */
  font-family: 'Chelsea Market', cursive;
  color: white;
`;

export const ButtonStyled = styled.button`
  position: absolute;
  right: 20px;
  top: 10px;
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
