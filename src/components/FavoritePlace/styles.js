import styled from "styled-components";

export const StyledFavoritePlace = styled.li`
  list-style: none;
  margin: 20px auto;
`;

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 800px;
`;

export const MapContainer = styled.div`
  height: auto; 
  width: 300px;
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 300px;
margin-left: 50px;
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
