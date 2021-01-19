import React from "react";
import { StyledFavoritePlace, ButtonStyled } from "./styles";
import favoritePlaceService from "../../Services/favorite-place-service";

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
    <StyledFavoritePlace key={props.place.key}>
      <h2>{props.place.name}</h2>
      <p>{props.place.description}</p>
      <ButtonStyled onClick={() => deleteFavoritePlace(props.place._id)}>
        DELETE
      </ButtonStyled>
    </StyledFavoritePlace>
  );
};

export default FavoritePlace;
