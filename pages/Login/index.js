import Head from "next/head";
import Link from "next/link";
import useAuthContext from "../../firebase/useAuthContext";
import Signup from "./Signup";
import Form from "./Signup";

export default function Login() {
  const { authIsReady, user } = useAuthContext();
  return (
    <>
      {authIsReady && !user && <Signup />}
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
