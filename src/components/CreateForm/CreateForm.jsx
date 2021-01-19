import React, { useState } from "react";
import { Link } from "react-router-dom";
import authServices from "../../Services/auth-services";
import favoritePlaceServices from "../../Services/favorite-place-service";
import {
  StyledFavoritePlaceForm,
  Error,
  ButtonStyled,
  Form,
  Input,
  Textarea,
} from "./styles";

const CreateForm = (props) => {
  const [showError, setShowError] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    place: {
      address: "",
      lat: 0,
      lng: 0,
    },
  });

  const handleFormSubmit = (event, formObject) => {
    event.preventDefault();

    favoritePlaceServices
      .postNewPlace(formObject)
      .then((response) => {
        console.log("New favorite place created :", response);
        props.handleCloseForm();
        props.handleRefreshFavoritePlaces();
      })
      .catch((error) => {
        console.log("Error creating a new favorite place");
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
    <StyledFavoritePlaceForm>
      <Form onSubmit={(event) => handleFormSubmit(event, formState)}>
        <h3>NEW FAVORITE PLACE</h3>

        <React.Fragment>
          <label>Name</label>
          <Input
            type="text"
            name="name"
            value={formState.name}
            placeholder="Ex: 'Parc de la Ciutadella'"
            onChange={handleChange}
          />
        </React.Fragment>
        <React.Fragment>
          <label>Description</label>
          <Textarea
            type="text"
            name="description"
            value={formState.password}
            placeholder="Ex: 'A nice park in the center of Barcelona."
            onChange={handleChange}
            onSubmit={(event) => handleFormSubmit(event, formState)}
          />
        </React.Fragment>

        <ButtonStyled type="submit">ADD</ButtonStyled>
      </Form>
      <p style={{ textAlign: "center" }}>
        {props.authMessage}
        <Link to={`${props.formRedirectLink}`}>{props.formRedirectText}</Link>
      </p>
      {showError && <Error>{showError}</Error>}
    </StyledFavoritePlaceForm>
  );
};

export default CreateForm;