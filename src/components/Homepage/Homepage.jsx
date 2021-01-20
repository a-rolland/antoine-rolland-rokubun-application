import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import favoritePlaceService from "../../Services/favorite-place-service";
import CreateForm from "../CreateForm/CreateForm";
import FavoritePlace from "../FavoritePlace/FavoritePlace";
import {
  StyledHomepage,
  ButtonStyled,
  FavoritePlacesListContainer,
  Visitor
} from "./styles";

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
          <p>Here is a list of your favorite places</p>
          <ButtonStyled onClick={toggleForm}>
            {displayForm ? "CLOSE" : "ADD A NEW FAVORITE PLACE"}
          </ButtonStyled>
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
            <ButtonStyled>LOGIN</ButtonStyled>
          </Link>
          <Link to="signup">
            <ButtonStyled>SIGN UP</ButtonStyled>
          </Link>
        </Visitor>
      )}
    </StyledHomepage>
  );
};

export default Homepage;
