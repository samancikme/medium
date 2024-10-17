import { authorization, selectedPosts, setTheme, setUserStatus, showPro , setUpdPro } from "../action";

const initialState = {
  theme: localStorage.getItem("medium-theme") === "true",
  showProfile: false,
  selectedPostId: null,
  userStatus: localStorage.getItem('token')?.length > 0 ? true : false || false,
  authorizationType : "sign-up",
  updPro : false,
};

export const pageActions = (state = initialState, action) => {
  switch (action.type) {
    case setTheme().type: {
      const newTheme = !state.theme;
      localStorage.setItem("medium-theme", newTheme);
      return {
        ...state,
        theme: newTheme,
      };
    }
    case showPro().type: {
      return {
        ...state,
        showProfile: !state.showProfile,
      };
    }
    case selectedPosts().type: {
      return {
        ...state,
        selectedPostId: action.payload,
      };
    }
    case authorization().type: {
      return {
        ...state,
        authorizationType: action.payload,
      };
    }
    case setUserStatus().type: {
      return {
        ...state,
        userStatus: !state.userStatus,
      };
    }
    case setUpdPro().type: {
      return {
        ...state,
        updPro: !state.updPro,
      };
    }
    default:
      return state;
  }
};