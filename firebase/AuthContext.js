import { createContext, useEffect, useReducer } from "react";

import { projectAuth } from "./config";

export const AuthContext = createContext(null);

export const authReducer = (state, action) => {
  console.log(state);
  // this is the dispatch function
  // we are using only login and logout
  // auth reducer takes 2 inputs from useSIgnup
  // inputs are name of the case (LOGIN) and userID(res)
  switch (action.type) {
    case "LOGIN": {
      console.log(1466);
      return { ...state, user: action.payload };
    }

    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsub();
    });
  }, []);
  console.log("AUTH_context state :", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
