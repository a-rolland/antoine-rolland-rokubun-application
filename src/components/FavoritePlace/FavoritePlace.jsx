import React from "react";
import { StyledFavoritePlace, ButtonStyled, MapContainer, Description, Container } from "./styles";
import favoritePlaceService from "../../Services/favorite-place-service";
import Map from "../Map/Map"

const FavoritePlace = (props) => {
  const deleteFavoritePlace = (id) => {
    favoritePlaceService
      .deletePlace(id)
      .then((response) => {
        console.log("Place deleted:", response);
        props.handleRefreshFavoritePlaces()
      })
      .catch((err) => {
        console.log("Error while deleting favorite place");
      });
  };

  return (
    <StyledFavoritePlace>
      <Container>
        <MapContainer>
          <Map
            formMap
            key={props.place.place.address}
            address={props.place.place.address}
            lat={parseFloat(props.place.place.lat)}
            lng={parseFloat(props.place.place.lng)}
            zoom="14"
          />
        </MapContainer>
        <Description>
          <h2>{props.place.name}</h2>
          <p>{props.place.description}</p>
          <ButtonStyled onClick={() => deleteFavoritePlace(props.place._id)}>
            DELETE
          </ButtonStyled>
        </Description>
      </Container>
    </StyledFavoritePlace>
  );
};

export default FavoritePlace;
