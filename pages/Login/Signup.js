import { useState } from "react";
import { useSignup } from "../../firebase/useSignup";
//import styles from "./Signup.module.scss";
import { useRouter, withRouter } from "next/router";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    // console.log(email, password, displayName);
    signup(email, password, displayName);
    // router.push(
    //   {
    //     pathname: "/",
    //   },
    //   "/"
    // );
  };

  return (
    <div className="holder">
      <div className="parent">
        <form onSubmit={handleSubmit} action="" className="Signup-form">
          <h3 style={{ color: "#BEAE6F" }}>Sign Up</h3>
          <div>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name *"
              required
              value={firstName}
            />
            <span className="border"></span>
          </div>
          <div>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name *"
              required
              value={lastName}
            />
            <span className="border"></span>
          </div>
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email *"
              value={email}
              required
            />
            <span className="border"></span>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password *"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <span className="border"></span>
          </div>
          <div>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type="password"
              placeholder="Confirm Password *"
              required
            />
            <span className="border"></span>
          </div>
          <input type="submit" value="LOGIN" className="private-inp" />
          {/* <p>
            Have Account?
            <a href="#">Login Here</a>
          </p> */}
        </form>
        {/* <h4>Or Register With</h4> */}
      </div>
    </div>
  );
}
