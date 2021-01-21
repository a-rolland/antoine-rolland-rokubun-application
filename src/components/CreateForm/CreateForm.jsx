import React, { useState } from "react";
import favoritePlaceServices from "../../Services/favorite-place-service";
import Button from "../ElementalComponents/Button/Button";
import LocationSearchInput from "../LocationSearchInput/LocationSearchInput";
import Map from "../Map/Map";
import {
  StyledFavoritePlaceForm,
  Error,
  Form,
  Input,
  Textarea,
} from "./styles";

const CreateForm = (props) => {
  const [showError, setShowError] = useState(null)
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    place: null,
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

        <Button type="submit" text="ADD" />
        {showError && <Error>{showError}</Error>}
      </Form>
      
    </StyledFavoritePlaceForm>
  );
};

export default CreateForm;
