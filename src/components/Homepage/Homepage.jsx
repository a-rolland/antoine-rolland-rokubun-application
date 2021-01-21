import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import favoritePlaceService from "../../Services/favorite-place-service";
import CreateForm from "../CreateForm/CreateForm";
import Button from "../ElementalComponents/Button/Button";
import FavoritePlace from "../FavoritePlace/FavoritePlace";
import { StyledHomepage, FavoritePlacesListContainer, Visitor } from "./styles";

const Homepage = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [favoritePlaces, setFavoritePlaces] = useState([]);

  const toggleForm = () => {
    setDisplayForm(!displayForm);
  };

  const closeForm = () => {
    setDisplayForm(false);
  };

  useEffect(() => {
    if (props.userInSession) {
      favoritePlaceService
        .getFavoritePlaces({ author: props.userInSession.username })
        .then((response) => {
          setFavoritePlaces(response);
        })
        .catch((err) => {
          console.log("Error while getting favorite places");
        });
    }
  }, [props.userInSession]);

  const refreshFavoritePlaces = () => {
    favoritePlaceService
      .getFavoritePlaces({ author: props.userInSession.username })
      .then((response) => {
        setFavoritePlaces(response);
      })
      .catch((err) => {
        console.log("Error while getting favorite places");
      });
  };

  const favoritePlacesList = favoritePlaces.map((place) => {
    return (
      <FavoritePlace
        key={place._id}
        place={place}
        handleRefreshFavoritePlaces={refreshFavoritePlaces}
      />
    );
  });

  return (
    <StyledHomepage>
      {props.userInSession ? (
        <>
          <h1>Hi {props.userInSession.username} !</h1>
          <Button
            handleClick={toggleForm}
            text={displayForm ? "CLOSE" : "ADD A NEW FAVORITE PLACE"}
          />
          {favoritePlaces.length > 0 && (
            <h2>Here is a list of your favorite places :</h2>
          )}
          {displayForm && (
            <CreateForm
              userInSession={props.userInSession}
              handleCloseForm={closeForm}
              handleRefreshFavoritePlaces={refreshFavoritePlaces}
            />
          )}
          {favoritePlaces && (
            <FavoritePlacesListContainer>
              {favoritePlacesList}
            </FavoritePlacesListContainer>
          )}
        </>
      ) : (
        <Visitor>
          <h1>Welcome to myFavoritePlaces!</h1>
          <Link to="login">
            <Button text="LOGIN" />
          </Link>
          <Link to="signup">
            <Button text="SIGN UP" />
          </Link>
        </Visitor>
      )}
    </StyledHomepage>
  );
};

export default Homepage;
