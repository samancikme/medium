import axios from "axios";
import { authorization, setUserStatus } from "../store/action";
import { getAllAuth, getAllPosts, getProfile } from "./getRequests";
import {
  errLogD,
  errPostCrD,
  errPostCrL,
  errProCrD,
  errProCrL,
  errRegD,
  errRegL,
  succesLogD,
  succesLogL,
  succesPostCrD,
  succesPostCrL,
  succesProCrL,
  succesRegD,
  succesRegL,
} from "../constants/toasts";

const mode = localStorage.getItem("medium-theme");
const theme = mode == 'true' ? true : false ;

export const registration = (url, value, { resetForm }) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${url}/register`, value, {
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log(res);
      dispatch(authorization("login"));
      resetForm();
      theme ? succesRegL() : succesRegD();
      console.log(res.data);
    } catch (err) {
      resetForm();
      console.log(err);
      theme
        ? errRegL(err.response.data.message)
        : errRegD(err.response.data.message);
    }
  };
};

export const logIn = (url, value, { resetForm }) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${url}/login`, value, {
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log(theme)
      theme ? succesLogL() : succesLogD();
      dispatch(setUserStatus());
      dispatch(getProfile(url));
      resetForm();
      localStorage.setItem("token", res.data.token);
      setTimeout(() => dispatch(authorization("login")) , 2000)
    } catch (err) {
      resetForm();
      console.log(err);
      theme
        ? errRegL(err.response.data.message)
        : errLogD(err.response.data.message);
    }
  };
};

// Set Profile



export const createProfile = (url, values, resetForm) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(`${url}/profile`, values, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Request muvaffaqiyatli:", res.data);
      dispatch(getAllPosts(url));
      dispatch(getAllAuth(url))
      theme ? succesProCrL() : succesProCrL();
      dispatch(getProfile(url));
      resetForm();
    } catch (err) {
      console.log("Xatolik yuz berdi:", err);
      resetForm();
      theme
        ? errProCrL(err.response.data.message)
        : errProCrD(err.response.data.message);
    }
  };
};


export const createPost = (url, values, resetForm) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(`${url}/posts`, values, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Request muvaffaqiyatli:", res.data);
      theme ? succesPostCrL() : succesPostCrD();
      dispatch(getAllPosts(url));
      resetForm();
    } catch (err) {
      console.log("Xatolik yuz berdi:", err);
      resetForm();
      theme
        ? errPostCrL(err.response.data.message)
        : errPostCrD(err.response.data.message);
    }
  };
};
