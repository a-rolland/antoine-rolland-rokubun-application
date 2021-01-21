import styled from "styled-components";

export const StyledAuthForm = styled.div`
  text-align: center;
  color: black;
`;

export const Error = styled.p`
  color: black;
  border: solid red 1px;
  border-radius: 4px;
  max-width: 350px;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: rgba(241, 169, 160, 0.15);

  @media (min-width: 768px) {
    width: 350px;
    margin: 10px auto 0;
  }
`;

export const Message = styled.p`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 10px 20px;
  margin: 20px auto;
  max-width: 350px;

  a {
    text-decoration: none;
    color: blue;
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
`;