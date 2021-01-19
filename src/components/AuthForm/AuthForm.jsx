import React, { useState } from "react";
import { Link } from "react-router-dom";
import authServices from "../../Services/auth-services";
import { StyledAuthForm, Error, ButtonStyled, Form, Input } from "./styles";

const AuthForm = (props) => {
  const [showError, setShowError] = useState("");
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  })

  const handleFormSubmit = (event, formObject) => {
    event.preventDefault();
    const dynamicService = props.login
      ? authServices.login(formObject)
      : authServices.signup(formObject);

    dynamicService
      .then((response) => {
        localStorage.setItem("loggedInUser", JSON.stringify(response));
        props.getUser(response);
        props.history.push("/");
      })
      .catch((error) => {
        console.log("Error while login/signup");
        setShowError(error.response.data.message);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  return (
    <StyledAuthForm>
      <Form onSubmit={(event) => handleFormSubmit(event, formState)}>
        <h3>{props.login ? "LOGIN" : "SIGNUP"}</h3>

        <React.Fragment>
          <label>Username</label>
          <Input
            type="text"
            name="username"
            value={formState.username}
            placeholder="Enter your username"
            onChange={handleChange}
          />
        </React.Fragment>
        <React.Fragment>
          <label>Password</label>
          <Input
            type="text"
            name="password"
            value={formState.password}
            placeholder="*******"
            onChange={handleChange}
            onSubmit={(event) => handleFormSubmit(event, formState)} 
          />
        </React.Fragment>

        <ButtonStyled type="submit">
          {props.login ? "LOGIN" : "SIGN UP"}
        </ButtonStyled>
      </Form>
      <p style={{"textAlign": "center"}}>
        {props.authMessage}
        <Link to={`${props.formRedirectLink}`}>{props.formRedirectText}</Link>
      </p>
      {showError && <Error>{showError}</Error>}
    </StyledAuthForm>
  );
};

export default AuthForm;
