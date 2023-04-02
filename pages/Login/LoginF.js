import React, { useState } from "react";
import useAuthContext from "../../firebase/useAuthContext";
import { useLogin } from "../../firebase/useLogin";
export default function LoginF() {
  const { authIsReady, user } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState(false);

  const { isPending, login, error } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("before login()");

    login(email, password);
  };

  return (
    <div className="holder shortHolder">
      <div className="parent">
        <form onSubmit={handleSubmit} action="" className="Signup-form">
          <h3 style={{ color: "rgb(255 99 46)" }}>Log In</h3>
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
          {/* <div>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type="password"
              placeholder="Confirm Password *"
              required
            />
            <span className="border"></span>
          </div> */}
          {!isPending && (
            <input type="submit" value="LOGIN" className="private-inp" />
          )}
          )
          {isPending && (
            <input
              type="submit"
              value="LOADING..."
              className="private-inp"
              disabled
            />
          )}
          {/* (<h3>{string}</h3>) */}
          {/* <p>
            Have Account?
            <a href="#">Login Here</a>
          </p> */}
          {error && <h4>{error}</h4>}
        </form>
        {/* <h4>Or Register With</h4> */}
      </div>
    </div>
  );
}
