import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authServices from "../../Services/auth-services";
import { StyledNavbar, Brand, Logout } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
const publicPath = process.env.PUBLIC_URL;

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
        <Brand src={`${publicPath}/logo_white.png`} alt="Brand" />
      </Link>
      {state.loggedInUser && (
        <Logout>
          <FontAwesomeIcon icon={faSignOutAlt} onClick={logoutUser} />
        </Logout>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
