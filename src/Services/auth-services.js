import axios from "axios";

const authService = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  withCredentials: true,
});

const errorHandler = (err) => {
  throw err;
};

// eslint-disable-next-line
export default {
  authService,

  getUser: (userId) => {
    return authService
      .get(`/getUser/${userId}`)
      .then((response) => response.data)
      .catch(errorHandler);
  },

  signup: (credentials) => {
    return authService
      .post("/signup", credentials)
      .then((response) => response.data)
      .catch(errorHandler);
  },

  loggedIn: () => {
    return authService
      .get("/loggedIn")
      .then((response) => response.data)
      .catch(errorHandler);
  },

  login: (credentials) => {
    return authService
      .post("/login", credentials)
      .then((response) => response.data)
      .catch(errorHandler);
  },

  logout: () => {
    localStorage.removeItem("loggedInUser");
    return authService
      .post("/logout", {})
      .then((response) => response.data)
      .catch(errorHandler);
  },

  toggleAddToFavorites: (id) => {
    return authService
      .put(`/toggleAddToFavorites/${id}`)
      .then((response) => response.data)
      .catch(errorHandler);
  },
};
