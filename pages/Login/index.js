import Head from "next/head";
import useAuthContext from "../../firebase/useAuthContext";
import Signup from "./Signup";
import Form from "./Signup";

export default function Login() {
  const { authIsReady, user } = useAuthContext();
  return (
    <>
      {authIsReady && !user && <Signup />}
      {authIsReady && user && (
        <div>
          <h1>You are alrady Signed In </h1>
        </div>
      )}
    </>
  );
}
