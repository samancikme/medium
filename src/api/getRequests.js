import axios from "axios"
import {
  fetchedAuthData,
  fetchedPostData,
  fetchedProfileData,
  fetchingAuthData,
  fetchingPostData,
  fetchingProfileData,
} from "../store/action"

export const getAllAuth = (url) => {
  return async (dispatch) => {
    try {
      dispatch(fetchingAuthData())
      const res = await axios.get(`${url}/authors`)
      dispatch(fetchedAuthData(res.data))
    } catch (err) {
      console.log(err)
    }
  }
}




export const getAllPosts = (url) => {
  return async (dispatch) => {
    try {
      dispatch(fetchingPostData())
      const res = await axios.get(`${url}/posts`)
      dispatch(fetchedPostData(res.data))
    } catch (err) {
      console.log(err)
    }
  }
}



export const getProfile = (url) => {
  const token = localStorage.getItem("token")
  return async (dispatch) => {
    try {
      dispatch(fetchingProfileData())
      const res = await axios.get(`${url}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      console.log(res)
      dispatch(fetchedProfileData(res.data.author))
    } catch (err) {
      console.log(err)
    }
  }
}