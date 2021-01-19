import styled from "styled-components";

export const StyledFavoritePlaceForm = styled.div`
  text-align: center;
  color: black;
`;

export const Error = styled.p`
  color: red;
  border: solid red 1px;
  border-radius: 4px;
  max-width: 350px;
  padding: 5px 5px 8px;
  margin: 0 auto;
  background-color: rgba(241, 169, 160, 0.2);

  @media (min-width: 768px) {
    width: 350px;
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin: 20px auto;
  max-width: 350px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  &.btn {
    &:hover {
      cursor: pointer;
      background-color: lightsteelblue;
    }
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: none;

  &.btn {
    &:hover {
      cursor: pointer;
      background-color: lightsteelblue;
    }
  }
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
