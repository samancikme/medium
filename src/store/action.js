export const fetchingAuthData = () => {
  return {
    type: "FETCHING_AUTH_DATA",
  }
}
export const fetchedAuthData = (payload) => {
  return {
    type: "FETCHED_AUTH_DATA",
    payload,
  }
}







export const fetchingPostData = () => {
  return {
    type: "FETCHING_POST_DATA",
  }
}

export const fetchedPostData = (payload) => {
  return {
    type: "FETCHED_POST_DATA",
    payload,
  }
}







export const fetchingProfileData = () => {
  return {
    type: "FETCHING_PROFILE_DATA",
  }
}

export const fetchedProfileData = (payload) => {
  return {
    type: "FETCHED_PROFILE_DATA",
    payload,
  }
}









export const setTheme = () => {
  return {
    type: "TOGGLE_THEME",
  }
}

export const setUserStatus = () => {
  return {
    type: "TOGGLE_USER_STATUS",
  }
}

export const showPro = () => {
  return {
    type: "SET_SHOW_PROFILE",
  }
}

export const authorization = (payload) => {
  return {
    type: "SET_AUTHORIZATION",
    payload
  }
}


export const selectedPosts = (payload) => {
  return {
    type: "SELECTED_POST_DATA",
    payload,
  }
}

export const setUpdPro = () => {
  return {
    type: "SET_UPD_PROFILE",
  }
}