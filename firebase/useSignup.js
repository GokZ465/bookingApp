import { useRouter, withRouter } from "next/router";
import { useEffect, useState } from "react";

import { projectAuth } from "./config";
import useAuthContext from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const router = useRouter();
  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        router.push(
          {
            pathname: "/",
          },
          "/"
        );
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
      }
      //   if (!isPending && isCancelled) {
      //     router.push(
      //       {
      //         pathname: "/",
      //       },
      //       "/"
      //     );
      //   }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { signup, error, isPending };
};
