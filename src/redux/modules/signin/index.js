const initialState = {
  token: undefined,
  user: {},

  fetching: false,
  creating: false,
  deleting: false,
  success: false,
  error: false,
  errorMessage: "",
};

const CREATE_TOKEN = "modules/signin/CREATE_TOKEN";
const GET_INFO_USER = "modules/signin/GET_INFO_USER";

// Reducers
export default function reducer(state = initialState, action = {}) {
  console.log("state - REDUCER", state);
  console.log("action - REDUCER", action);
  switch (action.type) {
    case CREATE_TOKEN:
      return { ...state, token: action?.payload?.token };
    case GET_INFO_USER:
      return { ...state, user: action?.payload };
    default:
      return state;
  }
}

// Action Creators
export const createToken = (payload) => {
  // console.log("payload - ACTION CREATOR - createToken", payload);
  return {
    type: CREATE_TOKEN,
    payload,
  };
};

export const getInfoUser = (payload) => {
  // console.log("payload - ACTION CREATOR - getInfoUser", payload);
  return {
    type: GET_INFO_USER,
    payload,
  };
};

export const createTokenThunk = (values, navigate) => async (dispatch) => {
  // console.log("values - createTokenThunk", values);
  try {
    const url = "https://mapi.paycode.com.mx/api/challenge/login";

    const request = await fetch(url, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log("request", request);
    const result = await request.json();
    // console.log("result", result);
    await dispatch(createToken(result));
  } catch (error) {
    console.log(error);
  }
};

export const getInfoUserThunk = (values, navigate) => async (dispatch) => {
  // console.log("values - getInfoUserThunk", values);
  try {
    const url = "https://mapi.paycode.com.mx/api/challenge/me";

    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${values}`,
      },
    });
    // console.log("request", request);
    const result = await request.json();
    // console.log("result", result);
    await dispatch(getInfoUser(result));
  } catch (error) {
    console.log(error);
  }
};
