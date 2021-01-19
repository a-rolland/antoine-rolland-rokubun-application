import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authServices from "../../Services/auth-services";
import { StyledNavbar, Brand, ButtonStyled } from "./styles";

const Navbar = (props) => {
  const initialState = { loggedInUser: null };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState({ loggedInUser: props.userInSession });
  }, [props.userInSession]);

  const logoutUser = () => {
    authServices.logout().then(() => {
      setState({ loggedInUser: null });
      props.getUser(null);
    });
  };

  return (
    <StyledNavbar>
      <Link to="/">
        <Brand>
          myFavoritePlaces
        </Brand>
      </Link>
      { state.loggedInUser &&
        <ButtonStyled onClick={logoutUser}>
          LOGOUT
        </ButtonStyled>
      }
    </StyledNavbar>
  );
}

export default Navbar;
