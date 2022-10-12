const initialState = {
  token: undefined,

  fetching: false,
  creating: false,
  deleting: false,
  success: false,
  error: false,
  errorMessage: "",
};

const CREATE_TOKEN = "modules/signin/CREATE_TOKEN";

// Reducers
export default function reducer(state = initialState, action = {}) {
  console.log("state - REDUCER", state);
  console.log("action - REDUCER", action);
  switch (action.type) {
    case CREATE_TOKEN:
      return { ...state, token: action?.payload?.token };
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

export const createTokenThunk = (values, navigate) => async (dispatch) => {
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
