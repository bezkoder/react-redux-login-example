import axios from "axios";

const API_URL = "https://my-hope-backend.onrender.com";

const register = (email, password, dateOfBirth, firstName, lastName) => {
  return axios.post(API_URL + "/user/new", {
    email,
    password,
    dateOfBirth,
    name: {
      firstName,
      lastName
    }
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/user/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
