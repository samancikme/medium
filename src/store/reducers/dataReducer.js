import {
  fetchedAuthData,
  fetchedPostData,
  fetchedProfileData,
  fetchingAuthData,
  fetchingPostData,
  fetchingProfileData,
} from "../action";

const initialState = {
  posts: [],
  authors: [],
  profile: [],
  isPostLoaded: true,
  isAuthorLoaded: true,
  isProfileLoaded: true,
  isPostErr: null,
  isAuthErr: null,
  isProErr: null,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchingAuthData().type: {
      return {
        ...state,
        isAuthorLoaded: true,
      };
    }
    case fetchedAuthData().type: {
      return {
        ...state,
        isAuthorLoaded: false,
        authors: action.payload,
      };
    }
    case fetchingPostData().type: {
      return {
        ...state,
        isPostLoaded: true,
      };
    }
    case fetchedPostData().type: {
      return {
        ...state,
        isPostLoaded: false,
        posts: action.payload,
      };
    }
    case fetchingProfileData().type: {
      return {
        ...state,
        isProfileLoaded: true,
      };
    }
    case fetchedProfileData().type: {
      return {
        ...state,
        isProfileLoaded: false,
        profile: action.payload,
      };
    }
    default:
      return state;
  }
};
