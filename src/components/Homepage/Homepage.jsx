import { Link } from "react-router-dom";
import FavoritePlaces from "../FavoritePlaces/FavoritePlaces";
import { StyledHomepage, ButtonStyled } from "./styles";

const Homepage = (props) => {
  return (
    <StyledHomepage>
      { props.userInSession
        ? <>
            <h1>Hi {props.userInSession.username} !</h1>
            <FavoritePlaces />
          </>
        : <>
            <h1>Welcome to myFavoritePlaces!</h1> 
            <Link to="login">
              <ButtonStyled>LOGIN</ButtonStyled>
            </Link>
            <Link to="signup">
              <ButtonStyled>SIGN UP</ButtonStyled>
            </Link>
          </>
      }
      
    </StyledHomepage>
  );
}

export default Homepage;
