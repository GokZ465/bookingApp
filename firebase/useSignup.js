import { useEffect, useState } from "react";

import { projectAuth } from "../firebase/config";
//import useAuthContext from "./useAuthContext";
// eslint-disable-next-line import/prefer-default-export
export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  // const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(isPending);
      console.log(res.user);
      // we are calling a dispatch function names
      // LOGIN but this page is Signup
      // dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        throw new Error("could not complete signup");
      }

      await res.user.updateProfile({ displayName });
      console.log(displayName);

      setIsPending(false);
      setError(null);
      console.log(isPending);
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
        console.log(isPending);
      }
    }
  };
  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { signup, error, isPending };
};
