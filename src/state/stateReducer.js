const getLocalToken = () => {
   return JSON.parse(localStorage.getItem("tokenData")) ? true : false;
};

export const initialState = {
   tokenData: getLocalToken() ? JSON.parse(localStorage.getItem("tokenData")) : null,
   isAuthenticated: getLocalToken()
};

export const stateReducer = (state, action) => {
   switch (action.type) {
      case "LOGIN_SUCCESS":
         localStorage.setItem("tokenData", JSON.stringify(action.payload));
         return {
            ...state,
            tokenData: action.payload,
            isAuthenticated: true
         };
      case "LOGOUT":
         return {
            ...state,
            isAuthenticated: false
         };

      default:
         return state;
   }
};
