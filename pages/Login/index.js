import Head from "next/head";
import Link from "next/link";
import useAuthContext from "../../firebase/useAuthContext";
import Signup from "./Signup";
import Form from "./Signup";
import LoginF from "./LoginF";
import { useState } from "react";
export default function Login() {
  const [form, setForm] = useState(false);
  const { authIsReady, user } = useAuthContext();

  const func = () => {
    setForm(!form);
  };
  return (
    <>
      {authIsReady && !user && !form && (
        <>
          <LoginF />
          <h3 class="leftdoyou">
            Dont have an account?
            <a onClick={() => func()}> Register now</a>
          </h3>
        </>
      )}
      {authIsReady && !user && form && (
        <>
          <Signup />
          <h3 class="leftdoyou">
            Already have an account?
            <a onClick={() => func()}> Login now</a>
          </h3>
        </>
      )}
      {authIsReady && user && (
        <div className="noticeSign">
          <h1>
            You are already Signed In....go <Link href="/">home</Link>{" "}
          </h1>
        </div>
      )}
    </>
  );
}
