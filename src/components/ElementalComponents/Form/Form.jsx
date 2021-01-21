import React, { useState } from "react";
import Button from "../Button/Button";

// Create
import LocationSearchInput from "../../LocationSearchInput/LocationSearchInput";
import Map from "../../Map/Map";
import favoritePlaceServices from "../../../Services/favorite-place-service";

// Auth
import { Link } from "react-router-dom";
import authServices from "../../../Services/auth-services";

import {
  StyledForm, //Change
  Error,
  FormInner,
  Input,
  Message, // Auth
  Textarea, // Create
} from "./styles";

const Form = (props) => {
  const initialState = props.authForm
    ? { username: "", password: "" }
    : { name: "", description: "", place: null };
  const [showError, setShowError] = useState(null);
  const [formState, setFormState] = useState(initialState);

  const handleFormSubmit = (event, formObject) => {
    event.preventDefault();
    const dynamicService = props.login
      ? authServices.login(formObject)
      : props.signup
      ? authServices.signup(formObject)
      : favoritePlaceServices.postNewPlace(formObject);

    dynamicService
      .then((response) => {
        if (props.createPlaceForm) {
          console.log("New favorite place created :", response);
          props.handleCloseForm();
          props.handleRefreshFavoritePlaces();
        } else {
          localStorage.setItem("loggedInUser", JSON.stringify(response));
          props.getUser(response);
          props.history.push("/");
        }
      })
      .catch((error) => {
        console.log(
          props.createPlaceForm
            ? "Error while login/signup"
            : "Error creating a new favorite place"
        );
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

  const setPlace = (newPlace) => {
    setFormState((state) => ({
      ...state,
      place: {
        address: newPlace.address,
        lat: parseFloat(newPlace.lat),
        lng: parseFloat(newPlace.lng),
      },
    }));
  };

  const fields = props.fields.map((field) => {
    return field.input === "input" ? (
      <React.Fragment key={field.name}>
        <label>{field.label}</label>
        <Input
          type={field.type}
          name={field.name}
          value={formState[field.name]}
          placeholder={field.placeholder}
          onChange={handleChange}
        />
      </React.Fragment>
    ) : (
      <React.Fragment key={field.name}>
        <label>{field.label}</label>
        <Textarea
          type={field.type}
          name={field.name}
          value={formState[field.name]}
          placeholder={field.placeholder}
          onChange={handleChange}
        />
      </React.Fragment>
    );
  });

  return (
    <StyledForm>
      <FormInner onSubmit={(event) => handleFormSubmit(event, formState)}>
        <h3>
          {props.login
            ? "LOGIN"
            : props.signup
            ? "SIGNUP"
            : "NEW FAVORITE PLACE"}
        </h3>
        {fields}
        {props.createPlaceForm && (
          <React.Fragment>
            <label>Find the place</label>
            <LocationSearchInput setPlace={setPlace} />
            {formState.place && (
              <React.Fragment>
                <p>Is this the correct place ?</p>
                <Map
                  formMap
                  key={formState.place.address}
                  address={formState.place.address}
                  lat={formState.place.lat}
                  lng={formState.place.lng}
                  zoom="14"
                />
              </React.Fragment>
            )}
          </React.Fragment>
        )}

        <Button
          type="submit"
          text={props.login ? "LOGIN" : props.signup ? "SIGN UP" : "ADD"}
        />
        {showError && <Error>{showError}</Error>}
      </FormInner>
      {(props.login || props.signup) && (
        <Message style={{ textAlign: "center" }}>
          {props.authMessage}
          <Link to={`${props.formRedirectLink}`}>{props.formRedirectText}</Link>
        </Message>
      )}
    </StyledForm>
  );
};

export default Form;
