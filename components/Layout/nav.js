import React, { useState, useEffect } from "react";
import Link from "next/link";
import useScrollListener from "../constants/ScrollListener";
import useAuthContext from "../../firebase/useAuthContext";
import { useLogout } from "../../firebase/useLogout";
const Nav = () => {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();
  const { authIsReady, user } = useAuthContext();
  const { logout } = useLogout();
  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];
    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("--hide");
    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <>
      <div className={`deals ${navClassList.join(" ")} `}>
        Book now and get 10% off
      </div>

      <nav className={`nav ${navClassList.join(" ")} `}>
        <Link passHref href="/">
          <img
            className="logo"
            src="/logo--white.png"
            alt="directlink to homepage"
          />
        </Link>
        <div className="nav-links-wrapper">
          {
            <span className="name">Login</span>
            /* <Link passHref href="./#search">
            <a className="search-icon">
              <span className="circle" />
              <span className="line" />
              <span className="arrow" />
            </a>
          </Link> */
          }

          {!user && (
            <Link passHref href="/Login">
              <i className="fa-solid fa-user fontawesome-gold" />
            </Link>
          )}
          {user && (
            <a onClick={logout} type="submit">
              <Link passHref href="/Login">
                <i className="fa-solid fa-sign-out fontawesome-gold" />
              </Link>
            </a>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
