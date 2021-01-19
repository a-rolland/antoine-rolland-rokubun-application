import axios from "axios";

const favoritePlaceServices = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  withCredentials: true,
});

const errorHandler = (err) => {
  throw err;
};

export default {
  favoritePlaceServices,

  postNewPlace: (formFields) => {
    return favoritePlaceServices
      .post("/newPlace", formFields)
      .then((response) => response.data)
      .catch(errorHandler);
  },

  getFavoritePlaces: () => {
    return favoritePlaceServices
      .get("/favoritePlaces")
      .then((response) => response.data)
      .catch(errorHandler);
  },

  deletePlace: (id) => {
    return favoritePlaceServices
      .delete(`/favoritePlaces/${id}`)
      .then((response) => response.data)
      .catch(errorHandler);
  },
};
