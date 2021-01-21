import React from "react";
import { ButtonStyled } from "./styles";

const Button = (props) => {
  const liftClick = () => {
    props.handleClick && props.handleClick()
  }

  return (
    <ButtonStyled descriptionButton={props.descriptionButton} onClick={liftClick}>
      {props.text}
    </ButtonStyled>
  );
};

export default Button;
