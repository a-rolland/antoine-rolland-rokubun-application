import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import favoritePlaceService from "../../Services/favorite-place-service";
import CreateForm from "../CreateForm/CreateForm";
import FavoritePlaces from "../FavoritePlaces/FavoritePlaces";
import { StyledHomepage, ButtonStyled } from "./styles";

const Homepage = (props) => {
  const [loggedInUser, setLoggedInUser] = useState(props.userInSession);
  const [displayForm, setDisplayForm] = useState(false);
  const [favoritePlaces, setFavoritePlaces] = useState([]);

  const toggleForm = () => {
    setDisplayForm(!displayForm);
  };

  const closeForm = () => {
    setDisplayForm(false);
  };

  useEffect(() => {
    favoritePlaceService
      .getFavoritePlaces({ author: loggedInUser.username })
      .then((response) => {
        setFavoritePlaces(response);
      })
      .catch((err) => {
        console.log("Error while getting favorite places");
      });
  }, [loggedInUser.username]);

  const refreshFavoritePlaces = () => {
    favoritePlaceService
      .getFavoritePlaces({ author: loggedInUser.username })
      .then((response) => {
        setFavoritePlaces(response);
      })
      .catch((err) => {
        console.log("Error while getting favorite places");
      });
  };

  const deleteFavoritePlace = (id) => {
    favoritePlaceService
      .deletePlace(id)
      .then((response) => {
        console.log("Place deleted:", response);
        refreshFavoritePlaces();
      })
      .catch((err) => {
        console.log("Error while deleting favorite place");
      });
  };

  const favoritePlacesList = favoritePlaces.map((place) => {
    return (
      <li key={place.name}>
        <h2>{place.name}</h2>
        <p>{place.description}</p>
        <ButtonStyled onClick={() => deleteFavoritePlace(place._id)}>
          DELETE
        </ButtonStyled>
      </li>
    );
  });

  return (
    <StyledHomepage>
      {props.userInSession ? (
        <>
          <h1>Hi {props.userInSession.username} !</h1>
          <FavoritePlaces />
          {displayForm && (
            <CreateForm
              userInSession={props.userInSession}
              handleCloseForm={closeForm}
              handleRefreshFavoritePlaces={refreshFavoritePlaces}
            />
          )}
          <ButtonStyled onClick={toggleForm}>
            {displayForm ? "CLOSE" : "ADD A NEW FAVORITE PLACE"}
          </ButtonStyled>
          {favoritePlaces && favoritePlacesList}
        </>
      ) : (
        <>
          <h1>Welcome to myFavoritePlaces!</h1>
          <Link to="login">
            <ButtonStyled>LOGIN</ButtonStyled>
          </Link>
          <Link to="signup">
            <ButtonStyled>SIGN UP</ButtonStyled>
          </Link>
        </>
      )}
    </StyledHomepage>
  );
};

export default Homepage;
