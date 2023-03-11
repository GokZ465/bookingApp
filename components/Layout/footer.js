import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer className="footer-dig">
    <ul className="nav-dig">
      <li className="nav-dig__item">
        <a href="#" className="fab fab-nav nav-dig__link">
          Social Media
        </a>
        <a
          title="Messenger"
          target="_blank"
          rel="noreferrer"
          href="https://www.messenger.com/"
        >
          <i className="fab fab-nav nav-dig__link  fa-facebook-messenger" />
        </a>
        <a
          title="YouTube"
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/"
        >
          <i className="fab fab-nab nav-dig__link fa-youtube" />
        </a>

        <a
          title="Twitter"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/"
        >
          <i className="fab fab-nab  nav-dig__link fa-twitter" />
        </a>
      </li>
      <li className="nav-dig__item">
        <a href="#" className="nav-dig__link">
          PRODUCT OFFERING
        </a>
      </li>
      <li className="nav-dig__item">
        <a href="#" className="nav-dig__link">
          TOP INTERNATIONAL HOTELS
        </a>
      </li>
      <li className="nav-dig__item">
        <a href="#" className="nav-dig__link">
          Contact us
        </a>
      </li>
      <li className="nav-dig__item">
        <a href="#" className="nav-dig__link">
          ABOUT THE SITE
        </a>
      </li>
      <li className="nav-dig__item">
        <a href="#" className="nav-dig__link">
          TOP HOTELS IN INDIA
        </a>
      </li>
    </ul>
    {/* <p className="copyright-dig">
      &copy; Copyright 2017 by Jonas Schmedtmann. Feel free to use this project
      for your own purposes. This does NOT apply if you plan to produce your own
      course or tutorials based on this project.
    </p> */}
  </footer>

  // <footer classNameName="footer">
  //   <div></div>
  //   <div classNameName="row">
  //     <div classNameName="col-1-of-2">
  //       <div classNameName="footer__navigation">
  //         <ul className="footer__list">
  //           <li className="footer__item">
  //             <a href="#" className="footer__link">
  //               Company
  //             </a>
  //           </li>
  //           <li className="footer__item">
  //             <a href="#" className="footer__link">
  //               Contact us
  //             </a>
  //           </li>
  //           <li className="footer__item">
  //             <a href="#" className="footer__link">
  //               Carrers
  //             </a>
  //           </li>
  //           <li className="footer__item">
  //             <a href="#" className="footer__link">
  //               Privacy policy
  //             </a>
  //           </li>
  //           <li className="footer__item">
  //             <a href="#" className="footer__link">
  //               Terms
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //     <div className="col-1-of-2">
  //       <p className="footer__copyright">
  //         Built by{" "}
  //         <a href="#" className="footer__link">
  //           Jonas Schmedtmann
  //         </a>{" "}
  //         for his online course{" "}
  //         <a href="#" className="footer__link">
  //           Advanced CSS and Sass
  //         </a>
  //         . Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use
  //         this webpage for both personal and commercial use, but NOT to claim it
  //         as your own design. A credit to the original author, Jonas
  //         Schmedtmann, is of course highly appreciated!
  //       </p>
  //     </div>
  //   </div>
  // </footer>
  /* <div className="footer-col-2">
      <div>
        <h6>For Guests</h6>
        <Link href="/">Contact Us</Link>
      </div>
      <div>
        <h6>For Businesses</h6>
        <Link href="/">Login</Link>
        <Link href="/">Register</Link>
        <Link href="/">Support</Link>
      </div>
      <div>
        <h6>Follow Us</h6>
        <a
          className="footer__link"
          title="Messenger"
          target="_blank"
          rel="noreferrer"
          href="https://www.messenger.com/"
        >
          Facebook
        </a>
        <a
          className="footer__link"
          title="YouTube"
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/"
        >
          LinkedIn
        </a>
        <a
          className="footer__link"
          title="Twitter"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/"
        >
          Twitter
        </a>
      </div>
    </div>

    <div className="footer-col-3">
      <h6>Newsletter</h6>
      <p>
        Stay up to date on all events and special deals in Bergen by subscribing
        to our newsletter
      </p>
      */
);

export default Footer;
