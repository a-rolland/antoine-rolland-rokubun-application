import React from "react";
import Form from "../ElementalComponents/Form/Form";

const AuthForm = (props) => {
  const authFields = [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      input: "input",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "******",
      input: "input",
    },
  ];

  return <Form authForm {...props} fields={authFields} />;
};

export default AuthForm;
